// Validates the Cardio Part 1 Medications tool (data/meds-cardio-*.js, gathered by data/medications-cardio-part-1.js).
const fs = require("node:fs"), vm = require("node:vm"), assert = require("node:assert/strict"), path = require("node:path");
const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const files = ["data/disease-helpers.js", ...Array.from(html.matchAll(/<script src="(data\/(?:medication-helpers|meds-cardio-[a-z-]+|medications-cardio-part-1)\.js)"><\/script>/g), m => m[1])];
const onDisk = fs.readdirSync(path.join(root, "data")).filter(f => /^meds-cardio-.*\.js$/.test(f)).map(f => "data/" + f);
for (const f of onDisk) assert(files.includes(f), `${f} is not loaded by index.html`);
const context = vm.createContext({ window: {} });
for (const file of files) vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
const data = context.window.CARDIO_PART1_MEDICATIONS;
assert(data && data.lectures.length === onDisk.length, "every meds-cardio file must be gathered in medications-cardio-part-1.js");
const lectureTitles = new Set(["Cardiovascular Anatomy", "Cardiovascular Physiology", "Cardiovascular H&P", "Lipids & Dyslipidemia", "Hypertension Part I", "Hypertension Part II", "Hypertension Part III", "Hypertensive Crisis", "Cardiac Devices", "Cardiomyopathies", "Valvular Disease"]);
const medSections = ["uses", "moa", "avoid", "se", "pearls"];
const idPattern = /^[a-z0-9-]+$/;
const plain = (label, text) => {
  assert(typeof text === "string" && text.trim(), `${label} is empty`);
  assert(!/<[a-zA-Z\/][^>]*>|&[a-zA-Z#0-9]+;/.test(text), `${label} contains HTML: ${text}`);
};
const groupIds = new Set(), medIds = new Set(), prompts = new Set();
let meds = 0, questions = 0;
for (const group of data.lectures) {
  assert(idPattern.test(group.id) && !groupIds.has(group.id), `bad or duplicate group id ${group.id}`); groupIds.add(group.id);
  for (const m of group.diseases) {
    assert(idPattern.test(m.id) && !medIds.has(m.id), `bad or duplicate medication id ${m.id}`); medIds.add(m.id);
    meds++;
    plain(`${m.id} name`, m.name); plain(`${m.id} blurb`, m.blurb);
    assert(Array.isArray(m.lectures) && m.lectures.length, `${m.id} needs lecture tags`);
    m.lectures.forEach(t => assert(lectureTitles.has(t), `${m.id} has unknown lecture tag ${t}`));
    const ids = m.sections.map(s => s.id);
    if (m.id.startsWith("med-")) assert.equal(ids.join(","), medSections.join(","), `${m.id} sections must be ${medSections.join(", ")}`);
    else assert(m.id.startsWith("guide-") && ids.length, `${m.id} must be med-* or guide-*`);
    assert.equal(new Set(ids).size, ids.length, `${m.id} duplicate section ids`);
    m.sections.forEach(s => assert(s.title && s.html && s.html.trim(), `${m.id}/${s.id} empty`));
    assert(m.questions.length >= 4, `${m.id} has only ${m.questions.length} questions`);
    m.questions.forEach((q, i) => {
      assert.equal(q.id, `${m.id}|${i}`);
      assert(ids.includes(q.section), `${q.id} links to missing section ${q.section}`);
      plain(`${q.id} prompt`, q.prompt); plain(`${q.id} explanation`, q.explanation);
      assert.equal(q.choices.length, 4, `${q.id} needs 4 choices`);
      assert.equal(new Set(q.choices).size, 4, `${q.id} choices not distinct`);
      q.choices.forEach((c, j) => plain(`${q.id} choice ${j}`, c));
      assert(Number.isInteger(q.correct) && q.correct >= 0 && q.correct < 4, `${q.id} bad correct`);
      assert(!prompts.has(q.prompt), `Duplicate prompt: ${q.prompt}`); prompts.add(q.prompt);
      questions++;
    });
  }
}
console.log(`Cardio Part 1 medications OK: ${data.lectures.length} drug classes, ${meds} entries, ${questions} questions`);
