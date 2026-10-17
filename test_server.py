import http.client
import json
import tempfile
import threading
import unittest
from http.server import ThreadingHTTPServer
from http.cookies import SimpleCookie
from pathlib import Path

import server


class AcademyApiTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        cls.temp_dir = tempfile.TemporaryDirectory()
        server.DB_PATH = Path(cls.temp_dir.name) / "academy-test.sqlite3"
        server.initialize_db()
        cls.httpd = ThreadingHTTPServer(("127.0.0.1", 0), server.AcademyHandler)
        cls.thread = threading.Thread(target=cls.httpd.serve_forever, daemon=True)
        cls.thread.start()
        cls.port = cls.httpd.server_address[1]

    @classmethod
    def tearDownClass(cls):
        cls.httpd.shutdown()
        cls.httpd.server_close()
        cls.thread.join(timeout=2)
        cls.temp_dir.cleanup()

    def setUp(self):
        self.cookie = ""
        self.csrf_token = ""
        self.email = f"student-{id(self)}@example.test"

    def request(self, method, path, body=None, csrf=False):
        connection = http.client.HTTPConnection("127.0.0.1", self.port, timeout=5)
        headers = {}
        if body is not None:
            headers["Content-Type"] = "application/json"
        if self.cookie:
            headers["Cookie"] = self.cookie
        if method in {"POST", "PUT"}:
            headers["Origin"] = f"http://127.0.0.1:{self.port}"
        if csrf:
            headers["X-CSRF-Token"] = self.csrf_token
        encoded = None if body is None else json.dumps(body)
        connection.request(method, path, body=encoded, headers=headers)
        response = connection.getresponse()
        payload = response.read()
        if response.getheader("Set-Cookie"):
            cookie = SimpleCookie()
            cookie.load(response.getheader("Set-Cookie"))
            morsel = cookie.get(server.SESSION_COOKIE)
            self.cookie = f"{server.SESSION_COOKIE}={morsel.value}" if morsel else ""
        result = json.loads(payload) if response.getheader("Content-Type", "").startswith("application/json") else None
        connection.close()
        return response.status, result, response.getheaders()

    def register(self):
        return self.request(
            "POST",
            "/api/auth/register",
            {"name": "Research Learner", "email": self.email, "password": "correct-horse-42"},
        )

    def test_course_api_serves_all_interactive_parts(self):
        status, course, _ = self.request("GET", "/api/course")
        self.assertEqual(status, 200)
        self.assertEqual(len(course["parts"]), 14)
        self.assertTrue(all(part["sections"] and part["exercise"]["tests"] and part["quiz"] for part in course["parts"]))

    def test_beginner_course_api_serves_all_14_weeks(self):
        status, course, _ = self.request("GET", "/api/course?course=beginner")
        self.assertEqual(status, 200)
        self.assertEqual(course["title"], "Python, Data Science & Machine Learning")
        self.assertEqual(len(course["parts"]), 14)
        self.assertTrue(all(part["visual"] and part["example"]["code"] for part in course["parts"]))

    def test_pydsml_course_api_serves_all_14_weeks(self):
        status, course, _ = self.request("GET", "/api/course?course=pydsml")
        self.assertEqual(status, 200)
        self.assertEqual(course["title"], "DIU CPC PyDSML Track")
        self.assertEqual(len(course["parts"]), 14)
        self.assertTrue(all(part["sections"] and part["exercise"]["tests"] and part["quiz"] for part in course["parts"]))

    def test_library_api_has_built_in_glossary_projects_and_toolkit(self):
        status, library, _ = self.request("GET", "/api/library")
        self.assertEqual(status, 200)
        self.assertGreaterEqual(len(library["glossary"]), 35)
        self.assertGreaterEqual(len(library["formulas"]), 10)
        self.assertEqual(len(library["projects"]), 4)
        self.assertEqual(len(library["toolkit"]["studyPlan"]), 7)
        self.assertGreaterEqual(len(library["toolkit"]["submissionChecklist"]), 8)

    def test_registration_login_and_account_scoped_progress(self):
        status, created, headers = self.register()
        self.assertEqual(status, 201)
        self.assertEqual(created["user"]["email"], self.email)
        self.assertNotIn("password", created["user"])
        cookie_header = next(value for name, value in headers if name.lower() == "set-cookie")
        self.assertIn("HttpOnly", cookie_header)
        self.csrf_token = created["csrfToken"]

        status, _, _ = self.request(
            "PUT", "/api/progress", {"track": "frontier", "completed": [1, 12]}
        )
        self.assertEqual(status, 403)
        status, saved, _ = self.request(
            "PUT",
            "/api/progress",
            {"track": "frontier", "completed": [12, 1, 1]},
            csrf=True,
        )
        self.assertEqual(status, 200)
        self.assertEqual(saved, {"track": "frontier", "completed": [1, 12]})

        status, progress, _ = self.request("GET", "/api/progress")
        self.assertEqual(status, 200)
        self.assertEqual(progress, {"track": "frontier", "completed": [1, 12]})

        status, beginner_progress, _ = self.request(
            "PUT",
            "/api/progress",
            {"course": "beginner", "track": "all-weeks", "completed": [13, 0]},
            csrf=True,
        )
        self.assertEqual(status, 200)
        self.assertEqual(beginner_progress, {"track": "all-weeks", "completed": [0, 13]})
        status, beginner_progress, _ = self.request("GET", "/api/progress?course=beginner")
        self.assertEqual(status, 200)
        self.assertEqual(beginner_progress, {"track": "all-weeks", "completed": [0, 13]})
        status, handbook_progress, _ = self.request("GET", "/api/progress?course=handbook")
        self.assertEqual(status, 200)
        self.assertEqual(handbook_progress, {"track": "frontier", "completed": [1, 12]})

        status, _, _ = self.request("POST", "/api/auth/logout", {}, csrf=True)
        self.assertEqual(status, 200)
        self.csrf_token = ""
        status, current, _ = self.request("GET", "/api/auth/me")
        self.assertEqual(status, 200)
        self.assertIsNone(current["user"])

        status, logged_in, _ = self.request(
            "POST",
            "/api/auth/login",
            {"email": self.email, "password": "correct-horse-42"},
        )
        self.assertEqual(status, 201)
        self.csrf_token = logged_in["csrfToken"]
        status, progress, _ = self.request("GET", "/api/progress")
        self.assertEqual(status, 200)
        self.assertEqual(progress["completed"], [1, 12])

    def test_rejects_invalid_registration_and_progress(self):
        status, error, _ = self.request(
            "POST",
            "/api/auth/register",
            {"name": "Student", "email": "not-an-email", "password": "short"},
        )
        self.assertEqual(status, 400)
        self.assertIn("valid email", error["error"])

        status, created, _ = self.register()
        self.assertEqual(status, 201)
        self.csrf_token = created["csrfToken"]
        status, error, _ = self.request(
            "PUT", "/api/progress", {"track": "practitioner", "completed": [14]}, csrf=True
        )
        self.assertEqual(status, 400)
        self.assertIn("valid part numbers", error["error"])

    def test_duplicate_email_is_rejected(self):
        status, _, _ = self.register()
        self.assertEqual(status, 201)
        self.cookie = ""
        status, error, _ = self.register()
        self.assertEqual(status, 409)
        self.assertIn("already exists", error["error"])


if __name__ == "__main__":
    unittest.main()
