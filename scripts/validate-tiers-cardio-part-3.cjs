// Checks Cardio Part 3 Tiers data: chunk ids unique, cards have html, questions have 3 distinct wrong answers and a why.
const fs = require("fs"), vm = require("vm"), path = require("path");
const ctx = { window: {} }; vm.createContext(ctx);
const html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
const files = [...html.matchAll(/src="(data\/tiers-cardio[^"]+)"/g)].map((m) => m[1]);
files.forEach((f) => vm.runInContext(fs.readFileSync(path.join(__dirname, "..", f), "utf8"), ctx, { filename: f }));
const T = ctx.window.CARDIO3_TIERS; let errors = 0, cards = 0, qs = 0;
const bad = (m) => { errors += 1; console.error("✗ " + m); };
Object.keys(T.units).forEach((k) => {
  const u = T.units[k], ids = new Set(), prompts = new Set();
  if (!Array.isArray(u.chunks) || !u.chunks.length) return bad(k + ": no chunks");
  u.chunks.forEach((ch) => {
    const w = k + "|" + ch.id;
    if (!/^[a-z0-9-]+$/.test(ch.id) || ids.has(ch.id)) bad(w + ": bad or duplicate chunk id"); ids.add(ch.id);
    if (!ch.title) bad(w + ": no title");
    if (!(ch.cards || []).length) bad(w + ": no cards");
    (ch.cards || []).forEach((c, i) => { cards += 1; if (!c.title || !c.html) bad(w + " card " + i + ": needs title and html"); });
    if (!u.placeholder && !(ch.check || []).length) bad(w + ": no key questions");
    [].concat(ch.check || [], ch.bank || []).forEach((q, i) => {
      qs += 1;
      const all = [q.answer].concat(q.wrong || []);
      if ((q.wrong || []).length !== 3 || new Set(all).size !== 4) bad(w + " q" + i + ": needs 3 distinct wrong answers");
      if (!q.why || q.why.trim() === q.answer) bad(w + " q" + i + ": needs a why sentence");
      if (!u.placeholder) { if (prompts.has(q.prompt)) bad(w + ": duplicate prompt " + q.prompt); prompts.add(q.prompt); }
    });
  });
});
console.log(errors ? errors + " problem(s)" : "✓ Tiers OK: " + Object.keys(T.units).length + " lecture-tiers, " + cards + " cards, " + qs + " questions");
process.exit(errors ? 1 : 0);
