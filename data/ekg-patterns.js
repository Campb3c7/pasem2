/*
  EKG Pattern gallery (objectives 4, 5, 10, 12, 13, 16). Engine: ekg-patterns.js (draws the complexes).
  Each pattern: id (pt-*, a progress key: never rename), group, name, leads (what to draw: lead name and
  one or more beats; a beat is a list of overrides on the normal complex, see ekg-patterns.js), look
  (EKG criteria, from the EKG Interpretation deck), why (cause -> effect), confuse (look-alike ids for
  the quiz). Anything the deck doesn't say is marked "(standard teaching)".
*/
(function () {
  "use strict";

  function P(id, group, name, leads, look, why, confuse) { return { id: id, group: group, name: name, leads: leads, look: look, why: why, confuse: confuse }; }
  function L(lead, beats, repeat) { return { lead: lead, beats: Array.isArray(beats) ? beats : [beats], repeat: repeat || 1 }; }
  // Normal V1 and V6 complexes to build on (mm).
  var V1 = { r: 2, s: 9, t: 1 }, V6 = { q: 0.6, r: 11, s: 1.5, t: 2.2 };

  var groups = [
    { id: "electrolytes", title: "Electrolytes", blurb: "Potassium changes the T wave first; calcium changes the QT." },
    { id: "enlargement", title: "Enlargement, hypertrophy & strain", blurb: "Bigger chamber, more muscle, more voltage: taller or wider waves, and the axis follows the muscle." },
    { id: "conduction", title: "Bundle branch blocks, hemiblocks & pre-excitation", blurb: "A blocked branch makes the ventricle wait its turn (wide QRS); a blocked fascicle only swings the axis." },
    { id: "conditions", title: "Pericardium, PE, pacers & QT", blurb: "Patterns from objective 13, plus the long QT of objective 10 and the Q waves of objective 5." }
  ];

  var patterns = [
    // ---- electrolytes ----
    P("pt-hyperk-early", "electrolytes", "Hyperkalemia (early): peaked T waves",
      [L("II", { t: 7, tShape: "peaked" }), L("V3", { r: 7, s: 7, t: 10, tShape: "peaked" })],
      ["Tall, narrow, peaked (tented) T waves in all leads", "First change of the progressive series"],
      "Extra potassium outside the cell speeds up repolarization, so the T wave becomes tall, narrow and pointed.",
      ["pt-hyperk-late", "pt-hypok", "pt-hypercalcemia"]),
    P("pt-hyperk-late", "electrolytes", "Hyperkalemia (progressing): flat P, long PR, wide QRS",
      [L("II", { p: 0.3, pr: 7, qrsW: 4, r: 7, s: 3, t: 7, tShape: "peaked" })],
      ["Flattening of the P waves", "Prolonged PR interval (1st degree AV block)", "Progressive widening of the QRS", "Peaked T waves"],
      "As potassium keeps rising, the resting membrane potential gets less negative and conduction slows everywhere: atria (flat P), AV node (long PR), ventricles (wide QRS).",
      ["pt-hyperk-early", "pt-hyperk-sine", "pt-lbbb"]),
    P("pt-hyperk-sine", "electrolytes", "Severe hyperkalemia: sine wave pattern",
      [L("II", { sine: true }, 1)],
      ["QRS widens until it merges with the T wave", "Smooth sine-wave pattern: pre-arrest"],
      "Conduction is so slow that the QRS and T blur into one continuous wave. VF or asystole is next.",
      ["pt-hyperk-late", "pt-effusion", "pt-paced-v"]),
    P("pt-hypok", "electrolytes", "Hypokalemia: flat T and U waves",
      [L("II", { st: -1, t: 0.6, u: 1.6 }), L("V3", { r: 7, s: 7, st: -1, t: 0.8, u: 2.2 })],
      ["ST segment depression", "Flattening of the T wave", "U waves: a positive bump between the T and the next P", "Prolonged QT (really a QU) interval"],
      "Low potassium slows and prolongs repolarization: the T wave shrinks and the late repolarization shows up as a U wave.",
      ["pt-hyperk-early", "pt-hypocalcemia", "pt-long-qt"]),
    P("pt-hypercalcemia", "electrolytes", "Hypercalcemia: short QT",
      [L("II", { stLen: 0.2, t: 2.6, tw: 5 })],
      ["Shortened QT interval (the ST segment nearly disappears)", "Predisposes to arrhythmias"],
      "Calcium sets the length of the plateau (phase 2). More calcium, shorter plateau, so the ST segment and QT shorten.",
      ["pt-hypocalcemia", "pt-hyperk-early", "pt-long-qt"]),
    P("pt-hypocalcemia", "electrolytes", "Hypocalcemia: long QT",
      [L("II", { stLen: 7, t: 2.4, len: 30 })],
      ["Prolonged QT interval from a long, flat ST segment (the T wave itself is normal)", "Decreased contractility; may lead to torsades de pointes"],
      "Low calcium stretches the plateau, so the flat ST segment gets long and the QT prolongs.",
      ["pt-hypercalcemia", "pt-hypok", "pt-long-qt"]),

    // ---- enlargement ----
    P("pt-rae", "enlargement", "Right atrial enlargement",
      [L("II", { p: 3.2, pShape: "peaked" }), L("V1", Object.assign({ p: [2, 0.4], pShape: "biphasic" }, V1))],
      ["P wave taller than 2.5 mm (lead II)", "Biphasic P in V1 with the initial (RA) part taller than the terminal part", "P width stays normal"],
      "The RA fires first, so it makes the first part of the P. A bigger RA makes that part taller, but it is still hidden inside the normal P width.",
      ["pt-lae", "pt-hyperk-early", "pt-pe"]),
    P("pt-lae", "enlargement", "Left atrial enlargement",
      [L("II", { p: 1.6, pShape: "notched", pw: 3.5 }), L("V1", Object.assign({ p: [0.6, 1.6], pShape: "biphasic", pw: 3.4 }, V1))],
      ["Biphasic P in V1 whose terminal part drops at least 1 mm below baseline", "Terminal P wider than 0.04 s (broad, notched P in II, standard teaching)"],
      "The LA fires last, so it makes the end of the P. A bigger LA makes the end deeper in V1 and the whole P wider.",
      ["pt-rae", "pt-rbbb", "pt-wpw"]),
    P("pt-rvh", "enlargement", "Right ventricular hypertrophy",
      [L("V1", { r: 9, s: 2, t: -1.5 }), L("V6", { r: 4, s: 6, t: 1.2 })],
      ["Right axis deviation (the most common finding)", "R larger than S in V1", "R waves shrink from V1 to V6 (the opposite of normal)"],
      "Axis goes toward hypertrophy: the thick RV pulls the forces right and toward V1, so V1 gets a tall R.",
      ["pt-lvh", "pt-rbbb", "pt-lph"]),
    P("pt-lvh", "enlargement", "Left ventricular hypertrophy",
      [L("V1", { r: 1.5, s: 22, t: 1.5 }), L("V5", { q: 0.6, r: 24, s: 1, tShape: "strain", t: 3 })],
      ["S in V1 or V2 + R in V5 or V6 over 35 mm", "R in V5 over 26 mm (also: R V6 > R V5, aVL > 13, aVF > 21, I > 14, I + S III > 25)", "Left axis deviation (about -15°) often", "Asymmetric inverted T with a slow downslope and rapid upstroke"],
      "More LV muscle means more voltage: tall R waves over the LV (V5-V6) and deep S waves on the opposite side (V1).",
      ["pt-rvh", "pt-lbbb", "pt-lv-strain"]),
    P("pt-rv-strain", "enlargement", "Right ventricular strain",
      [L("V1", { r: 8, s: 2, tShape: "strain", t: 2.5 })],
      ["ST depression with a slight early hump, then an inverted T", "Seen in V1 (right side)"],
      "A hard-working, thick RV can't repolarize normally, so the ST segment sags down over the right ventricle.",
      ["pt-lv-strain", "pt-rvh", "pt-hypok"]),
    P("pt-lv-strain", "enlargement", "Left ventricular strain",
      [L("V5", { q: 0.6, r: 20, s: 1, tShape: "strain", t: 3 }), L("V6", { q: 0.6, r: 17, s: 1, tShape: "strain", t: 2.5 })],
      ["ST depression with a slight early hump, then an asymmetric inverted T", "Seen in V5 and V6 (left side)", "Usually with LVH voltage"],
      "The thick LV is working hard and repolarizes abnormally, so the leads over it show a sagging ST and inverted T.",
      ["pt-rv-strain", "pt-lvh", "pt-hypok"]),

    // ---- conduction ----
    P("pt-rbbb", "conduction", "Right bundle branch block",
      [L("V1", { qrs: "rsr", r: 3, s: 3, r2: 7, qrsW: 3.4, t: -1.5 }), L("V6", Object.assign({}, V6, { qrs: "slurS", qrsW: 3.4 }))],
      ["QRS 0.12 s or wider", "Best seen in V1 and V2: R and R' (\"rabbit ears\", an M)", "Wide slurred S in V6 (standard teaching)", "Causes: anterior MI, CAD, PE, drug toxicity"],
      "The left ventricle depolarizes on time, then the impulse crawls over to the blocked RV through muscle. That late RV activation is the second peak (R') in V1, which sits over the RV.",
      ["pt-lbbb", "pt-rvh", "pt-wpw"]),
    P("pt-lbbb", "conduction", "Left bundle branch block",
      [L("V1", { r: 0.5, s: 14, qrsW: 3.6, st: 2, t: 2.5 }), L("V6", { q: 0, qrs: "notchR", r: 12, qrsW: 3.6, st: -1, t: -2.5 })],
      ["QRS 0.12 s or wider", "Best seen in V5 and V6: tall wide R with a flat or notched top", "Rabbit ears less likely", "Deep wide QS in V1 (standard teaching)"],
      "The RV goes first, then the impulse spreads slowly through the whole LV muscle. The big LV forces are late and slow, so V5-V6 (over the LV) show a broad, notched R.",
      ["pt-rbbb", "pt-lvh", "pt-paced-v"]),
    P("pt-lah", "conduction", "Left anterior hemiblock",
      [L("I", { q: 1, r: 9, s: 0.5 }), L("aVF", { q: 0, r: 2, s: 8, t: 1 })],
      ["Left axis deviation (lead I positive, aVF negative)", "QRS NOT widened"],
      "The anterior fascicle is the longest and thinnest, with the most fragile blood supply. When it fails, the LV fires from the posterior fascicle and the forces swing up and left. The rest of the system is intact, so the QRS stays narrow.",
      ["pt-lph", "pt-lbbb", "pt-lvh"]),
    P("pt-lph", "conduction", "Left posterior hemiblock",
      [L("I", { q: 0, r: 2, s: 8, t: 1 }), L("aVF", { q: 1, r: 10, s: 0.5 })],
      ["Right axis deviation (lead I negative, aVF positive)", "QRS NOT widened", "Rule out RVH first (standard teaching)"],
      "The posterior fascicle fails, so the LV fires from the anterior fascicle and the forces swing down and right. QRS stays narrow.",
      ["pt-lah", "pt-rvh", "pt-rbbb"]),
    P("pt-wpw", "conduction", "Delta wave (Wolff-Parkinson-White)",
      [L("II", { pr: 2.4, qrs: "delta", qrsW: 3 }), L("V5", { pr: 2.4, qrs: "delta", qrsW: 3, r: 12, s: 1, q: 0 })],
      ["Short PR interval", "Slurred upstroke of the QRS (delta wave)", "Slightly wide QRS"],
      "An accessory pathway skips the AV node's delay, so part of the ventricle starts depolarizing early and slowly (the slurred delta), then the normal system catches up.",
      ["pt-rbbb", "pt-lbbb", "pt-hyperk-late"]),

    // ---- conditions ----
    P("pt-pericarditis", "conditions", "Pericarditis",
      [L("I", { st: 2, stShape: "concave", t: 3 }), L("II", { st: 2.5, stShape: "concave", t: 3.5 }), L("V3", { r: 7, s: 6, st: 2.5, stShape: "concave", t: 4 }), L("V5", { q: 0.5, r: 12, s: 2, st: 2, stShape: "concave", t: 3 })],
      ["Diffuse changes in most leads (not one territory)", "ST segments flat or concave (\"saggy\"), T waves upright and elevated", "T inversion only AFTER the ST segment normalizes (in MI it is before)", "No Q waves develop"],
      "The inflamed pericardium irritates the surface of the whole heart, so injury currents show up everywhere instead of in one coronary territory.",
      ["pt-effusion", "pt-hyperk-early", "pt-stemi"]),
    P("pt-effusion", "conditions", "Pericardial effusion: low voltage and electrical alternans",
      [L("II", [{ r: 3.5, s: 0.8, t: 0.8, p: 0.5, len: 18 }, { r: 2, s: 1.2, t: 0.8, p: 0.5, len: 18 }], 2)],
      ["Low QRS voltage (fluid dampens the signal)", "Electrical alternans: QRS height or axis changes every other beat", "May also show pericarditis changes"],
      "Fluid around the heart muffles the electrical signal (small complexes), and the heart swings back and forth in the fluid-filled sac, so every other beat points a little differently.",
      ["pt-pericarditis", "pt-paced-v", "pt-hyperk-sine"]),
    P("pt-pe", "conditions", "Pulmonary embolus (S1Q3T3)",
      [L("I", { q: 0, r: 5, s: 5 }), L("III", { q: 3, r: 3, s: 0.5, t: -2 }), L("II", { p: 3, pShape: "peaked" })],
      ["S1Q3T3 (classic but not common): large S in I, deep Q in III, inverted T in III", "Tall peaked P in II, III, aVF", "Right axis deviation", "Right bundle branch block"],
      "A clot suddenly loads the right heart (acute cor pulmonale): the RA stretches (peaked P), the RV strains and the forces swing right.",
      ["pt-rvh", "pt-rae", "pt-lph"]),
    P("pt-paced-v", "conditions", "Ventricular paced rhythm",
      [L("II", { spike: "v", qrs: "paced", qrsW: 4, r: 8, s: 3, st: -0.5, t: -2.5, p: 0, len: 20 }, 3)],
      ["Upright pacer spike before each QRS", "Wide, bizarre QRS after each spike", "Used for 3rd degree block, symptomatic 2nd degree block or bradycardia, and overdrive of symptomatic tachycardia"],
      "The lead sits in the RV, so each beat starts in the muscle and spreads slowly cell to cell: wide QRS, like a PVC or LBBB.",
      ["pt-paced-a", "pt-lbbb", "pt-hyperk-sine"]),
    P("pt-paced-a", "conditions", "Atrial paced rhythm",
      [L("II", { spike: "a", len: 20 }, 3)],
      ["Upright pacer spike before each P wave", "Normal P waves and normal QRS complexes"],
      "The pacer only starts the atrial beat; the impulse then travels the normal pathway, so everything after the spike looks normal.",
      ["pt-paced-v", "pt-wpw", "pt-lah"]),
    P("pt-long-qt", "conditions", "Prolonged QTc",
      [L("II", { stLen: 5, tw: 8, t: 2.6, len: 30 })],
      ["QT longer than about half the R-R interval (standard teaching for a quick look)", "Risk: torsades de pointes, which can turn into VF"],
      "A long QT means a long period when parts of the ventricle are still repolarizing. An early beat landing then (R on T) can set off torsades.",
      ["pt-hypocalcemia", "pt-hypok", "pt-hypercalcemia"]),
    P("pt-path-q", "conditions", "Pathological Q wave",
      [L("III", { q: 4, qw: 1.4, r: 4, s: 0, t: -1 })],
      ["Wider than 0.04 s (1 small box)", "Deeper than 1/3 of the R wave in the same complex", "In 2 or more contiguous leads (not aVR)", "Means irreversible damage (infarction)"],
      "Dead tissue is electrically silent, so the lead looks through the hole and sees depolarization moving away from it: a deep, wide Q.",
      ["pt-phys-q", "pt-pe", "pt-lbbb"]),
    P("pt-phys-q", "conditions", "Physiologic (septal) q wave",
      [L("V6", { q: 1, r: 13, s: 1 })],
      ["Small q in the left lateral leads (I, aVL, V5, V6)", "Less than 0.04 s wide and less than 25% of the R"],
      "The septal fascicle depolarizes the septum from left to right first, which points slightly away from the left-sided leads: a tiny normal q.",
      ["pt-path-q", "pt-lah", "pt-lvh"]),
    P("pt-stemi", "conditions", "Acute STEMI (territorial ST elevation)",
      [L("II", { st: 3, t: 5 }), L("III", { r: 6, s: 2, st: 3.5, t: 5 }), L("aVL", { r: 4, s: 3, st: -1.5, t: -0.5 })],
      ["ST elevation in 2+ leads facing one area (here inferior: II, III)", "Reciprocal ST depression on the opposite side (here aVL)", "Q waves may develop"],
      "Injury current from one blocked artery shows only in the leads facing that wall, with the mirror image in the leads looking from the other side.",
      ["pt-pericarditis", "pt-hyperk-early", "pt-lv-strain"])
  ];

  window.EKG_PATTERNS = { groups: groups, patterns: patterns };
}());
