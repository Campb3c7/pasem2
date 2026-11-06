/*
  Cardio Part 2 Concepts tool data. Each lecture file
  (data/concepts-cardio2-<lecture>.js) sets its own global; this file gathers
  them in lecture order. Same data shape and engine as the Diseases tools.
  Question ids are "<concept id>|<index>": only append.
*/
window.CARDIO_PART2_CONCEPTS = {
  lectures: [window.CARDIO2_CONCEPTS_ARRHYTHMIAS, window.CARDIO2_CONCEPTS_SYNCOPE,
    window.CARDIO2_CONCEPTS_MGMT, window.CARDIO2_CONCEPTS_IE_PERICARDIAL,
    window.CARDIO2_CONCEPTS_VASCULAR_1, window.CARDIO2_CONCEPTS_VASCULAR_2,
    window.CARDIO2_CONCEPTS_VASCULAR_SURGERY,
    window.CARDIO2_CONCEPTS_SHOCK, window.CARDIO2_CONCEPTS_PHARM].filter(Boolean)
};
