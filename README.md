# NeuroVerse AI ML Learning Hub

A local, full-stack learning platform and a product of NeuroVerse Research Lab
(Neural and Universal Intelligence Research Laboratory). Its research course
follows the 14 parts of *The AI Researcher's Handbook, Second Edition*.

It also includes a separate 14-week **Python, Data Science & Machine Learning**
course based on the supplied course outline and draft. Choose either course
from the sidebar; each has its own lessons, diagrams, exercises, quizzes, and
completion progress.

## Start locally

Python 3.10 or later is required. The server uses only Python's standard
library; it does not require package installation.

```bash
cd academy
python3 server.py
```

Open <http://127.0.0.1:4173/>. Use **Sign in → Create an account** to save
learning progress to the local SQLite database. The first account requires a
name, valid email address, and password of at least 10 characters.

Set `ACADEMY_PORT` to use another port. Set `ACADEMY_DB_PATH` to choose a
different SQLite file. The default database is `academy/data/academy.sqlite3`.
Keep that file private: it contains account email addresses and password
verifiers. Back it up to preserve local account and progress data.

## Learning features

- NeuroVerse Lab identity, mission, vision, and About panel
- All 14 handbook parts with chapter-aligned lesson text
- Separate 14-week beginner-to-ML course: Python, data handling, EDA, supervised and unsupervised learning, evaluation, neural networks, CNNs, sequence models, and a capstone
- A custom accessible visual diagram for every lesson
- Practitioner and Frontier Researcher reading pathways
- Search across lesson titles and lesson text
- Worked examples and editable Python exercises for every part
- In-browser exercise checking with Pyodide; execution stays in a browser worker
- Part II model visualizer that trains logistic regression, a decision tree, RBF SVM, KNN, Gaussian Naive Bayes, random forest, and gradient-boosted trees on reproducible toy datasets, with learned regions and held-out accuracy
- A graded knowledge check per part
- Previous/next lesson navigation and completion tracking
- Guest progress in this browser, or account progress stored in SQLite
- Password-hashed accounts and expiring, HTTP-only sessions
- Study Library with a searchable glossary and formula reference
- Four guided project workbooks, including small practice datasets and self-review rubrics
- Research Toolkit with a seven-day study plan, paper outline, reproducibility checklist, and mini dataset
- Research Studio for an eight-step project plan, saved in browser storage and exportable as Markdown

The Study Library is available from the sidebar. Research Studio drafts stay in
the current browser and are not synced to an account or sent to the server.
Export important work using **Download research plan**.

Course completion is stored separately for the handbook and the 14-week
beginner course. The beginner course's browser exercises favor small,
standard-library Python demonstrations so they run without extra setup;
framework-scale TensorFlow/PyTorch training is not performed in the browser.

The first Python run downloads the Pyodide runtime from jsDelivr, so an internet
connection is needed for code exercises. The application server never receives
exercise source code.
The interactive model visualizer is implemented in JavaScript for quick,
setup-free demonstrations; its small synthetic datasets and simplified
ensemble implementations are teaching examples, not substitutes for the
handbook's scikit-learn/XGBoost experiments or evidence for real-world use.

## Scope and deployment

This is a functional local learning platform, not a production deployment.
Accounts and course progress are stored on this machine; email verification,
password reset, admin/content-authoring tools, payments, certificates, hosted
cohorts, and cross-device deployment are not included. The bundled lesson text
is a concise learning companion, not a reproduction of the complete handbook.

The local server binds to `127.0.0.1` by default and is not configured for
public internet exposure. Before deploying, use HTTPS, a production web server,
rate limiting, verified email/password recovery, backups, operational
monitoring, and a separately isolated code-execution service. Browser-based
Python is intended for small educational examples, not untrusted production
workloads or GPU training.
