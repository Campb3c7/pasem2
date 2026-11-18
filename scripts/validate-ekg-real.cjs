// Validates Real EKG practice (data/ekg-real-practice.js + generated waveform files): every item has a known
// answer type in its own section, a waveform of the right shape, and enough wrong choices left after removing
// the answer types that are also true for that record; the page is wired into index.html and keyboard.js.
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');
const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script src="([^" ]+)"><\/script>/g)].map(m => m[1]);
assert(scripts.indexOf('data/ekg-real-practice.js') >= 0 && scripts.indexOf('data/ekg-real-practice.js') < scripts.indexOf('ekg-real.js'), 'index.html must load data then engine');
assert(scripts.indexOf('ekg-sources.js') >= 0 && scripts.indexOf('ekg-sources.js') < scripts.indexOf('ekg-real.js'), 'ekg-sources.js (12-lead drawing) must load before ekg-real.js');
for (const f of ['data/ekg-real-strips.js', 'data/ekg-real-twelve.js']) assert(!scripts.includes(f), f + ' is loaded only when a section opens');
for (const id of ['ekg-real-launch', 'ekg-real-view', 'ekg-real-back', 'ekg-real-content', 'ekg-real-status']) assert(html.includes('id="' + id + '"'), 'index.html needs #' + id);
assert(fs.readFileSync(path.join(root, 'keyboard.js'), 'utf8').includes('"real-next"'), 'keyboard.js must know real-next');
const ctx = vm.createContext({ window: {} });
for (const f of ['data/ekg-real-practice.js', 'data/ekg-real-strips.js', 'data/ekg-real-twelve.js']) vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx);
const { sections, cats, items } = ctx.window.EKG_REAL_PRACTICE;
const strips = ctx.window.EKG_REAL_STRIPS, twelve = ctx.window.EKG_REAL_TWELVE;
const names = new Set();
for (const [k, c] of Object.entries(cats)) {
  assert(sections[c.section], k + ': unknown section');
  assert(c.name && !names.has(c.name), k + ': needs a unique name'); names.add(c.name);
  assert(c.why && c.why.length < 260, k + ': why must be one short sentence');
  for (const o of c.confuse) assert(cats[o] && cats[o].section === c.section && o !== k, k + ': confuse ' + o + ' must be another type in the same section');
}
const LEADS = ['I', 'II', 'III', 'aVR', 'aVL', 'aVF', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6'];
const seen = new Set(), count = {};
for (const x of items) {
  assert(/^ptbxl-\d+$/.test(x.id) && !seen.has(x.id), x.id + ': ids are unique ptbxl-<n>'); seen.add(x.id);
  const c = cats[x.cat]; assert(c && c.section === x.section, x.id + ': answer type must be in its section');
  assert(x.labels.length, x.id + ': needs the cardiologist statements');
  if (x.lang) assert(x.translation, x.id + ': non-English report needs a translation');
  const left = Object.keys(cats).filter(k => cats[k].section === x.section && k !== x.cat && !(x.also || []).includes(k));
  assert(left.length >= 3, x.id + ': fewer than 3 wrong choices left');
  if (x.section === 'strip') assert.equal(strips[x.id].split(',').length, 2500, x.id + ': 10 s of lead II');
  else {
    const w = twelve[x.id]; assert(w, x.id + ': no 12-lead');
    for (const l of LEADS) assert([625, 626].includes(w[l].split(',').length), x.id + ' ' + l + ': 2.5 s');
    assert.equal(w.rhythm.split(',').length, 2500, x.id + ': rhythm strip');
  }
  count[x.section] = (count[x.section] || 0) + 1;
}
for (const k of Object.keys(cats)) assert(items.some(x => x.cat === k), k + ': has no EKGs');
console.log('Real EKG practice OK: ' + count.strip + ' strips, ' + count.twelve + ' 12-leads, ' + Object.keys(cats).length + ' answer types');
