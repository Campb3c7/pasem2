const fs = require("fs");
const vm = require("vm");
const path = require("path");

const context = { window: {} };
vm.createContext(context);
vm.runInContext(fs.readFileSync(path.join(__dirname, "..", "data", "diagnosis-drills.js"), "utf8"), context);

const sections = context.window.DIAGNOSIS_DRILL_SECTIONS;
if (!Array.isArray(sections) || sections.length !== 3) throw new Error("Expected exactly three diagnosis drill sections.");

const expected = { classification: 200, hallmarks: 200, treatment: 268 };
const ids = new Set();
sections.forEach((section) => {
  if (!expected[section.id]) throw new Error(`Unexpected section: ${section.id}`);
  if (!Array.isArray(section.items) || section.items.length !== expected[section.id]) {
    throw new Error(`${section.id} has ${section.items && section.items.length} items; expected ${expected[section.id]}.`);
  }
  section.items.forEach((item) => {
    if (!item.id || !item.term || !item.description) throw new Error(`Incomplete item in ${section.id}.`);
    if (ids.has(item.id)) throw new Error(`Duplicate item id: ${item.id}`);
    ids.add(item.id);
  });
});

console.log(JSON.stringify({
  sections: sections.length,
  items: ids.size,
  bySection: Object.fromEntries(sections.map((section) => [section.title, section.items.length]))
}, null, 2));
