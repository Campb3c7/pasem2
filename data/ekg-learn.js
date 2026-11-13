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
    },

    /* ---------------- 6 ---------------- */
    {
      id: "learn-sinus", part: "p2", title: "Sinus rhythms", goal: "The SA node is still the drummer; only the speed or the steadiness changes.",
      pages: [
        { title: "Same drummer, different speeds", fig: { type: "strip", rhythm: "ekr-nsr", marks: "p", label: "Normal sinus rhythm" },
          html: "<p>In every sinus rhythm the <strong>SA node is still pacing</strong>, so three answers stay normal:</p>" +
            "<ul><li>an <strong>upright, rounded P before every QRS</strong>, all the same shape,</li><li>a <strong>normal PR</strong> (0.12-0.20 s), and</li><li>a <strong>narrow QRS</strong>.</li></ul>" +
            "<p>What changes is the <strong>rate</strong>, or whether the beat is <strong>steady</strong>. So once you see sinus P waves, the only questions left are \"how fast?\" and \"is it even?\"</p>" },
        { title: "Sinus bradycardia: under 60", fig: { type: "strip", rhythm: "ekr-sb", marks: "p" },
          html: "<p>Everything looks normal, just <strong>slower than 60</strong>. The drummer is playing slowly.</p>" +
            "<p>It can be perfectly normal, for example in a fit athlete at rest or during sleep, or it can come from something slowing the SA node down, such as medications (standard teaching).</p>" +
            hy("Sinus P before every QRS + rate under 60 = <strong>sinus bradycardia</strong>.") },
        { title: "Sinus tachycardia: 100 to 160", fig: { type: "strip", rhythm: "ekr-st", marks: "p" },
          html: "<p>Everything looks normal, just <strong>faster than 100</strong> (up to about 160). The P waves are still clearly visible in front of each QRS.</p>" +
            "<p><strong>Why it happens:</strong> the body is asking for more blood flow, so the SA node speeds up, as with exercise, fever, pain, anxiety or blood loss (standard teaching). Treat the cause, not the rhythm.</p>" +
            "<p>A very fast rate shortens the time the ventricles have to fill, and the QT may shorten a little.</p>" },
        { title: "Sinus arrhythmia: speeds up and slows down", fig: { type: "strip", rhythm: "ekr-sa", marks: "p" },
          html: "<p>The drummer <strong>speeds up and slows down in waves</strong>. Every beat is still a normal sinus beat, but the gaps between them change.</p>" +
            "<p>The rule from the lecture: the <strong>PP interval varies by 0.12 s or more</strong> (3 small boxes). The rate is usually 60-100.</p>" +
            "<p>It commonly follows breathing, speeding up as you breathe in (standard teaching), and is common and harmless in young people.</p>" },
        { title: "Sinus arrest or pause: the drummer skips", fig: { type: "strip", rhythm: "ekr-pause", marks: "p" },
          html: "<p>The SA node <strong>fails to fire</strong> for a moment. You see a <strong>gap with no P and no QRS</strong>, then normal sinus beats start again.</p>" +
            "<p>Before and after the pause, every beat is a normal sinus beat. The study guide calls it \"regular with an irregular beat\": a break in the rhythm during the pause.</p>" },
        { title: "The sinus family at a glance", fig: { type: "heart", on: ["sa"] },
          html: tbl(["Rhythm", "Rate", "Regular?", "The clue"], [
              ["<strong>Normal sinus rhythm</strong>", "60-100", "Yes", "Everything normal"],
              ["<strong>Sinus bradycardia</strong>", "under 60", "Yes", "Normal but slow"],
              ["<strong>Sinus tachycardia</strong>", "100-160", "Yes", "Normal but fast"],
              ["<strong>Sinus arrhythmia</strong>", "60-100", "No", "Speeds up and slows down; PP varies ≥ 0.12 s"],
              ["<strong>Sinus arrest/pause</strong>", "Underlying", "Except the pause", "A gap with no P and no QRS"]]) }
      ],
      checks: [
        K("Regular, upright P before every QRS, PR 0.16 s, narrow QRS, rate 48. What is it?", "Sinus bradycardia", ["Normal sinus rhythm", "Junctional rhythm", "1st degree AV block"], "Everything is sinus and normal except the rate, which is under 60."),
        K("Regular, upright P before every QRS, narrow QRS, rate 125. What is it?", "Sinus tachycardia", ["Atrial flutter", "Ventricular tachycardia", "Sinus arrhythmia"], "Sinus P waves are visible in front of each QRS; only the rate is high (100-160)."),
        K("All the beats look like normal sinus beats, but the rhythm speeds up and slows down in waves. What is it?", "Sinus arrhythmia", ["Sinus arrest", "Atrial fibrillation", "Wandering atrial pacemaker"], "Same normal P waves, with a PP interval that varies by 0.12 s or more. AF has no P waves; WAP has 3+ P shapes."),
        K("Normal sinus beats, then a gap with no P wave and no QRS, then normal sinus beats again. What is it?", "Sinus arrest/pause", ["2nd degree AV block type II", "A PVC", "Sinus bradycardia"], "The SA node didn't fire at all, so there's no P. In an AV block you would see a P with no QRS after it.")
      ],
      remember: [
        "Sinus = <strong>upright P before every QRS</strong>, normal PR, narrow QRS. Only rate or steadiness changes.",
        "<strong>Brady under 60</strong>, <strong>NSR 60-100</strong>, <strong>tachy 100-160</strong>.",
        "<strong>Sinus arrhythmia</strong>: speeds up and slows down (PP varies ≥ 0.12 s).",
        "<strong>Sinus pause</strong>: a gap with <strong>no P</strong> (the SA node didn't fire)."
      ],
      practice: [
        { label: "Rhythm trainer", launch: "ekg-rhythms-launch", note: "Open \"Sinus rhythms\" and press New strip a few times for each one." },
        { label: "Workbook strips", launch: "ekg-workbook-launch", note: "Tap the \"Sinus rhythms\" filter, then Name that strip." }
      ]
    },

    /* ---------------- 7 ---------------- */
    {
      id: "learn-atrial", part: "p2", title: "Atrial rhythms", goal: "Something in the atria other than the SA node takes over, so the P waves change.",
      pages: [
        { title: "A new drummer in the atria", fig: { type: "strip", rhythm: "ekr-pac", marks: "p", label: "Normal beats plus one early atrial beat" },
          html: "<p>Sometimes a spot in the atria <strong>other than the SA node</strong> (an <strong>ectopic focus</strong>) starts firing.</p>" +
            "<ul><li>The <strong>P wave changes</strong>: the spark starts in a different place, so it crosses the atria by a different route and draws a different shape (pointed, flat or upside down).</li>" +
            "<li>The <strong>QRS stays narrow</strong>: once the signal gets through the AV node, it uses the normal express lanes.</li></ul>" +
            hy("Atrial rhythms: <strong>odd, extra, or missing P waves</strong>, but a <strong>narrow QRS</strong>.") +
            "<p><strong>Why they matter:</strong> fast atrial rhythms shorten filling time and weaken the atrial kick, so cardiac output drops.</p>" },
        { title: "PAC: one early atrial beat", fig: { type: "strip", rhythm: "ekr-pac", marks: "p" },
          html: "<p>A <strong>premature atrial contraction</strong> is a single beat that comes <strong>early</strong>, with its own <strong>odd-looking P</strong>, followed by a <strong>normal narrow QRS</strong>. Then the normal rhythm carries on.</p>" +
            "<p>It's an early <em>beat</em>, not a rhythm. Common triggers include caffeine, alcohol, pregnancy, hypoxia, electrolyte problems and digoxin toxicity. In a healthy heart, PACs don't matter (they may feel like a skipped beat).</p>" },
        { title: "Atrial tachycardia: the focus fires fast", fig: { type: "strip", rhythm: "ekr-atach" },
          html: "<p>The ectopic focus fires <strong>fast, usually 160-250</strong>, and overrides the SA node. The rhythm is regular and the QRS is narrow.</p>" +
            "<p>At that speed the P waves are often <strong>buried in the T wave</strong> before them. When you can't tell whether a fast, narrow rhythm is atrial or junctional, it gets the umbrella name <strong>SVT</strong> (supraventricular tachycardia).</p>" },
        { title: "WAP and MAT: the drummer keeps moving", fig: [{ type: "strip", rhythm: "ekr-wap", marks: "p" }, { type: "strip", rhythm: "ekr-mat", marks: "p" }],
          html: "<p>Here the pacemaker <strong>wanders</strong> between several spots, so the P waves come in <strong>3 or more different shapes</strong> (one before each QRS), and the rhythm is irregular.</p>" +
            tbl(["", "Rate", "Note"], [["<strong>Wandering atrial pacemaker</strong>", "<strong>60-100</strong>", "Can be normal; also drug toxicity (digitalis)"], ["<strong>Multifocal atrial tachycardia</strong>", "<strong>100-160</strong>", "Classic with a <strong>COPD exacerbation</strong>; often mistaken for AF"]]) +
            hy("Same picture, different speed: <strong>under 100 = WAP</strong>, <strong>over 100 = MAT</strong>.") },
        { title: "Atrial flutter: one loop, going round and round", fig: [{ type: "strip", rhythm: "ekr-flutter21", label: "Flutter, 2:1" }, { type: "strip", rhythm: "ekr-flutter41", label: "Flutter, 4:1" }],
          html: "<p>In flutter, a signal gets stuck running in a <strong>loop</strong> around the atria (reentry), firing them <strong>250-350 times a minute</strong>. Each lap draws one flutter wave, so the baseline looks like a <strong>sawtooth</strong>.</p>" +
            "<p>The toll booth can't let all of those through, so only every 2nd, 3rd or 4th one reaches the ventricles (a <strong>2:1, 3:1 or 4:1</strong> conduction ratio). That's why the QRS rate is much slower than the flutter rate.</p>" },
        { title: "Atrial fibrillation: the atria quiver", fig: { type: "strip", rhythm: "ekr-af" },
          html: "<p>In AF, <strong>many tiny loops</strong> fire chaotically all over the atria (over 350 a minute). The atria don't squeeze; they <strong>quiver</strong>. So there's <strong>no real P wave</strong>, just a <strong>wavy, chaotic baseline</strong>.</p>" +
            "<p>The AV node is bombarded and lets signals through at random, so the QRS rhythm is <strong>irregularly irregular</strong>. If the ventricular rate is over 100, that's AF with <strong>rapid ventricular response (RVR)</strong>.</p>" +
            hy("<strong>Why blood thinners?</strong> Quivering atria don't empty, so blood pools (especially in the left atrial appendage) and can clot. A clot that breaks off can cause a <strong>stroke</strong>. AF also loses the atrial kick.") },
        { title: "The atrial family at a glance", fig: { type: "heart", on: ["atria"] },
          html: tbl(["Rhythm", "Rate", "The clue"], [
              ["<strong>PAC</strong>", "Underlying", "One early beat with an odd P, narrow QRS"],
              ["<strong>Atrial tachycardia</strong>", "160-250", "Fast, regular, P often hidden in the T"],
              ["<strong>WAP</strong>", "60-100", "3+ P shapes, irregular"],
              ["<strong>MAT</strong>", "100-160", "3+ P shapes, irregular, fast"],
              ["<strong>Atrial flutter</strong>", "Atria 250-350", "Sawtooth"],
              ["<strong>Atrial fibrillation</strong>", "Atria over 350", "No P, wavy baseline, irregularly irregular"]]) }
      ],
      checks: [
        K("The baseline looks like the teeth of a saw between narrow QRS complexes. What is it?", "Atrial flutter", ["Atrial fibrillation", "Multifocal atrial tachycardia", "Ventricular fibrillation"], "Each sawtooth wave is one lap of the loop around the atria (250-350 a minute)."),
        K("Irregularly irregular, narrow QRS, no P waves, wavy baseline. What is it?", "Atrial fibrillation", ["Atrial flutter", "Sinus arrhythmia", "Wandering atrial pacemaker"], "No P + wavy baseline + no pattern at all = AF."),
        K("Why are patients with atrial fibrillation often put on blood thinners?", "The quivering atria don't empty, so blood pools and can clot", ["The ventricular rate is over 200", "The QRS becomes wide", "The SA node stops working"], "Pooled blood (especially in the left atrial appendage) can clot and travel to the brain."),
        K("Irregular, narrow QRS, rate 130, and at least three different P wave shapes. What is it?", "Multifocal atrial tachycardia", ["Wandering atrial pacemaker", "Atrial fibrillation", "Sinus tachycardia"], "3+ P shapes = WAP or MAT. Over 100 = MAT."),
        K("One beat comes early with an odd-shaped P wave and a normal narrow QRS. What is it?", "A PAC", ["A PVC", "A sinus pause", "A dropped beat"], "Early beat + its own P + narrow QRS = premature atrial contraction.")
      ],
      remember: [
        "Atrial rhythms: the <strong>P wave changes</strong> (odd, extra, sawtooth or gone) but the <strong>QRS stays narrow</strong>.",
        "<strong>PAC</strong> = one early beat with an odd P. <strong>Atrial tach</strong> = 160-250, P hidden in the T.",
        "3+ P shapes: <strong>WAP under 100</strong>, <strong>MAT over 100</strong> (COPD).",
        "<strong>Flutter</strong> = sawtooth (one loop). <strong>AF</strong> = no P, wavy, irregularly irregular; clots → anticoagulate."
      ],
      practice: [
        { label: "Look-alikes & study guide", launch: "ekg-compare-launch", note: "Flutter vs AF, WAP vs MAT, and more, side by side with the one question that splits them." },
        { label: "Rhythm trainer", launch: "ekg-rhythms-launch", note: "Open \"Atrial rhythms\" and draw a few of each." }
      ]
    },

    /* ---------------- 8 ---------------- */
    {
      id: "learn-junctional", part: "p2", title: "Junctional rhythms", goal: "The AV junction paces from the middle, so the P wave goes backward or hides.",
      pages: [
        { title: "When the junction takes over", fig: { type: "heart", on: ["av", "atria", "his", "bb", "purk", "vent"] },
          html: "<p>If the SA node is suppressed (hypoxia, ischemia, MI or drug toxicity, for example), the <strong>AV junction</strong> takes over as the drummer at its own rate, <strong>40-60</strong>.</p>" +
            "<p>Because it fires from the <strong>middle</strong> of the heart, the signal goes two ways at once:</p>" +
            "<ul><li><strong>Down</strong> to the ventricles the normal way, so the <strong>QRS is narrow</strong>.</li>" +
            "<li><strong>Up</strong> into the atria <strong>backward</strong> (retrograde), so the <strong>P wave is upside down</strong>.</li></ul>" +
            "<p>The atria and ventricles squeeze at about the same time, so the atrial kick is lost.</p>" },
        { title: "Where did the P wave go?", fig: [{ type: "beat", labels: ["P", "R"], invP: true, pr: 0.09, caption: "Inverted P just before (short PR)" }, { type: "beat", labels: ["R"], noP: true, caption: "Hidden inside the QRS" }, { type: "beat", labels: ["R", "P"], pAfter: true, caption: "Inverted P after the QRS" }],
          html: "<p>It depends on which gets the signal first, the atria or the ventricles:</p>" +
            "<ul><li><strong>Atria first</strong>: an inverted P just <strong>before</strong> the QRS, with a <strong>short PR</strong>.</li>" +
            "<li><strong>Both at once</strong>: the P is <strong>hidden inside the QRS</strong>, so you see no P.</li>" +
            "<li><strong>Ventricles first</strong>: an inverted P <strong>after</strong> the QRS.</li></ul>" +
            hy("<strong>Narrow QRS</strong> + P that is <strong>inverted, missing, or after the QRS</strong> = junctional.") },
        { title: "Named by rate", fig: [{ type: "strip", rhythm: "ekr-jr", label: "Junctional (escape) rhythm, 40-60" }, { type: "strip", rhythm: "ekr-ajr", label: "Accelerated junctional, 60-100" }],
          html: tbl(["Rhythm", "Rate"], [
              ["<strong>Junctional bradycardia</strong>", "under 40"],
              ["<strong>Junctional (escape) rhythm</strong>", "<strong>40-60</strong>, the junction's home rate"],
              ["<strong>Accelerated junctional rhythm</strong>", "60-100"],
              ["<strong>Junctional tachycardia</strong>", "100-180"]]) +
            "<div class=\"box-mnemonic\"><span class=\"lbl\">Mnemonic</span>The junction's home rate is <strong>40-60</strong>. Below it = brady; above it up to 100 = accelerated; over 100 = tachy.</div>" +
            "<p>All are regular with a narrow QRS. Only the rate changes the name.</p>" },
        { title: "PJC: one early junctional beat", fig: { type: "strip", rhythm: "ekr-pjc", marks: "p" },
          html: "<p>A <strong>premature junctional complex</strong> is one early beat from the junction: an early <strong>narrow</strong> QRS with an <strong>inverted, hidden, or after-the-QRS P</strong>.</p>" +
            "<p>Compare it with a PAC: both are early and narrow, but a PAC has an upright (just odd-shaped) P in front, while a PJC's P is inverted or missing.</p>" +
            "<p>More than 4-6 a minute deserves a closer look. Causes include digoxin toxicity, caffeine and an inferior MI.</p>" }
      ],
      checks: [
        K("Regular, narrow QRS, rate 50, an inverted P wave just before each QRS with a short PR. What is it?", "Junctional (escape) rhythm", ["Sinus bradycardia", "Idioventricular rhythm", "1st degree AV block"], "Inverted P + narrow QRS = junctional, and 40-60 is the junction's own rate."),
        K("Same picture as a junctional rhythm, but the rate is 85. What is it called?", "Accelerated junctional rhythm", ["Junctional tachycardia", "Normal sinus rhythm", "Junctional bradycardia"], "The junction's home rate is 40-60; 60-100 is accelerated; over 100 is tachycardia."),
        K("Why is the P wave upside down in a junctional rhythm?", "The signal travels up through the atria backward (retrograde)", ["The atria are enlarged", "The SA node fires twice", "The ventricles fire first every time"], "The spark starts in the middle and spreads upward, the opposite of normal, so the P flips."),
        K("Why is the QRS still narrow in a junctional rhythm?", "The signal still goes down the His bundle and bundle branches normally", ["The ventricles are smaller than usual", "The AV node speeds up conduction", "There is no QRS in junctional rhythms"], "Only the start point moved. Below the junction, the express lanes work as usual.")
      ],
      remember: [
        "Junctional = <strong>narrow QRS</strong> + P that's <strong>inverted, hidden, or after the QRS</strong>.",
        "The P flips because the atria are fired <strong>backward</strong> (retrograde).",
        "Home rate <strong>40-60</strong> (escape); under 40 brady; 60-100 accelerated; over 100 tachy.",
        "<strong>PJC</strong> = one early narrow beat with an inverted or hidden P."
      ],
      practice: [
        { label: "Rhythm trainer", launch: "ekg-rhythms-launch", note: "Open \"Junctional rhythms\" and look for where the P went on each strip." },
        { label: "Look-alikes & study guide", launch: "ekg-compare-launch", note: "PAC vs PJC, and the junctional family by rate." }
      ]
    },

    /* ---------------- 9 ---------------- */
    {
      id: "learn-ventricular", part: "p2", title: "Ventricular rhythms", goal: "The ventricles start the beat themselves: wide, bizarre, and often dangerous.",
      pages: [
        { title: "When the ventricles start the beat", fig: { type: "beat", labels: ["R", "T"], wide: true, noP: true, brackets: ["QRS"], times: true },
          html: "<p>When the beat starts in the ventricle muscle itself, two things happen:</p>" +
            "<ul><li><strong>No P wave</strong>: the atria didn't start it.</li>" +
            "<li>A <strong>wide, bizarre QRS</strong> (0.12 s or more): the signal can't use the express lanes, so it creeps from cell to cell. The T wave often points the opposite way.</li></ul>" +
            hy("<strong>Wide and bizarre, no P</strong> = think ventricular.") +
            "<p><strong>Why they're dangerous:</strong> the ventricles squeeze out of step, so less blood gets pumped. Most ventricular rhythms are potentially life-threatening.</p>" },
        { title: "PVC: one early wide beat", fig: [{ type: "strip", rhythm: "ekr-pvc", label: "Normal beats plus a PVC" }, { type: "strip", rhythm: "ekr-bigeminy", label: "Bigeminy: every other beat is a PVC" }],
          html: "<p>A <strong>premature ventricular contraction</strong> is one <strong>early, wide, bizarre</strong> beat with no P in front, from an irritable spot in the ventricle.</p>" +
            "<p>In ischemia, these PVCs warn that a dangerous rhythm may follow:</p>" +
            "<ul><li><strong>Frequent</strong>: many per minute.</li><li><strong>Multifocal</strong>: different shapes, so more than one irritable spot.</li><li><strong>Early (R on T)</strong>: lands on the T wave before it.</li><li><strong>Grouped</strong>: bigeminy (every other beat), trigeminy (every third), couplets, runs.</li></ul>" +
            "<p>The least worrying kind: occasional <strong>unifocal</strong> PVCs (all the same shape).</p>" },
        { title: "The slow ones: last-resort backups", fig: [{ type: "strip", rhythm: "ekr-idio", label: "Idioventricular rhythm, 20-40" }, { type: "strip", rhythm: "ekr-aivr", label: "Accelerated idioventricular rhythm, 40-100" }],
          html: "<p>If the SA node and the junction both fail, the ventricles pace themselves at <strong>20-40</strong>: <strong>idioventricular rhythm</strong>. It's regular and wide with no P. It's the last backup drummer, an <strong>agonal</strong> rhythm with little to no output.</p>" +
            "<p>The same picture at <strong>40-100</strong> is <strong>accelerated idioventricular rhythm (AIVR)</strong>. It's classic <strong>after an MI or after clot-busting drugs</strong> (reperfusion). The patient may look fine, but it's still considered unstable.</p>" },
        { title: "Ventricular tachycardia", fig: [{ type: "strip", rhythm: "ekr-vt", label: "VT (monomorphic)" }, { type: "strip", rhythm: "ekr-torsades", label: "Torsades de pointes" }],
          html: "<p><strong>VT</strong>: wide, regular, <strong>100-250</strong>, no P waves. It comes in bursts or is sustained, <strong>with or without a pulse</strong>. Always treat it as serious.</p>" +
            "<p><strong>Torsades de pointes</strong> is a polymorphic VT whose QRS complexes <strong>twist around the baseline</strong>, getting taller and shorter. It's the danger of a <strong>long QT</strong> (lesson 3).</p>" },
        { title: "VF and asystole", fig: [{ type: "strip", rhythm: "ekr-vf", label: "Ventricular fibrillation" }, { type: "strip", rhythm: "ekr-asys", label: "Asystole" }],
          html: "<p><strong>Ventricular fibrillation</strong>: chaotic firing all over the ventricles, so they <strong>quiver</strong> and pump nothing. You see a wavy line with no real QRS. It's the most common cause of cardiac arrest outside the hospital in adults. Treatment: <strong>prompt defibrillation</strong>.</p>" +
            "<p><strong>Asystole</strong>: no electrical activity at all, a flat line. It is almost always terminal, and it is <strong>not shockable</strong>.</p>" },
        { title: "The ventricular family at a glance", fig: { type: "heart", on: ["vent"] },
          html: tbl(["Rhythm", "Rate", "The clue"], [
              ["<strong>PVC</strong>", "Underlying", "One early wide beat, no P"],
              ["<strong>Idioventricular</strong>", "20-40", "Slow, wide, regular"],
              ["<strong>AIVR</strong>", "40-100", "Wide, regular; after MI or reperfusion"],
              ["<strong>VT</strong>", "100-250", "Fast, wide, regular"],
              ["<strong>Torsades</strong>", "Fast", "Wide, twisting; long QT"],
              ["<strong>VF</strong>", "None", "Chaotic wavy line; shock"],
              ["<strong>Asystole</strong>", "None", "Flat line; not shockable"]]) }
      ],
      checks: [
        K("Wide QRS complexes at 180, regular, no P waves. What is it?", "Ventricular tachycardia", ["Sinus tachycardia", "Atrial flutter", "Accelerated idioventricular rhythm"], "Wide + fast (100-250) + no P = VT until proven otherwise."),
        K("A chaotic, wavy line with no recognizable QRS complexes. What is it, and what does it need?", "Ventricular fibrillation; prompt defibrillation", ["Asystole; defibrillation", "Atrial fibrillation; a blood thinner", "Torsades; observation"], "VF = the ventricles quiver and pump nothing. It's shockable; asystole is not."),
        K("Regular, wide QRS complexes at 32 per minute with no P waves. What is it?", "Idioventricular rhythm", ["Junctional rhythm", "Sinus bradycardia", "Ventricular tachycardia"], "The ventricles' own rate is 20-40, and the QRS is wide because they started the beat."),
        K("Which kind of PVC is the least worrying?", "Occasional unifocal PVCs", ["Multifocal PVCs", "R-on-T PVCs", "PVCs in couplets"], "Multifocal, early (R on T), frequent and grouped PVCs all warn of a dangerous rhythm. Occasional same-shaped ones are the least concerning.")
      ],
      remember: [
        "Ventricular = <strong>wide, bizarre QRS, no P</strong> (the signal crept cell to cell).",
        "<strong>PVC</strong> = one early wide beat; worry if frequent, multifocal, R on T, or grouped.",
        "By rate: <strong>idioventricular 20-40</strong>, <strong>AIVR 40-100</strong>, <strong>VT 100-250</strong>.",
        "<strong>Torsades</strong> twists (long QT). <strong>VF</strong> = chaos, shock it. <strong>Asystole</strong> = flat, not shockable."
      ],
      practice: [
        { label: "Rhythm trainer", launch: "ekg-rhythms-launch", note: "Open \"Ventricular rhythms\" and \"Early beats\"." },
        { label: "Look-alikes & study guide", launch: "ekg-compare-launch", note: "Idioventricular vs AIVR vs VT, and VF vs asystole." }
      ]
    },

    /* ---------------- 10 ---------------- */
    {
      id: "learn-blocks", part: "p2", title: "AV blocks", goal: "The toll booth gets slow, tired, or closes completely.",
      pages: [
        { title: "Back to the toll booth", fig: { type: "heart", on: ["sa", "atria", "av"] },
          html: "<p>In an AV block, the SA node fires normally, so the <strong>P waves are normal and on time</strong>. The trouble is getting through the AV node and the wires below it.</p>" +
            "<p>For every block, look at two things:</p><ul><li>Is there a <strong>QRS after every P</strong>?</li><li>What is the <strong>PR interval</strong> doing: long, getting longer, or all over the place?</li></ul>" +
            "<p>Causes include ischemia or MI, degeneration of the conduction system, congenital problems and medications (especially digitalis).</p>" },
        { title: "1st degree: every car gets through, slowly", fig: [{ type: "beat", labels: ["P", "R"], brackets: ["PR"], pr: 0.3, times: true }, { type: "strip", rhythm: "ekr-avb1", marks: "p" }],
          html: "<p>Every P is followed by a QRS, but the <strong>PR is longer than 0.20 s</strong> (more than 5 small boxes), and it's the <strong>same length every beat</strong>.</p>" +
            "<p>Nothing is actually blocked; it's just slow. It's usually harmless, but it can progress, especially with an inferior MI.</p>" },
        { title: "2nd degree type I (Wenckebach): longer, longer, drop", fig: { type: "strip", rhythm: "ekr-avb2i", marks: "p" },
          html: "<p>The toll booth gets more and more <strong>tired</strong>: the <strong>PR gets longer with each beat</strong> until one P <strong>doesn't get through</strong> (no QRS after it). Then the PR resets and the cycle repeats.</p>" +
            "<div class=\"box-mnemonic\"><span class=\"lbl\">Mnemonic</span>\"<strong>Longer, longer, longer, drop</strong>: now you've got a Wenckebach.\"</div>" +
            "<p>The block is <strong>at the AV node</strong>. It's often seen with an acute <strong>inferior MI</strong> and can be temporary.</p>" },
        { title: "2nd degree type II: sudden drops", fig: { type: "strip", rhythm: "ekr-avb2ii", marks: "p" },
          html: "<p>The PR is <strong>constant</strong> on every conducted beat, then <strong>suddenly</strong> a P has no QRS after it, with no warning lengthening first.</p>" +
            "<p>The block is <strong>lower</strong>, in the His bundle or bundle branches, so the QRS may be wide. It's associated with an <strong>anterior wall MI</strong>.</p>" +
            hy("Type II is <strong>more dangerous</strong> than type I: it more often progresses to complete heart block or asystole.") },
        { title: "3rd degree: the toll booth is closed", fig: { type: "strip", rhythm: "ekr-avb3", marks: "p" },
          html: "<p>No signals get through. The atria keep beating to the SA node, and a <strong>backup drummer below the block</strong> paces the ventricles. The two run <strong>independently</strong>.</p>" +
            "<ul><li><strong>More P waves than QRS complexes</strong>, and the P waves <strong>march through</strong> at their own steady rate, even landing on the QRS or T.</li><li>The PR is all over the place because there is no real relationship.</li></ul>" +
            "<p>The ventricular rate depends on the backup: <strong>narrow at 40-60</strong> if the junction is pacing, <strong>wide at 20-40</strong> if the ventricles are (more emergent). All forms are potentially life-threatening.</p>" },
        { title: "The four blocks at a glance", fig: { type: "heart", on: ["av", "his", "bb"] },
          html: tbl(["Block", "PR", "Dropped QRS?"], [
              ["<strong>1st degree</strong>", "Constant, over 0.20 s", "No"],
              ["<strong>2nd degree type I</strong>", "Gets <strong>longer</strong> each beat", "Yes, then the PR resets"],
              ["<strong>2nd degree type II</strong>", "<strong>Constant</strong>", "Yes, suddenly"],
              ["<strong>3rd degree</strong>", "<strong>No relationship</strong>", "P waves and QRS are independent"]]) +
            '<div class="box-mnemonic"><span class="lbl">Picture it</span>1st = slow toll booth. Type I = a tired toll booth that takes a break. Type II = a gate that slams shut without warning. 3rd = closed, and a backup drummer runs the ventricles.</div>' }
      ],
      checks: [
        K("The PR gets longer with each beat until a P wave has no QRS after it, then the pattern repeats. What is it?", "2nd degree AV block type I (Wenckebach)", ["2nd degree AV block type II", "1st degree AV block", "3rd degree AV block"], "Longer, longer, longer, drop = Wenckebach."),
        K("Every P is followed by a QRS, and the PR is always 0.32 s. What is it?", "1st degree AV block", ["Normal sinus rhythm", "2nd degree AV block type I", "Junctional rhythm"], "Constant PR over 0.20 s with no dropped beats = 1st degree."),
        K("The PR is constant, then suddenly a P wave is not followed by a QRS. What is it?", "2nd degree AV block type II", ["2nd degree AV block type I", "Sinus arrest", "1st degree AV block"], "No warning lengthening before the drop = type II."),
        K("P waves march through at their own regular rate, with no relationship to the slower QRS complexes. What is it?", "3rd degree (complete) AV block", ["2nd degree AV block type II", "Atrial flutter", "Sinus bradycardia"], "Atria and ventricles beat independently: complete heart block."),
        K("Which second-degree block is more dangerous?", "Type II", ["Type I (Wenckebach)", "They're equally dangerous", "Neither is ever dangerous"], "Type II is lower in the system and more often progresses to complete heart block or asystole.")
      ],
      remember: [
        "AV blocks: the <strong>P waves are normal</strong>; ask whether every P gets a QRS, and what the PR is doing.",
        "<strong>1st</strong> = PR over 0.20 s, constant, nothing dropped.",
        "<strong>Type I</strong> = longer, longer, drop. <strong>Type II</strong> = constant PR, sudden drop (more dangerous).",
        "<strong>3rd</strong> = P waves march through, unrelated to the QRS; a backup drummer paces the ventricles."
      ],
      practice: [
        { label: "Look-alikes & study guide", launch: "ekg-compare-launch", note: "The AV blocks side by side: the one question that splits them is what the PR does." },
        { label: "Rhythm trainer", launch: "ekg-rhythms-launch", note: "Open \"AV blocks\" and draw several of each until the PR pattern jumps out." },
        { label: "Workbook strips", launch: "ekg-workbook-launch", note: "Tap the \"AV blocks\" filter, then Name that strip." }
      ]
    },

    /* ---------------- 11 ---------------- */
    {
      id: "learn-leads", part: "p3", title: "Leads and the axis", goal: "Twelve cameras on one heartbeat, and which way the spark points overall.",
      pages: [
        { title: "Twelve cameras, one heartbeat", fig: { type: "twelve" },
          html: "<p>A rhythm strip is one view. A <strong>12-lead EKG</strong> uses <strong>10 stickers</strong> to record the same heartbeat from <strong>12 angles</strong>. Think of 12 cameras around the heart.</p>" +
            "<p>One rule explains why the same beat looks different in each lead:</p>" +
            hy("Spark moving <strong>toward</strong> a lead's positive electrode = <strong>upright</strong> wave. Moving <strong>away</strong> = <strong>downward</strong> wave.") +
            "<p>That's why <strong>aVR</strong> (looking from the right shoulder) is normally <strong>upside down</strong>: the spark travels away from it, down and to the left.</p>" },
        { title: "Two sets of cameras", fig: { type: "leadmap" },
          html: tbl(["", "Limb leads", "Chest (precordial) leads"], [
              ["Leads", "I, II, III, aVR, aVL, aVF", "V1-V6"],
              ["They look", "From the <strong>front</strong>: up/down and left/right", "<strong>Around</strong> the chest, from front to side"],
              ["Stickers", "Arms and left leg", "V1-V2 beside the sternum (4th space), V4 midclavicular, V5 anterior axillary, V6 midaxillary (5th space)"]]) +
            "<p>On the printout, the leads sit in a fixed grid: I, II, III down the first column, aVR, aVL, aVF in the second, then V1-V6.</p>" },
        { title: "Which wall each camera sees", fig: { type: "leadmap" },
          html: tbl(["Wall", "Leads"], [
              ["<strong>Inferior</strong> (bottom)", "<strong>II, III, aVF</strong>"],
              ["<strong>Lateral</strong> (left side)", "<strong>I, aVL, V5, V6</strong>"],
              ["<strong>Septal</strong>", "<strong>V1, V2</strong>"],
              ["<strong>Anterior</strong> (front)", "<strong>V3, V4</strong>"],
              ["Posterior (back)", "Only V7-V9 on a 15-lead; mirror image in V1-V3"]]) +
            '<div class="box-mnemonic"><span class="lbl">Mnemonic</span>"<strong>SAL</strong>t is bad for the heart": across V1-V6 it\'s <strong>S</strong>eptal, <strong>A</strong>nterior, <strong>L</strong>ateral. And II, III, aVF make the <strong>inferior triangle</strong> in the lower left of the printout.</div>' +
            "<p>This map is the whole key to finding a heart attack in the next lesson.</p>" },
        { title: "The axis: the spark's overall direction", fig: { type: "axis", angle: 60, leads: false },
          html: "<p>Add up all the little sparks of one heartbeat and you get one overall arrow: the <strong>electrical axis</strong>.</p>" +
            "<p>Normally it points <strong>down and to the patient's left</strong>, between <strong>0° and +90°</strong>. <strong>Why?</strong> The left ventricle has much more muscle than the right, so its forces win the tug-of-war.</p>" },
        { title: "Read it with two leads: thumbs up or down", fig: { type: "axis", angle: -45 },
          html: "<p>Look only at <strong>lead I</strong> and <strong>aVF</strong>. Is the QRS mostly up or mostly down in each?</p>" +
            tbl(["Lead I", "aVF", "Axis"], [["Up", "Up", "<strong>Normal</strong>"], ["Up", "Down", "<strong>Left</strong> axis deviation"], ["Down", "Up", "<strong>Right</strong> axis deviation"], ["Down", "Down", "<strong>Extreme</strong>"]]) +
            '<div class="box-mnemonic"><span class="lbl">Mnemonic</span>Make two thumbs (left = lead I, right = aVF). Both up = normal. Thumbs <strong>leaving</strong> each other (I up, aVF down) = <strong>left</strong>. Thumbs <strong>reaching</strong> toward each other (I down, aVF up) = <strong>right</strong>.</div>' +
            "<p>The example above: lead I up, aVF down, so this is left axis deviation.</p>" },
        { title: "What swings the axis", fig: { type: "axis", angle: 120 },
          html: hy("The axis goes <strong>toward extra muscle</strong> (hypertrophy) and <strong>away from dead muscle</strong> (infarct, which has no electrical force).") +
            tbl(["Cause", "Axis"], [
              ["RV hypertrophy, thin people, children", "<strong>Right</strong>"],
              ["LV hypertrophy; pregnancy or abdominal obesity (diaphragm pushes the heart sideways)", "<strong>Left</strong>"],
              ["Left anterior hemiblock / left posterior hemiblock", "<strong>Left</strong> / <strong>right</strong>"]]) +
            "<p>The example above is right axis deviation: lead I down, aVF up.</p>" }
      ],
      checks: [
        K("Which leads look at the inferior wall?", "II, III, aVF", ["I, aVL, V5, V6", "V1, V2", "V3, V4"], "The inferior triangle in the lower left of the printout."),
        K("Lead I is upright and aVF is negative. What is the axis?", "Left axis deviation", ["Normal axis", "Right axis deviation", "Extreme axis deviation"], "Thumbs leaving each other = left."),
        K("A patient has right ventricular hypertrophy. Which way will the axis shift?", "Right", ["Left", "It won't change", "Extreme"], "The axis moves toward the extra muscle."),
        K("Why does the normal axis point down and to the left?", "The left ventricle has more muscle, so its forces dominate", ["The SA node is on the left", "The heart sits on the right side of the chest", "aVR is negative"], "More muscle, more electrical force: the LV wins."),
        K("Which lead is normally upside down on a normal EKG?", "aVR", ["Lead II", "aVF", "V6"], "aVR looks from the right shoulder, and the spark travels away from it.")
      ],
      remember: [
        "Spark <strong>toward</strong> a lead = upright; <strong>away</strong> = down. aVR is normally negative.",
        "<strong>Inferior II, III, aVF</strong>. <strong>Lateral I, aVL, V5, V6</strong>. <strong>Septal V1-V2</strong>, <strong>anterior V3-V4</strong> (SAL).",
        "Axis from <strong>lead I + aVF</strong>: both up normal; leaving = left; reaching = right.",
        "Axis goes <strong>toward hypertrophy</strong>, <strong>away from infarct</strong>."
      ],
      practice: [
        { label: "Axis trainer", launch: "ekg-axis-launch", note: "Start with \"Lead I + aVF\", then try all six limb leads." },
        { label: "MI locator", launch: "ekg-mi-launch", note: "The lead map with SAL, ready for the next lesson." }
      ]
    },

    /* ---------------- 12 ---------------- */
    {
      id: "learn-mi", part: "p3", title: "Heart attacks on the EKG", goal: "Ischemia, injury and infarction, the STEMI rule, and finding the wall.",
      pages: [
        { title: "Starving muscle changes the EKG in order", fig: [{ type: "damage", id: "dmg-normal", caption: "Normal" }, { type: "damage", id: "dmg-t-inversion", caption: "Ischemia: T inverted" }, { type: "damage", id: "dmg-st-elevation", caption: "Injury: ST up" }, { type: "damage", id: "dmg-q-wave", caption: "Infarction: Q wave" }],
          html: "<p>When a coronary artery is blocked, the muscle it feeds goes through three stages, and each shows up on a different part of the complex:</p>" +
            tbl(["Stage", "What's happening", "EKG"], [
              ["<strong>Ischemia</strong>", "Not enough oxygen", "<strong>T wave</strong> changes (peaked or symmetrically inverted), <strong>ST depression</strong>"],
              ["<strong>Injury</strong>", "Cells are being damaged", "<strong>ST elevation</strong>"],
              ["<strong>Infarction</strong>", "Cells have died (scar)", "<strong>Pathologic Q waves</strong>"]]) +
            '<div class="box-mnemonic"><span class="lbl">Mnemonic</span>"<strong>T</strong>hen <strong>ST</strong>, then <strong>Q</strong>": ischemia, injury, infarction. The pictures above show each stage next to a normal complex.</div>' },
        { title: "Ischemia: T waves and ST depression", fig: [{ type: "damage", id: "dmg-hyperacute", caption: "Tall, peaked T" }, { type: "damage", id: "dmg-t-inversion", caption: "Symmetric inverted T" }, { type: "damage", id: "dmg-st-depression", caption: "Flat ST depression" }],
          html: "<ul><li><strong>T wave changes come first</strong>: tall peaked T waves, or <strong>symmetric inverted</strong> T waves. Inverted T waves can return to normal if the ischemia resolves.</li>" +
            "<li><strong>ST depression</strong> more than 1 mm, measured 0.04 s after the J point, in 2 or more leads looking at the same area.</li>" +
            "<li>A <strong>flat ST depression</strong> is also the pattern of a <strong>subendocardial</strong> (inner-layer) infarction.</li></ul>" +
            "<p>T inversion has other causes too (pericarditis, hypertrophy, BBB, electrolytes), so it only means ischemia when the story fits.</p>" },
        { title: "Injury: ST elevation and the STEMI rule", fig: { type: "damage", id: "dmg-st-elevation" },
          html: "<p><strong>ST elevation is the earliest reliable sign that an acute MI has happened.</strong> To call it a STEMI, measure carefully:</p>" +
            "<ol class=\"lh-steps\"><li>Find the <strong>J point</strong> (where the QRS ends), then go <strong>0.04 s</strong> (1 small box) to the right.</li><li>Compare that spot with the <strong>PR segment</strong> (the baseline).</li><li>It counts if it's up <strong>more than 1 mm in a limb lead</strong> or <strong>more than 2 mm in a chest lead</strong>,</li><li>in <strong>2 or more leads that look at the same wall</strong>.</li></ol>" +
            "<p>Not every MI is a STEMI, but a STEMI needs this exact pattern.</p>" },
        { title: "Infarction: pathologic Q waves", fig: { type: "damage", id: "dmg-q-wave" },
          html: "<p>Dead muscle makes no electricity. A camera looking at a dead patch \"sees through\" it to the spark moving <strong>away</strong> on the far side, so the R wave shrinks and a deep <strong>Q wave</strong> appears.</p>" +
            "<p>A Q is <strong>pathologic</strong> when it's <strong>wider than 0.04 s</strong> and at least <strong>one third the height of the R</strong>, in 2 or more neighboring leads. It forms hours to days after the MI and means <strong>irreversible damage</strong>.</p>" +
            "<p>A tiny q under 0.04 s in the lateral leads is normal (the septum firing).</p>" },
        { title: "Find the wall: which cameras see it?", fig: { type: "twelve", wall: "wall-inferior" },
          html: "<p>Use the map from the last lesson. In this 12-lead, the ST is up in <strong>II, III and aVF</strong>, so it's an <strong>inferior STEMI</strong>.</p>" +
            "<p>Notice the ST is <strong>down</strong> in I and aVL. That's a <strong>reciprocal change</strong>: the cameras on the opposite side see the mirror image. Reciprocal changes support a real STEMI.</p>" +
            tbl(["STEMI", "ST up in", "Usual artery"], [
              ["<strong>Inferior</strong>", "II, III, aVF", "RCA"],
              ["<strong>Lateral</strong>", "I, aVL, V5, V6", "Circumflex"],
              ["<strong>Anterior</strong>", "V2-V4", "LAD"],
              ["<strong>Septal</strong>", "V1-V3", "LAD"],
              ["<strong>Posterior</strong>", "ST <em>down</em>, tall R in V1-V3 (mirror image)", "RCA or circumflex"]]) },
        { title: "Why some MIs cause heart blocks", fig: { type: "twelve", wall: "wall-anterior" },
          html: "<p>Each artery also feeds part of the wiring, so the wall that's damaged predicts the block you might see:</p>" +
            "<ul><li>The <strong>RCA</strong> supplies the <strong>AV node</strong> in most people (80-95%). So an <strong>inferior MI</strong> can cause AV node blocks: 1st degree and <strong>Wenckebach</strong>.</li>" +
            "<li>The <strong>LAD</strong> supplies most of the <strong>bundle branches</strong>. So an <strong>anterior MI</strong> (shown above: ST up in V2-V4) can cause <strong>type II block</strong> and <strong>bundle branch blocks</strong>.</li></ul>" +
            "<p>This ties Part 2 and Part 3 together: inferior → toll booth problems; anterior → express-lane problems.</p>" },
        { title: "Not every ST elevation is a heart attack", fig: { type: "pattern", id: "pt-pericarditis" },
          html: "<p><strong>Pericarditis</strong> (an inflamed sac around the heart) also raises the ST, but it looks different:</p>" +
            tbl(["", "Pericarditis", "STEMI"], [
              ["Where", "<strong>Diffuse</strong>: almost every lead", "One wall's leads, with reciprocal changes"],
              ["ST shape", "Concave, \"saggy\"", "Territorial"],
              ["Q waves", "Don't form", "May form"],
              ["T inversion", "Only after the ST normalizes", "Before the ST normalizes"]]) +
            "<p>Other things that raise the ST: ventricular hypertrophy, bundle branch blocks, PE, hyperkalemia.</p>" }
      ],
      checks: [
        K("What is the earliest reliable EKG sign of an acute MI?", "ST elevation", ["Pathologic Q waves", "T wave inversion", "A new U wave"], "ST elevation (injury) comes early. Q waves take hours to days."),
        K("ST elevation in II, III and aVF. Which wall, and which artery usually?", "Inferior wall; the right coronary artery", ["Lateral wall; the circumflex", "Anterior wall; the LAD", "Septal wall; the LAD"], "II, III, aVF = the inferior triangle, usually the RCA."),
        K("How much ST elevation counts in a chest (precordial) lead?", "More than 2 mm, 0.04 s after the J point, in 2+ leads facing the same wall", ["More than 1 mm in any single lead", "More than 2 mm at the peak of the T wave", "Any elevation in aVR"], "Limb leads > 1 mm, chest leads > 2 mm, measured at J + 0.04 s, in 2+ contiguous leads."),
        K("A deep, wide Q wave (0.06 s, half the height of the R) appears in V2-V4. What does it mean?", "Infarction: that muscle has died", ["Ischemia that will fully reverse", "Hyperkalemia", "A normal septal q"], "Pathologic Q = wider than 0.04 s and at least 1/3 of the R: irreversible damage."),
        K("ST elevation in almost every lead, concave and saggy, with no reciprocal changes. What is most likely?", "Pericarditis", ["Inferior STEMI", "Hypokalemia", "Left bundle branch block"], "Diffuse, saggy ST elevation without a territory or reciprocal changes = pericarditis.")
      ],
      remember: [
        "<strong>T, then ST, then Q</strong>: ischemia (T changes, ST down) → injury (ST up) → infarction (Q).",
        "STEMI: measure at <strong>J + 0.04 s</strong>; <strong>&gt; 1 mm limb</strong>, <strong>&gt; 2 mm chest</strong>, <strong>2+ leads, same wall</strong>.",
        "Inferior = II, III, aVF (RCA, AV node blocks). Anterior = V2-V4 (LAD, type II and BBB).",
        "Reciprocal changes = mirror image opposite. Pericarditis = diffuse saggy ST, no Q."
      ],
      practice: [
        { label: "MI locator", launch: "ekg-mi-launch", note: "Locate the STEMI, STEMI or not? (measure it), and ischemia vs injury vs infarction." }
      ]
    },

    /* ---------------- 13 ---------------- */
    {
      id: "learn-patterns", part: "p3", title: "Patterns: enlargement, blocks and electrolytes", goal: "The 12-lead patterns from objectives 12, 13 and 16, each with its reason.",
      pages: [
        { title: "More muscle, more signal", fig: { type: "pattern", id: "pt-lvh" },
          html: "<p>Two different changes, both making waves bigger:</p>" +
            tbl(["", "Hypertrophy", "Enlargement"], [["Wall", "<strong>Thicker</strong>", "Thinner, stretched"], ["Chamber", "May get smaller", "Bigger"], ["Usually", "Ventricles", "Atria"]]) +
            "<p>On the EKG, either one shows as a <strong>taller</strong> or <strong>wider</strong> wave, and the <strong>axis shifts toward</strong> the bigger side.</p>" },
        { title: "Atrial enlargement: look at the P wave", fig: [{ type: "pattern", id: "pt-rae" }, { type: "pattern", id: "pt-lae" }],
          html: "<p>Remember: the <strong>first half</strong> of the P is the right atrium, the <strong>second half</strong> is the left.</p>" +
            "<ul><li><strong>Right atrial enlargement</strong>: P <strong>taller than 2.5 mm</strong> (in II), or a biphasic P in V1 whose first part is bigger.</li>" +
            "<li><strong>Left atrial enlargement</strong>: in V1, the <strong>second part dips at least 1 mm below</strong> the baseline and is wider than 0.04 s.</li></ul>" +
            '<div class="box-mnemonic"><span class="lbl">Mnemonic</span><strong>R</strong>AE = <strong>R</strong>aised P. <strong>L</strong>AE = <strong>L</strong>ong, <strong>L</strong>ow ending in V1.</div>' },
        { title: "Ventricular hypertrophy", fig: [{ type: "pattern", id: "pt-lvh" }, { type: "pattern", id: "pt-rvh" }],
          html: "<p><strong>LVH</strong>: the thick LV makes <strong>tall R waves in V5-V6</strong> (cameras over the LV) and <strong>deep S waves in V1</strong> (the same force seen from the other side).</p>" +
            hy("Classic LVH rule: <strong>S in V1 + R in V5 or V6 &gt; 35 mm</strong>.") +
            "<p><strong>RVH</strong>: <strong>right axis deviation</strong> and a <strong>tall R in V1</strong> (bigger than the S) that shrinks toward V6, the reverse of normal.</p>" +
            "<p>A working-too-hard heart can also show <strong>strain</strong>: ST depression with an asymmetric inverted T (V5-V6 for the left, V1 for the right).</p>" },
        { title: "Bundle branch blocks: one ventricle waits its turn", fig: [{ type: "pattern", id: "pt-rbbb" }, { type: "pattern", id: "pt-lbbb" }],
          html: "<p>If one bundle branch is blocked, that ventricle has to wait for the signal to creep over from the other side. The two ventricles fire one after the other, so the QRS is <strong>wide (0.12 s or more)</strong> with <strong>two peaks</strong> (R and R').</p>" +
            tbl(["", "Right BBB", "Left BBB"], [["Best seen in", "<strong>V1-V2</strong>", "<strong>V5-V6</strong>"], ["Looks like", "\"Rabbit ears\" or an M (RSR')", "Wide, tall R with a flat or notched top"]]) +
            '<div class="box-mnemonic"><span class="lbl">Mnemonic</span>Like a turn signal: <strong>R</strong>BBB shows in the <strong>r</strong>ight-sided leads (V1-V2), <strong>L</strong>BBB in the <strong>l</strong>eft-sided leads (V5-V6).</div>' +
            "<p><strong>Hemiblocks</strong> (one fascicle of the left bundle) don't widen the QRS; they only swing the axis: <strong>left anterior → left axis</strong>, <strong>left posterior → right axis</strong>.</p>" },
        { title: "Potassium", fig: [{ type: "pattern", id: "pt-hyperk-early" }, { type: "pattern", id: "pt-hypok" }],
          html: "<p><strong>High potassium</strong> changes things in order as it climbs:</p>" +
            "<p class=\"lh-big\">peaked T → flat P → long PR → wide QRS → sine wave</p>" +
            "<p>A sine wave is close to cardiac arrest.</p>" +
            "<p><strong>Low potassium</strong>: everything sinks (ST depression, flat T waves) and a <strong>U wave</strong> pops up after the T. The QT gets longer.</p>" +
            '<div class="box-mnemonic"><span class="lbl">Mnemonic</span>High K: the T goes <strong>up</strong> (peaked). Low K: the T goes <strong>down</strong> and a <strong>U</strong> appears.</div>' },
        { title: "Calcium: it's all about the QT", fig: [{ type: "pattern", id: "pt-hypocalcemia" }, { type: "pattern", id: "pt-hypercalcemia" }],
          html: "<p>Calcium mostly changes the <strong>length of the ST segment</strong>, and so the <strong>QT</strong>:</p>" +
            tbl(["", "QT", "Risk"], [["<strong>Low calcium</strong>", "<strong>Long</strong>", "Torsades; weaker contraction"], ["<strong>High calcium</strong>", "<strong>Short</strong>", "Arrhythmias"]]) +
            '<div class="box-mnemonic"><span class="lbl">Mnemonic</span><strong>Low and long</strong>: low calcium, long QT.</div>' },
        { title: "Four more you need to know", fig: [{ type: "pattern", id: "pt-effusion" }, { type: "pattern", id: "pt-pe" }, { type: "pattern", id: "pt-paced-v" }, { type: "pattern", id: "pt-wpw" }],
          html: tbl(["Pattern", "What you see", "Why"], [
              ["<strong>Pericardial effusion</strong>", "<strong>Low voltage</strong>; QRS height alternates beat to beat (<strong>electrical alternans</strong>)", "Fluid muffles the signal; the heart swings in the fluid"],
              ["<strong>Pulmonary embolus</strong>", "<strong>S1Q3T3</strong> (classic but not common), right axis, RBBB, tall P", "Sudden strain on the right heart"],
              ["<strong>Pacemaker</strong>", "<strong>Spike</strong>, then a wide QRS (ventricular) or a P (atrial)", "The device fires; a paced ventricle conducts cell to cell"],
              ["<strong>WPW (delta wave)</strong>", "<strong>Short PR</strong> and a <strong>slurred upstroke</strong> on the QRS", "An extra pathway skips the AV node's delay"]]) }
      ],
      checks: [
        K("Tall, peaked T waves in every lead. What should you suspect first?", "Hyperkalemia", ["Hypokalemia", "Hypocalcemia", "Pericardial effusion"], "Peaked T is the first sign of high potassium."),
        K("Flat T waves with a U wave after them. What is it?", "Hypokalemia", ["Hyperkalemia", "Hypercalcemia", "Left bundle branch block"], "Low K: things sink and a U wave appears."),
        K("A wide QRS with \"rabbit ears\" (RSR') in V1. What is it?", "Right bundle branch block", ["Left bundle branch block", "Left anterior hemiblock", "Delta wave"], "RBBB shows in the right-sided leads, V1-V2."),
        K("Which electrolyte problem prolongs the QT?", "Low calcium", ["High calcium", "High potassium only", "Low sodium"], "Low and long: low calcium, long QT (low potassium also lengthens it)."),
        K("Which finding supports left ventricular hypertrophy?", "S in V1 + R in V5 or V6 greater than 35 mm", ["A tall R in V1 bigger than the S", "P wave taller than 2.5 mm", "Low voltage in every lead"], "The thick LV makes tall R waves over it (V5-V6) and deep S waves opposite it (V1).")
      ],
      remember: [
        "Enlargement and hypertrophy = <strong>taller or wider</strong> waves, axis <strong>toward</strong> the bigger side.",
        "<strong>RAE</strong> = raised P. <strong>LAE</strong> = long, low end of P in V1. <strong>LVH</strong> = S(V1) + R(V5/6) &gt; 35 mm.",
        "<strong>RBBB</strong> rabbit ears in V1-V2; <strong>LBBB</strong> wide notched R in V5-V6. Hemiblocks only swing the axis.",
        "<strong>High K</strong>: peaked T → sine wave. <strong>Low K</strong>: flat T, U wave. <strong>Low Ca</strong>: long QT."
      ],
      practice: [
        { label: "Pattern gallery", launch: "ekg-patterns-launch", note: "All 26 patterns drawn, then Name that pattern and What would you see?" },
        { label: "Mock exam: class poll review", launch: "ekg-mock-launch", then: "mock-polls", note: "Now that you've done every lesson, the 31 class poll questions are a great check." }
      ]
    }
  ];

  window.EKG_LEARN = {
    intro: "Short lessons, in order, each building on the last. One idea per page, with pictures that move. A few easy questions at the end of each lesson (they don't count for anything), then a button to the matching practice tool. If you only have 10 minutes, do one lesson.",
    parts: parts,
    lessons: lessons
  };
}());
