/*
  EKG "Start here" lessons (engine: ekg-learn.js). Teaches EKG from zero before the practice tools:
  one idea per page, why before what, then a few easy checks, a "remember" list and practice buttons.
  Facts follow the EKG Interpretation deck (Marriott) and the EKG Rhythm Study Guide; analogies
  (drummer, toll booth, express lanes, cameras) are teaching aids, not deck content.
  Lesson ids are progress keys: never rename. Checks: K(prompt, answer, [wrong], why).
  Figures: heart {on, anim}, sync, beat {labels, brackets, shade, pr, wide, noP, invP, j, times},
  paper, rate {boxes}, strip {rhythm (ekr-* id), marks: "count" | "p", label}, workbook {id, caption}.
*/
(function () {
  "use strict";
  function K(prompt, answer, wrong, why) { return { prompt: prompt, answer: answer, wrong: wrong, why: why }; }
  function hy(x) { return '<div class="box-hy"><span class="lbl">Key idea</span>' + x + "</div>"; }
  function an(x) { return '<div class="box-mnemonic"><span class="lbl">Picture it</span>' + x + "</div>"; }
  function tbl(head, rows) {
    return '<div class="table-scroll"><table class="learn-table"><tr>' + head.map(function (h) { return "<th>" + h + "</th>"; }).join("") + "</tr>" +
      rows.map(function (r) { return "<tr>" + r.map(function (d) { return "<td>" + d + "</td>"; }).join("") + "</tr>"; }).join("") + "</table></div>";
  }

  var parts = [
    { id: "p1", title: "Part 1 · How to read any strip", blurb: "What the squiggles are, how to measure them, and the five questions you ask every strip. Everything else builds on this." },
    { id: "p2", title: "Part 2 · Rhythms, by where the beat starts", blurb: "Every rhythm is named by who is pacing the heart and how the signal travels. Sinus, atrial, junctional, ventricular, then AV blocks.", soon: "sinus, atrial, junctional and ventricular rhythms, then AV blocks" },
    { id: "p3", title: "Part 3 · The 12-lead", blurb: "Twelve cameras looking at the same heartbeat: the axis, heart attacks, and the patterns from hypertrophy, blocks and electrolytes.", soon: "leads and axis, heart attacks, then patterns" }
  ];

  var lessons = [
    /* ---------------- 1 ---------------- */
    {
      id: "learn-wiring", part: "p1", title: "The heart's wiring", goal: "Where the heartbeat's spark starts and the path it takes.",
      pages: [
        { title: "An EKG records electricity, not squeezing", fig: { type: "heart", anim: true },
          html: "<p>Before any heart muscle squeezes, an electrical signal has to spread through it. The EKG stickers on the skin pick up that electricity. They never see the squeeze itself.</p>" +
            "<p>So reading an EKG really comes down to two questions: <strong>where did the spark start</strong>, and <strong>how did it travel</strong>? Every rhythm you will learn is an answer to those two questions.</p>" +
            "<p>The picture shows one heartbeat, slowed down. Watch the spark start at the top right of the heart (your left), spread over the top chambers, pause in the middle, then race down into the bottom chambers.</p>" },
        { title: "The SA node is the drummer", fig: { type: "heart", on: ["sa"] },
          html: "<p>The spark starts in the <strong>SA node</strong>, a small patch of special cells high in the <strong>right atrium</strong>.</p>" +
            "<p>These cells fire all by themselves, again and again, <strong>60 to 100 times a minute</strong>. That ability to make their own impulse is called <strong>automaticity</strong>.</p>" +
            an("Think of the SA node as the band's <strong>drummer</strong>. It keeps the beat, and everyone else follows it because it is the fastest.") +
            "<p>When the SA node is running the show, the rhythm is called <strong>sinus</strong> (normal sinus rhythm, sinus bradycardia, and so on).</p>" },
        { title: "Across the atria to the AV node", fig: { type: "heart", on: ["sa", "atria", "av"] },
          html: "<p>From the SA node, the signal ripples across <strong>both atria</strong> (the two top chambers). As it passes, the atria squeeze and push the last <strong>15 to 30%</strong> of blood down into the ventricles. That push is the <strong>atrial kick</strong>.</p>" +
            "<p>The signal then reaches the <strong>AV node</strong>, in the middle of the heart where the four chambers meet. The AV node is the only normal doorway from the top chambers to the bottom ones.</p>" },
        { title: "The AV node is a toll booth", fig: { type: "heart", on: ["av"] },
          html: "<p>The AV node <strong>slows the signal down on purpose</strong>, for about a tenth of a second.</p>" +
            "<p><strong>Why?</strong> So the atria can finish emptying into the ventricles before the ventricles squeeze. If the signal went straight through, both would squeeze at once and the atrial kick would be lost.</p>" +
            an("The AV node is a <strong>toll booth</strong>: every car has to stop briefly before getting on the highway.") +
            hy("Keep the toll booth in mind. Later, the <strong>AV blocks</strong> are just this toll booth getting slower (1st degree), letting some cars through and not others (2nd degree), or closing completely (3rd degree).") },
        { title: "Then the express lanes", fig: { type: "heart", on: ["his", "bb", "purk", "vent"] },
          html: "<p>After the toll booth, the signal gets on the highway. It shoots down the <strong>bundle of His</strong>, splits into the <strong>right and left bundle branches</strong> (one for each ventricle), and spreads through the <strong>Purkinje fibers</strong> into the ventricle walls.</p>" +
            "<p>These are fast, specialized wires, so <strong>both ventricles fire at nearly the same moment</strong> and squeeze together. That speed is why a normal QRS on the EKG is <strong>narrow</strong>.</p>" +
            '<div class="box-mnemonic"><span class="lbl">Mnemonic</span>"<strong>S</strong>ome <strong>A</strong>nimals <strong>H</strong>ave <strong>B</strong>ig <strong>P</strong>aws": SA node, AV node, His bundle, Bundle branches, Purkinje fibers.</div>' },
        { title: "Backup drummers get slower as you go down", fig: { type: "heart", on: ["sa", "av", "vent"] },
          html: "<p>If the SA node stops or slows too much, other cells can take over as the pacemaker. Each backup is <strong>slower the lower it sits</strong> in the heart:</p>" +
            tbl(["Who's pacing", "Its own rate", "Rhythms named for it"], [
              ["SA node", "<strong>60-100</strong>", "Sinus rhythms"],
              ["AV junction (AV node area)", "<strong>40-60</strong>", "Junctional rhythms"],
              ["Ventricles", "<strong>20-40</strong>", "Idioventricular (ventricular) rhythms"]]) +
            hy("This one table explains a lot of the course. A rhythm's name says <strong>where the beat started</strong>, and the rate is a big clue to where that is.") }
      ],
      checks: [
        K("Where does a normal heartbeat start?", "The SA node, high in the right atrium", ["The AV node", "The bundle of His", "The Purkinje fibers"], "The SA node fires on its own 60-100 times a minute and sets the pace (automaticity)."),
        K("Why does the AV node slow the signal down?", "So the atria finish emptying before the ventricles squeeze", ["So the ventricles can rest longer", "So the SA node can recharge", "To make the QRS wider"], "The pause protects the atrial kick: the last 15-30% of ventricular filling."),
        K("The SA node and the AV junction both fail. About how fast will the ventricles beat on their own?", "20-40 per minute", ["60-100 per minute", "40-60 per minute", "100-150 per minute"], "The lower the pacemaker, the slower it is: SA 60-100, junction 40-60, ventricles 20-40."),
        K("Why is a normal QRS narrow?", "The His bundle, bundle branches and Purkinje fibers carry the signal fast, so both ventricles fire together", ["The AV node speeds the signal up", "The ventricles are small", "The atria fire at the same time"], "The express lanes spread the signal through both ventricles in well under 0.12 s.")
      ],
      remember: [
        "The EKG records <strong>electricity</strong>. Ask: where did the spark start, and how did it travel?",
        "<strong>SA node</strong> = the drummer, 60-100/min. <strong>AV node</strong> = the toll booth (a short, deliberate delay).",
        "<strong>His → bundle branches → Purkinje</strong> = express lanes, so the ventricles fire together (narrow QRS).",
        "Backups are slower the lower they are: <strong>junction 40-60</strong>, <strong>ventricles 20-40</strong>."
      ],
      practice: []
    },

    /* ---------------- 2 ---------------- */
    {
      id: "learn-waves", part: "p1", title: "What each wave means", goal: "Match P, QRS and T to what the heart is doing.",
      pages: [
        { title: "Each bump is one step of the trip", fig: { type: "sync" },
          html: "<p>Now we put the heart and the paper side by side. Watch them together for a few loops:</p>" +
            "<ul><li>The <strong>atria</strong> light up while the small first bump draws: that's the <strong>P wave</strong>.</li>" +
            "<li>The line goes <strong>flat</strong> while the signal waits in the AV node (the toll booth).</li>" +
            "<li>The <strong>ventricles</strong> light up while the tall spike draws: that's the <strong>QRS</strong>.</li>" +
            "<li>The ventricles turn blue as they <strong>reset</strong>, drawing the <strong>T wave</strong>.</li></ul>" },
        { title: "Two words: depolarize and repolarize", fig: { type: "beat", labels: ["P", "R", "T"] },
          html: "<p>Heart cells sit with an electrical charge, like a loaded spring.</p>" +
            "<ul><li><strong>Depolarization</strong> = the cells <strong>fire</strong>. Their charge flips, and that triggers the squeeze.</li>" +
            "<li><strong>Repolarization</strong> = the cells <strong>reset</strong>. They reload the charge so they can fire again.</li></ul>" +
            an("Depolarize = <strong>fire</strong>. Repolarize = <strong>reload</strong>.") +
            "<p>Every wave on the EKG is one group of cells either firing or reloading.</p>" },
        { title: "P wave = the atria fire", fig: { type: "beat", labels: ["P"], shade: ["P"] },
          html: "<p>The <strong>P wave</strong> is <strong>atrial depolarization</strong>: the spark spreading from the SA node across both atria.</p>" +
            "<p><strong>Why is it small and rounded?</strong> The atria have thin walls with little muscle, and a small amount of muscle makes a small signal.</p>" +
            "<p>The right atrium fires first (the SA node lives there), then the left. So the first half of the P wave is the RA and the second half is the LA. This matters later for atrial enlargement.</p>" },
        { title: "PR segment = waiting at the toll booth", fig: { type: "beat", labels: ["P", "R"], shade: ["PRseg"] },
          html: "<p>After the P wave, the line goes <strong>flat</strong> for a moment. That flat stretch is the <strong>PR segment</strong>.</p>" +
            "<p><strong>Why flat?</strong> The signal is inside the AV node, which is far too small to make a visible wave. It's still happening; the EKG just can't see it.</p>" +
            "<p>A flat line is called <strong>isoelectric</strong> (the baseline).</p>" },
        { title: "QRS = the ventricles fire", fig: { type: "beat", labels: ["Q", "R", "S"], shade: ["QRS"] },
          html: "<p>The <strong>QRS complex</strong> is <strong>ventricular depolarization</strong>. Right after it, the ventricles squeeze and you get a pulse.</p>" +
            "<p><strong>Why is it tall?</strong> The ventricles are thick and muscular, so they make a big signal. <strong>Why is it sharp and narrow?</strong> The express lanes spread the signal very fast.</p>" +
            "<ul><li><strong>Q</strong> = the first <strong>downward</strong> dip after the P (not always there).</li><li><strong>R</strong> = the first <strong>upward</strong> spike.</li><li><strong>S</strong> = the downward dip <strong>after</strong> the R.</li></ul>" +
            "<p>The atria reset (repolarize) at this same moment, but the huge QRS hides it.</p>" },
        { title: "ST segment and T wave = the ventricles reset", fig: { type: "beat", labels: ["R", "T"], shade: ["ST", "T"], j: true },
          html: "<p>After the QRS, the ventricles have to reload. That's <strong>ventricular repolarization</strong>, and it shows up as:</p>" +
            "<ul><li>the <strong>ST segment</strong>: a flat stretch back on the baseline, and</li><li>the <strong>T wave</strong>: a rounded bump, normally pointing the <strong>same way as the QRS</strong>.</li></ul>" +
            "<p>The point where the QRS ends and the ST segment starts is the <strong>J point</strong>. Remember that name, because heart attacks are judged by whether the ST segment rises or falls after it.</p>" },
        { title: "Put it together", fig: { type: "beat", labels: ["P", "Q", "R", "S", "T"] },
          html: tbl(["On the EKG", "What the heart is doing"], [
              ["<strong>P wave</strong>", "Atria fire (depolarize), then squeeze: the atrial kick"],
              ["<strong>PR segment</strong>", "Signal waits in the AV node"],
              ["<strong>QRS complex</strong>", "Ventricles fire (depolarize), then squeeze"],
              ["<strong>ST segment + T wave</strong>", "Ventricles reset (repolarize)"]]) +
            hy("P = atria fire. QRS = ventricles fire. T = ventricles reload.") }
      ],
      checks: [
        K("What does the QRS complex show?", "The ventricles firing (ventricular depolarization)", ["The atria firing", "The ventricles resetting", "The signal waiting in the AV node"], "QRS = ventricular depolarization. The squeeze and the pulse follow it."),
        K("Why is the P wave so much smaller than the QRS?", "The atria have much less muscle than the ventricles", ["The atria fire more slowly", "The P wave is only the AV node", "The P wave is the atria resetting"], "A small amount of muscle makes a small signal; the thick ventricles make a big one."),
        K("What is happening during the flat line between the P wave and the QRS?", "The signal is passing slowly through the AV node", ["Nothing; the heart is resting", "The ventricles are resetting", "The atria are resetting"], "The AV node is too small to draw a wave, so the line stays on the baseline while the signal waits there."),
        K("What does the T wave represent?", "Ventricular repolarization (the ventricles reloading)", ["Atrial depolarization", "Ventricular depolarization", "Atrial repolarization"], "The ST segment and T wave are the ventricles resetting. Atrial reset is hidden inside the QRS.")
      ],
      remember: [
        "<strong>Depolarize = fire</strong>; <strong>repolarize = reload</strong>.",
        "<strong>P</strong> = atria fire. <strong>Flat PR segment</strong> = waiting in the AV node.",
        "<strong>QRS</strong> = ventricles fire: tall (lots of muscle) and narrow (express lanes).",
        "<strong>ST + T</strong> = ventricles reload. The <strong>J point</strong> is where the QRS ends and the ST begins."
      ],
      practice: [
        { label: "Pattern gallery", launch: "ekg-patterns-launch", note: "Browse the drawn beats and see how each wave changes in disease. Just look for now; the quizzes make more sense after Part 3." }
      ]
    },

    /* ---------------- 3 ---------------- */
    {
      id: "learn-paper", part: "p1", title: "The graph paper", goal: "What a box means, and the three normal measurements.",
      pages: [
        { title: "The paper is a clock and a ruler", fig: { type: "paper" },
          html: "<p>EKG paper moves under the pen at a steady speed, so:</p>" +
            "<ul><li><strong>Left to right = time.</strong> The wider something is, the longer it took.</li>" +
            "<li><strong>Up and down = size</strong> (voltage). The taller something is, the more muscle made it.</li></ul>" +
            "<p>That's why we measure. A wave that's too <strong>wide</strong> means the signal was too <strong>slow</strong> somewhere. A wave that's too <strong>tall</strong> usually means <strong>extra muscle</strong>.</p>" },
        { title: "Small box 0.04 s, large box 0.20 s", fig: { type: "paper" },
          html: tbl(["Box", "Across (time)", "Up (size)"], [
              ["<strong>Small box</strong>", "<strong>0.04 s</strong>", "1 mm"],
              ["<strong>Large box</strong> (5 small)", "<strong>0.20 s</strong>", "5 mm"]]) +
            "<p><strong>5 large boxes = 1 second.</strong> To time anything, count small boxes and multiply by 0.04.</p>" +
            an("Example: 4 small boxes × 0.04 = <strong>0.16 s</strong>.") },
        { title: "PR interval: 0.12 to 0.20 s", fig: { type: "beat", labels: ["P", "R"], brackets: ["PR"], times: true },
          html: "<p>The <strong>PR interval</strong> runs from the <strong>start of the P wave</strong> to the <strong>start of the QRS</strong>. It's the whole trip from the SA node through the toll booth.</p>" +
            "<p>Normal: <strong>0.12-0.20 s</strong>, which is <strong>3 to 5 small boxes</strong>.</p>" +
            "<p><strong>If it's longer than 5 small boxes</strong>, the toll booth is slow. That's a 1st-degree AV block, which you'll meet in the AV blocks lesson.</p>" },
        { title: "QRS: under 0.12 s (less than 3 small boxes)", fig: [{ type: "beat", labels: ["R"], brackets: ["QRS"], times: true, caption: "Normal: narrow" }, { type: "beat", labels: ["R"], brackets: ["QRS"], times: true, wide: true, caption: "Wide: 0.12 s or more" }],
          html: "<p>A normal QRS is <strong>narrow</strong>: <strong>0.06-0.12 s</strong>, under 3 small boxes. That tells you the signal used the express lanes.</p>" +
            "<p>A <strong>wide</strong> QRS (3 boxes or more) means the signal took the <strong>slow way</strong>, creeping from muscle cell to muscle cell. Two main reasons:</p>" +
            "<ul><li>the beat <strong>started in the ventricle</strong> (PVC, ventricular rhythms), or</li><li>a <strong>bundle branch is blocked</strong>, so one ventricle waits its turn.</li></ul>" +
            hy("<strong>Narrow</strong> QRS = started above the ventricles. <strong>Wide</strong> QRS = started in the ventricles, or a blocked branch.") },
        { title: "QT interval: 0.36 to 0.44 s", fig: { type: "beat", labels: ["Q", "T"], brackets: ["QT"], times: true },
          html: "<p>The <strong>QT interval</strong> runs from the <strong>start of the QRS</strong> to the <strong>end of the T wave</strong>: the ventricles firing <em>and</em> reloading.</p>" +
            "<p>Normal: about <strong>0.36-0.44 s</strong> (9-11 small boxes). It shortens as the heart rate speeds up, so it's corrected for rate (the <strong>QTc</strong>).</p>" +
            "<p><strong>Why a long QT is dangerous:</strong> the reload window stays open longer. An early beat that lands in it (an \"R on T\") can set off <strong>torsades de pointes</strong>, which can turn into VF.</p>" },
        { title: "Your cheat sheet", fig: { type: "beat", labels: ["P", "Q", "R", "S", "T"], brackets: ["PR", "QRS", "QT"] },
          html: tbl(["Measure", "From → to", "Normal", "In small boxes"], [
              ["<strong>PR interval</strong>", "Start of P → start of QRS", "0.12-0.20 s", "3-5"],
              ["<strong>QRS</strong>", "Start → end of QRS", "under 0.12 s", "under 3"],
              ["<strong>QT interval</strong>", "Start of QRS → end of T", "0.36-0.44 s", "9-11"]]) +
            an("\"<strong>3 to 5</strong> for the PR, <strong>under 3</strong> for the QRS.\"") }
      ],
      checks: [
        K("A PR interval covers 6 small boxes. What is it, and is it normal?", "0.24 s, too long", ["0.24 s, normal", "0.12 s, normal", "1.2 s, too long"], "6 × 0.04 = 0.24 s. Normal PR is 0.12-0.20 s (3-5 boxes), so the toll booth is slow."),
        K("How long is one large box?", "0.20 seconds", ["0.04 seconds", "1 second", "0.10 seconds"], "5 small boxes × 0.04 s = 0.20 s, and 5 large boxes make 1 second."),
        K("A QRS is 4 small boxes wide. What does that tell you?", "It's wide (0.16 s): the signal took the slow way through the ventricles", ["It's normal (0.16 s)", "It's narrow: the express lanes were used", "The PR interval is long"], "4 × 0.04 = 0.16 s, over 0.12 s. Wide = started in the ventricle or a bundle branch is blocked."),
        K("Why is a long QT interval dangerous?", "The reload window is longer, so an early beat can trigger torsades de pointes", ["The ventricles can't fire at all", "The atria stop squeezing", "It always causes complete heart block"], "A premature beat landing on the long reload period (R on T) can start torsades, which can degenerate into VF.")
      ],
      remember: [
        "<strong>Across = time</strong>, <strong>up = size</strong>. Small box 0.04 s; large box 0.20 s; 5 large boxes = 1 second.",
        "<strong>PR 0.12-0.20 s</strong> (3-5 small boxes): longer = slow toll booth.",
        "<strong>QRS under 0.12 s</strong> (under 3 boxes): wide = ventricular start or a blocked branch.",
        "<strong>QT 0.36-0.44 s</strong>: long QT opens the door to torsades."
      ],
      practice: [
        { label: "MI locator: STEMI or not?", launch: "ekg-mi-launch", note: "Optional now: measuring practice in millimeters on drawn leads. It makes full sense after Part 3." }
      ]
    },

    /* ---------------- 4 ---------------- */
    {
      id: "learn-rate", part: "p1", title: "Counting the rate", goal: "Three ways to get the heart rate from a strip, and when to use each.",
      pages: [
        { title: "Rate = beats per minute", fig: { type: "strip", rhythm: "ekr-nsr", label: "A normal strip" },
          html: "<p>Usually you count the <strong>QRS complexes</strong>, because those are the ventricles firing, which is the pulse you'd feel.</p>" +
            tbl(["Rate", "Word"], [["under 60", "<strong>Brady</strong>cardia (slow)"], ["60-100", "Normal"], ["over 100", "<strong>Tachy</strong>cardia (fast)"]]) +
            "<p>There are three ways to count it. Which one you use depends on whether the rhythm is <strong>regular</strong>.</p>" },
        { title: "The 300 method (regular rhythms)", fig: { type: "rate", boxes: 4 },
          html: "<p>Find an R wave that sits on a <strong>thick line</strong>. Then count the thick lines until the next R wave, saying:</p>" +
            "<p class=\"lh-big\">300 · 150 · 100 · 75 · 60 · 50</p>" +
            "<p>Wherever the next R lands is your rate. In the picture, it lands on the 4th line, so the rate is about <strong>75</strong>.</p>" +
            "<p><strong>Why it works:</strong> there are 300 large boxes in a minute. If beats come every 1 box, that's 300 a minute; every 2 boxes, 150; every 3, 100; and so on.</p>" },
        { title: "Try the 300 method again", fig: [{ type: "rate", boxes: 2 }, { type: "rate", boxes: 5 }],
          html: "<p>The closer the R waves, the faster the rate. Two large boxes apart is <strong>150</strong> (fast). Five apart is <strong>60</strong> (right at the edge of slow).</p>" +
            hy("The 300 method only works when the rhythm is <strong>regular</strong>, because it uses just one R-to-R gap. If the gaps keep changing, the answer changes depending on which gap you pick.") },
        { title: "The 1500 method (more exact)", fig: { type: "rate", boxes: 4, caption: false },
          html: "<p>Count the <strong>small boxes</strong> between two R waves and divide <strong>1500</strong> by that number.</p>" +
            "<p>Here the R waves are 20 small boxes apart: <strong>1500 ÷ 20 = 75</strong>.</p>" +
            "<p><strong>Why 1500?</strong> There are 1500 small boxes in a minute (5 large boxes a second × 5 small boxes × 60 seconds).</p>" +
            "<p>For an irregular rhythm, average several gaps first.</p>" },
        { title: "The 6-second method (irregular rhythms)", fig: { type: "strip", rhythm: "ekr-af", marks: "count", label: "An irregular strip, each QRS numbered" },
          html: "<p>Count every QRS in a <strong>6-second</strong> strip and <strong>multiply by 10</strong>. (6 seconds = 30 large boxes; most strips have a mark every 3 seconds.)</p>" +
            "<p>This is the one to use when the rhythm is <strong>irregular</strong>, like atrial fibrillation, because it averages all the uneven gaps for you.</p>" +
            "<p>It's also the method the rhythm practice tools on this site use. Press \"Draw another one\" and count a few yourself.</p>" }
      ],
      checks: [
        K("A regular rhythm has R waves exactly 2 large boxes apart. What is the rate?", "150", ["75", "100", "300"], "300, 150: the second thick line is 150."),
        K("A regular rhythm has R waves 3 large boxes apart. What is the rate?", "100", ["150", "75", "60"], "300, 150, 100: the third thick line is 100."),
        K("An irregular 6-second strip has 9 QRS complexes. What is the rate?", "About 90", ["About 54", "About 150", "About 60"], "9 × 10 = 90. Count in 6 seconds and multiply by 10."),
        K("Which method should you use for an irregular rhythm like atrial fibrillation?", "Count the QRS complexes in 6 seconds and multiply by 10", ["The 300 method", "Measure one R-R gap and divide 1500 by it", "Count the P waves"], "The 300 method uses a single R-R gap, so it only works on regular rhythms.")
      ],
      remember: [
        "Normal <strong>60-100</strong>; under 60 = brady; over 100 = tachy.",
        "<strong>300 method</strong> (regular only): 300, 150, 100, 75, 60, 50 by thick lines.",
        "<strong>1500 ÷ small boxes</strong> between R waves: more exact.",
        "<strong>6-second method</strong>: QRS in 6 seconds × 10. Use it for irregular rhythms."
      ],
      practice: [
        { label: "Rhythm trainer: Read it step by step", launch: "ekg-rhythms-launch", then: "rhythm-steps", note: "Fresh strips. The first question is always the rate by the 6-second method." }
      ]
    },

    /* ---------------- 5 ---------------- */
    {
      id: "learn-method", part: "p1", title: "The five questions for every strip", goal: "A fixed routine so you never stare at a strip wondering where to start.",
      pages: [
        { title: "Same five questions, every time",
          fig: { type: "strip", rhythm: "ekr-nsr", marks: "p", label: "Normal sinus rhythm, P waves marked" },
          html: "<p>Experts don't recognize rhythms by magic. They ask the same questions in the same order, and the answers narrow it down:</p>" +
            "<ol class=\"lh-steps\"><li><strong>Regular?</strong> Are the R-to-R gaps even?</li><li><strong>Rate?</strong> Slow, normal or fast?</li><li><strong>P waves?</strong> Is there an upright P before every QRS, all the same shape?</li><li><strong>PR interval?</strong> 3-5 small boxes, and the same every time?</li><li><strong>QRS?</strong> Narrow or wide?</li></ol>" +
            "<p>Then you <strong>name it</strong>. The lecture's 8-step approach adds axis and ST segments; those are for 12-leads in Part 3.</p>" },
        { title: "Question 1: is it regular?", fig: [{ type: "strip", rhythm: "ekr-nsr", label: "Regular: every gap the same" }, { type: "strip", rhythm: "ekr-af", label: "Irregularly irregular: no pattern at all" }],
          html: "<p>Compare the gaps between R waves. Mark two R waves on the edge of a piece of paper (or use calipers) and slide it along.</p>" +
            "<ul><li><strong>Regular</strong>: all the gaps match.</li><li><strong>Regularly irregular</strong>: uneven, but in a repeating pattern (like an early beat every third beat).</li><li><strong>Irregularly irregular</strong>: no pattern at all. Think <strong>atrial fibrillation</strong> first.</li></ul>" },
        { title: "Question 2: how fast?", fig: { type: "strip", rhythm: "ekr-sb", marks: "count", label: "Slow: count and × 10" },
          html: "<p>Use the 6-second method from the last lesson. The rate sorts the possibilities quickly:</p>" +
            tbl(["Rate", "Think of"], [["20-40, wide QRS", "Ventricles pacing"], ["40-60, narrow QRS", "Junction pacing (or a slow sinus)"], ["60-100", "Normal range"], ["over 100", "A tachycardia: sinus, atrial, junctional or ventricular"]]) },
        { title: "Question 3: who is the drummer? (P waves)", fig: [{ type: "strip", rhythm: "ekr-nsr", marks: "p", label: "Sinus P: upright, round, one before every QRS" }, { type: "strip", rhythm: "ekr-flutter41", label: "No normal P: sawtooth flutter waves instead" }],
          html: "<p>The P wave tells you <strong>who's pacing</strong>.</p>" +
            "<ul><li><strong>Upright, rounded P before every QRS</strong>, all the same: the SA node is in charge (sinus).</li>" +
            "<li><strong>Odd-shaped, inverted, or missing P</strong>: somebody else is pacing (atria, junction or ventricles).</li>" +
            "<li><strong>Sawtooth</strong> or a <strong>wavy baseline</strong> instead of P waves: flutter or fibrillation.</li>" +
            "<li><strong>More P waves than QRS complexes</strong>: some signals aren't getting through the toll booth (AV block).</li></ul>" },
        { title: "Questions 4 and 5: how did it travel?", fig: [{ type: "beat", labels: ["P", "R"], brackets: ["PR"], pr: 0.3, times: true, caption: "Long PR: slow toll booth" }, { type: "beat", labels: ["R"], brackets: ["QRS"], wide: true, noP: true, times: true, caption: "Wide QRS, no P: started in the ventricle" }],
          html: "<p><strong>PR interval</strong> = the toll booth. Normal is 3-5 small boxes. Too long, or getting longer beat by beat, points to an AV block.</p>" +
            "<p><strong>QRS width</strong> = which roads it took. Narrow = came from above through the express lanes. Wide = started in the ventricle, or a bundle branch is blocked.</p>" },
        { title: "Walk through a real workbook strip", fig: { type: "workbook", id: "wb-007", caption: "Workbook strip 7" },
          html: "<p>Here are the workbook answer key's answers to the five questions for this strip:</p>" +
            tbl(["Question", "Answer key"], [["1. Regular?", "Regular"], ["2. Rate", "79"], ["3. P waves", "Sinus: upright, one before every QRS"], ["4. PR", "0.14-0.16 s (normal)"], ["5. QRS", "0.06-0.08 s (narrow)"]]) +
            "<p>Everything is normal, so the name is <strong>normal sinus rhythm</strong>. Every other rhythm is just this strip with one or more answers changed. That's how Part 2 is built.</p>" }
      ],
      checks: [
        K("Which question tells you who is pacing the heart?", "Question 3: the P waves", ["Question 1: regularity", "Question 2: rate", "Question 5: QRS width"], "An upright P before every QRS means the SA node is pacing. Odd, missing, sawtooth or wavy P waves mean something else is."),
        K("Regular, rate 75, an upright P before every QRS, PR 0.16 s, QRS 0.08 s. What is it?", "Normal sinus rhythm", ["Sinus bradycardia", "1st degree AV block", "Junctional rhythm"], "Every answer is in the normal range: regular, 60-100, sinus P, PR 0.12-0.20, narrow QRS."),
        K("The R-R gaps are uneven with no pattern at all. What should you think of first?", "Atrial fibrillation", ["Normal sinus rhythm", "1st degree AV block", "Sinus tachycardia"], "Irregularly irregular is the classic AF clue."),
        K("A strip has a wide QRS with no P waves in front of it. Where did the beat most likely start?", "In the ventricles", ["In the SA node", "In the atria", "In the AV node"], "No P (the atria didn't start it) and a wide QRS (it didn't use the express lanes) = ventricular origin.")
      ],
      remember: [
        "Every strip: <strong>Regular? Rate? P waves? PR? QRS?</strong> Then name it.",
        "<strong>Irregularly irregular</strong> → think atrial fibrillation.",
        "<strong>P waves</strong> tell you who's pacing; <strong>PR</strong> is the toll booth; <strong>QRS width</strong> tells you which roads it took.",
        "Every rhythm is normal sinus rhythm with one or more answers changed."
      ],
      practice: [
        { label: "Workbook strips: Read it step by step", launch: "ekg-workbook-launch", then: "wb-steps", note: "Real strips from your workbook, the five questions one at a time, checked against the answer key." },
        { label: "Rhythm trainer: Read it step by step", launch: "ekg-rhythms-launch", then: "rhythm-steps", note: "The same routine on freshly drawn strips." }
      ]
    }
  ];

  window.EKG_LEARN = {
    intro: "Short lessons, in order, each building on the last. One idea per page, with pictures that move. A few easy questions at the end of each lesson (they don't count for anything), then a button to the matching practice tool. If you only have 10 minutes, do one lesson.",
    parts: parts,
    lessons: lessons
  };
}());
