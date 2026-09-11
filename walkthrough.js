(function () {
  "use strict";

  var data = window.DiseaseWalkthrough || { cases: [] };
  var view = document.getElementById("walkthrough-view");
  var content = document.getElementById("walkthrough-content");
  var hero = document.querySelector(".hero");
  var workspace = document.querySelector(".workspace");
  var studyView = document.getElementById("study-view");
  var state = { order: [], position: 0, step: "test", choices: {} };
  // These scenarios test management after naming or confirming the disease in the stem.
  // They remain in Treatment Match, but are not fair unknown-patient walkthroughs.
  var managementOnlyIds = new Set(data.managementOnlyIds || []);
  var cases = data.cases.filter(function (item) { return !managementOnlyIds.has(item.id); });

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>'"]/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char];
    });
  }
  function normalize(value) { return String(value || "").trim().toLowerCase(); }

  function holdScrollIntoView(el, ms, block) {
    if (!el) return;
    var deadline = performance.now() + ms;
    function tick() {
      el.scrollIntoView({ behavior: "instant", block: block || "nearest" });
      if (performance.now() < deadline) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  function hideDiagnosisTerms(item, value) {
    return escapeHtml(value);
  }
  function includesAnswer(value, answers) {
    var target = normalize(value);
    return answers.some(function (answer) { return normalize(answer) === target; });
  }
  function shuffle(items) {
    var copy = items.slice();
    for (var index = copy.length - 1; index > 0; index -= 1) {
      var swapIndex = Math.floor(Math.random() * (index + 1));
      var value = copy[index]; copy[index] = copy[swapIndex]; copy[swapIndex] = value;
    }
    return copy;
  }
  function unique(values) {
    return values.filter(function (value, index) { return values.indexOf(value) === index; });
  }
  function allValues(field, lecture) {
    var preferred = [], rest = [];
    cases.forEach(function (item) {
      (item[field] || []).forEach(function (value) {
        (item.lecture === lecture ? preferred : rest).push(value);
      });
    });
    return unique(preferred).concat(unique(rest).filter(function (value) { return preferred.indexOf(value) < 0; }));
  }
  function testKind(value) {
    var text = normalize(value);
    if (/clinical diagnosis|clinical reassessment|exposure assessment/.test(text)) return "clinical";
    if (/lumbar|csf/.test(text)) return "csf";
    if (/ct|mri|x-ray|radiograph|imaging|ultrasound|ecg|echo|endoscopy|colposcopy|fundosc|slit-lamp/.test(text)) return "imaging";
    if (/culture|pcr|serolog|antigen|antibody|stain|microscop|biopsy|smear|wet preparation|koh|naat|toxin|molecular/.test(text)) return "pathogen";
    if (/cbc|cmp|count|lactate|glucose|cortisol|chemistr|renal|urinalysis|hematocrit|laboratory/.test(text)) return "laboratory";
    return "other";
  }
  function buildChoices(item, field, acceptedField) {
    var accepted = item[acceptedField] || [];
    var correct = accepted[0];
    var choices = [correct];
    var pool = allValues(field, item.lecture).filter(function (value) {
      return !includesAnswer(value, accepted) && choices.indexOf(value) < 0;
    });
    if (field === "tests") {
      var kind = testKind(correct);
      var differentKinds = shuffle(pool.filter(function (value) { return testKind(value) !== kind; }));
      var sameKind = shuffle(pool.filter(function (value) { return testKind(value) === kind; }));
      var usedKinds = {};
      differentKinds.forEach(function (value) {
        var candidateKind = testKind(value);
        if (choices.length < 4 && !usedKinds[candidateKind]) {
          choices.push(value);
          usedKinds[candidateKind] = true;
        }
      });
      pool = differentKinds.concat(sameKind);
    } else {
      var localValues = [], outsideValues = [];
      cases.forEach(function (entry) {
        (entry[field] || []).forEach(function (value) {
          if (includesAnswer(value, accepted) || localValues.indexOf(value) >= 0 || outsideValues.indexOf(value) >= 0) return;
          (entry.lecture === item.lecture ? localValues : outsideValues).push(value);
        });
      });
      pool = shuffle(localValues).slice(0, 2).concat(shuffle(outsideValues));
    }
    pool.forEach(function (value) { if (choices.length < 4) choices.push(value); });
    return shuffle(choices.slice(0, 4));
  }
  function caseItem() { return cases[state.order[state.position]]; }
  function completedCases() {
    try { var saved = JSON.parse(localStorage.getItem("pasem2:walkthrough-completed") || "[]"); return Array.isArray(saved) ? saved : []; }
    catch (error) { return []; }
  }
  function prepareCase() {
    var item = caseItem();
    state.step = "test";
    state.choices = {
      test: buildChoices(item, "tests", "acceptedTests"),
      diagnosis: buildChoices(item, "diagnoses", "acceptedDiagnoses"),
      treatment: buildChoices(item, "treatments", "acceptedTreatments")
    };
  }
  function startRandomSession() {
    state.order = shuffle(cases.map(function (_, index) { return index; }));
    state.position = 0;
    if (state.order.length) prepareCase();
    render();
  }
  function choiceMarkup(kind, choices) {
    return '<div class="walkthrough-choices" role="group" aria-label="Choose one answer">' + choices.map(function (choice, index) {
      return '<button type="button" data-walkthrough-answer="' + kind + '" data-answer-value="' + escapeHtml(choice) + '"><span>' + String.fromCharCode(65 + index) + '</span>' + escapeHtml(choice) + '</button>';
    }).join("") + '</div>';
  }
  function render() {
    var item = caseItem();
    if (!item) { content.innerHTML = '<section class="complete-panel"><h2>No walkthrough cases are available.</h2></section>'; return; }
    var completed = completedCases();
    var completedInPool = completed.filter(function (id) { return cases.some(function (entry) { return entry.id === id; }); });
    content.innerHTML = '<div class="walkthrough-heading"><div><p class="eyebrow">Disease Walkthrough</p><h2>Unknown Patient</h2><p>Randomized diagnosis-ready case ' + (state.position + 1) + ' of ' + cases.length + '</p></div><button class="walkthrough-shuffle" id="walkthrough-shuffle" type="button">Shuffle new session</button></div><div class="walkthrough-progress"><span style="width:' + Math.round((state.position + 1) / cases.length * 100) + '%"></span></div><article class="walkthrough-patient"><div class="case-stage">1 · Hallmark presentation</div><h3>Patient presentation</h3><p>' + hideDiagnosisTerms(item, item.patient) + '</p><ul>' + item.hallmarks.map(function (fact) { return '<li>' + hideDiagnosisTerms(item, fact) + '</li>'; }).join("") + '</ul></article><section id="walkthrough-steps"></section><div class="walkthrough-footer"><span>' + completedInPool.length + ' of ' + cases.length + ' diagnosis-ready cases completed on this device</span><button type="button" id="walkthrough-next">Next random case →</button></div>';
    document.getElementById("walkthrough-shuffle").addEventListener("click", startRandomSession);
    document.getElementById("walkthrough-next").addEventListener("click", function () {
      state.position += 1;
      if (state.position >= state.order.length) { state.order = shuffle(cases.map(function (_, index) { return index; })); state.position = 0; }
      prepareCase(); render();
      var patient = content.querySelector(".walkthrough-patient");
      if (patient) patient.scrollIntoView({ behavior: "smooth", block: "start" }); else window.scrollTo({ top: view.offsetTop, behavior: "smooth" });
    });
    renderSteps();
  }
  function renderSteps(isAdvance) {
    var item = caseItem(), host = document.getElementById("walkthrough-steps"), html = "";
    html += '<article class="walkthrough-step active"><div class="case-stage">2 · Confirm the diagnosis</div><h3>What would you order?</h3><p>Choose the best confirmatory approach. An incorrect order returns the expected non-diagnostic result, then you can try again.</p>' + choiceMarkup("test", state.choices.test) + '<div id="test-feedback"></div></article>';
    if (state.step === "diagnosis" || state.step === "treatment" || state.step === "complete") html += '<article class="walkthrough-result"><span>Diagnostic result</span><strong>' + escapeHtml(item.result) + '</strong></article><article class="walkthrough-step active"><div class="case-stage">3 · Name the disease</div><h3>What is the diagnosis?</h3>' + choiceMarkup("diagnosis", state.choices.diagnosis) + '<div id="diagnosis-feedback"></div></article>';
    if (state.step === "treatment" || state.step === "complete") html += '<article class="walkthrough-step active"><div class="case-stage">4 · Treat the patient</div><h3>What is the treatment for this case?</h3><p>Choose the option that fits this patient, severity, and immune status.</p>' + choiceMarkup("treatment", state.choices.treatment) + '<div id="treatment-feedback"></div></article>';
    if (state.step === "complete") html += '<article class="walkthrough-teaching"><div class="case-stage">Case complete</div><h3>' + escapeHtml(item.title) + '</h3><p>' + escapeHtml(item.teaching) + '</p></article>';
    host.innerHTML = html;
    host.querySelectorAll('[data-walkthrough-answer="test"]').forEach(function (button) { button.addEventListener("click", function () { checkTest(button.dataset.answerValue); }); });
    host.querySelectorAll('[data-walkthrough-answer="diagnosis"]').forEach(function (button) { button.addEventListener("click", function () { checkDiagnosis(button.dataset.answerValue); }); });
    host.querySelectorAll('[data-walkthrough-answer="treatment"]').forEach(function (button) { button.addEventListener("click", function () { checkTreatment(button.dataset.answerValue); }); });
    // Advancing a step reveals new content below the fold -- scroll it into view
    // so the next question is immediately readable without hunting for it.
    if (isAdvance && host.lastElementChild) holdScrollIntoView(host.lastElementChild, 350);
  }
  function feedback(id, title, body) {
    var el = document.getElementById(id);
    el.innerHTML = '<div class="walkthrough-feedback wrong"><strong>' + escapeHtml(title) + '</strong><p>' + escapeHtml(body) + '</p></div>';
    holdScrollIntoView(el, 350);
  }
  function wrongResult(test) {
    var lower = normalize(test);
    if (/ct|x-ray|mri|ultrasound|imaging/.test(lower)) return "No acute abnormality relevant to this presentation is identified.";
    if (/culture|pcr|antigen|serology|antibody|stain|prep|microscopy/.test(lower)) return "The selected study is negative and does not confirm this disease.";
    if (/cbc|cmp|lab|panel|count|level/.test(lower)) return "The selected laboratory result is within its reference range and does not establish the diagnosis.";
    return "This approach is non-diagnostic for this patient.";
  }
  function checkTest(value) {
    var item = caseItem();
    if (includesAnswer(value, item.acceptedTests)) { state.step = "diagnosis"; renderSteps(true); }
    else feedback("test-feedback", value + " result", wrongResult(value) + " Choose the test that directly confirms the disease suggested by the hallmark features.");
  }
  function checkDiagnosis(value) {
    var item = caseItem();
    if (includesAnswer(value, item.acceptedDiagnoses)) { state.step = "treatment"; renderSteps(true); }
    else feedback("diagnosis-feedback", "Not this diagnosis", "Use the hallmark presentation and conclusive diagnostic result together. Try again.");
  }
  function checkTreatment(value) {
    var item = caseItem();
    if (includesAnswer(value, item.acceptedTreatments)) {
      state.step = "complete";
      var completed = completedCases();
      if (completed.indexOf(item.id) < 0) completed.push(item.id);
      localStorage.setItem("pasem2:walkthrough-completed", JSON.stringify(completed));
      renderSteps(true);
    } else feedback("treatment-feedback", "That treatment does not fit this case", "Recheck the patient population, severity, allergy status, and lecture-specific treatment, then try again.");
  }
  function open() {
    hero.hidden = true; workspace.hidden = true; studyView.hidden = true; view.hidden = false;
    startRandomSession(); window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function close() {
    view.hidden = true; hero.hidden = false; workspace.hidden = false; window.scrollTo({ top: 0, behavior: "smooth" });
  }
  document.getElementById("walkthrough-launch").addEventListener("click", open);
  document.getElementById("walkthrough-back").addEventListener("click", close);
}());
