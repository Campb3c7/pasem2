/*
  EKG MI locator data (objectives 6, 14, 15). Engine: ekg-mi.js.
  Lead views, walls, reciprocal leads and STEMI criteria follow the EKG Interpretation deck (Marriott):
  slides 41-48 (lead views, SAL), 237 (coronary supply), 243-251 (ischemia / injury / infarction, ST
  criteria, Q waves, reciprocal changes) and the STEMI-by-wall slides. Artery answers apply the deck's
  coronary supply slide to each wall and say so. Ids (wall-*, dmg-*) are progress keys: never rename.
*/
(function () {
  "use strict";

  // Normal complex per lead, in mm: P, q, R, S, T. aVR is mostly negative; V1-V6 show R-wave progression.
  var leads = {
    I: { p: 1, q: 0.5, r: 8, s: 2, t: 2.2, view: "lateral" },
    II: { p: 1.5, q: 0.5, r: 10, s: 2, t: 3, view: "inferior" },
    III: { p: 0.8, q: 0, r: 5, s: 3, t: 1.2, view: "inferior" },
    aVR: { p: -1, q: 0, r: 2, s: 8, t: -2, view: "base" },
    aVL: { p: 0.6, q: 0.5, r: 5, s: 3, t: 1, view: "lateral" },
    aVF: { p: 1.2, q: 0, r: 7, s: 2, t: 2, view: "inferior" },
    V1: { p: 0.8, q: 0, r: 2, s: 10, t: 1, view: "septal" },
    V2: { p: 0.8, q: 0, r: 4, s: 12, t: 4, view: "septal" },
    V3: { p: 0.8, q: 0, r: 7, s: 7, t: 4, view: "anterior" },
    V4: { p: 0.8, q: 0, r: 12, s: 5, t: 4, view: "anterior" },
    V5: { p: 0.8, q: 0.5, r: 13, s: 3, t: 3, view: "lateral" },
    V6: { p: 0.8, q: 0.5, r: 11, s: 2, t: 2, view: "lateral" }
  };
  var layout = [["I", "aVR", "V1", "V4"], ["II", "aVL", "V2", "V5"], ["III", "aVF", "V3", "V6"]];
  var views = {
    inferior: { label: "Inferior", leads: "II, III, aVF" },
    lateral: { label: "Lateral", leads: "I, aVL, V5, V6" },
    septal: { label: "Septal", leads: "V1, V2" },
    anterior: { label: "Anterior", leads: "V3, V4" },
    base: { label: "Base of the heart (aVR)", leads: "aVR" }
  };

  // STEMI by wall. stLeads get ST elevation; recipLeads get ST depression; posterior is drawn as
  // depression + tall R + upright T in V1-V3 (the mirror image of posterior elevation).
  function W(id, name, stLeads, recipLeads, artery, recipAnswer, why, posterior) {
    return { id: id, name: name, stLeads: stLeads, recipLeads: recipLeads, artery: artery, recipAnswer: recipAnswer, why: why, posterior: !!posterior };
  }
  var walls = [
    W("wall-inferior", "Inferior STEMI", ["II", "III", "aVF"], ["I", "aVL", "V5", "V6"], "Right coronary artery (RCA)", "Lateral leads: I, aVL, V5, V6",
      "II, III and aVF all look up at the bottom of the heart (the inferior triangle). The RCA supplies the inferior and posterior LV walls (deck coronary slide), so it is the usual culprit. Remember inferior MIs can also cause AV blocks: the RCA supplies the AV node in 80-95%."),
    W("wall-lateral", "Lateral STEMI", ["I", "aVL", "V5", "V6"], ["II", "III", "aVF"], "Circumflex artery", "Inferior leads: II, III, aVF",
      "I, aVL, V5 and V6 face the left side of the LV. The circumflex supplies the anterolateral and posterolateral wall (the LAD also supplies part of the lateral wall)."),
    W("wall-anterior", "Anterior STEMI", ["V2", "V3", "V4"], [], "Left anterior descending (LAD)", "Posterior leads V7-V9 (not on a 12-lead)",
      "V2-V4 sit right over the front of the LV. The LAD supplies the anterior LV and the anterior 2/3 of the septum."),
    W("wall-septal", "Septoanterior (anteroseptal) STEMI", ["V1", "V2", "V3"], [], "Left anterior descending (LAD)", "Perhaps V6 and the posterior leads (V7-V9)",
      "V1 and V2 look at the septum and V3 at the anterior wall. The LAD's septal branches supply the anterior 2/3 of the septum."),
    W("wall-posterior", "Posterior STEMI", [], ["V1", "V2", "V3"], "RCA or circumflex", "It IS the reciprocal change: ST depression, tall R and upright T in V1-V3; a 15-lead would show ST elevation in V7-V9",
      "No 12-lead electrode faces the back, so V1-V3 see the mirror image: ST depression instead of elevation, a tall R instead of a Q. The RCA and the circumflex both supply the posterior wall.", true)
  ];
  var arteries = ["Right coronary artery (RCA)", "Left anterior descending (LAD)", "Circumflex artery", "RCA or circumflex"];
  var recipChoices = walls.map(function (w) { return w.recipAnswer; });

  // Ischemia, injury or infarction on one complex.
  function D(id, label, change, answer, why) { return { id: id, label: label, change: change, answer: answer, why: why }; }
  var damage = [
    D("dmg-t-inversion", "Symmetrical T-wave inversion", { t: -4 }, "Ischemia", "Symmetrical inverted T waves mean ischemia through the full thickness of the wall. They revert to normal if the ischemia resolves; after an infarction they may stay inverted for months to years."),
    D("dmg-st-depression", "Flat ST depression over 1 mm", { st: -2, t: 1 }, "Ischemia", "ST depression more than 1 mm, 0.04 s after the J point, in 2+ leads facing the same area is the characteristic sign of ischemia. A flat depression is also the pattern of a subendocardial infarction."),
    D("dmg-st-elevation", "ST elevation", { st: 3, t: 5 }, "Injury", "ST elevation is injury: the earliest reliable sign that an acute MI has occurred. Significant when over 1 mm (limb) or 2 mm (precordial) in 2+ leads facing the same area."),
    D("dmg-q-wave", "Pathological Q wave", { q: 5, r: 4, t: -2 }, "Infarction", "A Q wave over 0.04 s wide and at least 1/3 the height of the R, in 2+ contiguous leads, means irreversible damage (infarction). It forms hours to days after the MI as the R wave disappears: the depolarization moves away from the dead, electrically silent tissue."),
    D("dmg-normal", "Normal complex", {}, "Normal", "Upright, slightly asymmetrical T, flat ST at the baseline, and only a tiny septal q: nothing to call."),
    D("dmg-hyperacute", "Hyperacute (tall, peaked) T wave", { t: 9 }, "Ischemia", "T-wave changes (peaking or inversion) are the first of the progressive EKG signs of ischemia, before ST changes and Q waves.")
  ];

  window.EKG_MI = { leads: leads, layout: layout, views: views, walls: walls, arteries: arteries, recipChoices: recipChoices, damage: damage };
}());
