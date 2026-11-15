// Validates the EKG Rhythm ladder (data/ekg-ladder.js + ekg-ladder.js helpers): rung ids and shapes,
// rhythm references, and that fresh strips actually show what each answer claims (rate band,
// regularity, width, dropped beats, early beats, pauses) across many random seeds.
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');
const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script src="([^" ]+)"><\/script>/g)].map(m => m[1]);
for (const f of ['data/rhythm-synth.js', 'data/rhythm-strips-ekg.js', 'data/ekg-ladder.js', 'ekg-ladder.js']) assert(scripts.includes(f), 'index.html must load ' + f);
assert(scripts.indexOf('data/ekg-ladder.js') < scripts.indexOf('ekg-ladder.js'), 'data must load before the engine');
for (const id of ['ekg-ladder-launch', 'ekg-ladder-view', 'ekg-ladder-back', 'ekg-ladder-content']) assert(html.includes('id="' + id + '"'), 'index.html needs #' + id);
assert(fs.readFileSync(path.join(root, 'keyboard.js'), 'utf8').includes('"ld-next"'), 'keyboard.js must know ld-next');

const context = vm.createContext({ window: {} });
for (const f of ['data/rhythm-synth.js', 'data/rhythm-strips-ekg.js', 'data/ekg-ladder.js', 'ekg-ladder.js']) vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), context, { filename: f });
const { RhythmSynth: synth, EKG_RHYTHMS: rhythms, EKG_LADDER: data, EkgLadderHelpers: H } = context.window;
assert(synth && rhythms && data && H, 'everything must load');

const byId = {};
rhythms.groups.forEach(g => g.rhythms.forEach(r => { byId[r.id] = r; }));
const KINDS = ['tapQrs', 'tapP', 'tapEarly', 'tapDrop', 'tapGap', 'pick', 'name', 'which', 'family'];
const MARKS = ['qrs', 'p', 'rr', 'wide', 'early', 'pr'];
const ids = new Set();
let rungCount = 0, checks = 0;
const SEEDS = 60;

function make(r, kind, seed) {
  let m = synth.make(r.gen, seed);
  for (let i = 0; i < 25 && !H.usable(m, kind, r); i++) m = synth.make(r.gen, seed * 31 + i + 1);
  assert(H.usable(m, kind, r), r.id + ' never gives a usable strip for ' + kind);
  return m;
}
const median = a => { const s = a.slice().sort((x, y) => x - y); return s[Math.floor(s.length / 2)]; };
const rr = q => q.slice(1).map((t, i) => t - q[i]);

// What a strip shows, per pick option.
const BANDS = { slow: [0, 60], normal: [60, 100], fast: [100, 400], under: [0, 100], over: [100, 400], b40: [0, 40], b60: [40, 60], b100: [60, 100] };
function checkPick(rung, r, m) {
  const ans = rung.answers[r.id];
  if (rung.mark === 'qrs' && BANDS[ans]) {
    let band = BANDS[ans];
    if (rung.id === 'ld-v-rate' && ans === 'b100') band = [40, 100];
    if (rung.id === 'ld-v-rate' && ans === 'b40') band = [0, 40];
    assert(m.rate >= band[0] - 3 && m.rate <= band[1] + 3, rung.id + ' ' + r.id + ' rate ' + m.rate + ' outside ' + ans);
  }
  if (rung.mark === 'rr' && ans === 'reg') { const g = rr(m.qrs), md = median(g); assert(g.every(x => Math.abs(x - md) < 0.1 * md), rung.id + ' ' + r.id + ' should look regular'); }
  if (rung.mark === 'rr' && ans === 'irr') { const g = rr(m.qrs), md = median(g); assert(g.some(x => Math.abs(x - md) > 0.12 * md), rung.id + ' ' + r.id + ' should look irregular'); }
  if (rung.mark === 'wide') assert(m.wide.every(w => w === (ans === 'wide')), rung.id + ' ' + r.id + ' width should be ' + ans);
  if (rung.mark === 'early') {
    const early = H.findEarly(m);
    assert(early.length, rung.id + ' ' + r.id + ' needs an early beat');
    if (ans === 'narrow' || ans === 'wide') early.forEach(t => assert.equal(m.wide[m.qrs.indexOf(t)], ans === 'wide', rung.id + ' ' + r.id + ' early beat width'));
  }
  if (rung.id === 'ld-b-every') assert.equal(H.findDrops(m).length === 0, ans === 'yes', rung.id + ' ' + r.id + ' dropped beats vs ' + ans);
}

for (const g of data.groups) {
  assert(/^[a-z]+$/.test(g.id) && g.title, 'bad group ' + g.id);
  assert(g.rungs.length >= 1, g.id + ' needs a round');
  for (const rung of g.rungs) {
    rungCount++;
    assert(/^ld-[a-z0-9-]+$/.test(rung.id), 'bad rung id ' + rung.id);
    assert(!ids.has(rung.id), 'duplicate rung id ' + rung.id);
    ids.add(rung.id);
    assert(KINDS.includes(rung.kind), rung.id + ' unknown kind ' + rung.kind);
    assert(rung.title && rung.title.length <= 32, rung.id + ' title missing or too long');
    assert(Number.isInteger(rung.n) && rung.n >= 3 && rung.n <= 15, rung.id + ' n should be 3-15');
    let pool = [];
    if (rung.kind === 'pick') {
      const keys = Object.keys(rung.options);
      assert(keys.length >= 2 && keys.length <= 5, rung.id + ' needs 2-5 options');
      keys.forEach(k => assert(rung.options[k].length <= 32, rung.id + ' option too long: ' + rung.options[k]));
      assert(MARKS.includes(rung.mark), rung.id + ' bad mark ' + rung.mark);
      assert(rung.ask && rung.ask.length <= 40 && rung.rule && rung.rule.length <= 90, rung.id + ' ask/rule missing or too long');
      for (const [id, k] of Object.entries(rung.answers)) assert(keys.includes(k), rung.id + ' ' + id + ' answer ' + k + ' not an option');
      assert(new Set(Object.values(rung.answers)).size >= 2, rung.id + ' answers must not all be the same');
      pool = Object.keys(rung.answers);
    } else if (rung.kind === 'which') {
      rung.pairs.forEach(p => { assert(p.length === 2 && p[0] !== p[1], rung.id + ' bad pair'); pool.push(...p); });
    } else if (rung.kind === 'family') {
      pool = Object.keys(byId).filter(id => byId[id].steps);
    } else {
      pool = rung.pool === 'all' ? Object.keys(byId) : rung.pool;
      assert(Array.isArray(pool) && pool.length >= 1, rung.id + ' needs a pool');
      if (rung.kind === 'name') assert(pool.length >= 3, rung.id + ' name pool needs 3+');
      // Anna: in a group's round, every choice comes from that group (the engine draws choices from the pool only).
      if (g.id !== 'mixed') { const fams = new Set(pool.map(id => byId[id] && rhythms.groups.find(rg => rg.rhythms.includes(byId[id])).id)); assert(fams.size === 1, rung.id + ' mixes rhythm groups'); }
    }
    for (const id of pool) assert(byId[id], rung.id + ' unknown rhythm ' + id);
    for (const id of new Set(pool)) {
      const r = byId[id];
      for (let s = 1; s <= SEEDS; s++) {
        const m = make(r, rung.kind === 'pick' ? (rung.mark === 'early' ? 'early' : 'pick') : rung.kind, s * 7919 + rungCount);
        checks++;
        if (rung.kind === 'pick') checkPick(rung, r, m);
        if (rung.kind === 'tapDrop') H.findDrops(m).forEach(d => assert(d.until > d.p + 0.2, rung.id + ' drop window too small'));
        if (rung.kind === 'tapEarly') assert(H.findEarly(m).length <= 2, rung.id + ' ' + id + ' too many early beats');
        if (rung.kind === 'tapP') assert(m.atrial.length >= m.qrs.length - 1, rung.id + ' ' + id + ' P count');
        if (rung.kind === 'tapGap') { const gp = H.findGap(m); assert(gp.to - gp.from > 1.5, rung.id + ' pause too short'); }
      }
    }
  }
}
// Sinus and 1st degree never show a dropped beat; Mobitz always does.
for (const id of ['ekr-nsr', 'ekr-avb1']) for (let s = 1; s <= SEEDS; s++) assert.equal(H.findDrops(synth.make(byId[id].gen, s)).length, 0, id + ' shows a drop');
console.log('EKG Rhythm ladder OK: ' + data.groups.length + ' groups, ' + rungCount + ' rounds, ' + checks + ' strips checked.');
