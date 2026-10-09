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
const endocrine = context.window.SEMESTER.courses.find(course => course.id === 'endocrine');
assert.deepEqual(Array.from(endocrine.lectures, lecture => lecture.id), ['endocrinology-anatomy', 'hypoglycemia', 'diabetes-mellitus', 'diabetic-pharmacology']);
const sections = endocrine.lectures.find(lecture => lecture.id === 'hypoglycemia').objectives;
const expectedIds = ['01-glucose-hormones', '02-normal-glucose', '03-clinical-presentation', '04-symptom-types', '05-etiology-history', '06-dumping-syndrome', '07-whipples-triad', '08-alcohol-starvation', '09-treatment'];
assert.deepEqual(Array.from(sections, section => section.id), expectedIds, 'Preserve the nine objectives in order');
const expectedCoverage = [
  ['insulin', 'glucagon', 'epinephrine', 'cortisol', 'growth-hormone'],
  ['preprandial', 'postprandial'],
  ['warning-symptoms', 'brain-symptoms', 'severe-symptoms'],
  ['neurogenic-mechanism', 'neuroglycopenic-mechanism', ...Array.from({length:8}, (_,i) => 'neurogenic-'+i), ...Array.from({length:8}, (_,i) => 'neuroglycopenic-'+i)],
  ['insulin-history', 'sulfonylureas', 'meglitinides', 'hepatic-renal-failure', 'shock-sepsis', 'malnutrition', 'alcohol-history', 'hypopituitarism', 'addisons', 'myxedema-coma', 'hyperinsulinism', 'igf2-tumor'],
  ['gi-surgery', 'osmotic-load', 'symptom-overlap', 'normal-glucose-mimic', 'early-late-distinction'],
  ['triad-symptoms', 'triad-simultaneous-glucose', 'triad-improvement', 'triad-missing-criterion'],
  ['starvation-glycogen', 'alcohol-gluconeogenesis', 'combined-risk'],
  ['oral-treatment', '15g', '15min', 'repeat-below70', 'meal-snack', 'recurrence', 'nonoral-rescue', 'iv-dextrose', 'glucagon-routes', 'medic-alert', 'kit-training']
];
let cards = 0, test = 0, apply = 0;
sections.forEach((section, i) => {
  assert(section.title.startsWith((i+1)+'. '));
  const learned = new Set(section.cards.flatMap(card => card.coverage));
  for (const tag of expectedCoverage[i]) assert(learned.has(tag), `Missing teaching in objective ${i+1}: ${tag}`);
  for (const mode of ['test', 'apply']) {
    assert(section[mode].length, `Objective ${i+1} needs ${mode} practice`);
    section[mode].forEach(question => {
      assert.equal(question.choices.length, 4);
      assert.equal(new Set(question.choices).size, 4);
      assert(Number.isInteger(question.correct) && question.correct >= 0 && question.correct < 4);
      assert(Number.isInteger(question.card) && question.card >= 0 && question.card < section.cards.length);
      assert(question.explanation);
    });
  }
  section.cards.forEach((card, cardIndex) => {
    assert(card.html && card.title);
    assert(section.test.some(q => q.card === cardIndex), `Untested Learn card: ${card.title}`);
    assert(section.apply.some(q => q.card === cardIndex), `No application for Learn card: ${card.title}`);
  });
  cards += section.cards.length; test += section.test.length; apply += section.apply.length;
});
assert.equal(sections[0].cards.length, 5, 'Teach each named hormone separately');
assert.equal(sections[3].test.length, 16, 'Classify every lecture-listed symptom group');
assert(sections[5].cards[1].html.includes('niddk.nih.gov'), 'Label the early/late dumping clarification');
console.log(`Hypoglycemia: 9 objectives in order; ${cards} cards, ${test} Test questions, ${apply} Apply cases. All ${expectedCoverage.flat().length} planned components covered; every card has Test/Apply links.`);
