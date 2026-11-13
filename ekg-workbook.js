/* EKG Workbook strips: Anna's 174 real workbook strips with the answer key.
   Modes: Read it step by step (rhythm, rate, P, PR, QRS, name), Name it (quick quiz, misses come back),
   and Browse (every strip by group, answer hidden until tapped). A filter picks the rhythm group.
   Data: window.EKG_WORKBOOK (data/ekg-workbook.js). Progress per strip id (wb-NNN). */
(function () {
  "use strict";

  var data = window.EKG_WORKBOOK;
  var launch = document.getElementById("ekg-workbook-launch");
  var view = document.getElementById("ekg-workbook-view");
  var content = document.getElementById("ekg-workbook-content");
  var studyView = document.getElementById("study-view");
  if (!data || !launch || !view || !content) return;

  var PROGRESS_KEY = "pasem2:ekg-workbook:progress";
  var FILTER_KEY = "pasem2:ekg-workbook:filter";
  var STEP_LENGTH = 10, QUIZ_LENGTH = 20, RETURN_GAP = 3;
  var strips = data.strips, byId = {};
  strips.forEach(function (s) { byId[s.id] = s; });
  var state = null;
  var filter = "all";
  try { filter = localStorage.getItem(FILTER_KEY) || "all"; } catch (e) {}

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
  function loadProgress() { try { var v = localStorage.getItem(PROGRESS_KEY); return v ? JSON.parse(v) : {}; } catch (e) { return {}; } }
  function record(id, right) {
    var progress = loadProgress(), entry = progress[id] || { n: 0, r: 0, last: false };
    entry.n += 1; if (right) entry.r += 1; entry.last = !!right;
    progress[id] = entry;
    try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)); } catch (e) {}
  }
  function pool() {
    var progress = loadProgress();
    if (filter === "misses") return strips.filter(function (s) { return progress[s.id] && !progress[s.id].last; });
    if (filter === "new") return strips.filter(function (s) { return !progress[s.id]; });
    if (filter === "all") return strips;
    return strips.filter(function (s) { return s.family === filter; });
  }
  function filterLabel(id) {
    if (id === "all") return "All strips";
    if (id === "misses") return "My misses";
    if (id === "new") return "Not tried yet";
    var family = data.families.find(function (f) { return f.id === id; });
    return family ? family.title : id;
  }

  function img(strip) {
    return '<div class="wb-strip"><img src="images/ekg-workbook/' + strip.id + '.webp" alt="Workbook rhythm strip ' + strip.n + '" loading="lazy" decoding="async"></div>' +
      '<p class="wb-strip-meta">Workbook strip #' + strip.n + ' · 6 seconds (the marks along the top are 3 seconds apart) · scroll sideways on a phone</p>';
  }
  function rateBand(rate) {
    for (var i = 0; i < data.rates.length; i += 1) if (data.rates[i].test(rate)) return data.rates[i];
    return data.rates[data.rates.length - 1];
  }
  function keyTable(strip) {
    var k = strip.key;
    var rows = k.rhythm ? [["Rhythm", k.rhythm], ["Rate", k.rate], ["P waves", k.p], ["PR interval", k.pr], ["QRS", k.qrs]] : [["Rate", k.rate]];
    if (k.comment) rows.push([k.rhythm ? "Comment" : "Analysis", k.comment]);
    rows.push(["Answer key", k.interp]);
    return '<table class="learn-table rs-look wb-key"><tbody>' + rows.map(function (row) {
      return '<tr><th>' + row[0] + '</th><td>' + escapeHtml(row[1]) + '</td></tr>';
    }).join("") + '</tbody></table>';
  }
  function teach(strip) {
    var clue = data.clues[strip.base] || "";
    return '<div class="box-hy"><span class="lbl">Why it\'s ' + escapeHtml(strip.name) + '</span>' + escapeHtml(clue) + '</div>' +
      (strip.note ? '<p class="wb-note"><strong>Note:</strong> ' + escapeHtml(strip.note) + '</p>' : "") +
      keyTable(strip) +
      (strip.rate ? '<p class="rs-rate">Rate check: count the QRS complexes between the 6-second marks and × 10, or 300 ÷ big boxes between two R waves.</p>' : "");
  }

  // ---- open / close --------------------------------------------------------
  function open() {
    studyView.hidden = true;
    document.querySelectorAll(".walkthrough-view").forEach(function (section) { section.hidden = true; });
    view.hidden = false;
    renderHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function close() {
    state = null;
    view.hidden = true;
    studyView.hidden = false;
    content.innerHTML = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function top(label) {
    return '<div class="session-top"><button type="button" id="wb-home">← Workbook strips</button><span>' + escapeHtml(label) + '</span></div>';
  }
  function bindHome() { document.getElementById("wb-home").addEventListener("click", renderHome); }

  // ---- home ----------------------------------------------------------------
  function renderHome() {
    state = null;
    var progress = loadProgress();
    var tried = strips.filter(function (s) { return progress[s.id]; }).length;
    var right = strips.filter(function (s) { return progress[s.id] && progress[s.id].last; }).length;
    var misses = strips.filter(function (s) { return progress[s.id] && !progress[s.id].last; }).length;
    var chips = ["all"].concat(data.families.map(function (f) { return f.id; })).concat(["new", "misses"]);
    var current = pool();
    var html = '<div class="drill-heading"><p class="eyebrow">EKG · Independent EKG Workbook</p><h2>Workbook strips</h2>' +
      '<p>All ' + strips.length + ' rhythm strips from your workbook, checked against the answer key. Read each one the way the exam wants: regularity, rate, P waves, PR, QRS, then name it. Paper: one small box = 0.04 s, one big box = 0.20 s.</p>' +
      '<span class="diseases-count-pill">' + right + ' right on your last try · ' + tried + ' of ' + strips.length + ' tried</span></div>';
    html += '<p class="eyebrow rs-groups-label">Which strips</p><div class="wb-chips">' + chips.map(function (id) {
      var count = id === "misses" ? misses : id === "new" ? strips.length - tried : id === "all" ? strips.length : strips.filter(function (s) { return s.family === id; }).length;
      return '<button type="button" class="wb-chip' + (id === filter ? " active" : "") + '" data-wb-filter="' + id + '">' + escapeHtml(filterLabel(id)) + ' <span>' + count + '</span></button>';
    }).join("") + '</div>';
    if (!current.length) {
      html += '<p class="wb-empty">Nothing here yet. ' + (filter === "misses" ? "Strips you miss will collect here." : "Pick another group.") + '</p>';
    } else {
      html += '<div class="murmur-quick rs-quick">' +
        '<button class="murmur-quick-card" type="button" id="wb-steps"><span>Systematic read</span><strong>Read it step by step →</strong><small>' + Math.min(STEP_LENGTH, current.length) + ' strips: regularity, rate, P waves, PR, QRS, then name it.</small></button>' +
        '<button class="murmur-quick-card" type="button" id="wb-quiz"><span>Quick quiz</span><strong>Name that strip →</strong><small>' + Math.min(QUIZ_LENGTH, current.length) + ' strips, just the name. Misses come back a few strips later.</small></button>' +
        '</div><button class="secondary-action full-action" type="button" id="wb-browse">Browse ' + escapeHtml(filterLabel(filter).toLowerCase()) + ' (' + current.length + ') with answers hidden →</button>';
    }
    content.innerHTML = html;
    content.querySelectorAll("[data-wb-filter]").forEach(function (button) {
      button.addEventListener("click", function () {
        filter = button.dataset.wbFilter;
        try { localStorage.setItem(FILTER_KEY, filter); } catch (e) {}
        renderHome();
      });
    });
    if (current.length) {
      document.getElementById("wb-steps").addEventListener("click", startSteps);
      document.getElementById("wb-quiz").addEventListener("click", startQuiz);
      document.getElementById("wb-browse").addEventListener("click", renderBrowse);
    }
  }

  // ---- browse --------------------------------------------------------------
  function renderBrowse() {
    state = null;
    var list = pool().slice().sort(function (a, b) { return a.n - b.n; });
    var html = top(filterLabel(filter)) + '<div class="drill-heading"><p class="eyebrow">Browse</p><h2>' + escapeHtml(filterLabel(filter)) + '</h2><p>Read the strip first, then tap "Show answer" to check yourself.</p></div>';
    list.forEach(function (strip) {
      html += '<article class="learn-card rs-card wb-card">' + img(strip) +
        '<button class="secondary-action wb-show" type="button" data-wb-show="' + strip.id + '">Show answer</button>' +
        '<div class="learn-body wb-answer" id="wb-answer-' + strip.id + '" hidden><h3>' + escapeHtml(strip.name) + '</h3>' + teach(strip) + '</div></article>';
    });
    content.innerHTML = html;
    bindHome();
    content.querySelectorAll("[data-wb-show]").forEach(function (button) {
      button.addEventListener("click", function () {
        var box = document.getElementById("wb-answer-" + button.dataset.wbShow);
        box.hidden = !box.hidden;
        button.textContent = box.hidden ? "Show answer" : "Hide answer";
      });
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---- shared question pieces ---------------------------------------------
  function choicesHtml(name, labels) {
    return '<div class="choices" data-step="' + name + '">' + labels.map(function (label, index) {
      return '<button class="choice" type="button" data-choice="' + index + '"><span>' + String.fromCharCode(65 + index) + '</span>' + escapeHtml(label) + '</button>';
    }).join("") + '</div>';
  }
  function bindChoices(group, onPick) {
    group.querySelectorAll("[data-choice]").forEach(function (button) {
      button.addEventListener("click", function () { onPick(Number(button.dataset.choice)); });
    });
  }
  function markChoices(group, correct, selected) {
    group.querySelectorAll("[data-choice]").forEach(function (button) {
      var index = Number(button.dataset.choice);
      button.disabled = true;
      if (index === correct) button.classList.add("correct");
      else if (index === selected) button.classList.add("wrong");
      else button.classList.add("dimmed");
    });
  }
  function header() {
    var percent = Math.round(state.done / Math.max(state.total, 1) * 100);
    return top(state.title) + '<div class="session-progress"><span style="width:' + percent + '%"></span></div>' +
      '<div class="session-counter">' + state.done + ' of ' + state.total + ' done · ' + state.firstTry + (state.kind === "steps" ? ' with every step right' : ' right on the first try') + '</div>';
  }
  function nameLabels(strip) { return shuffle([strip.name].concat(strip.wrong)); }
  function optionPart(key, answer) {
    var set = data.options[key];
    var blocked = (set.clash[answer] || []).concat([answer]);
    var wrong = shuffle(Object.keys(set.options).filter(function (k) { return blocked.indexOf(k) < 0; })).slice(0, 3);
    var keys = shuffle([answer].concat(wrong));
    return { name: key, title: set.title, labels: keys.map(function (k) { return set.options[k]; }), answer: set.options[answer] };
  }
  function ratePart(strip) {
    var bands = data.rates, band = rateBand(strip.rate), index = bands.indexOf(band);
    var near = bands.filter(function (b) { return b !== band; }).sort(function (a, b) { return Math.abs(bands.indexOf(a) - index) - Math.abs(bands.indexOf(b) - index); }).slice(0, 3);
    var labels = shuffle([band].concat(near)).map(function (b) { return b.label; });
    return { name: "rate", title: "About what is the ventricular rate?", labels: labels, answer: band.label, note: "Key: " + (strip.key.rate || "not measurable") + "." };
  }

  // ---- step by step --------------------------------------------------------
  function sessionQueue(length) {
    var progress = loadProgress();
    // Unseen and missed strips first, then the rest.
    var list = shuffle(pool());
    list.sort(function (a, b) { return rank(a) - rank(b); });
    function rank(s) { var p = progress[s.id]; return !p ? 0 : !p.last ? 0 : 1; }
    return list.slice(0, Math.min(length, list.length));
  }
  function startSteps() {
    var queue = sessionQueue(STEP_LENGTH);
    state = { kind: "steps", title: "Step by step · " + filterLabel(filter), steps: queue.map(function (s) { return { strip: s }; }), position: 0, total: queue.length, done: 0, firstTry: 0, missed: {}, parts: 0, partsRight: 0 };
    renderStepStrip();
  }
  function renderStepStrip() {
    if (state.position >= state.steps.length) { renderComplete(); return; }
    var step = state.steps[state.position], strip = step.strip;
    step.parts = [optionPart("reg", strip.reg), ratePart(strip), optionPart("p", strip.p), optionPart("pr", strip.pr), optionPart("qrs", strip.qrs),
      { name: "name", title: "Put it together: what is the rhythm?", labels: nameLabels(strip), answer: strip.name }];
    step.index = 0; step.allRight = true;
    content.innerHTML = header() + '<div class="recall-step-label">Strip ' + (state.position + 1) + ' of ' + state.total + '</div>' +
      '<article class="question-card immersive-card rs-question">' + img(strip) + '<div id="wb-parts"></div><div class="explanation" id="wb-explanation" hidden></div></article>' +
      '<button class="primary-action full-action" id="wb-next" type="button" hidden>Next strip →</button>';
    bindHome();
    document.getElementById("wb-next").addEventListener("click", function () { state.position += 1; renderStepStrip(); });
    showPart(step);
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }
  function showPart(step) {
    var part = step.parts[step.index];
    var wrap = document.createElement("div");
    wrap.className = "rs-part";
    wrap.innerHTML = '<p class="rs-part-title"><span>' + (step.index + 1) + '/' + step.parts.length + '</span>' + escapeHtml(part.title) + '</p>' + choicesHtml(part.name, part.labels) + '<p class="rs-part-note" hidden></p>';
    document.getElementById("wb-parts").appendChild(wrap);
    var group = wrap.querySelector(".choices");
    var answered = false;
    bindChoices(group, function (selected) {
      if (answered) return;
      answered = true;
      var correct = part.labels.indexOf(part.answer), right = selected === correct;
      markChoices(group, correct, selected);
      state.parts += 1; if (right) state.partsRight += 1; else step.allRight = false;
      var note = wrap.querySelector(".rs-part-note");
      note.hidden = false;
      note.className = "rs-part-note " + (right ? "ok" : "bad");
      note.textContent = (right ? "Right. " : "It's: " + part.answer + ". ") + (part.note || "");
      step.index += 1;
      if (step.index < step.parts.length) showPart(step);
      else finishStep(step, right);
    });
  }
  function finishStep(step, nameRight) {
    var strip = step.strip;
    record(strip.id, nameRight);
    state.done += 1;
    if (step.allRight) state.firstTry += 1;
    if (!nameRight) state.missed[strip.id] = true;
    var exp = document.getElementById("wb-explanation");
    exp.hidden = false;
    exp.innerHTML = '<strong>' + escapeHtml(strip.name) + (step.allRight ? " · every step right" : "") + '</strong><div class="learn-body">' + teach(strip) + '</div>';
    document.getElementById("wb-next").hidden = false;
    exp.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // ---- name that strip -----------------------------------------------------
  function startQuiz() {
    var queue = sessionQueue(QUIZ_LENGTH);
    state = { kind: "quiz", title: "Name that strip · " + filterLabel(filter), steps: queue.map(function (s) { return { strip: s, retry: false }; }), position: 0, total: queue.length, done: 0, firstTry: 0, missed: {} };
    renderQuiz();
  }
  function renderQuiz() {
    if (state.position >= state.steps.length) { renderComplete(); return; }
    var step = state.steps[state.position], strip = step.strip;
    step.labels = nameLabels(strip);
    content.innerHTML = header() + '<div class="recall-step-label">' + (step.retry ? "Coming back to this one" : "Strip " + (state.position + 1)) + '</div>' +
      '<article class="question-card immersive-card rs-question"><h3>What is the rhythm?</h3>' + img(strip) +
      choicesHtml("name", step.labels) + '<div class="explanation" id="wb-explanation" hidden></div></article>' +
      '<button class="primary-action full-action" id="wb-next" type="button" hidden>Next strip →</button>';
    bindHome();
    var group = content.querySelector('[data-step="name"]');
    bindChoices(group, function (selected) {
      if (step.answered) return;
      step.answered = true;
      var correct = step.labels.indexOf(strip.name), right = selected === correct;
      markChoices(group, correct, selected);
      var exp = document.getElementById("wb-explanation");
      exp.hidden = false;
      exp.innerHTML = '<strong>' + (right ? "Correct: " : "Answer: ") + escapeHtml(strip.name) + '</strong><div class="learn-body">' + teach(strip) + '</div>';
      if (!step.retry) state.done += 1;
      if (right) {
        if (!step.retry) { state.firstTry += 1; record(strip.id, true); }
      } else {
        state.missed[strip.id] = true;
        record(strip.id, false);
        if (!step.retry) state.steps.splice(Math.min(state.position + 1 + RETURN_GAP, state.steps.length), 0, { strip: strip, retry: true });
      }
      document.getElementById("wb-next").hidden = false;
      exp.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
    document.getElementById("wb-next").addEventListener("click", function () { state.position += 1; renderQuiz(); });
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }

  // ---- complete ------------------------------------------------------------
  function renderComplete() {
    var finished = state;
    var missedIds = Object.keys(finished.missed);
    var stepsLine = finished.kind === "steps" ? '<p>' + finished.partsRight + ' of ' + finished.parts + ' individual steps right.</p>' : "";
    content.innerHTML = '<section class="complete-panel"><span class="complete-icon">' + (missedIds.length ? "📈" : "🎯") + '</span><p class="eyebrow">Done</p><h3>' + escapeHtml(finished.title) + '</h3>' +
      '<p>' + finished.firstTry + ' of ' + finished.total + (finished.kind === "steps" ? " strips with every step right." : " right on the first try.") + '</p>' + stepsLine +
      (missedIds.length ? '<p class="rs-missed">Missed: ' + missedIds.map(function (id) { return "#" + byId[id].n + " " + escapeHtml(byId[id].name); }).join(", ") + '. They are saved under "My misses".</p>' : "") +
      '<div class="session-actions"><button class="primary-action" id="wb-again" type="button">Go again</button><button class="secondary-action" id="wb-done" type="button">All strips</button></div></section>';
    document.getElementById("wb-again").addEventListener("click", function () { if (finished.kind === "steps") startSteps(); else startQuiz(); });
    document.getElementById("wb-done").addEventListener("click", renderHome);
  }

  launch.addEventListener("click", open);
  document.getElementById("ekg-workbook-back").addEventListener("click", close);
}());
