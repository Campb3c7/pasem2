// Validates data/pathophys-cardio-part-1.js (Cardio Part 1 Pathophysiology practice).
const fs = require("node:fs"), vm = require("node:vm"), assert = require("node:assert/strict"), path = require("node:path");
const root = path.join(__dirname, "..");
const context = vm.createContext({ window: {} });
for (const file of ["data/disease-helpers.js", "data/pathophys-cardio-part-1.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}
const data = context.window.CARDIO_PART1_PATHOPHYS;
assert(data && Array.isArray(data.lectures) && data.lectures.length, "CARDIO_PART1_PATHOPHYS missing");
const idPattern = /^[a-z0-9-]+$/;
const plain = (label, text) => {
  assert(typeof text === "string" && text.trim(), `${label} is empty`);
  assert(!/<[^>]+>|&[a-zA-Z#0-9]+;/.test(text), `${label} contains HTML tag or entity: ${text}`);
};
const lectureIds = new Set(), topicIds = new Set(), prompts = new Set();
let questions = 0;
for (const lecture of data.lectures) {
  assert(lecture && idPattern.test(lecture.id), `Bad lecture: ${lecture && lecture.id}`);
  assert(!lectureIds.has(lecture.id), `Duplicate lecture ${lecture.id}`); lectureIds.add(lecture.id);
  assert(lecture.diseases.length, `${lecture.id} has no topics`);
  for (const t of lecture.diseases) {
    assert(idPattern.test(t.id), `Bad topic id: ${t.id}`);
    assert(!topicIds.has(t.id), `Duplicate topic id: ${t.id}`); topicIds.add(t.id);
    plain(`${t.id} name`, t.name); plain(`${t.id} blurb`, t.blurb);
    assert(t.sections.length >= 1 && t.sections.every(s => s.id && s.title && s.html.trim()), `${t.id} sections invalid`);
    const sectionIds = t.sections.map(s => s.id);
    assert(t.questions.length >= 3, `${t.id} has only ${t.questions.length} questions`);
    t.questions.forEach((q, i) => {
      assert.equal(q.id, `${t.id}|${i}`);
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
}
assert(questions >= 90, `Only ${questions} questions`);
console.log(`cardio-part-1 pathophysiology OK: ${data.lectures.length} lectures, ${topicIds.size} topics, ${questions} questions`);
