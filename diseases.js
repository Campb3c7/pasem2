(function () {
  "use strict";

  // One Diseases tool per course. Each instance owns its own view, data, and
  // progress key; every lookup is scoped to its own content container so two
  // instances can coexist in the page.
  function createDiseasesTool(config) {
  var lectures = (config.data && config.data.lectures) || [];
  var launch = document.getElementById(config.launchId);
  var view = document.getElementById(config.viewId);
  var content = document.getElementById(config.contentId);
  var studyView = document.getElementById("study-view");
  var progressKey = config.progressKey;
  if (!launch || !view || !content) return;
  // Labels let the same engine run other per-item tools (e.g. Concepts).
  var TITLE = config.title || "Diseases", ONE = config.one || "disease", MANY = config.many || "diseases";
  function count(n) { return n + " " + (n === 1 ? ONE : MANY); }
  // Top-level groups are lectures by default; Medications groups by drug class.
  var GROUP = config.groupOne || "lecture", GROUPS = config.groupMany || "lectures";
  function groupCount(n) { return n + " " + (n === 1 ? GROUP : GROUPS); }
  function lectureTags(item) {
    return item.lectures && item.lectures.length ? '<span class="med-lecture-tags">' + escapeHtml(item.lectures.join(" · ")) + '</span>' : "";
  }

  var currentMode = "information";
  // Information sub-state
  var infoLecture = null;
  var infoDisease = null;
  // Practice sub-state
  var practiceScope = null; // { label, lectureIds: [] } or { label, diseaseIds: [ids] }
  var practiceFilter = "all"; // "all" | "new"
  var practiceState = null;
  var practiceOrigin = null; // { lecture, disease } when practice started from a disease's Information page
  var flashState = null; // Flashcards session (config.flashcards only)

  function byId(id) { return content.querySelector("#" + id); }
  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>'"]/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character];
    });
  }
  function readStore(key, fallback) {
    try { var value = localStorage.getItem(key); return value == null ? fallback : JSON.parse(value); }
    catch (error) { return fallback; }
  }
  function writeStore(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch (error) {} }
  // Per-viewer preference shared by every Diseases tool; on unless turned off.
  var autoAdvanceKey = "pasem2:diseases:autoAdvance";
  var AUTO_ADVANCE_MS = 900;
  function autoAdvanceOn() { return readStore(autoAdvanceKey, true) !== false; }
  function loadProgress() { return readStore(progressKey, {}); }
  function saveProgress(progress) { writeStore(progressKey, progress); }
  function shuffle(items) {
    var copy = items.slice();
    for (var index = copy.length - 1; index > 0; index -= 1) {
      var other = Math.floor(Math.random() * (index + 1));
      var value = copy[index]; copy[index] = copy[other]; copy[other] = value;
    }
    return copy;
  }
  function allDiseases() {
    var items = [];
    lectures.forEach(function (lecture) { (lecture.diseases || []).forEach(function (disease) { items.push({ lecture: lecture, disease: disease }); }); });
    return items;
  }
  function findDisease(diseaseId) {
    return allDiseases().find(function (item) { return item.disease.id === diseaseId; });
  }

  // ---- progress math ------------------------------------------------------
  function isMastered(progress, diseaseId, questionId) {
    var record = progress[diseaseId];
    return !!(record && record.correct && record.correct[questionId]);
  }
  function markCorrect(diseaseId, questionId) {
    var progress = loadProgress();
    if (!progress[diseaseId]) progress[diseaseId] = { correct: {} };
    if (!progress[diseaseId].correct) progress[diseaseId].correct = {};
    progress[diseaseId].correct[questionId] = true;
    saveProgress(progress);
  }
  function resetDisease(diseaseId) {
    var progress = loadProgress();
    delete progress[diseaseId];
    saveProgress(progress);
  }
  function resetLecture(lecture) {
    var progress = loadProgress();
    (lecture.diseases || []).forEach(function (disease) { delete progress[disease.id]; });
    saveProgress(progress);
  }
  function resetEverything() { saveProgress({}); }
  function diseaseStats(progress, disease) {
    var total = (disease.questions || []).length;
    var record = progress[disease.id] || { correct: {} };
    var correct = Object.keys(record.correct || {}).length;
    return { total: total, correct: Math.min(correct, total) };
  }
  function lectureStats(progress, lecture) {
    var totalQuestions = 0, correctQuestions = 0, diseasesWithContent = 0;
    (lecture.diseases || []).forEach(function (disease) {
      var stats = diseaseStats(progress, disease);
      totalQuestions += stats.total;
      correctQuestions += stats.correct;
      if (stats.total) diseasesWithContent += 1;
    });
    return { totalQuestions: totalQuestions, correctQuestions: correctQuestions, diseaseCount: (lecture.diseases || []).length, diseasesWithContent: diseasesWithContent };
  }

  // ---- open / close ---------------------------------------------------------
  function open() {
    studyView.hidden = true;
    document.querySelectorAll(".walkthrough-view").forEach(function (section) { section.hidden = true; });
    view.hidden = false;
    currentMode = "information"; infoLecture = null; infoDisease = null;
    practiceScope = null; practiceState = null; practiceOrigin = null; flashState = null;
    renderRoot();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function close() {
    view.hidden = true; studyView.hidden = false;
    content.innerHTML = ""; practiceState = null; flashState = null;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---- root: mode tabs + delegated content --------------------------------
  function renderRoot() {
    var modes = [
      { id: "information", label: "Information" },
      { id: "progress", label: "Progress" },
      { id: "practice", label: "Practice" }
    ];
    if (config.flashcards) modes.splice(1, 0, { id: "flashcards", label: "Flashcards" });
    var totalDiseases = lectures.reduce(function (sum, lecture) { return sum + (lecture.diseases || []).length; }, 0);
    content.innerHTML =
      '<div class="diseases-heading"><p class="eyebrow">' + escapeHtml(config.eyebrow) + '</p><h2>' + escapeHtml(TITLE) + '</h2><p>' + escapeHtml(config.intro) + '</p>' +
      '<span class="diseases-count-pill">' + count(totalDiseases) + ' across ' + groupCount(lectures.length) + '</span>' +
      (config.note ? '<p class="diseases-note">' + escapeHtml(config.note) + '</p>' : '') + '</div>' +
      '<div class="mode-tabs" role="tablist">' + modes.map(function (mode) {
        return '<button type="button" class="mode-tab ' + (mode.id === currentMode ? "active" : "") + '" data-diseases-mode="' + mode.id + '">' + mode.label + '</button>';
      }).join("") + '</div><div id="diseases-mode-content"></div>';
    content.querySelectorAll("[data-diseases-mode]").forEach(function (button) {
      button.addEventListener("click", function () {
        currentMode = button.dataset.diseasesMode;
        if (currentMode !== "information") { infoLecture = null; infoDisease = null; }
        if (currentMode !== "practice") { practiceState = null; }
        if (currentMode !== "flashcards") { flashState = null; }
        renderRoot();
      });
    });
    renderModeContent();
  }
  function modeHost() { return byId("diseases-mode-content"); }
  function renderModeContent() {
    if (currentMode === "progress") { renderProgress(); return; }
    if (currentMode === "practice") { renderPracticeHome(); return; }
    if (currentMode === "flashcards") { renderFlashHome(); return; }
    renderInformation();
  }

  // ============================================================================
  // INFORMATION -- read-only browsing: lecture grid -> disease grid -> detail
  // ============================================================================
  function renderInformation() {
    if (infoDisease) { renderInfoDiseaseDetail(); return; }
    if (infoLecture) { renderInfoLectureList(); return; }
    renderInfoLectureGrid();
  }
  function renderInfoLectureGrid() {
    var progress = loadProgress();
    var html = '<div class="disease-lecture-grid">';
    lectures.forEach(function (lecture) {
      var stats = lectureStats(progress, lecture);
      var hasQuestions = stats.totalQuestions > 0;
      var percent = hasQuestions ? Math.round(stats.correctQuestions / stats.totalQuestions * 100) : 0;
      html += '<button type="button" class="disease-lecture-card" data-lecture="' + escapeHtml(lecture.id) + '">' +
        '<span class="disease-lecture-kicker">' + count(stats.diseaseCount) + '</span>' +
        '<strong>' + escapeHtml(lecture.title) + '</strong>' +
        '<span class="disease-lecture-meta">' + (hasQuestions ? percent + '% mastered · ' + stats.diseasesWithContent + '/' + stats.diseaseCount + ' ' + MANY + ' have questions' : 'Content coming soon') + '</span>' +
        '</button>';
    });
    html += '</div>';
    modeHost().innerHTML = html;
    modeHost().querySelectorAll("[data-lecture]").forEach(function (button) {
      button.addEventListener("click", function () {
        infoLecture = lectures.find(function (lecture) { return lecture.id === button.dataset.lecture; });
        renderRoot(); holdScrollIntoView(modeHost(), 350, "start");
      });
    });
  }
  function renderInfoLectureList() {
    var lecture = infoLecture;
    var progress = loadProgress();
    var html = '<div class="session-top"><button type="button" id="info-to-lectures">← All ' + GROUPS + '</button><span>' + escapeHtml(lecture.title) + '</span></div>' +
      '<div class="diseases-heading compact"><h2>' + escapeHtml(lecture.title) + '</h2><p>Pick a ' + ONE + ' to review what you need to know about it and, once its question bank is ready, jump straight into practicing that ' + ONE + '.</p></div><div class="disease-grid">';
    (lecture.diseases || []).forEach(function (disease) {
      var stats = diseaseStats(progress, disease);
      var hasQuestions = stats.total > 0;
      var hasContent = (disease.sections || []).length > 0;
      html += '<button type="button" class="disease-card" data-disease="' + escapeHtml(disease.id) + '">' +
        '<strong>' + escapeHtml(disease.name) + '</strong>' +
        '<span class="disease-card-blurb">' + escapeHtml(disease.blurb || "") + '</span>' + lectureTags(disease) +
        '<span class="disease-card-meta">' + (hasQuestions ? stats.correct + '/' + stats.total + ' questions mastered' : hasContent ? 'Reference ready · questions coming soon' : 'Coming soon') + '</span>' +
        '</button>';
    });
    html += '</div>';
    modeHost().innerHTML = html;
    byId("info-to-lectures").addEventListener("click", function () { infoLecture = null; renderRoot(); });
    modeHost().querySelectorAll("[data-disease]").forEach(function (button) {
      button.addEventListener("click", function () {
        infoDisease = (lecture.diseases || []).find(function (disease) { return disease.id === button.dataset.disease; });
        renderRoot(); holdScrollIntoView(modeHost(), 350, "start");
      });
    });
  }
  function renderInfoDiseaseDetail() {
    var lecture = infoLecture, disease = infoDisease;
    var progress = loadProgress();
    var stats = diseaseStats(progress, disease);
    var hasContent = (disease.sections || []).length > 0;
    var hasQuestions = stats.total > 0;
    var html = '<div class="session-top"><button type="button" id="info-to-lecture">← ' + escapeHtml(lecture.title) + '</button><span>' + escapeHtml(disease.name) + '</span></div>' +
      '<article class="disease-detail"><p class="eyebrow">' + escapeHtml(lecture.title) + '</p><h2>' + escapeHtml(disease.name) + '</h2><p class="disease-detail-blurb">' + escapeHtml(disease.blurb || "") + '</p>' + (disease.lectures && disease.lectures.length ? '<p class="med-lecture-line">Taught in: ' + lectureTags(disease) + '</p>' : "");
    if (hasContent) {
      html += disease.sections.map(function (section) { return '<section class="disease-detail-section"><h3>' + escapeHtml(section.title || "") + '</h3>' + (section.html || "") + '</section>'; }).join("");
    } else {
      html += '<div class="empty-state compact"><span>📖</span><h3>Reference content coming soon</h3><p>This ' + ONE + ' is confirmed on the list, but its full write-up hasn\'t been added to the site yet.</p></div>';
    }
    html += '<div class="disease-practice">';
    if (hasQuestions) {
      html += '<div class="disease-practice-stats"><strong>' + stats.correct + ' / ' + stats.total + '</strong><span>questions mastered</span></div><button type="button" class="primary-action" id="disease-practice-start">Practice ' + escapeHtml(disease.name) + ' →</button>';
    } else {
      html += '<div class="empty-state compact"><span>❓</span><h3>Practice questions coming soon</h3><p>This ' + ONE + '\'s question bank hasn\'t been written yet.</p></div>';
    }
    html += '</div></article>';
    modeHost().innerHTML = html;
    byId("info-to-lecture").addEventListener("click", function () { infoDisease = null; renderRoot(); });
    if (byId("disease-practice-start")) {
      byId("disease-practice-start").addEventListener("click", function () {
        practiceOrigin = { lecture: lecture, disease: disease };
        startPracticeForDiseases([disease], disease.name, null);
      });
    }
  }

  // ============================================================================
  // PROGRESS -- dashboard + reset controls
  // ============================================================================
  function renderProgress() {
    var progress = loadProgress();
    var overallTotal = 0, overallCorrect = 0;
    lectures.forEach(function (lecture) { var stats = lectureStats(progress, lecture); overallTotal += stats.totalQuestions; overallCorrect += stats.correctQuestions; });
    var overallPercent = overallTotal ? Math.round(overallCorrect / overallTotal * 100) : 0;
    var html = '<div class="progress-overview"><div><strong>' + overallPercent + '%</strong><span>overall mastered</span></div><div><strong>' + overallCorrect + ' / ' + overallTotal + '</strong><span>questions correct</span></div>' +
      (overallTotal ? '<button type="button" class="secondary-action" id="progress-reset-all">Reset all ' + escapeHtml(TITLE) + ' progress</button>' : "") + '</div><div class="progress-lecture-list">';
    lectures.forEach(function (lecture) {
      var stats = lectureStats(progress, lecture);
      var hasQuestions = stats.totalQuestions > 0;
      var percent = hasQuestions ? Math.round(stats.correctQuestions / stats.totalQuestions * 100) : 0;
      html += '<section class="progress-lecture"><div class="progress-lecture-head"><strong>' + escapeHtml(lecture.title) + '</strong>' + (hasQuestions ? '<span>' + percent + '% · ' + stats.correctQuestions + '/' + stats.totalQuestions + '</span><button type="button" class="progress-reset-lecture" data-lecture="' + escapeHtml(lecture.id) + '">Reset ' + GROUP + '</button>' : '<span class="faint">No questions yet</span>') + '</div>';
      if (hasQuestions) {
        html += '<div class="progress-disease-list">';
        (lecture.diseases || []).forEach(function (disease) {
          var dStats = diseaseStats(progress, disease);
          if (!dStats.total) return;
          var dPercent = Math.round(dStats.correct / dStats.total * 100);
          html += '<div class="progress-disease-row"><span class="progress-disease-name">' + escapeHtml(disease.name) + '</span><div class="progress-disease-bar"><span style="width:' + dPercent + '%"></span></div><span class="progress-disease-count">' + dStats.correct + '/' + dStats.total + '</span><button type="button" class="progress-reset-disease" data-disease="' + escapeHtml(disease.id) + '">Reset</button></div>';
        });
        html += '</div>';
      }
      html += '</section>';
    });
    html += '</div>';
    modeHost().innerHTML = html;
    if (byId("progress-reset-all")) {
      byId("progress-reset-all").addEventListener("click", function () {
        if (!window.confirm("Reset ALL " + TITLE + " progress? This clears every mastered question across every " + GROUP + ".")) return;
        resetEverything(); renderRoot();
      });
    }
    modeHost().querySelectorAll(".progress-reset-lecture").forEach(function (button) {
      button.addEventListener("click", function () {
        var lecture = lectures.find(function (l) { return l.id === button.dataset.lecture; });
        if (!window.confirm('Reset all progress for "' + lecture.title + '"?')) return;
        resetLecture(lecture); renderRoot();
      });
    });
    modeHost().querySelectorAll(".progress-reset-disease").forEach(function (button) {
      button.addEventListener("click", function (event) {
        event.stopPropagation();
        var found = findDisease(button.dataset.disease);
        if (!found || !window.confirm('Reset progress for "' + found.disease.name + '"?')) return;
        resetDisease(found.disease.id); renderRoot();
      });
    });
  }

  // ============================================================================
  // PRACTICE -- scope picker -> filter -> interleaved card session
  // ============================================================================
  function renderPracticeHome() {
    practiceOrigin = null;
    var progress = loadProgress();
    var lecturesWithQuestions = lectures.filter(function (lecture) { return lectureStats(progress, lecture).totalQuestions > 0; });
    if (!lecturesWithQuestions.length) {
      modeHost().innerHTML = '<div class="empty-state compact"><span>🗂️</span><h3>No practice questions yet</h3><p>Question banks are added ' + GROUP + ' by ' + GROUP + '. Check the Information tab to see what\'s been written so far.</p></div>';
      return;
    }
    var everyoneTotal = 0;
    lecturesWithQuestions.forEach(function (lecture) { everyoneTotal += lectureStats(progress, lecture).totalQuestions; });
    var html = '<div class="diseases-heading compact"><h2>Practice</h2><p>Choose a scope, choose whether to include cards you\'ve already mastered, then go. Every card can show up in any scope -- nothing is exclusive to "its" ' + GROUP + '.</p></div>';
    html += '<div class="practice-scope-everything"><button type="button" class="primary-action" id="practice-everything">Practice everything (' + everyoneTotal + ' cards) →</button></div>';
    html += '<div class="practice-lecture-picker"><p class="practice-picker-label">Or choose one or more ' + GROUPS + '</p>';
    lecturesWithQuestions.forEach(function (lecture) {
      var stats = lectureStats(progress, lecture);
      html += '<label class="recall-option practice-lecture-option"><input type="checkbox" class="practice-lecture-check" value="' + escapeHtml(lecture.id) + '"><span><strong>' + escapeHtml(lecture.title) + '</strong><small>' + stats.totalQuestions + ' cards · ' + Math.round(stats.correctQuestions / stats.totalQuestions * 100) + '% mastered</small></span></label>';
    });
    html += '<button type="button" class="secondary-action" id="practice-selected-lectures">Practice selected ' + GROUPS + ' →</button></div>';
    html += '<p class="practice-picker-label">Or practice a single ' + ONE + ' from the Information tab -- open any ' + ONE + ' and use its "Practice" button.</p>';
    modeHost().innerHTML = html;
    byId("practice-everything").addEventListener("click", function () {
      var diseases = [];
      lecturesWithQuestions.forEach(function (lecture) { diseases = diseases.concat(lecture.diseases || []); });
      askFilterThenStart(diseases, "Everything");
    });
    byId("practice-selected-lectures").addEventListener("click", function () {
      var checked = Array.prototype.slice.call(modeHost().querySelectorAll(".practice-lecture-check:checked")).map(function (box) { return box.value; });
      if (!checked.length) { window.alert("Select at least one " + GROUP + " first."); return; }
      var chosen = lectures.filter(function (lecture) { return checked.indexOf(lecture.id) !== -1; });
      var diseases = [];
      chosen.forEach(function (lecture) { diseases = diseases.concat(lecture.diseases || []); });
      var label = chosen.length === 1 ? chosen[0].title : groupCount(chosen.length);
      askFilterThenStart(diseases, label);
    });
  }
  function backToOriginLecture() {
    var origin = practiceOrigin;
    practiceState = null; practiceOrigin = null;
    currentMode = "information"; infoLecture = origin.lecture; infoDisease = null;
    renderRoot(); holdScrollIntoView(modeHost(), 350, "start");
  }
  function openDiseaseInfo(lecture, disease) {
    practiceState = null; practiceOrigin = null;
    currentMode = "information"; infoLecture = lecture; infoDisease = disease;
    renderRoot(); holdScrollIntoView(modeHost(), 350, "start");
  }
  function nextDiseaseInOrigin() {
    if (!practiceOrigin) return null;
    var list = practiceOrigin.lecture.diseases || [];
    var index = list.indexOf(practiceOrigin.disease);
    return index >= 0 && index + 1 < list.length ? list[index + 1] : null;
  }
  function leavePractice() {
    if (practiceOrigin) { openDiseaseInfo(practiceOrigin.lecture, practiceOrigin.disease); return; }
    practiceState = null; renderPracticeHome();
  }
  function askFilterThenStart(diseases, label) {
    var progress = loadProgress();
    var totalQuestions = diseases.reduce(function (sum, disease) { return sum + (disease.questions || []).length; }, 0);
    var newQuestions = diseases.reduce(function (sum, disease) {
      var record = progress[disease.id] || { correct: {} };
      return sum + (disease.questions || []).filter(function (question) { return !isMastered(progress, disease.id, question.id); }).length;
    }, 0);
    var html = '<div class="diseases-heading compact"><h2>' + escapeHtml(label) + '</h2><p>How do you want to draw cards from this scope?</p></div><div class="practice-filter-grid">' +
      '<button type="button" class="disease-lecture-card" id="practice-filter-all"><strong>All cards</strong><span class="disease-lecture-meta">' + totalQuestions + ' cards, including ones you\'ve already mastered</span></button>' +
      '<button type="button" class="disease-lecture-card" id="practice-filter-new"' + (newQuestions ? "" : " disabled") + '><strong>New only</strong><span class="disease-lecture-meta">' + newQuestions + ' cards you haven\'t gotten right yet</span></button>' +
      '</div><button type="button" class="secondary-action" id="practice-filter-back">← Back</button>';
    modeHost().innerHTML = html;
    byId("practice-filter-all").addEventListener("click", function () { startPracticeForDiseases(diseases, label, "all"); });
    if (newQuestions) byId("practice-filter-new").addEventListener("click", function () { startPracticeForDiseases(diseases, label, "new"); });
    byId("practice-filter-back").addEventListener("click", leavePractice);
  }
  function startPracticeForDiseases(diseases, label, filter) {
    if (!filter) { askFilterThenStart(diseases, label); return; }
    var progress = loadProgress();
    var pool = [];
    diseases.forEach(function (disease) {
      (disease.questions || []).forEach(function (question) {
        if (filter === "new" && isMastered(progress, disease.id, question.id)) return;
        pool.push({ disease: disease, question: question });
      });
    });
    if (!pool.length) { window.alert("No cards match that scope/filter."); renderPracticeHome(); return; }
    practiceState = {
      label: label, filter: filter,
      queue: interleave(pool).map(presentCard),
      position: 0, correctCount: 0, missed: []
    };
    renderPracticeQuestion();
    holdScrollIntoView(modeHost(), 350, "start");
  }
  function holdScrollIntoView(el, ms, block) {
    if (!el) return;
    var deadline = performance.now() + ms;
    function tick() {
      el.scrollIntoView({ behavior: "instant", block: block || "nearest" });
      if (performance.now() < deadline) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  function interleave(items) {
    var shuffled = shuffle(items);
    for (var index = 1; index < shuffled.length; index += 1) {
      if (shuffled[index].disease.id === shuffled[index - 1].disease.id) {
        for (var scan = index + 1; scan < shuffled.length; scan += 1) {
          if (shuffled[scan].disease.id !== shuffled[index - 1].disease.id) {
            var temp = shuffled[index]; shuffled[index] = shuffled[scan]; shuffled[scan] = temp;
            break;
          }
        }
      }
    }
    return shuffled;
  }
  function presentCard(item) {
    var order = shuffle([0, 1, 2, 3]);
    var choices = order.map(function (originalIndex) { return item.question.choices[originalIndex]; });
    var correct = order.indexOf(item.question.correct);
    return { disease: item.disease, question: item.question, choices: choices, correct: correct };
  }
  function practiceSessionHeader(detail) {
    var state = practiceState;
    var percent = state.queue.length ? Math.round(state.position / state.queue.length * 100) : 0;
    return '<div class="session-top"><button type="button" id="practice-exit">← ' + escapeHtml(practiceOrigin ? practiceOrigin.disease.name : "Practice") + '</button><span>' + escapeHtml(state.label) + '</span></div><div class="session-progress"><span style="width:' + percent + '%"></span></div><div class="session-counter">' + escapeHtml(detail) + '</div>' +
      '<label class="auto-advance-toggle"><input type="checkbox" id="practice-auto-advance"' + (autoAdvanceOn() ? " checked" : "") + '> Auto-advance when correct</label>';
  }
  function renderPracticeQuestion() {
    var state = practiceState;
    if (!state || state.position >= state.queue.length) { renderPracticeComplete(); return; }
    var card = state.queue[state.position];
    var html = practiceSessionHeader((state.position + 1) + ' of ' + state.queue.length + ' · ' + card.disease.name) +
      '<article class="question-card immersive-card"><div class="card-number">' + escapeHtml(card.disease.name) + '</div><h3>' + escapeHtml(card.question.prompt) + '</h3><div class="choices" id="practice-choices">' +
      card.choices.map(function (choice, index) { return '<button class="choice" type="button" data-choice="' + index + '"><span>' + String.fromCharCode(65 + index) + '</span>' + escapeHtml(choice) + '</button>'; }).join("") +
      '</div><div class="explanation" id="practice-explanation" hidden><strong>Explanation</strong><p></p></div><div id="practice-linked-info"></div></article>' +
      '<button class="primary-action full-action" id="practice-next" type="button" hidden>' + (state.position + 1 === state.queue.length ? "See results" : "Next →") + '</button>';
    modeHost().innerHTML = html;
    byId("practice-exit").addEventListener("click", leavePractice);
    byId("practice-auto-advance").addEventListener("change", function (event) { writeStore(autoAdvanceKey, event.target.checked); });
    modeHost().querySelectorAll("[data-choice]").forEach(function (button) { button.addEventListener("click", function () { answerPractice(Number(button.dataset.choice)); }); });
    byId("practice-next").addEventListener("click", function () { state.position += 1; renderPracticeQuestion(); });
    holdScrollIntoView(modeHost(), 350, "start");
  }
  function answerPractice(selected) {
    var state = practiceState, card = state.queue[state.position], correct = card.correct;
    modeHost().querySelectorAll("[data-choice]").forEach(function (button) {
      button.disabled = true; var choice = Number(button.dataset.choice);
      if (choice === correct) button.classList.add("correct"); else if (choice === selected) button.classList.add("wrong"); else button.classList.add("dimmed");
    });
    var explanationBox = byId("practice-explanation");
    explanationBox.hidden = false;
    explanationBox.querySelector("p").textContent = card.question.explanation || "";
    if (selected === correct) {
      state.correctCount += 1;
      markCorrect(card.disease.id, card.question.id);
      if (autoAdvanceOn()) {
        var answeredPosition = state.position;
        byId("practice-next").hidden = false;
        // Skip ahead unless the learner already moved on, exited, or switched it off.
        window.setTimeout(function () {
          if (practiceState !== state || state.position !== answeredPosition || !autoAdvanceOn()) return;
          state.position += 1; renderPracticeQuestion();
        }, AUTO_ADVANCE_MS);
        return;
      }
    } else {
      state.missed.push(card);
      var section = (card.disease.sections || []).find(function (candidate) { return candidate.id === card.question.section; });
      if (section) {
        byId("practice-linked-info").innerHTML = '<article class="learn-card immersive-card"><div class="card-number">↩ Review · ' + escapeHtml(card.disease.name) + '<span>' + escapeHtml(section.title) + '</span></div><div class="learn-body">' + section.html + '</div></article>';
      }
    }
    byId("practice-next").hidden = false;
    holdScrollIntoView(explanationBox, 350);
  }
  function renderPracticeComplete() {
    var state = practiceState;
    var percent = state.queue.length ? Math.round(state.correctCount / state.queue.length * 100) : 0;
    var html = '<section class="complete-panel"><span class="complete-icon">' + (percent >= 80 ? "🎯" : "📚") + '</span><p class="eyebrow">Practice complete</p><h3>' + escapeHtml(state.label) + '</h3><p>' + state.correctCount + ' of ' + state.queue.length + ' correct · ' + percent + '%</p><div class="score-grid"><span><strong>' + state.correctCount + '</strong>Correct</span><span><strong>' + (state.queue.length - state.correctCount) + '</strong>Missed</span></div><div class="session-actions">' +
      (state.missed.length ? '<button class="primary-action" id="practice-redo-missed" type="button">Redo ' + state.missed.length + ' missed →</button>' : "") +
      (practiceOrigin ? '<button class="secondary-action" id="practice-back-lecture" type="button">← Back to ' + escapeHtml(practiceOrigin.lecture.title) + '</button>' : "") +
      (nextDiseaseInOrigin() ? '<button class="secondary-action" id="practice-next-disease" type="button">Next: ' + escapeHtml(nextDiseaseInOrigin().name) + ' →</button>' : "") +
      '<button class="secondary-action" id="practice-home" type="button">Practice home</button></div></section>';
    modeHost().innerHTML = html;
    if (byId("practice-redo-missed")) {
      byId("practice-redo-missed").addEventListener("click", function () {
        practiceState = { label: state.label + " · missed", filter: state.filter, queue: state.missed.map(function (card) { return presentCard({ disease: card.disease, question: card.question }); }), position: 0, correctCount: 0, missed: [] };
        renderPracticeQuestion();
      });
    }
    byId("practice-home").addEventListener("click", function () { practiceState = null; renderPracticeHome(); });
    if (byId("practice-back-lecture")) byId("practice-back-lecture").addEventListener("click", backToOriginLecture);
    if (byId("practice-next-disease")) {
      var nextDisease = nextDiseaseInOrigin();
      byId("practice-next-disease").addEventListener("click", function () { openDiseaseInfo(practiceOrigin.lecture, nextDisease); });
    }
  }

  // ============================================================================
  // FLASHCARDS -- one card per section: front = item + topic, back = section.
  // Only when config.flashcards is set. "Again" cards return at the end.
  // ============================================================================
  var FLASH_PROMPTS = config.flashPrompts || {};
  var FLASH_OTHER = config.flashOtherLabel || "Other";
  function flashTopicOf(section) { return FLASH_PROMPTS[section.id] ? section.id : "other"; }
  function flashTopics() {
    var topics = Object.keys(FLASH_PROMPTS).map(function (id) { return { id: id, label: FLASH_PROMPTS[id].label }; });
    var hasOther = allDiseases().some(function (item) { return (item.disease.sections || []).some(function (section) { return flashTopicOf(section) === "other"; }); });
    if (hasOther) topics.push({ id: "other", label: FLASH_OTHER });
    return topics;
  }
  function flashCardsFor(groups, topicIds) {
    var cards = [];
    groups.forEach(function (lecture) {
      (lecture.diseases || []).forEach(function (disease) {
        (disease.sections || []).forEach(function (section) {
          if (topicIds.indexOf(flashTopicOf(section)) === -1) return;
          cards.push({ lecture: lecture, disease: disease, section: section });
        });
      });
    });
    return cards;
  }
  function renderFlashHome() {
    flashState = null;
    var topics = flashTopics();
    var total = flashCardsFor(lectures, topics.map(function (topic) { return topic.id; })).length;
    var html = '<div class="diseases-heading compact"><h2>Flashcards</h2><p>Each card names a ' + ONE + ' and one thing to recall about it. Say the answer to yourself, flip the card (Space), then mark it <strong>Again</strong> (A) or <strong>Got it</strong> (B). Cards you mark Again come back at the end until you get them.</p></div>' +
      '<div class="practice-scope-everything"><button type="button" class="primary-action" id="flash-everything">Study every card (' + total + ') →</button></div>' +
      '<div class="practice-lecture-picker"><p class="practice-picker-label">Or pick what to drill</p><div class="flash-topic-row">' +
      topics.map(function (topic) { return '<label class="flash-topic"><input type="checkbox" class="flash-topic-check" value="' + escapeHtml(topic.id) + '" checked> ' + escapeHtml(topic.label) + '</label>'; }).join("") +
      '</div>';
    lectures.forEach(function (lecture) {
      html += '<label class="recall-option practice-lecture-option"><input type="checkbox" class="flash-group-check" value="' + escapeHtml(lecture.id) + '"><span><strong>' + escapeHtml(lecture.title) + '</strong><small>' + count((lecture.diseases || []).length) + '</small></span></label>';
    });
    html += '<button type="button" class="secondary-action" id="flash-selected">Study selected →</button><p class="practice-picker-label">No ' + GROUP + ' ticked = all ' + GROUPS + '.</p></div>';
    modeHost().innerHTML = html;
    byId("flash-everything").addEventListener("click", function () { startFlash(lectures, topics.map(function (topic) { return topic.id; }), "Every card"); });
    byId("flash-selected").addEventListener("click", function () {
      var topicIds = Array.prototype.slice.call(modeHost().querySelectorAll(".flash-topic-check:checked")).map(function (box) { return box.value; });
      var groupIds = Array.prototype.slice.call(modeHost().querySelectorAll(".flash-group-check:checked")).map(function (box) { return box.value; });
      if (!topicIds.length) { window.alert("Pick at least one thing to drill."); return; }
      var groups = groupIds.length ? lectures.filter(function (lecture) { return groupIds.indexOf(lecture.id) !== -1; }) : lectures;
      var topicLabel = topicIds.length === topics.length ? "All topics" : topics.filter(function (topic) { return topicIds.indexOf(topic.id) !== -1; }).map(function (topic) { return topic.label; }).join(", ");
      var groupLabel = groups.length === lectures.length ? "All " + GROUPS : groups.length === 1 ? groups[0].title : groupCount(groups.length);
      startFlash(groups, topicIds, groupLabel + " · " + topicLabel);
    });
  }
  function startFlash(groups, topicIds, label) {
    var cards = flashCardsFor(groups, topicIds);
    if (!cards.length) { window.alert("No cards match that choice."); return; }
    flashState = { label: label, queue: shuffle(cards), position: 0, revealed: false, firstTry: 0, again: 0, seen: {} };
    renderFlashCard();
  }
  function renderFlashCard() {
    var state = flashState;
    if (!state || state.position >= state.queue.length) { renderFlashComplete(); return; }
    var card = state.queue[state.position];
    var prompt = FLASH_PROMPTS[card.section.id] ? FLASH_PROMPTS[card.section.id].prompt : card.section.title + "?";
    var remaining = state.queue.length - state.position;
    var percent = Math.round(state.position / state.queue.length * 100);
    var html = '<div class="session-top"><button type="button" id="flash-exit">← Flashcards</button><span>' + escapeHtml(state.label) + '</span></div><div class="session-progress"><span style="width:' + percent + '%"></span></div>' +
      '<div class="session-counter">' + remaining + ' card' + (remaining === 1 ? '' : 's') + ' left' + (state.again ? ' · ' + state.again + ' marked again' : '') + '</div>' +
      '<article class="learn-card immersive-card flash-card"><div class="card-number">' + escapeHtml(card.lecture.title) + '</div>' +
      '<div class="flash-front"><h3>' + escapeHtml(card.disease.name) + '</h3><p class="flash-prompt">' + escapeHtml(prompt) + '</p>' + (card.disease.blurb ? '<p class="flash-blurb">' + escapeHtml(card.disease.blurb) + '</p>' : '') + '</div>' +
      (state.revealed ? '<div class="learn-body flash-back">' + card.section.html + '</div>' : '') + '</article>' +
      (state.revealed
        ? '<div class="choices flash-grade" id="flash-grade"><button class="choice" type="button" data-flash="again"><span>A</span>Again</button><button class="choice" type="button" data-flash="got"><span>B</span>Got it</button></div>'
        : '<button class="primary-action full-action" id="flash-reveal" type="button">Show answer (Space)</button>');
    modeHost().innerHTML = html;
    byId("flash-exit").addEventListener("click", renderFlashHome);
    if (byId("flash-reveal")) byId("flash-reveal").addEventListener("click", function () { state.revealed = true; renderFlashCard(); });
    modeHost().querySelectorAll("[data-flash]").forEach(function (button) {
      button.addEventListener("click", function () { gradeFlash(button.dataset.flash === "got"); });
    });
    holdScrollIntoView(modeHost(), 250, "start");
  }
  function gradeFlash(gotIt) {
    var state = flashState, card = state.queue[state.position];
    var key = card.disease.id + "|" + card.section.id;
    if (gotIt) { if (!state.seen[key]) state.firstTry += 1; }
    else { state.again += 1; state.queue.push(card); }
    state.seen[key] = true;
    state.position += 1; state.revealed = false;
    renderFlashCard();
  }
  function renderFlashComplete() {
    var state = flashState;
    var unique = Object.keys(state.seen).length;
    modeHost().innerHTML = '<section class="complete-panel"><span class="complete-icon">' + (state.firstTry === unique ? "🎯" : "📚") + '</span><p class="eyebrow">Flashcards complete</p><h3>' + escapeHtml(state.label) + '</h3><p>' + state.firstTry + ' of ' + unique + ' cards right on the first try</p><div class="score-grid"><span><strong>' + state.firstTry + '</strong>First try</span><span><strong>' + (unique - state.firstTry) + '</strong>Needed repeats</span></div><div class="session-actions"><button class="primary-action" id="flash-home" type="button">Flashcards home</button></div></section>';
    byId("flash-home").addEventListener("click", renderFlashHome);
  }

  launch.addEventListener("click", open);
  document.getElementById(config.backId).addEventListener("click", close);
  }

  var intro = "Every disease you need to identify, diagnose, and treat -- organized lecture by lecture, tracked disease by disease. Separate from Disease Walkthrough: this is depth on one disease at a time, not a diagnostic mystery.";

  createDiseasesTool({
    data: window.DISEASES,
    launchId: "diseases-launch", viewId: "diseases-view", contentId: "diseases-content", backId: "diseases-back",
    progressKey: "pasem2:diseases:progress",
    eyebrow: "Infectious Disease · comprehensive disease review",
    intro: intro,
    note: "Only 9 of the 12 infectious disease lectures appear here. Vaccines, Infectious Disease Pharmacology, and Infectious Disease Labs don't teach diseases to diagnose and treat -- they cover vaccine science, drug classes, and lab methodology instead, and already live elsewhere on the site (Vaccines has its own Learn/Test/Apply lecture; Pharmacology content feeds the treatment questions on diseases here; Labs content maps to Diagnosis Drills)."
  });

  createDiseasesTool({
    data: window.ENDOCRINE_DISEASES,
    launchId: "endocrine-diseases-launch", viewId: "endocrine-diseases-view", contentId: "endocrine-diseases-content", backId: "endocrine-diseases-back",
    progressKey: "pasem2:diseases:endocrine:progress",
    eyebrow: "Endocrine · comprehensive disease review",
    intro: "Every endocrine disease you need to identify, work up, and treat -- organized lecture by lecture, tracked disease by disease. Drugs from Diabetic and Thyroid Pharmacology appear in the treatment sections of the diseases they treat.",
    note: "Endocrinology Anatomy, Diabetic Pharmacology, Thyroid Pharmacology, and Patient Education & Follow-Up teach no diseases of their own, so they don't appear as lectures here -- the pharmacology lives in each disease's treatment section."
  });

  createDiseasesTool({
    data: window.CARDIO_PART1_DISEASES,
    launchId: "cardio-diseases-launch", viewId: "cardio-diseases-view", contentId: "cardio-diseases-content", backId: "cardio-diseases-back",
    progressKey: "pasem2:diseases:cardio-part-1:progress",
    eyebrow: "Cardio Part 1 · comprehensive disease review",
    intro: "Every Cardio Part 1 disease you need to identify, work up, and treat -- organized lecture by lecture, tracked disease by disease. Lipid and antihypertensive drugs appear in the treatment sections of the diseases they treat.",
    note: "Anatomy, Physiology, H&P, and Cardiac Devices aren't disease lectures, so their entries are the clinical conditions those lectures teach you to recognize or manage."
  });

  createDiseasesTool({
    data: window.CARDIO_PART1_CONCEPTS,
    title: "Concepts", one: "concept", many: "concepts",
    launchId: "cardio-concepts-launch", viewId: "cardio-concepts-view", contentId: "cardio-concepts-content", backId: "cardio-concepts-back",
    progressKey: "pasem2:concepts:cardio-part-1:progress",
    eyebrow: "Cardio Part 1 · understand the why",
    intro: "The ideas you have to reason with, not just memorize -- each concept explains the mechanism, walks the cause-and-effect chain, ties it to what you'll find on exam, and lists the classic traps. Practice is mostly \"what happens if...\" prediction questions.",
    note: "Memorization facts stay in each lecture's Learn/Test/Apply. Physiology, Hypertension, and Valvular Disease carry the most mechanism; Anatomy and H&P have fewer concepts because more of them is pure recall."
  });

  createDiseasesTool({
    data: window.CARDIO_PART1_PATHOPHYS,
    title: "Pathophysiology", one: "topic", many: "topics",
    launchId: "cardio-pathophys-launch", viewId: "cardio-pathophys-view", contentId: "cardio-pathophys-content", backId: "cardio-pathophys-back",
    progressKey: "pasem2:pathophys:cardio-part-1:progress",
    eyebrow: "Cardio Part 1 · pathophysiology practice",
    intro: "Practice-first pathophysiology: why each disease, finding, and drug effect happens, spread across every Cardio Part 1 lecture. Start a practice set for the whole course or one lecture; miss a question and the key mechanism appears so you can review it on the spot.",
    note: "Heart Sounds isn't here yet because its deck hasn't been added. The Concepts tool goes deeper on each mechanism if a topic keeps tripping you up."
  });

  createDiseasesTool({
    data: window.CARDIO_PART1_MEDICATIONS,
    title: "Medications", one: "medication", many: "medications",
    groupOne: "drug class", groupMany: "drug classes",
    launchId: "cardio-meds-launch", viewId: "cardio-meds-view", contentId: "cardio-meds-content", backId: "cardio-meds-back",
    progressKey: "pasem2:medications:cardio-part-1:progress",
    eyebrow: "Cardio Part 1 · every drug you need to know",
    intro: "Every Cardio Part 1 drug, grouped by class instead of by lecture because the same drugs come back in lecture after lecture. Each one has the same five parts: what it treats, how it works, contraindications, side effects, and must-know pearls, with the lectures that teach it.",
    note: "Use Flashcards to drill one part at a time (for example only side effects), and Practice for exam-style questions. \"Which drug when\" compares drugs across classes: compelling indications, hypertensive emergency picks, pregnancy, HCM, drugs that raise BP, and overdoses.",
    flashcards: true,
    flashPrompts: {
      uses: { label: "What it treats", prompt: "What does it treat?" },
      moa: { label: "How it works", prompt: "How does it work?" },
      avoid: { label: "Contraindications", prompt: "Contraindications and cautions?" },
      se: { label: "Side effects", prompt: "Side effects?" },
      pearls: { label: "Pearls", prompt: "Must-know pearls?" }
    },
    flashOtherLabel: "Which-drug-when tables"
  });
}());
