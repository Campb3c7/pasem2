(function () {
  "use strict";

  var data = window.DiseaseWalkthrough || { cases: [] };
  var view = document.getElementById("walkthrough-view");
  var content = document.getElementById("walkthrough-content");
  var hero = document.querySelector(".hero");
  var workspace = document.querySelector(".workspace");
  var studyView = document.getElementById("study-view");
  var state = { caseIndex: 0, step: "test", ordered: [] };

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>'"]/g, function (char) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[char];
    });
  }
  function normalize(value) { return String(value || "").trim().toLowerCase(); }
  function includesAnswer(value, answers) {
    var target = normalize(value);
    return answers.some(function (answer) { return normalize(answer) === target; });
  }
  function unique(field) {
    var values = [];
    data.cases.forEach(function (item) {
      (item[field] || []).forEach(function (value) { if (values.indexOf(value) < 0) values.push(value); });
    });
    return values.sort();
  }
  function options(id, values) {
    return '<datalist id="' + id + '">' + values.map(function (value) { return '<option value="' + escapeHtml(value) + '"></option>'; }).join("") + '</datalist>';
  }
  function wrongResult(test) {
    var lower = normalize(test);
    if (/ct|x-ray|mri|ultrasound|imaging/.test(lower)) return "No acute abnormality relevant to this presentation is identified.";
    if (/culture|pcr|antigen|serology|antibody|stain|prep|microscopy/.test(lower)) return "The selected study is negative and does not confirm the cause of this presentation.";
    if (/cbc|cmp|lab|panel|count|level/.test(lower)) return "The selected laboratory result is within its reference range and does not establish the diagnosis.";
    return "This choice does not establish the diagnosis. The result is non-diagnostic for this patient.";
  }
  function caseItem() { return data.cases[state.caseIndex]; }
  function completedCases() {
    try { var saved = JSON.parse(localStorage.getItem("pasem2:walkthrough-completed") || "[]"); return Array.isArray(saved) ? saved : []; }
    catch (error) { return []; }
  }
  function field(label, id, listId, values, button) {
    return '<div class="walkthrough-answer"><label for="' + id + '">' + label + '</label><div class="walkthrough-input-row"><input id="' + id + '" list="' + listId + '" autocomplete="off" placeholder="Type to search all options"><button type="button" id="' + button + '">Check answer</button></div>' + options(listId, values) + '</div>';
  }
  function render() {
    var item = caseItem();
    if (!item) { content.innerHTML = '<section class="complete-panel"><h2>No walkthrough cases are available.</h2></section>'; return; }
    var completed = completedCases();
    content.innerHTML = '<div class="walkthrough-heading"><div><p class="eyebrow">Disease Walkthrough</p><h2>Clinical Case</h2><p>' + escapeHtml(item.lecture) + ' · Case ' + (state.caseIndex + 1) + ' of ' + data.cases.length + '</p></div><label>Choose case<select id="walkthrough-case">' + data.cases.map(function (entry, index) { return '<option value="' + index + '" ' + (index === state.caseIndex ? 'selected' : '') + '>Case ' + String(index + 1).padStart(3, "0") + ' · ' + escapeHtml(entry.lecture) + '</option>'; }).join("") + '</select></label></div><div class="walkthrough-progress"><span style="width:' + Math.round((state.caseIndex + 1) / data.cases.length * 100) + '%"></span></div><article class="walkthrough-patient"><div class="case-stage">1 · Hallmark presentation</div><h3>Patient presentation</h3><p>' + escapeHtml(item.patient) + '</p><ul>' + item.hallmarks.map(function (fact) { return '<li>' + escapeHtml(fact) + '</li>'; }).join("") + '</ul></article><section id="walkthrough-steps"></section><div class="walkthrough-footer"><span>' + completed.length + ' of ' + data.cases.length + ' cases completed on this device</span><button type="button" id="walkthrough-next">Next case →</button></div>';
    document.getElementById("walkthrough-case").addEventListener("change", function () { state = { caseIndex: Number(this.value), step: "test", ordered: [] }; render(); });
    document.getElementById("walkthrough-next").addEventListener("click", function () { state = { caseIndex: (state.caseIndex + 1) % data.cases.length, step: "test", ordered: [] }; render(); window.scrollTo({ top: view.offsetTop, behavior: "smooth" }); });
    renderSteps();
  }
  function renderSteps() {
    var item = caseItem(), host = document.getElementById("walkthrough-steps"), html = "";
    html += '<article class="walkthrough-step active"><div class="case-stage">2 · Confirm the diagnosis</div><h3>What would you order?</h3><p>Choose the best confirmatory approach. If another study is reasonable but non-diagnostic here, you will see its expected result and can try again.</p>' + field("Diagnostic test or approach", "test-answer", "test-options", unique("tests"), "check-test") + '<div id="test-feedback"></div></article>';
    if (state.step === "diagnosis" || state.step === "treatment" || state.step === "complete") html += '<article class="walkthrough-result"><span>Diagnostic result</span><strong>' + escapeHtml(item.result) + '</strong></article>' + '<article class="walkthrough-step active"><div class="case-stage">3 · Name the disease</div><h3>What is the diagnosis?</h3>' + field("Diagnosis", "diagnosis-answer", "diagnosis-options", unique("diagnoses"), "check-diagnosis") + '<div id="diagnosis-feedback"></div></article>';
    if (state.step === "treatment" || state.step === "complete") html += '<article class="walkthrough-step active"><div class="case-stage">4 · Treat the patient</div><h3>What is the drug of choice for this case?</h3><p>Doses are intentionally excluded. Choose the treatment that fits this exact patient and severity.</p>' + field("Treatment", "treatment-answer", "treatment-options", unique("treatments"), "check-treatment") + '<div id="treatment-feedback"></div></article>';
    if (state.step === "complete") html += '<article class="walkthrough-teaching"><div class="case-stage">Case complete</div><h3>' + escapeHtml(item.title) + '</h3><p>' + escapeHtml(item.teaching) + '</p></article>';
    host.innerHTML = html;
    document.getElementById("check-test").addEventListener("click", checkTest);
    if (document.getElementById("check-diagnosis")) document.getElementById("check-diagnosis").addEventListener("click", checkDiagnosis);
    if (document.getElementById("check-treatment")) document.getElementById("check-treatment").addEventListener("click", checkTreatment);
  }
  function feedback(id, correct, title, body) {
    document.getElementById(id).innerHTML = '<div class="walkthrough-feedback ' + (correct ? 'correct' : 'wrong') + '"><strong>' + escapeHtml(title) + '</strong><p>' + escapeHtml(body) + '</p></div>';
  }
  function checkTest() {
    var value = document.getElementById("test-answer").value, item = caseItem();
    if (!value) return feedback("test-feedback", false, "Choose a test", "Start typing and select the best option from the full diagnostic list.");
    if (!includesAnswer(value, unique("tests"))) return feedback("test-feedback", false, "Use a listed option", "Select an exact test or diagnostic approach from the dropdown.");
    if (includesAnswer(value, item.acceptedTests)) { state.step = "diagnosis"; renderSteps(); }
    else feedback("test-feedback", false, value + " result", wrongResult(value) + " Choose another study that directly confirms the disease suggested by the hallmark features.");
  }
  function checkDiagnosis() {
    var value = document.getElementById("diagnosis-answer").value, item = caseItem();
    if (includesAnswer(value, item.acceptedDiagnoses)) { state.step = "treatment"; renderSteps(); }
    else feedback("diagnosis-feedback", false, "Not this diagnosis", "Use the hallmark presentation and the conclusive diagnostic result together. Try again.");
  }
  function checkTreatment() {
    var value = document.getElementById("treatment-answer").value, item = caseItem();
    if (includesAnswer(value, item.acceptedTreatments)) {
      state.step = "complete";
      var completed = completedCases();
      if (completed.indexOf(item.id) < 0) completed.push(item.id);
      localStorage.setItem("pasem2:walkthrough-completed", JSON.stringify(completed));
      renderSteps();
    } else feedback("treatment-feedback", false, "That treatment does not fit this case", "Recheck the patient population, severity, and lecture-specific drug of choice, then try again.");
  }
  function open() {
    hero.hidden = true; workspace.hidden = true; studyView.hidden = true; view.hidden = false;
    render(); window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function close() {
    view.hidden = true; hero.hidden = false; workspace.hidden = false; window.scrollTo({ top: 0, behavior: "smooth" });
  }
  document.getElementById("walkthrough-launch").addEventListener("click", open);
  document.getElementById("walkthrough-back").addEventListener("click", close);
}());
