/* EKG Examplify: Anna's real exam-style questions (picture + question), multiple choice.
   Data: window.EKG_EXAMPLIFY (data/ekg-examplify.js). The picture stays on screen (sticky) while
   answering; after a pick the right answer and its one-sentence why are shown.
   Progress: pasem2:ekg-examplify:progress = { q: { id: { right: bool, tries: n } } }. */
(function () {
  "use strict";
  var data = window.EKG_EXAMPLIFY;
  var launch = document.getElementById("ekg-examplify-launch");
  var view = document.getElementById("ekg-examplify-view");
  var content = document.getElementById("ekg-examplify-content");
  var studyView = document.getElementById("study-view");
  if (!data || !launch || !view || !content) return;

  var KEY = "pasem2:ekg-examplify:progress";
  // Display order: each homework's questions in sequence (Homework 2, 3, 4); anything unlisted goes last.
  var byNum = {}, groups = [], ordered = [], used = {};
  data.questions.forEach(function (q) { byNum[+q.id.split("-")[1]] = q; });
  (data.homework || []).forEach(function (h) {
    var list = [];
    for (var n = h.from; n <= h.to; n += 1) if (byNum[n] && !used[n]) { used[n] = true; list.push(byNum[n]); }
    if (list.length) groups.push({ title: h.title, list: list });
  });
  var rest = data.questions.filter(function (q) { return !used[+q.id.split("-")[1]]; });
  if (rest.length) groups.push({ title: "More questions", list: rest });
  groups.forEach(function (g) { g.list.forEach(function (q) { ordered.push(q); }); });
  function num(q) { return ordered.indexOf(q) + 1; }
  var state = null;

  function esc(v) { return String(v == null ? "" : v).replace(/[&<>'"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c]; }); }
  function shuffle(items) { var c = items.slice(); for (var i = c.length - 1; i > 0; i -= 1) { var j = Math.floor(Math.random() * (i + 1)); var v = c[i]; c[i] = c[j]; c[j] = v; } return c; }
  function el(id) { return content.querySelector("#" + id); }
  function load() { try { var v = JSON.parse(localStorage.getItem(KEY) || "{}"); v.q = v.q || {}; return v; } catch (e) { return { q: {} }; } }
  function save(v) { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) { /* private mode */ } }

  function updateLaunch() {
    var p = load(), n = data.questions.length;
    var right = data.questions.filter(function (q) { return p.q[q.id] && p.q[q.id].right; }).length;
    var s = document.getElementById("ekg-examplify-status");
    if (s) s.textContent = n + " question" + (n === 1 ? "" : "s") + (right ? " · " + right + " right last time" : "");
  }

  function open() {
    studyView.hidden = true;
    document.querySelectorAll(".walkthrough-view").forEach(function (s) { s.hidden = true; });
    view.hidden = false;
    renderHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function close() { state = null; view.hidden = true; studyView.hidden = false; content.innerHTML = ""; updateLaunch(); window.scrollTo({ top: 0, behavior: "smooth" }); }

  function renderHome() {
    state = null;
    var p = load();
    var misses = ordered.filter(function (q) { return p.q[q.id] && !p.q[q.id].right; });
    var fresh = ordered.filter(function (q) { return !p.q[q.id]; });
    content.innerHTML = '<div class="mode-intro"><p class="eyebrow">EKG · Examplify</p><h3>Examplify questions</h3>' +
      '<p>Real exam-style questions: look at the EKG, pick the interpretation, then see the answer and why.</p></div>' +
      '<div class="session-actions exq-actions">' +
      '<button class="primary-action" id="exq-all" type="button">All ' + ordered.length + ' in order</button>' +
      '<button class="secondary-action" id="exq-mix" type="button">All, mixed</button>' +
      (fresh.length && fresh.length < ordered.length ? '<button class="secondary-action" id="exq-new" type="button">New ones (' + fresh.length + ')</button>' : "") +
      (misses.length ? '<button class="secondary-action" id="exq-miss" type="button">My misses (' + misses.length + ')</button>' : "") +
      '</div>' + groups.map(function (g, gi) {
        return '<div class="exq-hw"><h4>' + esc(g.title) + ' <small>' + g.list.length + ' questions</small></h4>' +
          '<button class="secondary-action" type="button" data-g="' + gi + '">Start ' + esc(g.title) + '</button></div>' +
          '<ol class="exq-list">' + g.list.map(function (q) {
            var r = p.q[q.id], mark = !r ? '<b class="exq-new">new</b>' : r.right ? '<b class="ok">✓</b>' : '<b class="bad">✗</b>';
            return '<li><button type="button" data-q="' + q.id + '"><span>Question ' + num(q) + '</span>' + mark + '</button></li>';
          }).join("") + '</ol>';
      }).join("");
    el("exq-all").addEventListener("click", function () { start(ordered.slice()); });
    el("exq-mix").addEventListener("click", function () { start(shuffle(ordered)); });
    if (el("exq-new")) el("exq-new").addEventListener("click", function () { start(fresh); });
    if (el("exq-miss")) el("exq-miss").addEventListener("click", function () { start(misses); });
    content.querySelectorAll("[data-g]").forEach(function (b) {
      b.addEventListener("click", function () { start(groups[+b.getAttribute("data-g")].list.slice()); });
    });
    content.querySelectorAll("[data-q]").forEach(function (b) {
      b.addEventListener("click", function () {
        var q = ordered.filter(function (x) { return x.id === b.getAttribute("data-q"); })[0];
        start(ordered.slice(ordered.indexOf(q)));
      });
    });
  }

  function start(list) { state = { list: list, at: 0, right: 0, results: [] }; renderQuestion(); }

  function renderQuestion() {
    var s = state, q = s.list[s.at], number = num(q), hw = groups.filter(function (g) { return g.list.indexOf(q) >= 0; })[0];
    var choices = shuffle([q.answer].concat(q.wrong));
    content.innerHTML = '<div class="session-top"><button type="button" id="exq-back">← All questions</button><span>' + (s.at + 1) + ' / ' + s.list.length + '</span></div>' +
      '<div class="session-progress"><span style="width:' + (100 * s.at / s.list.length) + '%"></span></div>' +
      '<article class="question-card immersive-card exq-card"><p class="card-number">Examplify · ' + esc(hw.title) + ' · Question ' + number + '</p>' +
      '<div class="wb-sticky"><a class="exq-img" href="' + esc(q.image) + '" target="_blank" rel="noopener" title="Open full size"><img src="' + esc(q.image) + '" alt="' + esc(q.alt) + '" decoding="async"></a></div>' +
      '<h3 class="exq-q">' + esc(q.question) + '</h3>' +
      '<div class="choices" id="exq-choices">' + choices.map(function (c, i) {
        return '<button class="choice" type="button" data-c="' + esc(c) + '"><span>' + "ABCD"[i] + '</span>' + esc(c) + '</button>';
      }).join("") + '</div><div id="exq-after" hidden></div></article>';
    el("exq-back").addEventListener("click", renderHome);
    content.querySelectorAll("#exq-choices .choice").forEach(function (b) { b.addEventListener("click", function () { pick(b); }); });
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }

  function pick(button) {
    var s = state, q = s.list[s.at], ok = button.getAttribute("data-c") === q.answer;
    content.querySelectorAll("#exq-choices .choice").forEach(function (b) {
      b.disabled = true;
      if (b.getAttribute("data-c") === q.answer) b.classList.add("correct");
      else if (b === button) b.classList.add("wrong"); else b.classList.add("dimmed");
    });
    var p = load(), prev = p.q[q.id] || { tries: 0 };
    p.q[q.id] = { right: ok, tries: prev.tries + 1 }; save(p);
    if (ok) s.right += 1;
    s.results.push({ q: q, ok: ok });
    var last = s.at === s.list.length - 1;
    var after = el("exq-after");
    after.innerHTML = '<p class="ld-fb ' + (ok ? "ok" : "bad") + '">' + (ok ? "Correct" : "Not quite") + '</p>' +
      '<div class="explanation"><strong>Answer: ' + esc(q.answer) + '</strong><p>' + esc(q.why) + '</p></div>' +
      '<button class="primary-action full-action" id="exq-next" type="button">' + (last ? "See results" : "Next question →") + '</button>';
    after.hidden = false;
    el("exq-next").addEventListener("click", function () { if (last) renderDone(); else { s.at += 1; renderQuestion(); } });
  }

  function renderDone() {
    var s = state;
    content.innerHTML = '<section class="complete-panel"><span class="complete-icon">' + (s.right === s.list.length ? "🎉" : "✓") + '</span>' +
      '<p class="eyebrow">Examplify</p><h3>' + s.right + ' of ' + s.list.length + ' right</h3>' +
      '<ul class="fc-round-list">' + s.results.map(function (r) {
        return '<li class="' + (r.ok ? "ok" : "bad") + '"><b>' + (r.ok ? "✓" : "✗") + '</b><strong>Question ' + num(r.q) + '</strong><span>' + esc(r.q.answer) + '</span></li>';
      }).join("") + '</ul><div class="session-actions">' +
      (s.right < s.list.length ? '<button class="primary-action" id="exq-redo" type="button">Redo the ones I missed</button>' : "") +
      '<button class="secondary-action" id="exq-home" type="button">All questions</button></div></section>';
    if (el("exq-redo")) el("exq-redo").addEventListener("click", function () { start(shuffle(s.results.filter(function (r) { return !r.ok; }).map(function (r) { return r.q; }))); });
    el("exq-home").addEventListener("click", renderHome);
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }

  launch.addEventListener("click", open);
  document.getElementById("ekg-examplify-back").addEventListener("click", close);
  updateLaunch();
}());
