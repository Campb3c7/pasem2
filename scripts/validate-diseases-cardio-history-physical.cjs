// Validates the Cardio Part 1 Diseases data for the Cardiovascular H&P lecture
// (data/diseases-cardio-history-physical.js -> window.CARDIO_DISEASES_HP).
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');

const root = path.join(__dirname, '..');
const context = vm.createContext({ window: {} });
for (const file of ['data/disease-helpers.js', 'data/diseases-cardio-history-physical.js']) {
  vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
}

const lecture = context.window.CARDIO_DISEASES_HP;
assert(lecture && Array.isArray(lecture.diseases) && lecture.diseases.length, 'CARDIO_DISEASES_HP must be loaded');
assert.equal(lecture.id, 'cardio-history-physical');
assert.equal(lecture.title, 'Cardiovascular H&P');

const required = [
  'hp-angina-acs',
  'hp-palpitations',
  'hp-heart-failure',
  'hp-edema-lymphedema',
  'hp-dvt-venous',
  'hp-pad',
  'hp-syncope',
  'hp-abdominal-vascular',
  'hp-clubbing-cyanosis',
  'hp-hypertension-lvh',
  'hp-murmurs-rubs'
];

const markup = /<\/?[a-z][^>]*>|&[a-z]+;|&#\d+;/i;
function plainCheck(text, where) {
  assert(typeof text === 'string' && text.trim(), where + ' must be non-empty text');
  assert(!markup.test(text), where + ' contains HTML tags or entities: ' + text);
}

const diseaseIds = new Set();
const prompts = new Set();
let questions = 0;
for (const disease of lecture.diseases) {
  assert(/^[a-z0-9-]+$/.test(disease.id), 'bad disease id ' + disease.id);
  assert(disease.id.startsWith('hp-'), 'disease id must start with hp-: ' + disease.id);
  assert(!diseaseIds.has(disease.id), 'duplicate disease id ' + disease.id);
  diseaseIds.add(disease.id);
  plainCheck(disease.name, disease.id + ' name');
  plainCheck(disease.blurb, disease.id + ' blurb');
  assert(disease.sections.length, disease.id + ' needs sections');
  const sectionIds = new Set();
  for (const section of disease.sections) {
    assert(/^[a-z0-9-]+$/.test(section.id), disease.id + ' bad section id ' + section.id);
    assert(!sectionIds.has(section.id), disease.id + ' duplicate section ' + section.id);
    sectionIds.add(section.id);
    assert(section.title && section.html, disease.id + '/' + section.id + ' needs title and html');
  }
  assert(disease.questions.length >= 6, disease.id + ' needs at least 6 questions');
  disease.questions.forEach((q, index) => {
    questions += 1;
    assert.equal(q.id, disease.id + '|' + index, 'question id mismatch ' + q.id);
    assert(sectionIds.has(q.section), q.id + ' links to missing section ' + q.section);
    plainCheck(q.prompt, q.id + ' prompt');
    plainCheck(q.explanation, q.id + ' explanation');
    assert.equal(q.choices.length, 4, q.id + ' needs 4 choices');
    q.choices.forEach((c, i) => plainCheck(c, q.id + ' choice ' + i));
    assert.equal(new Set(q.choices).size, 4, q.id + ' has duplicate choices');
    assert(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < 4, q.id + ' correct out of range');
    assert(!prompts.has(q.prompt), 'duplicate prompt: ' + q.prompt);
    prompts.add(q.prompt);
  });
}
for (const id of required) assert(diseaseIds.has(id), 'missing required disease ' + id);

console.log('CARDIO_DISEASES_HP: ' + lecture.diseases.length + ' diseases, ' + questions + ' questions');
for (const d of lecture.diseases) console.log('  ' + d.id + ': ' + d.questions.length);
