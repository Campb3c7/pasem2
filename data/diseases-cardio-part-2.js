/*
  Cardio Part 2 Diseases tool data. Each lecture file
  (data/diseases-cardio2-<lecture>.js) sets its own global; this file gathers
  them in lecture order. Question ids are "<disease id>|<index>": only append.
*/
window.CARDIO_PART2_DISEASES = {
  lectures: [window.CARDIO2_DISEASES_ARRHYTHMIAS, window.CARDIO2_DISEASES_SYNCOPE,
    window.CARDIO2_DISEASES_MGMT, window.CARDIO2_DISEASES_IE_PERICARDIAL,
    window.CARDIO2_DISEASES_VASCULAR_1, window.CARDIO2_DISEASES_VASCULAR_2,
    window.CARDIO2_DISEASES_VASCULAR_SURGERY,
    window.CARDIO2_DISEASES_SHOCK, window.CARDIO2_DISEASES_PHARM].filter(Boolean)
};
