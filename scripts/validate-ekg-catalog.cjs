// Validates data/ekg-catalog.js: ids, entry fields, and that every example resolves to a real image.
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
global.window = {};
for (const f of ["data/ekg-workbook.js", "data/ekg-examplify.js", "data/ekg-catalog.js"]) require(path.join(root, f));
const C = window.EKG_CATALOG, WB = window.EKG_WORKBOOK, EX = window.EKG_EXAMPLIFY;
const errors = [];
const wb = new Set(WB.strips.map((s) => s.id)), ex = new Set(EX.questions.map((q) => q.id));
const ids = new Set();
let entries = 0, examples = 0, empty = [];
for (const [n, d] of Object.entries(C.deck)) {
  if (!["strip", "12"].includes(d.fmt)) errors.push(`deck ${n}: fmt`);
  if (!d.title || !d.note) errors.push(`deck ${n}: title/note`);
  const img = path.join(root, "images/ekg-catalog", "deck-" + String(n).padStart(3, "0") + ".webp");
  if (!fs.existsSync(img)) errors.push(`deck ${n}: missing ${img}`);
}
const usedDeck = new Set();
for (const part of C.parts) for (const g of part.groups) for (const e of g.entries) {
  entries += 1;
  if (!/^cat-[a-z0-9-]+$/.test(e.id)) errors.push(`bad id ${e.id}`);
  if (ids.has(e.id)) errors.push(`duplicate id ${e.id}`);
  ids.add(e.id);
  if (!e.name || !e.what || !Array.isArray(e.look) || !e.look.length) errors.push(`${e.id}: name/what/look`);
  const seen = new Set();
  for (const x of e.examples) {
    examples += 1;
    if (seen.has(x)) errors.push(`${e.id}: duplicate example ${x}`);
    seen.add(x);
    if (/^wb-/.test(x)) { if (!wb.has(x)) errors.push(`${e.id}: unknown ${x}`); else if (!fs.existsSync(path.join(root, "images/ekg-workbook", x + ".webp"))) errors.push(`${x}: no image`); }
    else if (/^exq-/.test(x)) { if (!ex.has(x)) errors.push(`${e.id}: unknown ${x}`); }
    else if (/^deck-(\d+)$/.test(x)) { const n = x.slice(5); if (!C.deck[n]) errors.push(`${e.id}: unknown ${x}`); usedDeck.add(n); }
    else errors.push(`${e.id}: bad example ${x}`);
  }
  if (!e.examples.length) empty.push(e.id);
}
for (const n of Object.keys(C.deck)) if (!usedDeck.has(n)) errors.push(`deck ${n} is never used`);
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`EKG catalog OK: ${entries} findings, ${examples} example slots, ${Object.keys(C.deck).length} deck pictures; no picture yet: ${empty.join(", ")}`);
