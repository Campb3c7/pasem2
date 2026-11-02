/* Heart Sounds listening tool (Cardio Part 1).
   Five ways to study the same labeled recordings (data/heart-sounds.js):
   Listen and learn, Name it (multiple choice), Describe it (drop-downs),
   Side by side (look-alikes), and a 15-question mock exam. */
(function () {
  "use strict";

  var data = window.HEART_SOUNDS;
  var launch = document.getElementById("heart-sounds-launch");
  var view = document.getElementById("heart-sounds-view");
  var content = document.getElementById("heart-sounds-content");
  var studyView = document.getElementById("study-view");
  if (!data || !launch || !view || !content) return;

  var PROGRESS_KEY = "pasem2:heart-sounds:cardio-part-1:progress";
  var EXAM_SIZE = 15;
  var PASS = 0.7;
  var recordings = data.recordings;
  var state = null;

  // ---- helpers -------------------------------------------------------------
  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>'"]/g, function (character) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character];
    });
  }
  function shuffle(items) {
    var copy = items.slice();
    for (var index = copy.length - 1; index > 0; index -= 1) {
      var other = Math.floor(Math.random() * (index + 1));
      var value = copy[index]; copy[index] = copy[other]; copy[other] = value;
    }
    return copy;
  }
  function pick(items) { return items[Math.floor(Math.random() * items.length)]; }
  function dxById(id) { return data.diagnoses.find(function (entry) { return entry.id === id; }); }
  function recById(id) { return recordings.find(function (entry) { return entry.id === id; }); }
  function groupById(id) { return data.groups.find(function (entry) { return entry.id === id; }); }
  function fieldById(id) { return data.fields.find(function (entry) { return entry.id === id; }); }
  function accepted(recording) { return [recording.dx].concat(recording.accept || []); }
  function loadProgress() {
    try { var value = localStorage.getItem(PROGRESS_KEY); return value ? JSON.parse(value) : {}; }
    catch (error) { return {}; }
  }
  function saveProgress(progress) { try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)); } catch (error) {} }
  function mark(id, kind) {
    var progress = loadProgress();
    progress[id] = progress[id] || {};
    progress[id][kind] = true;
    saveProgress(progress);
  }
  function countDone(kind) {
    var progress = loadProgress();
    return recordings.filter(function (recording) { return progress[recording.id] && progress[recording.id][kind]; }).length;
  }
  function audioTag(file, id) {
    return '<audio class="hs-audio" controls preload="none"' + (id ? ' id="' + id + '"' : "") + ' src="' + escapeHtml(data.audioBase + file) + '"></audio>';
  }
  function stopAudio() { content.querySelectorAll("audio").forEach(function (audio) { audio.pause(); }); }
  // Only one clip plays at a time.
  content.addEventListener("play", function (event) {
    content.querySelectorAll("audio").forEach(function (audio) { if (audio !== event.target) audio.pause(); });
  }, true);

  // ---- timing diagram ------------------------------------------------------
  // One cardiac cycle: S1 | systole | S2 | diastole | S1.
  var X_S1 = 34, X_S2 = 170, X_S1B = 306, BASE = 86;
  function bar(x, height, cls) { return '<rect class="' + cls + '" x="' + (x - 3) + '" y="' + (BASE - height) + '" width="6" height="' + height + '" rx="1.5"/>'; }
  function label(x, text, cls) { return '<text class="' + (cls || "hs-dg-label") + '" x="' + x + '" y="' + (BASE + 15) + '" text-anchor="middle">' + escapeHtml(text) + '</text>'; }
  function murmurPath(murmur) {
    var start, end;
    if (murmur.phase === "cont") {
      start = X_S1 + 10; end = X_S1B - 10;
      return '<path class="hs-dg-murmur" d="M' + start + ' ' + BASE + ' L' + X_S2 + ' ' + (BASE - 34) + ' L' + end + ' ' + (BASE - 4) + ' L' + end + ' ' + BASE + ' Z"/>';
    }
    var left = murmur.phase === "sys" ? X_S1 + 8 : X_S2 + 8;
    var right = murmur.phase === "sys" ? X_S2 - 8 : X_S1B - 8;
    start = left + (right - left) * murmur.from;
    end = left + (right - left) * murmur.to;
    var mid = (start + end) / 2, top = BASE - 30, low = BASE - 4;
    var points;
    if (murmur.shape === "plateau") points = [[start, top + 6], [end, top + 6]];
    else if (murmur.shape === "cresc") points = [[start, low], [end, top]];
    else if (murmur.shape === "decresc") points = [[start, top], [end, low]];
    else if (murmur.shape === "diamond") points = [[start, low], [mid, top], [end, low]];
    else if (murmur.shape === "rumble") {
      points = [];
      for (var step = 0; step <= 10; step += 1) points.push([start + (end - start) * step / 10, BASE - (step % 2 ? 10 : 17)]);
    }
    var d = "M" + start + " " + BASE + points.map(function (point) { return " L" + point[0].toFixed(1) + " " + point[1]; }).join("") + " L" + end + " " + BASE + " Z";
    return '<path class="hs-dg-murmur" d="' + d + '"/>';
  }
  function diagram(spec, labeled) {
    spec = spec || {};
    var svg = '<svg class="hs-diagram" viewBox="0 0 340 108" role="img" aria-label="Timing diagram">';
    svg += '<line class="hs-dg-base" x1="12" y1="' + BASE + '" x2="328" y2="' + BASE + '"/>';
    svg += '<text class="hs-dg-phase" x="' + ((X_S1 + X_S2) / 2) + '" y="14" text-anchor="middle">systole</text><text class="hs-dg-phase" x="' + ((X_S2 + X_S1B) / 2) + '" y="14" text-anchor="middle">diastole</text>';
    (spec.m || []).forEach(function (murmur) { svg += murmurPath(murmur); });
    [X_S1, X_S1B].forEach(function (x) {
      if (spec.s1 === "split") svg += bar(x - 5, 44, "hs-dg-sound") + bar(x + 5, 40, "hs-dg-sound");
      else svg += bar(x, 46, "hs-dg-sound");
      svg += label(x, "S1");
    });
    if (spec.s2 === "absent") svg += '<rect class="hs-dg-absent" x="' + (X_S2 - 3) + '" y="' + (BASE - 40) + '" width="6" height="40" rx="1.5"/>';
    else if (spec.s2 === "split" || spec.s2 === "fixed") svg += bar(X_S2 - 5, 40, "hs-dg-sound") + bar(X_S2 + 5, 34, "hs-dg-sound");
    else if (spec.s2 === "wide") svg += bar(X_S2 - 8, 40, "hs-dg-sound") + bar(X_S2 + 8, 34, "hs-dg-sound");
    else svg += bar(X_S2, 40, "hs-dg-sound");
    svg += label(X_S2, spec.s2 === "absent" ? "S2?" : "S2");
    var spots = { S3: X_S2 + 42, S4: X_S1B - 30, EC: X_S1 + 18, MSC: X_S1 + 66, OS: X_S2 + 22 };
    var names = { S3: "S3", S4: "S4", EC: "EC", MSC: "C", OS: "OS" };
    (spec.x || []).forEach(function (key) {
      svg += bar(spots[key], key === "S3" || key === "S4" ? 22 : 30, "hs-dg-extra");
      if (labeled) svg += label(spots[key], names[key], "hs-dg-label hs-dg-extra-label");
    });
    return svg + '</svg>';
  }

  // ---- shared bits -----------------------------------------------------------
  function attrRows(recording) {
    return data.fields.map(function (field) {
      var value = recording[field.id];
      return '<div><dt>' + escapeHtml(field.label) + '</dt><dd>' + (value == null ? '<span class="hs-muted">not graded for this clip</span>' : escapeHtml(value)) + '</dd></div>';
    }).join("");
  }
  function revealCard(recording) {
    var dx = dxById(recording.dx);
    var also = (recording.accept || []).map(function (id) { return dxById(id).name; });
    return '<div class="hs-reveal">' +
      '<div class="hs-reveal-top"><div><p class="eyebrow">' + escapeHtml(dx.name) + (dx.lecture ? "" : " · not on the lecture list") + '</p><h4>' + escapeHtml(recording.title) + '</h4><p class="hs-spot">Recorded at: ' + escapeHtml(recording.spot) + '</p></div></div>' +
      diagram(recording.diagram, true) +
      '<dl class="hs-attrs">' + attrRows(recording) + '</dl>' +
      (recording.note ? '<p class="hs-note">' + escapeHtml(recording.note) + '</p>' : "") +
      (also.length ? '<p class="hs-also">Same sound pattern also fits: ' + escapeHtml(also.join(", ")) + '.</p>' : "") +
      '<div class="hs-dx-facts"><div><strong>Best heard</strong><span>' + escapeHtml(dx.where) + '</span></div><div><strong>Listen for</strong><span>' + escapeHtml(dx.clue) + '</span></div><div><strong>Bedside</strong><span>' + escapeHtml(dx.listen) + '</span></div><div><strong>Why</strong><span>' + escapeHtml(dx.why) + '</span></div></div>' +
      '</div>';
  }
  function sessionTop(title, position, total, extra) {
    var percent = Math.round(position / Math.max(total, 1) * 100);
    return '<div class="session-top"><button type="button" id="hs-home">← Heart Sounds</button><span>' + escapeHtml(title) + '</span></div>' +
      '<div class="session-progress"><span style="width:' + percent + '%"></span></div>' +
      '<div class="session-counter">' + (position + 1) + ' of ' + total + (extra ? ' · ' + extra : "") + '</div>';
  }
  function wireHome() { var home = document.getElementById("hs-home"); if (home) home.addEventListener("click", renderHome); }

  // ---- open / close ----------------------------------------------------------
  function open() {
    studyView.hidden = true;
    document.querySelectorAll(".walkthrough-view").forEach(function (section) { section.hidden = true; });
    view.hidden = false;
    renderHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function close() {
    stopAudio();
    state = null;
    view.hidden = true;
    studyView.hidden = false;
    content.innerHTML = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---- home ------------------------------------------------------------------
  function coverageTable() {
    var lecture = data.diagnoses.filter(function (dx) { return dx.lecture; });
    return '<details class="murmur-chart hs-coverage"><summary>Lecture sounds and how many recordings each has</summary><div class="murmur-chart-scroll"><table><thead><tr><th>Sound</th><th>Recordings</th><th>Best heard</th><th>Listen for</th></tr></thead><tbody>' +
      lecture.map(function (dx) {
        var count = recordings.filter(function (recording) { return accepted(recording).indexOf(dx.id) !== -1; }).length;
        return '<tr><th>' + escapeHtml(dx.name) + '</th><td>' + (count ? count : '<span class="hs-missing">none yet</span>') + '</td><td>' + escapeHtml(dx.where) + '</td><td>' + escapeHtml(dx.clue) + '</td></tr>';
      }).join("") + '</tbody></table></div><p class="hs-muted">Sounds marked "none yet" have no recording in your files. Their facts still show up in the mock exam\'s "where is it best heard" questions.</p></details>';
  }
  function renderHome() {
    stopAudio();
    state = null;
    var total = recordings.length;
    var html = '<div class="drill-heading murmur-heading"><p class="eyebrow">Cardio Part 1 · listening practice</p><h2>Heart Sounds</h2><p>Hear it, then name it. All 20 of your class tracks: 10 sounds, each with and without the lecture. Use headphones.</p>' +
      '<span class="diseases-count-pill">' + countDone("mc") + ' of ' + total + ' named · ' + countDone("describe") + ' of ' + total + ' described</span></div>';
    html += '<div class="hs-modes">' +
      modeCard("tracks", "0", "Your 20 class tracks", "Every Canvas track in order, 1 to 20, with what each one is.") +
      modeCard("learn", "1", "Listen and learn", "Go one by one through a section. Each clip shows its label, timing diagram, and how to recognize it.") +
      modeCard("name", "2", "Name it", "Hear a clip, pick the diagnosis from four choices. Shuffled. Retry after a miss.") +
      modeCard("describe", "3", "Describe it", "Hear a clip, then fill in timing, shape, extra sound, pitch, quality, and diagnosis from drop-downs.") +
      modeCard("compare", "4", "Side by side", "Look-alike sounds next to each other with the one clue that splits them.") +
      modeCard("exam", "5", "Mock exam", EXAM_SIZE + " mixed questions on clips, one try each. 70% to pass, like the real exam.") +
      '</div>';
    html += '<div id="hs-picker"></div>';
    html += coverageTable();
    html += '<p class="murmur-footnote hs-sources"><strong>Sources.</strong> ' + escapeHtml(data.sources.class) + ' <button type="button" id="hs-reset">Reset heart sounds progress</button></p>';
    content.innerHTML = html;
    content.querySelectorAll("[data-hs-mode]").forEach(function (button) {
      button.addEventListener("click", function () { choose(button.dataset.hsMode); });
    });
    document.getElementById("hs-reset").addEventListener("click", function () {
      if (!window.confirm("Reset Heart Sounds progress on this device?")) return;
      saveProgress({});
      renderHome();
    });
  }
  function modeCard(id, number, title, text) {
    return '<button class="drill-section-card murmur-section-card hs-mode" type="button" data-hs-mode="' + id + '"><span class="drill-section-number">0' + number + '</span><strong>' + escapeHtml(title) + '</strong><span>' + escapeHtml(text) + '</span></button>';
  }
  // Learn, Name it, and Describe it start with a section choice.
  function choose(mode) {
    if (mode === "exam") { startExam(); return; }
    if (mode === "compare") { renderCompareList(); return; }
    if (mode === "tracks") { renderTracks(); return; }
    var picker = document.getElementById("hs-picker");
    var titles = { learn: "Listen and learn", name: "Name it", describe: "Describe it" };
    var progress = loadProgress();
    var kind = mode === "name" ? "mc" : "describe";
    var options = [{ id: "all", title: "Everything", description: "All " + recordings.length + " recordings, shuffled." }].concat(data.groups);
    if (mode === "learn") options = data.groups;
    picker.innerHTML = '<div class="hs-picker"><p class="eyebrow">' + escapeHtml(titles[mode]) + ' · pick a section</p><div class="drill-section-grid">' + options.map(function (group) {
      var items = group.id === "all" ? recordings : recordings.filter(function (recording) { return recording.group === group.id; });
      var done = items.filter(function (recording) { return progress[recording.id] && progress[recording.id][kind]; }).length;
      return '<button class="drill-section-card" type="button" data-hs-group="' + group.id + '"><strong>' + escapeHtml(group.title) + '</strong><span>' + escapeHtml(group.description) + '</span><small>' + items.length + ' clips' + (mode === "learn" ? "" : ' · ' + done + ' done') + '</small></button>';
    }).join("") + '</div></div>';
    picker.querySelectorAll("[data-hs-group]").forEach(function (button) {
      button.addEventListener("click", function () {
        var id = button.dataset.hsGroup;
        var items = id === "all" ? recordings : recordings.filter(function (recording) { return recording.group === id; });
        var title = id === "all" ? "Everything" : groupById(id).title;
        if (mode === "learn") startLearn(title, items);
        else if (mode === "name") startName(title, items);
        else startDescribe(title, items);
      });
    });
    picker.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // ---- 0. Class tracks in Canvas order ----------------------------------------
  function renderTracks() {
    stopAudio();
    var rows = [];
    recordings.filter(function (recording) { return recording.source === "class"; }).forEach(function (recording) {
      rows.push({ track: recording.narratedTrack, file: recording.narrated, recording: recording, version: "with lecture" });
      rows.push({ track: recording.track, file: recording.file, recording: recording, version: "sound only" });
    });
    rows.sort(function (a, b) { return a.track - b.track; });
    content.innerHTML = '<div class="session-top"><button type="button" id="hs-home">← Heart Sounds</button><span>Your 20 class tracks</span></div>' +
      '<div class="drill-heading"><p class="eyebrow">Canvas order</p><h2>Your 20 class tracks</h2><p>Tracks 1 to 10 have the lecture talking over them. Tracks 11 to 20 are the same sounds alone.</p></div>' +
      '<div class="hs-track-list">' + rows.map(function (row) {
        var dx = dxById(row.recording.dx);
        return '<article class="hs-track-row"><div><p class="eyebrow">Track ' + row.track + ' · ' + row.version + '</p><h4>' + escapeHtml(row.recording.title) + '</h4><p class="hs-spot">' + escapeHtml(dx.name) + '</p></div>' + audioTag(row.file) + '</article>';
      }).join("") + '</div>';
    wireHome();
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }

  // ---- 1. Listen and learn ---------------------------------------------------
  function startLearn(title, items) {
    state = { mode: "learn", title: title, items: items, position: 0 };
    renderLearn();
  }
  function renderLearn() {
    stopAudio();
    var recording = state.items[state.position];
    var last = state.position + 1 === state.items.length;
    var player = recording.narrated
      ? '<div class="hs-player"><p class="hs-track">Track ' + recording.track + ' · sound only</p>' + audioTag(recording.file) + '<p class="hs-track">Track ' + recording.narratedTrack + ' · with lecture</p>' + audioTag(recording.narrated) + '</div>'
      : '<div class="hs-player">' + audioTag(recording.file) + '</div>';
    content.innerHTML = sessionTop(title(), state.position, state.items.length, sourceName(recording)) +
      '<article class="question-card immersive-card hs-card">' + player + revealCard(recording) + '</article>' +
      '<div class="hs-nav"><button class="secondary-action" id="hs-prev" type="button"' + (state.position ? "" : " disabled") + '>← Previous</button>' +
      '<button class="primary-action" id="hs-next" type="button">' + (last ? "Finish section" : "Next clip →") + '</button></div>';
    function title() { return "Listen and learn · " + state.title; }
    wireHome();
    document.getElementById("hs-prev").addEventListener("click", function () { state.position -= 1; renderLearn(); });
    document.getElementById("hs-next").addEventListener("click", function () {
      if (last) { renderHome(); return; }
      state.position += 1; renderLearn();
    });
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }
  function sourceName(recording) {
    return { class: "Class recording" }[recording.source];
  }

  // ---- 2. Name it --------------------------------------------------------------
  // Wrong answers come first from look-alike sets, then from anything else.
  function similarDx(recording) {
    var ids = [];
    data.lookalikes.forEach(function (set) {
      if (set.recordings.indexOf(recording.id) === -1) return;
      set.recordings.forEach(function (id) { ids.push(recById(id).dx); });
    });
    return ids;
  }
  function dxChoices(recording) {
    var avoid = accepted(recording);
    var near = shuffle(similarDx(recording)).filter(function (id) { return avoid.indexOf(id) === -1; });
    var far = shuffle(data.diagnoses.map(function (dx) { return dx.id; })).filter(function (id) { return avoid.indexOf(id) === -1; });
    var wrong = [];
    near.concat(far).forEach(function (id) { if (wrong.length < 3 && wrong.indexOf(id) === -1) wrong.push(id); });
    return shuffle([recording.dx].concat(wrong));
  }
  function startName(title, items) {
    state = { mode: "name", title: title, items: shuffle(items), position: 0, firstTry: 0 };
    renderName();
  }
  function renderName() {
    stopAudio();
    var recording = state.items[state.position];
    state.missed = false;
    state.answered = false;
    state.choices = dxChoices(recording);
    var last = state.position + 1 === state.items.length;
    content.innerHTML = sessionTop("Name it · " + state.title, state.position, state.items.length, state.firstTry + " right on the first try") +
      '<article class="question-card immersive-card hs-card"><div class="card-number">What is this?</div><div class="hs-player">' + audioTag(recording.file) + '</div>' +
      '<button type="button" class="hs-hint" id="hs-hint">Show where it was recorded (H)</button><p class="hs-spot" id="hs-hint-text" hidden>Recorded at: ' + escapeHtml(recording.spot) + '</p>' +
      '<div class="choices" id="hs-choices">' + state.choices.map(function (id, index) {
        return '<button class="choice" type="button" data-hs-choice="' + index + '"><span>' + String.fromCharCode(65 + index) + '</span>' + escapeHtml(dxById(id).name) + '</button>';
      }).join("") + '</div><div class="explanation" id="hs-explanation" hidden></div><div id="hs-reveal"></div></article>' +
      '<button class="primary-action full-action" id="hs-next" type="button" hidden>' + (last ? "See results" : "Next clip →") + '</button>';
    wireHome();
    document.getElementById("hs-hint").addEventListener("click", function () {
      document.getElementById("hs-hint-text").hidden = false;
      this.hidden = true;
    });
    content.querySelectorAll("[data-hs-choice]").forEach(function (button) {
      button.addEventListener("click", function () { answerName(Number(button.dataset.hsChoice)); });
    });
    document.getElementById("hs-next").addEventListener("click", function () {
      state.position += 1;
      if (state.position >= state.items.length) renderDone("Name it · " + state.title, state.firstTry, state.items.length, function () { startName(state.title, state.items); });
      else renderName();
    });
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }
  function answerName(index) {
    if (state.answered) return;
    var recording = state.items[state.position];
    var buttons = content.querySelectorAll("[data-hs-choice]");
    var explanation = document.getElementById("hs-explanation");
    if (state.choices[index] !== recording.dx) {
      state.missed = true;
      buttons[index].classList.add("wrong");
      buttons[index].disabled = true;
      explanation.hidden = false;
      explanation.className = "explanation drill-try-again";
      explanation.innerHTML = "<strong>Not this one</strong><p>Listen again and try another answer.</p>";
      return;
    }
    state.answered = true;
    if (!state.missed) { state.firstTry += 1; mark(recording.id, "mc"); }
    buttons.forEach(function (button, buttonIndex) {
      button.disabled = true;
      if (buttonIndex === index) button.classList.add("correct");
      else if (!button.classList.contains("wrong")) button.classList.add("dimmed");
    });
    explanation.hidden = true;
    document.getElementById("hs-hint").hidden = true;
    document.getElementById("hs-hint-text").hidden = true;
    document.getElementById("hs-reveal").innerHTML = revealCard(recording);
    var next = document.getElementById("hs-next");
    next.hidden = false;
    next.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // ---- 3. Describe it ------------------------------------------------------------
  function startDescribe(title, items) {
    state = { mode: "describe", title: title, items: shuffle(items), position: 0, allRight: 0 };
    renderDescribe();
  }
  function selectHtml(id, label, options) {
    return '<label class="hs-select"><span>' + escapeHtml(label) + '</span><select data-hs-field="' + id + '"><option value="">Choose…</option>' +
      options.map(function (option) { return '<option value="' + escapeHtml(option.value) + '">' + escapeHtml(option.text) + '</option>'; }).join("") + '</select><em class="hs-mark" data-hs-mark="' + id + '"></em></label>';
  }
  function renderDescribe() {
    stopAudio();
    var recording = state.items[state.position];
    var last = state.position + 1 === state.items.length;
    var fields = data.fields.filter(function (field) { return recording[field.id] != null; });
    state.checked = false;
    var selects = fields.map(function (field) {
      return selectHtml(field.id, field.label, data.options[field.id].map(function (option) { return { value: option, text: option }; }));
    }).join("") + selectHtml("dx", "Diagnosis", data.diagnoses.map(function (dx) { return { value: dx.id, text: dx.name }; }));
    content.innerHTML = sessionTop("Describe it · " + state.title, state.position, state.items.length, state.allRight + " fully right") +
      '<article class="question-card immersive-card hs-card"><div class="card-number">Describe what you hear</div><div class="hs-player">' + audioTag(recording.file) + '</div>' +
      '<p class="hs-spot">Recorded at: ' + escapeHtml(recording.spot) + '</p>' +
      '<div class="hs-form">' + selects + '</div>' +
      '<button class="primary-action full-action" id="hs-check" type="button">Check my answers</button>' +
      '<div class="explanation" id="hs-explanation" hidden></div><div id="hs-reveal"></div></article>' +
      '<button class="primary-action full-action" id="hs-next" type="button" hidden>' + (last ? "See results" : "Next clip →") + '</button>';
    wireHome();
    document.getElementById("hs-check").addEventListener("click", function () { checkDescribe(recording, fields); });
    document.getElementById("hs-next").addEventListener("click", function () {
      state.position += 1;
      if (state.position >= state.items.length) renderDone("Describe it · " + state.title, state.allRight, state.items.length, function () { startDescribe(state.title, state.items); });
      else renderDescribe();
    });
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }
  function checkDescribe(recording, fields) {
    var answers = {};
    content.querySelectorAll("[data-hs-field]").forEach(function (select) { answers[select.dataset.hsField] = select.value; });
    var explanation = document.getElementById("hs-explanation");
    var blank = Object.keys(answers).filter(function (key) { return !answers[key]; });
    if (blank.length && !state.checked) {
      explanation.hidden = false;
      explanation.className = "explanation drill-try-again";
      explanation.innerHTML = "<strong>Fill in every box first</strong><p>Pick your best guess for each one.</p>";
      return;
    }
    state.checked = true;
    var right = 0;
    var list = fields.map(function (field) { return field.id; }).concat(["dx"]);
    list.forEach(function (id) {
      var ok = id === "dx" ? accepted(recording).indexOf(answers[id]) !== -1 : answers[id] === recording[id];
      if (ok) right += 1;
      var markEl = content.querySelector('[data-hs-mark="' + id + '"]');
      var correctText = id === "dx" ? dxById(recording.dx).name : recording[id];
      markEl.className = "hs-mark " + (ok ? "ok" : "bad");
      markEl.textContent = ok ? "✓" : "✗ " + correctText;
      content.querySelector('[data-hs-field="' + id + '"]').disabled = true;
    });
    if (right === list.length) { state.allRight += 1; mark(recording.id, "describe"); }
    explanation.hidden = false;
    explanation.className = "explanation";
    explanation.innerHTML = '<strong>' + right + ' of ' + list.length + ' right</strong><p>' + (right === list.length ? "Every attribute matched." : "The right answer shows next to each miss.") + '</p>';
    document.getElementById("hs-check").hidden = true;
    document.getElementById("hs-reveal").innerHTML = revealCard(recording);
    var next = document.getElementById("hs-next");
    next.hidden = false;
    next.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // ---- 4. Side by side -------------------------------------------------------------
  function renderCompareList() {
    stopAudio();
    content.innerHTML = '<div class="session-top"><button type="button" id="hs-home">← Heart Sounds</button><span>Side by side</span></div>' +
      '<div class="drill-heading"><p class="eyebrow">Look-alikes</p><h2>Side by side</h2><p>Sounds that are easy to mix up, next to each other. Play one, then the other, and listen for the clue.</p></div>' +
      '<div class="drill-section-grid">' + data.lookalikes.map(function (set, index) {
        return '<button class="drill-section-card" type="button" data-hs-set="' + set.id + '"><span class="drill-section-number">' + String(index + 1).padStart(2, "0") + '</span><strong>' + escapeHtml(set.title) + '</strong><small>' + set.recordings.length + ' clips</small></button>';
      }).join("") + '</div>';
    wireHome();
    content.querySelectorAll("[data-hs-set]").forEach(function (button) {
      button.addEventListener("click", function () { renderCompare(button.dataset.hsSet); });
    });
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }
  function renderCompare(id) {
    stopAudio();
    var set = data.lookalikes.find(function (entry) { return entry.id === id; });
    content.innerHTML = '<div class="session-top"><button type="button" id="hs-back-compare">← All look-alikes</button><span>Side by side</span></div>' +
      '<div class="drill-heading"><p class="eyebrow">Side by side</p><h2>' + escapeHtml(set.title) + '</h2></div>' +
      '<div class="explanation hs-clue"><strong>How to tell them apart</strong><p>' + escapeHtml(set.clue) + '</p></div>' +
      '<div class="hs-compare-grid">' + set.recordings.map(function (recId) {
        var recording = recById(recId);
        var dx = dxById(recording.dx);
        return '<article class="hs-compare-card"><p class="eyebrow">' + escapeHtml(dx.name) + '</p><h4>' + escapeHtml(recording.title) + '</h4>' + audioTag(recording.file) + diagram(recording.diagram, true) +
          '<p class="hs-spot">' + escapeHtml(recording.spot) + '</p><p class="hs-note">' + escapeHtml(recording.note) + '</p></article>';
      }).join("") + '</div>';
    document.getElementById("hs-back-compare").addEventListener("click", renderCompareList);
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }

  // ---- 5. Mock exam ------------------------------------------------------------------
  // Each question is one clip and one question about it, like the real exam.
  function attributeQuestion(recording, fieldId) {
    var field = fieldById(fieldId);
    var correct = recording[fieldId];
    var wrong = shuffle(data.options[fieldId].filter(function (option) { return option !== correct; })).slice(0, 3);
    return { recording: recording, prompt: field.question, choices: shuffle([correct].concat(wrong)), answer: correct, kind: "text" };
  }
  function buildQuestion(recording) {
    var types = ["dx", "dx", "diagram", "where"];
    ["timing", "shape", "extra"].forEach(function (id) {
      if (recording[id] != null && !(id !== "extra" && recording[id] === "No murmur") && !(id === "extra" && recording[id] === "None")) types.push(id);
    });
    var type = pick(types);
    if (type === "dx") {
      var choices = dxChoices(recording);
      return { recording: recording, prompt: "What is this?", choices: choices.map(function (id) { return dxById(id).name; }), answer: dxById(recording.dx).name, kind: "text" };
    }
    if (type === "where") {
      var dx = dxById(recording.dx);
      var others = shuffle(data.diagnoses.filter(function (entry) { return entry.where !== dx.where; })).map(function (entry) { return entry.where; });
      var wrong = [];
      others.forEach(function (where) { if (wrong.length < 3 && wrong.indexOf(where) === -1) wrong.push(where); });
      return { recording: recording, prompt: "Where is the condition in this clip best heard?", choices: shuffle([dx.where].concat(wrong)), answer: dx.where, kind: "text" };
    }
    if (type === "diagram") {
      var key = JSON.stringify(recording.diagram);
      var seen = [key];
      var pool = [];
      shuffle(recordings).forEach(function (other) {
        var otherKey = JSON.stringify(other.diagram);
        if (pool.length < 3 && seen.indexOf(otherKey) === -1) { seen.push(otherKey); pool.push(other.diagram); }
      });
      var specs = shuffle([recording.diagram].concat(pool));
      return { recording: recording, prompt: "Which timing diagram matches what you hear?", choices: specs, answer: recording.diagram, kind: "diagram" };
    }
    return attributeQuestion(recording, type);
  }
  function startExam() {
    // Only 10 class sounds, so clips repeat with a different question about them.
    var clips = [];
    while (clips.length < EXAM_SIZE) clips = clips.concat(shuffle(recordings));
    clips = clips.slice(0, EXAM_SIZE);
    state = { mode: "exam", questions: clips.map(buildQuestion), position: 0, score: 0, misses: [] };
    renderExam();
  }
  function renderExam() {
    stopAudio();
    var question = state.questions[state.position];
    state.answered = false;
    var last = state.position + 1 === state.questions.length;
    content.innerHTML = sessionTop("Mock exam", state.position, state.questions.length, state.score + " right so far") +
      '<article class="question-card immersive-card hs-card"><div class="card-number">Question ' + (state.position + 1) + '</div><div class="hs-player">' + audioTag(question.recording.file) + '</div>' +
      '<h3>' + escapeHtml(question.prompt) + '</h3>' +
      '<div class="choices' + (question.kind === "diagram" ? " hs-diagram-choices" : "") + '" id="hs-choices">' + question.choices.map(function (choice, index) {
        var body = question.kind === "diagram" ? diagram(choice, true) : escapeHtml(choice);
        return '<button class="choice" type="button" data-hs-choice="' + index + '"><span>' + String.fromCharCode(65 + index) + '</span>' + body + '</button>';
      }).join("") + '</div><div class="explanation" id="hs-explanation" hidden></div><div id="hs-reveal"></div></article>' +
      '<button class="primary-action full-action" id="hs-next" type="button" hidden>' + (last ? "See my score" : "Next question →") + '</button>';
    wireHome();
    content.querySelectorAll("[data-hs-choice]").forEach(function (button) {
      button.addEventListener("click", function () { answerExam(Number(button.dataset.hsChoice)); });
    });
    document.getElementById("hs-next").addEventListener("click", function () {
      state.position += 1;
      if (state.position >= state.questions.length) renderExamResult();
      else renderExam();
    });
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }
  function answerExam(index) {
    if (state.answered) return;
    state.answered = true;
    var question = state.questions[state.position];
    var same = function (choice) { return JSON.stringify(choice) === JSON.stringify(question.answer); };
    var ok = same(question.choices[index]);
    if (ok) state.score += 1;
    else state.misses.push(question);
    content.querySelectorAll("[data-hs-choice]").forEach(function (button, buttonIndex) {
      button.disabled = true;
      if (same(question.choices[buttonIndex])) button.classList.add("correct");
      else if (buttonIndex === index) button.classList.add("wrong");
      else button.classList.add("dimmed");
    });
    var explanation = document.getElementById("hs-explanation");
    explanation.hidden = false;
    explanation.className = "explanation" + (ok ? "" : " drill-try-again");
    explanation.innerHTML = '<strong>' + (ok ? "Correct" : "Not quite") + '</strong><p>' + (question.kind === "diagram" ? "The highlighted diagram matches this clip." : "Answer: " + escapeHtml(question.answer)) + '</p>';
    document.getElementById("hs-reveal").innerHTML = revealCard(question.recording);
    var next = document.getElementById("hs-next");
    next.hidden = false;
    next.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  function renderExamResult() {
    stopAudio();
    var total = state.questions.length;
    var percent = Math.round(state.score / total * 100);
    var passed = state.score / total >= PASS;
    var misses = state.misses.map(function (question) {
      return '<li><strong>' + escapeHtml(question.recording.title) + '</strong><span>' + escapeHtml(question.prompt) + (question.kind === "diagram" ? "" : " → " + escapeHtml(question.answer)) + '</span></li>';
    }).join("");
    content.innerHTML = '<section class="complete-panel"><span class="complete-icon">' + (passed ? "✓" : "!") + '</span><p class="eyebrow">Mock exam</p><h3>' + percent + '%: ' + (passed ? "Pass" : "Below 70%") + '</h3><p>' + state.score + ' of ' + total + ' right. You need ' + Math.ceil(total * PASS) + ' of ' + total + ' to pass.</p>' +
      (misses ? '<ul class="hs-misses">' + misses + '</ul>' : "") +
      '<div class="session-actions"><button class="primary-action" id="hs-again" type="button">New mock exam</button><button class="secondary-action" id="hs-done" type="button">Heart Sounds home</button></div></section>';
    document.getElementById("hs-again").addEventListener("click", startExam);
    document.getElementById("hs-done").addEventListener("click", renderHome);
  }

  function renderDone(title, score, total, again) {
    stopAudio();
    content.innerHTML = '<section class="complete-panel"><span class="complete-icon">✓</span><p class="eyebrow">Set complete</p><h3>' + escapeHtml(title) + '</h3><p>' + score + ' of ' + total + ' right' + (state.mode === "describe" ? " on every attribute." : " on the first try.") + '</p><div class="session-actions"><button class="primary-action" id="hs-again" type="button">Shuffle and go again</button><button class="secondary-action" id="hs-done" type="button">Heart Sounds home</button></div></section>';
    document.getElementById("hs-again").addEventListener("click", again);
    document.getElementById("hs-done").addEventListener("click", renderHome);
  }

  launch.addEventListener("click", open);
  document.getElementById("heart-sounds-back").addEventListener("click", close);
}());
