/*
  Shared authoring helpers for the Diseases tools (data/diseases.js,
  data/diseases-endocrine.js). Keep authored HTML consistent with the
  Learn-card visual language (.learn-table, .box-hy, .box-mnemonic).

  D() gives each question the id "<disease id>|<index>". Progress is saved
  against that id, so only ever APPEND questions to a disease -- never insert
  or reorder, or saved progress will point at the wrong question.
*/
(function () {
  "use strict";
  function Tbl(headers, rows) {
    return '<table class="learn-table"><tr>' + headers.map(function (h) { return "<th>" + h + "</th>"; }).join("") + "</tr>" + rows.map(function (row) { return "<tr>" + row.map(function (cell) { return "<td>" + cell + "</td>"; }).join("") + "</tr>"; }).join("") + "</table>";
  }
  function HY(text) { return '<div class="box-hy"><span class="lbl">High yield</span><strong>' + text + "</strong></div>"; }
  function Mn(label, text) { return '<div class="box-mnemonic"><span class="lbl">' + label + '</span><strong>' + text + "</strong></div>"; }
  function S(id, title, html) { return { id: id, title: title, html: html }; }
  function Q(section, prompt, choices, correct, explanation) {
    return { section: section, prompt: prompt, choices: choices, correct: correct, explanation: explanation };
  }
  function D(id, name, blurb, sections, questions) {
    var withIds = (questions || []).map(function (question, index) {
      return { id: id + "|" + index, section: question.section, prompt: question.prompt, choices: question.choices, correct: question.correct, explanation: question.explanation };
    });
    return { id: id, name: name, blurb: blurb, sections: sections || [], questions: withIds };
  }
  function L(id, title, diseases) {
    return { id: id, title: title, diseases: diseases };
  }
  window.DiseaseContent = { Tbl: Tbl, HY: HY, Mn: Mn, S: S, Q: Q, D: D, L: L };
}());
