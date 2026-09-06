(function () {
  "use strict";

  var semester = window.SEMESTER || { courses: [] };
  var grid = document.getElementById("course-grid");
  var workspace = document.querySelector(".workspace");
  var studyView = document.getElementById("study-view");
  var studyContent = document.getElementById("study-content");
  var progressKey = "pasem2:progress";
  var progress = readStore(progressKey, {});
  var currentCourse = null;
  var currentLecture = 0;
  var currentMode = "learn";
  var learnState = null;
  var quizState = null;
  var recallState = null;
  var RECALL_GAP = 3;

  randomizeQuestionBanks();

  function shuffle(items) {
    for (var index = items.length - 1; index > 0; index -= 1) {
      var swapIndex = Math.floor(Math.random() * (index + 1));
      var value = items[index];
      items[index] = items[swapIndex];
      items[swapIndex] = value;
    }
    return items;
  }
  function randomizeQuestions(questions) {
    if (!questions || !questions.length) return;
    var answerPositions = shuffle(questions.map(function (_, index) { return index % 4; }));
    questions.forEach(function (question, questionIndex) {
      var choices = (question.choices || []).slice();
      var oldCorrect = Number(question.correct);
      if (choices.length < 2 || oldCorrect < 0 || oldCorrect >= choices.length) return;
      var answer = choices.splice(oldCorrect, 1)[0];
      shuffle(choices);
      var newCorrect = Math.min(answerPositions[questionIndex], choices.length);
      choices.splice(newCorrect, 0, answer);
      question.choices = choices;
      question.correct = newCorrect;
    });
  }
  function randomizeQuestionBanks() {
    (semester.courses || []).forEach(function (course) {
      (course.lectures || []).forEach(function (item) {
        var testQuestions = [];
        var applyQuestions = [];
        (item.objectives || []).forEach(function (objective) {
          testQuestions = testQuestions.concat(objective.test || []);
          applyQuestions = applyQuestions.concat(objective.apply || []);
        });
        randomizeQuestions(testQuestions);
        randomizeQuestions(applyQuestions);
      });
    });
  }

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>'"]/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char];
    });
  }
  function readStore(key, fallback) {
    try { var value = localStorage.getItem(key); return value == null ? fallback : JSON.parse(value); }
    catch (error) { return fallback; }
  }
  function writeStore(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch (error) {} }
  function lectureKey(course, item) { return course.id + ":" + item.id; }
  function lecture() { return (currentCourse.lectures || [])[currentLecture]; }
  function objectives() { return (lecture() && lecture().objectives) || []; }
  function objectiveById(id) { return objectives().find(function (objective) { return objective.id === id; }); }
  function host() { return document.getElementById("mode-content"); }
  function scrollTop() { window.scrollTo({ top: studyView.offsetTop, behavior: "smooth" }); }
  function allLectures() {
    return semester.courses.reduce(function (items, course) {
      return items.concat((course.lectures || []).map(function (item) { return { course: course, lecture: item }; }));
    }, []);
  }
  function renderProgress() {
    var lectures = allLectures();
    var completed = lectures.filter(function (item) { return progress[lectureKey(item.course, item.lecture)]; }).length;
    var percent = lectures.length ? Math.round(completed / lectures.length * 100) : 0;
    document.getElementById("progress-label").textContent = percent + "%";
    document.getElementById("progress-bar").style.width = percent + "%";
  }
  function renderCourses() {
    document.getElementById("course-count").textContent = semester.courses.length + (semester.courses.length === 1 ? " course" : " courses");
    grid.innerHTML = "";
    semester.courses.forEach(function (course) {
      var total = (course.lectures || []).length;
      var complete = (course.lectures || []).filter(function (item) { return progress[lectureKey(course, item)]; }).length;
      var card = document.createElement("button");
      card.type = "button";
      card.className = "course-card " + (course.color || "gold");
      card.innerHTML = '<span class="course-icon">' + escapeHtml(course.icon || "📘") + '</span><span class="course-kicker">' + escapeHtml(course.short || "PA") + '</span><strong>' + escapeHtml(course.title) + '</strong><span class="course-description">' + escapeHtml(course.description || "") + '</span><span class="course-meta"><span>' + total + (total === 1 ? " lecture" : " lectures") + '</span><span>' + complete + ' complete</span></span>';
      card.addEventListener("click", function () { openCourse(course); });
      grid.appendChild(card);
    });
  }
  function openCourse(course) {
    currentCourse = course; currentLecture = 0; currentMode = "learn";
    workspace.hidden = true; document.querySelector(".hero").hidden = true; studyView.hidden = false;
    renderStudy(); window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function modeCount(mode, lect) {
    if (mode === "recall") return (lect.objectives || []).reduce(function (sum, objective) { return sum + (objective.test || []).length + (objective.apply || []).length; }, 0);
    return (lect.objectives || []).length;
  }
  function renderStudy() {
    var lectures = currentCourse.lectures || [];
    if (!lectures.length) { studyContent.innerHTML = '<div class="empty-state"><span>📚</span><h2>No lectures yet</h2></div>'; return; }
    var lect = lectures[currentLecture];
    var modes = ["learn", "test", "apply", "recall"];
    studyContent.innerHTML = '<div class="study-heading"><p class="eyebrow">' + escapeHtml(currentCourse.title) + '</p><h2>' + escapeHtml(lect.title) + '</h2><p>' + escapeHtml(lect.description || "") + '</p></div><div class="lecture-tabs" role="tablist">' + lectures.map(function (item, index) {
      return '<button type="button" class="lecture-tab ' + (index === currentLecture ? "active" : "") + '" data-lecture="' + index + '">' + escapeHtml(item.title) + '</button>';
    }).join("") + '</div><div class="mode-tabs" role="tablist">' + modes.map(function (mode) {
      return '<button type="button" class="mode-tab ' + (mode === currentMode ? "active" : "") + '" data-mode="' + mode + '">' + mode.charAt(0).toUpperCase() + mode.slice(1) + '<span>' + modeCount(mode, lect) + '</span></button>';
    }).join("") + '</div><div id="mode-content"></div>';
    studyContent.querySelectorAll("[data-lecture]").forEach(function (button) {
      button.addEventListener("click", function () { currentLecture = Number(button.dataset.lecture); currentMode = "learn"; clearSessions(); renderStudy(); });
    });
    studyContent.querySelectorAll("[data-mode]").forEach(function (button) {
      button.addEventListener("click", function () { currentMode = button.dataset.mode; clearSessions(); renderStudy(); });
    });
    renderModeHome();
  }
  function clearSessions() { learnState = null; quizState = null; recallState = null; }
  function renderModeHome() {
    if (currentMode === "recall") { renderRecallHome(); return; }
    var copy = {
      learn: ["Understand before you memorize", "Learn", 'Pick one objective. Work through one concept card at a time; anything marked “Not yet” returns at the end.', "cards"],
      test: ["Active recall", "Test", "Pick one objective. Answer one direct recall question at a time.", "questions"],
      apply: ["Clinical reasoning", "Apply", "Pick one objective. Work through one clinical application at a time.", "cases"]
    }[currentMode];
    var html = '<div class="mode-intro"><p class="eyebrow">' + copy[0] + '</p><h3>' + copy[1] + '</h3><p>' + copy[2] + '</p></div><div class="objective-picker">';
    objectives().forEach(function (objective, index) {
      var items = currentMode === "learn" ? (objective.cards || []) : (objective[currentMode] || []);
      html += '<button type="button" class="objective-launch" data-objective="' + escapeHtml(objective.id) + '" ' + (!items.length ? "disabled" : "") + '><span class="objective-launch-num">' + String(index + 1).padStart(2, "0") + '</span><span class="objective-launch-copy"><strong>' + escapeHtml(objective.title) + '</strong><small>' + items.length + ' ' + copy[3] + '</small></span><span class="objective-launch-arrow">›</span></button>';
    });
    host().innerHTML = html + '</div>';
    host().querySelectorAll("[data-objective]").forEach(function (button) {
      button.addEventListener("click", function () { if (currentMode === "learn") startLearn(button.dataset.objective); else startQuiz(currentMode, button.dataset.objective); });
    });
  }
  function cardHtml(card) { return card.html || '<p>' + escapeHtml(card.body || "") + '</p>'; }
  function cardMarkup(objective, card, kicker) {
    return '<article class="learn-card immersive-card"><div class="card-number">' + escapeHtml(kicker || objective.title) + (card.highYield ? '<span>High yield</span>' : "") + '</div><h3>' + escapeHtml(card.title) + '</h3><div class="learn-body">' + cardHtml(card) + '</div></article>';
  }
  function sessionHeader(label, detail, done, total, exitLabel) {
    var percent = total ? Math.round(done / total * 100) : 0;
    return '<div class="session-top"><button type="button" id="session-exit">← ' + escapeHtml(exitLabel || "All objectives") + '</button><span>' + escapeHtml(label) + '</span></div><div class="session-progress"><span style="width:' + percent + '%"></span></div><div class="session-counter">' + escapeHtml(detail) + '</div>';
  }
  function bindSessionExit(callback) { document.getElementById("session-exit").addEventListener("click", callback); }

  function startLearn(id) {
    var objective = objectiveById(id);
    if (!objective || !(objective.cards || []).length) return;
    learnState = { objective: objective, queue: objective.cards.map(function (_, index) { return index; }), position: 0, known: {}, firstPass: objective.cards.length };
    renderLearnCard();
  }
  function renderLearnCard() {
    var state = learnState;
    if (!state || state.position >= state.queue.length) { renderLearnComplete(); return; }
    var cardIndex = state.queue[state.position];
    var card = state.objective.cards[cardIndex];
    host().innerHTML = sessionHeader("Learn · Objective " + (objectives().indexOf(state.objective) + 1), (state.position + 1) + ' of ' + state.queue.length + ' · ' + state.objective.title, state.position, state.queue.length, "All objectives") + cardMarkup(state.objective, card, state.position >= state.firstPass ? "Review card" : "Concept " + (cardIndex + 1)) + '<div class="learn-actions"><button class="learn-btn learn-btn-dunno" id="learn-again" type="button">Not yet — show again</button><button class="learn-btn learn-btn-know" id="learn-know" type="button">I understand it</button></div>';
    bindSessionExit(function () { learnState = null; renderModeHome(); });
    document.getElementById("learn-again").addEventListener("click", function () { learnAnswer(false); });
    document.getElementById("learn-know").addEventListener("click", function () { learnAnswer(true); });
    scrollTop();
  }
  function learnAnswer(known) {
    var state = learnState, cardIndex = state.queue[state.position];
    if (known) state.known[cardIndex] = true; else state.queue.push(cardIndex);
    state.position += 1; renderLearnCard();
  }
  function renderLearnComplete() {
    var state = learnState, objective = state.objective, total = objective.cards.length;
    host().innerHTML = '<section class="complete-panel"><span class="complete-icon">✓</span><p class="eyebrow">Objective complete</p><h3>' + escapeHtml(objective.title) + '</h3><p>You marked all ' + total + ' concept cards as understood.</p><div class="session-actions">' + ((objective.test || []).length ? '<button class="primary-action" id="learn-to-test" type="button">Test this objective →</button>' : "") + '<button class="secondary-action" id="learn-restart" type="button">Study again</button><button class="secondary-action" id="learn-home" type="button">All objectives</button></div></section>';
    if (document.getElementById("learn-to-test")) document.getElementById("learn-to-test").addEventListener("click", function () { currentMode = "test"; startQuiz("test", objective.id); });
    document.getElementById("learn-restart").addEventListener("click", function () { startLearn(objective.id); });
    document.getElementById("learn-home").addEventListener("click", function () { learnState = null; renderModeHome(); });
  }

  function questionCardMarkup(question, mode, index) {
    return '<article class="question-card immersive-card"><div class="card-number">' + (mode === "apply" ? "Clinical application" : "Active recall") + ' ' + (index + 1) + '</div><h3 class="' + (mode === "apply" ? "vignette" : "") + '">' + escapeHtml(question.prompt) + '</h3><div class="choices" id="choices">' + (question.choices || []).map(function (choice, choiceIndex) {
      return '<button class="choice" type="button" data-choice="' + choiceIndex + '"><span>' + String.fromCharCode(65 + choiceIndex) + '</span>' + escapeHtml(choice) + '</button>';
    }).join("") + '</div><div class="explanation" id="answer-explanation" hidden><strong>Explanation</strong><p>' + escapeHtml(question.explanation || "") + '</p></div><div id="linked-review"></div></article>';
  }
  function startQuiz(mode, id, questions) {
    var objective = objectiveById(id), source = questions || (objective && objective[mode]);
    if (!objective || !source || !source.length) return;
    quizState = { mode: mode, objective: objective, queue: source.slice(), position: 0, correct: 0, missed: [], retry: !!questions };
    renderQuizQuestion();
  }
  function renderQuizQuestion() {
    var state = quizState;
    if (!state || state.position >= state.queue.length) { renderQuizComplete(); return; }
    var question = state.queue[state.position];
    host().innerHTML = sessionHeader(state.mode === "apply" ? "Apply" : "Test", (state.position + 1) + ' of ' + state.queue.length + ' · ' + state.objective.title, state.position, state.queue.length, "All objectives") + questionCardMarkup(question, state.mode, state.position) + '<button class="primary-action full-action" id="question-next" type="button" hidden>' + (state.position + 1 === state.queue.length ? "See results" : "Next →") + '</button>';
    bindSessionExit(function () { quizState = null; renderModeHome(); });
    host().querySelectorAll("[data-choice]").forEach(function (button) { button.addEventListener("click", function () { answerQuiz(Number(button.dataset.choice)); }); });
    document.getElementById("question-next").addEventListener("click", function () { state.position += 1; renderQuizQuestion(); });
    scrollTop();
  }
  function answerButtons(selected, correct) {
    host().querySelectorAll("[data-choice]").forEach(function (button) {
      button.disabled = true; var choice = Number(button.dataset.choice);
      if (choice === correct) button.classList.add("correct"); else if (choice === selected) button.classList.add("wrong"); else button.classList.add("dimmed");
    });
  }
  function showLinkedCard(objective, question, label) {
    var cardIndex = linkedCardIndex(objective, question);
    if (cardIndex >= 0) document.getElementById("linked-review").innerHTML = cardMarkup(objective, objective.cards[cardIndex], label || "Review this Learn card");
  }
  function answerQuiz(selected) {
    var state = quizState, question = state.queue[state.position], correct = Number(question.correct);
    answerButtons(selected, correct); document.getElementById("answer-explanation").hidden = false;
    if (selected === correct) state.correct += 1; else { state.missed.push(question); showLinkedCard(state.objective, question, "↩ Review the matching Learn card"); }
    document.getElementById("question-next").hidden = false;
  }
  function renderQuizComplete() {
    var state = quizState, percent = state.queue.length ? Math.round(state.correct / state.queue.length * 100) : 0;
    host().innerHTML = '<section class="complete-panel"><span class="complete-icon">' + (percent >= 80 ? "🎯" : "📚") + '</span><p class="eyebrow">' + (state.retry ? "Review round" : "Objective complete") + '</p><h3>' + escapeHtml(state.objective.title) + '</h3><p>' + state.correct + ' of ' + state.queue.length + ' correct · ' + percent + '%</p><div class="score-grid"><span><strong>' + state.correct + '</strong>Correct</span><span><strong>' + (state.queue.length - state.correct) + '</strong>Missed</span></div><div class="session-actions">' + (state.missed.length ? '<button class="primary-action" id="retry-missed" type="button">Redo ' + state.missed.length + ' missed →</button>' : "") + (state.mode === "test" && (state.objective.apply || []).length ? '<button class="secondary-action" id="go-apply" type="button">Apply this objective</button>' : "") + '<button class="secondary-action" id="quiz-restart" type="button">Restart</button><button class="secondary-action" id="quiz-home" type="button">All objectives</button></div></section>';
    if (document.getElementById("retry-missed")) document.getElementById("retry-missed").addEventListener("click", function () { startQuiz(state.mode, state.objective.id, state.missed); });
    if (document.getElementById("go-apply")) document.getElementById("go-apply").addEventListener("click", function () { currentMode = "apply"; startQuiz("apply", state.objective.id); });
    document.getElementById("quiz-restart").addEventListener("click", function () { startQuiz(state.mode, state.objective.id); });
    document.getElementById("quiz-home").addEventListener("click", function () { quizState = null; renderModeHome(); });
  }

  function linkedCardIndex(objective, question) {
    var cards = objective.cards || [];
    if (Number.isInteger(question.card) && question.card >= 0 && question.card < cards.length) return question.card;
    if (!cards.length) return -1;
    var source = wordSet((question.prompt || "") + " " + (question.explanation || "") + " " + ((question.choices || [])[question.correct] || ""));
    var bestIndex = 0, bestScore = -1;
    cards.forEach(function (card, index) {
      var score = overlap(source, wordSet(card.title || "")) * 4 + overlap(source, wordSet((card.body || "") + " " + (card.html || "")));
      if (score > bestScore) { bestScore = score; bestIndex = index; }
    });
    return bestIndex;
  }
  function wordSet(text) {
    var stop = { the:1,and:1,for:1,with:1,from:1,that:1,this:1,what:1,which:1,when:1,where:1,why:1,how:1,are:1,was:1,were:1,into:1,your:1,patient:1,after:1,before:1 };
    return String(text).toLowerCase().replace(/<[^>]+>/g, " ").replace(/[^a-z0-9\s-]/g, " ").split(/\s+/).reduce(function (set, word) { if (word.length > 2 && !stop[word]) set[word] = true; return set; }, {});
  }
  function overlap(left, right) { return Object.keys(left).reduce(function (score, word) { return score + (right[word] ? 1 : 0); }, 0); }
  function recallKey() { return "pasem2:recall:" + currentCourse.id + ":" + lecture().id; }
  function questionId(objective, kind, index) { return objective.id + "|" + kind + "|" + index; }
  function cardId(objective, index) { return objective.id + "|card|" + index; }
  function toSet(items) { return (items || []).reduce(function (set, item) { set[item] = true; return set; }, {}); }
  function recallItems() {
    var items = [];
    objectives().forEach(function (objective) {
      ["test", "apply"].forEach(function (kind) {
        (objective[kind] || []).forEach(function (question, index) { items.push({ id: questionId(objective, kind, index), objective: objective, kind: kind, question: question, card: linkedCardIndex(objective, question) }); });
      });
    });
    return items;
  }
  function loadRecall() {
    var saved = readStore(recallKey(), { mastered: [], taught: [], skipPreviews: false });
    return { mastered: toSet(saved.mastered), taught: toSet(saved.taught), skipPreviews: !!saved.skipPreviews };
  }
  function saveRecall() {
    if (recallState) writeStore(recallKey(), { mastered: Object.keys(recallState.mastered), taught: Object.keys(recallState.taught), skipPreviews: recallState.skipPreviews, updated: Date.now() });
  }
  function renderRecallHome() {
    var saved = loadRecall(), items = recallItems();
    var valid = items.reduce(function (set, item) { set[item.id] = true; return set; }, {});
    var mastered = Object.keys(saved.mastered).filter(function (id) { return valid[id]; }).length;
    var percent = items.length ? Math.round(mastered / items.length * 100) : 0;
    host().innerHTML = '<section class="recall-home"><div class="recall-icon">↻</div><p class="eyebrow">One continuous deck</p><h3>Recall the entire ' + escapeHtml(lecture().title) + ' lecture</h3><p>Recall moves through all ' + objectives().length + ' objectives in order. For each Learn card, you see the concept first, then its Test questions, then its Apply cases before moving to the next concept.</p><div class="recall-stats"><span><strong>' + objectives().length + '</strong>objectives</span><span><strong>' + mastered + ' / ' + items.length + '</strong>mastered questions</span><span><strong>' + percent + '%</strong>complete</span></div><label class="recall-option"><input id="skip-previews" type="checkbox" ' + (saved.skipPreviews ? "checked" : "") + '><span><strong>Skip Learn previews</strong><small>Go straight through Test and Apply. A matching Learn card still appears after every miss.</small></span></label><div class="recall-actions"><button class="recall-start" id="start-recall" type="button">' + (mastered ? "Resume Recall" : "Start Recall") + ' →</button>' + (mastered ? '<button class="recall-restart" id="restart-recall" type="button">Restart</button>' : "") + '</div></section>';
    document.getElementById("start-recall").addEventListener("click", function () { startRecall(document.getElementById("skip-previews").checked, false); });
    if (document.getElementById("restart-recall")) document.getElementById("restart-recall").addEventListener("click", function () { if (window.confirm("Restart Recall for the entire " + lecture().title + " lecture?")) startRecall(document.getElementById("skip-previews").checked, true); });
  }
  function buildRecallSteps(mastered, taught, skipPreviews) {
    var steps = [];
    objectives().forEach(function (objective) {
      var grouped = {}, unlinked = [];
      ["test", "apply"].forEach(function (kind) {
        (objective[kind] || []).forEach(function (question, index) {
          var item = { id: questionId(objective, kind, index), objective: objective, kind: kind, question: question, card: linkedCardIndex(objective, question) };
          if (mastered[item.id]) return;
          if (item.card >= 0) (grouped[item.card] || (grouped[item.card] = { test: [], apply: [] }))[kind].push(item); else unlinked.push(item);
        });
      });
      (objective.cards || []).forEach(function (_, cardIndex) {
        var group = grouped[cardIndex] || { test: [], apply: [] };
        if (!skipPreviews && !taught[cardId(objective, cardIndex)] && (group.test.length || group.apply.length)) steps.push({ type: "card", objective: objective, card: cardIndex });
        group.test.forEach(function (item) { steps.push({ type: "question", item: item }); });
        group.apply.forEach(function (item) { steps.push({ type: "question", item: item }); });
      });
      unlinked.forEach(function (item) { steps.push({ type: "question", item: item }); });
    });
    return steps;
  }
  function startRecall(skipPreviews, restart) {
    var saved = restart ? { mastered: {}, taught: {} } : loadRecall();
    recallState = { mastered: saved.mastered || {}, taught: saved.taught || {}, skipPreviews: !!skipPreviews, total: recallItems().length, steps: [], position: 0 };
    recallState.steps = buildRecallSteps(recallState.mastered, recallState.taught, recallState.skipPreviews);
    saveRecall(); renderRecallStep();
  }
  function recallHeader(objective) {
    var mastered = Object.keys(recallState.mastered).length;
    return sessionHeader("Recall · Objective " + (objectives().indexOf(objective) + 1) + " of " + objectives().length, mastered + ' of ' + recallState.total + ' questions mastered · ' + objective.title, mastered, recallState.total, "Recall overview");
  }
  function renderRecallStep() {
    var state = recallState;
    if (!state || state.position >= state.steps.length) { renderRecallComplete(); return; }
    var step = state.steps[state.position];
    if (step.type === "card") {
      var card = step.objective.cards[step.card];
      host().innerHTML = recallHeader(step.objective) + '<div class="recall-step-label">Learn this concept</div>' + cardMarkup(step.objective, card, "Learn · Concept " + (step.card + 1)) + '<button class="primary-action full-action" id="recall-continue" type="button">I understand it — continue →</button>';
      bindSessionExit(exitRecall);
      document.getElementById("recall-continue").addEventListener("click", function () { state.taught[cardId(step.objective, step.card)] = true; saveRecall(); state.position += 1; renderRecallStep(); });
    } else renderRecallQuestion(step.item);
    scrollTop();
  }
  function renderRecallQuestion(item) {
    host().innerHTML = recallHeader(item.objective) + '<div class="recall-step-label">' + (item.kind === "apply" ? "Apply this concept" : "Test this concept") + '</div>' + questionCardMarkup(item.question, item.kind, recallState.position) + '<button class="primary-action full-action" id="recall-next" type="button" hidden>Continue →</button>';
    bindSessionExit(exitRecall);
    host().querySelectorAll("[data-choice]").forEach(function (button) { button.addEventListener("click", function () { answerRecall(item, Number(button.dataset.choice)); }); });
    document.getElementById("recall-next").addEventListener("click", function () { recallState.position += 1; renderRecallStep(); });
  }
  function answerRecall(item, selected) {
    var correct = Number(item.question.correct);
    answerButtons(selected, correct); document.getElementById("answer-explanation").hidden = false;
    if (selected === correct) recallState.mastered[item.id] = true;
    else { showLinkedCard(item.objective, item.question, "↩ Review before this returns"); var returnAt = Math.min(recallState.position + 1 + RECALL_GAP, recallState.steps.length); recallState.steps.splice(returnAt, 0, { type: "question", item: item }); }
    saveRecall(); document.getElementById("recall-next").hidden = false;
  }
  function exitRecall() { saveRecall(); recallState = null; renderRecallHome(); }
  function renderRecallComplete() {
    var state = recallState; saveRecall();
    host().innerHTML = '<section class="complete-panel"><span class="complete-icon">🏅</span><p class="eyebrow">Lecture mastered</p><h3>' + escapeHtml(lecture().title) + ' Recall complete</h3><p>You worked through the Learn → Test → Apply sequence across all ' + objectives().length + ' objectives.</p><div class="session-actions"><button class="primary-action" id="recall-again" type="button">Restart Recall</button><button class="secondary-action" id="recall-home" type="button">Recall overview</button></div></section>';
    document.getElementById("recall-again").addEventListener("click", function () { startRecall(state.skipPreviews, true); });
    document.getElementById("recall-home").addEventListener("click", function () { recallState = null; renderRecallHome(); });
  }

  document.getElementById("back-button").addEventListener("click", function () { clearSessions(); studyView.hidden = true; workspace.hidden = false; document.querySelector(".hero").hidden = false; renderCourses(); });
  document.getElementById("reset-progress").addEventListener("click", function () {
    if (!window.confirm("Reset all saved Semester 2 progress on this device?")) return;
    progress = {}; Object.keys(localStorage).forEach(function (key) { if (key.indexOf("pasem2:") === 0) localStorage.removeItem(key); });
    clearSessions(); writeStore(progressKey, progress); renderProgress(); renderCourses(); if (!studyView.hidden) renderStudy();
  });
  renderCourses(); renderProgress();
}());
