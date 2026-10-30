/* Struggles (Cardio Part 1): Anna's starred Quizlet cards as a Recall-style flow.
   Each group shows one targeted Learn card, then its questions one at a time.
   A miss reveals the answer, shows the Learn card again, and brings the question back a few steps later. */
(function () {
  "use strict";

  var data = window.CARDIO_PART1_STRUGGLES;
  var launch = document.getElementById("struggles-launch");
  var view = document.getElementById("struggles-view");
  var content = document.getElementById("struggles-content");
  var studyView = document.getElementById("study-view");
  if (!data || !launch || !view || !content) return;

  var PROGRESS_KEY = "pasem2:struggles:cardio-part-1:progress";
  var RETURN_GAP = 3;
  var groups = data.groups || [];
  var state = null;

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>'"]/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character];
    });
  }
  function shuffle(items) {
    var copy = items.slice();
    for (var index = copy.length - 1; index > 0; index -= 1) {
      var other = Math.floor(Math.random() * (index + 1));
      var value = copy[index]; copy[index] = copy[other]; copy[other] = value;
    }
    return copy;
  }
  function loadProgress() {
    try { var value = localStorage.getItem(PROGRESS_KEY); return value ? JSON.parse(value) : {}; }
    catch (error) { return {}; }
  }
  function saveProgress(progress) { try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)); } catch (error) {} }
  function markMastered(id) { var progress = loadProgress(); progress[id] = true; saveProgress(progress); }

  // Question ids are "<group id>|<index>".
  function groupItems(group) {
    return group.questions.map(function (question, index) { return { id: group.id + "|" + index, group: group, question: question }; });
  }
  function allItems() { return groups.reduce(function (list, group) { return list.concat(groupItems(group)); }, []); }
  function masteredCount(items, progress) { return items.filter(function (item) { return progress[item.id]; }).length; }

  // ---- open / close --------------------------------------------------------
  function open() {
    studyView.hidden = true;
    document.querySelectorAll(".walkthrough-view").forEach(function (section) { section.hidden = true; });
    view.hidden = false;
    renderHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function close() {
    state = null;
    view.hidden = true;
    studyView.hidden = false;
    content.innerHTML = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---- home ----------------------------------------------------------------
  function correctionsHtml() {
    var list = data.corrections || [];
    if (!list.length) return "";
    return '<details class="struggle-fixes"><summary>' + list.length + ' fixes to your Quizlet cards (checked against the lecture slides)</summary><ul>' +
      list.map(function (entry) {
        return '<li><span class="struggle-fix-source">' + escapeHtml(entry.source) + '</span><strong>' + escapeHtml(entry.card) + '</strong><p>' + entry.fix + '</p></li>';
      }).join("") + '</ul></details>';
  }
  function renderHome() {
    state = null;
    var progress = loadProgress();
    var all = allItems();
    var done = masteredCount(all, progress);
    var html = '<div class="drill-heading struggle-heading"><p class="eyebrow">Cardio Part 1 · your starred Quizlet cards</p><h2>Struggles</h2><p>Set up like Recall: a short Learn card for each group of related cards, then questions on it. Get one wrong and you see the Learn card again, and the question comes back a few steps later.</p><span class="diseases-count-pill">' + done + ' of ' + all.length + ' mastered</span></div>';
    html += '<div class="murmur-quick struggle-quick">' +
      '<button class="murmur-quick-card" type="button" id="struggle-start"' + (done === all.length ? " disabled" : "") + '><span>Recall</span><strong>' + (done ? "Resume" : "Start") + ' →</strong><small>' + (done === all.length ? "Everything mastered. Restart below to go again." : "Every group in order, Learn then questions. Skips questions you already got right.") + '</small></button>' +
      '<button class="murmur-quick-card" type="button" id="struggle-restart"><span>Fresh start</span><strong>Restart</strong><small>Clear Struggles progress and go through every group from the top.</small></button>' +
      '</div>';
    html += correctionsHtml();
    var lastSource = null;
    html += '<div class="struggle-group-list">';
    groups.forEach(function (group, index) {
      if (group.source !== lastSource) {
        html += '<p class="eyebrow struggle-source">' + escapeHtml(group.source) + '</p>';
        lastSource = group.source;
      }
      var items = groupItems(group);
      var groupDone = masteredCount(items, progress);
      html += '<button class="struggle-group-card" type="button" data-struggle-group="' + escapeHtml(group.id) + '"><span class="drill-section-number">' + String(index + 1).padStart(2, "0") + '</span><strong>' + escapeHtml(group.title) + '</strong><small>' + groupDone + ' / ' + items.length + '</small><span class="murmur-mini-track"><span style="width:' + Math.round(groupDone / Math.max(items.length, 1) * 100) + '%"></span></span></button>';
    });
    html += '</div>';
    content.innerHTML = html;
    var startButton = document.getElementById("struggle-start");
    startButton.addEventListener("click", function () { startRecall(false); });
    document.getElementById("struggle-restart").addEventListener("click", function () {
      if (done && !window.confirm("Clear Struggles progress and start from the top?")) return;
      startRecall(true);
    });
    content.querySelectorAll("[data-struggle-group]").forEach(function (button) {
      button.addEventListener("click", function () {
        var group = groups.find(function (entry) { return entry.id === button.dataset.struggleGroup; });
        startSession(group.title, [group], false);
      });
    });
  }

  // ---- session -------------------------------------------------------------
  function startRecall(restart) {
    if (restart) saveProgress({});
    startSession("Recall", groups, true);
  }
  // Steps: for each group, its Learn card, then its questions in shuffled order.
  function startSession(title, groupList, skipMastered) {
    var progress = loadProgress();
    var steps = [];
    groupList.forEach(function (group) {
      var items = groupItems(group).filter(function (item) { return !skipMastered || !progress[item.id]; });
      if (!items.length) return;
      steps.push({ type: "learn", group: group });
      shuffle(items).forEach(function (item) { steps.push({ type: "question", item: item, retry: false }); });
    });
    if (!steps.length) { renderHome(); return; }
    var total = steps.filter(function (step) { return step.type === "question"; }).length;
    state = { title: title, groups: groupList, skipMastered: skipMastered, steps: steps, position: 0, total: total, right: 0, firstTry: 0, missedIds: {} };
    renderStep();
  }
  function header(group) {
    var percent = Math.round(state.right / Math.max(state.total, 1) * 100);
    return '<div class="session-top"><button type="button" id="struggle-home">← Struggles</button><span>' + escapeHtml(state.title) + '</span></div>' +
      '<div class="session-progress"><span style="width:' + percent + '%"></span></div>' +
      '<div class="session-counter">' + state.right + ' of ' + state.total + ' questions done · ' + state.firstTry + ' right on the first try</div>' +
      '<p class="struggle-label">' + escapeHtml(group.source) + '</p>';
  }
  function learnCard(group, kicker) {
    return '<article class="learn-card immersive-card struggle-learn"><div class="card-number">' + escapeHtml(kicker) + '</div><h3>' + escapeHtml(group.title) + '</h3><div class="learn-body">' + group.learn + '</div></article>';
  }
  function renderStep() {
    if (!state) return;
    if (state.position >= state.steps.length) { renderComplete(); return; }
    var step = state.steps[state.position];
    if (step.type === "learn") renderLearn(step.group);
    else renderQuestion(step);
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }
  function renderLearn(group) {
    var count = state.steps.filter(function (step, index) { return index > state.position && step.type === "question" && step.item.group === group; }).length;
    content.innerHTML = header(group) + '<div class="recall-step-label">Learn this first</div>' + learnCard(group, "Learn · " + count + " question" + (count === 1 ? "" : "s") + " next") +
      '<button class="primary-action full-action" id="struggle-continue" type="button">I understand it — start the questions →</button>';
    document.getElementById("struggle-home").addEventListener("click", renderHome);
    document.getElementById("struggle-continue").addEventListener("click", function () { state.position += 1; renderStep(); });
  }
  function renderQuestion(step) {
    var item = step.item, question = item.question;
    step.choices = shuffle([question.a].concat(question.w));
    content.innerHTML = header(item.group) + '<div class="recall-step-label">' + (step.retry ? "Coming back to this one" : "Question") + '</div>' +
      '<article class="question-card immersive-card struggle-question"><div class="card-number">' + escapeHtml(item.group.title) + '</div>' +
      '<h3>' + escapeHtml(question.q) + '</h3>' +
      (question.h ? '<button class="struggle-hint-button" id="struggle-hint" type="button">Need a hint? (H)</button><p class="struggle-hint" id="struggle-hint-text" hidden>' + escapeHtml(question.h) + '</p>' : "") +
      '<div class="choices" id="struggle-choices">' + step.choices.map(function (choice, index) {
        return '<button class="choice" type="button" data-struggle-choice="' + index + '"><span>' + String.fromCharCode(65 + index) + '</span>' + escapeHtml(choice) + '</button>';
      }).join("") + '</div><div class="explanation" id="struggle-explanation" hidden></div><div id="struggle-review"></div></article>' +
      '<button class="primary-action full-action" id="struggle-next" type="button" hidden>Continue →</button>';
    document.getElementById("struggle-home").addEventListener("click", renderHome);
    var hint = document.getElementById("struggle-hint");
    if (hint) hint.addEventListener("click", function () { document.getElementById("struggle-hint-text").hidden = false; hint.hidden = true; });
    content.querySelectorAll("[data-struggle-choice]").forEach(function (button) {
      button.addEventListener("click", function () { answer(step, Number(button.dataset.struggleChoice)); });
    });
    document.getElementById("struggle-next").addEventListener("click", function () { state.position += 1; renderStep(); });
  }
  function answer(step, selected) {
    if (step.answered) return;
    step.answered = true;
    var item = step.item;
    var correct = step.choices.indexOf(item.question.a);
    content.querySelectorAll("[data-struggle-choice]").forEach(function (button) {
      var index = Number(button.dataset.struggleChoice);
      button.disabled = true;
      if (index === correct) button.classList.add("correct");
      else if (index === selected) button.classList.add("wrong");
      else button.classList.add("dimmed");
    });
    var hint = document.getElementById("struggle-hint");
    if (hint) hint.hidden = true;
    var explanation = document.getElementById("struggle-explanation");
    explanation.hidden = false;
    explanation.innerHTML = '<strong>' + (selected === correct ? "Correct" : "Answer: " + escapeHtml(item.question.a)) + '</strong><p>' + escapeHtml(item.question.x) + '</p>';
    if (selected === correct) {
      state.right += 1;
      if (!state.missedIds[item.id]) { state.firstTry += 1; markMastered(item.id); }
    } else {
      state.missedIds[item.id] = true;
      document.getElementById("struggle-review").innerHTML = learnCard(item.group, "↩ Review before this comes back");
      var returnAt = Math.min(state.position + 1 + RETURN_GAP, state.steps.length);
      state.steps.splice(returnAt, 0, { type: "question", item: item, retry: true });
    }
    var next = document.getElementById("struggle-next");
    next.hidden = false;
    explanation.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  function renderComplete() {
    var finished = state;
    var missed = Object.keys(finished.missedIds).length;
    content.innerHTML = '<section class="complete-panel"><span class="complete-icon">' + (missed ? "📚" : "🎯") + '</span><p class="eyebrow">' + (finished.groups.length === 1 ? "Group complete" : "Recall complete") + '</p><h3>' + escapeHtml(finished.title) + '</h3><p>' + finished.firstTry + ' of ' + finished.total + ' right on the first try.</p><div class="score-grid"><span><strong>' + finished.firstTry + '</strong>First try</span><span><strong>' + missed + '</strong>Needed a second look</span></div><div class="session-actions"><button class="primary-action" id="struggle-again" type="button">Go again</button><button class="secondary-action" id="struggle-done" type="button">All Struggles groups</button></div></section>';
    document.getElementById("struggle-again").addEventListener("click", function () {
      if (finished.skipMastered) startRecall(false); else startSession(finished.title, finished.groups, false);
    });
    document.getElementById("struggle-done").addEventListener("click", renderHome);
  }

  launch.addEventListener("click", open);
  document.getElementById("struggles-back").addEventListener("click", close);
}());
