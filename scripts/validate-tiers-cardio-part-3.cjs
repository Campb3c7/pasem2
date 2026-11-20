// Checks Cardio Part 3 Tiers data: chunk ids, story pages, remember lists, questions (3 distinct wrong answers, a why),
// figure types that exist, and unique prompts within each lecture.
const fs = require("fs"), vm = require("vm"), path = require("path");
const root = path.join(__dirname, "..");
const ctx = { window: {} }; vm.createContext(ctx);
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const files = [...html.matchAll(/src="(data\/tiers-cardio[^"]+)"/g)].map((m) => m[1]);
files.forEach((f) => vm.runInContext(fs.readFileSync(path.join(root, f), "utf8"), ctx, { filename: f }));
const T = ctx.window.CARDIO3_TIERS;
// Figure types: the Cardio 3 kit (FIGS map in cardio3-learn.js) + tiers-figures.js.
const kit = fs.readFileSync(path.join(root, "cardio3-learn.js"), "utf8").match(/var FIGS = \{([\s\S]*?)\};/)[1];
const types = new Set([...kit.matchAll(/(\w+):\s*\w+Figure/g)].map((m) => m[1]));
[...fs.readFileSync(path.join(root, "tiers-figures.js"), "utf8").matchAll(/F\.(\w+) = function/g)].forEach((m) => types.add(m[1]));
let errors = 0, chunks = 0, pages = 0, qs = 0, filled = 0;
const bad = (m) => { errors += 1; console.error("✗ " + m); };
const figs = (f, w) => { if (!f) return; (Array.isArray(f) ? f : [f]).forEach((x) => { if (!types.has(x.type)) bad(w + ": unknown figure type " + x.type); }); };
Object.keys(T.units).forEach((k) => {
  const u = T.units[k], ids = new Set(), prompts = new Set();
  if (!Array.isArray(u.chunks) || !u.chunks.length) return bad(k + ": no chunks");
  if (!u.placeholder) filled += 1;
  u.chunks.forEach((ch) => {
    const w = k + "|" + ch.id; chunks += 1;
    if (!/^[a-z0-9-]+$/.test(ch.id) || ids.has(ch.id)) bad(w + ": bad or duplicate chunk id"); ids.add(ch.id);
    if (!ch.title) bad(w + ": no title");
    if (!(ch.pages || []).length) bad(w + ": no pages");
    (ch.pages || []).forEach((p, i) => { pages += 1; if (!p.title || !p.html) bad(w + " page " + i + ": needs title and html"); if (!u.placeholder && !p.fig) bad(w + " page " + i + ": no picture"); figs(p.fig, w + " page " + i); });
    if (u.placeholder) return;
    if (!ch.goal) bad(w + ": no goal");
    if (!(ch.remember || []).length) bad(w + ": no remember list");
    if (!(ch.check || []).length) bad(w + ": no key questions");
    [].concat(ch.check || [], ch.bank || []).forEach((q, i) => {
      qs += 1;
      const all = [q.answer].concat(q.wrong || []);
      if ((q.wrong || []).length !== 3 || new Set(all).size !== 4) bad(w + " q" + i + ": needs 3 distinct wrong answers");
      if (!q.why || q.why.trim() === q.answer || !/[.!?)]$/.test(q.why.trim())) bad(w + " q" + i + ": needs a one-sentence why");
      if (prompts.has(q.prompt)) bad(w + ": duplicate prompt " + q.prompt); prompts.add(q.prompt);
    });
  });
});
console.log(errors ? errors + " problem(s)" : "✓ Tiers OK: " + filled + " lecture-tiers written, " + chunks + " chunks, " + pages + " pages, " + qs + " questions");
process.exit(errors ? 1 : 0);
