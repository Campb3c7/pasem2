#!/usr/bin/env node
/* Validates the Slide-by-slide study data: every slide of each deck appears exactly once, in slide order, with a picture
   and text; questions have 3 unique wrong answers, a one-sentence why, and unique prompts per lecture. Final tests (data/final-<lecture>.js) and Apply finals (data/apply-<lecture>.js) are checked the same way and must touch every LO. */
const fs = require("fs"), path = require("path"), vm = require("vm");
const root = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(root, "index.html"), "utf8");
const files = [...html.matchAll(/<script src="(data\/(?:slide-study|slide-text-[^"]+|slides-[^"]+|final-[^"]+|apply-[^"]+)\.js)"><\/script>/g)].map((m) => m[1]);
const ctx = { window: {} }; ctx.window.window = ctx.window; vm.createContext(ctx);
files.forEach((f) => { vm.runInContext(fs.readFileSync(path.join(root, f), "utf8").replace(/SlideStudy\./g, "window.SlideStudy."), ctx, { filename: f }); });
const data = ctx.window.SLIDE_STUDY, TEXT = ctx.window.SLIDE_TEXT || {};
let errors = 0, nq = 0; const err = (m) => { errors += 1; console.error("✗ " + m); };
data.lectures.forEach((lec) => {
  const prompts = new Set(), loIds = new Set(); let last = 0; const seen = new Set();
  const total = Object.keys(TEXT[lec.id] || {}).length;
  if (!total) err(lec.id + ": no slide text file");
  lec.los.forEach((lo) => {
    if (loIds.has(lo.id)) err(lec.id + ": duplicate LO id " + lo.id); loIds.add(lo.id);
    if (!lo.objective || !lo.title || !lo.label) err(lec.id + "/" + lo.id + ": missing label/title/objective");
    const qs = [];
    lo.slides.forEach((s) => {
      if (s.n !== last + 1) err(lec.id + ": slide " + s.n + " out of order (after " + last + ")");
      last = s.n; seen.add(s.n);
      const img = path.join(root, lec.img.replace("{nn}", String(s.n).padStart(2, "0")).replace("{nnn}", String(s.n).padStart(3, "0")));
      if (!fs.existsSync(img)) err(lec.id + ": missing picture " + img);
      if (!s.html && !(TEXT[lec.id] || {})[s.n] && !s.pic) err(lec.id + ": slide " + s.n + " has no text and no pic text");
      if (!s.title) err(lec.id + ": slide " + s.n + " has no title");
      s.q.forEach((q) => qs.push([q, "slide " + s.n]));
    });
    (lo.review || []).forEach((q) => qs.push([q, lo.id + " review"]));
    if (!(lo.review || []).length) err(lec.id + "/" + lo.id + ": no cumulative review questions");
    qs.forEach(([q, where]) => {
      nq += 1;
      const at = lec.id + " " + where + ": " + q.prompt.slice(0, 50);
      if (!Array.isArray(q.wrong) || q.wrong.length !== 3) err(at + ": needs 3 wrong answers");
      if (new Set([q.answer, ...q.wrong]).size !== 4) err(at + ": duplicate choices");
      if (!q.why || q.why === q.answer + "." || /^slide \d+\.?$/i.test(q.why)) err(at + ": needs a real why");
      if ((q.why.match(/[.!?](\s|$)/g) || []).length > 1 && !/\(standard teaching\)/.test(q.why)) err(at + ": why must be one sentence");
      if (prompts.has(q.prompt)) err(at + ": duplicate prompt"); prompts.add(q.prompt);
    });
  });
  for (let n = 1; n <= total; n += 1) if (!seen.has(n)) err(lec.id + ": slide " + n + " not in any LO");
  // Final test and Apply final: every question tied to a real slide, every LO covered.
  const loOf = {};
  lec.los.forEach((lo) => lo.slides.forEach((s) => { loOf[s.n] = lo.id; }));
  [["final", (data.finals || {})[lec.id] || []], ["apply", (data.applies || {})[lec.id] || []]].forEach(([kind, fin]) => {
    const finLOs = new Set();
    fin.forEach((q) => {
      nq += 1;
      const at = lec.id + " " + kind + " (slide " + q.n + "): " + String(q.prompt).slice(0, 50);
      if (!loOf[q.n]) err(at + ": no such slide"); else finLOs.add(loOf[q.n]);
      if (!Array.isArray(q.wrong) || q.wrong.length !== 3) err(at + ": needs 3 wrong answers");
      if (new Set([q.answer, ...q.wrong]).size !== 4) err(at + ": duplicate choices");
      if (!q.why || q.why === q.answer + ".") err(at + ": needs a real why");
      if ((q.why.match(/[.!?](\s|$)/g) || []).length > 1 && !/\(standard teaching\)/.test(q.why)) err(at + ": why must be one sentence");
      if (prompts.has(q.prompt)) err(at + ": duplicate prompt"); prompts.add(q.prompt);
    });
    if (fin.length) lec.los.forEach((lo) => { if (!finLOs.has(lo.id)) err(lec.id + " " + kind + ": no question on " + lo.id); });
    if (fin.length) console.log(lec.id + ": " + kind + " " + fin.length + " questions");
  });
  console.log(lec.id + ": " + lec.los.length + " LOs, " + seen.size + "/" + total + " slides");
});
console.log(errors ? errors + " problem(s)" : "✓ Slide study OK (" + nq + " questions)");
process.exit(errors ? 1 : 0);
