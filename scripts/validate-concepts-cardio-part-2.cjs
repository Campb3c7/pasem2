// Validates the Cardio Part 2 Concepts tool: every data/concepts-cardio2-*.js
// file, gathered by data/concepts-cardio-part-2.js (window.CARDIO_PART2_CONCEPTS).
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');

const root = path.join(__dirname, '..');
const lectures = [
  // [file, global, lecture id, id prefix]
  ['arrhythmias', 'CARDIO2_CONCEPTS_ARRHYTHMIAS', 'arrhythmias', 'arrc-'],
  ['syncope', 'CARDIO2_CONCEPTS_SYNCOPE', 'syncope', 'sync-'],
  ['arrhythmia-management', 'CARDIO2_CONCEPTS_MGMT', 'arrhythmia-management', 'mgmtc-'],
  ['ie-pericardial', 'CARDIO2_CONCEPTS_IE_PERICARDIAL', 'ie-pericardial', 'iepc-'],
  ['vascular-1', 'CARDIO2_CONCEPTS_VASCULAR_1', 'vascular-1', 'vas1c-'],
  ['vascular-2', 'CARDIO2_CONCEPTS_VASCULAR_2', 'vascular-2', 'vas2c-'],
  ['vascular-surgery', 'CARDIO2_CONCEPTS_VASCULAR_SURGERY', 'vascular-surgery', 'vsurgc-'],
  ['shock', 'CARDIO2_CONCEPTS_SHOCK', 'shock', 'shkc-'],
  ['pharmacology', 'CARDIO2_CONCEPTS_PHARM', 'pharmacology', 'pharmc-']
];
const present = fs.readdirSync(path.join(root, 'data')).filter(f => /^concepts-cardio2-.*\.js$/.test(f));
for (const f of present) assert(lectures.some(l => 'concepts-cardio2-' + l[0] + '.js' === f), 'unlisted file ' + f);

const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const context = vm.createContext({ window: {} });
const files = ['data/disease-helpers.js'];
for (const l of lectures) {
  const file = 'data/concepts-cardio2-' + l[0] + '.js';
  if (!fs.existsSync(path.join(root, file))) continue;
  files.push(file);
  assert(html.includes('<script src="' + file + '"></script>'), 'index.html must load ' + file);
}
files.push('data/concepts-cardio-part-2.js');
for (const file of files) vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
assert(html.indexOf('data/concepts-cardio-part-2.js') > html.lastIndexOf('data/concepts-cardio2-'), 'gather file must load after the lecture files');

const data = context.window.CARDIO_PART2_CONCEPTS;
const sectionOrder = ['idea', 'chain', 'bedside', 'traps'];
const markup = /<\/?[a-z][^>]*>|&[a-z]+;|&#\d+;/i;
function plainCheck(text, where) {
  assert(typeof text === 'string' && text.trim(), where + ' must be non-empty text');
  assert(!markup.test(text), where + ' contains HTML tags or entities: ' + text);
}
const ids = new Set(), prompts = new Set();
let total = 0, count = 0;
for (const [file, global, lectureId, prefix] of lectures) {
  const lecture = context.window[global];
  if (!fs.existsSync(path.join(root, 'data/concepts-cardio2-' + file + '.js'))) { console.log('  (not yet written: ' + file + ')'); continue; }
  assert(lecture && lecture.diseases.length, global + ' must be loaded');
  assert(data.lectures.includes(lecture), global + ' must be gathered');
  assert.equal(lecture.id, lectureId);
  let questions = 0;
  for (const c of lecture.diseases) {
    count += 1;
    assert(/^[a-z0-9-]+$/.test(c.id) && c.id.startsWith(prefix), 'bad concept id ' + c.id);
    assert(!ids.has(c.id), 'duplicate concept id ' + c.id);
    ids.add(c.id);
    plainCheck(c.name, c.id + ' name');
    plainCheck(c.blurb, c.id + ' blurb');
    assert.deepEqual(Array.from(c.sections, s => s.id), sectionOrder, c.id + ' sections must be ' + sectionOrder.join(', '));
    for (const s of c.sections) {
      assert(s.title && s.html && s.html.trim(), c.id + '/' + s.id + ' empty');
      assert(!/undefined/.test(s.html), c.id + '/' + s.id + ' html contains "undefined"');
    }
    assert(c.sections[1].html.includes('<ol class="concept-chain">'), c.id + ' chain section lacks concept-chain list');
    assert(c.questions.length >= 6, c.id + ' needs at least 6 questions');
    c.questions.forEach((q, index) => {
      questions += 1;
      assert.equal(q.id, c.id + '|' + index, 'question id mismatch ' + q.id);
      assert(sectionOrder.includes(q.section), q.id + ' bad section ' + q.section);
      plainCheck(q.prompt, q.id + ' prompt');
      plainCheck(q.explanation, q.id + ' explanation');
      assert.equal(q.choices.length, 4, q.id + ' needs 4 choices');
      q.choices.forEach((ch, i) => plainCheck(ch, q.id + ' choice ' + i));
      assert.equal(new Set(q.choices).size, 4, q.id + ' has duplicate choices');
      assert(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < 4, q.id + ' correct out of range');
      assert(!prompts.has(q.prompt), 'duplicate prompt: ' + q.prompt);
      prompts.add(q.prompt);
    });
  }
  total += questions;
  console.log('  ' + lecture.title + ': ' + lecture.diseases.length + ' concepts, ' + questions + ' questions');
}
console.log('CARDIO_PART2_CONCEPTS: ' + data.lectures.length + ' lectures, ' + count + ' concepts, ' + total + ' questions');
