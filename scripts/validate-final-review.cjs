#!/usr/bin/env node
/* Validates the Cardio Part 3 Final review data (data/final-review*.js): every question has a known concept and kind,
   3 unique wrong answers, a why, and a prompt unique across the set; every concept is used. Questions are Anna's
   ready-made sets kept as written, so no length or one-sentence rules. */
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const files = [...html.matchAll(/<script src="(data\/final-review[^"]*\.js)(?:\?v=\d+)?"><\/script>/g)].map((m) => m[1]);
const ctx = { window: {} }; ctx.window.window = ctx.window; vm.createContext(ctx);
let errors = 0, total = 0; const err = (m) => { errors += 1; console.error("✗ " + m); };
files.forEach((f) => { if (!fs.existsSync(path.join(root, f))) return err("missing file " + f); vm.runInContext(fs.readFileSync(path.join(root, f), "utf8").replace(/\bFinalReview\./g, "window.FinalReview."), ctx, { filename: f }); });
const data = ctx.window.CARDIO3_FINAL_REVIEW;
if (!data) { console.error("✗ no data"); process.exit(1); }
const KINDS = new Set(["Diagnosis", "What's happening", "Next step", "Test to order", "Pick the drug", "Classify", "Complication", "Application"]);
const GROUPS = new Set(["CAD", "Heart Failure", "Cardiac Surgery", "Cardiac Testing"]);
const prompts = new Set(), ids = new Set();
data.lectures.forEach((lec) => {
  if (ids.has(lec.id)) err("duplicate lecture " + lec.id); ids.add(lec.id);
  if (!GROUPS.has(lec.group)) err(lec.id + ": unknown group " + lec.group);
  const used = new Set();
  lec.qs.forEach((q, i) => {
    total += 1;
    const at = lec.id + "|" + i + " " + String(q.prompt).slice(0, 50);
    if (!lec.concepts[q.concept]) err(at + ": unknown concept " + q.concept); used.add(q.concept);
    if (!KINDS.has(q.kind)) err(at + ": unknown kind " + q.kind);
    if (!Array.isArray(q.wrong) || q.wrong.length !== 3) err(at + ": needs 3 wrong answers");
    if (new Set([q.answer, ...q.wrong]).size !== 4) err(at + ": duplicate choices");
    if (!q.why || q.why === q.answer + ".") err(at + ": needs a real why");
    if (prompts.has(q.prompt)) err(at + ": duplicate prompt"); prompts.add(q.prompt);
  });
  Object.keys(lec.concepts).forEach((c) => { if (!used.has(c)) err(lec.id + ": concept " + c + " has no questions"); });
  console.log(lec.id + ": " + lec.qs.length + " questions");
});
console.log(errors ? errors + " problem(s)" : "✓ Final review OK: " + total + " questions");
process.exit(errors ? 1 : 0);
