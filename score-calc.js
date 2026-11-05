/*
  Brings the score calculators built by data/score-helpers.js to life: document-level event
  delegation recomputes a widget on every change, and a MutationObserver computes each widget
  when the tool renders it. Load after data/score-helpers.js.
*/
(function () {
  "use strict";
  function compute(box) {
    var out = box.querySelector(".calc-out");
    if (!out) return;
    if (box.classList.contains("calc-points")) {
      var total = 0;
      Array.prototype.forEach.call(box.querySelectorAll("input:checked"), function (input) { total += Number(input.dataset.pts) || 0; });
      var bands = [];
      try { bands = JSON.parse(decodeURIComponent(box.dataset.bands || "")); } catch (e) { bands = []; }
      var band = null;
      bands.forEach(function (b) { if (total >= b[0]) band = b; });
      out.innerHTML = '<div class="calc-total"><strong>' + window.ScoreCalc.fmt(total) + '</strong><span>points</span></div>' +
        (band ? '<div class="calc-band"><b>' + band[1] + "</b>" + (band[2] ? "<p>" + band[2] + "</p>" : "") + "</div>" : "");
      return;
    }
    var formulas = (window.ScoreCalc && window.ScoreCalc.formulas) || {};
    var fn = formulas[box.dataset.calc];
    if (!fn) { out.innerHTML = ""; return; }
    var v = {};
    Array.prototype.forEach.call(box.querySelectorAll("[data-name]"), function (el) {
      if (el.type === "checkbox") v[el.dataset.name] = el.checked;
      else if (el.type === "number") v[el.dataset.name] = el.value === "" ? NaN : Number(el.value);
      else v[el.dataset.name] = el.value;
    });
    var result = "";
    try { result = fn(v, window.ScoreCalc.fmt) || ""; } catch (e) { result = ""; }
    out.innerHTML = result || '<p class="calc-wait">Enter the values to see the result.</p>';
  }

  function scan(root) {
    if (!root || !root.querySelectorAll) return;
    if (root.classList && root.classList.contains("calc")) compute(root);
    Array.prototype.forEach.call(root.querySelectorAll(".calc"), compute);
  }

  function boxOf(target) { return target && target.closest ? target.closest(".calc") : null; }

  document.addEventListener("input", function (e) { var box = boxOf(e.target); if (box) compute(box); });
  document.addEventListener("change", function (e) { var box = boxOf(e.target); if (box) compute(box); });
  document.addEventListener("click", function (e) {
    if (!e.target.classList || !e.target.classList.contains("calc-reset")) return;
    var box = boxOf(e.target);
    if (!box) return;
    Array.prototype.forEach.call(box.querySelectorAll("input"), function (input) {
      if (input.type === "radio") input.checked = input.parentNode === input.closest("fieldset").querySelector("label");
      else if (input.type === "checkbox") input.checked = false;
      else input.value = "";
    });
    Array.prototype.forEach.call(box.querySelectorAll("select"), function (s) { s.selectedIndex = 0; });
    compute(box);
  });
  if (typeof MutationObserver === "function") {
    new MutationObserver(function (records) {
      records.forEach(function (r) { Array.prototype.forEach.call(r.addedNodes, function (n) { if (n.nodeType === 1) scan(n); }); });
    }).observe(document.documentElement, { childList: true, subtree: true });
  }
  document.addEventListener("DOMContentLoaded", function () { scan(document.body); });

  window.ScoreCalc.compute = compute;
}());
