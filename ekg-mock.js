/* EKG Mock exam: two modes.
   1. Class poll review: every poll question from the EKG App class session (data/ekg-class-polls.js,
      window.EKG_CLASS_POLLS) with instant feedback; misses come back once.
   2. Mock exam: a fresh 40-question exam every time, mixing real workbook strips, generated rhythm
      strips, drawn patterns, axis and STEMI 12-leads, class polls and EKG Interpretation questions.
      Like the real exam, answers stay hidden until Submit, then score + full review. Best score saved.
   Drawings come from window.EKGDraw (exported by ekg-patterns.js, ekg-axis.js, ekg-mi.js), strips from
   window.RhythmSynth, workbook pictures from images/ekg-workbook/. */
(function () {
  "use strict";

  var polls = window.EKG_CLASS_POLLS;
  var launch = document.getElementById("ekg-mock-launch");
  var view = document.getElementById("ekg-mock-view");
  var content = document.getElementById("ekg-mock-content");
  var studyView = document.getElementById("study-view");
  if (!polls || !launch || !view || !content) return;

  var PROGRESS_KEY = "pasem2:ekg-mock:progress";
  var PASS = 0.7, RETURN_GAP = 3;
  // How the mock exam is built (40 questions).
  var MIX = { workbook: 10, rhythm: 6, pattern: 5, axis: 2, mi: 2, poll: 8, lecture: 7 };
  var state = null;

  function el(id) { return content.querySelector("#" + id); }
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
  function pick(items) { return items[Math.floor(Math.random() * items.length)]; }
  function loadProgress() { try { var v = localStorage.getItem(PROGRESS_KEY); return v ? JSON.parse(v) : {}; } catch (e) { return {}; } }
  function saveProgress(p) { try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); } catch (e) {} }
  function record(id, right) {
    var progress = loadProgress(), entry = progress[id] || { n: 0, r: 0, last: false };
    entry.n += 1; if (right) entry.r += 1; entry.last = !!right;
    progress[id] = entry;
    saveProgress(progress);
  }
  function letter(i) { return String.fromCharCode(65 + i); }

  // ---- question builders ---------------------------------------------------
  // Each returns { id, kind, visual (html), prompt, choices (shuffled), answer (index), why (html) }.
  function finish(q, answer, wrong) {
    var choices = shuffle([answer].concat(wrong.slice(0, 3)));
    q.choices = choices; q.answer = choices.indexOf(answer);
    return q;
  }
  function pollQuestion(p) {
    return finish({ id: p.id, kind: "Class poll", prompt: p.prompt, why: '<p>' + escapeHtml(p.why) + '</p>' }, p.answer, p.wrong);
  }
  function workbookQuestion(s) {
    var key = s.key || {};
    var why = '<p><strong>Workbook answer key:</strong> ' + escapeHtml(key.interp || s.name) + (key.rate ? ', rate ' + escapeHtml(key.rate) : "") + '.' +
      (key.comment ? ' ' + escapeHtml(key.comment) + '.' : "") + '</p>' + (s.note ? '<p>' + escapeHtml(s.note) + '</p>' : "");
    return finish({
      id: s.id, kind: "Workbook strip " + s.n, prompt: "What is the rhythm?",
      visual: '<div class="wb-strip"><img src="images/ekg-workbook/' + s.id + '.webp" alt="Workbook rhythm strip ' + s.n + '" decoding="async"></div>', why: why
    }, s.name, s.wrong);
  }
  function rhythmQuestion(r, byRhythm) {
    var wrong = shuffle(r.confuse.filter(function (id) { return byRhythm[id]; })).map(function (id) { return byRhythm[id].name; });
    return finish({
      id: r.id, kind: "Rhythm strip", prompt: "What is the rhythm?",
      visual: '<div class="rs-box">' + window.RhythmSynth.make(r.gen).svg + '</div>',
      why: '<p>' + escapeHtml(r.clue) + '</p>' + (r.mgmt ? '<p><strong>Why it happens:</strong> ' + escapeHtml(r.mgmt) + '</p>' : "")
    }, r.name, wrong);
  }
  function patternQuestion(p, byPattern) {
    return finish({
      id: p.id, kind: "Pattern", prompt: "What pattern is this?", visual: window.EKGDraw.pattern(p),
      why: '<ul class="pt-look">' + p.look.map(function (x) { return '<li>' + escapeHtml(x) + '</li>'; }).join("") + '</ul><p>' + escapeHtml(p.why) + '</p>'
    }, p.name, p.confuse.map(function (id) { return byPattern[id].name; }));
  }
  function axisQuestion(quad, quads) {
    var angle = Math.round(quad.draw[0] + Math.random() * (quad.draw[1] - quad.draw[0]));
    var signI = Math.cos(angle * Math.PI / 180) > 0 ? "positive" : "negative", signF = Math.sin(angle * Math.PI / 180) > 0 ? "positive" : "negative";
    return finish({
      id: "ax-read-" + quad.id, kind: "Axis", prompt: "Lead I and aVF are shown. What is the electrical axis?", visual: window.EKGDraw.axisLeads(angle),
      why: '<p>Lead I is ' + signI + ' and aVF is ' + signF + '. ' + escapeHtml(quad.thumbs) + ' (' + escapeHtml(quad.range) + ')</p>'
    }, quad.name, quads.filter(function (q) { return q !== quad; }).map(function (q) { return q.name; }));
  }
  function miQuestion(wall, walls) {
    var others = shuffle(walls.filter(function (w) { return w !== wall; })).map(function (w) { return w.name; });
    return finish({
      id: wall.id, kind: "12-lead", prompt: "Where is this STEMI?", visual: '<div class="mock-twelve">' + window.EKGDraw.twelveLead(wall, { st: pick([2.5, 3, 3.5]), q: false }) + '</div>',
      why: '<p>' + (wall.posterior ? "ST depression in V1-V3" : "ST elevation in " + escapeHtml(wall.stLeads.join(", "))) + '. Usual artery: ' + escapeHtml(wall.artery) + '.</p><p>' + escapeHtml(wall.why) + '</p>'
    }, wall.name, others);
  }
  function lectureQuestion(q, objective) {
    return finish({ id: q.id, kind: objective.title, prompt: q.prompt, why: '<p>' + escapeHtml(q.explanation) + '</p>' },
      q.choices[q.correct], q.choices.filter(function (c, i) { return i !== q.correct; }));
  }

  // Pools for the mock exam; a part is left out if its data or drawer is missing.
  function buildExam() {
    var items = [], draw = window.EKGDraw || {};
    var wb = window.EKG_WORKBOOK, rh = window.EKG_RHYTHMS, pt = window.EKG_PATTERNS, ax = window.EKG_AXIS, mi = window.EKG_MI, lec = window.EKG_INTERPRETATION_OBJECTIVES;
    if (wb) shuffle(wb.strips).slice(0, MIX.workbook).forEach(function (s) { items.push(workbookQuestion(s)); });
    if (rh && window.RhythmSynth) {
      var byRhythm = {}, all = [];
      rh.groups.forEach(function (g) { g.rhythms.forEach(function (r) { byRhythm[r.id] = r; all.push(r); }); });
      shuffle(all).slice(0, MIX.rhythm).forEach(function (r) { items.push(rhythmQuestion(r, byRhythm)); });
    }
    if (pt && draw.pattern) {
      var byPattern = {};
      pt.patterns.forEach(function (p) { byPattern[p.id] = p; });
      shuffle(pt.patterns).slice(0, MIX.pattern).forEach(function (p) { items.push(patternQuestion(p, byPattern)); });
    }
    if (ax && draw.axisLeads) shuffle(ax.quadrants).slice(0, MIX.axis).forEach(function (q) { items.push(axisQuestion(q, ax.quadrants)); });
    if (mi && draw.twelveLead) shuffle(mi.walls).slice(0, MIX.mi).forEach(function (w) { items.push(miQuestion(w, mi.walls)); });
    var written = shuffle(polls).slice(0, MIX.poll).map(pollQuestion);
    if (lec) {
      var pool = [];
      lec.forEach(function (o) {
        ["test", "apply"].forEach(function (m) { o[m].forEach(function (q, i) { pool.push({ q: Object.assign({ id: o.id + "|" + m + "|" + i }, q), o: o }); }); });
      });
      shuffle(pool).slice(0, MIX.lecture).forEach(function (x) { written.push(lectureQuestion(x.q, x.o)); });
    }
    // Visual questions first in random order, then the written ones mixed in at random spots.
    items = shuffle(items);
    written.forEach(function (w) { items.splice(Math.floor(Math.random() * (items.length + 1)), 0, w); });
    return items;
  }

  // ---- open / close --------------------------------------------------------
  function open() {
    studyView.hidden = true;
    document.querySelectorAll(".walkthrough-view").forEach(function (section) { section.hidden = true; });
    document.querySelectorAll("[data-rhythm-tool]").forEach(function (other) { other.innerHTML = ""; });
    view.hidden = false;
    renderHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function close() { state = null; view.hidden = true; studyView.hidden = false; content.innerHTML = ""; window.scrollTo({ top: 0, behavior: "smooth" }); }
  function top(label) { return '<div class="session-top"><button type="button" id="mock-home">← Mock exam</button><span>' + escapeHtml(label) + '</span></div>'; }
  function bindHome() { el("mock-home").addEventListener("click", renderHome); }

  // ---- home ----------------------------------------------------------------
  function renderHome() {
    state = null;
    var progress = loadProgress(), best = progress.exam, total = 0;
    Object.keys(MIX).forEach(function (k) { total += MIX[k]; });
    var seen = polls.filter(function (p) { return progress[p.id]; }).length;
    content.innerHTML = '<div class="drill-heading"><p class="eyebrow">EKG · exam Friday 11/20</p><h2>Mock exam</h2>' +
      '<p>Start with the questions polled in class (the ones your instructor chose to ask), then take a full mock exam that mixes everything: real workbook strips, fresh rhythm strips, patterns, axis, 12-lead STEMIs and written questions.</p></div>' +
      '<div class="murmur-quick rs-quick">' +
      '<button class="murmur-quick-card" type="button" id="mock-polls"><span>Class polls</span><strong>Poll review →</strong><small>All ' + polls.length + ' poll questions from the 11/9 EKG App session, answered as marked in class. Instant feedback; misses come back. ' + (seen ? seen + ' of ' + polls.length + ' tried.' : "Not started yet.") + '</small></button>' +
      '<button class="murmur-quick-card" type="button" id="mock-exam"><span>Full exam</span><strong>Mock exam →</strong><small>' + total + ' questions, new every time. Answers stay hidden until you submit, then you get a score (70% to pass) and a full review. ' + (best ? 'Best: ' + best.best + ' of ' + best.of + '.' : "Not taken yet.") + '</small></button>' +
      '</div>' +
      '<article class="learn-card rs-card"><p class="eyebrow">What is in the mock exam</p><div class="learn-body"><ul>' +
      '<li>' + MIX.workbook + ' real strips from your Independent EKG Workbook</li>' +
      '<li>' + MIX.rhythm + ' freshly drawn rhythm strips (every objective 8/9 rhythm)</li>' +
      '<li>' + MIX.pattern + ' patterns (electrolytes, enlargement, blocks, pericarditis, PE, pacers...)</li>' +
      '<li>' + MIX.axis + ' axis questions and ' + MIX.mi + ' STEMI 12-leads</li>' +
      '<li>' + (MIX.poll + MIX.lecture) + ' written questions: ' + MIX.poll + ' class polls and ' + MIX.lecture + ' from the EKG Interpretation lecture</li></ul></div></article>';
    el("mock-polls").addEventListener("click", startPolls);
    el("mock-exam").addEventListener("click", startExam);
  }

  // ---- class poll review (instant feedback) --------------------------------
  function startPolls() {
    state = { mode: "polls", items: shuffle(polls).map(pollQuestion), position: 0, total: polls.length, done: 0, firstTry: 0, missed: [] };
    runPoll();
  }
  function runPoll() {
    if (state.position >= state.items.length) { completePolls(); return; }
    var q = state.items[state.position], percent = Math.round(state.done / state.total * 100);
    content.innerHTML = top("Class poll review") + '<div class="session-progress"><span style="width:' + percent + '%"></span></div><div class="session-counter">' + state.done + ' of ' + state.total + ' done · ' + state.firstTry + ' right on the first try</div>' +
      '<div class="recall-step-label">' + (q.retry ? "Coming back to this one" : "Poll " + (state.position + 1)) + '</div>' +
      '<article class="question-card immersive-card rs-question"><h3>' + escapeHtml(q.prompt) + '</h3><div class="choices">' + q.choices.map(function (c, i) {
        return '<button class="choice" type="button" data-choice="' + i + '"><span>' + letter(i) + '</span>' + escapeHtml(c) + '</button>';
      }).join("") + '</div><div class="explanation" id="mock-explanation" hidden></div></article><button class="primary-action full-action" id="mock-next" type="button" hidden>Next →</button>';
    bindHome();
    var group = content.querySelector(".choices"), answered = false;
    group.querySelectorAll("[data-choice]").forEach(function (button) {
      button.addEventListener("click", function () {
        if (answered) return;
        answered = true;
        var selected = Number(button.dataset.choice), right = selected === q.answer;
        group.querySelectorAll("[data-choice]").forEach(function (b) {
          var i = Number(b.dataset.choice); b.disabled = true;
          b.classList.add(i === q.answer ? "correct" : i === selected ? "wrong" : "dimmed");
        });
        var exp = el("mock-explanation");
        exp.hidden = false;
        exp.innerHTML = '<strong>' + (right ? "Right: " : "It's: ") + escapeHtml(q.choices[q.answer]) + '</strong><div class="learn-body">' + q.why + '</div>';
        if (!q.retry) state.done += 1;
        if (right) { if (!q.retry) { state.firstTry += 1; record(q.id, true); } }
        else {
          record(q.id, false);
          if (state.missed.indexOf(q.prompt) < 0) state.missed.push(q.prompt);
          if (!q.retry) state.items.splice(Math.min(state.position + 1 + RETURN_GAP, state.items.length), 0, Object.assign(pollQuestion(polls.filter(function (p) { return p.id === q.id; })[0]), { retry: true }));
        }
        el("mock-next").hidden = false;
        exp.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    });
    el("mock-next").addEventListener("click", function () { state.position += 1; runPoll(); });
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }
  function completePolls() {
    var s = state;
    content.innerHTML = '<section class="complete-panel"><span class="complete-icon">' + (s.missed.length ? "📈" : "🎯") + '</span><p class="eyebrow">Done</p><h3>Class poll review</h3><p>' + s.firstTry + ' of ' + s.total + ' right on the first try.</p>' +
      (s.missed.length ? '<p class="rs-missed">Worth another look: ' + s.missed.map(escapeHtml).join(" · ") + '</p>' : "") +
      '<div class="session-actions"><button class="primary-action" id="mock-again" type="button">Go again</button><button class="secondary-action" id="mock-take" type="button">Take the mock exam</button><button class="secondary-action" id="mock-done" type="button">Mock exam home</button></div></section>';
    el("mock-again").addEventListener("click", startPolls);
    el("mock-take").addEventListener("click", startExam);
    el("mock-done").addEventListener("click", renderHome);
  }

  // ---- mock exam (answers hidden until submit) -----------------------------
  function startExam() {
    var items = buildExam();
    state = { mode: "exam", items: items, position: 0, picks: items.map(function () { return null; }), warned: false };
    renderExam();
  }
  function renderExam() {
    var items = state.items, q = items[state.position], p = state.picks[state.position], last = state.position + 1 === items.length;
    var answered = state.picks.filter(function (v) { return v !== null; }).length, blank = items.length - answered;
    content.innerHTML = top("Mock exam · " + answered + " of " + items.length + " answered") +
      '<div class="session-progress"><span style="width:' + Math.round(answered / items.length * 100) + '%"></span></div>' +
      '<div class="mock-grid" aria-label="Jump to a question">' + items.map(function (x, i) {
        return '<button type="button" data-mock-jump="' + i + '" class="' + (state.picks[i] !== null ? "done" : "") + (i === state.position ? " here" : "") + '">' + (i + 1) + '</button>';
      }).join("") + '</div>' +
      '<article class="question-card immersive-card rs-question hs-exam-q mock-q"><div class="card-number">Question ' + (state.position + 1) + ' of ' + items.length + '</div>' +
      (q.visual ? '<div class="wb-sticky">' + q.visual + '</div>' : "") + '<h3>' + escapeHtml(q.prompt) + '</h3>' +
      '<div class="choices">' + q.choices.map(function (c, i) {
        return '<button class="choice' + (p === i ? " selected" : "") + '" type="button" data-choice="' + i + '"><span>' + letter(i) + '</span>' + escapeHtml(c) + '</button>';
      }).join("") + '</div></article>' +
      (last && blank && state.warned ? '<p class="mock-warn">' + blank + ' question' + (blank > 1 ? "s are" : " is") + ' still unanswered (the empty numbers above). Press Submit again to hand it in anyway.</p>' : "") +
      '<div class="hs-nav">' + (state.position ? '<button class="secondary-action" id="mock-prev" type="button">Previous</button>' : "") +
      '<button class="primary-action" id="mock-next" type="button">' + (last ? "Submit exam" : "Next") + '</button></div>';
    bindHome();
    content.querySelectorAll("[data-choice]").forEach(function (button) {
      button.addEventListener("click", function () {
        state.picks[state.position] = Number(button.dataset.choice);
        var keep = window.scrollY; renderExam(); window.scrollTo(0, keep);
      });
    });
    content.querySelectorAll("[data-mock-jump]").forEach(function (button) {
      button.addEventListener("click", function () { state.position = Number(button.dataset.mockJump); renderExam(); });
    });
    var prev = el("mock-prev");
    if (prev) prev.addEventListener("click", function () { state.position -= 1; renderExam(); });
    el("mock-next").addEventListener("click", function () {
      if (!last) { state.position += 1; renderExam(); return; }
      if (blank && !state.warned) { state.warned = true; renderExam(); return; }
      renderResult();
    });
  }
  function renderResult() {
    var items = state.items, total = items.length;
    var score = items.filter(function (q, i) { return state.picks[i] === q.answer; }).length;
    var percent = Math.round(score / total * 100), passed = score / total >= PASS;
    var progress = loadProgress();
    if (!progress.exam || score > progress.exam.best) progress.exam = { best: score, of: total };
    progress.examTaken = (progress.examTaken || 0) + 1;
    saveProgress(progress);
    // Score by part so the weak area is obvious.
    var parts = {};
    items.forEach(function (q, i) {
      var part = /^Workbook/.test(q.kind) ? "Workbook strips" : q.kind === "Rhythm strip" ? "Rhythm strips" : q.kind === "Pattern" ? "Patterns" : q.kind === "Axis" ? "Axis" : q.kind === "12-lead" ? "STEMI 12-leads" : q.kind === "Class poll" ? "Class polls" : "Lecture questions";
      parts[part] = parts[part] || { r: 0, n: 0 };
      parts[part].n += 1; if (state.picks[i] === q.answer) parts[part].r += 1;
    });
    var review = items.map(function (q, i) {
      var p = state.picks[i], ok = p === q.answer;
      var say = function (v) { return v === null ? "no answer" : letter(v) + ". " + q.choices[v]; };
      return '<article class="hs-review ' + (ok ? "ok" : "bad") + '"><p class="eyebrow">Question ' + (i + 1) + ' · ' + escapeHtml(q.kind) + (ok ? " · correct" : " · missed") + '</p>' +
        (q.visual || "") + '<h4>' + escapeHtml(q.prompt) + '</h4>' +
        (ok ? "" : '<p class="hs-review-pick">Your answer: ' + escapeHtml(say(p)) + '</p>') +
        '<p class="hs-review-answer">Answer: ' + escapeHtml(say(q.answer)) + '</p><div class="learn-body">' + q.why + '</div></article>';
    }).join("");
    content.innerHTML = '<section class="complete-panel"><span class="complete-icon">' + (passed ? "✓" : "!") + '</span><p class="eyebrow">EKG mock exam</p><h3>' + percent + '%: ' + (passed ? "Pass" : "Below 70%") + '</h3><p>' + score + ' of ' + total + ' right. You need ' + Math.ceil(total * PASS) + ' to pass.</p>' +
      '<div class="table-scroll"><table class="learn-table mock-parts"><thead><tr><th>Part</th><th>Right</th></tr></thead><tbody>' + Object.keys(parts).map(function (k) {
        return '<tr><td>' + escapeHtml(k) + '</td><td>' + parts[k].r + ' of ' + parts[k].n + '</td></tr>';
      }).join("") + '</tbody></table></div>' +
      '<div class="session-actions"><button class="primary-action" id="mock-again" type="button">New mock exam</button><button class="secondary-action" id="mock-done" type="button">Mock exam home</button></div></section>' +
      '<h3 class="hs-review-title">Review</h3><div class="hs-review-list mock-review">' + review + '</div>';
    el("mock-again").addEventListener("click", startExam);
    el("mock-done").addEventListener("click", renderHome);
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }

  launch.addEventListener("click", open);
  document.getElementById("ekg-mock-back").addEventListener("click", close);
}());
