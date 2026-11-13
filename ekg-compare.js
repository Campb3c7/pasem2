/* EKG Look-alikes & study guide: look-alike rhythm sets shown side by side on fresh strips with the one
   question that splits them, a "which one is it?" drill, and the EKG Rhythm Study Guide as a chart with
   two drills (fill in one cell, name the row). Data: window.EKG_COMPARE (data/ekg-compare.js); strips
   come from window.RhythmSynth with the specs in window.EKG_RHYTHMS. Progress per pair / row id. */
(function () {
  "use strict";

  var data = window.EKG_COMPARE;
  var rhythms = window.EKG_RHYTHMS;
  var synth = window.RhythmSynth;
  var launch = document.getElementById("ekg-compare-launch");
  var view = document.getElementById("ekg-compare-view");
  var content = document.getElementById("ekg-compare-content");
  var studyView = document.getElementById("study-view");
  if (!data || !rhythms || !synth || !launch || !view || !content) return;

  var PROGRESS_KEY = "pasem2:ekg-compare:progress";
  var DRILL_LENGTH = 15, CHART_LENGTH = 20, ROW_LENGTH = 12, RETURN_GAP = 3;
  var byRhythm = {};
  rhythms.groups.forEach(function (g) { g.rhythms.forEach(function (r) { byRhythm[r.id] = r; }); });
  var pairs = data.pairs, chart = data.chart, columns = data.columns;
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
  function pick(items) { return items[Math.floor(Math.random() * items.length)]; }
  function loadProgress() { try { var v = localStorage.getItem(PROGRESS_KEY); return v ? JSON.parse(v) : {}; } catch (e) { return {}; } }
  function record(id, right) {
    var progress = loadProgress(), entry = progress[id] || { n: 0, r: 0, last: false };
    entry.n += 1; if (right) entry.r += 1; entry.last = !!right;
    progress[id] = entry;
    try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress)); } catch (e) {}
  }
  function stripHtml(rhythm) { return '<div class="rs-box">' + synth.make(rhythm.gen).svg + '</div>'; }
  function name(id) { return byRhythm[id].name; }

  // ---- open / close --------------------------------------------------------
  function open() {
    studyView.hidden = true;
    document.querySelectorAll(".walkthrough-view").forEach(function (section) { section.hidden = true; });
    document.querySelectorAll("[data-rhythm-tool]").forEach(function (other) { other.innerHTML = ""; });
    view.hidden = false;
    renderHome();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function close() {
    state = null;
    view.hidden = true;
    studyView.hidden = false;
    content.innerHTML = "";
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function top(label) {
    return '<div class="session-top"><button type="button" id="cmp-home">← Look-alikes</button><span>' + escapeHtml(label) + '</span></div>';
  }
  function bindHome() { el("cmp-home").addEventListener("click", renderHome); }

  // ---- home ----------------------------------------------------------------
  function renderHome() {
    state = null;
    var progress = loadProgress();
    var html = '<div class="drill-heading"><p class="eyebrow">EKG · objective 8</p><h2>Look-alikes &amp; study guide</h2>' +
      '<p>The rhythms that get mixed up, side by side on fresh strips, each with the one question that tells them apart and why they look different. Plus your EKG Rhythm Study Guide as a chart you can drill one box at a time.</p></div>';
    html += '<div class="murmur-quick rs-quick">' +
      '<button class="murmur-quick-card" type="button" id="cmp-mixed"><span>Mixed drill</span><strong>Which one is it? →</strong><small>' + DRILL_LENGTH + ' strips from every look-alike set. You only choose between the look-alikes, so you have to find the difference.</small></button>' +
      '<button class="murmur-quick-card" type="button" id="cmp-chart"><span>Study guide</span><strong>Rhythm chart →</strong><small>The full study guide table, then drill it: fill in one box at a time, or name the rhythm from its row.</small></button>' +
      '</div><p class="eyebrow rs-groups-label">Look-alike sets</p><div class="struggle-group-list">';
    pairs.forEach(function (pair, index) {
      var p = progress[pair.id];
      html += '<button class="struggle-group-card" type="button" data-cmp-pair="' + pair.id + '"><span class="drill-section-number">' + String(index + 1).padStart(2, "0") + '</span><strong>' + escapeHtml(pair.title) + '</strong><small>' + (p ? p.r + ' / ' + p.n + ' right' : pair.ids.length + ' rhythms') + '</small></button>';
    });
    html += '</div>';
    content.innerHTML = html;
    el("cmp-mixed").addEventListener("click", function () { startDrill("Which one is it? · all sets", pairs); });
    el("cmp-chart").addEventListener("click", renderChart);
    content.querySelectorAll("[data-cmp-pair]").forEach(function (button) {
      button.addEventListener("click", function () { renderPair(pairs.find(function (p) { return p.id === button.dataset.cmpPair; })); });
    });
  }

  // ---- one look-alike set --------------------------------------------------
  function diffTable(pair) {
    return '<div class="table-scroll"><table class="learn-table cmp-table"><thead><tr><th></th>' + pair.ids.map(function (id) { return '<th>' + escapeHtml(name(id)) + '</th>'; }).join("") + '</tr></thead><tbody>' +
      pair.rows.map(function (row) { return '<tr><th>' + escapeHtml(row[0]) + '</th>' + row.slice(1).map(function (c) { return '<td>' + escapeHtml(c) + '</td>'; }).join("") + '</tr>'; }).join("") +
      '</tbody></table></div>';
  }
  function teachPair(pair) {
    return '<div class="box-hy"><span class="lbl">The one question to ask</span>' + escapeHtml(pair.ask) + '</div>' + diffTable(pair) +
      '<p class="rs-mgmt"><strong>Why they look different:</strong> ' + escapeHtml(pair.why) + '</p>';
  }
  function renderPair(pair) {
    state = null;
    var html = top(pair.title) + '<div class="drill-heading"><p class="eyebrow">Look-alike set</p><h2>' + escapeHtml(pair.title) + '</h2></div>' +
      '<article class="learn-card rs-card"><div class="learn-body">' + teachPair(pair) + '</div></article>';
    pair.ids.forEach(function (id) {
      var r = byRhythm[id];
      html += '<article class="learn-card rs-card"><div class="rs-card-head"><h3>' + escapeHtml(r.name) + '</h3><button class="secondary-action rs-new" type="button" data-cmp-new="' + id + '">New strip ↻</button></div>' +
        '<div id="cmp-strip-' + id + '">' + stripHtml(r) + '</div><div class="learn-body"><div class="box-hy"><span class="lbl">How to spot it</span>' + escapeHtml(r.clue) + '</div></div></article>';
    });
    html += '<button class="primary-action full-action" id="cmp-pair-quiz" type="button">Quiz this set →</button>';
    content.innerHTML = html;
    bindHome();
    content.querySelectorAll("[data-cmp-new]").forEach(function (button) {
      button.addEventListener("click", function () { el("cmp-strip-" + button.dataset.cmpNew).innerHTML = stripHtml(byRhythm[button.dataset.cmpNew]); });
    });
    el("cmp-pair-quiz").addEventListener("click", function () { startDrill(pair.title, [pair], 8); });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // ---- shared question pieces ---------------------------------------------
  function choicesHtml(labels) {
    return '<div class="choices">' + labels.map(function (label, index) {
      return '<button class="choice" type="button" data-choice="' + index + '"><span>' + String.fromCharCode(65 + index) + '</span>' + escapeHtml(label) + '</button>';
    }).join("") + '</div>';
  }
  function markChoices(group, correct, selected) {
    group.querySelectorAll("[data-choice]").forEach(function (button) {
      var index = Number(button.dataset.choice);
      button.disabled = true;
      if (index === correct) button.classList.add("correct");
      else if (index === selected) button.classList.add("wrong");
      else button.classList.add("dimmed");
    });
  }
  function header() {
    var percent = Math.round(state.done / Math.max(state.total, 1) * 100);
    return top(state.title) + '<div class="session-progress"><span style="width:' + percent + '%"></span></div>' +
      '<div class="session-counter">' + state.done + ' of ' + state.total + ' done · ' + state.firstTry + ' right on the first try</div>';
  }
  // Runs one queue of questions. Each item: { prompt, visual, labels, answer, teach(rightOrWrongPick), id, retry }.
  function runQueue() {
    if (state.position >= state.items.length) { renderComplete(); return; }
    var item = state.items[state.position];
    var q = state.build(item);
    content.innerHTML = header() + '<div class="recall-step-label">' + (item.retry ? "Coming back to this one" : "Question " + (state.position + 1)) + '</div>' +
      '<article class="question-card immersive-card rs-question">' + (q.visual ? '<div class="wb-sticky">' + q.visual + '</div>' : "") + '<h3>' + escapeHtml(q.prompt) + '</h3>' + (q.extra || "") +
      choicesHtml(q.labels) + '<div class="explanation" id="cmp-explanation" hidden></div></article>' +
      '<button class="primary-action full-action" id="cmp-next" type="button" hidden>Next →</button>';
    bindHome();
    var group = content.querySelector(".choices"), answered = false;
    group.querySelectorAll("[data-choice]").forEach(function (button) {
      button.addEventListener("click", function () {
        if (answered) return;
        answered = true;
        var selected = Number(button.dataset.choice), correct = q.labels.indexOf(q.answer), right = selected === correct;
        markChoices(group, correct, selected);
        var exp = el("cmp-explanation");
        exp.hidden = false;
        exp.innerHTML = '<strong>' + (right ? "Correct: " : "Answer: ") + escapeHtml(q.answer) + '</strong>' + (q.teach ? '<div class="learn-body">' + q.teach + '</div>' : "");
        if (!item.retry) state.done += 1;
        if (right) { if (!item.retry) { state.firstTry += 1; record(item.id, true); } }
        else {
          state.missed[q.missLabel || q.answer] = true;
          record(item.id, false);
          if (!item.retry) state.items.splice(Math.min(state.position + 1 + RETURN_GAP, state.items.length), 0, Object.assign({}, item, { retry: true }));
        }
        el("cmp-next").hidden = false;
        exp.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    });
    el("cmp-next").addEventListener("click", function () { state.position += 1; runQueue(); });
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }
  function renderComplete() {
    var finished = state, missed = Object.keys(finished.missed);
    content.innerHTML = '<section class="complete-panel"><span class="complete-icon">' + (missed.length ? "📈" : "🎯") + '</span><p class="eyebrow">Done</p><h3>' + escapeHtml(finished.title) + '</h3>' +
      '<p>' + finished.firstTry + ' of ' + finished.total + ' right on the first try.</p>' +
      (missed.length ? '<p class="rs-missed">Worth another look: ' + missed.map(escapeHtml).join(", ") + '</p>' : "") +
      '<div class="session-actions"><button class="primary-action" id="cmp-again" type="button">Go again</button><button class="secondary-action" id="cmp-done" type="button">Look-alikes home</button></div></section>';
    el("cmp-again").addEventListener("click", finished.again);
    el("cmp-done").addEventListener("click", renderHome);
  }

  // ---- which one is it? ----------------------------------------------------
  function startDrill(title, set, length) {
    length = length || DRILL_LENGTH;
    var items = [];
    while (items.length < length) items = items.concat(shuffle(set));
    items = items.slice(0, length).map(function (pair) { return { id: pair.id, pair: pair, rhythm: pick(pair.ids) }; });
    state = {
      title: title, items: items, position: 0, total: length, done: 0, firstTry: 0, missed: {},
      again: function () { startDrill(title, set, length); },
      build: function (item) {
        var pair = item.pair;
        return {
          prompt: "Which of these is it?", visual: stripHtml(byRhythm[item.rhythm]),
          labels: shuffle(pair.ids.map(name)), answer: name(item.rhythm), missLabel: pair.title,
          teach: '<p>' + escapeHtml(byRhythm[item.rhythm].clue) + '</p>' + teachPair(pair)
        };
      }
    };
    runQueue();
  }

  // ---- study guide chart ---------------------------------------------------
  function renderChart() {
    state = null;
    var families = [];
    chart.forEach(function (row) { if (families.indexOf(row.family) < 0) families.push(row.family); });
    var html = top("Rhythm chart") + '<div class="drill-heading"><p class="eyebrow">EKG Rhythm Study Guide</p><h2>Rhythm chart</h2>' +
      '<p>Every row of your study guide, word for word. Tap "Hide the answers" to cover everything but the names and quiz yourself across a row, then use the drills.</p></div>' +
      '<div class="murmur-quick rs-quick">' +
      '<button class="murmur-quick-card" type="button" id="cmp-cells"><span>Drill</span><strong>Fill in the chart →</strong><small>' + CHART_LENGTH + ' boxes: one rhythm, one column, four answers from the same column.</small></button>' +
      '<button class="murmur-quick-card" type="button" id="cmp-rows"><span>Drill</span><strong>Name the row →</strong><small>' + ROW_LENGTH + ' rows: read rate, regularity, P, PR, QRS, QT and the clue, then name the rhythm.</small></button>' +
      '</div><button class="secondary-action" type="button" id="cmp-hide">Hide the answers</button>' +
      '<div class="table-scroll cmp-chart-wrap"><table class="learn-table cmp-chart"><thead><tr><th>Rhythm</th>' + columns.map(function (c) { return '<th>' + escapeHtml(c) + '</th>'; }).join("") + '</tr></thead><tbody>';
    families.forEach(function (family) {
      html += '<tr class="cmp-family"><td colspan="' + (columns.length + 1) + '">' + escapeHtml(family) + '</td></tr>';
      chart.filter(function (r) { return r.family === family; }).forEach(function (row) {
        html += '<tr><th>' + escapeHtml(row.name) + '</th>' + row.cells.map(function (c) { return '<td><span class="cmp-cell">' + escapeHtml(c) + '</span></td>'; }).join("") + '</tr>';
      });
    });
    html += '</tbody></table></div>';
    content.innerHTML = html;
    bindHome();
    el("cmp-cells").addEventListener("click", startCells);
    el("cmp-rows").addEventListener("click", startRows);
    el("cmp-hide").addEventListener("click", function () {
      var wrap = content.querySelector(".cmp-chart-wrap");
      wrap.classList.toggle("cmp-hidden");
      el("cmp-hide").textContent = wrap.classList.contains("cmp-hidden") ? "Show the answers (or tap a box)" : "Hide the answers";
    });
    content.querySelectorAll(".cmp-cell").forEach(function (cell) { cell.addEventListener("click", function () { cell.classList.toggle("shown"); }); });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  function rowTeach(row) {
    return '<table class="learn-table rs-look"><tbody>' + columns.map(function (c, i) { return '<tr><th>' + escapeHtml(c) + '</th><td>' + escapeHtml(row.cells[i]) + '</td></tr>'; }).join("") + '</tbody></table>';
  }
  function startCells() {
    var items = [];
    for (var i = 0; i < CHART_LENGTH; i += 1) {
      var row = pick(chart), col = Math.floor(Math.random() * columns.length);
      var others = [];
      var right = row.cells[col].toLowerCase();
      chart.forEach(function (r) {
        var v = r.cells[col], low = v.toLowerCase();
        // Skip near-synonyms ("Regular" vs "Usually regular") so only one answer can be right.
        if (low.indexOf(right) < 0 && right.indexOf(low) < 0 && others.indexOf(v) < 0) others.push(v);
      });
      if (others.length < 3) { i -= 1; continue; }
      items.push({ id: row.id, row: row, col: col, wrong: shuffle(others).slice(0, 3) });
    }
    state = {
      title: "Fill in the chart", items: items, position: 0, total: items.length, done: 0, firstTry: 0, missed: {}, again: startCells,
      build: function (item) {
        return { prompt: item.row.name + ": " + columns[item.col] + "?", labels: shuffle([item.row.cells[item.col]].concat(item.wrong)), answer: item.row.cells[item.col], missLabel: item.row.name + " (" + columns[item.col] + ")", teach: rowTeach(item.row) };
      }
    };
    runQueue();
  }
  function startRows() {
    var items = shuffle(chart).slice(0, ROW_LENGTH).map(function (row) {
      // Wrong names: prefer the same family (the hard look-alikes), then any.
      var same = shuffle(chart.filter(function (r) { return r !== row && r.family === row.family; }));
      var rest = shuffle(chart.filter(function (r) { return r !== row && r.family !== row.family; }));
      return { id: row.id, row: row, wrong: same.concat(rest).slice(0, 3).map(function (r) { return r.name; }) };
    });
    state = {
      title: "Name the row", items: items, position: 0, total: items.length, done: 0, firstTry: 0, missed: {}, again: startRows,
      build: function (item) {
        var cells = '<table class="learn-table rs-look"><tbody>' + columns.slice(0, 6).map(function (c, i) { return '<tr><th>' + escapeHtml(c) + '</th><td>' + escapeHtml(item.row.cells[i]) + '</td></tr>'; }).join("") + '</tbody></table>';
        return { prompt: "Which rhythm has this row?", extra: cells, labels: shuffle([item.row.name].concat(item.wrong)), answer: item.row.name, teach: '<p><strong>Other:</strong> ' + escapeHtml(item.row.cells[6]) + '</p>' };
      }
    };
    runQueue();
  }

  launch.addEventListener("click", open);
  document.getElementById("ekg-compare-back").addEventListener("click", close);
}());
