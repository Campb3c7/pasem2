(function () {
  "use strict";

  var lectures = (window.DISEASES && window.DISEASES.lectures) || [];
  var launch = document.getElementById("diseases-launch");
  var view = document.getElementById("diseases-view");
  var content = document.getElementById("diseases-content");
  var hero = document.querySelector(".hero");
  var workspace = document.querySelector(".workspace");
  var studyView = document.getElementById("study-view");
  var walkthroughView = document.getElementById("walkthrough-view");
  var drillView = document.getElementById("diagnosis-drill-view");
  var geographyView = document.getElementById("geography-view");
  var progressKey = "pasem2:diseases:progress";

  var currentMode = "information";
  // Information sub-state
  var infoLecture = null;
  var infoDisease = null;
  // Practice sub-state
  var practiceScope = null; // { label, lectureIds: [] } or { label, diseaseIds: [ids] }
  var practiceFilter = "all"; // "all" | "new"
  var practiceState = null;

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
    hero.hidden = true; workspace.hidden = true; studyView.hidden = true;
    walkthroughView.hidden = true; drillView.hidden = true; geographyView.hidden = true;
    view.hidden = false;
    currentMode = "information"; infoLecture = null; infoDisease = null;
    practiceScope = null; practiceState = null;
    renderRoot();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function close() {
    view.hidden = true; hero.hidden = false; workspace.hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---- root: mode tabs + delegated content --------------------------------
  function renderRoot() {
    var modes = [
      { id: "information", label: "Information" },
      { id: "progress", label: "Progress" },
      { id: "practice", label: "Practice" }
    ];
    var totalDiseases = lectures.reduce(function (sum, lecture) { return sum + (lecture.diseases || []).length; }, 0);
    content.innerHTML =
      '<div class="diseases-heading"><p class="eyebrow">Comprehensive disease review</p><h2>Diseases</h2><p>Every disease you need to identify, diagnose, and treat -- organized lecture by lecture, tracked disease by disease. Separate from Disease Walkthrough: this is depth on one disease at a time, not a diagnostic mystery.</p>' +
      '<span class="diseases-count-pill">' + totalDiseases + ' diseases across ' + lectures.length + ' lectures</span>' +
      '<p class="diseases-note">Only 9 of the 12 infectious disease lectures appear here. Vaccines, Infectious Disease Pharmacology, and Infectious Disease Labs don\'t teach diseases to diagnose and treat -- they cover vaccine science, drug classes, and lab methodology instead, and already live elsewhere on the site (Vaccines has its own Learn/Test/Apply lecture; Pharmacology content feeds the treatment questions on diseases here; Labs content maps to Diagnosis Drills).</p></div>' +
      '<div class="mode-tabs" role="tablist">' + modes.map(function (mode) {
        return '<button type="button" class="mode-tab ' + (mode.id === currentMode ? "active" : "") + '" data-diseases-mode="' + mode.id + '">' + mode.label + '</button>';
      }).join("") + '</div><div id="diseases-mode-content"></div>';
    content.querySelectorAll("[data-diseases-mode]").forEach(function (button) {
      button.addEventListener("click", function () {
        currentMode = button.dataset.diseasesMode;
        if (currentMode !== "information") { infoLecture = null; infoDisease = null; }
        if (currentMode !== "practice") { practiceState = null; }
        renderRoot();
      });
    });
    renderModeContent();
  }
  function modeHost() { return document.getElementById("diseases-mode-content"); }
  function renderModeContent() {
    if (currentMode === "progress") { renderProgress(); return; }
    if (currentMode === "practice") { renderPracticeHome(); return; }
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
        '<span class="disease-lecture-kicker">' + stats.diseaseCount + (stats.diseaseCount === 1 ? " disease" : " diseases") + '</span>' +
        '<strong>' + escapeHtml(lecture.title) + '</strong>' +
        '<span class="disease-lecture-meta">' + (hasQuestions ? percent + '% mastered · ' + stats.diseasesWithContent + '/' + stats.diseaseCount + ' diseases have questions' : 'Content coming soon') + '</span>' +
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
    var html = '<div class="session-top"><button type="button" id="info-to-lectures">← All lectures</button><span>' + escapeHtml(lecture.title) + '</span></div>' +
      '<div class="diseases-heading compact"><h2>' + escapeHtml(lecture.title) + '</h2><p>Pick a disease to review what you need to know about it and, once its question bank is ready, jump straight into practicing that disease.</p></div><div class="disease-grid">';
    (lecture.diseases || []).forEach(function (disease) {
      var stats = diseaseStats(progress, disease);
      var hasQuestions = stats.total > 0;
      var hasContent = (disease.sections || []).length > 0;
      html += '<button type="button" class="disease-card" data-disease="' + escapeHtml(disease.id) + '">' +
        '<strong>' + escapeHtml(disease.name) + '</strong>' +
        '<span class="disease-card-blurb">' + escapeHtml(disease.blurb || "") + '</span>' +
        '<span class="disease-card-meta">' + (hasQuestions ? stats.correct + '/' + stats.total + ' questions mastered' : hasContent ? 'Reference ready · questions coming soon' : 'Coming soon') + '</span>' +
        '</button>';
    });
    html += '</div>';
    modeHost().innerHTML = html;
    document.getElementById("info-to-lectures").addEventListener("click", function () { infoLecture = null; renderRoot(); });
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
      '<article class="disease-detail"><p class="eyebrow">' + escapeHtml(lecture.title) + '</p><h2>' + escapeHtml(disease.name) + '</h2><p class="disease-detail-blurb">' + escapeHtml(disease.blurb || "") + '</p>';
    if (hasContent) {
      html += disease.sections.map(function (section) { return '<section class="disease-detail-section"><h3>' + escapeHtml(section.title || "") + '</h3>' + (section.html || "") + '</section>'; }).join("");
    } else {
      html += '<div class="empty-state compact"><span>📖</span><h3>Reference content coming soon</h3><p>This disease is confirmed on the list, but its full write-up hasn\'t been added to the site yet.</p></div>';
    }
    html += '<div class="disease-practice">';
    if (hasQuestions) {
      html += '<div class="disease-practice-stats"><strong>' + stats.correct + ' / ' + stats.total + '</strong><span>questions mastered</span></div><button type="button" class="primary-action" id="disease-practice-start">Practice ' + escapeHtml(disease.name) + ' →</button>';
    } else {
      html += '<div class="empty-state compact"><span>❓</span><h3>Practice questions coming soon</h3><p>This disease\'s question bank hasn\'t been written yet.</p></div>';
    }
    html += '</div></article>';
    modeHost().innerHTML = html;
    document.getElementById("info-to-lecture").addEventListener("click", function () { infoDisease = null; renderRoot(); });
    if (document.getElementById("disease-practice-start")) {
      document.getElementById("disease-practice-start").addEventListener("click", function () {
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
      (overallTotal ? '<button type="button" class="secondary-action" id="progress-reset-all">Reset all Diseases progress</button>' : "") + '</div><div class="progress-lecture-list">';
    lectures.forEach(function (lecture) {
      var stats = lectureStats(progress, lecture);
      var hasQuestions = stats.totalQuestions > 0;
      var percent = hasQuestions ? Math.round(stats.correctQuestions / stats.totalQuestions * 100) : 0;
      html += '<section class="progress-lecture"><div class="progress-lecture-head"><strong>' + escapeHtml(lecture.title) + '</strong>' + (hasQuestions ? '<span>' + percent + '% · ' + stats.correctQuestions + '/' + stats.totalQuestions + '</span><button type="button" class="progress-reset-lecture" data-lecture="' + escapeHtml(lecture.id) + '">Reset lecture</button>' : '<span class="faint">No questions yet</span>') + '</div>';
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
    if (document.getElementById("progress-reset-all")) {
      document.getElementById("progress-reset-all").addEventListener("click", function () {
        if (!window.confirm("Reset ALL Diseases progress? This clears every mastered question across every lecture.")) return;
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
    var progress = loadProgress();
    var lecturesWithQuestions = lectures.filter(function (lecture) { return lectureStats(progress, lecture).totalQuestions > 0; });
    if (!lecturesWithQuestions.length) {
      modeHost().innerHTML = '<div class="empty-state compact"><span>🗂️</span><h3>No practice questions yet</h3><p>Question banks are added lecture by lecture. Check the Information tab to see what\'s been written so far.</p></div>';
      return;
    }
    var everyoneTotal = 0;
    lecturesWithQuestions.forEach(function (lecture) { everyoneTotal += lectureStats(progress, lecture).totalQuestions; });
    var html = '<div class="diseases-heading compact"><h2>Practice</h2><p>Choose a scope, choose whether to include cards you\'ve already mastered, then go. Every card can show up in any scope -- nothing is exclusive to "its" lecture.</p></div>';
    html += '<div class="practice-scope-everything"><button type="button" class="primary-action" id="practice-everything">Practice everything (' + everyoneTotal + ' cards) →</button></div>';
    html += '<div class="practice-lecture-picker"><p class="practice-picker-label">Or choose one or more lectures</p>';
    lecturesWithQuestions.forEach(function (lecture) {
      var stats = lectureStats(progress, lecture);
      html += '<label class="recall-option practice-lecture-option"><input type="checkbox" class="practice-lecture-check" value="' + escapeHtml(lecture.id) + '"><span><strong>' + escapeHtml(lecture.title) + '</strong><small>' + stats.totalQuestions + ' cards · ' + Math.round(stats.correctQuestions / stats.totalQuestions * 100) + '% mastered</small></span></label>';
    });
    html += '<button type="button" class="secondary-action" id="practice-selected-lectures">Practice selected lectures →</button></div>';
    html += '<p class="practice-picker-label">Or practice a single disease from the Information tab -- open any disease and use its "Practice" button.</p>';
    modeHost().innerHTML = html;
    document.getElementById("practice-everything").addEventListener("click", function () {
      var diseases = [];
      lecturesWithQuestions.forEach(function (lecture) { diseases = diseases.concat(lecture.diseases || []); });
      askFilterThenStart(diseases, "Everything");
    });
    document.getElementById("practice-selected-lectures").addEventListener("click", function () {
      var checked = Array.prototype.slice.call(modeHost().querySelectorAll(".practice-lecture-check:checked")).map(function (box) { return box.value; });
      if (!checked.length) { window.alert("Select at least one lecture first."); return; }
      var chosen = lectures.filter(function (lecture) { return checked.indexOf(lecture.id) !== -1; });
      var diseases = [];
      chosen.forEach(function (lecture) { diseases = diseases.concat(lecture.diseases || []); });
      var label = chosen.length === 1 ? chosen[0].title : chosen.length + " lectures";
      askFilterThenStart(diseases, label);
    });
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
    document.getElementById("practice-filter-all").addEventListener("click", function () { startPracticeForDiseases(diseases, label, "all"); });
    if (newQuestions) document.getElementById("practice-filter-new").addEventListener("click", function () { startPracticeForDiseases(diseases, label, "new"); });
    document.getElementById("practice-filter-back").addEventListener("click", renderPracticeHome);
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
    return '<div class="session-top"><button type="button" id="practice-exit">← Practice</button><span>' + escapeHtml(state.label) + '</span></div><div class="session-progress"><span style="width:' + percent + '%"></span></div><div class="session-counter">' + escapeHtml(detail) + '</div>';
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
    document.getElementById("practice-exit").addEventListener("click", function () { practiceState = null; renderPracticeHome(); });
    modeHost().querySelectorAll("[data-choice]").forEach(function (button) { button.addEventListener("click", function () { answerPractice(Number(button.dataset.choice)); }); });
    document.getElementById("practice-next").addEventListener("click", function () { state.position += 1; renderPracticeQuestion(); });
    holdScrollIntoView(modeHost(), 350, "start");
  }
  function answerPractice(selected) {
    var state = practiceState, card = state.queue[state.position], correct = card.correct;
    modeHost().querySelectorAll("[data-choice]").forEach(function (button) {
      button.disabled = true; var choice = Number(button.dataset.choice);
      if (choice === correct) button.classList.add("correct"); else if (choice === selected) button.classList.add("wrong"); else button.classList.add("dimmed");
    });
    var explanationBox = document.getElementById("practice-explanation");
    explanationBox.hidden = false;
    explanationBox.querySelector("p").textContent = card.question.explanation || "";
    if (selected === correct) {
      state.correctCount += 1;
      markCorrect(card.disease.id, card.question.id);
    } else {
      state.missed.push(card);
      var section = (card.disease.sections || []).find(function (candidate) { return candidate.id === card.question.section; });
      if (section) {
        document.getElementById("practice-linked-info").innerHTML = '<article class="learn-card immersive-card"><div class="card-number">↩ Review · ' + escapeHtml(card.disease.name) + '<span>' + escapeHtml(section.title) + '</span></div><div class="learn-body">' + section.html + '</div></article>';
      }
    }
    document.getElementById("practice-next").hidden = false;
    holdScrollIntoView(explanationBox, 350);
  }
  function renderPracticeComplete() {
    var state = practiceState;
    var percent = state.queue.length ? Math.round(state.correctCount / state.queue.length * 100) : 0;
    var html = '<section class="complete-panel"><span class="complete-icon">' + (percent >= 80 ? "🎯" : "📚") + '</span><p class="eyebrow">Practice complete</p><h3>' + escapeHtml(state.label) + '</h3><p>' + state.correctCount + ' of ' + state.queue.length + ' correct · ' + percent + '%</p><div class="score-grid"><span><strong>' + state.correctCount + '</strong>Correct</span><span><strong>' + (state.queue.length - state.correctCount) + '</strong>Missed</span></div><div class="session-actions">' +
      (state.missed.length ? '<button class="primary-action" id="practice-redo-missed" type="button">Redo ' + state.missed.length + ' missed →</button>' : "") +
      '<button class="secondary-action" id="practice-home" type="button">Practice home</button></div></section>';
    modeHost().innerHTML = html;
    if (document.getElementById("practice-redo-missed")) {
      document.getElementById("practice-redo-missed").addEventListener("click", function () {
        practiceState = { label: state.label + " · missed", filter: state.filter, queue: state.missed.map(function (card) { return presentCard({ disease: card.disease, question: card.question }); }), position: 0, correctCount: 0, missed: [] };
        renderPracticeQuestion();
      });
    }
    document.getElementById("practice-home").addEventListener("click", function () { practiceState = null; renderPracticeHome(); });
  }

  launch.addEventListener("click", open);
  document.getElementById("diseases-back").addEventListener("click", close);
}());
