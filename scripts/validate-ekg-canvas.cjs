// Validates EKG Canvas practice (data/ekg-canvas.js): unique ids, images exist, 3 distinct wrong answers,
// a one-sentence why, a known src, the page wiring, and that the lecture/poll sets it borrows still load.
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');
const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script src="([^" ]+)"><\/script>/g)].map(m => m[1]);
const at = s => scripts.indexOf(s);
for (const s of ['data/ekg-canvas.js', 'data/ekg-slides.js', 'data/ekg-class-polls.js']) assert(at(s) >= 0 && at(s) < at('ekg-canvas.js'), 'index.html must load ' + s + ' before ekg-canvas.js');
for (const id of ['ekg-canvas-launch', 'ekg-canvas-view', 'ekg-canvas-back', 'ekg-canvas-content', 'ekg-canvas-status']) assert(html.includes('id="' + id + '"'), 'index.html needs #' + id);
assert(fs.readFileSync(path.join(root, 'keyboard.js'), 'utf8').includes('"cv-next"'), 'keyboard.js must know cv-next');
const ctx = vm.createContext({ window: {} });
for (const f of ['data/ekg-slides.js', 'data/ekg-class-polls.js', 'data/ekg-canvas.js']) vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx);
const ids = new Set();
let n = 0;
for (const set of ctx.window.EKG_CANVAS.sets) {
  assert(set.id && set.title && set.items.length, 'set needs id, title and items');
  for (const q of set.items) {
    assert(/^[a-z0-9-]+$/.test(q.id) && !ids.has(q.id), q.id + ': ids must be unique lowercase');
    ids.add(q.id);
    assert(fs.existsSync(path.join(root, q.image)), q.id + ': missing ' + q.image);
    assert(q.question && q.answer && q.alt, q.id + ': question, answer and alt needed');
    assert.equal(q.wrong.length, 3, q.id + ': 3 wrong answers');
    assert.equal(new Set([q.answer, ...q.wrong]).size, 4, q.id + ': choices must be distinct');
    assert(q.why && q.why !== q.answer && q.why.length < 260 && !/^slide/i.test(q.why), q.id + ': why must be one short sentence');
    assert(['key', 'slide', 'ours'].includes(q.src), q.id + ': src must be key, slide or ours');
    n++;
  }
}
assert(ctx.window.EKG_SLIDES.items.length > 0, 'lecture set needs EKG_SLIDES');
for (const p of ctx.window.EKG_CLASS_POLLS) assert(p.wrong.length >= 3 && p.id, p.id + ': poll needs 3+ wrong answers');
console.log('EKG Canvas OK: ' + n + ' own questions + ' + ctx.window.EKG_SLIDES.items.length + ' lecture slides + ' + ctx.window.EKG_CLASS_POLLS.length + ' polls');
