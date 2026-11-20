/* Cardio Part 3 Tiers: the whole course in three passes, most important first.
   Tier -> lecture -> { learn cards, check questions (a few key ones right after Learn), bank (more practice) }.
   Engine: tiers.js. Progress key: pasem2:tiers:cardio-part-3:progress.

   STRUCTURE ONLY FOR NOW: every lecture-tier below is a placeholder made by placeholder().
   To fill a lecture in, add data/tiers-cardio3-<lecture>.js (see the CAD Part I file) that sets
     units["<tier>|<lecture>"] = { chunks: [ { id, title, cards: [{title, html}], check: [Q], bank: [Q] } ] };
   Progress ids: cards "<tier>|<lecture>|<chunk>|c<i>", questions "<tier>|<lecture>|<chunk>|check|<i>" or "...|bank|<i>":
   never rename a chunk id, only append cards/questions. Each tier can list extra `tools` ({ label, note, launch }) shown on its page. */
(function () {
  "use strict";
  function Q(prompt, answer, wrong, why) { return { prompt: prompt, answer: answer, wrong: wrong, why: why }; }

  var tiers = [
    { id: "t1", name: "Tier 1", title: "Foundations", tag: "Finish this first",
      blurb: "The must-know core every other fact hangs on. Do it for every lecture before moving on.", tools: [] },
    { id: "t2", name: "Tier 2", title: "Standard details", tag: "Next",
      blurb: "Workups, drug choices, criteria and the usual exam questions built on Tier 1.", tools: [] },
    { id: "t3", name: "Tier 3", title: "The weeds", tag: "Last",
      blurb: "Numbers, exceptions and one-off slide facts. Worth points, but only after Tiers 1 and 2.", tools: [] }
  ];
  var lectures = ["cardiac-testing", "cardiac-surgery", "heart-failure", "cad-part-1", "cad-part-2", "cad-part-3", "cad-part-4", "cad-part-5"];

  function placeholder(tier, lecture) {
    return {
      placeholder: true,
      chunks: [{ id: "main", title: "Placeholder chunk", cards: [1, 2, 3].map(function (n) {
        return { title: "Placeholder card " + n,
          html: "<p>This is where a short teaching card goes: one idea, why it matters, and a table or picture if it helps.</p>" };
      }),
      check: [1, 2].map(function (n) {
        return Q("Placeholder key question " + n + ": which choice is right?", "The right answer", ["Wrong answer A", "Wrong answer B", "Wrong answer C"], "One short sentence saying why the answer is right.");
      }),
      bank: [1, 2, 3, 4].map(function (n) {
        return Q("Placeholder practice question " + n + ": which choice is right?", "The right answer", ["Wrong answer A", "Wrong answer B", "Wrong answer C"], "One short sentence saying why the answer is right.");
      }) }]
    };
  }

  var units = {};
  tiers.forEach(function (t) { lectures.forEach(function (l) { units[t.id + "|" + l] = placeholder(t.id, l); }); });

  window.CARDIO3_TIERS = { course: "cardio-part-3", tiers: tiers, lectures: lectures, units: units };
})();
