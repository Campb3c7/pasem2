/* Exam prep (Anna, 2026-11-22, the night before the Cardio Part 3 exam): one high-yield, concept-first question set per
   lecture, meant for AFTER the slides. Only questions that test understanding: mechanism, why, next step, compare,
   predict, patient cases built on the LOs. No slide trivia. Mixed across lectures or one lecture at a time; misses come
   back; the results view ranks concepts weakest first.
   Registry + helpers; lecture files call ExamPrep.lecture({...}); the engine is exam-prep.js.
     ExamPrep.lecture({ id, title, short, group, concepts: { <concept id>: "Name" }, qs: [X...] })
       id must match the lecture's Slide by slide id so "See slide N" can show the real slide.
     X(concept, kind, slide, prompt, answer, [3 wrong], why)
       kind: "Mechanism" | "Why" | "Next step" | "Case" | "Compare" | "Predict" | "Pick the drug" | "Trap"
       slide: the slide number that teaches it (0 = none).  why: ONE short sentence.
   Question ids: "<lecture>|<index>": only append. */
(function () {
  "use strict";
  var reg = window.EXAM_PREP = window.EXAM_PREP || { course: "cardio-part-3", lectures: [] };
  window.ExamPrep = {
    X: function (concept, kind, n, prompt, answer, wrong, why) { return { concept: concept, kind: kind, n: n, prompt: prompt, answer: answer, wrong: wrong, why: why }; },
    lecture: function (l) { reg.lectures.push(l); }
  };
})();
