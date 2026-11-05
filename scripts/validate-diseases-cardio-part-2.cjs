// Validates the Cardio Part 2 Diseases tool: every data/diseases-cardio2-*.js
// file, gathered by data/diseases-cardio-part-2.js (window.CARDIO_PART2_DISEASES).
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');

const root = path.join(__dirname, '..');
const lectures = [
  // [file, global, lecture id, id prefix]
  ['arrhythmias', 'CARDIO2_DISEASES_ARRHYTHMIAS', 'arrhythmias', 'arr-'],
  ['syncope', 'CARDIO2_DISEASES_SYNCOPE', 'syncope', 'syn-'],
  ['arrhythmia-management', 'CARDIO2_DISEASES_MGMT', 'arrhythmia-management', 'mgmt-'],
  ['ie-pericardial', 'CARDIO2_DISEASES_IE_PERICARDIAL', 'ie-pericardial', 'iep-'],
  ['vascular-1', 'CARDIO2_DISEASES_VASCULAR_1', 'vascular-1', 'vas1-'],
  ['vascular-2', 'CARDIO2_DISEASES_VASCULAR_2', 'vascular-2', 'vas2-'],
  ['shock', 'CARDIO2_DISEASES_SHOCK', 'shock', 'shk-'],
  ['pharmacology', 'CARDIO2_DISEASES_PHARM', 'pharmacology', 'pharm-']
];
const present = fs.readdirSync(path.join(root, 'data')).filter(f => /^diseases-cardio2-.*\.js$/.test(f));
for (const f of present) assert(lectures.some(l => 'diseases-cardio2-' + l[0] + '.js' === f), 'unlisted file ' + f);

const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const context = vm.createContext({ window: {} });
const files = ['data/disease-helpers.js'];
for (const l of lectures) {
  const file = 'data/diseases-cardio2-' + l[0] + '.js';
  if (!fs.existsSync(path.join(root, file))) continue;
  files.push(file);
  assert(html.includes('<script src="' + file + '"></script>'), 'index.html must load ' + file);
}
files.push('data/diseases-cardio-part-2.js');
for (const file of files) vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
assert(html.indexOf('data/diseases-cardio-part-2.js') > html.lastIndexOf('data/diseases-cardio2-'), 'gather file must load after the lecture files');

const data = context.window.CARDIO_PART2_DISEASES;
const markup = /<\/?[a-z][^>]*>|&[a-z]+;|&#\d+;/i;
function plainCheck(text, where) {
  assert(typeof text === 'string' && text.trim(), where + ' must be non-empty text');
  assert(!markup.test(text), where + ' contains HTML tags or entities: ' + text);
}
const diseaseIds = new Set(), prompts = new Set();
let total = 0, diseaseCount = 0;
for (const [file, global, lectureId, prefix] of lectures) {
  const lecture = context.window[global];
  if (!fs.existsSync(path.join(root, 'data/diseases-cardio2-' + file + '.js'))) { console.log('  (not yet written: ' + file + ')'); continue; }
  assert(lecture && lecture.diseases.length, global + ' must be loaded');
  assert(data.lectures.includes(lecture), global + ' must be gathered');
  assert.equal(lecture.id, lectureId);
  let questions = 0;
  for (const disease of lecture.diseases) {
    diseaseCount += 1;
    assert(/^[a-z0-9-]+$/.test(disease.id) && disease.id.startsWith(prefix), 'bad disease id ' + disease.id);
    assert(!diseaseIds.has(disease.id), 'duplicate disease id ' + disease.id);
    diseaseIds.add(disease.id);
    plainCheck(disease.name, disease.id + ' name');
    plainCheck(disease.blurb, disease.id + ' blurb');
    const sectionIds = new Set();
    for (const section of disease.sections) {
      assert(/^[a-z0-9-]+$/.test(section.id), disease.id + ' bad section id ' + section.id);
      assert(!sectionIds.has(section.id), disease.id + ' duplicate section ' + section.id);
      sectionIds.add(section.id);
      assert(section.title && section.html, disease.id + '/' + section.id + ' needs title and html');
      assert(!/undefined/.test(section.html), disease.id + '/' + section.id + ' html contains "undefined"');
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
  total += questions;
  console.log('  ' + lecture.title + ': ' + lecture.diseases.length + ' entries, ' + questions + ' questions');
}
console.log('CARDIO_PART2_DISEASES: ' + data.lectures.length + ' lectures, ' + diseaseCount + ' entries, ' + total + ' questions');
