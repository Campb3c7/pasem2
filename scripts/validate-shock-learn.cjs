// Checks data/shock-learn.js: unique shl-* lesson ids, valid parts, pages with titles and text, known figure
// types, 3+ checks each with 3 distinct wrong answers, practice buttons whose launch ids exist in index.html,
// and objective links that point at real objectives of the Shock, Pressors & Fluids lecture.
const fs = require("fs"), path = require("path");
global.window = {};
const root = path.join(__dirname, "..");
["data/shock-learn.js", "data/shock-pressors-fluids.js"].forEach((f) => require(path.join(root, f)));
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const L = window.SHOCK_LEARN, errors = [];
const objectives = new Set(window.SHOCK_PRESSORS_FLUIDS_OBJECTIVES.map((o) => o.id));
const parts = new Set(L.parts.map((p) => p.id)), ids = new Set();
const FIG = new Set(["circuit", "equation", "ventricle", "starling", "receptors", "pressors", "dopamine", "mapcalc", "phases", "cycle", "flow", "tiles", "shocktable", "iabp", "targets", "compartments", "capillary", "tonicity"]);
const STATES = new Set(["normal", "cardiogenic", "hypovolemic", "distributive", "obstructive"]);
L.lessons.forEach((l) => {
  if (ids.has(l.id)) errors.push(l.id + ": duplicate id"); ids.add(l.id);
  if (!/^shl-[a-z0-9-]+$/.test(l.id)) errors.push(l.id + ": id should be shl-*");
  if (!parts.has(l.part)) errors.push(l.id + ": unknown part " + l.part);
  if (!l.title || !l.goal || !l.pages.length || !l.remember.length) errors.push(l.id + ": missing title, goal, pages or remember");
  l.pages.forEach((pg, i) => {
    if (!pg.title || !pg.html) errors.push(l.id + " page " + (i + 1) + ": missing title or html");
    [].concat(pg.fig || []).forEach((f) => {
      if (!FIG.has(f.type)) errors.push(l.id + " page " + (i + 1) + ": unknown figure " + f.type);
      if (f.type === "circuit" && f.state && !STATES.has(f.state)) errors.push(l.id + ": unknown circuit state " + f.state);
      if ((f.type === "flow" && !(f.steps || []).length) || ((f.type === "tiles") && !(f.items || []).length) || (f.type === "cycle" && (f.nodes || []).length < 3)) errors.push(l.id + " page " + (i + 1) + ": empty " + f.type);
    });
  });
  if (l.checks.length < 3) errors.push(l.id + ": needs at least 3 checks");
  l.checks.forEach((c, i) => {
    const all = [c.answer].concat(c.wrong);
    if (c.wrong.length !== 3 || new Set(all).size !== 4 || !c.why) errors.push(l.id + " check " + (i + 1) + ": needs 3 distinct wrong answers and a why");
  });
  (l.practice || []).forEach((p) => {
    if (!p.label || !p.note) errors.push(l.id + ": practice needs label and note");
    if (p.objective) {
      if (!objectives.has(p.objective.id)) errors.push(l.id + ": unknown objective " + p.objective.id);
      if (["learn", "test", "apply"].indexOf(p.objective.mode) < 0) errors.push(l.id + ": bad mode " + p.objective.mode);
    } else if (!html.includes('id="' + p.launch + '"')) errors.push(l.id + ": practice launch " + p.launch + " not in index.html");
  });
});
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log("Shock lessons OK: " + L.lessons.length + " lessons, " + L.lessons.reduce((n, l) => n + l.pages.length, 0) + " pages, " + L.lessons.reduce((n, l) => n + l.checks.length, 0) + " checks.");
