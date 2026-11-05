// Validates Cardio Part 2 Scores & Calculators (data/scores-cardio-part-2.js) and spot-checks
// every formula calculator against worked examples from the slides.
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');
const root = path.join(__dirname, '..');
const context = vm.createContext({ window: {} });
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script src="([^" ]+)"><\/script>/g)].map(m => m[1]);
for (const file of ['data/score-helpers.js', 'data/scores-cardio-part-2.js', 'score-calc.js']) assert(scripts.includes(file), 'index.html must load ' + file);
assert(scripts.indexOf('data/score-helpers.js') < scripts.indexOf('data/scores-cardio-part-2.js'), 'score-helpers.js must load before the scores data');
assert(scripts.indexOf('data/scores-cardio-part-2.js') < scripts.indexOf('diseases.js'), 'scores data must load before diseases.js');
for (const file of scripts.filter(s => s.startsWith('data/'))) {
  vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
}
const data = context.window.CARDIO_PART2_SCORES;
const SC = context.window.ScoreCalc;
assert(data && data.lectures.length, 'CARDIO_PART2_SCORES must be loaded');

const markup = /<\/?[a-z][^>]*>|&[a-z]+;|&#\d+;/i;
const plain = (t, where) => { assert(typeof t === 'string' && t.trim(), where + ' empty'); assert(!markup.test(t), where + ' has markup: ' + t); };
const ids = new Set(), prompts = new Set();
let entries = 0, questions = 0;
for (const lecture of data.lectures) {
  for (const e of lecture.diseases) {
    entries += 1;
    assert(/^sc-[a-z0-9-]+$/.test(e.id), 'bad id ' + e.id);
    assert(!ids.has(e.id), 'duplicate id ' + e.id);
    ids.add(e.id);
    plain(e.name, e.id + ' name');
    const secIds = Array.from(e.sections, s => s.id);
    assert.equal(secIds[0], 'calc', e.id + ' must start with its calculator');
    const calc = e.sections[0].html;
    const kind = /class="calc calc-(points|form)" data-calc="([^"]+)"/.exec(calc);
    assert(kind && kind[2] === e.id, e.id + ' calculator id must match the entry id');
    if (kind[1] === 'form') assert.equal(typeof SC.formulas[e.id], 'function', e.id + ' has no formula');
    assert(!/undefined|NaN/.test(e.sections.map(s => s.html).join('')), e.id + ' html contains undefined/NaN');
    assert(e.questions.length >= 6, e.id + ' needs at least 6 questions');
    for (const q of e.questions) {
      questions += 1;
      assert(secIds.includes(q.section), q.id + ' links to missing section ' + q.section);
      plain(q.prompt, q.id + ' prompt');
      plain(q.explanation, q.id + ' explanation');
      q.choices.forEach((c, i) => plain(c, q.id + ' choice ' + i));
      assert.equal(new Set(q.choices).size, 4, q.id + ' needs 4 distinct choices');
      assert(!prompts.has(q.prompt), 'duplicate prompt: ' + q.prompt);
      prompts.add(q.prompt);
    }
  }
}
for (const id of Object.keys(SC.formulas)) assert(ids.has(id), 'formula without an entry: ' + id);

// Worked examples: [formula id, inputs, text the result must contain]
const N = NaN;
const cases = [
  ['sc-ekg-intervals', { pr: 240, qrs: N, pp: N, delta: false }, 'First-degree AV block'],
  ['sc-ekg-intervals', { pr: 100, qrs: 130, pp: N, delta: true }, 'WPW pattern'],
  ['sc-ekg-intervals', { pr: N, qrs: 130, pp: N, delta: false }, 'Wide QRS'],
  ['sc-orthostatic', { ss: 132, sd: 80, st: 108, dt: 76 }, 'Orthostatic hypotension'],
  ['sc-orthostatic', { ss: 140, sd: 86, st: 126, dt: 80 }, 'Not orthostatic'],
  ['sc-doac', { drug: 'apixaban', valve: false, age: 82, wt: 58, scr: 1.1, gfr: N }, '2.5 mg twice daily'],
  ['sc-doac', { drug: 'apixaban', valve: false, age: 84, wt: 75, scr: 1.0, gfr: N }, '5 mg twice daily'],
  ['sc-doac', { drug: 'rivaroxaban', valve: false, age: N, wt: N, scr: N, gfr: 40 }, '15 mg once daily'],
  ['sc-doac', { drug: 'edoxaban', valve: false, age: N, wt: N, scr: N, gfr: 110 }, "can't be used"],
  ['sc-doac', { drug: 'dabigatran', valve: true, age: N, wt: N, scr: N, gfr: 80 }, 'Warfarin'],
  ['sc-flutter', { atrial: 300, ratio: '2' }, '<strong>150</strong>'],
  ['sc-duke', { m1: true, m2: false, m3: false, n1: true, n2: true, n3: true, n4: false, n5: false }, 'Definite IE'],
  ['sc-duke', { m1: false, m2: false, m3: false, n1: true, n2: true, n3: false, n4: true, n5: false }, 'Does not meet'],
  ['sc-pulsus', { exp: 118, insp: 102 }, 'Pulsus paradoxus'],
  ['sc-pulsus', { exp: 120, insp: 110 }, 'No pulsus'],
  ['sc-abi', { rb: 140, lb: 132, ra: 98, la: N }, '0.70'],
  ['sc-abi', { rb: 120, lb: 124, ra: N, la: 186 }, 'Non-compressible'],
  ['sc-aaa', { d: 4.7, sex: 'f', g: N, symp: false }, 'every 6 months'],
  ['sc-aaa', { d: 5.2, sex: 'm', g: N, symp: false }, 'every 6 months'],
  ['sc-aaa', { d: 5.1, sex: 'f', g: N, symp: false }, 'Repair'],
  ['sc-aaa', { d: 3.6, sex: 'm', g: N, symp: false }, 'every 3 years'],
  ['sc-pe-class', { sbp: 84, drop: false, arrest: false, rv: false, bio: false }, 'High risk'],
  ['sc-pe-class', { sbp: 128, drop: false, arrest: false, rv: true, bio: true }, 'Intermediate'],
  ['sc-pe-class', { sbp: 134, drop: false, arrest: false, rv: false, bio: false }, 'Low risk'],
  ['sc-vte-plan', { pop: 'aps', kind: 'recurrent' }, 'Warfarin'],
  ['sc-map', { sbp: 90, dbp: 45 }, '<strong>60</strong>'],
  ['sc-urine', { wt: 80, ml: 120, hr: 4 }, '0.38'],
  ['sc-osm', { na: 140, glu: 90, bun: 14, meas: 312 }, 'Elevated osmolal gap'],
  ['sc-three-one', { loss: 600 }, '<strong>1800</strong>'],
  ['sc-dopamine', { dose: 15, wt: N }, 'α1'],
  ['sc-shock-type', { jvp: 'high', skin: 'cold', lungs: 'clear' }, 'Obstructive'],
  ['sc-shock-type', { jvp: 'low', skin: 'warm', lungs: 'clear' }, 'Distributive'],
  ['sc-weight-doses', { wt: 50 }, '0.5 mg over 10 min'],
  ['sc-qt-drug', { drug: 'sotalol', qtc: 462, crcl: 70, lqts: false }, 'Sotalol contraindicated'],
  ['sc-qt-drug', { drug: 'dofetilide', qtc: 420, crcl: 65, lqts: false }, 'Dofetilide allowed'],
  ['sc-digoxin', { level: N, k: 6.2, arr: false, organ: false }, 'Give DigiFab']
];
for (const [id, v, expect] of cases) {
  const result = SC.formulas[id](v, SC.fmt);
  assert(result.includes(expect), id + ' with ' + JSON.stringify(v) + ' should include "' + expect + '" but gave: ' + result.replace(/<[^>]+>/g, ' '));
}
// Every formula returns "" (not an error) before inputs are filled.
for (const id of Object.keys(SC.formulas)) assert.equal(typeof SC.formulas[id]({}, SC.fmt), 'string', id + ' must handle empty inputs');

console.log('CARDIO_PART2_SCORES: ' + data.lectures.length + ' lectures, ' + entries + ' scores, ' + questions + ' questions, ' + cases.length + ' formula checks');
