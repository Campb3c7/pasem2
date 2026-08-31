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
    var modes = ["learn", "test", "apply"];
    studyContent.innerHTML =
      '<div class="study-heading"><p class="eyebrow">' + escapeHtml(currentCourse.title) + '</p><h2>' + escapeHtml(lecture.title) + '</h2><p>' + escapeHtml(lecture.description || "") + '</p></div>' +
      '<div class="lecture-tabs" role="tablist">' + lectures.map(function (item, index) {
        return '<button type="button" class="lecture-tab ' + (index === currentLecture ? "active" : "") + '" data-lecture="' + index + '">' + escapeHtml(item.title) + '</button>';
      }).join("") + '</div>' +
      '<div class="mode-tabs" role="tablist">' + modes.map(function (mode) {
        var count = mode === "learn" ? (lecture.cards || []).length : (lecture[mode] || []).length;
        return '<button type="button" class="mode-tab ' + (mode === currentMode ? "active" : "") + '" data-mode="' + mode + '">' + mode.charAt(0).toUpperCase() + mode.slice(1) + '<span>' + count + '</span></button>';
      }).join("") + '</div><div id="mode-content"></div>';

    studyContent.querySelectorAll("[data-lecture]").forEach(function (button) {
      button.addEventListener("click", function () { currentLecture = Number(button.dataset.lecture); currentMode = "learn"; renderStudy(); });
    });
    studyContent.querySelectorAll("[data-mode]").forEach(function (button) {
      button.addEventListener("click", function () { currentMode = button.dataset.mode; renderStudy(); });
    });
    renderMode(lecture);
  }

  function renderMode(lecture) {
    var host = document.getElementById("mode-content");
    if (currentMode === "learn") {
      var cards = lecture.cards || [];
      host.innerHTML = cards.length ? cards.map(function (card, index) {
        return '<article class="learn-card"><div class="card-number">Concept ' + (index + 1) + (card.highYield ? '<span>High yield</span>' : "") + '</div><h3>' + escapeHtml(card.title) + '</h3><p>' + escapeHtml(card.body) + '</p></article>';
      }).join("") + '<button class="complete-button" id="complete-lecture" type="button">' + (progress[lectureKey(currentCourse, lecture)] ? "✓ Lecture complete" : "Mark lecture complete") + '</button>' : emptyMode("No learning cards yet.");
      var completeButton = document.getElementById("complete-lecture");
      if (completeButton) completeButton.addEventListener("click", function () { progress[lectureKey(currentCourse, lecture)] = !progress[lectureKey(currentCourse, lecture)]; saveProgress(); renderStudy(); renderCourses(); });
      return;
    }
    var questions = lecture[currentMode] || [];
    host.innerHTML = questions.length ? questions.map(renderQuestion).join("") : emptyMode(currentMode === "apply" ? "No clinical application cases yet." : "No test questions yet.");
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
    saveProgress();
    renderCourses();
    if (!studyView.hidden) renderStudy();
  });

  renderCourses();
  renderProgress();
}());
