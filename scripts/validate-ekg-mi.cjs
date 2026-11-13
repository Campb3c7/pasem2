#!/usr/bin/env node
/* Validates data/ekg-mi.js and data/ekg-axis.js. Run: node scripts/validate-ekg-mi.cjs */
"use strict";
const path = require("path");
global.window = {};
require(path.join(__dirname, "..", "data", "ekg-mi.js"));
require(path.join(__dirname, "..", "data", "ekg-axis.js"));
const mi = window.EKG_MI, axis = window.EKG_AXIS, errors = [], ids = new Set();
const leads = Object.keys(mi.leads);
mi.layout.flat().forEach((l) => { if (!mi.leads[l]) errors.push("layout lead " + l + " missing"); });
if (mi.layout.flat().length !== 12) errors.push("layout needs 12 leads");
leads.forEach((l) => { if (!mi.views[mi.leads[l].view]) errors.push(l + ": unknown view"); });
for (const w of mi.walls) {
  if (ids.has(w.id)) errors.push("duplicate " + w.id); ids.add(w.id);
  w.stLeads.concat(w.recipLeads).forEach((l) => { if (!mi.leads[l]) errors.push(w.id + ": unknown lead " + l); });
  if (mi.arteries.indexOf(w.artery) < 0) errors.push(w.id + ": artery not in the choices");
  if (!w.posterior && !w.stLeads.length) errors.push(w.id + ": needs ST leads");
}
if (new Set(mi.recipChoices).size !== mi.recipChoices.length) errors.push("reciprocal answers must be unique");
for (const d of mi.damage) { if (ids.has(d.id)) errors.push("duplicate " + d.id); ids.add(d.id); if (["Ischemia", "Injury", "Infarction", "Normal"].indexOf(d.answer) < 0) errors.push(d.id + ": bad answer"); }
const quads = new Set(axis.quadrants.map((q) => q.id));
for (const q of axis.quadrants) {
  const [a, b] = q.draw; const mid = (a + b) / 2, I = Math.cos(mid * Math.PI / 180) > 0 ? "+" : "−", F = Math.sin(mid * Math.PI / 180) > 0 ? "+" : "−";
  [a, b].forEach((x) => { const i2 = Math.cos(x * Math.PI / 180) > 0 ? "+" : "−", f2 = Math.sin(x * Math.PI / 180) > 0 ? "+" : "−"; if (i2 !== q.leadI || f2 !== q.aVF) errors.push(q.id + ": draw range leaves its quadrant"); });
  if (I !== q.leadI || F !== q.aVF) errors.push(q.id + ": signs don't match");
}
for (const c of axis.causes) { if (ids.has(c.id)) errors.push("duplicate " + c.id); ids.add(c.id); if (!quads.has(c.answer)) errors.push(c.id + ": bad answer"); }
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log("EKG MI locator OK: " + mi.walls.length + " walls, " + mi.damage.length + " damage patterns; axis OK: " + axis.causes.length + " causes");
