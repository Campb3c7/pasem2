/* Heart Sounds listening tool: its own course card on the home page.
   Organized by tier (Anna, 2026-11-02):
   Tier 1 = the 10 class sounds (name by ear): one by one, all at once, quiz, mock exam.
   Tier 2 = objective sounds without class audio, from outside clips: one by one, all at once, quiz.
   Tier 3 = facts only: read them, then practice questions. */
(function () {
  "use strict";

  var data = window.HEART_SOUNDS;
  var view = document.getElementById("heart-sounds-view");
  var content = document.getElementById("heart-sounds-content");
  var studyView = document.getElementById("study-view");
  if (!data || !view || !content) return;

  var PROGRESS_KEY = "pasem2:heart-sounds:cardio-part-1:progress";
  var EXAM_SIZE = 15;
  var PASS = 0.7;
  var recordings = data.recordings;
  var lookalikes = data.lookalikes;
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
  function recById(id) { return data.recordings.concat(data.extra.recordings).find(function (entry) { return entry.id === id; }); }
  function fieldById(id) { return data.fields.find(function (entry) { return entry.id === id; }); }
  var exam = window.HEART_SOUNDS_EXAM || { clips: {}, questions: [], size: 15 };
  // Quiz clips: the sound-only track with the spoken name cut off (data/heart-sounds-exam.js).
  function quizFile(recording) {
    var key = Object.keys(exam.clips).find(function (k) { return exam.clips[k].recording === recording.id; });
    return key ? exam.clips[key].file : recording.file;
  }
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
    var means = recording.means || (recording.title + " = " + dx.name + ".");
    var others = (recording.accept || []).map(dxById);
    return '<div class="hs-reveal">' +
      '<div class="hs-means"><span>This sound means</span><strong>' + escapeHtml(dx.name) + '</strong><p>' + escapeHtml(means) + '</p></div>' +
      '<div class="hs-reveal-top"><div><p class="eyebrow">What you hear' + (dx.lecture ? "" : " · " + escapeHtml(dx.name) + " is not on the lecture list") + '</p><h4>' + escapeHtml(recording.title) + '</h4><p class="hs-spot">Recorded at: ' + escapeHtml(recording.spot) + '</p></div></div>' +
      diagram(recording.diagram, true) +
      '<dl class="hs-attrs">' + attrRows(recording) + '</dl>' +
      (recording.note ? '<p class="hs-note">' + escapeHtml(recording.note) + '</p>' : "") +
      '<h5 class="hs-sub">' + escapeHtml(dx.name) + ': what to know</h5>' +
      '<div class="hs-dx-facts"><div><strong>Best heard</strong><span>' + escapeHtml(dx.where) + '</span></div><div><strong>Listen for</strong><span>' + escapeHtml(dx.clue) + '</span></div><div><strong>Bedside</strong><span>' + escapeHtml(dx.listen) + '</span></div><div><strong>Why</strong><span>' + escapeHtml(dx.why) + '</span></div></div>' +
      (others.length ? '<h5 class="hs-sub">Same sound, other causes: how to tell</h5><div class="hs-dx-facts">' + others.map(function (other) {
        return '<div><strong>' + escapeHtml(other.name) + '</strong><span>' + escapeHtml(other.where) + '. ' + escapeHtml(other.listen) + ' ' + escapeHtml(other.why) + '</span></div>';
      }).join("") + '</div>' : "") +
      '</div>';
  }

  function sessionTop(title, position, total, extra) {
    var percent = Math.round(position / Math.max(total, 1) * 100);
    return '<div class="session-top"><button type="button" id="hs-home">← ' + "Heart Sounds" + '</button><span>' + escapeHtml(title) + '</span></div>' +
      '<div class="session-progress"><span style="width:' + percent + '%"></span></div>' +
      '<div class="session-counter">' + (position + 1) + ' of ' + total + (extra ? ' · ' + extra : "") + '</div>';
  }
  function wireHome() { var home = document.getElementById("hs-home"); if (home) home.addEventListener("click", renderHome); }

  // ---- open / close ----------------------------------------------------------
  function open() {
    studyView.hidden = true;
    document.querySelector(".workspace").hidden = true;
    document.querySelector(".hero").hidden = true;
    document.querySelectorAll(".walkthrough-view").forEach(function (section) { section.hidden = true; });
    view.hidden = false;
    renderHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function close() {
    stopAudio();
    state = null;
    view.hidden = true;
    content.innerHTML = "";
    // Heart Sounds is its own course on the home page, so Back returns home.
    document.querySelector(".workspace").hidden = false;
    document.querySelector(".hero").hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }


  // ---- entries: one thing to learn, with its card ----------------------------
  // Tier 1 entry = a class recording. Tier 2 entry = an outside clip of a Tier 2 sound (or the sound alone if no clip).
  function tier1Entries() {
    return recordings.map(function (recording) {
      return { id: recording.id, recording: recording, name: dxById(recording.dx).name, card: function () { return revealCard(recording); } };
    });
  }
  function tier2Entries() {
    var entries = [];
    data.tier2.forEach(function (item) {
      if (!item.recordings.length) { entries.push({ id: "t2-" + item.id, item: item, name: item.name, card: function () { return tier2Card(item, null); } }); return; }
      item.recordings.forEach(function (id) {
        var recording = recById(id);
        entries.push({ id: "t2-" + item.id + "-" + id, item: item, recording: recording, name: item.name, card: function () { return tier2Card(item, recording); } });
      });
    });
    return entries;
  }
  function tier2Card(item, recording) {
    var dx = dxById(item.dx);
    return '<div class="hs-reveal">' +
      '<div class="hs-means"><span>This sound means</span><strong>' + escapeHtml(item.name) + '</strong><p>' + escapeHtml(item.means) + '</p></div>' +
      (recording
        ? '<div class="hs-reveal-top"><div><p class="eyebrow">This clip · ' + escapeHtml(sourceName(recording)) + '</p><h4>' + escapeHtml(recording.title) + '</h4><p class="hs-spot">Recorded at: ' + escapeHtml(recording.spot) + '</p></div></div>' + diagram(recording.diagram, true) + (recording.note ? '<p class="hs-note">' + escapeHtml(recording.note) + '</p>' : "")
        : '<p class="hs-note"><strong>No recording in your files.</strong> Listen to one online (EasyAuscultation or YouTube) a few times.</p>') +
      '<h5 class="hs-sub">' + escapeHtml(item.name) + ': what to know</h5>' +
      '<div class="hs-dx-facts"><div><strong>Signature</strong><span>' + escapeHtml(item.signature) + '</span></div><div><strong>Best heard</strong><span>' + escapeHtml(dx.where) + '</span></div><div><strong>Bedside</strong><span>' + escapeHtml(dx.listen) + '</span></div><div><strong>Why</strong><span>' + escapeHtml(dx.why) + '</span></div></div>' +
      '</div>';
  }
  function sourceName(recording) {
    return { class: "Class recording", michigan: "Michigan library", congenital: "Congenital set" }[recording.source];
  }
  function playersFor(entry) {
    var recording = entry.recording;
    if (!recording) return "";
    if (recording.narrated) return '<div class="hs-player"><p class="hs-track">Track ' + recording.track + ' · sound only</p>' + audioTag(recording.file) + '<p class="hs-track">Track ' + recording.narratedTrack + ' · with lecture</p>' + audioTag(recording.narrated) + '</div>';
    return '<div class="hs-player">' + audioTag(recording.file) + '</div>';
  }

  // ---- home ------------------------------------------------------------------
  function tierButton(action, title, text) {
    return '<button class="drill-section-card hs-mode" type="button" data-hs-action="' + action + '"><strong>' + escapeHtml(title) + '</strong><span>' + escapeHtml(text) + '</span></button>';
  }
  function renderHome() {
    stopAudio();
    state = null;
    var progress = loadProgress();
    var t1done = recordings.filter(function (recording) { return progress[recording.id] && progress[recording.id].mc; }).length;
    var html = '<div class="drill-heading murmur-heading"><p class="eyebrow">Listening exam</p><h2>Heart Sounds</h2><p>Up to 15 questions on audio clips, 70% to pass. Learn it in three tiers: Tier 1 by ear first, Tier 2 a few listens each, Tier 3 as facts.</p></div>';
    var exDone = exam.questions.filter(function (question, index) { return progress["ex|" + index] && progress["ex|" + index].mc; }).length;
    html += '<section class="hs-tier hs-exam-tier"><div class="hs-tier-head"><span class="hs-tier-badge t-ex">Exam practice</span><div><h3>Questions like the real exam</h3><p>A short patient story plus a clip, then one question: name it, systolic or diastolic, which maneuver, volume or pressure overload. Every clip is one of your class sounds (sound only, with the spoken name cut off). ' + exDone + ' of ' + exam.questions.length + ' right on the first try.</p></div></div><div class="hs-modes">' +
      tierButton("ex-exam", "Practice exam", exam.size + " questions, one try each, 70% to pass. Covers all 10 sounds.") +
      tierButton("ex-all", "Every question", "All " + exam.questions.length + " questions, shuffled, one try each.") +
      '</div></section>';
    html += '<section class="hs-tier"><div class="hs-tier-head"><span class="hs-tier-badge">Tier 1</span><div><h3>Name these by ear</h3><p>Your 10 class sounds (all 20 tracks). Most of the exam will be these. ' + t1done + ' of 10 named on the first try.</p></div></div><div class="hs-modes">' +
      tierButton("t1-learn", "One by one", "Each sound with both tracks, its diagram, and what it means.") +
      tierButton("t1-all", "All at once", "All 10 sounds on one page to read and listen through.") +
      tierButton("t1-quiz", "Quiz: what is this?", "Hear a class clip, pick what it means. Shuffled.") +
      tierButton("t1-exam", "Mock exam", EXAM_SIZE + " questions on the class clips, one try each, 70% to pass.") +
      '</div></section>';
    html += '<section class="hs-tier"><div class="hs-tier-head"><span class="hs-tier-badge t2">Tier 2</span><div><h3>A few listens each</h3><p>In the objectives but not in your class audio: AR, ejection click, midsystolic click, PDA, VSD, Still\'s, friction rub. Clips come from outside libraries.</p></div></div><div class="hs-modes">' +
      tierButton("t2-learn", "One by one", "Each sound with its clips and what it means.") +
      tierButton("t2-all", "All at once", "All 7 on one page.") +
      tierButton("t2-quiz", "Quiz: what is this?", "Hear an outside clip, pick the Tier 2 sound.") +
      '</div></section>';
    html += '<section class="hs-tier"><div class="hs-tier-head"><span class="hs-tier-badge t3">Tier 3</span><div><h3>Know the facts</h3><p>Sounds that differ from Tier 1 mainly by location or breathing, plus splits, grading, and stethoscope use. Expect these as written follow-up questions.</p></div></div><div class="hs-modes">' +
      tierButton("t3-facts", "Read the facts", data.tier3.facts.length + " short fact cards.") +
      tierButton("t3-quiz", "Practice questions", data.tier3.questions.length + " questions, shuffled.") +
      '</div></section>';
    html += '<p class="murmur-footnote hs-sources"><strong>Sources.</strong> ' + escapeHtml(data.sources.class) + ' Tier 2 clips: ' + escapeHtml(data.sources.michigan) + ' ' + escapeHtml(data.sources.congenital) + ' <button type="button" id="hs-reset">Reset heart sounds progress</button></p>';
    content.innerHTML = html;
    content.querySelectorAll("[data-hs-action]").forEach(function (button) {
      button.addEventListener("click", function () { act(button.dataset.hsAction); });
    });
    document.getElementById("hs-reset").addEventListener("click", function () {
      if (!window.confirm("Reset Heart Sounds progress on this device?")) return;
      saveProgress({});
      renderHome();
    });
  }
  function act(action) {
    if (action === "ex-exam") startExamPractice(true);
    else if (action === "ex-all") startExamPractice(false);
    else if (action === "t1-learn") startLearn("Tier 1 · one by one", tier1Entries());
    else if (action === "t1-all") renderAll("Tier 1 · all at once", "Your 10 class sounds. Play the sound-only track, then check what it means.", tier1Entries());
    else if (action === "t1-quiz") startQuiz("Tier 1 quiz", tier1Entries(), "t1");
    else if (action === "t1-exam") startExam();
    else if (action === "t2-learn") startLearn("Tier 2 · one by one", tier2Entries());
    else if (action === "t2-all") renderTier2All();
    else if (action === "t2-quiz") startQuiz("Tier 2 quiz", tier2Entries().filter(function (entry) { return entry.recording; }), "t2");
    else if (action === "t3-facts") renderFacts();
    else if (action === "t3-quiz") startTier3();
  }

  // ---- one by one ------------------------------------------------------------
  function startLearn(title, entries) {
    state = { mode: "learn", title: title, items: entries, position: 0 };
    renderLearn();
  }
  function renderLearn() {
    stopAudio();
    var entry = state.items[state.position];
    var last = state.position + 1 === state.items.length;
    content.innerHTML = sessionTop(state.title, state.position, state.items.length, entry.recording ? sourceName(entry.recording) : "") +
      '<article class="question-card immersive-card hs-card">' + playersFor(entry) + entry.card() + '</article>' +
      '<div class="hs-nav"><button class="secondary-action" id="hs-prev" type="button"' + (state.position ? "" : " disabled") + '>← Previous</button>' +
      '<button class="primary-action" id="hs-next" type="button">' + (last ? "Done" : "Next →") + '</button></div>';
    wireHome();
    document.getElementById("hs-prev").addEventListener("click", function () { state.position -= 1; renderLearn(); });
    document.getElementById("hs-next").addEventListener("click", function () {
      if (last) { renderHome(); return; }
      state.position += 1; renderLearn();
    });
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }

  // ---- all at once -------------------------------------------------------------
  function allTop(title, text) {
    return '<div class="session-top"><button type="button" id="hs-home">← Heart Sounds</button><span>' + escapeHtml(title) + '</span></div>' +
      '<div class="drill-heading"><h2>' + escapeHtml(title) + '</h2><p>' + escapeHtml(text) + '</p></div>';
  }
  function renderAll(title, text, entries) {
    stopAudio();
    content.innerHTML = allTop(title, text) + '<div class="hs-all">' + entries.map(function (entry) {
      return '<article class="question-card hs-card">' + playersFor(entry) + entry.card() + '</article>';
    }).join("") + '</div>';
    wireHome();
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }
  // Tier 2 on one page: one card per sound, with all of its clips.
  function renderTier2All() {
    stopAudio();
    content.innerHTML = allTop("Tier 2 · all at once", "Seven sounds from the objectives without class audio. Listen to each clip a few times.") + '<div class="hs-all">' + data.tier2.map(function (item) {
      var clips = item.recordings.map(function (id) {
        var recording = recById(id);
        return '<div class="hs-clip"><p class="hs-track">' + escapeHtml(recording.title) + '</p>' + audioTag(recording.file) + diagram(recording.diagram, true) + '</div>';
      }).join("");
      return '<article class="question-card hs-card">' + tier2Card(item, null).replace('<p class="hs-note"><strong>No recording in your files.</strong> Listen to one online (EasyAuscultation or YouTube) a few times.</p>', clips || '<p class="hs-note"><strong>No recording in your files.</strong> Listen to one online (EasyAuscultation or YouTube) a few times.</p>') + '</article>';
    }).join("") + '</div>';
    wireHome();
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }

  // ---- quiz: what is this? -------------------------------------------------------
  // Tier 1 wrong answers come from look-alikes first; Tier 2 wrong answers are other Tier 2 sounds.
  function similarDx(recording) {
    var ids = [];
    lookalikes.forEach(function (set) {
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
  function choicesFor(entry, tier) {
    if (tier === "t1") return dxChoices(entry.recording).map(function (id) { return dxById(id).name; });
    var others = shuffle(data.tier2.filter(function (item) { return item.id !== entry.item.id; })).slice(0, 3).map(function (item) { return item.name; });
    return shuffle([entry.name].concat(others));
  }
  function startQuiz(title, entries, tier) {
    state = { mode: "quiz", tier: tier, title: title, items: shuffle(entries), position: 0, firstTry: 0 };
    renderQuiz();
  }
  function renderQuiz() {
    stopAudio();
    var entry = state.items[state.position];
    state.missed = false;
    state.answered = false;
    state.choices = choicesFor(entry, state.tier);
    var last = state.position + 1 === state.items.length;
    content.innerHTML = sessionTop(state.title, state.position, state.items.length, state.firstTry + " right on the first try") +
      '<article class="question-card immersive-card hs-card"><div class="card-number">What is this?</div><div class="hs-player">' + audioTag(state.tier === "t1" ? quizFile(entry.recording) : entry.recording.file) + '</div>' +
      '<div class="choices" id="hs-choices">' + state.choices.map(function (name, index) {
        return '<button class="choice" type="button" data-hs-choice="' + index + '"><span>' + String.fromCharCode(65 + index) + '</span>' + escapeHtml(name) + '</button>';
      }).join("") + '</div><div class="explanation" id="hs-explanation" hidden></div><div id="hs-reveal"></div></article>' +
      '<button class="primary-action full-action" id="hs-next" type="button" hidden>' + (last ? "See results" : "Next clip →") + '</button>';
    wireHome();
    content.querySelectorAll("[data-hs-choice]").forEach(function (button) {
      button.addEventListener("click", function () { answerQuiz(Number(button.dataset.hsChoice)); });
    });
    document.getElementById("hs-next").addEventListener("click", function () {
      state.position += 1;
      if (state.position >= state.items.length) {
        var again = { title: state.title, items: state.items, tier: state.tier };
        renderDone(state.title, state.firstTry, state.items.length, function () { startQuiz(again.title, again.items, again.tier); });
      } else renderQuiz();
    });
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }
  function answerQuiz(index) {
    if (state.answered) return;
    var entry = state.items[state.position];
    var buttons = content.querySelectorAll("[data-hs-choice]");
    var explanation = document.getElementById("hs-explanation");
    if (state.choices[index] !== entry.name) {
      state.missed = true;
      buttons[index].classList.add("wrong");
      buttons[index].disabled = true;
      explanation.hidden = false;
      explanation.className = "explanation drill-try-again";
      explanation.innerHTML = "<strong>Not this one</strong><p>Listen again and try another answer.</p>";
      return;
    }
    state.answered = true;
    if (!state.missed) { state.firstTry += 1; mark(entry.id, "mc"); }
    buttons.forEach(function (button, buttonIndex) {
      button.disabled = true;
      if (buttonIndex === index) button.classList.add("correct");
      else if (!button.classList.contains("wrong")) button.classList.add("dimmed");
    });
    explanation.hidden = true;
    document.getElementById("hs-reveal").innerHTML = entry.card();
    var next = document.getElementById("hs-next");
    next.hidden = false;
    next.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // ---- Tier 3: facts and questions ---------------------------------------------------
  function renderFacts() {
    stopAudio();
    content.innerHTML = allTop("Tier 3 · the facts", "No listening needed. Know these for the written follow-up questions.") +
      '<div class="hs-fact-grid">' + data.tier3.facts.map(function (fact) {
        return '<article class="hs-fact"><h4>' + escapeHtml(fact.title) + '</h4><p>' + escapeHtml(fact.text) + '</p></article>';
      }).join("") + '</div><button class="primary-action full-action" id="hs-to-t3" type="button">Practice questions →</button>';
    wireHome();
    document.getElementById("hs-to-t3").addEventListener("click", startTier3);
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }
  function startTier3() {
    var items = data.tier3.questions.map(function (question, index) { return { id: "t3|" + index, question: question }; });
    state = { mode: "t3", title: "Tier 3 questions", items: shuffle(items), position: 0, firstTry: 0 };
    renderTier3();
  }
  function renderTier3() {
    var item = state.items[state.position];
    var question = item.question;
    state.missed = false;
    state.answered = false;
    state.choices = shuffle([question.a].concat(question.w));
    var last = state.position + 1 === state.items.length;
    content.innerHTML = sessionTop(state.title, state.position, state.items.length, state.firstTry + " right on the first try") +
      '<article class="question-card immersive-card hs-card"><div class="card-number">Tier 3</div><h3>' + escapeHtml(question.q) + '</h3>' +
      '<div class="choices" id="hs-choices">' + state.choices.map(function (choice, index) {
        return '<button class="choice" type="button" data-hs-choice="' + index + '"><span>' + String.fromCharCode(65 + index) + '</span>' + escapeHtml(choice) + '</button>';
      }).join("") + '</div><div class="explanation" id="hs-explanation" hidden></div></article>' +
      '<button class="primary-action full-action" id="hs-next" type="button" hidden>' + (last ? "See results" : "Next question →") + '</button>';
    wireHome();
    content.querySelectorAll("[data-hs-choice]").forEach(function (button) {
      button.addEventListener("click", function () { answerTier3(Number(button.dataset.hsChoice)); });
    });
    document.getElementById("hs-next").addEventListener("click", function () {
      state.position += 1;
      if (state.position >= state.items.length) renderDone(state.title, state.firstTry, state.items.length, startTier3);
      else renderTier3();
    });
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }
  function answerTier3(index) {
    if (state.answered) return;
    var item = state.items[state.position];
    var buttons = content.querySelectorAll("[data-hs-choice]");
    var explanation = document.getElementById("hs-explanation");
    if (state.choices[index] !== item.question.a) {
      state.missed = true;
      buttons[index].classList.add("wrong");
      buttons[index].disabled = true;
      explanation.hidden = false;
      explanation.className = "explanation drill-try-again";
      explanation.innerHTML = "<strong>Not this one</strong><p>Try another answer.</p>";
      return;
    }
    state.answered = true;
    if (!state.missed) { state.firstTry += 1; mark(item.id, "mc"); }
    buttons.forEach(function (button, buttonIndex) {
      button.disabled = true;
      if (buttonIndex === index) button.classList.add("correct");
      else if (!button.classList.contains("wrong")) button.classList.add("dimmed");
    });
    explanation.hidden = false;
    explanation.className = "explanation";
    explanation.innerHTML = '<strong>' + escapeHtml(item.question.a) + '</strong><p>' + escapeHtml(item.question.x) + '</p>';
    var next = document.getElementById("hs-next");
    next.hidden = false;
    next.scrollIntoView({ behavior: "smooth", block: "nearest" });
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
      shuffle(data.recordings).forEach(function (other) {
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
    while (clips.length < EXAM_SIZE) clips = clips.concat(shuffle(data.recordings));
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
      '<article class="question-card immersive-card hs-card"><div class="card-number">Question ' + (state.position + 1) + '</div><div class="hs-player">' + audioTag(quizFile(question.recording)) + '</div>' +
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

  // ---- Exam practice -----------------------------------------------------------------
  function examItems(short) {
    var items = exam.questions.map(function (question, index) { return { id: "ex|" + index, question: question }; });
    if (!short) return shuffle(items);
    // Deal one question per sound in turn so a short exam still covers every sound.
    var bySound = {};
    shuffle(items).forEach(function (item) { (bySound[item.question.sound] = bySound[item.question.sound] || []).push(item); });
    var sounds = shuffle(Object.keys(bySound));
    var dealt = [];
    while (dealt.length < exam.size && sounds.some(function (sound) { return bySound[sound].length; })) {
      sounds.forEach(function (sound) { if (dealt.length < exam.size && bySound[sound].length) dealt.push(bySound[sound].shift()); });
    }
    return shuffle(dealt);
  }
  function startExamPractice(short) {
    state = { mode: "ex", short: short, title: short ? "Practice exam" : "Every question", items: examItems(short), position: 0, score: 0, misses: [] };
    renderExamPractice();
  }
  function renderExamPractice() {
    stopAudio();
    var item = state.items[state.position];
    var question = item.question;
    var clip = exam.clips[question.sound];
    state.answered = false;
    state.choices = question.order ? question.order.slice() : shuffle([question.answer].concat(question.wrong));
    var last = state.position + 1 === state.items.length;
    content.innerHTML = sessionTop(state.title, state.position, state.items.length, state.score + " right so far") +
      '<div class="hs-exam-layout"><article class="question-card immersive-card hs-card hs-exam-q"><div class="card-number">Question ' + (state.position + 1) + '</div>' +
      (question.vignette ? '<p class="hs-vignette">' + escapeHtml(question.vignette) + '</p>' : "") +
      '<h3>' + escapeHtml(question.question) + '</h3>' +
      '<div class="choices" id="hs-choices">' + state.choices.map(function (choice, index) {
        return '<button class="choice" type="button" data-hs-choice="' + index + '"><span>' + String.fromCharCode(65 + index) + '</span>' + escapeHtml(choice) + '</button>';
      }).join("") + '</div><div class="explanation" id="hs-explanation" hidden></div><div id="hs-reveal"></div></article>' +
      '<aside class="hs-attachment"><p class="eyebrow">Question ' + (state.position + 1) + ' attachment</p>' + audioTag(clip.file) + '</aside></div>' +
      '<button class="primary-action full-action" id="hs-next" type="button" hidden>' + (last ? "See my score" : "Next question →") + '</button>';
    wireHome();
    content.querySelectorAll("[data-hs-choice]").forEach(function (button) {
      button.addEventListener("click", function () { answerExamPractice(Number(button.dataset.hsChoice)); });
    });
    document.getElementById("hs-next").addEventListener("click", function () {
      state.position += 1;
      if (state.position >= state.items.length) renderExamPracticeResult();
      else renderExamPractice();
    });
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }
  function soundCard(clip) {
    var recording = recById(clip.recording);
    var dx = dxById(recording.dx);
    return '<div class="hs-reveal"><div class="hs-means"><span>The sound in this clip</span><strong>' + escapeHtml(recording.title) + '</strong><p>' + escapeHtml(recording.means || dx.name) + '</p></div>' +
      diagram(recording.diagram, true) + '<p class="hs-muted">Clip: ' + escapeHtml(clip.from) + ', class recording.</p></div>';
  }
  function answerExamPractice(index) {
    if (state.answered) return;
    state.answered = true;
    var item = state.items[state.position];
    var question = item.question;
    var ok = state.choices[index] === question.answer;
    if (ok) { state.score += 1; mark(item.id, "mc"); }
    else state.misses.push(item);
    content.querySelectorAll("[data-hs-choice]").forEach(function (button, buttonIndex) {
      button.disabled = true;
      if (state.choices[buttonIndex] === question.answer) button.classList.add("correct");
      else if (buttonIndex === index) button.classList.add("wrong");
      else button.classList.add("dimmed");
    });
    var explanation = document.getElementById("hs-explanation");
    explanation.hidden = false;
    explanation.className = "explanation" + (ok ? "" : " drill-try-again");
    explanation.innerHTML = '<strong>' + (ok ? "Correct: " : "Answer: ") + escapeHtml(question.answer) + '</strong><p>' + escapeHtml(question.why) + '</p>';
    document.getElementById("hs-reveal").innerHTML = soundCard(exam.clips[question.sound]);
    var next = document.getElementById("hs-next");
    next.hidden = false;
    next.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  function renderExamPracticeResult() {
    stopAudio();
    var total = state.items.length;
    var percent = Math.round(state.score / total * 100);
    var passed = state.score / total >= PASS;
    var short = state.short;
    var misses = state.misses.map(function (item) {
      var recording = recById(exam.clips[item.question.sound].recording);
      return '<li><strong>' + escapeHtml(recording.title) + '</strong><span>' + escapeHtml(item.question.question) + ' → ' + escapeHtml(item.question.answer) + '</span></li>';
    }).join("");
    content.innerHTML = '<section class="complete-panel"><span class="complete-icon">' + (passed ? "✓" : "!") + '</span><p class="eyebrow">' + escapeHtml(state.title) + '</p><h3>' + percent + '%: ' + (passed ? "Pass" : "Below 70%") + '</h3><p>' + state.score + ' of ' + total + ' right. You need ' + Math.ceil(total * PASS) + ' of ' + total + ' to pass.</p>' +
      (misses ? '<ul class="hs-misses">' + misses + '</ul>' : "") +
      '<div class="session-actions"><button class="primary-action" id="hs-again" type="button">' + (short ? "New practice exam" : "Shuffle and go again") + '</button><button class="secondary-action" id="hs-done" type="button">Heart Sounds home</button></div></section>';
    document.getElementById("hs-again").addEventListener("click", function () { startExamPractice(short); });
    document.getElementById("hs-done").addEventListener("click", renderHome);
  }

  function renderDone(title, score, total, again) {
    stopAudio();
    content.innerHTML = '<section class="complete-panel"><span class="complete-icon">✓</span><p class="eyebrow">Set complete</p><h3>' + escapeHtml(title) + '</h3><p>' + score + ' of ' + total + ' right' + " on the first try." + '</p><div class="session-actions"><button class="primary-action" id="hs-again" type="button">Shuffle and go again</button><button class="secondary-action" id="hs-done" type="button">Heart Sounds home</button></div></section>';
    document.getElementById("hs-again").addEventListener("click", again);
    document.getElementById("hs-done").addEventListener("click", renderHome);
  }

  window.HeartSoundsTool = { open: open };
  document.getElementById("heart-sounds-back").addEventListener("click", close);
}());
