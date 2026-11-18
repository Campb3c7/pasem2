// Validates data/ekg-slides.js (EKG lecture slides quiz). Run: node scripts/validate-ekg-slides.cjs
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const ctx = { window: {} }; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(root, "data/ekg-slides.js"), "utf8"), ctx);
const d = ctx.window.EKG_SLIDES, errs = [];
if (!d || !Array.isArray(d.items) || !d.items.length) throw new Error("window.EKG_SLIDES.items missing");
const ids = new Set(), slides = new Set();
d.items.forEach((q) => {
  const at = q.id || "(no id)";
  if (!/^sl-\d+$/.test(q.id) || q.id !== "sl-" + q.slide) errs.push(at + ": id must be sl-<slide>");
  if (ids.has(q.id)) errs.push(at + ": duplicate id"); ids.add(q.id);
  if (slides.has(q.slide)) errs.push(at + ": duplicate slide"); slides.add(q.slide);
  if (q.slide < 1 || q.slide > 283) errs.push(at + ": slide out of range");
  if (["strip", "12"].indexOf(q.fmt) < 0) errs.push(at + ": fmt must be strip or 12");
  if (!fs.existsSync(path.join(root, q.image))) errs.push(at + ": missing image " + q.image);
  ["label", "question", "answer", "why"].forEach((k) => { if (!q[k] || typeof q[k] !== "string") errs.push(at + ": missing " + k); });
  if (!Array.isArray(q.wrong) || q.wrong.length !== 3) errs.push(at + ": needs exactly 3 wrong choices");
  const all = [q.answer].concat(q.wrong || []).map((s) => String(s).toLowerCase());
  if (new Set(all).size !== all.length) errs.push(at + ": choices must be distinct");
  if (q.why && (q.why.split(/[.!?](\s|$)/).filter((s) => s && s.trim()).length > 1 || !/[.!?]$/.test(q.why))) errs.push(at + ": why must be one sentence");
  if (q.why && q.why.toLowerCase().trim() === String(q.answer).toLowerCase().trim()) errs.push(at + ": why repeats the answer");
});
(d.parts || []).forEach((p) => { if (!(p.from <= p.to)) errs.push("part " + p.title + ": bad range"); });
d.items.forEach((q) => { if (!(d.parts || []).some((p) => q.slide >= p.from && q.slide <= p.to)) errs.push(q.id + ": not in any part"); });
if (errs.length) { console.error(errs.join("\n")); process.exit(1); }
console.log("EKG slides OK: " + d.items.length + " slides, " + d.parts.length + " parts");
