(function () {
  "use strict";

  var diseases = window.DISEASE_GEOGRAPHY || [];
  var launch = document.getElementById("geography-launch");
  var view = document.getElementById("geography-view");
  var content = document.getElementById("geography-content");
  var hero = document.querySelector(".hero");
  var workspace = document.querySelector(".workspace");
  var studyView = document.getElementById("study-view");
  var walkthroughView = document.getElementById("walkthrough-view");
  var drillView = document.getElementById("diagnosis-drill-view");
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
  function unique(items) {
    return items.filter(function (item, index) { return items.indexOf(item) === index; });
  }
  function currentItem() { return diseases[state.order[state.position]]; }
  function mapMarkup(item, showAll) {
    var allPoints = showAll ? diseases.reduce(function (points, disease) { return points.concat(disease.points || []); }, []) : [];
    var dots = allPoints.map(function (point) {
      return '<circle class="geo-dot geo-dot-muted" cx="' + point[0] + '" cy="' + point[1] + '" r="5"></circle>';
    }).join("");
    if (item) dots += (item.points || []).map(function (point) {
      return '<g class="geo-marker"><circle class="geo-pulse" cx="' + point[0] + '" cy="' + point[1] + '" r="16"></circle><circle class="geo-dot" cx="' + point[0] + '" cy="' + point[1] + '" r="7"></circle></g>';
    }).join("");
    return '<div class="geo-map-wrap"><svg class="geo-map" viewBox="0 0 1000 500" role="img" aria-label="Flat world map highlighting ' + escapeHtml(item ? item.region : "the studied regions") + '"><rect class="geo-ocean" width="1000" height="500" rx="22"></rect><g class="geo-grid"><path d="M0 125H1000M0 250H1000M0 375H1000M250 0V500M500 0V500M750 0V500"></path></g><g class="geo-land"><path d="M55 91L111 49 194 39 263 67 303 111 269 143 222 151 193 193 149 180 124 146 88 135Z"></path><path d="M258 35L318 25 352 58 323 91 275 82Z"></path><path d="M245 211L294 215 331 253 334 304 315 360 282 430 258 392 249 326 229 270Z"></path><path d="M425 100L478 77 537 91 551 123 520 151 469 148 438 129Z"></path><path d="M446 159L530 151 572 204 565 264 535 334 493 357 458 312 431 238Z"></path><path d="M535 89L617 61 716 59 809 86 907 139 899 177 827 195 758 177 701 207 642 189 595 157 548 139Z"></path><path d="M694 192L744 207 764 245 741 274 708 244Z"></path><path d="M790 308L873 289 927 326 913 379 850 401 799 372Z"></path><path d="M878 238L895 249 887 269 870 258Z"></path></g>' + dots + '</svg><div class="geo-map-caption"><span>Flat map</span><strong>' + escapeHtml(item ? item.region : "Regional disease overview") + '</strong></div></div>';
  }
  function open() {
    hero.hidden = true;
    workspace.hidden = true;
    studyView.hidden = true;
    walkthroughView.hidden = true;
    drillView.hidden = true;
    view.hidden = false;
    renderHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function close() {
    state = null;
    view.hidden = true;
    hero.hidden = false;
    workspace.hidden = false;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function renderHome() {
    state = null;
    content.innerHTML = '<div class="geo-heading"><p class="eyebrow">Visual travel medicine</p><h2>Disease Geography Lab</h2><p>Build the map first, then practice both directions until the travel history becomes an automatic clue.</p></div><div class="geo-mode-grid"><button type="button" data-geo-mode="learn"><span>01</span><strong>Guided map</strong><small>Learn one disease-region pair at a time. Difficult cards return at the end.</small></button><button type="button" data-geo-mode="travel"><span>02</span><strong>Travel clue quiz</strong><small>See a location and exposure, then identify the disease.</small></button><button type="button" data-geo-mode="reverse"><span>03</span><strong>Reverse map quiz</strong><small>See the disease, then choose its geographic anchor.</small></button><button type="button" data-geo-mode="atlas"><span>04</span><strong>Regional atlas</strong><small>Explore the complete map and compare overlapping regions.</small></button></div><div class="geo-home-count">' + diseases.length + ' location-sensitive diseases from your lectures</div>';
    content.querySelectorAll("[data-geo-mode]").forEach(function (button) {
      button.addEventListener("click", function () {
        if (button.dataset.geoMode === "learn") startLearn();
        else if (button.dataset.geoMode === "atlas") renderAtlas(diseases[0]);
        else startQuiz(button.dataset.geoMode);
      });
    });
  }
  function sessionHeader(label, detail, done, total) {
    var percent = total ? Math.round(done / total * 100) : 0;
    return '<div class="session-top"><button type="button" id="geo-exit">← Geography Lab</button><span>' + escapeHtml(label) + '</span></div><div class="session-progress"><span style="width:' + percent + '%"></span></div><div class="session-counter">' + escapeHtml(detail) + '</div>';
  }
  function bindExit() { document.getElementById("geo-exit").addEventListener("click", renderHome); }
  function startLearn() {
    state = { mode: "learn", order: shuffle(diseases.map(function (_, index) { return index; })), position: 0, firstPass: diseases.length };
    renderLearn();
  }
  function renderLearn() {
    if (state.position >= state.order.length) { renderComplete("Guided map complete", diseases.length, diseases.length); return; }
    var item = currentItem();
    var review = state.position >= state.firstPass;
    content.innerHTML = sessionHeader("Guided map", (state.position + 1) + " of " + state.order.length, state.position, state.order.length) + '<div class="geo-study-layout">' + mapMarkup(item, false) + '<article class="geo-fact"><div class="card-number">' + (review ? "Review location" : escapeHtml(item.scope)) + '</div><h3>' + escapeHtml(item.disease) + '</h3><p class="geo-region">' + escapeHtml(item.region) + '</p><div class="geo-memory"><span>Memory anchor</span><strong>' + escapeHtml(item.anchor) + '</strong></div><p>' + escapeHtml(item.travelClue) + '</p></article></div><div class="learn-actions"><button class="learn-btn learn-btn-dunno" id="geo-again" type="button">Not yet — show again</button><button class="learn-btn learn-btn-know" id="geo-know" type="button">I know this location</button></div>';
    bindExit();
    document.getElementById("geo-again").addEventListener("click", function () { state.order.push(state.order[state.position]); state.position += 1; renderLearn(); });
    document.getElementById("geo-know").addEventListener("click", function () { state.position += 1; renderLearn(); });
    window.scrollTo({ top: view.offsetTop, behavior: "smooth" });
  }
  function startQuiz(mode) {
    state = { mode: mode, order: shuffle(diseases.map(function (_, index) { return index; })), position: 0, score: 0, missedCurrent: false, answered: false, choices: [] };
    state.choices = makeChoices(currentItem());
    renderQuiz();
  }
  function answerValue(item) { return state.mode === "travel" ? item.disease : item.region; }
  function makeChoices(item) {
    var correct = answerValue(item);
    var pool = unique(diseases.map(answerValue)).filter(function (value) { return value !== correct; });
    return shuffle([correct].concat(shuffle(pool).slice(0, 3)));
  }
  function renderQuiz() {
    var item = currentItem();
    var travel = state.mode === "travel";
    var title = travel ? "Travel clue quiz" : "Reverse map quiz";
    var prompt = travel ? "Which disease best matches this travel map and exposure?" : "Where should this disease live on your mental map?";
    var question = travel ? mapMarkup(item, false) + '<div class="geo-quiz-clue">' + escapeHtml(item.travelClue) + '</div>' : '<article class="geo-disease-prompt"><span>Map this disease</span><strong>' + escapeHtml(item.disease) + '</strong></article>';
    content.innerHTML = sessionHeader(title, "Question " + (state.position + 1) + " of " + state.order.length + " · " + state.score + " correct on the first try", state.position, state.order.length) + '<article class="question-card immersive-card geo-question"><div class="card-number">Regional recognition</div><h3>' + prompt + '</h3>' + question + '<div class="choices">' + state.choices.map(function (choice, index) { return '<button class="choice" type="button" data-geo-choice="' + index + '"><span>' + String.fromCharCode(65 + index) + '</span>' + escapeHtml(choice) + '</button>'; }).join("") + '</div><div class="explanation" id="geo-explanation" hidden></div></article><button class="primary-action full-action" id="geo-next" type="button" hidden>' + (state.position + 1 === state.order.length ? "See results" : "Next random location →") + '</button>';
    bindExit();
    content.querySelectorAll("[data-geo-choice]").forEach(function (button) { button.addEventListener("click", function () { answerQuiz(Number(button.dataset.geoChoice)); }); });
    document.getElementById("geo-next").addEventListener("click", nextQuiz);
    window.scrollTo({ top: view.offsetTop, behavior: "smooth" });
  }
  function answerQuiz(selectedIndex) {
    if (state.answered) return;
    var item = currentItem();
    var correct = answerValue(item);
    var selected = state.choices[selectedIndex];
    var buttons = content.querySelectorAll("[data-geo-choice]");
    var explanation = document.getElementById("geo-explanation");
    if (selected !== correct) {
      state.missedCurrent = true;
      buttons[selectedIndex].classList.add("wrong");
      buttons[selectedIndex].disabled = true;
      explanation.hidden = false;
      explanation.className = "explanation drill-try-again";
      explanation.innerHTML = "<strong>Not this location pair</strong><p>Use the map position and exposure anchor, then try again.</p>";
      return;
    }
    state.answered = true;
    if (!state.missedCurrent) state.score += 1;
    buttons.forEach(function (button, index) {
      button.disabled = true;
      if (state.choices[index] === correct) button.classList.add("correct"); else if (!button.classList.contains("wrong")) button.classList.add("dimmed");
    });
    explanation.hidden = false;
    explanation.className = "explanation geo-answer";
    explanation.innerHTML = (state.mode === "reverse" ? mapMarkup(item, false) : "") + '<strong>' + escapeHtml(item.disease) + '</strong><p>' + escapeHtml(item.region) + '</p><p>' + escapeHtml(item.anchor) + '</p>';
    document.getElementById("geo-next").hidden = false;
  }
  function nextQuiz() {
    state.position += 1;
    if (state.position >= state.order.length) {
      renderComplete(state.mode === "travel" ? "Travel clue quiz complete" : "Reverse map quiz complete", state.score, state.order.length);
      return;
    }
    state.missedCurrent = false;
    state.answered = false;
    state.choices = makeChoices(currentItem());
    renderQuiz();
  }
  function renderAtlas(selected) {
    state = { mode: "atlas" };
    var groups = unique(diseases.map(function (item) { return item.group; }));
    content.innerHTML = sessionHeader("Regional atlas", "Select a disease to isolate its geographic pattern", 0, 1) + '<div class="geo-atlas-layout"><div>' + mapMarkup(selected, true) + '<article class="geo-atlas-detail"><span>' + escapeHtml(selected.scope) + '</span><h3>' + escapeHtml(selected.disease) + '</h3><p class="geo-region">' + escapeHtml(selected.region) + '</p><div class="geo-memory"><span>Memory anchor</span><strong>' + escapeHtml(selected.anchor) + '</strong></div><p>' + escapeHtml(selected.travelClue) + '</p></article></div><div class="geo-atlas-index">' + groups.map(function (group) {
      var groupItems = diseases.filter(function (item) { return item.group === group; });
      return '<section><h3>' + escapeHtml(group) + '</h3>' + groupItems.map(function (item) { return '<button type="button" class="' + (item.id === selected.id ? "active" : "") + '" data-atlas-disease="' + escapeHtml(item.id) + '">' + escapeHtml(item.disease) + '</button>'; }).join("") + '</section>';
    }).join("") + '</div></div>';
    bindExit();
    content.querySelectorAll("[data-atlas-disease]").forEach(function (button) {
      button.addEventListener("click", function () {
        renderAtlas(diseases.find(function (item) { return item.id === button.dataset.atlasDisease; }));
      });
    });
  }
  function renderComplete(title, score, total) {
    var mode = state.mode;
    content.innerHTML = '<section class="complete-panel"><span class="complete-icon">⌖</span><p class="eyebrow">Geography session complete</p><h3>' + escapeHtml(title) + '</h3><p>' + score + ' of ' + total + ' correct on the first try.</p><div class="score-grid"><span><strong>' + score + '</strong>First try</span><span><strong>' + (total - score) + '</strong>Needed review</span></div><div class="session-actions"><button class="primary-action" id="geo-restart" type="button">Shuffle and study again</button><button class="secondary-action" id="geo-home" type="button">Geography Lab</button></div></section>';
    document.getElementById("geo-restart").addEventListener("click", function () { if (mode === "learn") startLearn(); else startQuiz(mode); });
    document.getElementById("geo-home").addEventListener("click", renderHome);
  }
  function renderAtlas(selected) {
    var groups = unique(diseases.map(function (item) { return item.group; }));
    content.innerHTML = '<div class="session-top"><button type="button" id="geo-exit">← Geography Lab</button><span>Regional atlas</span></div><div class="geo-atlas-layout"><div><div id="geo-atlas-map">' + mapMarkup(selected, true) + '</div><article class="geo-atlas-detail" id="geo-atlas-detail"><span>' + escapeHtml(selected.scope) + '</span><h3>' + escapeHtml(selected.disease) + '</h3><strong>' + escapeHtml(selected.region) + '</strong><p>' + escapeHtml(selected.anchor) + '</p></article></div><div class="geo-atlas-index">' + groups.map(function (group) {
      return '<section><h3>' + escapeHtml(group) + '</h3>' + diseases.filter(function (item) { return item.group === group; }).map(function (item) { return '<button type="button" data-atlas-id="' + escapeHtml(item.id) + '" class="' + (item.id === selected.id ? "active" : "") + '">' + escapeHtml(item.disease) + '</button>'; }).join("") + '</section>';
    }).join("") + '</div></div>';
    bindExit();
    content.querySelectorAll("[data-atlas-id]").forEach(function (button) {
      button.addEventListener("click", function () { renderAtlas(diseases.find(function (item) { return item.id === button.dataset.atlasId; })); });
    });
    window.scrollTo({ top: view.offsetTop, behavior: "smooth" });
  }

  launch.addEventListener("click", open);
  document.getElementById("geography-back").addEventListener("click", close);
}());
