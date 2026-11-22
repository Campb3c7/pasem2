/*
  Cardio Part 3 Medications tool data. The same drugs come back across CAD I-V,
  Heart Failure, Cardiac Testing and Cardiac Surgery, so they are grouped by drug
  class, not by lecture; each medication lists the lectures that teach it. Each
  group file (data/meds-cardio3-*.js) sets its own global; this file gathers them.
  Question ids are "<medication id>|<index>": only append questions.
*/
window.CARDIO_PART3_MEDICATIONS = {
  lectures: [window.CARDIO3_MEDS_ANTIANGINALS, window.CARDIO3_MEDS_ANTIPLATELETS, window.CARDIO3_MEDS_ANTICOAG,
    window.CARDIO3_MEDS_ACS_OTHER, window.CARDIO3_MEDS_HF, window.CARDIO3_MEDS_DIURETICS,
    window.CARDIO3_MEDS_PREVENTION, window.CARDIO3_MEDS_TESTING, window.CARDIO3_MEDS_GUIDES].filter(Boolean)
};
