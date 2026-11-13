/* EKG MI locator (objectives 6, 14, 15): a color-coded 12-lead map, "Locate the STEMI" on a drawn
   12-lead (wall → artery → reciprocal leads), "STEMI or not?" with measurable ST elevation, and
   "Ischemia, injury or infarction?". Data: window.EKG_MI (data/ekg-mi.js). Drawings are schematic:
   one beat per lead on standard paper (1 small box = 1 mm = 0.04 s). */
(function () {
  "use strict";

  var data = window.EKG_MI;
  var launch = document.getElementById("ekg-mi-launch");
  var view = document.getElementById("ekg-mi-view");
  var content = document.getElementById("ekg-mi-content");
  var studyView = document.getElementById("study-view");
  if (!data || !launch || !view || !content) return;

  var PROGRESS_KEY = "pasem2:ekg-mi:progress";
  var LOCATE_LENGTH = 10, STEMI_LENGTH = 12, RETURN_GAP = 3;
  var LIMB = { I: true, II: true, III: true, aVR: true, aVL: true, aVF: true };
  var STEMI_ANSWERS = ["Yes: meets STEMI criteria", "No: not enough elevation", "No: not 2 leads facing the same area", "No: that's ST depression (ischemia)"];
  var DAMAGE_ANSWERS = ["Ischemia", "Injury", "Infarction", "Normal"];
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

  // ---- drawing -------------------------------------------------------------
  // One beat. m = complex in mm ({p,q,r,s,t,st}); px = pixels per mm (and per 0.04 s box).
  function beatPoints(m, px, base, x0) {
    var pts = [], st = m.st || 0;
    function add(box, mm) { pts.push([x0 + box * px, base - mm * px]); }
    add(0, 0); add(3, 0);
    for (var i = 1; i <= 6; i += 1) add(3 + i * 0.5, m.p * Math.sin(Math.PI * i / 6));
    add(8, 0);
    var qw = m.q > 2 ? 1.2 : 0.5;
    if (m.q) add(8 + qw, -m.q);
    add(8 + qw + 0.7, m.r); add(8 + qw + 1.5, -m.s); add(8 + qw + 2.2, st);
    var j = 8 + qw + 2.2;
    add(j + 2.6, st);
    for (i = 1; i <= 8; i += 1) { var f = i / 8; add(j + 2.6 + f * 6, st * (1 - f) + m.t * Math.sin(Math.PI * Math.min(f * 1.15, 1))); }
    add(j + 10, 0); add(25, 0);
    return pts;
  }
  function gridLines(w, h, px) {
    var html = "";
    for (var x = 0, n = 0; x <= w + 0.1; x += px, n += 1) html += '<line x1="' + x.toFixed(1) + '" y1="0" x2="' + x.toFixed(1) + '" y2="' + h + '" class="' + (n % 5 === 0 ? "rs-big" : "rs-small") + '"/>';
    for (var y = 0, k = 0; y <= h + 0.1; y += px, k += 1) html += '<line x1="0" y1="' + y.toFixed(1) + '" x2="' + w + '" y2="' + y.toFixed(1) + '" class="' + (k % 5 === 0 ? "rs-big" : "rs-small") + '"/>';
    return html;
  }
  function leadSvg(name, m, px, cls) {
    var tall = cls === "big", w = 25 * px, h = (tall ? 28 : 23) * px, base = (tall ? 15 : 13) * px;
    var pts = beatPoints(m, px, base, 0).map(function (p) { return p[0].toFixed(1) + "," + Math.max(1, Math.min(h - 1, p[1])).toFixed(1); });
    return '<figure class="mi-lead ' + (cls || "") + '"><svg viewBox="0 0 ' + w + ' ' + h + '" role="img" aria-label="Lead ' + name + '">' + gridLines(w, h, px) +
      '<polyline class="rs-trace" points="' + pts.join(" ") + '"/></svg><figcaption>' + name + '</figcaption></figure>';
  }
  function complexFor(name, wall, extra) {
    var m = Object.assign({}, data.leads[name]);
    if (wall) {
      if (wall.stLeads.indexOf(name) >= 0) { m.st = extra.st; m.t = m.t + extra.st * 0.6; if (extra.q) { m.q = Math.max(3, m.r * 0.5); m.r = m.r * 0.5; } }
      if (wall.recipLeads.indexOf(name) >= 0) {
        if (wall.posterior) { m.st = -extra.st * 0.7; m.r = 9; m.s = 3; m.t = 3; }
        else { m.st = -1.5; m.t = Math.min(m.t, 0.5); }
      }
    }
    return m;
  }
  function twelveLead(wall, extra) {
    return '<div class="mi-twelve">' + data.layout.map(function (row) {
      return row.map(function (name) { return leadSvg(name, complexFor(name, wall, extra), 3.2); }).join("");
    }).join("") + '</div>';
  }
  function mapHtml(highlight) {
    return '<div class="mi-map">' + data.layout.map(function (row) {
      return row.map(function (name) {
        var v = data.leads[name].view, on = !highlight || highlight.indexOf(name) >= 0;
        return '<div class="mi-cell mi-' + v + (on ? "" : " off") + '"><strong>' + name + '</strong><span>' + escapeHtml(data.views[v].label) + '</span></div>';
      }).join("");
    }).join("") + '</div>';
  }
  function wallTable() {
    return '<div class="table-scroll"><table class="learn-table rs-look"><thead><tr><th>STEMI</th><th>ST elevation in</th><th>Reciprocal changes</th><th>Usual artery</th></tr></thead><tbody>' + data.walls.map(function (w) {
      return '<tr><td>' + escapeHtml(w.name) + '</td><td>' + escapeHtml(w.posterior ? "V7-V9 (15-lead)" : w.stLeads.join(", ")) + '</td><td>' + escapeHtml(w.recipAnswer) + '</td><td>' + escapeHtml(w.artery) + '</td></tr>';
    }).join("") + '</tbody></table></div>';
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
  function top(label) { return '<div class="session-top"><button type="button" id="mi-home">← MI locator</button><span>' + escapeHtml(label) + '</span></div>'; }
  function bindHome() { el("mi-home").addEventListener("click", renderHome); }

  function renderHome() {
    state = null;
    content.innerHTML = '<div class="drill-heading"><p class="eyebrow">EKG · objectives 6, 14, 15</p><h2>MI locator</h2>' +
      '<p>Each lead is a camera pointed at one wall. ST elevation shows up in the leads that face the injured wall, and the leads looking from the opposite side see the mirror image (reciprocal ST depression).</p></div>' +
      '<article class="learn-card rs-card"><div class="learn-body"><h3>The 12-lead map</h3>' + mapHtml() +
      '<div class="box-hy"><span class="lbl">SAL (salt) is bad for the heart</span>Going across V1-V6: <strong>S</strong>eptal (V1-V2), <strong>A</strong>nterior (V3-V4), <strong>L</strong>ateral (V5-V6). I and aVL are high lateral; II, III, aVF are the inferior triangle; aVR looks at the base of the heart.</div>' +
      wallTable() +
      '<div class="box-hy"><span class="lbl">STEMI criteria</span>ST elevation more than 1 mm in limb leads or more than 2 mm in precordial leads, measured 0.04 s after the J point, in 2 or more leads facing the same area.</div></div></article>' +
      '<div class="murmur-quick rs-quick">' +
      '<button class="murmur-quick-card" type="button" id="mi-locate"><span>12-lead</span><strong>Locate the STEMI →</strong><small>' + LOCATE_LENGTH + ' drawn 12-leads: which wall, which artery, where are the reciprocal changes?</small></button>' +
      '<button class="murmur-quick-card" type="button" id="mi-stemi"><span>Criteria</span><strong>STEMI or not? →</strong><small>' + STEMI_LENGTH + ' sets of leads to measure: enough elevation, in enough leads, in the same area?</small></button>' +
      '<button class="murmur-quick-card" type="button" id="mi-damage"><span>Damage</span><strong>Ischemia, injury or infarction? →</strong><small>One complex at a time: T waves, ST segment, Q waves.</small></button>' +
      '</div>';
    el("mi-locate").addEventListener("click", startLocate);
    el("mi-stemi").addEventListener("click", startStemi);
    el("mi-damage").addEventListener("click", startDamage);
  }

  // ---- shared pieces -------------------------------------------------------
  function choicesHtml(labels) {
    return '<div class="choices">' + labels.map(function (label, index) {
      return '<button class="choice" type="button" data-choice="' + index + '"><span>' + String.fromCharCode(65 + index) + '</span>' + escapeHtml(label) + '</button>';
    }).join("") + '</div>';
  }
  function mark(group, correct, selected) {
    group.querySelectorAll("[data-choice]").forEach(function (b) {
      var i = Number(b.dataset.choice); b.disabled = true;
      b.classList.add(i === correct ? "correct" : i === selected ? "wrong" : "dimmed");
    });
  }
  function header() {
    var percent = Math.round(state.done / Math.max(state.total, 1) * 100);
    return top(state.title) + '<div class="session-progress"><span style="width:' + percent + '%"></span></div><div class="session-counter">' + state.done + ' of ' + state.total + ' done · ' + state.firstTry + ' ' + (state.kind === "locate" ? "with every step right" : "right on the first try") + '</div>';
  }
  function complete() {
    var finished = state, missed = Object.keys(finished.missed);
    content.innerHTML = '<section class="complete-panel"><span class="complete-icon">' + (missed.length ? "📈" : "🎯") + '</span><p class="eyebrow">Done</p><h3>' + escapeHtml(finished.title) + '</h3><p>' + finished.firstTry + ' of ' + finished.total + (finished.kind === "locate" ? " with every step right." : " right on the first try.") + '</p>' +
      (missed.length ? '<p class="rs-missed">Worth another look: ' + missed.map(escapeHtml).join(", ") + '</p>' : "") +
      '<div class="session-actions"><button class="primary-action" id="mi-again" type="button">Go again</button><button class="secondary-action" id="mi-done" type="button">MI locator</button></div></section>';
    el("mi-again").addEventListener("click", finished.again);
    el("mi-done").addEventListener("click", renderHome);
  }
  // Single-question runner (STEMI or not, damage).
  function runSingle() {
    if (state.position >= state.items.length) { complete(); return; }
    var item = state.items[state.position], q = state.build(item);
    content.innerHTML = header() + '<div class="recall-step-label">' + (item.retry ? "Coming back to this one" : "Question " + (state.position + 1)) + '</div>' +
      '<article class="question-card immersive-card rs-question"><div class="wb-sticky">' + q.visual + '</div><h3>' + escapeHtml(q.prompt) + '</h3>' + choicesHtml(q.labels) +
      '<div class="explanation" id="mi-explanation" hidden></div></article><button class="primary-action full-action" id="mi-next" type="button" hidden>Next →</button>';
    bindHome();
    var group = content.querySelector(".choices"), answered = false;
    group.querySelectorAll("[data-choice]").forEach(function (button) {
      button.addEventListener("click", function () {
        if (answered) return;
        answered = true;
        var selected = Number(button.dataset.choice), correct = q.labels.indexOf(q.answer), right = selected === correct;
        mark(group, correct, selected);
        var exp = el("mi-explanation");
        exp.hidden = false;
        exp.innerHTML = '<strong>' + (right ? "Correct: " : "Answer: ") + escapeHtml(q.answer) + '</strong><div class="learn-body">' + q.teach + '</div>';
        if (!item.retry) state.done += 1;
        if (right) { if (!item.retry) { state.firstTry += 1; record(item.id, true); } }
        else {
          record(item.id, false); state.missed[q.missLabel] = true;
          if (!item.retry) state.items.splice(Math.min(state.position + 1 + RETURN_GAP, state.items.length), 0, Object.assign({}, item, { retry: true }));
        }
        el("mi-next").hidden = false;
        exp.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    });
    el("mi-next").addEventListener("click", function () { state.position += 1; runSingle(); });
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }

  // ---- locate the STEMI (3 steps per 12-lead) ------------------------------
  function startLocate() {
    var items = [];
    while (items.length < LOCATE_LENGTH) items = items.concat(shuffle(data.walls));
    items = items.slice(0, LOCATE_LENGTH).map(function (w) { return { wall: w, extra: { st: pick([2.5, 3, 3.5, 4]), q: Math.random() < 0.3 } }; });
    state = { kind: "locate", title: "Locate the STEMI", items: items, position: 0, total: items.length, done: 0, firstTry: 0, missed: {}, again: startLocate };
    renderLocate();
  }
  function renderLocate() {
    if (state.position >= state.items.length) { complete(); return; }
    var item = state.items[state.position], wall = item.wall;
    var wallLabels = shuffle([wall.name].concat(shuffle(data.walls.filter(function (w) { return w !== wall; })).slice(0, 3).map(function (w) { return w.name; })));
    var recipLabels = shuffle([wall.recipAnswer].concat(shuffle(data.recipChoices.filter(function (r) { return r !== wall.recipAnswer; })).slice(0, 3)));
    item.parts = [
      { title: "Which wall is injured?", labels: wallLabels, answer: wall.name },
      { title: "Which coronary artery is most likely blocked?", labels: shuffle(data.arteries), answer: wall.artery },
      { title: "Where do you look for reciprocal changes?", labels: recipLabels, answer: wall.recipAnswer }
    ];
    item.index = 0; item.allRight = true;
    content.innerHTML = header() + '<div class="recall-step-label">12-lead ' + (state.position + 1) + ' of ' + state.total + '</div>' +
      '<article class="question-card immersive-card rs-question"><div class="wb-sticky">' + twelveLead(wall, item.extra) + '<p class="wb-strip-meta">One beat per lead · 1 small box = 1 mm</p></div><div id="mi-parts"></div><div class="explanation" id="mi-explanation" hidden></div></article>' +
      '<button class="primary-action full-action" id="mi-next" type="button" hidden>Next 12-lead →</button>';
    bindHome();
    el("mi-next").addEventListener("click", function () { state.position += 1; renderLocate(); });
    showPart(item);
    content.scrollIntoView({ behavior: "instant", block: "start" });
  }
  function showPart(item) {
    var part = item.parts[item.index];
    var wrap = document.createElement("div");
    wrap.className = "rs-part";
    wrap.innerHTML = '<p class="rs-part-title"><span>' + (item.index + 1) + '/' + item.parts.length + '</span>' + escapeHtml(part.title) + '</p>' + choicesHtml(part.labels) + '<p class="rs-part-note" hidden></p>';
    el("mi-parts").appendChild(wrap);
    var group = wrap.querySelector(".choices"), answered = false;
    group.querySelectorAll("[data-choice]").forEach(function (button) {
      button.addEventListener("click", function () {
        if (answered) return;
        answered = true;
        var selected = Number(button.dataset.choice), correct = part.labels.indexOf(part.answer), right = selected === correct;
        mark(group, correct, selected);
        if (!right) item.allRight = false;
        var note = wrap.querySelector(".rs-part-note");
        note.hidden = false;
        note.className = "rs-part-note " + (right ? "ok" : "bad");
        note.textContent = (right ? "Right: " : "It's: ") + part.answer + ".";
        item.index += 1;
        setTimeout(function () { wrap.classList.add("rs-part-done"); }, right ? 350 : 900);
        if (item.index < item.parts.length) showPart(item);
        else finishLocate(item);
      });
    });
  }
  function finishLocate(item) {
    var wall = item.wall;
    record(wall.id, item.allRight);
    state.done += 1;
    if (item.allRight) state.firstTry += 1; else state.missed[wall.name] = true;
    var exp = el("mi-explanation");
    exp.hidden = false;
    var shown = wall.posterior ? wall.recipLeads : wall.stLeads.concat(wall.recipLeads);
    exp.innerHTML = '<strong>' + escapeHtml(wall.name) + (item.allRight ? " · every step right" : "") + '</strong><div class="learn-body"><p>' + escapeHtml(wall.why) + '</p>' +
      (item.extra.q && !wall.posterior ? '<p>The Q waves in the same leads mean the damage is already becoming infarction (irreversible).</p>' : "") +
      '<p class="rs-rate">' + (wall.posterior ? "Mirror-image changes in " + wall.recipLeads.join(", ") : "ST elevation in " + wall.stLeads.join(", ") + (wall.recipLeads.length ? " · reciprocal depression in " + wall.recipLeads.join(", ") : "")) + '</p>' + mapHtml(shown) + '</div>';
    el("mi-next").hidden = false;
    exp.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }

  // ---- STEMI or not? -------------------------------------------------------
  function threshold(lead) { return LIMB[lead] ? 1 : 2; }
  function makeStemiCase() {
    var areas = [["II", "III", "aVF"], ["I", "aVL", "V5", "V6"], ["V1", "V2", "V3"], ["V2", "V3", "V4"]];
    var kind = pick(["yes", "yes", "small", "apart", "depression"]);
    var area = pick(areas), leads, mm;
    function above(l) { return LIMB[l] ? pick([1.5, 2, 2.5, 3]) : pick([2.5, 3, 3.5, 4]); }
    function below(l) { return LIMB[l] ? 0.5 : pick([1, 1.5]); }
    if (kind === "yes" || kind === "small") {
      leads = shuffle(area).slice(0, Math.random() < 0.5 ? 2 : 3).sort(function (a, b) { return area.indexOf(a) - area.indexOf(b); });
      mm = leads.map(kind === "yes" ? above : below);
      // A "small" case: precordial leads at 1-1.5 mm (over the limb cutoff, under the precordial one) are the classic trap.
    } else if (kind === "apart") {
      if (Math.random() < 0.4) { leads = [pick(area)]; mm = [above(leads[0])]; }
      else {
        var other = pick(areas.filter(function (a) { return a.filter(function (l) { return area.indexOf(l) >= 0; }).length === 0; }));
        leads = [pick(area), pick(other)]; mm = leads.map(above);
      }
    } else {
      leads = shuffle(area).slice(0, 2).sort(function (a, b) { return area.indexOf(a) - area.indexOf(b); });
      mm = leads.map(function () { return -pick([1.5, 2, 2.5]); });
    }
    var answer = { yes: 0, small: 1, apart: 2, depression: 3 }[kind];
    return { id: "stemi-" + kind, leads: leads, mm: mm, answer: STEMI_ANSWERS[answer], kind: kind };
  }
  function startStemi() {
    var items = [];
    for (var i = 0; i < STEMI_LENGTH; i += 1) items.push(makeStemiCase());
    state = {
      kind: "stemi", title: "STEMI or not?", items: items, position: 0, total: items.length, done: 0, firstTry: 0, missed: {}, again: startStemi,
      build: function (item) {
        var visual = '<div class="mi-measure">' + item.leads.map(function (l, i) {
          var m = Object.assign({}, data.leads[l], { st: item.mm[i] });
          m.t = item.mm[i] > 0 ? m.t + item.mm[i] * 0.5 : Math.min(m.t, 0.5);
          return leadSvg(l, m, 6, "big");
        }).join("") + '</div><p class="wb-strip-meta">Measure the ST segment 0.04 s (1 small box) after the J point, against the PR segment · 1 small box = 1 mm</p>';
        var lines = item.leads.map(function (l, i) {
          var v = item.mm[i];
          return l + ": " + (v > 0 ? v + " mm elevation" : -v + " mm depression") + " (" + (LIMB[l] ? "limb lead, needs more than 1 mm" : "precordial lead, needs more than 2 mm") + ")";
        });
        var why = {
          yes: "Every lead shown is over its cutoff and they all face the same area.",
          small: "The leads face the same area, but the elevation doesn't clear the cutoff. Precordial leads need MORE than 2 mm; 1-1.5 mm only counts in a limb lead.",
          apart: item.leads.length === 1 ? "One lead isn't enough: you need 2 or more leads facing the same area." : "Both leads are elevated, but they look at different walls, so they don't add up to one territory.",
          depression: "The ST segment is BELOW the baseline. Depression over 1 mm in 2+ leads of one area is ischemia (or a subendocardial infarction), not a STEMI. Check it isn't the reciprocal of a STEMI elsewhere."
        }[item.kind];
        return { visual: visual, prompt: "Does this meet STEMI criteria?", labels: STEMI_ANSWERS.slice(), answer: item.answer, missLabel: item.answer, teach: '<p>' + escapeHtml(why) + '</p><ul>' + lines.map(function (x) { return '<li>' + escapeHtml(x) + '</li>'; }).join("") + '</ul>' };
      }
    };
    runSingle();
  }

  // ---- ischemia, injury or infarction --------------------------------------
  function startDamage() {
    var items = shuffle(data.damage.concat(data.damage)).map(function (d) { return { id: d.id, d: d, lead: pick(["II", "V4", "V5", "aVF"]) }; });
    state = {
      kind: "damage", title: "Ischemia, injury or infarction?", items: items, position: 0, total: items.length, done: 0, firstTry: 0, missed: {}, again: startDamage,
      build: function (item) {
        var m = Object.assign({}, data.leads[item.lead], item.d.change);
        if (item.d.change.st > 0) m.t = m.t + item.d.change.st;
        return {
          visual: '<div class="mi-measure single">' + leadSvg(item.lead, m, 6, "big") + '</div>', prompt: "What does this complex show?", labels: DAMAGE_ANSWERS.slice(), answer: item.d.answer, missLabel: item.d.label,
          teach: '<p><strong>' + escapeHtml(item.d.label) + '.</strong> ' + escapeHtml(item.d.why) + '</p>'
        };
      }
    };
    runSingle();
  }

  // Shared with the mock exam (ekg-mock.js).
  window.EKGDraw = Object.assign(window.EKGDraw || {}, {
    twelveLead: twelveLead, leadMap: mapHtml,
    damageLead: function (dmgId, lead) {
      var d = data.damage.filter(function (x) { return x.id === dmgId; })[0], m = Object.assign({}, data.leads[lead || "V5"], d.change);
      if (d.change.st > 0) m.t = m.t + d.change.st;
      return '<div class="mi-measure single">' + leadSvg(lead || "V5", m, 6, "big") + '</div>';
    }
  });
  launch.addEventListener("click", open);
  document.getElementById("ekg-mi-back").addEventListener("click", close);
}());
