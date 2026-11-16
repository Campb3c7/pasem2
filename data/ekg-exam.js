/*
  EKG practice exam (format from the course's exam announcement for Fri 11/20): 15 multiple-choice
  questions (1 point each), 20 rhythm strips (2-4 points each) and 5 12-lead EKGs (7 points each),
  40 questions, 110 minutes, calculator allowed, and every strip and 12-lead needs a final
  interpretation. Engine: ekg-mock.js. 12-leads are drawn by data/ekg-twelve-synth.js.

  Scoring (ours; the exam's own rubric isn't published): on strips and 12-leads half the points are
  the systematic read (the deck's "How to look at an EKG" steps) and half the final interpretation.

  strips.slots: how the 20 strips are chosen (rhythm family → points). Points rise with how much there
  is to work out: sinus 2, atrial/junctional/ventricular/early beats 3, AV blocks 4 (total 60).
  twelve.fields: the systematic steps for a 12-lead, each with fixed answer options.
  twelve.cases: 12-lead patterns (ids tw-* are stable). answers = the right option per field; the
  rate is measured from the drawing. build(c, ctx) edits the normal beat (see the synth).
  Findings follow the EKG Interpretation deck (Marriott) and data/ekg-patterns.js.
*/
(function () {
  "use strict";

  var FORMAT = { mcq: 15, strips: 20, twelve: 5, minutes: 110, mcqPoints: 1, twelvePoints: 7 };

  var STRIP_SLOTS = [
    { family: "sinus", gen: "sinus", n: 4, points: 2, wb: 0.7 },
    { family: "atrial", gen: "atrial", n: 3, points: 3, wb: 0.7 },
    { family: "junctional", gen: "junctional", n: 3, points: 3, wb: 0.3 },
    { family: "ventricular", gen: "ventricular", n: 3, points: 3, wb: 0.6 },
    { family: "ectopy", gen: "premature", n: 3, points: 3, wb: 0.6 },
    { family: "av", gen: "blocks", n: 4, points: 4, wb: 0.7 }
  ];

  var FIELDS = [
    { id: "reg", title: "Regularity", options: { regular: "Regular", irregirreg: "Irregularly irregular", pattern: "Regularly irregular (a repeating pattern)" } },
    { id: "rate", title: "Rate (bpm)", number: true },
    { id: "axis", title: "Axis", options: { normal: "Normal (0° to +90°)", lad: "Left axis deviation", rad: "Right axis deviation", extreme: "Extreme axis deviation" } },
    { id: "p", title: "P waves", options: {
      normal: "Upright in II, one before every QRS",
      peaked: "Tall, peaked P in II (2.5 mm or more)",
      wide: "Wide, notched P in II, deep negative end in V1",
      none: "No P waves, fine wavy baseline",
      paced: "No P waves; a pacer spike before every QRS"
    } },
    { id: "pr", title: "PR interval", options: {
      normal: "Normal (0.12-0.20 s)",
      long: "Over 0.20 s, constant",
      short: "Short (under 0.12 s)",
      depressed: "Normal length, but the PR segment is depressed",
      none: "Not measurable (no P waves)"
    } },
    { id: "qrs", title: "QRS complexes", options: {
      normal: "Narrow (under 0.12 s), normal voltage",
      lbbb: "Wide; broad deep S in V1, broad notched R in I and V6",
      rbbb: "Wide; rsR' in V1, slurred S in I and V6",
      paced: "Wide, right after a pacer spike",
      delta: "Slurred upstroke (delta wave), slightly wide",
      lafb: "Narrow; qR in I and aVL, rS in II, III and aVF",
      lpfb: "Narrow; rS in I and aVL, qR in III and aVF",
      lvh: "Very tall R in V5-V6 and deep S in V1-V2",
      rvh: "Tall R in V1 (bigger than the S), deep S in V5-V6",
      low: "Low voltage, height alternating beat to beat",
      s1q3: "Deep S in I, Q wave in III"
    } },
    { id: "st", title: "ST segments and T waves", options: {
      normal: "Normal: flat ST, upright T",
      territorial: "ST elevation in the leads facing one area",
      posterior: "ST depression with tall R and upright T in V1-V3",
      diffuse: "Concave ST elevation in most leads, ST depression in aVR",
      discordant: "ST and T point opposite the main QRS (secondary to the wide QRS)",
      strain: "Downsloping ST depression and asymmetric T inversion (strain)",
      peaked: "Tall, narrow, peaked T waves",
      flatu: "Flat T waves with U waves",
      shortqt: "Short QT: the ST segment is almost gone",
      longqt: "Long QT: a long, flat ST segment",
      pe: "T inversion in III and V1-V3"
    } }
  ];

  function A(reg, axis, p, pr, qrs, st) { return { reg: reg, axis: axis, p: p, pr: pr, qrs: qrs, st: st }; }
  function C(id, cat, name, def, answers, why, confuse) { def.id = id; def.cat = cat; def.name = name; def.answers = answers; def.why = why; def.confuse = confuse; return def; }
  function q(c, ang, mag, v) { c.q = { group: "qrs", t: 0.012, sd: 0.006, ang: ang, mag: mag, v: v || c.q.v }; }

  // ST elevation pieces for each wall, with a taller (hyperacute) T in the same leads.
  function stemi(c, ctx, ang, mag, v) {
    var k = ctx.r() * 0.6 + 0.8;
    c.stE = ctx.st(0.085, ang, mag * k, v.map(function (x) { return x * k; }));
    c.tE = { group: "t", t: c.t.t - 0.01, sd: 0.05, sd2: 0.035, ang: ang, mag: mag * 0.6, v: v.map(function (x) { return x > 0 ? x * 0.7 : x * 0.3; }) };
  }

  var CASES = [
    // ---- STEMI (objectives 14, 15) ----
    C("tw-inferior", "stemi", "Inferior STEMI", { rate: [56, 96], build: function (c, ctx) { stemi(c, ctx, 105, 3.2, [0, 0, 0, 0, -0.6, -0.8]); } },
      A("regular", "normal", "normal", "normal", "normal", "territorial"),
      "ST elevation in II, III and aVF (the inferior leads) with reciprocal ST depression in I and aVL. Usually the RCA; watch for AV blocks.",
      ["tw-lateral", "tw-pericarditis", "tw-posterior", "tw-anterior"]),
    C("tw-lateral", "stemi", "Lateral STEMI", { rate: [62, 100], build: function (c, ctx) { stemi(c, ctx, -20, 2.6, [0, 0, 0, 0.5, 2.5, 2.6]); } },
      A("regular", "normal", "normal", "normal", "normal", "territorial"),
      "ST elevation in I, aVL, V5 and V6 (lateral leads) with reciprocal ST depression in II, III and aVF. Usually the circumflex.",
      ["tw-inferior", "tw-anterior", "tw-pericarditis", "tw-septal"]),
    C("tw-anterior", "stemi", "Anterior STEMI", { rate: [62, 100], build: function (c, ctx) { stemi(c, ctx, 0, 0, [0.8, 3, 4, 3.2, 1, 0]); } },
      A("regular", "normal", "normal", "normal", "normal", "territorial"),
      "ST elevation centered on V2-V4 (anterior leads). The LAD supplies the anterior wall.",
      ["tw-septal", "tw-lateral", "tw-pericarditis", "tw-lbbb"]),
    C("tw-septal", "stemi", "Septal (septoanterior) STEMI", { rate: [62, 100], build: function (c, ctx) { stemi(c, ctx, 0, 0, [2.6, 3.2, 2.2, 0.6, 0, 0]); } },
      A("regular", "normal", "normal", "normal", "normal", "territorial"),
      "ST elevation in V1-V3, most in V1-V2 (the septal leads). LAD septal branches.",
      ["tw-anterior", "tw-posterior", "tw-lateral", "tw-rbbb"]),
    C("tw-posterior", "stemi", "Posterior STEMI", {
      rate: [60, 96], build: function (c, ctx) {
        c.r.v = [7, 9, 10, 13, 14, 11]; c.s.v = [-3, -4, -5, -4, -1.8, -0.8];
        c.stD = ctx.st(0.085, 0, 0, [-2.4, -3, -2, -0.5, 0, 0].map(function (x) { return x * (0.85 + ctx.r() * 0.4); }));
        c.t.v = [3.5, 5, 5, 4, 3.2, 2.4];
      }
    },
      A("regular", "normal", "normal", "normal", "normal", "posterior"),
      "No lead faces the back, so V1-V3 show the mirror image: ST depression, tall R and upright T. Posterior leads (V7-V9) would show the elevation. RCA or circumflex.",
      ["tw-septal", "tw-anterior", "tw-rvh", "tw-inferior"]),

    // ---- conduction (objectives 4, 12, 13) ----
    C("tw-lbbb", "conduction", "Left bundle branch block", {
      rate: [62, 96], axis: [15, 50], build: function (c, ctx) {
        delete c.q; delete c.s;
        c.r = { group: "qrs", t: 0.045, sd: 0.022, ang: ctx.axis, mag: 7, v: [-3, -5, -3, 3, 7, 7] };
        c.r2 = { group: "qrs", t: 0.105, sd: 0.022, ang: ctx.axis - 10, mag: 9, v: [-9, -13, -10, 5, 10, 9] };
        c.t = { group: "t", t: ctx.qt - 0.05, sd: 0.05, sd2: 0.035, ang: ctx.axis + 180, mag: 2.5, v: [4, 5, 4, 0.5, -2.5, -2.5] };
        c.stD = ctx.st(0.15, ctx.axis + 180, 1, [1.5, 2, 1.5, 0, -1, -1]);
      }
    }, A("regular", "normal", "normal", "normal", "lbbb", "discordant"),
      "QRS 0.12 s or more with a broad, deep S in V1 and a broad notched R in I, aVL, V5 and V6 (no septal q). The ST and T point the other way: expected with LBBB, not a STEMI.",
      ["tw-rbbb", "tw-paced", "tw-lvh", "tw-anterior"]),
    C("tw-rbbb", "conduction", "Right bundle branch block", {
      rate: [62, 96], axis: [20, 55], build: function (c, ctx) {
        c.r2 = { group: "qrs", t: 0.1, sd: 0.019, ang: -170, mag: 2.5, v: [6, 4, 1, -1.5, -3, -3.5] };
        c.t.v = [-2.5, -2, 0.5, 2.5, 2.8, 2.2];
        c.stD = ctx.st(0.125, 0, 0, [-0.8, -0.6, 0, 0, 0, 0]);
      }
    }, A("regular", "normal", "normal", "normal", "rbbb", "discordant"),
      "QRS 0.12 s or more with rsR' (rabbit ears) in V1-V2 and a wide, slurred S in I, V5 and V6. T inversion in V1-V2 is the expected secondary change.",
      ["tw-lbbb", "tw-rvh", "tw-wpw", "tw-septal"]),
    C("tw-lafb", "conduction", "Left anterior hemiblock (fascicular block)", {
      rate: [60, 96], axis: [-75, -50], build: function (c) { q(c, 115, 1.6); c.r.mag = 12; c.s.v = [-9, -13, -8, -5, -4, -3]; }
    }, A("regular", "lad", "normal", "normal", "lafb", "normal"),
      "Left axis deviation with qR in I and aVL and rS in II, III and aVF, and a normal-width QRS. The LV fills from the posterior fascicle, up and to the left.",
      ["tw-lpfb", "tw-lbbb", "tw-lvh", "tw-normal"]),
    C("tw-lpfb", "conduction", "Left posterior hemiblock (fascicular block)", {
      rate: [60, 96], axis: [105, 130], build: function (c) { q(c, -45, 1.6); c.r.mag = 12; }
    }, A("regular", "rad", "normal", "normal", "lpfb", "normal"),
      "Right axis deviation with rS in I and aVL and qR in III and aVF, normal-width QRS (rule out RVH and lateral MI first).",
      ["tw-lafb", "tw-rvh", "tw-pe", "tw-normal"]),
    C("tw-wpw", "conduction", "Wolff-Parkinson-White (pre-excitation)", {
      rate: [62, 96], pr: [0.08, 0.1], build: function (c, ctx) {
        c.delta = { group: "qrs", t: 0.025, sd: 0.022, ang: ctx.axis, mag: 3.5, v: [1, 1.5, 3, 4, 4, 3] };
        c.r.t = 0.065; c.s.t = 0.095; delete c.q;
      }
    }, A("regular", "normal", "normal", "short", "delta", "normal"),
      "Short PR (under 0.12 s) and a slurred QRS upstroke (delta wave): the accessory pathway skips the AV node's delay and pre-excites part of the ventricle.",
      ["tw-lbbb", "tw-rbbb", "tw-avb1", "tw-normal"]),

    // ---- hypertrophy and enlargement (objective 12) ----
    C("tw-lvh", "hypertrophy", "Left ventricular hypertrophy with strain", {
      rate: [62, 92], axis: [-30, -15], build: function (c, ctx) {
        c.r.mag = 16; c.r.v = [1, 3, 9, 22, 28, 24]; c.s.v = [-24, -28, -14, -5, -2, -1];
        c.t = { group: "t", t: ctx.qt - 0.06, sd: 0.06, sd2: 0.028, ang: ctx.axis + 180, mag: 2.5, v: [2.5, 2, 0.5, -1, -3, -3] };
        c.stD = ctx.st(0.085, ctx.axis + 180, 1.2, [1, 0.8, 0, -0.5, -1.5, -1.5]);
      }
    }, A("regular", "lad", "normal", "normal", "lvh", "strain"),
      "Very tall R in V5-V6 plus deep S in V1-V2 (S in V1 + R in V5 or V6 over 35 mm), axis toward the hypertrophy (left), and the strain pattern in the lateral leads.",
      ["tw-rvh", "tw-lbbb", "tw-lateral", "tw-lafb"]),
    C("tw-rvh", "hypertrophy", "Right ventricular hypertrophy (with right atrial enlargement)", {
      rate: [64, 96], axis: [110, 140], build: function (c, ctx) {
        c.p = { group: "p", t: -ctx.pr + 0.045, sd: 0.016, ang: 70, mag: 3.1, v: [1.6, 1.4, 1, 0.8, 0.7, 0.6] };
        c.r.v = [9, 7, 5, 5, 4, 3]; c.s.v = [-2, -4, -6, -8, -9, -7];
        c.t = { group: "t", t: ctx.qt - 0.06, sd: 0.06, sd2: 0.028, ang: 60, mag: 2, v: [-3, -2.5, -1.5, 0.5, 1.5, 1.5] };
        c.stD = ctx.st(0.085, 0, 0, [-1, -0.8, -0.4, 0, 0, 0]);
      }
    }, A("regular", "rad", "peaked", "normal", "rvh", "strain"),
      "Right axis deviation, R bigger than S in V1 with deep S in V5-V6, RV strain in V1-V3, and tall peaked P waves in II (right atrial enlargement).",
      ["tw-lvh", "tw-rbbb", "tw-pe", "tw-lpfb", "tw-posterior"]),

    // ---- electrolytes (objective 16) ----
    C("tw-hyperk", "electrolyte", "Hyperkalemia (peaked T waves)", {
      rate: [60, 92], build: function (c, ctx) {
        c.t = { group: "t", t: ctx.qt - 0.05, sd: 0.024, sd2: 0.022, ang: 50, mag: 8, v: [3, 10, 12, 11, 8, 6] };
        c.p.mag = 0.9;
      }
    }, A("regular", "normal", "normal", "normal", "normal", "peaked"),
      "Tall, narrow, tented T waves are the first sign of hyperkalemia. Worse potassium flattens the P, lengthens the PR and widens the QRS, then a sine wave.",
      ["tw-hypok", "tw-anterior", "tw-hypoca", "tw-hyperca"]),
    C("tw-hypok", "electrolyte", "Hypokalemia (flat T, U waves)", {
      rate: [56, 88], build: function (c, ctx) {
        c.t.mag = 0.8; c.t.v = [0.2, 0.8, 1, 1, 0.8, 0.6];
        c.u = { group: "u", t: ctx.qt + 0.07, sd: 0.04, ang: 50, mag: 1.3, v: [0.5, 1.6, 2, 2, 1.4, 1] };
        c.stD = ctx.st(0.085, 50, -0.5, [0, -0.5, -0.6, -0.6, -0.5, -0.4]);
      }
    }, A("regular", "normal", "normal", "normal", "normal", "flatu"),
      "Low potassium flattens the T wave and brings out a U wave after it (with slight ST depression). The U wave can look like a long QT.",
      ["tw-hyperk", "tw-hypoca", "tw-hyperca", "tw-normal"]),
    C("tw-hyperca", "electrolyte", "Hypercalcemia (short QT)", { rate: [62, 90], qtc: [0.3, 0.32] },
      A("regular", "normal", "normal", "normal", "normal", "shortqt"),
      "High calcium shortens the ST segment, so the T wave starts right after the QRS and the QT is short (QTc under 350 ms is abnormal).",
      ["tw-hypoca", "tw-hyperk", "tw-hypok", "tw-normal"]),
    C("tw-hypoca", "electrolyte", "Hypocalcemia (long QT)", { rate: [60, 86], qtc: [0.53, 0.57] },
      A("regular", "normal", "normal", "normal", "normal", "longqt"),
      "Low calcium lengthens the ST segment, so the QT is long while the T wave itself looks normal. A long QT risks torsades.",
      ["tw-hyperca", "tw-hypok", "tw-hyperk", "tw-normal"]),

    // ---- other conditions and rhythms (objectives 8, 13) ----
    C("tw-pericarditis", "conditions", "Pericarditis", {
      rate: [90, 118], build: function (c, ctx) {
        c.stE = plateauST(ctx, 50, 2, [0.5, 2, 2.5, 2.5, 2, 1.5]);
        c.prD = ctx.plateau("pr", -ctx.pr + 0.1, -0.02, 0, 0.02, 50, -0.9, [0, -0.6, -0.7, -0.7, -0.6, -0.5]);
      }
    }, A("regular", "normal", "normal", "depressed", "normal", "diffuse"),
      "Diffuse, concave ST elevation that doesn't fit one coronary territory, PR depression, and the opposite (ST depression, PR elevation) in aVR. No reciprocal changes.",
      ["tw-inferior", "tw-lateral", "tw-anterior", "tw-effusion"]),
    C("tw-effusion", "conditions", "Pericardial effusion (low voltage, electrical alternans)", { rate: [104, 124], qrsScale: 0.32, alternans: true },
      A("regular", "normal", "normal", "normal", "low", "normal"),
      "Fluid around the heart muffles the voltage (small complexes in every lead) and the heart swings in the fluid, so the QRS height alternates beat to beat. Usually with sinus tachycardia.",
      ["tw-pericarditis", "tw-pe", "tw-hypok", "tw-normal"]),
    C("tw-pe", "conditions", "Pulmonary embolus (S1Q3T3)", {
      rate: [104, 124], axis: [96, 106], build: function (c, ctx) {
        q(c, -45, 2); c.r.mag = 10;
        c.s2 = { group: "qrs", t: 0.072, sd: 0.011, ang: 180, mag: 4, v: [0, 0, 0, -1, -3, -3] };
        c.t = { group: "t", t: ctx.qt - 0.066, sd: 0.046, sd2: 0.032, ang: -15, mag: 2.5, v: [-2, -2, -1.5, 1, 2, 2] };
      }
    }, A("regular", "rad", "normal", "normal", "s1q3", "pe"),
      "Sinus tachycardia with S1Q3T3: a deep S in I, a Q in III and an inverted T in III, plus right axis deviation and RV strain (T inversion in V1-V3).",
      ["tw-rvh", "tw-lpfb", "tw-inferior", "tw-effusion"]),
    C("tw-afrvr", "conditions", "Atrial fibrillation with RVR", { rhythm: "af", rate: [112, 146] },
      A("irregirreg", "normal", "none", "none", "normal", "normal"),
      "Irregularly irregular narrow complexes with no P waves, just a fine wavy baseline. Ventricular rate over 100 = rapid ventricular response.",
      ["tw-normal", "tw-pericarditis", "tw-effusion", "tw-avb1"]),
    C("tw-paced", "conditions", "Ventricular paced rhythm", {
      rhythm: "paced", rateFixed: [60, 70], build: function (c, ctx) {
        delete c.q; delete c.s; delete c.p;
        c.r = { group: "qrs", t: 0.06, sd: 0.03, ang: -60, mag: 10, v: [-10, -14, -12, -6, 4, 8] };
        c.r2 = { group: "qrs", t: 0.12, sd: 0.025, ang: -70, mag: 4, v: [-4, -5, -4, -2, 3, 5] };
        c.t = { group: "t", t: ctx.qt + 0.02, sd: 0.06, sd2: 0.04, ang: 120, mag: 3, v: [4, 5, 4, 2, -2, -3] };
        c.stD = ctx.st(0.17, 120, 1, [1.5, 2, 1.5, 0.5, -1, -1]);
      }
    }, A("regular", "lad", "paced", "none", "paced", "discordant"),
      "A pacer spike before every wide QRS at exactly the programmed rate. Pacing from the RV apex looks like an LBBB with left axis deviation, and the ST-T is discordant.",
      ["tw-lbbb", "tw-rbbb", "tw-afrvr", "tw-avb1"]),
    C("tw-avb1", "conditions", "Sinus bradycardia with 1st degree AV block", { rate: [44, 56], pr: [0.27, 0.33] },
      A("regular", "normal", "normal", "long", "normal", "normal"),
      "Every P conducts, but the PR is longer than one big box (over 0.20 s) and the same every beat; the rate is under 60.",
      ["tw-normal", "tw-wpw", "tw-afrvr", "tw-hypoca"]),
    C("tw-normal", "conditions", "Normal sinus rhythm, normal EKG", { rate: [62, 94] },
      A("regular", "normal", "normal", "normal", "normal", "normal"),
      "Regular, 60-100, normal axis, an upright P before every QRS, PR 0.12-0.20, narrow QRS and upright, slightly asymmetric T waves.",
      ["tw-avb1", "tw-afrvr", "tw-hyperca", "tw-lafb"])
  ];

  // Concave (pericarditis-style) ST elevation: rises early from the J point and blends into the T.
  function plateauST(ctx, ang, mag, v) { return ctx.plateau("st", 0.09, ctx.qt - 0.08, ctx.qt, 0.035, ang, mag, v); }

  window.EKG_EXAM = {
    format: FORMAT,
    strips: { slots: STRIP_SLOTS },
    twelve: { fields: FIELDS, cases: CASES, categories: ["stemi", "conduction", "hypertrophy", "electrolyte", "conditions"] }
  };
}());
