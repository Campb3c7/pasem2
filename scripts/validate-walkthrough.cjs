global.window = {};

require("../data/walkthrough/schema.js");
require("../data/walkthrough/cases-bacterial-parasitic.js");
require("../data/walkthrough/cases-tick-syphilis.js");
require("../data/walkthrough/cases-viral-global.js");
require("../data/walkthrough/cases-fungal-opportunistic.js");
require("../data/walkthrough/cases-hiv-sepsis.js");

const cases = window.DiseaseWalkthrough.cases;
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

const lectures = [...new Set(cases.map(item => item.lecture))];
const byLecture = cases.reduce((counts, item) => {
  counts[item.lecture] = (counts[item.lecture] || 0) + 1;
  return counts;
}, {});
console.log(JSON.stringify({ cases: cases.length, lectures: lectures.length, uniqueIds: ids.size, byLecture }, null, 2));
