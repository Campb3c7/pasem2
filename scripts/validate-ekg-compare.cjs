#!/usr/bin/env node
/* Validates data/ekg-compare.js against data/rhythm-strips-ekg.js. Run: node scripts/validate-ekg-compare.cjs */
"use strict";
const path = require("path");
global.window = {};
require(path.join(__dirname, "..", "data", "rhythm-synth.js"));
require(path.join(__dirname, "..", "data", "rhythm-strips-ekg.js"));
require(path.join(__dirname, "..", "data", "ekg-compare.js"));
const data = window.EKG_COMPARE, rhythms = {};
window.EKG_RHYTHMS.groups.forEach((g) => g.rhythms.forEach((r) => { rhythms[r.id] = r; }));
const errors = [], ids = new Set();
for (const row of data.chart) {
  if (!/^sg-[a-z0-9-]+$/.test(row.id) || ids.has(row.id)) errors.push("bad or duplicate row id " + row.id);
  ids.add(row.id);
  if (row.cells.length !== data.columns.length) errors.push(row.id + ": needs " + data.columns.length + " cells");
}
// "Name the row" shows the first 6 columns: no two rows may match there.
const sigs = {};
for (const row of data.chart) { const s = row.cells.slice(0, 6).join("|"); if (sigs[s]) errors.push(row.id + " and " + sigs[s] + " have the same first 6 columns"); sigs[s] = row.id; }
for (const pair of data.pairs) {
  if (!/^lk-[a-z0-9-]+$/.test(pair.id) || ids.has(pair.id)) errors.push("bad or duplicate pair id " + pair.id);
  ids.add(pair.id);
  if (pair.ids.length < 2 || pair.ids.length > 4) errors.push(pair.id + ": needs 2-4 rhythms");
  pair.ids.forEach((id) => { if (!rhythms[id]) errors.push(pair.id + ": unknown rhythm " + id); });
  pair.rows.forEach((row) => { if (row.length !== pair.ids.length + 1) errors.push(pair.id + ": row '" + row[0] + "' needs " + (pair.ids.length + 1) + " cells"); });
  if (!pair.ask || !pair.why) errors.push(pair.id + ": needs ask and why");
  pair.ids.forEach((id) => { if (rhythms[id]) for (let s = 1; s <= 5; s++) window.RhythmSynth.make(rhythms[id].gen, s); });
}
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log("EKG compare OK: " + data.chart.length + " chart rows, " + data.pairs.length + " look-alike sets");
