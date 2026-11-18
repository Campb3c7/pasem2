// Validates the EKG "Sources to review" page: sources have every field, each sample points at a
// known source and at a waveform with all 12 leads (2.5 s = 625-626 points at 250 Hz) plus a 10-s
// lead II rhythm strip (2500 points), and the page is wired into index.html.
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');
const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script src="([^" ]+)"><\/script>/g)].map(m => m[1]);
assert(scripts.indexOf('data/ekg-sources.js') >= 0 && scripts.indexOf('data/ekg-sources.js') < scripts.indexOf('ekg-sources.js'), 'index.html must load data then engine');
assert(!scripts.includes('data/ekg-source-waves.js'), 'waveforms are loaded only when the page opens');
for (const id of ['ekg-sources-launch', 'ekg-sources-view', 'ekg-sources-back', 'ekg-sources-content']) assert(html.includes('id="' + id + '"'), 'index.html needs #' + id);
const ctx = vm.createContext({ window: {} });
vm.runInContext(fs.readFileSync(path.join(root, 'data/ekg-sources.js'), 'utf8'), ctx);
vm.runInContext(fs.readFileSync(path.join(root, 'data/ekg-source-waves.js'), 'utf8'), ctx);
const { sources, samples } = ctx.window.EKG_SOURCES;
const waves = ctx.window.EKG_SOURCE_WAVES;
const ids = new Set();
for (const s of sources) {
  assert(!ids.has(s.id), 'duplicate source ' + s.id); ids.add(s.id);
  for (const k of ['short', 'name', 'verdict', 'verdictKind', 'what', 'reads', 'license', 'quality', 'use']) assert(s[k], s.id + ': missing ' + k);
  assert(['best', 'good', 'link', 'maybe', 'skip'].includes(s.verdictKind), s.id + ': bad verdictKind');
  assert(s.links.length && s.links.every(l => /^https:\/\//.test(l.url)), s.id + ': needs https links');
}
const LEADS = ['I', 'II', 'III', 'aVR', 'aVL', 'aVF', 'V1', 'V2', 'V3', 'V4', 'V5', 'V6'];
const seen = new Set();
for (const x of samples) {
  assert(!seen.has(x.id), 'duplicate sample ' + x.id); seen.add(x.id);
  assert(ids.has(x.source), x.id + ': unknown source'); 
  assert(sources.find(s => s.id === x.source).labelsName, x.id + ': its source needs labelsName');
  assert(x.title && x.group && x.record && x.labels.length, x.id + ': title, group, record and labels needed');
  const w = waves[x.id]; assert(w, x.id + ': no waveform');
  for (const l of LEADS) assert([625, 626].includes(w[l].split(',').length), x.id + ' ' + l + ': 2.5 s at 250 Hz');
  assert.equal(w.rhythm.split(',').length, 2500, x.id + ': 10-s rhythm strip');
}
console.log('EKG sources OK: ' + sources.length + ' sources, ' + samples.length + ' real 12-leads');
