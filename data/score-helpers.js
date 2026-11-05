/*
  Builders for live score calculators (Cardio Part 2 Scores & Calculators). Pure functions so
  validators can load them; score-calc.js (site root) wires up the behavior in the browser.
    - ScoreCalc.points(id, items, bands): tick boxes / one-of radio groups; total + matching band.
      items: [label, points] or { group, options: [[label, points], ...] }; bands: [[min, label, note], ...].
    - ScoreCalc.form(id, fields) + ScoreCalc.formula(id, fn): numbers / selects / checkboxes;
      fn(values, fmt) returns result HTML ("" while inputs are missing).
*/
(function () {
  "use strict";
  var formulas = {};
  var uid = 0;

  function esc(text) {
    return String(text).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function fmt(n) {
    if (!isFinite(n)) return "–";
    return (Math.round(n * 10) / 10).toString();
  }

  // items: [label, points] or { group: "Age", options: [[label, points], ...] }
  // bands: [[min, label, note], ...] sorted by min; the highest min <= total wins.
  function points(id, items, bands) {
    uid += 1;
    var html = '<div class="calc calc-points" data-calc="' + esc(id) + '" data-bands="' + encodeURIComponent(JSON.stringify(bands)) + '">';
    html += '<p class="calc-hint">Tick everything that applies. The total updates as you go.</p>';
    items.forEach(function (item, i) {
      if (Array.isArray(item)) {
        html += '<label class="calc-row"><input type="checkbox" data-pts="' + item[1] + '"><span>' + item[0] + '</span><b>' + (item[1] > 0 ? "+" : "") + item[1] + '</b></label>';
      } else {
        var name = "calc-" + uid + "-" + i;
        html += '<fieldset class="calc-group"><legend>' + item.group + '</legend>';
        item.options.forEach(function (opt, j) {
          html += '<label class="calc-row"><input type="radio" name="' + name + '" data-pts="' + opt[1] + '"' + (j === 0 ? " checked" : "") + '><span>' + opt[0] + '</span><b>' + (opt[1] > 0 ? "+" : "") + opt[1] + '</b></label>';
        });
        html += "</fieldset>";
      }
    });
    html += '<div class="calc-out" aria-live="polite"></div><button type="button" class="calc-reset">Clear</button></div>';
    return html;
  }

  // fields: { name, label, type: "number"|"select"|"check", unit?, placeholder?, options?: [[value, label]] }
  function form(id, fields) {
    var html = '<div class="calc calc-form" data-calc="' + esc(id) + '">';
    fields.forEach(function (f) {
      if (f.type === "select") {
        html += '<label class="calc-field"><span>' + f.label + '</span><select data-name="' + f.name + '">' +
          f.options.map(function (o) { return '<option value="' + esc(o[0]) + '">' + o[1] + "</option>"; }).join("") + "</select></label>";
      } else if (f.type === "check") {
        html += '<label class="calc-row"><input type="checkbox" data-name="' + f.name + '"><span>' + f.label + "</span></label>";
      } else {
        html += '<label class="calc-field"><span>' + f.label + '</span><span class="calc-input"><input type="number" inputmode="decimal" step="any" data-name="' + f.name + '"' +
          (f.placeholder ? ' placeholder="' + esc(f.placeholder) + '"' : "") + ">" + (f.unit ? "<em>" + f.unit + "</em>" : "") + "</span></label>";
      }
    });
    html += '<div class="calc-out" aria-live="polite"></div><button type="button" class="calc-reset">Clear</button></div>';
    return html;
  }

  function formula(id, fn) { formulas[id] = fn; }

  window.ScoreCalc = { points: points, form: form, formula: formula, formulas: formulas, fmt: fmt };
}());
