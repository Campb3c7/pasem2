const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');
const root = path.join(__dirname, '..');
const context = vm.createContext({ window: {} });
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
for (const match of html.matchAll(/<script src="(data\/[^" ]+)"><\/script>/g)) {
  vm.runInContext(fs.readFileSync(path.join(root, match[1]), 'utf8'), context, { filename: match[1] });
}
const course = context.window.SEMESTER.courses.find(course => course.id === 'endocrine');
assert(course, 'Endocrine must be loaded in the course catalog');
assert.equal(course.lectures.length, 1, 'Only Anatomy is authorized');
const sections = course.lectures[0].objectives;
assert.equal(sections.length, 6);
const ids = new Set();
let cards = 0, test = 0, apply = 0;
for (const section of sections) {
  assert(!ids.has(section.id), 'Section IDs must be unique');
  ids.add(section.id);
  cards += section.cards.length;
  test += section.test.length;
  apply += section.apply.length;
  assert(/Objectives? /.test(section.description));
  for (const question of [...section.test, ...section.apply]) {
    assert.equal(question.choices.length, 4);
    assert.equal(new Set(question.choices).size, 4);
    assert(question.correct >= 0 && question.correct < 4);
    assert(question.card >= 0 && question.card < section.cards.length);
    assert(question.explanation);
  }
}
const glands = ['hypothalamus', 'pineal', 'pituitary', 'adrenals', 'pancreas', 'thyroid', 'parathyroids', 'thymus', 'ovaries', 'testes'];
const expected = glands.flatMap(gland => ['o1.' + gland, 'o2.' + gland]).concat([
  'o3.arteries', 'o3.veins', 'o4.structure', 'o4.chiasm', 'o4.sinus',
  'o5.location', 'o5.nerves', 'o5.artery', 'o5.clinical',
  'o6.superior', 'o6.middle', 'o6.inferior', 'o6.veins', 'o6.pathways', 'o6.medulla',
  'o7.head', 'o7.neck', 'o7.body', 'o7.tail', 'o7.uncinate', 'o7.main-duct', 'o7.ampulla', 'o7.accessory-duct', 'o7.oddi',
  'o8.body-tail', 'o8.head-neck', 'o8.veins', 'o8.nerves',
  'o9.arteries', 'o9.veins', 'o9.variant', 'o9.supply', 'o9.surgical',
  'o10.arteries', 'o10.veins', 'o10.nerves'
]);
const allCards = sections.flatMap(section => section.cards);
const allQuestions = sections.flatMap(section => [...section.test, ...section.apply]);
for (const tag of expected) {
  assert(allCards.some(card => (card.coverage || []).includes(tag)), `Missing teaching: ${tag}`);
  assert(allQuestions.some(question => (question.coverage || []).includes(tag)), `Missing retrieval practice: ${tag}`);
}
for (const gland of glands) {
  for (const objective of ['o1.', 'o2.']) {
    const tag = objective + gland;
    const dedicated = sections[0].cards.filter(card => (card.coverage || []).includes(tag));
    assert.equal(dedicated.length, 1, `Require a dedicated card for ${tag}`);
    assert(sections[0].test.some(question => (question.coverage || []).includes(tag)), `Require a direct question for ${tag}`);
  }
}
console.log(`All ${expected.length} objective components have teaching and retrieval practice; all ten glands have dedicated location and function cards/questions.`);
console.log(`Endocrine anatomy: ${sections.length} sections, ${cards} cards, ${test} Test questions, ${apply} Apply questions. Catalog and Recall links valid.`);
