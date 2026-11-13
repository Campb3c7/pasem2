/* EKG Pattern gallery: electrolytes, enlargement/hypertrophy/strain, bundle branch blocks and hemiblocks,
   delta waves, pericarditis, effusion, PE, pacers, long QT and Q waves, drawn as schematic complexes.
   Modes: gallery by group, "Name that pattern", and "What would you see?". Data: window.EKG_PATTERNS
   (data/ekg-patterns.js). A beat is the normal complex (DEFAULT) with the pattern's overrides. */
(function () {
  "use strict";

  var data = window.EKG_PATTERNS;
  var launch = document.getElementById("ekg-patterns-launch");
  var view = document.getElementById("ekg-patterns-view");
  var content = document.getElementById("ekg-patterns-content");
  var studyView = document.getElementById("study-view");
  if (!data || !launch || !view || !content) return;

  var PROGRESS_KEY = "pasem2:ekg-patterns:progress";
  var QUIZ_LENGTH = 15, RETURN_GAP = 3, PX = 4;
  // mm for amplitudes, 0.04 s boxes for widths. pr = P start to QRS start.
  var DEFAULT = { p: 1.4, pShape: "normal", pw: 2.6, pr: 4, q: 0.5, r: 9, s: 2, qrs: "normal", qrsW: 2.2, st: 0, stLen: 2.6, stShape: "flat", t: 2.6, tShape: "normal", tw: 6, u: 0, len: 25 };
  var patterns = data.patterns, byId = {};
  patterns.forEach(function (p) { byId[p.id] = p; });
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
  function loadProgress() { try { var v = localStorage.getItem(PROGRESS_KEY); return v ? JSON.parse(v) : {}; } catch (e) { return {}; } }
  function record(id, right) {
    var progress = loadProgress(), entry = progress[id] || { n: 0, r: 0, last: false };
    entry.n += 1; if (right) entry.r += 1; entry.last = !!right;
    progress[id] = entry;
    try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)); } catch (e) {}
  }

  // ---- drawing -------------------------------------------------------------
  function beatPoints(o) {
    var m = Object.assign({}, DEFAULT, o), pts = [];
    function add(x, y) { pts.push([x, y]); }
    var i, f;
    if (m.sine) {
      for (i = 0; i <= 100; i += 1) add(i * m.len / 100, 6 * Math.sin(2 * Math.PI * i / 50));
      return { pts: pts, len: m.len };
    }
    var ps = 1.6;
    add(0, 0);
    if (m.spike === "a") { add(ps - 0.4, 0); add(ps - 0.4, 12); add(ps - 0.3, 0); }
    add(ps, 0);
    if (m.pShape === "biphasic") {
      for (i = 1; i <= 6; i += 1) add(ps + i * m.pw / 12, m.p[0] * Math.sin(Math.PI * i / 6));
      for (i = 1; i <= 6; i += 1) add(ps + m.pw / 2 + i * m.pw / 12, -m.p[1] * Math.sin(Math.PI * i / 6));
    } else if (m.pShape === "peaked") {
      add(ps + 1.1, m.p); add(ps + 2.2, 0);
    } else if (m.pShape === "notched") {
      add(ps + m.pw * 0.25, m.p); add(ps + m.pw * 0.45, m.p * 0.6); add(ps + m.pw * 0.7, m.p); add(ps + m.pw, 0);
    } else if (m.p) {
      for (i = 1; i <= 6; i += 1) add(ps + i * m.pw / 6, m.p * Math.sin(Math.PI * i / 6));
    }
    var qs = ps + m.pr, w = m.qrsW;
    if (m.spike === "v") { add(qs - 0.5, 0); add(qs - 0.5, 12); add(qs - 0.4, 0); }
    add(qs, 0);
    var shape = {
      normal: [[0.15, -m.q], [0.45, m.r], [0.75, -m.s]],
      rsr: [[0.15, m.r], [0.35, -m.s], [0.65, m.r2 || m.r], [0.85, (m.r2 || m.r) * 0.25]],
      slurS: [[0.1, -m.q], [0.3, m.r], [0.5, -3], [0.85, -2]],
      notchR: [[0.3, m.r * 0.88], [0.45, m.r * 0.72], [0.65, m.r]],
      delta: [[0.35, m.r * 0.3], [0.55, m.r], [0.8, -m.s]],
      paced: [[0.4, m.r], [0.75, -m.s]]
    }[m.qrs];
    if (m.qw) { add(qs + m.qw * 0.5, -m.q); add(qs + m.qw, 0); shape = [[0.45, m.r], [0.75, -m.s]]; qs += m.qw; }
    shape.forEach(function (pt) { add(qs + pt[0] * w, pt[1]); });
    var j = qs + w;
    add(j, m.st);
    var tStart;
    if (m.tShape === "strain") {
      add(j + 0.6, m.st + 0.4); add(j + 5.4, -m.t); add(j + 6.8, 0);
      tStart = j + 6.8;
    } else {
      if (m.stShape === "concave") { add(j + m.stLen * 0.5, m.st * 0.72); add(j + m.stLen, m.st * 0.9); }
      else add(j + m.stLen, m.st);
      var ts = j + m.stLen;
      if (m.tShape === "peaked") {
        add(ts + m.tw * 0.35, m.t); add(ts + m.tw * 0.7, 0); tStart = ts + m.tw * 0.7;
      } else {
        for (i = 1; i <= 8; i += 1) { f = i / 8; add(ts + f * m.tw, m.st * (1 - f) + m.t * Math.sin(Math.PI * Math.min(f * 1.15, 1))); }
        tStart = ts + m.tw;
      }
    }
    if (m.u) { for (i = 1; i <= 6; i += 1) add(tStart + 0.6 + i * 0.5, m.u * Math.sin(Math.PI * i / 6)); tStart += 3.6; }
    add(Math.max(tStart + 0.5, m.len), 0);
    return { pts: pts, len: Math.max(tStart + 0.5, m.len) };
  }
  function leadSvg(spec) {
    var x0 = 0, all = [];
    for (var k = 0; k < spec.repeat; k += 1) {
      spec.beats.forEach(function (b) {
        var made = beatPoints(b);
        made.pts.forEach(function (p) { all.push([x0 + p[0], p[1]]); });
        x0 += made.len;
      });
    }
    var maxY = Math.max.apply(null, all.map(function (p) { return p[1]; })), minY = Math.min.apply(null, all.map(function (p) { return p[1]; }));
    var top = Math.max(8, Math.ceil(maxY) + 2), bottom = Math.max(6, Math.ceil(-minY) + 2);
    var w = x0 * PX, h = (top + bottom) * PX, base = top * PX, grid = "";
    for (var x = 0, n = 0; x <= w + 0.1; x += PX, n += 1) grid += '<line x1="' + x + '" y1="0" x2="' + x + '" y2="' + h + '" class="' + (n % 5 === 0 ? "rs-big" : "rs-small") + '"/>';
    for (var k = 0; k <= top + bottom; k += 1) grid += '<line x1="0" y1="' + k * PX + '" x2="' + w + '" y2="' + k * PX + '" class="' + ((k - top) % 5 === 0 ? "rs-big" : "rs-small") + '"/>';
    var pts = all.map(function (p) { return (p[0] * PX).toFixed(1) + "," + (base - p[1] * PX).toFixed(1); }).join(" ");
    return '<figure class="mi-lead pt-lead' + (x0 > 40 ? " wide" : "") + '"><svg viewBox="0 0 ' + w.toFixed(0) + ' ' + h + '" role="img" aria-label="Lead ' + spec.lead + '">' + grid + '<polyline class="rs-trace" points="' + pts + '"/></svg><figcaption>' + spec.lead + '</figcaption></figure>';
  }
  function drawing(pattern) { return '<div class="mi-measure pt-draw">' + pattern.leads.map(leadSvg).join("") + '</div>'; }
  function lookList(pattern) { return '<ul class="pt-look">' + pattern.look.map(function (x) { return '<li>' + escapeHtml(x) + '</li>'; }).join("") + '</ul>'; }
  function teach(pattern) {
    return lookList(pattern) + '<div class="box-hy"><span class="lbl">Cause → effect</span>' + escapeHtml(pattern.why) + '</div>';
  }

  // ---- open / close --------------------------------------------------------
  function open() {
    studyView.hidden = true;
    document.querySelectorAll(".walkthrough-view").forEach(function (section) { section.hidden = true; });
    view.hidden = false;
    renderHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function close() { state = null; view.hidden = true; studyView.hidden = false; content.innerHTML = ""; window.scrollTo({ top: 0, behavior: "smooth" }); }
  function top(label) { return '<div class="session-top"><button type="button" id="pt-home">← Pattern gallery</button><span>' + escapeHtml(label) + '</span></div>'; }
  function bindHome() { el("pt-home").addEventListener("click", renderHome); }

  function renderHome() {
    state = null;
    var progress = loadProgress();
    var html = '<div class="drill-heading"><p class="eyebrow">EKG · objectives 4, 5, 10, 12, 13, 16</p><h2>Pattern gallery</h2>' +
      '<p>Every 12-lead pattern you need to recognize, drawn in the leads where you look for it, with the criteria from the deck and the cause → effect that makes it look that way.</p></div>' +
      '<div class="murmur-quick rs-quick">' +
      '<button class="murmur-quick-card" type="button" id="pt-quiz"><span>Quiz</span><strong>Name that pattern →</strong><small>' + QUIZ_LENGTH + ' drawings. You choose between look-alikes. Misses come back.</small></button>' +
      '<button class="murmur-quick-card" type="button" id="pt-find"><span>Reverse</span><strong>What would you see? →</strong><small>' + QUIZ_LENGTH + ' conditions: pick the EKG finding that goes with it.</small></button>' +
      '</div><p class="eyebrow rs-groups-label">Learn by group</p><div class="struggle-group-list">';
    data.groups.forEach(function (g, index) {
      var list = patterns.filter(function (p) { return p.group === g.id; });
      var known = list.filter(function (p) { return progress[p.id] && progress[p.id].last; }).length;
      html += '<button class="struggle-group-card" type="button" data-pt-group="' + g.id + '"><span class="drill-section-number">' + String(index + 1).padStart(2, "0") + '</span><strong>' + escapeHtml(g.title) + '</strong><small>' + known + ' / ' + list.length + '</small><span class="murmur-mini-track"><span style="width:' + Math.round(known / list.length * 100) + '%"></span></span></button>';
    });
    content.innerHTML = html + '</div>';
    el("pt-quiz").addEventListener("click", function () { startQuiz("name", "Name that pattern", patterns); });
    el("pt-find").addEventListener("click", function () { startQuiz("find", "What would you see?", patterns); });
    content.querySelectorAll("[data-pt-group]").forEach(function (b) {
      b.addEventListener("click", function () { renderGroup(data.groups.find(function (g) { return g.id === b.dataset.ptGroup; })); });
    });
  }
  function renderGroup(group) {
    state = null;
    var list = patterns.filter(function (p) { return p.group === group.id; });
    var html = top(group.title) + '<div class="drill-heading"><p class="eyebrow">Learn</p><h2>' + escapeHtml(group.title) + '</h2><p>' + escapeHtml(group.blurb) + '</p></div>';
    list.forEach(function (p) {
      html += '<article class="learn-card rs-card"><h3>' + escapeHtml(p.name) + '</h3>' + drawing(p) + '<div class="learn-body">' + teach(p) + '</div></article>';
    });
    html += '<button class="primary-action full-action" id="pt-group-quiz" type="button">Quiz this group →</button>';
    content.innerHTML = html;
    bindHome();
    el("pt-group-quiz").addEventListener("click", function () { startQuiz("name", group.title, list, Math.min(10, list.length * 2)); });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---- quizzes -------------------------------------------------------------
  function choicesHtml(labels) {
    return '<div class="choices">' + labels.map(function (label, index) {
      return '<button class="choice" type="button" data-choice="' + index + '"><span>' + String.fromCharCode(65 + index) + '</span>' + escapeHtml(label) + '</button>';
    }).join("") + '</div>';
  }
  function header() {
    var percent = Math.round(state.done / Math.max(state.total, 1) * 100);
    return top(state.title) + '<div class="session-progress"><span style="width:' + percent + '%"></span></div><div class="session-counter">' + state.done + ' of ' + state.total + ' done · ' + state.firstTry + ' right on the first try</div>';
  }
  function startQuiz(kind, title, pool, length) {
    length = length || QUIZ_LENGTH;
    var items = [];
    while (items.length < length) items = items.concat(shuffle(pool));
    state = { kind: kind, title: title, pool: pool, items: items.slice(0, length).map(function (p) { return { pattern: p }; }), position: 0, total: length, done: 0, firstTry: 0, missed: {}, length: length };
    run();
  }
  function build(item) {
    var p = item.pattern, others = p.confuse.map(function (id) { return byId[id]; });
    if (state.kind === "name") {
      return { visual: '<div class="wb-sticky">' + drawing(p) + '</div>', prompt: "What pattern is this?", labels: shuffle([p.name].concat(others.map(function (o) { return o.name; }))), answer: p.name };
    }
    // Reverse: the right finding + one finding from each look-alike that the right pattern doesn't share.
    var right = p.look[Math.floor(Math.random() * Math.min(2, p.look.length))];
    var wrong = others.map(function (o) {
      var options = o.look.filter(function (x) { return p.look.indexOf(x) < 0; });
      return options[Math.floor(Math.random() * options.length)];
    }).filter(function (x, i, list) { return x && list.indexOf(x) === i && x !== right; });
    return { prompt: p.name + ": which finding goes with it?", labels: shuffle([right].concat(wrong)), answer: right };
  }
  function run() {
    if (state.position >= state.items.length) { complete(); return; }
    var item = state.items[state.position], p = item.pattern, q = build(item);
    content.innerHTML = header() + '<div class="recall-step-label">' + (item.retry ? "Coming back to this one" : "Question " + (state.position + 1)) + '</div>' +
      '<article class="question-card immersive-card rs-question">' + (q.visual || "") + '<h3>' + escapeHtml(q.prompt) + '</h3>' + choicesHtml(q.labels) +
      '<div class="explanation" id="pt-explanation" hidden></div></article><button class="primary-action full-action" id="pt-next" type="button" hidden>Next →</button>';
    bindHome();
    var group = content.querySelector(".choices"), answered = false;
    group.querySelectorAll("[data-choice]").forEach(function (button) {
      button.addEventListener("click", function () {
        if (answered) return;
        answered = true;
        var selected = Number(button.dataset.choice), correct = q.labels.indexOf(q.answer), right = selected === correct;
        group.querySelectorAll("[data-choice]").forEach(function (b) {
          var i = Number(b.dataset.choice); b.disabled = true;
          b.classList.add(i === correct ? "correct" : i === selected ? "wrong" : "dimmed");
        });
        var exp = el("pt-explanation");
        exp.hidden = false;
        exp.innerHTML = '<strong>' + (right ? "Correct: " : "Answer: ") + escapeHtml(q.answer) + '</strong><div class="learn-body">' + (state.kind === "find" ? '<p><strong>' + escapeHtml(p.name) + '</strong></p>' + drawing(p) : "") + teach(p) + '</div>';
        if (!item.retry) state.done += 1;
        if (right) { if (!item.retry) { state.firstTry += 1; record(p.id, true); } }
        else {
          record(p.id, false); state.missed[p.name] = true;
          if (!item.retry) state.items.splice(Math.min(state.position + 1 + RETURN_GAP, state.items.length), 0, { pattern: p, retry: true });
        }
        el("pt-next").hidden = false;
        exp.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    });
    el("pt-next").addEventListener("click", function () { state.position += 1; run(); });
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }
  function complete() {
    var finished = state, missed = Object.keys(finished.missed);
    content.innerHTML = '<section class="complete-panel"><span class="complete-icon">' + (missed.length ? "📈" : "🎯") + '</span><p class="eyebrow">Done</p><h3>' + escapeHtml(finished.title) + '</h3><p>' + finished.firstTry + ' of ' + finished.total + ' right on the first try.</p>' +
      (missed.length ? '<p class="rs-missed">Worth another look: ' + missed.map(escapeHtml).join(", ") + '</p>' : "") +
      '<div class="session-actions"><button class="primary-action" id="pt-again" type="button">Go again</button><button class="secondary-action" id="pt-done" type="button">Pattern gallery</button></div></section>';
    el("pt-again").addEventListener("click", function () { startQuiz(finished.kind, finished.title, finished.pool, finished.length); });
    el("pt-done").addEventListener("click", renderHome);
  }

  launch.addEventListener("click", open);
  document.getElementById("ekg-patterns-back").addEventListener("click", close);
}());
