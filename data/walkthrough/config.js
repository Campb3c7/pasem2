(function (root) {
  "use strict";

  var walkthrough = root.DiseaseWalkthrough = root.DiseaseWalkthrough || { cases: [] };
  walkthrough.managementOnlyIds = [
    "mssa-limited", "mssa-severe", "mssa-bacteremia", "enterococcus-uti", "enterococcus-severe",
    "gas-pharyngitis-allergy", "ecoli-severe", "shigella-mild", "pseudomonas-uti", "pseudomonas-bacteremia",
    "early-syphilis-allergy", "early-latent-syphilis", "late-latent-syphilis", "tertiary-syphilis",
    "early-neurosyphilis", "ocular-syphilis", "neurosyphilis-allergy", "lyme-early-pregnancy", "post-treatment-lyme",
    "rmsf-pregnancy", "rmsf-critical",
    "rmsf-doxy-reaction", "influenza-zanamivir", "influenza-peramivir", "influenza-baloxavir", "ebv-strep",
    "cmv-iv", "cmv-oral", "varicella-high-risk", "measles-bacterial", "measles-encephalitis", "covid-high-risk", "covid-severe",
    "dengue-hemorrhagic", "ebola-specific", "mpox-severe", "rabies-exposure", "leprosy-reaction", "african-tryp-late-rhodesiense",
    "toxo-severe-immunocompetent", "toxo-pregnancy-early", "toxo-pregnancy-late", "toxo-cns-edema",
    "toxo-cns-seizure", "toxo-prophylaxis", "histo-cns", "histo-adrenal", "cocci-asymptomatic",
    "candidemia-stable", "candida-uti", "candida-upper-gi", "mac-pulmonary-surgery", "mac-prophylaxis", "sporotrichosis-severe",
    "blastomycosis-severe", "onychomycosis-toe", "pcp-severe", "pcp-prophylaxis", "crypto-severe-pulmonary",
    "candida-upper-gi-stable", "stop-toxo-prophylaxis", "hiv-art", "hiv-pediatric", "hiv-pregnancy",
    "hivan-progressive", "septic-shock-refractory", "sepsis-hyperglycemia", "febrile-neutropenia-pip-tazo",
    "febrile-neutropenia-fungal", "febrile-neutropenia-gcsf"
  ];
}(typeof window !== "undefined" ? window : global));
