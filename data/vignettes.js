/* Vignettes (Anna, 2026-11-22, night before the Cardio 3 exam): "make a section that's just vignettes for me... do it
   for every lecture." Short, exam-length clinical vignettes only (not the long posted application cases), in each
   professor's style, covering the LOs. Same engine as Exam prep (exam-prep.js, createExamPrep), its own progress key.
     Vignettes.lecture({ id, title, short, group, concepts, qs: [V...] })   id = the Slide by slide lecture id.
     V(concept, kind, slide, prompt, answer, [3 wrong], why)
       kind: "Diagnosis" | "What's happening" | "Next step" | "Test to order" | "Pick the drug" | "Classify" | "Complication"
       prompt: a patient vignette (age/sex or setting + findings + one question), 1-4 sentences. why: ONE short sentence.
   Question ids "<lecture>|<index>": only append. Run node scripts/validate-vignettes.cjs after editing. */
(function () {
  "use strict";
  var reg = window.CARDIO3_VIGNETTES = window.CARDIO3_VIGNETTES || { course: "cardio-part-3", lectures: [] };
  window.Vignettes = {
    V: function (concept, kind, n, prompt, answer, wrong, why) { return { concept: concept, kind: kind, n: n, prompt: prompt, answer: answer, wrong: wrong, why: why }; },
    lecture: function (l) { reg.lectures.push(l); }
  };
})();
