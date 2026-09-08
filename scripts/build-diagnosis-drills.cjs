const fs = require("fs");
const path = require("path");

const sources = [
  {
    id: "classification",
    title: "Disease Classification",
    description: "Identify the diagnosis or condition from its organism, disease class, or defining category.",
    path: process.argv[2]
  },
  {
    id: "hallmarks",
    title: "Hallmark Presentation",
    description: "Identify the diagnosis from its hallmark symptoms and clinical presentation.",
    path: process.argv[3]
  },
  {
    id: "treatment",
    title: "Treatment Match",
    description: "Identify the diagnosis or clinical scenario that matches the treatment plan.",
    path: process.argv[4]
  },
  {
    id: "diagnostics",
    title: "Diagnostic Workup",
    description: "Identify the diagnosis or condition that matches the diagnostic test, workup, or defining result.",
    path: process.argv[5]
  }
];

if (sources.some((source) => !source.path)) {
  throw new Error("Pass the classification, hallmark, treatment, and diagnostic-workup text files in that order.");
}

function parse(source) {
  const lines = fs.readFileSync(source.path, "utf8").split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
  return lines.map((line, index) => {
    const separator = line.indexOf(";");
    if (separator < 1 || separator === line.length - 1) {
      throw new Error(`${source.id} line ${index + 1} is not a term; description pair.`);
    }
    return {
      id: `${source.id}-${String(index + 1).padStart(3, "0")}`,
      term: line.slice(0, separator).trim(),
      description: line.slice(separator + 1).trim()
    };
  });
}

const sections = sources.map((source) => ({
  id: source.id,
  title: source.title,
  description: source.description,
  items: parse(source)
}));

const output = `(function () {\n  "use strict";\n  window.DIAGNOSIS_DRILL_SECTIONS = ${JSON.stringify(sections, null, 2)};\n}());\n`;
fs.writeFileSync(path.join(__dirname, "..", "data", "diagnosis-drills.js"), output, "utf8");
console.log(sections.map((section) => `${section.title}: ${section.items.length}`).join("\n"));
