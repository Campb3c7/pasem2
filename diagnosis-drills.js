(function () {
  "use strict";

  var sections = window.DIAGNOSIS_DRILL_SECTIONS || [];
  var launch = document.getElementById("diagnosis-drill-launch");
  var view = document.getElementById("diagnosis-drill-view");
  var content = document.getElementById("diagnosis-drill-content");
  var hero = document.querySelector(".hero");
  var workspace = document.querySelector(".workspace");
  var studyView = document.getElementById("study-view");
  var walkthroughView = document.getElementById("walkthrough-view");
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
  function unique(items) {
    return items.filter(function (item, index) { return items.indexOf(item) === index; });
  }
  function questionPrompt(section) {
    if (section.id === "hallmarks") return "Which diagnosis best matches this presentation?";
    if (section.id === "treatment") return "Which diagnosis or clinical scenario matches this treatment?";
    return "Which diagnosis or condition matches this description?";
  }
  function currentItem() { return state.section.items[state.order[state.position]]; }
  function makeChoices(item) {
    var pool = unique(state.section.items.map(function (entry) { return entry.term; })).filter(function (term) { return term !== item.term; });
    return shuffle([item.term].concat(shuffle(pool).slice(0, 3)));
  }
  function open() {
    hero.hidden = true;
    workspace.hidden = true;
    studyView.hidden = true;
    walkthroughView.hidden = true;
    view.hidden = false;
    renderHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function close() {
    state = null;
    view.hidden = true;
    hero.hidden = false;
    workspace.hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function renderHome() {
    state = null;
    content.innerHTML = '<div class="drill-heading"><p class="eyebrow">Randomized multiple choice</p><h2>Diagnosis Drills</h2><p>Choose one set. Every session reshuffles both the questions and answer positions.</p></div><div class="drill-section-grid">' + sections.map(function (section, index) {
      return '<button class="drill-section-card" type="button" data-drill-section="' + escapeHtml(section.id) + '"><span class="drill-section-number">0' + (index + 1) + '</span><strong>' + escapeHtml(section.title) + '</strong><span>' + escapeHtml(section.description) + '</span><small>' + section.items.length + ' questions</small></button>';
    }).join("") + '</div>';
    content.querySelectorAll("[data-drill-section]").forEach(function (button) {
      button.addEventListener("click", function () { startSection(button.dataset.drillSection); });
    });
  }
  function startSection(id) {
    var section = sections.find(function (entry) { return entry.id === id; });
    if (!section || !section.items.length) return;
    state = {
      section: section,
      order: shuffle(section.items.map(function (_, index) { return index; })),
      position: 0,
      choices: [],
      firstTryCorrect: 0,
      missedCurrent: false,
      answered: false
    };
    state.choices = makeChoices(currentItem());
    renderQuestion();
  }
  function renderQuestion() {
    var item = currentItem();
    var percent = Math.round(state.position / state.order.length * 100);
    content.innerHTML = '<div class="session-top"><button type="button" id="drill-sections">← All diagnosis sections</button><span>' + escapeHtml(state.section.title) + '</span></div><div class="session-progress"><span style="width:' + percent + '%"></span></div><div class="session-counter">Question ' + (state.position + 1) + ' of ' + state.order.length + ' · ' + state.firstTryCorrect + ' correct on the first try</div><article class="question-card immersive-card drill-question"><div class="card-number">Identify the diagnosis</div><h3>' + escapeHtml(questionPrompt(state.section)) + '</h3><div class="drill-clue">' + escapeHtml(item.description) + '</div><div class="choices" id="drill-choices">' + state.choices.map(function (choice, index) {
      return '<button class="choice" type="button" data-drill-choice="' + index + '"><span>' + String.fromCharCode(65 + index) + '</span>' + escapeHtml(choice) + '</button>';
    }).join("") + '</div><div class="explanation" id="drill-explanation" hidden></div></article><button class="primary-action full-action" id="drill-next" type="button" hidden>' + (state.position + 1 === state.order.length ? "See results" : "Next random question →") + '</button>';
    document.getElementById("drill-sections").addEventListener("click", renderHome);
    content.querySelectorAll("[data-drill-choice]").forEach(function (button) {
      button.addEventListener("click", function () { answer(Number(button.dataset.drillChoice)); });
    });
    document.getElementById("drill-next").addEventListener("click", nextQuestion);
    window.scrollTo({ top: view.offsetTop, behavior: "smooth" });
  }
  function answer(selectedIndex) {
    if (state.answered) return;
    var item = currentItem();
    var selected = state.choices[selectedIndex];
    var buttons = content.querySelectorAll("[data-drill-choice]");
    if (selected !== item.term) {
      state.missedCurrent = true;
      buttons[selectedIndex].classList.add("wrong");
      buttons[selectedIndex].disabled = true;
      var explanation = document.getElementById("drill-explanation");
      explanation.hidden = false;
      explanation.className = "explanation drill-try-again";
      explanation.innerHTML = "<strong>Not this one</strong><p>Use the full description and try another answer.</p>";
      return;
    }
    state.answered = true;
    if (!state.missedCurrent) state.firstTryCorrect += 1;
    buttons.forEach(function (button, index) {
      button.disabled = true;
      if (state.choices[index] === item.term) button.classList.add("correct"); else if (!button.classList.contains("wrong")) button.classList.add("dimmed");
    });
    var feedback = document.getElementById("drill-explanation");
    feedback.hidden = false;
    feedback.className = "explanation";
    feedback.innerHTML = '<strong>' + escapeHtml(item.term) + '</strong><p>' + escapeHtml(item.description) + '</p>';
    document.getElementById("drill-next").hidden = false;
  }
  function nextQuestion() {
    state.position += 1;
    if (state.position >= state.order.length) { renderComplete(); return; }
    state.missedCurrent = false;
    state.answered = false;
    state.choices = makeChoices(currentItem());
    renderQuestion();
  }
  function renderComplete() {
    var total = state.order.length;
    var score = state.firstTryCorrect;
    content.innerHTML = '<section class="complete-panel"><span class="complete-icon">✓</span><p class="eyebrow">Section complete</p><h3>' + escapeHtml(state.section.title) + '</h3><p>' + score + ' of ' + total + ' correct on the first try.</p><div class="score-grid"><span><strong>' + score + '</strong>First try</span><span><strong>' + (total - score) + '</strong>Needed a retry</span></div><div class="session-actions"><button class="primary-action" id="drill-restart" type="button">Shuffle and study again</button><button class="secondary-action" id="drill-home" type="button">All diagnosis sections</button></div></section>';
    document.getElementById("drill-restart").addEventListener("click", function () { startSection(state.section.id); });
    document.getElementById("drill-home").addEventListener("click", renderHome);
  }

  launch.addEventListener("click", open);
  document.getElementById("diagnosis-drill-back").addEventListener("click", close);
}());
