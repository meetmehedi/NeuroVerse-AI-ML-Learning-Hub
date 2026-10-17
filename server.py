#!/usr/bin/env python3
"""Local full-stack server for NeuroVerse AI ML Learning Hub."""

from __future__ import annotations

import hashlib
import hmac
import json
import mimetypes
import os
import re
import secrets
import sqlite3
import time
from http import HTTPStatus
from http.cookies import CookieError, SimpleCookie
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import parse_qs, unquote, urlsplit


ROOT = Path(__file__).resolve().parent
DB_PATH = Path(os.environ.get("ACADEMY_DB_PATH", ROOT / "data" / "academy.sqlite3"))
SESSION_COOKIE = "academy_session"
SESSION_TTL_SECONDS = 60 * 60 * 24 * 30
PASSWORD_ITERATIONS = 600_000
MAX_BODY_BYTES = 64 * 1024
EMAIL_PATTERN = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")


def connect_db() -> sqlite3.Connection:
    DB_PATH.parent.mkdir(parents=True, exist_ok=True)
    connection = sqlite3.connect(DB_PATH, timeout=10)
    connection.row_factory = sqlite3.Row
    connection.execute("PRAGMA foreign_keys = ON")
    connection.execute("PRAGMA journal_mode = WAL")
    return connection


def initialize_db() -> None:
    with connect_db() as connection:
        connection.executescript(
            """
            CREATE TABLE IF NOT EXISTS users (
                id INTEGER PRIMARY KEY,
                name TEXT NOT NULL,
                email TEXT NOT NULL UNIQUE COLLATE NOCASE,
                password_salt BLOB NOT NULL,
                password_hash BLOB NOT NULL,
                created_at INTEGER NOT NULL
            );
            CREATE TABLE IF NOT EXISTS sessions (
                token_hash BLOB PRIMARY KEY,
                user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
                csrf_token TEXT NOT NULL,
                expires_at INTEGER NOT NULL,
                created_at INTEGER NOT NULL
            );
            CREATE INDEX IF NOT EXISTS sessions_user_id_idx ON sessions(user_id);
            CREATE TABLE IF NOT EXISTS progress (
                user_id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
                track TEXT NOT NULL DEFAULT 'practitioner',
                completed_json TEXT NOT NULL DEFAULT '[]',
                updated_at INTEGER NOT NULL
            );
            CREATE TABLE IF NOT EXISTS course_progress (
                user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
                course_id TEXT NOT NULL,
                completed_json TEXT NOT NULL DEFAULT '[]',
                updated_at INTEGER NOT NULL,
                PRIMARY KEY (user_id, course_id)
            );
            """
        )


def password_digest(password: str, salt: bytes) -> bytes:
    return hashlib.pbkdf2_hmac(
        "sha256", password.encode("utf-8"), salt, PASSWORD_ITERATIONS
    )


def session_digest(token: str) -> bytes:
    return hashlib.sha256(token.encode("utf-8")).digest()


def safe_user(row: sqlite3.Row) -> dict[str, object]:
    return {"id": row["id"], "name": row["name"], "email": row["email"]}


class AcademyHandler(BaseHTTPRequestHandler):
    server_version = "AcademyLocal/1.0"

    def log_message(self, format_string: str, *args: object) -> None:
        print(f"{self.log_date_time_string()} {self.address_string()} {format_string % args}")

    def end_headers(self) -> None:
        self.send_header("X-Content-Type-Options", "nosniff")
        self.send_header("Referrer-Policy", "strict-origin-when-cross-origin")
        self.send_header(
            "Content-Security-Policy",
            "default-src 'self'; "
            "script-src 'self' blob: https://cdn.jsdelivr.net 'wasm-unsafe-eval'; "
            "style-src 'self' https://fonts.googleapis.com; "
            "font-src 'self' https://fonts.gstatic.com; "
            "connect-src 'self' https://cdn.jsdelivr.net; "
            "worker-src 'self' blob:; img-src 'self' data:; "
            "object-src 'none'; base-uri 'self'; frame-ancestors 'none'",
        )
        super().end_headers()

    def do_GET(self) -> None:
        path = urlsplit(self.path).path
        if path == "/api/health":
            self.send_json(HTTPStatus.OK, {"status": "ok"})
        elif path == "/api/course":
            course_id = parse_qs(urlsplit(self.path).query).get("course", ["handbook"])[0]
            self.send_course(course_id)
        elif path == "/api/library":
            self.send_library()
        elif path == "/api/auth/me":
            self.send_current_user()
        elif path == "/api/progress":
            self.send_progress()
        else:
            self.serve_static(path)

    def do_HEAD(self) -> None:
        path = urlsplit(self.path).path
        file_path = self.static_path(path)
        if file_path is None or not file_path.is_file():
            self.send_error(HTTPStatus.NOT_FOUND)
            return
        self.send_response(HTTPStatus.OK)
        self.send_header("Content-Type", mimetypes.guess_type(file_path.name)[0] or "application/octet-stream")
        self.send_header("Content-Length", str(file_path.stat().st_size))
        self.end_headers()

    def do_POST(self) -> None:
        path = urlsplit(self.path).path
        if path not in {"/api/auth/register", "/api/auth/login", "/api/auth/logout"}:
            self.send_json(HTTPStatus.NOT_FOUND, {"error": "Not found."})
            return
        if not self.check_same_origin():
            self.send_json(HTTPStatus.FORBIDDEN, {"error": "Request origin was not accepted."})
            return
        if path == "/api/auth/register":
            self.register()
        elif path == "/api/auth/login":
            self.login()
        else:
            self.logout()

    def do_PUT(self) -> None:
        if urlsplit(self.path).path != "/api/progress":
            self.send_json(HTTPStatus.NOT_FOUND, {"error": "Not found."})
            return
        if not self.check_same_origin():
            self.send_json(HTTPStatus.FORBIDDEN, {"error": "Request origin was not accepted."})
            return
        session = self.require_session(csrf=True)
        if session is None:
            return
        try:
            body = self.read_json_body()
            course_id = body.get("course", "handbook")
            track = body.get("track")
            completed = body.get("completed")
            if not isinstance(course_id, str) or course_id not in {"handbook", "beginner"}:
                raise ValueError("Choose a supported course.")
            valid_tracks = {"practitioner", "frontier"} if course_id == "handbook" else {"all-weeks"}
            if not isinstance(track, str) or track not in valid_tracks:
                raise ValueError("Choose a supported learning pathway.")
            if not isinstance(completed, list) or any(
                type(index) is not int or not 0 <= index < 14 for index in completed
            ):
                raise ValueError("Completed lessons must be a list of valid part numbers.")
        except (ValueError, json.JSONDecodeError) as error:
            self.send_json(HTTPStatus.BAD_REQUEST, {"error": str(error)})
            return

        completed = sorted(set(completed))
        with connect_db() as connection:
            if course_id == "handbook":
                connection.execute(
                    """
                    INSERT INTO progress (user_id, track, completed_json, updated_at)
                    VALUES (?, ?, ?, ?)
                    ON CONFLICT(user_id) DO UPDATE SET
                        track = excluded.track,
                        completed_json = excluded.completed_json,
                        updated_at = excluded.updated_at
                    """,
                    (session["id"], track, json.dumps(completed), int(time.time())),
                )
            else:
                connection.execute(
                    """
                    INSERT INTO course_progress (user_id, course_id, completed_json, updated_at)
                    VALUES (?, ?, ?, ?)
                    ON CONFLICT(user_id, course_id) DO UPDATE SET
                        completed_json = excluded.completed_json,
                        updated_at = excluded.updated_at
                    """,
                    (session["id"], course_id, json.dumps(completed), int(time.time())),
                )
        self.send_json(HTTPStatus.OK, {"track": track, "completed": completed})

    def register(self) -> None:
        try:
            body = self.read_json_body()
            name = body.get("name")
            email = body.get("email")
            password = body.get("password")
            if not isinstance(name, str) or not name.strip() or len(name.strip()) > 80:
                raise ValueError("Enter a name of 1–80 characters.")
            if not isinstance(email, str) or len(email) > 254 or not EMAIL_PATTERN.fullmatch(email.strip()):
                raise ValueError("Enter a valid email address.")
            if not isinstance(password, str) or len(password) < 10 or len(password) > 256:
                raise ValueError("Password must be between 10 and 256 characters.")
        except (ValueError, json.JSONDecodeError) as error:
            self.send_json(HTTPStatus.BAD_REQUEST, {"error": str(error)})
            return

        salt = secrets.token_bytes(16)
        digest = password_digest(password, salt)
        try:
            with connect_db() as connection:
                cursor = connection.execute(
                    "INSERT INTO users (name, email, password_salt, password_hash, created_at) VALUES (?, ?, ?, ?, ?)",
                    (name.strip(), email.strip().lower(), salt, digest, int(time.time())),
                )
                user_id = cursor.lastrowid
                connection.execute(
                    "INSERT INTO progress (user_id, updated_at) VALUES (?, ?)",
                    (user_id, int(time.time())),
                )
                user = connection.execute("SELECT * FROM users WHERE id = ?", (user_id,)).fetchone()
        except sqlite3.IntegrityError:
            self.send_json(HTTPStatus.CONFLICT, {"error": "An account with that email already exists."})
            return

        self.create_session(user)

    def login(self) -> None:
        try:
            body = self.read_json_body()
            email = body.get("email")
            password = body.get("password")
            if not isinstance(email, str) or not isinstance(password, str):
                raise ValueError("Enter your email and password.")
        except (ValueError, json.JSONDecodeError) as error:
            self.send_json(HTTPStatus.BAD_REQUEST, {"error": str(error)})
            return

        with connect_db() as connection:
            user = connection.execute(
                "SELECT * FROM users WHERE email = ? COLLATE NOCASE", (email.strip(),)
            ).fetchone()
        if user is None or not hmac.compare_digest(
            password_digest(password, user["password_salt"]), user["password_hash"]
        ):
            self.send_json(HTTPStatus.UNAUTHORIZED, {"error": "Email or password is incorrect."})
            return
        self.create_session(user)

    def logout(self) -> None:
        session = self.require_session(csrf=True)
        if session is None:
            return
        with connect_db() as connection:
            connection.execute("DELETE FROM sessions WHERE token_hash = ?", (session["token_hash"],))
        self.send_json(
            HTTPStatus.OK,
            {"ok": True},
            headers={"Set-Cookie": self.session_cookie("", max_age=0)},
        )

    def create_session(self, user: sqlite3.Row) -> None:
        now = int(time.time())
        token = secrets.token_urlsafe(32)
        csrf_token = secrets.token_urlsafe(32)
        token_hash = session_digest(token)
        with connect_db() as connection:
            connection.execute("DELETE FROM sessions WHERE expires_at < ?", (now,))
            connection.execute(
                "INSERT INTO sessions (token_hash, user_id, csrf_token, expires_at, created_at) VALUES (?, ?, ?, ?, ?)",
                (token_hash, user["id"], csrf_token, now + SESSION_TTL_SECONDS, now),
            )
        self.send_json(
            HTTPStatus.CREATED,
            {"user": safe_user(user), "csrfToken": csrf_token},
            headers={"Set-Cookie": self.session_cookie(token)},
        )

    def send_current_user(self) -> None:
        session = self.find_session()
        if session is None:
            self.send_json(HTTPStatus.OK, {"user": None})
            return
        self.send_json(
            HTTPStatus.OK,
            {"user": safe_user(session), "csrfToken": session["csrf_token"]},
        )

    def send_progress(self) -> None:
        course_id = parse_qs(urlsplit(self.path).query).get("course", ["handbook"])[0]
        if course_id not in {"handbook", "beginner"}:
            self.send_json(HTTPStatus.BAD_REQUEST, {"error": "Choose a supported course."})
            return
        session = self.require_session()
        if session is None:
            return
        with connect_db() as connection:
            if course_id == "handbook":
                row = connection.execute(
                    "SELECT track, completed_json FROM progress WHERE user_id = ?",
                    (session["id"],),
                ).fetchone()
            else:
                row = connection.execute(
                    "SELECT completed_json FROM course_progress WHERE user_id = ? AND course_id = ?",
                    (session["id"], course_id),
                ).fetchone()
        if row is None:
            empty_track = "practitioner" if course_id == "handbook" else "all-weeks"
            self.send_json(HTTPStatus.OK, {"track": empty_track, "completed": []})
            return
        track = row["track"] if course_id == "handbook" else "all-weeks"
        self.send_json(
            HTTPStatus.OK,
            {"track": track, "completed": json.loads(row["completed_json"])},
        )

    def send_course(self, course_id: str) -> None:
        course_files = {"handbook": "course.json", "beginner": "beginner_course.json"}
        course_file = course_files.get(course_id)
        if course_file is None:
            self.send_json(HTTPStatus.BAD_REQUEST, {"error": "Choose a supported course."})
            return
        course_path = ROOT / course_file
        self.send_file(course_path, "application/json; charset=utf-8")

    def send_library(self) -> None:
        self.send_file(ROOT / "library.json", "application/json; charset=utf-8")

    def find_session(self) -> sqlite3.Row | None:
        cookie_header = self.headers.get("Cookie", "")
        cookie = SimpleCookie()
        try:
            cookie.load(cookie_header)
        except CookieError:
            return None
        morsel = cookie.get(SESSION_COOKIE)
        if morsel is None or not morsel.value:
            return None
        with connect_db() as connection:
            row = connection.execute(
                """
                SELECT u.id, u.name, u.email, s.csrf_token, s.token_hash
                FROM sessions s
                JOIN users u ON u.id = s.user_id
                WHERE s.token_hash = ? AND s.expires_at > ?
                """,
                (session_digest(morsel.value), int(time.time())),
            ).fetchone()
        return row

    def require_session(self, csrf: bool = False) -> sqlite3.Row | None:
        session = self.find_session()
        if session is None:
            self.send_json(HTTPStatus.UNAUTHORIZED, {"error": "Sign in to continue."})
            return None
        if csrf and not hmac.compare_digest(
            self.headers.get("X-CSRF-Token", ""), session["csrf_token"]
        ):
            self.send_json(HTTPStatus.FORBIDDEN, {"error": "Refresh the page and try again."})
            return None
        return session

    def check_same_origin(self) -> bool:
        origin = self.headers.get("Origin")
        if origin is None:
            return True
        configured_origin = os.environ.get("ACADEMY_ORIGIN")
        expected = configured_origin or f"http://{self.headers.get('Host', '')}"
        return hmac.compare_digest(origin.rstrip("/"), expected.rstrip("/"))

    def read_json_body(self) -> dict[str, object]:
        if self.headers.get_content_type() != "application/json":
            raise ValueError("Request must use application/json.")
        length_header = self.headers.get("Content-Length", "0")
        try:
            length = int(length_header)
        except ValueError as error:
            raise ValueError("Invalid request length.") from error
        if length < 0 or length > MAX_BODY_BYTES:
            raise ValueError("Request body is too large.")
        data = self.rfile.read(length)
        value = json.loads(data)
        if not isinstance(value, dict):
            raise ValueError("Request body must be a JSON object.")
        return value

    def session_cookie(self, value: str, max_age: int = SESSION_TTL_SECONDS) -> str:
        secure = "; Secure" if os.environ.get("ACADEMY_COOKIE_SECURE") == "1" else ""
        return (
            f"{SESSION_COOKIE}={value}; Path=/; HttpOnly; SameSite=Lax; "
            f"Max-Age={max_age}{secure}"
        )

    def static_path(self, request_path: str) -> Path | None:
        relative = "index.html" if request_path == "/" else unquote(request_path).lstrip("/")
        target = (ROOT / relative).resolve()
        if target != ROOT and ROOT not in target.parents:
            return None
        return target

    def serve_static(self, request_path: str) -> None:
        target = self.static_path(request_path)
        if target is None or not target.is_file():
            self.send_error(HTTPStatus.NOT_FOUND)
            return
        self.send_file(target, mimetypes.guess_type(target.name)[0] or "application/octet-stream")

    def send_file(self, path: Path, content_type: str) -> None:
        try:
            data = path.read_bytes()
        except OSError:
            self.send_json(HTTPStatus.INTERNAL_SERVER_ERROR, {"error": "Could not read application file."})
            return
        self.send_response(HTTPStatus.OK)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def send_json(
        self,
        status: HTTPStatus,
        payload: dict[str, object],
        headers: dict[str, str] | None = None,
    ) -> None:
        data = json.dumps(payload, separators=(",", ":")).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Cache-Control", "no-store")
        self.send_header("Content-Length", str(len(data)))
        for name, value in (headers or {}).items():
            self.send_header(name, value)
        self.end_headers()
        self.wfile.write(data)


def main() -> None:
    initialize_db()
    host = os.environ.get("ACADEMY_HOST", "127.0.0.1")
    port = int(os.environ.get("ACADEMY_PORT", "4173"))
    server = ThreadingHTTPServer((host, port), AcademyHandler)
    print(f"NeuroVerse AI ML Learning Hub is running at http://{host}:{port}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping NeuroVerse AI ML Learning Hub.")
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
