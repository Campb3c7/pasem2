/* Slide-by-slide study mode (Anna, 2026-11-20): a lecture walked LO by LO in slide order. Each slide shows the real
   slide picture plus everything on it, a "Why / background" note where the slide only gives facts, then 2-3
   questions about that slide. Every LO ends with a cumulative review before the next LO starts.
   Registry + authoring helpers; lecture files call SlideStudy.lecture({...}); the engine is slides-study.js.
     S(n, title, { pic, html, why, q: [Q...] })   one slide. Its verbatim text comes from data/slide-text-<lecture>.js
                                                  (generated); `pic` = text that sits inside the slide's pictures
                                                  (charts, flowcharts, labels), `html` replaces the generated text.
     Q(prompt, answer, [3 wrong], why)            one question; `why` is ONE short sentence.
   Question ids: "<lecture>|s<slide>|<i>" and "<lecture>|<lo id>|r|<i>" (review): only append. */
(function () {
  "use strict";
  var reg = window.SLIDE_STUDY = window.SLIDE_STUDY || { course: "cardio-part-3", lectures: [] };
  window.SlideStudy = {
    S: function (n, title, o) { o = o || {}; return { n: n, title: title, pic: o.pic || "", html: o.html || "", why: o.why || "", q: o.q || [] }; },
    Q: function (prompt, answer, wrong, why) { return { prompt: prompt, answer: answer, wrong: wrong, why: why }; },
    lecture: function (l) { reg.lectures.push(l); }
  };
})();
