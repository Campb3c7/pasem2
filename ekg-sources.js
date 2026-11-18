/* EKG "Real EKG sources (to review)": candidate sources of real 12-leads that already come with an
   interpretation, plus a few samples from each, so Anna can judge them before any go into the study tools.
   Data: window.EKG_SOURCES (data/ekg-sources.js: sources + samples). Waveforms: window.EKG_SOURCE_WAVES
   (data/ekg-source-waves.js, ~0.6 MB, loaded only when the page opens).
   Real waveforms are drawn in the standard 3x4 printout (I/II/III, aVR/aVL/aVF, V1-V3, V4-V6, 2.5 s each)
   with a 10-s lead II rhythm strip, 25 mm/s, 10 mm/mV, same paper as the generated 12-leads. View only, no quiz. */
(function () {
  "use strict";
  var data = window.EKG_SOURCES;
  var launch = document.getElementById("ekg-sources-launch");
  var view = document.getElementById("ekg-sources-view");
  var content = document.getElementById("ekg-sources-content");
  var studyView = document.getElementById("study-view");
  if (!data || !launch || !view || !content) return;

  var PX = 3, MM_S = 25, ROW = 30, GUT = 8, FS = 250;
  var LAYOUT = [["I", "aVR", "V1", "V4"], ["II", "aVL", "V2", "V5"], ["III", "aVF", "V3", "V6"]];
  var bySource = {};
  data.sources.forEach(function (s) { bySource[s.id] = s; });
  var counter = 0, filter = "all";

  function esc(v) { return String(v == null ? "" : v).replace(/[&<>'"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c]; }); }

  function decode(str) { var out = [], v = 0; str.split(",").forEach(function (d) { v += +d; out.push(v); }); return out; }

  function draw(wave) {
    var W = (GUT + 10 * MM_S) * PX, H = ROW * 4 * PX, id = "src-grid-" + (counter += 1);
    var html = '<svg class="tw-ekg-svg" viewBox="0 0 ' + W + ' ' + H + '" role="img" aria-label="Recorded 12-lead EKG with a lead II rhythm strip">' +
      '<defs><pattern id="' + id + '" width="' + 5 * PX + '" height="' + 5 * PX + '" patternUnits="userSpaceOnUse">' +
      [1, 2, 3, 4].map(function (k) { return '<line x1="' + k * PX + '" y1="0" x2="' + k * PX + '" y2="' + 5 * PX + '" class="rs-small"/><line x1="0" y1="' + k * PX + '" x2="' + 5 * PX + '" y2="' + k * PX + '" class="rs-small"/>'; }).join("") +
      '<line x1="0" y1="0" x2="0" y2="' + 5 * PX + '" class="rs-big"/><line x1="0" y1="0" x2="' + 5 * PX + '" y2="0" class="rs-big"/></pattern></defs>' +
      '<rect x="0" y="0" width="' + W + '" height="' + H + '" fill="url(#' + id + ')"/>';
    function trace(values, t0, row) {
      var base = (row * ROW + ROW * 0.6) * PX;
      var pts = values.map(function (v, i) {
        var x = (GUT + (t0 + i / FS) * MM_S) * PX, y = base - v * 0.1 * PX; // 0.01 mV = 0.1 mm at 10 mm/mV
        return x.toFixed(1) + "," + y.toFixed(1);
      });
      return '<polyline class="rs-trace tw-trace" points="' + pts.join(" ") + '"/>';
    }
    for (var row = 0; row < 4; row += 1) {
      var base = (row * ROW + ROW * 0.6) * PX;
      html += '<polyline class="tw-cal" points="' + [[0.5, 0], [2, 0], [2, 10], [7, 10], [7, 0], [GUT, 0]].map(function (p) { return (p[0] * PX).toFixed(1) + "," + (base - p[1] * PX).toFixed(1); }).join(" ") + '"/>';
    }
    LAYOUT.forEach(function (leads, row) {
      leads.forEach(function (lead, col) {
        var t0 = col * 2.5, x = (GUT + t0 * MM_S) * PX;
        html += trace(decode(wave[lead]), t0, row);
        if (col) html += '<line class="tw-split" x1="' + x + '" y1="' + ((row * ROW + 8) * PX) + '" x2="' + x + '" y2="' + ((row * ROW + 12) * PX) + '"/>';
        html += '<text class="tw-label" x="' + (x + 4) + '" y="' + ((row * ROW + 5) * PX) + '">' + lead + '</text>';
      });
    });
    html += trace(decode(wave.rhythm), 0, 3) + '<text class="tw-label" x="' + (GUT * PX + 4) + '" y="' + ((3 * ROW + 5) * PX) + '">II</text></svg>';
    return html;
  }

  function loadWaves(done) {
    if (window.EKG_SOURCE_WAVES) { done(); return; }
    var s = document.createElement("script");
    s.src = "data/ekg-source-waves.js";
    s.onload = done;
    s.onerror = function () { content.querySelectorAll(".src-wave").forEach(function (b) { b.innerHTML = '<p class="src-note">The tracing file did not load. Check your connection and reopen this page.</p>'; }); };
    document.head.appendChild(s);
  }

  function verdictTag(s) { return '<span class="src-verdict src-' + esc(s.verdictKind) + '">' + esc(s.verdict) + '</span>'; }

  function sourceCard(s) {
    var rows = [["What it is", s.what], ["Interpretations", s.reads], ["License", s.license], ["Quality", s.quality], ["On the site", s.use]];
    return '<article class="src-card" id="src-' + esc(s.id) + '"><div class="src-card-head"><h4>' + esc(s.name) + '</h4>' + verdictTag(s) + '</div>' +
      '<table class="src-table"><tbody>' + rows.map(function (r) { return '<tr><th>' + r[0] + '</th><td>' + esc(r[1]) + '</td></tr>'; }).join("") + '</tbody></table>' +
      '<p class="src-links">' + s.links.map(function (l) { return '<a href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + ' ↗</a>'; }).join(" ") + '</p>' +
      (s.samplesNote ? '<p class="src-note">' + esc(s.samplesNote) + '</p>' : "") + '</article>';
  }

  function sampleCard(x) {
    var s = bySource[x.source];
    return '<article class="src-sample" data-group="' + esc(x.group) + '">' +
      '<div class="src-sample-head"><h4>' + esc(x.title) + '</h4><span class="src-from">' + esc(s.short) + ' · ' + esc(x.record) + '</span></div>' +
      '<div class="tw-ekg src-wave" data-wave="' + esc(x.id) + '"><p class="src-note">Loading the tracing…</p></div>' +
      '<div class="src-read">' +
      '<p class="src-read-label">' + esc(s.labelsName) + '</p><ul>' + x.labels.map(function (l) { return '<li>' + esc(l) + '</li>'; }).join("") + '</ul>' +
      (x.report ? '<p class="src-read-label">Written report (as recorded)</p><p class="src-report">' + esc(x.report) + '</p>' : "") +
      (x.translation ? '<p class="src-read-label">Report in English (our translation)</p><p>' + esc(x.translation) + '</p>' : "") +
      (x.look ? '<p class="src-read-label">Where to look (our note)</p><p>' + esc(x.look) + '</p>' : "") +
      '</div></article>';
  }

  function render() {
    var groups = [];
    data.samples.forEach(function (x) { if (groups.indexOf(x.group) < 0) groups.push(x.group); });
    content.innerHTML = '<div class="mode-intro"><p class="eyebrow">EKG · Real EKG sources</p><h3>Real EKG sources (to review)</h3>' +
      '<p>' + esc(data.intro) + '</p></div>' +
      '<h3 class="src-h">The sources</h3><div class="src-cards">' + data.sources.map(sourceCard).join("") + '</div>' +
      '<h3 class="src-h">Samples: real 12-leads with their reads</h3><p class="src-note">' + esc(data.samplesIntro) + '</p>' +
      '<div class="src-filter" role="group" aria-label="Show samples">' + ["all"].concat(groups).map(function (g) {
        return '<button type="button" class="src-chip' + (g === filter ? " active" : "") + '" data-g="' + esc(g) + '">' + esc(g === "all" ? "All (" + data.samples.length + ")" : g) + '</button>';
      }).join("") + '</div>' +
      '<div class="src-samples">' + data.samples.map(sampleCard).join("") + '</div>';
    content.querySelectorAll(".src-chip").forEach(function (b) {
      b.addEventListener("click", function () {
        filter = b.getAttribute("data-g");
        content.querySelectorAll(".src-chip").forEach(function (c) { c.classList.toggle("active", c === b); });
        content.querySelectorAll(".src-sample").forEach(function (a) { a.hidden = filter !== "all" && a.getAttribute("data-group") !== filter; });
      });
    });
    loadWaves(function () {
      content.querySelectorAll(".src-wave").forEach(function (box) {
        var w = window.EKG_SOURCE_WAVES[box.getAttribute("data-wave")];
        box.innerHTML = w ? draw(w) : '<p class="src-note">Tracing missing.</p>';
      });
    });
  }

  function open() {
    studyView.hidden = true;
    document.querySelectorAll(".walkthrough-view").forEach(function (s) { s.hidden = true; });
    view.hidden = false;
    render();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function close() { view.hidden = true; studyView.hidden = false; content.innerHTML = ""; window.scrollTo({ top: 0, behavior: "smooth" }); }

  launch.addEventListener("click", open);
  document.getElementById("ekg-sources-back").addEventListener("click", close);
  window.EKGSourcesDraw = draw;
}());
