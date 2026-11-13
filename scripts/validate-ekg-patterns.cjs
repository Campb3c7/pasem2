#!/usr/bin/env node
/* Validates data/ekg-patterns.js. Run: node scripts/validate-ekg-patterns.cjs */
"use strict";
const path = require("path");
global.window = {};
require(path.join(__dirname, "..", "data", "ekg-patterns.js"));
const data = window.EKG_PATTERNS, errors = [], ids = new Set(), names = new Set();
const groups = new Set(data.groups.map((g) => g.id));
for (const p of data.patterns) {
  if (!/^pt-[a-z0-9-]+$/.test(p.id) || ids.has(p.id)) errors.push("bad or duplicate id " + p.id);
  ids.add(p.id);
  if (names.has(p.name)) errors.push("duplicate name " + p.name);
  names.add(p.name);
  if (!groups.has(p.group)) errors.push(p.id + ": unknown group");
  if (!p.leads.length || !p.look.length || !p.why) errors.push(p.id + ": needs leads, look and why");
}
for (const p of data.patterns) {
  if (p.confuse.length !== 3) errors.push(p.id + ": needs 3 look-alikes");
  p.confuse.forEach((id) => { if (!ids.has(id) || id === p.id) errors.push(p.id + ": bad look-alike " + id); });
  // Reverse quiz: each look-alike needs a finding the pattern doesn't share.
  p.confuse.forEach((id) => { const o = data.patterns.find((x) => x.id === id); if (o && !o.look.some((x) => p.look.indexOf(x) < 0)) errors.push(p.id + ": " + id + " has no distinct finding"); });
}
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log("EKG patterns OK: " + data.patterns.length + " patterns in " + data.groups.length + " groups");
