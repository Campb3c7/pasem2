// Checks data/brands-cardio-part-3.js: unique ids, every medication id exists,
// no brand or generic name used twice (so multiple-choice answers are unambiguous).
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const ctx = { window: {} }; vm.createContext(ctx);
const index = fs.readFileSync(path.join(root, "index.html"), "utf8");
const files = ["data/disease-helpers.js", "data/medication-helpers.js"]
  .concat((index.match(/data\/meds-cardio3-[a-z-]+\.js/g) || []))
  .concat(["data/medications-cardio-part-3.js", "data/brands-cardio-part-3.js"]);
files.forEach((f) => vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f }));
const meds = new Set();
ctx.window.CARDIO_PART3_MEDICATIONS.lectures.forEach((g) => g.diseases.forEach((d) => meds.add(d.id)));
const errors = [];
const ids = new Set(), names = new Map();
const items = ctx.window.CARDIO3_BRANDS.items;
items.forEach((it) => {
  if (!/^br-[a-z0-9-]+$/.test(it.id)) errors.push("bad id " + it.id);
  if (ids.has(it.id)) errors.push("duplicate id " + it.id); ids.add(it.id);
  if (!it.generic || !it.brands.length || !it.cls) errors.push(it.id + ": missing generic/brands/class");
  if (!it.meds.length) errors.push(it.id + ": no medication");
  it.meds.forEach((m) => { if (!meds.has(m)) errors.push(it.id + ": unknown medication " + m); });
  [it.generic].concat(it.brands).forEach((n) => {
    const k = n.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (names.has(k)) errors.push(`"${n}" used by ${names.get(k)} and ${it.id}`); names.set(k, it.id);
  });
});
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log(`Brands OK: ${items.length} generics, ${items.reduce((n, it) => n + it.brands.length, 0)} brand names.`);
