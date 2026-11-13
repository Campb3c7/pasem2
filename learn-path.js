/* Guided "learn it from zero" paths (shared engine). Short lessons in order, one idea per page, each with a
   picture, then a few easy check questions, a "remember" summary and buttons that open matching practice.
   Used by the EKG "Start here" path (ekg-learn.js) and the Shock, Pressors & Fluids path (shock-learn.js).

   window.createLearnPath(cfg) → { open, close, refresh }
   cfg: data ({ intro, parts, lessons }), viewId, contentId, backId, statusId (optional), progressKey,
        eyebrow, heading, statusCopy (shown before any lesson is done),
        figure(f) → html or "" (the path's own figure types), bindFigures(content) (optional),
        isSmall(f) (optional: figures in an array sit side by side when all are small), ownCaption(f) (optional),
        beforeOpen() (optional: hide other tool views).
   Lesson: { id, part, title, goal, pages: [{ title, fig, html }], checks: [{ prompt, answer, wrong, why }], remember, practice }.
   Practice buttons: { label, note, launch: "<launch button id>", then: "<button id inside the tool>" }
     or { label, note, objective: { course, lecture, mode: "learn" | "test" | "apply", id } } (opens a lecture objective).
   Progress: cfg.progressKey → { lessonId: { done, right, of } }. Lesson ids are progress keys: never rename. */
(function () {
  "use strict";

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>'"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c];
    });
  }
  function shuffle(items) {
    var copy = items.slice();
    for (var i = copy.length - 1; i > 0; i -= 1) { var j = Math.floor(Math.random() * (i + 1)); var v = copy[i]; copy[i] = copy[j]; copy[j] = v; }
    return copy;
  }

  window.createLearnPath = function (cfg) {
    var data = cfg.data;
    var view = document.getElementById(cfg.viewId);
    var content = document.getElementById(cfg.contentId);
    var studyView = document.getElementById("study-view");
    if (!data || !view || !content) return null;

    var lessons = data.lessons, byId = {};
    lessons.forEach(function (l, i) { l.index = i; byId[l.id] = l; });
    var state = null;

    function el(id) { return content.querySelector("#" + id); }
    function loadProgress() { try { var v = localStorage.getItem(cfg.progressKey); return v ? JSON.parse(v) : {}; } catch (e) { return {}; } }
    function saveProgress(p) { try { localStorage.setItem(cfg.progressKey, JSON.stringify(p)); } catch (e) {} }

    function figure(f) {
      if (!f) return "";
      if (Array.isArray(f)) return f.every(function (x) { return x.small || (cfg.isSmall && cfg.isSmall(x)); }) ? '<div class="lh-figs">' + f.map(figure).join("") + '</div>' : f.map(figure).join("");
      var html = cfg.figure(f) || "";
      return '<figure class="lh-figure">' + html + (f.caption && !f.ownCaption && !(cfg.ownCaption && cfg.ownCaption(f)) ? '<figcaption class="lh-caption">' + f.caption + '</figcaption>' : "") + '</figure>';
    }
    function bind() { if (cfg.bindFigures) cfg.bindFigures(content); }

    // ---- open / close ------------------------------------------------------
    function open(lessonId) {
      if (studyView) studyView.hidden = true;
      document.querySelectorAll(".walkthrough-view").forEach(function (section) { section.hidden = true; });
      if (cfg.beforeOpen) cfg.beforeOpen();
      view.hidden = false;
      if (lessonId && byId[lessonId]) startLesson(byId[lessonId]); else renderHome();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    function close() { state = null; view.hidden = true; if (studyView) studyView.hidden = false; content.innerHTML = ""; refresh(); window.scrollTo({ top: 0, behavior: "smooth" }); }
    function nextLesson(progress) {
      for (var i = 0; i < lessons.length; i += 1) if (!progress[lessons[i].id]) return lessons[i];
      return null;
    }
    function statusText() {
      var progress = loadProgress(), done = lessons.filter(function (l) { return progress[l.id]; }).length, next = nextLesson(progress);
      return done ? done + " of " + lessons.length + " lessons done" + (next ? " · next: " + next.title : " · all done") : (cfg.statusCopy || lessons.length + " short lessons. Start with lesson 1.");
    }
    function refresh() {
      var note = cfg.statusId && document.getElementById(cfg.statusId);
      if (note) note.textContent = statusText();
    }

    // ---- home: the path ----------------------------------------------------
    function renderHome() {
      state = null;
      var progress = loadProgress(), next = nextLesson(progress), done = lessons.filter(function (l) { return progress[l.id]; }).length;
      var html = '<div class="drill-heading"><p class="eyebrow">' + escapeHtml(cfg.eyebrow) + '</p><h2>' + escapeHtml(cfg.heading) + '</h2>' +
        '<p>' + data.intro + '</p></div>' +
        '<div class="lh-continue"><div><strong>' + (done ? done + " of " + lessons.length + " lessons done" : "Nothing done yet, and that's fine") + '</strong><span>' + (next ? "Next up: " + escapeHtml(next.title) : "You finished every lesson. The practice tools are all yours.") + '</span></div>' +
        (next ? '<button class="primary-action" type="button" data-lh-open="' + next.id + '">' + (done ? "Continue →" : "Start lesson 1 →") + '</button>' : "") + '</div>';
      data.parts.forEach(function (part) {
        var list = lessons.filter(function (l) { return l.part === part.id; });
        html += '<section class="lh-part"><p class="eyebrow">' + escapeHtml(part.title) + '</p><p class="lh-part-blurb">' + escapeHtml(part.blurb) + '</p><div class="lh-lessons">';
        if (!list.length) html += '<p class="lh-soon">Coming next: ' + escapeHtml(part.soon || "") + '</p>';
        list.forEach(function (l) {
          var p = progress[l.id], isNext = next && next.id === l.id;
          html += '<button class="lh-lesson' + (p ? " done" : "") + (isNext ? " next" : "") + '" type="button" data-lh-open="' + l.id + '"><span class="lh-num">' + (p ? "✓" : l.index + 1) + '</span><span><strong>' + escapeHtml(l.title) + '</strong><small>' + escapeHtml(l.goal) + '</small></span><span class="lh-arrow" aria-hidden="true">›</span></button>';
        });
        html += '</div></section>';
      });
      content.innerHTML = html;
      content.querySelectorAll("[data-lh-open]").forEach(function (b) { b.addEventListener("click", function () { startLesson(byId[b.dataset.lhOpen]); }); });
    }

    // ---- a lesson ----------------------------------------------------------
    function startLesson(lesson) {
      var checks = shuffle(lesson.checks).map(function (c) {
        var choices = shuffle([c.answer].concat(c.wrong));
        return { prompt: c.prompt, choices: choices, answer: choices.indexOf(c.answer), why: c.why };
      });
      state = { lesson: lesson, page: 0, checks: checks, check: 0, right: 0 };
      renderPage();
    }
    function steps() { return state.lesson.pages.length + state.checks.length + 1; }
    function dots(current) {
      var total = steps(), s = '<div class="lh-dots" aria-hidden="true">';
      for (var i = 0; i < total; i += 1) s += '<span class="' + (i < current ? "past" : i === current ? "now" : "") + (i >= state.lesson.pages.length && i < total - 1 ? " check" : "") + '"></span>';
      return s + '</div>';
    }
    function topBar() {
      var l = state.lesson;
      return '<div class="session-top"><button type="button" id="lh-home">← All lessons</button><span>Lesson ' + (l.index + 1) + ' of ' + lessons.length + '</span></div><h2 class="lh-title">' + escapeHtml(l.title) + '</h2>';
    }
    function wire() { el("lh-home").addEventListener("click", renderHome); }
    function renderPage() {
      var l = state.lesson;
      if (state.page < l.pages.length) {
        var pg = l.pages[state.page];
        content.innerHTML = topBar() + dots(state.page) +
          '<article class="learn-card lh-page"><p class="card-number">' + (state.page + 1) + ' of ' + l.pages.length + '</p><h3>' + escapeHtml(pg.title) + '</h3>' + figure(pg.fig) + '<div class="learn-body lh-text">' + pg.html + '</div></article>' +
          '<div class="hs-nav">' + (state.page ? '<button class="secondary-action" id="lh-prev" type="button">← Back</button>' : "") +
          '<button class="primary-action" id="learn-next" type="button">' + (state.page + 1 === l.pages.length ? "Quick check →" : "Next →") + '</button></div>';
        wire();
        bind();
        if (el("lh-prev")) el("lh-prev").addEventListener("click", function () { state.page -= 1; renderPage(); });
        el("learn-next").addEventListener("click", function () { state.page += 1; renderPage(); });
      } else if (state.check < state.checks.length) renderCheck();
      else renderDone();
      content.scrollIntoView({ behavior: "instant", block: "start" });
    }
    function renderCheck() {
      var l = state.lesson, c = state.checks[state.check];
      content.innerHTML = topBar() + dots(l.pages.length + state.check) +
        '<p class="recall-step-label">Quick check ' + (state.check + 1) + ' of ' + state.checks.length + ' · no pressure, it just helps it stick</p>' +
        '<article class="question-card immersive-card"><h3>' + escapeHtml(c.prompt) + '</h3><div class="choices">' + c.choices.map(function (x, i) {
          return '<button class="choice" type="button" data-choice="' + i + '"><span>' + String.fromCharCode(65 + i) + '</span>' + escapeHtml(x) + '</button>';
        }).join("") + '</div><div class="explanation" id="lh-explanation" hidden></div></article>' +
        '<button class="primary-action full-action" id="learn-next" type="button" hidden>' + (state.check + 1 === state.checks.length ? "Finish lesson →" : "Next →") + '</button>';
      wire();
      var group = content.querySelector(".choices"), answered = false;
      group.querySelectorAll("[data-choice]").forEach(function (button) {
        button.addEventListener("click", function () {
          if (answered) return;
          answered = true;
          var selected = Number(button.dataset.choice), right = selected === c.answer;
          if (right) state.right += 1;
          group.querySelectorAll("[data-choice]").forEach(function (b) {
            var i = Number(b.dataset.choice); b.disabled = true;
            b.classList.add(i === c.answer ? "correct" : i === selected ? "wrong" : "dimmed");
          });
          var exp = el("lh-explanation");
          exp.hidden = false;
          exp.innerHTML = '<strong>' + (right ? "Right: " : "It's: ") + escapeHtml(c.choices[c.answer]) + '</strong><p>' + c.why + '</p>';
          el("learn-next").hidden = false;
          exp.scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
      });
      el("learn-next").addEventListener("click", function () { state.check += 1; renderPage(); });
    }
    function renderDone() {
      var l = state.lesson, progress = loadProgress();
      progress[l.id] = { done: true, right: state.right, of: state.checks.length };
      saveProgress(progress);
      var next = lessons[l.index + 1];
      content.innerHTML = topBar() + dots(steps() - 1) +
        '<section class="complete-panel lh-done"><span class="complete-icon">✓</span><p class="eyebrow">Lesson ' + (l.index + 1) + ' done</p><h3>' + escapeHtml(l.title) + '</h3><p>' + state.right + ' of ' + state.checks.length + ' checks right' + (state.right < state.checks.length ? ". Have another look at the pages for the ones you missed whenever you like." : ". Nice.") + '</p></section>' +
        '<article class="learn-card lh-remember"><p class="eyebrow">Remember</p><ul class="lh-remember-list">' + l.remember.map(function (x) { return '<li>' + x + '</li>'; }).join("") + '</ul></article>' +
        ((l.practice || []).length ? '<article class="learn-card lh-practice"><p class="eyebrow">Practice this</p>' + l.practice.map(function (p, i) {
          return '<button class="lh-practice-btn" type="button" data-lh-practice="' + i + '"><strong>' + escapeHtml(p.label) + ' →</strong><small>' + escapeHtml(p.note) + '</small></button>';
        }).join("") + '</article>' : "") +
        '<div class="hs-nav"><button class="secondary-action" id="lh-again" type="button">Read it again</button>' +
        (next ? '<button class="primary-action" id="learn-next" type="button">Next lesson: ' + escapeHtml(next.title) + ' →</button>' : '<button class="primary-action" id="learn-next" type="button">All lessons</button>') + '</div>';
      wire();
      el("lh-again").addEventListener("click", function () { startLesson(l); });
      el("learn-next").addEventListener("click", function () { if (next) startLesson(next); else renderHome(); });
      content.querySelectorAll("[data-lh-practice]").forEach(function (b) {
        b.addEventListener("click", function () {
          var p = l.practice[Number(b.dataset.lhPractice)];
          if (p.objective) {
            if (!window.PasemStartObjective) return;
            close();
            window.PasemStartObjective(p.objective.course, p.objective.lecture, p.objective.mode, p.objective.id);
            return;
          }
          var target = document.getElementById(p.launch);
          if (!target) return;
          close();
          target.click();
          if (p.then) setTimeout(function () { var t = document.getElementById(p.then); if (t) t.click(); }, 50);
        });
      });
    }

    if (cfg.backId) document.getElementById(cfg.backId).addEventListener("click", close);
    refresh();
    return { open: open, close: close, refresh: refresh, statusText: statusText, lessons: lessons };
  };
}());
