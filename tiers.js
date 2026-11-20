/* Tiers: a course in three passes (Tier 1 foundations, Tier 2 details, Tier 3 weeds), each split by lecture, and
   each lecture-tier split into small chunks. A chunk has two separate parts:
     Learn      story pages, one idea per page with a picture (the same figure kit as the "Learn it from zero"
                paths: window.Cardio3Figure from cardio3-learn.js + tiers-figures.js), ending on a Remember list;
     Questions  a few key questions (misses come back once at the end, every answer has a one-sentence why).
   Each chunk also has extra practice questions (bank), pooled per lecture.
   Every screen has a breadcrumb (Tiers › Tier › Lecture › Chunk), so any level can be reached at any time.
   Data: window.CARDIO3_TIERS (data/tiers-cardio-part-3.js + data/tiers-cardio3-<lecture>.js).
   Progress: pasem2:tiers:cardio-part-3:progress = { learned: { "<tier>|<lecture>|<chunk>": 1 }, q: { id: { right, tries } } }. */
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
  var FIG = window.Cardio3Figure || { render: function () { return ""; }, bind: function () {}, ownCaption: function () { return false; } };
  var OWN_CAPTION = ["stresspick", "statinpick", "lipidpanel"];
  var course = ((window.SEMESTER || {}).courses || []).filter(function (c) { return c.id === data.course; })[0] || { lectures: [] };
  var tierSel = data.tiers[0].id;
  var session = null;

  function esc(v) { return String(v == null ? "" : v).replace(/[&<>'"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c]; }); }
  function shuffle(a) { var c = a.slice(); for (var i = c.length - 1; i > 0; i -= 1) { var j = Math.floor(Math.random() * (i + 1)); var v = c[i]; c[i] = c[j]; c[j] = v; } return c; }
  function load() { try { var v = JSON.parse(localStorage.getItem(KEY) || "{}"); v.learned = v.learned || {}; v.q = v.q || {}; return v; } catch (e) { return { learned: {}, q: {} }; } }
  function save(v) { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) { /* private mode */ } }
  function tierById(id) { return data.tiers.filter(function (t) { return t.id === id; })[0]; }
  function lectureTitle(id) { var l = (course.lectures || []).filter(function (x) { return x.id === id; })[0]; return l ? l.title : id; }
  function pct(n, d) { return d ? Math.round(100 * n / d) : 0; }
  function el(id) { return document.getElementById(id); }
  function on(id, fn) { var x = el(id); if (x) x.addEventListener("click", fn); }

  // A unit's chunks, with keys stamped on chunks and questions.
  var cache = {};
  function unit(t, l) {
    var k = t + "|" + l;
    if (cache[k]) return cache[k];
    var u = data.units[k] || { chunks: [] };
    (u.chunks || []).forEach(function (ch) {
      ch.key = k + "|" + ch.id; ch.t = t; ch.l = l;
      ch.pages = ch.pages || []; ch.check = ch.check || []; ch.bank = ch.bank || []; ch.remember = ch.remember || [];
      ch.check.forEach(function (q, i) { q.id = ch.key + "|check|" + i; q.chunk = ch; });
      ch.bank.forEach(function (q, i) { q.id = ch.key + "|bank|" + i; q.chunk = ch; });
    });
    cache[k] = u; return u;
  }
  function right(list, p) { return list.filter(function (q) { return p.q[q.id] && p.q[q.id].right; }).length; }
  function missed(list, p) { return list.filter(function (q) { return p.q[q.id] && !p.q[q.id].right; }); }
  function chunksOf(t, ls) { var out = []; (ls || data.lectures).forEach(function (l) { out = out.concat(unit(t, l).chunks); }); return out; }
  function realChunks(t, ls) { return chunksOf(t, ls).filter(function (ch) { return !unit(ch.t, ch.l).placeholder; }); }
  function pool(chunks, part) { var out = []; chunks.forEach(function (ch) { out = out.concat(ch[part]); }); return out; }
  function stats(chunks, p) {
    var check = pool(chunks, "check"), bank = pool(chunks, "bank");
    return { learned: chunks.filter(function (ch) { return p.learned[ch.key]; }).length, chunks: chunks.length,
      checkRight: right(check, p), check: check.length, bankRight: right(bank, p), bank: bank.length };
  }
  function nextToLearn(chunks, p) { return chunks.filter(function (ch) { return !p.learned[ch.key]; })[0]; }

  function bar(label, n, d, cls) {
    return '<div class="tr-bar ' + (cls || "") + '"><div class="tr-bar-top"><span>' + esc(label) + '</span><b>' + n + ' / ' + d + '</b></div>' +
      '<div class="progress-track"><span style="width:' + pct(n, d) + '%"></span></div></div>';
  }
  function mini(n, d, cls) { return '<span class="tr-mini ' + (cls || "") + '"><span style="width:' + pct(n, d) + '%"></span></span>'; }

  // Breadcrumb shown on every screen: each piece jumps straight to that level.
  function crumbs(t, l, ch) {
    var parts = ['<button type="button" data-crumb="home">Tiers</button>'];
    if (t) parts.push('<button type="button" data-crumb="tier" data-t="' + t + '">' + esc(tierById(t).name) + '</button>');
    if (l) parts.push('<button type="button" data-crumb="unit" data-t="' + t + '" data-l="' + esc(l) + '">' + esc(lectureTitle(l)) + '</button>');
    if (ch) parts.push('<span>' + esc(ch.title) + '</span>');
    return '<nav class="tr-crumbs" aria-label="Where you are">' + parts.join('<i>›</i>') + '</nav>';
  }
  function bindCrumbs() {
    content.querySelectorAll("[data-crumb]").forEach(function (b) {
      b.addEventListener("click", function () {
        if (b.dataset.crumb === "home") renderHome();
        else if (b.dataset.crumb === "tier") { tierSel = b.dataset.t; renderHome(); }
        else renderUnit(b.dataset.t, b.dataset.l);
        top();
      });
    });
  }

  function open() {
    studyView.hidden = true;
    document.querySelectorAll(".walkthrough-view").forEach(function (s) { s.hidden = true; });
    view.hidden = false; renderHome(); window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function close() { session = null; view.hidden = true; studyView.hidden = false; content.innerHTML = ""; updateLaunch(); window.scrollTo({ top: 0, behavior: "smooth" }); }
  function top() { window.scrollTo({ top: Math.max(0, view.offsetTop - 20), behavior: "smooth" }); }

  function updateLaunch() {
    var p = load(), s = el("cardio3-tiers-status");
    if (!s) return;
    s.textContent = data.tiers.map(function (t) { var x = stats(realChunks(t.id), p); return t.name + ": " + x.learned + "/" + x.chunks + " learned"; }).join(" · ");
  }

  /* ---------- Home: tier tabs across the top, the picked tier below ---------- */
  function renderHome() {
    session = null;
    var p = load(), t = tierById(tierSel);
    var real = realChunks(t.id), ts = stats(real, p), next = nextToLearn(real, p);
    var checks = pool(real, "check"), miss = missed(pool(real, "check").concat(pool(real, "bank")), p);
    content.innerHTML = crumbs() +
      '<div class="mode-intro"><p class="eyebrow">' + esc(course.title || "") + '</p><h3>Tiers</h3>' +
      '<p>The whole course in three passes, most important first. Learn and questions are separate: learn a chunk, then do its questions now or later.</p></div>' +
      '<div class="tr-tabs">' + data.tiers.map(function (x) {
        var s = stats(realChunks(x.id), p);
        return '<button type="button" class="tr-tab' + (x.id === tierSel ? " active" : "") + '" data-tier="' + x.id + '">' +
          '<span class="tr-tier-name">' + esc(x.name) + '<em>' + esc(x.tag) + '</em></span><strong>' + esc(x.title) + '</strong><small>' + esc(x.blurb) + '</small>' +
          mini(s.learned, s.chunks) + '<span class="tr-tab-n">' + s.learned + '/' + s.chunks + ' chunks learned · ' + s.checkRight + '/' + s.check + ' questions</span></button>';
      }).join("") + '</div>' +
      '<section class="tr-panel">' +
      '<div class="tr-actions">' +
      (next ? '<button type="button" class="primary-action" id="tier-next">▶ Learn next: ' + esc(lectureTitle(next.l)) + ' · ' + esc(next.title) + '</button>' : '<span class="tr-alldone">✓ Every ' + esc(t.name) + ' chunk learned</span>') +
      (checks.length ? '<button type="button" class="secondary-action" id="tr-tier-q">Questions only: all of ' + esc(t.name) + ' (' + checks.length + ')</button>' : "") +
      (miss.length ? '<button type="button" class="secondary-action" id="tr-tier-miss">My misses (' + miss.length + ')</button>' : "") + '</div>' +
      '<div class="tr-bars3">' + bar("Chunks learned", ts.learned, ts.chunks) + bar("Key questions right", ts.checkRight, ts.check) + bar("Extra practice right", ts.bankRight, ts.bank, "tr-bar-soft") + '</div>' +
      '<h4 class="tr-sub">' + esc(t.name) + ' by lecture</h4><div class="tr-lecture-grid">' + data.lectures.map(function (l, i) {
        var u = unit(t.id, l), s = stats(u.chunks, p);
        return '<button type="button" class="tr-lcard' + (u.placeholder ? " ph" : "") + '" data-lecture="' + esc(l) + '"><span class="tr-num">' + String(i + 1).padStart(2, "0") + '</span>' +
          '<strong>' + esc(lectureTitle(l)) + '</strong>' +
          (u.placeholder ? '<small class="tr-ph">coming soon</small>' :
            '<span class="tr-lrow"><em>Learn</em>' + mini(s.learned, s.chunks) + '<b>' + s.learned + '/' + s.chunks + '</b></span>' +
            '<span class="tr-lrow"><em>Questions</em>' + mini(s.checkRight, s.check, "q") + '<b>' + s.checkRight + '/' + s.check + '</b></span>') + '</button>';
      }).join("") + '</div>' +
      '<h4 class="tr-sub">' + esc(t.name) + ' tools</h4>' + (t.tools.length ? '<div class="tr-tools">' + t.tools.map(function (x) {
        return '<button type="button" class="secondary-action" data-launch="' + esc(x.launch) + '">' + esc(x.label) + '</button>';
      }).join("") + '</div>' : '<p class="tr-empty">Extra study tools just for ' + esc(t.name) + ' can go here later.</p>') + '</section>';
    bindCrumbs();
    content.querySelectorAll("[data-tier]").forEach(function (b) { b.addEventListener("click", function () { tierSel = b.dataset.tier; renderHome(); }); });
    content.querySelectorAll("[data-lecture]").forEach(function (b) { b.addEventListener("click", function () { renderUnit(tierSel, b.dataset.lecture); top(); }); });
    content.querySelectorAll("[data-launch]").forEach(function (b) { b.addEventListener("click", function () { var x = el(b.dataset.launch); if (x) x.click(); }); });
    on("tier-next", function () { startLearn(next); });
    on("tr-tier-q", function () { startQuiz(checks, "Key questions · all of " + t.name, { t: t.id }); });
    on("tr-tier-miss", function () { startQuiz(miss, "My misses · " + t.name, { t: t.id }); });
  }

  /* ---------- One lecture inside one tier ---------- */
  function renderUnit(t, l) {
    session = null;
    var p = load(), u = unit(t, l), s = stats(u.chunks, p), tier = tierById(t), next = nextToLearn(u.chunks, p);
    var checks = pool(u.chunks, "check"), banks = pool(u.chunks, "bank"), miss = missed(checks.concat(banks), p);
    content.innerHTML = crumbs(t, l) +
      '<div class="mode-intro"><p class="eyebrow">' + esc(tier.name) + ' · ' + esc(tier.title) + '</p><h3>' + esc(lectureTitle(l)) + '</h3>' +
      (u.placeholder ? '<p class="tr-ph-note">Coming soon: this lecture\'s ' + esc(tier.name) + ' hasn\'t been written yet.</p>' : '<p>' + u.chunks.length + ' short chunks. Learn them in order, and do the questions whenever you like.</p>') + '</div>' +
      '<div class="tr-bars3 two">' + bar("Chunks learned", s.learned, s.chunks) + bar("Key questions right", s.checkRight, s.check) + '</div>' +
      (u.placeholder ? "" : '<div class="tr-actions">' +
        (next ? '<button type="button" class="primary-action" id="tier-next">▶ ' + (s.learned ? "Keep learning: " : "Start learning: ") + esc(next.title) + '</button>' : '<span class="tr-alldone">✓ All learned</span>') +
        '<button type="button" class="secondary-action" id="tr-unit-q">Questions only: all ' + checks.length + '</button>' +
        (banks.length ? '<button type="button" class="secondary-action" id="tr-unit-bank">Extra practice (' + s.bankRight + '/' + banks.length + ')</button>' : "") +
        (miss.length ? '<button type="button" class="secondary-action" id="tr-unit-miss">My misses (' + miss.length + ')</button>' : "") + '</div>' +
        '<div class="tr-chunks">' + u.chunks.map(function (ch, i) {
          var learned = !!p.learned[ch.key], r = right(ch.check, p), n = ch.check.length;
          return '<div class="tr-chunk' + (learned ? " learned" : "") + '"><span class="tr-step-num">' + (learned ? "✓" : i + 1) + '</span>' +
            '<div class="tr-chunk-body"><strong>' + esc(ch.title) + '</strong><small>' + esc(ch.goal || "") + '</small></div>' +
            '<div class="tr-chunk-btns"><button type="button" class="tr-pill' + (learned ? " done" : "") + '" data-learn="' + i + '">' + (learned ? "✓ Learned · again" : "Learn · " + ch.pages.length + " pages") + '</button>' +
            '<button type="button" class="tr-pill q' + (r === n && n ? " done" : "") + '" data-q="' + i + '">Questions ' + r + '/' + n + '</button></div></div>';
        }).join("") + '</div>');
    bindCrumbs();
    on("tier-next", function () { startLearn(next); });
    on("tr-unit-q", function () { startQuiz(checks, "Key questions · " + lectureTitle(l), { t: t, l: l }); });
    on("tr-unit-bank", function () { startQuiz(banks, "Extra practice · " + lectureTitle(l), { t: t, l: l }); });
    on("tr-unit-miss", function () { startQuiz(miss, "My misses · " + lectureTitle(l), { t: t, l: l }); });
    content.querySelectorAll("[data-learn]").forEach(function (b) { b.addEventListener("click", function () { startLearn(u.chunks[Number(b.dataset.learn)]); }); });
    content.querySelectorAll("[data-q]").forEach(function (b) { b.addEventListener("click", function () { var ch = u.chunks[Number(b.dataset.q)]; startQuiz(ch.check, ch.title, { t: t, l: l, ch: ch }); }); });
  }

  /* ---------- Learn: story pages, then Remember ---------- */
  function figure(f) {
    if (!f) return "";
    if (Array.isArray(f)) return '<div class="lh-figs">' + f.map(figure).join("") + '</div>';
    var own = OWN_CAPTION.indexOf(f.type) >= 0 || FIG.ownCaption(f);
    return '<figure class="lh-figure">' + FIG.render(f) + (f.caption && !own ? '<figcaption class="lh-caption">' + f.caption + '</figcaption>' : "") + '</figure>';
  }
  function startLearn(ch) { session = { kind: "learn", ch: ch, page: 0 }; renderPage(); }
  function dots(n, total) {
    var s = '<div class="lh-dots" aria-hidden="true">';
    for (var i = 0; i < total; i += 1) s += '<span class="' + (i < n ? "past" : i === n ? "now" : "") + '"></span>';
    return s + '</div>';
  }
  function renderPage() {
    var ch = session.ch, n = ch.pages.length;
    if (session.page >= n) return renderRemember();
    var pg = ch.pages[session.page];
    content.innerHTML = crumbs(ch.t, ch.l, ch) + dots(session.page, n + 1) +
      '<article class="learn-card lh-page"><p class="card-number">' + esc(ch.title) + ' · ' + (session.page + 1) + ' of ' + n + '</p><h3>' + esc(pg.title) + '</h3>' +
      figure(pg.fig) + '<div class="learn-body lh-text">' + pg.html + '</div></article>' +
      '<div class="hs-nav">' + (session.page ? '<button class="secondary-action" id="tr-prev" type="button">← Back</button>' : "") +
      '<button class="primary-action" id="tier-next" type="button">' + (session.page + 1 === n ? "Wrap it up →" : "Next →") + '</button></div>';
    bindCrumbs(); FIG.bind(content);
    on("tr-prev", function () { session.page -= 1; renderPage(); });
    on("tier-next", function () { session.page += 1; renderPage(); });
    top();
  }
  function renderRemember() {
    var ch = session.ch, p = load();
    p.learned[ch.key] = 1; save(p);
    var u = unit(ch.t, ch.l), i = u.chunks.indexOf(ch), nextCh = u.chunks[i + 1];
    content.innerHTML = crumbs(ch.t, ch.l, ch) + dots(ch.pages.length, ch.pages.length + 1) +
      '<section class="complete-panel lh-done"><span class="complete-icon">✓</span><p class="eyebrow">Learned</p><h3>' + esc(ch.title) + '</h3></section>' +
      '<article class="learn-card lh-remember"><p class="eyebrow">Remember</p><ul class="lh-remember-list">' + ch.remember.map(function (x) { return '<li>' + x + '</li>'; }).join("") + '</ul></article>' +
      '<div class="tr-actions center">' +
      (nextCh ? '<button class="primary-action" id="tier-next" type="button">Keep learning: ' + esc(nextCh.title) + ' →</button>' : '<button class="primary-action" id="tier-next" type="button">Back to ' + esc(lectureTitle(ch.l)) + '</button>') +
      '<button class="secondary-action" id="tr-chunk-q" type="button">Do this chunk\'s ' + ch.check.length + ' questions</button>' +
      '<button class="secondary-action" id="tr-again" type="button">Read it again</button></div>';
    bindCrumbs();
    on("tier-next", function () { if (nextCh) startLearn(nextCh); else { renderUnit(ch.t, ch.l); top(); } });
    on("tr-chunk-q", function () { startQuiz(ch.check, ch.title, { t: ch.t, l: ch.l, ch: ch }); });
    on("tr-again", function () { startLearn(ch); });
    top();
  }

  /* ---------- Questions: misses come back once at the end ---------- */
  function startQuiz(list, label, ctx) {
    var qsList = shuffle(list);
    session = { kind: "quiz", label: label, ctx: ctx, queue: qsList, pos: 0, total: qsList.length, right: 0, missed: {} };
    renderQ();
  }
  function renderQ() {
    var q = session.queue[session.pos], ctx = session.ctx;
    if (!q) return renderEnd();
    var choices = shuffle([q.answer].concat(q.wrong));
    content.innerHTML = crumbs(ctx.t, ctx.l, ctx.ch) +
      '<div class="tr-session-head"><span>' + esc(session.label) + '</span><span>' + (session.pos + 1) + ' of ' + session.queue.length + '</span></div>' +
      '<div class="progress-track tr-session-bar"><span style="width:' + pct(session.pos, session.queue.length) + '%"></span></div>' +
      '<article class="question-card immersive-card">' + (ctx.ch ? "" : '<p class="tr-qfrom">' + esc(lectureTitle(q.chunk.l)) + ' · ' + esc(q.chunk.title) + '</p>') +
      '<h3>' + esc(q.prompt) + '</h3><div class="choices">' + choices.map(function (c, i) {
        return '<button type="button" class="choice" data-c="' + esc(c) + '"><span>' + "ABCD"[i] + '</span>' + esc(c) + '</button>';
      }).join("") + '</div><div id="tr-why"></div></article>';
    bindCrumbs();
    content.querySelectorAll(".choice").forEach(function (b) {
      b.addEventListener("click", function () {
        if (content.querySelector(".choice.correct")) return;
        var ok = b.dataset.c === q.answer, p = load(), r = p.q[q.id] || { tries: 0 };
        r.tries += 1; r.right = ok; p.q[q.id] = r; save(p);
        content.querySelectorAll(".choice").forEach(function (x) { x.disabled = true; x.classList.add(x.dataset.c === q.answer ? "correct" : "dimmed"); });
        if (!ok) { b.classList.remove("dimmed"); b.classList.add("wrong"); if (!session.missed[q.id]) { session.missed[q.id] = 1; session.queue.push(q); } }
        else if (!session.missed[q.id]) session.right += 1;
        el("tr-why").innerHTML = '<div class="tr-why ' + (ok ? "ok" : "bad") + '"><b>' + (ok ? "Right." : "Not quite: it's " + esc(q.answer) + ".") + '</b> ' + esc(q.why) +
          (ok ? "" : '<small>This one comes back at the end.</small>') + '</div>' +
          '<div class="tr-actions center"><button type="button" class="primary-action" id="tier-next">Next →</button>' +
          (!ok ? '<button type="button" class="secondary-action" id="tr-reread">Re-read: ' + esc(q.chunk.title) + '</button>' : "") + '</div>';
        on("tier-next", function () { session.pos += 1; renderQ(); });
        on("tr-reread", function () { startLearn(q.chunk); });
        el("tr-why").scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    });
    top();
  }
  function renderEnd() {
    var ctx = session.ctx, p = load(), wrongNow = session.queue.filter(function (q, i, a) { return a.indexOf(q) === i && p.q[q.id] && !p.q[q.id].right; });
    var u = ctx.l ? unit(ctx.t, ctx.l) : null, nextCh = u ? nextToLearn(u.chunks, p) : nextToLearn(realChunks(ctx.t), p);
    content.innerHTML = crumbs(ctx.t, ctx.l, ctx.ch) +
      '<section class="complete-panel lh-done"><span class="complete-icon">✓</span><p class="eyebrow">' + esc(session.label) + '</p><h3>' + session.right + ' of ' + session.total + ' right the first time</h3>' +
      '<p>' + (session.right === session.total ? "All of them. Nice." : "Every miss came back once, so you have seen every answer.") + '</p></section>' +
      '<div class="tr-actions center">' +
      (nextCh ? '<button type="button" class="primary-action" id="tier-next">Learn next: ' + esc(nextCh.title) + ' →</button>' : "") +
      (wrongNow.length ? '<button type="button" class="secondary-action" id="tr-retry">Redo the ' + wrongNow.length + ' still wrong</button>' : "") +
      '<button type="button" class="secondary-action" id="tr-back">' + (ctx.l ? "Back to " + esc(lectureTitle(ctx.l)) : "Back to " + esc(tierById(ctx.t).name)) + '</button></div>';
    bindCrumbs();
    on("tier-next", function () { startLearn(nextCh); });
    on("tr-retry", function () { startQuiz(wrongNow, session.label, ctx); });
    on("tr-back", function () { if (ctx.l) renderUnit(ctx.t, ctx.l); else { tierSel = ctx.t; renderHome(); } top(); });
    top();
  }

  launch.addEventListener("click", open);
  if (back) back.addEventListener("click", close);
  updateLaunch();
})();
