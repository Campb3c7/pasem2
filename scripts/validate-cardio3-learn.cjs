// Checks every Cardio Part 3 "from zero" path (data/learn-<lecture>.js, window.CARDIO3_LEARN): unique lesson ids with the
// path's prefix, valid parts, pages with titles and text, known figure types, 3+ checks each with 3 distinct wrong answers
// and a why, and practice buttons that point at real objectives of that lecture (or launch ids in index.html).
const fs = require("fs"), path = require("path");
global.window = {};
const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const LECTURES = { "cardiac-surgery": ["cardiac-surgery.js", "CARDIAC_SURGERY_OBJECTIVES"], "cardiac-testing": ["cardiac-testing.js", "CARDIAC_TESTING_OBJECTIVES"], "heart-failure": ["heart-failure.js", "HEART_FAILURE_OBJECTIVES"], "cad-part-1": ["cad-part-1.js", "CAD_PART_1_OBJECTIVES"], "cad-part-2": ["cad-part-2.js", "CAD_PART_2_OBJECTIVES"], "cad-part-3": ["cad-part-3.js", "CAD_PART_3_OBJECTIVES"] };
const FIG = new Set(["coronary", "artery", "cpb", "thermo", "bars", "line", "harvest", "decide", "monitor", "eq", "flow", "tiles", "cycle", "grid", "quad", "wall", "remodel", "capcore", "balance", "diastole", "pretest",
  "vent", "starling", "perfusion", "bruce", "mphr", "duke", "rhc", "echo", "scale", "cascade", "trop", "heart", "risk", "stairs", "probe", "access", "stseg", "groin", "vent", "backup", "framingham", "ntg", "nephron"]);
const SPOTS = new Set(["lm", "ladp", "ladm", "lcx", "rca", "rcam", "pda"]);
const errors = [];
let total = { paths: 0, lessons: 0, pages: 0, checks: 0 };
Object.keys(LECTURES).forEach((lec) => {
  const file = path.join(root, "data", "learn-" + lec + ".js");
  if (!fs.existsSync(file)) return;
  require(path.join(root, "data", LECTURES[lec][0]));
  require(file);
  const P = window.CARDIO3_LEARN[lec];
  if (!P) { errors.push(lec + ": data file does not register window.CARDIO3_LEARN[\"" + lec + "\"]"); return; }
  if (!html.includes('src="data/learn-' + lec + '.js"')) errors.push(lec + ": data/learn-" + lec + ".js not loaded in index.html");
  const objectives = new Set(window[LECTURES[lec][1]].map((o) => o.id));
  const parts = new Set(P.parts.map((p) => p.id)), ids = new Set(), prompts = new Set();
  ["prefix", "short", "heading", "kicker", "card", "intro"].forEach((k) => { if (!P[k]) errors.push(lec + ": missing " + k); });
  P.lessons.forEach((l) => {
    const tag = lec + "/" + l.id;
    if (ids.has(l.id)) errors.push(tag + ": duplicate id"); ids.add(l.id);
    if (!new RegExp("^" + P.prefix + "-[a-z0-9-]+$").test(l.id)) errors.push(tag + ": id should be " + P.prefix + "-*");
    if (!parts.has(l.part)) errors.push(tag + ": unknown part " + l.part);
    if (!l.title || !l.goal || !l.pages.length || !l.remember.length) errors.push(tag + ": missing title, goal, pages or remember");
    l.pages.forEach((pg, i) => {
      if (!pg.title || !pg.html) errors.push(tag + " page " + (i + 1) + ": missing title or html");
      [].concat(pg.fig || []).forEach((f) => {
        if (!FIG.has(f.type)) errors.push(tag + " page " + (i + 1) + ": unknown figure " + f.type);
        if (f.type === "coronary") {
          (f.blocks || []).forEach((b) => { if (!SPOTS.has(b[0])) errors.push(tag + ": unknown coronary spot " + b[0]); });
          (f.stents || []).forEach((b) => { if (!SPOTS.has(b)) errors.push(tag + ": unknown stent spot " + b); });
          (f.grafts || []).forEach((g) => { if (!SPOTS.has(g[1]) || ["lita", "rita", "aorta"].indexOf(g[0]) < 0) errors.push(tag + ": bad graft " + g); });
        }
        if ((f.type === "flow" && !(f.steps || []).length) || (f.type === "tiles" && !(f.items || []).length) || (f.type === "bars" && !(f.items || []).length) || (f.type === "line" && (f.points || []).length < 2) || (f.type === "cycle" && (f.nodes || []).length < 3) || (f.type === "grid" && !(f.rows || []).length) || (f.type === "quad" && (f.cells || []).length !== 4)) errors.push(tag + " page " + (i + 1) + ": empty or malformed " + f.type);
      });
    });
    if (l.checks.length < 3) errors.push(tag + ": needs at least 3 checks");
    l.checks.forEach((c, i) => {
      const all = [c.answer].concat(c.wrong);
      if (c.wrong.length !== 3 || new Set(all).size !== 4 || !c.why) errors.push(tag + " check " + (i + 1) + ": needs 3 distinct wrong answers and a why");
      if (prompts.has(c.prompt)) errors.push(tag + ": duplicate check prompt " + c.prompt); prompts.add(c.prompt);
      if (c.why.trim() === c.answer.trim() + "." ) errors.push(tag + " check " + (i + 1) + ": why only repeats the answer");
    });
    (l.practice || []).forEach((p) => {
      if (!p.label || !p.note) errors.push(tag + ": practice needs label and note");
      if (p.objective) {
        if (p.objective.course !== "cardio-part-3" || p.objective.lecture !== lec) errors.push(tag + ": practice points at another lecture");
        if (!objectives.has(p.objective.id)) errors.push(tag + ": unknown objective " + p.objective.id);
        if (["learn", "test", "apply"].indexOf(p.objective.mode) < 0) errors.push(tag + ": bad mode " + p.objective.mode);
      } else if (!html.includes('id="' + p.launch + '"')) errors.push(tag + ": practice launch " + p.launch + " not in index.html");
    });
  });
  total.paths += 1; total.lessons += P.lessons.length;
  total.pages += P.lessons.reduce((n, l) => n + l.pages.length, 0); total.checks += P.lessons.reduce((n, l) => n + l.checks.length, 0);
  console.log("  " + lec + ": " + P.lessons.length + " lessons, " + P.lessons.reduce((n, l) => n + l.pages.length, 0) + " pages, " + P.lessons.reduce((n, l) => n + l.checks.length, 0) + " checks");
});
if (errors.length) { console.error(errors.join("\n")); process.exit(1); }
console.log("Cardio Part 3 paths OK: " + total.paths + " paths, " + total.lessons + " lessons, " + total.pages + " pages, " + total.checks + " checks.");
