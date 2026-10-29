// Validates data/murmurs.js (Heart Murmurs practice, Cardio Part 1).
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(__dirname, "..", "data", "murmurs.js"), "utf8"), sandbox);
const data = sandbox.window.HEART_MURMURS;
const errors = [];
const spotIds = new Set((data.spots || []).map((spot) => spot.id));
const radiations = new Set(["carotids", "left-neck", "axilla", "apex"]);
const sectionIds = new Set();
const prompts = new Set();
let total = 0;

if (!data || !Array.isArray(data.sections) || !data.sections.length) errors.push("No sections");
(data.sections || []).forEach((section) => {
  if (!/^[a-z0-9-]+$/.test(section.id || "")) errors.push(`Bad section id: ${section.id}`);
  if (sectionIds.has(section.id)) errors.push(`Duplicate section id: ${section.id}`);
  sectionIds.add(section.id);
  if (!section.title || !section.description) errors.push(`${section.id}: missing title/description`);
  (section.questions || []).forEach((question, index) => {
    const where = `${section.id}|${index}`;
    total += 1;
    if (!question.q || !question.a || !question.x) errors.push(`${where}: missing q/a/x`);
    if (!Array.isArray(question.w) || question.w.length !== 3) errors.push(`${where}: needs exactly 3 wrong answers`);
    const choices = [question.a].concat(question.w || []);
    if (new Set(choices).size !== choices.length) errors.push(`${where}: duplicate choices`);
    if (prompts.has(question.q)) errors.push(`${where}: duplicate prompt`);
    prompts.add(question.q);
    if (question.map) {
      if (!spotIds.has(question.map.spot)) errors.push(`${where}: unknown spot ${question.map.spot}`);
      if (question.map.radiate && !radiations.has(question.map.radiate)) errors.push(`${where}: unknown radiation ${question.map.radiate}`);
    }
  });
  if (!(section.questions || []).length) errors.push(`${section.id}: no questions`);
});

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`Heart Murmurs OK: ${data.sections.length} sets, ${total} questions, ${data.chart.length} chart rows.`);
data.sections.forEach((section) => console.log(`  ${section.id}: ${section.questions.length}`));
