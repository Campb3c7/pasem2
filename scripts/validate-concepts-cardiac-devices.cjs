// Validates data/concepts-cardiac-devices.js (Concepts tool, Cardiac Devices).
const fs = require("node:fs"), vm = require("node:vm"), assert = require("node:assert/strict"), path = require("node:path");
const root = path.join(__dirname, "..");
const context = vm.createContext({ window: {} });
for (const file of ["data/disease-helpers.js", "data/concepts-cardiac-devices.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}
const lecture = context.window.CARDIO_CONCEPTS_DEVICES;
assert(lecture && Array.isArray(lecture.diseases), "CARDIO_CONCEPTS_DEVICES missing");
assert.equal(lecture.id, "cardiac-devices");
assert.equal(lecture.title, "Cardiac Devices");
const idPattern = /^[a-z0-9-]+$/;
const sectionIds = ["idea", "chain", "bedside", "traps"];
const plain = (label, text) => {
  assert(typeof text === "string" && text.trim(), `${label} is empty`);
  assert(!/<[^>]+>|&[a-zA-Z#0-9]+;/.test(text), `${label} contains HTML tag or entity: ${text}`);
};
const conceptIds = new Set(), prompts = new Set();
let questions = 0;
for (const c of lecture.diseases) {
  assert(idPattern.test(c.id), `Bad concept id: ${c.id}`);
  assert(!conceptIds.has(c.id), `Duplicate concept id: ${c.id}`); conceptIds.add(c.id);
  plain(`${c.id} name`, c.name); plain(`${c.id} blurb`, c.blurb);
  assert.deepEqual(Array.from(c.sections, s => s.id), sectionIds, `${c.id} sections must be ${sectionIds.join(", ")}`);
  for (const s of c.sections) {
    assert(s.title && s.html && s.html.trim(), `${c.id}/${s.id} empty`);
  }
  assert(c.sections[1].html.includes('<ol class="concept-chain">'), `${c.id} chain section lacks concept-chain list`);
  assert(c.questions.length >= 6, `${c.id} has only ${c.questions.length} questions`);
  c.questions.forEach((q, i) => {
    assert.equal(q.id, `${c.id}|${i}`);
    assert(sectionIds.includes(q.section), `${q.id} bad section ${q.section}`);
    plain(`${q.id} prompt`, q.prompt); plain(`${q.id} explanation`, q.explanation);
    assert.equal(q.choices.length, 4, `${q.id} needs 4 choices`);
    assert.equal(new Set(q.choices).size, 4, `${q.id} choices not distinct`);
    q.choices.forEach((ch, j) => plain(`${q.id} choice ${j}`, ch));
    assert(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < 4, `${q.id} bad correct`);
    assert(!prompts.has(q.prompt), `Duplicate prompt: ${q.prompt}`); prompts.add(q.prompt);
    questions++;
  });
}
console.log(`cardiac-devices concepts OK: ${lecture.diseases.length} concepts, ${questions} questions`);
