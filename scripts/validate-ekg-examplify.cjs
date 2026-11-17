// Validates EKG Examplify (data/ekg-examplify.js): ids exq-1..n in order, every image exists,
// 3 distinct wrong answers that differ from the answer, a one-sentence why, and the page wiring.
const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const path = require('node:path');
const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script src="([^" ]+)"><\/script>/g)].map(m => m[1]);
assert(scripts.indexOf('data/ekg-examplify.js') >= 0 && scripts.indexOf('data/ekg-examplify.js') < scripts.indexOf('ekg-examplify.js'), 'index.html must load data then engine');
for (const id of ['ekg-examplify-launch', 'ekg-examplify-view', 'ekg-examplify-back', 'ekg-examplify-content']) assert(html.includes('id="' + id + '"'), 'index.html needs #' + id);
assert(fs.readFileSync(path.join(root, 'keyboard.js'), 'utf8').includes('"exq-next"'), 'keyboard.js must know exq-next');
const ctx = vm.createContext({ window: {} });
vm.runInContext(fs.readFileSync(path.join(root, 'data/ekg-examplify.js'), 'utf8'), ctx);
const qs = ctx.window.EKG_EXAMPLIFY.questions;
qs.forEach((q, i) => {
  assert.equal(q.id, 'exq-' + (i + 1), 'ids must be exq-1..n in order');
  assert(fs.existsSync(path.join(root, q.image)), q.id + ': missing ' + q.image);
  assert(q.question && q.answer && q.alt, q.id + ': question, answer and alt needed');
  assert.equal(q.wrong.length, 3, q.id + ': 3 wrong answers');
  assert.equal(new Set([q.answer, ...q.wrong]).size, 4, q.id + ': choices must be distinct');
  assert(q.why && q.why !== q.answer && q.why.length < 260 && !/^slide/i.test(q.why), q.id + ': why must be one short sentence');
});
console.log('EKG Examplify OK: ' + qs.length + ' questions');
