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
  var currentLecture = null;
  var currentDisease = null;

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

  // A disease is "mastered" once every question in its bank has been answered
  // correctly at least once. Stats are all zero until Step 4 adds question banks.
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

  function open() {
    hero.hidden = true;
    workspace.hidden = true;
    studyView.hidden = true;
    walkthroughView.hidden = true;
    drillView.hidden = true;
    geographyView.hidden = true;
    view.hidden = false;
    currentLecture = null;
    currentDisease = null;
    renderHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function close() {
    view.hidden = true;
    hero.hidden = false;
    workspace.hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderHome() {
    currentLecture = null;
    currentDisease = null;
    var progress = loadProgress();
    var totalDiseases = lectures.reduce(function (sum, lecture) { return sum + (lecture.diseases || []).length; }, 0);
    var html = '<div class="diseases-heading"><p class="eyebrow">Comprehensive disease review</p><h2>Diseases</h2><p>Every disease you need to identify, diagnose, and treat -- organized lecture by lecture, tracked disease by disease. Separate from Disease Walkthrough: this is depth on one disease at a time, not a diagnostic mystery.</p><span class="diseases-count-pill">' + totalDiseases + ' diseases across ' + lectures.length + ' lectures</span><p class="diseases-note">Only 9 of the 12 infectious disease lectures appear here. Vaccines, Infectious Disease Pharmacology, and Infectious Disease Labs don\'t teach diseases to diagnose and treat -- they cover vaccine science, drug classes, and lab methodology instead, and already live elsewhere on the site (Vaccines has its own Learn/Test/Apply lecture; Pharmacology content feeds the treatment questions on diseases here; Labs content maps to Diagnosis Drills).</p></div><div class="disease-lecture-grid">';
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
    content.innerHTML = html;
    content.querySelectorAll("[data-lecture]").forEach(function (button) {
      button.addEventListener("click", function () {
        openLecture(lectures.find(function (lecture) { return lecture.id === button.dataset.lecture; }));
      });
    });
  }

  function openLecture(lecture) {
    currentLecture = lecture;
    currentDisease = null;
    renderLecture();
    window.scrollTo({ top: view.offsetTop, behavior: "smooth" });
  }
  function renderLecture() {
    var lecture = currentLecture;
    var progress = loadProgress();
    var html = '<div class="session-top"><button type="button" id="diseases-to-home">← Diseases</button><span>' + escapeHtml(lecture.title) + '</span></div>' +
      '<div class="diseases-heading compact"><h2>' + escapeHtml(lecture.title) + '</h2><p>Pick a disease to review what you need to know about it and, once its question bank is ready, practice against it directly.</p></div>' +
      '<div class="disease-grid">';
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
    content.innerHTML = html;
    document.getElementById("diseases-to-home").addEventListener("click", renderHome);
    content.querySelectorAll("[data-disease]").forEach(function (button) {
      button.addEventListener("click", function () {
        openDisease((lecture.diseases || []).find(function (disease) { return disease.id === button.dataset.disease; }));
      });
    });
  }

  function openDisease(disease) {
    currentDisease = disease;
    renderDisease();
    window.scrollTo({ top: view.offsetTop, behavior: "smooth" });
  }
  function renderDisease() {
    var lecture = currentLecture;
    var disease = currentDisease;
    var progress = loadProgress();
    var stats = diseaseStats(progress, disease);
    var hasContent = (disease.sections || []).length > 0;
    var hasQuestions = stats.total > 0;
    var html = '<div class="session-top"><button type="button" id="diseases-to-lecture">← ' + escapeHtml(lecture.title) + '</button><span>' + escapeHtml(disease.name) + '</span></div>' +
      '<article class="disease-detail">' +
      '<p class="eyebrow">' + escapeHtml(lecture.title) + '</p>' +
      '<h2>' + escapeHtml(disease.name) + '</h2>' +
      '<p class="disease-detail-blurb">' + escapeHtml(disease.blurb || "") + '</p>';
    if (hasContent) {
      html += disease.sections.map(function (section) { return '<section class="disease-detail-section"><h3>' + escapeHtml(section.title || "") + '</h3>' + (section.html || "") + '</section>'; }).join("");
    } else {
      html += '<div class="empty-state compact"><span>📖</span><h3>Reference content coming soon</h3><p>This disease is confirmed on the list, but its full write-up hasn\'t been added to the site yet.</p></div>';
    }
    html += '<div class="disease-practice">';
    if (hasQuestions) {
      html += '<div class="disease-practice-stats"><strong>' + stats.correct + ' / ' + stats.total + '</strong><span>questions mastered</span></div><button type="button" class="primary-action" id="disease-practice-start" disabled>Practice (coming in a later step) →</button>';
    } else {
      html += '<div class="empty-state compact"><span>❓</span><h3>Practice questions coming soon</h3><p>This disease\'s question bank hasn\'t been written yet.</p></div>';
    }
    html += '</div></article>';
    content.innerHTML = html;
    document.getElementById("diseases-to-lecture").addEventListener("click", function () { currentDisease = null; renderLecture(); });
  }

  launch.addEventListener("click", open);
  document.getElementById("diseases-back").addEventListener("click", close);
}());
