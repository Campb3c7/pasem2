// Validates data/hypertension-total.js (Hypertension (Total): Parts I–III plus Hypertensive Crisis).
// Checks structure and links, that every source objective is included, and that no Test/Apply prompt
// is copied from the four source lectures.
const fs = require('node:fs'), vm = require('node:vm'), assert = require('node:assert/strict'), path = require('node:path');
const root = path.join(__dirname, '..');
const context = vm.createContext({ window: {} });
for (const file of ['hypertension-part-1', 'hypertension-part-2', 'hypertension-part-3', 'hypertensive-crisis', 'hypertension-total']) {
  vm.runInContext(fs.readFileSync(path.join(root, 'data', file + '.js'), 'utf8'), context, { filename: file });
}
const w = context.window;
const sources = [w.HYPERTENSION_PART1_OBJECTIVES, w.HYPERTENSION_PART2_OBJECTIVES, w.HYPERTENSION_PART3_OBJECTIVES, w.HYPERTENSIVE_CRISIS_OBJECTIVES];
const sections = w.HYPERTENSION_TOTAL_OBJECTIVES;
assert(Array.isArray(sections) && sections.length, 'HYPERTENSION_TOTAL_OBJECTIVES missing');

const norm = s => String(s).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const sourcePrompts = new Set();
const sourceCardTitles = new Set();
sources.forEach(list => list.forEach(o => {
  o.test.concat(o.apply).forEach(q => sourcePrompts.add(norm(q.prompt)));
  o.cards.forEach(c => sourceCardTitles.add(c.title));
}));

// Every source objective must be covered. Part II 11/12 are merged into Crisis 1/2's cards.
const merged = new Set(['11-remodeling', '12-cns-renal-autoregulation']);
const totalCardTitles = new Set(sections.flatMap(s => s.cards.map(c => c.title)));
sources.forEach((list, li) => list.forEach(o => {
  if (li === 1 && merged.has(o.id)) return;
  o.cards.forEach(c => assert(totalCardTitles.has(c.title), `Missing Learn card from ${o.id}: ${c.title}`));
}));

const plain = x => { assert(typeof x === 'string' && x.trim(), 'Empty text'); assert(!/[<>]|&[a-zA-Z#0-9]+;/.test(x), `Escaped text contains markup/entity: ${x}`); };
const ids = /^[a-z0-9-]+$/, seen = new Set(), prompts = new Set();
let cards = 0, test = 0, apply = 0;
sections.forEach(s => {
  assert(ids.test(s.id), s.id); assert(!seen.has(s.id), `Duplicate id ${s.id}`); seen.add(s.id);
  plain(s.title); plain(s.description);
  assert(s.cards.length && s.test.length && s.apply.length, `Empty section ${s.id}`);
  s.cards.forEach((c, ci) => {
    assert(sourceCardTitles.has(c.title), `Card not from a source lecture: ${c.title}`);
    assert(c.html && c.html.length > 40, `Thin card ${s.id} ${ci}`);
    assert(s.test.some(q => q.card === ci), `No Test question for ${s.id} card ${ci}`);
    assert(s.apply.some(q => q.card === ci), `No Apply case for ${s.id} card ${ci}`);
  });
  for (const mode of ['test', 'apply']) for (const q of s[mode]) {
    const key = norm(q.prompt);
    assert(!prompts.has(key), `Duplicate prompt: ${q.prompt}`); prompts.add(key);
    assert(!sourcePrompts.has(key), `Prompt copied from a source lecture: ${q.prompt}`);
    assert(Array.isArray(q.choices) && q.choices.length === 4, q.prompt);
    assert.equal(new Set(q.choices).size, 4, `Duplicate choices: ${q.prompt}`);
    assert(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < 4, q.prompt);
    assert(Number.isInteger(q.card) && q.card >= 0 && q.card < s.cards.length, `Bad card link: ${q.prompt}`);
    [q.prompt, q.explanation, ...q.choices].forEach(plain);
  }
  cards += s.cards.length; test += s.test.length; apply += s.apply.length;
});
console.log(`Hypertension (Total): ${sections.length} sections; ${cards} Learn cards, ${test} new Test questions, ${apply} new Apply cases. All source objectives covered; no prompts copied.`);
