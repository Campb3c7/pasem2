// Validates Cardio Part 2 Rhythm strips (data/rhythm-strips-cardio-part-2.js + data/rhythm-synth.js):
// data shape, look-alike and step keys, and that every rhythm draws a clean strip whose measured
// rate stays in its expected range across many random seeds.
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');
const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script src="([^" ]+)"><\/script>/g)].map(m => m[1]);
for (const file of ['data/rhythm-synth.js', 'data/rhythm-strips-cardio-part-2.js', 'rhythm-strips.js']) assert(scripts.includes(file), 'index.html must load ' + file);
assert(scripts.indexOf('data/rhythm-synth.js') < scripts.indexOf('rhythm-strips.js'), 'synth must load before the engine');
assert(scripts.indexOf('data/rhythm-strips-cardio-part-2.js') < scripts.indexOf('rhythm-strips.js'), 'data must load before the engine');
for (const id of ['cardio2-rhythms-launch', 'cardio2-rhythms-view', 'cardio2-rhythms-back', 'cardio2-rhythms-content']) assert(html.includes('id="' + id + '"'), 'index.html needs #' + id);
assert(fs.readFileSync(path.join(root, 'keyboard.js'), 'utf8').includes('"rhythm-next"'), 'keyboard.js must know rhythm-next');

const context = vm.createContext({ window: {} });
for (const file of ['data/rhythm-synth.js', 'data/rhythm-strips-cardio-part-2.js']) vm.runInContext(fs.readFileSync(path.join(root, file), 'utf8'), context, { filename: file });
const synth = context.window.RhythmSynth;
const data = context.window.CARDIO2_RHYTHMS;
assert(synth && data, 'RhythmSynth and CARDIO2_RHYTHMS must load');

const markup = /<\/?[a-z][^>]*>|&[a-z]+;|&#\d+;/i;
const plain = (t, where) => { assert(typeof t === 'string' && t.trim(), where + ' empty'); assert(!markup.test(t), where + ' has markup: ' + t); };
const all = [], ids = new Set(), names = new Set();
for (const group of data.groups) {
  plain(group.title, group.id + ' title');
  plain(group.blurb, group.id + ' blurb');
  for (const r of group.rhythms) {
    assert(/^rs-[a-z0-9-]+$/.test(r.id), 'bad id ' + r.id);
    assert(!ids.has(r.id), 'duplicate id ' + r.id);
    ids.add(r.id);
    assert(!names.has(r.name), 'duplicate name ' + r.name);
    names.add(r.name);
    plain(r.name, r.id + ' name');
    plain(r.clue, r.id + ' clue');
    plain(r.mgmt, r.id + ' mgmt');
    for (const k of ['rate', 'rhythm', 'p', 'pr', 'qrs']) plain(r.look[k], r.id + ' look.' + k);
    assert(synth.generators[r.gen.gen], r.id + ' unknown generator ' + r.gen.gen);
    all.push(r);
  }
}
const steppable = all.filter(r => r.steps);
for (const r of all) {
  assert(r.confuse.length >= 3, r.id + ' needs 3+ look-alikes');
  for (const c of r.confuse) { assert(ids.has(c), r.id + ' confuse has unknown ' + c); assert(c !== r.id, r.id + ' confuses itself'); }
  if (r.steps) {
    for (const k of ['reg', 'p', 'pr', 'qrs']) assert(data.steps[k].options[r.steps[k]], r.id + ' bad step ' + k + '=' + r.steps[k]);
    assert(Array.isArray(r.rate), r.id + ' needs a rate range');
  }
  for (const k of Object.keys(data.steps)) assert(Object.keys(data.steps[k].options).length >= 4, k + ' needs 4+ options');
}
// Two steppable rhythms with identical answers can't be told apart in step mode, except by rate.
const seen = {};
for (const r of steppable) {
  const key = ['reg', 'p', 'pr', 'qrs'].map(k => r.steps[k]).join('/');
  (seen[key] = seen[key] || []).push(r);
}
for (const list of Object.values(seen)) {
  for (let i = 0; i < list.length; i++) for (let j = i + 1; j < list.length; j++) {
    const a = list[i].rate, b = list[j].rate;
    assert(a[1] < b[0] || b[1] < a[0], list[i].id + ' and ' + list[j].id + ' have the same step answers and overlapping rates');
  }
}

// Draw each rhythm with many seeds.
const SEEDS = 60;
let strips = 0;
for (const r of all) {
  let min = Infinity, max = -Infinity;
  for (let seed = 1; seed <= SEEDS; seed++) {
    const s = synth.make(r.gen, seed * 104729 + r.id.length);
    strips += 1;
    assert(!/NaN|undefined|Infinity/.test(s.svg), r.id + ' seed ' + seed + ' draws a bad SVG');
    assert(s.svg.startsWith('<svg class="rs-strip"'), r.id + ' svg shape');
    if (r.rate) {
      assert(s.rate != null && !s.chaotic, r.id + ' should have a measurable rate');
      assert(s.count >= 2, r.id + ' needs at least 2 QRS on the strip');
      min = Math.min(min, s.rate); max = Math.max(max, s.rate);
      assert(s.rate >= r.rate[0] && s.rate <= r.rate[1], r.id + ' seed ' + seed + ' rate ' + s.rate + ' outside ' + r.rate);
    } else {
      assert(s.chaotic, r.id + ' (no rate range) should be an arrest rhythm');
    }
  }
}
// Same seed, same strip; different seeds, different strips.
const nsr = all.find(r => r.id === 'rs-nsr');
assert.equal(synth.make(nsr.gen, 5).svg, synth.make(nsr.gen, 5).svg, 'same seed must give the same strip');
assert.notEqual(synth.make(nsr.gen, 5).svg, synth.make(nsr.gen, 6).svg, 'different seeds must differ');
// Rhythm-specific shape checks.
const af = synth.make({ gen: 'af', rate: [80, 80] }, 3);
const gaps = af.qrs.slice(1).map((t, i) => t - af.qrs[i]);
assert(Math.max(...gaps) - Math.min(...gaps) > 0.12, 'AF should be irregular');
const fl = synth.make({ gen: 'flutter', ratio: 4, atrialRate: [300, 300] }, 3);
assert(Math.abs(fl.atrial.length / fl.count - 4) < 1, 'flutter 4:1 should have about 4 flutter waves per QRS');
const chb = synth.make({ gen: 'chb', atrialRate: [80, 80], rate: [35, 35] }, 3);
assert(chb.atrial.length > chb.count, 'complete block needs more P waves than QRS');

console.log('CARDIO2_RHYTHMS: ' + data.groups.length + ' groups, ' + all.length + ' rhythms (' + steppable.length + ' in step mode), ' + strips + ' strips drawn');
