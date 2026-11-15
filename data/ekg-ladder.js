/*
  EKG Rhythm ladder: "Which rhythm is it?" multiple choice on fresh strips, one rhythm group at a time.
  Engine: ekg-ladder.js. Rhythms come from window.EKG_RHYTHMS (ids ekr-*), strips from RhythmSynth.
  Anna (2026-11-15): plain multiple choice only, and every answer choice in a group's round comes
  from that same group (no out-of-group options to rule out). Rounds start with small sets of the
  group and end with the whole group; the last group mixes everything.
  Rung ids are progress keys: never rename. n = questions per round; misses come back in the round
  and in Redo misses. (The engine still supports the tap/pick/which kinds, but none are used.)
*/
(function () {
  "use strict";

  var groups = [
    {
      id: "sinus", title: "Sinus rhythms",
      rungs: [
        { id: "ld-sin-1", title: "Normal, slow or fast", kind: "name", pool: ["ekr-nsr", "ekr-sb", "ekr-st"], n: 6 },
        { id: "ld-sin-2", title: "Steady or not", kind: "name", pool: ["ekr-nsr", "ekr-sa", "ekr-pause"], n: 6 },
        { id: "ld-sin-3", title: "Every sinus rhythm", kind: "name", pool: ["ekr-nsr", "ekr-sb", "ekr-st", "ekr-sa", "ekr-pause"], n: 10 }
      ]
    },
    {
      id: "atrial", title: "Atrial rhythms",
      rungs: [
        { id: "ld-atr-1", title: "Fibrillation and flutter", kind: "name", pool: ["ekr-af", "ekr-afrvr", "ekr-flutter41", "ekr-flutter21"], n: 8 },
        { id: "ld-atr-2", title: "Tachycardia and WAP/MAT", kind: "name", pool: ["ekr-atach", "ekr-wap", "ekr-mat"], n: 6 },
        { id: "ld-atr-3", title: "Every atrial rhythm", kind: "name", pool: ["ekr-atach", "ekr-wap", "ekr-mat", "ekr-flutter21", "ekr-flutter41", "ekr-af", "ekr-afrvr"], n: 12 }
      ]
    },
    {
      id: "junctional", title: "Junctional rhythms",
      rungs: [
        { id: "ld-jun-1", title: "Slow and normal-rate", kind: "name", pool: ["ekr-jbrady", "ekr-jr", "ekr-ajr"], n: 6 },
        { id: "ld-jun-2", title: "Every junctional rhythm", kind: "name", pool: ["ekr-jbrady", "ekr-jr", "ekr-ajr", "ekr-jtach"], n: 8 }
      ]
    },
    {
      id: "ventricular", title: "Ventricular rhythms",
      rungs: [
        { id: "ld-ven-1", title: "Slow and fast", kind: "name", pool: ["ekr-idio", "ekr-aivr", "ekr-vt"], n: 6 },
        { id: "ld-ven-2", title: "Arrest rhythms", kind: "name", pool: ["ekr-vt", "ekr-torsades", "ekr-vf", "ekr-asys"], n: 8 },
        { id: "ld-ven-3", title: "Every ventricular rhythm", kind: "name", pool: ["ekr-idio", "ekr-aivr", "ekr-vt", "ekr-torsades", "ekr-vf", "ekr-asys"], n: 10 }
      ]
    },
    {
      id: "blocks", title: "AV blocks",
      rungs: [
        { id: "ld-blk-1", title: "1st and 2nd degree", kind: "name", pool: ["ekr-avb1", "ekr-avb2i", "ekr-avb2ii"], n: 6 },
        { id: "ld-blk-2", title: "Every AV block", kind: "name", pool: ["ekr-avb1", "ekr-avb2i", "ekr-avb2ii", "ekr-avb3"], n: 8 }
      ]
    },
    {
      id: "early", title: "Early beats (PACs, PJCs, PVCs)",
      rungs: [
        { id: "ld-erl-1", title: "PAC, PJC or PVC", kind: "name", pool: ["ekr-pac", "ekr-pjc", "ekr-pvc"], n: 6 },
        { id: "ld-erl-2", title: "Every early beat", kind: "name", pool: ["ekr-pac", "ekr-pjc", "ekr-pvc", "ekr-bigeminy"], n: 8 }
      ]
    },
    {
      id: "mixed", title: "All groups together",
      rungs: [
        { id: "ld-mix-1", title: "Every rhythm", kind: "name", pool: "all", n: 15 }
      ]
    }
  ];

  window.EKG_LADDER = { groups: groups };
}());
