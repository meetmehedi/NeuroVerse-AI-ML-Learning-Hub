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
const pydsmlProgressKey = "neuroverse-pydsml-progress-v1";
const selectedCourseKey = "neuroverse-selected-course-v1";
const streakKey = "neuroverse-streak-v1";
const xpKey = "neuroverse-xp-v1";
const badgesKey = "neuroverse-badges-v1";
const notesKey = "neuroverse-notes-v1";
const masteredCardsKey = "neuroverse-mastered-cards-v1";
const certRecipientKey = "neuroverse-cert-recipient-v1";

const badgesList = [
  { id: "first_lesson", name: "First Spark", icon: "01", desc: "Started your first lesson" },
  { id: "python_runner", name: "Code Pioneer", icon: "02", desc: "Ran Python in the browser" },
  { id: "quiz_master", name: "Quiz Ace", icon: "03", desc: "Passed a knowledge check" },
  { id: "audio_listener", name: "Attentive Ear", icon: "04", desc: "Listened to an audio lesson" },
  { id: "mentor_asker", name: "Inquisitive", icon: "05", desc: "Consulted the AI Mentor" },
  { id: "notes_taker", name: "Scholar", icon: "06", desc: "Saved personal study notes" },
  { id: "flashcard_pro", name: "Memory Master", icon: "07", desc: "Reviewed flashcards" },
  { id: "handbook_grad", name: "Certified Graduate", icon: "08", desc: "Completed the full curriculum" }
];

const app = {
  courseId: "handbook",
  courses: { handbook: [], beginner: [], pydsml: [] },
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
  audioState: { isPlaying: false, rate: 1.0, utterance: null, sentences: [], sentenceIndex: 0 },
  flashcardIndex: 0,
  flashcardFilter: "all",
  masteredCards: [],
  sandboxRequestId: 0
};

function guestProgress(courseId = app.courseId) {
  try {
    const key = courseId === "beginner" ? beginnerProgressKey : courseId === "pydsml" ? pydsmlProgressKey : storageKey;
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
  if (!response.ok) {
    const err = new Error(payload.error || `Request failed (${response.status}).`);
    err.status = response.status;
    throw err;
  }
  return payload;
}

function activePathway() {
  if (app.courseId === "beginner") {
    return { label: "PYTHON → ML · 14 WEEKS", parts: app.parts.map((part) => part.part) };
  }
  if (app.courseId === "pydsml") {
    return { label: "DIU CPC PyDSML · 5 MODULES", parts: app.parts.map((part) => part.part) };
  }
  return pathways[app.track];
}

function unitWord() {
  if (app.courseId === "beginner") return "Week";
  if (app.courseId === "pydsml") return "Module";
  return "Part";
}

function unitWordPlural() {
  if (app.courseId === "beginner") return "weeks";
  if (app.courseId === "pydsml") return "modules";
  return "parts";
}

function findPart(partNumber) {
  return app.parts.findIndex((part) => part.part === partNumber);
}

// ==================== GAMIFICATION & BADGES ====================
function loadGamification() {
  try {
    const rawStreak = JSON.parse(localStorage.getItem(streakKey) || "{}");
    const today = new Date().toDateString();
    if (rawStreak.lastDate === today) {
      app.streak = rawStreak.count || 1;
    } else {
      const yesterday = new Date(Date.now() - 86400000).toDateString();
      if (rawStreak.lastDate === yesterday) {
        app.streak = (rawStreak.count || 0) + 1;
      } else {
        app.streak = 1;
      }
      localStorage.setItem(streakKey, JSON.stringify({ count: app.streak, lastDate: today }));
    }
  } catch {
    app.streak = 1;
  }

  try {
    app.xp = Number(localStorage.getItem(xpKey)) || 50;
  } catch {
    app.xp = 50;
  }

  try {
    app.badges = JSON.parse(localStorage.getItem(badgesKey) || "[]");
  } catch {
    app.badges = [];
  }

  try {
    app.masteredCards = JSON.parse(localStorage.getItem(masteredCardsKey) || "[]");
  } catch {
    app.masteredCards = [];
  }
}

function addXP(amount, reason = "") {
  app.xp += amount;
  try {
    localStorage.setItem(xpKey, String(app.xp));
  } catch (e) {
    console.error("Could not save XP.", e);
  }
  renderGamificationHeader();
  if (reason) showToast(`+${amount} XP: ${reason}!`);
}

function unlockBadge(badgeId) {
  if (app.badges.includes(badgeId)) return;
  app.badges.push(badgeId);
  try {
    localStorage.setItem(badgesKey, JSON.stringify(app.badges));
  } catch (e) {
    console.error("Could not save badges.", e);
  }
  const badge = badgesList.find((b) => b.id === badgeId);
  if (badge) {
    showToast(`Badge Unlocked: ${badge.name}!`);
    addXP(100, `Unlocked ${badge.name}`);
  }
  renderBadges();
}

function renderGamificationHeader() {
  const streakEl = document.getElementById("streak-count");
  const xpEl = document.getElementById("xp-count");
  if (streakEl) streakEl.textContent = String(app.streak);
  if (xpEl) xpEl.textContent = String(app.xp);
}

function renderBadges() {
  const grid = document.getElementById("badges-grid");
  const countEl = document.getElementById("badge-total-count");
  if (!grid || !countEl) return;
  countEl.textContent = `${app.badges.length} / ${badgesList.length}`;
  grid.innerHTML = badgesList.map((badge) => {
    const unlocked = app.badges.includes(badge.id);
    return `<div class="badge-item${unlocked ? "" : " is-locked"}" title="${escapeHtml(badge.desc)}">
      <span class="badge-icon">${badge.icon}</span>
      <strong>${escapeHtml(badge.name)}</strong>
      <small>${unlocked ? "Unlocked" : "Locked"}</small>
    </div>`;
  }).join("");
}

// ==================== AUDIO COMPANION (SIRI NATURAL ENGINE) ====================
const selectedVoiceKey = "neuroverse_preferred_voice";

function getSiriPriority(voice) {
  const name = (voice.name || "").toLowerCase();
  const lang = (voice.lang || "").toLowerCase();

  // If not English, deprioritize
  if (!lang.startsWith("en")) return -100;

  // Novelty / robotic legacy synthesizers to eliminate completely
  const avoid = [
    "bad news", "bahh", "bells", "boing", "bubbles", "cellos",
    "deranged", "fred", "good news", "hysterical", "junior",
    "organ", "trinoids", "whisper", "zarvox", "albert", "wobble",
    "ralph", "jester"
  ];
  if (avoid.some((bad) => name.includes(bad))) return -50;

  // 1. Direct Apple Siri voice profiles
  if (name.includes("siri")) return 100;

  // 2. Samantha (the classic & beloved Apple Siri voice on macOS)
  if (name.includes("samantha")) {
    return name.includes("enhanced") || name.includes("premium") ? 99 : 96;
  }

  // 3. Apple Enhanced / Premium English voices (Ava, Karen, Daniel, Allison)
  if (name.includes("enhanced") || name.includes("premium")) return 94;

  // 4. Microsoft Natural Online / Google Natural voices
  if (name.includes("natural") || name.includes("neural") || name.includes("online")) return 92;

  // 5. High-fidelity conversational voices
  if (name.includes("ava") || name.includes("karen") || name.includes("allison") ||
      name.includes("daniel") || name.includes("serena") || name.includes("victoria") ||
      name.includes("kate") || name.includes("oliver") || name.includes("zoe")) {
    return 88;
  }

  // 6. Google US / UK English
  if (name.includes("google") && lang.startsWith("en")) return 82;

  // 7. General English standard voice
  return voice.default ? 50 : 40;
}

function getAvailableVoices() {
  if (!("speechSynthesis" in window)) return [];
  const voices = window.speechSynthesis.getVoices() || [];
  return voices
    .filter((v) => getSiriPriority(v) > 0)
    .sort((a, b) => getSiriPriority(b) - getSiriPriority(a));
}

function getBestSiriVoice() {
  const voices = getAvailableVoices();
  if (!voices.length) return null;
  const saved = localStorage.getItem(selectedVoiceKey);
  if (saved) {
    const match = voices.find((v) => v.name === saved);
    if (match) return match;
  }
  return voices[0];
}

function updateAudioVoiceSelect() {
  const select = document.getElementById("audio-voice-select");
  if (!select) return;
  const voices = getAvailableVoices();
  if (!voices.length) {
    select.innerHTML = '<option value="">Siri / Natural Voice</option>';
    return;
  }

  const current = getBestSiriVoice();
  select.innerHTML = voices.slice(0, 12).map((v) => {
    let label = v.name;
    const lower = v.name.toLowerCase();
    if (lower.includes("siri")) label = `Siri (${v.name.replace(/siri/i, "").trim() || "Natural"})`;
    else if (lower.includes("samantha")) label = "Siri · Samantha (Smooth)";
    else if (lower.includes("karen")) label = "Siri · Karen (Natural AU)";
    else if (lower.includes("daniel")) label = "Siri · Daniel (Natural UK)";
    else if (lower.includes("ava")) label = "Ava (Natural Smooth)";
    else if (lower.includes("natural") || lower.includes("enhanced")) {
      label = `${v.name.replace(/\(.*?\)/g, "").trim()} (Natural)`;
    }
    const isSelected = current && current.name === v.name;
    return `<option value="${escapeHtml(v.name)}"${isSelected ? " selected" : ""}>${escapeHtml(label)}</option>`;
  }).join("");

  select.onchange = () => {
    localStorage.setItem(selectedVoiceKey, select.value);
    showToast(`Voice switched to: ${select.options[select.selectedIndex].text}`);
    if (app.audioState.isPlaying) {
      stopAudio();
      togglePlayAudio(app.parts[app.currentPart]);
    }
  };
}

if ("speechSynthesis" in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    updateAudioVoiceSelect();
  };
}

function sanitizeForSpeech(text) {
  if (!text) return "";
  let clean = String(text);

  clean = clean
    .replace(/\$\$(.*?)\$\$/gs, (_, math) => ` Equation: ${math} `)
    .replace(/\$(.*?)\$/g, (_, math) => {
      let m = math
        .replace(/\\mathbf\{([a-zA-Z0-9]+)\}/g, "$1")
        .replace(/\\vec\{([a-zA-Z0-9]+)\}/g, "vector $1")
        .replace(/\\sigma/g, "sigma")
        .replace(/\\mu/g, "mu")
        .replace(/\\alpha/g, "alpha")
        .replace(/\\beta/g, "beta")
        .replace(/\\lambda/g, "lambda")
        .replace(/\\theta/g, "theta")
        .replace(/\\sum_\{([^\}]+)\}\^\{([^\}]+)\}/g, "sum from $1 to $2")
        .replace(/\\sum/g, "sum")
        .replace(/\\prod/g, "product")
        .replace(/\\cdot/g, " times ")
        .replace(/\\times/g, " times ")
        .replace(/\\le|\\leq/g, " less than or equal to ")
        .replace(/\\ge|\\geq/g, " greater than or equal to ")
        .replace(/\\neq/g, " not equal to ")
        .replace(/\\approx/g, " approximately ")
        .replace(/\\frac\{([^\}]+)\}\{([^\}]+)\}/g, "$1 over $2")
        .replace(/_\{([^\}]+)\}/g, " sub $1")
        .replace(/\^\{([^\}]+)\}/g, " to the power of $1")
        .replace(/\^2/g, " squared")
        .replace(/\^3/g, " cubed")
        .replace(/\\/g, " ");
      return ` ${m} `;
    });

  clean = clean
    .replace(/```[\s\S]*?```/g, " Code example omitted for audio guide. ")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\[\d+\]/g, "")
    .replace(/\*\*(.*?)\*\*/g, "$1")
    .replace(/\*(.*?)\*/g, "$1")
    .replace(/#+/g, "")
    .replace(/-->|->|=>/g, " leads to ")
    .replace(/!=/g, " does not equal ")
    .replace(/==/g, " equals ");

  clean = clean
    .replace(/\be\.g\.,?/gi, "for example,")
    .replace(/\bi\.e\.,?/gi, "that is,")
    .replace(/\betc\./gi, "et cetera.")
    .replace(/\bvs\.?/gi, "versus")
    .replace(/\bAI\b/g, "A.I.")
    .replace(/\bML\b/g, "M.L.")
    .replace(/\bPyDSML\b/g, "Python Data Science and Machine Learning")
    .replace(/\bDIU CPC\b/g, "D.I.U. Computer Programming Club")
    .replace(/\bAPI\b/g, "A.P.I.")
    .replace(/\bSQL\b/g, "sequel")
    .replace(/\bPCA\b/g, "P.C.A.")
    .replace(/\bSVM\b/g, "S.V.M.")
    .replace(/\bLLM\b/g, "L.L.M.")
    .replace(/\bLLMs\b/g, "L.L.Ms")
    .replace(/\bAUC\b/g, "A.U.C.")
    .replace(/\bROC\b/g, "R.O.C.")
    .replace(/\bMSE\b/g, "M.S.E.")
    .replace(/\bRMSE\b/g, "Root Mean Squared Error")
    .replace(/\bNLP\b/g, "Natural Language Processing");

  return clean.replace(/\s+/g, " ").trim();
}

function splitIntoSentences(text) {
  const matches = text.match(/[^.!?]+[.!?]+(\s|$)|[^.!?]+$/g);
  if (!matches) return [text];
  return matches.map((s) => s.trim()).filter((s) => s.length > 0);
}

function stopAudio() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  app.audioState.isPlaying = false;
  app.audioState.sentences = [];
  app.audioState.sentenceIndex = 0;
  updateAudioUi();
}

function toggleAudioSpeed() {
  const rates = [1.0, 1.25, 1.5];
  const nextIdx = (rates.indexOf(app.audioState.rate) + 1) % rates.length;
  app.audioState.rate = rates[nextIdx];
  const btn = document.getElementById("audio-speed-btn");
  if (btn) btn.textContent = `${app.audioState.rate}x`;
  if (app.audioState.isPlaying) {
    stopAudio();
    togglePlayAudio(app.parts[app.currentPart]);
  }
}

function updateAudioUi() {
  const playBtn = document.getElementById("audio-play-btn");
  const wave = document.getElementById("audio-wave");
  const status = document.getElementById("audio-status-text");
  if (playBtn) playBtn.textContent = app.audioState.isPlaying ? "❚❚ Pause" : "▶ Play";
  if (wave) wave.classList.toggle("is-playing", app.audioState.isPlaying);
  if (status) {
    if (app.audioState.isPlaying && app.audioState.sentences?.length) {
      status.textContent = `Narrating sentence ${app.audioState.sentenceIndex + 1} of ${app.audioState.sentences.length} with Siri voice...`;
    } else {
      status.textContent = "Siri Natural Speech · Smooth conversational audio guide";
    }
  }
}

function playNextSentence(voice) {
  if (!app.audioState.isPlaying) return;
  if (!app.audioState.sentences || app.audioState.sentenceIndex >= app.audioState.sentences.length) {
    app.audioState.isPlaying = false;
    updateAudioUi();
    addXP(25, "Finished audio guide");
    showToast("Completed audio companion narration!");
    return;
  }

  const text = app.audioState.sentences[app.audioState.sentenceIndex];
  const utterance = new SpeechSynthesisUtterance(text);

  if (voice) utterance.voice = voice;
  // Siri-like smooth cadence and warm pitch
  utterance.rate = app.audioState.rate * 0.98;
  utterance.pitch = 1.04;
  utterance.volume = 1.0;

  utterance.onend = () => {
    if (!app.audioState.isPlaying) return;
    app.audioState.sentenceIndex++;
    updateAudioUi();
    // 60ms natural breathing pause between sentences
    setTimeout(() => {
      playNextSentence(voice);
    }, 60);
  };

  utterance.onerror = (e) => {
    if (e.error === "canceled" || e.error === "interrupted") return;
    app.audioState.sentenceIndex++;
    playNextSentence(voice);
  };

  app.audioState.utterance = utterance;
  window.speechSynthesis.speak(utterance);
}

function togglePlayAudio(part) {
  if (!("speechSynthesis" in window)) {
    showToast("Text-to-speech is not supported in this browser.");
    return;
  }
  if (app.audioState.isPlaying) {
    stopAudio();
    return;
  }
  stopAudio();

  const voice = getBestSiriVoice();
  const rawParts = [
    `Lesson ${part.part}: ${part.chapter}.`,
    `Learning Objective: ${part.objective}.`,
    part.summary,
    ...part.sections.map((s) => `${s.title}. ${s.paragraphs.join(" ")}`)
  ];

  const fullCleanText = sanitizeForSpeech(rawParts.join(" "));
  const sentences = splitIntoSentences(fullCleanText);

  if (!sentences.length) return;

  app.audioState.sentences = sentences;
  app.audioState.sentenceIndex = 0;
  app.audioState.isPlaying = true;
  updateAudioUi();
  unlockBadge("audio_listener");

  playNextSentence(voice);
}

// ==================== LESSON NOTES ====================
function getLessonNotes() {
  try {
    return JSON.parse(localStorage.getItem(notesKey) || "{}");
  } catch {
    return {};
  }
}

function loadLessonNote(index) {
  const notes = getLessonNotes();
  const textarea = document.getElementById("lesson-notes-input");
  if (textarea) textarea.value = notes[`${app.courseId}-${index}`] || "";
}

function saveLessonNote(index, text) {
  const notes = getLessonNotes();
  notes[`${app.courseId}-${index}`] = text;
  try {
    localStorage.setItem(notesKey, JSON.stringify(notes));
    const status = document.getElementById("notes-status");
    if (status) status.textContent = `Saved at ${new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}`;
    if (text.trim().length > 10) {
      unlockBadge("notes_taker");
      addXP(15, "Study notes saved");
    }
  } catch (e) {
    console.error("Could not save lesson note.", e);
  }
}

function exportAllNotes() {
  const notes = getLessonNotes();
  const entries = Object.entries(notes);
  if (!entries.length) {
    showToast("No notes found yet. Type some takeaways first!");
    return;
  }
  let markdown = `# NeuroVerse AI ML Learning Hub — My Study Notes\n\nGenerated on ${new Date().toLocaleDateString()}.\n\n`;
  entries.forEach(([key, val]) => {
    if (val.trim()) {
      markdown += `## ${key.toUpperCase()}\n\n${val.trim()}\n\n---\n\n`;
    }
  });
  const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "neuroverse-my-study-notes.md";
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("All notes downloaded as Markdown!");
}

// ==================== AI MENTOR ====================
const mentorKnowledge = {
  eli5: {
    default: "Think of this topic as teaching a computer to recognize patterns the same way humans do: by looking at many good examples, making small predictions, checking where it made mistakes, and gently correcting its internal settings until it gets reliable.",
    0: "AI is simply teaching machines to make smart decisions. Traditional programming gives the computer strict recipes. Machine learning instead shows the computer 1,000 photos of cats and lets it figure out what makes a cat a cat.",
    1: "Different machine learning models are like different tools in a toolbox. A ruler (Linear Regression) is great for straight lines, while a pair of scissors (Decision Tree) is great for cutting the data into rule boxes.",
    2: "Explainable AI (XAI) is like asking a doctor: 'Why did you diagnose this condition?' instead of just blindly swallowing a prescription. It shows which symptoms (features) influenced the decision most.",
    3: "Neural networks are like layers of filters. The first layer detects simple edges, the next combines edges into shapes, and the final layer recognizes full faces or objects.",
    4: "Computer vision turns images into numbers (grid of pixels: Red, Green, Blue). Neural networks slide tiny magnifying glasses (convolution kernels) across the grid to spot textures and objects.",
    5: "Transformers read an entire sentence all at once and use 'attention' to connect words that belong together—like connecting the word 'it' to 'the dog' three sentences earlier.",
    6: "Generative AI doesn't just categorize data; it creates new content (text, images, audio) by predicting what token or pixel naturally comes next.",
    7: "An AI agent is like an assistant who doesn't just talk, but can browse the web, execute code in a terminal, check errors, and stop when the job is done."
  },
  analogy: {
    default: "Imagine learning to play basketball: at first, you shoot and miss. Your brain notices the error and adjusts your wrist angle. Next time, your shot is closer. That continuous feedback loop is exactly how machine learning optimization works.",
    0: "Think of AI as an orchestra: the conductor is Artificial Intelligence, the violin section is Machine Learning, the soloist is Deep Learning, and the sheet music is the dataset.",
    1: "Decision Trees are like a 20 Questions game. Support Vector Machines are like drawing a wide highway between two rival soccer teams so nobody crosses over.",
    2: "Feature importance is like a jury asking: 'If this piece of evidence didn't exist, would our verdict change?'",
    3: "Gradient descent is like being lost on a misty mountain in heavy fog, feeling the incline with your boots, and taking small steps in the steepest downward direction to find the valley.",
    4: "Convolutional layers are like stamped cookie cutters moving across dough to imprint and find specific shapes.",
    5: "Self-attention is like highlighter pens of different colors: when reading 'The bank approved the loan because it was creditworthy', attention draws a bright link between 'it' and 'bank'.",
    6: "Diffusion models generate images like a sculptor starting with a messy block of marble (random static noise) and gradually chiseling away noise until a masterpiece emerges.",
    7: "An agent is like an astronaut following a checklist on Mars: observe surroundings, check instrument readings, pick a tool, drill a rock, inspect sample, record results."
  },
  math: {
    default: "All machine learning boils down to three mathematical pillars: (1) An objective loss function L(θ), (2) An architecture function f(x; θ), and (3) An optimization update θ ← θ − η∇L.",
    0: "Probability formulation: Modeling P(Y|X) with Bayes' theorem P(Y|X) = P(X|Y)P(Y) / P(X).",
    1: "Logistic loss: Binary cross entropy L = −[y log(σ(z)) + (1−y) log(1−σ(z))], where σ(z) = 1/(1+e⁻ᶻ). Notice that when y=1 and σ(z)→1, loss approaches zero.",
    2: "Shapley value: φᵢ = ∑ [|S|!(|F|−|S|−1)! / |F|!] · [f(S ∪ {i}) − f(S)] across all subsets S not containing feature i.",
    3: "Chain rule backpropagation: ∂L/∂Wˡ = (∂L/∂aˡ) · (∂aˡ/∂zˡ) · (∂zˡ/∂Wˡ). Gradient vector points in direction of steepest ascent.",
    4: "2D Convolution: (I * K)(i, j) = ∑∑ I(i−m, j−n) · K(m, n). Preserves spatial translation equivariance.",
    5: "Scaled Dot-Product Attention: Attention(Q, K, V) = softmax(Q Kᵀ / √d) V. Complexity scales quadratically O(N²) with sequence length N.",
    6: "Autoregressive log-likelihood: Maximize ∑ log P(wₜ | w₁, w₂, ..., wₜ₋₁) across text corpora.",
    7: "Markov Decision Process (MDP): Defined by tuple (S, A, P, R, γ) where agent seeks policy π*(a|s) maximizing expected discounted cumulative reward."
  },
  industry: {
    default: "In industry production systems, 80% of real-world value comes not from complex architectures, but from clean data engineering, strict test sets, and monitoring distribution drift over time.",
    0: "Every recommendation feed (Netflix, Spotify, YouTube) uses this foundational framing to rank content for millions of concurrent users.",
    1: "Financial fraud detection and credit underwriting still rely heavily on Gradient Boosted Trees (XGBoost/LightGBM) due to their unmatched performance on tabular data.",
    2: "Healthcare and lending algorithms in the EU and US are legally required to provide explainable model attribution under GDPR and Fair Lending regulations.",
    3: "Autonomous driving systems at Waymo and Tesla use massive deep neural networks trained on millions of miles of synthetic and logged camera sensor data.",
    4: "Medical imaging clinics use vision models to triage radiology scans in seconds, highlighting anomalies before human radiologists review them.",
    5: "Search engines (Google, Bing) use transformer embeddings (BERT, ColBERT) to semantically index and rank billions of web documents.",
    6: "Coding assistants (GitHub Copilot, Cursor) utilize autoregressive transformers to predict the next lines of code from surrounding context.",
    7: "Autonomous coding workflows and financial trading desks deploy multi-step agent loops that query databases, write test scripts, and auto-repair failures."
  },
  gotcha: {
    default: "Top beginner mistake: fitting preprocessing transformations (like StandardScaler or Imputer) on the full dataset before splitting. This leaks test statistics into training!",
    0: "Confusing the task with the model: 'LLM' is not a task; summarization and translation are tasks.",
    1: "Evaluating accuracy on an imbalanced dataset: if 99% of transactions are legitimate, a dummy model that predicts 'not fraud' every time achieves 99% accuracy while catching zero fraud!",
    2: "Believing feature importance proves causation: an explanation shows what the model correlated, NOT the real-world cause.",
    3: "Setting the learning rate too high: leads to exploding loss / NaN. Too low: takes millions of steps with zero progress.",
    4: "Failing to check class balance or image resolution: resizing non-square images without preserving aspect ratios distorts spatial features.",
    5: "Assuming high model confidence equals truth: LLMs generate fluent language tokens, not verified facts.",
    6: "Setting temperature = 0 expecting zero errors: low temperature makes outputs deterministic, not necessarily factually accurate.",
    7: "Creating agents without infinite-loop safeguards: always specify a maximum tool-call budget and strict timeout."
  }
};

function getMentorResponse(promptType, part, index) {
  const categoryMap = mentorKnowledge[promptType] || {};
  const specific = categoryMap[index];
  if (specific) return specific;
  const def = categoryMap.default || "Every concept in machine learning connects a mathematical goal with an empirical optimization loop.";
  return `${def} Specifically for <strong>${escapeHtml(part.chapter)}</strong>: focus on how <em>${escapeHtml(part.objective)}</em> ensures model decisions remain verifiable.`;
}

function answerMentorCustom(question, part) {
  const q = question.toLowerCase();
  unlockBadge("mentor_asker");
  addXP(10, "Asked AI Mentor");
  if (q.includes("code") || q.includes("python") || q.includes("run") || q.includes("syntax")) {
    return `In this exercise for <strong>${escapeHtml(part.chapter)}</strong>, ensure your variables exactly match the required prompt names. You can press <code>Ctrl+Enter</code> (or <code>Cmd+Enter</code> on Mac) to run code immediately in Pyodide. If you're stuck, click "Need a hint?" or test simple sub-expressions with <code>print()</code> first.`;
  }
  if (q.includes("overfit") || q.includes("variance") || q.includes("bias") || q.includes("split")) {
    return `A core principle in <strong>${escapeHtml(part.chapter)}</strong>: Overfitting happens when your model memorizes quirks in the training partition. Always evaluate on unseen test data, and never tune hyperparameters against the test set!`;
  }
  if (q.includes("formula") || q.includes("equation") || q.includes("math") || q.includes("loss")) {
    return `The core equation for this lesson links the prediction to the true label: minimizing error via the loss function. Check the <strong>Formula Book</strong> in the Study Library (top menu) for exact derivations and formulas!`;
  }
  if (q.includes("why") || q.includes("benefit") || q.includes("real world")) {
    return `In industrial and academic research, <strong>${escapeHtml(part.chapter)}</strong> is critical because it avoids false assumptions and ensures reproducibility. Without this step, models fail when deployed to production.`;
  }
  return `Great question about <strong>${escapeHtml(part.chapter)}</strong>! Here is the key takeaway: remember that <em>${escapeHtml(part.objective)}</em>. Start by running the worked example, then test your understanding with the knowledge check.`;
}

// ==================== ONBOARDING DIAGNOSTIC ====================
const onboardingState = {
  answers: { experience: "", goal: "", time: "" },
  matchedCourse: "handbook",
  matchedTrack: "practitioner"
};

function openOnboardingDialog() {
  onboardingState.answers = { experience: "", goal: "", time: "" };
  document.getElementById("onboarding-step-1").hidden = false;
  document.getElementById("onboarding-step-2").hidden = true;
  document.getElementById("onboarding-step-3").hidden = true;
  document.getElementById("onboarding-result").hidden = true;
  document.getElementById("onboarding-dialog").showModal();
}

function handleOnboardingChoice(field, value) {
  onboardingState.answers[field] = value;
  if (field === "experience") {
    document.getElementById("onboarding-step-1").hidden = true;
    document.getElementById("onboarding-step-2").hidden = false;
  } else if (field === "goal") {
    document.getElementById("onboarding-step-2").hidden = true;
    document.getElementById("onboarding-step-3").hidden = false;
  } else if (field === "time") {
    document.getElementById("onboarding-step-3").hidden = true;
    showOnboardingResult();
  }
}

function showOnboardingResult() {
  const { experience, goal } = onboardingState.answers;
  const resultDiv = document.getElementById("onboarding-result");
  const titleEl = document.getElementById("result-match-title");
  const descEl = document.getElementById("result-match-desc");
  let course = "handbook";
  let track = "practitioner";

  if (experience === "none" || goal === "python_ml") {
    course = "beginner";
    track = "practitioner";
    titleEl.textContent = "Python → Machine Learning (14-Week Beginner Pathway)";
    descEl.textContent = "We matched you to our foundational curriculum! It takes you gently from basic Python data structures all the way to training real scikit-learn models and completing an ML capstone.";
  } else if (goal === "research" || experience === "experienced") {
    course = "handbook";
    track = "frontier";
    titleEl.textContent = "The AI Researcher's Handbook (Frontier Track)";
    descEl.textContent = "We matched you to the Frontier Researcher Track! You'll dive straight into mathematical rigor, transformers, explainability, loss dynamics, and publication-ready research methodology.";
  } else {
    course = "handbook";
    track = "practitioner";
    titleEl.textContent = "The AI Researcher's Handbook (Practitioner Track)";
    descEl.textContent = "We matched you to the Practitioner Track! You'll master classic classifiers, deep learning, vision models, leakage prevention, and reliable evaluation metrics.";
  }

  onboardingState.matchedCourse = course;
  onboardingState.matchedTrack = track;
  resultDiv.hidden = false;
}

async function applyOnboardingMatch() {
  const { matchedCourse, matchedTrack } = onboardingState;
  document.getElementById("onboarding-dialog").close();
  if (matchedCourse) {
    await changeCourse(matchedCourse);
    if (matchedTrack) await changeTrack(matchedTrack);
    openPart(0);
    showToast(`Enrolled in ${matchedCourse === "beginner" ? "Python → ML" : matchedCourse === "pydsml" ? "DIU CPC PyDSML" : "AI Researcher"}!`);
  }
}

// ==================== PYTHON SANDBOX ====================
const sandboxTemplates = {
  intro: `# 1. Python Basics & Data Structures
numbers = [12, 45, 67, 89, 23, 90, 34]
squared_evens = [n ** 2 for n in numbers if n % 2 == 0]

data_dict = {
    "framework": "Pyodide / Python 3.12",
    "total_numbers": len(numbers),
    "mean_value": sum(numbers) / len(numbers),
    "squared_evens": squared_evens
}

print("=== Python Data Structures Summary ===")
for key, value in data_dict.items():
    print(f"  {key}: {value}")
`,
  math: `# 2. Vector Mathematics & Statistics
import math

vector_a = [1.2, 3.4, 0.5, 2.1, 4.0]
vector_b = [0.8, 3.1, 0.9, 2.5, 3.8]

dot_product = sum(a * b for a, b in zip(vector_a, vector_b))
euclidean_dist = math.sqrt(sum((a - b) ** 2 for a, b in zip(vector_a, vector_b)))
norm_a = math.sqrt(sum(a ** 2 for a in vector_a))
norm_b = math.sqrt(sum(b ** 2 for b in vector_b))
cosine_sim = dot_product / (norm_a * norm_b)

print(f"Vector A: {vector_a}")
print(f"Vector B: {vector_b}")
print(f"Dot Product:        {dot_product:.4f}")
print(f"Euclidean Distance: {euclidean_dist:.4f}")
print(f"Cosine Similarity:  {cosine_sim:.4f}")
`,
  classifier: `# 3. Logistic Model Decision Boundary Simulation
import math

def sigmoid(z):
    return 1.0 / (1.0 + math.exp(-max(min(z, 500), -500)))

w1, w2, b = 1.8, -1.2, -0.3
test_points = [
    (1.0, 0.5, 1),
    (-0.5, 1.2, 0),
    (2.1, 0.2, 1),
    (-1.0, 2.0, 0),
    (0.8, 0.9, 1)
]

print("=== Logistic Classifier Test ===")
correct = 0
for x1, x2, true_label in test_points:
    logit = w1 * x1 + w2 * x2 + b
    prob = sigmoid(logit)
    pred_label = 1 if prob >= 0.5 else 0
    is_correct = (pred_label == true_label)
    if is_correct: correct += 1
    print(f"Point ({x1:.1f}, {x2:.1f}) -> Logit: {logit:5.2f} | Prob: {prob:.2%} | Pred: {pred_label} (Truth: {true_label}) {'✓' if is_correct else '✗'}")

print(f"\\nHeld-out Accuracy: {correct / len(test_points):.0%}")
`,
  metrics: `# 4. Confusion Matrix, Precision, Recall, and F1
actual    = [1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1]
predicted = [1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1]

tp = sum(a == 1 and p == 1 for a, p in zip(actual, predicted))
fp = sum(a == 0 and p == 1 for a, p in zip(actual, predicted))
tn = sum(a == 0 and p == 0 for a, p in zip(actual, predicted))
fn = sum(a == 1 and p == 0 for a, p in zip(actual, predicted))

accuracy  = (tp + tn) / len(actual)
precision = tp / (tp + fp) if (tp + fp) else 0.0
recall    = tp / (tp + fn) if (tp + fn) else 0.0
f1_score  = 2 * precision * recall / (precision + recall) if (precision + recall) else 0.0

print("=== Classification Metrics Report ===")
print(f"Confusion Matrix:")
print(f"  [TN={tn:2d}  FP={fp:2d}]")
print(f"  [FN={fn:2d}  TP={tp:2d}]\\n")
print(f"Accuracy:  {accuracy:.1%}")
print(f"Precision: {precision:.1%} (True Positives / Predicted Positives)")
print(f"Recall:    {recall:.1%} (True Positives / Actual Positives)")
print(f"F1-Score:  {f1_score:.3f} (Harmonic Mean)")
`,
  neural: `# 5. Toy Perceptron / Neural Activation Functions
import math

def relu(x): return max(0.0, x)
def sigmoid(x): return 1.0 / (1.0 + math.exp(-max(min(x, 500), -500)))

inputs = [-2.5, -1.0, 0.0, 1.0, 2.5]

print("=== Activation Functions Comparison ===")
print("  Input  |  ReLU   | Sigmoid")
print("----------------------------")
for x in inputs:
    print(f" {x:6.2f}  | {relu(x):6.2f}  | {sigmoid(x):7.4f}")
`
};

function openSandboxDialog() {
  const dialog = document.getElementById("sandbox-dialog");
  const editor = document.getElementById("sandbox-code-editor");
  if (!editor.value.trim()) {
    editor.value = sandboxTemplates.intro;
  }
  dialog.showModal();
}

function loadSandboxTemplate(key) {
  const editor = document.getElementById("sandbox-code-editor");
  if (sandboxTemplates[key]) {
    editor.value = sandboxTemplates[key];
  }
}

function runSandboxCode() {
  const editor = document.getElementById("sandbox-code-editor");
  const outputEl = document.getElementById("sandbox-output-console");
  const statusEl = document.getElementById("sandbox-status");
  const runBtn = document.getElementById("sandbox-run-btn");
  if (!editor || !outputEl) return;
  outputEl.textContent = "Running Python code in WebAssembly worker…";
  statusEl.textContent = "Executing…";
  runBtn.disabled = true;

  const id = ++app.sandboxRequestId;
  const worker = createWorker();

  const handleMessage = ({ data }) => {
    if (data.id !== id) return;
    runBtn.disabled = false;
    statusEl.textContent = "Execution Complete";
    if (data.error) {
      outputEl.textContent = `Traceback (most recent call last):\n${data.error}`;
    } else {
      const clean = data.output.replace("__ACADEMY_EXERCISE_PASSED__", "").trim();
      outputEl.textContent = clean || "(Code ran successfully with no printed output.)";
      unlockBadge("python_runner");
      addXP(20, "Sandbox code executed");
    }
  };

  const currentOnMessage = worker.onmessage;
  worker.onmessage = (event) => {
    if (event.data.id === id) {
      handleMessage(event);
    } else if (currentOnMessage) {
      currentOnMessage(event);
    }
  };

  worker.postMessage({
    id,
    code: editor.value,
    tests: "",
    mode: "run"
  });
}

// ==================== CERTIFICATE ====================
function openCertificateDialog() {
  const dialog = document.getElementById("certificate-dialog");
  const recipientInput = document.getElementById("cert-recipient-input");
  const recipientName = document.getElementById("cert-recipient-name");
  const courseName = document.getElementById("cert-course-name");
  const dateVal = document.getElementById("cert-date-value");
  const idVal = document.getElementById("cert-id-value");

  const savedName = localStorage.getItem(certRecipientKey) || (app.user ? app.user.name : "Learner");
  recipientInput.value = savedName;
  recipientName.textContent = savedName;
  courseName.textContent = app.courseId === "beginner" ? "Python → Machine Learning (14-Week Curriculum)" : "The AI Researcher's Handbook (Second Edition)";
  dateVal.textContent = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  
  const codeSuffix = Math.abs((savedName + app.courseId).split("").reduce((acc, c) => (acc * 31 + c.charCodeAt(0)) | 0, 0)).toString(16).toUpperCase().padStart(5, "X");
  idVal.textContent = `NV-2026-${codeSuffix}`;

  dialog.showModal();
}

// ==================== FLASHCARDS DECK ====================
const flashcardsDeck = [
  {
    category: "foundations",
    badge: "PART I · FOUNDATIONS",
    frontTitle: "AI vs ML vs Deep Learning",
    frontText: "What is the fundamental distinction between these three concentric fields of modern artificial intelligence?",
    backTitle: "The Hierarchy of Learning",
    backText: "• <strong>Artificial Intelligence</strong>: The overarching discipline of creating systems that perform intelligent tasks.<br>• <strong>Machine Learning</strong>: Systems learn statistical patterns from data rather than explicit hand-written rules.<br>• <strong>Deep Learning</strong>: ML methods utilizing multi-layer neural networks capable of hierarchical representation learning.",
    backIntuition: "Think of AI as transportation, ML as automobiles, and Deep Learning as electric vehicles."
  },
  {
    category: "ml",
    badge: "PART II · MACHINE LEARNING",
    frontTitle: "The Bias-Variance Tradeoff",
    frontText: "How do underfitting and overfitting relate to bias and variance in statistical learning?",
    backTitle: "Balancing Model Flexibility",
    backText: "• <strong>High Bias (Underfitting)</strong>: The model is overly simplistic and cannot capture underlying data regularities.<br>• <strong>High Variance (Overfitting)</strong>: The model is excessively complex, fitting random noise and idiosyncrasies of the training sample.",
    backIntuition: "Total generalization error = Bias² + Variance + Irreducible Noise."
  },
  {
    category: "ml",
    badge: "PART II · MACHINE LEARNING",
    frontTitle: "Data Leakage Prevention",
    frontText: "What constitutes data leakage, and what is the cardinal rule to prevent it during preprocessing?",
    backTitle: "The Split-First Principle",
    backText: "Data leakage occurs whenever information from outside the training partition enters training or model selection.<br><br><strong>Golden Rule</strong>: Always split into Train, Validation, and Test BEFORE calculating any scalers, imputers, or encoders. Fit only on Train, then transform Validation/Test.",
    backIntuition: "Never look at the final exam before studying the textbook."
  },
  {
    category: "ml",
    badge: "PART II · TRADITIONAL MODELS",
    frontTitle: "Random Forest vs Gradient Boosting",
    frontText: "What is the algorithmic difference between Bagging (Random Forest) and Boosting (GBDT / XGBoost)?",
    backTitle: "Parallel Voting vs Sequential Correction",
    backText: "• <strong>Random Forest (Bagging)</strong>: Trains many deep trees in parallel on bootstrap samples. Predictions are averaged to reduce variance.<br>• <strong>Gradient Boosted Trees (Boosting)</strong>: Trains shallow trees sequentially. Each new tree fits the residual errors (gradients) of the ensemble so far, reducing bias.",
    backIntuition: "Random Forest is a committee of experts voting; Boosting is a student correcting mistakes after each question."
  },
  {
    category: "evaluation",
    badge: "PART X · EVALUATION",
    frontTitle: "Precision vs Recall vs F1",
    frontText: "When should an ML practitioner prioritize Precision over Recall, and vice-versa?",
    backTitle: "Matching Metrics to the Cost of Errors",
    backText: "• <strong>Precision = TP / (TP + FP)</strong>: Prioritize when false alarms are costly (e.g. spam filtering, blocking valid transactions).<br>• <strong>Recall = TP / (TP + FN)</strong>: Prioritize when missing a positive is critical (e.g. cancer diagnosis, fault detection).<br>• <strong>F1 Score</strong>: The harmonic mean, balancing both on imbalanced data.",
    backIntuition: "Precision is quality of positives; Recall is coverage of positives."
  },
  {
    category: "neural",
    badge: "PART IV · DEEP LEARNING",
    frontTitle: "Backpropagation & Gradient Descent",
    frontText: "How do gradients computed by the chain rule guide parameter updates in neural networks?",
    backTitle: "Navigating the Loss Landscape",
    backText: "Backpropagation applies the calculus chain rule from output loss backward through network layers to calculate ∂Loss/∂W for each weight.<br><br>The optimizer updates parameters: <code>W ← W − η · ∂Loss/∂W</code>, where η is the learning rate, taking steps down the steepest slope.",
    backIntuition: "Walking down a foggy mountain by feeling which direction slopes downward under your feet."
  },
  {
    category: "transformers",
    badge: "PART VI · TRANSFORMERS",
    frontTitle: "Self-Attention Mechanism",
    frontText: "What do Queries (Q), Keys (K), and Values (V) represent in the attention formula?",
    backTitle: "Soft Retrieval Across Sequences",
    backText: "<code>Attention(Q, K, V) = softmax(Q·Kᵀ / √d_k) · V</code><br><br>• <strong>Query (Q)</strong>: What a token searches for.<br>• <strong>Key (K)</strong>: What a token advertises.<br>• <strong>Value (V)</strong>: The content passed along if a query-key match is strong.<br>• <strong>√d_k scaling</strong> prevents dot products from growing excessively large.",
    backIntuition: "Query is a search query, Key is a page title/tags, Value is the webpage content."
  },
  {
    category: "transformers",
    badge: "PART XI · GENERATIVE AI",
    frontTitle: "Decoding: Temperature & Top-p",
    frontText: "How do temperature and nucleus (top-p) sampling alter the probability distribution over candidate tokens?",
    backTitle: "Shaping the Sampling Tail",
    backText: "• <strong>Temperature (T)</strong>: Divides logits by T before softmax. As T → 0, distribution becomes greedy/deterministic. As T increases, distribution flattens, increasing diversity.<br>• <strong>Top-p (Nucleus)</strong>: Samples only from the smallest set of tokens whose cumulative probability exceeds p (e.g. 0.90), cutting off the unpredictable long tail.",
    backIntuition: "Temperature controls variety; Top-p prevents nonsensical words."
  },
  {
    category: "research",
    badge: "PART XIII · RESEARCH METHODOLOGY",
    frontTitle: "Designing a Rigorous Ablation Study",
    frontText: "What is an ablation study in machine learning research, and why is it mandatory for scientific credibility?",
    backTitle: "Isolating What Actually Works",
    backText: "An ablation removes or modifies exactly one architectural feature, loss term, or preprocessing trick at a time, holding all other hyperparameters and random seeds constant.<br><br>Without ablations, you cannot attribute whether an improvement came from your novel idea or lucky random seeds.",
    backIntuition: "Testing a car engine by changing one spark plug at a time rather than changing the entire car."
  },
  {
    category: "foundations",
    badge: "PART VIII · AGENTS",
    frontTitle: "The ReAct Loop for AI Agents",
    frontText: "What is the Reason + Act (ReAct) cycle in modern tool-augmented language agents?",
    backTitle: "Interleaving Thought and Action",
    backText: "Instead of producing an answer in a single forward pass, an agent alternates between:<br>1. <strong>Thought</strong>: Reasoning explicitly about state and goal.<br>2. <strong>Action</strong>: Selecting an external tool (Search, Code Execution, API, Database).<br>3. <strong>Observation</strong>: Receiving the structured environmental result.<br>4. <strong>Update</strong>: Deciding whether goal is satisfied or next action needed.",
    backIntuition: "Thinking out loud before opening a book, reading the page, then summarizing the answer."
  }
];

function renderFlashcards() {
  const filtered = flashcardsDeck.filter((card) => {
    if (app.flashcardFilter === "all") return true;
    return card.category === app.flashcardFilter;
  });
  if (app.flashcardIndex >= filtered.length) app.flashcardIndex = 0;
  const card = filtered[app.flashcardIndex] || flashcardsDeck[0];
  const isMastered = app.masteredCards.includes(card.frontTitle);

  document.getElementById("library-count").textContent = `CARD ${app.flashcardIndex + 1} OF ${filtered.length} · ${app.masteredCards.length} MASTERED`;

  return `<div class="flashcards-container">
    <div class="flashcard-filters">
      ${[
        ["all", "All Decks"],
        ["foundations", "Foundations"],
        ["ml", "Traditional ML"],
        ["evaluation", "Evaluation & Metrics"],
        ["neural", "Neural Networks"],
        ["transformers", "Transformers & LLMs"],
        ["research", "Research Methods"]
      ].map(([cat, label]) => `<button class="filter-btn${app.flashcardFilter === cat ? " is-active" : ""}" type="button" data-flash-filter="${cat}">${label}</button>`).join("")}
    </div>

    <div class="flashcard-perspective" id="flashcard-box">
      <div class="flashcard-inner" id="flashcard-inner">
        <div class="flashcard-face flashcard-front">
          <div>
            <span class="card-header-badge">${card.badge}</span>
            <div class="card-main-content">
              <h3>${card.frontTitle}</h3>
              <p>${card.frontText}</p>
            </div>
          </div>
          <span class="card-flip-prompt">Click anywhere or press Space to reveal answer ↺</span>
        </div>
        <div class="flashcard-face flashcard-back">
          <div>
            <span class="card-header-badge">${card.badge} · ANSWER</span>
            <div class="card-main-content">
              <h3>${card.backTitle}</h3>
              <div class="card-back-explanation">${card.backText}</div>
              ${card.backIntuition ? `<p style="margin-top:10px;font-size:12px;color:#205e40;"><strong>Intuition:</strong> ${card.backIntuition}</p>` : ""}
            </div>
          </div>
          <span class="card-flip-prompt">Click to flip back ↺</span>
        </div>
      </div>
    </div>

    <div class="flashcard-controls">
      <button class="button button-light" id="card-prev-btn" type="button">← Previous</button>
      <button class="button button-light" id="card-flip-btn" type="button">Flip Card ⟳</button>
      <button class="button button-dark" id="card-next-btn" type="button">Next →</button>
      <button class="button button-light" id="card-master-btn" type="button">${isMastered ? "✓ Mastered" : "Mark Mastered"}</button>
      <button class="button button-light" id="card-shuffle-btn" type="button">Shuffle Cards</button>
    </div>
  </div>`;
}

// ==================== CHEAT SHEETS ====================
function renderCheatsheets() {
  document.getElementById("library-count").textContent = "QUICK REFERENCE GUIDES";
  return `<div class="cheatsheets-container">
    <article class="cheatsheet-section">
      <h3>1. Python for AI & Data Science Essentials</h3>
      <p>Idiomatic patterns frequently needed in modern AI data pipelines and scientific computing.</p>
      <div class="code-snippet-box">
        <button class="copy-snippet-btn" type="button" data-copy="python-essentials">Copy</button>
        <pre><code id="snippet-python-essentials"># List comprehension with condition
clean_data = [x.strip().lower() for x in raw_tokens if len(x) > 2]

# Dictionary comprehension
word_to_id = {token: idx for idx, token in enumerate(vocabulary)}

# Fast zip and pairwise enumeration
for step, (x_batch, y_batch) in enumerate(zip(inputs, targets)):
    pass

# Safe dictionary retrieval with default
learning_rate = config.get("lr", 0.001)</code></pre>
      </div>
    </article>

    <article class="cheatsheet-section">
      <h3>2. NumPy Vector & Matrix Operations</h3>
      <p>High-performance vector operations and broadcasting rules.</p>
      <div class="code-snippet-box">
        <button class="copy-snippet-btn" type="button" data-copy="numpy-essentials">Copy</button>
        <pre><code id="snippet-numpy-essentials">import numpy as np

# Shapes & Reshaping
X = np.zeros((100, 10))          # 100 samples, 10 features
X_flat = X.reshape(-1)           # Flatten to 1D
X_transposed = X.T               # Matrix transpose (10, 100)

# Matrix Dot Product
W = np.random.randn(10, 2)       # Weight matrix (10, 2)
logits = X @ W                   # Shape (100, 2)

# Normalization across training axis
mean = np.mean(X, axis=0)
std = np.std(X, axis=0) + 1e-8
X_normalized = (X - mean) / std</code></pre>
      </div>
    </article>

    <article class="cheatsheet-section">
      <h3>3. Scikit-Learn Pipelines & Model Validation</h3>
      <p>Standard workflow preventing data leakage and optimizing hyperparameters.</p>
      <div class="code-snippet-box">
        <button class="copy-snippet-btn" type="button" data-copy="sklearn-pipeline">Copy</button>
        <pre><code id="snippet-sklearn-pipeline">from sklearn.model_selection import train_test_split, cross_val_score
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.ensemble import RandomForestClassifier

# 1. Split FIRST to prevent leakage
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.20, random_state=42, stratify=y
)

# 2. Encapsulate preprocessing inside a Pipeline
pipeline = Pipeline([
    ("scaler", StandardScaler()),
    ("classifier", RandomForestClassifier(n_estimators=100, random_state=42))
])

# 3. Fit strictly on training partition
pipeline.fit(X_train, y_train)

# 4. Final held-out evaluation
test_score = pipeline.score(X_test, y_test)</code></pre>
      </div>
    </article>

    <article class="cheatsheet-section">
      <h3>4. Machine Learning Evaluation Decision Tree</h3>
      <p>How to choose the mathematically correct metric for your error costs.</p>
      <div class="code-snippet-box">
        <button class="copy-snippet-btn" type="button" data-copy="metrics-guide">Copy</button>
        <pre><code id="snippet-metrics-guide">• Balanced Classes & Equal Error Cost:
  → Use ACCURACY = (TP + TN) / Total

• Imbalanced Classes or High Cost of False Positives (e.g. Spam, Fraud Block):
  → Use PRECISION = TP / (TP + FP)

• Imbalanced Classes or High Cost of False Negatives (e.g. Disease Screen, Fault):
  → Use RECALL / SENSITIVITY = TP / (TP + FN)

• Balance of Both Precision and Recall on Skewed Data:
  → Use F1-SCORE = 2 * (P * R) / (P + R)

• Threshold-Independent Discriminative Capability:
  → Use ROC-AUC (Area Under Receiver Operating Characteristic)</code></pre>
      </div>
    </article>
  </div>`;
}

// ==================== GRADE CALCULATOR (DIU CPC PyDSML Track) ====================
let gradeCalcState = {
  a1: 9, a2: 8, a3: 10, a4: 9,
  cp1: 9, cp2: 8,
  capstone: 27,
  attendance: 10
};

function calculateGrade() {
  const assignTotal = gradeCalcState.a1 + gradeCalcState.a2 + gradeCalcState.a3 + gradeCalcState.a4;
  const checkpointTotal = gradeCalcState.cp1 + gradeCalcState.cp2;
  const capstoneTotal = gradeCalcState.capstone;
  const labTotal = gradeCalcState.attendance;
  const total = assignTotal + checkpointTotal + capstoneTotal + labTotal;

  let letter = "F";
  let gpa = "0.00";
  let status = "Needs improvement to qualify for certification.";
  let isWarning = true;

  if (total >= 80) { letter = "A+"; gpa = "4.00"; status = "Outstanding performance! Certificate with Distinction."; isWarning = false; }
  else if (total >= 75) { letter = "A"; gpa = "3.75"; status = "Excellent mastery. Verified Certificate eligible."; isWarning = false; }
  else if (total >= 70) { letter = "A-"; gpa = "3.50"; status = "Very good progress. Verified Certificate eligible."; isWarning = false; }
  else if (total >= 65) { letter = "B+"; gpa = "3.25"; status = "Good standing. Verified Certificate eligible."; isWarning = false; }
  else if (total >= 60) { letter = "B"; gpa = "3.00"; status = "Satisfactory completion. Certificate eligible."; isWarning = false; }
  else if (total >= 55) { letter = "B-"; gpa = "2.75"; status = "Passing standing."; isWarning = false; }
  else if (total >= 50) { letter = "C+"; gpa = "2.50"; status = "Passing. Capstone defense required."; isWarning = false; }
  else if (total >= 45) { letter = "C"; gpa = "2.25"; status = "Conditional pass."; isWarning = true; }
  else if (total >= 40) { letter = "D"; gpa = "2.00"; status = "Minimum passing grade."; isWarning = true; }

  return { total, assignTotal, checkpointTotal, capstoneTotal, labTotal, letter, gpa, status, isWarning };
}

function renderGradeCalculator() {
  document.getElementById("library-count").textContent = "DIU CPC 40 / 20 / 30 / 10 FORMULA";
  const { total, assignTotal, checkpointTotal, capstoneTotal, labTotal, letter, gpa, status, isWarning } = calculateGrade();

  return `<div class="gradecalc-container">
    <div style="background:var(--sand);border:1px solid var(--line);border-radius:8px;padding:12px 16px;font-size:12px;color:var(--ink);">
      <strong>DIU Computer Programming Club · PyDSML Grading Matrix:</strong> 
      4 Assignments (40%) + 2 Mid-Track Checkpoints (20%) + Final Capstone Project & Defense (30%) + Lab Attendance & Participation (10%).
    </div>

    <div class="gradecalc-grid">
      <div class="gradecalc-inputs">
        <div class="grade-component-card">
          <div class="grade-comp-head">
            <strong>1. Assignments (4 Total)</strong>
            <span class="grade-comp-weight">40% Total (10 pts each)</span>
          </div>
          ${[1, 2, 3, 4].map((num) => `
            <div class="grade-slider-row">
              <label for="grade-a${num}">Assignment ${num}:</label>
              <input type="range" id="grade-a${num}" data-grade-key="a${num}" min="0" max="10" step="0.5" value="${gradeCalcState[`a${num}`]}">
              <span class="grade-val" id="val-a${num}">${gradeCalcState[`a${num}`]} / 10</span>
            </div>
          `).join("")}
        </div>

        <div class="grade-component-card">
          <div class="grade-comp-head">
            <strong>2. Mid-Track Checkpoints (2 Total)</strong>
            <span class="grade-comp-weight">20% Total (10 pts each)</span>
          </div>
          ${[1, 2].map((num) => `
            <div class="grade-slider-row">
              <label for="grade-cp${num}">Checkpoint ${num}:</label>
              <input type="range" id="grade-cp${num}" data-grade-key="cp${num}" min="0" max="10" step="0.5" value="${gradeCalcState[`cp${num}`]}">
              <span class="grade-val" id="val-cp${num}">${gradeCalcState[`cp${num}`]} / 10</span>
            </div>
          `).join("")}
        </div>

        <div class="grade-component-card">
          <div class="grade-comp-head">
            <strong>3. Capstone Project & Repository</strong>
            <span class="grade-comp-weight">30% Total</span>
          </div>
          <div class="grade-slider-row">
            <label for="grade-capstone">Project & Defense:</label>
            <input type="range" id="grade-capstone" data-grade-key="capstone" min="0" max="30" step="1" value="${gradeCalcState.capstone}">
            <span class="grade-val" id="val-capstone">${gradeCalcState.capstone} / 30</span>
          </div>
        </div>

        <div class="grade-component-card">
          <div class="grade-comp-head">
            <strong>4. Lab Attendance & Problem Solving</strong>
            <span class="grade-comp-weight">10% Total</span>
          </div>
          <div class="grade-slider-row">
            <label for="grade-attendance">Weekly Labs:</label>
            <input type="range" id="grade-attendance" data-grade-key="attendance" min="0" max="10" step="0.5" value="${gradeCalcState.attendance}">
            <span class="grade-val" id="val-attendance">${gradeCalcState.attendance} / 10</span>
          </div>
        </div>
      </div>

      <div class="gradecalc-result-card">
        <span class="manifesto-tag">LIVE ASSESSMENT</span>
        <div class="result-big-score" id="res-total">${total.toFixed(1)}%</div>
        <div class="result-letter-grade" id="res-letter">${letter}</div>
        <div class="result-gpa-badge" id="res-gpa">Grade Point: <strong>${gpa} / 4.00</strong></div>
        <div class="result-status-pill${isWarning ? " is-warning" : ""}" id="res-status">${status}</div>
        
        <div class="result-breakdown-list">
          <div class="breakdown-row"><span>Assignments (40%):</span><strong id="res-assign">${assignTotal.toFixed(1)} / 40</strong></div>
          <div class="breakdown-row"><span>Checkpoints (20%):</span><strong id="res-checkpoint">${checkpointTotal.toFixed(1)} / 20</strong></div>
          <div class="breakdown-row"><span>Capstone (30%):</span><strong id="res-capstone">${capstoneTotal.toFixed(1)} / 30</strong></div>
          <div class="breakdown-row"><span>Lab & Attendance (10%):</span><strong id="res-lab">${labTotal.toFixed(1)} / 10</strong></div>
        </div>

        <button class="button button-dark" type="button" id="grade-claim-cert" style="margin-top:20px;width:100%;" ${total >= 60 ? "" : "disabled"}>
          ${total >= 60 ? "Preview Verified Certificate ↗" : "Score 60%+ to Unlock Certificate"}
        </button>
      </div>
    </div>
  </div>`;
}

// ==================== TOOLS CHECKLIST ====================
const checklistKey = "neuroverse_tools_checklist";
const toolsCatalog = [
  {
    category: "Python & Local Environment",
    tools: [
      { id: "python_installed", name: "Python 3.10+ Installed", desc: "Standard 64-bit CPython runtime installed and accessible in shell via python3 --version." },
      { id: "ide_ready", name: "Code Editor (VS Code / Cursor / PyCharm)", desc: "Configured with Python and Pylance extensions for linting and type hinting." },
      { id: "venv_ready", name: "Virtual Environment (venv or conda)", desc: "Isolated virtual environment created: python3 -m venv .venv && source .venv/bin/activate." }
    ]
  },
  {
    category: "Data Science & ML Core",
    tools: [
      { id: "numpy_pd", name: "NumPy & Pandas", desc: "Vectorized linear algebra and tabular DataFrame data manipulation libraries." },
      { id: "viz_libs", name: "Matplotlib & Seaborn", desc: "Scientific publication-quality charts, confusion matrices, and distribution plots." },
      { id: "sklearn_installed", name: "Scikit-Learn", desc: "Classic ML algorithms, preprocessing pipelines, cross-validation, and metrics." }
    ]
  },
  {
    category: "Deep Learning, PyTorch & LLMs",
    tools: [
      { id: "pytorch_installed", name: "PyTorch & Torchvision", desc: "Modern autograd tensor framework with GPU/MPS accelerator backend support." },
      { id: "hf_installed", name: "Hugging Face Transformers & Datasets", desc: "Pretrained weights, tokenizers, and open-source foundation model access." },
      { id: "jupyter_installed", name: "JupyterLab / Notebooks", desc: "Interactive experimentation and exploratory data analysis sandbox." }
    ]
  },
  {
    category: "Research, Git & Publishing",
    tools: [
      { id: "git_installed", name: "Git & GitHub CLI", desc: "Version control for reproducible experiments, branches, and public code releases." },
      { id: "latex_ready", name: "LaTeX / Overleaf Account", desc: "Standard mathematical typesetting for academic AI research papers (arXiv / NeurIPS / ICML)." },
      { id: "papers_ready", name: "Papers With Code & arXiv Reader", desc: "Tracking state-of-the-art benchmarks and reproducing breakthrough publications." }
    ]
  }
];

function getCheckedTools() {
  try {
    return JSON.parse(localStorage.getItem(checklistKey) || "[]");
  } catch {
    return [];
  }
}

function toggleToolCheck(toolId) {
  let checked = getCheckedTools();
  if (checked.includes(toolId)) {
    checked = checked.filter((id) => id !== toolId);
  } else {
    checked.push(toolId);
    addXP(10, "Environment tool verified");
  }
  try {
    localStorage.setItem(checklistKey, JSON.stringify(checked));
  } catch (e) {
    console.error("Could not save checklist.", e);
  }
  const totalTools = toolsCatalog.reduce((sum, cat) => sum + cat.tools.length, 0);
  if (checked.length === totalTools) {
    unlockBadge("tools_ready");
  }
  renderLibrary();
}

function renderToolsChecklist() {
  const checked = getCheckedTools();
  const allTools = toolsCatalog.flatMap((c) => c.tools);
  const total = allTools.length;
  const count = checked.length;
  const percent = Math.round((count / total) * 100);

  document.getElementById("library-count").textContent = `${count} / ${total} TOOLS VERIFIED (${percent}%)`;

  return `<div class="checklist-container">
    <div class="checklist-progress-bar-wrap">
      <div class="checklist-progress-head">
        <strong>ML Researcher Environment Readiness</strong>
        <span>${count} of ${total} verified (${percent}%)</span>
      </div>
      <div class="checklist-track">
        <div class="checklist-fill" style="width: ${percent}%;"></div>
      </div>
    </div>

    <div class="checklist-pip-box">
      <div>
        <span style="font-size:11px;color:#9ebca4;display:block;margin-bottom:4px;">ONE-LINE PIP INSTALL COMMAND</span>
        <code>pip install numpy pandas matplotlib seaborn scikit-learn torch torchvision transformers datasets jupyterlab</code>
      </div>
      <button class="button button-light copy-snippet-btn" style="position:static;" type="button" data-copy="pip-command">Copy Command</button>
      <pre style="display:none;"><code id="snippet-pip-command">pip install numpy pandas matplotlib seaborn scikit-learn torch torchvision transformers datasets jupyterlab</code></pre>
    </div>

    ${toolsCatalog.map((cat) => `
      <section class="checklist-group">
        <h3>${cat.category}</h3>
        <div class="checklist-items">
          ${cat.tools.map((tool) => {
            const isDone = checked.includes(tool.id);
            return `
              <label class="check-item">
                <input type="checkbox" data-tool-id="${tool.id}" ${isDone ? "checked" : ""}>
                <div class="check-item-text">
                  <strong>${escapeHtml(tool.name)}</strong>
                  <small>${escapeHtml(tool.desc)}</small>
                </div>
              </label>
            `;
          }).join("")}
        </div>
      </section>
    `).join("")}
  </div>`;
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
  document.getElementById("course-curriculum-label").textContent = app.courseId === "beginner" ? "14-WEEK CURRICULUM" : app.courseId === "pydsml" ? "DIU CPC TRACK" : "HANDBOOK CURRICULUM";
  document.getElementById("course-pathway-label").textContent = app.courseId === "handbook" ? "YOUR LEARNING PATH" : "YOUR COURSE";
  document.getElementById("track-switch").hidden = app.courseId !== "handbook";
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
      <div class="lesson-audio-bar">
        <div class="audio-controls-row">
          <button class="audio-play-btn" id="audio-play-btn" type="button">▶ Play</button>
          <button class="audio-speed-btn" id="audio-speed-btn" type="button">${app.audioState.rate}x</button>
          <select class="audio-voice-select" id="audio-voice-select" title="Narrator Voice" aria-label="Select Voice"></select>
          <div class="audio-wave" id="audio-wave" aria-hidden="true">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
          <button class="audio-stop-btn" id="audio-stop-btn" type="button">■ Stop</button>
        </div>
        <div class="audio-info">
          <strong>SIRI AUDIO COMPANION</strong>
          <small id="audio-status-text">Siri Natural Speech · Smooth conversational audio guide</small>
        </div>
      </div>
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
      <section class="ai-mentor-panel" id="ai-mentor-widget">
        <div class="mentor-header">
          <div class="mentor-title">
            <span class="mentor-avatar">AI</span>
            <div>
              <strong>Interactive AI Research Mentor</strong>
              <small>Socratic guidance, intuition explanations, and real-world transfer</small>
            </div>
          </div>
        </div>
        <div class="mentor-prompt-chips">
          <button class="mentor-preset-btn" type="button" data-prompt="eli5">Explain Simply (ELI5)</button>
          <button class="mentor-preset-btn" type="button" data-prompt="intuition">Theoretical Intuition</button>
          <button class="mentor-preset-btn" type="button" data-prompt="practical">Real-World Application</button>
        </div>
        <div class="mentor-chat-area" id="mentor-chat-messages">
          <div class="mentor-msg mentor-bot">
            Hello researcher! I am your AI Mentor for <em>${escapeHtml(part.chapter)}</em>. Choose a quick question above or ask anything about this concept below!
          </div>
        </div>
        <form class="mentor-input-row" id="mentor-chat-form">
          <input type="text" id="mentor-chat-input" placeholder="Ask a question about this lesson..." maxlength="200" required>
          <button class="button button-dark" type="submit">Ask Mentor</button>
        </form>
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
      <section class="lesson-side-card lesson-notes-card">
        <div class="notes-header">
          <h3>Study Notes</h3>
          <span class="notes-status" id="notes-status">Auto-saved</span>
        </div>
        <p style="font-size:11px;color:var(--muted);margin-bottom:8px;">Jot down your key research reflections and takeaways for this part.</p>
        <textarea class="lesson-notes-textarea" id="lesson-notes-input" placeholder="Write key takeaways, equations, or experiment ideas..."></textarea>
        <button class="text-button" type="button" id="export-notes-btn" style="margin-top:8px;">Export All Notes (.md) ↗</button>
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
    flashcards: renderFlashcards,
    cheatsheets: renderCheatsheets,
    gradecalc: renderGradeCalculator,
    checklist: renderToolsChecklist,
    projects: renderProjects,
    toolkit: renderResearchStudio
  };
  const renderer = contents[app.libraryTab] || renderGlossary;
  document.getElementById("library-content").innerHTML = renderer();

  // Toolkit events
  const researchPlanForm = document.getElementById("research-plan-form");
  if (app.libraryTab === "toolkit" && researchPlanForm) {
    researchPlanForm.addEventListener("input", saveResearchPlan);
    document.getElementById("export-plan").addEventListener("click", exportResearchPlan);
  }

  // Flashcards events
  if (app.libraryTab === "flashcards") {
    const box = document.getElementById("flashcard-box");
    const flipBtn = document.getElementById("card-flip-btn");
    const nextBtn = document.getElementById("card-next-btn");
    const prevBtn = document.getElementById("card-prev-btn");
    const masterBtn = document.getElementById("card-master-btn");
    const shuffleBtn = document.getElementById("card-shuffle-btn");

    const flipCard = () => {
      const inner = document.getElementById("flashcard-inner");
      if (inner) inner.classList.toggle("is-flipped");
    };

    if (box) box.addEventListener("click", flipCard);
    if (flipBtn) flipBtn.addEventListener("click", flipCard);
    if (nextBtn) nextBtn.addEventListener("click", () => {
      app.flashcardIndex += 1;
      renderLibrary();
    });
    if (prevBtn) prevBtn.addEventListener("click", () => {
      app.flashcardIndex = Math.max(0, app.flashcardIndex - 1);
      renderLibrary();
    });
    if (shuffleBtn) shuffleBtn.addEventListener("click", () => {
      app.flashcardIndex = Math.floor(Math.random() * flashcardsDeck.length);
      renderLibrary();
    });
    if (masterBtn) masterBtn.addEventListener("click", () => {
      const filtered = flashcardsDeck.filter((c) => app.flashcardFilter === "all" || c.category === app.flashcardFilter);
      const card = filtered[app.flashcardIndex] || flashcardsDeck[0];
      if (app.masteredCards.includes(card.frontTitle)) {
        app.masteredCards = app.masteredCards.filter((t) => t !== card.frontTitle);
      } else {
        app.masteredCards.push(card.frontTitle);
        addXP(20, "Flashcard Mastered");
        if (app.masteredCards.length >= 8) unlockBadge("flashcard_whiz");
      }
      try {
        localStorage.setItem(masteredCardsKey, JSON.stringify(app.masteredCards));
      } catch (e) {
        console.error("Could not save mastered cards.", e);
      }
      renderLibrary();
    });

    document.querySelectorAll("[data-flash-filter]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        app.flashcardFilter = e.currentTarget.dataset.flashFilter;
        app.flashcardIndex = 0;
        renderLibrary();
      });
    });
  }

  // Grade calculator events
  if (app.libraryTab === "gradecalc") {
    document.querySelectorAll("[data-grade-key]").forEach((slider) => {
      slider.addEventListener("input", (e) => {
        const key = e.target.dataset.gradeKey;
        const val = parseFloat(e.target.value);
        gradeCalcState[key] = val;
        const valEl = document.getElementById(`val-${key}`);
        const max = key === "capstone" ? 30 : 10;
        if (valEl) valEl.textContent = `${val} / ${max}`;

        const res = calculateGrade();
        const totalEl = document.getElementById("res-total");
        const letterEl = document.getElementById("res-letter");
        const gpaEl = document.getElementById("res-gpa");
        const statusEl = document.getElementById("res-status");
        const assignEl = document.getElementById("res-assign");
        const cpEl = document.getElementById("res-checkpoint");
        const capEl = document.getElementById("res-capstone");
        const labEl = document.getElementById("res-lab");
        const certBtn = document.getElementById("grade-claim-cert");

        if (totalEl) totalEl.textContent = `${res.total.toFixed(1)}%`;
        if (letterEl) letterEl.textContent = res.letter;
        if (gpaEl) gpaEl.innerHTML = `Grade Point: <strong>${res.gpa} / 4.00</strong>`;
        if (statusEl) {
          statusEl.textContent = res.status;
          statusEl.classList.toggle("is-warning", res.isWarning);
        }
        if (assignEl) assignEl.textContent = `${res.assignTotal.toFixed(1)} / 40`;
        if (cpEl) cpEl.textContent = `${res.checkpointTotal.toFixed(1)} / 20`;
        if (capEl) capEl.textContent = `${res.capstoneTotal.toFixed(1)} / 30`;
        if (labEl) labEl.textContent = `${res.labTotal.toFixed(1)} / 10`;
        if (certBtn) {
          certBtn.disabled = res.total < 60;
          certBtn.textContent = res.total >= 60 ? "Preview Verified Certificate ↗" : "Score 60%+ to Unlock Certificate";
        }
      });
    });

    const certBtn = document.getElementById("grade-claim-cert");
    if (certBtn) certBtn.addEventListener("click", () => {
      document.getElementById("library-dialog").close();
      openCertificateDialog();
    });
  }

  // Tools Checklist events
  if (app.libraryTab === "checklist") {
    document.querySelectorAll("[data-tool-id]").forEach((cb) => {
      cb.addEventListener("change", (e) => {
        toggleToolCheck(e.target.dataset.toolId);
      });
    });
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

function openMobileSidebar() {
  document.getElementById("sidebar")?.classList.add("is-open");
  document.getElementById("sidebar-backdrop")?.classList.add("is-visible");
  document.body.style.overflow = "hidden";
}

function closeMobileSidebar() {
  document.getElementById("sidebar")?.classList.remove("is-open");
  document.getElementById("sidebar-backdrop")?.classList.remove("is-visible");
  document.body.style.overflow = "";
}

function openPart(index) {
  closeMobileSidebar();
  if (!Number.isInteger(index) || index < 0 || index >= app.parts.length) return;
  stopAudio();
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

  // Audio companion listeners
  const audioPlayBtn = document.getElementById("audio-play-btn");
  const audioSpeedBtn = document.getElementById("audio-speed-btn");
  const audioStopBtn = document.getElementById("audio-stop-btn");
  if (audioPlayBtn) audioPlayBtn.addEventListener("click", () => togglePlayAudio(part));
  if (audioSpeedBtn) audioSpeedBtn.addEventListener("click", toggleAudioSpeed);
  if (audioStopBtn) audioStopBtn.addEventListener("click", stopAudio);
  updateAudioVoiceSelect();

  // AI Mentor listeners
  document.querySelectorAll(".mentor-preset-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const type = btn.dataset.prompt;
      getMentorResponse(type, part.chapter);
    });
  });
  const mentorForm = document.getElementById("mentor-chat-form");
  if (mentorForm) {
    mentorForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = document.getElementById("mentor-chat-input");
      if (input && input.value.trim()) {
        answerMentorCustom(input.value.trim(), part.chapter);
        input.value = "";
      }
    });
  }

  // Lesson notes
  loadLessonNote(index);
  const notesTextarea = document.getElementById("lesson-notes-input");
  let noteDebounce;
  if (notesTextarea) {
    notesTextarea.addEventListener("input", (e) => {
      clearTimeout(noteDebounce);
      noteDebounce = setTimeout(() => {
        saveLessonNote(index, e.target.value);
      }, 500);
    });
  }
  const exportNotesBtn = document.getElementById("export-notes-btn");
  if (exportNotesBtn) exportNotesBtn.addEventListener("click", exportAllNotes);

  document.getElementById("code-editor").addEventListener("keydown", handleEditorKeydown);
  document.getElementById("run-code").addEventListener("click", () => executeCode("run"));
  document.getElementById("check-exercise").addEventListener("click", () => executeCode("check"));
  document.querySelectorAll(".quiz-option").forEach((button) => button.addEventListener("click", checkAnswer));
}

function showDashboard() {
  closeMobileSidebar();
  stopAudio();
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
    const key = app.courseId === "beginner" ? beginnerProgressKey : app.courseId === "pydsml" ? pydsmlProgressKey : storageKey;
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
      body: {
        course: app.courseId,
        track: (app.courseId === "beginner" || app.courseId === "pydsml") ? "all-weeks" : app.track,
        completed: app.completed
      }
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
  closeMobileSidebar();
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
  addXP(50, `Completed ${unitWord()} ${app.parts[index].part}`);
  if (app.completed.length >= 1) unlockBadge("first_lesson");
  if (app.completed.length >= app.parts.length) unlockBadge("handbook_grad");
  renderNav();
  renderDashboard();
  const button = document.querySelector(`[data-complete="${index}"]`);
  if (button) {
    button.classList.add("is-complete");
    button.textContent = `✓ ${unitWord()} completed`;
  }
}

function openAuth(mode = "login", preserveEmail = "") {
  app.authMode = mode;
  renderAuthMode(preserveEmail);
  const dialog = document.getElementById("auth-dialog");
  if (!dialog.open) dialog.showModal();
}

function renderAuthMode(preserveEmail = "") {
  const isSignup = app.authMode === "signup";
  const form = document.getElementById("auth-form");
  const existingEmail = preserveEmail || (form && form.elements.email ? form.elements.email.value : "");
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
  document.getElementById("auth-error").innerHTML = "";
  form.elements.password.autocomplete = isSignup ? "new-password" : "current-password";
  if (existingEmail && form.elements.email) {
    form.elements.email.value = existingEmail;
  }
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
  errorElement.innerHTML = "";
  try {
    const endpoint = app.authMode === "signup" ? "/api/auth/register" : "/api/auth/login";
    const payload = await request(endpoint, { method: "POST", body });
    await setAccount(payload, app.authMode);
  } catch (error) {
    const errorMsg = error && error.message ? error.message : "Authentication failed.";
    if (app.authMode === "signup" && (errorMsg.toLowerCase().includes("already exists") || error.status === 409)) {
      errorElement.innerHTML = `
        <div class="auth-inline-notice">
          <p>An account with that email already exists.</p>
          <button type="button" class="auth-inline-link" id="auth-inline-signin">Sign in with this email →</button>
        </div>
      `;
      const directBtn = document.getElementById("auth-inline-signin");
      if (directBtn) {
        directBtn.addEventListener("click", () => {
          app.authMode = "login";
          renderAuthMode(body.email);
          form.elements.password.focus();
        });
      }
    } else {
      errorElement.textContent = errorMsg;
    }
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
  if (moduleButton) {
    openPart(Number(moduleButton.dataset.openModule));
    return;
  }
  const copyBtn = target.closest("[data-copy]");
  if (copyBtn) {
    const snippetId = `snippet-${copyBtn.dataset.copy}`;
    const codeEl = document.getElementById(snippetId);
    if (codeEl) {
      navigator.clipboard.writeText(codeEl.textContent).then(() => {
        const original = copyBtn.textContent;
        copyBtn.textContent = "Copied! ✓";
        setTimeout(() => { copyBtn.textContent = original; }, 2000);
        showToast("Code snippet copied to clipboard!");
      }).catch(() => {
        showToast("Could not copy snippet to clipboard.");
      });
    }
  }
});

document.getElementById("mobile-nav-toggle")?.addEventListener("click", openMobileSidebar);
document.getElementById("sidebar-close-btn")?.addEventListener("click", closeMobileSidebar);
document.getElementById("sidebar-backdrop")?.addEventListener("click", closeMobileSidebar);

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
document.getElementById("auth-switch-copy").addEventListener("click", (event) => {
  if (event.target.closest("#auth-switch")) {
    const email = document.getElementById("auth-form")?.elements?.email?.value || "";
    openAuth(app.authMode === "signup" ? "login" : "signup", email);
  }
});
document.getElementById("about-open").addEventListener("click", () => document.getElementById("about-dialog").showModal());
document.getElementById("about-close").addEventListener("click", () => document.getElementById("about-dialog").close());
document.getElementById("about-done").addEventListener("click", () => document.getElementById("about-dialog").close());

// Study Library
document.getElementById("library-open").addEventListener("click", () => {
  closeMobileSidebar();
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

// Desktop Sidebar Collapse Toggle
const desktopSidebarToggle = document.getElementById("desktop-sidebar-toggle");
const appShell = document.querySelector(".app-shell");

if (desktopSidebarToggle && appShell) {
  try {
    if (localStorage.getItem("neuroverse_sidebar_collapsed") === "true") {
      appShell.classList.add("sidebar-collapsed");
      const icon = desktopSidebarToggle.querySelector(".toggle-icon");
      if (icon) icon.textContent = "◨";
    }
  } catch {}

  desktopSidebarToggle.addEventListener("click", () => {
    const isCollapsed = appShell.classList.toggle("sidebar-collapsed");
    try {
      localStorage.setItem("neuroverse_sidebar_collapsed", isCollapsed ? "true" : "false");
    } catch {}
    const icon = desktopSidebarToggle.querySelector(".toggle-icon");
    if (icon) icon.textContent = isCollapsed ? "◨" : "◧";
  });
}

// Topbar Tools Dropdown
const toolsBtn = document.getElementById("topbar-tools-btn");
const toolsMenu = document.getElementById("topbar-tools-menu");

if (toolsBtn && toolsMenu) {
  toolsBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = toolsMenu.classList.toggle("is-open");
    toolsBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });
  document.addEventListener("click", () => {
    toolsMenu.classList.remove("is-open");
    toolsBtn.setAttribute("aria-expanded", "false");
  });
}

document.getElementById("menu-pathfinder")?.addEventListener("click", () => {
  toolsMenu?.classList.remove("is-open");
  openOnboardingDialog();
});
document.getElementById("menu-sandbox")?.addEventListener("click", () => {
  toolsMenu?.classList.remove("is-open");
  openSandboxDialog();
});
document.getElementById("menu-flashcards")?.addEventListener("click", () => {
  toolsMenu?.classList.remove("is-open");
  app.libraryTab = "flashcards";
  app.librarySearch = "";
  document.getElementById("library-search").value = "";
  renderLibrary();
  document.getElementById("library-dialog").showModal();
});
document.getElementById("menu-certificate")?.addEventListener("click", () => {
  toolsMenu?.classList.remove("is-open");
  openCertificateDialog();
});

// Flashcards Topbar Trigger
const flashcardsTopBtn = document.getElementById("flashcards-top-btn");
if (flashcardsTopBtn) {
  flashcardsTopBtn.addEventListener("click", () => {
    app.libraryTab = "flashcards";
    app.librarySearch = "";
    document.getElementById("library-search").value = "";
    renderLibrary();
    document.getElementById("library-dialog").showModal();
  });
}

// Onboarding Path Finder
const heroPathBtn = document.getElementById("hero-pathfinder-btn");
const topPathBtn = document.getElementById("onboarding-open");
const onboardClose = document.getElementById("onboarding-close");
const onboardDialog = document.getElementById("onboarding-dialog");
const onboardApplyBtn = document.getElementById("onboarding-apply-btn");

if (heroPathBtn) heroPathBtn.addEventListener("click", openOnboardingDialog);
if (topPathBtn) topPathBtn.addEventListener("click", openOnboardingDialog);
if (onboardClose) onboardClose.addEventListener("click", () => onboardDialog.close());
if (onboardDialog) {
  onboardDialog.addEventListener("click", (e) => {
    const choice = e.target.closest(".choice-card");
    if (choice) {
      const field = choice.dataset.field;
      const value = choice.dataset.value;
      if (field && value) {
        handleOnboardingChoice(field, value);
      }
    }
  });
}
if (onboardApplyBtn) onboardApplyBtn.addEventListener("click", applyOnboardingMatch);
const onboardRestartBtn = document.getElementById("onboarding-restart-btn");
if (onboardRestartBtn) onboardRestartBtn.addEventListener("click", openOnboardingDialog);

// Python Sandbox Modal
const sandboxOpenBtn = document.getElementById("sandbox-open");
const sandboxCloseBtn = document.getElementById("sandbox-close");
const sandboxRunBtn = document.getElementById("sandbox-run-btn");
const sandboxClearBtn = document.getElementById("sandbox-clear-btn");
const sandboxResetBtn = document.getElementById("sandbox-reset-btn");
const sandboxTemplateSel = document.getElementById("sandbox-template-select");

if (sandboxOpenBtn) sandboxOpenBtn.addEventListener("click", openSandboxDialog);
if (sandboxCloseBtn) sandboxCloseBtn.addEventListener("click", () => document.getElementById("sandbox-dialog").close());
if (sandboxRunBtn) sandboxRunBtn.addEventListener("click", runSandboxCode);
if (sandboxClearBtn) sandboxClearBtn.addEventListener("click", () => {
  document.getElementById("sandbox-output").textContent = "";
});
if (sandboxResetBtn) sandboxResetBtn.addEventListener("click", () => {
  if (sandboxTemplateSel) loadSandboxTemplate(sandboxTemplateSel.value);
});
if (sandboxTemplateSel) sandboxTemplateSel.addEventListener("change", (e) => loadSandboxTemplate(e.target.value));

// Verifiable Certificate Modal
const certOpenBtn = document.getElementById("certificate-open");
const certCloseBtn = document.getElementById("certificate-close");
const certPrintBtn = document.getElementById("cert-print-btn");
const certRecipientInput = document.getElementById("cert-recipient-input");

if (certOpenBtn) certOpenBtn.addEventListener("click", openCertificateDialog);
if (certCloseBtn) certCloseBtn.addEventListener("click", () => document.getElementById("certificate-dialog").close());
if (certPrintBtn) certPrintBtn.addEventListener("click", () => window.print());
if (certRecipientInput) {
  certRecipientInput.addEventListener("input", (e) => {
    const name = e.target.value.trim() || "Learner";
    const nameEl = document.getElementById("cert-recipient-name");
    if (nameEl) nameEl.textContent = name;
    try {
      localStorage.setItem(certRecipientKey, e.target.value);
    } catch (err) {
      console.error("Could not save cert recipient.", err);
    }
  });
}

// Course Search
document.getElementById("course-search").addEventListener("input", (event) => showSearch(event.currentTarget.value));
document.getElementById("course-search").addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.currentTarget.value = "";
    showSearch("");
  }
});

async function initialize() {
  initializeTheme();
  loadGamification();
  renderGamificationHeader();
  renderBadges();

  try {
    const savedCourse = localStorage.getItem(selectedCourseKey);
    app.courseId = (savedCourse === "beginner" || savedCourse === "pydsml") ? savedCourse : "handbook";
  } catch (error) {
    console.error("Could not load the selected course.", error);
    app.courseId = "handbook";
  }
  const guest = guestProgress(app.courseId);
  app.track = guest.track;
  app.completed = guest.completed;
  renderAuthControls();

  try {
    const [handbook, beginner, pydsml, library, session] = await Promise.all([
      request("/api/course"),
      request("/api/course?course=beginner"),
      request("/api/course?course=pydsml"),
      request("/api/library"),
      request("/api/auth/me")
    ]);
    app.courses.handbook = handbook.parts;
    app.courses.beginner = beginner.parts;
    app.courses.pydsml = pydsml.parts;
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
    renderBadges();
  } catch (error) {
    console.error("Could not initialize the academy.", error);
    document.getElementById("continue-title").textContent = "Could not connect to the academy";
    document.getElementById("continue-description").textContent = `${error.message} Start the local server with python3 server.py.`;
    document.getElementById("continue-button").disabled = true;
    document.getElementById("module-grid").innerHTML = `<p class="empty-search">${escapeHtml(error.message)} Start the local server with <code>python3 server.py</code>.</p>`;
  }
}

initialize();
