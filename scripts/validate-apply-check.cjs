// Validates data/apply-check-cardio-part-3.js (Final check: apply it).
const fs = require("fs"), path = require("path"), vm = require("vm");
const ctx = { window: {} }; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(__dirname, "../data/apply-check-cardio-part-3.js"), "utf8"), ctx);
const d = ctx.window.CARDIO3_APPLY_CHECK; const errs = []; let n = 0; const prompts = new Set();
d.lectures.forEach((l) => l.qs.forEach((q, i) => {
  n++; const id = l.id + "|" + i;
  ["topic", "kind", "prompt", "answer", "why", "key"].forEach((k) => { if (!q[k] || typeof q[k] !== "string") errs.push(id + ": missing " + k); });
  if (!Array.isArray(q.wrong) || q.wrong.length !== 3) errs.push(id + ": needs 3 wrong");
  const all = [q.answer].concat(q.wrong || []); if (new Set(all).size !== all.length) errs.push(id + ": duplicate choice");
  if (prompts.has(q.prompt)) errs.push(id + ": duplicate prompt"); prompts.add(q.prompt);
  if (q.prompt.length > 260) errs.push(id + ": prompt too long (" + q.prompt.length + ")");
}));
if (errs.length) { console.error(errs.join("\n")); process.exit(1); }
console.log("OK: " + n + " questions in " + d.lectures.length + " lectures");
