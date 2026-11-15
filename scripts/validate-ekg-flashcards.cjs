// Validates the EKG Flashcards (data/ekg-flashcards.js + ekg-flashcards.js helpers): 16 sets that
// match the 16 objectives, card shapes and stable ids, unique terms and definitions inside each set
// (so every question has exactly one right answer both ways), and that every generated question has
// 4 distinct choices with the right one among them.
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');
const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script src="([^" ]+)"><\/script>/g)].map(m => m[1]);
for (const f of ['data/ekg-flashcards.js', 'ekg-flashcards.js']) assert(scripts.includes(f), 'index.html must load ' + f);
assert(scripts.indexOf('data/ekg-flashcards.js') < scripts.indexOf('ekg-flashcards.js'), 'data must load before the engine');
for (const id of ['ekg-flash-launch', 'ekg-flash-view', 'ekg-flash-back', 'ekg-flash-content']) assert(html.includes('id="' + id + '"'), 'index.html needs #' + id);
assert(fs.readFileSync(path.join(root, 'keyboard.js'), 'utf8').includes('"fc-next"'), 'keyboard.js must know fc-next');

const context = vm.createContext({ window: {} });
for (const f of ['data/ekg-flashcards.js', 'ekg-flashcards.js']) vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), context, { filename: f });
const { EKG_FLASHCARDS: data, EkgFlashHelpers: H } = context.window;
assert(data && H, 'data and helpers must load');

const objectives = fs.readFileSync(path.join(root, 'source-material/ekg/objectives.txt'), 'utf8')
  .split('\n').map(l => l.trim()).filter(l => l && !/^EKG Objectives/.test(l));
assert.equal(objectives.length, 16, 'expected 16 objectives in source-material/ekg/objectives.txt');
assert.equal(data.sets.length, 16, 'one set per objective');

const setIds = new Set(), cardIds = new Set();
let cards = 0, questions = 0;
let seed = 7;
const rand = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
data.sets.forEach((set, i) => {
  assert.equal(set.id, 'fc-' + (i + 1), 'set ids are fc-1..fc-16 in objective order');
  assert(!setIds.has(set.id)); setIds.add(set.id);
  assert(set.title && set.objective, set.id + ' needs a title and objective');
  assert.equal(set.objective.replace(/’/g, "'"), objectives[i].replace(/’/g, "'"), set.id + ' objective text must match objectives.txt');
  assert(set.cards.length >= 10, set.id + ' needs at least 10 cards');
  const terms = new Set(), defs = new Set();
  set.cards.forEach((c, j) => {
    assert.equal(c.id, set.id + '|' + j);
    assert(!cardIds.has(c.id)); cardIds.add(c.id);
    for (const k of ['tag', 'term', 'def']) assert(typeof c[k] === 'string' && c[k].trim(), c.id + ' needs ' + k);
    assert(!terms.has(c.term.toLowerCase()), c.id + ' duplicate term in set: ' + c.term);
    assert(!defs.has(c.def.toLowerCase()), c.id + ' duplicate definition in set: ' + c.def);
    terms.add(c.term.toLowerCase()); defs.add(c.def.toLowerCase());
    assert(!/[<>]/.test(c.term + c.def), c.id + ' must be plain text');
    cards += 1;
    for (const side of ['term', 'def']) for (let n = 0; n < 5; n++) {
      const q = H.question(c, set, side, rand);
      assert.equal(q.labels.length, 4, c.id + ' needs 4 choices');
      assert.equal(new Set(q.labels).size, 4, c.id + ' choices must be distinct');
      assert.equal(q.labels[q.correct], c[side], c.id + ' correct label');
      questions += 1;
    }
  });
});
// Set 8 lists every rhythm in its objective: check each rhythm is a term there.
const s8 = data.sets[7].cards.map(c => c.term.toLowerCase());
for (const r of ['normal sinus rhythm', 'sinus bradycardia', 'sinus tachycardia', 'sinus arrhythmia', 'sinus arrest', 'atrial tachycardia', 'wandering atrial pacemaker', 'multifocal atrial tachycardia', 'atrial flutter', 'atrial fibrillation', 'junctional bradycardia', 'junctional (escape) rhythm', 'accelerated junctional rhythm', 'junctional tachycardia', 'idioventricular rhythm', 'accelerated idioventricular rhythm', 'ventricular tachycardia', 'ventricular fibrillation', 'asystole', '1st degree av block', '2nd degree av block type i', '2nd degree av block type ii', '3rd degree av block'])
  assert(s8.some(t => t.startsWith(r)), 'set 8 is missing ' + r);
console.log('EKG flashcards OK: ' + data.sets.length + ' sets, ' + cards + ' cards, ' + questions + ' generated questions checked');
