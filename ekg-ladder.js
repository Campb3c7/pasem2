/* EKG Rhythm ladder: each rhythm group as short rounds of taps and picks on fresh strips.
   Data: window.EKG_LADDER (data/ekg-ladder.js) + window.EKG_RHYTHMS; strips: window.RhythmSynth.
   Misses come back later in the round and go into "Redo misses" (Leitner boxes). Progress:
   pasem2:ekg-ladder:progress = { rungs: { id: { stars } }, items: { "rung|rhythm": { box, at } } }. */
(function () {
  "use strict";

  // ---- strip reading helpers (pure; the validator loads these) ------------------------------
  function median(list) {
    var s = list.slice().sort(function (a, b) { return a - b; });
    return s.length ? s[Math.floor(s.length / 2)] : 0;
  }
  function intervals(qrs) { var out = []; for (var i = 1; i < qrs.length; i += 1) out.push(qrs[i] - qrs[i - 1]); return out; }
  // Early beats: the gap before them is clearly shorter than the usual gap.
  function findEarly(made) {
    var rr = intervals(made.qrs), m = median(rr), out = [];
    rr.forEach(function (gap, i) { if (gap < 0.8 * m) out.push(made.qrs[i + 1]); });
    return out;
  }
  // Dropped beats: a P wave with no QRS after it.
  function findDrops(made) {
    var out = [];
    made.atrial.forEach(function (p) {
      if (p < 0.1 || p > 5.4) return;
      var next = made.qrs.filter(function (q) { return q > p + 0.04; })[0];
      if (next == null || next - p > 0.5) out.push({ p: p, until: next == null ? Math.min(6, p + 0.9) : next });
    });
    return out;
  }
  // The pause: the one gap much longer than the others.
  function findGap(made) {
    var rr = intervals(made.qrs), m = median(rr), best = -1;
    rr.forEach(function (gap, i) { if (gap > 1.8 * m && (best < 0 || gap > rr[best])) best = i; });
    return best < 0 ? null : { from: made.qrs[best], to: made.qrs[best + 1] };
  }
  // P to the QRS that follows it (PR), if one follows closely enough.
  function prPairs(made) {
    return made.atrial.map(function (p) {
      var next = made.qrs.filter(function (q) { return q > p + 0.04; })[0];
      return { p: p, q: next != null && next - p <= 0.5 ? next : null };
    });
  }
  function usable(made, kind, rhythm) {
    if (kind === "tapQrs") return made.qrs.filter(function (t) { return t > 0.04 && t < 5.96; }).length >= 3;
    if (kind === "tapP") return made.atrial.length >= 4;
    if (kind === "tapEarly" || kind === "early") return findEarly(made).length >= 1;
    if (kind === "tapDrop") return findDrops(made).length >= 1;
    if (kind === "tapGap") return !!findGap(made);
    return !!rhythm;
  }
  var helpers = { findEarly: findEarly, findDrops: findDrops, findGap: findGap, prPairs: prPairs, usable: usable };
  if (typeof window !== "undefined") window.EkgLadderHelpers = helpers;
  if (typeof document === "undefined") return;

  var data = window.EKG_LADDER, rhythms = window.EKG_RHYTHMS, synth = window.RhythmSynth;
  var launch = document.getElementById("ekg-ladder-launch");
  var view = document.getElementById("ekg-ladder-view");
  var content = document.getElementById("ekg-ladder-content");
  var studyView = document.getElementById("study-view");
  if (!data || !rhythms || !synth || !launch || !view || !content) return;

  var KEY = "pasem2:ekg-ladder:progress";
  var RETURN_GAP = 2, REVIEW_LENGTH = 10;
  var BOX_WAIT = [0, 5 * 60e3, 30 * 60e3, 24 * 3600e3, 3 * 24 * 3600e3];
  var FAMILY = { sinus: "Sinus", atrial: "Atrial", junctional: "Junctional", ventricular: "Ventricular", blocks: "AV block", premature: "Early beat" };
  var NAME_MARK = { sinus: "rr", atrial: "p", junctional: "p", ventricular: "wide", blocks: "pr", premature: "early" };

  var byId = {}, all = [];
  rhythms.groups.forEach(function (g) { g.rhythms.forEach(function (r) { r.group = g; byId[r.id] = r; all.push(r); }); });
  var readable = all.filter(function (r) { return r.steps; });
  var rungById = {}, rungList = [];
  data.groups.forEach(function (g) { g.rungs.forEach(function (r) { r.groupRef = g; rungById[r.id] = r; rungList.push(r); }); });
  var state = null;

  function esc(v) { return String(v == null ? "" : v).replace(/[&<>'"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c]; }); }
  function shuffle(items) { var c = items.slice(); for (var i = c.length - 1; i > 0; i -= 1) { var j = Math.floor(Math.random() * (i + 1)); var v = c[i]; c[i] = c[j]; c[j] = v; } return c; }
  function el(id) { return content.querySelector("#" + id); }

  // ---- progress ------------------------------------------------------------------------------
  function load() { try { var v = JSON.parse(localStorage.getItem(KEY) || "{}"); v.rungs = v.rungs || {}; v.items = v.items || {}; return v; } catch (e) { return { rungs: {}, items: {} }; } }
  function save(p) { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) {} }
  function stars(id) { var r = load().rungs[id]; return r ? r.stars : 0; }
  function setStars(id, n) { var p = load(); var r = p.rungs[id] || { stars: 0 }; r.stars = Math.max(r.stars, n); p.rungs[id] = r; save(p); }
  function recordItem(key, right) {
    var p = load(), item = p.items[key];
    if (right) { if (item) { item.box += 1; item.at = Date.now(); if (item.box >= BOX_WAIT.length) delete p.items[key]; } }
    else p.items[key] = { box: 0, at: Date.now() };
    save(p);
  }
  function dueItems() {
    var p = load(), now = Date.now();
    return Object.keys(p.items).filter(function (k) {
      var it = p.items[k], parts = k.split("|");
      return rungById[parts[0]] && byId[parts[1]] && now - it.at >= BOX_WAIT[Math.min(it.box, BOX_WAIT.length - 1)];
    }).sort(function (a, b) { return p.items[a].box - p.items[b].box; });
  }
  function nextRung() { return rungList.find(function (r) { return !stars(r.id); }) || null; }
  function starText(n, max) { var s = ""; for (var i = 0; i < (max || 3); i += 1) s += i < n ? "★" : "☆"; return s; }

  // ---- strips and overlays ------------------------------------------------------------------
  function make(rhythm, kind) {
    var made = synth.make(rhythm.gen);
    for (var i = 0; i < 25 && !usable(made, kind, rhythm); i += 1) made = synth.make(rhythm.gen);
    return made;
  }
  function x(t) { return (t * 150).toFixed(1); }
  function draw(svg, html) { svg.insertAdjacentHTML("beforeend", '<g class="ld-ov">' + html + '</g>'); }
  function dot(t, label, cls) { return '<circle class="ld-dot ' + (cls || "") + '" cx="' + x(t) + '" cy="20" r="10"/><text class="ld-dot-t" x="' + x(t) + '" y="24" text-anchor="middle">' + label + '</text>'; }
  function cross(t, y) { return '<text class="ld-x" x="' + x(t) + '" y="' + (y || 26) + '" text-anchor="middle">✕</text>'; }
  function bracket(a, b, y, label, cls) {
    return '<path class="ld-br ' + (cls || "") + '" d="M' + x(a) + ' ' + (y - 5) + ' V' + y + ' H' + x(b) + ' V' + (y - 5) + '"/>' +
      (label ? '<text class="ld-br-t ' + (cls || "") + '" x="' + ((a + b) * 75).toFixed(1) + '" y="' + (y + 12) + '" text-anchor="middle">' + label + '</text>' : "");
  }
  function overlay(svg, made, type, rhythm) {
    var html = "", plab = rhythm && rhythm.gen.gen === "flutter" ? "F" : "P";
    if (type === "qrs") made.qrs.forEach(function (t, i) { html += dot(t, i + 1); });
    if (type === "p") {
      if (!made.atrial.length) html += '<text class="ld-p" x="450" y="30" text-anchor="middle">no P waves</text>';
      made.atrial.forEach(function (t) { html += '<text class="ld-p" x="' + x(t) + '" y="30" text-anchor="middle">' + plab + '</text>'; });
    }
    if (type === "rr") {
      var m = median(intervals(made.qrs));
      intervals(made.qrs).forEach(function (gap, i) {
        html += bracket(made.qrs[i] + 0.02, made.qrs[i + 1] - 0.02, 26, gap.toFixed(2), Math.abs(gap - m) > 0.12 * m ? "bad" : "ok");
      });
    }
    if (type === "wide") made.qrs.forEach(function (t, i) {
      var w = made.wide && made.wide[i];
      html += '<rect class="ld-zone ' + (w ? "bad" : "ok") + '" x="' + x(t - (w ? 0.05 : 0.035)) + '" y="18" width="' + (w ? 27 : 12) + '" height="150" rx="3"/>';
    });
    if (type === "early") findEarly(made).forEach(function (t) {
      html += '<rect class="ld-zone bad" x="' + x(t - 0.22) + '" y="18" width="' + (0.4 * 150) + '" height="150" rx="5"/><text class="ld-tag" x="' + x(t) + '" y="14" text-anchor="middle">early</text>';
    });
    if (type === "pr") prPairs(made).forEach(function (pair) {
      if (pair.q != null) html += bracket(pair.p, pair.q, 150, pair.q - pair.p > 0.2 ? (pair.q - pair.p).toFixed(2) : "", pair.q - pair.p > 0.205 ? "bad" : "ok");
      else if (pair.p > 0.05 && pair.p < 5.9) html += cross(pair.p, 30);
      if (pair.p > 0.02 && pair.p < 5.98) html += '<text class="ld-p" x="' + x(pair.p) + '" y="44" text-anchor="middle">P</text>';
    });
    if (type === "drop") findDrops(made).forEach(function (d) { html += cross(d.p, 30) + '<text class="ld-tag" x="' + x(d.p) + '" y="14" text-anchor="middle">no QRS</text>'; });
    if (type === "gap") { var gp = findGap(made); if (gp) html += bracket(gp.from + 0.05, gp.to - 0.05, 30, "pause", "bad"); }
    if (html) draw(svg, html);
  }
  function svgTime(svg, event) {
    var pt = svg.createSVGPoint(); pt.x = event.clientX; pt.y = event.clientY;
    var ctm = svg.getScreenCTM();
    return ctm ? pt.matrixTransform(ctm.inverse()).x / 150 : null;
  }

  // ---- building questions --------------------------------------------------------------------
  function poolOf(rung) {
    if (rung.kind === "pick") return Object.keys(rung.answers).map(function (id) { return byId[id]; });
    if (rung.kind === "which") { var ids = []; rung.pairs.forEach(function (p) { p.forEach(function (id) { if (ids.indexOf(id) < 0) ids.push(id); }); }); return ids.map(function (id) { return byId[id]; }); }
    if (rung.kind === "family") return readable;
    if (rung.pool === "all") return all;
    return rung.pool.map(function (id) { return byId[id]; });
  }
  function buildQuestion(rung, rhythm) {
    var q = { rung: rung, rhythm: rhythm, kind: rung.kind };
    var pool = poolOf(rung);
    if (rung.kind === "pick") {
      var keys = Object.keys(rung.options), answer = rung.answers[rhythm.id];
      if (keys.length > 4) {
        var keep = shuffle(keys.filter(function (k) { return k !== answer; })).slice(0, 3);
        keys = keys.filter(function (k) { return k === answer || keep.indexOf(k) >= 0; });
      }
      q.labels = keys.map(function (k) { return rung.options[k]; });
      q.correct = keys.indexOf(answer);
      q.made = make(rhythm, rung.mark === "early" ? "early" : "pick");
      q.mark = rung.mark;
    } else if (rung.kind === "name") {
      var others = rhythm.confuse.filter(function (id) { return pool.some(function (r) { return r.id === id; }); }).slice(0, 3);
      var spare = shuffle(pool.filter(function (r) { return r.id !== rhythm.id && others.indexOf(r.id) < 0; }));
      while (others.length < 3 && spare.length) others.push(spare.shift().id);
      var ids = shuffle([rhythm.id].concat(others));
      q.labels = ids.map(function (id) { return byId[id].name; });
      q.correct = ids.indexOf(rhythm.id);
      q.made = make(rhythm, "name");
      q.mark = NAME_MARK[rhythm.group.id];
    } else if (rung.kind === "family") {
      var fam = rhythm.group.id;
      var fams = [fam].concat(shuffle(Object.keys(FAMILY).filter(function (f) { return f !== fam; })).slice(0, 3));
      fams = Object.keys(FAMILY).filter(function (f) { return fams.indexOf(f) >= 0; });
      q.labels = fams.map(function (f) { return FAMILY[f]; });
      q.correct = fams.indexOf(fam);
      q.made = make(rhythm, "name");
      q.mark = NAME_MARK[fam];
    } else if (rung.kind === "which") {
      var pairs = rung.pairs.filter(function (p) { return p.indexOf(rhythm.id) >= 0; });
      var pair = pairs[Math.floor(Math.random() * pairs.length)];
      var other = byId[pair[0] === rhythm.id ? pair[1] : pair[0]];
      q.order = shuffle([rhythm, other]);
      q.strips = q.order.map(function (r) { return make(r, "name"); });
      q.labels = ["Strip A", "Strip B"];
      q.correct = q.order.indexOf(rhythm);
    } else {
      q.made = make(rhythm, rung.kind);
    }
    return q;
  }
  function roundQueue(rung) {
    var pool = poolOf(rung), queue = [];
    while (queue.length < rung.n) {
      var batch = shuffle(pool);
      if (queue.length && batch.length > 1 && batch[0] === queue[queue.length - 1]) batch.push(batch.shift());
      queue = queue.concat(batch);
    }
    return queue.slice(0, rung.n).map(function (r) { return { rung: rung, rhythm: r, retry: false }; });
  }

  // ---- open / close / home ------------------------------------------------------------------
  function open() {
    studyView.hidden = true;
    document.querySelectorAll(".walkthrough-view").forEach(function (s) { s.hidden = true; });
    view.hidden = false;
    renderHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function close() {
    state = null; view.hidden = true; studyView.hidden = false; content.innerHTML = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function top(label, back) {
    return '<div class="session-top"><button type="button" id="ld-back">← ' + esc(back || "Rhythm ladder") + '</button><span>' + esc(label) + '</span></div>';
  }

  function renderHome() {
    state = null;
    var totalStars = 0, maxStars = rungList.length * 3;
    rungList.forEach(function (r) { totalStars += stars(r.id); });
    var next = nextRung(), due = dueItems().length;
    var html = '<div class="drill-heading"><p class="eyebrow">EKG · tap and pick</p><h2>Rhythm ladder</h2>' +
      '<p>Short rounds. One thing at a time.</p><span class="diseases-count-pill">★ ' + totalStars + ' / ' + maxStars + '</span></div>';
    html += '<div class="murmur-quick rs-quick">' +
      (next ? '<button class="murmur-quick-card" type="button" id="ld-continue"><span>Next round</span><strong>' + esc(next.title) + ' →</strong><small>' + esc(next.groupRef.title) + ' · ' + next.n + ' questions</small></button>'
        : '<button class="murmur-quick-card" type="button" id="ld-continue"><span>Every round done</span><strong>Name it: everything →</strong><small>Fresh strips every time</small></button>') +
      '<button class="murmur-quick-card" type="button" id="ld-review"' + (due ? "" : " disabled") + '><span>Misses</span><strong>Redo misses' + (due ? " (" + due + ")" : "") + ' →</strong><small>' + (due ? "Up to " + REVIEW_LENGTH + " quick ones" : "Nothing waiting") + '</small></button></div>';
    html += '<div class="struggle-group-list">';
    data.groups.forEach(function (g, i) {
      var got = 0; g.rungs.forEach(function (r) { got += stars(r.id); });
      var done = g.rungs.filter(function (r) { return stars(r.id); }).length;
      html += '<button class="struggle-group-card" type="button" data-ld-group="' + g.id + '"><span class="drill-section-number">' + String(i + 1).padStart(2, "0") + '</span><strong>' + esc(g.title) + '</strong><small>' + done + ' / ' + g.rungs.length + '</small><span class="murmur-mini-track"><span style="width:' + Math.round(got / (g.rungs.length * 3) * 100) + '%"></span></span></button>';
    });
    html += '</div>';
    content.innerHTML = html;
    el("ld-continue").addEventListener("click", function () { startRound(next || rungById["ld-m-name"]); });
    el("ld-review").addEventListener("click", startReview);
    content.querySelectorAll("[data-ld-group]").forEach(function (b) {
      b.addEventListener("click", function () { renderGroup(data.groups.find(function (g) { return g.id === b.dataset.ldGroup; })); });
    });
  }

  function renderGroup(group) {
    state = null;
    var firstOpen = group.rungs.find(function (r) { return !stars(r.id); });
    var html = top(group.title) + '<div class="drill-heading"><p class="eyebrow">Rounds</p><h2>' + esc(group.title) + '</h2></div><div class="ld-rungs">';
    group.rungs.forEach(function (r, i) {
      var s = stars(r.id);
      html += '<button type="button" class="ld-rung' + (r === firstOpen ? " up" : "") + (s ? " done" : "") + '" data-ld-rung="' + r.id + '"><span class="ld-rung-n">' + (i + 1) + '</span><strong>' + esc(r.title) + '</strong><span class="ld-stars">' + (s ? starText(s) : r === firstOpen ? "Start →" : "") + '</span></button>';
    });
    html += '</div>';
    content.innerHTML = html;
    el("ld-back").addEventListener("click", renderHome);
    content.querySelectorAll("[data-ld-rung]").forEach(function (b) { b.addEventListener("click", function () { startRound(rungById[b.dataset.ldRung]); }); });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---- rounds --------------------------------------------------------------------------------
  function startRound(rung) {
    state = { title: rung.title, sub: rung.groupRef.title, rung: rung, steps: roundQueue(rung), pos: 0, total: rung.n, firstRight: 0, streak: 0 };
    renderStep();
  }
  function startReview() {
    var keys = dueItems().slice(0, REVIEW_LENGTH);
    if (!keys.length) { renderHome(); return; }
    var steps = shuffle(keys).map(function (k) { var p = k.split("|"); return { rung: rungById[p[0]], rhythm: byId[p[1]], retry: false }; });
    state = { title: "Redo misses", sub: "Misses", rung: null, steps: steps, pos: 0, total: steps.length, firstRight: 0, streak: 0 };
    renderStep();
  }
  function dotsHtml() {
    var html = '<div class="ld-dots">';
    state.steps.forEach(function (s, i) {
      if (s.retry) return;
      html += '<span class="' + (s.result === true ? "ok" : s.result === false ? "bad" : i === state.pos ? "here" : "") + '"></span>';
    });
    return html + '</div>';
  }
  function renderStep() {
    if (state.pos >= state.steps.length) { renderDone(); return; }
    var step = state.steps[state.pos], rung = step.rung, q = buildQuestion(rung, step.rhythm);
    step.q = q;
    var ask = rung.kind === "pick" ? rung.ask : rung.kind === "name" ? "Name it." : rung.kind === "family" ? "Which group?" :
      rung.kind === "which" ? "Which is " + step.rhythm.name + "?" : rung.kind === "tapQrs" ? "Tap every QRS." : rung.kind === "tapP" ? "Tap every P wave." :
      rung.kind === "tapEarly" ? "Tap the early beat." : rung.kind === "tapDrop" ? "Tap the P with no QRS." : "Tap the pause.";
    var stripsHtml = rung.kind === "which"
      ? q.strips.map(function (m, i) { return '<div class="ld-pair"><p class="ld-pair-label" id="ld-label-' + i + '">Strip ' + "AB"[i] + '</p><div class="rs-box">' + m.svg + '</div></div>'; }).join("")
      : '<div class="wb-sticky"><div class="rs-box' + (/^tap/.test(rung.kind) ? " ld-tap" : "") + '" id="ld-strip">' + q.made.svg + '</div></div>';
    var isTap = /^tap/.test(rung.kind);
    content.innerHTML = top(state.title + (state.rung ? "" : " · " + rung.title), "Rhythm ladder") + dotsHtml() +
      '<div class="ld-meta"><span>' + (step.retry ? "Again" : "") + '</span><span class="ld-streak" id="ld-streak">' + (state.streak >= 2 ? "🔥 " + state.streak : "") + '</span></div>' +
      '<article class="question-card immersive-card ld-card">' + stripsHtml + '<h3 class="ld-ask">' + esc(ask) + '</h3>' +
      (isTap ? '<div class="ld-tap-row"><span id="ld-tap-count"></span><button type="button" class="lh-redraw" id="ld-show">Show me</button></div>'
        : '<div class="choices">' + q.labels.map(function (l, i) { return '<button class="choice" type="button" data-choice="' + i + '"><span>' + "ABCD"[i] + '</span>' + esc(l) + '</button>'; }).join("") + '</div>') +
      '<p class="ld-fb" id="ld-fb" hidden></p></article>' +
      '<button class="primary-action full-action" id="ld-next" type="button" hidden>Next →</button>';
    el("ld-back").addEventListener("click", renderHome);
    el("ld-next").addEventListener("click", function () { state.pos += 1; renderStep(); });
    if (isTap) bindTap(step); else bindChoices(step);
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }

  function finish(step, right, line) {
    if (step.done) return;
    step.done = true;
    var key = step.rung.id + "|" + step.rhythm.id;
    recordItem(key, right);
    if (!step.retry) { step.result = right; if (right) state.firstRight += 1; }
    state.streak = right ? state.streak + 1 : 0;
    if (!right && !step.retry && state.rung) state.steps.splice(Math.min(state.pos + 1 + RETURN_GAP, state.steps.length), 0, { rung: step.rung, rhythm: step.rhythm, retry: true });
    var fb = el("ld-fb");
    fb.hidden = false;
    fb.className = "ld-fb " + (right ? "ok" : "bad");
    fb.innerHTML = line;
    el("ld-streak").textContent = state.streak >= 2 ? "🔥 " + state.streak : "";
    var dots = content.querySelector(".ld-dots");
    if (dots) dots.outerHTML = dotsHtml();
    var next = el("ld-next");
    next.hidden = false;
    next.textContent = state.pos + 1 >= state.steps.length ? "Finish →" : "Next →";
  }

  function bindChoices(step) {
    var q = step.q, group = content.querySelector(".choices");
    group.querySelectorAll("[data-choice]").forEach(function (b) {
      b.addEventListener("click", function () {
        if (step.done) return;
        var pick = Number(b.dataset.choice), right = pick === q.correct;
        group.querySelectorAll("[data-choice]").forEach(function (o) {
          var i = Number(o.dataset.choice); o.disabled = true;
          o.classList.add(i === q.correct ? "correct" : i === pick ? "wrong" : "dimmed");
        });
        var rung = step.rung, line;
        if (rung.kind === "which") {
          q.order.forEach(function (r, i) { var lab = el("ld-label-" + i); lab.textContent = "Strip " + "AB"[i] + " · " + r.name; lab.classList.add(r === step.rhythm ? "ok" : "other"); });
          content.querySelectorAll(".ld-pair svg").forEach(function (svg, i) { overlay(svg, q.strips[i], NAME_MARK[q.order[i].group.id], q.order[i]); });
          line = right ? "✓" : "✗ Strip " + "AB"[q.correct] + ".";
        } else {
          overlay(el("ld-strip").querySelector("svg"), q.made, q.mark, step.rhythm);
          if (rung.kind === "pick") line = (right ? "✓ " : "✗ " + esc(q.labels[q.correct]) + ". ") + '<small>' + esc(rung.rule) + extra(q) + '</small>';
          else if (rung.kind === "family") line = (right ? "✓ " : "✗ " + esc(q.labels[q.correct]) + ". ") + '<small>' + esc(step.rhythm.name) + '</small>';
          else line = right ? "✓ " + esc(step.rhythm.name) : "✗ " + esc(step.rhythm.name) + '. <small>' + esc(step.rhythm.clue) + '</small>';
        }
        finish(step, right, line);
      });
    });
  }
  function extra(q) {
    if (q.mark === "qrs" && !q.made.chaotic) return " " + q.made.count + " × 10 ≈ " + q.made.count * 10 + ".";
    return "";
  }

  // ---- tapping ---------------------------------------------------------------------------------
  function bindTap(step) {
    var q = step.q, made = q.made, kind = step.rung.kind;
    var box = el("ld-strip"), svg = box.querySelector("svg"), counter = el("ld-tap-count");
    var errors = 0, found = [];
    var targets = kind === "tapQrs" ? made.qrs.filter(function (t) { return t > 0.04 && t < 5.96; })
      : kind === "tapP" ? made.atrial.filter(function (t) { return t > 0.04 && t < 5.96 && !made.qrs.some(function (qq) { return Math.abs(qq - t) < 0.06; }); }) : null;
    var tol = kind === "tapQrs" ? 0.1 : 0.075;
    if (targets) counter.textContent = "0 found";
    function multiDone(right) {
      box.classList.remove("ld-tap");
      var html = "";
      if (kind === "tapQrs") Array.prototype.forEach.call(svg.querySelectorAll(".ld-ov"), function (g) { if (!g.querySelector(".ld-x")) svg.removeChild(g); });
      targets.forEach(function (t, i) {
        var missed = found.indexOf(t) < 0;
        if (kind === "tapQrs") html += dot(t, i + 1, missed ? "missed" : "");
        else if (missed) html += '<text class="ld-p missed" x="' + x(t) + '" y="30" text-anchor="middle">P</text>';
      });
      if (html) draw(svg, html);
      var line = kind === "tapQrs" ? targets.length + " × 10 = " + targets.length * 10 + " bpm"
        : made.atrial.length + " P waves · " + made.qrs.length + " QRS" + (made.atrial.length > made.qrs.length + 1 ? " → some P waves get no QRS" : "");
      finish(step, right, (right ? "✓ " : "✗ ") + esc(line));
    }
    function single(right) {
      box.classList.remove("ld-tap");
      overlay(svg, made, kind === "tapEarly" ? "early" : kind === "tapDrop" ? "drop" : "gap");
      var line = kind === "tapEarly" ? "early beat, then a pause" : kind === "tapDrop" ? (step.rhythm.id === "ekr-avb2i" ? "PR got longer, then this P dropped" : "PR stayed the same, then this P dropped") : "no P, no QRS";
      finish(step, right, (right ? "✓ " : "✗ ") + '<small>' + esc(line) + '</small>');
    }
    svg.addEventListener("click", function (event) {
      if (step.done) return;
      var t = svgTime(svg, event);
      if (t == null) return;
      if (targets) {
        var hit = targets.filter(function (g) { return Math.abs(g - t) <= tol && found.indexOf(g) < 0; })[0];
        var already = found.some(function (g) { return Math.abs(g - t) <= tol; });
        if (hit != null) {
          found.push(hit);
          draw(svg, kind === "tapQrs" ? dot(hit, found.length) : '<text class="ld-p" x="' + x(hit) + '" y="30" text-anchor="middle">P</text>');
          counter.textContent = found.length + " found";
          if (found.length === targets.length) multiDone(errors === 0);
        } else if (!already && !(kind === "tapP" && made.atrial.some(function (a) { return Math.abs(a - t) <= tol; }))) {
          errors += 1;
          draw(svg, cross(t, 26));
          if (errors >= 3) multiDone(false);
        }
        return;
      }
      var right = false;
      if (kind === "tapEarly") right = findEarly(made).some(function (e) { return t >= e - 0.25 && t <= e + 0.15; });
      if (kind === "tapDrop") right = findDrops(made).some(function (d) { return t >= d.p - 0.12 && t <= d.until - 0.06; });
      if (kind === "tapGap") { var gp = findGap(made); right = !!gp && t > gp.from + 0.15 && t < gp.to - 0.04; }
      if (!right) draw(svg, cross(t, 26));
      single(right);
    });
    el("ld-show").addEventListener("click", function () {
      if (step.done) return;
      if (targets) multiDone(false); else single(false);
    });
  }

  // ---- end of a round --------------------------------------------------------------------------
  function renderDone() {
    var s = state, pct = s.firstRight / Math.max(s.total, 1);
    var got = pct >= 0.99 ? 3 : pct >= 0.7 ? 2 : 1;
    if (s.rung) setStars(s.rung.id, got);
    var next = s.rung ? (s.rung.groupRef.rungs[s.rung.groupRef.rungs.indexOf(s.rung) + 1] || nextRung()) : null;
    if (next === s.rung) next = null;
    var groupDone = s.rung ? s.rung.groupRef.rungs.filter(function (r) { return stars(r.id); }).length : 0;
    content.innerHTML = '<section class="complete-panel ld-done"><span class="ld-big-stars">' + starText(s.rung ? got : 0, s.rung ? 3 : 0) + (s.rung ? "" : "✓") + '</span>' +
      '<h3>' + s.firstRight + ' / ' + s.total + '</h3>' +
      (s.rung ? '<p>' + esc(s.rung.groupRef.title) + ' · ' + groupDone + ' of ' + s.rung.groupRef.rungs.length + ' rounds</p>' : '<p>' + dueItems().length + ' left</p>') +
      '<div class="session-actions">' +
      (next ? '<button class="primary-action" id="ld-next" type="button">' + esc(next.title) + ' →</button>' : s.rung ? "" : (dueItems().length ? '<button class="primary-action" id="ld-next" type="button">More misses →</button>' : "")) +
      '<button class="secondary-action" id="ld-again" type="button">Again</button><button class="secondary-action" id="ld-home" type="button">Ladder</button></div></section>';
    var nb = el("ld-next");
    if (nb) nb.addEventListener("click", function () { if (next) startRound(next); else startReview(); });
    el("ld-again").addEventListener("click", function () { if (s.rung) startRound(s.rung); else startReview(); });
    el("ld-home").addEventListener("click", renderHome);
  }

  launch.addEventListener("click", open);
  document.getElementById("ekg-ladder-back").addEventListener("click", close);
}());
