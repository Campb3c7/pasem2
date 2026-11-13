// Checks data/ekg-class-polls.js: ids poll-1..n in order, 3 distinct wrong answers, no duplicate prompts,
// and that every part of the mock exam has data (workbook, rhythms, patterns, axis, MI, lecture).
const path = require("path");
global.window = {};
const root = path.join(__dirname, "..");
["data/ekg-class-polls.js", "data/ekg-workbook.js", "data/rhythm-strips-ekg.js", "data/ekg-patterns.js", "data/ekg-axis.js", "data/ekg-mi.js", "data/ekg-interpretation.js"]
  .forEach((f) => require(path.join(root, f)));
const errors = [];
const polls = window.EKG_CLASS_POLLS || [];
if (polls.length < 20) errors.push("expected at least 20 class polls, found " + polls.length);
const prompts = new Set();
polls.forEach((q, i) => {
  const where = q.id || "poll #" + (i + 1);
  if (q.id !== "poll-" + (i + 1)) errors.push(where + ": id should be poll-" + (i + 1) + " (append only)");
  if (!q.prompt || !q.answer || !q.why) errors.push(where + ": missing prompt, answer or why");
  if (!Array.isArray(q.wrong) || q.wrong.length !== 3) errors.push(where + ": needs exactly 3 wrong answers");
  const all = [q.answer].concat(q.wrong || []);
  if (new Set(all).size !== all.length) errors.push(where + ": duplicate answer choices");
  if (prompts.has(q.prompt)) errors.push(where + ": duplicate prompt");
  prompts.add(q.prompt);
});
const pt = window.EKG_PATTERNS, byP = {};
pt.patterns.forEach((p) => { byP[p.id] = p; });
pt.patterns.forEach((p) => { if (p.confuse.some((id) => !byP[id])) errors.push(p.id + ": confuse id missing"); });
const byR = {};
window.EKG_RHYTHMS.groups.forEach((g) => g.rhythms.forEach((r) => { byR[r.id] = r; }));
Object.values(byR).forEach((r) => { if (r.confuse.filter((id) => byR[id]).length < 3) errors.push(r.id + ": needs 3 valid confuse ids for the mock exam"); });
window.EKG_WORKBOOK.strips.forEach((s) => { if (!s.wrong || s.wrong.length < 3 || s.wrong.includes(s.name)) errors.push(s.id + ": bad wrong answers"); });
if (window.EKG_MI.walls.length < 4 || window.EKG_AXIS.quadrants.length !== 4) errors.push("MI walls or axis quadrants missing");
if (!window.EKG_INTERPRETATION_OBJECTIVES || !window.EKG_INTERPRETATION_OBJECTIVES.length) errors.push("EKG lecture questions missing");
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log("EKG mock exam OK: " + polls.length + " class polls; workbook, rhythm, pattern, axis, MI and lecture pools present.");
