/* EKG "Learn the 12-lead" figures (lesson engine: learn-path.js). A guided, picture-first path through
   the 12-lead: the printout, where the stickers go, why each lead looks different, the walls, the axis,
   wide QRS patterns, hypertrophy, measuring the ST, finding the STEMI, look-alikes, and a full read.
   Data: window.EKG_TWELVE_LEARN (data/ekg-twelve-learn.js). Progress: pasem2:ekg-twelve-learn:progress.

   Figure types (all drawn here as SVG):
     ekg {case, seed, groups: [{leads, tone, label, tag}], hi, tone, strip, cal, dim}  full 12-lead from TwelveSynth
     beats {case, title, leads, hi: {lead: tone}, notes: {lead: text}, measure: {lead: "R" | "S"}, seed}  one beat per lead
     body {show: "limb" | "chest" | "all", hi: [electrodes]}     where the 10 stickers go
     frontal {leads, hi: {lead: tone}, walls, arrow, normal}       limb leads as cameras around the front
     horizontal {hi: {lead: tone}, walls, posterior, arrows}       chest leads around a slice of the chest
     rule {only}                                                   toward = up, away = down, across = both
     dial {angle}                                                  axis slider: wheel + lead I and aVF
     heart {hi: [walls], artery}                                   walls and coronary arteries
     map {hi: [walls], blank}                                      the 3 x 4 printout as a colored lead map
     st {mm, lead}                                                 measuring the ST at J + 0.04 s
     bbb {block: "rbbb" | "lbbb" | "lafb" | "lpfb" | null}         bundle branches and fascicles
     steps {on}                                                    the deck's 8-step read
     pattern {id}                                                  pattern gallery drawing (EKGDraw.pattern)
     real {id, hide}                                               a real Examplify 12-lead (exq-*), answer shown unless hide
     damage {id, lead}                                             MI locator damage drawing (EKGDraw.damageLead) */
(function () {
  "use strict";

  var TONE = { gold: "#e8c27a", red: "#dc8e89", green: "#8fc6a3", blue: "#83b6e3", violet: "#b6a5e0", grey: "#a39c90", white: "#f2ede4" };
  var WALLS = {
    septal: { name: "Septal", tone: "violet", leads: ["V1", "V2"] },
    anterior: { name: "Anterior", tone: "gold", leads: ["V3", "V4"] },
    lateral: { name: "Lateral", tone: "green", leads: ["I", "aVL", "V5", "V6"] },
    inferior: { name: "Inferior", tone: "blue", leads: ["II", "III", "aVF"] },
    posterior: { name: "Posterior", tone: "red", leads: ["V7", "V8", "V9"] },
    base: { name: "Base (aVR)", tone: "grey", leads: ["aVR"] }
  };
  var LAYOUT = [["I", "aVR", "V1", "V4"], ["II", "aVL", "V2", "V5"], ["III", "aVF", "V3", "V6"]];
  var LIMB = { I: 0, II: 60, III: 120, aVR: -150, aVL: -30, aVF: 90 };
  var uid = 0;

  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>'"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c];
    });
  }
  function f1(n) { return Number(n).toFixed(1); }
  function tone(name) { return TONE[name] || TONE.gold; }
  function wallOf(lead) {
    for (var k in WALLS) if (WALLS[k].leads.indexOf(lead) >= 0) return k;
    return null;
  }
  function caseById(id) {
    var ex = window.EKG_EXAM;
    if (!ex) return null;
    return ex.twelve.cases.filter(function (c) { return c.id === id; })[0] || null;
  }
  function grid(w, h, box) {
    var s = "", n = 0, x, y;
    for (x = 0; x <= w + 0.1; x += box, n += 1) s += '<line x1="' + f1(x) + '" y1="0" x2="' + f1(x) + '" y2="' + f1(h) + '" class="' + (n % 5 === 0 ? "rs-big" : "rs-small") + '"/>';
    n = 0;
    for (y = 0; y <= h + 0.1; y += box, n += 1) s += '<line x1="0" y1="' + f1(y) + '" x2="' + f1(w) + '" y2="' + f1(y) + '" class="' + (n % 5 === 0 ? "rs-big" : "rs-small") + '"/>';
    return s;
  }
  function legend(items) {
    if (!items.length) return "";
    return '<div class="t12-legend">' + items.map(function (it) {
      return '<span><i style="background:' + tone(it.tone) + '"></i>' + it.label + '</span>';
    }).join("") + '</div>';
  }

  // ---- full 12-lead with highlighted leads --------------------------------
  function ekgFigure(f) {
    var c = caseById(f.case || "tw-normal");
    if (!c || !window.TwelveSynth) return "";
    var out = window.TwelveSynth.make(c, f.seed == null ? 11 : f.seed), add = "";
    var X0 = 24, CW = 187.5, RH = 90, pos = {};
    LAYOUT.forEach(function (row, ri) { row.forEach(function (lead, ci) { pos[lead] = { x: X0 + ci * CW, y: ri * RH }; }); });
    var groups = f.groups || (f.hi ? [{ leads: f.hi, tone: f.tone || "gold", label: f.label }] : []);
    if (f.walls) groups = Object.keys(WALLS).filter(function (k) { return k !== "posterior" && k !== "base"; }).map(function (k) { return { leads: WALLS[k].leads, tone: WALLS[k].tone, label: WALLS[k].name }; });
    var lit = {};
    groups.forEach(function (g) { g.leads.forEach(function (l) { lit[l] = g; }); });
    if ((groups.length || f.strip || f.cal) && f.dim !== false) {
      Object.keys(pos).forEach(function (l) { if (!lit[l]) add += '<rect class="t12-dim" x="' + pos[l].x + '" y="' + pos[l].y + '" width="' + CW + '" height="' + RH + '"/>'; });
      if (!f.strip) add += '<rect class="t12-dim" x="' + X0 + '" y="' + 3 * RH + '" width="' + 4 * CW + '" height="' + RH + '"/>';
    }
    groups.forEach(function (g) {
      g.leads.forEach(function (l) {
        var p = pos[l];
        if (!p) return;
        add += '<rect class="t12-hi" x="' + (p.x + 2) + '" y="' + (p.y + 2) + '" width="' + (CW - 4) + '" height="' + (RH - 4) + '" rx="6" style="stroke:' + tone(g.tone) + ';fill:' + tone(g.tone) + '"/>';
        if (g.tag) add += '<text class="t12-tag" x="' + (p.x + CW - 8) + '" y="' + (p.y + 16) + '" text-anchor="end" style="fill:' + tone(g.tone) + '">' + escapeHtml(g.tag) + '</text>';
      });
    });
    if (f.strip) add += '<rect class="t12-hi" x="' + (X0 + 2) + '" y="' + (3 * RH + 2) + '" width="' + (4 * CW - 4) + '" height="' + (RH - 4) + '" rx="6" style="stroke:' + TONE.gold + ';fill:' + TONE.gold + '"/><text class="t12-tag" x="' + (X0 + 4 * CW - 10) + '" y="' + (3 * RH + 16) + '" text-anchor="end" style="fill:' + TONE.gold + '">10-second rhythm strip</text>';
    if (f.cal) for (var r = 0; r < 4; r += 1) add += '<rect class="t12-hi" x="0" y="' + (r * RH + 14) + '" width="24" height="' + (RH - 24) + '" rx="4" style="stroke:' + TONE.gold + ';fill:' + TONE.gold + '"/>';
    var svg = out.svg.replace(/<\/svg>\s*$/, add + "</svg>");
    var items = groups.filter(function (g) { return g.label; }).map(function (g) { return { tone: g.tone, label: g.label }; });
    return '<div class="t12-ekg" data-t12-ekg="' + escapeHtml(JSON.stringify(f)) + '">' + (f.title ? '<p class="lh-strip-name">' + escapeHtml(f.title) + '</p>' : "") +
      '<div class="tw-ekg">' + svg + '</div>' + legend(items) +
      (f.redraw === false ? "" : '<button class="lh-redraw" type="button" data-t12-redraw>↻ Another example</button>') + '</div>';
  }

  // ---- one beat per lead, side by side -------------------------------------
  function beatsFigure(f) {
    var c = caseById(f.case || "tw-normal");
    if (!c || !window.TwelveSynth || !window.TwelveSynth.beat) return "";
    var b = window.TwelveSynth.beat(c, f.seed == null ? 3 : f.seed), box = f.box || 4.5;
    var t0 = b.hasP ? -(b.ctx.pr + 0.05) : -0.1, t1 = b.ctx.qt + (c.id === "tw-hypok" ? 0.22 : 0.12);
    // Always the printout's 3 x 4 layout so every lead sits where it would on a real 12-lead; leads not in f.leads are dimmed.
    var shown = f.leads || ["I", "II", "III", "aVR", "aVL", "aVF", "V1", "V2", "V3", "V4", "V5", "V6"];
    var leads = [].concat(LAYOUT[0], LAYOUT[1], LAYOUT[2]);
    var hi = f.hi || {}, notes = f.notes || {}, measure = f.measure || {};
    var data = {}, lo = 0, top = 0;
    leads.forEach(function (lead) {
      var pts = [];
      for (var t = t0; t <= t1 + 1e-9; t += 0.004) { var v = b.value(lead, t); pts.push([t, v]); if (shown.indexOf(lead) >= 0) { lo = Math.min(lo, v); top = Math.max(top, v); } }
      data[lead] = pts;
    });
    var yTop = Math.ceil((top + 2) / 5) * 5, yBot = Math.floor((lo - 2) / 5) * 5;
    var W = (t1 - t0) / 0.04 * box, H = (yTop - yBot) * box;
    function x(t) { return (t - t0) / 0.04 * box; }
    function y(mm) { return (yTop - mm) * box; }
    var html = (f.title ? '<p class="lh-strip-name">' + escapeHtml(f.title) + '</p>' : "") + '<div class="t12-beats t12-grid">';
    leads.forEach(function (lead) {
      var off = shown.indexOf(lead) < 0, t = off ? null : hi[lead], s = '<svg viewBox="0 0 ' + f1(W) + ' ' + f1(H) + '" role="img" aria-label="Lead ' + lead + ' beat">' + grid(W, H, box) +
        '<polyline class="rs-trace" points="' + data[lead].map(function (p) { return f1(x(p[0])) + "," + f1(y(p[1])); }).join(" ") + '"/>';
      if (measure[lead] && !off) {
        var best = null;
        data[lead].forEach(function (p) { if (p[0] >= -0.01 && p[0] <= 0.16 && (!best || (measure[lead] === "R" ? p[1] > best[1] : p[1] < best[1]))) best = p; });
        if (best) {
          var mx = x(best[0]) + 9, mm = Math.round(Math.abs(best[1]));
          s += '<line class="t12-ruler" x1="' + f1(mx) + '" y1="' + f1(y(0)) + '" x2="' + f1(mx) + '" y2="' + f1(y(best[1])) + '"/><line class="t12-ruler" x1="' + f1(mx - 4) + '" y1="' + f1(y(0)) + '" x2="' + f1(mx + 4) + '" y2="' + f1(y(0)) + '"/><line class="t12-ruler" x1="' + f1(mx - 4) + '" y1="' + f1(y(best[1])) + '" x2="' + f1(mx + 4) + '" y2="' + f1(y(best[1])) + '"/>' +
            '<text class="t12-ruler-text" x="' + f1(mx + 6) + '" y="' + f1(y(best[1] / 2) + 4) + '">' + measure[lead] + ' ' + mm + ' mm</text>';
        }
      }
      s += '</svg>';
      html += '<figure class="t12-beat' + (t ? " lit" : "") + (off ? " off" : "") + '"' + (t ? ' style="--t12:' + tone(t) + '"' : "") + '><span class="t12-beat-name">' + lead + '</span>' + s +
        '<figcaption>' + (!off && notes[lead] ? notes[lead] : "&nbsp;") + '</figcaption></figure>';
    });
    return html + '</div>';
  }

  // ---- where the stickers go -----------------------------------------------
  var ELECTRODES = {
    RA: [62, 112, "limb"], LA: [298, 112, "limb"], RL: [128, 384, "limb"], LL: [232, 384, "limb"],
    V1: [165, 176, "chest"], V2: [195, 176, "chest"], V3: [211, 185, "chest"], V4: [226, 193, "chest"], V5: [250, 197, "chest"], V6: [272, 201, "chest"]
  };
  var LIMB_COLOR = { RA: "white", LA: "grey", RL: "green", LL: "red" };
  function bodyFigure(f) {
    var show = f.show || "all", hi = f.hi || [];
    var s = '<svg class="t12-body' + (show === "chest" ? " zoom" : "") + '" viewBox="' + (show === "chest" ? "40 70 280 230" : "0 0 360 410") + '" role="img" aria-label="Where the EKG electrodes go">';
    // outline: head, neck, torso, arms, legs
    s += '<circle class="t12-skin" cx="180" cy="38" r="26"/><path class="t12-skin" d="M166,62 L194,62 L196,76 L164,76 Z"/>' +
      '<path class="t12-skin" d="M110,82 Q180,70 250,82 L268,96 Q280,150 272,250 L262,300 Q180,316 98,300 L88,250 Q80,150 92,96 Z"/>' +
      '<path class="t12-skin" d="M92,96 Q70,100 62,130 L48,230 Q46,246 58,248 L66,246 L80,150 Z"/><path class="t12-skin" d="M268,96 Q290,100 298,130 L312,230 Q314,246 302,248 L294,246 L280,150 Z"/>' +
      '<path class="t12-skin" d="M110,300 L102,400 L150,400 L176,312 Z"/><path class="t12-skin" d="M250,300 L258,400 L210,400 L184,312 Z"/>';
    if (show !== "limb") {
      // sternum, ribs (intercostal spaces) and the vertical lines
      s += '<rect class="t12-bone" x="172" y="92" width="16" height="104" rx="6"/>';
      [130, 148, 166, 186, 206, 226].forEach(function (yy, i) { s += '<path class="t12-rib" d="M172,' + yy + ' Q130,' + (yy - 10) + ' 100,' + (yy + 6) + ' M188,' + yy + ' Q230,' + (yy - 10) + ' 262,' + (yy + 6) + '"/>'; });
      s += '<text class="t12-note" x="100" y="185" text-anchor="end">4th ICS</text><text class="t12-note" x="100" y="205" text-anchor="end">5th ICS</text>';
      s += '<line class="t12-vline" x1="226" y1="96" x2="226" y2="250"/><line class="t12-vline" x1="250" y1="100" x2="250" y2="250"/><line class="t12-vline" x1="272" y1="104" x2="272" y2="250"/>';
      s += '<text class="t12-note" x="226" y="262" text-anchor="middle">MCL</text><text class="t12-note" x="250" y="262" text-anchor="middle">AAL</text><text class="t12-note" x="274" y="262" text-anchor="middle">MAL</text>';
    }
    Object.keys(ELECTRODES).forEach(function (k) {
      var e = ELECTRODES[k];
      if (show !== "all" && e[2] !== show) return;
      var on = !hi.length || hi.indexOf(k) >= 0, col = e[2] === "limb" ? tone(LIMB_COLOR[k]) : TONE.gold;
      s += '<g class="t12-el' + (on ? "" : " off") + '"><circle cx="' + e[0] + '" cy="' + e[1] + '" r="' + (e[2] === "limb" ? 11 : 8.5) + '" style="fill:' + col + '"/>' +
        '<text x="' + e[0] + '" y="' + (e[1] + 3.5) + '" text-anchor="middle">' + k + '</text></g>';
    });
    s += show === "chest" ? '<text class="t12-note" x="46" y="84">patient\'s right</text><text class="t12-note" x="314" y="84" text-anchor="end">patient\'s left</text>' : '<text class="t12-note" x="18" y="404">patient\'s right</text><text class="t12-note" x="342" y="404" text-anchor="end">patient\'s left</text>';
    return s + '</svg>';
  }

  // ---- limb leads as cameras on the front ---------------------------------
  function frontalFigure(f) {
    var leads = f.leads || Object.keys(LIMB), hi = f.hi || {}, cx = 170, cy = 150, R = 112;
    var s = '<svg class="t12-wheel" viewBox="0 0 340 300" role="img" aria-label="Limb leads around the front of the heart">';
    s += '<circle class="t12-ring" cx="' + cx + '" cy="' + cy + '" r="' + R + '"/>';
    if (f.normal) s += '<path class="t12-normal" d="M' + cx + ',' + cy + ' L' + (cx + R) + ',' + cy + ' A' + R + ',' + R + ' 0 0 1 ' + cx + ',' + (cy + R) + ' Z"/><text class="t12-note" x="' + (cx + 42) + '" y="' + (cy + 46) + '" style="fill:' + TONE.green + '">normal</text>';
    s += '<ellipse class="t12-heart" cx="' + cx + '" cy="' + cy + '" rx="30" ry="42" transform="rotate(-40 ' + cx + ' ' + cy + ')"/>';
    leads.forEach(function (lead) {
      var a = LIMB[lead] * Math.PI / 180, ex = cx + R * Math.cos(a), ey = cy + R * Math.sin(a);
      var w = f.walls ? WALLS[wallOf(lead)] : null, t = hi[lead] || (w ? w.tone : null), col = t ? tone(t) : "rgba(242,237,228,.5)";
      var dim = Object.keys(hi).length && !hi[lead];
      s += '<g class="t12-cam' + (dim ? " off" : "") + '"><line x1="' + cx + '" y1="' + cy + '" x2="' + f1(ex) + '" y2="' + f1(ey) + '" style="stroke:' + col + '"/>' +
        '<circle cx="' + f1(ex) + '" cy="' + f1(ey) + '" r="17" style="stroke:' + col + '"/><text x="' + f1(ex) + '" y="' + f1(ey + 4) + '" text-anchor="middle" style="fill:' + col + '">' + lead + '</text>' +
        '<text class="t12-deg" x="' + f1(cx + (R + 30) * Math.cos(a)) + '" y="' + f1(cy + (R + 30) * Math.sin(a) + 4) + '" text-anchor="middle">' + (LIMB[lead] > 0 ? "+" : "") + LIMB[lead] + '°</text></g>';
    });
    if (f.arrow != null) {
      var aa = f.arrow * Math.PI / 180, ax = cx + (R - 22) * Math.cos(aa), ay = cy + (R - 22) * Math.sin(aa), id = "t12ah" + (uid += 1);
      s += '<defs><marker id="' + id + '" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" refX="10" refY="7" orient="auto"><path d="M0,1 L13,7 L0,13 Z" fill="' + TONE.gold + '"/></marker></defs>' +
        '<line class="t12-axis-arrow" x1="' + cx + '" y1="' + cy + '" x2="' + f1(ax) + '" y2="' + f1(ay) + '" marker-end="url(#' + id + ')"/>';
    }
    return s + '</svg>';
  }

  // ---- chest leads around a slice of the chest ------------------------------
  var CHEST_ANGLES = { V1: -101, V2: -79, V3: -62, V4: -45, V5: -24, V6: 0, V7: 24, V8: 48, V9: 72 };
  function horizontalFigure(f) {
    var hi = f.hi || {}, cx = 200, cy = 168, rx = 158, ry = 116, hx = 214, hy = 162;
    var leads = ["V1", "V2", "V3", "V4", "V5", "V6"].concat(f.posterior ? ["V7", "V8", "V9"] : []);
    var s = '<svg class="t12-slice" viewBox="0 0 400 330" role="img" aria-label="Chest leads around a slice of the chest, seen from the feet">';
    s += '<ellipse class="t12-skin" cx="' + cx + '" cy="' + cy + '" rx="' + rx + '" ry="' + ry + '"/>' +
      '<rect class="t12-bone" x="188" y="56" width="24" height="14" rx="5"/><circle class="t12-bone" cx="200" cy="268" r="16"/>' +
      '<text class="t12-note" x="200" y="306" text-anchor="middle">back (spine)</text>' +
      '<text class="t12-note" x="8" y="322">patient\'s right</text><text class="t12-note" x="392" y="322" text-anchor="end">patient\'s left</text>';
    // heart: RV in front, LV behind and to the left, septum between
    s += '<g transform="translate(' + hx + ' ' + hy + ') scale(1.35) translate(' + (-hx) + ' ' + (-hy) + ')"><path class="t12-rv" d="M150,150 C150,112 196,104 224,118 C204,124 190,140 188,164 C186,186 196,200 206,208 C178,212 150,190 150,150 Z"/>' +
      '<circle class="t12-lv" cx="' + hx + '" cy="' + hy + '" r="44"/><circle class="t12-lv-in" cx="' + hx + '" cy="' + hy + '" r="24"/>' +
      '<text class="t12-small" x="160" y="160">RV</text><text class="t12-small" x="206" y="166">LV</text></g>';
    leads.forEach(function (lead) {
      var a = CHEST_ANGLES[lead] * Math.PI / 180, ex = cx + rx * Math.cos(a), ey = cy + ry * Math.sin(a);
      var w = f.walls ? WALLS[wallOf(lead)] : null, t = hi[lead] || (w ? w.tone : null), col = t ? tone(t) : "rgba(242,237,228,.5)";
      var dim = Object.keys(hi).length && !hi[lead];
      var lx = cx + (rx + 24) * Math.cos(a), ly = cy + (ry + 18) * Math.sin(a);
      var dx = ex - hx, dy = ey - hy, dl = Math.sqrt(dx * dx + dy * dy), sx = hx + dx / dl * 62, sy = hy + dy / dl * 62;
      s += '<g class="t12-cam' + (dim ? " off" : "") + '"><line x1="' + f1(sx) + '" y1="' + f1(sy) + '" x2="' + f1(ex) + '" y2="' + f1(ey) + '" style="stroke:' + col + '" stroke-dasharray="3 3"/>' +
        '<circle cx="' + f1(ex) + '" cy="' + f1(ey) + '" r="7" style="fill:' + col + ';stroke:none"/><text x="' + f1(lx) + '" y="' + f1(ly + 4) + '" text-anchor="middle" style="fill:' + col + '">' + lead + '</text></g>';
    });
    if (f.arrows) {
      var id = "t12hz" + (uid += 1);
      s += '<defs><marker id="' + id + '" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" refX="10" refY="7" orient="auto"><path d="M0,1 L13,7 L0,13 Z" fill="' + TONE.gold + '"/></marker></defs>' +
        '<line class="t12-axis-arrow thin" x1="196" y1="166" x2="166" y2="128" marker-end="url(#' + id + ')"/><text class="t12-small" x="78" y="122" style="fill:' + TONE.gold + '">1 septum</text>' +
        '<line class="t12-axis-arrow" x1="214" y1="162" x2="296" y2="180" marker-end="url(#' + id + ')"/><text class="t12-small" x="250" y="222" style="fill:' + TONE.gold + '">2 big LV</text>';
    }
    return s + '</svg>';
  }

  // ---- the toward / away rule ----------------------------------------------
  function ruleFigure(f) {
    var kinds = f.only ? [f.only] : ["toward", "away", "across"];
    var spec = {
      toward: { a: [26, 50, 140, 50], label: "Toward the + : upright", trace: "M10,120 L60,120 L70,124 L80,62 L90,128 L100,120 L150,120" },
      away: { a: [140, 50, 26, 50], label: "Away from the + : downward", trace: "M10,100 L60,100 L68,96 L80,150 L92,104 L100,100 L150,100" },
      across: { a: [80, 82, 80, 18], label: "Across (side on): up and down", trace: "M10,112 L60,112 L72,80 L84,144 L94,112 L150,112" }
    };
    return '<div class="t12-rules">' + kinds.map(function (k) {
      var p = spec[k], id = "t12r" + (uid += 1);
      return '<figure class="t12-rule"><svg viewBox="0 0 180 160" role="img" aria-label="' + p.label + '">' +
        '<defs><marker id="' + id + '" markerUnits="userSpaceOnUse" markerWidth="14" markerHeight="14" refX="10" refY="7" orient="auto"><path d="M0,1 L13,7 L0,13 Z" fill="' + TONE.gold + '"/></marker></defs>' +
        '<circle class="t12-plus" cx="164" cy="50" r="12"/><text class="t12-plus-t" x="164" y="55" text-anchor="middle">+</text>' +
        '<line class="t12-axis-arrow" x1="' + p.a[0] + '" y1="' + p.a[1] + '" x2="' + p.a[2] + '" y2="' + p.a[3] + '" marker-end="url(#' + id + ')"/>' +
        '<circle r="5" class="t12-spark"><animate attributeName="cx" values="' + p.a[0] + ';' + p.a[2] + '" dur="1.6s" repeatCount="indefinite"/><animate attributeName="cy" values="' + p.a[1] + ';' + p.a[3] + '" dur="1.6s" repeatCount="indefinite"/></circle>' +
        '<path class="rs-trace" d="' + p.trace + '"/></svg><figcaption>' + p.label + '</figcaption></figure>';
    }).join("") + '</div>';
  }

  // ---- axis dial -----------------------------------------------------------
  function quadrant(a) {
    if (a >= 0 && a <= 90) return { name: "Normal axis", tone: "green" };
    if (a < 0 && a >= -90) return { name: "Left axis deviation", tone: "blue" };
    if (a > 90) return { name: "Right axis deviation", tone: "red" };
    return { name: "Extreme axis deviation", tone: "violet" };
  }
  function dialInner(angle) {
    var draw = window.EKGDraw, q = quadrant(angle);
    var c = Math.cos(angle * Math.PI / 180), sn = Math.sin(angle * Math.PI / 180);
    function word(v) { return Math.abs(v) < 0.09 ? "flat (side on)" : v > 0 ? "up 👍" : "down 👎"; }
    return (draw && draw.axisWheel ? '<div class="lh-axis-fig">' + draw.axisWheel(angle, true) + draw.axisLeads(angle) + '</div>' : "") +
      '<p class="t12-dial-read">Lead I <strong>' + word(c) + '</strong> · aVF <strong>' + word(sn) + '</strong> → <strong style="color:' + tone(q.tone) + '">' + q.name + '</strong> (' + (angle > 0 ? "+" : "") + angle + '°)</p>';
  }
  function dialFigure(f) {
    var a = f.angle == null ? 60 : f.angle;
    return '<div class="t12-dial"><div class="t12-dial-out">' + dialInner(a) + '</div>' +
      '<input class="t12-dial-range" type="range" min="-180" max="180" step="5" value="' + a + '" aria-label="Axis angle">' +
      '<div class="t12-chips">' + [["Normal", 60], ["Left", -45], ["Right", 120], ["Extreme", -135]].map(function (p) { return '<button type="button" data-t12-angle="' + p[1] + '">' + p[0] + '</button>'; }).join("") + '</div>' +
      '<p class="lh-caption">Drag the slider (or tap a button) and watch lead I and aVF flip.</p></div>';
  }

  // ---- walls and coronary arteries -----------------------------------------
  function heartFigure(f) {
    var hi = f.hi || [], id = "t12hc" + (uid += 1);
    var outline = "M84,96 C82,70 110,58 140,62 C170,52 222,52 250,72 C276,92 280,140 270,180 C260,216 240,240 222,256 C190,250 140,230 106,206 C80,188 72,140 84,96 Z";
    function on(w) { return !hi.length || hi.indexOf(w) >= 0; }
    function region(w, d) { return '<path clip-path="url(#' + id + ')" d="' + d + '" style="fill:' + tone(WALLS[w].tone) + '" class="t12-wall' + (on(w) ? "" : " off") + '"/>'; }
    var s = '<svg class="t12-heartmap" viewBox="0 0 360 290" role="img" aria-label="Walls of the heart and the coronary arteries"><defs><clipPath id="' + id + '"><path d="' + outline + '"/></clipPath></defs>';
    s += '<path class="t12-vessel" d="M132,66 C128,40 146,22 176,24 L190,24 M190,24 C206,24 214,34 214,44"/>';
    s += '<path class="t12-back' + (on("posterior") ? "" : " off") + '" d="' + outline + '" transform="translate(18,-14)"/>' +
      '<text class="t12-small" x="292" y="50" style="fill:' + TONE.red + '"' + (on("posterior") ? "" : ' opacity=".3"') + '>Posterior</text><text class="t12-note" x="292" y="63"' + (on("posterior") ? "" : ' opacity=".3"') + '>(the back)</text>';
    s += '<path class="t12-wall-base" d="' + outline + '"/>';
    s += region("septal", "M157,30 L177,30 L236,262 L216,262 Z");
    s += region("anterior", "M177,30 L211,30 L270,262 L236,262 Z");
    s += region("lateral", "M211,30 L330,30 L330,262 L270,262 Z");
    s += region("inferior", "M40,158 L330,266 L330,300 L40,300 Z");
    s += '<path class="t12-outline" d="' + outline + '"/>';
    function art(d, key) { var big = f.artery === key; return '<path class="t12-artery' + (big ? " big" : "") + (f.artery && !big ? " off" : "") + '" d="' + d + '"/>'; }
    function artT(x, y, text, key, anchor) { return '<text class="t12-art-t" x="' + x + '" y="' + y + '"' + (anchor ? ' text-anchor="' + anchor + '"' : "") + (f.artery && f.artery !== key ? ' opacity=".3"' : "") + '>' + text + '</text>'; }
    s += art("M140,68 C108,76 88,104 90,150 C94,186 120,206 170,228", "rca") + art("M176,60 C190,120 202,190 218,250", "lad") + art("M180,62 C212,58 240,72 256,102", "lcx");
    s += artT(80, 140, "RCA", "rca", "end") + artT(226, 274, "LAD", "lad") + artT(262, 98, "LCx", "lcx");
    function lab(w, x, y, a, name, leads) {
      if (!on(w) || f.labels === false) return "";
      return '<text class="t12-wall-t" x="' + x + '" y="' + y + '" text-anchor="' + a + '" style="fill:' + tone(WALLS[w].tone) + '">' + name + '</text><text class="t12-wall-l" x="' + x + '" y="' + (y + 13) + '" text-anchor="' + a + '">' + leads + '</text>';
    }
    s += lab("septal", 168, 120, "end", "Septal", "V1 V2") + lab("anterior", 224, 160, "middle", "Ant.", "V3 V4") + lab("lateral", 284, 150, "start", "Lateral", "I aVL V5 V6") + lab("inferior", 120, 244, "middle", "Inferior", "II III aVF");
    return s + '</svg>';
  }

  // ---- the lead map (3 x 4 grid, colored by wall) ---------------------------
  function mapFigure(f) {
    var hi = f.hi || [];
    return '<div class="t12-map">' + LAYOUT.map(function (row) {
      return row.map(function (lead) {
        var w = wallOf(lead), info = WALLS[w], on = !hi.length || hi.indexOf(w) >= 0;
        return '<div class="t12-map-cell' + (on ? "" : " off") + '" style="--t12:' + tone(info.tone) + '"><strong>' + lead + '</strong><small>' + (f.blank ? "?" : info.name) + '</small></div>';
      }).join("");
    }).join("") + '</div>' + (f.blank ? "" : legend(Object.keys(WALLS).filter(function (k) { return k !== "posterior" && (!hi.length || hi.indexOf(k) >= 0); }).map(function (k) { return { tone: WALLS[k].tone, label: WALLS[k].name + ": " + WALLS[k].leads.join(", ") }; })));
  }

  // ---- measuring the ST ----------------------------------------------------
  function gauss(t, mu, sd, a) { var d = (t - mu) / sd; return a * Math.exp(-0.5 * d * d); }
  function smooth(x) { x = Math.max(0, Math.min(1, x)); return x * x * (3 - 2 * x); }
  function stFigure(f) {
    var mm = f.mm == null ? 3 : f.mm, chest = /^V/.test(f.lead || "V3"), need = chest ? 2 : 1, box = 15;
    var t0 = -0.22, t1 = 0.5, J = 0.09, M = J + 0.04;
    function v(t) {
      var st = mm * (t < J ? smooth((t - J + 0.01) / 0.01) : t < 0.24 ? 1 : 1 - smooth((t - 0.24) / 0.12));
      return gauss(t, -0.13, 0.02, 1.4) + gauss(t, 0.008, 0.006, -1) + gauss(t, 0.035, 0.009, 12) + gauss(t, 0.062, 0.009, mm > 0 ? -2 : -3) + st + gauss(t, 0.29, 0.045, 3.2);
    }
    var yTop = 15, yBot = -5, W = (t1 - t0) / 0.04 * box, H = (yTop - yBot) * box;
    function x(t) { return (t - t0) / 0.04 * box; }
    function y(m) { return (yTop - m) * box; }
    var pts = [];
    for (var t = t0; t <= t1; t += 0.002) pts.push(f1(x(t)) + "," + f1(y(v(t))));
    var ok = Math.abs(mm) > need, s = '<svg class="t12-st" viewBox="0 0 ' + f1(W) + ' ' + f1(H) + '" role="img" aria-label="Measuring the ST segment">' + grid(W, H, box);
    s += '<line class="t12-base" x1="0" y1="' + y(0) + '" x2="' + f1(W) + '" y2="' + y(0) + '"/><text class="t12-mark" x="6" y="' + (y(0) + 16) + '">PR baseline</text>';
    s += '<polyline class="rs-trace" points="' + pts.join(" ") + '"/>';
    s += '<circle class="t12-jdot" cx="' + f1(x(J)) + '" cy="' + f1(y(v(J))) + '" r="5"/><text class="t12-mark" x="' + f1(x(J) - 8) + '" y="' + f1(y(v(J)) + (mm >= 0 ? -10 : 18)) + '" text-anchor="end">J point</text>';
    s += '<line class="t12-vmark" x1="' + f1(x(M)) + '" y1="0" x2="' + f1(x(M)) + '" y2="' + f1(H) + '"/><text class="t12-mark" x="' + f1(x(M) + 4) + '" y="' + f1(H - 8) + '">J + 0.04 s</text>';
    if (mm) s += '<line class="t12-ruler big" x1="' + f1(x(M) + 18) + '" y1="' + y(0) + '" x2="' + f1(x(M) + 18) + '" y2="' + y(mm) + '"/><text class="t12-ruler-text big" x="' + f1(x(M) + 26) + '" y="' + f1(y(mm / 2) + 5) + '">' + (mm > 0 ? "↑ " : "↓ ") + Math.abs(mm) + ' mm</text>';
    s += '</svg>';
    var verdict = (chest ? "Chest lead" : "Limb lead") + " (" + (f.lead || "V3") + "): needs more than " + need + " mm. This is " + Math.abs(mm) + " mm " + (mm >= 0 ? "up" : "down") + " → " + (ok ? "<strong>counts</strong>" : "<strong>doesn't count</strong>") + (ok ? " (if a neighbor lead agrees)." : ".");
    return s + '<p class="t12-verdict ' + (ok ? "yes" : "no") + '">' + verdict + '</p>';
  }

  // ---- bundle branches and fascicles ---------------------------------------
  function bbbFigure(f) {
    var block = f.block || null, id = "t12bb" + (uid += 1);
    var vent = "M40,62 Q40,50 58,52 L242,52 Q262,50 262,64 C264,132 210,200 150,238 C90,200 38,132 40,62 Z";
    var late = { rbbb: "M0,0 L150,0 L150,250 L0,250 Z", lbbb: "M150,0 L300,0 L300,250 L150,250 Z", lafb: "M150,0 L300,0 L300,128 L150,128 Z", lpfb: "M150,128 L300,128 L300,250 L150,250 Z" }[block];
    var first = { rbbb: "M150,0 L300,0 L300,250 L150,250 Z", lbbb: "M0,0 L150,0 L150,250 L0,250 Z" }[block];
    var s = '<svg class="t12-bbb" viewBox="0 0 300 250" role="img" aria-label="Bundle branches"><defs><clipPath id="' + id + '"><path d="' + vent + '"/></clipPath></defs>';
    s += '<path class="t12-wall-base" d="' + vent + '"/>';
    if (first) s += '<path clip-path="url(#' + id + ')" class="t12-first" d="' + first + '"/>';
    if (late) s += '<path clip-path="url(#' + id + ')" class="t12-late" d="' + late + '"/>';
    s += '<path class="t12-outline" d="' + vent + '"/><line class="t12-septum" x1="150" y1="52" x2="152" y2="236"/>';
    var wires = {
      his: "M150,24 L150,64",
      rbbb: "M150,64 C146,110 132,160 118,192 C104,214 80,190 70,150",
      left: "M150,64 L162,82",
      lafb: "M162,82 C190,86 222,96 238,122",
      lpfb: "M162,82 C172,120 188,160 214,186"
    };
    Object.keys(wires).forEach(function (k) {
      var cut = block === k || (block === "lbbb" && k === "left");
      s += '<path class="t12-wire' + (cut ? " cut" : "") + '" d="' + wires[k] + '"/>';
    });
    var xAt = { rbbb: [140, 112], lbbb: [156, 73], lafb: [196, 88], lpfb: [176, 126] }[block];
    if (xAt) s += '<g class="t12-x"><line x1="' + (xAt[0] - 9) + '" y1="' + (xAt[1] - 9) + '" x2="' + (xAt[0] + 9) + '" y2="' + (xAt[1] + 9) + '"/><line x1="' + (xAt[0] + 9) + '" y1="' + (xAt[1] - 9) + '" x2="' + (xAt[0] - 9) + '" y2="' + (xAt[1] + 9) + '"/></g>';
    s += '<text class="t12-small" x="86" y="110">RV</text><text class="t12-small" x="208" y="160">LV</text><text class="t12-note" x="158" y="20">His</text>';
    if (!block) s += '<text class="t12-note" x="54" y="208">right bundle</text><text class="t12-note" x="226" y="114">anterior</text><text class="t12-note" x="214" y="204">posterior</text><text class="t12-note" x="226" y="126">fascicle</text><text class="t12-note" x="214" y="216">fascicle</text>';
    if (block === "rbbb" || block === "lbbb") s += '<text class="t12-small" x="' + (block === "rbbb" ? 210 : 90) + '" y="40" text-anchor="middle" style="fill:' + TONE.gold + '">fires 1st</text><text class="t12-small" x="' + (block === "rbbb" ? 90 : 210) + '" y="40" text-anchor="middle" style="fill:' + TONE.violet + '">fires 2nd (late)</text>';
    if (block === "lafb" || block === "lpfb") s += '<text class="t12-small" x="270" y="' + (block === "lafb" ? 40 : 244) + '" text-anchor="end" style="fill:' + TONE.violet + '">' + (block === "lafb" ? "upper LV late" : "lower LV late") + '</text>';
    return s + '</svg>';
  }

  // ---- the 8-step read ----------------------------------------------------
  var STEPS = ["Regularity", "Rate", "Axis", "P waves", "QRS complexes", "PR intervals", "ST segments (and T)", "Final analysis"];
  function stepsFigure(f) {
    var on = f.on == null ? -1 : f.on;
    return '<ol class="t12-steps">' + STEPS.map(function (x, i) {
      return '<li class="' + (i < on ? "past" : i === on ? "now" : "") + '"><span>' + (i < on ? "✓" : i + 1) + '</span>' + x + '</li>';
    }).join("") + '</ol>';
  }

  // ---- a real 12-lead from Anna's Examplify set -----------------------------
  function realFigure(f) {
    var q = ((window.EKG_EXAMPLIFY || {}).questions || []).filter(function (x) { return x.id === f.id; })[0];
    if (!q) return "";
    return '<div class="t12-real"><span class="t12-real-badge">Real 12-lead · from your Examplify practice</span>' +
      '<a href="' + q.image + '" target="_blank" rel="noopener" title="Open full size"><img src="' + q.image + '" alt="' + escapeHtml(q.alt) + '" loading="lazy" decoding="async"></a>' +
      (f.hide ? "" : '<p class="t12-real-cap">' + escapeHtml(q.answer) + '</p>') + '</div>';
  }

  function patternFigure(f) {
    var draw = window.EKGDraw, pt = window.EKG_PATTERNS;
    if (!draw || !draw.pattern || !pt) return "";
    var p = pt.patterns.filter(function (x) { return x.id === f.id; })[0];
    return p ? '<p class="lh-strip-name">' + escapeHtml(f.label || p.name) + '</p>' + draw.pattern(p) : "";
  }

  function figure(f) {
    switch (f.type) {
      case "ekg": return ekgFigure(f);
      case "beats": return beatsFigure(f);
      case "body": return bodyFigure(f);
      case "frontal": return frontalFigure(f);
      case "horizontal": return horizontalFigure(f);
      case "rule": return ruleFigure(f);
      case "dial": return dialFigure(f);
      case "heart": return heartFigure(f);
      case "map": return mapFigure(f);
      case "st": return stFigure(f);
      case "bbb": return bbbFigure(f);
      case "steps": return stepsFigure(f);
      case "pattern": return patternFigure(f);
      case "real": return realFigure(f);
      case "damage": return window.EKGDraw && window.EKGDraw.damageLead ? window.EKGDraw.damageLead(f.id, f.lead) : "";
      default: return "";
    }
  }
  var SMALL = { damage: 1, body: 1, frontal: 1, horizontal: 1, heart: 1, bbb: 1, pattern: 1, st: 1 };

  function bindFigures(content) {
    content.querySelectorAll("[data-t12-redraw]").forEach(function (button) {
      button.addEventListener("click", function () {
        var box = button.closest(".t12-ekg"), spec = JSON.parse(box.dataset.t12Ekg);
        spec.seed = Math.floor(Math.random() * 1e6);
        var tmp = document.createElement("div"); tmp.innerHTML = ekgFigure(spec);
        box.replaceWith(tmp.firstChild); bindFigures(content);
      });
    });
    content.querySelectorAll(".t12-dial").forEach(function (dial) {
      if (dial.dataset.bound) return;
      dial.dataset.bound = "1";
      var range = dial.querySelector(".t12-dial-range"), out = dial.querySelector(".t12-dial-out");
      function set(a) { range.value = a; out.innerHTML = dialInner(Number(a)); }
      range.addEventListener("input", function () { set(range.value); });
      dial.querySelectorAll("[data-t12-angle]").forEach(function (b) { b.addEventListener("click", function () { set(b.dataset.t12Angle); }); });
    });
  }

  // Shared with the validator (no DOM needed to draw).
  window.EKGTwelveFigures = { figure: figure, walls: WALLS, types: ["ekg", "beats", "body", "frontal", "horizontal", "rule", "dial", "heart", "map", "st", "bbb", "steps", "pattern", "damage", "real"] };

  if (typeof document === "undefined") return;
  var data = window.EKG_TWELVE_LEARN;
  var launch = document.getElementById("ekg-twelve-learn-launch");
  if (!data || !launch || !window.createLearnPath) return;
  var path = window.createLearnPath({
    data: data, viewId: "ekg-twelve-learn-view", contentId: "ekg-twelve-learn-content", backId: "ekg-twelve-learn-back", statusId: "ekg-twelve-learn-status",
    progressKey: "pasem2:ekg-twelve-learn:progress", eyebrow: "EKG · the 12-lead", heading: "Learn the 12-lead, in pictures",
    statusCopy: data.lessons.length + " picture-first lessons. Start with lesson 1.",
    figure: figure, bindFigures: bindFigures,
    isSmall: function (f) { return !!SMALL[f.type]; },
    beforeOpen: function () { document.querySelectorAll("[data-rhythm-tool]").forEach(function (other) { other.innerHTML = ""; }); }
  });
  if (path) launch.addEventListener("click", function () { path.open(); });
}());
