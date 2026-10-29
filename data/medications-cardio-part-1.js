/*
  Cardio Part 1 Medications tool data. Medications cross lectures, so they are
  grouped by drug class, not by lecture; each medication lists the lectures
  that teach it. Each group file sets its own global; this file gathers them.
  Question ids are "<medication id>|<index>": only append questions.
*/
window.CARDIO_PART1_MEDICATIONS = {
  lectures: [window.CARDIO_MEDS_DIURETICS, window.CARDIO_MEDS_RAAS, window.CARDIO_MEDS_CCB,
    window.CARDIO_MEDS_ADRENERGIC, window.CARDIO_MEDS_VASODILATORS, window.CARDIO_MEDS_EMERGENCY,
    window.CARDIO_MEDS_LIPIDS, window.CARDIO_MEDS_OTHER, window.CARDIO_MEDS_GUIDES].filter(Boolean)
};
