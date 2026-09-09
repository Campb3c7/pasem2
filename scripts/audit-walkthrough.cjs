global.window = {};

require("../data/walkthrough/schema.js");
require("../data/walkthrough/config.js");
require("../data/walkthrough/cases-bacterial-parasitic.js");
require("../data/walkthrough/cases-tick-syphilis.js");
require("../data/walkthrough/cases-viral-global.js");
require("../data/walkthrough/cases-fungal-opportunistic.js");
require("../data/walkthrough/cases-hiv-sepsis.js");

const excluded = new Set(window.DiseaseWalkthrough.managementOnlyIds || []);
const cases = window.DiseaseWalkthrough.cases.filter((item) => !excluded.has(item.id));
const stop = new Set(["acute", "adult", "associated", "bacterial", "case", "chronic", "clinical", "complicated", "confirmed", "disease", "early", "fever", "fungal", "high", "hospitalized", "immunocompromised", "infection", "invasive", "late", "localized", "patient", "pneumonia", "pulmonary", "severe", "syndrome", "treatment", "uncomplicated", "virus", "viral", "with"]);

function words(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, " ").split(/\s+/).filter((word) => word.length > 4 && !stop.has(word));
}

const findings = [];
for (const item of cases) {
  const presentation = `${item.patient} ${item.hallmarks.join(" ")}`.toLowerCase();
  const answerWords = [...new Set(words(`${item.title} ${item.acceptedDiagnoses.join(" ")}`))];
  const leaked = answerWords.filter((word) => presentation.includes(word));
  const preconfirmed = /\b(culture|pcr|naat|assay|serology|biopsy|smear|test|testing)\b.{0,45}\b(positive|confirms?|confirmed|identifies?|identified|grows?|grew|detects?|detected|reports?|reported|shows?|showing)\b/i.test(item.patient) || /\b(positive|confirmed|diagnosed|known)\b.{0,35}\b(infection|disease|culture|pcr|naat|assay|serology|biopsy|smear|test)\b/i.test(item.patient);
  const sparse = item.patient.length < 85 || item.hallmarks.length < 3;
  if (leaked.length || preconfirmed || sparse) findings.push({ id: item.id, lecture: item.lecture, leaked, preconfirmed, sparse, patient: item.patient });
}

console.log(JSON.stringify({
  cases: cases.length,
  managementOnlyCases: excluded.size,
  flagged: findings.length,
  directKeywordLeak: findings.filter((item) => item.leaked.length).length,
  preconfirmed: findings.filter((item) => item.preconfirmed).length,
  sparse: findings.filter((item) => item.sparse).length,
  findings
}, null, 2));
