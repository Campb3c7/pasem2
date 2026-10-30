// Validates data/struggles-cardio-part-1.js (Struggles tool, Cardio Part 1).
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(__dirname, "..", "data", "struggles-cardio-part-1.js"), "utf8"), sandbox);
const data = sandbox.window.CARDIO_PART1_STRUGGLES;
const errors = [];
const ids = new Set();
const prompts = new Set();
let total = 0;

if (!data || !Array.isArray(data.groups) || !data.groups.length) errors.push("No groups");
(data.corrections || []).forEach((entry, index) => {
  if (!entry.source || !entry.card || !entry.fix) errors.push(`correction ${index}: needs source/card/fix`);
});
(data.groups || []).forEach((group) => {
  if (!/^[a-z0-9-]+$/.test(group.id || "")) errors.push(`Bad group id: ${group.id}`);
  if (ids.has(group.id)) errors.push(`Duplicate group id: ${group.id}`);
  ids.add(group.id);
  if (!group.source || !group.title || !group.learn) errors.push(`${group.id}: missing source/title/learn`);
  if (!(group.questions || []).length) errors.push(`${group.id}: no questions`);
  (group.questions || []).forEach((question, index) => {
    const where = `${group.id}|${index}`;
    total += 1;
    if (!question.q || !question.a || !question.x) errors.push(`${where}: missing q/a/x`);
    if (!Array.isArray(question.w) || question.w.length !== 3) errors.push(`${where}: needs exactly 3 wrong answers`);
    const choices = [question.a].concat(question.w || []);
    if (new Set(choices).size !== choices.length) errors.push(`${where}: duplicate choices`);
    if (prompts.has(question.q)) errors.push(`${where}: duplicate prompt`);
    prompts.add(question.q);
  });
});

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`Struggles OK: ${data.groups.length} groups, ${total} questions, ${(data.corrections || []).length} card fixes.`);
data.groups.forEach((group) => console.log(`  ${group.id}: ${group.questions.length}`));
