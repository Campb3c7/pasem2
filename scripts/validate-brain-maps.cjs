// Checks Brain maps data (data/brain-maps*.js listed in index.html): map ids, layouts, every box has a label,
// known kinds/colors, "go" links to maps in the same lecture, slide numbers inside the deck, figure types that exist.
const fs = require("fs"), vm = require("vm"), path = require("path");
const root = path.join(__dirname, "..");
const ctx = { window: {} }; ctx.window.window = ctx.window; vm.createContext(ctx);
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const files = [...html.matchAll(/src="(data\/brain-maps[^"]*)"/g)].map((m) => m[1]);
if (!files.length) { console.error("✗ no data/brain-maps*.js in index.html"); process.exit(1); }
files.forEach((f) => vm.runInContext("var window = this.window; var BrainMaps = window.BrainMaps;\n" + fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f }));
const kit = fs.readFileSync(path.join(root, "cardio3-learn.js"), "utf8").match(/var FIGS = \{([\s\S]*?)\};/)[1];
const types = new Set([...kit.matchAll(/(\w+):\s*\w+Figure/g)].map((m) => m[1]).concat(["bm-nest"]));
[...fs.readFileSync(path.join(root, "tiers-figures.js"), "utf8").matchAll(/F\.(\w+) = function/g)].forEach((m) => types.add(m[1]));
const engine = fs.readFileSync(path.join(root, "brain-maps.js"), "utf8");
const COLORS = new Set([...engine.match(/var COLORS = \{([^}]*)\}/)[1].matchAll(/(\w+):/g)].map((m) => m[1]));
const KINDS = new Set(["key", "bad", "good", "q", "case", "num"]);
const OPTS = new Set(["t", "i", "d", "s", "k", "a", "col", "l", "go", "fig", "c", "vs", "rail", "x", "j", "side"]);
let errors = 0, maps = 0, boxes = 0, whys = 0;
const bad = (m) => { errors += 1; console.error("✗ " + m); };
Object.keys(ctx.window.BRAIN_MAPS).forEach((course) => {
  ctx.window.BRAIN_MAPS[course].lectures.forEach((lec) => {
    const ids = new Set(lec.maps.map((m) => m.id));
    if (ids.size !== lec.maps.length) bad(lec.id + ": duplicate map ids");
    lec.maps.forEach((map) => {
      const w = lec.id + "|" + map.id; maps += 1;
      if (!/^[a-z0-9-]+$/.test(map.id)) bad(w + ": bad id");
      if (!map.title || !map.ask) bad(w + ": needs title and ask");
      const figs = (f, where) => { if (!f) return; (Array.isArray(f) ? f : [f]).forEach((x) => { if (!types.has(x.type)) bad(where + ": unknown figure type " + x.type); }); };
      figs(map.top, w + " top"); figs(map.centerFig, w + " center");
      const walk = (n, where) => {
        boxes += 1;
        if (!n || typeof n.t !== "string" || !n.t.trim()) return bad(where + ": box without a label");
        const at = where + " '" + n.t.replace(/<[^>]+>/g, "").slice(0, 40) + "'";
        Object.keys(n).forEach((k) => { if (!OPTS.has(k)) bad(at + ": unknown option " + k); });
        if (n.k && !KINDS.has(n.k)) bad(at + ": unknown kind " + n.k);
        if (n.col && !COLORS.has(n.col)) bad(at + ": unknown color " + n.col);
        if (n.go && !ids.has(n.go)) bad(at + ": go → missing map " + n.go);
        if (n.go === map.id) bad(at + ": go points to its own map");
        if (n.d) whys += 1;
        if (n.vs && (n.c || []).length !== 2) bad(at + ": vs needs exactly 2 kids");
        if (n.j && (n.c || []).length < 2) bad(at + ": a join needs a fork above it");
        if (n.s != null) String(n.s).split(/[,\s]+/).filter(Boolean).forEach((part) => part.split("-").forEach((x) => { const v = +x; if (!(v >= 1 && v <= (lec.slides || 999))) bad(at + ": slide " + x + " outside the deck"); }));
        figs(n.fig, at);
        if (n.x) walk(n.x, where + "x");
        (n.c || []).forEach((k, i) => walk(k, where + "." + i));
        if (n.j) walk(n.j, where + "j");
      };
      if (map.layout === "tree") (Array.isArray(map.tree) ? map.tree : [map.tree]).forEach((r, i) => walk(r, w + " r" + i));
      else if (map.layout === "spine") { if (!map.center || !(map.branches || []).length) bad(w + ": spine needs center + branches"); (map.branches || []).forEach((b, i) => walk(b, w + " b" + i)); }
      else bad(w + ": layout must be tree or spine");
    });
  });
});
console.log(errors ? errors + " problem(s)" : "✓ Brain maps OK: " + maps + " maps, " + boxes + " boxes, " + whys + " with a why");
process.exit(errors ? 1 : 0);
