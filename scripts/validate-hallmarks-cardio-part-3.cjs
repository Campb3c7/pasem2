// Validates the Cardio Part 3 Hallmarks tool: node scripts/validate-hallmarks-cardio-part-3.cjs
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.join(__dirname, "..");
const LECTURES = ["cad-part-1", "cad-part-2", "cad-part-3", "cad-part-4", "cad-part-5", "heart-failure", "cardiac-surgery", "stress-testing", "echo-telemetry", "coronary-angiogram"];
const files = ["data/hallmarks.js"].concat(LECTURES.map((id) => `data/hallmarks-${id}.js`));

const sandbox = { window: {}, console };
vm.createContext(sandbox);
files.forEach((file) => vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), sandbox, { filename: file }));

const errors = [];
const warn = [];
const data = sandbox.window.CARDIO3_HALLMARKS;
const CAT = sandbox.window.Hallmarks.CAT;
if (!data || !data.lectures) { console.error("CARDIO3_HALLMARKS missing"); process.exit(1); }

const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
files.forEach((file) => { if (!html.includes(`<script src="${file}"></script>`)) errors.push(`index.html does not load ${file}`); });
["cardio3-hallmarks-launch", "cardio3-hallmarks-view", "cardio3-hallmarks-content", "cardio3-hallmarks-back"].forEach((id) => {
  if (!html.includes(`id="${id}"`)) errors.push(`index.html is missing #${id}`);
});

const lectureIds = data.lectures.map((l) => l.id);
LECTURES.forEach((id) => { if (!lectureIds.includes(id)) errors.push(`lecture ${id} missing`); });
const seenIds = new Set();
let conditions = 0, hallmarks = 0, questions = 0;

data.lectures.forEach((lecture) => {
  const ids = lecture.raw.map((c) => c.id);
  if (lecture.raw.length < 5) errors.push(`${lecture.id}: needs at least 5 conditions (has ${lecture.raw.length})`);
  const texts = new Map();
  lecture.raw.forEach((c) => {
    conditions += 1;
    if (!/^hm-[a-z0-9-]+$/.test(c.id)) errors.push(`${c.id}: id must be hm-<lowercase-dashes>`);
    if (seenIds.has(c.id)) errors.push(`${c.id}: duplicate id`);
    seenIds.add(c.id);
    if (!c.name || !c.oneLiner || !c.think) errors.push(`${c.id}: name, oneLiner and think are required`);
    if (c.hallmarks.length < 3) errors.push(`${c.id}: needs at least 3 hallmarks`);
    c.x.forEach((x) => { if (!ids.includes(x)) errors.push(`${c.id}: x lists ${x}, not in ${lecture.id}`); });
    c.hallmarks.forEach((h, k) => {
      hallmarks += 1;
      const where = `${c.id} hallmark ${k}`;
      if (!CAT[h[0]]) errors.push(`${where}: unknown category "${h[0]}"`);
      if (!h[1] || !h[2]) errors.push(`${where}: text and why are required`);
      if (h[1] && h[2] && h[1].trim().toLowerCase() === h[2].trim().toLowerCase()) errors.push(`${where}: why repeats the hallmark`);
      if (h[2] && !/[.!?)]$/.test(h[2].trim())) errors.push(`${where}: why should be a full sentence`);
      if (h[2] && h[2].length > 170) warn.push(`${where}: why is long (${h[2].length} chars)`);
      if (Array.isArray(h[3])) h[3].forEach((x) => { if (!ids.includes(x)) errors.push(`${where}: override lists ${x}, not in ${lecture.id}`); });
      if (texts.has(h[1])) errors.push(`${where}: same hallmark text as ${texts.get(h[1])}`);
      texts.set(h[1], c.id);
    });
  });
  const names = lecture.raw.map((c) => c.name);
  names.forEach((n, i) => { if (names.indexOf(n) !== i) errors.push(`${lecture.id}: duplicate name ${n}`); });

  lecture.diseases.forEach((d) => {
    d.questions.forEach((q, i) => {
      questions += 1;
      if (q.id !== `${d.id}|${i}`) errors.push(`${q.id}: id out of order`);
      if (q.choices.length !== 4) errors.push(`${q.id}: needs 4 choices (has ${q.choices.length})`);
      if (new Set(q.choices).size !== q.choices.length) errors.push(`${q.id}: duplicate choices`);
      if (q.choices.some((c) => !c)) errors.push(`${q.id}: empty choice`);
      if (q.correct !== 0) errors.push(`${q.id}: correct must be 0 (engine shuffles)`);
      if (!q.explanation) errors.push(`${q.id}: missing why`);
    });
  });
});

warn.forEach((w) => console.warn("warn:", w));
if (errors.length) {
  errors.forEach((e) => console.error("error:", e));
  console.error(`${errors.length} error(s)`);
  process.exit(1);
}
console.log(`Hallmarks OK: ${data.lectures.length} lectures, ${conditions} conditions, ${hallmarks} hallmarks, ${questions} questions.`);
