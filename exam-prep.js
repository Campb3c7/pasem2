/* Exam prep (Anna, 2026-11-22): the "do this after the slides" set for Cardio Part 3. Concept and application
   questions only, per lecture or mixed across lectures. A miss comes back once at the end of the round; the results
   view ranks every concept weakest first so the last hours go where they count.
   Data: window.EXAM_PREP (data/exam-prep.js + data/exam-prep-<lecture>.js). Slide pictures come from window.SLIDE_STUDY.
   Progress: pasem2:exam-prep:<course>:progress = { q: { id: { right (last try), first (first try ever), n } }, run: saved round }. */
/* 2026-11-22: made a factory so the Vignettes section (Anna: "just vignettes for every lecture") reuses it.
   cfg: { data, ids: prefix of the launch/view/content/back/status ids, key, name, eyebrow, intro }. */
(function () {
  "use strict";
window.createExamPrep = function (cfg) {
  var data = cfg.data;
  var launch = document.getElementById(cfg.ids + "-launch");
  var view = document.getElementById(cfg.ids + "-view");
  var content = document.getElementById(cfg.ids + "-content");
  var back = document.getElementById(cfg.ids + "-back");
  var studyView = document.getElementById("study-view");
  if (!data || !launch || !view || !content) return;
  var NAME = cfg.name;

  var KEY = cfg.key;
  var SMART = 25;
  var GROUPS = ["CAD", "Heart Failure", "Cardiac Surgery", "Cardiac Testing"];
  var session = null;

  function esc(v) { return String(v == null ? "" : v).replace(/[&<>'"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c]; }); }
  function shuffle(a) { var c = a.slice(); for (var i = c.length - 1; i > 0; i -= 1) { var j = Math.floor(Math.random() * (i + 1)); var v = c[i]; c[i] = c[j]; c[j] = v; } return c; }
  function load() { try { var v = JSON.parse(localStorage.getItem(KEY) || "{}"); v.q = v.q || {}; return v; } catch (e) { return { q: {} }; } }
  function save(v) { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) { /* private mode */ } }
  function pct(n, d) { return d ? Math.round(100 * n / d) : 0; }
  function el(id) { return content.querySelector("#" + id) || document.getElementById(id); }
  function on(id, fn) { var x = el(id); if (x) x.addEventListener("click", fn); }
  function top() { window.scrollTo({ top: Math.max(0, view.offsetTop - 20), behavior: "smooth" }); }

  // Stamp ids, concepts and lectures once.
  var ALL = [], BY_ID = {}, CONCEPTS = [];
  data.lectures.forEach(function (lec) {
    lec.cList = Object.keys(lec.concepts).map(function (k) { var c = { id: lec.id + "|" + k, key: k, name: lec.concepts[k], lec: lec, qs: [] }; CONCEPTS.push(c); return c; });
    lec.qs.forEach(function (q, i) {
      q.id = lec.id + "|" + i; q.lec = lec;
      q.c = lec.cList.filter(function (c) { return c.key === q.concept; })[0];
      if (q.c) q.c.qs.push(q);
      ALL.push(q); BY_ID[q.id] = q;
    });
  });
  function lecById(id) { return data.lectures.filter(function (l) { return l.id === id; })[0]; }
  function inGroup(g) { return data.lectures.filter(function (l) { return l.group === g; }); }
  function qsOf(lecs) { var out = []; lecs.forEach(function (l) { out = out.concat(l.qs); }); return out; }
  function tried(list, p) { return list.filter(function (q) { return p.q[q.id]; }); }
  function rightN(list, p) { return list.filter(function (q) { return p.q[q.id] && p.q[q.id].right; }).length; }
  function misses(list, p) { return list.filter(function (q) { return p.q[q.id] && !p.q[q.id].right; }); }
  function slideImg(q) {
    if (!q.n || !window.SLIDE_STUDY) return "";
    var l = window.SLIDE_STUDY.lectures.filter(function (x) { return x.id === q.lec.id; })[0];
    return l && l.img ? l.img.replace("{nn}", String(q.n).padStart(2, "0")).replace("{nnn}", String(q.n).padStart(3, "0")) : "";
  }
  // Smart pick: last-try misses first, then never tried, then the rest; spread across lectures.
  function smartPick(list, n, p) {
    var buckets = {};
    shuffle(list).forEach(function (q) {
      var r = p.q[q.id], rank = r && !r.right ? 0 : !r ? 1 : 2;
      (buckets[q.lec.id] = buckets[q.lec.id] || [[], [], []])[rank].push(q);
    });
    var out = [];
    [0, 1, 2].forEach(function (rank) {
      var lanes = shuffle(Object.keys(buckets)).map(function (k) { return buckets[k][rank]; });
      var more = true;
      while (more && out.length < n) { more = false; lanes.forEach(function (lane) { if (lane.length && out.length < n) { out.push(lane.shift()); more = true; } }); }
    });
    return out;
  }

  function mini(n, d, cls) { return '<span class="tr-mini ' + (cls || "") + '"><span style="width:' + pct(n, d) + '%"></span></span>'; }
  function crumbs(last, mid) {
    var parts = ['<button type="button" data-crumb="home">' + esc(NAME) + '</button>'];
    if (mid) parts.push('<button type="button" data-crumb="' + mid[0] + '">' + esc(mid[1]) + '</button>');
    if (last) parts.push('<span>' + esc(last) + '</span>');
    return '<nav class="tr-crumbs" aria-label="Where you are">' + parts.join('<i>›</i>') + '</nav>';
  }
  function bindCrumbs() {
    content.querySelectorAll("[data-crumb]").forEach(function (b) {
      b.addEventListener("click", function () { session = null; if (b.dataset.crumb === "results") renderResults(); else renderHome(); top(); });
    });
  }

  function open() {
    studyView.hidden = true;
    document.querySelectorAll(".walkthrough-view").forEach(function (s) { s.hidden = true; });
    view.hidden = false;
    renderHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function close() { session = null; view.hidden = true; studyView.hidden = false; content.innerHTML = ""; updateLaunch(); window.scrollTo({ top: 0, behavior: "smooth" }); }
  function updateLaunch() {
    var p = load(), s = document.getElementById(cfg.ids + "-status");
    if (!s) return;
    var t = tried(ALL, p).length;
    s.textContent = ALL.length + " questions · " + t + " tried" + (t ? " · " + pct(rightN(ALL, p), t) + "% right" : "");
  }

  /* ---------- Home ---------- */
  function renderHome() {
    session = null;
    var p = load(), miss = misses(ALL, p), run = p.run && p.run.ids && p.run.pos < p.run.ids.length ? p.run : null;
    var groups = GROUPS.filter(function (g) { return inGroup(g).length; });
    content.innerHTML = crumbs() +
      '<div class="mode-intro"><p class="eyebrow">' + esc(cfg.eyebrow) + '</p><h3>' + esc(NAME) + '</h3>' +
      '<p>' + esc(cfg.intro) + '</p></div>' +
      (run ? '<div class="tr-actions"><button type="button" class="primary-action" id="ep-resume">▶ Pick up where you left off: ' + esc(run.label) + ' (' + (run.pos + 1) + ' of ' + run.ids.length + ')</button></div>' : "") +
      '<div class="ep-big">' +
      '<button type="button" class="ep-mode" id="ep-smart"><strong>Smart mix</strong><small>' + SMART + ' questions from every lecture: your misses first, then ones you have not seen.</small></button>' +
      '<button type="button" class="ep-mode" id="ep-all"><strong>Everything mixed</strong><small>All ' + ALL.length + ' questions, shuffled across lectures.</small></button>' +
      '<button type="button" class="ep-mode" id="ep-miss"' + (miss.length ? "" : " disabled") + '><strong>My misses</strong><small>' + (miss.length ? miss.length + " you got wrong last time." : "Nothing wrong yet.") + '</small></button>' +
      '<button type="button" class="ep-mode" id="ep-results"><strong>Results</strong><small>Weakest concepts first, with a button to drill each one.</small></button>' +
      '</div>' +
      groups.map(function (g) {
        var lecs = inGroup(g), gq = qsOf(lecs);
        return '<h4 class="ep-group">' + esc(g) + (lecs.length > 1 ? ' <button type="button" class="ep-gmix" data-g="' + esc(g) + '">Mix all ' + esc(g) + ' (' + gq.length + ')</button>' : "") + '</h4>' +
          '<div class="tr-lecture-grid">' + lecs.map(function (lec) {
            var t = tried(lec.qs, p).length, r = rightN(lec.qs, p), m = misses(lec.qs, p).length;
            return '<div class="tr-lcard ep-lcard"><strong>' + esc(lec.title) + '</strong><small>' + lec.qs.length + ' questions · ' + lec.cList.length + ' concepts</small>' +
              '<span class="tr-lrow"><em>Tried</em>' + mini(t, lec.qs.length) + '<b>' + t + '/' + lec.qs.length + '</b></span>' +
              '<span class="tr-lrow"><em>Right</em>' + mini(r, t || 1, "q") + '<b>' + (t ? pct(r, t) + "%" : "–") + '</b></span>' +
              '<span class="ep-lbtns"><button type="button" class="primary-action" data-lec="' + esc(lec.id) + '">' + (t ? "Go again" : "Start") + '</button>' +
              (m ? '<button type="button" class="secondary-action" data-lmiss="' + esc(lec.id) + '">Misses (' + m + ')</button>' : "") + '</span></div>';
          }).join("") + '</div>';
      }).join("");
    bindCrumbs();
    on("ep-resume", function () { resume(run); });
    on("ep-smart", function () { start(smartPick(ALL, SMART, load()), "Smart mix"); });
    on("ep-all", function () { start(ALL, "Everything mixed"); });
    on("ep-miss", function () { start(misses(ALL, load()), "My misses"); });
    on("ep-results", function () { renderResults(); top(); });
    content.querySelectorAll("[data-g]").forEach(function (b) { b.addEventListener("click", function () { start(qsOf(inGroup(b.dataset.g)), "All " + b.dataset.g + " mixed"); }); });
    content.querySelectorAll("[data-lec]").forEach(function (b) { b.addEventListener("click", function () { var l = lecById(b.dataset.lec); start(l.qs, l.short || l.title); }); });
    content.querySelectorAll("[data-lmiss]").forEach(function (b) { b.addEventListener("click", function () { var l = lecById(b.dataset.lmiss); start(misses(l.qs, load()), (l.short || l.title) + " misses"); }); });
  }

  /* ---------- A round ---------- */
  function start(list, label) {
    if (!list.length) return;
    var qs = shuffle(list);
    session = { label: label, queue: qs, pos: 0, total: qs.length, right: 0, missed: {}, firstMiss: [] };
    saveRun(); renderQ();
  }
  function saveRun() {
    var p = load();
    p.run = { label: session.label, ids: session.queue.map(function (q) { return q.id; }), pos: session.pos, total: session.total, right: session.right, missed: session.missed, firstMiss: session.firstMiss.map(function (q) { return q.id; }) };
    save(p);
  }
  function resume(run) {
    var queue = run.ids.map(function (id) { return BY_ID[id]; }).filter(Boolean);
    session = { label: run.label, queue: queue, pos: Math.min(run.pos, queue.length), total: run.total, right: run.right, missed: run.missed || {}, firstMiss: (run.firstMiss || []).map(function (id) { return BY_ID[id]; }).filter(Boolean) };
    renderQ();
  }
  function renderQ() {
    var q = session.queue[session.pos];
    if (!q) return renderEnd();
    var again = session.missed[q.id] && session.queue.indexOf(q) < session.pos;
    var choices = shuffle([q.answer].concat(q.wrong));
    content.innerHTML = crumbs(session.label) +
      '<div class="tr-session-head"><span>' + esc(session.label) + '</span><span>' + (session.pos + 1) + ' of ' + session.queue.length + '</span></div>' +
      '<div class="progress-track tr-session-bar"><span style="width:' + pct(session.pos, session.queue.length) + '%"></span></div>' +
      '<article class="question-card immersive-card"><p class="tr-qfrom"><span class="ep-kind">' + esc(q.kind) + '</span> ' + esc(q.lec.short || q.lec.title) + ' · ' + esc(q.c ? q.c.name : "") + (again ? ' · <b class="ep-again">second try</b>' : "") + '</p>' +
      '<h3 class="ep-prompt">' + esc(q.prompt) + '</h3><div class="choices">' + choices.map(function (c, i) {
        return '<button type="button" class="choice" data-c="' + esc(c) + '"><span>' + "ABCD"[i] + '</span>' + esc(c) + '</button>';
      }).join("") + '</div><div id="tr-why"></div></article>' +
      '<div class="tr-actions center"><button type="button" class="secondary-action" id="ep-stop">End this round</button></div>';
    bindCrumbs();
    on("ep-stop", function () { renderEnd(); });
    content.querySelectorAll(".choice").forEach(function (b) {
      b.addEventListener("click", function () {
        if (content.querySelector(".choice.correct")) return;
        var ok = b.dataset.c === q.answer, p = load(), r = p.q[q.id];
        if (!r) r = { first: ok, n: 0 };
        r.n += 1; r.right = ok; p.q[q.id] = r; save(p);
        content.querySelectorAll(".choice").forEach(function (x) { x.disabled = true; x.classList.add(x.dataset.c === q.answer ? "correct" : "dimmed"); });
        if (!ok) { b.classList.remove("dimmed"); b.classList.add("wrong"); }
        if (!ok && !session.missed[q.id]) { session.missed[q.id] = 1; session.firstMiss.push(q); session.queue.push(q); }
        else if (ok && !session.missed[q.id]) session.right += 1;
        session.pos += 1; saveRun(); session.pos -= 1;
        var img = !ok ? slideImg(q) : "";
        el("tr-why").innerHTML = '<div class="tr-why ' + (ok ? "ok" : "bad") + '"><b>' + (ok ? "Right." : "Not quite: it's " + esc(q.answer) + ".") + '</b> ' + esc(q.why) +
          (!ok && !again ? '<small>This one comes back at the end.</small>' : "") + '</div>' +
          '<div class="tr-actions center"><button type="button" class="primary-action" id="tier-next">Next →</button>' +
          (img ? '<button type="button" class="secondary-action" id="ep-slide">See slide ' + q.n + '</button>' : "") + '</div><div id="ep-slide-box"></div>';
        on("tier-next", function () { session.pos += 1; renderQ(); });
        on("ep-slide", function () { el("ep-slide-box").innerHTML = '<figure class="ep-slide"><img src="' + esc(img) + '" alt="Slide ' + q.n + ' of ' + esc(q.lec.title) + '" loading="lazy"><figcaption>' + esc(q.lec.short || q.lec.title) + ' · slide ' + q.n + '</figcaption></figure>'; el("ep-slide").remove(); });
        el("tr-why").scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    });
    top();
  }
  function renderEnd() {
    var p = load(); delete p.run; save(p);
    var firstTry = session.queue.filter(function (q, i, a) { return a.indexOf(q) === i; });
    var done = firstTry.filter(function (q) { return p.q[q.id]; }).length;
    var byC = {};
    session.firstMiss.forEach(function (q) { var k = q.c ? q.c.id : "?"; (byC[k] = byC[k] || { c: q.c, qs: [] }).qs.push(q); });
    var rows = Object.keys(byC).map(function (k) { return byC[k]; }).sort(function (a, b) { return b.qs.length - a.qs.length; });
    var nMiss = session.firstMiss.length, score = pct(session.right, Math.max(1, Math.min(done, session.total)));
    content.innerHTML = crumbs(session.label) +
      '<section class="complete-panel lh-done"><span class="complete-icon">' + (score >= 80 ? "✓" : "↻") + '</span><p class="eyebrow">' + esc(session.label) + '</p>' +
      '<h3>' + session.right + ' of ' + Math.min(done, session.total) + ' right the first time' + (done ? ' (' + score + '%)' : "") + '</h3>' +
      '<p>' + (nMiss ? "These are the concepts behind your first-try misses. Each miss came back once." : done ? "No misses this round." : "Nothing answered yet.") + '</p></section>' +
      (rows.length ? '<h4 class="ep-group">Concepts behind your misses</h4><ul class="ep-concepts">' + rows.map(function (r) {
        return '<li class="ep-crow"><div><strong>' + esc(r.c ? r.c.name : "Other") + '</strong><small>' + esc(r.c ? r.c.lec.short || r.c.lec.title : "") + ' · ' + r.qs.length + ' missed</small></div>' +
          (r.c ? '<button type="button" class="secondary-action" data-c="' + esc(r.c.id) + '">Drill (' + r.c.qs.length + ')</button>' : "") + '</li>';
      }).join("") + '</ul>' : "") +
      '<div class="tr-actions center">' + (nMiss ? '<button type="button" class="primary-action" id="ep-redo">Redo the ' + nMiss + ' I missed</button>' : "") +
      '<button type="button" class="' + (nMiss ? "secondary" : "primary") + '-action" id="tier-next">Back to ' + esc(NAME) + '</button>' +
      '<button type="button" class="secondary-action" id="ep-results">See all results</button></div>';
    bindCrumbs();
    var redo = session.firstMiss.slice(), label = session.label;
    on("ep-redo", function () { start(redo, label + " · misses"); });
    on("tier-next", function () { renderHome(); top(); });
    on("ep-results", function () { renderResults(); top(); });
    content.querySelectorAll("[data-c]").forEach(function (b) {
      b.addEventListener("click", function () { var c = CONCEPTS.filter(function (x) { return x.id === b.dataset.c; })[0]; start(c.qs, (c.lec.short || "") + " · " + c.name); });
    });
    session = null;
    top();
  }

  /* ---------- Results: weakest concepts first ---------- */
  function renderResults() {
    session = null;
    var p = load(), t = tried(ALL, p).length, r = rightN(ALL, p);
    var scored = CONCEPTS.map(function (c) { var tt = tried(c.qs, p).length, rr = rightN(c.qs, p); return { c: c, t: tt, r: rr, s: tt ? rr / tt : 2 }; });
    var weak = scored.filter(function (x) { return x.t && x.r < x.t; }).sort(function (a, b) { return a.s - b.s || (b.t - b.r) - (a.t - a.r); });
    var solid = scored.filter(function (x) { return x.t && x.r === x.t; });
    var untried = scored.filter(function (x) { return !x.t; });
    function row(x) {
      return '<li class="ep-crow"><div><strong>' + esc(x.c.name) + '</strong><small>' + esc(x.c.lec.short || x.c.lec.title) + ' · ' + x.r + ' of ' + x.t + ' right' + (x.t < x.c.qs.length ? ' · ' + (x.c.qs.length - x.t) + ' not tried' : "") + '</small>' +
        mini(x.r, x.t || 1, "q") + '</div><button type="button" class="secondary-action" data-c="' + esc(x.c.id) + '">Drill (' + x.c.qs.length + ')</button></li>';
    }
    content.innerHTML = crumbs("Results") +
      '<div class="mode-intro"><p class="eyebrow">' + esc(NAME) + ' · results</p><h3>Where to spend your time</h3>' +
      '<p>Each question counts by your last try. Concepts are ranked weakest first; drill one and it moves down the list.</p></div>' +
      '<div class="tr-bars3 two"><div class="tr-bar tr-bar-big"><div class="tr-bar-top"><span>Tried</span><b>' + t + ' / ' + ALL.length + '</b></div><div class="progress-track"><span style="width:' + pct(t, ALL.length) + '%"></span></div></div>' +
      '<div class="tr-bar tr-bar-big tr-bar-soft"><div class="tr-bar-top"><span>Right on last try</span><b>' + (t ? pct(r, t) + "%" : "–") + '</b></div><div class="progress-track"><span style="width:' + pct(r, t || 1) + '%"></span></div></div></div>' +
      '<h4 class="ep-group">By lecture</h4><ul class="ep-concepts">' + data.lectures.map(function (lec) {
        var lt = tried(lec.qs, p).length, lr = rightN(lec.qs, p);
        return '<li class="ep-crow"><div><strong>' + esc(lec.title) + '</strong><small>' + (lt ? pct(lr, lt) + "% right · " : "") + lt + ' of ' + lec.qs.length + ' tried</small>' + mini(lr, lt || 1, "q") +
          '</div><button type="button" class="secondary-action" data-lec="' + esc(lec.id) + '">Go (' + lec.qs.length + ')</button></li>';
      }).join("") + '</ul>' +
      '<h4 class="ep-group">Weakest concepts' + (weak.length ? ' <button type="button" class="ep-gmix" id="ep-weak">Drill the weakest 5</button>' : "") + '</h4>' +
      (weak.length ? '<ul class="ep-concepts">' + weak.map(row).join("") + '</ul>' : '<p class="tr-empty">No weak spots yet' + (t ? ": everything you tried you got right on the last try." : ". Start a round first.") + '</p>') +
      (solid.length ? '<details class="tr-bank"><summary>Solid concepts <b>' + solid.length + '</b></summary><ul class="ep-concepts">' + solid.map(row).join("") + '</ul></details>' : "") +
      (untried.length ? '<details class="tr-bank"><summary>Not tried yet <b>' + untried.length + '</b></summary><ul class="ep-concepts">' + untried.map(row).join("") + '</ul></details>' : "") +
      '<div class="tr-actions center"><button type="button" class="primary-action" id="tier-next">Back to ' + esc(NAME) + '</button></div>';
    bindCrumbs();
    on("tier-next", function () { renderHome(); top(); });
    content.querySelectorAll("[data-lec]").forEach(function (b) { b.addEventListener("click", function () { var l = lecById(b.dataset.lec); start(l.qs, l.short || l.title); }); });
    on("ep-weak", function () { var list = []; weak.slice(0, 5).forEach(function (x) { list = list.concat(x.c.qs); }); start(list, "Weakest 5 concepts"); });
    content.querySelectorAll("[data-c]").forEach(function (b) {
      b.addEventListener("click", function () { var c = CONCEPTS.filter(function (x) { return x.id === b.dataset.c; })[0]; start(c.qs, (c.lec.short || "") + " · " + c.name); });
    });
  }

  launch.addEventListener("click", open);
  if (back) back.addEventListener("click", close);
  updateLaunch();
};

  window.createExamPrep({
    data: window.EXAM_PREP, ids: "cardio3-prep", name: "Exam prep", eyebrow: "Cardio Part 3 · after the slides",
    key: "pasem2:exam-prep:cardio-part-3:v2:progress", /* v2 = questions rebuilt 2026-11-22 round 2 */
    intro: "Each lecture is written the way its professor tests: Heart Failure like her Menti (the slide facts plus NYHA class, AHA stage and treatment cases), CAD and ACS as short AI-style vignettes, Cardiac Surgery from his Kahoot and his bold and yellow slide text, and Testing on the core LOs. Quick facts, drug details and short cases, covering every LO. A miss comes back once at the end, and Results shows your weakest concepts."
  });
  window.createExamPrep({
    data: window.CARDIO3_VIGNETTES, ids: "cardio3-vig", name: "Vignettes", eyebrow: "Cardio Part 3 · patient cases only",
    key: "pasem2:vignettes:cardio-part-3:progress",
    intro: "Only short clinical vignettes, exam length, for every lecture: a patient, the clue that matters, and one question (what is it, what's happening, what do you order, what do you give, what stage or class). A miss comes back once at the end, and Results shows your weakest topics."
  });
})();
