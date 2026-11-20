/* Tiers: a course in three passes (Tier 1 foundations, Tier 2 details, Tier 3 weeds), each split by lecture,
   and each lecture-tier split into small chunks: Learn cards, then a few key questions, plus an extra practice bank.
   Data: window.CARDIO3_TIERS (data/tiers-cardio-part-3.js + data/tiers-cardio3-<lecture>.js).
   Progress: pasem2:tiers:cardio-part-3:progress = { cards: { id: 1 }, q: { id: { right: bool, tries: n } } }. */
(function () {
  "use strict";
  var data = window.CARDIO3_TIERS;
  var launch = document.getElementById("cardio3-tiers-launch");
  var view = document.getElementById("cardio3-tiers-view");
  var content = document.getElementById("cardio3-tiers-content");
  var back = document.getElementById("cardio3-tiers-back");
  var studyView = document.getElementById("study-view");
  if (!data || !launch || !view || !content) return;

  var KEY = "pasem2:tiers:" + data.course + ":progress";
  var course = ((window.SEMESTER || {}).courses || []).filter(function (c) { return c.id === data.course; })[0] || { lectures: [] };
  var tierSel = data.tiers[0].id;
  var session = null;

  function esc(v) { return String(v == null ? "" : v).replace(/[&<>'"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c]; }); }
  function shuffle(a) { var c = a.slice(); for (var i = c.length - 1; i > 0; i -= 1) { var j = Math.floor(Math.random() * (i + 1)); var v = c[i]; c[i] = c[j]; c[j] = v; } return c; }
  function load() { try { var v = JSON.parse(localStorage.getItem(KEY) || "{}"); v.cards = v.cards || {}; v.q = v.q || {}; return v; } catch (e) { return { cards: {}, q: {} }; } }
  function save(v) { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) { /* private mode */ } }
  function tierById(id) { return data.tiers.filter(function (t) { return t.id === id; })[0]; }
  function lectureTitle(id) { var l = (course.lectures || []).filter(function (x) { return x.id === id; })[0]; return l ? l.title : id; }
  function pct(n, d) { return d ? Math.round(100 * n / d) : 0; }

  // A unit's chunks with progress ids stamped on every card and question.
  var cache = {};
  function unit(t, l) {
    var k = t + "|" + l;
    if (cache[k]) return cache[k];
    var u = data.units[k] || { chunks: [] };
    (u.chunks || []).forEach(function (ch) {
      var base = k + "|" + ch.id;
      ch.cards = ch.cards || []; ch.check = ch.check || []; ch.bank = ch.bank || [];
      ch.cards.forEach(function (c, i) { c.id = base + "|c" + i; });
      ch.check.forEach(function (q, i) { q.id = base + "|check|" + i; });
      ch.bank.forEach(function (q, i) { q.id = base + "|bank|" + i; });
    });
    cache[k] = u; return u;
  }
  function chunkStats(ch, p) {
    var right = function (list) { return list.filter(function (q) { return p.q[q.id] && p.q[q.id].right; }).length; };
    return { learned: ch.cards.filter(function (c) { return p.cards[c.id]; }).length, cards: ch.cards.length,
      checkRight: right(ch.check), check: ch.check.length, bankRight: right(ch.bank), bank: ch.bank.length };
  }
  function sum(list) { return list.reduce(function (a, s) { Object.keys(s).forEach(function (k) { a[k] = (a[k] || 0) + s[k]; }); return a; }, { learned: 0, cards: 0, checkRight: 0, check: 0, bankRight: 0, bank: 0 }); }
  function stats(t, l, p) { return sum(unit(t, l).chunks.map(function (ch) { return chunkStats(ch, p); })); }
  function tierStats(t, p) { return sum(data.lectures.map(function (l) { return stats(t, l, p); })); }
  function done(s) { return s.learned + s.checkRight; }
  function total(s) { return s.cards + s.check; }
  function chunkDone(ch, p) { var s = chunkStats(ch, p); return done(s) === total(s); }
  // The next unfinished chunk in a tier (real content before placeholders), starting from lecture `from`.
  function nextChunk(t, p, fromLecture) {
    var order = data.lectures.slice();
    if (fromLecture) { var i = order.indexOf(fromLecture); order = order.slice(i).concat(order.slice(0, i)); }
    var pick = function (ph) {
      for (var a = 0; a < order.length; a += 1) {
        var u = unit(t, order[a]);
        if (!!u.placeholder !== ph) continue;
        for (var b = 0; b < u.chunks.length; b += 1) if (!chunkDone(u.chunks[b], p)) return { l: order[a], ch: u.chunks[b] };
      }
      return null;
    };
    return pick(false) || pick(true);
  }

  function bar(label, n, d, cls) {
    return '<div class="tr-bar ' + (cls || "") + '"><div class="tr-bar-top"><span>' + esc(label) + '</span><b>' + n + ' / ' + d + '</b></div>' +
      '<div class="progress-track"><span style="width:' + pct(n, d) + '%"></span></div></div>';
  }

  function open() {
    studyView.hidden = true;
    document.querySelectorAll(".walkthrough-view").forEach(function (s) { s.hidden = true; });
    view.hidden = false; renderHome(); window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function close() { session = null; view.hidden = true; studyView.hidden = false; content.innerHTML = ""; updateLaunch(); window.scrollTo({ top: 0, behavior: "smooth" }); }
  function top() { window.scrollTo({ top: view.offsetTop - 20, behavior: "smooth" }); }

  function updateLaunch() {
    var p = load(), s = document.getElementById("cardio3-tiers-status");
    if (!s) return;
    s.textContent = data.tiers.map(function (t) { var x = tierStats(t.id, p); return t.name + " " + pct(done(x), total(x)) + "%"; }).join(" · ");
  }

  /* ---------- Home: tiers, the picked tier's progress, its lectures ---------- */
  function renderHome() {
    session = null;
    var p = load();
    var all = sum(data.tiers.map(function (t) { return tierStats(t.id, p); }));
    var t = tierById(tierSel), ts = tierStats(t.id, p), nx = nextChunk(t.id, p);
    content.innerHTML =
      '<div class="mode-intro"><p class="eyebrow">' + esc(course.title || "") + '</p><h3>Tiers</h3>' +
      '<p>The whole course in three passes, most important first. Finish Tier 1 for every lecture before Tier 2.</p></div>' +
      bar("All tiers: learned and key questions right", done(all), total(all), "tr-bar-big") +
      '<div class="tr-layout"><div class="tr-tiers">' + data.tiers.map(function (x) {
        var s = tierStats(x.id, p);
        return '<button type="button" class="tr-tier' + (x.id === tierSel ? " active" : "") + '" data-tier="' + x.id + '">' +
          '<span class="tr-tier-name">' + esc(x.name) + '<em>' + esc(x.tag) + '</em></span><strong>' + esc(x.title) + '</strong>' +
          '<small>' + esc(x.blurb) + '</small><span class="tr-mini"><span style="width:' + pct(done(s), total(s)) + '%"></span></span></button>';
      }).join("") + '</div>' +
      '<div class="tr-panel"><p class="eyebrow">' + esc(t.name) + ' · ' + esc(t.title) + '</p>' +
      (nx ? '<button type="button" class="primary-action tr-continue" id="tr-continue">Continue ' + esc(t.name) + ': ' + esc(lectureTitle(nx.l)) + ', ' + esc(nx.ch.title) + '</button>' : '<p class="tr-empty">✓ All of ' + esc(t.name) + ' done.</p>') +
      bar("Learn cards", ts.learned, ts.cards) + bar("Key questions right", ts.checkRight, ts.check) + bar("Extra practice right", ts.bankRight, ts.bank, "tr-bar-soft") +
      '<h4 class="tr-sub">By lecture</h4><div class="tr-lectures">' + data.lectures.map(function (l, i) {
        var s = stats(t.id, l, p), u = unit(t.id, l), d = done(s), n = total(s);
        return '<button type="button" class="tr-lecture" data-lecture="' + esc(l) + '"><span class="tr-num">' + String(i + 1).padStart(2, "0") + '</span>' +
          '<span class="tr-lecture-body"><strong>' + esc(lectureTitle(l)) + (u.placeholder ? ' <i class="tr-ph">placeholder</i>' : "") + '</strong>' +
          '<span class="tr-mini"><span style="width:' + pct(d, n) + '%"></span></span>' +
          '<small>' + u.chunks.length + ' chunk' + (u.chunks.length === 1 ? "" : "s") + ' · ' + s.learned + '/' + s.cards + ' learned · ' + s.checkRight + '/' + s.check + ' key questions' + (d === n && n ? ' · ✓ done' : "") + '</small></span><span class="tr-go">›</span></button>';
      }).join("") + '</div>' +
      '<h4 class="tr-sub">' + esc(t.name) + ' tools</h4>' + (t.tools.length ? '<div class="tr-tools">' + t.tools.map(function (x) {
        return '<button type="button" class="secondary-action" data-launch="' + esc(x.launch) + '">' + esc(x.label) + '</button>';
      }).join("") + '</div>' : '<p class="tr-empty">Extra study tools just for ' + esc(t.name) + ' can go here later.</p>') +
      '</div></div>';
    content.querySelectorAll("[data-tier]").forEach(function (b) { b.addEventListener("click", function () { tierSel = b.dataset.tier; renderHome(); }); });
    content.querySelectorAll("[data-lecture]").forEach(function (b) { b.addEventListener("click", function () { renderUnit(tierSel, b.dataset.lecture); top(); }); });
    content.querySelectorAll("[data-launch]").forEach(function (b) { b.addEventListener("click", function () { var x = document.getElementById(b.dataset.launch); if (x) x.click(); }); });
    var c = document.getElementById("tr-continue"); if (c) c.addEventListener("click", function () { startChunk(t.id, nx.l, nx.ch); });
  }

  /* ---------- One lecture inside one tier: its chunks ---------- */
  function renderUnit(t, l) {
    session = null;
    var p = load(), u = unit(t, l), s = stats(t, l, p), tier = tierById(t);
    var next = u.chunks.filter(function (ch) { return !chunkDone(ch, p); })[0];
    var banks = [];
    u.chunks.forEach(function (ch) { banks = banks.concat(ch.bank); });
    content.innerHTML =
      '<button type="button" class="tr-crumb" id="tr-home">← ' + esc(tier.name) + ': all lectures</button>' +
      '<div class="mode-intro"><p class="eyebrow">' + esc(tier.name) + ' · ' + esc(tier.title) + '</p><h3>' + esc(lectureTitle(l)) + '</h3>' +
      (u.placeholder ? '<p class="tr-ph-note">Placeholder content: this shows the layout. Real cards and questions come next.</p>' : "") + '</div>' +
      bar("This lecture, " + tier.name, done(s), total(s), "tr-bar-big") +
      (next ? '<button type="button" class="primary-action tr-continue" id="tr-next-chunk">' + (done(s) ? "Continue: " : "Start: ") + esc(next.title) + '</button>' : '<p class="tr-empty">✓ Every chunk done. Redo any one below, or try the extra practice.</p>') +
      '<div class="tr-chunks">' + u.chunks.map(function (ch, i) {
        var cs = chunkStats(ch, p), ok = chunkDone(ch, p);
        return '<button type="button" class="tr-chunk' + (ok ? " done" : "") + '" data-chunk="' + i + '"><span class="tr-step-num">' + (ok ? "✓" : i + 1) + '</span>' +
          '<span class="tr-lecture-body"><strong>' + esc(ch.title) + '</strong><span class="tr-mini"><span style="width:' + pct(done(cs), total(cs)) + '%"></span></span>' +
          '<small>' + cs.learned + '/' + cs.cards + ' card' + (cs.cards === 1 ? "" : "s") + ' · ' + cs.checkRight + '/' + cs.check + ' key questions</small></span><span class="tr-go">›</span></button>';
      }).join("") + '</div>' +
      '<details class="tr-bank"><summary><span>Extra practice</span><b>' + s.bankRight + ' / ' + s.bank + ' right</b></summary>' +
      '<p>More questions for later, once the chunks are done.</p>' +
      (banks.length ? '<button type="button" class="secondary-action" id="tr-bank">Practice all ' + banks.length + '</button>' : '<p class="tr-empty">No extra questions yet.</p>') + '</details>';
    document.getElementById("tr-home").addEventListener("click", function () { renderHome(); top(); });
    var nb = document.getElementById("tr-next-chunk"); if (nb) nb.addEventListener("click", function () { startChunk(t, l, next); });
    content.querySelectorAll("[data-chunk]").forEach(function (b) { b.addEventListener("click", function () { startChunk(t, l, u.chunks[Number(b.dataset.chunk)], true); }); });
    var bk = document.getElementById("tr-bank"); if (bk) bk.addEventListener("click", function () { startQuiz(t, l, null, banks, "Extra practice"); });
  }

  /* ---------- A chunk: cards one at a time, then its key questions ---------- */
  function startChunk(t, l, ch, fromStart) {
    var p = load();
    var first = fromStart ? 0 : ch.cards.findIndex(function (c) { return !p.cards[c.id]; });
    if (first < 0) return startQuiz(t, l, ch, ch.check, "Key questions");
    session = { t: t, l: l, ch: ch, kind: "learn", i: first };
    renderCard(); top();
  }
  function renderCard() {
    var ch = session.ch, c = ch.cards[session.i];
    content.innerHTML = head(ch.title + " · Learn", (session.i + 1) + " of " + ch.cards.length, session.i, ch.cards.length) +
      '<article class="tr-card"><h4>' + esc(c.title) + '</h4><div class="learn-body">' + c.html + '</div></article>' +
      '<div class="session-actions"><button type="button" class="primary-action" id="tier-next">' + (session.i + 1 < ch.cards.length ? "Got it, next" : "Got it, to the questions") + '</button></div>';
    bindExit();
    document.getElementById("tier-next").addEventListener("click", function () {
      var p = load(); p.cards[c.id] = 1; save(p);
      if (session.i + 1 < ch.cards.length) { session.i += 1; renderCard(); top(); } else startQuiz(session.t, session.l, ch, ch.check, "Key questions");
    });
  }

  /* ---------- Questions: misses come back once at the end ---------- */
  function startQuiz(t, l, ch, list, label) {
    var qsList = shuffle(list);
    session = { t: t, l: l, ch: ch, kind: "quiz", label: label, queue: qsList, pos: 0, total: qsList.length, right: 0, missed: {} };
    renderQ(); top();
  }
  function renderQ() {
    var q = session.queue[session.pos];
    if (!q) return renderEnd();
    var choices = shuffle([q.answer].concat(q.wrong));
    content.innerHTML = head((session.ch ? session.ch.title + " · " : "") + session.label, (session.pos + 1) + " of " + session.queue.length, session.pos, session.queue.length) +
      '<article class="tr-card"><h4>' + esc(q.prompt) + '</h4><div class="choices">' + choices.map(function (c, i) {
        return '<button type="button" class="choice" data-c="' + esc(c) + '"><span>' + "ABCD"[i] + '</span>' + esc(c) + '</button>';
      }).join("") + '</div><div id="tr-why"></div></article>';
    bindExit();
    content.querySelectorAll(".choice").forEach(function (b) {
      b.addEventListener("click", function () {
        if (content.querySelector(".choice.correct")) return;
        var ok = b.dataset.c === q.answer, p = load(), r = p.q[q.id] || { tries: 0 };
        r.tries += 1; r.right = ok; p.q[q.id] = r; save(p);
        content.querySelectorAll(".choice").forEach(function (x) { x.classList.add(x.dataset.c === q.answer ? "correct" : "dimmed"); });
        if (!ok) { b.classList.remove("dimmed"); b.classList.add("wrong"); if (!session.missed[q.id]) { session.missed[q.id] = 1; session.queue.push(q); } }
        else if (!session.missed[q.id]) session.right += 1;
        document.getElementById("tr-why").innerHTML = '<p class="tr-why ' + (ok ? "ok" : "bad") + '"><b>' + (ok ? "Right." : "Not quite. This one comes back at the end.") + '</b> ' + esc(q.why) + '</p>' +
          '<div class="session-actions"><button type="button" class="primary-action" id="tier-next">Next</button></div>';
        document.getElementById("tier-next").addEventListener("click", function () { session.pos += 1; renderQ(); });
      });
    });
  }
  function renderEnd() {
    var t = session.t, l = session.l, p = load();
    var u = unit(t, l), nextInLecture = u.chunks.filter(function (ch) { return !chunkDone(ch, p); })[0];
    var nx = nextInLecture ? { l: l, ch: nextInLecture } : nextChunk(t, p, l);
    var s = stats(t, l, p);
    content.innerHTML = '<div class="mode-intro"><p class="eyebrow">' + esc(session.ch ? session.ch.title : session.label) + ' · done</p><h3>' + session.right + ' of ' + session.total + ' right the first time</h3>' +
      '<p>' + (session.right === session.total ? "All of them. Nice." : "Every miss came back once, so you have seen every answer.") + '</p></div>' +
      bar(lectureTitle(l) + ", " + tierById(t).name, done(s), total(s), "tr-bar-big") +
      '<div class="session-actions">' + (nx ? '<button type="button" class="primary-action" id="tier-next">Next: ' + esc(nx.l !== l ? lectureTitle(nx.l) + ", " : "") + esc(nx.ch.title) + '</button>' : "") +
      '<button type="button" class="secondary-action" id="tr-unit">Back to ' + esc(lectureTitle(l)) + '</button></div>';
    var nb = document.getElementById("tier-next"); if (nb) nb.addEventListener("click", function () { startChunk(t, nx.l, nx.ch); });
    document.getElementById("tr-unit").addEventListener("click", function () { renderUnit(t, l); top(); });
  }

  function head(label, detail, n, d) {
    return '<div class="tr-session-head"><button type="button" class="tr-crumb" id="tr-exit">← ' + esc(lectureTitle(session.l)) + '</button>' +
      '<span>' + esc(label) + ' · ' + esc(detail) + '</span></div><div class="progress-track tr-session-bar"><span style="width:' + pct(n, d) + '%"></span></div>';
  }
  function bindExit() { var t = session.t, l = session.l; document.getElementById("tr-exit").addEventListener("click", function () { renderUnit(t, l); top(); }); }

  launch.addEventListener("click", open);
  if (back) back.addEventListener("click", close);
  updateLaunch();
})();
