/* EKG Axis trainer (objective 11): read the axis from drawn lead I and aVF complexes (or all six limb
   leads), see it on the hexaxial wheel, and drill what shifts the axis. Data: window.EKG_AXIS
   (data/ekg-axis.js). Complexes are drawn from a random angle, so every question is new. */
(function () {
  "use strict";

  var data = window.EKG_AXIS;
  var launch = document.getElementById("ekg-axis-launch");
  var view = document.getElementById("ekg-axis-view");
  var content = document.getElementById("ekg-axis-content");
  var studyView = document.getElementById("study-view");
  if (!data || !launch || !view || !content) return;

  var PROGRESS_KEY = "pasem2:ekg-axis:progress";
  var READ_LENGTH = 12, RETURN_GAP = 3;
  var LEADS = { "I": 0, "II": 60, "III": 120, "aVR": -150, "aVL": -30, "aVF": 90 };
  var byQuad = {};
  data.quadrants.forEach(function (q) { byQuad[q.id] = q; });
  var state = null;

  function el(id) { return content.querySelector("#" + id); }
  function escapeHtml(value) {
    return String(value == null ? "" : value).replace(/[&<>'"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[c];
    });
  }
  function shuffle(items) {
    var copy = items.slice();
    for (var i = copy.length - 1; i > 0; i -= 1) { var j = Math.floor(Math.random() * (i + 1)); var v = copy[i]; copy[i] = copy[j]; copy[j] = v; }
    return copy;
  }
  function loadProgress() { try { var v = localStorage.getItem(PROGRESS_KEY); return v ? JSON.parse(v) : {}; } catch (e) { return {}; } }
  function record(id, right) {
    var progress = loadProgress(), entry = progress[id] || { n: 0, r: 0, last: false };
    entry.n += 1; if (right) entry.r += 1; entry.last = !!right;
    progress[id] = entry;
    try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)); } catch (e) {}
  }
  function rad(deg) { return deg * Math.PI / 180; }

  // ---- drawings ------------------------------------------------------------
  // One limb-lead complex: the QRS height follows the projection of the axis on that lead.
  function leadSvg(lead, angle) {
    var proj = Math.cos(rad(angle - LEADS[lead]));
    var r = 6 + Math.max(0, proj) * 38, s = 6 + Math.max(0, -proj) * 38, base = 52, tAmp = proj * 9;
    var x = 8, pts = [[x, base], [x + 14, base], [x + 19, base - 5], [x + 24, base], [x + 32, base], [x + 35, base + 3], [x + 40, base - r], [x + 46, base + s], [x + 50, base], [x + 60, base], [x + 70, base - tAmp], [x + 80, base], [x + 104, base]];
    var grid = "";
    for (var gx = 0; gx <= 120; gx += 6) grid += '<line x1="' + gx + '" y1="0" x2="' + gx + '" y2="100" class="' + (gx % 30 === 0 ? "rs-big" : "rs-small") + '"/>';
    for (var gy = 0; gy <= 100; gy += 6) grid += '<line x1="0" y1="' + gy + '" x2="120" y2="' + gy + '" class="' + (gy % 30 === 0 ? "rs-big" : "rs-small") + '"/>';
    return '<figure class="ax-lead"><svg viewBox="0 0 120 100" role="img" aria-label="Lead ' + lead + '">' + grid +
      '<polyline class="rs-trace" points="' + pts.map(function (p) { return p[0] + "," + p[1].toFixed(1); }).join(" ") + '"/></svg><figcaption>' + lead + '</figcaption></figure>';
  }
  function wheelSvg(angle, showQuads) {
    var c = 110, R = 88, html = '<svg class="ax-wheel" viewBox="0 0 220 220" role="img" aria-label="Hexaxial reference system">';
    if (showQuads) {
      [["normal", 0, 90], ["lad", -90, 0], ["rad", 90, 180], ["extreme", 180, 270]].forEach(function (q) {
        var a0 = rad(q[1]), a1 = rad(q[2]);
        html += '<path class="ax-q ax-q-' + q[0] + '" d="M' + c + ',' + c + ' L' + (c + R * Math.cos(a0)).toFixed(1) + ',' + (c + R * Math.sin(a0)).toFixed(1) + ' A' + R + ',' + R + ' 0 0 1 ' + (c + R * Math.cos(a1)).toFixed(1) + ',' + (c + R * Math.sin(a1)).toFixed(1) + ' Z"/>';
      });
    }
    Object.keys(LEADS).forEach(function (lead) {
      var a = rad(LEADS[lead]);
      html += '<line class="ax-axisline" x1="' + (c - R * Math.cos(a)).toFixed(1) + '" y1="' + (c - R * Math.sin(a)).toFixed(1) + '" x2="' + (c + R * Math.cos(a)).toFixed(1) + '" y2="' + (c + R * Math.sin(a)).toFixed(1) + '"/>' +
        '<text class="ax-label" x="' + (c + (R + 13) * Math.cos(a)).toFixed(1) + '" y="' + (c + (R + 13) * Math.sin(a) + 3).toFixed(1) + '" text-anchor="middle">' + lead + '</text>';
    });
    html += '<text class="ax-deg" x="' + (c + 30) + '" y="' + (c - 4) + '">0°</text><text class="ax-deg" x="' + (c + 4) + '" y="' + (c + 34) + '">+90°</text><text class="ax-deg" x="' + (c + 4) + '" y="' + (c - 28) + '">-90°</text><text class="ax-deg" x="' + (c - 46) + '" y="' + (c - 4) + '">180°</text>';
    if (angle != null) {
      var a = rad(angle), x = c + (R - 8) * Math.cos(a), y = c + (R - 8) * Math.sin(a);
      html += '<line class="ax-arrow" x1="' + c + '" y1="' + c + '" x2="' + x.toFixed(1) + '" y2="' + y.toFixed(1) + '"/><circle class="ax-tip" cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="4.5"/>';
    }
    return html + '</svg>';
  }
  function legend() {
    return '<div class="ax-legend">' + data.quadrants.map(function (q) { return '<span><i class="ax-sw ax-q-' + q.id + '"></i>' + escapeHtml(q.name) + ' (' + q.range + ')</span>'; }).join("") + '</div>';
  }
  function quadTable() {
    return '<table class="learn-table rs-look"><thead><tr><th>Lead I</th><th>aVF</th><th>Axis</th><th>Thumbs</th></tr></thead><tbody>' + data.quadrants.map(function (q) {
      return '<tr><td>' + q.leadI + '</td><td>' + q.aVF + '</td><td>' + escapeHtml(q.name) + ' (' + q.range + ')</td><td>' + escapeHtml(q.thumbs) + '</td></tr>';
    }).join("") + '</tbody></table>';
  }

  // ---- open / close --------------------------------------------------------
  function open() {
    studyView.hidden = true;
    document.querySelectorAll(".walkthrough-view").forEach(function (section) { section.hidden = true; });
    view.hidden = false;
    renderHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function close() { state = null; view.hidden = true; studyView.hidden = false; content.innerHTML = ""; window.scrollTo({ top: 0, behavior: "smooth" }); }
  function top(label) { return '<div class="session-top"><button type="button" id="ax-home">← Axis trainer</button><span>' + escapeHtml(label) + '</span></div>'; }
  function bindHome() { el("ax-home").addEventListener("click", renderHome); }

  function renderHome() {
    state = null;
    content.innerHTML = '<div class="drill-heading"><p class="eyebrow">EKG · objective 11</p><h2>Axis trainer</h2>' +
      '<p>Look only at lead I and aVF. Is the QRS mostly up (positive) or mostly down (negative) in each? That sorts every EKG into one of four boxes.</p></div>' +
      '<article class="learn-card rs-card"><div class="learn-body ax-learn"><div>' + wheelSvg(null, true) + legend() + '</div><div>' + quadTable() +
      '<div class="box-hy"><span class="lbl">Cause → effect</span>Axis goes TOWARD hypertrophy (more muscle, more voltage) and AWAY from an infarct (dead tissue has no vector, so the opposite forces win). A raised diaphragm makes the heart horizontal (left); a thin body or a child makes it vertical (right).</div></div></div></article>' +
      '<div class="murmur-quick rs-quick">' +
      '<button class="murmur-quick-card" type="button" id="ax-read"><span>Read it</span><strong>Lead I + aVF →</strong><small>' + READ_LENGTH + ' EKGs: two leads, name the axis, then see it on the wheel.</small></button>' +
      '<button class="murmur-quick-card" type="button" id="ax-six"><span>Harder</span><strong>All six limb leads →</strong><small>' + READ_LENGTH + ' EKGs showing I, II, III, aVR, aVL, aVF: find I and aVF yourself.</small></button>' +
      '<button class="murmur-quick-card" type="button" id="ax-causes"><span>Causes</span><strong>What shifts the axis? →</strong><small>' + data.causes.length + ' patients and conditions: normal, left, right or extreme?</small></button>' +
      '</div>';
    el("ax-read").addEventListener("click", function () { startRead(false); });
    el("ax-six").addEventListener("click", function () { startRead(true); });
    el("ax-causes").addEventListener("click", startCauses);
  }

  // ---- quiz runner ---------------------------------------------------------
  function choicesHtml(labels) {
    return '<div class="choices">' + labels.map(function (label, index) {
      return '<button class="choice" type="button" data-choice="' + index + '"><span>' + String.fromCharCode(65 + index) + '</span>' + escapeHtml(label) + '</button>';
    }).join("") + '</div>';
  }
  function header() {
    var percent = Math.round(state.done / Math.max(state.total, 1) * 100);
    return top(state.title) + '<div class="session-progress"><span style="width:' + percent + '%"></span></div><div class="session-counter">' + state.done + ' of ' + state.total + ' done · ' + state.firstTry + ' right on the first try</div>';
  }
  function run() {
    if (state.position >= state.items.length) { complete(); return; }
    var item = state.items[state.position], q = state.build(item);
    var labels = data.quadrants.map(function (x) { return x.name; });
    content.innerHTML = header() + '<div class="recall-step-label">' + (item.retry ? "Coming back to this one" : "Question " + (state.position + 1)) + '</div>' +
      '<article class="question-card immersive-card rs-question">' + (q.visual || "") + '<h3>' + escapeHtml(q.prompt) + '</h3>' + choicesHtml(labels) +
      '<div class="explanation" id="ax-explanation" hidden></div></article><button class="primary-action full-action" id="ax-next" type="button" hidden>Next →</button>';
    bindHome();
    var group = content.querySelector(".choices"), answered = false;
    group.querySelectorAll("[data-choice]").forEach(function (button) {
      button.addEventListener("click", function () {
        if (answered) return;
        answered = true;
        var selected = Number(button.dataset.choice), correct = labels.indexOf(byQuad[q.answer].name), right = selected === correct;
        group.querySelectorAll("[data-choice]").forEach(function (b) {
          var i = Number(b.dataset.choice); b.disabled = true;
          b.classList.add(i === correct ? "correct" : i === selected ? "wrong" : "dimmed");
        });
        var exp = el("ax-explanation");
        exp.hidden = false;
        exp.innerHTML = '<strong>' + (right ? "Correct: " : "Answer: ") + escapeHtml(byQuad[q.answer].name) + '</strong><div class="learn-body">' + q.teach + '</div>';
        if (!item.retry) state.done += 1;
        if (right) { if (!item.retry) { state.firstTry += 1; record(item.id, true); } }
        else {
          record(item.id, false);
          state.missed[q.missLabel] = true;
          if (!item.retry) state.items.splice(Math.min(state.position + 1 + RETURN_GAP, state.items.length), 0, Object.assign({}, item, { retry: true }));
        }
        el("ax-next").hidden = false;
        exp.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    });
    el("ax-next").addEventListener("click", function () { state.position += 1; run(); });
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }
  function complete() {
    var finished = state, missed = Object.keys(finished.missed);
    content.innerHTML = '<section class="complete-panel"><span class="complete-icon">' + (missed.length ? "📈" : "🎯") + '</span><p class="eyebrow">Done</p><h3>' + escapeHtml(finished.title) + '</h3><p>' + finished.firstTry + ' of ' + finished.total + ' right on the first try.</p>' +
      (missed.length ? '<p class="rs-missed">Worth another look: ' + missed.map(escapeHtml).join(", ") + '</p>' : "") +
      '<div class="session-actions"><button class="primary-action" id="ax-again" type="button">Go again</button><button class="secondary-action" id="ax-done" type="button">Axis trainer</button></div></section>';
    el("ax-again").addEventListener("click", finished.again);
    el("ax-done").addEventListener("click", renderHome);
  }

  // ---- read the axis -------------------------------------------------------
  function startRead(six) {
    var items = [];
    while (items.length < READ_LENGTH) items = items.concat(shuffle(data.quadrants));
    items = items.slice(0, READ_LENGTH).map(function (quad) {
      return { id: "ax-read-" + quad.id, quad: quad, angle: Math.round(quad.draw[0] + Math.random() * (quad.draw[1] - quad.draw[0])) };
    });
    state = {
      title: six ? "All six limb leads" : "Lead I + aVF", items: items, position: 0, total: items.length, done: 0, firstTry: 0, missed: {},
      again: function () { startRead(six); },
      build: function (item) {
        var leads = six ? shuffle(Object.keys(LEADS)) : ["I", "aVF"];
        var signI = Math.cos(rad(item.angle)) > 0 ? "positive (up)" : "negative (down)", signF = Math.sin(rad(item.angle)) > 0 ? "positive (up)" : "negative (down)";
        return {
          visual: '<div class="wb-sticky"><div class="ax-leads' + (six ? " six" : "") + '">' + leads.map(function (l) { return leadSvg(l, item.angle); }).join("") + '</div></div>',
          prompt: "What is the electrical axis?", answer: item.quad.id, missLabel: item.quad.name,
          teach: '<div class="ax-reveal">' + wheelSvg(item.angle, true) + '<div><p>Lead I is ' + signI + ' and aVF is ' + signF + '. ' + escapeHtml(item.quad.thumbs) + '</p>' +
            '<p class="rs-rate">This one is about ' + (item.angle > 0 ? "+" : "") + item.angle + '° (' + escapeHtml(item.quad.range) + ').</p>' + legend() + '</div></div>'
        };
      }
    };
    run();
  }

  // ---- causes --------------------------------------------------------------
  function startCauses() {
    var items = shuffle(data.causes).map(function (c) { return { id: c.id, cause: c }; });
    state = {
      title: "What shifts the axis?", items: items, position: 0, total: items.length, done: 0, firstTry: 0, missed: {}, again: startCauses,
      build: function (item) {
        return { prompt: item.cause.prompt + ": which axis would you expect?", answer: item.cause.answer, missLabel: item.cause.prompt, teach: '<p>' + escapeHtml(item.cause.why) + '</p>' };
      }
    };
    run();
  }

  launch.addEventListener("click", open);
  document.getElementById("ekg-axis-back").addEventListener("click", close);
}());
