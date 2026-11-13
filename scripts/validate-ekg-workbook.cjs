#!/usr/bin/env node
/* Validates data/ekg-workbook.js: ids, images, answer keys, choices. Run: node scripts/validate-ekg-workbook.cjs */
"use strict";
const fs = require("fs");
const path = require("path");
global.window = {};
require(path.join(__dirname, "..", "data", "ekg-workbook.js"));
const data = window.EKG_WORKBOOK;
const errors = [];
const families = new Set(data.families.map((f) => f.id));
const seen = new Set();
data.strips.forEach((s, i) => {
  const where = s.id || "strip " + i;
  if (!/^wb-\d{3}$/.test(s.id)) errors.push(where + ": bad id");
  if (seen.has(s.id)) errors.push(where + ": duplicate id");
  seen.add(s.id);
  if (!fs.existsSync(path.join(__dirname, "..", "images", "ekg-workbook", s.id + ".webp"))) errors.push(where + ": missing image");
  if (!families.has(s.family)) errors.push(where + ": unknown family " + s.family);
  if (!data.clues[s.base]) errors.push(where + ": no clue for " + s.base);
  ["reg", "p", "pr", "qrs"].forEach((k) => { if (!data.options[k].options[s[k]]) errors.push(where + ": bad " + k + " " + s[k]); });
  if (!Array.isArray(s.wrong) || s.wrong.length !== 3) errors.push(where + ": needs 3 wrong names");
  const names = [s.name].concat(s.wrong || []);
  if (new Set(names).size !== names.length) errors.push(where + ": duplicate name choices");
  if (s.rate != null && typeof s.rate !== "number") errors.push(where + ": rate must be a number or null");
  if (!s.key || !s.key.interp) errors.push(where + ": missing answer key");
});
Object.keys(data.options).forEach((k) => {
  const set = data.options[k];
  if (Object.keys(set.options).length < 4) errors.push(k + ": needs 4+ options");
  Object.entries(set.clash).forEach(([a, list]) => list.concat([a]).forEach((x) => { if (!set.options[x]) errors.push(k + ": clash names unknown " + x); }));
  Object.keys(set.options).forEach((a) => {
    const blocked = new Set((set.clash[a] || []).concat([a]));
    if (Object.keys(set.options).filter((x) => !blocked.has(x)).length < 3) errors.push(k + ": " + a + " leaves fewer than 3 distractors");
  });
});
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log("EKG workbook OK: " + data.strips.length + " strips");
