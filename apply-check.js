/* Final check: apply it (Anna, 2026-11-23, exam day): about an hour of short application questions across every
   Cardio 3 lecture (data/apply-check-cardio-part-3.js, window.CARDIO3_APPLY_CHECK). No timer. Pick an answer, see a
   one-sentence why. A miss saves its key point to "Come back to this" (kept until she clears it) and the question
   returns once at the end. The end screen lists the key points behind this round's misses.
   Progress: pasem2:apply-check:cardio-part-3:progress = { q: { id: { right, n } }, keys: { id: time }, run }. */
(function () {
  "use strict";
  var data = window.CARDIO3_APPLY_CHECK;
  var launch = document.getElementById("cardio3-check-launch");
  var view = document.getElementById("cardio3-check-view");
  var content = document.getElementById("cardio3-check-content");
  var back = document.getElementById("cardio3-check-back");
  var studyView = document.getElementById("study-view");
  if (!data || !launch || !view || !content) return;
  var KEY = "pasem2:apply-check:cardio-part-3:progress";
  var NAME = "Final check: apply it";
  var session = null;

  function esc(v) { return String(v == null ? "" : v).replace(/[&<>'"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c]; }); }
  function shuffle(a) { var c = a.slice(); for (var i = c.length - 1; i > 0; i -= 1) { var j = Math.floor(Math.random() * (i + 1)); var v = c[i]; c[i] = c[j]; c[j] = v; } return c; }
  function load() { try { var v = JSON.parse(localStorage.getItem(KEY) || "{}"); v.q = v.q || {}; v.keys = v.keys || {}; return v; } catch (e) { return { q: {}, keys: {} }; } }
  function save(v) { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) { /* private mode */ } }
  function pct(n, d) { return d ? Math.round(100 * n / d) : 0; }
  function el(id) { return document.getElementById(id); }
  function on(id, fn) { var x = el(id); if (x) x.addEventListener("click", fn); }
  function top() { window.scrollTo({ top: Math.max(0, view.offsetTop - 20), behavior: "smooth" }); }

  var ALL = [], BY_ID = {};
  data.lectures.forEach(function (lec) {
    lec.qs.forEach(function (q, i) { q.id = lec.id + "|" + i; q.lec = lec; ALL.push(q); BY_ID[q.id] = q; });
  });
  // Mix the hour so lectures alternate instead of clumping.
  function spread(list) {
    var lanes = {};
    shuffle(list).forEach(function (q) { (lanes[q.lec.id] = lanes[q.lec.id] || []).push(q); });
    var keys = Object.keys(lanes), out = [];
    while (out.length < list.length) {
      keys = shuffle(keys).sort(function (a, b) { return lanes[b].length - lanes[a].length; });
      keys.forEach(function (k) { if (lanes[k].length) out.push(lanes[k].shift()); });
    }
    return out;
  }
  function keyList(p) { return ALL.filter(function (q) { return p.keys[q.id]; }); }
  function crumbs(last) {
    return '<nav class="tr-crumbs" aria-label="Where you are"><button type="button" data-crumb="home">' + esc(NAME) + '</button>' + (last ? '<i>›</i><span>' + esc(last) + '</span>' : "") + '</nav>';
  }
  function bindCrumbs() { content.querySelectorAll("[data-crumb]").forEach(function (b) { b.addEventListener("click", function () { session = null; renderHome(); top(); }); }); }

  function open() {
    studyView.hidden = true;
    document.querySelectorAll(".walkthrough-view").forEach(function (s) { s.hidden = true; });
    view.hidden = false; renderHome(); window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function close() { session = null; view.hidden = true; studyView.hidden = false; content.innerHTML = ""; updateLaunch(); window.scrollTo({ top: 0, behavior: "smooth" }); }
  function updateLaunch() {
    var p = load(), s = el("cardio3-check-status"); if (!s) return;
    var t = ALL.filter(function (q) { return p.q[q.id]; }).length, k = keyList(p).length;
    s.textContent = ALL.length + " questions · " + t + " done" + (k ? " · " + k + " to come back to" : "");
  }

  /* ---------- Home ---------- */
  function renderHome() {
    session = null;
    var p = load(), keys = keyList(p), run = p.run && p.run.ids && p.run.pos < p.run.ids.length ? p.run : null;
    var notDone = ALL.filter(function (q) { return !p.q[q.id]; });
    content.innerHTML = crumbs() +
      '<div class="mode-intro"><p class="eyebrow">Cardio Part 3 · exam day · about 1 hour</p><h3>' + esc(NAME) + '</h3>' +
      '<p>' + ALL.length + ' short exam-length cases across every lecture, weighted like the exam: what is it, what\'s happening, what do you order, what do you give, which stage. No timer. Every answer shows a one-line why. Miss one and its key point is saved under <b>Come back to this</b>, and the question returns once at the end.</p></div>' +
      (run ? '<div class="tr-actions"><button type="button" class="primary-action" id="ac-resume">▶ Pick up where you left off: ' + esc(run.label) + ' (' + (run.pos + 1) + ' of ' + run.ids.length + ')</button></div>' : "") +
      '<div class="ep-big">' +
      '<button type="button" class="ep-mode ac-main" id="ac-all"><strong>Start the hour</strong><small>All ' + ALL.length + ' questions, lectures mixed.</small></button>' +
      '<button type="button" class="ep-mode" id="ac-new"' + (notDone.length && notDone.length < ALL.length ? "" : " disabled") + '><strong>Only ones I haven\'t done</strong><small>' + (notDone.length < ALL.length ? notDone.length + " left." : "Start the hour first.") + '</small></button>' +
      '<button type="button" class="ep-mode ac-keys-btn" id="ac-keys"' + (keys.length ? "" : " disabled") + '><strong>Come back to this</strong><small>' + (keys.length ? keys.length + " key points from your misses." : "Empty: misses land here.") + '</small></button>' +
      '<button type="button" class="ep-mode" id="ac-redo"' + (keys.length ? "" : " disabled") + '><strong>Retry my misses</strong><small>' + (keys.length ? "The " + keys.length + " questions behind those key points." : "Nothing to retry yet.") + '</small></button>' +
      '</div>' +
      '<h4 class="ep-group">One lecture at a time</h4><div class="ac-lecs">' + data.lectures.map(function (lec) {
        var d = lec.qs.filter(function (q) { return p.q[q.id]; }).length, r = lec.qs.filter(function (q) { return p.q[q.id] && p.q[q.id].right; }).length;
        return '<button type="button" class="secondary-action" data-lec="' + esc(lec.id) + '">' + esc(lec.short) + ' <small>' + lec.qs.length + (d ? ' · ' + pct(r, d) + '%' : "") + '</small></button>';
      }).join("") + '</div>';
    bindCrumbs();
    on("ac-resume", function () { resume(run); });
    on("ac-all", function () { start(spread(ALL), "The hour", true); });
    on("ac-new", function () { start(spread(notDone), "Not done yet", true); });
    on("ac-keys", function () { renderKeys(); top(); });
    on("ac-redo", function () { start(spread(keyList(load())), "Retry my misses", true); });
    content.querySelectorAll("[data-lec]").forEach(function (b) {
      b.addEventListener("click", function () { var l = data.lectures.filter(function (x) { return x.id === b.dataset.lec; })[0]; start(l.qs, l.title); });
    });
  }

  /* ---------- Come back to this ---------- */
  function renderKeys() {
    session = null;
    var p = load(), keys = keyList(p);
    content.innerHTML = crumbs("Come back to this") +
      '<div class="mode-intro"><p class="eyebrow">' + esc(NAME) + '</p><h3>Come back to this</h3>' +
      '<p>The key point behind every question you missed, grouped by lecture. Read them before the exam. Tap <b>Got it</b> to clear one once it sticks.</p></div>' +
      (keys.length ? data.lectures.map(function (lec) {
        var ks = keys.filter(function (q) { return q.lec === lec; });
        if (!ks.length) return "";
        return '<h4 class="ep-group">' + esc(lec.title) + '</h4><ul class="ac-keylist">' + ks.map(function (q) {
          return '<li class="ac-key" data-row="' + esc(q.id) + '"><div><small>' + esc(q.topic) + '</small><strong>' + esc(q.key) + '</strong>' +
            '<details><summary>The question</summary><p>' + esc(q.prompt) + '</p><p><b>Answer:</b> ' + esc(q.answer) + '. ' + esc(q.why) + '</p></details></div>' +
            '<button type="button" class="secondary-action" data-clear="' + esc(q.id) + '">Got it</button></li>';
        }).join("") + '</ul>';
      }).join("") : '<p class="tr-empty">Nothing here yet. Misses land here automatically.</p>') +
      '<div class="tr-actions center">' + (keys.length ? '<button type="button" class="primary-action" id="ac-redo">Retry these ' + keys.length + ' questions</button>' : "") +
      '<button type="button" class="secondary-action" id="tier-next">Back</button></div>';
    bindCrumbs();
    on("ac-redo", function () { start(spread(keyList(load())), "Retry my misses", true); });
    on("tier-next", function () { renderHome(); top(); });
    content.querySelectorAll("[data-clear]").forEach(function (b) {
      b.addEventListener("click", function () {
        var p2 = load(); delete p2.keys[b.dataset.clear]; save(p2);
        var row = content.querySelector('[data-row="' + b.dataset.clear + '"]'); if (row) row.remove();
      });
    });
  }

  /* ---------- A round ---------- */
  function start(list, label, keepOrder) {
    if (!list.length) return;
    var qs = keepOrder ? list.slice() : shuffle(list);
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
      '<article class="question-card immersive-card"><p class="tr-qfrom"><span class="ep-kind">' + esc(q.kind) + '</span> ' + esc(q.lec.short) + (again ? ' · <b class="ep-again">second try</b>' : "") + '</p>' +
      '<h3 class="ep-prompt">' + esc(q.prompt) + '</h3><div class="choices">' + choices.map(function (c, i) {
        return '<button type="button" class="choice" data-c="' + esc(c) + '"><span>' + "ABCD"[i] + '</span>' + esc(c) + '</button>';
      }).join("") + '</div><div id="ac-why"></div></article>' +
      '<div class="tr-actions center"><button type="button" class="secondary-action" id="ac-stop">End here and see my list</button></div>';
    bindCrumbs();
    on("ac-stop", function () { renderEnd(); });
    content.querySelectorAll(".choice").forEach(function (b) {
      b.addEventListener("click", function () {
        if (content.querySelector(".choice.correct")) return;
        var ok = b.dataset.c === q.answer, p = load(), r = p.q[q.id] || { n: 0 };
        r.n += 1; r.right = ok; p.q[q.id] = r;
        if (!ok) p.keys[q.id] = Date.now();
        save(p);
        content.querySelectorAll(".choice").forEach(function (x) { x.disabled = true; x.classList.add(x.dataset.c === q.answer ? "correct" : "dimmed"); });
        if (!ok) { b.classList.remove("dimmed"); b.classList.add("wrong"); }
        if (!ok && !session.missed[q.id]) { session.missed[q.id] = 1; session.firstMiss.push(q); session.queue.push(q); }
        else if (ok && !session.missed[q.id]) session.right += 1;
        session.pos += 1; saveRun(); session.pos -= 1;
        el("ac-why").innerHTML = '<div class="tr-why ' + (ok ? "ok" : "bad") + '"><b>' + (ok ? "Right." : "Not quite: it's " + esc(q.answer) + ".") + '</b> ' + esc(q.why) + '</div>' +
          (!ok ? '<div class="ac-keybox"><span>★ Come back to this</span><p>' + esc(q.key) + '</p>' + (!again ? '<small>Saved to your list. This question comes back at the end.</small>' : '<small>Still on your list.</small>') + '</div>' : "") +
          '<div class="tr-actions center"><button type="button" class="primary-action" id="tier-next">Next →</button></div>';
        on("tier-next", function () { session.pos += 1; renderQ(); });
        el("ac-why").scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    });
    top();
  }
  function renderEnd() {
    var p = load(); delete p.run; save(p);
    var seen = session.queue.filter(function (q, i, a) { return a.indexOf(q) === i && p.q[q.id]; }).length;
    var done = Math.min(seen, session.total), miss = session.firstMiss, score = pct(session.right, done || 1);
    content.innerHTML = crumbs(session.label) +
      '<section class="complete-panel lh-done"><span class="complete-icon">' + (score >= 80 ? "✓" : "↻") + '</span><p class="eyebrow">' + esc(session.label) + '</p>' +
      '<h3>' + session.right + ' of ' + done + ' right the first time' + (done ? ' (' + score + '%)' : "") + '</h3>' +
      '<p>' + (miss.length ? "Here is what you need: the key point behind each miss. They are also saved under Come back to this." : done ? "No misses. You can apply it." : "Nothing answered yet.") + '</p></section>' +
      (miss.length ? '<h4 class="ep-group">Come back to this</h4><ul class="ac-keylist">' + miss.map(function (q) {
        return '<li class="ac-key"><div><small>' + esc(q.lec.short) + ' · ' + esc(q.topic) + '</small><strong>' + esc(q.key) + '</strong></div></li>';
      }).join("") + '</ul>' : "") +
      '<div class="tr-actions center">' + (miss.length ? '<button type="button" class="primary-action" id="ac-redo">Retry the ' + miss.length + ' I missed</button>' : "") +
      '<button type="button" class="secondary-action" id="ac-keys">Full Come back to this list</button>' +
      '<button type="button" class="secondary-action" id="tier-next">Back to start</button></div>';
    bindCrumbs();
    var redo = miss.slice(), label = session.label;
    on("ac-redo", function () { start(redo, label + " · misses"); });
    on("ac-keys", function () { renderKeys(); top(); });
    on("tier-next", function () { renderHome(); top(); });
    session = null; updateLaunch(); top();
  }

  launch.addEventListener("click", open);
  if (back) back.addEventListener("click", close);
  updateLaunch();
})();
