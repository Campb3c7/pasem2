// Checks data/ekg-class-polls.js: ids poll-1..n in order, 3 distinct wrong answers, no duplicate prompts,
// and that every part of the mock exam has data (workbook, rhythms, patterns, axis, MI, lecture).
// Practice exam (data/ekg-exam.js + data/ekg-twelve-synth.js): format adds up, every 12-lead case's answers
// are real options, and its drawing matches its answers (axis quadrant and rate) across many seeds.
const path = require("path");
global.window = {};
const root = path.join(__dirname, "..");
["data/ekg-class-polls.js", "data/ekg-workbook.js", "data/rhythm-strips-ekg.js", "data/ekg-patterns.js", "data/ekg-axis.js", "data/ekg-mi.js", "data/ekg-interpretation.js", "data/rhythm-synth.js", "data/ekg-twelve-synth.js", "data/ekg-exam.js"]
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

// ---- practice exam ----
const EX = window.EKG_EXAM, TS = window.TwelveSynth;
const slots = EX.strips.slots;
const nStrips = slots.reduce((a, x) => a + x.n, 0), stripPts = slots.reduce((a, x) => a + x.n * x.points, 0);
if (nStrips !== EX.format.strips) errors.push("strip slots give " + nStrips + " strips, format says " + EX.format.strips);
if (EX.format.mcq + nStrips + EX.format.twelve !== 40) errors.push("exam should have 40 questions");
slots.forEach((sl) => {
  const wbN = window.EKG_WORKBOOK.strips.filter((s) => s.family === sl.family).length;
  const g = window.EKG_RHYTHMS.groups.find((x) => x.id === sl.gen);
  const genN = g ? g.rhythms.filter((r) => r.steps).length : 0;
  if (wbN + genN < sl.n) errors.push("strip slot " + sl.family + ": not enough strips");
  if (sl.points < 2 || sl.points > 4) errors.push("strip slot " + sl.family + ": points must be 2-4");
});
const wo = window.EKG_WORKBOOK.options;
window.EKG_WORKBOOK.strips.forEach((s) => ["reg", "p", "pr", "qrs"].forEach((k) => { if (!wo[k].options[s[k]]) errors.push(s.id + ": " + k + " answer not an option"); }));
const steps = window.EKG_RHYTHMS.steps;
Object.values(byR).forEach((r) => { if (r.steps) ["reg", "p", "pr", "qrs"].forEach((k) => { if (!steps[k].options[r.steps[k]]) errors.push(r.id + ": step " + k + " not an option"); }); });
const fields = {}; EX.twelve.fields.forEach((f) => { fields[f.id] = f; });
const cases = EX.twelve.cases, byC = {}, names = new Set();
cases.forEach((c) => { if (byC[c.id]) errors.push(c.id + ": duplicate id"); byC[c.id] = c; if (names.has(c.name)) errors.push(c.id + ": duplicate name"); names.add(c.name); });
EX.twelve.categories.forEach((cat) => { if (!cases.some((c) => c.cat === cat)) errors.push("no 12-lead case in category " + cat); });
const quad = (n) => (n.I >= 0 ? (n.aVF >= 0 ? "normal" : "lad") : (n.aVF >= 0 ? "rad" : "extreme"));
cases.forEach((c) => {
  if (!/^tw-[a-z0-9-]+$/.test(c.id)) errors.push(c.id + ": id must be tw-*");
  if (!EX.twelve.categories.includes(c.cat)) errors.push(c.id + ": unknown category");
  Object.keys(fields).forEach((k) => { if (!fields[k].number && !fields[k].options[c.answers[k]]) errors.push(c.id + ": answer for " + k + " is not an option"); });
  const conf = c.confuse.filter((id) => byC[id] && id !== c.id);
  if (conf.length < 3 || conf.length !== c.confuse.length) errors.push(c.id + ": needs 3+ valid confuse ids");
  const range = c.rateFixed ? [Math.min(...c.rateFixed), Math.max(...c.rateFixed)] : c.rate;
  for (let seed = 1; seed <= 40; seed += 1) {
    const m = TS.make(c, seed * 7919);
    if (quad(m.net) !== c.answers.axis) { errors.push(c.id + ": seed " + seed + " draws " + quad(m.net) + " axis, answer is " + c.answers.axis); break; }
    const slack = c.rhythm === "af" ? 12 : 4;
    if (m.rate < Math.max(range[0] - slack, c.rhythm === "af" ? 101 : 0) || m.rate > range[1] + slack) { errors.push(c.id + ": seed " + seed + " measured rate " + m.rate + " outside " + range); break; }
    if (!/^<svg/.test(m.svg) || /NaN/.test(m.svg)) { errors.push(c.id + ": bad drawing"); break; }
  }
});
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log("EKG practice exam OK: " + polls.length + " class polls; " + nStrips + " strips (" + stripPts + " points); " + cases.length + " 12-lead cases drawn 40 times each.");
