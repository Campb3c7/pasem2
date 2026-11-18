/* EKG "Real EKG practice": multiple choice on real recorded EKGs from PTB-XL (PhysioNet, CC BY 4.0).
   Two sections: Rhythm strips (10 s of lead II, "what is this rhythm?") and 12-leads (standard 3x4 printout
   with a lead II rhythm strip, "what is the main finding?"). The answer comes from the cardiologists' labels;
   after a pick the page shows the answer, a one-sentence why, and the cardiologists' own read.
   Data: window.EKG_REAL_PRACTICE (data/ekg-real-practice.js). Waveforms are loaded only when a section opens:
   window.EKG_REAL_STRIPS (data/ekg-real-strips.js) and window.EKG_REAL_TWELVE (data/ekg-real-twelve.js).
   12-leads are drawn by window.EKGSourcesDraw (ekg-sources.js). A miss comes back once at the end of the session.
   Progress: pasem2:ekg-real:progress = { q: { "ptbxl-<n>": { right: bool, tries: n } } }. */
(function () {
  "use strict";
  var data = window.EKG_REAL_PRACTICE;
  var launch = document.getElementById("ekg-real-launch");
  var view = document.getElementById("ekg-real-view");
  var content = document.getElementById("ekg-real-content");
  var studyView = document.getElementById("study-view");
  if (!data || !launch || !view || !content) return;

  var KEY = "pasem2:ekg-real:progress";
  var FILES = { strip: { src: "data/ekg-real-strips.js", global: "EKG_REAL_STRIPS" }, twelve: { src: "data/ekg-real-twelve.js", global: "EKG_REAL_TWELVE" } };
  var PX = 3, MM_S = 25, GUT = 8, FS = 250, SROW = 34;
  var state = null;

  function esc(v) { return String(v == null ? "" : v).replace(/[&<>'"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c]; }); }
  function shuffle(items) { var c = items.slice(); for (var i = c.length - 1; i > 0; i -= 1) { var j = Math.floor(Math.random() * (i + 1)); var v = c[i]; c[i] = c[j]; c[j] = v; } return c; }
  function el(id) { return content.querySelector("#" + id); }
  function load() { try { var v = JSON.parse(localStorage.getItem(KEY) || "{}"); v.q = v.q || {}; return v; } catch (e) { return { q: {} }; } }
  function save(v) { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) { /* private mode */ } }
  function itemsOf(section) { return data.items.filter(function (x) { return x.section === section; }); }
  function catsOf(section) { return Object.keys(data.cats).filter(function (k) { return data.cats[k].section === section; }); }
  function decode(str) { var out = [], v = 0; str.split(",").forEach(function (d) { v += +d; out.push(v); }); return out; }

  function updateLaunch() {
    var p = load(), n = data.items.length;
    var right = data.items.filter(function (x) { return p.q[x.id] && p.q[x.id].right; }).length;
    var s = document.getElementById("ekg-real-status");
    if (s) s.textContent = n + " real EKGs" + (right ? " · " + right + " right last time" : "");
  }

  function loadWaves(section, done) {
    var f = FILES[section];
    if (window[f.global]) { done(true); return; }
    var s = document.createElement("script");
    s.src = f.src;
    s.onload = function () { done(!!window[f.global]); };
    s.onerror = function () { done(false); };
    document.head.appendChild(s);
  }

  // One 10-second lead II strip at 25 mm/s and 10 mm/mV, same paper as the other EKG tools.
  function drawStrip(str, id) {
    var W = (GUT + 10 * MM_S) * PX, H = SROW * PX, base = SROW * 0.62 * PX, pid = "real-grid-" + id;
    var pts = decode(str).map(function (v, i) { return ((GUT + i / FS * MM_S) * PX).toFixed(1) + "," + (base - v * 0.1 * PX).toFixed(1); });
    return '<svg class="tw-ekg-svg" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Recorded lead II rhythm strip, 10 seconds">' +
      '<defs><pattern id="' + pid + '" width="' + 5 * PX + '" height="' + 5 * PX + '" patternUnits="userSpaceOnUse">' +
      [1, 2, 3, 4].map(function (k) { return '<line x1="' + k * PX + '" y1="0" x2="' + k * PX + '" y2="' + 5 * PX + '" class="rs-small"/><line x1="0" y1="' + k * PX + '" x2="' + 5 * PX + '" y2="' + k * PX + '" class="rs-small"/>'; }).join("") +
      '<line x1="0" y1="0" x2="0" y2="' + 5 * PX + '" class="rs-big"/><line x1="0" y1="0" x2="' + 5 * PX + '" y2="0" class="rs-big"/></pattern></defs>' +
      '<rect x="0" y="0" width="' + W + '" height="' + H + '" fill="url(#' + pid + ')"/>' +
      '<polyline class="tw-cal" points="' + [[0.5, 0], [2, 0], [2, 10], [7, 10], [7, 0], [GUT, 0]].map(function (p) { return (p[0] * PX).toFixed(1) + "," + (base - p[1] * PX).toFixed(1); }).join(" ") + '"/>' +
      '<polyline class="rs-trace tw-trace" points="' + pts.join(" ") + '"/>' +
      '<text class="tw-label" x="' + (GUT * PX + 4) + '" y="' + (5 * PX) + '">II</text></svg>';
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
    content.innerHTML = '<div class="mode-intro"><p class="eyebrow">EKG · Real EKG practice</p><h3>Real EKG practice</h3>' +
      '<p>Real recorded EKGs, each read by cardiologists (PTB-XL). Pick what it is, then see the answer, why, and the cardiologists\' own read. Real tracings are messier than our drawings: that is the point.</p></div>' +
      ["strip", "twelve"].map(function (section) {
        var sec = data.sections[section], list = itemsOf(section);
        var tried = list.filter(function (x) { return p.q[x.id]; }).length;
        var right = list.filter(function (x) { return p.q[x.id] && p.q[x.id].right; }).length;
        var misses = list.filter(function (x) { return p.q[x.id] && !p.q[x.id].right; }).length;
        return '<section class="real-sec"><div class="real-sec-head"><h4>' + esc(sec.title) + '</h4><small>' + list.length + ' EKGs' + (tried ? ' · ' + right + ' of ' + tried + ' right' : '') + '</small></div>' +
          '<p class="src-note">' + esc(sec.blurb) + '</p>' +
          '<div class="session-actions real-actions">' +
          '<button class="primary-action" type="button" data-start="' + section + '|mix">15 mixed</button>' +
          '<button class="secondary-action" type="button" data-start="' + section + '|all">All ' + list.length + ', mixed</button>' +
          (misses ? '<button class="secondary-action" type="button" data-start="' + section + '|miss">My misses (' + misses + ')</button>' : '') +
          '</div><p class="real-sub">One type at a time</p><div class="src-filter">' +
          catsOf(section).map(function (k) {
            var n = list.filter(function (x) { return x.cat === k; }).length;
            return n ? '<button class="src-chip" type="button" data-start="' + section + '|cat|' + k + '">' + esc(data.cats[k].name) + ' <b>' + n + '</b></button>' : '';
          }).join("") + '</div></section>';
      }).join("") +
      '<p class="src-note real-credit">Tracings: PTB-XL, PhysioNet (Wagner et al., Scientific Data 2020), CC BY 4.0, redrawn at 25 mm/s and 10 mm/mV. Rates are counted by computer. Reports in German or Swedish are shown with our English translation.</p>';
    content.querySelectorAll("[data-start]").forEach(function (b) {
      b.addEventListener("click", function () {
        var parts = b.getAttribute("data-start").split("|"), section = parts[0], list = itemsOf(section), pp = load();
        if (parts[1] === "mix") list = shuffle(list).slice(0, 15);
        else if (parts[1] === "all") list = shuffle(list);
        else if (parts[1] === "miss") list = shuffle(list.filter(function (x) { return pp.q[x.id] && !pp.q[x.id].right; }));
        else list = shuffle(list.filter(function (x) { return x.cat === parts[2]; }));
        start(section, list);
      });
    });
  }

  function start(section, list) {
    content.innerHTML = '<p class="src-note">Loading the tracings…</p>';
    loadWaves(section, function (ok) {
      if (!ok) { content.innerHTML = '<p class="src-note">The tracing file did not load. Check your connection and try again.</p>'; return; }
      state = { section: section, list: list, at: 0, right: 0, results: [], requeued: {} };
      renderQuestion();
    });
  }

  function choicesFor(x) {
    var cat = data.cats[x.cat], banned = {}, wrong = [];
    banned[x.cat] = true;
    (x.also || []).forEach(function (k) { banned[k] = true; });
    cat.confuse.forEach(function (k) { if (!banned[k] && wrong.length < 3 && data.cats[k]) { wrong.push(k); banned[k] = true; } });
    shuffle(catsOf(x.section)).forEach(function (k) { if (!banned[k] && wrong.length < 3) { wrong.push(k); banned[k] = true; } });
    return shuffle([x.cat].concat(wrong));
  }

  function picture(x) {
    if (x.section === "strip") return drawStrip(window.EKG_REAL_STRIPS[x.id], x.id);
    return window.EKGSourcesDraw ? window.EKGSourcesDraw(window.EKG_REAL_TWELVE[x.id]) : "";
  }

  function renderQuestion() {
    var s = state, x = s.list[s.at], sec = data.sections[s.section];
    var choices = choicesFor(x);
    content.innerHTML = '<div class="session-top"><button type="button" id="real-back">← Real EKG practice</button><span>' + (s.at + 1) + ' / ' + s.list.length + '</span></div>' +
      '<div class="session-progress"><span style="width:' + (100 * s.at / s.list.length) + '%"></span></div>' +
      '<article class="question-card immersive-card real-card"><p class="card-number">Real ' + (s.section === "strip" ? "rhythm strip" : "12-lead") + ' · PTB-XL record ' + esc(x.id.split("-")[1]) + '</p>' +
      '<div class="wb-sticky"><div class="tw-ekg' + (s.section === "strip" ? " real-strip" : "") + '">' + picture(x) + '</div></div>' +
      '<h3 class="exq-q">' + esc(sec.question) + '</h3>' +
      '<div class="choices" id="real-choices">' + choices.map(function (k, i) {
        return '<button class="choice" type="button" data-c="' + esc(k) + '"><span>' + "ABCD"[i] + '</span>' + esc(data.cats[k].name) + '</button>';
      }).join("") + '</div><div id="real-after" hidden></div></article>';
    el("real-back").addEventListener("click", renderHome);
    content.querySelectorAll("#real-choices .choice").forEach(function (b) { b.addEventListener("click", function () { pick(b); }); });
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }

  function pick(button) {
    var s = state, x = s.list[s.at], ok = button.getAttribute("data-c") === x.cat, cat = data.cats[x.cat];
    content.querySelectorAll("#real-choices .choice").forEach(function (b) {
      b.disabled = true;
      if (b.getAttribute("data-c") === x.cat) b.classList.add("correct");
      else if (b === button) b.classList.add("wrong"); else b.classList.add("dimmed");
    });
    var p = load(), prev = p.q[x.id] || { tries: 0 };
    p.q[x.id] = { right: ok, tries: prev.tries + 1 }; save(p);
    if (ok) s.right += 1;
    s.results.push({ x: x, ok: ok });
    if (!ok && !s.requeued[x.id]) { s.requeued[x.id] = true; s.list.push(x); }
    var last = s.at === s.list.length - 1;
    var after = el("real-after");
    after.innerHTML = '<p class="ld-fb ' + (ok ? "ok" : "bad") + '">' + (ok ? "Correct" : "Not quite: this one comes back at the end") + '</p>' +
      '<div class="explanation"><strong>Answer: ' + esc(cat.name) + '</strong><p>' + esc(cat.why) + '</p></div>' +
      '<div class="src-read real-read"><p class="src-read-label">Cardiologists\' statements</p><ul>' + x.labels.map(function (l) { return '<li>' + esc(l) + '</li>'; }).join("") + '</ul>' +
      (x.rate ? '<p class="src-read-label">Rate</p><p>About ' + x.rate + '/min (counted by computer)</p>' : '') +
      (x.report ? '<p class="src-read-label">Written report' + (x.lang ? ' (' + esc(x.lang) + ')' : '') + '</p><p class="src-report">' + esc(x.report) + '</p>' : '') +
      (x.translation ? '<p class="src-read-label">In English (our translation)</p><p>' + esc(x.translation) + '</p>' : '') + '</div>' +
      '<button class="primary-action full-action" id="real-next" type="button">' + (last ? "See results" : "Next EKG →") + '</button>';
    after.hidden = false;
    el("real-next").addEventListener("click", function () { if (last) renderDone(); else { s.at += 1; renderQuestion(); } });
  }

  function renderDone() {
    var s = state, firsts = {}, firstTry = [];
    s.results.forEach(function (r) { if (!firsts[r.x.id]) { firsts[r.x.id] = true; firstTry.push(r); } });
    var right = firstTry.filter(function (r) { return r.ok; }).length;
    var missed = firstTry.filter(function (r) { return !r.ok; }).map(function (r) { return r.x; });
    var section = s.section;
    content.innerHTML = '<section class="complete-panel"><span class="complete-icon">' + (right === firstTry.length ? "🎉" : "✓") + '</span>' +
      '<p class="eyebrow">Real EKG practice · ' + esc(data.sections[section].title) + '</p><h3>' + right + ' of ' + firstTry.length + ' right the first time</h3>' +
      '<ul class="fc-round-list">' + firstTry.map(function (r) {
        return '<li class="' + (r.ok ? "ok" : "bad") + '"><b>' + (r.ok ? "✓" : "✗") + '</b><strong>Record ' + esc(r.x.id.split("-")[1]) + '</strong><span>' + esc(data.cats[r.x.cat].name) + '</span></li>';
      }).join("") + '</ul><div class="session-actions">' +
      (missed.length ? '<button class="primary-action" id="real-redo" type="button">Redo the ones I missed</button>' : "") +
      '<button class="secondary-action" id="real-more" type="button">15 more</button>' +
      '<button class="secondary-action" id="real-home" type="button">Real EKG practice</button></div></section>';
    if (el("real-redo")) el("real-redo").addEventListener("click", function () { start(section, shuffle(missed)); });
    el("real-more").addEventListener("click", function () { start(section, shuffle(itemsOf(section)).slice(0, 15)); });
    el("real-home").addEventListener("click", renderHome);
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }

  launch.addEventListener("click", open);
  document.getElementById("ekg-real-back").addEventListener("click", close);
  updateLaunch();
}());
