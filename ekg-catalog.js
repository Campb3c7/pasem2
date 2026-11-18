/* EKG Catalog: look-only gallery of every strip and 12-lead finding, with real labeled examples.
   Data: window.EKG_CATALOG (data/ekg-catalog.js); example pictures come from window.EKG_WORKBOOK
   (wb-*), window.EKG_EXAMPLIFY (exq-*) and the deck slides listed in EKG_CATALOG.deck (deck-*).
   Look-only gallery plus a "Quiz the catalog" mode (every picture as 4-choice "what does this show?"). No saved progress; the open part (strip / 12-lead) is remembered per browser. */
(function () {
  "use strict";
  var data = window.EKG_CATALOG;
  var launch = document.getElementById("ekg-catalog-launch");
  var view = document.getElementById("ekg-catalog-view");
  var content = document.getElementById("ekg-catalog-content");
  var studyView = document.getElementById("study-view");
  if (!data || !launch || !view || !content) return;

  var PART_KEY = "pasem2:ekg-catalog:part";
  var wb = {}, exq = {}, hw = {};
  ((window.EKG_WORKBOOK || {}).strips || []).forEach(function (s) { wb[s.id] = s; });
  var EX = window.EKG_EXAMPLIFY || {};
  (EX.questions || []).forEach(function (q) { exq[q.id] = q; });
  (EX.homework || []).forEach(function (h) { for (var n = h.from; n <= h.to; n += 1) hw["exq-" + n] = h.title; });

  function esc(v) { return String(v == null ? "" : v).replace(/[&<>'"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c]; }); }

  // Turn an example id into { fmt, img, label, source, lines[] }.
  function resolve(id) {
    var m;
    if ((m = /^wb-/.exec(id)) && wb[id]) {
      var s = wb[id], k = s.key || {};
      var lines = [];
      var facts = [["Rhythm", k.rhythm], ["Rate", k.rate], ["P", k.p], ["PR", k.pr], ["QRS", k.qrs]].filter(function (f) { return f[1]; });
      if (facts.length) lines.push(facts.map(function (f) { return f[0] + ": " + f[1]; }).join(" · "));
      if (k.comment) lines.push(k.comment);
      if (s.note) lines.push("Note: " + s.note);
      return { fmt: "strip", img: "images/ekg-workbook/" + id + ".webp", label: k.interp || s.name, source: "Workbook strip #" + s.n + " · answer key", lines: lines };
    }
    if (/^exq-/.test(id) && exq[id]) {
      var q = exq[id];
      return { fmt: /12 lead/i.test(q.question) ? "12" : "strip", img: q.image, label: q.answer, source: "Examplify" + (hw[id] ? " · " + hw[id] : "") + " · your answer key", lines: [q.why] };
    }
    if ((m = /^deck-(\d+)$/.exec(id)) && data.deck[m[1]]) {
      var d = data.deck[m[1]];
      return { fmt: d.fmt, img: "images/ekg-catalog/deck-" + ("00" + m[1]).slice(-3) + ".webp", label: d.title, source: "EKG Interpretation lecture · slide " + m[1], lines: [d.note] };
    }
    return null;
  }

  // Build the parts: strip entries keep all their examples; the 12-lead part gets an extra group
  // "Rhythm on a 12-lead" made from each strip entry's 12-lead examples.
  var parts = data.parts.map(function (p) {
    return { id: p.id, title: p.title, blurb: p.blurb, groups: p.groups.map(function (g) {
      return { id: g.id, title: g.title, entries: g.entries.map(function (e) {
        return { id: e.id, name: e.name, what: e.what, look: e.look, examples: e.examples.map(resolve).filter(Boolean) };
      }) };
    }) };
  });
  var stripPart = parts.filter(function (p) { return p.id === "strip"; })[0];
  var twelvePart = parts.filter(function (p) { return p.id === "twelve"; })[0];
  if (stripPart && twelvePart) {
    var rhythmEntries = [];
    stripPart.groups.forEach(function (g) {
      g.entries.forEach(function (e) {
        var tw = e.examples.filter(function (x) { return x.fmt === "12"; });
        if (tw.length) rhythmEntries.push({ id: e.id + "-12", name: e.name, what: e.what + " Read the rhythm from the long lead II strip at the bottom.", look: e.look, examples: tw });
      });
    });
    if (rhythmEntries.length) twelvePart.groups.push({ id: "rhythm-12", title: "Rhythm on a 12-lead", entries: rhythmEntries });
  }
  var flat = [];
  parts.forEach(function (p) { p.groups.forEach(function (g) { g.entries.forEach(function (e) { flat.push({ part: p, group: g, entry: e }); }); }); });
  var seen = {}, total = 0, findings = 0;
  flat.forEach(function (f) {
    if (!/-12$/.test(f.entry.id)) findings += 1;
    f.entry.examples.forEach(function (x) { if (!seen[x.img]) { seen[x.img] = true; total += 1; } });
  });

  function getPart() { try { return localStorage.getItem(PART_KEY) || "strip"; } catch (e) { return "strip"; } }
  function setPart(v) { try { localStorage.setItem(PART_KEY, v); } catch (e) { /* private mode */ } }

  function open() {
    studyView.hidden = true;
    document.querySelectorAll(".walkthrough-view").forEach(function (s) { s.hidden = true; });
    view.hidden = false;
    renderHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function close() { view.hidden = true; studyView.hidden = false; content.innerHTML = ""; window.scrollTo({ top: 0, behavior: "smooth" }); }

  function count(e) {
    var n = e.examples.length;
    return n ? n + " example" + (n === 1 ? "" : "s") : "no picture yet";
  }

  function renderHome(scrollTo) {
    var pid = getPart();
    var part = parts.filter(function (p) { return p.id === pid; })[0] || parts[0];
    content.innerHTML = '<div class="mode-intro"><p class="eyebrow">EKG · Catalog</p><h3>Catalog</h3>' +
      '<p>Every finding you need to recognize, with real labeled tracings. Pick one to see what it is, what to look for, and a gallery of examples.</p></div>' +
      '<div class="cat-quizbar"><p class="cat-look-title">Quiz the catalog</p><p>Every picture becomes "What does this EKG show?". A miss comes back once at the end.</p>' +
      '<div class="cat-mode" role="group" aria-label="How to answer"><span>Answer by</span>' +
      '<button type="button" class="cat-mode-btn' + (qMode() === "pick" ? " active" : "") + '" data-qmode="pick">Picking from 4</button>' +
      '<button type="button" class="cat-mode-btn' + (qMode() === "type" ? " active" : "") + '" data-qmode="type">Typing (answers fill in as you type)</button></div>' +
      '<div class="session-actions exq-actions">' +
      '<button class="primary-action" type="button" data-quiz="all">Quiz all (' + pool.length + ')</button>' +
      '<button class="secondary-action" type="button" data-quiz="strip">Strips only (' + pool.filter(function (q) { return q.x.fmt !== "12"; }).length + ')</button>' +
      '<button class="secondary-action" type="button" data-quiz="12">12-leads only (' + pool.filter(function (q) { return q.x.fmt === "12"; }).length + ')</button>' +
      '<button class="secondary-action" type="button" data-quiz="20">Quick 20, mixed</button></div></div>' +
      '<div class="cat-tabs" role="tablist">' + parts.map(function (p) {
        return '<button type="button" role="tab" class="cat-tab' + (p === part ? " active" : "") + '" aria-selected="' + (p === part) + '" data-part="' + p.id + '">' + esc(p.title) + '</button>';
      }).join("") + '</div>' +
      '<p class="cat-blurb">' + esc(part.blurb) + '</p>' +
      part.groups.map(function (g) {
        return '<section class="cat-group"><h4>' + esc(g.title) + '</h4><div class="cat-entries">' + g.entries.map(function (e) {
          return '<button type="button" class="cat-entry' + (e.examples.length ? "" : " empty") + '" data-entry="' + e.id + '"><strong>' + esc(e.name) + '</strong><small>' + count(e) + '</small></button>';
        }).join("") + '</div></section>';
      }).join("");
    content.querySelectorAll("[data-qmode]").forEach(function (b) {
      b.addEventListener("click", function () { setQMode(b.getAttribute("data-qmode")); renderHome(); });
    });
    content.querySelectorAll("[data-quiz]").forEach(function (b) {
      b.addEventListener("click", function () { startQuiz(b.getAttribute("data-quiz")); });
    });
    content.querySelectorAll("[data-part]").forEach(function (b) {
      b.addEventListener("click", function () { setPart(b.getAttribute("data-part")); renderHome(); });
    });
    content.querySelectorAll("[data-entry]").forEach(function (b) {
      b.addEventListener("click", function () { renderEntry(b.getAttribute("data-entry")); });
    });
    if (scrollTo) {
      var t = content.querySelector('[data-entry="' + scrollTo + '"]');
      if (t) { t.scrollIntoView({ block: "center" }); t.focus(); return; }
    }
    view.scrollIntoView({ behavior: "instant", block: "start" });
  }

  function card(x) {
    return '<figure class="cat-ex' + (x.fmt === "12" ? " cat-ex-12" : "") + '">' +
      '<a class="cat-img" href="' + esc(x.img) + '" target="_blank" rel="noopener" title="Open full size"><img src="' + esc(x.img) + '" alt="' + esc(x.label) + '" loading="lazy" decoding="async"></a>' +
      '<figcaption><strong>' + esc(x.label) + '</strong><span class="cat-src">' + esc(x.source) + '</span>' +
      x.lines.filter(Boolean).map(function (l) { return '<span class="cat-line">' + esc(l) + '</span>'; }).join("") + '</figcaption></figure>';
  }

  function renderEntry(id) {
    var at = -1;
    flat.forEach(function (f, i) { if (f.entry.id === id) at = i; });
    if (at < 0) { renderHome(); return; }
    var f = flat[at], e = f.entry;
    setPart(f.part.id);
    var prev = flat[at - 1], next = flat[at + 1];
    var strips = e.examples.filter(function (x) { return x.fmt !== "12"; });
    var twelves = e.examples.filter(function (x) { return x.fmt === "12"; });
    var gallery;
    if (!e.examples.length) {
      gallery = '<p class="cat-none">No real picture of this yet. The description and what to look for above are what to know for now.</p>';
    } else if (strips.length && twelves.length) {
      gallery = '<h4 class="cat-gal-head">Strips <small>' + strips.length + '</small></h4><div class="cat-gallery">' + strips.map(card).join("") + '</div>' +
        '<h4 class="cat-gal-head">On a 12-lead <small>' + twelves.length + '</small></h4><div class="cat-gallery">' + twelves.map(card).join("") + '</div>';
    } else {
      gallery = '<h4 class="cat-gal-head">Examples <small>' + e.examples.length + '</small></h4><div class="cat-gallery">' + e.examples.map(card).join("") + '</div>';
    }
    function nav(where) {
      return '<div class="cat-nav cat-nav-' + where + '">' +
        '<button type="button" class="secondary-action" data-go="home">← ' + esc(f.part.title) + ' catalog</button>' +
        '<span>' + (prev ? '<button type="button" class="secondary-action" data-go="' + prev.entry.id + '" title="' + esc(prev.entry.name) + '">‹ Previous</button>' : "") +
        (next ? '<button type="button" class="secondary-action" data-go="' + next.entry.id + '" title="' + esc(next.entry.name) + '">Next ›</button>' : "") + '</span></div>';
    }
    content.innerHTML = nav("top") +
      '<section class="cat-head"><p class="eyebrow">' + esc(f.part.title) + ' · ' + esc(f.group.title) + '</p><h3>' + esc(e.name) + '</h3>' +
      '<p>' + esc(e.what) + '</p>' +
      '<div class="cat-look"><p class="cat-look-title">What to look for</p><ul>' + e.look.map(function (l) { return '<li>' + esc(l) + '</li>'; }).join("") + '</ul></div></section>' +
      gallery + (e.examples.length > 2 ? nav("bottom") : "");
    content.querySelectorAll("[data-go]").forEach(function (b) {
      b.addEventListener("click", function () {
        var g = b.getAttribute("data-go");
        if (g === "home") renderHome(e.id); else renderEntry(g);
      });
    });
    view.scrollIntoView({ behavior: "instant", block: "start" });
  }

  // ---- Quiz the catalog ------------------------------------------------------------------------
  // One question per picture. The asked finding is picked at random from the findings that list the
  // picture (12-lead pictures prefer 12-lead findings); wrong choices never include a finding that lists
  // the picture, clashes with one of them (EKG_CATALOG.quiz.clash) or is in noDistract.
  var Q = data.quiz || { clash: [], noDistract: [] };
  var noD = {}; (Q.noDistract || []).forEach(function (id) { noD[id] = true; });
  var clashOf = {};
  (Q.clash || []).forEach(function (set) { set.forEach(function (a) { set.forEach(function (b) { if (a !== b) (clashOf[a] = clashOf[a] || {})[b] = true; }); }); });
  var real = flat.filter(function (f) { return f.group.id !== "rhythm-12"; });
  var byImg = {}, pool = [];
  real.forEach(function (f) {
    f.entry.examples.forEach(function (x) {
      if (!byImg[x.img]) { byImg[x.img] = { x: x, finds: [] }; pool.push(byImg[x.img]); }
      byImg[x.img].finds.push(f);
    });
  });
  // Pictures whose site answer differs from the key (workbook note) are left out: the key could argue for a wrong choice.
  pool = pool.filter(function (q) { return !q.x.lines.some(function (l) { return /^Note:/.test(l); }); });

  function shuffle(a) { var c = a.slice(); for (var i = c.length - 1; i > 0; i -= 1) { var j = Math.floor(Math.random() * (i + 1)); var v = c[i]; c[i] = c[j]; c[j] = v; } return c; }
  function build(item) {
    var finds = item.finds;
    var ask = finds.filter(function (f) { return !noD[f.entry.id]; });
    if (!ask.length) ask = finds;
    if (item.x.fmt === "12") { var tw = ask.filter(function (f) { return f.part.id === "twelve"; }); if (tw.length) ask = tw; }
    var pickF = ask[Math.floor(Math.random() * ask.length)];
    var banned = {};
    finds.forEach(function (f) { banned[f.entry.id] = true; var c = clashOf[f.entry.id] || {}; for (var k in c) banned[k] = true; });
    function ok(f) { return !banned[f.entry.id] && !noD[f.entry.id] && f.entry.name !== pickF.entry.name; }
    var same = shuffle(real.filter(function (f) { return f.group === pickF.group && ok(f); }));
    var part = shuffle(real.filter(function (f) { return f.part === pickF.part && f.group !== pickF.group && ok(f); }));
    var wrong = same.concat(part).slice(0, 3).map(function (f) { return f.entry.name; });
    var itemNames = [];
    finds.forEach(function (f) { if (itemNames.indexOf(f.entry.name) < 0) itemNames.push(f.entry.name); });
    return { x: item.x, f: pickF, answer: pickF.entry.name, itemNames: itemNames, choices: shuffle([pickF.entry.name].concat(wrong)) };
  }
  var qs = null;
  var QMODE_KEY = "pasem2:ekg-catalog:qmode";
  function qMode() { try { return localStorage.getItem(QMODE_KEY) === "type" ? "type" : "pick"; } catch (e) { return "pick"; } }
  function setQMode(v) { try { localStorage.setItem(QMODE_KEY, v); } catch (e) { /* private mode */ } }

  // Typing mode: every finding name (deduplicated) can be typed; extra words make abbreviations work.
  var ALIAS = {
    "cat-nsr": "nsr normal", "cat-sb": "brady", "cat-st": "tachy tach", "cat-sa": "dysrhythmia", "cat-pause": "arrest",
    "cat-pac": "pac apc premature atrial", "cat-atach": "atrial tach", "cat-svt": "svt psvt", "cat-wap": "wap", "cat-mat": "mat",
    "cat-aflut": "aflutter aflut flutter", "cat-af": "afib a-fib af rvr", "cat-pjc": "pjc", "cat-jbrady": "junctional brady",
    "cat-jr": "escape", "cat-ajr": "ajr", "cat-jt": "junctional tach", "cat-pvc": "pvc vpc unifocal", "cat-pvc-multi": "multifocal pvc",
    "cat-pvc-pattern": "bigeminy trigeminy couplet run", "cat-idio": "ivr", "cat-aivr": "aivr", "cat-vt": "vtach v-tach vt monomorphic",
    "cat-torsades": "torsade tdp polymorphic", "cat-vf": "vfib v-fib vf", "cat-asys": "flatline standstill",
    "cat-avb1": "first 1st heart block", "cat-avb2i": "second 2nd mobitz 1 type 1 wenckebach", "cat-avb2ii": "second 2nd mobitz ii mobitz 2 type 2",
    "cat-avb3": "third 3rd complete heart block chb", "cat-vpaced": "pacer pacemaker paced", "cat-apaced": "pacer pacemaker paced",
    "cat-nocapture": "pacer pacemaker", "cat-strip-ste": "ste", "cat-strip-std": "std", "cat-strip-wide": "bbb",
    "cat-12-normal": "normal ekg", "cat-axis-left": "lad", "cat-axis-right": "rad", "cat-rae": "rae p pulmonale", "cat-lae": "lae p mitrale",
    "cat-rvh": "rvh", "cat-lvh": "lvh", "cat-rbbb": "rbbb", "cat-lbbb": "lbbb", "cat-lah": "lahb lafb fascicular", "cat-lph": "lphb lpfb fascicular",
    "cat-wpw": "wpw", "cat-stemi-sept": "mi stemi", "cat-stemi-ant": "mi stemi", "cat-stemi-antlat": "mi stemi", "cat-stemi-extensive": "mi stemi",
    "cat-stemi-lat": "mi stemi", "cat-stemi-inf": "mi stemi", "cat-stemi-post": "mi stemi", "cat-pe": "pe s1q3t3 embolism",
    "cat-hyperk": "potassium k peaked", "cat-sine": "potassium k", "cat-hypok": "potassium k", "cat-hyperca": "calcium ca", "cat-hypoca": "calcium ca",
    "cat-effusion": "low voltage alternans", "cat-12-vpaced": "pacer pacemaker paced", "cat-12-longqt": "qtc", "cat-strip-longqt": "qtc"
  };
  function words(t) { return String(t).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim().split(" ").filter(Boolean); }
  var answers = [], seenName = {};
  real.forEach(function (f) {
    if (seenName[f.entry.name]) return;
    seenName[f.entry.name] = true;
    answers.push({ name: f.entry.name, words: words(f.entry.name + " " + (ALIAS[f.entry.id] || "")) });
  });
  function suggest(text) {
    var qw = words(text);
    if (!qw.length) return [];
    return answers.filter(function (a) {
      return qw.every(function (w) { return a.words.some(function (aw) { return aw.indexOf(w) === 0; }); });
    }).sort(function (a, b) {
      function rank(x) {
        var exact = qw.every(function (w) { return x.words.indexOf(w) >= 0; });
        return exact ? 0 : x.name.toLowerCase().indexOf(qw[0]) === 0 ? 1 : 2;
      }
      return rank(a) - rank(b) || a.name.length - b.name.length;
    }).slice(0, 7).map(function (a) { return a.name; });
  }

  function startQuiz(kind) {
    var list = pool;
    if (kind === "strip") list = pool.filter(function (q) { return q.x.fmt !== "12"; });
    if (kind === "12") list = pool.filter(function (q) { return q.x.fmt === "12"; });
    list = shuffle(list);
    if (kind === "20") list = list.slice(0, 20);
    qs = { kind: kind, type: qMode() === "type", list: list.map(build), at: 0, right: 0, misses: [], requeued: {} };
    renderQ();
  }
  function renderQ() {
    var s = qs, q = s.list[s.at];
    content.innerHTML = '<div class="session-top"><button type="button" id="catq-back">← Catalog</button><span>' + (s.at + 1) + ' / ' + s.list.length + '</span></div>' +
      '<div class="session-progress"><span style="width:' + (100 * s.at / s.list.length) + '%"></span></div>' +
      '<article class="question-card immersive-card exq-card"><p class="card-number">Catalog quiz · ' + (q.x.fmt === "12" ? "12-lead" : "Rhythm strip") + (q.again ? " · again" : "") + '</p>' +
      '<div class="wb-sticky"><a class="exq-img" href="' + esc(q.x.img) + '" target="_blank" rel="noopener" title="Open full size"><img src="' + esc(q.x.img) + '" alt="EKG to identify" decoding="async"></a></div>' +
      '<h3 class="exq-q">What does this ' + (q.x.fmt === "12" ? "12-lead" : "strip") + ' show?</h3>' +
      (s.type ? '<div class="cat-type"><input id="catq-input" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Start typing, then pick from the list (e.g. afib, wenck, inferior)" aria-label="Your answer">' +
        '<div class="cat-sugg" id="catq-sugg" role="listbox"></div></div>' :
      '<div class="choices" id="catq-choices">' + q.choices.map(function (c, i) {
        return '<button class="choice" type="button" data-c="' + esc(c) + '"><span>' + "ABCD"[i] + '</span>' + esc(c) + '</button>';
      }).join("") + '</div>') + '<div id="catq-after" hidden></div></article>';
    content.querySelector("#catq-back").addEventListener("click", function () { qs = null; renderHome(); });
    content.querySelectorAll("#catq-choices .choice").forEach(function (b) { b.addEventListener("click", function () { answer(b); }); });
    view.scrollIntoView({ behavior: "instant", block: "start" });
    if (s.type) wireTyping();
  }
  function wireTyping() {
    var input = content.querySelector("#catq-input"), box = content.querySelector("#catq-sugg"), list = [], hi = 0;
    function draw() {
      list = suggest(input.value);
      if (hi >= list.length) hi = 0;
      box.innerHTML = list.length ? list.map(function (n, i) {
        return '<button type="button" role="option" class="cat-sugg-item' + (i === hi ? " hi" : "") + '" data-n="' + esc(n) + '">' + esc(n) + '</button>';
      }).join("") : (input.value.trim() ? '<p class="cat-sugg-none">No match yet. Try another word or an abbreviation.</p>' : "");
      box.querySelectorAll("[data-n]").forEach(function (b) {
        b.addEventListener("mousedown", function (e) { e.preventDefault(); });
        b.addEventListener("click", function () { typed(b.getAttribute("data-n")); });
      });
    }
    input.addEventListener("input", function () { hi = 0; draw(); });
    input.addEventListener("keydown", function (e) {
      if (e.key === "ArrowDown" && list.length) { e.preventDefault(); hi = (hi + 1) % list.length; draw(); }
      else if (e.key === "ArrowUp" && list.length) { e.preventDefault(); hi = (hi - 1 + list.length) % list.length; draw(); }
      else if (e.key === "Enter" && list.length) { e.preventDefault(); typed(list[hi]); }
    });
    input.focus({ preventScroll: true });
  }
  function typed(name) {
    var s = qs, q = s.list[s.at];
    var ok = name === q.answer || q.itemNames.indexOf(name) >= 0;
    var input = content.querySelector("#catq-input");
    input.value = name; input.disabled = true; input.blur();
    input.classList.add(ok ? "ok" : "bad");
    content.querySelector("#catq-sugg").innerHTML = "";
    finish(ok, ok && name !== q.answer ? name : null);
  }
  function answer(button) {
    var s = qs, q = s.list[s.at], ok = button.getAttribute("data-c") === q.answer;
    content.querySelectorAll("#catq-choices .choice").forEach(function (b) {
      b.disabled = true;
      if (b.getAttribute("data-c") === q.answer) b.classList.add("correct");
      else if (b === button) b.classList.add("wrong"); else b.classList.add("dimmed");
    });
    finish(ok, null);
  }
  function finish(ok, gotOther) {
    var s = qs, q = s.list[s.at];
    if (ok) s.right += 1;
    else {
      if (!q.again) s.misses.push(q);
      if (!s.requeued[q.x.img]) { s.requeued[q.x.img] = true; s.list.push({ x: q.x, f: q.f, answer: q.answer, itemNames: q.itemNames, choices: shuffle(q.choices), again: true }); }
    }
    var why = q.x.lines.filter(Boolean)[0] || q.f.entry.what;
    var last = s.at === s.list.length - 1;
    var after = content.querySelector("#catq-after");
    var others = q.itemNames.filter(function (n) { return n !== q.answer && n !== gotOther; });
    after.innerHTML = '<p class="ld-fb ' + (ok ? "ok" : "bad") + '">' + (ok ? "Correct" : "Not quite") + '</p>' +
      '<div class="explanation"><strong>Answer: ' + esc(gotOther || q.answer) + '</strong>' +
      (s.type && others.concat(gotOther ? [q.answer] : []).length ? '<p class="cat-src">Also right for this picture: ' + esc(others.concat(gotOther ? [q.answer] : []).join(", ")) + '</p>' : "") +
      '<p>' + esc(why) + '</p>' +
      '<p class="cat-src">Labeled: ' + esc(q.x.label) + ' · ' + esc(q.x.source) + '</p>' +
      '<p class="cat-look-title">What to look for</p><ul>' + q.f.entry.look.map(function (l) { return '<li>' + esc(l) + '</li>'; }).join("") + '</ul></div>' +
      '<button class="primary-action full-action" id="catq-next" type="button">' + (last ? "See results" : "Next question →") + '</button>';
    after.hidden = false;
    content.querySelector("#catq-next").addEventListener("click", function () { if (last) renderQDone(); else { s.at += 1; renderQ(); } });
  }
  function renderQDone() {
    var s = qs, firstTry = s.list.filter(function (q) { return !q.again; }).length;
    var firstRight = firstTry - s.misses.length;
    content.innerHTML = '<section class="complete-panel"><span class="complete-icon">' + (s.misses.length ? "✓" : "🎉") + '</span>' +
      '<p class="eyebrow">Catalog quiz</p><h3>' + firstRight + ' of ' + firstTry + ' right the first time</h3>' +
      (s.misses.length ? '<ul class="fc-round-list">' + s.misses.map(function (q) {
        return '<li class="bad"><b>✗</b><strong>' + esc(q.answer) + '</strong><span>' + esc(q.x.label) + '</span></li>';
      }).join("") + '</ul>' : "") +
      '<div class="session-actions">' + (s.misses.length ? '<button class="primary-action" id="catq-redo" type="button">Redo the ones I missed</button>' : "") +
      '<button class="secondary-action" id="catq-home" type="button">Back to the catalog</button></div></section>';
    if (content.querySelector("#catq-redo")) content.querySelector("#catq-redo").addEventListener("click", function () {
      qs = { kind: "redo", type: s.type, list: shuffle(s.misses).map(function (q) { return { x: q.x, f: q.f, answer: q.answer, itemNames: q.itemNames, choices: shuffle(q.choices) }; }), at: 0, right: 0, misses: [], requeued: {} };
      renderQ();
    });
    content.querySelector("#catq-home").addEventListener("click", function () { qs = null; renderHome(); });
    view.scrollIntoView({ behavior: "instant", block: "start" });
  }

  var status = document.getElementById("ekg-catalog-status");
  if (status) status.textContent = findings + " findings · " + total + " real examples";
  launch.addEventListener("click", open);
  document.getElementById("ekg-catalog-back").addEventListener("click", close);
  window.EKGCatalog = { resolve: resolve, parts: parts, pool: function () { return pool; }, build: build, suggest: suggest };
}());
