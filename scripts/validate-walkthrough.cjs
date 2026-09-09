global.window = {};

require("../data/walkthrough/schema.js");
require("../data/walkthrough/config.js");
require("../data/walkthrough/cases-bacterial-parasitic.js");
require("../data/walkthrough/cases-tick-syphilis.js");
require("../data/walkthrough/cases-viral-global.js");
require("../data/walkthrough/cases-fungal-opportunistic.js");
require("../data/walkthrough/cases-hiv-sepsis.js");

const cases = window.DiseaseWalkthrough.cases;
const managementOnlyIds = new Set(window.DiseaseWalkthrough.managementOnlyIds || []);
const ids = new Set();
const required = ["id", "title", "lecture", "patient", "hallmarks", "tests", "acceptedTests", "result", "diagnoses", "acceptedDiagnoses", "treatments", "acceptedTreatments", "teaching"];

for (const item of cases) {
  if (ids.has(item.id)) throw new Error(`Duplicate case id: ${item.id}`);
  ids.add(item.id);
  for (const field of required) {
    if (item[field] == null || (Array.isArray(item[field]) && item[field].length === 0)) {
      throw new Error(`${item.id} is missing ${field}`);
    }
  }
  for (const answer of item.acceptedTests) if (!item.tests.includes(answer)) throw new Error(`${item.id} has an accepted test outside its options`);
  for (const answer of item.acceptedDiagnoses) if (!item.diagnoses.includes(answer)) throw new Error(`${item.id} has an accepted diagnosis outside its options`);
  for (const answer of item.acceptedTreatments) if (!item.treatments.includes(answer)) throw new Error(`${item.id} has an accepted treatment outside its options`);
}

for (const id of managementOnlyIds) if (!ids.has(id)) throw new Error(`Unknown management-only case id: ${id}`);

const diagnosisReadyCases = cases.filter(item => !managementOnlyIds.has(item.id));
const preconfirmedPattern = /\b(confirmed|culture (?:identifies|reports|grows)|blood cultures? (?:show|growing|positive)|positive (?:for|test)|biopsy-proven|PCR-confirmed|serologic evidence|tests positive)\b/i;
for (const item of diagnosisReadyCases) {
  const opening = `${item.patient} ${item.hallmarks.join(" ")}`;
  if (/the suspected condition/i.test(opening)) throw new Error(`${item.id} contains redaction filler in its opening clues`);
  if (preconfirmedPattern.test(item.patient)) throw new Error(`${item.id} pre-confirms the diagnosis before the test step`);
}

const lectures = [...new Set(cases.map(item => item.lecture))];
const byLecture = cases.reduce((counts, item) => {
  counts[item.lecture] = (counts[item.lecture] || 0) + 1;
  return counts;
}, {});
console.log(JSON.stringify({
  cases: cases.length,
  diagnosisReadyCases: diagnosisReadyCases.length,
  managementOnlyCases: managementOnlyIds.size,
  lectures: lectures.length,
  uniqueIds: ids.size,
  byLecture
}, null, 2));
