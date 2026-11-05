/* Rhythm strips (Cardio Part 2): a gallery of every rhythm, a "Name that rhythm" quiz and a
   step-by-step reading drill. Strips come from window.RhythmSynth, so each one is new.
   Data: window.CARDIO2_RHYTHMS (data/rhythm-strips-cardio-part-2.js). Progress per rhythm id. */
(function () {
  "use strict";

  var data = window.CARDIO2_RHYTHMS;
  var synth = window.RhythmSynth;
  var launch = document.getElementById("cardio2-rhythms-launch");
  var view = document.getElementById("cardio2-rhythms-view");
  var content = document.getElementById("cardio2-rhythms-content");
  var studyView = document.getElementById("study-view");
  if (!data || !synth || !launch || !view || !content) return;

  var PROGRESS_KEY = "pasem2:rhythms:cardio-part-2:progress";
  var QUIZ_LENGTH = 15, STEP_LENGTH = 8, RETURN_GAP = 3;
  var groups = data.groups;
  var all = [], byId = {};
  groups.forEach(function (group) { group.rhythms.forEach(function (rhythm) { rhythm.group = group; all.push(rhythm); byId[rhythm.id] = rhythm; }); });
  var state = null;

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
  function knownCount(list) { var p = loadProgress(); return list.filter(function (r) { return p[r.id] && p[r.id].last; }).length; }

  function strip(rhythm) { return synth.make(rhythm.gen); }
  function stripHtml(made, id) { return '<div class="rs-box"' + (id ? ' id="' + id + '"' : "") + '>' + made.svg + '</div>'; }
  function lookTable(rhythm) {
    var l = rhythm.look;
    return '<table class="learn-table rs-look"><tbody>' +
      [["Rate", l.rate], ["Rhythm", l.rhythm], ["P waves", l.p], ["PR interval", l.pr], ["QRS", l.qrs]].map(function (row) {
        return '<tr><th>' + row[0] + '</th><td>' + escapeHtml(row[1]) + '</td></tr>';
      }).join("") + '</tbody></table>';
  }
  function rateLine(made) {
    if (made.chaotic) return "No organized QRS complexes to count.";
    return made.count + " QRS complexes in 6 seconds × 10 ≈ " + made.count * 10 + " bpm.";
  }
  function teach(rhythm, made) {
    return '<div class="box-hy"><span class="lbl">How to spot it</span>' + escapeHtml(rhythm.clue) + '</div>' +
      (made ? '<p class="rs-rate">' + escapeHtml(rateLine(made)) + '</p>' : "") +
      lookTable(rhythm) + '<p class="rs-mgmt"><strong>Management:</strong> ' + escapeHtml(rhythm.mgmt) + '</p>';
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
    return '<div class="session-top"><button type="button" id="rhythm-home">← Rhythm strips</button><span>' + escapeHtml(label) + '</span></div>';
  }
  function bindHome() { document.getElementById("rhythm-home").addEventListener("click", renderHome); }

  // ---- home ----------------------------------------------------------------
  function renderHome() {
    state = null;
    var progress = loadProgress();
    var html = '<div class="drill-heading"><p class="eyebrow">Cardio Part 2 · 6-second strips</p><h2>Rhythm strips</h2>' +
      '<p>Every rhythm from the Arrhythmias and Arrhythmia Management lectures. Each strip is drawn fresh, so you never see the same one twice. Paper is standard: one small box is 0.04 s, one big box is 0.2 s, and the strip is 6 seconds long.</p>' +
      '<span class="diseases-count-pill">' + knownCount(all) + ' of ' + all.length + ' rhythms named right on your last try</span></div>';
    html += '<div class="murmur-quick rs-quick">' +
      '<button class="murmur-quick-card" type="button" id="rhythm-quiz"><span>Quiz</span><strong>Name that rhythm →</strong><small>' + QUIZ_LENGTH + ' strips from every group. Misses come back a few strips later.</small></button>' +
      '<button class="murmur-quick-card" type="button" id="rhythm-steps"><span>Systematic read</span><strong>Read it step by step →</strong><small>' + STEP_LENGTH + ' strips: rate, regularity, P waves, PR, QRS, then name it.</small></button>' +
      '</div>';
    html += '<p class="eyebrow rs-groups-label">Learn by group</p><div class="struggle-group-list">';
    groups.forEach(function (group, index) {
      var known = group.rhythms.filter(function (r) { return progress[r.id] && progress[r.id].last; }).length;
      html += '<button class="struggle-group-card" type="button" data-rhythm-group="' + group.id + '"><span class="drill-section-number">' + String(index + 1).padStart(2, "0") + '</span><strong>' + escapeHtml(group.title) + '</strong><small>' + known + ' / ' + group.rhythms.length + '</small><span class="murmur-mini-track"><span style="width:' + Math.round(known / group.rhythms.length * 100) + '%"></span></span></button>';
    });
    html += '</div>';
    content.innerHTML = html;
    document.getElementById("rhythm-quiz").addEventListener("click", function () { startQuiz("Name that rhythm", all, QUIZ_LENGTH); });
    document.getElementById("rhythm-steps").addEventListener("click", startSteps);
    content.querySelectorAll("[data-rhythm-group]").forEach(function (button) {
      button.addEventListener("click", function () { renderGroup(groups.find(function (g) { return g.id === button.dataset.rhythmGroup; })); });
    });
  }

  // ---- gallery -------------------------------------------------------------
  function renderGroup(group) {
    state = null;
    var html = top(group.title) + '<div class="drill-heading"><p class="eyebrow">Learn</p><h2>' + escapeHtml(group.title) + '</h2><p>' + escapeHtml(group.blurb) + ' Press "New strip" to see another example.</p></div>';
    group.rhythms.forEach(function (rhythm) {
      html += '<article class="learn-card rs-card"><div class="rs-card-head"><h3>' + escapeHtml(rhythm.name) + '</h3><button class="secondary-action rs-new" type="button" data-rhythm-new="' + rhythm.id + '">New strip ↻</button></div>' +
        stripHtml(strip(rhythm), "strip-" + rhythm.id) + '<div class="learn-body">' + teach(rhythm) + '</div></article>';
    });
    html += '<button class="primary-action full-action" id="rhythm-group-quiz" type="button">Quiz this group →</button>';
    content.innerHTML = html;
    bindHome();
    content.querySelectorAll("[data-rhythm-new]").forEach(function (button) {
      button.addEventListener("click", function () {
        var box = document.getElementById("strip-" + button.dataset.rhythmNew);
        box.innerHTML = strip(byId[button.dataset.rhythmNew]).svg;
      });
    });
    document.getElementById("rhythm-group-quiz").addEventListener("click", function () {
      startQuiz(group.title, group.rhythms, Math.min(12, group.rhythms.length * 2));
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
  // Names for the quiz: the right one plus 3 look-alikes (topped up at random if needed).
  function nameChoices(rhythm, pool) {
    var others = shuffle(rhythm.confuse.filter(function (id) { return byId[id]; })).slice(0, 3);
    var spare = shuffle((pool || all).concat(all).filter(function (r) { return r.id !== rhythm.id && others.indexOf(r.id) < 0; }));
    while (others.length < 3) others.push(spare.shift().id);
    return shuffle([rhythm.id].concat(others));
  }
  function header() {
    var percent = Math.round(state.done / Math.max(state.total, 1) * 100);
    return top(state.title) + '<div class="session-progress"><span style="width:' + percent + '%"></span></div>' +
      '<div class="session-counter">' + state.done + ' of ' + state.total + ' done · ' + state.firstTry + ' right on the first try</div>';
  }

  // ---- name that rhythm ----------------------------------------------------
  function startQuiz(title, pool, length) {
    var queue = [];
    while (queue.length < length) queue = queue.concat(shuffle(pool));
    queue = queue.slice(0, length).map(function (r) { return { rhythm: r, retry: false }; });
    state = { kind: "quiz", title: title, pool: pool, steps: queue, position: 0, total: length, done: 0, firstTry: 0, missed: {} };
    renderQuiz();
  }
  function renderQuiz() {
    if (state.position >= state.steps.length) { renderComplete(); return; }
    var step = state.steps[state.position], rhythm = step.rhythm;
    step.made = strip(rhythm);
    step.ids = nameChoices(rhythm, state.pool);
    content.innerHTML = header() + '<div class="recall-step-label">' + (step.retry ? "Coming back to this one" : "Strip " + (state.position + 1)) + '</div>' +
      '<article class="question-card immersive-card rs-question"><h3>What rhythm is this?</h3>' + stripHtml(step.made) +
      choicesHtml("name", step.ids.map(function (id) { return byId[id].name; })) +
      '<div class="explanation" id="rhythm-explanation" hidden></div></article>' +
      '<button class="primary-action full-action" id="rhythm-next" type="button" hidden>Next strip →</button>';
    bindHome();
    var group = content.querySelector('[data-step="name"]');
    bindChoices(group, function (selected) {
      if (step.answered) return;
      step.answered = true;
      var correct = step.ids.indexOf(rhythm.id), right = selected === correct;
      markChoices(group, correct, selected);
      var exp = document.getElementById("rhythm-explanation");
      exp.hidden = false;
      exp.innerHTML = '<strong>' + (right ? "Correct: " : "Answer: ") + escapeHtml(rhythm.name) + '</strong>' +
        (right ? "" : '<p>You picked ' + escapeHtml(byId[step.ids[selected]].name) + '. ' + escapeHtml(byId[step.ids[selected]].clue) + '</p>') +
        '<div class="learn-body">' + teach(rhythm, step.made) + '</div>';
      if (!step.retry) state.done += 1;
      if (right) {
        if (!step.retry) { state.firstTry += 1; record(rhythm.id, true); }
      } else {
        state.missed[rhythm.id] = true;
        record(rhythm.id, false);
        if (!step.retry) state.steps.splice(Math.min(state.position + 1 + RETURN_GAP, state.steps.length), 0, { rhythm: rhythm, retry: true });
      }
      document.getElementById("rhythm-next").hidden = false;
      exp.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
    document.getElementById("rhythm-next").addEventListener("click", function () { state.position += 1; renderQuiz(); });
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }

  // ---- step by step --------------------------------------------------------
  function startSteps() {
    var pool = all.filter(function (r) { return r.steps; });
    var queue = [];
    while (queue.length < STEP_LENGTH) queue = queue.concat(shuffle(pool));
    state = { kind: "steps", title: "Read it step by step", steps: queue.slice(0, STEP_LENGTH).map(function (r) { return { rhythm: r }; }), position: 0, total: STEP_LENGTH, done: 0, firstTry: 0, missed: {}, parts: 0, partsRight: 0 };
    renderStepStrip();
  }
  function rateChoices(made) {
    var answer = made.count * 10;
    var others = shuffle([-40, -20, 20, 40].map(function (d) { return answer + d; }).filter(function (v) { return v >= 10; }));
    if (others.length < 3) others.push(answer + 60);
    return { labels: shuffle([answer].concat(others.slice(0, 3))).map(function (v) { return v + " bpm"; }), answer: answer + " bpm" };
  }
  function optionChoices(key, answerKey) {
    var options = data.steps[key].options;
    var wrong = shuffle(Object.keys(options).filter(function (k) { return k !== answerKey; })).slice(0, 3);
    var keys = shuffle([answerKey].concat(wrong));
    return { labels: keys.map(function (k) { return options[k]; }), answer: options[answerKey] };
  }
  function renderStepStrip() {
    if (state.position >= state.steps.length) { renderComplete(); return; }
    var step = state.steps[state.position], rhythm = step.rhythm;
    step.made = strip(rhythm);
    var rate = rateChoices(step.made);
    var names = nameChoices(rhythm);
    step.parts = [
      { name: "rate", title: "Count the QRS complexes on this 6-second strip and multiply by 10. About what is the rate?", labels: rate.labels, answer: rate.answer },
      { name: "reg", title: data.steps.reg.title }, { name: "p", title: data.steps.p.title }, { name: "pr", title: data.steps.pr.title }, { name: "qrs", title: data.steps.qrs.title },
      { name: "name", title: "Put it together: what rhythm is this?", labels: names.map(function (id) { return byId[id].name; }), answer: rhythm.name }
    ];
    step.parts.forEach(function (part) {
      if (part.labels) return;
      var made = optionChoices(part.name, rhythm.steps[part.name]);
      part.labels = made.labels; part.answer = made.answer;
    });
    step.index = 0; step.allRight = true;
    content.innerHTML = header() + '<div class="recall-step-label">Strip ' + (state.position + 1) + ' of ' + state.total + '</div>' +
      '<article class="question-card immersive-card rs-question">' + stripHtml(step.made) + '<div id="rhythm-parts"></div><div class="explanation" id="rhythm-explanation" hidden></div></article>' +
      '<button class="primary-action full-action" id="rhythm-next" type="button" hidden>Next strip →</button>';
    bindHome();
    document.getElementById("rhythm-next").addEventListener("click", function () { state.position += 1; renderStepStrip(); });
    showPart(step);
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }
  function showPart(step) {
    var part = step.parts[step.index];
    var wrap = document.createElement("div");
    wrap.className = "rs-part";
    wrap.innerHTML = '<p class="rs-part-title"><span>' + (step.index + 1) + '/' + step.parts.length + '</span>' + escapeHtml(part.title) + '</p>' + choicesHtml(part.name, part.labels) + '<p class="rs-part-note" hidden></p>';
    document.getElementById("rhythm-parts").appendChild(wrap);
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
      note.textContent = (right ? "Right. " : "It's: " + part.answer + ". ") + (part.name === "rate" ? rateLine(step.made) : "");
      step.index += 1;
      if (step.index < step.parts.length) { showPart(step); wrap.nextSibling && wrap.nextSibling.scrollIntoView({ behavior: "smooth", block: "nearest" }); }
      else finishStep(step, right);
    });
  }
  function finishStep(step, nameRight) {
    var rhythm = step.rhythm;
    record(rhythm.id, nameRight);
    state.done += 1;
    if (step.allRight) state.firstTry += 1; else state.missed[rhythm.id] = true;
    var exp = document.getElementById("rhythm-explanation");
    exp.hidden = false;
    exp.innerHTML = '<strong>' + escapeHtml(rhythm.name) + (step.allRight ? " · every step right" : "") + '</strong><div class="learn-body">' + teach(rhythm, step.made) + '</div>';
    document.getElementById("rhythm-next").hidden = false;
    exp.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // ---- complete ------------------------------------------------------------
  function renderComplete() {
    var finished = state;
    var missedIds = Object.keys(finished.missed);
    var stepsLine = finished.kind === "steps" ? '<p>' + finished.partsRight + ' of ' + finished.parts + ' individual steps right.</p>' : "";
    content.innerHTML = '<section class="complete-panel"><span class="complete-icon">' + (missedIds.length ? "📈" : "🎯") + '</span><p class="eyebrow">Done</p><h3>' + escapeHtml(finished.title) + '</h3>' +
      '<p>' + finished.firstTry + ' of ' + finished.total + (finished.kind === "steps" ? " strips with every step right." : " right on the first try.") + '</p>' + stepsLine +
      (missedIds.length ? '<p class="rs-missed">Worth another look: ' + missedIds.map(function (id) { return escapeHtml(byId[id].name); }).join(", ") + '</p>' : "") +
      '<div class="session-actions"><button class="primary-action" id="rhythm-again" type="button">Go again</button><button class="secondary-action" id="rhythm-done" type="button">All rhythms</button></div></section>';
    document.getElementById("rhythm-again").addEventListener("click", function () {
      if (finished.kind === "steps") startSteps(); else startQuiz(finished.title, finished.pool, finished.total);
    });
    document.getElementById("rhythm-done").addEventListener("click", renderHome);
  }

  launch.addEventListener("click", open);
  document.getElementById("cardio2-rhythms-back").addEventListener("click", close);
}());
