(function () {
  "use strict";

  var semester = window.SEMESTER || { courses: [] };
  var grid = document.getElementById("course-grid");
  var workspace = document.querySelector(".workspace");
  var studyView = document.getElementById("study-view");
  var studyContent = document.getElementById("study-content");
  var key = "pasem2:progress";
  var progress = loadProgress();
  var currentCourse = null;
  var currentLecture = 0;
  var currentMode = "learn";
  var recallState = null;

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>'"]/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char];
    });
  }

  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(key)) || {}; } catch (error) { return {}; }
  }

  function saveProgress() {
    localStorage.setItem(key, JSON.stringify(progress));
    renderProgress();
  }

  function lectureKey(course, lecture) { return course.id + ":" + lecture.id; }

  function allLectures() {
    return semester.courses.reduce(function (items, course) {
      return items.concat((course.lectures || []).map(function (lecture) { return { course: course, lecture: lecture }; }));
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
      var complete = (course.lectures || []).filter(function (lecture) { return progress[lectureKey(course, lecture)]; }).length;
      var card = document.createElement("button");
      card.type = "button";
      card.className = "course-card " + (course.color || "gold");
      card.innerHTML =
        '<span class="course-icon">' + escapeHtml(course.icon || "📘") + '</span>' +
        '<span class="course-kicker">' + escapeHtml(course.short || "PA") + '</span>' +
        '<strong>' + escapeHtml(course.title) + '</strong>' +
        '<span class="course-description">' + escapeHtml(course.description || "") + '</span>' +
        '<span class="course-meta"><span>' + total + (total === 1 ? " lecture" : " lectures") + '</span><span>' + complete + " complete</span></span>";
      card.addEventListener("click", function () { openCourse(course); });
      grid.appendChild(card);
    });
  }

  function openCourse(course) {
    currentCourse = course;
    currentLecture = 0;
    currentMode = "learn";
    workspace.hidden = true;
    document.querySelector(".hero").hidden = true;
    studyView.hidden = false;
    renderStudy();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderStudy() {
    var lectures = currentCourse.lectures || [];
    if (!lectures.length) {
      studyContent.innerHTML = '<div class="empty-state"><span>' + escapeHtml(currentCourse.icon || "📘") + '</span><p class="eyebrow">' + escapeHtml(currentCourse.short || "Course") + '</p><h2>' + escapeHtml(currentCourse.title) + '</h2><p>No lectures yet. Add the first one in <code>data/semester.js</code>.</p></div>';
      return;
    }
    var lecture = lectures[currentLecture];
    var modes = ["learn", "test", "apply", "recall"];
    studyContent.innerHTML =
      '<div class="study-heading"><p class="eyebrow">' + escapeHtml(currentCourse.title) + '</p><h2>' + escapeHtml(lecture.title) + '</h2><p>' + escapeHtml(lecture.description || "") + '</p></div>' +
      '<div class="lecture-tabs" role="tablist">' + lectures.map(function (item, index) {
        return '<button type="button" class="lecture-tab ' + (index === currentLecture ? "active" : "") + '" data-lecture="' + index + '">' + escapeHtml(item.title) + '</button>';
      }).join("") + '</div>' +
      '<div class="mode-tabs" role="tablist">' + modes.map(function (mode) {
        var count = (lecture.objectives || []).length;
        return '<button type="button" class="mode-tab ' + (mode === currentMode ? "active" : "") + '" data-mode="' + mode + '">' + mode.charAt(0).toUpperCase() + mode.slice(1) + '<span>' + count + '</span></button>';
      }).join("") + '</div><div id="mode-content"></div>';

    studyContent.querySelectorAll("[data-lecture]").forEach(function (button) {
      button.addEventListener("click", function () { currentLecture = Number(button.dataset.lecture); currentMode = "learn"; recallState = null; renderStudy(); });
    });
    studyContent.querySelectorAll("[data-mode]").forEach(function (button) {
      button.addEventListener("click", function () { currentMode = button.dataset.mode; recallState = null; renderStudy(); });
    });
    renderMode(lecture);
  }

  function renderMode(lecture) {
    var host = document.getElementById("mode-content");
    if (currentMode === "recall") {
      renderRecallObjectives(lecture);
      return;
    }
    var objectives = lecture.objectives || [];
    if (!objectives.length) {
      host.innerHTML = emptyMode("No objectives yet.");
      return;
    }
    host.innerHTML = objectives.map(function (objective, objectiveIndex) {
      var items = currentMode === "learn" ? (objective.cards || []) : (objective[currentMode] || []);
      var content = "";
      if (currentMode === "learn") {
        content = items.length ? items.map(function (card, index) {
          return '<article class="learn-card"><div class="card-number">Concept ' + (index + 1) + (card.highYield ? '<span>High yield</span>' : "") + '</div><h3>' + escapeHtml(card.title) + '</h3><p>' + escapeHtml(card.body) + '</p></article>';
        }).join("") : objectiveEmpty("No Learn cards in this objective yet.");
      } else {
        content = items.length ? items.map(renderQuestion).join("") : objectiveEmpty(currentMode === "apply" ? "No Apply cases in this objective yet." : "No Test questions in this objective yet.");
      }
      return '<section class="objective-section"><div class="objective-heading"><span>' + String(objectiveIndex + 1).padStart(2, "0") + '</span><div><p>Objective</p><h3>' + escapeHtml(objective.title) + '</h3>' + (objective.description ? '<small>' + escapeHtml(objective.description) + '</small>' : "") + '</div></div><div class="objective-content">' + content + '</div></section>';
    }).join("") + (currentMode === "learn" ? '<button class="complete-button" id="complete-lecture" type="button">' + (progress[lectureKey(currentCourse, lecture)] ? "✓ Lecture complete" : "Mark lecture complete") + '</button>' : "");
    var completeButton = document.getElementById("complete-lecture");
    if (completeButton) completeButton.addEventListener("click", function () { progress[lectureKey(currentCourse, lecture)] = !progress[lectureKey(currentCourse, lecture)]; saveProgress(); renderStudy(); renderCourses(); });
    host.querySelectorAll(".choice").forEach(function (button) {
      button.addEventListener("click", function () {
        var block = button.closest(".question-card");
        if (block.dataset.answered) return;
        block.dataset.answered = "true";
        var correct = Number(block.dataset.correct);
        block.querySelectorAll(".choice").forEach(function (choice, index) {
          choice.disabled = true;
          if (index === correct) choice.classList.add("correct");
          else if (choice === button) choice.classList.add("wrong");
        });
        block.querySelector(".explanation").hidden = false;
      });
    });
  }

  function objectiveEmpty(message) {
    return '<div class="objective-empty">' + escapeHtml(message) + '</div>';
  }

  function recallKey(lecture, objective) {
    return "pasem2:recall:" + currentCourse.id + ":" + lecture.id + ":" + objective.id;
  }

  function loadRecall(lecture, objective) {
    try {
      return JSON.parse(localStorage.getItem(recallKey(lecture, objective))) || { mastered: [], skipPreviews: false };
    } catch (error) {
      return { mastered: [], skipPreviews: false };
    }
  }

  function saveRecall(lecture, objective, mastered, skipPreviews) {
    localStorage.setItem(recallKey(lecture, objective), JSON.stringify({
      mastered: Object.keys(mastered),
      skipPreviews: !!skipPreviews,
      updated: Date.now()
    }));
  }

  function recallPool(objective) {
    var pool = [];
    ["test", "apply"].forEach(function (kind) {
      (objective[kind] || []).forEach(function (question, index) {
        pool.push({ id: kind + ":" + index, kind: kind, question: question, card: linkedCardIndex(objective, question) });
      });
    });
    return pool;
  }

  function linkedCardIndex(objective, question) {
    var cards = objective.cards || [];
    if (Number.isInteger(question.card) && question.card >= 0 && question.card < cards.length) return question.card;
    if (!cards.length) return -1;
    var source = wordSet((question.prompt || "") + " " + (question.explanation || ""));
    var bestIndex = -1;
    var bestScore = 0;
    cards.forEach(function (card, index) {
      var titleWords = wordSet(card.title || "");
      var bodyWords = wordSet(card.body || "");
      var score = overlapScore(source, titleWords) * 3 + overlapScore(source, bodyWords);
      if (score > bestScore) { bestScore = score; bestIndex = index; }
    });
    return bestIndex;
  }

  function wordSet(text) {
    var stop = { the:1, and:1, for:1, with:1, from:1, that:1, this:1, what:1, which:1, when:1, where:1, why:1, how:1, are:1, was:1, were:1, into:1, your:1, patient:1 };
    return String(text).toLowerCase().replace(/[^a-z0-9\s-]/g, " ").split(/\s+/).reduce(function (set, word) {
      if (word.length > 2 && !stop[word]) set[word] = true;
      return set;
    }, {});
  }

  function overlapScore(left, right) {
    return Object.keys(left).reduce(function (score, word) { return score + (right[word] ? 1 : 0); }, 0);
  }

  function shuffled(items) {
    var copy = items.slice();
    for (var i = copy.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = copy[i]; copy[i] = copy[j]; copy[j] = temp;
    }
    return copy;
  }

  function renderRecallObjectives(lecture) {
    var host = document.getElementById("mode-content");
    var objectives = lecture.objectives || [];
    if (!objectives.length) {
      host.innerHTML = emptyMode("No objectives yet.");
      return;
    }
    host.innerHTML = '<div class="recall-objective-intro"><p class="eyebrow">Recall by objective</p><h3>Choose an objective</h3><p>Each section combines that objective\'s Test and Apply questions with its linked Learn cards.</p></div><div class="recall-objective-list">' + objectives.map(function (objective, index) {
      var pool = recallPool(objective);
      var ids = pool.reduce(function (set, item) { set[item.id] = true; return set; }, {});
      var saved = loadRecall(lecture, objective);
      var mastered = (saved.mastered || []).filter(function (id) { return ids[id]; }).length;
      var percent = pool.length ? Math.round(mastered / pool.length * 100) : 0;
      return '<button type="button" class="recall-objective" data-recall-objective="' + index + '" ' + (!pool.length ? "disabled" : "") + '><span class="objective-number">' + String(index + 1).padStart(2, "0") + '</span><span class="recall-objective-copy"><strong>' + escapeHtml(objective.title) + '</strong><small>' + (pool.length ? mastered + " of " + pool.length + " mastered" : "No Test or Apply questions yet") + '</small></span><span class="objective-percent">' + percent + '%</span><span class="objective-arrow">›</span></button>';
    }).join("") + '</div>';
    host.querySelectorAll("[data-recall-objective]").forEach(function (button) {
      button.addEventListener("click", function () {
        var index = Number(button.dataset.recallObjective);
        renderRecallHome(lecture, objectives[index], index);
      });
    });
  }

  function renderRecallHome(lecture, objective, objectiveIndex) {
    var host = document.getElementById("mode-content");
    var pool = recallPool(objective);
    var saved = loadRecall(lecture, objective);
    var poolIds = pool.reduce(function (ids, item) { ids[item.id] = true; return ids; }, {});
    var mastered = (saved.mastered || []).filter(function (id) { return poolIds[id]; });
    var done = mastered.length >= pool.length;
    var percent = Math.round(mastered.length / pool.length * 100);
    host.innerHTML = '<button class="recall-objectives-back" id="recall-objectives-back" type="button">← All objectives</button><section class="recall-home">' +
      '<div class="recall-icon">↻</div><p class="eyebrow">Objective ' + (objectiveIndex + 1) + ' · Spaced repetition</p><h3>' + escapeHtml(objective.title) + '</h3>' +
      '<p>Recall runs this entire objective: all of its Test and Apply questions, plus its linked Learn cards. Correct answers retire; missed questions return after a short gap.</p>' +
      '<div class="recall-stats"><span><strong>' + mastered.length + '</strong> mastered</span><span><strong>' + pool.length + '</strong> total</span><span><strong>' + percent + '%</strong> complete</span></div>' +
      '<label class="recall-option"><input id="skip-previews" type="checkbox" ' + (saved.skipPreviews ? "checked" : "") + '><span><strong>Skip Learn previews</strong><small>Go straight through Test and Apply. A linked Learn card still appears whenever you miss a question.</small></span></label>' +
      '<div class="recall-actions"><button class="recall-start" id="start-recall" type="button">' + (done ? "Review again" : mastered.length ? "Resume Recall" : "Start Recall") + ' →</button>' +
      (mastered.length ? '<button class="recall-restart" id="restart-recall" type="button">Restart</button>' : "") + '</div></section>';
    document.getElementById("start-recall").addEventListener("click", function () {
      startRecall(lecture, objective, objectiveIndex, document.getElementById("skip-previews").checked, done);
    });
    document.getElementById("recall-objectives-back").addEventListener("click", function () { renderRecallObjectives(lecture); });
    var restart = document.getElementById("restart-recall");
    if (restart) restart.addEventListener("click", function () {
      if (!window.confirm("Restart Recall for this objective? Its Recall progress will be cleared.")) return;
      startRecall(lecture, objective, objectiveIndex, document.getElementById("skip-previews").checked, true);
    });
  }

  function startRecall(lecture, objective, objectiveIndex, skipPreviews, restart) {
    var saved = loadRecall(lecture, objective);
    var mastered = {};
    var pool = recallPool(objective);
    var poolIds = pool.reduce(function (ids, item) { ids[item.id] = true; return ids; }, {});
    if (!restart) (saved.mastered || []).forEach(function (id) { if (poolIds[id]) mastered[id] = true; });
    var remaining = pool.filter(function (item) { return !mastered[item.id]; });
    if (!remaining.length) remaining = pool;
    var steps = [];
    if (skipPreviews) {
      steps = shuffled(remaining).map(function (item) { return { type: "question", item: item }; });
    } else {
      var groups = {};
      var unlinked = [];
      remaining.forEach(function (item) {
        if (item.card < 0) unlinked.push(item);
        else (groups[item.card] || (groups[item.card] = [])).push(item);
      });
      shuffled(Object.keys(groups)).forEach(function (cardIndex) {
        steps.push({ type: "card", card: Number(cardIndex) });
        shuffled(groups[cardIndex]).forEach(function (item) { steps.push({ type: "question", item: item }); });
      });
      shuffled(unlinked).forEach(function (item) { steps.push({ type: "question", item: item }); });
    }
    recallState = { lecture: lecture, objective: objective, objectiveIndex: objectiveIndex, skipPreviews: skipPreviews, mastered: mastered, steps: steps, position: 0, total: pool.length };
    saveRecall(lecture, objective, mastered, skipPreviews);
    renderRecallStep();
  }

  function recallHeader() {
    var mastered = Object.keys(recallState.mastered).length;
    var percent = recallState.total ? Math.round(mastered / recallState.total * 100) : 0;
    return '<div class="recall-session-head"><button id="exit-recall" type="button">← Recall overview</button><span>' + mastered + ' / ' + recallState.total + ' mastered</span></div>' +
      '<div class="recall-progress"><span style="width:' + percent + '%"></span></div>';
  }

  function renderRecallStep() {
    var host = document.getElementById("mode-content");
    if (!recallState || recallState.position >= recallState.steps.length) {
      renderRecallComplete();
      return;
    }
    var step = recallState.steps[recallState.position];
    if (step.type === "card") {
      var card = recallState.objective.cards[step.card];
      host.innerHTML = recallHeader() + '<article class="learn-card recall-preview"><div class="card-number">Learn preview' + (card.highYield ? '<span>High yield</span>' : "") + '</div><h3>' + escapeHtml(card.title) + '</h3><p>' + escapeHtml(card.body) + '</p></article><button class="recall-start" id="recall-next" type="button">Start questions →</button>';
      bindRecallExit();
      document.getElementById("recall-next").addEventListener("click", recallAdvance);
      return;
    }
    renderRecallQuestion(step.item);
  }

  function renderRecallQuestion(item) {
    var host = document.getElementById("mode-content");
    var q = item.question;
    host.innerHTML = recallHeader() + '<article class="question-card recall-question"><div class="card-number">' + escapeHtml(item.kind) + ' · Recall</div><h3>' + escapeHtml(q.prompt) + '</h3><div class="choices">' + (q.choices || []).map(function (choice, index) {
      return '<button class="choice" type="button" data-choice="' + index + '"><span>' + String.fromCharCode(65 + index) + '</span>' + escapeHtml(choice) + '</button>';
    }).join("") + '</div><div class="explanation" id="recall-explanation" hidden><strong>Explanation</strong><p>' + escapeHtml(q.explanation || "") + '</p></div><div id="recall-card"></div></article><button class="recall-start recall-next" id="recall-next" type="button" hidden>Continue →</button>';
    bindRecallExit();
    host.querySelectorAll("[data-choice]").forEach(function (button) {
      button.addEventListener("click", function () { answerRecall(item, Number(button.dataset.choice)); });
    });
    document.getElementById("recall-next").addEventListener("click", recallAdvance);
  }

  function answerRecall(item, selected) {
    var correct = Number(item.question.correct);
    document.querySelectorAll("[data-choice]").forEach(function (button) {
      button.disabled = true;
      var choice = Number(button.dataset.choice);
      if (choice === correct) button.classList.add("correct");
      else if (choice === selected) button.classList.add("wrong");
    });
    document.getElementById("recall-explanation").hidden = false;
    if (selected === correct) {
      recallState.mastered[item.id] = true;
    } else {
      if (item.card >= 0) {
        var card = recallState.objective.cards[item.card];
        document.getElementById("recall-card").innerHTML = '<article class="learn-card missed-card"><div class="card-number">Review this Learn card</div><h3>' + escapeHtml(card.title) + '</h3><p>' + escapeHtml(card.body) + '</p></article>';
      }
      var returnAt = Math.min(recallState.position + 4, recallState.steps.length);
      recallState.steps.splice(returnAt, 0, { type: "question", item: item });
    }
    saveRecall(recallState.lecture, recallState.objective, recallState.mastered, recallState.skipPreviews);
    document.getElementById("recall-next").hidden = false;
  }

  function recallAdvance() {
    recallState.position += 1;
    renderRecallStep();
  }

  function bindRecallExit() {
    document.getElementById("exit-recall").addEventListener("click", function () {
      var lecture = recallState.lecture;
      var objective = recallState.objective;
      var objectiveIndex = recallState.objectiveIndex;
      saveRecall(lecture, objective, recallState.mastered, recallState.skipPreviews);
      recallState = null;
      renderRecallHome(lecture, objective, objectiveIndex);
    });
  }

  function renderRecallComplete() {
    var host = document.getElementById("mode-content");
    var lecture = recallState.lecture;
    var objective = recallState.objective;
    var objectiveIndex = recallState.objectiveIndex;
    var skipPreviews = recallState.skipPreviews;
    saveRecall(lecture, objective, recallState.mastered, skipPreviews);
    host.innerHTML = '<section class="recall-home"><div class="recall-icon">✓</div><p class="eyebrow">Objective complete</p><h3>' + escapeHtml(objective.title) + '</h3><p>You recalled every Test and Apply question in this objective.</p><div class="recall-actions"><button class="recall-start" id="recall-again" type="button">Review again →</button><button class="recall-restart" id="recall-overview" type="button">All objectives</button></div></section>';
    document.getElementById("recall-again").addEventListener("click", function () { startRecall(lecture, objective, objectiveIndex, skipPreviews, true); });
    document.getElementById("recall-overview").addEventListener("click", function () { recallState = null; renderRecallObjectives(lecture); });
  }

  function renderQuestion(question, index) {
    return '<article class="question-card" data-correct="' + Number(question.correct) + '"><div class="card-number">Question ' + (index + 1) + '</div><h3>' + escapeHtml(question.prompt) + '</h3><div class="choices">' + (question.choices || []).map(function (choice, choiceIndex) {
      return '<button class="choice" type="button"><span>' + String.fromCharCode(65 + choiceIndex) + '</span>' + escapeHtml(choice) + '</button>';
    }).join("") + '</div><div class="explanation" hidden><strong>Explanation</strong><p>' + escapeHtml(question.explanation || "") + '</p></div></article>';
  }

  function emptyMode(message) { return '<div class="empty-state compact"><span>✦</span><h3>' + escapeHtml(message) + '</h3><p>Add content in <code>data/semester.js</code>.</p></div>'; }

  document.getElementById("back-button").addEventListener("click", function () {
    studyView.hidden = true;
    workspace.hidden = false;
    document.querySelector(".hero").hidden = false;
    renderCourses();
  });

  document.getElementById("reset-progress").addEventListener("click", function () {
    if (!window.confirm("Reset all saved Semester 2 progress on this device?")) return;
    progress = {};
    Object.keys(localStorage).forEach(function (storageKey) {
      if (storageKey.indexOf("pasem2:recall:") === 0) localStorage.removeItem(storageKey);
    });
    recallState = null;
    saveProgress();
    renderCourses();
    if (!studyView.hidden) renderStudy();
  });

  renderCourses();
  renderProgress();
}());
