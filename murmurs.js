/* Heart Murmurs practice tool (Cardio Part 1).
   Practice only: pick a set, answer shuffled questions one at a time, retry after a miss.
   Questions with a chest map hide the spot names until the right answer is picked. */
(function () {
  "use strict";

  var data = window.HEART_MURMURS;
  var launch = document.getElementById("murmurs-launch");
  var view = document.getElementById("murmurs-view");
  var content = document.getElementById("murmurs-content");
  var studyView = document.getElementById("study-view");
  if (!data || !launch || !view || !content) return;

  var PROGRESS_KEY = "pasem2:murmurs:cardio-part-1:progress";
  var MIX_SIZE = 40;
  var sections = data.sections || [];
  var state = null;

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
  function loadProgress() {
    try { var value = localStorage.getItem(PROGRESS_KEY); return value ? JSON.parse(value) : {}; }
    catch (error) { return {}; }
  }
  function saveProgress(progress) { try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)); } catch (error) {} }
  function markMastered(id) { var progress = loadProgress(); progress[id] = true; saveProgress(progress); }

  // Every question carries a stable id "<section id>|<index>".
  function allQuestions() {
    var items = [];
    sections.forEach(function (section) {
      section.questions.forEach(function (question, index) {
        items.push({ id: section.id + "|" + index, section: section, question: question });
      });
    });
    return items;
  }
  function sectionItems(section) {
    return allQuestions().filter(function (item) { return item.section === section; });
  }
  function masteredCount(items, progress) {
    return items.filter(function (item) { return progress[item.id]; }).length;
  }

  // ---- chest map -----------------------------------------------------------
  var RADIATION = {
    carotids: ["M117 110 Q118 62 136 22", "M117 110 Q150 70 162 22"],
    "left-neck": ["M183 110 Q186 70 170 24", "M183 110 Q215 82 248 70"],
    axilla: ["M246 214 Q268 204 286 180"],
    apex: ["M192 162 Q216 186 226 204"]
  };
  var SHORT_NAMES = { aortic: "Aortic", pulmonic: "Pulmonic", erb: "Erb's", tricuspid: "Tricuspid", mitral: "Mitral" };
  function ribs() {
    var out = "";
    [104, 138, 170, 194, 230].forEach(function (y) {
      out += '<path d="M162 ' + y + ' Q215 ' + (y - 6) + ' 268 ' + (y + 22) + '"/><path d="M138 ' + y + ' Q85 ' + (y - 6) + ' 32 ' + (y + 22) + '"/>';
    });
    return out;
  }
  function renderMap(map, revealed) {
    var spotId = map && map.spot;
    var svg = '<svg class="murmur-map" viewBox="0 0 300 300" role="img" aria-label="' + (revealed && spotId ? "Chest map: " + escapeHtml(SHORT_NAMES[spotId]) + " area" : "Chest map with the listening spot highlighted") + '">';
    svg += '<defs><marker id="murmur-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#e8c27a"/></marker></defs>';
    svg += '<rect class="murmur-neck" x="124" y="0" width="52" height="46" rx="10"/>';
    svg += '<path class="murmur-torso" d="M124 40 C98 48 58 50 28 70 L18 300 L282 300 L272 70 C242 50 202 48 176 40 Z"/>';
    svg += '<g class="murmur-ribs">' + ribs() + '</g>';
    svg += '<path class="murmur-heart" d="M140 128 C170 116 206 134 216 164 C228 194 242 214 234 226 C200 238 160 232 130 214 C116 198 120 150 140 128 Z"/>';
    svg += '<line class="murmur-clavicle" x1="140" y1="62" x2="58" y2="74"/><line class="murmur-clavicle" x1="160" y1="62" x2="242" y2="74"/>';
    svg += '<rect class="murmur-sternum" x="138" y="60" width="24" height="176" rx="9"/>';
    svg += '<line class="murmur-mcl" x1="232" y1="80" x2="232" y2="270"/><text class="murmur-axis" x="232" y="284" text-anchor="middle">MCL</text>';
    svg += '<text class="murmur-axis" x="30" y="292">Patient R</text><text class="murmur-axis" x="270" y="292" text-anchor="end">Patient L</text>';
    if (map && map.radiate && RADIATION[map.radiate]) {
      RADIATION[map.radiate].forEach(function (d) { svg += '<path class="murmur-radiation" d="' + d + '" marker-end="url(#murmur-arrow)"/>'; });
    }
    (data.spots || []).forEach(function (spot) {
      var active = spot.id === spotId;
      if (active) svg += '<circle class="murmur-pulse" cx="' + spot.x + '" cy="' + spot.y + '" r="12"/>';
      svg += '<circle class="murmur-spot' + (active ? " active" : "") + '" cx="' + spot.x + '" cy="' + spot.y + '" r="' + (active ? 9 : 6) + '"/>';
      if (revealed || !map) {
        var left = spot.id === "aortic", below = spot.id === "mitral";
        var lx = below ? spot.x : left ? spot.x - 14 : spot.x + 13, ly = below ? spot.y + 22 : spot.y + 4;
        svg += '<text class="murmur-label' + (active ? " active" : "") + '" x="' + lx + '" y="' + ly + '"' + (left ? ' text-anchor="end"' : below ? ' text-anchor="middle"' : "") + '>' + escapeHtml(SHORT_NAMES[spot.id]) + '</text>';
      }
    });
    return svg + '</svg>';
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

  // ---- home ----------------------------------------------------------------
  function chartHtml() {
    return '<details class="murmur-chart"><summary>Murmur chart (quick look-up)</summary><div class="murmur-chart-scroll"><table><thead><tr><th>Lesion</th><th>Timing · shape</th><th>Sound</th><th>Best heard</th><th>Radiates</th><th>Louder with</th><th>Goes with</th></tr></thead><tbody>' +
      (data.chart || []).map(function (row) {
        return '<tr><th>' + escapeHtml(row.name) + '</th><td>' + escapeHtml(row.timing) + '</td><td>' + escapeHtml(row.sound) + '</td><td>' + escapeHtml(row.where) + '</td><td>' + escapeHtml(row.radiates) + '</td><td>' + escapeHtml(row.louder) + '</td><td>' + escapeHtml(row.extras) + '</td></tr>';
      }).join("") + '</tbody></table></div></details>';
  }
  function renderHome() {
    state = null;
    var progress = loadProgress();
    var all = allQuestions();
    var weak = all.filter(function (item) { return !progress[item.id]; });
    var html = '<div class="drill-heading murmur-heading"><p class="eyebrow">Cardio Part 1 · auscultation practice</p><h2>Heart Murmurs</h2><p>Practice, not teaching. Every set shuffles its questions and answers. A question counts as mastered once you get it right on the first try.</p><span class="diseases-count-pill">' + masteredCount(all, progress) + ' of ' + all.length + ' mastered</span></div>';
    html += '<div class="murmur-home-top"><div class="murmur-map-card">' + renderMap(null, true) + '<ul class="murmur-spot-list">' + (data.spots || []).map(function (spot) {
      return '<li><strong>' + escapeHtml(spot.name) + '</strong><span>' + escapeHtml(spot.where) + '</span></li>';
    }).join("") + '</ul></div><div class="murmur-quick">' +
      '<button class="murmur-quick-card" type="button" data-murmur-mix="all"><span>Mixed</span><strong>Exam mix</strong><small>' + Math.min(MIX_SIZE, all.length) + ' random questions from every set</small></button>' +
      '<button class="murmur-quick-card" type="button" data-murmur-mix="weak"' + (weak.length ? "" : " disabled") + '><span>Focus</span><strong>Not mastered yet</strong><small>' + (weak.length ? weak.length + " questions you haven't nailed on the first try" : "Everything mastered. Reset below to start over.") + '</small></button>' +
      '</div></div>';
    html += chartHtml();
    html += '<div class="drill-section-grid murmur-section-grid">' + sections.map(function (section, index) {
      var items = sectionItems(section);
      var done = masteredCount(items, progress);
      return '<button class="drill-section-card murmur-section-card" type="button" data-murmur-section="' + escapeHtml(section.id) + '"><span class="drill-section-number">' + String(index + 1).padStart(2, "0") + '</span><strong>' + escapeHtml(section.title) + '</strong><span>' + escapeHtml(section.description) + '</span><small>' + done + ' / ' + items.length + ' mastered</small><span class="murmur-mini-track"><span style="width:' + Math.round(done / Math.max(items.length, 1) * 100) + '%"></span></span></button>';
    }).join("") + '</div>';
    html += '<p class="murmur-footnote">Built from the Valvular Disease, Cardiovascular H&amp;P, and Cardiomyopathies lectures. "Other heart sounds" covers the Heart Sounds objectives with standard teaching until that deck is uploaded. <button type="button" id="murmur-reset">Reset murmur progress</button></p>';
    content.innerHTML = html;
    content.querySelectorAll("[data-murmur-section]").forEach(function (button) {
      button.addEventListener("click", function () {
        var section = sections.find(function (entry) { return entry.id === button.dataset.murmurSection; });
        startSession(section.title, sectionItems(section), section);
      });
    });
    content.querySelectorAll("[data-murmur-mix]").forEach(function (button) {
      button.addEventListener("click", function () {
        if (button.dataset.murmurMix === "weak") startSession("Not mastered yet", allQuestions().filter(function (item) { return !loadProgress()[item.id]; }), null);
        else startSession("Exam mix", shuffle(allQuestions()).slice(0, MIX_SIZE), null);
      });
    });
    document.getElementById("murmur-reset").addEventListener("click", function () {
      if (!window.confirm("Reset Heart Murmurs progress on this device?")) return;
      saveProgress({});
      renderHome();
    });
  }

  // ---- session -------------------------------------------------------------
  function startSession(title, items, section) {
    if (!items.length) return;
    state = { title: title, section: section, items: shuffle(items), position: 0, firstTry: 0, missed: false, answered: false, choices: [] };
    renderQuestion();
  }
  function current() { return state.items[state.position]; }
  function renderQuestion() {
    var item = current();
    var question = item.question;
    state.missed = false;
    state.answered = false;
    state.choices = shuffle([question.a].concat(question.w));
    var percent = Math.round(state.position / state.items.length * 100);
    var noteText = item.section.note || (question.flag === "heart-sounds" ? "From the Heart Sounds objectives. That deck isn't uploaded yet, so this uses standard teaching." : "");
    var note = noteText ? '<p class="murmur-flag">' + escapeHtml(noteText) + '</p>' : "";
    content.innerHTML = '<div class="session-top"><button type="button" id="murmur-home">← All murmur sets</button><span>' + escapeHtml(state.title) + '</span></div>' +
      '<div class="session-progress"><span style="width:' + percent + '%"></span></div>' +
      '<div class="session-counter">Question ' + (state.position + 1) + ' of ' + state.items.length + ' · ' + state.firstTry + ' right on the first try</div>' +
      '<article class="question-card immersive-card drill-question murmur-question"><div class="card-number">' + escapeHtml(item.section.title) + '</div>' +
      (question.map ? '<div class="murmur-map-wrap" id="murmur-map">' + renderMap(question.map, false) + '<span>' + (question.map.radiate ? "Highlighted spot · arrows show radiation" : "Highlighted spot") + '</span></div>' : "") +
      '<h3>' + escapeHtml(question.q) + '</h3>' + note +
      '<div class="choices" id="murmur-choices">' + state.choices.map(function (choice, index) {
        return '<button class="choice" type="button" data-murmur-choice="' + index + '"><span>' + String.fromCharCode(65 + index) + '</span>' + escapeHtml(choice) + '</button>';
      }).join("") + '</div><div class="explanation" id="murmur-explanation" hidden></div></article>' +
      '<button class="primary-action full-action" id="murmur-next" type="button" hidden>' + (state.position + 1 === state.items.length ? "See results" : "Next question →") + '</button>';
    document.getElementById("murmur-home").addEventListener("click", renderHome);
    content.querySelectorAll("[data-murmur-choice]").forEach(function (button) {
      button.addEventListener("click", function () { answer(Number(button.dataset.murmurChoice)); });
    });
    document.getElementById("murmur-next").addEventListener("click", next);
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }
  function answer(index) {
    if (state.answered) return;
    var item = current();
    var buttons = content.querySelectorAll("[data-murmur-choice]");
    var explanation = document.getElementById("murmur-explanation");
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
    if (!state.missed) { state.firstTry += 1; markMastered(item.id); }
    buttons.forEach(function (button, buttonIndex) {
      button.disabled = true;
      if (buttonIndex === index) button.classList.add("correct");
      else if (!button.classList.contains("wrong")) button.classList.add("dimmed");
    });
    if (item.question.map) {
      var mapWrap = document.getElementById("murmur-map");
      var spot = (data.spots || []).find(function (entry) { return entry.id === item.question.map.spot; });
      mapWrap.innerHTML = renderMap(item.question.map, true) + '<span>' + escapeHtml(spot ? spot.name + " · " + spot.where : "") + '</span>';
    }
    explanation.hidden = false;
    explanation.className = "explanation";
    explanation.innerHTML = '<strong>' + escapeHtml(item.question.a) + '</strong><p>' + escapeHtml(item.question.x) + '</p>';
    var nextButton = document.getElementById("murmur-next");
    nextButton.hidden = false;
    nextButton.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  function next() {
    state.position += 1;
    if (state.position >= state.items.length) { renderComplete(); return; }
    renderQuestion();
  }
  function renderComplete() {
    var total = state.items.length;
    var score = state.firstTry;
    content.innerHTML = '<section class="complete-panel"><span class="complete-icon">✓</span><p class="eyebrow">Set complete</p><h3>' + escapeHtml(state.title) + '</h3><p>' + score + ' of ' + total + ' right on the first try.</p><div class="score-grid"><span><strong>' + score + '</strong>First try</span><span><strong>' + (total - score) + '</strong>Needed a retry</span></div><div class="session-actions"><button class="primary-action" id="murmur-again" type="button">Shuffle and go again</button><button class="secondary-action" id="murmur-done" type="button">All murmur sets</button></div></section>';
    var again = state;
    document.getElementById("murmur-again").addEventListener("click", function () {
      if (again.section) startSession(again.title, sectionItems(again.section), again.section);
      else if (again.title === "Not mastered yet") startSession(again.title, allQuestions().filter(function (item) { return !loadProgress()[item.id]; }), null);
      else startSession(again.title, shuffle(allQuestions()).slice(0, MIX_SIZE), null);
      if (!state || state === again) renderHome();
    });
    document.getElementById("murmur-done").addEventListener("click", renderHome);
  }

  launch.addEventListener("click", open);
  document.getElementById("murmurs-back").addEventListener("click", close);
}());
