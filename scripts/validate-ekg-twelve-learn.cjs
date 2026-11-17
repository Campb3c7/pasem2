// Checks data/ekg-twelve-learn.js ("Learn the 12-lead"): unique t12-* lesson ids, valid parts, pages with
// titles, text and at least one figure, figure specs that point at real cases / leads / patterns and draw
// without errors, 3+ checks each with 3 distinct wrong answers and a one-sentence why, and practice buttons
// whose launch ids exist in index.html.
const fs = require("fs"), path = require("path");
global.window = {};
const root = path.join(__dirname, "..");
["data/ekg-twelve-synth.js", "data/ekg-exam.js", "data/ekg-patterns.js", "data/ekg-mi.js", "data/ekg-twelve-learn.js", "ekg-twelve-learn.js"].forEach((f) => {
  // eslint-disable-next-line no-eval
  (0, eval)(fs.readFileSync(path.join(root, f), "utf8"));
});
const data = window.EKG_TWELVE_LEARN, figs = window.EKGTwelveFigures;
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const errors = [];
const err = (m) => errors.push(m);
if (!data || !figs) { console.error("EKG_TWELVE_LEARN or EKGTwelveFigures missing"); process.exit(1); }
const cases = new Set(window.EKG_EXAM.twelve.cases.map((c) => c.id));
const patterns = new Set(window.EKG_PATTERNS.patterns.map((p) => p.id));
const damage = new Set(window.EKG_MI.damage.map((d) => d.id));
const LEADS = new Set(["I", "II", "III", "aVR", "aVL", "aVF", "V1", "V2", "V3", "V4", "V5", "V6", "V7", "V8", "V9"]);
const ELECTRODES = new Set(["RA", "LA", "RL", "LL", "V1", "V2", "V3", "V4", "V5", "V6"]);
const parts = new Set(data.parts.map((p) => p.id));
const ids = new Set();
let pages = 0, figures = 0, checks = 0;

function leadList(where, list) { (list || []).forEach((l) => { if (!LEADS.has(l)) err(where + ": unknown lead " + l); }); }
function checkFig(where, f) {
  figures += 1;
  if (figs.types.indexOf(f.type) < 0) return err(where + ": unknown figure type " + f.type);
  if (f.case && !cases.has(f.case)) err(where + ": unknown case " + f.case);
  if (f.type === "pattern" && !patterns.has(f.id)) err(where + ": unknown pattern " + f.id);
  if (f.type === "damage" && !damage.has(f.id)) err(where + ": unknown damage id " + f.id);
  if (f.type === "body") (f.hi || []).forEach((e) => { if (!ELECTRODES.has(e)) err(where + ": unknown electrode " + e); });
  if (f.type === "heart" || f.type === "map") (f.hi || []).forEach((w) => { if (!figs.walls[w]) err(where + ": unknown wall " + w); });
  leadList(where, f.leads); leadList(where, f.hi && Array.isArray(f.hi) && f.type === "ekg" ? f.hi : []);
  (f.groups || []).forEach((g) => leadList(where, g.leads));
  ["hi", "notes", "measure"].forEach((k) => { if (f[k] && !Array.isArray(f[k])) leadList(where, Object.keys(f[k])); });
  if (f.type === "pattern" || f.type === "damage") return; // drawn by other tools in the browser
  let out = "";
  try { out = figs.figure(f); } catch (e) { return err(where + ": figure threw " + e.message); }
  if (!out || out.length < 80) err(where + ": figure drew nothing");
}

data.lessons.forEach((l, li) => {
  const at = "lesson " + (li + 1) + " (" + l.id + ")";
  if (!/^t12-[a-z0-9-]+$/.test(l.id)) err(at + ": id must be t12-*");
  if (ids.has(l.id)) err(at + ": duplicate id"); ids.add(l.id);
  if (!parts.has(l.part)) err(at + ": unknown part " + l.part);
  if (!l.title || !l.goal) err(at + ": needs title and goal");
  if (!l.pages || l.pages.length < 3) err(at + ": needs 3+ pages");
  (l.pages || []).forEach((p, pi) => {
    pages += 1;
    const w = at + " page " + (pi + 1);
    if (!p.title || !p.html) err(w + ": needs title and html");
    if (!p.fig) err(w + ": needs a figure");
    [].concat(p.fig || []).forEach((f) => checkFig(w, f));
  });
  if (!l.checks || l.checks.length < 3) err(at + ": needs 3+ checks");
  (l.checks || []).forEach((c, ci) => {
    checks += 1;
    const w = at + " check " + (ci + 1);
    if (!c.prompt || !c.answer || !c.why) err(w + ": needs prompt, answer, why");
    if (!Array.isArray(c.wrong) || c.wrong.length !== 3 || new Set(c.wrong.concat(c.answer)).size !== 4) err(w + ": needs 3 distinct wrong answers");
    if (c.why && (c.why.split(/[.!?](\s|$)/).filter((x) => x && x.trim()).length > 1 || c.why.length > 170)) err(w + ": why should be one short sentence");
  });
  if (!l.remember || l.remember.length < 2) err(at + ": needs a remember list");
  (l.practice || []).forEach((p) => {
    if (p.launch && html.indexOf('id="' + p.launch + '"') < 0) err(at + ": practice launch id not in index.html: " + p.launch);
  });
});
["ekg-twelve-learn-launch", "ekg-twelve-learn-view", "ekg-twelve-learn-content", "ekg-twelve-learn-back", "ekg-twelve-learn-status"].forEach((id) => {
  if (html.indexOf('id="' + id + '"') < 0) err("index.html is missing #" + id);
});

if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log("Learn the 12-lead OK: " + data.lessons.length + " lessons, " + pages + " pages, " + figures + " figures, " + checks + " checks.");
