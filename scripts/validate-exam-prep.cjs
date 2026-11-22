#!/usr/bin/env node
/* Validates the Cardio Part 3 Exam prep data (data/exam-prep*.js): every question has a known concept and kind, 3 unique
   wrong answers, a one-sentence why, a real slide number, and a prompt unique across the whole set; every concept is used.
   Also warns when the right answer is the longest choice too often (a giveaway). */
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const files = [...html.matchAll(/<script src="(data\/(?:exam-prep[^"]*|slide-text-[^"]+)\.js)"><\/script>/g)].map((m) => m[1]);
const ctx = { window: {} }; ctx.window.window = ctx.window; vm.createContext(ctx);
files.forEach((f) => vm.runInContext(fs.readFileSync(path.join(root, f), "utf8").replace(/\bExamPrep\./g, "window.ExamPrep."), ctx, { filename: f }));
const data = ctx.window.EXAM_PREP, TEXT = ctx.window.SLIDE_TEXT || {};
const KINDS = new Set(["Mechanism", "Why", "Next step", "Case", "Compare", "Predict", "Pick the drug", "Trap"]);
const GROUPS = new Set(["CAD", "Heart Failure", "Cardiac Surgery", "Cardiac Testing"]);
let errors = 0, total = 0; const err = (m) => { errors += 1; console.error("✗ " + m); };
const prompts = new Set(), ids = new Set();
data.lectures.forEach((lec) => {
  if (ids.has(lec.id)) err("duplicate lecture " + lec.id); ids.add(lec.id);
  if (!GROUPS.has(lec.group)) err(lec.id + ": unknown group " + lec.group);
  const slides = Object.keys(TEXT[lec.id] || {}).length;
  if (!slides) err(lec.id + ": no slide text (id must match the Slide by slide lecture)");
  const used = new Set(); let longest = 0;
  lec.qs.forEach((q, i) => {
    total += 1;
    const at = lec.id + "|" + i + " " + String(q.prompt).slice(0, 50);
    if (!lec.concepts[q.concept]) err(at + ": unknown concept " + q.concept); used.add(q.concept);
    if (!KINDS.has(q.kind)) err(at + ": unknown kind " + q.kind);
    if (!(q.n >= 0 && q.n <= slides)) err(at + ": slide " + q.n + " not in deck (" + slides + ")");
    if (!Array.isArray(q.wrong) || q.wrong.length !== 3) err(at + ": needs 3 wrong answers");
    if (new Set([q.answer, ...q.wrong]).size !== 4) err(at + ": duplicate choices");
    if (!q.why || q.why === q.answer + ".") err(at + ": needs a real why");
    if ((q.why.match(/[.!?](\s|$)/g) || []).length > 1) err(at + ": why must be one sentence");
    if (prompts.has(q.prompt)) err(at + ": duplicate prompt"); prompts.add(q.prompt);
    if (q.wrong.every((w) => q.answer.length > w.length + 8)) longest += 1;
  });
  Object.keys(lec.concepts).forEach((c) => { if (!used.has(c)) err(lec.id + ": concept " + c + " has no questions"); });
  const share = Math.round(100 * longest / lec.qs.length);
  console.log(lec.id + ": " + lec.qs.length + " questions, " + Object.keys(lec.concepts).length + " concepts" + (share > 30 ? "  ⚠ answer clearly longest in " + share + "%" : ""));
});
console.log(errors ? errors + " problem(s)" : "✓ Exam prep OK: " + total + " questions");
process.exit(errors ? 1 : 0);
