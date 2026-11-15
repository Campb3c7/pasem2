/* EKG Flashcards: Quizlet "Learn"-style study of term/definition sets, one set per EKG objective.
   Data: window.EKG_FLASHCARDS (data/ekg-flashcards.js).
   Each question shows one side (term or definition) and 4 choices from the other side; wrong
   choices come from the same set, preferring cards with the same tag. Rounds of ROUND cards; a miss
   comes back later in the same round until it is answered right. A card is "Familiar" after one
   first-try right answer and "Mastered" after a second one in a later round; a miss sends it back
   to "Still learning". Progress: pasem2:ekg-flashcards:progress = { cards: { id: 0|1|2 }, dir }. */
(function () {
  "use strict";

  // ---- pure helpers (the validator loads these) ------------------------------------------------
  function shuffle(items, rand) {
    var r = rand || Math.random, c = items.slice();
    for (var i = c.length - 1; i > 0; i -= 1) { var j = Math.floor(r() * (i + 1)); var v = c[i]; c[i] = c[j]; c[j] = v; }
    return c;
  }
  // Three wrong cards for `card` from its own set: same tag first, then the rest of the set.
  // `side` is the side shown as choices ("term" or "def"); choice texts are always distinct.
  function distractors(card, set, side, rand) {
    var used = {}, out = [];
    used[card[side]] = true;
    function take(list) {
      shuffle(list, rand).forEach(function (c) {
        if (out.length < 3 && !used[c[side]]) { used[c[side]] = true; out.push(c); }
      });
    }
    take(set.cards.filter(function (c) { return c !== card && c.tag === card.tag; }));
    take(set.cards.filter(function (c) { return c !== card && c.tag !== card.tag; }));
    return out;
  }
  function question(card, set, side, rand) {
    var options = shuffle([card].concat(distractors(card, set, side, rand)), rand);
    return { card: card, side: side, labels: options.map(function (c) { return c[side]; }), correct: options.indexOf(card) };
  }
  if (typeof window !== "undefined") window.EkgFlashHelpers = { distractors: distractors, question: question, shuffle: shuffle };
  if (typeof document === "undefined") return;

  var data = window.EKG_FLASHCARDS;
  var launch = document.getElementById("ekg-flash-launch");
  var view = document.getElementById("ekg-flash-view");
  var content = document.getElementById("ekg-flash-content");
  var studyView = document.getElementById("study-view");
  if (!data || !launch || !view || !content) return;

  var KEY = "pasem2:ekg-flashcards:progress";
  var ROUND = 7, ROUND_ALL = 10, RETURN_GAP = 3, AUTO_NEXT_MS = 900;
  var DIRS = [["def", "Definition"], ["term", "Term"], ["both", "Both"]];
  var PRAISE = ["Nice!", "Correct!", "You got it!", "Great job!", "Perfect!", "Way to go!"];
  var setOf = {}, allCards = [];
  data.sets.forEach(function (s) { s.cards.forEach(function (c) { setOf[c.id] = s; allCards.push(c); }); });
  var state = null, timer = null;

  function esc(v) { return String(v == null ? "" : v).replace(/[&<>'"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c]; }); }
  function el(id) { return content.querySelector("#" + id); }

  // ---- progress ------------------------------------------------------------------------------
  function load() {
    try { var v = JSON.parse(localStorage.getItem(KEY) || "{}"); v.cards = v.cards || {}; v.dir = v.dir || "def"; return v; }
    catch (e) { return { cards: {}, dir: "def" }; }
  }
  function save(p) { try { localStorage.setItem(KEY, JSON.stringify(p)); } catch (e) {} }
  function level(id) { var l = load().cards[id]; return l == null ? -1 : l; }
  function setLevel(id, l) { var p = load(); p.cards[id] = l; save(p); }
  function counts(cards) {
    var p = load().cards, out = { fresh: 0, learning: 0, familiar: 0, mastered: 0, total: cards.length };
    cards.forEach(function (c) { var l = p[c.id]; if (l == null) out.fresh += 1; else if (l >= 2) out.mastered += 1; else if (l === 1) out.familiar += 1; else out.learning += 1; });
    return out;
  }
  function resetCards(cards) { var p = load(); cards.forEach(function (c) { delete p.cards[c.id]; }); save(p); }
  function dir() { return load().dir; }
  function setDir(d) { var p = load(); p.dir = d; save(p); }

  // ---- view plumbing -----------------------------------------------------------------------------
  function stopTimer() { if (timer) { clearTimeout(timer); timer = null; } }
  function open() {
    studyView.hidden = true;
    document.querySelectorAll(".walkthrough-view").forEach(function (s) { s.hidden = true; });
    view.hidden = false;
    renderHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function close() {
    stopTimer(); state = null; view.hidden = true; studyView.hidden = false; content.innerHTML = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function top(label, backLabel) {
    return '<div class="session-top"><button type="button" id="fc-back">← ' + esc(backLabel || "All sets") + '</button><span>' + esc(label) + '</span></div>';
  }
  function bar(c) {
    var w = function (n) { return (n / Math.max(c.total, 1) * 100).toFixed(1) + "%"; };
    return '<span class="fc-bar"><span class="fc-bar-m" style="width:' + w(c.mastered) + '"></span><span class="fc-bar-f" style="width:' + w(c.familiar) + '"></span><span class="fc-bar-l" style="width:' + w(c.learning) + '"></span></span>';
  }
  function dirToggle() {
    return '<div class="fc-dir"><span>Answer with</span><div class="hs-toggle">' + DIRS.map(function (d) {
      return '<button type="button" data-fc-dir="' + d[0] + '" class="' + (dir() === d[0] ? "active" : "") + '">' + d[1] + '</button>';
    }).join("") + '</div></div>';
  }
  function bindDir(after) {
    content.querySelectorAll("[data-fc-dir]").forEach(function (b) {
      b.addEventListener("click", function () { setDir(b.dataset.fcDir); after(); });
    });
  }

  // ---- home: all 16 sets ------------------------------------------------------------------------
  function renderHome() {
    stopTimer(); state = null;
    var all = counts(allCards);
    var html = '<div class="drill-heading"><p class="eyebrow">EKG · flashcards</p><h2>EKG flashcards</h2>' +
      '<p>One set per objective. Learn mode: pick the match from 4 choices, and missed cards keep coming back until you know them.</p>' +
      '<span class="diseases-count-pill">' + all.mastered + ' / ' + all.total + ' mastered</span></div>' + dirToggle();
    html += '<button type="button" class="fc-all" id="fc-all"><span class="fc-all-k">All ' + data.sets.length + ' sets</span><strong>' +
      (all.mastered === all.total ? "Everything mastered" : all.fresh === all.total ? "Learn every set" : "Keep learning every set") + ' →</strong>' + bar(all) +
      '<small>' + all.mastered + ' mastered · ' + (all.familiar + all.learning) + ' learning · ' + all.fresh + ' not studied</small></button>';
    html += '<div class="fc-sets">';
    data.sets.forEach(function (s, i) {
      var c = counts(s.cards);
      html += '<button type="button" class="fc-set" data-fc-set="' + s.id + '"><span class="fc-set-n">' + String(i + 1).padStart(2, "0") + '</span>' +
        '<span class="fc-set-copy"><strong>' + esc(s.title) + '</strong><small>' + s.cards.length + ' terms' + (c.mastered === c.total ? ' · ✓ mastered' : c.mastered ? ' · ' + c.mastered + ' mastered' : '') + '</small>' + bar(c) + '</span><span class="fc-set-go">›</span></button>';
    });
    html += '</div>';
    content.innerHTML = html;
    bindDir(renderHome);
    el("fc-all").addEventListener("click", function () { renderSet(null); });
    content.querySelectorAll("[data-fc-set]").forEach(function (b) {
      b.addEventListener("click", function () { renderSet(data.sets.find(function (s) { return s.id === b.dataset.fcSet; })); });
    });
  }

  // ---- one set (or all sets) --------------------------------------------------------------------
  function renderSet(set) {
    stopTimer(); state = null;
    var cards = set ? set.cards : allCards, c = counts(cards), n = set ? data.sets.indexOf(set) + 1 : 0;
    var done = c.mastered === c.total;
    var html = top(set ? "Set " + n + " of " + data.sets.length : "All sets") +
      '<div class="drill-heading fc-head"><p class="eyebrow">' + (set ? "Objective " + n : "Every objective") + '</p><h2>' + esc(set ? set.title : "All " + data.sets.length + " sets") + '</h2>' +
      (set ? '<p>' + esc(set.objective) + '</p>' : '<p>Every card from every set, mixed. Wrong choices still come from the card\'s own set.</p>') + '</div>';
    html += '<div class="fc-stats"><div><strong>' + c.fresh + '</strong><span>Not studied</span></div><div class="l"><strong>' + (c.learning + c.familiar) + '</strong><span>Learning</span></div><div class="m"><strong>' + c.mastered + '</strong><span>Mastered</span></div></div>' + bar(c);
    html += dirToggle();
    html += '<div class="session-actions fc-actions">' +
      (done ? '<button type="button" class="primary-action" id="fc-restart">Study again from the start</button>'
        : '<button type="button" class="primary-action" id="fc-learn">' + (c.fresh === c.total ? "Start Learn" : "Continue Learn") + ' →</button>') +
      (!done && c.fresh < c.total ? '<button type="button" class="secondary-action" id="fc-reset">Reset progress</button>' : "") + '</div>';
    if (set) {
      html += '<h3 class="fc-terms-title">Terms in this set (' + set.cards.length + ')</h3><div class="fc-terms">';
      set.cards.forEach(function (card) {
        var l = level(card.id);
        html += '<div class="fc-term"><strong>' + esc(card.term) + '</strong><span>' + esc(card.def) + '</span><em class="' + (l >= 2 ? "m" : l >= 0 ? "l" : "") + '">' + (l >= 2 ? "Mastered" : l >= 0 ? "Learning" : "") + '</em></div>';
      });
      html += '</div>';
    }
    content.innerHTML = html;
    el("fc-back").addEventListener("click", renderHome);
    bindDir(function () { renderSet(set); });
    var learn = el("fc-learn"), restart = el("fc-restart"), reset = el("fc-reset");
    if (learn) learn.addEventListener("click", function () { startRound(set, 1); });
    if (restart) restart.addEventListener("click", function () { resetCards(cards); startRound(set, 1); });
    if (reset) reset.addEventListener("click", function () {
      if (reset.dataset.armed) { resetCards(cards); renderSet(set); return; }
      reset.dataset.armed = "1"; reset.textContent = "Tap again to reset";
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---- rounds ----------------------------------------------------------------------------------------
  function pickRound(cards, size) {
    var p = load().cards;
    var started = cards.filter(function (c) { return p[c.id] != null && p[c.id] < 2; });
    var fresh = cards.filter(function (c) { return p[c.id] == null; });
    // Cards already in progress come first (lowest level first), then new cards in set order.
    var order = shuffle(started).sort(function (a, b) { return p[a.id] - p[b.id]; }).concat(fresh);
    return shuffle(order.slice(0, size));
  }
  function startRound(set, number) {
    stopTimer();
    var cards = set ? set.cards : allCards;
    var picked = pickRound(cards, set ? ROUND : ROUND_ALL);
    if (!picked.length) { renderSet(set); return; }
    state = { set: set, number: number, cards: cards, queue: picked.map(function (c) { return { card: c, retry: false }; }), pos: 0, firstTry: {}, size: picked.length };
    renderQuestion();
  }
  function sideFor() {
    var d = dir();
    if (d === "both") return Math.random() < 0.5 ? "term" : "def";
    return d;
  }
  function renderQuestion() {
    stopTimer();
    var s = state;
    if (s.pos >= s.queue.length) { renderRoundDone(); return; }
    var item = s.queue[s.pos], card = item.card, side = sideFor();
    var q = question(card, setOf[card.id], side);
    item.q = q;
    var promptSide = side === "term" ? "def" : "term";
    var c = counts(s.cards);
    var doneInRound = Object.keys(s.firstTry).length;
    var html = top("Round " + s.number, s.set ? s.set.title : "All sets") +
      '<div class="fc-progress"><span style="width:' + (doneInRound / s.size * 100).toFixed(1) + '%"></span></div>' +
      '<div class="fc-meta"><span>' + doneInRound + ' / ' + s.size + ' this round</span><span>' + c.mastered + ' / ' + c.total + ' mastered</span></div>' +
      '<article class="question-card immersive-card fc-card">' +
      '<div class="fc-card-top"><span class="fc-side">' + (promptSide === "term" ? "Term" : "Definition") + '</span>' +
      (item.retry ? '<span class="fc-again">Let\'s try again</span>' : level(card.id) === 1 ? '<span class="fc-familiar">Familiar</span>' : "") +
      (s.set ? "" : '<span class="fc-from">' + esc(setOf[card.id].title) + '</span>') + '</div>' +
      '<h3 class="fc-prompt' + (promptSide === "def" ? " long" : "") + '">' + esc(card[promptSide]) + '</h3>' +
      '<p class="fc-ask">Choose the matching ' + (side === "term" ? "term" : "definition") + '</p>' +
      '<div class="choices fc-choices">' + q.labels.map(function (l, i) {
        return '<button class="choice" type="button" data-choice="' + i + '"><span>' + "ABCD"[i] + '</span>' + esc(l) + '</button>';
      }).join("") + '</div>' +
      '<div class="fc-foot"><button type="button" class="fc-dunno" id="fc-dunno">Don\'t know?</button></div>' +
      '<div class="fc-fb" id="fc-fb" hidden></div></article>' +
      '<button class="primary-action full-action" id="fc-next" type="button" hidden>Continue →</button>';
    content.innerHTML = html;
    el("fc-back").addEventListener("click", function () { renderSet(s.set); });
    el("fc-next").addEventListener("click", advance);
    content.querySelectorAll("[data-choice]").forEach(function (b) {
      b.addEventListener("click", function () { answer(item, Number(b.dataset.choice)); });
    });
    el("fc-dunno").addEventListener("click", function () { answer(item, -1); });
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }
  function answer(item, pick) {
    var s = state;
    if (!s || item.done) return;
    item.done = true;
    var q = item.q, card = item.card, right = pick === q.correct;
    content.querySelectorAll("[data-choice]").forEach(function (b) {
      var i = Number(b.dataset.choice); b.disabled = true;
      b.classList.add(i === q.correct ? "correct" : i === pick ? "wrong" : "dimmed");
    });
    el("fc-dunno").hidden = true;
    var before = level(card.id);
    if (!item.retry && !(card.id in s.firstTry)) s.firstTry[card.id] = right;
    if (right && !item.retry) setLevel(card.id, before >= 1 ? 2 : 1);
    if (!right) {
      setLevel(card.id, 0);
      s.queue.splice(Math.min(s.pos + 1 + RETURN_GAP, s.queue.length), 0, { card: card, retry: true });
    }
    var fb = el("fc-fb"), next = el("fc-next");
    fb.hidden = false;
    if (right) {
      var now = level(card.id);
      fb.className = "fc-fb ok";
      fb.innerHTML = '<strong>' + PRAISE[Math.floor(Math.random() * PRAISE.length)] + '</strong>' +
        (item.retry ? "" : now >= 2 ? '<small>Mastered</small>' : '<small>Familiar: one more right answer in a later round to master it</small>');
      next.hidden = false;
      var token = item;
      timer = setTimeout(function () { if (state === s && s.queue[s.pos] === token) advance(); }, AUTO_NEXT_MS);
    } else {
      fb.className = "fc-fb bad";
      fb.innerHTML = '<strong>' + (pick < 0 ? "Here's the answer" : "Not quite") + '</strong><small>You\'ll see this one again this round.</small>' +
        '<div class="fc-pair"><span>' + esc(card.term) + '</span><span>' + esc(card.def) + '</span></div>';
      next.hidden = false;
      next.focus({ preventScroll: true });
    }
  }
  function advance() {
    stopTimer();
    if (!state) return;
    state.pos += 1;
    renderQuestion();
  }

  function renderRoundDone() {
    stopTimer();
    var s = state, c = counts(s.cards), ids = Object.keys(s.firstTry);
    var right = ids.filter(function (id) { return s.firstTry[id]; }).length;
    var finished = c.mastered === c.total;
    var html = '<section class="complete-panel fc-done"><span class="complete-icon">' + (finished ? "🎉" : "✓") + '</span>' +
      '<p class="eyebrow">' + esc(s.set ? s.set.title : "All sets") + '</p>' +
      '<h3>' + (finished ? "You've mastered " + (s.set ? "this set" : "every set") + "!" : "Round " + s.number + " done") + '</h3>' +
      '<p>' + right + ' of ' + ids.length + ' right on the first try this round</p>' +
      '<div class="fc-stats"><div><strong>' + c.fresh + '</strong><span>Not studied</span></div><div class="l"><strong>' + (c.learning + c.familiar) + '</strong><span>Learning</span></div><div class="m"><strong>' + c.mastered + '</strong><span>Mastered</span></div></div>' + bar(c) +
      '<ul class="fc-round-list">' + ids.map(function (id) {
        var card = s.cards.find(function (x) { return x.id === id; });
        return '<li class="' + (s.firstTry[id] ? "ok" : "bad") + '"><b>' + (s.firstTry[id] ? "✓" : "✗") + '</b><strong>' + esc(card.term) + '</strong><span>' + esc(card.def) + '</span></li>';
      }).join("") + '</ul>';
    var nextSet = s.set ? data.sets[data.sets.indexOf(s.set) + 1] : null;
    html += '<div class="session-actions">' +
      (finished ? (nextSet ? '<button class="primary-action" id="fc-next" type="button">Next set: ' + esc(nextSet.title) + ' →</button>' : "")
        : '<button class="primary-action" id="fc-next" type="button">Continue to round ' + (s.number + 1) + ' →</button>') +
      '<button class="secondary-action" id="fc-to-set" type="button">' + (s.set ? "Set overview" : "Overview") + '</button>' +
      '<button class="secondary-action" id="fc-home" type="button">All sets</button></div></section>';
    content.innerHTML = html;
    var nb = el("fc-next");
    if (nb) nb.addEventListener("click", function () { if (finished) renderSet(nextSet); else startRound(s.set, s.number + 1); });
    el("fc-to-set").addEventListener("click", function () { renderSet(s.set); });
    el("fc-home").addEventListener("click", renderHome);
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }

  launch.addEventListener("click", open);
  document.getElementById("ekg-flash-back").addEventListener("click", close);
}());
