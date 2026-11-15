/*
  EKG Rhythm ladder: the rhythm groups taught as short rounds of taps and picks on fresh strips.
  Engine: ekg-ladder.js. Rhythms come from window.EKG_RHYTHMS (ids ekr-*), strips from RhythmSynth.

  Each group has rungs (ids are progress keys: never rename). Rung kinds:
    tapQrs   tap every QRS, then the count x 10 shows the rate
    tapP     tap every P wave, then P vs QRS count shows
    tapEarly tap the early beat
    tapDrop  tap the P wave that gets no QRS
    tapGap   tap the pause
    pick     one feature: options { key: label } (2-4), answers { rhythm id: key }, mark = what the
             strip highlights after answering (qrs, p, rr, wide, early, pr), rule = one short line
    name     name it: choices come from the rung's pool (look-alikes first)
    which    two strips: pairs [[a, b], ...], "which one is ...?"
    family   which group is it (pool = every rhythm with a strip that can be read)
  n = questions in the round. Misses come back later in the round and in Redo misses.
*/
(function () {
  "use strict";

  var BAND3 = { slow: "Under 60", normal: "60-100", fast: "Over 100" };
  var REG = { reg: "Regular", irr: "Irregular" };
  var YESNO = { yes: "Yes", no: "No" };
  var WIDTH = { narrow: "Narrow", wide: "Wide" };
  var RATE_RULE = "Count the QRS on the 6-second strip × 10.";
  var REG_RULE = "Same gap between every QRS = regular.";
  var WIDE_RULE = "Wide = 3 or more small boxes (0.12 s).";

  var groups = [
    {
      id: "sinus", title: "Sinus rhythms",
      rungs: [
        { id: "ld-s-count", title: "Count the beats", kind: "tapQrs", pool: ["ekr-nsr", "ekr-sb", "ekr-st"], n: 3 },
        { id: "ld-s-rate", title: "Slow, normal or fast?", kind: "pick", ask: "Rate?", options: BAND3, mark: "qrs", rule: RATE_RULE,
          answers: { "ekr-nsr": "normal", "ekr-sb": "slow", "ekr-st": "fast" }, n: 6 },
        { id: "ld-s-reg", title: "Steady or not?", kind: "pick", ask: "Regular?", options: REG, mark: "rr", rule: REG_RULE,
          answers: { "ekr-nsr": "reg", "ekr-sb": "reg", "ekr-st": "reg", "ekr-sa": "irr", "ekr-pause": "irr" }, n: 6 },
        { id: "ld-s-gap", title: "Find the pause", kind: "tapGap", pool: ["ekr-pause"], n: 3 },
        { id: "ld-s-name", title: "Name it", kind: "name", pool: ["ekr-nsr", "ekr-sb", "ekr-st", "ekr-sa", "ekr-pause"], n: 8 }
      ]
    },
    {
      id: "atrial", title: "Atrial rhythms",
      rungs: [
        { id: "ld-a-p", title: "What's before the QRS?", kind: "pick", ask: "Before each QRS?", mark: "p", rule: "Look at the baseline between the QRS complexes.",
          options: { normal: "Upright P, same shape", flutter: "Sawtooth waves", fib: "Wavy line, no P", varied: "P changes shape" },
          answers: { "ekr-nsr": "normal", "ekr-flutter41": "flutter", "ekr-flutter21": "flutter", "ekr-af": "fib", "ekr-afrvr": "fib", "ekr-wap": "varied", "ekr-mat": "varied" }, n: 7 },
        { id: "ld-a-reg", title: "Steady or not?", kind: "pick", ask: "Regular?", options: REG, mark: "rr", rule: REG_RULE,
          answers: { "ekr-af": "irr", "ekr-afrvr": "irr", "ekr-mat": "irr", "ekr-wap": "irr", "ekr-flutter41": "reg", "ekr-flutter21": "reg", "ekr-atach": "reg" }, n: 6 },
        { id: "ld-a-rate", title: "Under or over 100?", kind: "pick", ask: "Rate?", options: { under: "Under 100", over: "Over 100" }, mark: "qrs", rule: "Over 100 renames it: WAP → MAT, controlled AF → RVR.",
          answers: { "ekr-af": "under", "ekr-afrvr": "over", "ekr-wap": "under", "ekr-mat": "over", "ekr-flutter41": "under", "ekr-flutter21": "over" }, n: 6 },
        { id: "ld-a-which", title: "Which one?", kind: "which", pairs: [["ekr-af", "ekr-flutter41"], ["ekr-wap", "ekr-mat"], ["ekr-af", "ekr-afrvr"], ["ekr-st", "ekr-atach"], ["ekr-flutter21", "ekr-st"]], n: 5 },
        { id: "ld-a-name", title: "Name it", kind: "name", pool: ["ekr-atach", "ekr-wap", "ekr-mat", "ekr-flutter21", "ekr-flutter41", "ekr-af", "ekr-afrvr"], n: 8 }
      ]
    },
    {
      id: "junctional", title: "Junctional rhythms",
      rungs: [
        { id: "ld-j-p", title: "Upright P before the QRS?", kind: "pick", ask: "Upright P before every QRS?", options: YESNO, mark: "p", rule: "Junctional: no P, or an inverted P right after the QRS.",
          answers: { "ekr-nsr": "yes", "ekr-sb": "yes", "ekr-st": "yes", "ekr-jbrady": "no", "ekr-jr": "no", "ekr-ajr": "no", "ekr-jtach": "no" }, n: 6 },
        { id: "ld-j-count", title: "Count the beats", kind: "tapQrs", pool: ["ekr-jr", "ekr-jbrady", "ekr-ajr"], n: 3 },
        { id: "ld-j-rate", title: "Which rate?", kind: "pick", ask: "Rate?", mark: "qrs", rule: "Junction's own rate is 40-60.",
          options: { b40: "Under 40", b60: "40-60", b100: "60-100", fast: "Over 100" },
          answers: { "ekr-jbrady": "b40", "ekr-jr": "b60", "ekr-ajr": "b100", "ekr-jtach": "fast" }, n: 6 },
        { id: "ld-j-which", title: "Which one?", kind: "which", pairs: [["ekr-sb", "ekr-jr"], ["ekr-st", "ekr-jtach"], ["ekr-nsr", "ekr-ajr"]], n: 4 },
        { id: "ld-j-name", title: "Name it", kind: "name", pool: ["ekr-jbrady", "ekr-jr", "ekr-ajr", "ekr-jtach"], n: 6 }
      ]
    },
    {
      id: "ventricular", title: "Ventricular rhythms",
      rungs: [
        { id: "ld-v-width", title: "Narrow or wide?", kind: "pick", ask: "QRS?", options: WIDTH, mark: "wide", rule: WIDE_RULE,
          answers: { "ekr-jr": "narrow", "ekr-ajr": "narrow", "ekr-nsr": "narrow", "ekr-st": "narrow", "ekr-idio": "wide", "ekr-aivr": "wide", "ekr-vt": "wide" }, n: 6 },
        { id: "ld-v-arrest", title: "Arrest rhythms", kind: "name", pool: ["ekr-vt", "ekr-torsades", "ekr-vf", "ekr-asys"], n: 6 },
        { id: "ld-v-rate", title: "Which rate?", kind: "pick", ask: "Rate?", options: { b40: "20-40", b100: "40-100", fast: "Over 100" }, mark: "qrs", rule: "Ventricles' own rate is 20-40.",
          answers: { "ekr-idio": "b40", "ekr-aivr": "b100", "ekr-vt": "fast" }, n: 6 },
        { id: "ld-v-which", title: "Which one?", kind: "which", pairs: [["ekr-jr", "ekr-idio"], ["ekr-vt", "ekr-torsades"], ["ekr-vf", "ekr-asys"], ["ekr-ajr", "ekr-aivr"]], n: 4 },
        { id: "ld-v-name", title: "Name it", kind: "name", pool: ["ekr-idio", "ekr-aivr", "ekr-vt", "ekr-torsades", "ekr-vf", "ekr-asys"], n: 8 }
      ]
    },
    {
      id: "blocks", title: "AV blocks",
      rungs: [
        { id: "ld-b-tapp", title: "Tap every P wave", kind: "tapP", pool: ["ekr-avb1", "ekr-avb2i", "ekr-avb2ii", "ekr-avb3"], n: 3 },
        { id: "ld-b-every", title: "Every P gets a QRS?", kind: "pick", ask: "Every P followed by a QRS?", options: YESNO, mark: "p", rule: "Count P waves vs QRS complexes.",
          answers: { "ekr-nsr": "yes", "ekr-avb1": "yes", "ekr-avb2i": "no", "ekr-avb2ii": "no", "ekr-avb3": "no" }, n: 6 },
        { id: "ld-b-drop", title: "Find the dropped beat", kind: "tapDrop", pool: ["ekr-avb2i", "ekr-avb2ii"], n: 3 },
        { id: "ld-b-pr", title: "What does the PR do?", kind: "pick", ask: "PR interval?", mark: "pr", rule: "Normal PR = 3-5 small boxes (0.12-0.20 s).",
          options: { normal: "Normal, constant", long: "Long, constant", progressive: "Longer, longer, drop", dropped: "Same, then a drop", varies: "No relationship" },
          answers: { "ekr-nsr": "normal", "ekr-avb1": "long", "ekr-avb2i": "progressive", "ekr-avb2ii": "dropped", "ekr-avb3": "varies" }, n: 6 },
        { id: "ld-b-which", title: "Which one?", kind: "which", pairs: [["ekr-avb2i", "ekr-avb2ii"], ["ekr-avb1", "ekr-nsr"], ["ekr-avb2ii", "ekr-avb3"]], n: 4 },
        { id: "ld-b-name", title: "Name it", kind: "name", pool: ["ekr-avb1", "ekr-avb2i", "ekr-avb2ii", "ekr-avb3"], n: 6 }
      ]
    },
    {
      id: "early", title: "Early beats (PACs, PJCs, PVCs)",
      rungs: [
        { id: "ld-e-tap", title: "Tap the early beat", kind: "tapEarly", pool: ["ekr-pac", "ekr-pjc", "ekr-pvc"], n: 3 },
        { id: "ld-e-width", title: "Early beat: narrow or wide?", kind: "pick", ask: "Early beat's QRS?", options: WIDTH, mark: "early", rule: WIDE_RULE,
          answers: { "ekr-pac": "narrow", "ekr-pjc": "narrow", "ekr-pvc": "wide", "ekr-bigeminy": "wide" }, n: 6 },
        { id: "ld-e-p", title: "What's before the early beat?", kind: "pick", ask: "Before the early beat?", mark: "early", rule: "Atrial = odd P · Junctional = no upright P · Ventricular = no P, wide.",
          options: { odd: "Its own odd-shaped P", junction: "No upright P (inverted after)", none: "Nothing, and it's wide" },
          answers: { "ekr-pac": "odd", "ekr-pjc": "junction", "ekr-pvc": "none", "ekr-bigeminy": "none" }, n: 6 },
        { id: "ld-e-which", title: "Which one?", kind: "which", pairs: [["ekr-pac", "ekr-pvc"], ["ekr-pac", "ekr-pjc"], ["ekr-pvc", "ekr-bigeminy"]], n: 4 },
        { id: "ld-e-name", title: "Name it", kind: "name", pool: ["ekr-pac", "ekr-pjc", "ekr-pvc", "ekr-bigeminy"], n: 6 }
      ]
    },
    {
      id: "mixed", title: "All groups together",
      rungs: [
        { id: "ld-m-family", title: "Which group?", kind: "family", n: 8 },
        { id: "ld-m-width", title: "Narrow or wide?", kind: "pick", ask: "QRS?", options: WIDTH, mark: "wide", rule: WIDE_RULE,
          answers: { "ekr-nsr": "narrow", "ekr-af": "narrow", "ekr-flutter21": "narrow", "ekr-jr": "narrow", "ekr-atach": "narrow", "ekr-avb1": "narrow", "ekr-idio": "wide", "ekr-vt": "wide", "ekr-aivr": "wide", "ekr-avb3": "wide", "ekr-avb2ii": "wide" }, n: 8 },
        { id: "ld-m-name", title: "Name it: everything", kind: "name", pool: "all", n: 12 }
      ]
    }
  ];

  window.EKG_LADDER = { groups: groups };
}());
