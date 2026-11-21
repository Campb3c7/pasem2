/* Brain maps (Anna, 2026-11-21): one or more visual mind maps per lecture that show how the ideas connect
   (cause → effect arrows), not text walls. Built for CAD Part I first; other lectures plug in with a data file.

   Data: window.BRAIN_MAPS[<course>] = { lectures: [lecture] } (data/brain-maps.js registry +
   data/brain-maps-<lecture>.js). A lecture = { id, title, short, by, slides, maps: [map] }.
   A map = { id, title, icon, lo: [..], ask, layout: "spine" | "tree", top?: figure,
             spine: center, centerI, centerD, centerS, centerFig, branches: [node]   (a center with colored branches)
             tree:  tree: node | [node]                                              (a top-down story / flowchart) }
   A node (BrainMaps.N(label, opts, kids)) = { t: label HTML, i: icon, d: one or two "why" sentences, s: slides,
             k: kind (key | bad | good | q | case | num), a: label on the arrow INTO this node, col: color name,
             l: [chips], go: id of another map, fig: Cardio3Figure spec (shown when tapped),
             c: [kids] (1 kid = chain; 2+ = fork), vs: true (2 kids stay side by side even on a phone),
             rail: true (kids as an indented list), x: exit node (sits to the right: "yes →"),
             j: join node (below a fork, every fork leaf points into it) }.
   Modes: Explore (tap a box: its path lights up and a sheet shows the why + picture), Build it (the map grows one box
   at a time), Cover up (boxes hidden; recall, reveal, mark ✓ / ✗; misses can be covered again).
   Progress: pasem2:brain-maps:<course>:progress = { seen, built, best: {"<lec>|<map>": %}, miss: {"<lec>|<map>": [node ids]} }.
   Map ids and node positions are progress keys: rename nothing; add new boxes at the END of a kids list. */
(function () {
  "use strict";

  var COLORS = { gold: "#e8c27a", red: "#e8918b", blue: "#7fb2e5", green: "#8fc6a3", violet: "#b6a5e0", orange: "#e9a66b", teal: "#6cc5c0", pink: "#e39ac0", gray: "#a9a294" };
  var PALETTE = ["red", "blue", "green", "violet", "orange", "teal", "pink", "gold"];
  var FIG = window.Cardio3Figure || null;
  var NARROW = 640;

  function $(id) { return document.getElementById(id); }
  function esc(v) { return String(v == null ? "" : v).replace(/[&<>'"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c]; }); }
  function f1(n) { return Math.round(n * 10) / 10; }
  function plain(h) { return String(h || "").replace(/<[^>]+>/g, "").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&"); }

  /* A nested-boxes picture for "which word is inside which" maps. */
  function nestFigure() {
    return '<svg class="c3-svg bm-nest" viewBox="0 0 360 236" role="img" aria-label="CVD contains ASCVD, which contains CAD; IHD overlaps CAD and also reaches outside ASCVD">' +
      '<rect x="4" y="4" width="352" height="200" rx="18" fill="rgba(182,165,224,.07)" stroke="#b6a5e0" stroke-width="1.5"/>' +
      '<text x="16" y="24" fill="#b6a5e0" font-size="13" font-weight="700">CVD</text><text x="50" y="24" fill="#a39c90" font-size="10.5">any heart or blood-vessel disease</text>' +
      '<rect x="16" y="34" width="232" height="160" rx="16" fill="rgba(232,145,139,.08)" stroke="#e8918b" stroke-width="1.5"/>' +
      '<text x="28" y="54" fill="#e8918b" font-size="13" font-weight="700">ASCVD</text><text x="80" y="54" fill="#a39c90" font-size="10.5">plaque in any artery</text>' +
      '<text x="28" y="70" fill="#a39c90" font-size="10">brain · legs · aorta · heart</text>' +
      '<rect x="28" y="84" width="192" height="98" rx="14" fill="rgba(232,194,122,.14)" stroke="#e8c27a" stroke-width="1.5"/>' +
      '<text x="40" y="106" fill="#e8c27a" font-size="13" font-weight="700">CAD (= ASHD)</text><text x="40" y="122" fill="#d8d2c6" font-size="10.5">plaque in the</text><text x="40" y="136" fill="#d8d2c6" font-size="10.5">coronary arteries</text>' +
      '<circle cx="268" cy="140" r="62" fill="rgba(127,178,229,.14)" stroke="#7fb2e5" stroke-width="1.6" stroke-dasharray="5 4"/>' +
      '<text x="258" y="108" fill="#7fb2e5" font-size="13" font-weight="700">IHD</text><text x="256" y="124" fill="#d8d2c6" font-size="10">supply &lt;</text><text x="256" y="137" fill="#d8d2c6" font-size="10">demand</text>' +
      '<text x="256" y="160" fill="#d8d2c6" font-size="9.5">vasospasm,</text><text x="256" y="172" fill="#d8d2c6" font-size="9.5">emboli</text>' +
'<text x="180" y="226" fill="#a39c90" font-size="10.5" text-anchor="middle">CAD can cause IHD, but IHD can also happen without plaque.</text></svg>';
  }
  function figHtml(f) {
    if (!f) return "";
    return (Array.isArray(f) ? f : [f]).map(function (x) {
      if (x.type === "bm-nest") return nestFigure(x);
      return FIG ? FIG.render(x) : "";
    }).join("");
  }

  window.createBrainMaps = function (cfg) {
    var reg = window.BRAIN_MAPS && window.BRAIN_MAPS[cfg.course];
    var launch = $(cfg.launch), view = $(cfg.view), content = $(cfg.content), back = $(cfg.back), studyView = $("study-view");
    if (!reg || !reg.lectures.length || !launch || !view || !content) return;
    var KEY = "pasem2:brain-maps:" + cfg.course + ":progress";
    var S = null, ro = null, raf = 0;

    function load() { try { var v = JSON.parse(localStorage.getItem(KEY) || "{}"); ["seen", "built", "best", "miss"].forEach(function (k) { v[k] = v[k] || {}; }); return v; } catch (e) { return { seen: {}, built: {}, best: {}, miss: {} }; } }
    function save(v) { try { localStorage.setItem(KEY, JSON.stringify(v)); } catch (e) { /* private mode */ } }

    /* ---------- stamp ids, parents, colors and reading order once ---------- */
    reg.lectures.forEach(function (lec) {
      lec.maps.forEach(function (map) {
        var order = [], byId = {};
        function walk(n, id, parent, col, flag) {
          n.id = id; n.parent = parent; n.col = n.col || col; if (flag) n[flag] = true;
          byId[id] = n; order.push(n);
          if (n.x) walk(n.x, id + "x", n, n.col, "_exit");
          (n.c || []).forEach(function (k, i) { walk(k, id + "." + i, n, n.col); });
          if (n.j) walk(n.j, id + "j", n, n.col, "_join");
        }
        if (map.layout === "tree") {
          map.roots = Array.isArray(map.tree) ? map.tree : [map.tree];
          map.roots.forEach(function (r, i) { walk(r, "r" + i, null, r.col || "gold", "_root"); });
        } else {
          map._c = { t: map.center, i: map.centerI, d: map.centerD, s: map.centerS, fig: map.centerFig, k: "key", col: "gold" };
          walk(map._c, "c", null, "gold", "_center");
          map.branches.forEach(function (b, i) { walk(b, "b" + i, map._c, b.col || PALETTE[i % PALETTE.length], "_head"); });
        }
        map.order = order; map.byId = byId; map.lec = lec; map.key = lec.id + "|" + map.id;
        map.coverable = order.filter(function (n) { return !n._center && !n._head && !n._root; });
      });
    });
    function lecById(id) { return reg.lectures.filter(function (l) { return l.id === id; })[0]; }
    function mapById(lec, id) { return lec.maps.filter(function (m) { return m.id === id; })[0]; }

    /* ---------- open / close ---------- */
    function open() {
      studyView.hidden = true;
      document.querySelectorAll(".walkthrough-view").forEach(function (s) { s.hidden = true; });
      view.hidden = false;
      if (reg.lectures.length === 1) renderLecture(reg.lectures[0]); else renderHome();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    function close() { stopMap(); view.hidden = true; studyView.hidden = false; content.innerHTML = ""; updateLaunch(); window.scrollTo({ top: 0, behavior: "smooth" }); }
    function updateLaunch() {
      var p = load(), s = $(cfg.status);
      if (!s) return;
      s.textContent = reg.lectures.map(function (lec) {
        var n = lec.maps.filter(function (m) { return p.seen[m.key]; }).length;
        return (lec.short || lec.title) + ": " + n + "/" + lec.maps.length + " maps opened";
      }).join(" · ");
    }
    function top() { window.scrollTo({ top: Math.max(0, view.offsetTop - 10), behavior: "smooth" }); }

    function crumbs(lec, map) {
      var parts = ['<button type="button" data-crumb="home">Brain maps</button>'];
      if (lec) parts.push(map ? '<button type="button" data-crumb="lec" data-l="' + esc(lec.id) + '">' + esc(lec.short || lec.title) + '</button>' : '<span>' + esc(lec.short || lec.title) + '</span>');
      if (map) parts.push('<span>' + esc(map.title) + '</span>');
      return '<nav class="tr-crumbs bm-crumbs" aria-label="Where you are">' + parts.join('<i>›</i>') + '</nav>';
    }
    function bindCrumbs() {
      content.querySelectorAll("[data-crumb]").forEach(function (b) {
        b.addEventListener("click", function () {
          stopMap();
          if (b.dataset.crumb === "home") { if (reg.lectures.length === 1) renderLecture(reg.lectures[0]); else renderHome(); }
          else renderLecture(lecById(b.dataset.l));
          top();
        });
      });
    }

    /* ---------- home (several lectures) ---------- */
    function renderHome() {
      var p = load();
      content.innerHTML = crumbs() + '<div class="mode-intro"><p class="eyebrow">' + esc(cfg.courseTitle) + '</p><h3>Brain maps</h3><p>Each lecture drawn as connected maps: how one idea causes the next.</p></div>' +
        '<div class="bm-lec-grid">' + reg.lectures.map(function (lec) {
          var n = lec.maps.filter(function (m) { return p.seen[m.key]; }).length;
          return '<button type="button" class="bm-lec" data-lec="' + esc(lec.id) + '"><strong>' + esc(lec.title) + '</strong><small>' + lec.maps.length + ' maps · ' + n + ' opened</small></button>';
        }).join("") + '</div>';
      bindCrumbs();
      content.querySelectorAll("[data-lec]").forEach(function (b) { b.addEventListener("click", function () { renderLecture(lecById(b.dataset.lec)); top(); }); });
    }

    /* ---------- one lecture: its maps ---------- */
    function renderLecture(lec) {
      var p = load();
      content.innerHTML = crumbs(lec) +
        '<div class="mode-intro"><p class="eyebrow">Brain maps · ' + esc(lec.by || "") + '</p><h3>' + esc(lec.title) + '</h3>' +
        '<p>The lecture as ' + lec.maps.length + ' connected maps. Start with the whole-lecture map, then open each piece. Arrows mean "leads to"; the word on an arrow says how.</p></div>' +
        '<div class="bm-how"><span><b>Explore</b> tap any box: its chain lights up and the why opens</span><span><b>Build it</b> the map grows one box at a time</span><span><b>Cover up</b> the boxes hide; say each one, then reveal</span></div>' +
        '<div class="bm-grid">' + lec.maps.map(function (m, i) {
          var best = p.best[m.key], miss = (p.miss[m.key] || []).length;
          return '<button type="button" class="bm-card' + (i === 0 ? " first" : "") + (p.seen[m.key] ? " seen" : "") + '" data-map="' + esc(m.id) + '">' +
            '<span class="bm-card-ic">' + (m.icon || "🧠") + '</span><span class="bm-card-tx"><small>' + (i === 0 ? "Start here · " : "") + esc((m.lo || []).join(" · ")) + '</small>' +
            '<strong>' + esc(m.title) + '</strong><em>' + esc(m.ask || "") + '</em>' +
            '<span class="bm-card-st">' + m.order.length + ' boxes' + (p.seen[m.key] ? ' · <b class="ok">opened</b>' : "") + (p.built[m.key] ? ' · <b class="ok">built</b>' : "") +
            (best != null ? ' · <b class="' + (best >= 80 ? "ok" : "mid") + '">cover best ' + best + '%</b>' : "") + (miss ? ' · <b class="mid">' + miss + ' to redo</b>' : "") + '</span></span></button>';
        }).join("") + '</div>';
      bindCrumbs();
      content.querySelectorAll("[data-map]").forEach(function (b) { b.addEventListener("click", function () { openMap(lec, mapById(lec, b.dataset.map)); }); });
    }

    /* ---------- one map ---------- */
    function openMap(lec, map, mode) {
      stopMap();
      var p = load(); p.seen[map.key] = 1; save(p);
      S = { lec: lec, map: map, mode: mode || "explore", focus: null, step: 0, narrow: null, cover: null };
      var i = lec.maps.indexOf(map), prev = lec.maps[i - 1], next = lec.maps[i + 1];
      content.innerHTML = crumbs(lec, map) +
        '<header class="bm-head"><p class="eyebrow">' + esc(lec.short || lec.title) + (map.lo && map.lo.length ? " · " + esc(map.lo.join(" · ")) : "") + '</p>' +
        '<h3><span>' + (map.icon || "🧠") + '</span> ' + esc(map.title) + '</h3>' + (map.ask ? '<p class="bm-ask">' + esc(map.ask) + '</p>' : "") +
        (map.howto ? '<p class="bm-howto">' + map.howto + '</p>' : "") + '</header>' +
        (map.top ? '<details class="bm-top" open><summary>The picture</summary>' + figHtml(map.top) + '</details>' : "") +
        '<div class="bm-bar" id="bm-bar"><div class="bm-tabs" role="tablist">' +
        [["explore", "Explore"], ["build", "Build it"], ["cover", "Cover up"]].map(function (m) { return '<button type="button" role="tab" data-mode="' + m[0] + '">' + m[1] + '</button>'; }).join("") +
        '</div><span class="bm-status" id="bm-status"></span></div>' +
        '<div class="bm-stage" id="bm-stage"></div>' +
        '<nav class="bm-foot">' + (prev ? '<button type="button" class="secondary-action" data-goto="' + esc(prev.id) + '">◀ ' + esc(prev.title) + '</button>' : "<span></span>") +
        '<button type="button" class="secondary-action" data-crumb="lec" data-l="' + esc(lec.id) + '">All maps</button>' +
        (next ? '<button type="button" class="primary-action" data-goto="' + esc(next.id) + '">' + esc(next.title) + ' ▶</button>' : "<span></span>") + '</nav>' +
        '<div class="bm-sheet" id="bm-sheet" hidden></div>';
      bindCrumbs();
      content.querySelectorAll("[data-goto]").forEach(function (b) { b.addEventListener("click", function () { openMap(lec, mapById(lec, b.dataset.goto)); top(); }); });
      content.querySelectorAll("[data-mode]").forEach(function (b) { b.addEventListener("click", function () { setMode(b.dataset.mode); }); });
      if (map.top && FIG) FIG.bind(content.querySelector(".bm-top"));
      renderStage();
      setMode(S.mode);
      if (window.ResizeObserver) {
        ro = new ResizeObserver(function () { schedule(); });
        ro.observe(content);
      } else window.addEventListener("resize", schedule);
      top();
    }
    function stopMap() { if (ro) { ro.disconnect(); ro = null; } window.removeEventListener("resize", schedule); S = null; }

    function schedule() {
      if (raf) return;
      raf = requestAnimationFrame(function () {
        raf = 0;
        if (!S || view.hidden) return;
        var narrow = content.clientWidth < NARROW;
        if (narrow !== S.narrow) { renderStage(); applyMode(); } else draw();
      });
    }

    /* ---------- HTML for the map ---------- */
    function btn(n) {
      var cls = "bm-node" + (n.k ? " k-" + n.k : "") + (n._center ? " bm-center" : "") + (n._head ? " bm-headnode" : "") + (n._root ? " bm-root" : "") + (n.go ? " has-go" : "");
      return '<button type="button" class="' + cls + '" data-id="' + n.id + '" style="--bc:' + COLORS[n.col] + '">' +
        (n.i ? '<span class="bm-ic" aria-hidden="true">' + n.i + '</span>' : "") +
        '<span class="bm-tx"><span class="bm-label">' + n.t + '</span>' +
        (n.l ? '<span class="bm-chips">' + n.l.map(function (c) { return '<i>' + c + '</i>'; }).join("") + '</span>' : "") + '</span>' +
        (n.go ? '<span class="bm-go" aria-hidden="true">↗</span>' : "") +
        '<span class="bm-cover" aria-hidden="true">?</span><span class="bm-mark" aria-hidden="true"></span></button>';
    }
    function sub(n, narrow, tree) {
      var c = n.c || [], lay = "";
      if (c.length === 1) lay = "chain";
      else if (c.length > 1) lay = n.vs && c.length === 2 ? "row vs" : (!narrow && !n.rail && c.length <= (tree ? 4 : 3)) ? "row" : "rail";
      n._lay = lay.split(" ")[0];
      var h = '<div class="bm-sub" style="--bc:' + COLORS[n.col] + '">';
      if (n.a) h += '<div class="bm-arrow" data-for="' + n.id + '"><span>' + n.a + '</span></div>';
      h += '<div class="bm-nodewrap' + (n.x ? " has-exit" : "") + '">' + btn(n);
      if (n.x) h += '<div class="bm-exit" style="--bc:' + COLORS[n.x.col] + '">' + (n.x.a ? '<div class="bm-arrow bm-arrow-x" data-for="' + n.x.id + '"><span>' + n.x.a + '</span></div>' : "") + btn(n.x) + '</div>';
      h += '</div>';
      if (lay) h += '<div class="bm-kids ' + lay.split(" ").map(function (x) { return "bm-" + x; }).join(" ") + '">' + c.map(function (k) { return sub(k, narrow, tree); }).join("") + '</div>';
      if (n.j) h += '<div class="bm-kids bm-chain bm-joinbox">' + sub(n.j, narrow, tree) + '</div>';
      return h + '</div>';
    }
    function weight(n) { var w = 1; if (n.x) w += 1; (n.c || []).forEach(function (k) { w += weight(k); }); if (n.j) w += weight(n.j); return w; }
    function renderStage() {
      var map = S.map, narrow = content.clientWidth < NARROW, h;
      S.narrow = narrow;
      if (map.layout === "tree") {
        h = map.roots.map(function (r) { return '<div class="bm-tree">' + sub(r, narrow, true) + '</div>'; }).join("");
      } else {
        var branch = function (b) { return '<section class="bm-branch" style="--bc:' + COLORS[b.col] + '">' + sub(b, narrow, false) + '</section>'; };
        if (narrow) h = '<div class="bm-cols one"><div class="bm-col">' + map.branches.map(branch).join("") + '</div></div>';
        else {
          var cols = [[], []], w = [0, 0];
          map.branches.forEach(function (b) { var i = b.side === "R" ? 1 : b.side === "L" ? 0 : (w[1] < w[0] ? 1 : 0); cols[i].push(b); w[i] += weight(b) + 2; });
          h = '<div class="bm-cols two"><div class="bm-col">' + cols[0].map(branch).join("") + '</div><div class="bm-col">' + cols[1].map(branch).join("") + '</div></div>';
        }
        h = '<div class="bm-centerwrap">' + btn(map._c) + '</div>' + h;
      }
      $("bm-stage").innerHTML = '<div class="bm-canvas bm-' + map.layout + (narrow ? " bm-narrow" : " bm-wide") + '" id="bm-canvas"><svg class="bm-wires" aria-hidden="true"></svg>' + h + '</div>';
      $("bm-canvas").addEventListener("click", function (e) {
        var b = e.target.closest(".bm-node");
        if (b) tapNode(S.map.byId[b.dataset.id]);
      });
    }

    /* ---------- wires ---------- */
    function leafOf(k) { for (;;) { if (k.j) { k = k.j; continue; } if (k.c && k.c.length) { k = k.c[k.c.length - 1]; continue; } return k; } }
    function draw() {
      var cv = $("bm-canvas");
      if (!cv || !S) return;
      var svg = cv.querySelector(".bm-wires"), cr = cv.getBoundingClientRect(), W = cv.offsetWidth, H = cv.offsetHeight;
      var map = S.map, out = [], used = {}, els = {};
      cv.querySelectorAll(".bm-node").forEach(function (e) { els[e.dataset.id] = e; });
      function R(n) {
        var e = els[n.id];
        if (!e || e.classList.contains("bm-later")) return null;
        var r = e.getBoundingClientRect();
        return { l: r.left - cr.left, r: r.right - cr.left, t: r.top - cr.top, b: r.bottom - cr.top, cx: (r.left + r.right) / 2 - cr.left, cy: (r.top + r.bottom) / 2 - cr.top };
      }
      function path(d, n, cls) {
        used[n.col] = 1;
        out.push('<path class="bm-w' + (cls || "") + '" data-to="' + n.id + '" d="' + d + '" stroke="' + COLORS[n.col] + '" marker-end="url(#bm-ah-' + n.col + ')"/>');
      }
      function curve(x1, y1, x2, y2) { var m = Math.max(12, (y2 - y1) / 2); return "M" + f1(x1) + "," + f1(y1) + " C" + f1(x1) + "," + f1(y1 + m) + " " + f1(x2) + "," + f1(y2 - m) + " " + f1(x2) + "," + f1(y2); }
      function elbow(x, y1, x2, y2) { return "M" + f1(x) + "," + f1(y1) + " L" + f1(x) + "," + f1(y2 - 8) + " Q" + f1(x) + "," + f1(y2) + " " + f1(x + 8) + "," + f1(y2) + " L" + f1(x2) + "," + f1(y2); }
      var G = 4;
      map.order.forEach(function (n) {
        if (!n.parent || n._head) return;
        var c = R(n), p = R(n.parent);
        if (!c || !p) return;
        if (n._exit && c.t > p.b) {
          path(curve(p.cx, p.b, c.cx, c.t - G), n);
        } else if (n._exit) {
          var mx = (p.r + c.l) / 2;
          path("M" + f1(p.r) + "," + f1(p.cy) + " C" + f1(mx) + "," + f1(p.cy) + " " + f1(mx) + "," + f1(c.cy) + " " + f1(c.l - G) + "," + f1(c.cy), n);
        } else if (n._join) {
          if (n.parent._lay === "rail") {
            var last = null;
            n.parent.c.forEach(function (k) { var r = R(k); if (r) last = r; });
            if (last) path("M" + f1(p.l + 14) + "," + f1(last.cy) + " L" + f1(p.l + 14) + "," + f1(c.t - G), n);
          } else {
            n.parent.c.forEach(function (k) { var lf = R(leafOf(k)); if (lf) path(curve(lf.cx, lf.b, c.cx, c.t - G), n); });
          }
        } else if (n.parent._lay === "rail") {
          path(elbow(p.l + 14, p.b, c.l - G, c.cy), n);
        } else {
          path(curve(p.cx, p.b, c.cx, c.t - G), n);
        }
      });
      if (map.layout !== "tree") {
        var cen = R(map._c), heads = [];
        map.branches.forEach(function (b) { var r = R(b); if (r) heads.push({ b: b, r: r }); });
        if (cen && heads.length) {
          var sx = S.narrow ? 10 : cen.cx, maxY = 0;
          heads.forEach(function (h) { maxY = Math.max(maxY, h.r.cy); });
          out.push('<path class="bm-w bm-trunk" d="M' + f1(sx) + "," + f1(cen.b) + " L" + f1(sx) + "," + f1(maxY) + '" stroke="' + COLORS.gold + '"/>');
          heads.forEach(function (h) {
            var left = h.r.cx < sx, ex = left ? h.r.r + G : h.r.l - G;
            path("M" + f1(sx) + "," + f1(h.r.cy) + " L" + f1(ex) + "," + f1(h.r.cy), h.b, " bm-spoke");
          });
        }
      }
      var defs = Object.keys(used).map(function (c) {
        return '<marker id="bm-ah-' + c + '" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto"><path d="M0,0.5 L10,5 L0,9.5 z" fill="' + COLORS[c] + '"/></marker>';
      }).join("");
      svg.setAttribute("viewBox", "0 0 " + W + " " + H);
      svg.setAttribute("width", W); svg.setAttribute("height", H);
      svg.innerHTML = "<defs>" + defs + "</defs>" + out.join("");
      applyLit();
    }

    /* ---------- focus: light up the chain into and out of a box ---------- */
    function litSet(n) {
      var lit = {};
      if (!n) return lit;
      for (var a = n; a; a = a.parent) lit[a.id] = 1;
      if (n.x) lit[n.x.id] = 1;
      (n.c || []).forEach(function (k) { lit[k.id] = 1; });
      if (n.j) lit[n.j.id] = 1;
      if (n._join) n.parent.c.forEach(function (k) { lit[leafOf(k).id] = 1; });
      if (n._center) S.map.branches.forEach(function (b) { lit[b.id] = 1; });
      return lit;
    }
    function applyLit() {
      var cv = $("bm-canvas");
      if (!cv) return;
      var on = S.mode === "explore" && S.focus, lit = on ? litSet(S.focus) : {};
      cv.classList.toggle("bm-focus", !!on);
      cv.querySelectorAll(".bm-node").forEach(function (e) { e.classList.toggle("lit", !!lit[e.dataset.id]); e.classList.toggle("bm-sel", !!(S.focus && e.dataset.id === S.focus.id)); });
      cv.querySelectorAll(".bm-arrow").forEach(function (e) { e.classList.toggle("lit", !!lit[e.dataset.for]); });
      cv.querySelectorAll(".bm-w").forEach(function (e) {
        var n = S.map.byId[e.dataset.to];
        var ok = n ? lit[n.id] && (n._head ? lit.c : n._join ? true : lit[n.parent.id]) : Object.keys(lit).some(function (id) { return id.charAt(0) === "b"; });
        e.classList.toggle("lit", !!ok);
      });
    }

    /* ---------- modes ---------- */
    function setMode(mode) {
      S.mode = mode; S.focus = null; S.step = 0;
      if (mode === "cover") startCover(false);
      content.querySelectorAll("[data-mode]").forEach(function (b) { b.classList.toggle("on", b.dataset.mode === mode); b.setAttribute("aria-selected", b.dataset.mode === mode ? "true" : "false"); });
      applyMode();
      if (mode === "build") showStep();
      else if (mode === "cover") coverNext();
      else closeSheet();
    }
    function applyMode() {
      var cv = $("bm-canvas");
      if (!cv) return;
      var map = S.map;
      cv.classList.toggle("bm-building", S.mode === "build");
      cv.classList.toggle("bm-covering", S.mode === "cover");
      var idx = {};
      map.order.forEach(function (n, i) { idx[n.id] = i; });
      cv.querySelectorAll(".bm-node").forEach(function (e) {
        var id = e.dataset.id, n = map.byId[id];
        e.classList.toggle("bm-later", S.mode === "build" && idx[id] > S.step);
        e.classList.toggle("bm-now", S.mode === "build" && idx[id] === S.step);
        var cov = S.mode === "cover" && S.cover && S.cover.pool.indexOf(id) >= 0 && !S.cover.shown[id];
        e.classList.toggle("bm-covered", !!cov);
        var mark = S.mode === "cover" && S.cover ? S.cover.knew[id] : null;
        e.classList.toggle("bm-knew", mark === true);
        e.classList.toggle("bm-missed", mark === false);
        e.setAttribute("aria-label", cov ? "Hidden box: tap to reveal" : plain(n.t));
      });
      cv.querySelectorAll(".bm-arrow").forEach(function (e) { e.classList.toggle("bm-later", S.mode === "build" && idx[e.dataset.for] > S.step); });
      status();
      draw();
    }
    function status() {
      var s = $("bm-status");
      if (!s) return;
      if (S.mode === "build") s.textContent = "Box " + (S.step + 1) + " of " + S.map.order.length;
      else if (S.mode === "cover" && S.cover) {
        var shown = S.cover.pool.filter(function (id) { return S.cover.shown[id]; }).length, knew = S.cover.pool.filter(function (id) { return S.cover.knew[id] === true; }).length;
        s.textContent = shown + " / " + S.cover.pool.length + " revealed · " + knew + " known";
      } else s.textContent = "Tap any box";
    }

    function tapNode(n) {
      if (!n) return;
      if (S.mode === "build") {
        var i = S.map.order.indexOf(n);
        if (i <= S.step) { S.step = i; applyMode(); showStep(); }
        return;
      }
      if (S.mode === "cover") { S.focus = n; coverSheet(); return; }
      S.focus = n; applyLit(); explainSheet();
    }

    /* ---------- the sheet ---------- */
    function trail(n, hideLast) {
      var chain = [];
      for (var a = n; a; a = a.parent) chain.unshift(a);
      if (chain.length > 4) chain = chain.slice(-4);
      return '<p class="bm-trail">' + chain.map(function (x, i) {
        var last = i === chain.length - 1;
        return (i && x.a ? '<em>' + plain(x.a) + '</em>' : "") + (i ? '<i>→</i>' : "") + '<span' + (last ? ' class="me"' : "") + '>' + (last && hideLast ? "?" : esc(plain(x.t))) + '</span>';
      }).join("") + '</p>';
    }
    function body(n) {
      return '<h4 class="bm-sh-title"><span>' + (n.i || "") + '</span> ' + n.t + '</h4>' +
        (n.l ? '<div class="bm-sh-chips">' + n.l.map(function (c) { return '<i>' + c + '</i>'; }).join("") + '</div>' : "") +
        (n.d ? '<p class="bm-sh-why">' + n.d + '</p>' : "") +
        (n.fig ? '<div class="bm-sh-fig">' + figHtml(n.fig) + '</div>' : "") +
        '<p class="bm-sh-meta">' + (n.s ? "Slide" + (/[-,]/.test(String(n.s)) ? "s " : " ") + esc(n.s) : "") + '</p>' +
        (n.go ? '<button type="button" class="secondary-action bm-sh-go" data-open="' + esc(n.go) + '">Open the map: ' + esc((mapById(S.lec, n.go) || {}).title || n.go) + ' ↗</button>' : "");
    }
    function openSheet(html) {
      var sh = $("bm-sheet");
      sh.innerHTML = '<button type="button" class="bm-sh-x" aria-label="Close">✕</button>' + html;
      sh.hidden = false;
      content.classList.add("bm-sheet-open");
      sh.querySelector(".bm-sh-x").addEventListener("click", function () { if (S.mode === "explore") { S.focus = null; applyLit(); } closeSheet(); });
      var go = sh.querySelector("[data-open]");
      if (go) go.addEventListener("click", function () { openMap(S.lec, mapById(S.lec, go.dataset.open)); });
      if (FIG) FIG.bind(sh);
      sh.scrollTop = 0;
    }
    function closeSheet() { var sh = $("bm-sheet"); if (sh) { sh.hidden = true; sh.innerHTML = ""; } content.classList.remove("bm-sheet-open"); }
    function reveal(n) {
      var e = document.querySelector('#bm-canvas .bm-node[data-id="' + n.id + '"]'), sh = $("bm-sheet");
      if (!e) return;
      var r = e.getBoundingClientRect(), shH = sh && !sh.hidden ? sh.offsetHeight : 0, avail = window.innerHeight - shH, barH = 70;
      if (r.top < barH || r.bottom > avail - 12) window.scrollBy({ top: r.top - Math.max(barH, (avail - r.height) * 0.4), behavior: "smooth" });
    }
    function explainSheet() {
      var n = S.focus, o = S.map.order, i = o.indexOf(n);
      openSheet(trail(n) + body(n) + '<div class="bm-sh-nav"><button type="button" class="secondary-action" id="bm-prev"' + (i ? "" : " disabled") + '>◀ Back</button>' +
        '<button type="button" class="primary-action" id="bm-next"' + (i < o.length - 1 ? "" : " disabled") + '>Next box ▶</button></div>');
      $("bm-prev").addEventListener("click", function () { tapNode(o[i - 1]); });
      $("bm-next").addEventListener("click", function () { tapNode(o[i + 1]); });
      reveal(n);
    }
    function showStep() {
      var o = S.map.order, n = o[S.step], last = S.step === o.length - 1;
      openSheet('<p class="bm-sh-step">Box ' + (S.step + 1) + ' of ' + o.length + '</p>' + trail(n) + body(n) +
        '<div class="bm-sh-nav"><button type="button" class="secondary-action" id="bm-prev"' + (S.step ? "" : " disabled") + '>◀ Back</button>' +
        (last ? '<button type="button" class="primary-action" id="bm-next">Done: now Cover up ▶</button>' : '<button type="button" class="primary-action" id="bm-next">Next box ▶</button>') + '</div>');
      $("bm-prev").addEventListener("click", function () { if (S.step) { S.step -= 1; applyMode(); showStep(); } });
      $("bm-next").addEventListener("click", function () {
        if (last) { var p = load(); p.built[S.map.key] = 1; save(p); setMode("cover"); return; }
        S.step += 1; applyMode(); showStep();
      });
      reveal(n);
    }

    /* ---------- Cover up ---------- */
    function startCover(missesOnly) {
      var p = load(), all = S.map.coverable.map(function (n) { return n.id; }), miss = (p.miss[S.map.key] || []).filter(function (id) { return all.indexOf(id) >= 0; });
      S.cover = { pool: missesOnly && miss.length ? miss : all, shown: {}, knew: {}, full: !(missesOnly && miss.length) };
    }
    function nextCovered() {
      var o = S.map.order;
      for (var i = 0; i < o.length; i += 1) if (S.cover.pool.indexOf(o[i].id) >= 0 && !S.cover.shown[o[i].id]) return o[i];
      return null;
    }
    function coverNext() {
      var n = nextCovered();
      if (!n) { coverDone(); return; }
      S.focus = n; coverSheet();
    }
    function coverSheet() {
      var n = S.focus, c = S.cover, inPool = c.pool.indexOf(n.id) >= 0;
      if (!inPool) { openSheet(trail(n) + body(n) + '<div class="bm-sh-nav"><button type="button" class="primary-action" id="bm-next">Next hidden box ▶</button></div>'); $("bm-next").addEventListener("click", coverNext); reveal(n); return; }
      if (!c.shown[n.id]) {
        openSheet('<p class="bm-sh-step">Hidden box · say it out loud first</p>' + trail(n, true) +
          (n.l ? '<p class="bm-sh-hint">It has ' + n.l.length + ' parts to name.</p>' : "") +
          '<div class="bm-sh-nav"><button type="button" class="primary-action" id="bm-next">Reveal</button></div>');
        $("bm-next").addEventListener("click", function () { c.shown[n.id] = true; applyMode(); coverSheet(); });
      } else if (c.knew[n.id] == null) {
        openSheet(trail(n) + body(n) + '<div class="choices bm-sh-mark"><button type="button" data-k="1">✓ I knew it</button><button type="button" data-k="0">✗ Not yet</button></div>');
        $("bm-sheet").querySelectorAll("[data-k]").forEach(function (b) {
          b.addEventListener("click", function () { c.knew[n.id] = b.dataset.k === "1"; saveCover(false); applyMode(); coverNext(); });
        });
      } else {
        openSheet(trail(n) + body(n) + '<p class="bm-sh-step">' + (c.knew[n.id] ? "✓ You knew this one" : "✗ Marked to redo") + '</p><div class="bm-sh-nav"><button type="button" class="primary-action" id="bm-next">Next hidden box ▶</button></div>');
        $("bm-next").addEventListener("click", coverNext);
      }
      status();
      applyLit();
      reveal(n);
    }
    function saveCover(done) {
      var p = load(), c = S.cover, key = S.map.key, miss = p.miss[key] || [];
      c.pool.forEach(function (id) {
        if (c.knew[id] === false && miss.indexOf(id) < 0) miss.push(id);
        if (c.knew[id] === true) miss = miss.filter(function (x) { return x !== id; });
      });
      p.miss[key] = miss;
      if (done && c.full) {
        var pct = Math.round(100 * c.pool.filter(function (id) { return c.knew[id] === true; }).length / c.pool.length);
        if (p.best[key] == null || pct > p.best[key]) p.best[key] = pct;
      }
      save(p);
    }
    function coverDone() {
      saveCover(true);
      var c = S.cover, knew = c.pool.filter(function (id) { return c.knew[id] === true; }).length, pct = Math.round(100 * knew / c.pool.length), p = load(), miss = (p.miss[S.map.key] || []).length;
      S.focus = null; applyLit();
      var i = S.lec.maps.indexOf(S.map), next = S.lec.maps[i + 1];
      openSheet('<h4 class="bm-sh-title"><span>' + (pct >= 80 ? "🎉" : "🧠") + '</span> ' + knew + ' of ' + c.pool.length + ' known (' + pct + '%)</h4>' +
        '<p class="bm-sh-why">' + (miss ? miss + " box" + (miss === 1 ? " is" : "es are") + " marked to redo. Cover just those, or read their why again in Explore." : "Every box known. Try the next map.") + '</p>' +
        '<div class="bm-sh-nav">' + (miss ? '<button type="button" class="primary-action" id="bm-redo">Cover my ' + miss + ' misses</button>' : "") +
        '<button type="button" class="secondary-action" id="bm-again">Cover all again</button>' +
        (next ? '<button type="button" class="' + (miss ? "secondary-action" : "primary-action") + '" id="bm-next">Next map ▶</button>' : "") + '</div>');
      if ($("bm-redo")) $("bm-redo").addEventListener("click", function () { startCover(true); applyMode(); coverNext(); });
      $("bm-again").addEventListener("click", function () { startCover(false); applyMode(); coverNext(); });
      if (next) $("bm-next").addEventListener("click", function () { openMap(S.lec, next); });
      status();
    }

    document.addEventListener("keydown", function (e) {
      if (!S || view.hidden || e.ctrlKey || e.metaKey || e.altKey) return;
      var t = e.target, tag = (t && t.tagName || "").toLowerCase();
      if (tag === "input" || tag === "textarea" || tag === "select") return;
      if (e.key === "Escape") { if (S.mode === "explore") { S.focus = null; applyLit(); } closeSheet(); }
      else if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        var b = $(e.key === "ArrowRight" ? "bm-next" : "bm-prev");
        if (b && !b.disabled && b.offsetParent) { e.preventDefault(); b.click(); }
        else if (S.mode === "explore" && !S.focus && e.key === "ArrowRight") { e.preventDefault(); tapNode(S.map.order[0]); }
      }
    });

    launch.addEventListener("click", open);
    if (back) back.addEventListener("click", close);
    updateLaunch();
  };

  window.createBrainMaps({ course: "cardio-part-3", courseTitle: "Cardio Part 3", launch: "cardio3-maps-launch", view: "cardio3-maps-view", content: "cardio3-maps-content", back: "cardio3-maps-back", status: "cardio3-maps-status" });
}());
