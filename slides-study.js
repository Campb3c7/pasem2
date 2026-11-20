/* Slide-by-slide study (Anna, 2026-11-20). A lecture is walked LO by LO in slide order:
     slide (the real slide picture + everything on it + "Why / background")  →  its 2-3 questions  →  next slide …
     → end of the LO: a cumulative review (the LO's review questions + this LO's misses + a few from earlier LOs),
     then the next LO.
   Every screen has a breadcrumb (Slide by slide › Lecture › LO › Slide), the LO page lists every slide so any slide
   can be opened directly, and the place in each LO is remembered.
   Data: window.SLIDE_STUDY (data/slide-study.js + data/slides-<lecture>.js), slide text window.SLIDE_TEXT.
   Progress: pasem2:slides:<course>:progress = { seen: {"<lec>|<n>":1}, q: {id:{right,tries}}, at: {"<lec>|<lo>": step},
     tricky: {"<lec>|<n>":1}, review: {"<lec>|<lo>": best %} }. */
(function () {
  "use strict";
  var data = window.SLIDE_STUDY;
  var launch = document.getElementById("cardio3-slides-launch");
  var view = document.getElementById("cardio3-slides-view");
  var content = document.getElementById("cardio3-slides-content");
  var back = document.getElementById("cardio3-slides-back");
  var studyView = document.getElementById("study-view");
  if (!data || !launch || !view || !content) return;

  var KEY = "pasem2:slides:" + data.course + ":progress";
  var TEXT = window.SLIDE_TEXT || {};
  var session = null;

  function esc(v) { return String(v == null ? "" : v).replace(/[&<>'"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c]; }); }
  function shuffle(a) { var c = a.slice(); for (var i = c.length - 1; i > 0; i -= 1) { var j = Math.floor(Math.random() * (i + 1)); var v = c[i]; c[i] = c[j]; c[j] = v; } return c; }
  function load() { try { var v = JSON.parse(localStorage.getItem(KEY) || "{}"); ["seen", "q", "at", "tricky", "review"].forEach(function (k) { v[k] = v[k] || {}; }); return v; } catch (e) { return { seen: {}, q: {}, at: {}, tricky: {}, review: {} }; } }
  function save(v) { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) { /* private mode */ } }
  function pct(n, d) { return d ? Math.round(100 * n / d) : 0; }
  function el(id) { return document.getElementById(id); }
  function on(id, fn) { var x = el(id); if (x) x.addEventListener("click", fn); }
  function top() { window.scrollTo({ top: Math.max(0, view.offsetTop - 20), behavior: "smooth" }); }

  // Stamp ids and back-links once.
  data.lectures.forEach(function (lec) {
    lec.los.forEach(function (lo) {
      lo.lec = lec;
      lo.slides.forEach(function (s) {
        s.lo = lo; s.key = lec.id + "|" + s.n;
        s.q.forEach(function (q, i) { q.id = lec.id + "|s" + s.n + "|" + i; q.slide = s; q.lo = lo; });
      });
      (lo.review || []).forEach(function (q, i) { q.id = lec.id + "|" + lo.id + "|r|" + i; q.lo = lo; q.slide = null; });
      lo.review = lo.review || [];
    });
  });
  function lecById(id) { return data.lectures.filter(function (l) { return l.id === id; })[0]; }
  function loQs(lo) { var out = []; lo.slides.forEach(function (s) { out = out.concat(s.q); }); return out; }
  function allQs(lo) { return loQs(lo).concat(lo.review); }
  function rightN(list, p) { return list.filter(function (q) { return p.q[q.id] && p.q[q.id].right; }).length; }
  function wrongList(list, p) { return list.filter(function (q) { return p.q[q.id] && !p.q[q.id].right; }); }
  function seenN(lo, p) { return lo.slides.filter(function (s) { return p.seen[s.key]; }).length; }
  function img(lec, n) { return lec.img.replace("{nn}", String(n).padStart(2, "0")).replace("{nnn}", String(n).padStart(3, "0")); }
  function steps(lo) { var out = []; lo.slides.forEach(function (s) { out.push({ kind: "slide", s: s }); s.q.forEach(function (q) { out.push({ kind: "q", q: q }); }); }); return out; }

  function mini(n, d, cls) { return '<span class="tr-mini ' + (cls || "") + '"><span style="width:' + pct(n, d) + '%"></span></span>'; }
  function bar(label, n, d) {
    return '<div class="tr-bar"><div class="tr-bar-top"><span>' + esc(label) + '</span><b>' + n + ' / ' + d + '</b></div><div class="progress-track"><span style="width:' + pct(n, d) + '%"></span></div></div>';
  }
  function crumbs(lec, lo, last) {
    var parts = ['<button type="button" data-crumb="home">Slide by slide</button>'];
    if (lec) parts.push('<button type="button" data-crumb="lec" data-l="' + esc(lec.id) + '">' + esc(lec.short || lec.title) + '</button>');
    if (lo) parts.push('<button type="button" data-crumb="lo" data-l="' + esc(lec.id) + '" data-lo="' + esc(lo.id) + '">' + esc(lo.label) + '</button>');
    if (last) parts.push('<span>' + esc(last) + '</span>');
    return '<nav class="tr-crumbs" aria-label="Where you are">' + parts.join('<i>›</i>') + '</nav>';
  }
  function bindCrumbs() {
    content.querySelectorAll("[data-crumb]").forEach(function (b) {
      b.addEventListener("click", function () {
        session = null;
        var lec = lecById(b.dataset.l);
        if (b.dataset.crumb === "home") renderHome();
        else if (b.dataset.crumb === "lec") renderLecture(lec);
        else renderLO(lec.los.filter(function (x) { return x.id === b.dataset.lo; })[0]);
        top();
      });
    });
  }

  function open() {
    studyView.hidden = true;
    document.querySelectorAll(".walkthrough-view").forEach(function (s) { s.hidden = true; });
    view.hidden = false;
    if (data.lectures.length === 1) renderLecture(data.lectures[0]); else renderHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function close() { session = null; view.hidden = true; studyView.hidden = false; content.innerHTML = ""; updateLaunch(); window.scrollTo({ top: 0, behavior: "smooth" }); }
  function updateLaunch() {
    var p = load(), s = el("cardio3-slides-status");
    if (!s) return;
    s.textContent = data.lectures.map(function (lec) {
      var all = 0, seen = 0; lec.los.forEach(function (lo) { all += lo.slides.length; seen += seenN(lo, p); });
      return (lec.short || lec.title) + ": " + seen + "/" + all + " slides";
    }).join(" · ");
  }

  /* ---------- Home: the lectures ---------- */
  function renderHome() {
    var p = load();
    content.innerHTML = crumbs() +
      '<div class="mode-intro"><p class="eyebrow">Cardio Part 3</p><h3>Slide by slide</h3>' +
      '<p>Each lecture LO by LO, in slide order: look at the slide, answer 2-3 questions about it, then the next slide. Every LO ends with a cumulative review.</p></div>' +
      '<div class="ss-lec-grid">' + data.lectures.map(function (lec) {
        var all = 0, seen = 0, qs = [], i;
        lec.los.forEach(function (lo) { all += lo.slides.length; seen += seenN(lo, p); qs = qs.concat(allQs(lo)); });
        i = rightN(qs, p);
        return '<button type="button" class="tr-lcard" data-lec="' + esc(lec.id) + '"><strong>' + esc(lec.title) + '</strong><small>' + esc(lec.by || "") + ' · ' + lec.los.length + ' LOs · ' + all + ' slides</small>' +
          '<span class="tr-lrow"><em>Slides</em>' + mini(seen, all) + '<b>' + seen + '/' + all + '</b></span>' +
          '<span class="tr-lrow"><em>Questions</em>' + mini(i, qs.length, "q") + '<b>' + i + '/' + qs.length + '</b></span></button>';
      }).join("") + '</div>';
    bindCrumbs();
    content.querySelectorAll("[data-lec]").forEach(function (b) { b.addEventListener("click", function () { renderLecture(lecById(b.dataset.lec)); top(); }); });
  }

  /* ---------- One lecture: its LOs ---------- */
  function nextLO(lec, p) { return lec.los.filter(function (lo) { return seenN(lo, p) < lo.slides.length || p.review[lec.id + "|" + lo.id] == null; })[0]; }
  function renderLecture(lec) {
    session = null;
    var p = load(), nx = nextLO(lec, p), tricky = [], miss = [];
    lec.los.forEach(function (lo) {
      lo.slides.forEach(function (s) { if (p.tricky[s.key]) tricky.push(s); });
      miss = miss.concat(wrongList(allQs(lo), p));
    });
    content.innerHTML = crumbs(lec) +
      '<div class="mode-intro"><p class="eyebrow">Slide by slide · ' + esc(lec.by || "") + '</p><h3>' + esc(lec.title) + '</h3>' +
      '<p>' + lec.los.length + ' LOs in slide order. Go through each LO\'s slides and questions, then its cumulative review, then the next LO. Tap any slide number to jump straight to it.</p></div>' +
      '<div class="tr-actions">' +
      (nx ? '<button type="button" class="primary-action" id="tier-next">▶ ' + (seenN(nx, p) ? "Keep going: " : "Start: ") + esc(nx.label) + ' · ' + esc(nx.title) + '</button>' : '<span class="tr-alldone">✓ Every LO done</span>') +
      (miss.length ? '<button type="button" class="secondary-action" id="ss-miss">My misses (' + miss.length + ')</button>' : "") +
      (tricky.length ? '<button type="button" class="secondary-action" id="ss-tricky">★ My tricky slides (' + tricky.length + ')</button>' : "") + '</div>' +
      '<div class="ss-los">' + lec.los.map(function (lo, i) {
        var sn = seenN(lo, p), qs = allQs(lo), r = rightN(qs, p), best = p.review[lec.id + "|" + lo.id];
        return '<section class="ss-lo' + (sn === lo.slides.length && best != null ? " done" : "") + '"><div class="ss-lo-head"><span class="tr-step-num">' + (sn === lo.slides.length && best != null ? "✓" : i + 1) + '</span>' +
          '<div><strong>' + esc(lo.label) + ' · ' + esc(lo.title) + '</strong><small>' + esc(lo.objective) + '</small></div></div>' +
          '<div class="ss-lo-bars"><span class="tr-lrow"><em>Slides</em>' + mini(sn, lo.slides.length) + '<b>' + sn + '/' + lo.slides.length + '</b></span>' +
          '<span class="tr-lrow"><em>Questions</em>' + mini(r, qs.length, "q") + '<b>' + r + '/' + qs.length + '</b></span>' +
          '<span class="tr-lrow"><em>Review</em><b>' + (best == null ? "not yet" : "best " + best + "%") + '</b></span></div>' +
          '<div class="tr-chunk-btns"><button type="button" class="tr-pill" data-lo="' + esc(lo.id) + '">Open ' + esc(lo.label) + '</button>' +
          '<button type="button" class="tr-pill q" data-review="' + esc(lo.id) + '">Cumulative review</button></div>' +
          '<div class="ss-chips">' + lo.slides.map(function (s) {
            return '<button type="button" class="ss-chip' + (p.seen[s.key] ? " seen" : "") + (p.tricky[s.key] ? " tricky" : "") + '" data-jump="' + esc(lo.id) + '|' + s.n + '" title="' + esc(s.title) + '">' + s.n + '</button>';
          }).join("") + '</div></section>';
      }).join("") + '</div>';
    bindCrumbs();
    on("tier-next", function () { startLO(nx); });
    on("ss-miss", function () { startQuiz(miss, "My misses · " + (lec.short || lec.title), { lec: lec }); });
    on("ss-tricky", function () { session = { kind: "list", list: tricky, pos: 0, lec: lec }; renderListSlide(); });
    content.querySelectorAll("[data-lo]").forEach(function (b) { b.addEventListener("click", function () { renderLO(loById(lec, b.dataset.lo)); top(); }); });
    content.querySelectorAll("[data-review]").forEach(function (b) { b.addEventListener("click", function () { startReview(loById(lec, b.dataset.review)); }); });
    content.querySelectorAll("[data-jump]").forEach(function (b) {
      b.addEventListener("click", function () { var x = b.dataset.jump.split("|"), L = loById(lec, x[0]); jumpTo(L, Number(x[1])); });
    });
  }
  function loById(lec, id) { return lec.los.filter(function (x) { return x.id === id; })[0]; }

  /* ---------- One LO: slide list + start ---------- */
  function renderLO(L) {
    session = null;
    var lec = L.lec, p = load(), at = p.at[lec.id + "|" + L.id] || 0, st = steps(L), sn = seenN(L, p), qs = allQs(L), i = lec.los.indexOf(L);
    content.innerHTML = crumbs(lec, L) +
      '<div class="mode-intro"><p class="eyebrow">' + esc(lec.short || lec.title) + ' · ' + esc(L.label) + '</p><h3>' + esc(L.title) + '</h3><p class="ss-objective">' + esc(L.objective) + '</p></div>' +
      '<div class="tr-bars3 two">' + bar("Slides seen", sn, L.slides.length) + bar("Questions right", rightN(qs, p), qs.length) + '</div>' +
      '<div class="tr-actions">' +
      '<button type="button" class="primary-action" id="tier-next">▶ ' + (at > 0 && at < st.length ? "Keep going from slide " + slideAt(st, at).n : "Start at slide " + L.slides[0].n) + '</button>' +
      (at > 0 ? '<button type="button" class="secondary-action" id="ss-restart">Start this LO over</button>' : "") +
      '<button type="button" class="secondary-action" id="ss-review">Cumulative review (' + reviewSet(L, load()).length + ')</button>' +
      (lec.los[i + 1] ? '<button type="button" class="secondary-action" id="ss-nextlo">Skip to ' + esc(lec.los[i + 1].label) + '</button>' : "") + '</div>' +
      '<ol class="ss-slide-list">' + L.slides.map(function (s) {
        var r = rightN(s.q, p);
        return '<li><button type="button" class="ss-row' + (p.seen[s.key] ? " seen" : "") + '" data-n="' + s.n + '"><span class="ss-row-n">' + s.n + '</span><span class="ss-row-t">' + (p.tricky[s.key] ? "★ " : "") + esc(s.title) + '</span>' +
          '<span class="ss-row-q">' + (s.q.length ? r + "/" + s.q.length : "no questions") + '</span></button></li>';
      }).join("") + '</ol>';
    bindCrumbs();
    on("tier-next", function () { startLO(L); });
    on("ss-restart", function () { var q = load(); q.at[lec.id + "|" + L.id] = 0; save(q); startLO(L); });
    on("ss-review", function () { startReview(L); });
    on("ss-nextlo", function () { renderLO(lec.los[i + 1]); top(); });
    content.querySelectorAll("[data-n]").forEach(function (b) { b.addEventListener("click", function () { jumpTo(L, Number(b.dataset.n)); }); });
  }
  function slideAt(st, at) { for (var i = Math.min(at, st.length - 1); i >= 0; i -= 1) if (st[i].kind === "slide") return st[i].s; return st[0].s; }

  /* ---------- Walking an LO: slide → its questions → next slide → review ---------- */
  function startLO(L) {
    var p = load(), st = steps(L), at = p.at[L.lec.id + "|" + L.id] || 0;
    if (at >= st.length) at = 0;
    while (at > 0 && st[at].kind !== "slide") at -= 1; // resume on the slide, not mid-questions
    session = { kind: "lo", L: L, st: st, at: at, missed: [] };
    renderStep();
  }
  function jumpTo(L, n) {
    var st = steps(L), at = 0;
    st.forEach(function (x, i) { if (x.kind === "slide" && x.s.n === n) at = i; });
    session = { kind: "lo", L: L, st: st, at: at, missed: [] };
    renderStep();
  }
  function renderStep() {
    var L = session.L, p = load();
    if (session.at >= session.st.length) { p.at[L.lec.id + "|" + L.id] = session.st.length; save(p); return renderLOEnd(); }
    p.at[L.lec.id + "|" + L.id] = session.at; save(p);
    var step = session.st[session.at];
    if (step.kind === "slide") renderSlide(step.s); else renderQ(step.q);
  }
  function progressHead(L, s) {
    var i = L.slides.indexOf(s);
    var d = '<div class="lh-dots" aria-hidden="true">';
    L.slides.forEach(function (x, j) { d += '<span class="' + (j < i ? "past" : j === i ? "now" : "") + '"></span>'; });
    return '<div class="tr-session-head"><span>' + esc(L.label) + ' · slide ' + (i + 1) + ' of ' + L.slides.length + '</span><span>Deck slide ' + s.n + '</span></div>' + d + '</div>';
  }
  function slideCard(s, compact) {
    var lec = s.lo.lec, txt = s.html || (TEXT[lec.id] || {})[s.n] || "", p = load();
    return '<article class="learn-card ss-card">' +
      '<div class="ss-card-top"><p class="card-number">Slide ' + s.n + '</p>' +
      (compact ? "" : '<button type="button" class="ss-star' + (p.tricky[s.key] ? " on" : "") + '" id="ss-star" title="Mark this slide as tricky">' + (p.tricky[s.key] ? "★ Tricky" : "☆ Mark tricky") + '</button>') + '</div>' +
      '<h3>' + esc(s.title) + '</h3>' +
      '<a class="ss-img" href="' + esc(img(lec, s.n)) + '" target="_blank" rel="noopener"><img src="' + esc(img(lec, s.n)) + '" alt="Slide ' + s.n + ': ' + esc(s.title) + '" loading="lazy"></a>' +
      (txt ? '<div class="ss-text"><p class="eyebrow">On the slide</p>' + txt + '</div>' : s.pic ? "" : '<div class="ss-text"><p class="ss-none">Only a picture on this slide.</p></div>') +
      (s.pic ? '<div class="ss-text ss-pic"><p class="eyebrow">In the pictures</p>' + s.pic + '</div>' : "") +
      (s.why ? '<div class="ss-why"><p class="eyebrow">Why / background</p>' + s.why + '</div>' : "") +
      '</article>';
  }
  function bindStar(s) {
    on("ss-star", function () {
      var p = load(); if (p.tricky[s.key]) delete p.tricky[s.key]; else p.tricky[s.key] = 1; save(p);
      var b = el("ss-star"); b.classList.toggle("on", !!p.tricky[s.key]); b.textContent = p.tricky[s.key] ? "★ Tricky" : "☆ Mark tricky";
    });
  }
  function renderSlide(s) {
    var L = session.L, p = load();
    p.seen[s.key] = 1; save(p);
    var nextStep = session.st[session.at + 1];
    var label = s.q.length ? "Questions on this slide (" + s.q.length + ") →" : nextStep ? "Next slide →" : "Cumulative review →";
    content.innerHTML = crumbs(L.lec, L, "Slide " + s.n + " · " + s.title) + progressHead(L, s) + slideCard(s) +
      '<div class="hs-nav">' + (session.at ? '<button class="secondary-action" id="ss-prev" type="button">← Back</button>' : "") +
      '<button class="primary-action" id="tier-next" type="button">' + label + '</button></div>';
    bindCrumbs(); bindStar(s);
    on("ss-prev", function () { session.at -= 1; renderStep(); });
    on("tier-next", function () { session.at += 1; renderStep(); });
    top();
  }

  /* One question. In an LO walk a miss goes to the LO review; in a quiz a miss comes back once at the end. */
  function questionHTML(q, choices) {
    return '<h3>' + esc(q.prompt) + '</h3><div class="choices">' + choices.map(function (c, i) {
      return '<button type="button" class="choice" data-c="' + esc(c) + '"><span>' + "ABCD"[i] + '</span>' + esc(c) + '</button>';
    }).join("") + '</div><div id="tr-why"></div>';
  }
  function peek(q) {
    return q.slide ? '<details class="ss-peek"><summary>Show slide ' + q.slide.n + ' again</summary>' + slideCard(q.slide, true) + '</details>' : "";
  }
  function answer(q, b, after) {
    if (content.querySelector(".choice.correct")) return;
    var ok = b.dataset.c === q.answer, p = load(), r = p.q[q.id] || { tries: 0 };
    r.tries += 1; r.right = ok; p.q[q.id] = r; save(p);
    content.querySelectorAll(".choice").forEach(function (x) { x.disabled = true; x.classList.add(x.dataset.c === q.answer ? "correct" : "dimmed"); });
    if (!ok) { b.classList.remove("dimmed"); b.classList.add("wrong"); }
    after(ok);
  }
  function renderQ(q) {
    var L = session.L, s = q.slide, k = s.q.indexOf(q);
    content.innerHTML = crumbs(L.lec, L, "Slide " + s.n + " · question " + (k + 1)) + progressHead(L, s) +
      '<article class="question-card immersive-card"><p class="tr-qfrom">Slide ' + s.n + ' · ' + esc(s.title) + ' · question ' + (k + 1) + ' of ' + s.q.length + '</p>' +
      questionHTML(q, shuffle([q.answer].concat(q.wrong))) + '</article>' + peek(q) +
      '<div class="hs-nav"><button class="secondary-action" id="ss-prev" type="button">← Back</button></div>';
    bindCrumbs();
    on("ss-prev", function () { session.at -= 1; renderStep(); });
    content.querySelectorAll(".choice").forEach(function (b) {
      b.addEventListener("click", function () {
        answer(q, b, function (ok) {
          if (!ok && session.missed.indexOf(q) < 0) session.missed.push(q);
          var last = session.at + 1 >= session.st.length, nxt = session.st[session.at + 1];
          el("tr-why").innerHTML = '<div class="tr-why ' + (ok ? "ok" : "bad") + '"><b>' + (ok ? "Right." : "Not quite: it's " + esc(q.answer) + ".") + '</b> ' + esc(q.why) +
            (ok ? "" : '<small>It comes back in this LO\'s cumulative review.</small>') + '</div>' +
            '<div class="tr-actions center"><button type="button" class="primary-action" id="tier-next">' + (last ? "Cumulative review →" : nxt.kind === "slide" ? "Next slide →" : "Next question →") + '</button></div>';
          on("tier-next", function () { session.at += 1; renderStep(); });
          el("tr-why").scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
      });
    });
    top();
  }
  function renderLOEnd() {
    var L = session.L, missed = session.missed;
    content.innerHTML = crumbs(L.lec, L, "Done with the slides") +
      '<section class="complete-panel lh-done"><span class="complete-icon">✓</span><p class="eyebrow">' + esc(L.label) + ' slides done</p><h3>Now the cumulative review</h3>' +
      '<p>' + reviewSet(L, load(), missed).length + ' questions: this LO\'s review questions' + (missed.length ? ', the ' + missed.length + ' you missed' : "") + ' and a few from earlier LOs. Misses come back once.</p></section>' +
      '<div class="tr-actions center"><button type="button" class="primary-action" id="tier-next">Start the review →</button>' +
      '<button type="button" class="secondary-action" id="ss-back-lo">Back to ' + esc(L.label) + '</button></div>';
    bindCrumbs();
    on("tier-next", function () { startReview(L, missed); });
    on("ss-back-lo", function () { renderLO(L); top(); });
    top();
  }

  /* ---------- Cumulative review ---------- */
  function reviewSet(L, p, missed) {
    var lec = L.lec, i = lec.los.indexOf(L), list = L.review.slice();
    var wrong = (missed && missed.length ? missed : wrongList(loQs(L), p));
    wrong.forEach(function (q) { if (list.indexOf(q) < 0) list.push(q); });
    var earlier = [];
    lec.los.slice(0, i).forEach(function (x) { earlier = earlier.concat(allQs(x)); });
    var earlyWrong = shuffle(wrongList(earlier, p)), earlyRest = shuffle(earlier.filter(function (q) { return earlyWrong.indexOf(q) < 0; }));
    return list.concat(earlyWrong.concat(earlyRest).slice(0, Math.min(5, earlier.length)));
  }
  function startReview(L, missed) {
    var list = reviewSet(L, load(), missed);
    startQuiz(list, L.label + " cumulative review", { lec: L.lec, L: L, review: true });
  }
  function startQuiz(list, label, ctx) {
    var qs = shuffle(list);
    session = { kind: "quiz", label: label, ctx: ctx, queue: qs, pos: 0, total: qs.length, right: 0, missed: {} };
    renderQuizQ();
  }
  function renderQuizQ() {
    var q = session.queue[session.pos], ctx = session.ctx;
    if (!q) return renderQuizEnd();
    var from = q.lo !== ctx.L ? q.lo.label + (q.slide ? " · slide " + q.slide.n : " · review") : q.slide ? "Slide " + q.slide.n + " · " + q.slide.title : "Review question";
    content.innerHTML = crumbs(ctx.lec, ctx.L, session.label) +
      '<div class="tr-session-head"><span>' + esc(session.label) + '</span><span>' + (session.pos + 1) + ' of ' + session.queue.length + '</span></div>' +
      '<div class="progress-track tr-session-bar"><span style="width:' + pct(session.pos, session.queue.length) + '%"></span></div>' +
      '<article class="question-card immersive-card"><p class="tr-qfrom">' + esc(from) + '</p>' + questionHTML(q, shuffle([q.answer].concat(q.wrong))) + '</article>';
    bindCrumbs();
    content.querySelectorAll(".choice").forEach(function (b) {
      b.addEventListener("click", function () {
        answer(q, b, function (ok) {
          if (!ok && !session.missed[q.id]) { session.missed[q.id] = 1; session.queue.push(q); }
          else if (ok && !session.missed[q.id]) session.right += 1;
          el("tr-why").innerHTML = '<div class="tr-why ' + (ok ? "ok" : "bad") + '"><b>' + (ok ? "Right." : "Not quite: it's " + esc(q.answer) + ".") + '</b> ' + esc(q.why) +
            (ok ? "" : '<small>This one comes back at the end.</small>') + '</div>' +
            '<div class="tr-actions center"><button type="button" class="primary-action" id="tier-next">Next →</button>' +
            (!ok && q.slide ? '<button type="button" class="secondary-action" id="ss-reread">Look at slide ' + q.slide.n + ' again</button>' : "") + '</div>' +
            (!ok && q.slide ? '<div id="ss-reread-box"></div>' : "");
          on("tier-next", function () { session.pos += 1; renderQuizQ(); });
          on("ss-reread", function () { el("ss-reread-box").innerHTML = slideCard(q.slide, true); el("ss-reread").remove(); });
          el("tr-why").scrollIntoView({ behavior: "smooth", block: "nearest" });
        });
      });
    });
    top();
  }
  function renderQuizEnd() {
    var ctx = session.ctx, p = load(), L = ctx.L, lec = ctx.lec;
    var uniq = session.queue.filter(function (q, i, a) { return a.indexOf(q) === i; });
    var stillWrong = wrongList(uniq, p), score = pct(session.right, session.total);
    if (ctx.review && L) { var k = lec.id + "|" + L.id; p.review[k] = Math.max(p.review[k] || 0, score); save(p); }
    var nextL = L ? lec.los[lec.los.indexOf(L) + 1] : null;
    content.innerHTML = crumbs(lec, L, session.label) +
      '<section class="complete-panel lh-done"><span class="complete-icon">✓</span><p class="eyebrow">' + esc(session.label) + '</p><h3>' + session.right + ' of ' + session.total + ' right the first time</h3>' +
      '<p>' + (session.right === session.total ? "All of them. Nice." : "Every miss came back once, so you have seen every answer. Slides you starred stay under ★ My tricky slides.") + '</p></section>' +
      '<div class="tr-actions center">' +
      (ctx.review && nextL ? '<button type="button" class="primary-action" id="tier-next">On to ' + esc(nextL.label) + ': ' + esc(nextL.title) + ' →</button>' : "") +
      (ctx.review && !nextL ? '<button type="button" class="primary-action" id="tier-next">✓ Last LO done · back to ' + esc(lec.short || lec.title) + '</button>' : "") +
      (!ctx.review ? '<button type="button" class="primary-action" id="tier-next">Back to ' + esc(lec.short || lec.title) + '</button>' : "") +
      (stillWrong.length ? '<button type="button" class="secondary-action" id="ss-retry">Redo the ' + stillWrong.length + ' still wrong</button>' : "") +
      (L ? '<button type="button" class="secondary-action" id="ss-back-lo">Back to ' + esc(L.label) + '</button>' : "") + '</div>';
    bindCrumbs();
    on("tier-next", function () { if (ctx.review && nextL) startLO(nextL); else { renderLecture(lec); top(); } });
    on("ss-retry", function () { startQuiz(stillWrong, session.label, ctx); });
    on("ss-back-lo", function () { renderLO(L); top(); });
    top();
  }

  /* ---------- My tricky slides: flip through the starred slides ---------- */
  function renderListSlide() {
    var s = session.list[session.pos], lec = session.lec;
    if (!s) { renderLecture(lec); return top(); }
    content.innerHTML = crumbs(lec, s.lo, "★ Tricky slide " + (session.pos + 1) + " of " + session.list.length) + slideCard(s) +
      '<div class="hs-nav">' + (session.pos ? '<button class="secondary-action" id="ss-prev" type="button">← Back</button>' : "") +
      (s.q.length ? '<button class="secondary-action" id="ss-slideq" type="button">This slide\'s questions</button>' : "") +
      '<button class="primary-action" id="tier-next" type="button">' + (session.pos + 1 < session.list.length ? "Next tricky slide →" : "Done") + '</button></div>';
    bindCrumbs(); bindStar(s);
    on("ss-prev", function () { session.pos -= 1; renderListSlide(); });
    on("ss-slideq", function () { startQuiz(s.q, "Slide " + s.n + " questions", { lec: lec, L: s.lo }); });
    on("tier-next", function () { session.pos += 1; renderListSlide(); });
    top();
  }

  launch.addEventListener("click", open);
  if (back) back.addEventListener("click", close);
  updateLaunch();
})();
