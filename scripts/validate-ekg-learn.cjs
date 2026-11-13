// Checks data/ekg-learn.js: unique lesson ids, valid parts, pages with titles and text, figure specs that
// point at real rhythms / workbook strips, 3+ checks each with 3 distinct wrong answers, and practice
// buttons whose launch ids exist in index.html.
const fs = require("fs"), path = require("path");
global.window = {};
const root = path.join(__dirname, "..");
["data/ekg-learn.js", "data/rhythm-strips-ekg.js", "data/ekg-workbook.js", "data/ekg-mi.js", "data/ekg-patterns.js"].forEach((f) => require(path.join(root, f)));
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const toolJs = ["ekg-workbook.js", "rhythm-strips.js", "ekg-compare.js", "ekg-axis.js", "ekg-mi.js", "ekg-patterns.js", "ekg-mock.js"].map((f) => fs.readFileSync(path.join(root, f), "utf8")).join("\n");
const L = window.EKG_LEARN, errors = [];
const rhythms = new Set(); window.EKG_RHYTHMS.groups.forEach((g) => g.rhythms.forEach((r) => rhythms.add(r.id)));
const strips = new Set(window.EKG_WORKBOOK.strips.map((s) => s.id));
const parts = new Set(L.parts.map((p) => p.id)), ids = new Set();
const FIG = new Set(["heart", "sync", "beat", "paper", "rate", "strip", "workbook", "twelve", "leadmap", "axis", "pattern", "damage"]);
const walls = new Set(window.EKG_MI.walls.map((w) => w.id)), dmg = new Set(window.EKG_MI.damage.map((d) => d.id)), pats = new Set(window.EKG_PATTERNS.patterns.map((p) => p.id));
L.lessons.forEach((l) => {
  if (ids.has(l.id)) errors.push(l.id + ": duplicate id"); ids.add(l.id);
  if (!/^learn-[a-z0-9-]+$/.test(l.id)) errors.push(l.id + ": id should be learn-*");
  if (!parts.has(l.part)) errors.push(l.id + ": unknown part " + l.part);
  if (!l.title || !l.goal || !l.pages.length || !l.remember.length) errors.push(l.id + ": missing title, goal, pages or remember");
  l.pages.forEach((pg, i) => {
    if (!pg.title || !pg.html) errors.push(l.id + " page " + (i + 1) + ": missing title or html");
    [].concat(pg.fig || []).forEach((f) => {
      if (!FIG.has(f.type)) errors.push(l.id + " page " + (i + 1) + ": unknown figure " + f.type);
      if (f.type === "strip" && !rhythms.has(f.rhythm)) errors.push(l.id + ": unknown rhythm " + f.rhythm);
      if (f.type === "workbook" && !strips.has(f.id)) errors.push(l.id + ": unknown workbook strip " + f.id);
      if (f.type === "twelve" && f.wall && !walls.has(f.wall)) errors.push(l.id + ": unknown wall " + f.wall);
      if (f.type === "damage" && !dmg.has(f.id)) errors.push(l.id + ": unknown damage " + f.id);
      if (f.type === "pattern" && !pats.has(f.id)) errors.push(l.id + ": unknown pattern " + f.id);
    });
  });
  if (l.checks.length < 3) errors.push(l.id + ": needs at least 3 checks");
  l.checks.forEach((c, i) => {
    const all = [c.answer].concat(c.wrong);
    if (c.wrong.length !== 3 || new Set(all).size !== 4 || !c.why) errors.push(l.id + " check " + (i + 1) + ": needs 3 distinct wrong answers and a why");
  });
  (l.practice || []).forEach((p) => {
    if (!html.includes('id="' + p.launch + '"')) errors.push(l.id + ": practice launch " + p.launch + " not in index.html");
    if (p.then && !toolJs.includes('id="' + p.then + '"')) errors.push(l.id + ": practice target " + p.then + " not found in the tools");
  });
});
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log("EKG lessons OK: " + L.lessons.length + " lessons, " + L.lessons.reduce((n, l) => n + l.pages.length, 0) + " pages, " + L.lessons.reduce((n, l) => n + l.checks.length, 0) + " checks.");
