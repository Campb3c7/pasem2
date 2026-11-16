/* EKG Practice exam, built to the real exam's format (data/ekg-exam.js, window.EKG_EXAM):
   15 multiple-choice questions (1 point), 20 rhythm strips (2-4 points) and 5 12-lead EKGs (7 points),
   40 questions, 110-minute timer, on-screen calculator. Strips and 12-leads are answered the way the
   deck reads an EKG (regularity, rate, axis, P, QRS, PR, ST) plus a final interpretation; the read is
   half the points and the final interpretation the other half.
   Modes: full exam (timed or untimed, answers hidden until Submit, then score by part + full review),
   one part at a time with answers checked as you go, and the class poll review (data/ekg-class-polls.js).
   An exam in progress is saved (pasem2:ekg-mock:current) so it can be resumed; the timer only runs
   while the exam is on screen.
   Sources: workbook strips (images/ekg-workbook/, window.EKG_WORKBOOK), generated strips
   (window.RhythmSynth + window.EKG_RHYTHMS), generated 12-leads (window.TwelveSynth), lecture
   questions (window.EKG_INTERPRETATION_OBJECTIVES) and class polls. */
(function () {
  "use strict";

  var polls = window.EKG_CLASS_POLLS, EX = window.EKG_EXAM;
  var launch = document.getElementById("ekg-mock-launch");
  var view = document.getElementById("ekg-mock-view");
  var content = document.getElementById("ekg-mock-content");
  var studyView = document.getElementById("study-view");
  if (!polls || !EX || !launch || !view || !content) return;

  var PROGRESS_KEY = "pasem2:ekg-mock:progress", SAVE_KEY = "pasem2:ekg-mock:current";
  var PASS = 0.7, RETURN_GAP = 3, POLLS_IN_EXAM = 3;
  var F = EX.format;
  var PART_NAMES = { mcq: "Multiple choice", strip: "Rhythm strips", twelve: "12-lead EKGs" };
  var STRIP_ORDER = ["reg", "rate", "p", "qrs", "pr"];
  var TWELVE_ORDER = ["reg", "rate", "axis", "p", "qrs", "pr", "st"];
  var STRIP_TITLES = { reg: "Regularity", rate: "Rate (bpm)", p: "P waves", qrs: "QRS complexes", pr: "PR interval" };
  var state = null, views = [], timer = null;

  function el(id) { return content.querySelector("#" + id); }
  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>'"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c];
    });
  }
  function shuffle(items) {
    var copy = items.slice();
    for (var i = copy.length - 1; i > 0; i -= 1) { var j = Math.floor(Math.random() * (i + 1)); var v = copy[i]; copy[i] = copy[j]; copy[j] = v; }
    return copy;
  }
  function pick(items) { return items[Math.floor(Math.random() * items.length)]; }
  function loadProgress() { try { var v = localStorage.getItem(PROGRESS_KEY); return v ? JSON.parse(v) : {}; } catch (e) { return {}; } }
  function saveProgress(p) { try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); } catch (e) {} }
  function record(id, right) {
    var progress = loadProgress(), entry = progress[id] || { n: 0, r: 0, last: false };
    entry.n += 1; if (right) entry.r += 1; entry.last = !!right;
    progress[id] = entry;
    saveProgress(progress);
  }
  function loadSaved() { try { var v = localStorage.getItem(SAVE_KEY); return v ? JSON.parse(v) : null; } catch (e) { return null; } }
  function saveExam() {
    if (!state || state.mode !== "exam") return;
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify({ parts: state.parts, items: state.items, picks: state.picks, position: state.position, timed: state.timed, timeLeft: state.timeLeft, check: state.check, checked: state.checked, savedAt: Date.now() }));
    } catch (e) {}
  }
  function clearSaved() { try { localStorage.removeItem(SAVE_KEY); } catch (e) {} }
  function letter(i) { return String.fromCharCode(65 + i); }
  function fmtPts(n) { return (Math.round(n * 100) / 100).toString(); }
  function clock(sec) { sec = Math.max(0, Math.round(sec)); var m = Math.floor(sec / 60), s = sec % 60; return m + ":" + (s < 10 ? "0" : "") + s; }
  function optionList(obj) { return Object.keys(obj).map(function (k) { return { id: k, label: obj[k] }; }); }
  function choiceSet(answer, wrong) { var choices = shuffle([answer].concat(wrong.slice(0, 3))); return { choices: choices, answer: choices.indexOf(answer) }; }

  // ---- lookups -------------------------------------------------------------
  var wbById = {}, rhById = {}, rhGroup = {}, caseById = {};
  if (window.EKG_WORKBOOK) window.EKG_WORKBOOK.strips.forEach(function (s) { wbById[s.id] = s; });
  if (window.EKG_RHYTHMS) window.EKG_RHYTHMS.groups.forEach(function (g) { g.rhythms.forEach(function (r) { rhById[r.id] = r; rhGroup[r.id] = g.id; }); });
  EX.twelve.cases.forEach(function (c) { caseById[c.id] = c; });

  // ---- building an exam (plain data, so it can be saved and resumed) -------
  function buildMcq(n) {
    var out = [], lec = window.EKG_INTERPRETATION_OBJECTIVES || [];
    var pollCount = Math.min(POLLS_IN_EXAM, n);
    shuffle(polls).slice(0, pollCount).forEach(function (p) {
      var cs = choiceSet(p.answer, p.wrong);
      out.push({ type: "mcq", id: p.id, kind: "Class poll", prompt: p.prompt, choices: cs.choices, answer: cs.answer, why: p.why });
    });
    // One question from each of several different objectives.
    shuffle(lec).slice(0, n - out.length).forEach(function (o) {
      var pool = [];
      ["test", "apply"].forEach(function (m) { o[m].forEach(function (q, i) { pool.push({ q: q, id: o.id + "|" + m + "|" + i }); }); });
      if (!pool.length) return;
      var x = pick(pool), cs = choiceSet(x.q.choices[x.q.correct], x.q.choices.filter(function (c, i) { return i !== x.q.correct; }));
      out.push({ type: "mcq", id: x.id, kind: o.title, prompt: x.q.prompt, choices: cs.choices, answer: cs.answer, why: x.q.explanation });
    });
    return shuffle(out);
  }
  function buildStrips() {
    var out = [], usedWb = {}, usedGen = {};
    var wb = window.EKG_WORKBOOK, rh = window.EKG_RHYTHMS, canGen = rh && window.RhythmSynth;
    EX.strips.slots.forEach(function (slot) {
      for (var k = 0; k < slot.n; k += 1) {
        var wbPool = wb ? wb.strips.filter(function (s) { return s.family === slot.family && !usedWb[s.id]; }) : [];
        var genPool = canGen ? Object.keys(rhById).filter(function (id) { return rhGroup[id] === slot.gen && rhById[id].steps && !usedGen[id]; }) : [];
        if (!genPool.length && canGen) genPool = Object.keys(rhById).filter(function (id) { return rhGroup[id] === slot.gen && rhById[id].steps; });
        var useWb = wbPool.length && (!genPool.length || Math.random() < slot.wb);
        if (useWb) {
          var s = pick(wbPool), cs = choiceSet(s.name, s.wrong);
          usedWb[s.id] = true;
          out.push({ type: "strip", src: "wb", id: s.id, points: slot.points, choices: cs.choices, answer: cs.answer });
        } else if (genPool.length) {
          var r = rhById[pick(genPool)], wrong = shuffle(r.confuse.filter(function (id) { return rhById[id]; })).map(function (id) { return rhById[id].name; });
          var cg = choiceSet(r.name, wrong);
          usedGen[r.id] = true;
          out.push({ type: "strip", src: "gen", id: r.id, seed: Math.floor(Math.random() * 1e9), points: slot.points, choices: cg.choices, answer: cg.answer });
        }
      }
    });
    return shuffle(out);
  }
  function buildTwelve(n) {
    if (!window.TwelveSynth) return [];
    var cats = EX.twelve.categories, chosen = [];
    shuffle(cats).forEach(function (cat) { if (chosen.length < n) chosen.push(pick(EX.twelve.cases.filter(function (c) { return c.cat === cat; }))); });
    while (chosen.length < n) chosen.push(pick(EX.twelve.cases.filter(function (c) { return chosen.indexOf(c) < 0; })));
    return shuffle(chosen).map(function (c) {
      var cs = choiceSet(c.name, shuffle(c.confuse).map(function (id) { return caseById[id].name; }));
      return { type: "twelve", id: c.id, seed: Math.floor(Math.random() * 1e9), points: F.twelvePoints, choices: cs.choices, answer: cs.answer };
    });
  }
  function buildExam(parts) {
    var items = [];
    if (parts.indexOf("mcq") >= 0) items = items.concat(buildMcq(F.mcq));
    if (parts.indexOf("strip") >= 0) items = items.concat(buildStrips());
    if (parts.indexOf("twelve") >= 0) items = items.concat(buildTwelve(F.twelve));
    return items;
  }

  // ---- turning an item into what's shown and graded ------------------------
  function hydrate(i) {
    if (views[i]) return views[i];
    var item = state.items[i], v = { fields: [], why: "" };
    if (item.type === "strip" && item.src === "wb") {
      var s = wbById[item.id], o = window.EKG_WORKBOOK.options, key = s.key || {};
      v.title = "Workbook strip " + s.n;
      v.visual = '<div class="wb-strip"><img src="images/ekg-workbook/' + s.id + '.webp" alt="Rhythm strip" decoding="async"></div>';
      v.fields = STRIP_ORDER.map(function (k) {
        if (k === "rate") return { id: "rate", title: STRIP_TITLES.rate, number: true, answer: s.rate };
        return { id: k, title: STRIP_TITLES[k], options: optionList(o[k].options), answer: s[k], accept: (o[k].clash || {})[s[k]] || [] };
      });
      v.why = '<p><strong>Workbook answer key:</strong> ' + escapeHtml(key.interp || s.name) + (key.rate ? ', rate ' + escapeHtml(key.rate) : "") +
        (key.pr ? ', PR ' + escapeHtml(key.pr) : "") + (key.qrs ? ', QRS ' + escapeHtml(key.qrs) : "") + '.' + (key.comment ? ' ' + escapeHtml(key.comment) + '.' : "") + '</p>' +
        (window.EKG_WORKBOOK.clues[s.base] ? '<p>' + escapeHtml(window.EKG_WORKBOOK.clues[s.base]) + '</p>' : "") + (s.note ? '<p>' + escapeHtml(s.note) + '</p>' : "");
    } else if (item.type === "strip") {
      var r = rhById[item.id], steps = window.EKG_RHYTHMS.steps, made = window.RhythmSynth.make(r.gen, item.seed);
      v.title = "Rhythm strip";
      v.visual = '<div class="rs-box">' + made.svg + '</div>';
      v.fields = STRIP_ORDER.map(function (k) {
        if (k === "rate") return { id: "rate", title: STRIP_TITLES.rate, number: true, answer: made.rate };
        return { id: k, title: STRIP_TITLES[k], options: optionList(steps[k].options), answer: r.steps[k], accept: [] };
      });
      v.why = '<p>' + escapeHtml(r.clue) + '</p>' + (r.mgmt ? '<p><strong>Why it happens:</strong> ' + escapeHtml(r.mgmt) + '</p>' : "");
    } else if (item.type === "twelve") {
      var c = caseById[item.id], drawn = window.TwelveSynth.make(c, item.seed), byId = {};
      EX.twelve.fields.forEach(function (f) { byId[f.id] = f; });
      v.title = "12-lead EKG";
      v.visual = '<div class="tw-ekg">' + drawn.svg + '</div>';
      v.fields = TWELVE_ORDER.map(function (k) {
        var f = byId[k];
        if (f.number) return { id: k, title: f.title, number: true, answer: drawn.rate };
        return { id: k, title: f.title, options: optionList(f.options), answer: c.answers[k], accept: [] };
      });
      v.why = '<p>' + escapeHtml(c.why) + '</p>';
    } else {
      v.why = '<p>' + escapeHtml(item.why) + '</p>';
    }
    views[i] = v;
    return v;
  }

  // ---- grading -------------------------------------------------------------
  function rateOk(truth, p) {
    if (truth == null || truth === 0) return !!p.norate || (p.rate !== "" && p.rate != null && Number(p.rate) === 0);
    var n = parseFloat(p.rate);
    return !p.norate && isFinite(n) && Math.abs(n - truth) <= Math.max(8, truth * 0.1);
  }
  function grade(i) {
    var item = state.items[i], p = state.picks[i] || {}, v = hydrate(i);
    if (item.type === "mcq") return { earned: p.choice === item.answer ? 1 : 0, max: 1, rows: [], finalOk: p.choice === item.answer };
    var sys = item.points / 2 / v.fields.length, earned = 0;
    var rows = v.fields.map(function (f) {
      var ok = f.number ? rateOk(f.answer, p) : (p[f.id] === f.answer || (f.accept || []).indexOf(p[f.id]) >= 0);
      if (ok) earned += sys;
      return { f: f, ok: ok, pts: sys };
    });
    var finalOk = p.choice === item.answer;
    if (finalOk) earned += item.points / 2;
    return { earned: earned, max: item.points, rows: rows, finalOk: finalOk };
  }
  function answeredState(i) {
    var item = state.items[i], p = state.picks[i] || {};
    if (item.type === "mcq") return p.choice != null ? "done" : "";
    var v = hydrate(i), filled = v.fields.filter(function (f) { return f.number ? (p.norate || (p.rate != null && p.rate !== "")) : p[f.id]; }).length;
    if (filled === v.fields.length && p.choice != null) return "done";
    return filled || p.choice != null ? "partial" : "";
  }

  // ---- open / close --------------------------------------------------------
  function open() {
    studyView.hidden = true;
    document.querySelectorAll(".walkthrough-view").forEach(function (section) { section.hidden = true; });
    document.querySelectorAll("[data-rhythm-tool]").forEach(function (other) { other.innerHTML = ""; });
    view.hidden = false;
    renderHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function close() {
    saveExam(); stopTimer(); hideCalc();
    state = null; views = []; view.hidden = true; studyView.hidden = false; content.innerHTML = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function bindHome() { el("mock-home").addEventListener("click", function () { saveExam(); stopTimer(); hideCalc(); renderHome(); }); }

  // ---- home ----------------------------------------------------------------
  function renderHome() {
    state = null; views = [];
    var progress = loadProgress(), best = progress.exam110, saved = loadSaved();
    var seen = polls.filter(function (p) { return progress[p.id]; }).length;
    var total = F.mcq * F.mcqPoints + EX.strips.slots.reduce(function (s, x) { return s + x.n * x.points; }, 0) + F.twelve * F.twelvePoints;
    var resume = "";
    if (saved && saved.items && saved.items.length) {
      var answered = saved.picks.filter(function (p) { return p && p.choice != null; }).length;
      resume = '<button class="murmur-quick-card mx-resume" type="button" id="mock-resume"><span>In progress</span><strong>Resume your exam →</strong><small>' + answered + ' of ' + saved.items.length + ' answered' +
        (saved.timed ? ' · ' + clock(saved.timeLeft) + ' left on the clock' : ' · untimed') + (saved.check ? ' · checking as you go' : "") + '. Starting a new exam replaces it.</small></button>';
    }
    content.innerHTML = '<div class="drill-heading"><p class="eyebrow">EKG · exam Friday 11/20</p><h2>Practice exam</h2>' +
      '<p>Built to the real exam\'s format: ' + F.mcq + ' multiple-choice questions, ' + EX.strips.slots.reduce(function (s, x) { return s + x.n; }, 0) + ' rhythm strips and ' + F.twelve +
      ' 12-lead EKGs. Every strip and 12-lead needs a final interpretation. ' + F.minutes + ' minutes, with a calculator. A new exam every time.</p></div>' +
      resume +
      '<div class="murmur-quick rs-quick">' +
      '<button class="murmur-quick-card" type="button" id="mock-exam"><span>Timed · ' + F.minutes + ' min</span><strong>Full practice exam →</strong><small>40 questions, ' + total + ' points. Answers stay hidden until you hand it in, then you get your score by part and a full review. ' + (best ? 'Best: ' + fmtPts(best.best) + ' of ' + best.of + ' (' + Math.round(best.best / best.of * 100) + '%).' : "Not taken yet.") + '</small></button>' +
      '<button class="murmur-quick-card" type="button" id="mock-exam-untimed"><span>No clock</span><strong>Untimed exam →</strong><small>The same 40-question exam without the timer, for when you want to work through it slowly.</small></button>' +
      '</div>' +
      '<p class="eyebrow mx-sub">Practice one part · answers checked as you go</p>' +
      '<div class="murmur-quick mx-parts">' +
      '<button class="murmur-quick-card" type="button" id="mock-part-mcq"><span>' + F.mcq + ' questions · 1 point each</span><strong>Multiple choice →</strong><small>Class polls and one question from each of several objectives.</small></button>' +
      '<button class="murmur-quick-card" type="button" id="mock-part-strip"><span>20 strips · 2-4 points each</span><strong>Rhythm strips →</strong><small>Real workbook strips and freshly drawn ones: regularity, rate, P, QRS, PR, then the final interpretation.</small></button>' +
      '<button class="murmur-quick-card" type="button" id="mock-part-twelve"><span>' + F.twelve + ' EKGs · 7 points each</span><strong>12-lead EKGs →</strong><small>STEMIs, blocks, hypertrophy, electrolytes, pericarditis, PE, pacers: work through each step, then name it.</small></button>' +
      '</div>' +
      '<article class="learn-card rs-card"><p class="eyebrow">How it\'s scored</p><div class="learn-body"><ul>' +
      '<li><strong>Multiple choice:</strong> ' + F.mcq + ' × 1 point.</li>' +
      '<li><strong>Rhythm strips:</strong> sinus 2 points; atrial, junctional, ventricular and early-beat strips 3; AV blocks 4 (60 points). Half for your read (regularity, rate, P waves, QRS, PR), half for the final interpretation.</li>' +
      '<li><strong>12-leads:</strong> ' + F.twelve + ' × 7 points. Half for your read (regularity, rate, axis, P, QRS, PR, ST/T), half for the final interpretation.</li>' +
      '<li>Your rate counts if it is within 10% (at least ±8 bpm). Count it however you like: 300-150-100, 1500 ÷ small boxes, or beats in 6 seconds × 10. The calculator button is in the top bar.</li>' +
      '<li>The real exam\'s point split isn\'t published, so the split above is ours. The 70% line is a target, not the course\'s cutoff.</li></ul></div></article>' +
      '<div class="murmur-quick rs-quick mx-polls"><button class="murmur-quick-card" type="button" id="mock-polls"><span>Class polls</span><strong>Poll review →</strong><small>All ' + polls.length + ' poll questions from the 11/9 EKG App session, answered as marked in class. Instant feedback; misses come back. ' + (seen ? seen + ' of ' + polls.length + ' tried.' : "Not started yet.") + '</small></button></div>';
    if (el("mock-resume")) el("mock-resume").addEventListener("click", function () { resumeExam(saved); });
    el("mock-exam").addEventListener("click", function () { startExam(["mcq", "strip", "twelve"], true, false); });
    el("mock-exam-untimed").addEventListener("click", function () { startExam(["mcq", "strip", "twelve"], false, false); });
    el("mock-part-mcq").addEventListener("click", function () { startExam(["mcq"], false, true); });
    el("mock-part-strip").addEventListener("click", function () { startExam(["strip"], false, true); });
    el("mock-part-twelve").addEventListener("click", function () { startExam(["twelve"], false, true); });
    el("mock-polls").addEventListener("click", startPolls);
  }

  // ---- class poll review (instant feedback) --------------------------------
  function pollQuestion(p) { var cs = choiceSet(p.answer, p.wrong); return { id: p.id, prompt: p.prompt, choices: cs.choices, answer: cs.answer, why: '<p>' + escapeHtml(p.why) + '</p>' }; }
  function startPolls() {
    state = { mode: "polls", items: shuffle(polls).map(pollQuestion), position: 0, total: polls.length, done: 0, firstTry: 0, missed: [] };
    runPoll();
  }
  function runPoll() {
    if (state.position >= state.items.length) { completePolls(); return; }
    var q = state.items[state.position], percent = Math.round(state.done / state.total * 100);
    content.innerHTML = '<div class="session-top"><button type="button" id="mock-home">← Practice exam</button><span>Class poll review</span></div>' +
      '<div class="session-progress"><span style="width:' + percent + '%"></span></div><div class="session-counter">' + state.done + ' of ' + state.total + ' done · ' + state.firstTry + ' right on the first try</div>' +
      '<div class="recall-step-label">' + (q.retry ? "Coming back to this one" : "Poll " + (state.position + 1)) + '</div>' +
      '<article class="question-card immersive-card rs-question"><h3>' + escapeHtml(q.prompt) + '</h3><div class="choices">' + q.choices.map(function (c, i) {
        return '<button class="choice" type="button" data-choice="' + i + '"><span>' + letter(i) + '</span>' + escapeHtml(c) + '</button>';
      }).join("") + '</div><div class="explanation" id="mock-explanation" hidden></div></article><button class="primary-action full-action" id="mock-next" type="button" hidden>Next →</button>';
    bindHome();
    var group = content.querySelector(".choices"), answered = false;
    group.querySelectorAll("[data-choice]").forEach(function (button) {
      button.addEventListener("click", function () {
        if (answered) return;
        answered = true;
        var selected = Number(button.dataset.choice), right = selected === q.answer;
        group.querySelectorAll("[data-choice]").forEach(function (b) {
          var i = Number(b.dataset.choice); b.disabled = true;
          b.classList.add(i === q.answer ? "correct" : i === selected ? "wrong" : "dimmed");
        });
        var exp = el("mock-explanation");
        exp.hidden = false;
        exp.innerHTML = '<strong>' + (right ? "Right: " : "It's: ") + escapeHtml(q.choices[q.answer]) + '</strong><div class="learn-body">' + q.why + '</div>';
        if (!q.retry) state.done += 1;
        if (right) { if (!q.retry) { state.firstTry += 1; record(q.id, true); } }
        else {
          record(q.id, false);
          if (state.missed.indexOf(q.prompt) < 0) state.missed.push(q.prompt);
          if (!q.retry) state.items.splice(Math.min(state.position + 1 + RETURN_GAP, state.items.length), 0, Object.assign(pollQuestion(polls.filter(function (p) { return p.id === q.id; })[0]), { retry: true }));
        }
        el("mock-next").hidden = false;
        exp.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    });
    el("mock-next").addEventListener("click", function () { state.position += 1; runPoll(); });
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }
  function completePolls() {
    var s = state;
    content.innerHTML = '<section class="complete-panel"><span class="complete-icon">' + (s.missed.length ? "📈" : "🎯") + '</span><p class="eyebrow">Done</p><h3>Class poll review</h3><p>' + s.firstTry + ' of ' + s.total + ' right on the first try.</p>' +
      (s.missed.length ? '<p class="rs-missed">Worth another look: ' + s.missed.map(escapeHtml).join(" · ") + '</p>' : "") +
      '<div class="session-actions"><button class="primary-action" id="mock-again" type="button">Go again</button><button class="secondary-action" id="mock-done" type="button">Practice exam home</button></div></section>';
    el("mock-again").addEventListener("click", startPolls);
    el("mock-done").addEventListener("click", renderHome);
  }

  // ---- the exam ------------------------------------------------------------
  function startExam(parts, timed, check) {
    clearSaved();
    var items = buildExam(parts);
    views = [];
    state = { mode: "exam", parts: parts, items: items, picks: items.map(function () { return {}; }), position: 0, timed: timed, timeLeft: F.minutes * 60, check: check, checked: items.map(function () { return false; }), warned: false };
    saveExam();
    if (timed) startTimer();
    renderExam(true);
  }
  function resumeExam(saved) {
    views = [];
    state = { mode: "exam", parts: saved.parts, items: saved.items, picks: saved.picks, position: saved.position || 0, timed: saved.timed, timeLeft: saved.timeLeft, check: saved.check, checked: saved.checked || saved.items.map(function () { return false; }), warned: false };
    if (state.timed && state.timeLeft <= 0) { renderResult(true); return; }
    if (state.timed) startTimer();
    renderExam(true);
  }
  function startTimer() {
    stopTimer();
    timer = setInterval(function () {
      if (!state || state.mode !== "exam" || !state.timed || view.hidden) return;
      state.timeLeft -= 1;
      var t = document.getElementById("mx-timer");
      if (t) { t.textContent = clock(state.timeLeft); t.classList.toggle("low", state.timeLeft <= 600); }
      if (state.timeLeft % 15 === 0) saveExam();
      if (state.timeLeft <= 0) renderResult(true);
    }, 1000);
  }
  function stopTimer() { if (timer) clearInterval(timer); timer = null; }

  function partOf(item) { return item.type; }
  function countBlank() { return state.items.filter(function (x, k) { return answeredState(k) !== "done"; }).length; }
  function gridHtml() {
    var html = "", last = null;
    state.items.forEach(function (item, i) {
      if (partOf(item) !== last) {
        if (last) html += '</div></div>';
        last = partOf(item);
        html += '<div class="mx-grid-part"><span>' + PART_NAMES[last] + '</span><div class="mock-grid">';
      }
      var mark = answeredState(i), checked = state.check && state.checked[i] ? (grade(i).earned === grade(i).max ? " right" : " miss") : "";
      html += '<button type="button" data-mock-jump="' + i + '" class="' + mark + checked + (i === state.position ? " here" : "") + '">' + (i + 1) + '</button>';
    });
    return html + '</div></div>';
  }
  function refreshGrid() { var g = el("mx-grid"); if (g) { g.innerHTML = gridHtml(); bindGrid(); } }
  function bindGrid() {
    content.querySelectorAll("[data-mock-jump]").forEach(function (button) {
      button.addEventListener("click", function () { state.position = Number(button.dataset.mockJump); saveExam(); renderExam(true); });
    });
  }
  function fieldHtml(f, p, locked) {
    var dis = locked ? " disabled" : "";
    if (f.number) {
      return '<label class="mx-field"><span>' + escapeHtml(f.title) + '</span><span class="mx-rate"><input type="number" inputmode="numeric" min="0" max="400" data-field="rate" value="' + escapeHtml(p.norate ? "" : (p.rate || "")) + '"' + (p.norate ? " disabled" : dis) + ' placeholder="bpm">' +
        '<label class="mx-norate"><input type="checkbox" data-field="norate"' + (p.norate ? " checked" : "") + dis + '> No rate to count</label></span></label>';
    }
    return '<label class="mx-field"><span>' + escapeHtml(f.title) + '</span><select data-field="' + f.id + '"' + dis + '><option value="">Choose…</option>' + f.options.map(function (o) {
      return '<option value="' + o.id + '"' + (p[f.id] === o.id ? " selected" : "") + '>' + escapeHtml(o.label) + '</option>';
    }).join("") + '</select></label>';
  }
  function renderExam(toTop) {
    var items = state.items, i = state.position, item = items[i], v = hydrate(i), p = state.picks[i];
    var last = i + 1 === items.length, locked = state.check && state.checked[i];
    var answered = items.filter(function (x, k) { return answeredState(k) === "done"; }).length, blank = items.length - answered;
    var label = state.parts.length === 3 ? "Practice exam" : PART_NAMES[state.parts[0]];
    var kind = item.type === "mcq" ? "Multiple choice" : v.title;
    var prompt = item.type === "mcq" ? item.prompt : item.type === "strip" ? "Interpret this rhythm strip." : "Interpret this 12-lead EKG.";
    content.innerHTML = '<div class="session-top mx-top"><button type="button" id="mock-home">← Practice exam</button><span>' + escapeHtml(label) + ' · ' + answered + ' of ' + items.length + ' answered</span>' +
      '<span class="mx-tools">' + (state.timed ? '<span class="mx-timer' + (state.timeLeft <= 600 ? " low" : "") + '" id="mx-timer">' + clock(state.timeLeft) + '</span>' : "") +
      '<button type="button" class="mx-tool" id="mx-calc-toggle">Calculator</button>' + (state.check ? "" : '<button type="button" class="mx-tool" id="mx-handin">Hand in</button>') + '</span></div>' +
      '<div class="session-progress"><span style="width:' + Math.round(answered / items.length * 100) + '%"></span></div>' +
      '<div id="mx-grid" class="mx-grid" aria-label="Jump to a question">' + gridHtml() + '</div>' +
      '<article class="question-card immersive-card rs-question hs-exam-q mock-q mx-q"><div class="card-number">Question ' + (i + 1) + ' of ' + items.length + ' · ' + escapeHtml(kind) + ' · ' + (item.type === "mcq" ? "1 point" : item.points + " points") + '</div>' +
      (v.visual ? (item.type === "strip" ? '<div class="wb-sticky">' + v.visual + '</div>' : v.visual) : "") +
      '<h3>' + escapeHtml(prompt) + '</h3>' +
      (v.fields.length ? '<div class="mx-fields">' + v.fields.map(function (f) { return fieldHtml(f, p, locked); }).join("") + '</div><p class="mx-final-label">Final interpretation</p>' : "") +
      '<div class="choices">' + item.choices.map(function (c, k) {
        var cls = p.choice === k ? " selected" : "";
        if (locked) cls += k === item.answer ? " correct" : p.choice === k ? " wrong" : " dimmed";
        return '<button class="choice' + cls + '" type="button" data-choice="' + k + '"' + (locked ? " disabled" : "") + '><span>' + letter(k) + '</span>' + escapeHtml(c) + '</button>';
      }).join("") + '</div>' +
      (locked ? '<div class="mx-feedback">' + reviewBody(i, false) + '</div>' : "") + '</article>' +
      (!state.check && last && blank && state.warned ? '<p class="mock-warn">' + blank + ' question' + (blank > 1 ? "s aren't" : " isn't") + ' fully answered (the empty or half-filled numbers above). Press Submit again to hand it in anyway.</p>' : "") +
      '<div class="hs-nav">' + (i ? '<button class="secondary-action" id="mock-prev" type="button">Previous</button>' : "") +
      (state.check && !locked ? '<button class="primary-action" id="mock-check" type="button">Check answer</button>' : "") +
      '<button class="' + (state.check && !locked ? "secondary-action" : "primary-action") + '" id="mock-next" type="button">' + (last ? (state.check ? "See my score" : "Submit exam") : "Next") + '</button></div>';
    bindHome();
    bindGrid();
    content.querySelectorAll("[data-field]").forEach(function (input) {
      var handler = function () {
        var f = input.dataset.field;
        if (f === "norate") { p.norate = input.checked; var box = content.querySelector('[data-field="rate"]'); if (box) { box.disabled = input.checked; if (input.checked) box.value = ""; } if (input.checked) p.rate = ""; }
        else p[f] = input.value;
        refreshGrid(); saveExam();
      };
      input.addEventListener("change", handler);
      if (input.type === "number") input.addEventListener("input", handler);
    });
    content.querySelectorAll(".choices [data-choice]").forEach(function (button) {
      button.addEventListener("click", function () {
        p.choice = Number(button.dataset.choice);
        content.querySelectorAll(".choices [data-choice]").forEach(function (b) { b.classList.toggle("selected", b === button); });
        refreshGrid(); saveExam();
      });
    });
    var prev = el("mock-prev");
    if (prev) prev.addEventListener("click", function () { state.position -= 1; saveExam(); renderExam(true); });
    var check = el("mock-check");
    if (check) check.addEventListener("click", function () {
      state.checked[i] = true; saveExam();
      var keep = window.scrollY; renderExam(false); window.scrollTo(0, keep);
      var fb = content.querySelector(".mx-feedback"); if (fb) fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
    el("mock-next").addEventListener("click", function () {
      if (!last) { state.position += 1; saveExam(); renderExam(true); return; }
      if (!state.check && countBlank() && !state.warned) { state.warned = true; renderExam(false); return; }
      renderResult(false);
    });
    var hand = el("mx-handin");
    if (hand) hand.addEventListener("click", function () {
      var left = countBlank();
      if (!left) { renderResult(false); return; }
      state.position = items.length - 1; state.warned = true; renderExam(true);
    });
    el("mx-calc-toggle").addEventListener("click", toggleCalc);
    if (toTop) content.scrollIntoView({ behavior: "instant", block: "start" });
  }

  // ---- review --------------------------------------------------------------
  function sayField(f, p) {
    if (f.number) return p.norate ? "No rate" : (p.rate !== "" && p.rate != null ? p.rate + " bpm" : "blank");
    var o = f.options.filter(function (x) { return x.id === p[f.id]; })[0];
    return o ? o.label : "blank";
  }
  function truthField(f) {
    if (f.number) return f.answer == null || f.answer === 0 ? "No rate to count" : "About " + f.answer + " bpm (±" + Math.round(Math.max(8, f.answer * 0.1)) + ")";
    var o = f.options.filter(function (x) { return x.id === f.answer; })[0];
    var also = (f.accept || []).map(function (id) { var a = f.options.filter(function (x) { return x.id === id; })[0]; return a ? a.label : null; }).filter(Boolean);
    return (o ? o.label : f.answer) + (also.length ? " (also accepted: " + also.join("; ") + ")" : "");
  }
  function reviewBody(i, withVisual) {
    var item = state.items[i], p = state.picks[i] || {}, v = hydrate(i), g = grade(i);
    var say = function (k) { return k == null ? "no answer" : letter(k) + ". " + item.choices[k]; };
    var html = withVisual && v.visual ? v.visual : "";
    if (withVisual) html += '<h4>' + escapeHtml(item.type === "mcq" ? item.prompt : item.type === "strip" ? "Interpret this rhythm strip." : "Interpret this 12-lead EKG.") + '</h4>';
    if (g.rows.length) {
      html += '<div class="table-scroll"><table class="learn-table mx-rows"><thead><tr><th>Step</th><th>Your answer</th><th>Answer</th><th>Points</th></tr></thead><tbody>' +
        g.rows.map(function (r) {
          return '<tr class="' + (r.ok ? "ok" : "bad") + '"><td>' + escapeHtml(r.f.title) + '</td><td>' + escapeHtml(sayField(r.f, p)) + '</td><td>' + escapeHtml(truthField(r.f)) + '</td><td>' + fmtPts(r.ok ? r.pts : 0) + ' / ' + fmtPts(r.pts) + '</td></tr>';
        }).join("") +
        '<tr class="' + (g.finalOk ? "ok" : "bad") + ' mx-final-row"><td>Final interpretation</td><td>' + escapeHtml(p.choice == null ? "blank" : item.choices[p.choice]) + '</td><td>' + escapeHtml(item.choices[item.answer]) + '</td><td>' + fmtPts(g.finalOk ? item.points / 2 : 0) + ' / ' + fmtPts(item.points / 2) + '</td></tr>' +
        '</tbody></table></div>';
    } else {
      html += (g.finalOk ? "" : '<p class="hs-review-pick">Your answer: ' + escapeHtml(say(p.choice)) + '</p>') + '<p class="hs-review-answer">Answer: ' + escapeHtml(say(item.answer)) + '</p>';
    }
    return html + '<p class="mx-earned">' + fmtPts(g.earned) + ' of ' + g.max + ' point' + (g.max > 1 ? "s" : "") + '</p><div class="learn-body">' + v.why + '</div>';
  }
  function renderResult(timeUp) {
    stopTimer(); hideCalc();
    var items = state.items, parts = {}, earned = 0, max = 0;
    items.forEach(function (item, i) {
      var g = grade(i), k = partOf(item);
      parts[k] = parts[k] || { e: 0, m: 0, n: 0 };
      parts[k].e += g.earned; parts[k].m += g.max; parts[k].n += 1;
      earned += g.earned; max += g.max;
    });
    var percent = Math.round(earned / max * 100), passed = earned / max >= PASS, full = state.parts.length === 3;
    items.forEach(function (item, i) { var g = grade(i); record(item.id, g.earned === g.max); });
    var progress = loadProgress();
    if (full) {
      if (!progress.exam110 || earned > progress.exam110.best) progress.exam110 = { best: Math.round(earned * 100) / 100, of: max };
      progress.exam110Taken = (progress.exam110Taken || 0) + 1;
    }
    saveProgress(progress);
    clearSaved();
    var review = items.map(function (item, i) {
      var g = grade(i), ok = g.earned === g.max;
      return '<article class="hs-review ' + (ok ? "ok" : g.earned > 0 ? "part" : "bad") + '"><p class="eyebrow">Question ' + (i + 1) + ' · ' + escapeHtml(item.type === "mcq" ? item.kind : hydrate(i).title) + ' · ' + fmtPts(g.earned) + ' of ' + g.max + '</p>' + reviewBody(i, true) + '</article>';
    }).join("");
    state.mode = "result";
    content.innerHTML = '<section class="complete-panel"><span class="complete-icon">' + (passed ? "✓" : "!") + '</span><p class="eyebrow">' + (full ? "EKG practice exam" : PART_NAMES[state.parts[0]]) + (timeUp ? " · time ran out" : "") + '</p><h3>' + percent + '%' + (passed ? "" : ": below the 70% target") + '</h3><p>' + fmtPts(earned) + ' of ' + max + ' points.</p>' +
      '<div class="table-scroll"><table class="learn-table mock-parts"><thead><tr><th>Part</th><th>Points</th><th>%</th></tr></thead><tbody>' + Object.keys(parts).map(function (k) {
        return '<tr><td>' + PART_NAMES[k] + ' (' + parts[k].n + ')</td><td>' + fmtPts(parts[k].e) + ' / ' + parts[k].m + '</td><td>' + Math.round(parts[k].e / parts[k].m * 100) + '%</td></tr>';
      }).join("") + '</tbody></table></div>' +
      '<div class="session-actions"><button class="primary-action" id="mock-again" type="button">New ' + (full ? "practice exam" : "set") + '</button><button class="secondary-action" id="mock-done" type="button">Practice exam home</button></div></section>' +
      '<h3 class="hs-review-title">Review</h3><div class="hs-review-list mock-review">' + review + '</div>';
    var redo = { parts: state.parts, timed: state.timed, check: state.check };
    el("mock-again").addEventListener("click", function () { startExam(redo.parts, redo.timed, redo.check); });
    el("mock-done").addEventListener("click", renderHome);
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }

  // ---- calculator ----------------------------------------------------------
  var calc = { display: "0", acc: null, op: null, fresh: true }, calcBox = null;
  function calcFmt(n) { if (!isFinite(n)) return "Error"; return String(Math.round(n * 1e6) / 1e6); }
  function calcApply(a, op, b) { return op === "+" ? a + b : op === "−" ? a - b : op === "×" ? a * b : op === "÷" ? a / b : b; }
  function calcPress(k) {
    var cur = parseFloat(calc.display);
    if (/^[0-9]$/.test(k)) { calc.display = calc.fresh || calc.display === "0" ? k : calc.display + k; calc.fresh = false; }
    else if (k === ".") { if (calc.fresh) { calc.display = "0."; calc.fresh = false; } else if (calc.display.indexOf(".") < 0) calc.display += "."; }
    else if (k === "C") { calc = { display: "0", acc: null, op: null, fresh: true }; }
    else if (k === "⌫") { calc.display = calc.fresh || calc.display.length < 2 ? "0" : calc.display.slice(0, -1); }
    else if (k === "√") { calc.display = calcFmt(Math.sqrt(cur)); calc.fresh = true; }
    else if (k === "=") { if (calc.op) { calc.display = calcFmt(calcApply(calc.acc, calc.op, cur)); calc.acc = null; calc.op = null; } calc.fresh = true; }
    else {
      if (calc.op && !calc.fresh) calc.acc = calcApply(calc.acc, calc.op, cur); else if (calc.acc == null || !calc.op) calc.acc = cur;
      calc.op = k; calc.fresh = true; calc.display = calcFmt(calc.acc);
    }
    if (calcBox) { calcBox.querySelector(".mx-calc-display").textContent = calc.display; calcBox.querySelector(".mx-calc-op").textContent = calc.op ? calcFmt(calc.acc) + " " + calc.op : ""; }
  }
  function toggleCalc() {
    if (calcBox && !calcBox.hidden) { hideCalc(); return; }
    if (!calcBox) {
      calcBox = document.createElement("div");
      calcBox.className = "mx-calc";
      var keys = ["C", "⌫", "√", "÷", "7", "8", "9", "×", "4", "5", "6", "−", "1", "2", "3", "+", "0", ".", "="];
      calcBox.innerHTML = '<div class="mx-calc-head"><span>Calculator</span><button type="button" data-calc-close aria-label="Close calculator">×</button></div><div class="mx-calc-screen"><span class="mx-calc-op"></span><span class="mx-calc-display">0</span></div><div class="mx-calc-keys">' +
        keys.map(function (k) { return '<button type="button" data-calc="' + k + '"' + (k === "0" ? ' class="wide"' : /[÷×−+=]/.test(k) ? ' class="op"' : "") + '>' + k + '</button>'; }).join("") + '</div>';
      view.appendChild(calcBox);
      calcBox.addEventListener("click", function (e) {
        var b = e.target.closest("button"); if (!b) return;
        if (b.hasAttribute("data-calc-close")) { hideCalc(); return; }
        calcPress(b.dataset.calc);
      });
    }
    calcBox.hidden = false;
  }
  function hideCalc() { if (calcBox) calcBox.hidden = true; }

  launch.addEventListener("click", open);
  document.getElementById("ekg-mock-back").addEventListener("click", close);
}());
