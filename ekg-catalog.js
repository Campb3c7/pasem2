/* EKG Catalog: look-only gallery of every strip and 12-lead finding, with real labeled examples.
   Data: window.EKG_CATALOG (data/ekg-catalog.js); example pictures come from window.EKG_WORKBOOK
   (wb-*), window.EKG_EXAMPLIFY (exq-*) and the deck slides listed in EKG_CATALOG.deck (deck-*).
   No quizzing and no progress; the open part (strip / 12-lead) is remembered per browser. */
(function () {
  "use strict";
  var data = window.EKG_CATALOG;
  var launch = document.getElementById("ekg-catalog-launch");
  var view = document.getElementById("ekg-catalog-view");
  var content = document.getElementById("ekg-catalog-content");
  var studyView = document.getElementById("study-view");
  if (!data || !launch || !view || !content) return;

  var PART_KEY = "pasem2:ekg-catalog:part";
  var wb = {}, exq = {}, hw = {};
  ((window.EKG_WORKBOOK || {}).strips || []).forEach(function (s) { wb[s.id] = s; });
  var EX = window.EKG_EXAMPLIFY || {};
  (EX.questions || []).forEach(function (q) { exq[q.id] = q; });
  (EX.homework || []).forEach(function (h) { for (var n = h.from; n <= h.to; n += 1) hw["exq-" + n] = h.title; });

  function esc(v) { return String(v == null ? "" : v).replace(/[&<>'"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c]; }); }

  // Turn an example id into { fmt, img, label, source, lines[] }.
  function resolve(id) {
    var m;
    if ((m = /^wb-/.exec(id)) && wb[id]) {
      var s = wb[id], k = s.key || {};
      var lines = [];
      var facts = [["Rhythm", k.rhythm], ["Rate", k.rate], ["P", k.p], ["PR", k.pr], ["QRS", k.qrs]].filter(function (f) { return f[1]; });
      if (facts.length) lines.push(facts.map(function (f) { return f[0] + ": " + f[1]; }).join(" · "));
      if (k.comment) lines.push(k.comment);
      if (s.note) lines.push("Note: " + s.note);
      return { fmt: "strip", img: "images/ekg-workbook/" + id + ".webp", label: k.interp || s.name, source: "Workbook strip #" + s.n + " · answer key", lines: lines };
    }
    if (/^exq-/.test(id) && exq[id]) {
      var q = exq[id];
      return { fmt: /12 lead/i.test(q.question) ? "12" : "strip", img: q.image, label: q.answer, source: "Examplify" + (hw[id] ? " · " + hw[id] : "") + " · your answer key", lines: [q.why] };
    }
    if ((m = /^deck-(\d+)$/.exec(id)) && data.deck[m[1]]) {
      var d = data.deck[m[1]];
      return { fmt: d.fmt, img: "images/ekg-catalog/deck-" + ("00" + m[1]).slice(-3) + ".webp", label: d.title, source: "EKG Interpretation lecture · slide " + m[1], lines: [d.note] };
    }
    return null;
  }

  // Build the parts: strip entries keep all their examples; the 12-lead part gets an extra group
  // "Rhythm on a 12-lead" made from each strip entry's 12-lead examples.
  var parts = data.parts.map(function (p) {
    return { id: p.id, title: p.title, blurb: p.blurb, groups: p.groups.map(function (g) {
      return { id: g.id, title: g.title, entries: g.entries.map(function (e) {
        return { id: e.id, name: e.name, what: e.what, look: e.look, examples: e.examples.map(resolve).filter(Boolean) };
      }) };
    }) };
  });
  var stripPart = parts.filter(function (p) { return p.id === "strip"; })[0];
  var twelvePart = parts.filter(function (p) { return p.id === "twelve"; })[0];
  if (stripPart && twelvePart) {
    var rhythmEntries = [];
    stripPart.groups.forEach(function (g) {
      g.entries.forEach(function (e) {
        var tw = e.examples.filter(function (x) { return x.fmt === "12"; });
        if (tw.length) rhythmEntries.push({ id: e.id + "-12", name: e.name, what: e.what + " Read the rhythm from the long lead II strip at the bottom.", look: e.look, examples: tw });
      });
    });
    if (rhythmEntries.length) twelvePart.groups.push({ id: "rhythm-12", title: "Rhythm on a 12-lead", entries: rhythmEntries });
  }
  var flat = [];
  parts.forEach(function (p) { p.groups.forEach(function (g) { g.entries.forEach(function (e) { flat.push({ part: p, group: g, entry: e }); }); }); });
  var seen = {}, total = 0, findings = 0;
  flat.forEach(function (f) {
    if (!/-12$/.test(f.entry.id)) findings += 1;
    f.entry.examples.forEach(function (x) { if (!seen[x.img]) { seen[x.img] = true; total += 1; } });
  });

  function getPart() { try { return localStorage.getItem(PART_KEY) || "strip"; } catch (e) { return "strip"; } }
  function setPart(v) { try { localStorage.setItem(PART_KEY, v); } catch (e) { /* private mode */ } }

  function open() {
    studyView.hidden = true;
    document.querySelectorAll(".walkthrough-view").forEach(function (s) { s.hidden = true; });
    view.hidden = false;
    renderHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function close() { view.hidden = true; studyView.hidden = false; content.innerHTML = ""; window.scrollTo({ top: 0, behavior: "smooth" }); }

  function count(e) {
    var n = e.examples.length;
    return n ? n + " example" + (n === 1 ? "" : "s") : "no picture yet";
  }

  function renderHome(scrollTo) {
    var pid = getPart();
    var part = parts.filter(function (p) { return p.id === pid; })[0] || parts[0];
    content.innerHTML = '<div class="mode-intro"><p class="eyebrow">EKG · Catalog</p><h3>Catalog</h3>' +
      '<p>Every finding you need to recognize, with real labeled tracings. Pick one to see what it is, what to look for, and a gallery of examples. No quizzing: just get your eyes used to it.</p></div>' +
      '<div class="cat-tabs" role="tablist">' + parts.map(function (p) {
        return '<button type="button" role="tab" class="cat-tab' + (p === part ? " active" : "") + '" aria-selected="' + (p === part) + '" data-part="' + p.id + '">' + esc(p.title) + '</button>';
      }).join("") + '</div>' +
      '<p class="cat-blurb">' + esc(part.blurb) + '</p>' +
      part.groups.map(function (g) {
        return '<section class="cat-group"><h4>' + esc(g.title) + '</h4><div class="cat-entries">' + g.entries.map(function (e) {
          return '<button type="button" class="cat-entry' + (e.examples.length ? "" : " empty") + '" data-entry="' + e.id + '"><strong>' + esc(e.name) + '</strong><small>' + count(e) + '</small></button>';
        }).join("") + '</div></section>';
      }).join("");
    content.querySelectorAll("[data-part]").forEach(function (b) {
      b.addEventListener("click", function () { setPart(b.getAttribute("data-part")); renderHome(); });
    });
    content.querySelectorAll("[data-entry]").forEach(function (b) {
      b.addEventListener("click", function () { renderEntry(b.getAttribute("data-entry")); });
    });
    if (scrollTo) {
      var t = content.querySelector('[data-entry="' + scrollTo + '"]');
      if (t) { t.scrollIntoView({ block: "center" }); t.focus(); return; }
    }
    view.scrollIntoView({ behavior: "instant", block: "start" });
  }

  function card(x) {
    return '<figure class="cat-ex' + (x.fmt === "12" ? " cat-ex-12" : "") + '">' +
      '<a class="cat-img" href="' + esc(x.img) + '" target="_blank" rel="noopener" title="Open full size"><img src="' + esc(x.img) + '" alt="' + esc(x.label) + '" loading="lazy" decoding="async"></a>' +
      '<figcaption><strong>' + esc(x.label) + '</strong><span class="cat-src">' + esc(x.source) + '</span>' +
      x.lines.filter(Boolean).map(function (l) { return '<span class="cat-line">' + esc(l) + '</span>'; }).join("") + '</figcaption></figure>';
  }

  function renderEntry(id) {
    var at = -1;
    flat.forEach(function (f, i) { if (f.entry.id === id) at = i; });
    if (at < 0) { renderHome(); return; }
    var f = flat[at], e = f.entry;
    setPart(f.part.id);
    var prev = flat[at - 1], next = flat[at + 1];
    var strips = e.examples.filter(function (x) { return x.fmt !== "12"; });
    var twelves = e.examples.filter(function (x) { return x.fmt === "12"; });
    var gallery;
    if (!e.examples.length) {
      gallery = '<p class="cat-none">No real picture of this yet. The description and what to look for above are what to know for now.</p>';
    } else if (strips.length && twelves.length) {
      gallery = '<h4 class="cat-gal-head">Strips <small>' + strips.length + '</small></h4><div class="cat-gallery">' + strips.map(card).join("") + '</div>' +
        '<h4 class="cat-gal-head">On a 12-lead <small>' + twelves.length + '</small></h4><div class="cat-gallery">' + twelves.map(card).join("") + '</div>';
    } else {
      gallery = '<h4 class="cat-gal-head">Examples <small>' + e.examples.length + '</small></h4><div class="cat-gallery">' + e.examples.map(card).join("") + '</div>';
    }
    function nav(where) {
      return '<div class="cat-nav cat-nav-' + where + '">' +
        '<button type="button" class="secondary-action" data-go="home">← ' + esc(f.part.title) + ' catalog</button>' +
        '<span>' + (prev ? '<button type="button" class="secondary-action" data-go="' + prev.entry.id + '" title="' + esc(prev.entry.name) + '">‹ Previous</button>' : "") +
        (next ? '<button type="button" class="secondary-action" data-go="' + next.entry.id + '" title="' + esc(next.entry.name) + '">Next ›</button>' : "") + '</span></div>';
    }
    content.innerHTML = nav("top") +
      '<section class="cat-head"><p class="eyebrow">' + esc(f.part.title) + ' · ' + esc(f.group.title) + '</p><h3>' + esc(e.name) + '</h3>' +
      '<p>' + esc(e.what) + '</p>' +
      '<div class="cat-look"><p class="cat-look-title">What to look for</p><ul>' + e.look.map(function (l) { return '<li>' + esc(l) + '</li>'; }).join("") + '</ul></div></section>' +
      gallery + (e.examples.length > 2 ? nav("bottom") : "");
    content.querySelectorAll("[data-go]").forEach(function (b) {
      b.addEventListener("click", function () {
        var g = b.getAttribute("data-go");
        if (g === "home") renderHome(e.id); else renderEntry(g);
      });
    });
    view.scrollIntoView({ behavior: "instant", block: "start" });
  }

  var status = document.getElementById("ekg-catalog-status");
  if (status) status.textContent = findings + " findings · " + total + " real examples";
  launch.addEventListener("click", open);
  document.getElementById("ekg-catalog-back").addEventListener("click", close);
  window.EKGCatalog = { resolve: resolve, parts: parts };
}());
