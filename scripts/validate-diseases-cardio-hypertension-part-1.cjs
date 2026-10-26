// Validates data/diseases-cardio-hypertension-part-1.js (Cardio Part 1 Diseases: Hypertension Part I).
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');
const root = path.join(__dirname, '..');
const context = vm.createContext({ window: {} });
for (const file of ['data/disease-helpers.js', 'data/diseases-cardio-hypertension-part-1.js']) {
  vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
}
const lecture = context.window.CARDIO_DISEASES_HYPERTENSION_PART1;
assert(lecture && Array.isArray(lecture.diseases) && lecture.diseases.length, 'CARDIO_DISEASES_HYPERTENSION_PART1 must be loaded');
assert.equal(lecture.id, 'hypertension-part-1');
assert.equal(lecture.title, 'Hypertension Part I');
const required = ['htn-primary', 'htn-secondary', 'htn-renovascular', 'htn-coarctation', 'htn-pheochromocytoma', 'htn-primary-aldosteronism', 'htn-osa'];
const tag = /<\/?[a-z][^>]*>/i;
const entity = /&[a-z0-9#]+;/i;
function plainText(value, where) {
  assert(typeof value === 'string' && value.trim(), where + ' must be non-empty text');
  assert(!tag.test(value), where + ' contains an HTML tag: ' + value);
  assert(!entity.test(value), where + ' contains an HTML entity: ' + value);
}
const ids = new Set();
const prompts = new Set();
let questions = 0;
for (const disease of lecture.diseases) {
  assert(/^[a-z0-9-]+$/.test(disease.id), 'bad disease id ' + disease.id);
  assert(disease.id.startsWith('htn-'), 'disease id must start with htn-: ' + disease.id);
  assert(!ids.has(disease.id), 'duplicate disease id ' + disease.id);
  ids.add(disease.id);
  plainText(disease.name, disease.id + ' name');
  plainText(disease.blurb, disease.id + ' blurb');
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
    assert.equal(q.id, disease.id + '|' + index, 'question id mismatch ' + q.id);
    assert(sectionIds.has(q.section), q.id + ' links to missing section ' + q.section);
    plainText(q.prompt, q.id + ' prompt');
    assert(!prompts.has(q.prompt), 'duplicate prompt: ' + q.prompt);
    prompts.add(q.prompt);
    assert.equal(q.choices.length, 4, q.id + ' needs 4 choices');
    assert.equal(new Set(q.choices).size, 4, q.id + ' has duplicate choices');
    q.choices.forEach((c, i) => plainText(c, q.id + ' choice ' + i));
    assert(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < 4, q.id + ' correct out of range');
    plainText(q.explanation, q.id + ' explanation');
    questions += 1;
  });
}
for (const id of required) assert(ids.has(id), 'missing required disease ' + id);
console.log('CARDIO_DISEASES_HYPERTENSION_PART1: ' + lecture.diseases.length + ' diseases, ' + questions + ' questions — ' + lecture.diseases.map(d => d.id + ' (' + d.questions.length + ')').join(', '));
