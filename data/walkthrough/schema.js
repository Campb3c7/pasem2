(function () {
  "use strict";

  var cases = [];
  function cleanList(value) {
    return (Array.isArray(value) ? value : [value]).filter(Boolean);
  }
  function defineCase(config) {
    var item = Object.assign({}, config);
    item.hallmarks = cleanList(item.hallmarks);
    item.tests = cleanList(item.tests);
    item.diagnoses = cleanList(item.diagnoses || item.diagnosis);
    item.treatments = cleanList(item.treatments || item.treatment);
    item.acceptedTests = cleanList(item.acceptedTests || item.tests[0]);
    item.acceptedDiagnoses = cleanList(item.acceptedDiagnoses || item.diagnoses[0]);
    item.acceptedTreatments = cleanList(item.acceptedTreatments || item.treatments[0]);
    if (!item.id || !item.title || !item.lecture || !item.patient || !item.result || !item.teaching) {
      throw new Error("Disease walkthrough case is missing a required field: " + (item.id || "unknown"));
    }
    return item;
  }
  function register(items) {
    items.forEach(function (item) { cases.push(defineCase(item)); });
  }
  function makeCase(id, lecture, title, patient, hallmarks, test, result, diagnosis, treatment, teaching) {
    return defineCase({
      id: id,
      lecture: lecture,
      title: title,
      patient: patient,
      hallmarks: hallmarks,
      tests: [test],
      acceptedTests: [test],
      result: result,
      diagnosis: diagnosis,
      diagnoses: [diagnosis],
      treatment: treatment,
      treatments: [treatment],
      teaching: teaching
    });
  }

  window.DiseaseWalkthrough = { cases: cases, defineCase: defineCase, makeCase: makeCase, register: register };
}());
