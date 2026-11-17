/*
  EKG "Learn the 12-lead" lessons (engine: learn-path.js, figures: ekg-twelve-learn.js).
  Picture-first: several drawings per lesson, short text, then a few easy checks, a "remember" list
  and practice buttons. Facts follow the EKG Interpretation deck (Marriott, slides 29-52 and 188-283);
  anything not on the slides is marked "(standard teaching)". 12-leads are drawn by TwelveSynth from the
  practice exam's cases (data/ekg-exam.js, ids tw-*), so they are schematic, not recorded EKGs.
  Lesson ids (t12-*) are progress keys: never rename. Checks: K(prompt, answer, [wrong], why).
*/
(function () {
  "use strict";
  function K(prompt, answer, wrong, why) { return { prompt: prompt, answer: answer, wrong: wrong, why: why }; }
  function hy(x) { return '<div class="box-hy"><span class="lbl">Key idea</span>' + x + "</div>"; }
  function mn(x) { return '<div class="box-mnemonic"><span class="lbl">Memory trick</span>' + x + "</div>"; }
  function tbl(head, rows) {
    return '<div class="table-scroll"><table class="learn-table"><tr>' + head.map(function (h) { return "<th>" + h + "</th>"; }).join("") + "</tr>" +
      rows.map(function (r) { return "<tr>" + r.map(function (d) { return "<td>" + d + "</td>"; }).join("") + "</tr>"; }).join("") + "</table></div>";
  }
  function reveal(q, a) { return '<details class="t12-reveal"><summary>' + q + '</summary><p>' + a + '</p></details>'; }

  var STUP = "ST ↑", STDOWN = "ST ↓";

  var parts = [
    { id: "p1", title: "Part 1 · The printout and the cameras", blurb: "What's on the page, where the 10 stickers go, and why every lead draws the same beat differently." },
    { id: "p2", title: "Part 2 · The walls and the axis", blurb: "Which leads look at which wall (and which artery feeds it), then the axis with two thumbs." },
    { id: "p3", title: "Part 3 · Wide and big", blurb: "Bundle branch blocks, hemiblocks, enlarged atria and thick ventricles." },
    { id: "p4", title: "Part 4 · Heart attacks", blurb: "Measure the ST the right way, then find the wall, the artery and the mirror image." },
    { id: "p5", title: "Part 5 · Look-alikes and the full read", blurb: "Things that mimic a STEMI, whole-heart patterns, then all 8 steps on one 12-lead." }
  ];

  var lessons = [
    /* ---------------- 1 ---------------- */
    {
      id: "t12-printout", part: "p1", title: "The printout at a glance", goal: "What's on a 12-lead page and how it's laid out.",
      pages: [
        { title: "One page, twelve views of the same beats", fig: { type: "ekg", case: "tw-normal", redraw: false },
          html: "<p>A 12-lead records the <strong>same heartbeats</strong> from <strong>12 different angles</strong>. Think of 12 cameras around one heart.</p>" +
            hy("<strong>10 stickers</strong> (electrodes) make <strong>12 leads</strong> (views).") },
        { title: "Two kinds of cameras", fig: { type: "ekg", case: "tw-normal", redraw: false, groups: [{ leads: ["I", "II", "III", "aVR", "aVL", "aVF"], tone: "blue", label: "Limb leads: the front view" }, { leads: ["V1", "V2", "V3", "V4", "V5", "V6"], tone: "gold", label: "Chest leads: the view around" }] },
          html: "<ul><li><strong>Columns 1 and 2</strong> = the 6 <strong>limb leads</strong> (I, II, III, aVR, aVL, aVF). They look at the heart <strong>from the front</strong>.</li>" +
            "<li><strong>Columns 3 and 4</strong> = the 6 <strong>chest leads</strong> (V1-V6). They look <strong>around the chest</strong>, front to side.</li></ul>" },
        { title: "Each box is only 2.5 seconds", fig: { type: "ekg", case: "tw-normal", redraw: false, groups: [{ leads: ["I", "II", "III"], tone: "blue", label: "0 to 2.5 s" }, { leads: ["aVR", "aVL", "aVF"], tone: "green", label: "2.5 to 5 s" }, { leads: ["V1", "V2", "V3"], tone: "gold", label: "5 to 7.5 s" }, { leads: ["V4", "V5", "V6"], tone: "violet", label: "7.5 to 10 s" }] },
          html: "<p>The machine records 10 seconds, then prints <strong>2.5 seconds per column</strong>. So the 3 leads in one column show the <strong>same beats</strong> at the same moment.</p>" +
            "<p>That's why you only see 2 or 3 beats in each box (standard teaching).</p>" },
        { title: "The long strip at the bottom", fig: { type: "ekg", case: "tw-normal", redraw: false, strip: true },
          html: "<p>The bottom row is a <strong>10-second rhythm strip</strong> (usually lead II). Use it for the rhythm questions:</p>" +
            "<ul><li><strong>Regular?</strong> Compare the gaps.</li><li><strong>Rate?</strong> Count the QRS complexes in the 10 s and <strong>× 6</strong>.</li><li><strong>P waves?</strong> One before every QRS?</li></ul>" },
        { title: "The little step at the start of each row", fig: { type: "ekg", case: "tw-normal", redraw: false, cal: true },
          html: "<p>That square step is the <strong>calibration mark</strong>: 1 mV = <strong>10 mm tall</strong> (2 big boxes). If it's 10 mm, every height you measure (ST, R waves) is true (standard teaching).</p>" }
      ],
      checks: [
        K("How many electrodes (stickers) make a 12-lead EKG?", "10", ["12", "6", "15"], "Ten electrodes are combined in different pairs to give 12 views."),
        K("Which leads sit in the first two columns of the printout?", "The limb leads: I, II, III, aVR, aVL, aVF", ["The chest leads V1-V6", "V1, V2, V3 and the rhythm strip", "Only leads I and II"], "The limb leads come first, then the chest leads fill columns 3 and 4."),
        K("How long is each box on a standard printout?", "2.5 seconds", ["1 second", "6 seconds", "10 seconds"], "Four columns of 2.5 seconds make the full 10-second recording."),
        K("What's the long strip at the bottom of the page for?", "Checking the rhythm over 10 seconds (regularity, rate, P waves)", ["Measuring the axis", "Finding the STEMI wall", "Checking the calibration"], "A long single lead shows enough beats to judge the rhythm.")
      ],
      remember: [
        "<strong>10 stickers → 12 views</strong> of the same beats.",
        "Columns 1-2 = <strong>limb leads</strong> (front view). Columns 3-4 = <strong>chest leads</strong> (around).",
        "Each box = <strong>2.5 s</strong>. Bottom row = <strong>10-s rhythm strip</strong> (count QRS × 6).",
        "Calibration step = <strong>10 mm</strong> tall."
      ],
      practice: [
        { label: "Pattern gallery", launch: "ekg-patterns-launch", note: "Look through the drawings; you'll understand them by the end of this path." }
      ]
    },

    /* ---------------- 2 ---------------- */
    {
      id: "t12-stickers", part: "p1", title: "Where the 10 stickers go", goal: "Four on the limbs, six on the chest, and how they make 12 views.",
      pages: [
        { title: "Four on the limbs", fig: { type: "body", show: "limb" },
          html: "<p>One on each <strong>arm</strong> and one on each <strong>leg</strong>. The leads use the right arm, left arm and left leg; the <strong>right leg</strong> sticker is the ground (standard teaching).</p>" +
            "<p>Notice the picture: the patient faces you, so the patient's <strong>left</strong> is on <strong>your right</strong>.</p>" },
        { title: "Six on the chest", fig: { type: "body", show: "chest" },
          html: tbl(["Sticker", "Where"], [
            ["<strong>V1</strong>", "4th intercostal space, <strong>right</strong> of the sternum"],
            ["<strong>V2</strong>", "4th intercostal space, <strong>left</strong> of the sternum"],
            ["<strong>V3</strong>", "Halfway between V2 and V4"],
            ["<strong>V4</strong>", "5th intercostal space, <strong>midclavicular</strong> line"],
            ["<strong>V5</strong>", "5th space, <strong>anterior axillary</strong> line"],
            ["<strong>V6</strong>", "5th space, <strong>midaxillary</strong> line"]]) },
        { title: "Place V1 and V2 first", fig: { type: "body", show: "chest", hi: ["V1", "V2"] },
          html: "<p>V1 and V2 sit on either side of the sternum in the <strong>4th</strong> space, like two buttons on a shirt.</p>" +
            mn("<strong>V1-V2: 4th space.</strong> Everyone else (V4-V6): <strong>5th</strong> space.") },
        { title: "Then V4, then fill in V3, V5, V6", fig: { type: "body", show: "chest", hi: ["V3", "V4", "V5", "V6"] },
          html: "<p><strong>V4</strong> goes under the middle of the collarbone in the 5th space. <strong>V3</strong> sits between V2 and V4. <strong>V5</strong> and <strong>V6</strong> continue sideways at the same level toward the armpit.</p>" },
        { title: "10 stickers, 12 leads", fig: { type: "body", show: "all" },
          html: tbl(["Leads", "How they're made"], [
            ["<strong>I, II, III</strong>", "The difference between <strong>two</strong> limb stickers"],
            ["<strong>aVR, aVL, aVF</strong>", "One limb sticker against the <strong>average of the other two</strong>"],
            ["<strong>V1-V6</strong>", "Each chest sticker against a point in the <strong>middle of the chest</strong> (Wilson's central terminal)"]]) +
            "<p>The current is read from the negative to the <strong>positive</strong> (exploring) electrode. The next lesson shows why that matters.</p>" },
        { title: "Two extra views when you need them", fig: { type: "horizontal", posterior: true, hi: { V7: "red", V8: "red", V9: "red" } },
          html: "<ul><li><strong>Right-sided EKG</strong>: the chest leads are mirrored onto the right chest to check the <strong>right ventricle</strong> in an <strong>inferior MI</strong>.</li>" +
            "<li><strong>15-lead EKG</strong>: adds <strong>V7, V8, V9</strong> on the <strong>back</strong> to see a <strong>posterior MI</strong>.</li></ul>" }
      ],
      checks: [
        K("Where does V1 go?", "4th intercostal space, right of the sternum", ["4th intercostal space, left of the sternum", "5th intercostal space, midclavicular line", "5th intercostal space, midaxillary line"], "V1 and V2 straddle the sternum in the 4th space, V1 on the patient's right."),
        K("Where does V4 go?", "5th intercostal space, midclavicular line", ["4th intercostal space, left of the sternum", "5th intercostal space, anterior axillary line", "Halfway between V2 and V6"], "V4 is the anchor in the 5th space under mid-collarbone; V3 then sits between V2 and V4."),
        K("Which sticker sits at the 5th intercostal space, midaxillary line?", "V6", ["V5", "V4", "V3"], "V4 midclavicular, V5 anterior axillary, V6 midaxillary, all in the 5th space."),
        K("Why would you add V7, V8 and V9 on the back?", "To look for a posterior MI", ["To check the right ventricle in an inferior MI", "To measure the axis", "To see the atria better"], "No standard lead faces the back, so a 15-lead adds three that do.")
      ],
      remember: [
        "Limbs: both arms, both legs (right leg = ground).",
        "<strong>V1-V2</strong>: 4th space beside the sternum. <strong>V4</strong>: 5th, midclavicular. <strong>V3</strong> between. <strong>V5</strong> anterior axillary, <strong>V6</strong> midaxillary.",
        "Right-sided EKG = RV in inferior MI. <strong>15-lead (V7-V9)</strong> = posterior MI."
      ],
      practice: []
    },

    /* ---------------- 3 ---------------- */
    {
      id: "t12-direction", part: "p1", title: "Why each lead looks different", goal: "One rule explains every upright and upside-down QRS.",
      pages: [
        { title: "The one rule", fig: { type: "rule" },
          html: hy("Spark moving <strong>toward</strong> a lead's + electrode → <strong>upright</strong>. Moving <strong>away</strong> → <strong>downward</strong>. Moving <strong>across</strong> (side on) → <strong>half up, half down</strong> (biphasic).") +
            "<p>Watch the gold dot: it's the spark. The squiggle under each is what that camera draws.</p>" },
        { title: "Why aVR is upside down", fig: [{ type: "frontal", arrow: 55, hi: { II: "green", aVR: "red" } }, { type: "beats", case: "tw-normal", leads: ["II", "aVR"], hi: { II: "green", aVR: "red" }, notes: { II: "spark coming toward it", aVR: "spark going away" } }],
          html: "<p>A normal spark travels <strong>down and to the patient's left</strong> (gold arrow). That's almost straight <strong>at lead II</strong> (big upright QRS) and straight <strong>away from aVR</strong> (upside down).</p>" +
            "<p>So a negative aVR is <strong>normal</strong>. An upright aVR is the odd one.</p>" },
        { title: "The same beat in all 12 leads", fig: { type: "beats", case: "tw-normal", hi: { I: "green", II: "green", III: "green", aVL: "green", aVF: "green", V4: "green", V5: "green", V6: "green", aVR: "red", V1: "red", V2: "red", V3: "red" }, notes: { III: "can be biphasic", aVL: "can be biphasic", V3: "can be biphasic" } },
          html: tbl(["Normally", "Leads"], [
            ['<span class="t12-pos">Mostly up</span>', "I, II, III, aVL, aVF, V4-V6"],
            ['<span class="t12-neg">Mostly down</span>', "aVR, V1-V3"],
            ["Can be biphasic", "III, aVL, V2-V4"]]) },
        { title: "Across the chest, the R wave grows", fig: [{ type: "beats", case: "tw-normal", leads: ["V1", "V2", "V3", "V4", "V5", "V6"], notes: { V1: "small r, deep S", V3: "about even", V6: "tall R" } }, { type: "horizontal", arrows: true, walls: true }],
          html: "<p>Two things fire in the ventricles (arrows in the slice):</p>" +
            "<ol class=\"lh-steps\"><li>The <strong>septum</strong> fires first, left to right, toward V1: a <strong>small r</strong> in V1.</li><li>Then the <strong>big left ventricle</strong> fires toward V5-V6: a <strong>tall R</strong> there and a <strong>deep S</strong> in V1.</li></ol>" +
            "<p>So from V1 to V6 the R grows and the S shrinks (standard teaching: R wave progression). Where they're about equal (V3-V4) is the <strong>transition</strong>.</p>" },
        { title: "The tiny normal q", fig: { type: "beats", case: "tw-normal", leads: ["I", "aVL", "V5", "V6"], hi: { I: "green", aVL: "green", V5: "green", V6: "green" }, notes: { I: "small q", V6: "small q" } },
          html: "<p>That same septal spark moves <strong>away</strong> from the left-sided leads for a moment, so I, aVL, V5 and V6 may start with a <strong>tiny q</strong>.</p>" +
            hy("A <strong>physiologic q</strong> is <strong>under 0.04 s</strong> wide and <strong>under 25%</strong> of the R. Bigger than that is a pathologic Q (Part 4).") }
      ],
      checks: [
        K("The spark travels straight toward a lead's positive electrode. What does that lead draw?", "An upright QRS", ["A downward QRS", "A flat line", "A biphasic QRS"], "Toward the + electrode always draws upward."),
        K("Why is aVR normally negative?", "The normal spark travels down and to the left, away from aVR", ["aVR is placed on the left leg", "aVR only records the atria", "The right ventricle is bigger than the left"], "aVR looks from the right shoulder, the opposite way to the spark."),
        K("Which leads are normally mostly negative?", "aVR and V1-V3", ["I and II", "V4-V6", "II, III and aVF"], "They sit opposite the main left-ventricle force."),
        K("Why does the R wave get taller from V1 to V6?", "The big left ventricle fires toward V5-V6", ["The septum fires toward V6", "V6 is closer to the atria", "The right ventricle fires last"], "The left ventricle has the most muscle and points toward the left-sided chest leads."),
        K("A small q in lead I is 0.02 s wide and 10% of the R. What is it?", "A normal septal q wave", ["A pathologic Q wave", "A bundle branch block", "Left atrial enlargement"], "Under 0.04 s and under 25% of the R is a physiologic q from the septum.")
      ],
      remember: [
        "<strong>Toward = up. Away = down. Across = biphasic.</strong>",
        "Normal spark: down and left → <strong>II big and upright</strong>, <strong>aVR upside down</strong>.",
        "Up: I, II, III, aVL, aVF, V4-V6. Down: aVR, V1-V3.",
        "R grows V1 → V6. Tiny septal q in I, aVL, V5, V6 is normal (&lt; 0.04 s, &lt; 25% of R)."
      ],
      practice: [
        { label: "Axis trainer", launch: "ekg-axis-launch", note: "Try \"All six limb leads\": every complex follows the toward/away rule." }
      ]
    },

    /* ---------------- 4 ---------------- */
    {
      id: "t12-limb", part: "p1", title: "Limb leads: the front view", goal: "Six cameras on a circle and the wall each one sees.",
      pages: [
        { title: "Six cameras on a circle", fig: { type: "frontal" },
          html: "<p>The limb leads look at the heart <strong>from the front</strong> (the frontal plane: up/down and left/right). Each sits at an angle on a circle.</p>" +
            "<ul><li><strong>Lead I</strong> at <strong>0°</strong> (3 o'clock, the left arm).</li><li><strong>aVF</strong> at <strong>+90°</strong> (6 o'clock, the feet).</li><li>The others fill in: II +60°, III +120°, aVL −30°, aVR −150°.</li></ul>" },
        { title: "II, III, aVF look up from the feet", fig: [{ type: "frontal", hi: { II: "blue", III: "blue", aVF: "blue" } }, { type: "heart", hi: ["inferior"] }],
          html: "<p>These three point at the bottom of the heart: the <strong>inferior wall</strong>.</p>" },
        { title: "I and aVL look from the left shoulder", fig: [{ type: "frontal", hi: { I: "green", aVL: "green" } }, { type: "heart", hi: ["lateral"] }],
          html: "<p>These two see the <strong>lateral wall</strong> (the left side of the heart), together with V5-V6 later.</p>" },
        { title: "aVR looks from the right shoulder", fig: { type: "frontal", hi: { aVR: "grey" } },
          html: "<p>aVR sees the <strong>base of the heart</strong>, the atria and the great vessels. It's normally negative, and it's <strong>not used for Q waves</strong> (it always has a big one).</p>" },
        { title: "Find them on the printout", fig: { type: "ekg", case: "tw-normal", redraw: false, groups: [{ leads: ["II", "III", "aVF"], tone: "blue", label: "Inferior: II, III, aVF" }, { leads: ["I", "aVL"], tone: "green", label: "Lateral: I, aVL" }, { leads: ["aVR"], tone: "grey", label: "aVR: base" }] },
          html: mn("II, III and aVF make the <strong>inferior triangle</strong> in the lower left of the page. I and aVL are the high lateral pair.") }
      ],
      checks: [
        K("Which three limb leads look at the inferior wall?", "II, III, aVF", ["I, aVL, aVR", "I, II, III", "aVR, aVL, aVF"], "They point at the bottom of the heart from the feet."),
        K("What angle is lead I at?", "0° (3 o'clock)", ["+90° (6 o'clock)", "+60°", "−150°"], "Lead I points at the left arm, straight to the patient's left."),
        K("Which limb leads see the lateral wall?", "I and aVL", ["II and III", "aVR and aVF", "III and aVF"], "They look from the left shoulder, the same side as V5-V6."),
        K("What does aVR mainly look at?", "The base of the heart, the atria and great vessels", ["The inferior wall", "The septum", "The lateral wall"], "From the right shoulder it looks down into the top of the heart.")
      ],
      remember: [
        "Lead I = <strong>0°</strong>, aVF = <strong>+90°</strong>, II +60°, III +120°, aVL −30°, aVR −150°.",
        "<strong>Inferior: II, III, aVF</strong> (the inferior triangle).",
        "<strong>Lateral: I, aVL</strong>. <strong>aVR: base</strong>, normally negative, ignore it for Q waves."
      ],
      practice: [
        { label: "MI locator", launch: "ekg-mi-launch", note: "Open the lead map to see the walls on a full 12-lead." }
      ]
    },

    /* ---------------- 5 ---------------- */
    {
      id: "t12-chest", part: "p1", title: "Chest leads: the view around", goal: "V1 to V6 walk around the heart from the septum to the left side.",
      pages: [
        { title: "A slice of the chest", fig: { type: "horizontal", walls: true },
          html: "<p>The chest leads look in the <strong>horizontal plane</strong> (front to back), as if you sliced the chest and looked up from the feet (standard teaching). The <strong>RV</strong> is in front; the thick <strong>LV</strong> is behind and to the left.</p>" },
        { title: "V1-V2: the septum", fig: [{ type: "horizontal", hi: { V1: "violet", V2: "violet" } }, { type: "heart", hi: ["septal"] }],
          html: "<p>V1 and V2 sit right over the wall between the ventricles: the <strong>septum</strong>. (V2 is a transition lead and can also see the front.)</p>" },
        { title: "V3-V4: the front wall", fig: [{ type: "horizontal", hi: { V3: "gold", V4: "gold" } }, { type: "heart", hi: ["anterior"] }],
          html: "<p>V3 and V4 face the <strong>anterior wall</strong> of the left ventricle. (V4 is a transition lead and can also see the side.)</p>" },
        { title: "V5-V6: the left side", fig: [{ type: "horizontal", hi: { V5: "green", V6: "green" } }, { type: "heart", hi: ["lateral"] }],
          html: "<p>V5 and V6 face the <strong>lateral wall</strong>, joining I and aVL.</p>" },
        { title: "Nobody faces the back", fig: [{ type: "horizontal", posterior: true, hi: { V1: "blue", V2: "blue", V3: "blue", V7: "red", V8: "red", V9: "red" } }, { type: "heart", hi: ["posterior"] }],
          html: "<p>The <strong>posterior wall</strong> has no camera on a standard 12-lead. V1-V3 look at it from the opposite side, so they see its <strong>mirror image</strong>. V7-V9 on the back see it directly.</p>" },
        { title: "SAL: say it across the chest", fig: { type: "map", hi: ["septal", "anterior", "lateral"] },
          html: mn("\"<strong>SAL</strong>t is bad for the heart\": V1 → V6 goes <strong>S</strong>eptal (V1-V2), <strong>A</strong>nterior (V3-V4), <strong>L</strong>ateral (V5-V6).") }
      ],
      checks: [
        K("Which chest leads look at the septum?", "V1 and V2", ["V3 and V4", "V5 and V6", "V7 to V9"], "They sit right over the interventricular septum beside the sternum."),
        K("V3 and V4 look at which wall?", "Anterior", ["Septal", "Lateral", "Inferior"], "SAL: septal, anterior, lateral from V1 to V6."),
        K("Which leads see the posterior wall directly?", "V7, V8 and V9 on the back", ["V1 and V2", "II, III and aVF", "aVR"], "Only a 15-lead has cameras facing the back."),
        K("On a standard 12-lead, which leads show a posterior problem as a mirror image?", "V1-V3", ["V5-V6", "I and aVL", "II, III, aVF"], "V1-V3 look at the back wall from the front, so they see it upside down.")
      ],
      remember: [
        "Chest leads = <strong>horizontal</strong> plane, front to side.",
        "<strong>SAL</strong>: V1-V2 septal, V3-V4 anterior, V5-V6 lateral.",
        "Posterior = <strong>V7-V9</strong>; on a 12-lead, a <strong>mirror image in V1-V3</strong>."
      ],
      practice: []
    },

    /* ---------------- 6 ---------------- */
    {
      id: "t12-walls", part: "p2", title: "The wall map and its arteries", goal: "Memorize one colored map, then hook each wall to its artery.",
      pages: [
        { title: "The whole map in one picture", fig: { type: "map" },
          html: "<p>This is the printout grid with every lead colored by the wall it sees. <strong>Learn this picture</strong> and you can locate any heart attack.</p>" },
        { title: "Same colors on a real 12-lead", fig: { type: "ekg", case: "tw-normal", walls: true },
          html: "<p>Blue inferior triangle in the lower left, green lateral leads at the top left and bottom right, violet then gold across the chest leads.</p>" },
        { title: "Three arteries feed the walls", fig: { type: "heart" },
          html: tbl(["Artery", "Feeds"], [
            ["<strong>RCA</strong>", "RA, RV, the <strong>inferior</strong> and posterior LV, back third of the septum. Also the <strong>AV node (80-95%)</strong> and SA node (50-60%)."],
            ["<strong>LAD</strong>", "<strong>Anterior</strong> LV, front two-thirds of the <strong>septum</strong>, part of the lateral wall. Also most of the <strong>bundle branches</strong>."],
            ["<strong>Circumflex (LCx)</strong>", "LA and the <strong>lateral</strong> and posterior LV. Also the SA node (40-50%)."]]) },
        { title: "RCA → inferior", fig: [{ type: "heart", hi: ["inferior"], artery: "rca" }, { type: "map", hi: ["inferior"] }],
          html: "<p>The RCA wraps around the right side and under the heart. Blocked RCA → <strong>II, III, aVF</strong>. Because it feeds the AV node, watch for <strong>AV blocks</strong>.</p>" },
        { title: "LAD → septum and front", fig: [{ type: "heart", hi: ["septal", "anterior"], artery: "lad" }, { type: "map", hi: ["septal", "anterior"] }],
          html: "<p>The LAD runs straight down the front. Blocked LAD → <strong>V1-V4</strong>. Because it feeds the bundle branches, watch for <strong>bundle branch blocks</strong> and type II block.</p>" },
        { title: "Circumflex → left side", fig: [{ type: "heart", hi: ["lateral", "posterior"], artery: "lcx" }, { type: "map", hi: ["lateral"] }],
          html: "<p>The circumflex curls around the left side toward the back. Blocked LCx → <strong>I, aVL, V5, V6</strong> (and sometimes the posterior wall).</p>" },
        { title: "Which wall is lit up?", fig: { type: "ekg", case: "tw-normal", redraw: false, hi: ["I", "aVL", "V5", "V6"], tone: "red" },
          html: reveal("Tap to check your answer", "<strong>Lateral</strong> wall: I, aVL, V5, V6, usually the circumflex.") },
        { title: "And this one?", fig: { type: "ekg", case: "tw-normal", redraw: false, hi: ["V1", "V2"], tone: "red" },
          html: reveal("Tap to check your answer", "<strong>Septal</strong> wall: V1-V2, the LAD.") }
      ],
      checks: [
        K("Which artery usually feeds the inferior wall?", "Right coronary artery (RCA)", ["Left anterior descending (LAD)", "Circumflex", "Left main"], "The RCA wraps under the heart to the inferior wall."),
        K("A blocked LAD would show up in which leads?", "V1-V4", ["II, III, aVF", "I, aVL, V5, V6", "aVR only"], "The LAD feeds the septum and anterior wall: V1-V2 and V3-V4."),
        K("Why can an inferior MI cause AV blocks?", "The RCA supplies the AV node in most people", ["The LAD supplies the AV node", "The inferior wall contains the SA node", "Inferior MIs always cause hyperkalemia"], "RCA supplies the AV node in 80-95% of people."),
        K("I, aVL, V5 and V6 together point to which wall and artery?", "Lateral wall, circumflex", ["Inferior wall, RCA", "Septal wall, LAD", "Anterior wall, RCA"], "Those four are the lateral leads, fed mainly by the circumflex.")
      ],
      remember: [
        "<strong>Inferior</strong> II, III, aVF → <strong>RCA</strong> (AV node: watch for AV blocks).",
        "<strong>Septal</strong> V1-V2 and <strong>anterior</strong> V3-V4 → <strong>LAD</strong> (bundle branches).",
        "<strong>Lateral</strong> I, aVL, V5, V6 → <strong>circumflex</strong>. <strong>Posterior</strong> → RCA or circumflex."
      ],
      practice: [
        { label: "MI locator: locate the STEMI", launch: "ekg-mi-launch", then: "mi-locate", note: "Wall → artery → reciprocal leads on drawn 12-leads." }
      ]
    },

    /* ---------------- 7 ---------------- */
    {
      id: "t12-axis", part: "p2", title: "The axis with two thumbs", goal: "Lead I and aVF tell you which way the heart's spark points.",
      pages: [
        { title: "All the sparks add up to one arrow", fig: { type: "frontal", arrow: 55, normal: true },
          html: "<p>Add up every spark in one beat and you get one arrow: the <strong>electrical axis</strong>. The left ventricle is bigger, so the arrow normally points <strong>down and to the left</strong>, between <strong>0° and +90°</strong> (green slice).</p>" },
        { title: "Lead I asks: left or right?", fig: [{ type: "frontal", leads: ["I"], hi: { I: "gold" } }, { type: "beats", case: "tw-normal", leads: ["I"], hi: { I: "gold" }, notes: { I: "up = heading left" } }],
          html: "<p>Lead I is on the <strong>left arm</strong>. QRS <strong>up</strong> = the spark heads to the patient's <strong>left</strong>. Down = heading right.</p>" + mn("Lead I = your <strong>left thumb</strong>. Up or down?") },
        { title: "aVF asks: up or down?", fig: [{ type: "frontal", leads: ["aVF"], hi: { aVF: "gold" } }, { type: "beats", case: "tw-normal", leads: ["aVF"], hi: { aVF: "gold" }, notes: { aVF: "up = heading down" } }],
          html: "<p>aVF is at the <strong>feet</strong>. QRS <strong>up</strong> = the spark heads <strong>down</strong> (toward the feet). Down = heading up.</p>" + mn("aVF = your <strong>right thumb</strong>.") },
        { title: "Try it: move the arrow", fig: { type: "dial", angle: 60 },
          html: tbl(["Lead I", "aVF", "Axis"], [["👍 up", "👍 up", "<strong>Normal</strong>"], ["👍 up", "👎 down", "<strong>Left</strong> axis deviation"], ["👎 down", "👍 up", "<strong>Right</strong> axis deviation"], ["👎 down", "👎 down", "<strong>Extreme</strong>"]]) +
            mn("Thumbs <strong>leaving</strong> each other (I up, aVF down) = <strong>left</strong>. Thumbs <strong>reaching</strong> for each other (I down, aVF up) = <strong>right</strong>.") },
        { title: "Left axis: I up, aVF down", fig: { type: "beats", case: "tw-lafb", leads: ["I", "aVF"], hi: { I: "green", aVF: "red" }, notes: { I: "up 👍", aVF: "down 👎" } },
          html: "<p>Causes of <strong>left</strong> axis deviation:</p><ul><li><strong>LVH</strong> (often about −15°)</li><li><strong>Left anterior hemiblock</strong></li><li>Heart pushed sideways: <strong>pregnancy, abdominal obesity</strong>, a high diaphragm</li></ul>" },
        { title: "Right axis: I down, aVF up", fig: { type: "beats", case: "tw-rvh", leads: ["I", "aVF"], hi: { I: "red", aVF: "green" }, notes: { I: "down 👎", aVF: "up 👍" } },
          html: "<p>Causes of <strong>right</strong> axis deviation:</p><ul><li><strong>RVH</strong></li><li><strong>Left posterior hemiblock</strong></li><li><strong>Pulmonary embolus</strong></li><li>Heart hanging vertically: <strong>thin people, children</strong></li></ul>" },
        { title: "The rule behind every cause", fig: [{ type: "frontal", arrow: -30, hi: { I: "green", aVL: "green" } }, { type: "frontal", arrow: 120, hi: { III: "red", aVF: "red" } }],
          html: hy("The axis points <strong>toward extra muscle</strong> (hypertrophy) and <strong>away from dead muscle</strong> (infarct: its force is gone, so the opposite side wins).") }
      ],
      checks: [
        K("Lead I is upright and aVF is upright. What's the axis?", "Normal", ["Left axis deviation", "Right axis deviation", "Extreme axis deviation"], "Both thumbs up puts the arrow between 0° and +90°."),
        K("Lead I is upright and aVF is negative. What's the axis?", "Left axis deviation", ["Normal", "Right axis deviation", "Extreme axis deviation"], "Heading left (I up) but upward (aVF down) is left axis."),
        K("Lead I is negative and aVF is upright. What's the axis?", "Right axis deviation", ["Left axis deviation", "Normal", "Extreme axis deviation"], "Heading right (I down) and downward (aVF up) is right axis."),
        K("Which of these shifts the axis to the left?", "Left anterior hemiblock", ["Left posterior hemiblock", "Pulmonary embolus", "Being very thin"], "Left anterior hemiblock gives left axis; the others give right axis."),
        K("After a large lateral MI, which way does the axis tend to move?", "Away from the infarct", ["Toward the infarct", "It never changes", "Always to extreme axis"], "Dead muscle has no force, so the opposite side's force wins.")
      ],
      remember: [
        "Normal axis: <strong>0° to +90°</strong> (down and left).",
        "<strong>Lead I</strong> = left/right. <strong>aVF</strong> = down/up. Both up = normal.",
        "Leaving thumbs = <strong>left</strong> (LVH, LAFB, pregnancy/obesity). Reaching = <strong>right</strong> (RVH, LPFB, PE, thin, kids).",
        "Toward <strong>hypertrophy</strong>, away from <strong>infarct</strong>."
      ],
      practice: [
        { label: "Axis trainer", launch: "ekg-axis-launch", then: "ax-read", note: "Lead I + aVF on fresh drawings, then what shifts the axis." }
      ]
    },

    /* ---------------- 8 ---------------- */
    {
      id: "t12-bbb", part: "p3", title: "Bundle branch blocks and hemiblocks", goal: "One side fires late: wide QRS. One fascicle fails: the axis swings.",
      pages: [
        { title: "The wiring below the AV node", fig: { type: "bbb" },
          html: "<p>Below the His bundle the wire splits:</p><ul><li><strong>Right bundle</strong> → the right ventricle.</li><li><strong>Left bundle</strong> → three fascicles: <strong>septal</strong>, <strong>anterior</strong> (upper LV) and <strong>posterior</strong> (lower LV).</li></ul>" },
        { title: "Cut one branch: the QRS gets wide", fig: [{ type: "bbb", block: "rbbb" }, { type: "bbb", block: "lbbb" }],
          html: "<p>The blocked side has to wait for the signal to creep over from the other side. The two ventricles fire <strong>one after the other</strong>, so the QRS is <strong>wide (0.12 s or more)</strong> with <strong>two peaks</strong> (R and R').</p>" +
            "<p>If the QRS isn't widened, it's called <strong>incomplete</strong> BBB (or a fascicular block).</p>" },
        { title: "RBBB: rabbit ears in V1-V2", fig: [{ type: "beats", case: "tw-rbbb", leads: ["V1", "V2", "I", "V6"], hi: { V1: "gold", V2: "gold" }, notes: { V1: "rsR' (rabbit ears)", I: "wide slurred S", V6: "wide slurred S" } }, { type: "ekg", case: "tw-rbbb", hi: ["V1", "V2"], label: "Look here first: V1-V2" }],
          html: "<p>V1-V2 sit over the right ventricle, so they show its <strong>late second peak</strong>: an <strong>M shape</strong> or \"rabbit ears\".</p><p>Seen with anterior MI, CAD, PE and drug toxicity.</p>" },
        { title: "LBBB: wide, tall, notched R in V5-V6", fig: [{ type: "beats", case: "tw-lbbb", leads: ["V1", "V6", "I", "aVL"], hi: { V6: "gold", I: "gold", aVL: "gold" }, notes: { V1: "broad deep S", V6: "broad notched R" } }, { type: "ekg", case: "tw-lbbb", hi: ["I", "aVL", "V5", "V6"], label: "Look here first: V5-V6 (and I, aVL)" }],
          html: "<p>V5-V6 sit over the left ventricle, so they show its late force: a <strong>wide, tall R with a flat or notched top</strong>. Rabbit ears are less likely.</p>" +
            "<p>The ST and T point <strong>opposite</strong> the QRS. That's expected in LBBB, so don't call it a STEMI.</p>" },
        { title: "A quick trick for V1", fig: [{ type: "beats", case: "tw-rbbb", title: "RBBB", leads: ["V1"], hi: { V1: "green" }, notes: { V1: "points up" } }, { type: "beats", case: "tw-lbbb", title: "LBBB", leads: ["V1"], hi: { V1: "red" }, notes: { V1: "points down" } }],
          html: mn("<strong>Turn signal</strong>: in V1, a wide QRS pointing <strong>up</strong> = <strong>right</strong> BBB (signal lever up = right turn); pointing <strong>down</strong> = <strong>left</strong> BBB (standard teaching).") },
        { title: "Hemiblocks: narrow QRS, the axis swings", fig: [{ type: "bbb", block: "lafb" }, { type: "bbb", block: "lpfb" }],
          html: tbl(["Block", "QRS", "Axis"], [["<strong>Left anterior</strong> hemiblock", "Narrow", "<strong>Left</strong> axis"], ["<strong>Left posterior</strong> hemiblock", "Narrow", "<strong>Right</strong> axis"]]) +
            mn("<strong>A</strong>nterior → <strong>A</strong>xis up and left. <strong>P</strong>osterior → <strong>P</strong>ointing right.") +
            "<p>The anterior fascicle is the longest, thinnest and has the most fragile blood supply. Any partial block raises the risk of <strong>complete heart block</strong>.</p>" },
        { title: "Hemiblocks on lead I and aVF", fig: [{ type: "beats", case: "tw-lafb", title: "Left anterior hemiblock", leads: ["I", "aVF"], notes: { I: "up", aVF: "down → left axis" } }, { type: "beats", case: "tw-lpfb", title: "Left posterior hemiblock", leads: ["I", "aVF"], notes: { I: "down", aVF: "up → right axis" } }],
          html: "<p>Same narrow QRS as normal. The only clue is the <strong>axis</strong>, so always check lead I and aVF.</p>" },
        { title: "A shortcut around the AV node: WPW", fig: { type: "beats", case: "tw-wpw", leads: ["II", "V3", "V4"], hi: { II: "gold", V3: "gold", V4: "gold" }, notes: { II: "short PR + slur", V4: "delta wave" } },
          html: "<p>An extra pathway skips the AV node's pause, so the ventricle starts early: a <strong>short PR</strong> (under 0.12 s) and a <strong>slurred upstroke</strong> on the QRS called the <strong>delta wave</strong>.</p>" }
      ],
      checks: [
        K("How wide is the QRS in a complete bundle branch block?", "0.12 s or more", ["Under 0.10 s", "Exactly 0.08 s", "Over 0.20 s"], "One ventricle fires late, so the QRS lasts at least 3 small boxes."),
        K("Wide QRS with rabbit ears (rsR') in V1-V2. What is it?", "Right bundle branch block", ["Left bundle branch block", "Left anterior hemiblock", "WPW"], "V1-V2 sit over the late-firing right ventricle."),
        K("Wide QRS with a broad, notched R in V5-V6 and a deep S in V1. What is it?", "Left bundle branch block", ["Right bundle branch block", "Left posterior hemiblock", "Normal variant"], "V5-V6 sit over the late-firing left ventricle."),
        K("Narrow QRS with left axis deviation and no other cause. Which block fits?", "Left anterior hemiblock", ["Left posterior hemiblock", "Right bundle branch block", "First-degree AV block"], "Hemiblocks don't widen the QRS; anterior swings the axis left."),
        K("Short PR and a slurred start to the QRS. What is it?", "WPW (delta wave)", ["First-degree AV block", "LBBB", "Hyperkalemia"], "An accessory pathway skips the AV node, so the ventricle starts early.")
      ],
      remember: [
        "BBB = QRS <strong>≥ 0.12 s</strong> with R and R'.",
        "<strong>RBBB</strong>: rabbit ears in <strong>V1-V2</strong>. <strong>LBBB</strong>: broad notched R in <strong>V5-V6</strong>, ST-T opposite (not a STEMI).",
        "Hemiblocks: narrow QRS, <strong>anterior → left axis</strong>, <strong>posterior → right axis</strong>; risk of complete heart block.",
        "WPW: <strong>short PR + delta wave</strong>."
      ],
      practice: [
        { label: "Pattern gallery", launch: "ekg-patterns-launch", note: "The conduction group: RBBB, LBBB, both hemiblocks and the delta wave." }
      ]
    },

    /* ---------------- 9 ---------------- */
    {
      id: "t12-big", part: "p3", title: "Big chambers: enlargement and hypertrophy", goal: "Bigger chambers draw taller, wider waves and pull the axis toward them.",
      pages: [
        { title: "More muscle, bigger waves", fig: { type: "ekg", case: "tw-lvh", redraw: false },
          html: "<p>Three clues that a chamber is big:</p><ol class=\"lh-steps\"><li>The wave is <strong>taller</strong>.</li><li>The wave is <strong>wider</strong> (longer).</li><li>The <strong>axis</strong> shifts toward it.</li></ol>" +
            "<p><strong>Hypertrophy</strong> = thicker wall (usually ventricles). <strong>Enlargement</strong> = stretched, bigger chamber (usually atria).</p>" },
        { title: "The P wave has two halves", fig: [{ type: "pattern", id: "pt-rae" }, { type: "pattern", id: "pt-lae" }],
          html: "<p>The <strong>first half</strong> of the P = right atrium. The <strong>second half</strong> = left atrium. Look in <strong>II</strong> and <strong>V1</strong>.</p>" +
            tbl(["", "Right atrial enlargement", "Left atrial enlargement"], [["Clue", "P <strong>taller than 2.5 mm</strong>, or biphasic P in V1 with a bigger first part", "In V1 the <strong>end of the P dips 1 mm or more</strong> below the line and is wider than 0.04 s"]]) +
            mn("<strong>R</strong>AE = <strong>R</strong>aised P. <strong>L</strong>AE = <strong>L</strong>ong, <strong>L</strong>ow ending in V1.") },
        { title: "LVH: add two numbers", fig: { type: "beats", case: "tw-lvh", leads: ["V1", "V2", "V5", "V6"], measure: { V1: "S", V5: "R" }, hi: { V1: "gold", V5: "gold" } },
          html: "<p>The thick LV sends a huge force toward V5-V6 (<strong>tall R</strong>) and away from V1 (<strong>deep S</strong>).</p>" +
            hy("<strong>S in V1 (or V2) + R in V5 (or V6) &gt; 35 mm</strong> = LVH.") +
            "<p>Here the two rulers add up to well over 35 mm.</p>" },
        { title: "Other LVH clues", fig: { type: "ekg", case: "tw-lvh", groups: [{ leads: ["V1", "V2"], tone: "blue", label: "Deep S" }, { leads: ["V5", "V6"], tone: "gold", label: "Tall R + strain" }, { leads: ["I", "aVF"], tone: "green", label: "Axis: about −15° (left)" }] },
          html: "<p>The more of these, the more likely LVH:</p><ul><li>R in V5 over 26 mm, or R in V6 taller than V5</li><li>aVL over 13 mm, aVF over 21 mm, lead I over 14 mm</li><li>R in I + S in III over 25 mm</li><li><strong>Left axis</strong> (often about −15°)</li><li>T wave asymmetric and inverted (slow down, quick up)</li></ul>" },
        { title: "RVH: V1 turns tall", fig: [{ type: "beats", case: "tw-normal", title: "Normal: R grows from V1 to V6", leads: ["V1", "V2", "V3", "V4", "V5", "V6"] }, { type: "beats", case: "tw-rvh", title: "RVH: R biggest in V1, shrinks toward V6", leads: ["V1", "V2", "V3", "V4", "V5", "V6"], hi: { V1: "red" } }],
          html: "<p>The thick RV sits right under V1, so <strong>V1 gets an R bigger than its S</strong>, and the R <strong>shrinks</strong> from V1 to V6: the opposite of normal.</p>" +
            hy("The most common RVH sign is <strong>right axis deviation</strong>.") },
        { title: "Strain: the heart working too hard", fig: [{ type: "beats", case: "tw-lvh", title: "LV strain", leads: ["V5", "V6"], hi: { V5: "violet", V6: "violet" } }, { type: "beats", case: "tw-rvh", title: "RV strain", leads: ["V1", "V2"], hi: { V1: "violet", V2: "violet" } }],
          html: "<p>A hard-working, thick ventricle can show <strong>strain</strong>: the <strong>ST sags down</strong> (with a slight early hump) into an <strong>asymmetric inverted T</strong>.</p>" +
            tbl(["Strain", "Where"], [["Left ventricular", "<strong>V5-V6</strong>"], ["Right ventricular", "<strong>V1</strong>"]]) }
      ],
      checks: [
        K("Which P-wave finding means right atrial enlargement?", "P taller than 2.5 mm", ["Terminal part of P in V1 dips 1 mm below baseline", "P wider than 0.04 s in V6", "No P waves"], "RAE = raised P; the right atrium is the first half of the P."),
        K("In V1 the last part of the P wave dips 1 mm below the line and is wide. What is it?", "Left atrial enlargement", ["Right atrial enlargement", "Atrial flutter", "WPW"], "The left atrium makes the end of the P, which V1 shows clearly."),
        K("S in V1 is 18 mm and R in V5 is 24 mm. What does it suggest?", "Left ventricular hypertrophy (42 mm > 35)", ["Right ventricular hypertrophy", "Normal voltage", "Left bundle branch block"], "S(V1) + R(V5) over 35 mm is the classic LVH rule."),
        K("R bigger than S in V1, shrinking toward V6, with right axis. What is it?", "Right ventricular hypertrophy", ["Left ventricular hypertrophy", "Left anterior hemiblock", "Normal R wave progression"], "The thick RV under V1 reverses the normal R progression."),
        K("Where do you look for left ventricular strain?", "V5-V6", ["V1-V2", "aVR", "III and aVF"], "Strain shows over the strained ventricle: V5-V6 for the left, V1 for the right.")
      ],
      remember: [
        "Big chamber = <strong>taller, wider, axis toward it</strong>.",
        "<strong>RAE</strong>: P &gt; 2.5 mm. <strong>LAE</strong>: deep, wide end of P in V1.",
        "<strong>LVH</strong>: S(V1) + R(V5/6) <strong>&gt; 35 mm</strong>, left axis. <strong>RVH</strong>: R &gt; S in V1, <strong>right axis</strong>.",
        "<strong>Strain</strong>: sagging ST + asymmetric inverted T (V5-V6 left, V1 right)."
      ],
      practice: [
        { label: "Pattern gallery", launch: "ekg-patterns-launch", note: "The enlargement group: RAE, LAE, RVH, LVH and both strains." }
      ]
    },

    /* ---------------- 10 ---------------- */
    {
      id: "t12-st", part: "p4", title: "Measuring the ST segment", goal: "Find the J point, go one small box, compare with the PR baseline.",
      pages: [
        { title: "Where the ST lives", fig: { type: "st", mm: 0, lead: "V3" },
          html: "<p>The <strong>ST segment</strong> runs from the end of the QRS (the <strong>J point</strong>) to the T wave. Normally it sits <strong>flat on the baseline</strong>.</p>" +
            "<p>The baseline is the <strong>PR segment</strong> (the flat bit between P and QRS).</p>" },
        { title: "Measure it in two steps", fig: { type: "st", mm: 3, lead: "V3" },
          html: "<ol class=\"lh-steps\"><li>Find the <strong>J point</strong>.</li><li>Move <strong>0.04 s (1 small box)</strong> to the right and compare that spot with the PR baseline.</li></ol>" +
            "<p>Count the small boxes up (or down): each one is 1 mm.</p>" },
        { title: "Limb leads: more than 1 mm", fig: { type: "st", mm: 1.5, lead: "II" },
          html: hy("ST elevation counts when it's <strong>&gt; 1 mm in a limb lead</strong> or <strong>&gt; 2 mm in a chest lead</strong>.") },
        { title: "Chest leads need more than 2 mm", fig: { type: "st", mm: 1.5, lead: "V3" },
          html: "<p>The same 1.5 mm in a <strong>chest</strong> lead is <strong>not enough</strong>. Chest leads sit closer to the heart, so they need more (standard teaching for the reason).</p>" },
        { title: "Two neighbors must agree", fig: { type: "ekg", case: "tw-inferior", groups: [{ leads: ["II", "III", "aVF"], tone: "red", label: "ST up in 3 inferior leads", tag: STUP }] },
          html: "<p>One lead alone isn't enough. It must be in <strong>2 or more leads that look at the same wall</strong> (contiguous leads). Here: II, III and aVF.</p>" },
        { title: "ST depression: the ischemia sign", fig: { type: "st", mm: -2, lead: "V5" },
          html: "<p>ST <strong>more than 1 mm below</strong> the baseline (at J + 0.04 s) in 2+ leads facing the same area = <strong>ischemia</strong>. A <strong>flat</strong> depression is also the pattern of a <strong>subendocardial</strong> infarction.</p>" }
      ],
      checks: [
        K("Where do you measure ST elevation?", "0.04 s (1 small box) after the J point", ["At the peak of the T wave", "At the top of the R wave", "At the start of the P wave"], "The deck measures 0.04 s right of the J point against the PR segment."),
        K("What do you compare the ST level with?", "The PR segment (baseline)", ["The top of the T wave", "The calibration mark", "The next beat's R wave"], "The PR segment is the flat electrical baseline."),
        K("1.5 mm ST elevation in leads II and aVF. Does it meet the STEMI rule?", "Yes: more than 1 mm in 2 contiguous limb leads", ["No: limb leads need more than 2 mm", "No: it must be in one lead only", "Only if aVR is also elevated"], "Limb leads need > 1 mm in 2+ leads facing the same wall."),
        K("1.5 mm ST elevation in V2 and V3. Does it meet the STEMI rule?", "No: chest leads need more than 2 mm", ["Yes: anything over 1 mm counts", "Yes: V2 and V3 are always diagnostic", "It can't be measured in chest leads"], "Chest leads need more than 2 mm."),
        K("ST is 2 mm below the baseline in V5 and V6. What does it suggest?", "Ischemia", ["A STEMI", "A normal finding", "Right bundle branch block"], "ST depression over 1 mm in 2+ leads facing one area is the classic ischemia sign.")
      ],
      remember: [
        "Measure at <strong>J + 0.04 s</strong>, against the <strong>PR segment</strong>.",
        "STEMI: <strong>&gt; 1 mm limb</strong>, <strong>&gt; 2 mm chest</strong>, in <strong>2+ leads, same wall</strong>.",
        "ST <strong>depression &gt; 1 mm</strong> = ischemia; flat = subendocardial."
      ],
      practice: [
        { label: "MI locator: STEMI or not?", launch: "ekg-mi-launch", then: "mi-stemi", note: "Measure drawn ST segments against the 1 mm / 2 mm rule." }
      ]
    },

    /* ---------------- 11 ---------------- */
    {
      id: "t12-stemi", part: "p4", title: "Find the STEMI", goal: "Find the leads with ST up, name the wall and artery, check the mirror image.",
      pages: [
        { title: "T, then ST, then Q", fig: [{ type: "damage", id: "dmg-normal" }, { type: "damage", id: "dmg-t-inversion" }, { type: "damage", id: "dmg-st-elevation" }, { type: "damage", id: "dmg-q-wave" }],
          html: tbl(["Stage", "EKG"], [["Normal", "Flat ST, upright T"], ["<strong>Ischemia</strong>", "T peaked or <strong>inverted</strong>, ST depression"], ["<strong>Injury</strong>", "<strong>ST elevation</strong>: the earliest reliable sign of acute MI"], ["<strong>Infarction</strong>", "<strong>Pathologic Q</strong> (hours to days later)"]]) },
        { title: "Inferior STEMI", fig: [{ type: "ekg", case: "tw-inferior", groups: [{ leads: ["II", "III", "aVF"], tone: "red", label: "ST up: II, III, aVF", tag: STUP }, { leads: ["I", "aVL"], tone: "blue", label: "Mirror image (reciprocal)", tag: STDOWN }] }, { type: "heart", hi: ["inferior"], artery: "rca" }],
          html: "<p>ST up in the inferior triangle → <strong>inferior wall</strong> → usually the <strong>RCA</strong>. The lateral leads show the mirror image.</p><p>Watch for <strong>AV blocks</strong> (the RCA feeds the AV node).</p>" },
        { title: "Lateral STEMI", fig: [{ type: "ekg", case: "tw-lateral", groups: [{ leads: ["I", "aVL", "V5", "V6"], tone: "red", label: "ST up: I, aVL, V5, V6", tag: STUP }, { leads: ["II", "III", "aVF"], tone: "blue", label: "Mirror image (reciprocal)", tag: STDOWN }] }, { type: "heart", hi: ["lateral"], artery: "lcx" }],
          html: "<p>ST up in the lateral leads → <strong>lateral wall</strong> → usually the <strong>circumflex</strong>. The inferior leads show the mirror image.</p>" },
        { title: "Anterior STEMI", fig: [{ type: "ekg", case: "tw-anterior", groups: [{ leads: ["V2", "V3", "V4"], tone: "red", label: "ST up: V2-V4", tag: STUP }] }, { type: "heart", hi: ["anterior"], artery: "lad" }],
          html: "<p>ST up in <strong>V2-V4</strong> → <strong>anterior wall</strong> → <strong>LAD</strong>. You may also see <strong>poor R wave progression</strong>. The mirror image is on the back (V7-V9).</p><p>Watch for <strong>BBB</strong> and type II block (the LAD feeds the bundle branches).</p>" },
        { title: "Septal (septoanterior) STEMI", fig: [{ type: "ekg", case: "tw-septal", groups: [{ leads: ["V1", "V2", "V3"], tone: "red", label: "ST up: V1-V3", tag: STUP }] }, { type: "heart", hi: ["septal"], artery: "lad" }],
          html: "<p>ST up in <strong>V1-V3</strong> → <strong>septum</strong> (septoanterior) → <strong>LAD</strong>. Reciprocal changes, if any, in V6 and the posterior leads.</p>" },
        { title: "Posterior STEMI: read the mirror", fig: [{ type: "ekg", case: "tw-posterior", groups: [{ leads: ["V1", "V2", "V3"], tone: "blue", label: "ST down, tall R, upright T: the mirror image", tag: STDOWN }] }, { type: "horizontal", posterior: true, hi: { V1: "blue", V2: "blue", V3: "blue", V7: "red", V8: "red", V9: "red" } }],
          html: "<p>No standard lead faces the back, so V1-V3 see it <strong>upside down</strong>: <strong>ST depression, large R waves, upright T</strong>. On a 15-lead, <strong>V7-V9</strong> show the real ST elevation.</p>" +
            mn("Flip the page over and hold it to the light: the ST depression in V1-V3 becomes ST elevation and the tall R becomes a Q (standard teaching).") },
        { title: "Every STEMI on one card", fig: { type: "map" },
          html: tbl(["STEMI", "ST up in", "Mirror image", "Artery"], [
            ["<strong>Inferior</strong>", "II, III, aVF", "I, aVL, V5, V6", "RCA"],
            ["<strong>Lateral</strong>", "I, aVL, V5, V6", "II, III, aVF", "Circumflex"],
            ["<strong>Anterior</strong>", "V2-V4", "V7-V9", "LAD"],
            ["<strong>Septoanterior</strong>", "V1-V3", "V6, V7-V9", "LAD"],
            ["<strong>Posterior</strong>", "V7-V9", "<strong>V1-V3</strong> (ST down, tall R)", "RCA or circumflex"]]) },
        { title: "Q waves come later", fig: { type: "damage", id: "dmg-q-wave" },
          html: "<p>Dead muscle makes no electricity, so the lead looks straight through it at the spark moving <strong>away</strong>: the R disappears and a deep Q forms.</p>" +
            hy("Pathologic Q: <strong>&gt; 0.04 s</strong> wide, <strong>≥ 1/3 the height of the R</strong>, in <strong>2+ contiguous leads</strong>. Never judge aVR (its big Q is normal).") }
      ],
      checks: [
        K("ST elevation in II, III and aVF with ST depression in I and aVL. What's the diagnosis?", "Inferior STEMI (usually RCA)", ["Lateral STEMI (circumflex)", "Anterior STEMI (LAD)", "Pericarditis"], "II, III, aVF is the inferior triangle; I and aVL are its mirror."),
        K("ST elevation in V2-V4. Which artery is most likely blocked?", "LAD", ["RCA", "Circumflex", "Left main only"], "V2-V4 is the anterior wall, fed by the LAD."),
        K("ST depression with tall R waves and upright T waves in V1-V3. What should you think of?", "Posterior STEMI", ["Septal STEMI", "Normal variant", "Left bundle branch block"], "V1-V3 show the back wall's injury upside down."),
        K("Which artery is usually behind a lateral STEMI?", "Circumflex", ["RCA", "LAD", "Posterior descending"], "The circumflex wraps around the lateral wall."),
        K("Which Q wave is pathologic?", "0.05 s wide and half the R height, in V2 and V3", ["0.02 s wide in lead I", "A large Q in aVR", "A tiny q in V6"], "Over 0.04 s, at least 1/3 of the R, in 2+ contiguous leads; aVR doesn't count.")
      ],
      remember: [
        "<strong>Inferior</strong> II, III, aVF (RCA) ↔ mirror in I, aVL.",
        "<strong>Lateral</strong> I, aVL, V5, V6 (LCx) ↔ mirror in II, III, aVF.",
        "<strong>Anterior</strong> V2-V4, <strong>septal</strong> V1-V3 (LAD).",
        "<strong>Posterior</strong>: ST down + tall R + upright T in <strong>V1-V3</strong>; V7-V9 confirm.",
        "Pathologic Q: &gt; 0.04 s, ≥ 1/3 R, 2+ leads, never aVR."
      ],
      practice: [
        { label: "MI locator: locate the STEMI", launch: "ekg-mi-launch", then: "mi-locate", note: "Wall → artery → reciprocal leads on fresh 12-leads." },
        { label: "Practice exam: 12-lead part", launch: "ekg-mock-launch", then: "mock-part-twelve", note: "Five 12-leads with answers checked as you go." }
      ]
    },

    /* ---------------- 12 ---------------- */
    {
      id: "t12-mimics", part: "p5", title: "Look-alikes and whole-heart patterns", goal: "ST changes that aren't a STEMI, and patterns that show up in every lead.",
      pages: [
        { title: "Pericarditis: ST up almost everywhere", fig: { type: "ekg", case: "tw-pericarditis", groups: [{ leads: ["I", "II", "III", "aVL", "aVF", "V2", "V3", "V4", "V5", "V6"], tone: "gold", label: "Diffuse, concave (saggy) ST elevation", tag: STUP }, { leads: ["aVR"], tone: "blue", label: "aVR: the opposite", tag: STDOWN }] },
          html: tbl(["", "Pericarditis", "STEMI"], [
            ["Where", "<strong>Diffuse</strong>: most leads", "One wall + mirror image"],
            ["ST shape", "Concave, <strong>\"saggy\"</strong>", "Territorial"],
            ["Q waves", "<strong>Never</strong>", "May form"],
            ["T inversion", "<strong>After</strong> the ST normalizes", "Before the ST normalizes"]]) },
        { title: "LBBB and pacing: the ST goes the other way", fig: [{ type: "ekg", case: "tw-lbbb", title: "Left bundle branch block", hi: ["V1", "V2", "V3"], label: "ST up opposite a deep wide QRS: expected" }, { type: "ekg", case: "tw-paced", title: "Ventricular pacemaker", hi: ["II"], label: "Spike before every wide QRS" }],
          html: "<p>With a <strong>wide QRS</strong> (BBB or a ventricular pacemaker), the ST and T point <strong>opposite</strong> the QRS. That's expected, not a STEMI.</p>" +
            "<ul><li><strong>Ventricular pacer</strong>: spike, then a wide, bizarre QRS.</li><li><strong>Atrial pacer</strong>: spike, then a normal P and QRS.</li></ul>" },
        { title: "High potassium: tall, peaked T in every lead", fig: { type: "ekg", case: "tw-hyperk", groups: [{ leads: ["V2", "V3", "V4"], tone: "gold", label: "Tall, narrow, tented T" }] },
          html: "<p>Changes come in order as potassium climbs:</p><p class=\"lh-big\">peaked T → flat P → long PR → wide QRS → sine wave</p>" },
        { title: "Low potassium: flat T and a U wave", fig: { type: "beats", case: "tw-hypok", leads: ["II", "V2", "V3", "V4"], notes: { V3: "flat T, then U" } },
          html: "<p>Everything sinks: <strong>ST depression</strong>, a <strong>flat T</strong>, then a <strong>U wave</strong> (a bump after the T). The QT gets longer.</p>" +
            mn("High K: the T goes <strong>up</strong>. Low K: the T goes <strong>down</strong> and a <strong>U</strong> pops up.") },
        { title: "Calcium: watch the QT", fig: [{ type: "beats", case: "tw-hyperca", title: "High calcium: short QT", leads: ["II", "V3"] }, { type: "beats", case: "tw-hypoca", title: "Low calcium: long QT", leads: ["II", "V3"] }],
          html: tbl(["", "QT", "Risk"], [["<strong>High</strong> calcium", "<strong>Short</strong> (ST almost gone)", "Arrhythmias"], ["<strong>Low</strong> calcium", "<strong>Long</strong> (long flat ST)", "Torsades; weaker contraction"]]) +
            mn("<strong>Low and long</strong>: low calcium, long QT.") },
        { title: "Pericardial effusion: small and swinging", fig: { type: "ekg", case: "tw-effusion", strip: true },
          html: "<p>Fluid around the heart <strong>muffles</strong> the signal: <strong>low voltage</strong> in every lead. The heart swings in the fluid, so the QRS height <strong>alternates</strong> beat to beat (<strong>electrical alternans</strong>). Look along the rhythm strip.</p>" },
        { title: "Pulmonary embolus: S1Q3T3", fig: { type: "ekg", case: "tw-pe", groups: [{ leads: ["I"], tone: "gold", label: "S1: big S in lead I", tag: "S1" }, { leads: ["III"], tone: "red", label: "Q3 T3: Q and inverted T in lead III", tag: "Q3 T3" }] },
          html: "<p>Sudden strain on the right heart. Classic (but <strong>not common</strong>) <strong>S1Q3T3</strong>, plus:</p><ul><li><strong>Right axis</strong> deviation</li><li><strong>RBBB</strong></li><li>Tall peaked P in II, III, aVF</li><li>Usually a fast rate</li></ul>" }
      ],
      checks: [
        K("Concave ST elevation in almost every lead, no Q waves, no reciprocal changes. What is it?", "Pericarditis", ["Inferior STEMI", "Hypokalemia", "Posterior STEMI"], "Diffuse, saggy ST elevation that ignores the walls is pericarditis."),
        K("A patient with LBBB has ST elevation in V1-V3 opposite a deep wide QRS. Is that a STEMI by itself?", "No: ST-T opposite a wide QRS is expected in LBBB", ["Yes: any ST elevation over 2 mm is a STEMI", "Yes: V1-V3 is the septum", "Only if aVR is negative"], "Secondary ST-T changes follow the wide QRS in the opposite direction."),
        K("Tall, narrow, peaked T waves in every lead. What's first on your list?", "Hyperkalemia", ["Hypokalemia", "Hypercalcemia", "Pericarditis"], "Peaked T is the first EKG sign of high potassium."),
        K("Low voltage with QRS height alternating beat to beat. What is it?", "Pericardial effusion", ["Pulmonary embolus", "LVH", "Hyperkalemia"], "Fluid muffles the voltage and the heart swings within it."),
        K("Deep S in lead I, Q and inverted T in lead III, and right axis. What fits?", "Pulmonary embolus", ["Inferior STEMI", "Left anterior hemiblock", "Hypocalcemia"], "S1Q3T3 with right axis shows acute right heart strain.")
      ],
      remember: [
        "<strong>Pericarditis</strong>: diffuse saggy ST up, aVR opposite, no Q.",
        "<strong>LBBB / paced</strong>: ST-T opposite the wide QRS is expected.",
        "<strong>High K</strong>: peaked T → sine wave. <strong>Low K</strong>: flat T + U. <strong>Low Ca</strong>: long QT. <strong>High Ca</strong>: short QT.",
        "<strong>Effusion</strong>: low voltage + alternans. <strong>PE</strong>: S1Q3T3, right axis, RBBB."
      ],
      practice: [
        { label: "Pattern gallery: Name that pattern", launch: "ekg-patterns-launch", then: "pt-quiz", note: "All 26 drawn patterns, mixed." }
      ]
    },

    /* ---------------- 13 ---------------- */
    {
      id: "t12-read", part: "p5", title: "Read a whole 12-lead in 8 steps", goal: "The deck's routine, one step at a time, on one 12-lead.",
      pages: [
        { title: "The routine", fig: { type: "steps" },
          html: "<p>Same order every time, so nothing gets missed. A normal EKG looks like this:</p>" +
            tbl(["Step", "Normal"], [["Regularity", "Regular"], ["Rate", "60-100"], ["Axis", "No deviation (0° to +90°)"], ["P waves", "Upright, round, one before each QRS"], ["QRS", "Narrow (0.06-0.12 s)"], ["PR", "0.12-0.20 s"], ["ST / T", "Flat ST; upright, slightly asymmetric T"]]) },
        { title: "Steps 1-2: regularity and rate", fig: [{ type: "steps", on: 0 }, { type: "ekg", case: "tw-inferior", seed: 21, redraw: false, strip: true }],
          html: "<p>Use the <strong>rhythm strip</strong>. Are the gaps equal? Count the QRS complexes in the 10 seconds and multiply by 6 (or use 300 / 1500 if regular).</p>" },
        { title: "Step 3: axis", fig: [{ type: "steps", on: 2 }, { type: "ekg", case: "tw-inferior", seed: 21, redraw: false, hi: ["I", "aVF"], tone: "green", label: "Lead I and aVF" }],
          html: "<p>Lead I up? aVF up? Both up = <strong>normal axis</strong>.</p>" },
        { title: "Steps 4-6: P, QRS, PR", fig: [{ type: "steps", on: 3 }, { type: "ekg", case: "tw-inferior", seed: 21, redraw: false, hi: ["II", "V1"], tone: "gold", label: "P waves best in II and V1" }],
          html: "<ul><li><strong>P</strong>: upright in II, one before every QRS? Too tall (RAE) or a deep end in V1 (LAE)?</li><li><strong>QRS</strong>: narrow? Rabbit ears (RBBB) or broad notched R (LBBB)? Very tall (LVH)?</li><li><strong>PR</strong>: 3-5 small boxes?</li></ul>" },
        { title: "Step 7: ST segments, wall by wall", fig: [{ type: "steps", on: 6 }, { type: "ekg", case: "tw-inferior", seed: 21, redraw: false, walls: true }],
          html: "<p>Go wall by wall with the color map: inferior, lateral, septal, anterior. Any ST up (&gt; 1 mm limb, &gt; 2 mm chest, 2+ leads)? Any mirror image? Then check V1-V3 for a posterior mirror.</p>" +
            reveal("What do you see here?", "ST elevation in <strong>II, III and aVF</strong> with ST depression in <strong>I and aVL</strong>: an <strong>inferior STEMI</strong> with reciprocal changes.") },
        { title: "Step 8: say it in one line", fig: [{ type: "steps", on: 7 }, { type: "ekg", case: "tw-inferior", seed: 21, redraw: false, groups: [{ leads: ["II", "III", "aVF"], tone: "red", label: "ST up", tag: STUP }, { leads: ["I", "aVL"], tone: "blue", label: "Reciprocal", tag: STDOWN }] }],
          html: hy("\"<strong>Sinus rhythm, normal axis, acute inferior STEMI with reciprocal changes in I and aVL</strong> (likely RCA, watch for AV block).\"") +
            "<p>Rhythm first, then axis, then the big finding with its location.</p>" },
        { title: "Your turn", fig: { type: "ekg", case: "tw-lvh", seed: 5, redraw: false },
          html: "<p>Go through the 8 steps in your head, then check.</p>" +
            reveal("Show the answer", "Regular sinus rhythm, <strong>left axis</strong> (I up, aVF down), <strong>very tall R in V5-V6 and deep S in V1-V2</strong> (over 35 mm), with <strong>strain</strong> (sagging ST, inverted T) in the lateral leads: <strong>LVH with strain</strong>.") },
        { title: "One more", fig: { type: "ekg", case: "tw-rbbb", seed: 8, redraw: false },
          html: reveal("Show the answer", "Regular sinus rhythm, normal axis, <strong>wide QRS (0.12 s or more) with rsR' rabbit ears in V1-V2</strong> and a wide slurred S in I and V6: <strong>right bundle branch block</strong>. T inversion in V1-V2 is the expected secondary change.") }
      ],
      checks: [
        K("What's step 3 of the deck's routine?", "Determine the axis", ["Assess the ST segments", "Assess the P waves", "Make a final analysis"], "Regularity, rate, axis, then P, QRS, PR, ST and the final analysis."),
        K("Which part of the printout is best for regularity and rate?", "The 10-second rhythm strip at the bottom", ["Lead aVR", "The calibration mark", "Any single 2.5-second box"], "A long strip shows enough beats to judge the rhythm."),
        K("What is the normal QRS duration on the deck's normal-EKG list?", "0.06-0.12 s", ["0.12-0.20 s", "Over 0.12 s", "0.36-0.44 s"], "0.12-0.20 s is the PR; a QRS of 0.12 s or more is wide."),
        K("Which final read is complete?", "Sinus rhythm, normal axis, inferior STEMI with reciprocal changes in I and aVL", ["Inferior STEMI", "ST elevation", "Abnormal EKG, see cardiology"], "Say the rhythm, the axis and the main finding with its location.")
      ],
      remember: [
        "<strong>Regularity → rate → axis → P → QRS → PR → ST → final</strong>.",
        "Rhythm strip for steps 1-2; lead I + aVF for the axis; II and V1 for P waves.",
        "Go <strong>wall by wall</strong> for the ST, then check V1-V3 for a posterior mirror.",
        "Final line: rhythm, axis, main finding + where."
      ],
      practice: [
        { label: "Practice exam: 12-lead part", launch: "ekg-mock-launch", then: "mock-part-twelve", note: "Read five 12-leads step by step with answers checked as you go." },
        { label: "Examplify questions", launch: "ekg-examplify-launch", note: "Real exam-style 12-lead questions." }
      ]
    }
  ];

  window.EKG_TWELVE_LEARN = {
    intro: "Lots of pictures, very little reading. Every page shows you something on a drawn 12-lead, then a few easy questions (they don't count) and a button to practice. Do the lessons in order; each one is about 5 minutes.",
    parts: parts,
    lessons: lessons
  };
}());
