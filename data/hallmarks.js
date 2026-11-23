/*
  Cardio Part 3 Hallmarks tool (Anna, 2026-11-23): every disease or condition in
  the Cardio 3 lectures with its hallmark findings, then 4-choice questions.

  One file per lecture, data/hallmarks-<lecture id>.js, calls
    Hallmarks.lecture(id, title, [ Hallmarks.C(...), ... ], groups?)
  Lecture ids are the Slide by slide ids (cad-part-1 ... coronary-angiogram).

  Hallmarks.C(id, name, oneLiner, think, hallmarks, opts)
    id        "hm-..." (progress key: never rename)
    oneLiner  what it is, one short sentence
    think     "see this -> think this" buzzword line
    hallmarks [[cat, text, why, xOverride?], ...]  cat is one of the CAT keys below; text is
              the hallmark itself (also used as an answer choice, so keep it
              specific to this condition); why is ONE short sentence.
    opts.g    group name inside the lecture (e.g. "acs", "cath"): wrong choices
              come from the same group first, so they are real look-alikes.
    opts.x    ids of look-alike conditions in the same lecture that share some of
              these hallmarks: never used as wrong choices for this one.
              A hallmark's optional 4th item (array of ids) replaces opts.x for
              that hallmark, e.g. [] lets NSTEMI be a wrong choice for UA's
              "troponin stays negative".

  Questions are generated: for hallmark k, question 2k asks "which condition has
  this hallmark?" and 2k+1 asks "what is the <cat> hallmark of <name>?". Ids are
  "<condition id>|<index>", so only APPEND hallmarks, never insert or reorder.
  Wrong choices come from other conditions in the same lecture, picked the same
  way every time (seeded by the question id).
*/
(function () {
  "use strict";

  var CAT = {
    who: { label: "Who gets it", ask: function (n) { return "Who classically gets " + n + "?"; } },
    story: { label: "Classic story", ask: function (n) { return "What is the classic story of " + n + "?"; } },
    sx: { label: "Symptoms", ask: function (n) { return "Which symptom picture is the hallmark of " + n + "?"; } },
    exam: { label: "Exam", ask: function (n) { return "Which exam finding is the hallmark of " + n + "?"; } },
    ekg: { label: "EKG", ask: function (n) { return "Which EKG finding is the hallmark of " + n + "?"; } },
    cutoff: { label: "Cutoff", ask: function (n) { return "Which cutoff defines " + n + "?"; } },
    labs: { label: "Labs", ask: function (n) { return "Which lab finding is the hallmark of " + n + "?"; } },
    test: { label: "Test result", ask: function (n) { return "Which test finding is the hallmark of " + n + "?"; } },
    cause: { label: "Cause", ask: function (n) { return "What classically causes " + n + "?"; } },
    timing: { label: "Timing", ask: function (n) { return "When does " + n + " classically happen?"; } },
    buzz: { label: "Buzzword", ask: function (n) { return "Which buzzword goes with " + n + "?"; } },
    dx: { label: "Diagnose it with", ask: function (n) { return "How is " + n + " diagnosed or confirmed?"; } },
    tx: { label: "Key treatment", ask: function (n) { return "What is the key treatment for " + n + "?"; } },
    avoid: { label: "Avoid", ask: function (n) { return "What must you avoid in " + n + "?"; } },
    danger: { label: "Danger", ask: function (n) { return "What is the big danger of " + n + "?"; } }
  };

  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }
  // Small deterministic generator so every question keeps the same choices.
  function seeded(text) {
    var h = 2166136261;
    for (var i = 0; i < text.length; i += 1) { h ^= text.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
    return function () { h = (Math.imul(h ^ (h >>> 15), 2246822507) + 0x6d2b79f5) >>> 0; return (h >>> 0) / 4294967296; };
  }
  function pick(pool, count, rand) {
    var copy = pool.slice(), out = [];
    while (copy.length && out.length < count) { out.push(copy.splice(Math.floor(rand() * copy.length), 1)[0]); }
    return out;
  }

  function fill(tiers, count, rand) {
    var out = [];
    tiers.forEach(function (list) {
      if (out.length >= count) return;
      out = out.concat(pick(list.filter(function (t) { return out.indexOf(t) === -1; }), count - out.length, rand));
    });
    return out;
  }

  function C(id, name, oneLiner, think, hallmarks, opts) {
    return { id: id, name: name, oneLiner: oneLiner, think: think, hallmarks: hallmarks, x: (opts && opts.x) || [], g: (opts && opts.g) || "" };
  }

  function mapHtml(c) {
    return '<div class="hm-map"><div class="hm-center"><strong>' + esc(c.name) + '</strong><span>' + esc(c.oneLiner) + '</span></div>' +
      '<ul class="hm-branches">' + c.hallmarks.map(function (h) {
        var cat = CAT[h[0]] || { label: h[0] };
        return '<li class="hm-branch hm-cat-' + esc(h[0]) + '"><span class="hm-cat">' + esc(cat.label) + '</span><b>' + esc(h[1]) + '</b><small>' + esc(h[2]) + '</small></li>';
      }).join("") + '</ul></div>';
  }
  function thinkHtml(c) {
    return '<div class="box-hy"><span class="lbl">See this, think this</span><strong>' + esc(c.think) + '</strong></div>';
  }

  function build(conditions) {
    var byId = {};
    conditions.forEach(function (c) { byId[c.id] = c; });
    return conditions.map(function (c) {
      var questions = [];
      c.hallmarks.forEach(function (h, k) {
        // A hallmark's own 4th item (a list of ids) replaces the condition's x
        // for its questions, so look-alikes can still be wrong choices where
        // this hallmark tells them apart.
        var others = conditions.filter(function (o) {
          if (o.id === c.id) return false;
          if (Array.isArray(h[3])) return h[3].indexOf(o.id) === -1;
          return c.x.indexOf(o.id) === -1 && o.x.indexOf(c.id) === -1;
        });
        var cat = CAT[h[0]] || { label: h[0], ask: function (n) { return "Which is a hallmark of " + n + "?"; } };
        // 2k: which condition has this hallmark?
        var randA = seeded(c.id + "|" + (2 * k));
        // Wrong names: same group first (the real look-alikes), then
        // conditions that have a hallmark of the same kind, then the rest.
        var near = others.filter(function (o) { return c.g && o.g === c.g; });
        var sameKind = others.filter(function (o) { return near.indexOf(o) === -1 && o.hallmarks.some(function (m) { return m[0] === h[0]; }); });
        var far = others.filter(function (o) { return near.indexOf(o) === -1 && sameKind.indexOf(o) === -1; });
        var wrongNames = fill([near, sameKind, far].map(function (list) { return list.map(function (o) { return o.name; }); }), 3, randA);
        questions.push({
          id: c.id + "|" + (2 * k), section: "map",
          prompt: cat.label + ": " + h[1] + ". Which is it?",
          choices: [c.name].concat(wrongNames), correct: 0,
          explanation: h[2]
        });
        // 2k+1: what is the <cat> hallmark of this condition?
        var randB = seeded(c.id + "|" + (2 * k + 1));
        var mine = c.hallmarks.map(function (m) { return m[1]; });
        // Wrong hallmarks: same kind from the same group, same kind from the
        // lecture, then any kind from the same group, then anything.
        var tiers = [[], [], [], []];
        others.forEach(function (o) {
          var close = c.g && o.g === c.g;
          o.hallmarks.forEach(function (m) {
            if (mine.indexOf(m[1]) !== -1) return;
            var sameKind = m[0] === h[0];
            tiers[sameKind ? (close ? 0 : 1) : (close ? 2 : 3)].push(m[1]);
          });
        });
        var wrongTexts = fill(tiers, 3, randB);
        questions.push({
          id: c.id + "|" + (2 * k + 1), section: "map",
          prompt: cat.ask(c.name),
          choices: [h[1]].concat(wrongTexts), correct: 0,
          explanation: h[2]
        });
      });
      return {
        id: c.id, name: c.name, blurb: c.oneLiner,
        sections: [
          { id: "map", title: "Hallmarks", html: mapHtml(c) },
          { id: "think", title: "See this, think this", html: thinkHtml(c) }
        ],
        questions: questions,
        hallmarks: c.hallmarks, think: c.think, x: c.x
      };
    });
  }

  var registry = window.CARDIO3_HALLMARKS = window.CARDIO3_HALLMARKS || { lectures: [] };
  // groups (optional): { groupName: [condition ids] } sets each condition's g.
  function lecture(id, title, conditions, groups) {
    Object.keys(groups || {}).forEach(function (g) {
      groups[g].forEach(function (cid) { conditions.forEach(function (c) { if (c.id === cid) c.g = g; }); });
    });
    registry.lectures.push({ id: id, title: title, diseases: build(conditions), raw: conditions });
  }

  window.Hallmarks = { C: C, lecture: lecture, CAT: CAT };
}());
