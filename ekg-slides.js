/* EKG lecture slides quiz: walks through the EKG Interpretation deck in slide order. Each labeled strip or
   12-lead picture becomes a 4-choice "what is this?" question; after a pick the answer, the slide's own
   title and a one-sentence why are shown. Data: window.EKG_SLIDES (data/ekg-slides.js).
   Progress: pasem2:ekg-slides:progress = { q: { id: { right: bool, tries: n } } }. */
(function () {
  "use strict";
  var data = window.EKG_SLIDES;
  var launch = document.getElementById("ekg-slides-launch");
  var view = document.getElementById("ekg-slides-view");
  var content = document.getElementById("ekg-slides-content");
  var studyView = document.getElementById("study-view");
  if (!data || !launch || !view || !content) return;

  var KEY = "pasem2:ekg-slides:progress";
  var ordered = data.items.slice().sort(function (a, b) { return a.slide - b.slide; });
  var parts = data.parts.map(function (p) {
    return { title: p.title, list: ordered.filter(function (q) { return q.slide >= p.from && q.slide <= p.to; }) };
  }).filter(function (p) { return p.list.length; });
  var state = null;

  function esc(v) { return String(v == null ? "" : v).replace(/[&<>'"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c]; }); }
  function shuffle(items) { var c = items.slice(); for (var i = c.length - 1; i > 0; i -= 1) { var j = Math.floor(Math.random() * (i + 1)); var v = c[i]; c[i] = c[j]; c[j] = v; } return c; }
  function el(id) { return content.querySelector("#" + id); }
  function load() { try { var v = JSON.parse(localStorage.getItem(KEY) || "{}"); v.q = v.q || {}; return v; } catch (e) { return { q: {} }; } }
  function save(v) { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) { /* private mode */ } }
  function partOf(q) { return parts.filter(function (p) { return p.list.indexOf(q) >= 0; })[0]; }

  function updateLaunch() {
    var p = load(), n = ordered.length;
    var right = ordered.filter(function (q) { return p.q[q.id] && p.q[q.id].right; }).length;
    var s = document.getElementById("ekg-slides-status");
    if (s) s.textContent = n + " slides" + (right ? " · " + right + " right last time" : "");
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
    content.innerHTML = '<div class="mode-intro"><p class="eyebrow">EKG · ' + esc(data.deck) + ' slides</p><h3>Lecture slides quiz</h3>' +
      '<p>Go through the lecture slide by slide. Every slide with a labeled strip or 12-lead: say what it is, then see the slide\'s label and why.</p></div>' +
      '<div class="session-actions exq-actions">' +
      '<button class="primary-action" id="sl-all" type="button">All ' + ordered.length + ' in slide order</button>' +
      '<button class="secondary-action" id="sl-mix" type="button">All, mixed</button>' +
      (fresh.length && fresh.length < ordered.length ? '<button class="secondary-action" id="sl-new" type="button">Not tried yet (' + fresh.length + ')</button>' : "") +
      (misses.length ? '<button class="secondary-action" id="sl-miss" type="button">My misses (' + misses.length + ')</button>' : "") +
      '</div>' + parts.map(function (g, gi) {
        return '<div class="exq-hw"><h4>' + esc(g.title) + ' <small>' + g.list.length + ' slides</small></h4>' +
          '<button class="secondary-action" type="button" data-g="' + gi + '">Start this part</button></div>' +
          '<ol class="exq-list">' + g.list.map(function (q) {
            var r = p.q[q.id], mark = !r ? '<b class="exq-new">new</b>' : r.right ? '<b class="ok">✓</b>' : '<b class="bad">✗</b>';
            return '<li><button type="button" data-q="' + q.id + '"><span>Slide ' + q.slide + '</span>' + mark + '</button></li>';
          }).join("") + '</ol>';
      }).join("");
    el("sl-all").addEventListener("click", function () { start(ordered.slice()); });
    el("sl-mix").addEventListener("click", function () { start(shuffle(ordered)); });
    if (el("sl-new")) el("sl-new").addEventListener("click", function () { start(fresh); });
    if (el("sl-miss")) el("sl-miss").addEventListener("click", function () { start(misses); });
    content.querySelectorAll("[data-g]").forEach(function (b) {
      b.addEventListener("click", function () { start(parts[+b.getAttribute("data-g")].list.slice()); });
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
    var s = state, q = s.list[s.at];
    var choices = shuffle([q.answer].concat(q.wrong));
    content.innerHTML = '<div class="session-top"><button type="button" id="sl-back">← All slides</button><span>' + (s.at + 1) + ' / ' + s.list.length + '</span></div>' +
      '<div class="session-progress"><span style="width:' + (100 * s.at / s.list.length) + '%"></span></div>' +
      '<article class="question-card immersive-card exq-card"><p class="card-number">Slide ' + q.slide + ' · ' + (q.fmt === "12" ? "12-lead" : "Strip") + ' · ' + esc(partOf(q).title.split(":")[0]) + '</p>' +
      '<div class="wb-sticky"><a class="exq-img" href="' + esc(q.image) + '" target="_blank" rel="noopener" title="Open full size"><img src="' + esc(q.image) + '" alt="Picture from slide ' + q.slide + '" decoding="async"></a></div>' +
      '<h3 class="exq-q">' + esc(q.question) + '</h3>' +
      '<div class="choices" id="sl-choices">' + choices.map(function (c, i) {
        return '<button class="choice" type="button" data-c="' + esc(c) + '"><span>' + "ABCD"[i] + '</span>' + esc(c) + '</button>';
      }).join("") + '</div><div id="sl-after" hidden></div></article>';
    el("sl-back").addEventListener("click", renderHome);
    content.querySelectorAll("#sl-choices .choice").forEach(function (b) { b.addEventListener("click", function () { pick(b); }); });
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }

  function pick(button) {
    var s = state, q = s.list[s.at], ok = button.getAttribute("data-c") === q.answer;
    content.querySelectorAll("#sl-choices .choice").forEach(function (b) {
      b.disabled = true;
      if (b.getAttribute("data-c") === q.answer) b.classList.add("correct");
      else if (b === button) b.classList.add("wrong"); else b.classList.add("dimmed");
    });
    var p = load(), prev = p.q[q.id] || { tries: 0 };
    p.q[q.id] = { right: ok, tries: prev.tries + 1 }; save(p);
    if (ok) s.right += 1;
    s.results.push({ q: q, ok: ok });
    var last = s.at === s.list.length - 1;
    var after = el("sl-after");
    after.innerHTML = '<p class="ld-fb ' + (ok ? "ok" : "bad") + '">' + (ok ? "Correct" : "Not quite") + '</p>' +
      '<div class="explanation"><strong>Answer: ' + esc(q.answer) + '</strong><p>' + esc(q.why) + '</p>' +
      '<p class="sl-label">Slide ' + q.slide + ' title: <em>' + esc(q.label) + '</em></p></div>' +
      '<button class="primary-action full-action" id="sl-next" type="button">' + (last ? "See results" : "Next slide →") + '</button>';
    after.hidden = false;
    el("sl-next").addEventListener("click", function () { if (last) renderDone(); else { s.at += 1; renderQuestion(); } });
  }

  function renderDone() {
    var s = state;
    content.innerHTML = '<section class="complete-panel"><span class="complete-icon">' + (s.right === s.list.length ? "🎉" : "✓") + '</span>' +
      '<p class="eyebrow">Lecture slides quiz</p><h3>' + s.right + ' of ' + s.list.length + ' right</h3>' +
      '<ul class="fc-round-list">' + s.results.map(function (r) {
        return '<li class="' + (r.ok ? "ok" : "bad") + '"><b>' + (r.ok ? "✓" : "✗") + '</b><strong>Slide ' + r.q.slide + '</strong><span>' + esc(r.q.answer) + '</span></li>';
      }).join("") + '</ul><div class="session-actions">' +
      (s.right < s.list.length ? '<button class="primary-action" id="sl-redo" type="button">Redo the ones I missed</button>' : "") +
      '<button class="secondary-action" id="sl-home" type="button">All slides</button></div></section>';
    if (el("sl-redo")) el("sl-redo").addEventListener("click", function () {
      start(s.results.filter(function (r) { return !r.ok; }).map(function (r) { return r.q; }));
    });
    el("sl-home").addEventListener("click", renderHome);
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }

  launch.addEventListener("click", open);
  document.getElementById("ekg-slides-back").addEventListener("click", close);
  updateLaunch();
}());
