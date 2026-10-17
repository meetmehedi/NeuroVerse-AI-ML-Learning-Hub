const pathways = {
  practitioner: { label: "Practitioner Pathway", parts: ["I", "II", "X", "IV", "VI", "XIII", "XIV"] },
  frontier: { label: "Frontier Researcher Pathway", parts: ["II", "X", "III", "VII", "VIII", "XII", "XIII", "XIV"] }
};
const lessonDiagrams = [
  {
    title: "How the AI landscape fits together",
    caption: "A CONCEPT MAP · BROADER AREAS CONTAIN MORE SPECIFIC METHODS",
    type: "layers",
    nodes: [
      { label: "ARTIFICIAL INTELLIGENCE", detail: "Systems that perform intelligent tasks", level: 0 },
      { label: "MACHINE LEARNING", detail: "Learn patterns from examples", level: 1 },
      { label: "DEEP LEARNING", detail: "Learn with neural networks", level: 2 },
      { label: "LLMs & GENERATIVE AI", detail: "Generate and work with content", level: 3 },
      { label: "AI AGENTS", detail: "Use tools to pursue goals", level: 3 }
    ]
  },
  {
    title: "A fair model comparison",
    caption: "SAME SPLIT · FIT ON TRAIN · TUNE ON VALIDATION · TEST ONCE",
    nodes: [
      { label: "Labeled data", detail: "One dataset, one protocol" },
      { label: "Train split", detail: "Fit models and transforms" },
      { label: "Validation", detail: "Choose model settings" },
      { label: "Held-out test", detail: "Final unbiased estimate" }
    ]
  },
  {
    title: "From model decision to explanation",
    caption: "EXPLANATIONS DESCRIBE MODEL BEHAVIOR — NOT CAUSALITY",
    nodes: [
      { label: "Input features", detail: "One case or dataset" },
      { label: "Trained model", detail: "Produces a prediction" },
      { label: "SHAP / LIME", detail: "Attribute model behavior" },
      { label: "Human review", detail: "Check scope and stability" }
    ]
  },
  {
    title: "The neural-network learning loop",
    caption: "OPTIMIZATION UPDATES PARAMETERS TO REDUCE TRAINING LOSS",
    nodes: [
      { label: "Input", detail: "Features or pixels" },
      { label: "Neural layers", detail: "Weighted transforms" },
      { label: "Prediction", detail: "Model output" },
      { label: "Loss & gradients", detail: "Measure error; backpropagate" },
      { label: "Optimizer", detail: "Update model weights" }
    ]
  },
  {
    title: "From pixels to a vision result",
    caption: "CHOOSE A TASK AND EVALUATE ITS SPECIFIC OUTPUT",
    nodes: [
      { label: "Image pixels", detail: "Channels, height, width" },
      { label: "Vision model", detail: "CNN, ViT, or detector" },
      { label: "Predictions", detail: "Class · box · mask" },
      { label: "Evaluation", detail: "IoU and task metrics" }
    ]
  },
  {
    title: "How a transformer builds context",
    caption: "SELF-ATTENTION CONNECTS TOKENS ACROSS THE INPUT SEQUENCE",
    nodes: [
      { label: "Tokenize", detail: "Text → token IDs" },
      { label: "Embed + position", detail: "Represent tokens and order" },
      { label: "Self-attention", detail: "Queries · keys · values" },
      { label: "Contextual output", detail: "Use or generate text" }
    ]
  },
  {
    title: "Three routes to generative models",
    caption: "DIFFERENT OBJECTIVES · DIFFERENT TRADE-OFFS",
    nodes: [
      { label: "Autoregressive", detail: "Predict the next token" },
      { label: "GAN", detail: "Generator vs discriminator" },
      { label: "Diffusion", detail: "Denoise a noisy sample" }
    ]
  },
  {
    title: "The tool-using agent loop",
    caption: "BOUND ACTIONS, CHECK RESULTS, AND DEFINE WHEN TO STOP",
    nodes: [
      { label: "Observe", detail: "Goal and current context" },
      { label: "Plan", detail: "Choose a bounded action" },
      { label: "Use tool", detail: "Validate arguments" },
      { label: "Check result", detail: "Update context or stop" }
    ]
  },
  {
    title: "A reproducible Python workflow",
    caption: "KEEP THE EXPERIMENT'S INPUTS, STEPS, AND OUTPUTS TRACEABLE",
    nodes: [
      { label: "NumPy · pandas", detail: "Load and inspect data" },
      { label: "scikit-learn", detail: "Build model pipelines" },
      { label: "PyTorch · TF", detail: "Train neural networks" },
      { label: "Plots · reports", detail: "Communicate results" }
    ]
  },
  {
    title: "Prevent data leakage",
    caption: "SPLIT FIRST · FIT PREPROCESSING ON TRAINING DATA ONLY",
    nodes: [
      { label: "Raw dataset", detail: "Define split strategy" },
      { label: "Train", detail: "Fit scaler and model" },
      { label: "Validation", detail: "Select settings" },
      { label: "Test", detail: "Evaluate once at the end" }
    ]
  },
  {
    title: "From prompt to sampled output",
    caption: "DECODING SETTINGS SHAPE SAMPLING — NOT FACTUAL RELIABILITY",
    nodes: [
      { label: "Prompt", detail: "Goal · context · format" },
      { label: "Logits", detail: "Model scores next tokens" },
      { label: "Temperature + top-p", detail: "Shape candidate sampling" },
      { label: "Generated tokens", detail: "Check against evidence" }
    ]
  },
  {
    title: "A practical AI safety cycle",
    caption: "NO SINGLE TEST OR MITIGATION GUARANTEES SAFETY",
    nodes: [
      { label: "Identify risks", detail: "Context and threat model" },
      { label: "Evaluate", detail: "Test likely failure modes" },
      { label: "Mitigate", detail: "Add controls and checks" },
      { label: "Monitor", detail: "Review outcomes over time" }
    ]
  },
  {
    title: "From research gap to evidence",
    caption: "PLAN THE PROTOCOL BEFORE YOU LOOK AT FINAL TEST RESULTS",
    nodes: [
      { label: "Research gap", detail: "What is not yet known?" },
      { label: "Question", detail: "Make it precise and feasible" },
      { label: "Experiment", detail: "Baseline · splits · ablations" },
      { label: "Evidence", detail: "Metrics · uncertainty · limits" }
    ]
  },
  {
    title: "The path from findings to a paper",
    caption: "CLEAR CLAIMS · REPRODUCIBLE METHODS · RESPONSIBLE SUBMISSION",
    nodes: [
      { label: "Question", detail: "Define the contribution" },
      { label: "Method", detail: "Explain what you did" },
      { label: "Results", detail: "Report evidence and limits" },
      { label: "Paper", detail: "Write and cite clearly" },
      { label: "Venue", detail: "Check fit and requirements" }
    ]
  }
];
const storageKey = "ai-researcher-academy-guest-v1";
const themeStorageKey = "neuroverse-academy-theme-v1";
const researchStudioKey = "neuroverse-research-studio-v1";
const beginnerProgressKey = "neuroverse-python-ml-progress-v1";
const selectedCourseKey = "neuroverse-selected-course-v1";
const streakKey = "neuroverse-streak-v1";
const xpKey = "neuroverse-xp-v1";
const badgesKey = "neuroverse-badges-v1";
const notesKey = "neuroverse-notes-v1";
const masteredCardsKey = "neuroverse-mastered-cards-v1";
const certRecipientKey = "neuroverse-cert-recipient-v1";

const badgesList = [
  { id: "first_lesson", name: "First Spark", icon: "🌱", desc: "Started your first lesson" },
  { id: "python_runner", name: "Code Pioneer", icon: "💻", desc: "Ran Python in the browser" },
  { id: "quiz_master", name: "Quiz Ace", icon: "🎯", desc: "Passed a knowledge check" },
  { id: "audio_listener", name: "Attentive Ear", icon: "🎧", desc: "Listened to an audio lesson" },
  { id: "mentor_asker", name: "Inquisitive", icon: "🤖", desc: "Consulted the AI Mentor" },
  { id: "notes_taker", name: "Scholar", icon: "📝", desc: "Saved personal study notes" },
  { id: "flashcard_pro", name: "Memory Master", icon: "🎴", desc: "Reviewed flashcards" },
  { id: "handbook_grad", name: "Certified Graduate", icon: "🎓", desc: "Completed the full curriculum" }
];

const app = {
  courseId: "handbook",
  courses: { handbook: [], beginner: [] },
  parts: [],
  library: null,
  track: "practitioner",
  completed: [],
  user: null,
  csrfToken: null,
  currentPart: null,
  search: "",
  libraryTab: "glossary",
  librarySearch: "",
  authMode: "login",
  worker: null,
  runTimeout: null,
  requestId: 0,
  streak: 1,
  xp: 0,
  badges: [],
  audioState: { isPlaying: false, rate: 1.0, utterance: null },
  flashcardIndex: 0,
  flashcardFilter: "all",
  masteredCards: [],
  sandboxRequestId: 0
};

function guestProgress(courseId = app.courseId) {
  try {
    const key = courseId === "beginner" ? beginnerProgressKey : storageKey;
    const saved = JSON.parse(localStorage.getItem(key) || "{}");
    return {
      track: pathways[saved.track] ? saved.track : "practitioner",
      completed: Array.isArray(saved.completed)
        ? [...new Set(saved.completed.filter((index) => Number.isInteger(index) && index >= 0 && index < 14))]
        : []
    };
  } catch (error) {
    console.error("Could not load guest progress.", error);
    return { track: "practitioner", completed: [] };
  }
}

async function request(url, options = {}) {
  const headers = new Headers(options.headers || {});
  const method = (options.method || "GET").toUpperCase();
  if (options.body !== undefined) headers.set("Content-Type", "application/json");
  if (["POST", "PUT", "DELETE"].includes(method) && app.csrfToken) {
    headers.set("X-CSRF-Token", app.csrfToken);
  }
  const response = await fetch(url, {
    ...options,
    method,
    headers,
    credentials: "same-origin",
    body: options.body === undefined ? undefined : JSON.stringify(options.body)
  });
  let payload;
  try {
    payload = await response.json();
  } catch {
    throw new Error(`The server returned an invalid response (${response.status}).`);
  }
  if (!response.ok) throw new Error(payload.error || `Request failed (${response.status}).`);
  return payload;
}

function activePathway() {
  if (app.courseId === "beginner") {
    return { label: "PYTHON → ML · 14 WEEKS", parts: app.parts.map((part) => part.part) };
  }
  return pathways[app.track];
}

function unitWord() {
  return app.courseId === "beginner" ? "Week" : "Part";
}

function unitWordPlural() {
  return app.courseId === "beginner" ? "weeks" : "parts";
}

function findPart(partNumber) {
  return app.parts.findIndex((part) => part.part === partNumber);
}

function renderNav() {
  const nav = document.getElementById("chapter-nav");
  nav.setAttribute("aria-label", `${unitWord()} navigation`);
  const filtered = app.parts.map((part, index) => ({ part, index }))
    .filter(({ part }) => matchesSearch(part));
  nav.innerHTML = filtered.map(({ part, index }) => {
    const current = app.currentPart === index;
    const complete = app.completed.includes(index);
    return `<button class="chapter-link${current ? " is-current" : ""}" type="button" data-open-module="${index}"${current ? ' aria-current="page"' : ""} aria-label="${unitWord()} ${part.part}: ${escapeHtml(part.chapter)}${complete ? ", completed" : ""}">
      <span class="chapter-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="chapter-title">${escapeHtml(part.chapter)}</span>
      ${complete ? '<span class="chapter-check" aria-label="completed">✓</span>' : ""}
    </button>`;
  }).join("");
  document.getElementById("sidebar-count").textContent = `${app.completed.length} / ${app.parts.length}`;
  document.getElementById("course-curriculum-label").textContent = app.courseId === "beginner" ? "14-WEEK CURRICULUM" : "HANDBOOK CURRICULUM";
  document.getElementById("course-pathway-label").textContent = app.courseId === "beginner" ? "YOUR COURSE" : "YOUR LEARNING PATH";
  document.getElementById("track-switch").hidden = app.courseId === "beginner";
  document.querySelectorAll(".course-option").forEach((button) => {
    const selected = button.dataset.course === app.courseId;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  document.querySelectorAll(".track-option").forEach((button) => {
    const selected = button.dataset.track === app.track;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function matchesSearch(part) {
  if (!app.search) return true;
  const text = `${part.chapter} ${part.title} ${part.summary} ${part.sections.map((section) => `${section.title} ${section.paragraphs.join(" ")} ${(section.bullets || []).join(" ")}`).join(" ")}`;
  return text.toLocaleLowerCase().includes(app.search);
}

function renderDashboard() {
  const recommended = activePathway().parts;
  document.getElementById("pathway-pill").textContent = activePathway().label.toUpperCase();
  document.getElementById("lesson-pathway").textContent = activePathway().label.toUpperCase();
  const nextIndex = app.parts.findIndex((part, index) => recommended.includes(part.part) && !app.completed.includes(index));
  const continueIndex = nextIndex === -1 ? 0 : nextIndex;
  const next = app.parts[continueIndex];
  document.getElementById("continue-part").textContent = `${unitWord().toUpperCase()} ${String(next.part).padStart(2, "0")} · ${next.title.toUpperCase()}`;
  document.getElementById("continue-title").textContent = next.chapter;
  document.getElementById("continue-description").textContent = next.summary;
  document.getElementById("continue-duration").textContent = `${next.minutes} min`;
  document.getElementById("continue-button").dataset.openModule = String(continueIndex);
  document.querySelector(".welcome-row h1").innerHTML = app.courseId === "beginner"
    ? "Build your AI/ML skills<br>from <em>Python to practice.</em>"
    : "Good research starts<br>with a <em>good question.</em>";
  document.querySelector(".welcome-copy").textContent = app.courseId === "beginner"
    ? "Start with Python and data, then train, evaluate, and present your first machine-learning project."
    : "Build the skills to move from machine learning foundations to your first research submission.";
  document.querySelector(".hero-stamp small").innerHTML = app.courseId === "beginner" ? "WEEKS<br>PYTHON TO ML" : "PARTS<br>ONE JOURNEY";

  const percentage = Math.round((app.completed.length / app.parts.length) * 100);
  document.getElementById("progress-percent").textContent = `${percentage}%`;
  document.getElementById("progress-caption").textContent = percentage === 100 ? "course complete" : `of the 14 ${unitWordPlural()}`;
  document.getElementById("progress-bar").style.width = `${percentage}%`;
  document.getElementById("completed-count").textContent = `${app.completed.length} ${app.completed.length === 1 ? unitWord().toLowerCase() : unitWordPlural()} complete`;
  document.querySelector(".progress-note").innerHTML = app.completed.length === 0
    ? `<span class="sparkle" aria-hidden="true">✳</span> Your next milestone: complete your first ${unitWord().toLowerCase()}.`
    : app.completed.length === app.parts.length
      ? `<span class="sparkle" aria-hidden="true">✳</span> You completed the ${app.courseId === "beginner" ? "course" : "handbook"}. Keep learning.`
      : `<span class="sparkle" aria-hidden="true">✳</span> ${app.parts.length - app.completed.length} ${unitWordPlural()} to go in your learning journey.`;

  const visibleParts = app.parts.map((part, index) => ({ part, index })).filter(({ part }) => matchesSearch(part));
  document.getElementById("module-grid").innerHTML = visibleParts.map(({ part, index }) => {
    const complete = app.completed.includes(index);
    const onPath = recommended.includes(part.part);
    return `<button type="button" class="module-card${onPath ? " is-recommended" : ""}${complete ? " is-complete" : ""}" data-open-module="${index}" aria-label="Open ${unitWord()} ${part.part}: ${escapeHtml(part.chapter)}">
      <span class="module-num">${complete ? "✓" : String(index + 1).padStart(2, "0")}</span>
      <span class="module-copy"><strong>${escapeHtml(part.chapter)}</strong><small>${unitWord()} ${part.part} · ${part.minutes} min${onPath ? " · On your path" : ""}</small></span>
      <span class="module-arrow" aria-hidden="true">↗</span>
    </button>`;
  }).join("") || '<p class="empty-search">No lessons match your search. Try another word.</p>';
  document.querySelector(".muted-small").textContent = app.search
    ? `${visibleParts.length} matching ${visibleParts.length === 1 ? "lesson" : "lessons"}`
    : app.courseId === "beginner" ? "A structured course from Python to an ML capstone" : "Follow your pathway or choose any part";
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[character]);
}

function diagramMarkup(diagram, index) {
  const width = 760;
  const height = diagram.type === "layers" ? 278 : 226;
  const baseY = diagram.type === "layers" ? 66 : 89;
  const isLayerDiagram = diagram.type === "layers";
  const cards = isLayerDiagram ? diagram.nodes.map((node, nodeIndex) => {
    const inset = node.level * 17;
    const cardWidth = width - 38 - inset * 2;
    const y = 12 + nodeIndex * 49;
    const colors = ["#eff3ec", "#e7f0e8", "#e0eee9", "#e0edf2", "#ede8f7"];
    return `<rect class="diagram-layer layer-${node.level}" x="${19 + inset}" y="${y}" width="${cardWidth}" height="41" rx="5" fill="${colors[nodeIndex]}" />
      <text class="diagram-label" x="34" y="${y + 17}">${escapeHtml(node.label)}</text>
      <text class="diagram-detail" x="34" y="${y + 32}">${escapeHtml(node.detail)}</text>`;
  }).join("") : diagram.nodes.map((node, nodeIndex) => {
    const count = diagram.nodes.length;
    const cardWidth = count >= 5 ? 126 : count === 3 ? 184 : 158;
    const gap = (width - count * cardWidth) / (count + 1);
    const x = gap + nodeIndex * (cardWidth + gap);
    const accent = ["#e8f1e8", "#e8f0f4", "#f3eee4", "#efeaf5", "#e7f1ef"][nodeIndex % 5];
    const center = x + cardWidth / 2;
    const connector = nodeIndex < count - 1
      ? `<path class="diagram-arrow" d="M${x + cardWidth + 5} ${baseY + 25} H${x + cardWidth + gap - 7}" marker-end="url(#diagram-arrow-${index})"/>`
      : "";
    return `${connector}<rect class="diagram-node node-${nodeIndex}" x="${x}" y="${baseY}" width="${cardWidth}" height="67" rx="6" fill="${accent}"/>
      <circle class="diagram-dot dot-${nodeIndex}" cx="${x + 15}" cy="${baseY + 16}" r="3.5"/>
      <text class="diagram-label" x="${center}" y="${baseY + 33}" text-anchor="middle">${escapeHtml(node.label)}</text>
      <text class="diagram-detail" x="${center}" y="${baseY + 49}" text-anchor="middle">${escapeHtml(node.detail)}</text>`;
  }).join("");
  const backdrop = isLayerDiagram
    ? ""
    : `<rect class="diagram-backdrop" x="0.5" y="0.5" width="759" height="173" rx="8"/>`;
  const svg = `<svg class="lesson-diagram-svg" viewBox="0 0 ${width} ${height}" role="img" aria-labelledby="diagram-title-${index} diagram-description-${index}">
    <title id="diagram-title-${index}">${escapeHtml(diagram.title)}</title>
    <desc id="diagram-description-${index}">${escapeHtml(diagram.nodes.map((node) => `${node.label}: ${node.detail}`).join(". "))}</desc>
    <defs><marker id="diagram-arrow-${index}" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 10 5 0 10z" class="diagram-arrow-head"/></marker></defs>
    ${backdrop}
    ${isLayerDiagram ? cards : `<text class="diagram-ordinal" x="18" y="29">THE PROCESS</text>${cards}`}
  </svg>`;
  return `<figure class="lesson-diagram">
    <figcaption class="diagram-heading"><span>${escapeHtml(diagram.title)}</span><span class="diagram-open">↗</span></figcaption>
    <div class="diagram-canvas">${svg}</div>
    <div class="diagram-caption">${escapeHtml(diagram.caption)}</div>
  </figure>`;
}

function modelPlaygroundMarkup() {
  return `<section class="model-playground" aria-labelledby="model-playground-title">
    <div class="model-playground-heading"><div><p class="eyebrow">INTERACTIVE MODEL LAB</p><h2 id="model-playground-title">Watch a model learn</h2><p>Choose a dataset and algorithm, then train on examples. The shaded map is the model's learned prediction; outlined points are held out for testing.</p></div><span class="model-lab-mark" aria-hidden="true">01</span></div>
    <div class="model-controls">
      <label>Dataset<select id="model-dataset"><option value="linear">Two separated groups</option><option value="circle">Inside vs. outside a circle</option></select></label>
      <label>Model<select id="model-choice"><option value="logistic">Logistic regression</option><option value="tree">Decision tree (one split)</option><option value="svm">RBF support vector machine</option><option value="knn">K-nearest neighbors (k=7)</option><option value="bayes">Gaussian naive Bayes</option><option value="forest">Random forest (15 depth-four trees)</option><option value="boost">Gradient-boosted trees (XGBoost idea)</option></select></label>
      <button class="button button-dark" id="train-model" type="button">Train model</button>
    </div>
    <div class="model-visual" id="model-visual" role="status" aria-live="polite"></div>
    <div class="model-lab-footer"><div class="model-legend"><span><i class="legend-train"></i>Training examples</span><span><i class="legend-test"></i>Held-out test examples</span></div><p id="model-explanation"></p></div>
    <details class="model-concepts"><summary>What is the model learning?</summary><p id="model-description"></p></details>
  </section>`;
}

function createModelData(dataset) {
  let seed = dataset === "circle" ? 81371 : 45217;
  const random = () => {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 4294967296;
  };
  const examples = Array.from({ length: 180 }, () => {
    const x = random() * 2 - 1;
    const y = random() * 2 - 1;
    const boundary = dataset === "circle" ? x * x + y * y < 0.48 : x + 0.72 * y > 0.04;
    const label = (boundary !== (random() < 0.06)) ? 1 : 0;
    return { x, y, label };
  });
  for (let index = examples.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [examples[index], examples[swapIndex]] = [examples[swapIndex], examples[index]];
  }
  return { train: examples.slice(0, 126), test: examples.slice(126) };
}

function sigmoid(score) {
  return 1 / (1 + Math.exp(-Math.max(-30, Math.min(30, score))));
}

function fitDecisionTree(examples, maxDepth, random, randomFeature = false) {
  function build(rows, depth) {
    const ones = rows.reduce((sum, example) => sum + example.label, 0);
    const majority = ones >= rows.length / 2 ? 1 : 0;
    if (depth === maxDepth || ones === 0 || ones === rows.length) return { label: majority };
    const parentImpurity = 1 - (ones / rows.length) ** 2 - ((rows.length - ones) / rows.length) ** 2;
    const features = randomFeature ? [random() < 0.5 ? "x" : "y"] : ["x", "y"];
    let split = null;
    for (const feature of features) {
      const values = [...new Set(rows.map((example) => example[feature]))].sort((a, b) => a - b);
      for (let index = 0; index < values.length - 1; index += 1) {
        const threshold = (values[index] + values[index + 1]) / 2;
        const left = rows.filter((example) => example[feature] <= threshold);
        const right = rows.filter((example) => example[feature] > threshold);
        if (!left.length || !right.length) continue;
        const leftOnes = left.reduce((sum, example) => sum + example.label, 0);
        const rightOnes = right.reduce((sum, example) => sum + example.label, 0);
        const leftImpurity = 1 - (leftOnes / left.length) ** 2 - ((left.length - leftOnes) / left.length) ** 2;
        const rightImpurity = 1 - (rightOnes / right.length) ** 2 - ((right.length - rightOnes) / right.length) ** 2;
        const impurity = (left.length * leftImpurity + right.length * rightImpurity) / rows.length;
        if (!split || impurity < split.impurity) {
          split = { impurity, feature, threshold, left, right };
        }
      }
    }
    if (!split || split.impurity >= parentImpurity - 1e-10) return { label: majority };
    return {
      feature: split.feature,
      threshold: split.threshold,
      left: build(split.left, depth + 1),
      right: build(split.right, depth + 1)
    };
  }
  const tree = build(examples, 0);
  return (x, y) => {
    let node = tree;
    while (node.feature) node = (node.feature === "x" ? x : y) <= node.threshold ? node.left : node.right;
    return node.label;
  };
}

function fitRegressionTree(examples, residuals, maxDepth) {
  const rows = examples.map((example, index) => ({ ...example, residual: residuals[index] }));
  const build = (subset, depth) => {
    const mean = subset.reduce((sum, row) => sum + row.residual, 0) / subset.length;
    if (depth === maxDepth || subset.length < 10) return { value: mean };
    const parentError = subset.reduce((sum, row) => sum + (row.residual - mean) ** 2, 0);
    let best = null;
    for (const feature of ["x", "y"]) {
      const values = [...new Set(subset.map((row) => row[feature]))].sort((a, b) => a - b);
      for (let index = 0; index < values.length - 1; index += 1) {
        const threshold = (values[index] + values[index + 1]) / 2;
        const left = subset.filter((row) => row[feature] <= threshold);
        const right = subset.filter((row) => row[feature] > threshold);
        if (left.length < 5 || right.length < 5) continue;
        const leftMean = left.reduce((sum, row) => sum + row.residual, 0) / left.length;
        const rightMean = right.reduce((sum, row) => sum + row.residual, 0) / right.length;
        const error = left.reduce((sum, row) => sum + (row.residual - leftMean) ** 2, 0)
          + right.reduce((sum, row) => sum + (row.residual - rightMean) ** 2, 0);
        if (!best || error < best.error) best = { error, feature, threshold, left, right };
      }
    }
    if (!best || best.error >= parentError - 1e-8) return { value: mean };
    return {
      feature: best.feature,
      threshold: best.threshold,
      left: build(best.left, depth + 1),
      right: build(best.right, depth + 1)
    };
  };
  const tree = build(rows, 0);
  const predict = (x, y) => {
    let node = tree;
    while (node.feature) node = (node.feature === "x" ? x : y) <= node.threshold ? node.left : node.right;
    return node.value;
  };
  return { tree, predict };
}

function fitModel(modelName, examples) {
  if (modelName === "logistic") {
    const weights = [0, 0, 0];
    for (let epoch = 0; epoch < 700; epoch += 1) {
      const gradient = [0, 0, 0];
      for (const example of examples) {
        const score = weights[0] + weights[1] * example.x + weights[2] * example.y;
        const probability = sigmoid(score);
        const error = probability - example.label;
        gradient[0] += error;
        gradient[1] += error * example.x;
        gradient[2] += error * example.y;
      }
      weights[0] -= 0.18 * gradient[0] / examples.length;
      weights[1] -= 0.18 * gradient[1] / examples.length;
      weights[2] -= 0.18 * gradient[2] / examples.length;
    }
    return (x, y) => (weights[0] + weights[1] * x + weights[2] * y >= 0 ? 1 : 0);
  }
  if (modelName === "tree") {
    return fitDecisionTree(examples, 1, () => 0.5);
  }
  if (modelName === "knn") {
    return (x, y) => {
      const nearest = examples.map((example) => ({
        distance: (example.x - x) ** 2 + (example.y - y) ** 2,
        label: example.label
      })).sort((first, second) => first.distance - second.distance).slice(0, 7);
      return nearest.reduce((sum, example) => sum + example.label, 0) >= 4 ? 1 : 0;
    };
  }
  if (modelName === "bayes") {
    const classes = [0, 1].map((label) => {
      const rows = examples.filter((example) => example.label === label);
      const mean = ["x", "y"].map((feature) => rows.reduce((sum, row) => sum + row[feature], 0) / rows.length);
      const variance = ["x", "y"].map((feature, index) =>
        Math.max(0.0001, rows.reduce((sum, row) => sum + (row[feature] - mean[index]) ** 2, 0) / rows.length)
      );
      return { prior: rows.length / examples.length, mean, variance };
    });
    return (x, y) => {
      const logPosterior = classes.map((model) => {
        const values = [x, y];
        return Math.log(model.prior) + values.reduce((sum, value, index) =>
          sum - 0.5 * (Math.log(2 * Math.PI * model.variance[index]) + (value - model.mean[index]) ** 2 / model.variance[index]), 0
        );
      });
      return logPosterior[1] > logPosterior[0] ? 1 : 0;
    };
  }
  if (modelName === "svm") {
    const labels = examples.map((example) => example.label ? 1 : -1);
    const gamma = 2.2;
    const kernel = examples.map((first) => examples.map((second) =>
      Math.exp(-gamma * ((first.x - second.x) ** 2 + (first.y - second.y) ** 2))
    ));
    const alpha = Array(examples.length).fill(0);
    const penalty = 2.5;
    let bias = 0;
    const decisionAt = (index) => bias + alpha.reduce((sum, value, other) =>
      sum + value * labels[other] * kernel[other][index], 0
    );
    let seed = 3181;
    const random = () => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 4294967296;
    };
    let quietPasses = 0;
    let iteration = 0;
    while (quietPasses < 8 && iteration < 1400) {
      let changes = 0;
      for (let first = 0; first < examples.length; first += 1) {
        const errorFirst = decisionAt(first) - labels[first];
        if (!((labels[first] * errorFirst < -0.001 && alpha[first] < penalty) ||
              (labels[first] * errorFirst > 0.001 && alpha[first] > 0))) continue;
        let second = Math.floor(random() * (examples.length - 1));
        if (second >= first) second += 1;
        const errorSecond = decisionAt(second) - labels[second];
        const oldFirst = alpha[first];
        const oldSecond = alpha[second];
        const lower = labels[first] !== labels[second]
          ? Math.max(0, oldSecond - oldFirst)
          : Math.max(0, oldFirst + oldSecond - penalty);
        const upper = labels[first] !== labels[second]
          ? Math.min(penalty, penalty + oldSecond - oldFirst)
          : Math.min(penalty, oldFirst + oldSecond);
        if (upper - lower < 1e-8) continue;
        const curvature = 2 * kernel[first][second] - kernel[first][first] - kernel[second][second];
        if (curvature >= 0) continue;
        alpha[second] = Math.max(lower, Math.min(upper,
          oldSecond - labels[second] * (errorFirst - errorSecond) / curvature
        ));
        if (Math.abs(alpha[second] - oldSecond) < 1e-5) {
          alpha[second] = oldSecond;
          continue;
        }
        alpha[first] = oldFirst + labels[first] * labels[second] * (oldSecond - alpha[second]);
        const firstBias = bias - errorFirst
          - labels[first] * (alpha[first] - oldFirst) * kernel[first][first]
          - labels[second] * (alpha[second] - oldSecond) * kernel[first][second];
        const secondBias = bias - errorSecond
          - labels[first] * (alpha[first] - oldFirst) * kernel[first][second]
          - labels[second] * (alpha[second] - oldSecond) * kernel[second][second];
        bias = alpha[first] > 0 && alpha[first] < penalty ? firstBias
          : alpha[second] > 0 && alpha[second] < penalty ? secondBias
            : (firstBias + secondBias) / 2;
        changes += 1;
      }
      quietPasses = changes === 0 ? quietPasses + 1 : 0;
      iteration += 1;
    }
    return (x, y) => bias + alpha.reduce((sum, value, index) => {
      const example = examples[index];
      const distance = (example.x - x) ** 2 + (example.y - y) ** 2;
      return sum + value * labels[index] * Math.exp(-gamma * distance);
    }, 0) >= 0 ? 1 : 0;
  }
  if (modelName === "forest") {
    let seed = 157;
    const random = () => {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      return seed / 4294967296;
    };
    const trees = Array.from({ length: 15 }, () => {
      const sample = Array.from({ length: examples.length }, () => examples[Math.floor(random() * examples.length)]);
      return fitDecisionTree(sample, 4, random, true);
    });
    return (x, y) => trees.reduce((votes, tree) => votes + tree(x, y), 0) >= 8 ? 1 : 0;
  }
  if (modelName === "boost") {
    const scores = Array(examples.length).fill(0);
    const baseRate = examples.reduce((sum, example) => sum + example.label, 0) / examples.length;
    const baseScore = Math.log(baseRate / (1 - baseRate));
    const trees = [];
    for (let round = 0; round < 18; round += 1) {
      const residuals = examples.map((example, index) => example.label - sigmoid(baseScore + scores[index]));
      const tree = fitRegressionTree(examples, residuals, 3);
      trees.push(tree);
      examples.forEach((example, index) => {
        scores[index] += 0.35 * tree.predict(example.x, example.y);
      });
    }
    return (x, y) => {
      const score = baseScore + trees.reduce((sum, tree) =>
        sum + 0.35 * tree.predict(x, y), 0
      );
      return score >= 0 ? 1 : 0;
    };
  }
  throw new Error(`Unsupported model: ${modelName}`);
}

function renderModelPlayground() {
  const container = document.getElementById("model-visual");
  if (!container) return;
  const dataset = document.getElementById("model-dataset").value;
  const modelName = document.getElementById("model-choice").value;
  const examples = createModelData(dataset);
  const predict = fitModel(modelName, examples.train);
  const domainMin = -1.08;
  const domainMax = 1.08;
  const plot = { x: 42, y: 14, width: 510, height: 244 };
  const columns = 34;
  const rows = 17;
  const cellWidth = plot.width / columns;
  const cellHeight = plot.height / rows;
  const regions = [];
  for (let row = 0; row < rows; row += 1) {
    for (let column = 0; column < columns; column += 1) {
      const x = domainMin + (column + 0.5) / columns * (domainMax - domainMin);
      const y = domainMax - (row + 0.5) / rows * (domainMax - domainMin);
      regions.push(`<rect x="${plot.x + column * cellWidth}" y="${plot.y + row * cellHeight}" width="${cellWidth + 0.5}" height="${cellHeight + 0.5}" fill="${predict(x, y) ? "#f5e3d1" : "#dcecf0"}"/>`);
    }
  }
  const pointMarkup = (example, isTest) => {
    const x = plot.x + (example.x - domainMin) / (domainMax - domainMin) * plot.width;
    const y = plot.y + (domainMax - example.y) / (domainMax - domainMin) * plot.height;
    return `<circle cx="${x}" cy="${y}" r="${isTest ? 4.3 : 3}" fill="${example.label ? "#b96d36" : "#347a91"}" stroke="${isTest ? "#24342d" : "#ffffff"}" stroke-width="${isTest ? 1.8 : 0.7}" opacity="${isTest ? 1 : 0.78}"/>`;
  };
  const correct = examples.test.filter((example) => predict(example.x, example.y) === example.label).length;
  const accuracy = correct / examples.test.length;
  const axisX = plot.x + (0 - domainMin) / (domainMax - domainMin) * plot.width;
  const axisY = plot.y + (domainMax - 0) / (domainMax - domainMin) * plot.height;
  container.innerHTML = `<svg class="model-plot" viewBox="0 0 570 294" role="img" aria-label="Learned ${modelName} decision regions over ${dataset} training data">
    <defs><clipPath id="model-plot-clip"><rect x="${plot.x}" y="${plot.y}" width="${plot.width}" height="${plot.height}" rx="5"/></clipPath></defs>
    <g clip-path="url(#model-plot-clip)">${regions.join("")}<path class="model-axis" d="M${axisX} ${plot.y}V${plot.y + plot.height}M${plot.x} ${axisY}H${plot.x + plot.width}"/>${examples.train.map((example) => pointMarkup(example, false)).join("")}${examples.test.map((example) => pointMarkup(example, true)).join("")}</g>
    <rect class="model-plot-outline" x="${plot.x}" y="${plot.y}" width="${plot.width}" height="${plot.height}" rx="5" fill="none"/>
    <text class="model-axis-label" x="${plot.x + plot.width / 2}" y="284" text-anchor="middle">FEATURE 1</text>
    <text class="model-axis-label" x="13" y="${plot.y + plot.height / 2}" text-anchor="middle" transform="rotate(-90 13 ${plot.y + plot.height / 2})">FEATURE 2</text>
    <text class="model-score" x="${plot.x + plot.width - 8}" y="${plot.y + 17}" text-anchor="end">TEST ACCURACY ${(accuracy * 100).toFixed(1)}%</text>
  </svg>
  <div class="model-score-line"><strong>${(accuracy * 100).toFixed(1)}% test accuracy</strong><span>${correct} of ${examples.test.length} unseen examples predicted correctly</span></div>`;
  const explanations = {
    logistic: "Logistic regression learned weights for a single straight-line boundary by reducing prediction error on the training examples.",
    tree: "A one-split decision tree learned a feature threshold and a class on each side, choosing the split that best separates the training labels.",
    svm: "The RBF support vector machine learns a smooth nonlinear margin. Points near the boundary exert the greatest influence on its predictions.",
    knn: "K-nearest neighbors kept the training examples and predicts from the seven closest points. Its regions can bend around local patterns.",
    bayes: "Gaussian naive Bayes estimates a distribution for each feature within each class, then combines those estimates with Bayes' rule.",
    forest: "This teaching random forest votes across 15 bootstrapped, randomized depth-four trees. The ensemble can capture more patterns than one small tree.",
    boost: "Gradient boosting adds small depth-three trees sequentially to correct errors left by earlier rounds. This illustrates the XGBoost idea without claiming to be the full XGBoost library."
  };
  document.getElementById("model-explanation").textContent = explanations[modelName];
  document.getElementById("model-description").textContent = dataset === "circle"
    ? "The target is inside versus outside a circle, with a little label noise. Compare the straight boundary of logistic regression with the more flexible neighbor regions; neither score alone tells you whether the model will generalize to new populations."
    : "The target is a noisy linear boundary. Logistic regression can represent this simple pattern directly, while a nearest-neighbor model memorizes local examples and a one-split tree has a restricted shape. The same held-out test examples make the comparison fair.";
}

function initializeModelPlayground() {
  const trainButton = document.getElementById("train-model");
  if (!trainButton) return;
  trainButton.addEventListener("click", renderModelPlayground);
  document.getElementById("model-dataset").addEventListener("change", renderModelPlayground);
  document.getElementById("model-choice").addEventListener("change", renderModelPlayground);
  renderModelPlayground();
}

function renderAuthControls() {
  const status = document.getElementById("sync-status");
  const button = document.getElementById("auth-open");
  const avatar = document.getElementById("avatar");
  if (app.user) {
    status.innerHTML = '<span class="saved-dot"></span> Progress synced to your account';
    button.textContent = "Sign out";
    button.dataset.action = "logout";
    avatar.textContent = app.user.name.trim().slice(0, 1).toLocaleUpperCase();
    avatar.title = app.user.email;
    avatar.setAttribute("aria-label", `Signed in as ${app.user.name}`);
  } else {
    status.innerHTML = '<span class="saved-dot"></span> Sign in to sync progress';
    button.textContent = "Sign in";
    button.dataset.action = "login";
    avatar.textContent = "G";
    avatar.title = "Guest profile";
    avatar.setAttribute("aria-label", "Guest profile");
  }
}

function lessonMarkup(part, index) {
  const complete = app.completed.includes(index);
  const unit = unitWord();
  const diagram = app.courseId === "beginner" ? part.visual : lessonDiagrams[index];
  const sections = part.sections.map((section) => `<section class="lesson-section content-section">
    <h2>${escapeHtml(section.title)}</h2>
    ${section.paragraphs.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
    ${section.bullets ? `<ul class="lesson-bullets">${section.bullets.map((bullet) => `<li>${escapeHtml(bullet)}</li>`).join("")}</ul>` : ""}
  </section>`).join("");
  const quiz = part.quiz;
  return `<header class="lesson-header">
    <span class="lesson-part">${unit.toUpperCase()} ${part.part} <span aria-hidden="true">/</span> ${escapeHtml(part.title.toUpperCase())}</span>
    <h1>${escapeHtml(part.chapter)}</h1>
    <p>${escapeHtml(part.summary)}</p>
    <div class="lesson-stats"><span>◷ &nbsp;${part.minutes} min</span><span>·</span><span>Lesson + code exercise</span><span>·</span><span>Knowledge check</span></div>
  </header>
  <div class="lesson-layout">
    <div class="lesson-main">
      <div class="teacher-note"><strong>LEARNING OBJECTIVE</strong>${escapeHtml(part.objective)}</div>
      ${diagram ? `<section class="lesson-visual" aria-label="Lesson diagram">${diagramMarkup(diagram, index)}</section>` : ""}
      ${app.courseId === "handbook" && index === 1 ? modelPlaygroundMarkup() : ""}
      ${sections}
      <section class="lesson-section">
        <p class="eyebrow">RUNNABLE EXAMPLE</p>
        <h2>${escapeHtml(part.example.description)}</h2>
        <p>Try the worked example, then edit the exercise below. Python runs in an isolated browser worker; your code is not sent to the application server.</p>
        <details class="worked-example">
          <summary>Show or load the worked example</summary>
          <pre><code>${escapeHtml(part.example.code)}</code></pre>
          <button class="button button-light" type="button" data-load-example="${index}">Load example into editor</button>
        </details>
      </section>
      <section class="lesson-section exercise-section">
        <p class="eyebrow">YOUR TURN</p>
        <h2>Exercise</h2>
        <div class="exercise-prompt">${escapeHtml(part.exercise.prompt)}</div>
        <div class="code-lab">
          <div class="code-lab-head"><span class="code-caption">PYTHON PLAYGROUND</span><span class="runtime-status" id="runtime-status">Python runtime loads when you run</span></div>
          <textarea class="code-editor" id="code-editor" aria-label="Python exercise editor" spellcheck="false" autocapitalize="off" autocomplete="off" autocorrect="off">${escapeHtml(part.exercise.starter)}</textarea>
          <div class="code-controls"><span class="code-hint">⌘/Ctrl + Enter to run · browser execution</span><div class="editor-actions"><button class="run-button run-example" id="run-code" type="button">▶ Run</button><button class="run-button check-button" id="check-exercise" type="button">Check exercise</button></div></div>
          <pre class="code-output" id="code-output" aria-live="polite"></pre>
        </div>
        <div class="exercise-help">
          <details><summary>Need a hint?</summary><p>${escapeHtml(part.exercise.hint)}</p></details>
          <details><summary>Show solution</summary><pre>${escapeHtml(part.exercise.solution)}</pre></details>
        </div>
      </section>
      <section class="knowledge-check" aria-labelledby="quiz-heading">
        <p class="eyebrow">QUICK CHECK</p>
        <h3 id="quiz-heading">Test your understanding</h3>
        <p>${escapeHtml(quiz.prompt)}</p>
        <div class="quiz-options">${quiz.choices.map((choice, choiceIndex) => `<button class="quiz-option" type="button" data-answer="${choiceIndex}"><span class="option-letter">${String.fromCharCode(65 + choiceIndex)}</span>${escapeHtml(choice)}</button>`).join("")}</div>
        <div class="quiz-feedback" id="quiz-feedback" role="status"></div>
      </section>
      <div class="lesson-bottom-nav">
        <button class="button button-light" type="button" data-step="-1"${index === 0 ? " disabled" : ""}>← Previous lesson</button>
        <button class="button button-dark" type="button" data-step="1"${index === app.parts.length - 1 ? " disabled" : ""}>Next lesson →</button>
      </div>
    </div>
    <aside class="lesson-side">
      <section class="lesson-side-card">
        <h3>In this part</h3>
        <ul><li>${escapeHtml(part.objective)}</li><li>Read ${part.sections.length} short sections</li><li>Complete the Python exercise</li><li>Pass the knowledge check</li></ul>
      </section>
      <section class="lesson-side-card">
        <h3>Your checkpoint</h3>
        <div class="reflection-box"><strong>Researcher's notebook</strong>Write down one question this topic raises for your own research.</div>
      </section>
      <section class="lesson-side-card">
        <button class="button button-dark mark-complete${complete ? " is-complete" : ""}" type="button" data-complete="${index}">${complete ? `✓ ${unit} completed` : `Mark ${unit.toLowerCase()} complete`}</button>
        <p class="complete-note">${app.user ? "Progress syncs with your account." : "Progress is kept in this browser until you sign in."}</p>
      </section>
    </aside>
  </div>`;
}

function libraryMatches(text) {
  return !app.librarySearch || text.toLocaleLowerCase().includes(app.librarySearch);
}

function renderGlossary() {
  const items = app.library.glossary.filter((item) => libraryMatches(`${item.term} ${item.part} ${item.definition}`));
  document.getElementById("library-count").textContent = `${items.length} ${items.length === 1 ? "term" : "terms"}`;
  return items.length ? `<div class="glossary-grid">${items.map((item) => `<article class="glossary-card"><div class="resource-meta"><span>PART ${escapeHtml(item.part)}</span></div><h3>${escapeHtml(item.term)}</h3><p>${escapeHtml(item.definition)}</p></article>`).join("")}</div>`
    : '<p class="library-empty">No glossary entries match. Try a different word.</p>';
}

function renderFormulas() {
  const items = app.library.formulas.filter((item) => libraryMatches(`${item.name} ${item.part} ${item.expression} ${item.meaning}`));
  document.getElementById("library-count").textContent = `${items.length} ${items.length === 1 ? "reference" : "references"}`;
  return items.length ? `<div class="formula-list">${items.map((item) => `<article class="formula-card"><div class="resource-meta"><span>PART ${escapeHtml(item.part)}</span></div><h3>${escapeHtml(item.name)}</h3><pre class="formula-expression">${escapeHtml(item.expression)}</pre><p>${escapeHtml(item.meaning)}</p></article>`).join("")}</div>`
    : '<p class="library-empty">No formulas match. Try a different word.</p>';
}

function renderProjects() {
  const projects = app.library.projects.filter((project) => libraryMatches(`${project.title} ${project.parts} ${project.level} ${project.goal} ${project.materials} ${project.steps.join(" ")} ${project.rubric.join(" ")}`));
  document.getElementById("library-count").textContent = `${projects.length} ${projects.length === 1 ? "workbook" : "workbooks"}`;
  if (!projects.length) return '<p class="library-empty">No projects match. Try a different word.</p>';
  return `<div class="project-list">${projects.map((project, index) => {
    const dataTable = project.dataset ? `<div class="project-dataset"><strong>Included practice dataset</strong><div class="table-scroll"><table><thead><tr>${Object.keys(project.dataset[0]).map((key) => `<th>${escapeHtml(key)}</th>`).join("")}</tr></thead><tbody>${project.dataset.map((row) => `<tr>${Object.values(row).map((value) => `<td>${escapeHtml(value)}</td>`).join("")}</tr>`).join("")}</tbody></table></div></div>` : "";
    return `<details class="project-card" ${index === 0 && !app.librarySearch ? "open" : ""}><summary><span><span class="resource-meta">${escapeHtml(project.level)} · PARTS ${escapeHtml(project.parts)}</span><strong>${escapeHtml(project.title)}</strong></span><span class="project-expand" aria-hidden="true">+</span></summary><div class="project-body"><p><strong>Goal</strong>${escapeHtml(project.goal)}</p><p><strong>Materials</strong>${escapeHtml(project.materials)}</p>${dataTable}<h4>Steps to complete</h4><ol>${project.steps.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol><p><strong>Your deliverable</strong>${escapeHtml(project.deliverable)}</p><h4>Self-review rubric</h4><ul>${project.rubric.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div></details>`;
  }).join("")}</div>`;
}

function readResearchPlan() {
  try {
    const plan = JSON.parse(localStorage.getItem(researchStudioKey) || "{}");
    return plan && typeof plan === "object" ? plan : {};
  } catch (error) {
    console.error("Could not load the research plan.", error);
    return {};
  }
}

function renderResearchStudio() {
  const toolkit = app.library.toolkit;
  const plan = readResearchPlan();
  const contents = `
    <div class="toolkit-intro"><h3>Your research workspace</h3><p>Plan a rigorous, ethical study here. Your draft saves in this browser. Export a Markdown copy whenever you need to share or back it up.</p></div>
    <div class="study-plan"><h3>A seven-day path through the course</h3><div class="study-plan-grid">${toolkit.studyPlan.map((day) => `<article><span>DAY ${escapeHtml(day.day)}</span><strong>${escapeHtml(day.title)}</strong><p>${escapeHtml(day.task)}</p></article>`).join("")}</div></div>
    <form class="research-plan-form" id="research-plan-form">
      <div class="studio-form-heading"><div><span class="resource-meta">FILL-IN RESEARCH PLAN</span><h3>From question to contribution</h3></div><span class="local-save-indicator" id="plan-save-indicator">Saved in this browser</span></div>
      <p class="form-guidance">Work through the prompts in order. A strong project can be specific, modest, and reproducible; it does not need a new architecture.</p>
      ${[
        ["problem", "1. Who has a problem, and why does it matter?", "Describe the affected people, setting, and decision. Avoid naming an algorithm as the problem."],
        ["gap", "2. What remains unanswered?", "Summarize what existing evidence does and does not establish. What limitation or context motivates this study?"],
        ["question", "3. What is the research question?", "Name the population or data, the comparison, and the measurable outcome."],
        ["hypothesis", "4. What result do you predict?", "Write a testable prediction and one plausible result that would disconfirm it."],
        ["data", "5. What data can you use responsibly?", "Record provenance, access, consent, privacy, inclusion criteria, limitations, and independent sampling unit."],
        ["method", "6. What is the evaluation plan?", "Specify the split strategy, training-only preprocessing, baseline, metric, uncertainty estimate, and leakage controls."],
        ["ethics", "7. Who could be affected, and what could go wrong?", "Consider privacy, bias, failure costs, intended use, safeguards, and a stopping or escalation rule."],
        ["contribution", "8. What will others learn from the result?", "State the contribution you expect and what it will not establish."]
      ].map(([key, title, hint]) => `<label class="research-plan-field" for="plan-${key}"><strong>${escapeHtml(title)}</strong><span>${escapeHtml(hint)}</span><textarea id="plan-${key}" name="${key}" rows="${key === "question" ? 2 : 3}" maxlength="5000" placeholder="Write your notes here…">${escapeHtml(plan[key] || "")}</textarea></label>`).join("")}
      <div class="research-plan-actions"><span id="plan-status" role="status">Changes save automatically in this browser.</span><button class="button button-dark" type="button" id="export-plan">Download research plan</button></div>
    </form>
    <section class="writing-toolkit"><h3>Paper outline you can use right now</h3><div class="paper-outline">${toolkit.paperSections.map((section, index) => `<article><span>${String(index + 1).padStart(2, "0")}</span><div><strong>${escapeHtml(section.title)}</strong><p>${escapeHtml(section.prompt)}</p></div></article>`).join("")}</div></section>
    <details class="submission-toolkit"><summary>Complete reproducibility and submission checklist</summary><ul>${toolkit.submissionChecklist.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></details>
    <details class="submission-toolkit data-card-details"><summary>Use the included mini practice dataset</summary><p>${escapeHtml(toolkit.dataCard.caution)}</p><div class="project-dataset"><strong>${escapeHtml(toolkit.dataCard.title)}</strong><div class="table-scroll"><table><thead><tr>${toolkit.dataCard.fields.map((field) => `<th title="${escapeHtml(field.meaning)}">${escapeHtml(field.field)}</th>`).join("")}</tr></thead><tbody>${toolkit.dataCard.rows.map((row) => `<tr>${Object.values(row).map((value) => `<td>${escapeHtml(value)}</td>`).join("")}</tr>`).join("")}</tbody></table></div></div></details>`;
  document.getElementById("library-count").textContent = "PLAN · OUTLINE · CHECKLIST";
  return libraryMatches(contents) ? contents : `<p class="library-empty">The Research Toolkit is a guided workbook rather than a searchable reference. Clear the search to browse its study plan, research studio, paper outline, and checklists.</p>`;
}

function renderLibrary() {
  if (!app.library) return;
  document.querySelectorAll(".library-tab").forEach((button) => {
    const selected = button.dataset.libraryTab === app.libraryTab;
    button.classList.toggle("is-active", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  const contents = {
    glossary: renderGlossary,
    formulas: renderFormulas,
    projects: renderProjects,
    toolkit: renderResearchStudio
  };
  document.getElementById("library-content").innerHTML = contents[app.libraryTab]();
  const researchPlanForm = document.getElementById("research-plan-form");
  if (app.libraryTab === "toolkit" && researchPlanForm) {
    researchPlanForm.addEventListener("input", saveResearchPlan);
    document.getElementById("export-plan").addEventListener("click", exportResearchPlan);
  }
}

function saveResearchPlan() {
  const form = document.getElementById("research-plan-form");
  if (!form) return;
  const plan = Object.fromEntries(new FormData(form).entries());
  try {
    localStorage.setItem(researchStudioKey, JSON.stringify(plan));
    document.getElementById("plan-save-indicator").textContent = "Saved in this browser";
    document.getElementById("plan-status").textContent = `Saved at ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}. Your draft stays on this device.`;
  } catch (error) {
    console.error("Could not save the research plan.", error);
    document.getElementById("plan-save-indicator").textContent = "Save failed";
    document.getElementById("plan-status").textContent = "Browser storage is unavailable. Download your plan to avoid losing your work.";
  }
}

function exportResearchPlan() {
  const plan = readResearchPlan();
  const headings = {
    problem: "Problem and impact",
    gap: "Research gap",
    question: "Research question",
    hypothesis: "Hypothesis and disconfirming result",
    data: "Data access and responsible use",
    method: "Evaluation plan",
    ethics: "Ethics, risks, and safeguards",
    contribution: "Expected contribution and limits"
  };
  const text = `# NeuroVerse Research Studio Plan\n\n${Object.entries(headings).map(([key, heading]) => `## ${heading}\n\n${plan[key]?.trim() || "_Not drafted yet._"}`).join("\n\n")}\n\n---\nDrafted with the NeuroVerse AI ML Learning Hub Research Studio.\n`;
  const url = URL.createObjectURL(new Blob([text], { type: "text/markdown;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = "neuroverse-research-plan.md";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("Research plan downloaded.");
}

function openPart(index) {
  if (!Number.isInteger(index) || index < 0 || index >= app.parts.length) return;
  cancelExecution();
  app.currentPart = index;
  const part = app.parts[index];
  document.getElementById("dashboard-view").hidden = true;
  document.getElementById("lesson-view").hidden = false;
  document.getElementById("breadcrumb-current").textContent = `${unitWord()} ${part.part}`;
  document.getElementById("lesson-pathway").textContent = activePathway().label.toUpperCase();
  document.getElementById("lesson-content").innerHTML = lessonMarkup(part, index);
  initializeModelPlayground();
  renderNav();
  window.scrollTo(0, 0);
  document.getElementById("code-editor").addEventListener("keydown", handleEditorKeydown);
  document.getElementById("run-code").addEventListener("click", () => executeCode("run"));
  document.getElementById("check-exercise").addEventListener("click", () => executeCode("check"));
  document.querySelectorAll(".quiz-option").forEach((button) => button.addEventListener("click", checkAnswer));
}

function showDashboard() {
  cancelExecution();
  app.currentPart = null;
  document.getElementById("lesson-view").hidden = true;
  document.getElementById("dashboard-view").hidden = false;
  document.getElementById("breadcrumb-current").textContent = "Overview";
  renderNav();
  renderDashboard();
  window.scrollTo(0, 0);
}

function checkAnswer(event) {
  const part = app.parts[app.currentPart];
  const answer = Number(event.currentTarget.dataset.answer);
  const correct = answer === part.quiz.answer;
  document.querySelectorAll(".quiz-option").forEach((button) => {
    button.disabled = true;
    if (Number(button.dataset.answer) === part.quiz.answer) button.classList.add("is-correct");
  });
  if (!correct) event.currentTarget.classList.add("is-incorrect");
  document.getElementById("quiz-feedback").textContent = `${correct ? "Correct." : "Not quite."} ${part.quiz.explanation}`;
}

function handleEditorKeydown(event) {
  if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
    event.preventDefault();
    executeCode("run");
  }
  if (event.key === "Tab") {
    event.preventDefault();
    const editor = event.currentTarget;
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    editor.setRangeText("    ", start, end, "end");
  }
}

function statusText(text) {
  const status = document.getElementById("runtime-status");
  if (status) status.textContent = text;
}

function outputText(text, state = "") {
  const output = document.getElementById("code-output");
  if (!output) return;
  output.textContent = text;
  output.classList.toggle("output-success", state === "success");
  output.classList.toggle("output-error", state === "error");
}

function createWorker() {
  if (app.worker) return app.worker;
  const source = `
    importScripts("https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.js");
    let runtime;
    self.onmessage = async ({data}) => {
      const {id, code, tests, mode} = data;
      try {
        runtime ||= await loadPyodide();
        let output = "";
        runtime.setStdout({batched: (text) => { output += text + "\\n"; }});
        const namespace = runtime.runPython("dict()");
        try {
          await runtime.runPythonAsync(code, {globals: namespace});
          if (mode === "check") {
            await runtime.runPythonAsync(tests, {globals: namespace});
            output += (output ? "\\n" : "") + "__ACADEMY_EXERCISE_PASSED__";
          }
        } finally {
          namespace.destroy();
        }
        self.postMessage({id, output: output || "(Code ran successfully with no printed output.)"});
      } catch (error) {
        self.postMessage({id, error: String(error)});
      }
    };
  `;
  const workerUrl = URL.createObjectURL(new Blob([source], { type: "text/javascript" }));
  app.worker = new Worker(workerUrl);
  URL.revokeObjectURL(workerUrl);
  app.worker.onmessage = ({ data }) => {
    if (data.id !== app.requestId) return;
    clearTimeout(app.runTimeout);
    enableEditors();
    statusText("Python runtime ready");
    if (data.error) {
      outputText(`Not quite yet: ${data.error}`, "error");
      return;
    }
    const passed = data.output.includes("__ACADEMY_EXERCISE_PASSED__");
    const output = data.output.replace("__ACADEMY_EXERCISE_PASSED__", "").trim();
    if (passed) {
      outputText(`${output ? `${output}\n\n` : ""}Exercise passed — all checks are correct.`, "success");
      showToast("Exercise passed. Nice work!");
      return;
    }
    outputText(output, "success");
  };
  app.worker.onerror = (event) => {
    clearTimeout(app.runTimeout);
    enableEditors();
    statusText("Python runtime failed to load");
    outputText(`Could not start the Python runtime. Check your connection and try again. ${event.message || ""}`.trim(), "error");
    app.worker?.terminate();
    app.worker = null;
  };
  return app.worker;
}

function disableEditors(disabled) {
  ["run-code", "check-exercise"].forEach((id) => {
    const button = document.getElementById(id);
    if (button) button.disabled = disabled;
  });
}

function enableEditors() {
  disableEditors(false);
}

function cancelExecution() {
  app.requestId += 1;
  clearTimeout(app.runTimeout);
  enableEditors();
}

function executeCode(mode) {
  const part = app.parts[app.currentPart];
  const editor = document.getElementById("code-editor");
  if (!part || !editor) return;
  const id = ++app.requestId;
  disableEditors(true);
  outputText("");
  statusText("Starting Python runtime…");
  try {
    createWorker().postMessage({
      id,
      code: editor.value,
      tests: part.exercise.tests,
      mode
    });
    app.runTimeout = setTimeout(() => {
      if (id !== app.requestId) return;
      app.worker?.terminate();
      app.worker = null;
      enableEditors();
      statusText("Execution stopped");
      outputText("Execution took longer than 30 seconds and was stopped.", "error");
    }, 30000);
  } catch (error) {
    enableEditors();
    statusText("Could not start Python");
    outputText(`Could not start the Python runtime: ${error.message}`, "error");
  }
}

function showToast(message, isError = false) {
  const toast = document.getElementById("toast-message");
  toast.textContent = message;
  toast.classList.toggle("is-error", isError);
  toast.classList.add("is-visible");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.remove("is-visible"), 3600);
}

function persistGuestProgress() {
  try {
    const key = app.courseId === "beginner" ? beginnerProgressKey : storageKey;
    localStorage.setItem(key, JSON.stringify({ track: app.track, completed: app.completed }));
  } catch (error) {
    console.error("Could not save guest progress.", error);
    showToast("Browser storage is unavailable; sign in to sync progress.", true);
  }
}

async function saveProgress() {
  if (!app.user) {
    persistGuestProgress();
    return;
  }
  try {
    const data = await request("/api/progress", {
      method: "PUT",
      body: { course: app.courseId, track: app.courseId === "beginner" ? "all-weeks" : app.track, completed: app.completed }
    });
    app.completed = data.completed;
    app.track = pathways[data.track] ? data.track : "practitioner";
    document.getElementById("sync-status").innerHTML = '<span class="saved-dot"></span> Progress synced to your account';
  } catch (error) {
    showToast(`Could not sync your progress: ${error.message}`, true);
    throw error;
  }
}

async function changeTrack(track) {
  app.track = track;
  renderNav();
  renderDashboard();
  if (app.currentPart !== null) {
    document.getElementById("lesson-pathway").textContent = activePathway().label.toUpperCase();
  }
  await saveProgress();
}

async function changeCourse(courseId) {
  if (!app.courses[courseId] || app.courseId === courseId) return;
  cancelExecution();
  app.courseId = courseId;
  app.parts = app.courses[courseId];
  app.currentPart = null;
  app.search = "";
  document.getElementById("course-search").value = "";
  try {
    localStorage.setItem(selectedCourseKey, courseId);
  } catch (error) {
    console.error("Could not save the selected course.", error);
    showToast("The course changed, but your selection could not be saved.", true);
  }
  if (app.user) {
    try {
      const progress = await request(`/api/progress?course=${encodeURIComponent(courseId)}`);
      app.completed = progress.completed;
      app.track = pathways[progress.track] ? progress.track : "practitioner";
    } catch (error) {
      showToast(`Could not load your ${unitWordPlural()} progress: ${error.message}`, true);
      return;
    }
  } else {
    const progress = guestProgress(courseId);
    app.track = progress.track;
    app.completed = progress.completed;
  }
  renderNav();
  showDashboard();
}

async function markComplete(index) {
  if (!app.completed.includes(index)) app.completed.push(index);
  app.completed.sort((a, b) => a - b);
  await saveProgress();
  renderNav();
  renderDashboard();
  const button = document.querySelector(`[data-complete="${index}"]`);
  if (button) {
    button.classList.add("is-complete");
    button.textContent = `✓ ${unitWord()} completed`;
  }
}

function openAuth(mode = "login") {
  app.authMode = mode;
  renderAuthMode();
  document.getElementById("auth-dialog").showModal();
}

function renderAuthMode() {
  const isSignup = app.authMode === "signup";
  const form = document.getElementById("auth-form");
  form.elements.name.required = isSignup;
  document.getElementById("name-field").hidden = !isSignup;
  document.getElementById("auth-title").textContent = isSignup ? "Create your account." : "Welcome back.";
  document.getElementById("auth-description").textContent = isSignup
    ? "Save your learning progress and return to your research path."
    : "Sign in to sync your learning progress across sessions.";
  document.getElementById("auth-submit").textContent = isSignup ? "Create account" : "Sign in";
  document.getElementById("auth-switch-copy").innerHTML = isSignup
    ? 'Already have an account? <button type="button" id="auth-switch">Sign in</button>'
    : 'New here? <button type="button" id="auth-switch">Create an account</button>';
  document.getElementById("auth-error").textContent = "";
  form.elements.password.autocomplete = isSignup ? "new-password" : "current-password";
}

async function setAccount(payload, mode) {
  app.user = payload.user;
  app.csrfToken = payload.csrfToken;
  renderAuthControls();
  if (mode === "signup") {
    await saveProgress();
  } else {
    const progress = await request(`/api/progress?course=${encodeURIComponent(app.courseId)}`);
    app.track = pathways[progress.track] ? progress.track : "practitioner";
    app.completed = progress.completed;
  }
  persistGuestProgress();
  renderNav();
  renderDashboard();
  if (app.currentPart !== null) openPart(app.currentPart);
  document.getElementById("auth-dialog").close();
  showToast(`Welcome${app.user.name ? `, ${app.user.name}` : ""}! Progress is synced.`);
}

async function submitAuth(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const submit = document.getElementById("auth-submit");
  const errorElement = document.getElementById("auth-error");
  const body = {
    email: form.elements.email.value.trim(),
    password: form.elements.password.value
  };
  if (app.authMode === "signup") body.name = form.elements.name.value.trim();
  submit.disabled = true;
  errorElement.textContent = "";
  try {
    const endpoint = app.authMode === "signup" ? "/api/auth/register" : "/api/auth/login";
    const payload = await request(endpoint, { method: "POST", body });
    await setAccount(payload, app.authMode);
  } catch (error) {
    errorElement.textContent = error.message;
  } finally {
    submit.disabled = false;
  }
}

async function signOut() {
  try {
    await request("/api/auth/logout", { method: "POST", body: {} });
    app.user = null;
    app.csrfToken = null;
    app.track = "practitioner";
    app.completed = [];
    localStorage.removeItem(app.courseId === "beginner" ? beginnerProgressKey : storageKey);
    renderAuthControls();
    renderNav();
    renderDashboard();
    showToast("You have signed out.");
  } catch (error) {
    showToast(`Could not sign out: ${error.message}`, true);
  }
}

function showSearch(value) {
  app.search = value.trim().toLocaleLowerCase();
  renderNav();
  renderDashboard();
}

function applyTheme(theme, persist = false) {
  const validTheme = theme === "dark" ? "dark" : "light";
  document.documentElement.dataset.theme = validTheme;
  document.querySelector('meta[name="theme-color"]').content = validTheme === "dark" ? "#121713" : "#f7f7f2";
  const toggle = document.getElementById("theme-toggle");
  const darkMode = validTheme === "dark";
  toggle.setAttribute("aria-pressed", String(darkMode));
  toggle.setAttribute("aria-label", `Switch to ${darkMode ? "light" : "dark"} mode`);
  document.getElementById("theme-symbol").textContent = darkMode ? "☀" : "☾";
  if (persist) {
    try {
      localStorage.setItem(themeStorageKey, validTheme);
    } catch (error) {
      console.error("Could not save the appearance preference.", error);
      showToast("Your theme changed, but the preference could not be saved.", true);
    }
  }
}

function initializeTheme() {
  try {
    const savedTheme = localStorage.getItem(themeStorageKey);
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(savedTheme || (systemPrefersDark ? "dark" : "light"));
  } catch (error) {
    console.error("Could not load the appearance preference.", error);
    applyTheme("light");
  }
}

document.addEventListener("click", (event) => {
  const target = event.target;
  const trackButton = target.closest("[data-track]");
  if (trackButton) {
    changeTrack(trackButton.dataset.track).catch((error) => showToast(error.message, true));
    return;
  }
  const completeButton = target.closest("[data-complete]");
  if (completeButton) {
    markComplete(Number(completeButton.dataset.complete)).catch((error) => showToast(error.message, true));
    return;
  }
  const courseButton = target.closest("[data-course]");
  if (courseButton) {
    changeCourse(courseButton.dataset.course).catch((error) => showToast(error.message, true));
    return;
  }
  const loadButton = target.closest("[data-load-example]");
  if (loadButton) {
    document.getElementById("code-editor").value = app.parts[Number(loadButton.dataset.loadExample)].example.code;
    outputText("");
    return;
  }
  const stepButton = target.closest("[data-step]");
  if (stepButton && app.currentPart !== null) {
    openPart(app.currentPart + Number(stepButton.dataset.step));
    return;
  }
  const moduleButton = target.closest("[data-open-module]");
  if (moduleButton) openPart(Number(moduleButton.dataset.openModule));
});

document.getElementById("back-button").addEventListener("click", showDashboard);
document.getElementById("continue-button").addEventListener("click", (event) => openPart(Number(event.currentTarget.dataset.openModule)));
document.getElementById("auth-open").addEventListener("click", (event) => {
  if (event.currentTarget.dataset.action === "logout") signOut();
  else openAuth("login");
});
document.getElementById("theme-toggle").addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(nextTheme, true);
});
document.getElementById("auth-close").addEventListener("click", () => document.getElementById("auth-dialog").close());
document.getElementById("auth-form").addEventListener("submit", submitAuth);
document.getElementById("auth-switch").addEventListener("click", () => openAuth("signup"));
document.getElementById("auth-switch-copy").addEventListener("click", (event) => {
  if (event.target.closest("#auth-switch")) openAuth(app.authMode === "signup" ? "login" : "signup");
});
document.getElementById("about-open").addEventListener("click", () => document.getElementById("about-dialog").showModal());
document.getElementById("about-close").addEventListener("click", () => document.getElementById("about-dialog").close());
document.getElementById("about-done").addEventListener("click", () => document.getElementById("about-dialog").close());
document.getElementById("library-open").addEventListener("click", () => {
  app.libraryTab = "glossary";
  app.librarySearch = "";
  document.getElementById("library-search").value = "";
  renderLibrary();
  document.getElementById("library-dialog").showModal();
});
document.getElementById("library-close").addEventListener("click", () => document.getElementById("library-dialog").close());
document.querySelector(".library-tabs").addEventListener("click", (event) => {
  const tab = event.target.closest("[data-library-tab]");
  if (!tab) return;
  app.libraryTab = tab.dataset.libraryTab;
  renderLibrary();
});
document.getElementById("library-search").addEventListener("input", (event) => {
  app.librarySearch = event.currentTarget.value.trim().toLocaleLowerCase();
  renderLibrary();
  const input = document.getElementById("library-search");
  input.focus();
  input.setSelectionRange(input.value.length, input.value.length);
});
document.getElementById("course-search").addEventListener("input", (event) => showSearch(event.currentTarget.value));
document.getElementById("course-search").addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.currentTarget.value = "";
    showSearch("");
  }
});

async function initialize() {
  initializeTheme();
  try {
    const savedCourse = localStorage.getItem(selectedCourseKey);
    app.courseId = savedCourse === "beginner" ? "beginner" : "handbook";
  } catch (error) {
    console.error("Could not load the selected course.", error);
    app.courseId = "handbook";
  }
  const guest = guestProgress(app.courseId);
  app.track = guest.track;
  app.completed = guest.completed;
  renderAuthControls();
  try {
    const [handbook, beginner, library, session] = await Promise.all([
      request("/api/course"),
      request("/api/course?course=beginner"),
      request("/api/library"),
      request("/api/auth/me")
    ]);
    app.courses.handbook = handbook.parts;
    app.courses.beginner = beginner.parts;
    app.parts = app.courses[app.courseId];
    app.library = library;
    if (session.user) {
      app.user = session.user;
      app.csrfToken = session.csrfToken;
      const progress = await request(`/api/progress?course=${encodeURIComponent(app.courseId)}`);
      app.track = pathways[progress.track] ? progress.track : "practitioner";
      app.completed = progress.completed;
    }
    renderAuthControls();
    renderNav();
    renderDashboard();
  } catch (error) {
    console.error("Could not initialize the academy.", error);
    document.getElementById("continue-title").textContent = "Could not connect to the academy";
    document.getElementById("continue-description").textContent = `${error.message} Start the local server with python3 server.py.`;
    document.getElementById("continue-button").disabled = true;
    document.getElementById("module-grid").innerHTML = `<p class="empty-search">${escapeHtml(error.message)} Start the local server with <code>python3 server.py</code>.</p>`;
  }
}

initialize();
