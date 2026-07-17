/* ============================================================
   quiz.js — "Build Your Own Quiz" page controller.
   Renders a topic picker from window.QUIZ_BANK, then on Start it
   assembles the chosen topics' questions, shuffles them, sets
   window.EXAM_DATA, and hands off to the shared exam engine
   (assets/exam.js) for rendering, grading, rationales, and the
   score history (saved under the id "quiz").
   ============================================================ */
(function () {
  const bank = window.QUIZ_BANK;
  const sel = document.getElementById("quiz-select");
  if (!bank || !sel) return;
  const topics = bank.topics;
  const topicById = {};
  topics.forEach(t => { topicById[t.id] = t; });

  const weeks = {};
  topics.forEach(t => { (weeks[t.week] = weeks[t.week] || []).push(t); });

  let html = '<div class="quiz-picker">';
  html += '<p class="note">Pick any topics — one for a quick mini-quiz, or several to build a longer exam. Questions are drawn from the bank and shuffled each time.</p>';
  html += '<div class="quiz-actions-top"><button type="button" class="btn btn-ghost" data-pick="all">Select all</button><button type="button" class="btn btn-ghost" data-pick="none">Clear</button></div>';
  Object.keys(weeks).sort().forEach(w => {
    html += `<fieldset class="quiz-week"><legend>Week ${w}</legend>`;
    html += `<button type="button" class="quiz-weekpick" data-week="${w}">Select all of Week ${w}</button>`;
    html += '<div class="quiz-topics">';
    weeks[w].forEach(t => {
      html += `<label class="quiz-topic"><input type="checkbox" value="${t.id}"><span class="qt-name">${t.label}</span><span class="qt-count">${t.questions.length} Q</span></label>`;
    });
    html += '</div></fieldset>';
  });
  html += '</div>';
  html += '<div class="quiz-start-bar"><span class="quiz-summary">No topics selected</span><button type="button" class="btn btn-primary" data-act="start" disabled>Start quiz</button></div>';
  sel.innerHTML = html;

  const boxes = Array.from(sel.querySelectorAll(".quiz-topic input"));
  const startBtn = sel.querySelector('[data-act="start"]');
  const summary = sel.querySelector(".quiz-summary");

  function update() {
    const chosen = boxes.filter(b => b.checked);
    const n = chosen.reduce((s, b) => s + topicById[b.value].questions.length, 0);
    startBtn.disabled = chosen.length === 0;
    summary.textContent = chosen.length
      ? `${chosen.length} topic${chosen.length > 1 ? "s" : ""} selected · ${n} question${n > 1 ? "s" : ""}`
      : "No topics selected";
    startBtn.textContent = chosen.length ? `Start quiz (${n})` : "Start quiz";
  }

  sel.addEventListener("change", e => { if (e.target.matches(".quiz-topic input")) update(); });
  sel.addEventListener("click", e => {
    const pick = e.target.closest("[data-pick]");
    if (pick) { boxes.forEach(b => { b.checked = pick.dataset.pick === "all"; }); update(); return; }
    const wk = e.target.closest(".quiz-weekpick");
    if (wk) { boxes.forEach(b => { if (String(topicById[b.value].week) === wk.dataset.week) b.checked = true; }); update(); }
  });

  startBtn.addEventListener("click", () => {
    const chosen = boxes.filter(b => b.checked).map(b => topicById[b.value]);
    if (!chosen.length) return;
    const qs = [];
    chosen.forEach(t => t.questions.forEach(q => qs.push(q)));
    for (let i = qs.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [qs[i], qs[j]] = [qs[j], qs[i]];
    }
    window.EXAM_DATA = { id: "quiz", title: "Custom Quiz", questions: qs, history: false };
    const note = document.getElementById("quiz-chosen");
    if (note) note.textContent = "Topics: " + chosen.map(t => t.label).join(", ");
    sel.classList.add("hidden");
    const s = document.createElement("script");
    s.src = "assets/exam.js";
    document.body.appendChild(s);
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  update();
})();
