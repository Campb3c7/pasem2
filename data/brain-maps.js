/* Brain maps registry (Anna, 2026-11-21). Engine: brain-maps.js. One data file per lecture,
   data/brain-maps-<lecture id>.js, calls BrainMaps.lecture(<course id>, { id, title, short, by, slides, maps }).
   BrainMaps.N(label, opts, kids) builds a box; see the top of brain-maps.js for every option. */
(function () {
  "use strict";
  window.BRAIN_MAPS = window.BRAIN_MAPS || {};
  function N(t, o, c) {
    if (Array.isArray(o)) { c = o; o = null; }
    var n = { t: t };
    if (o) Object.keys(o).forEach(function (k) { n[k] = o[k]; });
    if (c) n.c = c;
    return n;
  }
  window.BrainMaps = {
    N: N,
    lecture: function (course, lec) {
      var reg = window.BRAIN_MAPS[course] = window.BRAIN_MAPS[course] || { course: course, lectures: [] };
      reg.lectures.push(lec);
    }
  };
}());
