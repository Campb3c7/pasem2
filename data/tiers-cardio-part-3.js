/* Cardio Part 3 Tiers: the whole course in three passes, most important first.
   Tier -> lecture -> chunks; each chunk = story pages (Learn) + key questions + extra practice (bank).
   Engine: tiers.js. Progress key: pasem2:tiers:cardio-part-3:progress.

   Every lecture-tier starts as a placeholder; a lecture file replaces its units.
   To fill a lecture in, add data/tiers-cardio3-<lecture>.js (see the CAD Part I file) that sets
     units["<tier>|<lecture>"] = { chunks: [ { id, title, goal, pages: [{ title, fig, html }], remember, check: [Q], bank: [Q] } ] };
   Progress ids: learned "<tier>|<lecture>|<chunk>", questions "<tier>|<lecture>|<chunk>|check|<i>" or "...|bank|<i>":
   never rename a chunk id, only append questions. Each tier can list extra `tools` ({ label, note, launch }) shown on its page. */
(function () {
  "use strict";

  var tiers = [
    { id: "t1", name: "Tier 1", title: "Foundations", tag: "Finish this first",
      blurb: "The must-know core every other fact hangs on. Do it for every lecture before moving on.", tools: [] },
    { id: "t2", name: "Tier 2", title: "Standard details", tag: "Next",
      blurb: "Workups, drug choices, criteria and the usual exam questions built on Tier 1.", tools: [] },
    { id: "t3", name: "Tier 3", title: "The weeds", tag: "Last",
      blurb: "Numbers, exceptions and one-off slide facts. Worth points, but only after Tiers 1 and 2.", tools: [] }
  ];
  var lectures = ["cardiac-testing", "cardiac-surgery", "heart-failure", "cad-part-1", "cad-part-2", "cad-part-3", "cad-part-4", "cad-part-5"];

  // Lectures not written yet: one empty chunk so the layout shows; the engine labels them "coming soon".
  function placeholder() {
    return { placeholder: true, chunks: [{ id: "main", title: "Coming soon", goal: "", pages: [{ title: "Coming soon", html: "<p>This part hasn't been written yet.</p>" }], remember: [], check: [], bank: [] }] };
  }

  var units = {};
  tiers.forEach(function (t) { lectures.forEach(function (l) { units[t.id + "|" + l] = placeholder(); }); });

  window.CARDIO3_TIERS = { course: "cardio-part-3", tiers: tiers, lectures: lectures, units: units };
})();
