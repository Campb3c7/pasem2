/* EKG Canvas practice: one set per Canvas source (12-Lead Review, Rhythm Review, EKG Interpretation lecture
   slides, EKG Application class polls), each a picture + 4-choice "what is it?", styled like Examplify.
   Data: window.EKG_CANVAS (data/ekg-canvas.js) plus window.EKG_SLIDES and window.EKG_CLASS_POLLS.
   Progress: pasem2:ekg-canvas:progress = { q: { "<set id>|<item id>": { right, tries } } }. */
(function () {
  "use strict";
  var data = window.EKG_CANVAS;
  var launch = document.getElementById("ekg-canvas-launch");
  var view = document.getElementById("ekg-canvas-view");
  var content = document.getElementById("ekg-canvas-content");
  var studyView = document.getElementById("study-view");
  if (!data || !launch || !view || !content) return;

  var KEY = "pasem2:ekg-canvas:progress";
  var sets = data.sets.map(function (s) {
    return { id: s.id, title: s.title, note: s.note, items: s.items.map(function (q) {
      return { key: s.id + "|" + q.id, image: q.image, alt: q.alt, question: q.question, answer: q.answer, wrong: q.wrong, why: q.why,
        tag: q.src === "slide" ? "Answer from the slide's own title" : q.src === "ours" ? "Our read (no answer key)" : "" };
    }) };
  });
  if (window.EKG_SLIDES) sets.push({ id: "lecture", title: "EKG Interpretation lecture", note: "Every labeled strip and 12-lead in the deck, in slide order.",
    items: window.EKG_SLIDES.items.map(function (q) {
      return { key: "lecture|" + q.id, image: q.image, alt: q.label, question: q.question, answer: q.answer, wrong: q.wrong, why: q.why, tag: "Slide " + q.slide + ": " + q.label };
    }) });
  if (window.EKG_CLASS_POLLS) sets.push({ id: "application", title: "EKG Application (class polls)", note: "The 11/9 EKG App session: questions only, no strips.",
    items: window.EKG_CLASS_POLLS.map(function (q) {
      return { key: "application|" + q.id, question: q.prompt, answer: q.answer, wrong: q.wrong.slice(0, 3), why: q.why, tag: "" };
    }) });
  var all = [];
  sets.forEach(function (s) { s.items.forEach(function (q, i) { q.set = s; q.n = i + 1; all.push(q); }); });
  var state = null;

  function esc(v) { return String(v == null ? "" : v).replace(/[&<>'"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c]; }); }
  function shuffle(items) { var c = items.slice(); for (var i = c.length - 1; i > 0; i -= 1) { var j = Math.floor(Math.random() * (i + 1)); var v = c[i]; c[i] = c[j]; c[j] = v; } return c; }
  function el(id) { return content.querySelector("#" + id); }
  function load() { try { var v = JSON.parse(localStorage.getItem(KEY) || "{}"); v.q = v.q || {}; return v; } catch (e) { return { q: {} }; } }
  function save(v) { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) { /* private mode */ } }

  function updateLaunch() {
    var p = load(), right = all.filter(function (q) { return p.q[q.key] && p.q[q.key].right; }).length;
    var s = document.getElementById("ekg-canvas-status");
    if (s) s.textContent = sets.length + " sets · " + all.length + " questions" + (right ? " · " + right + " right last time" : "");
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
    var misses = all.filter(function (q) { return p.q[q.key] && !p.q[q.key].right; });
    content.innerHTML = '<div class="mode-intro"><p class="eyebrow">EKG · Canvas</p><h3>Canvas practice</h3>' +
      '<p>Everything else on Canvas with a strip or 12-lead: one set per deck. Look, pick the answer, then see why.</p></div>' +
      (misses.length ? '<div class="session-actions exq-actions"><button class="secondary-action" id="cv-miss" type="button">My misses (' + misses.length + ')</button></div>' : "") +
      sets.map(function (s, si) {
        return '<div class="exq-hw"><h4>' + esc(s.title) + ' <small>' + s.items.length + ' questions</small></h4>' +
          '<span><button class="secondary-action" type="button" data-s="' + si + '">Start</button> ' +
          '<button class="secondary-action" type="button" data-m="' + si + '">Mixed</button></span></div>' +
          (s.note ? '<p class="cv-note">' + esc(s.note) + '</p>' : "") +
          '<ol class="exq-list">' + s.items.map(function (q) {
            var r = p.q[q.key], mark = !r ? '<b class="exq-new">new</b>' : r.right ? '<b class="ok">✓</b>' : '<b class="bad">✗</b>';
            return '<li><button type="button" data-q="' + esc(q.key) + '"><span>Question ' + q.n + '</span>' + mark + '</button></li>';
          }).join("") + '</ol>';
      }).join("");
    if (el("cv-miss")) el("cv-miss").addEventListener("click", function () { start(misses); });
    content.querySelectorAll("[data-s]").forEach(function (b) { b.addEventListener("click", function () { start(sets[+b.getAttribute("data-s")].items.slice()); }); });
    content.querySelectorAll("[data-m]").forEach(function (b) { b.addEventListener("click", function () { start(shuffle(sets[+b.getAttribute("data-m")].items)); }); });
    content.querySelectorAll("[data-q]").forEach(function (b) {
      b.addEventListener("click", function () {
        var q = all.filter(function (x) { return x.key === b.getAttribute("data-q"); })[0];
        start(q.set.items.slice(q.n - 1));
      });
    });
  }

  function start(list) { state = { list: list, at: 0, right: 0, results: [] }; renderQuestion(); }

  function renderQuestion() {
    var s = state, q = s.list[s.at];
    var choices = shuffle([q.answer].concat(q.wrong));
    content.innerHTML = '<div class="session-top"><button type="button" id="cv-back">← All sets</button><span>' + (s.at + 1) + ' / ' + s.list.length + '</span></div>' +
      '<div class="session-progress"><span style="width:' + (100 * s.at / s.list.length) + '%"></span></div>' +
      '<article class="question-card immersive-card exq-card"><p class="card-number">Canvas · ' + esc(q.set.title) + ' · Question ' + q.n + '</p>' +
      (q.image ? '<div class="wb-sticky"><a class="exq-img" href="' + esc(q.image) + '" target="_blank" rel="noopener" title="Open full size"><img src="' + esc(q.image) + '" alt="' + esc(q.alt) + '" decoding="async"></a></div>' : "") +
      '<h3 class="exq-q">' + esc(q.question) + '</h3>' +
      '<div class="choices" id="cv-choices">' + choices.map(function (c, i) {
        return '<button class="choice" type="button" data-c="' + esc(c) + '"><span>' + "ABCD"[i] + '</span>' + esc(c) + '</button>';
      }).join("") + '</div><div id="cv-after" hidden></div></article>';
    el("cv-back").addEventListener("click", renderHome);
    content.querySelectorAll("#cv-choices .choice").forEach(function (b) { b.addEventListener("click", function () { pick(b); }); });
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }

  function pick(button) {
    var s = state, q = s.list[s.at], ok = button.getAttribute("data-c") === q.answer;
    content.querySelectorAll("#cv-choices .choice").forEach(function (b) {
      b.disabled = true;
      if (b.getAttribute("data-c") === q.answer) b.classList.add("correct");
      else if (b === button) b.classList.add("wrong"); else b.classList.add("dimmed");
    });
    var p = load(), prev = p.q[q.key] || { tries: 0 };
    p.q[q.key] = { right: ok, tries: prev.tries + 1 }; save(p);
    if (ok) s.right += 1;
    s.results.push({ q: q, ok: ok });
    var last = s.at === s.list.length - 1;
    var after = el("cv-after");
    after.innerHTML = '<p class="ld-fb ' + (ok ? "ok" : "bad") + '">' + (ok ? "Correct" : "Not quite") + '</p>' +
      '<div class="explanation"><strong>Answer: ' + esc(q.answer) + '</strong><p>' + esc(q.why) + '</p>' +
      (q.tag ? '<small class="cv-tag">' + esc(q.tag) + '</small>' : "") + '</div>' +
      '<button class="primary-action full-action" id="cv-next" type="button">' + (last ? "See results" : "Next question →") + '</button>';
    after.hidden = false;
    el("cv-next").addEventListener("click", function () { if (last) renderDone(); else { s.at += 1; renderQuestion(); } });
  }

  function renderDone() {
    var s = state;
    content.innerHTML = '<section class="complete-panel"><span class="complete-icon">' + (s.right === s.list.length ? "🎉" : "✓") + '</span>' +
      '<p class="eyebrow">Canvas practice</p><h3>' + s.right + ' of ' + s.list.length + ' right</h3>' +
      '<ul class="fc-round-list">' + s.results.map(function (r) {
        return '<li class="' + (r.ok ? "ok" : "bad") + '"><b>' + (r.ok ? "✓" : "✗") + '</b><strong>' + esc(r.q.set.title) + ' ' + r.q.n + '</strong><span>' + esc(r.q.answer) + '</span></li>';
      }).join("") + '</ul><div class="session-actions">' +
      (s.right < s.list.length ? '<button class="primary-action" id="cv-redo" type="button">Redo the ones I missed</button>' : "") +
      '<button class="secondary-action" id="cv-home" type="button">All sets</button></div></section>';
    if (el("cv-redo")) el("cv-redo").addEventListener("click", function () { start(shuffle(s.results.filter(function (r) { return !r.ok; }).map(function (r) { return r.q; }))); });
    el("cv-home").addEventListener("click", renderHome);
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }

  launch.addEventListener("click", open);
  document.getElementById("ekg-canvas-back").addEventListener("click", close);
  updateLaunch();
}());
