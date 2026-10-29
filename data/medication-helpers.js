/*
  Authoring helpers for the Cardio Part 1 Medications tool. Medications reuse
  the Diseases data shape and engine (diseases.js): drug class group ->
  medication -> sections + questions, built on window.DiseaseContent.

  Med() gives every drug the same five sections, in this order:
    uses   What it treats
    moa    How it works
    avoid  Contraindications & cautions
    se     Side effects
    pearls Must-know pearls (members, monitoring, interactions, overdose)
  Guide() is for "which drug when" comparison entries with their own sections.

  `lectures` lists the Cardio Part 1 lectures that teach the drug; the engine
  shows it as a tag line. Question ids are "<medication id>|<index>" and
  progress is saved against them: only APPEND questions to a medication.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent;
  var ORDER = ["uses", "moa", "avoid", "se", "pearls"];
  var TITLES = { uses: "What it treats", moa: "How it works", avoid: "Contraindications & cautions", se: "Side effects", pearls: "Must-know pearls" };

  function ul(items) {
    return "<ul>" + items.map(function (item) { return "<li>" + item + "</li>"; }).join("") + "</ul>";
  }
  function Med(id, name, blurb, lectures, parts, questions) {
    var sections = ORDER.filter(function (key) { return parts[key]; }).map(function (key) { return H.S(key, TITLES[key], parts[key]); });
    var med = H.D(id, name, blurb, sections, questions);
    med.lectures = lectures;
    return med;
  }
  function Guide(id, name, blurb, lectures, sections, questions) {
    var guide = H.D(id, name, blurb, sections, questions);
    guide.lectures = lectures;
    return guide;
  }
  window.MedContent = { Med: Med, Guide: Guide, ul: ul, ORDER: ORDER, TITLES: TITLES };
}());
