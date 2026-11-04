/*
  Cardio Part 2 Medications tool data. Drugs cross lectures (antiarrhythmics,
  anticoagulants and pressors come back in Arrhythmias, Arrhythmia Management,
  Vascular and Shock), so they are grouped by drug class, not by lecture; each
  medication lists the lectures that teach it. Each group file
  (data/meds-cardio2-*.js) sets its own global; this file gathers them.
  Question ids are "<medication id>|<index>": only append questions.
*/
window.CARDIO_PART2_MEDICATIONS = {
  lectures: [window.CARDIO2_MEDS_AV_NODAL, window.CARDIO2_MEDS_ANTIARRHYTHMICS, window.CARDIO2_MEDS_ACLS,
    window.CARDIO2_MEDS_PRESSORS, window.CARDIO2_MEDS_FLUIDS, window.CARDIO2_MEDS_ANTICOAGULANTS,
    window.CARDIO2_MEDS_ANTIPLATELETS, window.CARDIO2_MEDS_ANTI_INFLAMMATORY, window.CARDIO2_MEDS_ANTIBIOTICS,
    window.CARDIO2_MEDS_OTHER, window.CARDIO2_MEDS_GUIDES].filter(Boolean)
};
