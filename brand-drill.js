/*
  Brand ⇄ Generic drill. Used by the Cardio Part 3 Medications tool (diseases.js,
  config.brands) as its "Brand ⇄ Generic" tab, and for the "Brand names" box on
  each medication. Data: data/brands-cardio-part-3.js (window.CARDIO3_BRANDS).

  Directions: "bg" = see the brand, name the generic; "gb" = see the generic,
  name a brand. Modes: multiple choice, flashcards, type it, and the full list.
  A miss goes back into the round until it is right. Progress (localStorage,
  data.progressKey): items[id] = { bg: true/false (last try), gb: ..., miss: n }.
*/
(function () {
  "use strict";

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function shuffle(list) {
    var copy = list.slice();
    for (var i = copy.length - 1; i > 0; i -= 1) { var j = Math.floor(Math.random() * (i + 1)); var t = copy[i]; copy[i] = copy[j]; copy[j] = t; }
    return copy;
  }
  function pick(list) { return list[Math.floor(Math.random() * list.length)]; }
  function brandText(item) { return item.brands.join(" / "); }
  function norm(text) { return String(text || "").toLowerCase().replace(/\([^)]*\)/g, "").replace(/[^a-z0-9]/g, ""); }
  function editDistance(a, b) {
    var row = [];
    for (var j = 0; j <= b.length; j += 1) row[j] = j;
    for (var i = 1; i <= a.length; i += 1) {
      var prev = row[0]; row[0] = i;
      for (var k = 1; k <= b.length; k += 1) {
        var tmp = row[k];
        row[k] = Math.min(row[k] + 1, row[k - 1] + 1, prev + (a[i - 1] === b[k - 1] ? 0 : 1));
        prev = tmp;
      }
    }
    return row[b.length];
  }

  // ---- progress ----------------------------------------------------------------
  function load(data) {
    try { var raw = JSON.parse(window.localStorage.getItem(data.progressKey) || "null"); if (raw && raw.items) return raw; } catch (e) { /* ignore */ }
    return { items: {} };
  }
  function save(data, progress) {
    try { window.localStorage.setItem(data.progressKey, JSON.stringify(progress)); } catch (e) { /* ignore */ }
  }
  function record(data, id, dir, right) {
    var progress = load(data);
    var entry = progress.items[id] || (progress.items[id] = { miss: 0 });
    entry[dir] = right;
    if (!right) entry.miss = (entry.miss || 0) + 1;
    save(data, progress);
  }
  function mastered(progress, item) { var e = progress.items[item.id]; return !!(e && e.bg && e.gb); }
  function isMiss(progress, item) { var e = progress.items[item.id]; return !!(e && (e.bg === false || e.gb === false)); }

  // ---- the "Brand names" box shown on a medication ------------------------------
  function boxFor(data, medId) {
    if (!data) return "";
    var items = data.items.filter(function (item) { return item.meds.indexOf(medId) !== -1; });
    if (!items.length) return "";
    return '<section class="brand-box"><h3>Brand names <small>generic → brand</small></h3><ul>' + items.map(function (item) {
      return '<li><span class="brand-generic">' + esc(item.generic) + '</span><span class="brand-arrow">→</span><strong class="brand-name">' + esc(brandText(item)) + '</strong>' + (item.note ? '<small>' + esc(item.note) + '</small>' : '') + '</li>';
    }).join("") + '</ul></section>';
  }
  function brandsLine(data, medId) {
    if (!data) return "";
    var items = data.items.filter(function (item) { return item.meds.indexOf(medId) !== -1; });
    if (!items.length) return "";
    return '<span class="brand-card-line">' + items.map(function (item) { return esc(item.brands[0]); }).join(" · ") + '</span>';
  }

  // ---- the drill ------------------------------------------------------------------
  function createDrill(host, data) {
    var classFilter = "all";
    var state = null;
    var dirChoice = "mix";
    var ui = {};

    function pool() {
      return data.items.filter(function (item) { return classFilter === "all" || item.cls === classFilter; });
    }
    function classes() {
      var seen = [];
      data.items.forEach(function (item) { if (seen.indexOf(item.cls) === -1) seen.push(item.cls); });
      return seen;
    }
    function dirFor(choice) { return choice === "mix" ? (Math.random() < 0.5 ? "bg" : "gb") : choice; }

    // ---- home ----
    function home() {
      state = null;
      var progress = load(data);
      var items = pool();
      var done = items.filter(function (item) { return mastered(progress, item); }).length;
      var misses = items.filter(function (item) { return isMiss(progress, item); }).length;
      var pct = items.length ? Math.round(done / items.length * 100) : 0;
      var html = '<div class="diseases-heading compact"><h2>Brand ⇄ Generic</h2><p>Every Cardio 3 drug with a common US brand: ' + data.items.length + ' generics. A drug counts as known once you got it right <strong>both ways</strong> (brand → generic and generic → brand) on your last try. Misses come back in the round until you get them.</p></div>' +
        '<div class="brand-meter"><div><strong>' + done + ' / ' + items.length + '</strong><span>known both ways' + (classFilter === "all" ? "" : " · " + esc(classFilter)) + '</span></div><div class="brand-meter-bar"><span style="width:' + pct + '%"></span></div>' + (misses ? '<div><strong>' + misses + '</strong><span>missed last time</span></div>' : '') + '</div>' +
        '<p class="practice-picker-label">Drug class</p><div class="flash-topic-row brand-class-row">' +
        ['all'].concat(classes()).map(function (cls) {
          var n = cls === "all" ? data.items.length : data.items.filter(function (item) { return item.cls === cls; }).length;
          return '<button type="button" class="flash-topic brand-class' + (cls === classFilter ? " active" : "") + '" data-cls="' + esc(cls) + '">' + esc(cls === "all" ? "All classes" : cls) + ' <small>' + n + '</small></button>';
        }).join("") + '</div>' +
        '<p class="practice-picker-label">Direction</p><div class="flash-topic-row">' +
        [["mix", "Both ways (mixed)"], ["bg", "Brand → Generic"], ["gb", "Generic → Brand"]].map(function (d) {
          return '<button type="button" class="flash-topic brand-dir' + (d[0] === dirChoice ? " active" : "") + '" data-dir="' + d[0] + '">' + d[1] + '</button>';
        }).join("") + '</div>' +
        '<div class="brand-mode-grid">' +
        '<button type="button" class="brand-mode" data-mode="quick"><strong>Quick 20</strong><small>Multiple choice, weakest first</small></button>' +
        '<button type="button" class="brand-mode" data-mode="mc"><strong>All ' + items.length + ' · multiple choice</strong><small>Pick from 4 (A-D keys)</small></button>' +
        '<button type="button" class="brand-mode" data-mode="flash"><strong>Flashcards</strong><small>Say it, flip (Space), Again / Got it</small></button>' +
        '<button type="button" class="brand-mode" data-mode="type"><strong>Type it</strong><small>Hardest: spell the name yourself</small></button>' +
        '<button type="button" class="brand-mode" data-mode="both"><strong>Both ways, every drug</strong><small>Each drug asked brand → generic AND generic → brand</small></button>' +
        '<button type="button" class="brand-mode" data-mode="miss"' + (misses ? "" : " disabled") + '><strong>My misses (' + misses + ')</strong><small>Only what you missed last time</small></button>' +
        '<button type="button" class="brand-mode" data-mode="list"><strong>See the list</strong><small>Table you can cover up</small></button>' +
        '</div>' +
        (done ? '<button type="button" class="secondary-action brand-reset" id="brand-reset">Reset brand progress</button>' : '');
      host.innerHTML = html;
      host.querySelectorAll("[data-cls]").forEach(function (b) { b.addEventListener("click", function () { classFilter = b.dataset.cls; home(); }); });
      host.querySelectorAll("[data-dir]").forEach(function (b) { b.addEventListener("click", function () { dirChoice = b.dataset.dir; home(); }); });
      host.querySelectorAll("[data-mode]").forEach(function (b) { b.addEventListener("click", function () { start(b.dataset.mode); }); });
      if (document.getElementById("brand-reset")) document.getElementById("brand-reset").addEventListener("click", function () {
        if (window.confirm("Reset all brand/generic progress?")) { save(data, { items: {} }); home(); }
      });
    }

    function start(mode) {
      if (mode === "list") { list(false, false); return; }
      var progress = load(data);
      var items = pool();
      var cards;
      if (mode === "miss") {
        items = items.filter(function (item) { return isMiss(progress, item); });
        cards = items.map(function (item) {
          var e = progress.items[item.id] || {};
          var dir = dirChoice !== "mix" ? dirChoice : e.bg === false && e.gb !== false ? "bg" : e.gb === false && e.bg !== false ? "gb" : dirFor("mix");
          return { item: item, dir: dir };
        });
      } else if (mode === "both") {
        cards = [];
        items.forEach(function (item) { cards.push({ item: item, dir: "bg" }); cards.push({ item: item, dir: "gb" }); });
      } else {
        cards = items.map(function (item) { return { item: item, dir: dirFor(dirChoice) }; });
      }
      cards = shuffle(cards);
      if (mode === "quick") {
        var score = function (card) { var e = progress.items[card.item.id]; if (!e) return 1; if (e[card.dir] === false) return 0; if (e[card.dir] === true) return 2; return 1; };
        cards.sort(function (a, b) { return score(a) - score(b); });
        cards = shuffle(cards.slice(0, 20));
      }
      if (!cards.length) { home(); return; }
      var kind = mode === "flash" ? "flash" : mode === "type" ? "type" : "mc";
      state = { kind: kind, queue: cards, pos: 0, firstRight: 0, missedIds: {}, seen: {}, answered: false, flipped: false, label: { quick: "Quick 20", mc: "Multiple choice", flash: "Flashcards", type: "Type it", both: "Both ways", miss: "My misses" }[mode] };
      show();
    }

    function header() {
      var remaining = state.queue.length - state.pos;
      var pct = Math.round(state.pos / state.queue.length * 100);
      var missed = Object.keys(state.missedIds).length;
      return '<div class="session-top"><button type="button" id="brand-exit">← Brand ⇄ Generic</button><span>' + esc(state.label) + (classFilter === "all" ? "" : " · " + esc(classFilter)) + '</span></div><div class="session-progress"><span style="width:' + pct + '%"></span></div>' +
        '<div class="session-counter">' + remaining + ' left' + (missed ? ' · ' + missed + ' coming back' : '') + '</div>';
    }
    function promptHtml(card) {
      var item = card.item;
      if (card.dir === "bg") {
        card.shown = card.shown || pick(item.brands);
        return '<p class="brand-dir-label">Brand → generic</p><h3 class="brand-prompt">' + esc(card.shown) + '<sup>®</sup></h3><p class="brand-ask">What is the generic name?</p>';
      }
      return '<p class="brand-dir-label">Generic → brand</p><h3 class="brand-prompt generic">' + esc(item.generic) + '</h3><p class="brand-ask">What is the brand name?</p>';
    }
    function answerReveal(card) {
      var item = card.item;
      return '<div class="brand-reveal"><span class="brand-generic">' + esc(item.generic) + '</span><span class="brand-arrow">=</span><strong class="brand-name">' + esc(brandText(item)) + '</strong><small class="brand-cls">' + esc(item.cls) + '</small>' + (item.note ? '<p>' + esc(item.note) + '</p>' : '') + '</div>';
    }
    function finishCard(right) {
      var card = state.queue[state.pos];
      var key = card.item.id + "|" + card.dir;
      if (!state.seen[key]) { if (right) state.firstRight += 1; record(data, card.item.id, card.dir, right); }
      else if (right) record(data, card.item.id, card.dir, true);
      state.seen[key] = true;
      if (!right) { state.missedIds[key] = true; state.queue.push({ item: card.item, dir: card.dir }); }
    }
    function next() { state.pos += 1; state.answered = false; state.flipped = false; show(); }

    function show() {
      if (state.pos >= state.queue.length) { done(); return; }
      if (state.kind === "flash") { showFlash(); return; }
      if (state.kind === "type") { showType(); return; }
      showMc();
    }

    // ---- multiple choice ----
    function choicesFor(card) {
      if (card.choices) return card.choices;
      var item = card.item;
      var same = shuffle(data.items.filter(function (o) { return o.id !== item.id && o.cls === item.cls; }));
      var other = shuffle(data.items.filter(function (o) { return o.id !== item.id && o.cls !== item.cls; }));
      var label = function (o) { return card.dir === "bg" ? o.generic : pick(o.brands); };
      var right = card.dir === "bg" ? item.generic : pick(item.brands);
      var wrong = [];
      same.concat(other).forEach(function (o) {
        if (wrong.length >= 3) return;
        var text = label(o);
        if (norm(text) === norm(right) || wrong.some(function (w) { return norm(w) === norm(text); })) return;
        wrong.push(text);
      });
      var all = shuffle([right].concat(wrong));
      card.choices = all; card.correct = all.indexOf(right);
      return all;
    }
    function showMc() {
      var card = state.queue[state.pos];
      var choices = choicesFor(card);
      host.innerHTML = header() + '<article class="question-card immersive-card brand-card"><div class="card-number">' + esc(card.item.cls) + '</div>' + promptHtml(card) +
        '<div class="choices" id="brand-choices">' + choices.map(function (c, i) { return '<button class="choice" type="button" data-choice="' + i + '"><span>' + String.fromCharCode(65 + i) + '</span>' + esc(c) + '</button>'; }).join("") + '</div>' +
        '<div id="brand-after"></div></article><button class="primary-action full-action" id="brand-next" type="button" hidden>Next (Space) →</button>';
      wireExit();
      host.querySelectorAll("[data-choice]").forEach(function (b) { b.addEventListener("click", function () { answerMc(Number(b.dataset.choice)); }); });
      document.getElementById("brand-next").addEventListener("click", next);
    }
    function answerMc(selected) {
      if (state.answered) return;
      state.answered = true;
      var card = state.queue[state.pos];
      host.querySelectorAll("[data-choice]").forEach(function (b) {
        b.disabled = true; var c = Number(b.dataset.choice);
        if (c === card.correct) b.classList.add("correct"); else if (c === selected) b.classList.add("wrong"); else b.classList.add("dimmed");
      });
      var right = selected === card.correct;
      finishCard(right);
      document.getElementById("brand-after").innerHTML = (right ? '' : '<p class="brand-missed">Missed: this one comes back at the end.</p>') + answerReveal(card);
      document.getElementById("brand-next").hidden = false;
    }

    // ---- flashcards ----
    function showFlash() {
      var card = state.queue[state.pos];
      host.innerHTML = header() + '<article class="learn-card immersive-card brand-card"><div class="card-number">' + esc(card.item.cls) + '</div>' + promptHtml(card) +
        (state.flipped ? answerReveal(card) : '') + '</article>' +
        (state.flipped
          ? '<div class="choices flash-grade"><button class="choice" type="button" data-grade="again"><span>A</span>Again</button><button class="choice" type="button" data-grade="got"><span>B</span>Got it</button></div>'
          : '<button class="primary-action full-action" id="brand-flip" type="button">Show answer (Space)</button>');
      wireExit();
      if (document.getElementById("brand-flip")) document.getElementById("brand-flip").addEventListener("click", function () { state.flipped = true; showFlash(); });
      host.querySelectorAll("[data-grade]").forEach(function (b) { b.addEventListener("click", function () { finishCard(b.dataset.grade === "got"); next(); }); });
    }

    // ---- type it ----
    function checkTyped(card, typed) {
      var t = norm(typed);
      if (!t) return { right: false };
      var targets = card.dir === "bg" ? [card.item.generic] : card.item.brands;
      if (card.dir === "bg") {
        var paren = (card.item.generic.match(/\(([^)]*)\)/) || [])[1];
        if (paren) targets = targets.concat([paren]);
      }
      for (var i = 0; i < targets.length; i += 1) {
        var n = norm(targets[i]);
        if (n === t) return { right: true, exact: true };
        if (n.length >= 5 && editDistance(n, t) <= (n.length >= 10 ? 2 : 1)) return { right: true, exact: false, spelled: targets[i] };
      }
      return { right: false };
    }
    function showType() {
      var card = state.queue[state.pos];
      host.innerHTML = header() + '<article class="question-card immersive-card brand-card"><div class="card-number">' + esc(card.item.cls) + '</div>' + promptHtml(card) +
        '<form id="brand-type-form" class="brand-type-form" autocomplete="off"><input id="brand-type" type="text" spellcheck="false" autocapitalize="off" placeholder="Type the ' + (card.dir === "bg" ? "generic" : "brand") + ' name, then Enter"><button type="submit" class="primary-action">Check</button><button type="button" class="secondary-action" id="brand-dunno">I don\'t know</button></form>' +
        '<div id="brand-after"></div></article><button class="primary-action full-action" id="brand-next" type="button" hidden>Next (Space) →</button>';
      wireExit();
      var input = document.getElementById("brand-type");
      input.focus();
      var submit = function (typed) {
        if (state.answered) return;
        state.answered = true;
        var result = checkTyped(card, typed);
        finishCard(result.right);
        input.disabled = true;
        host.querySelectorAll("#brand-type-form button").forEach(function (b) { b.disabled = true; });
        input.classList.add(result.right ? "right" : "wrongly");
        document.getElementById("brand-after").innerHTML =
          (result.right ? '<p class="brand-right">✓ Right' + (result.exact ? '' : ': spelled <strong>' + esc(result.spelled) + '</strong>') + '</p>' : '<p class="brand-missed">✗ ' + (typed ? 'Not quite. ' : '') + 'This one comes back at the end.</p>') + answerReveal(card);
        var nextBtn = document.getElementById("brand-next");
        nextBtn.hidden = false; nextBtn.focus();
      };
      document.getElementById("brand-type-form").addEventListener("submit", function (e) { e.preventDefault(); submit(input.value); });
      document.getElementById("brand-dunno").addEventListener("click", function () { submit(""); });
      document.getElementById("brand-next").addEventListener("click", next);
    }

    function done() {
      var unique = Object.keys(state.seen).length;
      var missed = Object.keys(state.missedIds).length;
      host.innerHTML = '<section class="complete-panel"><span class="complete-icon">' + (missed ? "💊" : "🎯") + '</span><p class="eyebrow">' + esc(state.label) + ' done</p><h3>' + state.firstRight + ' of ' + unique + ' right on the first try</h3>' +
        '<div class="score-grid"><span><strong>' + state.firstRight + '</strong>First try</span><span><strong>' + missed + '</strong>Needed repeats</span></div>' +
        '<div class="session-actions"><button class="primary-action" id="brand-home" type="button">Brand ⇄ Generic home</button>' + (missed ? '<button class="secondary-action" id="brand-again" type="button">Drill my misses</button>' : '') + '</div></section>';
      document.getElementById("brand-home").addEventListener("click", home);
      if (document.getElementById("brand-again")) document.getElementById("brand-again").addEventListener("click", function () { start("miss"); });
    }

    // ---- list ----
    function list(hideBrand, hideGeneric) {
      var progress = load(data);
      var groups = {};
      pool().forEach(function (item) { (groups[item.cls] = groups[item.cls] || []).push(item); });
      var html = '<div class="session-top"><button type="button" id="brand-exit">← Brand ⇄ Generic</button><span>The list</span></div>' +
        '<div class="flash-topic-row"><button type="button" class="flash-topic' + (!hideBrand && !hideGeneric ? " active" : "") + '" data-hide="none">Show all</button><button type="button" class="flash-topic' + (hideBrand ? " active" : "") + '" data-hide="brand">Cover brands</button><button type="button" class="flash-topic' + (hideGeneric ? " active" : "") + '" data-hide="generic">Cover generics</button></div>' +
        '<p class="practice-picker-label">Covered names: tap to peek. ✓ = known both ways, ✗ = missed last time.</p>';
      Object.keys(groups).forEach(function (cls) {
        html += '<table class="brand-table"><caption>' + esc(cls) + '</caption><thead><tr><th>Generic</th><th>Brand</th><th></th></tr></thead><tbody>' + groups[cls].map(function (item) {
          var mark = mastered(progress, item) ? '<span class="brand-ok">✓</span>' : isMiss(progress, item) ? '<span class="brand-bad">✗</span>' : '';
          return '<tr><td>' + (hideGeneric ? '<button type="button" class="brand-peek" data-peek="' + esc(item.generic) + '">?</button>' : esc(item.generic)) + '</td><td><strong>' + (hideBrand ? '<button type="button" class="brand-peek" data-peek="' + esc(brandText(item)) + '">?</button>' : esc(brandText(item))) + '</strong></td><td>' + mark + '</td></tr>';
        }).join("") + '</tbody></table>';
      });
      host.innerHTML = html;
      wireExit();
      host.querySelectorAll("[data-hide]").forEach(function (b) { b.addEventListener("click", function () { list(b.dataset.hide === "brand", b.dataset.hide === "generic"); }); });
      host.querySelectorAll("[data-peek]").forEach(function (b) { b.addEventListener("click", function () { b.outerHTML = esc(b.dataset.peek); }); });
    }

    function wireExit() {
      var exit = document.getElementById("brand-exit");
      if (exit) exit.addEventListener("click", home);
    }

    ui.home = home;
    return ui;
  }

  function render(host, data) { createDrill(host, data).home(); }

  window.BrandDrill = { render: render, boxFor: boxFor, brandsLine: brandsLine };
}());
