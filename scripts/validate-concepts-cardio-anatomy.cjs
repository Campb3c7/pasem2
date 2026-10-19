// Validates the Cardio Part 1 Concepts data for the cardio-anatomy lecture (window.CARDIO_CONCEPTS_ANATOMY).
// Run: node scripts/validate-concepts-cardio-anatomy.cjs
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');
const root = path.join(__dirname, '..');
const context = vm.createContext({ window: {} });
for (const file of ['data/disease-helpers.js', 'data/concepts-cardio-anatomy.js']) {
  vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
}
const lecture = context.window.CARDIO_CONCEPTS_ANATOMY;
assert(lecture && Array.isArray(lecture.diseases) && lecture.diseases.length, 'CARDIO_CONCEPTS_ANATOMY must be loaded');
assert.equal(lecture.id, 'cardio-anatomy', 'lecture id');
const SECTIONS = ['idea', 'chain', 'bedside', 'traps'];
const markup = /<\/?[a-z][^>]*>|&[a-z0-9#]+;/i;
const noMarkup = (text, where) => assert(!markup.test(text), where + ' contains HTML tags or entities: ' + text);
const ids = new Set(), prompts = new Set();
let questions = 0;
for (const concept of lecture.diseases) {
  assert(/^[a-z0-9-]+$/.test(concept.id), 'bad concept id ' + concept.id);
  assert(!ids.has(concept.id), 'duplicate concept id ' + concept.id);
  ids.add(concept.id);
  assert(concept.name && concept.blurb, concept.id + ' needs name and blurb');
  noMarkup(concept.name, concept.id + ' name');
  noMarkup(concept.blurb, concept.id + ' blurb');
  assert.equal(concept.sections.map(s => s.id).join(','), SECTIONS.join(','), concept.id + ' must have sections ' + SECTIONS.join(', '));
  for (const section of concept.sections) assert(section.title && section.html, concept.id + ' section ' + section.id + ' is empty');
  assert(/<ol class="concept-chain">/.test(concept.sections[1].html), concept.id + ' chain section needs <ol class="concept-chain">');
  assert(concept.questions.length >= 6, concept.id + ' needs at least 6 questions');
  concept.questions.forEach((q, index) => {
    questions += 1;
    assert.equal(q.id, concept.id + '|' + index, 'question id');
    assert(SECTIONS.includes(q.section), q.id + ' links to missing section ' + q.section);
    assert.equal(q.choices.length, 4, q.id + ' needs 4 choices');
    assert.equal(new Set(q.choices).size, 4, q.id + ' has duplicate choices');
    assert(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < 4, q.id + ' correct out of range');
    assert(q.prompt && q.explanation, q.id + ' needs prompt and explanation');
    noMarkup(q.prompt, q.id + ' prompt');
    noMarkup(q.explanation, q.id + ' explanation');
    q.choices.forEach((c, i) => { assert(c, q.id + ' empty choice'); noMarkup(c, q.id + ' choice ' + i); });
    assert(!prompts.has(q.prompt), q.id + ' duplicate prompt');
    prompts.add(q.prompt);
  });
}
console.log('CARDIO_CONCEPTS_ANATOMY (cardio-anatomy): ' + lecture.diseases.length + ' concepts, ' + questions + ' questions OK');
