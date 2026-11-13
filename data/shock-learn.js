/*
  Shock, Pressors & Fluids "from zero" lessons (engine: learn-path.js, figures: shock-learn.js).
  Anna asked (2026-11-13) for the same kind of guided path as "Learn EKG from zero", only for the Cardio Part 2
  Shock, Pressors & Fluid Management lecture. Physiology first (BP = CO × SVR, preload/afterload, receptors),
  then shock types, pressors and devices, then fluids. One idea per page, why before what, then a few easy
  checks, a "remember" list and practice buttons into the lecture's objectives and the Cardio Part 2 tools.
  Facts follow the Shock, Pressors & Fluid Management deck (source-material/cardio-part-2/text/shock-pressors-fluids.md);
  anything not on the slides is marked "(standard teaching)" or "standard physiology". Analogies are teaching aids.
  Lesson ids are progress keys: never rename. Checks: K(prompt, answer, [wrong], why).
*/
(function () {
  "use strict";
  function K(prompt, answer, wrong, why) { return { prompt: prompt, answer: answer, wrong: wrong, why: why }; }
  function hy(x) { return '<div class="box-hy"><span class="lbl">Key idea</span>' + x + "</div>"; }
  function an(x) { return '<div class="box-mnemonic"><span class="lbl">Picture it</span>' + x + "</div>"; }
  function mn(x) { return '<div class="box-mnemonic"><span class="lbl">Mnemonic</span>' + x + "</div>"; }
  function std(x) { return '<div class="box-fix"><span class="lbl">Standard teaching</span>' + x + "</div>"; }
  function tbl(head, rows) {
    return '<div class="table-scroll"><table class="learn-table"><tr>' + head.map(function (h) { return "<th>" + h + "</th>"; }).join("") + "</tr>" +
      rows.map(function (r) { return "<tr>" + r.map(function (d) { return "<td>" + d + "</td>"; }).join("") + "</tr>"; }).join("") + "</table></div>";
  }
  function obj(id, mode, label, note) {
    return { label: label, note: note, objective: { course: "cardio-part-2", lecture: "shock-pressors-fluids", mode: mode, id: id } };
  }
  function tool(launch, label, note) { return { label: label, note: note, launch: launch }; }

  var parts = [
    { id: "p1", title: "Part 1 · The foundation", blurb: "Everything in this lecture comes back to one equation and four receptors. Learn these first and the rest stops being memorization." },
    { id: "p2", title: "Part 2 · Shock", blurb: "The four types of shock, each one breaking a different part of the equation, how the body fights back, and cardiogenic shock in detail." },
    { id: "p3", title: "Part 3 · Pressors and devices", blurb: "Pick a pressor by the receptors it presses, dopamine's dose dial, then the lines, the balloon pump and the resuscitation goals." },
    { id: "p4", title: "Part 4 · Fluids", blurb: "Where the body's water lives, what moves it, which bag to hang, and how to resuscitate a patient who is dry or bleeding." }
  ];

  var lessons = [
    /* ---------------- 1 ---------------- */
    {
      id: "shl-what-is-shock", part: "p1", title: "What shock really is", goal: "Shock means cells aren't getting enough oxygen. It isn't a blood pressure number.",
      pages: [
        { title: "Blood is a delivery service", fig: { type: "circuit", state: "normal" },
          html: "<p>Every cell in the body needs a steady delivery of <strong>oxygen</strong>. Blood is the delivery truck: the <strong>heart</strong> pumps it, the <strong>arteries</strong> carry it out, the <strong>capillaries</strong> hand oxygen to the cells, and the <strong>veins</strong> bring the blood back for another trip.</p>" +
            "<p>The picture shows that loop as plumbing: a <strong>pump</strong>, a set of <strong>pipes</strong>, and a <strong>tank</strong> of blood that sits mostly in the veins. Keep this picture in mind. Every kind of shock is one of these three parts (or a block in the pipe) going wrong.</p>" },
        { title: "Shock = cells starving for oxygen",
          fig: { type: "tiles", items: [["↓", "Reduced oxygen delivery", "not enough blood, or not enough getting through"], ["↑", "Increased oxygen use", "demand outruns supply"], ["✕", "Poor oxygen use", "cells can't use what arrives"], ["+", "A combination", "most real patients"]] },
          html: "<p>The deck defines shock as <strong>a state of cellular and tissue hypoxia</strong> caused by:</p>" +
            "<ul><li><strong>reduced oxygen delivery</strong>,</li><li><strong>increased oxygen consumption</strong>,</li><li><strong>inadequate oxygen utilization</strong>,</li><li>or a <strong>combination</strong>.</li></ul>" +
            "<p>In plain words: <strong>circulatory failure that shows up as reduced tissue perfusion</strong>. Perfusion means blood actually flowing through the tissue.</p>" +
            hy("Shock is defined by <strong>poor perfusion</strong>, not by a blood pressure cutoff. A patient can be in early shock with a <strong>normal BP</strong>, because the body is working hard to hold the pressure up.") },
        { title: "The clock: reversible, then not",
          fig: { type: "flow", steps: ["Inciting event<br><small>MI, infection, injury</small>", "Pre-shock<br><small>compensated</small>", "Shock<br><small>compensation fails</small>", "End-organ dysfunction<br><small>irreversible, death</small>"] },
          html: "<p>Every type of shock follows the same <strong>continuum</strong>. It starts with an <strong>inciting event</strong>, like a heart attack, an infection or a gunshot wound, and then moves through <strong>pre-shock → shock → end-organ dysfunction</strong>.</p>" +
            "<p>Shock is <strong>initially reversible</strong> but <strong>quickly progresses to irreversible organ dysfunction</strong>. Cells can survive a short oxygen shortage, but not a long one.</p>" +
            an("Think of a <strong>power outage in a freezer</strong>. For the first hour nothing is lost if the power comes back. Leave it off long enough and the food is ruined, even after the power returns. Treating shock is a race against that clock.") },
        { title: "How you can tell tissues are starving",
          fig: { type: "tiles", items: [["🧠", "Mentation", "the brain gets less → anxious, then confused"], ["💧", "Urine output", "kidneys get less → less urine"], ["✋", "Capillary refill, skin", "skin is sacrificed first → cool, slow refill"], ["🧪", "Lactate", "cells without O₂ make lactate"], ["📈", "MAP trend", "the pressure organs actually feel"]] },
          html: "<p>The deck's clinical synthesis slide asks one question first: <strong>is tissue perfusion impaired?</strong> It answers with five things you can check at the bedside: <strong>MAP trend, mentation, capillary refill, urine output, lactate trend</strong>.</p>" +
            "<p>Each one is an organ telling you it is short on blood:</p>" +
            "<ul><li><strong>Brain</strong>: anxiety, then confusion.</li><li><strong>Kidneys</strong>: less urine.</li><li><strong>Skin</strong>: cool and slow to refill, because the body shuts down blood flow to the skin first.</li><li><strong>Cells</strong>: without oxygen they switch to anaerobic metabolism and make <strong>lactate</strong> (standard physiology).</li></ul>" +
            hy("Treat the <strong>physiology</strong>, not the blood pressure alone. That is the deck's own summary line.") }
      ],
      checks: [
        K("What is shock, by the deck's definition?", "Cellular and tissue hypoxia from poor oxygen delivery, higher use or poor utilization", ["Any systolic BP under 100", "A heart rate over 120", "Fainting from any cause"], "Shock is tissue hypoxia: circulatory failure shown as reduced tissue perfusion."),
        K("A septic patient has BP 118/72 but is confused, with a rising lactate and little urine. Could this be shock?", "Yes: perfusion is failing even though the BP is still normal", ["No, the BP is normal", "No, shock always needs a low heart rate", "Only if the skin is warm"], "Early (pre-shock) compensation can hold the BP up while tissues are already starving."),
        K("Why does lactate rise in shock?", "Cells without enough oxygen switch to anaerobic metabolism", ["The liver makes extra lactate on purpose", "IV fluids contain lactate", "The kidneys stop filtering sugar"], "Lactate is a marker of cells running without oxygen (standard physiology).")
      ],
      remember: [
        "Shock = <strong>cellular and tissue hypoxia</strong>, seen as <strong>reduced tissue perfusion</strong>.",
        "Causes: <strong>↓ O₂ delivery</strong>, <strong>↑ O₂ consumption</strong>, <strong>poor O₂ utilization</strong>, or a mix.",
        "It's <strong>reversible early</strong>, then quickly becomes <strong>irreversible organ dysfunction</strong>.",
        "Perfusion checks: <strong>MAP trend, mentation, capillary refill, urine output, lactate</strong>.",
        "A normal BP does <strong>not</strong> rule out shock."
      ],
      practice: [
        obj("01-types-of-shock", "learn", "Lecture: Objective 1 cards", "The deck's definition and the four types, card by card."),
        tool("cardio2-concepts-launch", "Concepts tool", "Pick Shock, Pressors & Fluids, then \"Compensation hides shock until it suddenly can't\".")
      ]
    },

    /* ---------------- 2 ---------------- */
    {
      id: "shl-pressure-equation", part: "p1", title: "The pressure equation", goal: "Blood pressure = how much the pump moves × how tight the pipes are.",
      pages: [
        { title: "Think of a garden hose", fig: { type: "equation", hi: ["bp"] },
          html: "<p>Turn on a garden hose. The pressure inside it depends on two things: <strong>how much water the faucet pushes in</strong>, and <strong>how much you pinch the nozzle</strong>. Open the faucet more, or pinch harder, and the pressure goes up.</p>" +
            "<p>Blood pressure works the same way:</p><p class=\"lh-big\">BP = CO × SVR</p>" +
            "<ul><li><strong>CO, cardiac output</strong>: how much blood the heart pumps per minute (the faucet).</li><li><strong>SVR, systemic vascular resistance</strong>: how tight the small arteries (arterioles) are (the pinch).</li></ul>" +
            hy("This one equation is the backbone of the lecture. Every shock type drops one of these terms, every compensation tries to raise one, and every pressor pushes on one of them.") },
        { title: "Cardiac output: the faucet", fig: { type: "equation", hi: ["co", "hr", "sv"] },
          html: "<p>Cardiac output is <strong>how much blood leaves the heart each minute</strong>. The deck gives its own equation on the response-to-shock slide:</p><p class=\"lh-big\">CO = HR × SV</p>" +
            "<p><strong>HR</strong> is beats per minute. <strong>SV, stroke volume</strong>, is how much blood leaves with each beat. A normal adult pumps about 5 L a minute (standard physiology), which is roughly all of their blood, every minute.</p>" +
            "<p>So the heart can raise output two ways: <strong>beat faster</strong> or <strong>push more per beat</strong>. You'll see the body try both in shock.</p>" },
        { title: "SVR: the pinch on the nozzle", fig: { type: "circuit", state: "normal", focus: ["pipes", "gauge"] },
          html: "<p>The <strong>arterioles</strong> are the smallest arteries, wrapped in smooth muscle. When that muscle tightens (<strong>vasoconstriction</strong>), the pipes narrow, <strong>SVR rises</strong> and so does BP. When it relaxes (<strong>vasodilation</strong>), SVR and BP fall.</p>" +
            "<p>There is a catch. Squeezing the pipes keeps the pressure up, but the organs downstream of the tight pipes get <strong>less flow</strong>. In shock the deck says arteriole constriction <strong>shunts blood away from the liver, spleen, kidneys and periphery</strong> to protect the heart and brain.</p>" +
            an("Pinching the hose makes the water shoot farther, but less of it reaches the plants right next to the nozzle.") },
        { title: "MAP: the pressure organs actually feel", fig: { type: "mapcalc", sbp: 84, dbp: 50 },
          html: "<p>The systolic number is the brief peak of each beat. Organs care more about the <strong>average</strong> push over the whole cycle: the <strong>mean arterial pressure (MAP)</strong>.</p>" +
            "<p>The deck calls MAP <strong>a better indicator of perfusion to vital organs than systolic BP</strong>. Normal MAP is <strong>65 to 90 mmHg</strong>, and the resuscitation goal is <strong>MAP ≥ 65</strong>. It's measured most accurately with an <strong>arterial line</strong>.</p>" +
            "<p>Why does diastole count twice in the formula? The heart spends about two-thirds of each beat relaxing, so the pressure sits near the diastolic number most of the time (standard physiology).</p>" +
            "<p>Try it: drag the sliders to 84/50 and see why that patient is in trouble.</p>" },
        { title: "Every shock breaks one term", fig: { type: "equation", hi: ["co", "svr", "pre", "con"] },
          html: "<p>Here is a preview of Part 2. Each type of shock knocks out a different piece of the equation:</p>" +
            tbl(["Shock", "Plumbing", "What drops"], [
              ["<strong>Cardiogenic</strong>", "Broken pump", "<strong>Contractility</strong> → SV → CO"],
              ["<strong>Hypovolemic</strong>", "Empty tank", "<strong>Preload</strong> → SV → CO"],
              ["<strong>Distributive</strong>", "Pipes too wide", "<strong>SVR</strong>"],
              ["<strong>Obstructive</strong>", "Blocked pipe", "Filling or emptying → SV → CO"]]) +
            hy("If you know <strong>which term is broken</strong>, you can predict the exam findings, which compensation kicks in, and which treatment helps.") }
      ],
      checks: [
        K("Which equation ties blood pressure to the pump and the pipes?", "BP = CO × SVR", ["BP = HR + SV", "CO = BP × SVR", "SVR = HR × SV"], "Pressure equals flow (cardiac output) times resistance (SVR)."),
        K("A patient's arterioles relax and widen. What happens to SVR and BP?", "SVR falls, so BP falls", ["SVR rises, so BP rises", "SVR falls, so BP rises", "Nothing changes"], "Vasodilation lowers resistance, and lower resistance means lower pressure for the same flow."),
        K("BP is 84/50. Using MAP ≈ (SBP + 2 × DBP) ÷ 3, is perfusion adequate?", "No: MAP is about 61, under the goal of 65", ["Yes: MAP is about 84", "Yes: only systolic matters", "No: MAP is about 34"], "(84 + 100) ÷ 3 ≈ 61. The deck's goal is MAP ≥ 65.")
      ],
      remember: [
        "<strong>BP = CO × SVR</strong>: flow times resistance.",
        "<strong>CO = HR × SV</strong> (the deck's equation).",
        "Vasoconstriction ↑ SVR and BP but <strong>shunts blood away</strong> from liver, spleen, kidneys and periphery.",
        "<strong>MAP</strong> reflects organ perfusion better than SBP. Normal <strong>65-90</strong>; goal <strong>≥ 65</strong>.",
        "Each shock type breaks one term: pump (contractility), tank (preload), pipes (SVR), block."
      ],
      practice: [
        tool("cardio2-scores-launch", "Scores & Calculators: MAP", "Pick Shock, Pressors & Fluids → \"MAP and resuscitation targets\" to calculate MAP on cases."),
        tool("cardio2-concepts-launch", "Concepts tool", "Pick Shock, Pressors & Fluids → \"Every shock breaks one term of the pressure equation\".")
      ]
    },

    /* ---------------- 3 ---------------- */
    {
      id: "shl-cardiac-output", part: "p1", title: "Cardiac output: rate × volume", goal: "Why the heart speeds up in shock, and why that only helps up to a point.",
      pages: [
        { title: "Two ways to move more blood", fig: { type: "equation", hi: ["hr", "sv"] },
          html: "<p>Picture a <strong>bucket brigade</strong> passing water to a fire. To move more water per minute you can pass buckets <strong>faster</strong> (heart rate) or use <strong>bigger buckets</strong> (stroke volume).</p>" +
            "<p class=\"lh-big\">CO = HR × SV</p>" +
            "<p>When pressure falls, the body does both. The deck's response-to-shock slide says: <strong>increase in heart rate</strong>, and <strong>increase in cardiac contractility, which results in increased stroke volume</strong>.</p>" },
        { title: "Why a fast heart rate is the first sign", fig: { type: "equation", hi: ["hr"], arrows: { hr: "up" } },
          html: "<p>Speeding up is the quickest, easiest lever, so <strong>tachycardia</strong> shows up early. In pre-shock, the deck says <strong>tachycardia and peripheral vasoconstriction may be the only signs</strong>.</p>" +
            hy("An unexplained fast heart rate in a sick patient is shock until proven otherwise. The BP may still look fine.") +
            "<p>It only helps up to a point. A heart that beats very fast has less time to <strong>fill</strong> between beats, so each beat carries less, and a fast heart also burns more oxygen (standard physiology).</p>" },
        { title: "Stroke volume has three dials", fig: { type: "ventricle", focus: "all" },
          html: "<p>How much blood leaves with each beat depends on three things:</p>" +
            "<ol class=\"lh-steps\"><li><strong>Preload</strong>: how full the ventricle is before it squeezes.</li><li><strong>Contractility</strong>: how hard the muscle squeezes.</li><li><strong>Afterload</strong>: how hard it has to push to get blood out into the aorta.</li></ol>" +
            "<p>More preload or more contractility → bigger stroke volume. More afterload → <strong>smaller</strong> stroke volume, because the heart is pushing against more resistance.</p>" +
            "<p>The next lesson takes each dial one at a time.</p>" },
        { title: "When the heart can't speed up", fig: { type: "equation", hi: ["hr"], arrows: { hr: "down" } },
          html: "<p>Because speeding up is such an important rescue, anything that blocks it makes shock worse. The deck lists two exceptions to the usual tachycardia in cardiogenic shock:</p>" +
            "<ul><li><strong>Bradycardia</strong> from <strong>nodal dysfunction</strong> in a <strong>right-sided or inferior MI</strong> (the RCA often supplies the SA and AV nodes, standard teaching).</li><li>A <strong>normal heart rate</strong> when the response is <strong>blunted by beta-blockers or calcium channel blockers</strong>.</li></ul>" +
            "<p>That's also why the deck says to <strong>avoid negative inotropes (beta-blockers and calcium channel blockers)</strong> in cardiogenic shock: they <strong>block the tachycardic response and worsen the situation</strong>.</p>" +
            hy("A shocky patient with a \"normal\" heart rate of 78: check the med list for a beta-blocker or CCB before you feel reassured.") }
      ],
      checks: [
        K("Blood pressure drops. What two things does the heart do to keep cardiac output up?", "Beats faster and squeezes harder (↑ HR and ↑ stroke volume)", ["Slows down and fills more", "Stops the atrial kick", "Lowers contractility to save oxygen"], "CO = HR × SV, so the body raises both."),
        K("A patient in cardiogenic shock takes metoprolol and has HR 76. Why isn't he tachycardic?", "The beta-blocker blunts the normal compensatory tachycardia", ["He isn't really in shock", "Cardiogenic shock always causes bradycardia", "His stroke volume is too high"], "The deck lists beta-blockers and CCBs as a reason the heart rate can look normal."),
        K("Which dial makes stroke volume SMALLER when it goes up?", "Afterload", ["Preload", "Contractility", "Heart rate"], "Afterload is what the ventricle pushes against; more of it means less blood ejected per beat.")
      ],
      remember: [
        "<strong>CO = HR × SV</strong>: faster beats or bigger beats.",
        "<strong>Tachycardia</strong> (plus vasoconstriction) may be the <strong>only</strong> sign in pre-shock.",
        "Stroke volume depends on <strong>preload</strong>, <strong>contractility</strong> and <strong>afterload</strong>.",
        "No tachycardia? Think <strong>inferior/right MI</strong> (nodal bradycardia) or <strong>beta-blocker/CCB</strong>.",
        "<strong>Avoid beta-blockers and CCBs</strong> in cardiogenic shock: they block the compensation."
      ],
      practice: [
        obj("03-response-to-shock", "test", "Lecture: Objective 3 test", "The body's response to shock as direct recall questions."),
        obj("04b-cardiogenic-clinical-features", "learn", "Lecture: cardiogenic shock signs", "Heart rate exceptions and the rest of the exam findings.")
      ]
    },

    /* ---------------- 4 ---------------- */
    {
      id: "shl-preload-afterload", part: "p1", title: "Preload, contractility and afterload", goal: "The three dials of stroke volume, and why more fluid can hurt a failing heart.",
      pages: [
        { title: "Preload: how full the balloon gets", fig: { type: "ventricle", focus: "preload" },
          html: "<p><strong>Preload</strong> is how much the ventricle is filled, and stretched, right before it squeezes. It is set mostly by how much blood <strong>comes back through the veins</strong>.</p>" +
            an("Blow up a balloon a little and let go: it barely flies. Blow it up more and it shoots across the room. A ventricle is similar: <strong>more stretch → stronger squeeze</strong>, up to a point.") +
            "<p>At the bedside, the deck uses <strong>central venous pressure (CVP)</strong> as an <strong>estimate of preload</strong> and right atrial pressure. Normal CVP is <strong>8 to 12 mmHg</strong>. Flat neck veins suggest low preload; distended neck veins (JVD) suggest high.</p>" },
        { title: "More stretch, stronger squeeze", fig: { type: "starling", curves: ["normal"], dots: [{ curve: "normal", x: 14, label: "dry" }, { curve: "normal", x: 46, label: "after fluid" }], moves: [{ curve: "normal", from: 16, to: 42 }] },
          html: "<p>This curve is the <strong>Frank-Starling relationship</strong> (standard physiology). Across the bottom is preload; up the side is stroke volume.</p>" +
            "<p>On the steep part of the curve, a little more filling gives a lot more output. That is why a <strong>dry</strong> patient (hypovolemic shock) improves so nicely with fluid: you move them up the steep slope.</p>" +
            "<p>Notice the curve <strong>flattens</strong> at the top. Once the ventricle is full enough, extra filling stops helping.</p>" },
        { title: "A failing heart's curve is low and flat", fig: { type: "starling", curves: ["normal", "failing"], flat: true, dots: [{ curve: "failing", x: 70, label: "more fluid", dy: -4 }], moves: [{ curve: "failing", from: 40, to: 68 }] },
          html: "<p>A heart damaged by a big MI sits on a much <strong>lower, flatter</strong> curve. Giving it more volume barely raises stroke volume. The extra blood has nowhere to go, so pressure <strong>backs up into the lungs</strong> (rales, pulmonary edema, frothy sputum) and the neck veins (JVD).</p>" +
            "<p>That's the reason behind a rule the deck states plainly: <strong>hold IV fluid boluses in cardiogenic shock from LV dysfunction</strong> or with any sign of respiratory distress from pulmonary congestion. Establish IV access (a saline lock), but hold large boluses.</p>" +
            "<p>If there's <strong>no</strong> sign of LV dysfunction (no respiratory distress, rales, JVD, or congestion on CXR), the deck allows <strong>cautious 250 cc boluses</strong>, reassessing before and after each one.</p>" },
        { title: "Contractility: how hard it squeezes", fig: { type: "starling", curves: ["normal", "failing", "boosted"], moves: [{ curve: "failing", from: 50, toCurve: "boosted", to: 50 }] },
          html: "<p><strong>Contractility</strong> (inotropy) is the strength of the squeeze at any given filling. Drugs that increase it are <strong>positive inotropes</strong>, and they work through the <strong>β1</strong> receptor in the heart. <strong>Dobutamine</strong> is the classic example.</p>" +
            "<p>On the graph, an inotrope doesn't move the patient along the curve. It <strong>lifts the whole curve</strong>, so the same filling now gives a bigger stroke volume.</p>" +
            "<p><strong>Negative inotropes</strong> (beta-blockers, calcium channel blockers) push the curve down. That's the second reason they're avoided in cardiogenic shock.</p>" +
            hy("Failing pump: don't pour in more fluid (that just moves along a flat curve). <strong>Lift the curve</strong> with an inotrope, or take load off the heart.") },
        { title: "Afterload: what the heart pushes against", fig: { type: "ventricle", focus: "afterload" },
          html: "<p><strong>Afterload</strong> is the resistance the ventricle must overcome to open the aortic valve and eject blood. For the left ventricle it tracks closely with <strong>SVR</strong>.</p>" +
            an("Squeeze toothpaste out of a wide tube, then out of a tube with a pinhole. Same hand, much harder work, and less comes out.") +
            "<p>This creates a real dilemma in cardiogenic shock. Clamping the pipes (vasoconstriction) holds up BP, but it raises afterload, so the weak heart has to work harder and ejects even less. The deck's pump-failure slide says poor output comes from <strong>decreased contractility, increased preload and increased afterload</strong>.</p>" +
            "<p>The <strong>intra-aortic balloon pump</strong> (lesson 11) exists to lower afterload mechanically.</p>" }
      ],
      checks: [
        K("Which bedside number does the deck use to estimate preload?", "Central venous pressure (CVP), normal 8-12 mmHg", ["Mean arterial pressure", "SpO₂", "Urine output"], "CVP is pressure in the vena cava, an estimate of preload and right atrial pressure."),
        K("A patient with a massive anterior MI has rales and JVD, BP 84/56. Why hold a big fluid bolus?", "The failing heart is on a flat curve: more volume backs up into the lungs instead of raising output", ["Fluids raise afterload", "Fluids cause bradycardia", "Fluid never helps any shock"], "Hold boluses in cardiogenic shock from LV dysfunction or with pulmonary congestion."),
        K("What does a positive inotrope do to the Frank-Starling curve?", "Lifts the whole curve: more stroke volume at the same filling", ["Moves the patient to the flat part", "Lowers the curve", "Only changes heart rate"], "Inotropes increase contractility through β1, shifting the curve up.")
      ],
      remember: [
        "<strong>Preload</strong> = filling/stretch before the squeeze; estimated by <strong>CVP (normal 8-12)</strong>.",
        "<strong>Contractility</strong> = strength of squeeze; raised by β1 inotropes (dobutamine), lowered by BB/CCB.",
        "<strong>Afterload</strong> = what the LV pushes against ≈ <strong>SVR</strong>; more afterload → less output, more work.",
        "Dry heart on the steep curve → fluid helps. Failing heart on a flat curve → fluid goes to the <strong>lungs</strong>.",
        "Cardiogenic shock with LV dysfunction: <strong>saline lock, hold boluses</strong>; otherwise cautious <strong>250 cc</strong> with reassessment."
      ],
      practice: [
        tool("cardio2-concepts-launch", "Concepts tool", "Pick Shock, Pressors & Fluids → \"Cardiogenic shock: the pump can't handle more volume\"."),
        obj("05-cardiogenic-emergency-management", "test", "Lecture: Objective 5 test", "IV fluid rules and the rest of emergency management.")
      ]
    },

    /* ---------------- 5 ---------------- */
    {
      id: "shl-receptors", part: "p1", title: "The receptors: four buttons", goal: "α1, β1, β2 and dopaminergic: where each one is and what pressing it does.",
      pages: [
        { title: "Pressors press buttons", fig: { type: "receptors" },
          html: "<p>When pressure drops, the body releases <strong>epinephrine and norepinephrine</strong>. Those hormones work by pressing <strong>receptors</strong>, little buttons on the heart and blood vessels.</p>" +
            "<p>Pressors are drugs that press the same buttons. The deck says vasopressors have <strong>variable effects on α1, β1, β2 and dopaminergic receptors</strong>. Learn the four buttons and you can work out what any pressor does instead of memorizing it.</p>" },
        { title: "α1: squeeze the pipes", fig: { type: "receptors", hi: ["a1"] },
          html: "<p><strong>α1 receptors</strong> sit in the walls of blood vessels. Pressing them causes <strong>significant vasoconstriction</strong>: the pipes tighten, <strong>SVR rises, BP rises</strong>. Squeezing the <strong>veins</strong> also pushes more blood back to the heart, raising preload.</p>" +
            "<p>The cost: tight pipes mean less flow to the organs downstream. Heavy α1 effect can leave cool, dusky fingers and toes and can <strong>clamp the kidneys</strong> (you'll see this with high-dose dopamine).</p>" },
        { title: "β1: the heart's gas pedal", fig: { type: "receptors", hi: ["b1"] },
          html: "<p><strong>β1 receptors</strong> are in the <strong>heart</strong>. Pressing them increases <strong>inotropy</strong> (squeeze strength) and <strong>chronotropy</strong> (rate), with <strong>minimal vasoconstriction</strong>. Both raise cardiac output.</p>" +
            mn("<strong>β1 → 1 heart</strong>, <strong>β2 → 2 lungs</strong> (standard teaching). You have one heart and two lungs.") +
            "<p>The cost: a faster, harder-working heart <strong>uses more oxygen</strong> and is more prone to <strong>arrhythmias</strong>. That matters in a patient whose problem started as a heart attack.</p>" },
        { title: "β2: relax the pipes", fig: { type: "receptors", hi: ["b2"] },
          html: "<p><strong>β2 receptors</strong> in blood vessels cause <strong>vasodilation</strong>. (In the lungs they open the airways too, standard teaching.)</p>" +
            "<p>So a drug with β2 activity <strong>lowers SVR</strong>, which can <strong>lower blood pressure</strong>. Keep that in mind: it's exactly why dobutamine needs a systolic BP of at least 90.</p>" +
            hy("α1 tightens the pipes, β2 relaxes them. A pressor's effect on SVR is the tug-of-war between its α1 and β2 activity.") },
        { title: "Dopaminergic: open the kidney and gut", fig: { type: "receptors", hi: ["d"] },
          html: "<p><strong>Dopaminergic receptors</strong> sit in the <strong>renal, splanchnic (mesenteric), coronary and cerebral</strong> vascular beds. At <strong>low doses of dopamine</strong> they cause <strong>vasodilation</strong> there, so blood flow to the kidneys and urine output go up.</p>" +
            "<p>The deck adds a second subtype: at <strong>higher doses</strong> dopamine causes <strong>vasoconstriction by triggering norepinephrine release</strong>. Lesson 10 turns this into a dose dial.</p>" },
        { title: "All four on one page", fig: { type: "receptors" },
          html: tbl(["Button", "Where", "Pressing it", "Effect on the equation"], [
            ["<strong>α1</strong>", "Vessel walls", "Vasoconstriction", "<strong>↑ SVR</strong> → ↑ BP (↑ venous return)"],
            ["<strong>β1</strong>", "Heart", "↑ rate, ↑ squeeze", "<strong>↑ HR, ↑ SV → ↑ CO</strong>"],
            ["<strong>β2</strong>", "Vessels (airways)", "Vasodilation", "<strong>↓ SVR</strong> → can ↓ BP"],
            ["<strong>D</strong>", "Kidney, gut, heart, brain vessels", "Vasodilation (low-dose dopamine)", "↑ renal flow, ↑ urine"]]) +
            hy("To predict a pressor: ask <strong>which buttons it presses, and how hard</strong>. Then run it through BP = CO × SVR.") }
      ],
      checks: [
        K("Which receptor, when stimulated, mainly raises SVR?", "α1", ["β1", "β2", "Dopaminergic"], "α1 in the vessel walls causes significant vasoconstriction."),
        K("A drug strongly stimulates β1 with some β2. What happens to cardiac output and SVR?", "Cardiac output rises, SVR falls", ["Both fall", "Cardiac output falls, SVR rises", "Neither changes"], "β1 raises contractility and rate; β2 vasodilates. That's dobutamine."),
        K("Where are the dopaminergic receptors that low-dose dopamine opens?", "Renal, mesenteric, coronary and cerebral vessels", ["Only in skeletal muscle", "Only in the skin", "In the airways"], "Low-dose dopamine vasodilates these beds, raising renal blood flow.")
      ],
      remember: [
        "<strong>α1</strong>: vessel walls → <strong>vasoconstriction</strong> → ↑ SVR, ↑ BP.",
        "<strong>β1</strong>: heart → <strong>↑ inotropy and chronotropy</strong> → ↑ CO (and ↑ O₂ demand).",
        "<strong>β2</strong>: vessels → <strong>vasodilation</strong> → ↓ SVR.",
        "<strong>Dopaminergic</strong>: renal, mesenteric, coronary, cerebral beds → vasodilation at low dopamine doses.",
        "Predict any pressor: which buttons, how hard, then BP = CO × SVR."
      ],
      practice: [
        obj("06a-pressor-receptors-overview", "learn", "Lecture: receptors and the pressor table", "Objective 6a cards, then its test."),
        tool("cardio2-concepts-launch", "Concepts tool", "Pick Shock, Pressors & Fluids → \"Pick the pressor by the receptor it hits\".")
      ]
    },

    /* ---------------- 6 ---------------- */
    {
      id: "shl-four-types", part: "p2", title: "The four types of shock", goal: "Pump, tank, pipes, block: what breaks in each, examples, and how they look.",
      pages: [
        { title: "Pump, tank, pipes, block", fig: { type: "circuit", state: "normal" },
          html: "<p>The deck lists <strong>four main types of shock</strong>. Map each one onto the plumbing:</p>" +
            tbl(["Type", "Plumbing", "Deck examples"], [
              ["<strong>Cardiogenic</strong>", "Broken <strong>pump</strong>", "MI (most common), myocardial contusion, cardiomyopathy, sustained arrhythmias, valve or septal defects, cardiac surgery"],
              ["<strong>Hypovolemic</strong>", "Empty <strong>tank</strong>", "Hemorrhage; vomiting, diarrhea, dehydration, pancreatitis; 3rd spacing (burns)"],
              ["<strong>Distributive</strong>", "<strong>Pipes</strong> too wide", "Sepsis, neurogenic (loss of sympathetic vasomotor tone), anaphylaxis"],
              ["<strong>Obstructive</strong>", "<strong>Block</strong> in the pipe", "Pulmonary embolism, tension pneumothorax, cardiac tamponade, aortic dissection"]]) +
            mn("<strong>Pump, Tank, Pipes, Block</strong>.") },
        { title: "Cardiogenic: the pump fails", fig: { type: "circuit", state: "cardiogenic", focus: ["pump"] },
          html: "<p>The heart muscle can't squeeze well, so <strong>cardiac output falls</strong>. Two things follow:</p>" +
            "<ul><li><strong>Forward failure</strong>: too little blood goes out → cool, clammy skin, low urine, confusion.</li><li><strong>Backward failure</strong>: blood the pump can't move <strong>backs up</strong> behind it → <strong>JVD</strong>, <strong>rales</strong>, frothy sputum.</li></ul>" +
            "<p>The body clamps the pipes to hold pressure, so <strong>SVR is high</strong>. Teaching shorthand: <strong>cold and wet</strong> (standard teaching).</p>" },
        { title: "Hypovolemic: the tank is empty", fig: { type: "circuit", state: "hypovolemic", focus: ["tank"] },
          html: "<p>Not enough blood volume means not enough comes back to the heart: <strong>preload falls</strong>, so stroke volume and <strong>CO fall</strong>. The pump itself is fine.</p>" +
            "<p>The body clamps the pipes (<strong>SVR high</strong>) and speeds up the heart. Neck veins are <strong>flat</strong>, lungs are <strong>clear</strong>, skin is cool: <strong>cold and dry</strong> (standard teaching).</p>" +
            "<p>The deck says <strong>hypovolemic shock is the most common form of shock</strong>. Causes are lost blood (hemorrhage) or lost fluid (vomiting, diarrhea, dehydration, pancreatitis, burns).</p>" +
            hy("This is the shock fluids fix. Fill the tank and the healthy pump moves right up its Starling curve.") },
        { title: "Distributive: the pipes go wide", fig: { type: "circuit", state: "distributive", focus: ["pipes"] },
          html: "<p>The vessels <strong>dilate</strong> everywhere, so <strong>SVR collapses</strong> and pressure falls, even though the pump works and the volume is technically all there. The same blood now fills a much bigger container, so relative preload drops too.</p>" +
            "<ul><li><strong>Sepsis</strong>: infection triggers widespread vasodilation and leaky vessels.</li><li><strong>Neurogenic</strong>: the deck's wording is <strong>loss of sympathetic vasomotor tone</strong> (spinal cord injury), and the heart may be slow too (standard teaching).</li><li><strong>Anaphylaxis</strong>: allergic vasodilation.</li></ul>" +
            "<p>Early on, CO is often normal or high and the skin can be <strong>warm</strong> (standard teaching), the opposite of the other three.</p>" },
        { title: "Obstructive: something blocks the flow", fig: { type: "circuit", state: "obstructive", focus: ["block"] },
          html: "<p>The pump and the tank are fine, but something physically <strong>blocks</strong> the heart from filling or emptying:</p>" +
            "<ul><li><strong>Tension pneumothorax</strong> and <strong>cardiac tamponade</strong> squeeze the heart so it can't fill.</li><li><strong>Pulmonary embolism</strong> blocks the outflow from the right heart.</li><li><strong>Aortic dissection</strong> is the deck's fourth example.</li></ul>" +
            "<p>Blood backs up behind the block, so neck veins are <strong>distended</strong>, but the lungs are often <strong>clear</strong> (standard teaching). The deck's treatment line is simple: <strong>urgently relieve the obstruction</strong>. No pressor fixes a clot or a tension pneumothorax.</p>" },
        { title: "Telling them apart at the bedside", fig: { type: "shocktable" },
          html: "<p>Three bedside questions sort most patients: <strong>neck veins</strong> (full or flat?), <strong>skin</strong> (warm or cold?) and <strong>lungs</strong> (wet or clear?).</p>" +
            "<p>The deck's synthesis slide asks the same thing in its own words: <strong>what mechanism fits?</strong> (volume loss, pump failure, vasodilation, obstruction) and <strong>is fluid tolerance limited?</strong> (JVP, crackles or rising O₂ need, focused echo or POCUS).</p>" +
            hy("<strong>Full neck veins + wet lungs</strong> = pump. <strong>Flat veins + clear lungs</strong> = tank. <strong>Warm and wide</strong> = pipes. <strong>Full veins + clear lungs</strong> = think block.") }
      ],
      checks: [
        K("A trauma patient has HR 132, BP 82/60, flat neck veins, clear lungs and cool skin. Which shock?", "Hypovolemic", ["Cardiogenic", "Distributive", "Obstructive"], "Flat veins and clear lungs with clamped-down cool skin = empty tank."),
        K("Which term of BP = CO × SVR falls first in septic shock?", "SVR", ["Contractility", "Preload from blood loss", "Heart rate"], "Distributive shock is wide pipes: SVR collapses."),
        K("A patient is hypotensive with distended neck veins, clear lungs and a trachea shifted to one side. Best next step?", "Urgently relieve the obstruction (tension pneumothorax)", ["Start norepinephrine and wait", "Give dobutamine", "Give furosemide"], "Obstructive shock is fixed by removing the block.")
      ],
      remember: [
        "<strong>Cardiogenic</strong> = pump: ↓ CO, ↑ SVR, ↑ preload (JVD, rales). Cold and wet.",
        "<strong>Hypovolemic</strong> = tank: ↓ preload → ↓ CO, ↑ SVR, flat veins. Cold and dry. <strong>Most common</strong> shock.",
        "<strong>Distributive</strong> = pipes: <strong>↓ SVR</strong>. Sepsis, neurogenic, anaphylaxis. Can be warm early.",
        "<strong>Obstructive</strong> = block: PE, tension PTX, tamponade, dissection. <strong>Relieve the obstruction</strong>.",
        "Bedside sort: <strong>neck veins, skin, lungs</strong>."
      ],
      practice: [
        tool("cardio2-scores-launch", "Scores & Calculators: Shock pattern finder", "Pick Shock, Pressors & Fluids → \"Shock pattern finder\": tick neck veins, skin and lungs, then try its cases."),
        obj("01-types-of-shock", "apply", "Lecture: Objective 1 apply", "Clinical cases on the four shock types."),
        tool("cardio2-diseases-launch", "Diseases tool", "Pick Shock, Pressors & Fluids for cardiogenic, hypovolemic and distributive shock cards.")
      ]
    },

    /* ---------------- 7 ---------------- */
    {
      id: "shl-compensation", part: "p2", title: "How the body fights back", goal: "The baroreceptor alarm, what the surge does, and the three phases of shock.",
      pages: [
        { title: "The alarm: baroreceptors",
          fig: { type: "flow", steps: ["Volume or pressure drops", "Carotid (and aortic) baroreceptors sense it", "Sympathetic surge, less vagal tone", "Epinephrine, norepinephrine, cortisol released"] },
          html: "<p>Pressure sensors called <strong>baroreceptors</strong> sit in the <strong>carotid arteries</strong> (and the aortic arch). When they sense a <strong>drop in volume</strong>, they trigger a <strong>sympathetic</strong> response and the vagal brake comes off.</p>" +
            "<p>A <strong>surge of vasoactive hormones</strong> follows: the deck lists <strong>epinephrine, norepinephrine and cortisol</strong> (and dopamine on the hypovolemia slide). These are the body's own pressors, pressing the same α and β buttons from lesson 5.</p>" },
        { title: "What the surge does", fig: { type: "equation", hi: ["hr", "con", "svr"], arrows: { hr: "up", con: "up", svr: "up" } },
          html: "<p>Run the surge through the equation and every change makes sense:</p>" +
            "<ul><li><strong>↑ Heart rate</strong> (β1) → ↑ CO.</li><li><strong>↑ Contractility</strong> (β1) → ↑ stroke volume → ↑ CO.</li><li><strong>Arteriole constriction</strong> (α1) → maintains <strong>SVR</strong> and BP, shunting blood <strong>away from liver, spleen, kidneys and periphery</strong>.</li><li><strong>Venous constriction</strong> → squeezes the tank → <strong>more blood returns to the heart</strong> (↑ preload).</li></ul>" +
            hy("This is why early shock looks like <strong>a fast heart and cold, pale skin</strong>: the body is spending the skin and gut to protect the brain and heart.") },
        { title: "Saving water: kidneys, ADH and the gut",
          fig: { type: "flow", steps: ["~10% drop in intravascular volume", "Hypothalamus → posterior pituitary", "ADH released", "Kidneys reabsorb water, thirst ↑, urine ↓ (oliguria)"] },
          html: "<p>Besides squeezing, the body tries to <strong>refill the tank</strong>:</p>" +
            "<ul><li><strong>Kidneys</strong>: sympathetic vasoconstriction <strong>shunts blood away from the kidneys</strong>, and <strong>RAAS</strong> pulls extravascular fluid into the vessels.</li><li><strong>Pituitary</strong>: a <strong>10% reduction in intravascular volume</strong> makes the hypothalamus stimulate the <strong>posterior pituitary</strong> to release <strong>ADH</strong> → water reabsorption, <strong>increased thirst</strong>, <strong>decreased urine (oliguria)</strong>.</li><li><strong>Intestines</strong>: absorb fluid from the intestinal spaces.</li></ul>" +
            "<p>So <strong>low urine output</strong> is not a kidney failure at first. It's the kidney obeying orders to save water, which is why urine output is such a useful perfusion gauge.</p>" },
        { title: "Phase 1, pre-shock: the cover-up", fig: { type: "phases", zone: 1 },
          html: "<p>Pre-shock is also called <strong>warm shock</strong> or <strong>compensated shock</strong>. The compensations above work well: the deck says a healthy adult can be <strong>asymptomatic despite a 10% reduction</strong> in effective arterial blood volume.</p>" +
            "<p>The fastest compensations are the <strong>sympathetic and renin systems</strong>, which hold up cardiac output and BP. <strong>Tachycardia and peripheral vasoconstriction may be the only clinical signs</strong>.</p>" +
            hy("Look at the graph: <strong>BP stays flat</strong> through pre-shock while heart rate climbs. A normal BP is the compensation working, not proof the patient is fine.") },
        { title: "Phase 2, shock: compensation overwhelmed", fig: { type: "phases", zone: 2 },
          html: "<p>Eventually the compensations are <strong>overwhelmed</strong> and signs of organ dysfunction appear. Each sign has a reason:</p>" +
            tbl(["Sign", "Why"], [
              ["<strong>Tachycardia</strong>", "Sympathetic drive trying to raise CO"],
              ["<strong>Hypotension</strong>", "Compensation can no longer hold the pressure"],
              ["<strong>Tachypnea</strong>", "Breathing off acid; hypoxia"],
              ["<strong>Anxiety</strong>", "Brain under-perfused, plus adrenaline"],
              ["<strong>Diaphoresis</strong>", "Sympathetic sweating"],
              ["<strong>Metabolic acidosis</strong>", "Cells without O₂ make lactate"],
              ["<strong>Oliguria</strong>", "Renal shunting and ADH"],
              ["<strong>Cool, clammy skin</strong>", "Vasoconstriction plus sweat"]]) },
        { title: "Phase 3, end-organ dysfunction", fig: { type: "phases", zone: 3 },
          html: "<p>Progressive organ dysfunction leads to <strong>irreversible organ damage and death</strong>:</p>" +
            "<ul><li><strong>Urine output declines further</strong> → <strong>acute renal failure</strong>, <strong>anuria</strong>.</li><li><strong>Decreased cardiac output</strong>: the heart itself is now starved.</li><li><strong>Altered mental status</strong> that progresses: <strong>anxiety → delirium</strong> (irrational behavior, agitation) <strong>→ obtundation → coma</strong>.</li></ul>" +
            mn("Mental status runs <strong>A-D-O-C</strong>: Anxiety, Delirium, Obtunded, Coma.") }
      ],
      checks: [
        K("What senses the drop in volume and starts the sympathetic response?", "Carotid (and aortic) baroreceptors", ["The SA node", "The posterior pituitary", "Lung stretch receptors"], "Baroreceptors trigger the sympathetic surge and the release of epinephrine, norepinephrine and cortisol."),
        K("Why does urine output fall early in shock?", "Renal vasoconstriction plus ADH release to save water", ["The kidneys are already dead", "IV fluids block the bladder", "Cortisol causes polyuria"], "Oliguria early is the kidney obeying the compensation; anuria and renal failure come in the end-organ phase."),
        K("In pre-shock, what may be the only clinical signs?", "Tachycardia and peripheral vasoconstriction", ["Hypotension and coma", "Anuria and acidosis", "Bradycardia and warm skin"], "The deck: tachycardia and peripheral vasoconstriction may be the only signs in pre-shock.")
      ],
      remember: [
        "<strong>Baroreceptors</strong> → sympathetic surge → <strong>epinephrine, norepinephrine, cortisol</strong>.",
        "Surge: <strong>↑ HR, ↑ contractility</strong>, arteriolar constriction (holds SVR, shunts from liver, spleen, kidneys, periphery), venous constriction (↑ return).",
        "<strong>ADH</strong> after ~10% volume loss: water reabsorption, thirst, <strong>oliguria</strong>. Gut absorbs fluid; RAAS.",
        "<strong>Pre-shock</strong> (warm/compensated): BP normal, tachycardia + vasoconstriction only.",
        "<strong>Shock</strong>: hypotension, tachypnea, anxiety, diaphoresis, acidosis, oliguria, cool clammy skin. <strong>End-organ</strong>: anuria/ARF, ↓ CO, AMS → coma."
      ],
      practice: [
        obj("02-phases-of-shock", "test", "Lecture: Objective 2 test", "Phases of shock as direct recall."),
        obj("03-response-to-shock", "apply", "Lecture: Objective 3 apply", "Cases on the body's response."),
        tool("cardio2-diseases-launch", "Diseases tool", "Pick Shock, Pressors & Fluids → \"Shock: Stages & Compensation\".")
      ]
    },

    /* ---------------- 8 ---------------- */
    {
      id: "shl-cardiogenic", part: "p2", title: "Cardiogenic shock", goal: "Usually a big MI: the downward spiral, what it looks like, the tests and the first moves.",
      pages: [
        { title: "Usually a big heart attack",
          fig: { type: "tiles", items: [["❤", "Myocardial damage", "MI (most common), contusion, cardiomyopathies"], ["〰", "Sustained arrhythmias", ""], ["⇄", "Valve or septal defects", "e.g. chordae rupture"], ["✚", "Cardiac surgery", ""]] },
          html: "<p>The deck groups causes into <strong>four categories</strong> (above). <strong>MI is by far the most common</strong>:</p>" +
            "<ul><li><strong>6-8%</strong> of patients with an acute MI develop cardiogenic shock.</li><li>It takes <strong>≥ 40% loss of myocardium</strong>, from one massive MI or a series of them.</li><li>It usually develops <strong>within 8 hours</strong> of a massive MI.</li><li>Usually <strong>multivessel disease</strong> of the <strong>left anterior heart</strong>: the <strong>left main</strong> and its branches.</li><li><strong>RV dysfunction</strong> causes about <strong>5%</strong>, from an <strong>inferior MI</strong> (right coronary artery).</li></ul>" +
            "<p><strong>Risk factors</strong>: age <strong>> 65</strong>; history of <strong>CAD, heart failure or diabetes</strong>; <strong>left main</strong> MI; mechanical complications (<strong>chordae tendineae rupture</strong>, rupture of the <strong>septum or free wall</strong>).</p>" },
        { title: "The downward spiral",
          fig: { type: "cycle", center: "pump failure", nodes: ["Big MI: less working muscle", "↓ Contractility → ↓ CO, ↓ BP", "↑ Preload and ↑ afterload (backup + clamping)", "↓ Coronary perfusion", "Less O₂ to the heart muscle", "Even weaker pump"] },
          html: "<p>The deck's pump-failure slide explains why cardiogenic shock feeds itself. Output falls because of <strong>↓ contractility, ↑ preload and ↑ afterload</strong>. Then the <strong>increased preload and afterload impair coronary perfusion</strong>, so the heart gets <strong>less oxygen</strong> and pumps even worse.</p>" +
            "<p>The result: <strong>↓ cardiac output → hypotension, hypoperfusion and tissue hypoxia</strong>.</p>" +
            hy("Everything you do in cardiogenic shock tries to break this loop: raise output, <strong>lower the heart's workload and oxygen needs</strong>, and <strong>raise coronary perfusion</strong>. The deck calls it a precarious balance.") },
        { title: "What it looks like", fig: { type: "circuit", state: "cardiogenic", focus: ["pump"] },
          html: "<p><strong>Symptoms</strong> are those of the MI plus low output: chest pain, dyspnea, diaphoresis, vomiting, arm or jaw pain, altered mental status, weakness, cool extremities.</p>" +
            tbl(["Sorted by mechanism", "Signs (deck)"], [
              ["<strong>Low output</strong> (forward)", "SBP <strong>< 90</strong> or a <strong>≥ 40 mmHg drop</strong> (may be normal in pre-shock); cool, clammy, <strong>mottled</strong> skin (livedo reticularis); ↓ urine; mental status sliding toward coma"],
              ["<strong>Backup</strong> (backward)", "<strong>JVD > 8 cm</strong>; <strong>rales</strong>, <strong>frothy sputum</strong>, tachypnea; peripheral pitting edema suggests pre-existing HF"],
              ["<strong>Clues to the cause</strong>", "<strong>Holosystolic murmur at the apex</strong> = MR from <strong>chordae rupture</strong>; <strong>displaced PMI</strong> = pre-existing cardiomyopathy or CHF"],
              ["<strong>Heart rate</strong>", "Tachycardia, except <strong>bradycardia</strong> (inferior/right MI) or normal (<strong>BB/CCB</strong>)"]]) },
        { title: "The tests, in order",
          fig: { type: "flow", steps: ["<strong>EKG</strong> first<br><small>within 10 min</small>", "<strong>Portable CXR</strong><br><small>edema, wide mediastinum, cardiomegaly</small>", "<strong>Echo</strong><br><small>↓ SV, wall motion, LVEF</small>", "<strong>Labs</strong><br><small>troponin, lactate, BNP…</small>"] },
          html: "<ul><li><strong>EKG</strong> is the <strong>first</strong> test, within <strong>10 minutes</strong> on a cardiac monitor, looking for MI and the need for reperfusion. STEMI = ST elevation <strong>≥ 1 mm in limb leads or 2 mm in precordial leads</strong> in <strong>2 contiguous leads</strong>. <strong>Wellens</strong> waves: big LAD lesions can give deep T-wave changes in V2-V3.</li>" +
            "<li><strong>Portable CXR</strong>: pulmonary edema, widened mediastinum, cardiomegaly.</li>" +
            "<li><strong>Echo</strong>: mechanical function and LVEF; shows <strong>decreased stroke volume</strong> and <strong>wall motion abnormalities</strong>.</li>" +
            "<li><strong>Labs</strong>: troponin I, CK, CK-MB (MI); <strong>lactate</strong> (systemic ischemia or sepsis); CBC (infection, anemia); CMP (liver, kidney, electrolytes); PT/INR, PTT (coagulopathy); <strong>BNP</strong>: a <strong>normal BNP suggests a diagnosis other than cardiogenic shock</strong>.</li></ul>" },
        { title: "First moves",
          fig: { type: "flow", vertical: true, steps: ["<strong>Airway + circulation together</strong>: O₂ (NC → NRB → BVM), most end up intubated", "<strong>IV access</strong> (saline lock); <strong>hold big boluses</strong>; cautious 250 cc only if no LV dysfunction signs", "<strong>Aspirin 324 mg PO + IV heparin</strong>", "<strong>Pressors / inotropes</strong>: dobutamine, dopamine, norepinephrine, epinephrine. <strong>No BB/CCB</strong>", "<strong>Cath lab</strong>: revascularization (or surgery for a mechanical catastrophe)"] },
          html: "<p>Emergency care is a <strong>temporizing measure</strong> while you arrange <strong>revascularization or reperfusion in the cath lab</strong> (or surgery for a mechanical catastrophe). <strong>Airway management and circulatory stabilization happen at the same time</strong>, often before a full history, exam or test results.</p>" +
            "<p>Notice how each step follows from the physiology: oxygen for starving tissue, no fluid flood for a flat Starling curve, blood thinners for the clot, inotropes to lift the curve, no negative inotropes, and the cath lab to fix the actual cause.</p>" }
      ],
      checks: [
        K("What is the most common cause of cardiogenic shock?", "Acute MI, usually with ≥ 40% of the myocardium lost", ["Myocarditis", "Tension pneumothorax", "Hemorrhage"], "6-8% of AMI patients develop it; it takes ≥ 40% loss of myocardium."),
        K("What is the FIRST diagnostic test in suspected cardiogenic shock?", "EKG within 10 minutes", ["Echocardiogram", "BNP", "Chest CT"], "EKG first, to find an MI and the need for reperfusion."),
        K("A patient post-MI has a new holosystolic murmur at the apex and sudden pulmonary edema. What happened?", "Chordae tendineae rupture causing acute mitral regurgitation", ["Pericarditis", "Aortic stenosis", "Normal flow murmur"], "Holosystolic apical murmur = MR from chordae rupture, a mechanical complication.")
      ],
      remember: [
        "<strong>MI</strong> is the most common cause; <strong>6-8%</strong> of AMIs; <strong>≥ 40%</strong> myocardium lost; usually <strong>within 8 h</strong>; left main / multivessel.",
        "Spiral: ↓ contractility + ↑ preload + ↑ afterload → ↓ <strong>coronary perfusion</strong> → weaker pump.",
        "Signs: SBP <strong>< 90</strong> or <strong>≥ 40 drop</strong>, <strong>JVD > 8 cm</strong>, rales, cool mottled skin, ↓ urine.",
        "Tests: <strong>EKG first (10 min)</strong>, CXR, echo, labs; <strong>normal BNP → think of another diagnosis</strong>.",
        "First moves: airway + circulation, saline lock / hold boluses, <strong>ASA 324 + heparin</strong>, pressors, <strong>no BB/CCB</strong>, <strong>cath lab</strong>."
      ],
      practice: [
        obj("04b-cardiogenic-clinical-features", "apply", "Lecture: cardiogenic shock cases", "Objective 4b clinical application."),
        obj("05-cardiogenic-emergency-management", "apply", "Lecture: emergency management cases", "Objective 5 clinical application."),
        tool("cardio2-diseases-launch", "Diseases tool", "Pick Shock, Pressors & Fluids → \"Cardiogenic Shock\".")
      ]
    },

    /* ---------------- 9 ---------------- */
    {
      id: "shl-pick-pressor", part: "p3", title: "Picking a pressor", goal: "Dobutamine, norepinephrine and epinephrine through their receptors, and the one-line choice.",
      pages: [
        { title: "The deck's table as receptor bars", fig: { type: "pressors" },
          html: "<p>Every pressor in the lecture is a mix of the four buttons. Read each row left to right:</p>" +
            tbl(["Drug", "Cardiac stimulation", "Vasoconstriction"], [
              ["Dobutamine", "<strong>++++</strong>", "+"],
              ["Dopamine", "++ at 5 mcg/kg/min", "++ at 15 mcg/kg/min"],
              ["Norepinephrine", "++", "<strong>++++</strong>"],
              ["Epinephrine", "+++", "++"]]) +
            "<p>Two drugs sit at the ends: <strong>dobutamine</strong> is almost all heart, <strong>norepinephrine</strong> is mostly squeeze. Epinephrine and dopamine are mixtures.</p>" +
            "<p>General rules from the deck: pressors improve perfusion pressure in the large vessels; if several are running, <strong>simplify</strong> once the best one is found; give them <strong>ideally through a central line</strong>, though initial doses can go through a peripheral IV.</p>" },
        { title: "Norepinephrine: the preferred squeeze", fig: { type: "receptors", drug: "norepinephrine" },
          html: "<p><strong>Norepinephrine (Levophed)</strong> presses <strong>mostly α1</strong> and <strong>some β1</strong>:</p>" +
            "<ul><li>α1: <strong>↑ arterial and venous tone</strong>, ↑ peripheral vascular resistance.</li><li>β1: ↑ heart rate and contraction.</li><li>It <strong>shunts blood away from the peripheral circulation</strong> (watch the fingers and toes).</li></ul>" +
            "<p>It is the <strong>preferred agent in cardiogenic shock</strong>, indicated when <strong>SBP < 90</strong>, onset <strong>1-2 minutes</strong>, and used as a <strong>single potent vasopressor</strong>.</p>" +
            hy("SBP under 90 needs <strong>pressure</strong> first: a drug that squeezes. That's norepinephrine.") },
        { title: "Dobutamine: more squeeze, wider pipes", fig: { type: "receptors", drug: "dobutamine" },
          html: "<p><strong>Dobutamine</strong> is synthetic and mostly <strong>β1</strong> (positive inotrope), with some <strong>β2</strong> (peripheral vasodilation). The result: <strong>↑ contractility</strong> and <strong>vasodilation</strong> with <strong>minimal change in heart rate</strong>, so <strong>CO rises and SVR falls</strong>.</p>" +
            "<p>Now apply BP = CO × SVR. Output goes up, but resistance goes down, so the BP may <strong>not</strong> rise and can even drop. That's why the deck says use it <strong>only when SBP ≥ 90</strong> (avoid when SBP < 90): cardiogenic shock <strong>without profound hypotension</strong>.</p>" +
            "<p>Onset <strong>1-2 minutes</strong>. It may be combined with <strong>dopamine</strong>.</p>" +
            an("Dobutamine is a better pump with the nozzle loosened: more water flows, but the pressure gauge may not budge.") },
        { title: "Epinephrine: everything, dose dependent", fig: { type: "receptors", drug: "epinephrine" },
          html: "<p><strong>Epinephrine</strong> presses <strong>α1, β1 and β2</strong>:</p>" +
            "<ul><li><strong>β1</strong>: ↑ contraction and rate → ↑ CO.</li><li><strong>β2</strong>: vasodilation, may <strong>↓ SVR at lower doses</strong>.</li><li><strong>α1</strong>: vasoconstriction, <strong>more prominent at higher doses</strong>, ↑ SVR.</li></ul>" +
            "<p>So its net effect on SVR is <strong>dose dependent</strong>. It's used as an <strong>alternative to norepinephrine</strong>, onset <strong>1-2 minutes</strong>, but it causes more <strong>systemic acidosis, tachycardia and dysrhythmias</strong> than norepinephrine. That makes sense: more β1 means a faster, more irritable heart.</p>" },
        { title: "The choice in one line",
          fig: { type: "flow", steps: ["Cardiogenic shock", "<strong>SBP < 90</strong> → norepinephrine (preferred); dopamine or epinephrine as options", "<strong>SBP ≥ 90</strong>, poor output → dobutamine (± dopamine)"] },
          html: tbl(["Drug", "Main buttons", "When (deck)", "Onset", "Watch for"], [
              ["<strong>Norepinephrine</strong>", "α1 > β1", "<strong>Preferred</strong>; SBP < 90; single agent", "1-2 min", "Peripheral shunting"],
              ["<strong>Dobutamine</strong>", "β1 (+β2)", "<strong>SBP ≥ 90</strong> only", "1-2 min", "BP drop (↓ SVR)"],
              ["<strong>Dopamine</strong>", "D, β1, α1 by dose", "SBP < 90; alone or + dobutamine", "<strong>5 min</strong>", "Dose-limiting dysrhythmias"],
              ["<strong>Epinephrine</strong>", "α1, β1, β2", "Alternative to norepi", "1-2 min", "Acidosis, tachycardia, dysrhythmias"]]) +
            mn("<strong>Dobutamine needs a Decent BP</strong> (≥ 90). <strong>Norepi for No pressure</strong> (< 90).") }
      ],
      checks: [
        K("Cardiogenic shock, BP 74/48. Which agent is preferred?", "Norepinephrine", ["Dobutamine alone", "Metoprolol", "Low-dose dopamine for the kidneys"], "Norepinephrine is the preferred agent and is indicated with SBP < 90."),
        K("Why does dobutamine need an SBP of at least 90?", "Its β2 vasodilation lowers SVR, so BP can drop", ["It slows the heart too much", "It only works in the kidneys", "It takes an hour to start"], "↑ CO with ↓ SVR: the BP may not rise and can fall."),
        K("Compared with norepinephrine, epinephrine causes more of what?", "Acidosis, tachycardia and dysrhythmias", ["Bradycardia", "Renal vasodilation", "Hypoglycemia only"], "The deck lists increased systemic acidosis, tachycardia and dysrhythmias.")
      ],
      remember: [
        "<strong>Norepinephrine</strong>: α1 > β1, <strong>preferred</strong> in cardiogenic shock, SBP < 90, 1-2 min.",
        "<strong>Dobutamine</strong>: β1 (+β2): ↑ contractility, ↓ SVR, little HR change; <strong>only if SBP ≥ 90</strong>.",
        "<strong>Epinephrine</strong>: α1, β1, β2; SVR dose dependent; alternative to norepi; more acidosis/tachycardia/dysrhythmias.",
        "<strong>Dopamine</strong>: onset <strong>5 min</strong>, dose-limiting dysrhythmias (next lesson).",
        "Simplify multiple pressors; ideally <strong>central line</strong> (initial doses peripheral OK)."
      ],
      practice: [
        tool("cardio2-meds-launch", "Medications tool: pressors", "Pick the pressor class for norepinephrine, epinephrine, dopamine and dobutamine cards, flashcards and practice."),
        obj("06b-dobutamine", "test", "Lecture: Dobutamine test", "Then try 6d Norepinephrine and 6e Epinephrine from the Test tab.")
      ]
    },

    /* ---------------- 10 ---------------- */
    {
      id: "shl-dopamine-dial", part: "p3", title: "Dopamine's dose dial", goal: "One drug, three personalities: kidneys, then heart, then squeeze.",
      pages: [
        { title: "One drug, three personalities", fig: { type: "dopamine", dose: 6 },
          html: "<p>Dopamine stimulates <strong>dopaminergic, β1 and α1</strong> receptors. Which one wins depends on the <strong>dose</strong>, because each set of receptors switches on at a different level.</p>" +
            "<p>Drag the slider through the whole range and watch the effect change. The thresholds are <strong>3</strong> and <strong>10 mcg/kg/min</strong>.</p>" +
            mn("<strong>Renal, Rate, Restrict</strong>: under 3 = renal, 3-10 = rate (β1), over 10 = restrict (α1).") },
        { title: "Low dose, under 3: the kidneys", fig: { type: "dopamine", dose: 2 },
          html: "<p>At <strong>< 3 mcg/kg/min</strong>, dopaminergic receptors dominate: <strong>arterial vasodilation</strong>, <strong>↑ renal blood flow and urine output</strong>.</p>" +
            "<p>Note that low-dose dopamine does little for blood pressure. It opens the kidney and gut vessels; it doesn't squeeze or pump.</p>" },
        { title: "Intermediate, 3 to 10: the heart", fig: { type: "dopamine", dose: 6 },
          html: "<p>At <strong>3-10 mcg/kg/min</strong> the effects are <strong>mixed dopaminergic and β1</strong>: <strong>↑ SA node stimulation</strong> (rate), <strong>improved contractility and cardiac output</strong>.</p>" +
            "<p>The deck's table puts this at about <strong>5 mcg/kg/min</strong>, where cardiac stimulation is <strong>++</strong>.</p>" },
        { title: "High dose, over 10: the squeeze", fig: { type: "dopamine", dose: 15 },
          html: "<p>Above <strong>10 mcg/kg/min</strong>, <strong>α1</strong> dominates: <strong>peripheral vasoconstriction</strong>, ↑ SVR and BP. The deck's table shows vasoconstriction <strong>++ at 15 mcg/kg/min</strong>.</p>" +
            "<p>The price: it also <strong>vasoconstricts the kidneys</strong>, which can cause <strong>renal necrosis and failure</strong>. The same drug that boosted urine at 2 can shut the kidneys down at 18.</p>" +
            hy("The deck's slide 40 splits dopamine at <strong>10</strong> only (dilation below, constriction above); slide 46 gives the three tiers. Learn the three tiers: <strong>3 and 10</strong>.") },
        { title: "When to use it",
          fig: { type: "tiles", items: [["⏱", "Onset 5 min", "slower than the others (1-2 min)"], ["↓", "SBP < 90", "indicated in hypotension"], ["+", "Alone or with dobutamine", "the two can be combined"], ["⚡", "Dysrhythmias", "can be dose limiting"]] },
          html: "<p>Dopamine is indicated in hypotension with <strong>SBP < 90</strong>. Its onset is <strong>5 minutes</strong>, slower than dobutamine, norepinephrine and epinephrine (all <strong>1-2 minutes</strong>).</p>" +
            "<p>It can be a <strong>single agent</strong> or <strong>combined with dobutamine</strong>, and it can cause <strong>dose-limiting dysrhythmias</strong> (that's the β1 again).</p>" }
      ],
      checks: [
        K("Dopamine is running at 2 mcg/kg/min and urine output rises. Why?", "Low-dose dopaminergic renal vasodilation", ["α1 vasoconstriction", "β2 bronchodilation", "ADH release"], "Under 3: renal and mesenteric vasodilation, ↑ renal blood flow and urine."),
        K("Dopamine is titrated to 18 mcg/kg/min and urine output falls. Why?", "High-dose α1 vasoconstriction of the kidneys", ["Low-dose renal dilation", "β2 effects", "Too much fluid"], "Over 10, α1 dominates and can cause renal necrosis and failure."),
        K("Which pressor has the slowest onset in the deck?", "Dopamine, about 5 minutes", ["Norepinephrine", "Dobutamine", "Epinephrine"], "The other three start in 1-2 minutes.")
      ],
      remember: [
        "<strong>< 3</strong> mcg/kg/min: dopaminergic → renal vasodilation, ↑ renal flow and urine.",
        "<strong>3-10</strong>: dopaminergic + <strong>β1</strong> → ↑ HR (SA node), ↑ contractility, ↑ CO.",
        "<strong>> 10</strong>: <strong>α1</strong> → vasoconstriction, including the kidneys → renal necrosis/failure.",
        "Indicated with <strong>SBP < 90</strong>; onset <strong>5 min</strong>; alone or with dobutamine; dose-limiting dysrhythmias.",
        "<strong>Renal, Rate, Restrict</strong> at <strong>3 and 10</strong>."
      ],
      practice: [
        tool("cardio2-scores-launch", "Scores & Calculators: Dopamine dose", "Pick Shock, Pressors & Fluids → \"Dopamine dose and effect\" for dose-to-effect cases."),
        obj("07-dopamine-dosing", "test", "Lecture: Objective 7 test", "Dopamine dosing thresholds as direct recall.")
      ]
    },

    /* ---------------- 11 ---------------- */
    {
      id: "shl-devices-goals", part: "p3", title: "Lines, the balloon pump and the goals", goal: "Which device measures or fixes what, and the five numbers you resuscitate to.",
      pages: [
        { title: "Foley: the kidneys as a perfusion meter", fig: { type: "targets", hi: ["uo"] },
          html: "<p>A <strong>Foley catheter</strong> in the bladder (placed in the ED or ICU) <strong>accurately measures urine output</strong>, which tells you about the patient's <strong>perfusion status</strong>.</p>" +
            "<p>Goal: <strong>> 0.5 mL/kg/hr</strong>, about <strong>35 mL/hr</strong> for an average adult (the deck uses 75 kg on one slide and 70 kg on another; 35 mL/hr either way).</p>" +
            "<p>Why the kidneys? From lesson 7, they're among the first organs the body sacrifices when perfusion falls. When urine output comes back up, perfusion is coming back.</p>" },
        { title: "Central line: pressors and CVP",
          fig: { type: "tiles", items: [["💉", "Give pressors safely", "peripheral IVs can cause venous sclerosis and necrosis if they leak"], ["📏", "Measure CVP", "pressure in the vena cava ≈ preload; normal 8-12, goal ≥ 8"]] },
          html: "<p>A <strong>central venous line</strong> (ED or ICU) is used to <strong>monitor central venous pressure</strong> and to <strong>give vasopressors and fluids</strong>.</p>" +
            "<p>Why not just a peripheral IV? Continuous pressors through a peripheral line can cause <strong>venous sclerosis and tissue necrosis if extravasation occurs</strong>: that's α1 squeezing the tissue around a leak. So <strong>beyond emergency care, vasopressors must go through a central line</strong>.</p>" +
            "<p><strong>CVP</strong> = pressure in the vena cava, an <strong>estimate of preload</strong> and right atrial pressure, best measured with the catheter in the <strong>internal jugular</strong> at the top of the SVC. Normal <strong>8-12 mmHg</strong>.</p>" },
        { title: "Arterial line: MAP beat by beat", fig: { type: "targets", hi: ["map", "sbp"] },
          html: "<p>An <strong>arterial line</strong> (ED or ICU; <strong>radial</strong> is most common, also brachial, dorsalis pedis, femoral or axillary) measures arterial pressure continuously, a <strong>more accurate way to monitor perfusion</strong> than cuff pressures, and lets you draw <strong>ABGs</strong>.</p>" +
            "<p>It's the most accurate way to follow <strong>MAP</strong>: normal <strong>65-90</strong>, goal <strong>≥ 65</strong>. When you're titrating a pressor minute to minute, you want this number live.</p>" },
        { title: "The intra-aortic balloon pump", fig: { type: "iabp" },
          html: "<p>The <strong>IABP</strong> is a <strong>10-inch balloon</strong> in the <strong>descending aorta</strong>, placed in the <strong>cath lab</strong>, that <strong>pumps in synchrony with the heart</strong>:</p>" +
            "<ul><li><strong>Inflates in diastole</strong>: pushes blood back up the aorta into the <strong>coronary arteries</strong> (which fill during diastole) → <strong>↑ coronary perfusion</strong>.</li><li><strong>Deflates just before systole</strong>: leaves an emptier aorta for the heart to eject into → <strong>↓ afterload</strong> and <strong>↓ myocardial O₂ demand</strong>.</li></ul>" +
            hy("It's the one tool that does all three of the deck's goals at once: <strong>↑ output, ↓ workload and O₂ need, ↑ coronary perfusion</strong>. That's why it suits the cardiogenic spiral.") },
        { title: "Swan-Ganz and LVAD",
          fig: { type: "tiles", items: [["〽", "Swan-Ganz (PA catheter)", "R jugular → pulmonary artery. PA pressure, wedge pressure, CO, mixed venous O₂ sat. ICU, CCU or cath lab."], ["⚙", "LVAD", "pumps blood from the LV (or LA) to the aorta. Short-term stabilization, not long-term. OR or cath lab."]] },
          html: "<p>The <strong>pulmonary artery (Swan-Ganz) catheter</strong> goes in usually through the <strong>right jugular vein</strong> and is floated into the <strong>pulmonary artery</strong>. It measures <strong>PA pressure</strong>, <strong>pulmonary capillary wedge pressure</strong> (a stand-in for left-heart filling), <strong>cardiac output</strong> and <strong>mixed venous saturation</strong> (how much oxygen the body pulled out). The deck writes \"ScVO2\" on one slide; a PA catheter measures mixed venous (SvO₂).</p>" +
            "<p>The <strong>left ventricular assist device (LVAD)</strong> <strong>pumps blood from the left ventricle or left atrium to the aorta</strong>. In shock it's used to <strong>assist the LV short term for stabilization</strong>, not as a long-term solution.</p>" },
        { title: "The five resuscitation goals", fig: { type: "targets" },
          html: "<p>The deck's <strong>goals of resuscitation</strong>:</p>" +
            tbl(["Goal", "Target", "Measured by"], [
              ["Urine output", "<strong>> 0.5 mL/kg/hr</strong> (~35 mL/hr)", "Foley"],
              ["CVP", "<strong>≥ 8 mmHg</strong>", "Central line"],
              ["MAP", "<strong>≥ 65 mmHg</strong>", "Arterial line"],
              ["SBP", "<strong>≥ 90 mmHg</strong>", "Arterial line or cuff"],
              ["SpO₂", "<strong>≥ 92%</strong>", "Pulse oximeter"]]) +
            mn("<strong>65, 90, 92, 8 and a half</strong>: MAP 65, SBP 90, sat 92, CVP 8, urine 0.5.") +
            "<p>But remember the synthesis slide: treat the physiology, <strong>not the BP alone</strong>. Hitting a MAP of 65 while the patient is still confused with a climbing lactate isn't success.</p>" }
      ],
      checks: [
        K("Why must continuous vasopressors go through a central line beyond the emergency phase?", "A peripheral IV can cause venous sclerosis and tissue necrosis if it leaks", ["Central lines make the drug work faster", "Pressors are inactivated by peripheral blood", "Peripheral IVs raise the CVP"], "Extravasation of a vasoconstrictor kills the surrounding tissue."),
        K("When does the IABP balloon inflate?", "During diastole, to push blood into the coronaries", ["During systole, to help the heart eject", "Only during cardiac arrest", "Continuously"], "Inflate in diastole (↑ coronary perfusion), deflate just before systole (↓ afterload)."),
        K("Which set is the deck's resuscitation goals?", "UO > 0.5 mL/kg/hr, CVP ≥ 8, MAP ≥ 65, SBP ≥ 90, SpO₂ ≥ 92%", ["UO > 2 mL/kg/hr, CVP ≥ 20, MAP ≥ 100, SBP ≥ 140, SpO₂ 100%", "MAP ≥ 50 only", "HR < 60 and SBP > 160"], "Five goals: urine, CVP, MAP, SBP, SpO₂.")
      ],
      remember: [
        "<strong>Foley</strong>: urine output, goal <strong>> 0.5 mL/kg/hr</strong> (~35 mL/hr).",
        "<strong>Central line</strong>: CVP (≈ preload, normal 8-12) and pressors; peripheral pressors risk <strong>necrosis</strong>.",
        "<strong>Arterial line</strong>: continuous BP/MAP and ABGs; radial most common.",
        "<strong>IABP</strong> (cath lab): <strong>inflates in diastole</strong> (↑ coronary flow), <strong>deflates before systole</strong> (↓ afterload, ↓ O₂ demand).",
        "<strong>Swan-Ganz</strong>: PA pressure, wedge, CO, mixed venous sat. <strong>LVAD</strong>: LV/LA → aorta, short-term.",
        "Goals: <strong>MAP ≥ 65, SBP ≥ 90, SpO₂ ≥ 92, CVP ≥ 8, UO > 0.5</strong>."
      ],
      practice: [
        obj("08b-iabp-swan-lvad", "test", "Lecture: IABP, Swan-Ganz and LVAD test", "Objective 8b. Try 8a (Foley, central and arterial lines) next."),
        obj("09-goals-of-resuscitation", "test", "Lecture: goals of resuscitation test", "Objective 9 direct recall."),
        tool("cardio2-scores-launch", "Scores & Calculators: Urine output and MAP", "Pick Shock, Pressors & Fluids → \"Urine output rate\" and \"MAP and resuscitation targets\".")
      ]
    },

    /* ---------------- 12 ---------------- */
    {
      id: "shl-compartments", part: "p4", title: "Where the body's water lives", goal: "Inside cells, between cells, in the vessels, and the third space.",
      pages: [
        { title: "About 60% of you is water", fig: { type: "compartments" },
          html: "<p><strong>60%</strong> of an average adult's body weight is water. It lives in two main compartments:</p>" +
            "<ul><li><strong>Intracellular (ICF)</strong>: inside the cells.</li><li><strong>Extracellular (ECF)</strong>: outside the cells, split into <strong>interstitial</strong> (between cells), <strong>intravascular</strong> (plasma, in the vessels), and a small <strong>transcellular</strong> part (CSF, synovial, peritoneal, ocular fluid).</li></ul>" +
            mn("<strong>60-40-20</strong> (standard teaching): 60% of weight is water, 40% is inside cells, 20% is outside cells.") },
        { title: "Inside the cells: the biggest box", fig: { type: "compartments", hi: "icf" },
          html: "<p>The <strong>intracellular space</strong> is the fluid inside the cell membranes: about <strong>28 liters</strong>, roughly <strong>40% of body weight</strong>, so about two-thirds of all body water.</p>" +
            "<p>Its main electrolytes are different from the outside: <strong>lots of potassium</strong>, moderate <strong>magnesium and phosphorus</strong>.</p>" +
            "<p>Water in here can't help blood pressure directly. But it matters a lot when you pick a fluid: some bags send most of their water <strong>into</strong> the cells.</p>" },
        { title: "Between the cells: interstitial fluid", fig: { type: "compartments", hi: "isf" },
          html: "<p>The <strong>interstitial space</strong> holds about <strong>10 liters</strong> (<strong>~14%</strong> of body weight). It <strong>bathes and surrounds the cells</strong> and lets ions, proteins, gases and wastes move between blood and cells.</p>" +
            "<p>It's made by the <strong>heart's systolic force pushing water out of the capillaries</strong>, and returned to the blood through the <strong>lymphatic system</strong>. When too much collects here, you get <strong>edema</strong>.</p>" +
            "<p>The extracellular fluid is <strong>sodium and chloride</strong> rich, with moderate bicarbonate and a little calcium.</p>" },
        { title: "In the vessels: the only water that perfuses", fig: { type: "compartments", hi: "ivf" },
          html: "<p>The <strong>intravascular space</strong> holds about <strong>5 liters of blood</strong>: plasma, platelets and RBCs. <strong>RBCs, platelets and plasma proteins can't pass through capillary walls</strong>, so they stay here.</p>" +
            "<p>Its volume is controlled by <strong>osmotic pressure gradients, hydrostatic pressure gradients and the kidneys</strong>. Hydrostatic pressure is the <strong>pushing</strong> force; osmotic pressure is the <strong>pulling</strong> force (next lesson).</p>" +
            hy("Shock is a problem of this <strong>small 5 L box</strong>. Resuscitation means getting fluid into it and keeping it there.") },
        { title: "Third spacing: swollen but dry", fig: { type: "compartments", third: true },
          html: "<p><strong>Transcellular spaces</strong> (pleural, peritoneal, pericardial, CSF, joint spaces, GI tract) hold fluid that <strong>isn't available</strong> to support blood pressure or fix electrolytes.</p>" +
            "<p><strong>Third spacing</strong> is the abnormal shift of extracellular fluid into tissues or body cavities: burns, ascites, pancreatitis, pleural effusions.</p>" +
            hy("The deck's key point: a patient can have <strong>too much fluid in the body</strong> and <strong>too little in the vessels</strong> at the same time. Swollen, with ascites, and still in hypovolemic shock.") }
      ],
      checks: [
        K("What share of adult body weight is water?", "About 60%", ["About 20%", "About 40%", "About 90%"], "60% of body weight is water; 40% is intracellular."),
        K("Where does most of the body's water sit?", "Inside the cells (about 28 L)", ["In the blood vessels", "In the interstitial space", "In the GI tract"], "ICF ≈ 28 L vs about 10 L interstitial and about 5 L of blood."),
        K("A burn patient is visibly swollen but hypotensive with low urine output. How?", "Third spacing: fluid has moved out of the vessels into the tissues", ["She is fluid overloaded, so give diuretics", "Burns raise SVR too much", "The kidneys are making extra urine"], "Excess fluid in the body with inadequate circulating volume.")
      ],
      remember: [
        "<strong>60%</strong> of body weight is water; <strong>ICF ≈ 28 L (40%)</strong>, <strong>interstitial ≈ 10 L (14%)</strong>, <strong>~5 L blood</strong> in the vessels.",
        "ICF: <strong>K⁺</strong> (plus Mg, phos). ECF: <strong>Na⁺ and Cl⁻</strong> (plus HCO₃⁻, a little Ca).",
        "Interstitial fluid is pushed out by the heart, returned by <strong>lymph</strong>; excess = <strong>edema</strong>.",
        "RBCs, platelets and plasma proteins <strong>stay in the vessels</strong>.",
        "<strong>Third spacing</strong>: too much fluid in the body, too little in the vessels."
      ],
      practice: [
        obj("10-fluid-compartments", "test", "Lecture: Objective 10 test", "Body fluid compartments as direct recall."),
        tool("cardio2-concepts-launch", "Concepts tool", "Pick Shock, Pressors & Fluids → \"Where IV fluid ends up\".")
      ]
    },

    /* ---------------- 13 ---------------- */
    {
      id: "shl-forces", part: "p4", title: "What moves water", goal: "Push vs pull at the capillary, osmosis, osmolality and tonicity.",
      pages: [
        { title: "Hydrostatic pressure pushes out", fig: { type: "capillary" },
          html: "<p>Inside a capillary, blood pressure <strong>pushes</strong> water out through the wall into the interstitial space. That's <strong>hydrostatic pressure</strong>, the <strong>pushing force</strong>. It's strongest at the arterial end of the capillary.</p>" +
            an("A soaker garden hose: the higher the water pressure, the more seeps out along its length.") },
        { title: "Oncotic pressure pulls back in", fig: { type: "capillary" },
          html: "<p><strong>Plasma proteins</strong> (mostly albumin) are too big to leave the capillary. Water is drawn toward them, so they <strong>pull</strong> water back in. This is the <strong>osmotic (oncotic) pressure</strong>, the <strong>pulling force</strong>.</p>" +
            "<p>Push and pull nearly balance. The little that's left over in the interstitium is collected by the <strong>lymphatics</strong>. When the balance tips (too much push, too little pull, or blocked lymph), fluid builds up as <strong>edema</strong>.</p>" +
            std("Low albumin (liver disease, malnutrition) weakens the pull, which is one reason those patients swell.") },
        { title: "Leaky pipes: sepsis and hemorrhage", fig: { type: "capillary", leaky: true },
          html: "<p>In <strong>sepsis and hemorrhagic disease</strong>, the deck says the vessels become <strong>so permeable that even the proteins can flow freely into the interstitial space</strong>.</p>" +
            "<p>Once the proteins leak out, they pull water out with them. That's why these patients swell, why third spacing happens, and why colloids, which rely on staying in the vessels, lose their advantage.</p>" },
        { title: "Osmosis: water follows particles",
          fig: { type: "tiles", items: [["⇢", "Diffusion", "particles move from high concentration to low"], ["💧", "Osmosis", "WATER moves across a membrane toward the side with MORE particles"], ["⚖", "Osmotic pressure", "the pressure that water movement creates"]] },
          html: "<p><strong>Diffusion</strong> is particles moving down their concentration gradient, from crowded to less crowded.</p>" +
            "<p><strong>Osmosis</strong> is <strong>water</strong> moving across a semipermeable membrane. Water moves from where there's <strong>more water (fewer particles)</strong> to where there's <strong>less water (more particles)</strong>. That movement generates <strong>osmotic pressure</strong>.</p>" +
            mn("<strong>Water chases salt</strong> (and any other particle).") +
            "<p>Because water moves so freely, the <strong>total concentration ends up the same in every compartment</strong>, even though the specific electrolytes differ (K⁺ inside, Na⁺ outside).</p>" },
        { title: "Osmolality: counting the particles",
          fig: { type: "flow", steps: ["Serum osmolality = <strong>2 × Na</strong>", "+ <strong>glucose ÷ 18</strong>", "+ <strong>BUN ÷ 2.8</strong>", "Normal <strong>275-295</strong> mOsm/kg"] },
          html: "<p><strong>Osmolarity</strong> = osmoles per liter of solution; <strong>osmolality</strong> = osmoles per kg of solvent. <strong>90-95%</strong> of serum osmolality comes from <strong>NaCl and NaHCO₃</strong>; about <strong>5%</strong> from <strong>glucose and BUN</strong>. (Na is doubled because each Na brings a partner anion.)</p>" +
            "<p>The <strong>osmolal gap</strong> = measured osmolality − calculated osmolality, normally <strong>< 10</strong>. A gap <strong>> 10</strong> means there are <strong>abnormal, unmeasured solutes</strong> in the fluid (toxic alcohols are the classic example, standard teaching).</p>" },
        { title: "Tonicity: what happens to the cell", fig: { type: "tonicity" },
          html: "<p><strong>Tonicity</strong> is the effect a fluid has on <strong>cell size</strong>:</p>" +
            "<ul><li><strong>Isotonic</strong>: cells don't change size.</li><li><strong>Hypotonic</strong> (fewer particles than the cell): water rushes <strong>in</strong>, cells <strong>swell</strong>.</li><li><strong>Hypertonic</strong> (more particles): water is pulled <strong>out</strong>, cells <strong>shrink</strong>.</li></ul>" +
            hy("Brain cells in a skull have nowhere to swell. That's why too much hypotonic fluid can cause <strong>cerebral edema</strong>, and why hypertonic saline can <strong>shrink</strong> a swollen brain.") }
      ],
      checks: [
        K("Which force pushes water OUT of the capillary?", "Hydrostatic pressure", ["Oncotic pressure", "Lymphatic flow", "Osmolal gap"], "Hydrostatic = pushing; osmotic/oncotic = pulling."),
        K("A cell is placed in a hypotonic fluid. What happens?", "Water moves in and the cell swells", ["Water moves out and the cell shrinks", "Nothing changes", "The cell loses potassium only"], "Water moves toward the side with more particles, here the inside of the cell."),
        K("Na 140, glucose 90, BUN 14. What is the calculated serum osmolality?", "About 290 mOsm/kg", ["About 140", "About 250", "About 330"], "2 × 140 + 90/18 + 14/2.8 = 280 + 5 + 5 = 290.")
      ],
      remember: [
        "<strong>Hydrostatic = push</strong> out; <strong>osmotic/oncotic = pull</strong> in (proteins stay in the vessel).",
        "Lymph returns the excess; imbalance → <strong>edema</strong>. Sepsis/hemorrhage make vessels leak even proteins.",
        "<strong>Osmosis</strong>: water moves toward more particles. Water chases salt.",
        "Osm = <strong>2Na + glucose/18 + BUN/2.8</strong>, normal <strong>275-295</strong>; gap <strong>> 10</strong> = unmeasured solute.",
        "<strong>Isotonic</strong> no change, <strong>hypotonic</strong> cells swell, <strong>hypertonic</strong> cells shrink."
      ],
      practice: [
        tool("cardio2-scores-launch", "Scores & Calculators: Osmolality", "Pick Shock, Pressors & Fluids → \"Serum osmolality and osmolal gap\"."),
        obj("11b-osmolality-tonicity", "test", "Lecture: osmolality and tonicity test", "Objective 11b. Objective 11a covers electrolytes, diffusion and pressures.")
      ]
    },

    /* ---------------- 14 ---------------- */
    {
      id: "shl-choose-fluid", part: "p4", title: "Choosing a fluid", goal: "Crystalloid vs colloid, where one liter goes, the 3:1 rule, and isotonic vs hypotonic vs hypertonic.",
      pages: [
        { title: "Crystalloids vs colloids",
          fig: { type: "tiles", items: [["🧂", "Crystalloids", "electrolytes + sterile water: NS, LR, D5W. Cheap. Most leaves the vessels."], ["🥚", "Colloids", "big molecules: FFP, albumin, whole blood; dextrans, gelatins, hetastarch. Mostly stay in the vessels."]] },
          html: "<p><strong>Crystalloids</strong> are solutions of electrolytes and sterile water: <strong>normal saline, lactated Ringer's, D5W</strong>. They can be isotonic, hypotonic or hypertonic compared with plasma.</p>" +
            "<p><strong>Colloids</strong> carry big molecules. <strong>Human</strong>: fresh frozen plasma, albumin, whole blood. <strong>Semisynthetic</strong>: dextrans, gelatins, hetastarch. Because the big molecules can't cross the capillary wall, colloids are <strong>mostly retained in the vessels</strong> and expand plasma.</p>" },
        { title: "Where one liter of saline goes", fig: { type: "compartments", infuse: "ns" },
          html: "<p>Isotonic saline doesn't enter cells (its sodium stays outside), so it spreads across the <strong>whole extracellular space</strong>: interstitial plus intravascular. The interstitium is the bigger box, so most of the liter ends up there.</p>" +
            "<p>The deck says <strong>20% stays in the vessels and 80% moves to the interstitium within 30 minutes</strong> (slide 85), and <strong>at best 30% stays</strong> (slide 99). Either way: most of the bag leaves the pipes.</p>" },
        { title: "The 3:1 rule",
          fig: { type: "flow", steps: ["Lose <strong>500 mL</strong> of blood", "Give about <strong>1,500 mL</strong> isotonic crystalloid", "≈ 30% stays in the vessels", "≈ <strong>500 mL</strong> refilled"] },
          html: "<p>Because only about <strong>30%</strong> of isotonic crystalloid stays in the vessels, you need about <strong>3 times</strong> the blood lost to refill them:</p><p class=\"lh-big\">blood lost × 3 = crystalloid needed</p>" +
            "<p>The deck calls this a <strong>theoretical concept</strong>. The <strong>actual volume loss is judged clinically</strong>, by BP, HR, JVP and urine output.</p>" +
            "<p>It also explains a limit: pour in a lot of saline and you dilute the blood without adding oxygen carriers or clotting factors. That's why <strong>after about 2 L</strong> of rapid crystalloid you think about <strong>blood</strong> (lesson 15).</p>" },
        { title: "Why not always colloids?", fig: { type: "compartments", infuse: "colloid" },
          html: "<p>If colloids stay in the vessels, why not use them first? The deck gives three reasons:</p>" +
            "<ul><li><strong>No evidence of better outcomes</strong> with colloid vs crystalloid.</li><li>In <strong>hemorrhage and sepsis</strong>, the vessels are so leaky that the proteins escape anyway.</li><li>Colloids are <strong>costly</strong>.</li></ul>" +
            hy("So <strong>isotonic crystalloid is the preferred initial fluid</strong> for resuscitation.") },
        { title: "Isotonic: NS and LR, the volume fluids", fig: { type: "tonicity", hi: "iso" },
          html: tbl(["", "0.9% normal saline", "Lactated Ringer's"], [
              ["What it is", "<strong>Most commonly used</strong>; matches serum osmolarity; <strong>the only fluid given with blood</strong>", "Electrolytes <strong>like plasma</strong>; common in <strong>surgery</strong>; lactate is a <strong>buffer</strong> against acidosis"],
              ["Use for", "Hypovolemia, dehydration, blood loss, <strong>DKA</strong>, hyponatremia", "<strong>Acute blood loss</strong> (OR, trauma), <strong>3rd spacing</strong> (burns, ascites, effusions)"],
              ["Careful", "<strong>Heart failure</strong> with too much; <strong>hyperchloremic metabolic acidosis</strong> with prolonged use", "<strong>Renal or liver disease</strong>; <strong>pH > 7.5</strong>"]]) +
            "<p>These are the bags you hang for <strong>volume</strong>, because they stay outside the cells.</p>" },
        { title: "Hypotonic: ½NS and D5W, water for the cells", fig: { type: "compartments", infuse: "d5w" },
          html: "<p>Hypotonic fluids give <strong>free water</strong> that moves into cells. They are <strong>not</strong> for resuscitation.</p>" +
            "<ul><li><strong>0.45% saline (½NS)</strong>: for <strong>hypertonic extracellular dehydration</strong> and <strong>hypernatremia</strong>. Too much → <strong>acute hyponatremia</strong> → <strong>cerebral edema</strong>.</li>" +
            "<li><strong>D5W</strong>: for <strong>free-water replacement, not volume resuscitation</strong>; maintenance only (<strong>100 cc/hr</strong>); <strong>hypoglycemia</strong> (e.g. oral hypoglycemic overdose); malnourished patients. Too much → <strong>hyperglycemia</strong>.</li></ul>" +
            "<p>Why does D5W act hypotonic even though the bag is close to isotonic? The body <strong>burns the dextrose</strong>, leaving plain water, which spreads into all body water, mostly cells (standard teaching).</p>" },
        { title: "Hypertonic: 3% saline pulls water out of cells", fig: { type: "tonicity", hi: "hyper" },
          html: "<p><strong>3% saline</strong> is hypertonic: it pulls water <strong>out of cells</strong>.</p>" +
            "<ul><li>Use for <strong>severe hyponatremia with symptoms</strong> (seizures, encephalopathy) and <strong>intracranial hemorrhage</strong> (to lower intracranial pressure).</li><li>Danger: correcting sodium <strong>too fast</strong> causes <strong>osmotic demyelination syndrome</strong> (formerly central pontine myelinolysis): destruction of myelin in the brainstem, which can be fatal.</li></ul>" +
            "<p>The deck also lists <strong>D5NS</strong> as hypertonic.</p>" +
            mn("<strong>Iso for volume, hypo for water, hyper for the brain.</strong>") }
      ],
      checks: [
        K("About how much of 1 L of isotonic crystalloid stays in the vessels?", "About 20-30%", ["About 90%", "About 50%", "None"], "20% at 30 minutes (slide 85), at best 30% (slide 99): the basis of the 3:1 rule."),
        K("A patient lost about 1 L of blood. By the 3:1 rule, how much isotonic crystalloid would replace it?", "About 3 L", ["About 1 L", "About 300 mL", "About 10 L"], "Blood lost × 3, because only about 30% stays intravascular."),
        K("Which fluid should NOT be used for volume resuscitation?", "D5W", ["0.9% normal saline", "Lactated Ringer's", "PRBCs in hemorrhage"], "D5W is free water for maintenance; it spreads into the cells.")
      ],
      remember: [
        "<strong>Crystalloids</strong> (NS, LR, D5W) mostly leave the vessels; <strong>colloids</strong> (FFP, albumin, blood; dextrans, gelatins, hetastarch) mostly stay.",
        "Only <strong>20-30%</strong> of isotonic crystalloid stays intravascular → <strong>3:1 rule</strong> (theoretical; judge loss clinically).",
        "Colloids: <strong>no outcome benefit</strong>, leak in sepsis/hemorrhage, <strong>costly</strong>. Isotonic crystalloid first.",
        "<strong>NS</strong>: most common, only fluid with blood; acidosis/HF with overuse. <strong>LR</strong>: surgery, trauma, burns; avoid renal/liver disease, pH > 7.5.",
        "<strong>½NS / D5W</strong>: water, not volume. <strong>3% saline</strong>: symptomatic hyponatremia, ICH; too fast → <strong>ODS</strong>."
      ],
      practice: [
        tool("cardio2-scores-launch", "Scores & Calculators: 3:1 rule", "Pick Shock, Pressors & Fluids → \"3:1 crystalloid rule\"."),
        tool("cardio2-meds-launch", "Medications tool: fluids", "Pick the IV fluids class for NS, LR, ½NS/D5W, 3% saline, colloids and blood products."),
        obj("20b-hypotonic-solutions", "apply", "Lecture: which fluid? cases", "Objective 20b. Then try 20a (isotonic) and 20c (hypertonic) from the Apply tab.")
      ]
    },

    /* ---------------- 15 ---------------- */
    {
      id: "shl-resuscitation", part: "p4", title: "Resuscitation in practice", goal: "Spot hypovolemia, set the rate, know when to give blood, and reassess.",
      pages: [
        { title: "Spotting hypovolemia",
          fig: { type: "tiles", items: [["📋", "History", "vomiting, diarrhea, fever, ↓ intake, chronic disease, AMS"], ["👅", "Exam", "dry mucosa, shrunken tongue, ↓ turgor, slow cap refill, no tears, ↓ urine / wet diapers, sunken fontanelles"], ["⚠", "Vitals", "tachycardia, hypotension, weak pulses: may show up LATE"], ["🧪", "Labs", "BUN, Cr, Hct, urine SG: not reliable alone"]] },
          html: "<p>Hypovolemia is any <strong>reduction in extracellular volume</strong> (vomiting, blood loss). Severe hypovolemia reduces tissue perfusion, and <strong>hypovolemic shock is the most common form of shock</strong>.</p>" +
            "<p>The deck warns that <strong>vital signs can be misleading</strong>: tachycardia, hypotension, poor peripheral perfusion and decreased mental status <strong>may be delayed</strong>. That's compensation again, from lesson 7. Labs aren't reliable alone either.</p>" +
            "<p>The opposite, <strong>hypervolemia</strong>, is also a <strong>clinical diagnosis</strong>: edema, respiratory distress (pulmonary edema), JVD; risk is highest with <strong>renal disease, liver disease and heart failure</strong>.</p>" },
        { title: "Losses you can see and losses you can't",
          html: tbl(["", "Sensible (measurable)", "Insensible (hard to measure)"], [
              ["Examples", "<strong>Urine ~500 mL/day</strong>, <strong>stool ~200 mL/day</strong>; vomiting, diarrhea, poor intake", "<strong>Sweat ~500 mL/day</strong>, <strong>lungs ~400 mL/day</strong>"],
              ["Why it matters", "You can count it on an I/O chart", "Fever, fast breathing and burns raise it silently"]]) +
            mn("<strong>Sensible = you can Sense it</strong> (see it, measure it). <strong>Insensible = Invisible</strong>.") },
        { title: "The goals, and fluids as a bridge",
          fig: { type: "flow", steps: ["<strong>Stop</strong> the loss", "<strong>Restore</strong> volume for organ perfusion", "<strong>Maintain</strong> O₂-carrying capacity", "<strong>Correct</strong> electrolytes and clotting"] },
          html: "<p>The goals of IV fluid replacement are above. In short, <strong>help the body's own compensation</strong> and prevent collapse.</p>" +
            "<p>There is <strong>no formula</strong> that accurately estimates the total deficit. Follow <strong>BP, heart rate, JVP and urine output</strong>, before and after.</p>" +
            hy("IV fluids are a <strong>temporizing measure</strong>, a bridge to finding and controlling the source, especially in hemorrhage. They don't fix the bleeding.") },
        { title: "How fast",
          fig: { type: "tiles", items: [["🙂", "Mild or moderate", "1 L isotonic saline bolus, then 100 cc/hr until better. Rate must beat ongoing losses."], ["🚨", "Severe / shock", "at least 1-2 L isotonic boluses wide open; reassess BP, HR, JVP, urine, mental status"]] },
          html: "<p>First make sure the airway and breathing are stable; IV access usually happens <strong>at the same time</strong> with nursing (peripheral, central or <strong>intraosseous</strong>).</p>" +
            "<ul><li><strong>Mild or moderate</strong> hypovolemia doesn't need rapid resuscitation. The rate must be <strong>greater than ongoing losses</strong>. Usually <strong>1 L isotonic saline bolus</strong>, then <strong>100 cc/hr</strong> until the clinical picture improves.</li><li><strong>Severe depletion or hypovolemic shock</strong> needs rapid resuscitation: <strong>at least 1-2 L isotonic saline wide open</strong>, watching <strong>BP, HR, JVP, urine output and mental status</strong>.</li></ul>" +
            "<p>Common orders: boluses of <strong>250, 500, 1,000 or 2,000 cc</strong>; maintenance at <strong>75, 100, 125 or 250 cc/hr</strong>; often a bolus followed by a drip.</p>" },
        { title: "When to switch to blood",
          fig: { type: "flow", steps: ["~2 L rapid crystalloid", "Consider <strong>blood</strong> (avoid hemodilution)", "Unstable, gross blood loss: <strong>O-negative</strong> now", "Massive: <strong>1:1:1</strong> PRBC : FFP : platelets"] },
          html: "<ul><li>After <strong>2 L of rapid crystalloid</strong>, consider <strong>transfusion</strong> to avoid <strong>hemodilution</strong>. In trauma hemorrhage, the deck mentions <strong>permissive hypotension</strong>.</li>" +
            "<li><strong>PRBCs</strong> are the most commonly transfused product. <strong>0.9% NS is the only IV fluid</strong> that can run with blood.</li>" +
            "<li>Before (if possible): consent; <strong>type and screen</strong> when you <strong>anticipate</strong> needing blood, <strong>type and cross</strong> when the need is <strong>urgent</strong>.</li>" +
            "<li><strong>Hemodynamically unstable from gross blood loss</strong>: emergency-release <strong>O-negative</strong>; massive transfusion protocol starts at <strong>1:1:1</strong> (PRBC : FFP : platelets). Massive transfusion = <strong>> 10 units in 24 hours</strong>.</li>" +
            "<li>Watch for <strong>acute febrile hemolytic reaction, TRALI, anaphylaxis</strong>.</li></ul>" },
        { title: "Assess, act, reassess",
          fig: { type: "flow", vertical: true, steps: ["<strong>1 · Assess</strong>: is perfusion impaired? (MAP trend, mentation, cap refill, urine, lactate) Which mechanism? Is fluid tolerance limited? (JVP, crackles/O₂, POCUS)", "<strong>2 · Act</strong>: non-hemorrhagic loss → reassessed isotonic crystalloid · hemorrhage → bleeding control + blood · pump failure with congestion → treat cause, support output/pressure · vasodilatory → treat cause, fluids/pressor · obstructive → relieve it", "<strong>3 · Reassess</strong>: perfusion improving? congestion emerging? If not, recheck the type, fluid responsiveness, source control, escalation"] },
          html: "<p>This is the deck's clinical synthesis slide, and it ties the whole lecture together. Every box on it is something you learned in this path:</p>" +
            "<ul><li><strong>Mechanism</strong> = pump, tank, pipes or block (lesson 6).</li><li><strong>Fluid tolerance</strong> = where the heart sits on its Starling curve (lesson 4).</li><li><strong>Act</strong> = the right fluid (lessons 14-15) or the right pressor (lessons 9-10).</li><li><strong>Reassess</strong> perfusion <em>and</em> congestion, against the goals (lesson 11).</li></ul>" +
            hy("Treat the physiology, not the blood pressure alone.") }
      ],
      checks: [
        K("A woman with 2 days of vomiting has HR 112 and BP 104/70, dry mucosa, and low urine output. Best initial plan?", "1 L isotonic saline bolus, then about 100 cc/hr, reassessing", ["D5W at 100 cc/hr only", "3% saline bolus", "Start norepinephrine first"], "Mild-moderate hypovolemia: isotonic bolus then maintenance faster than ongoing losses."),
        K("Which IV fluid is the only one that can run with blood products?", "0.9% normal saline", ["Lactated Ringer's", "D5W", "0.45% saline"], "The deck: 0.9NS is the only IV fluid that can be given with blood."),
        K("A trauma patient is unstable from massive bleeding and there's no time to type and cross. What do you give?", "Emergency-release O-negative blood, starting MTP at 1:1:1", ["2 more liters of D5W", "Albumin only", "Wait for a type and screen"], "Gross blood loss with instability: immediate O-negative and the 1:1:1 massive transfusion ratio.")
      ],
      remember: [
        "Hypovolemia: history (V/D, fever, ↓ intake), exam (dry mucosa, ↓ turgor, slow refill, ↓ urine); <strong>vitals can lag</strong>; labs unreliable alone.",
        "<strong>Sensible</strong>: urine ~500, stool ~200 mL/day. <strong>Insensible</strong>: sweat ~500, lungs ~400 mL/day.",
        "Mild-moderate: <strong>1 L bolus → 100 cc/hr</strong>. Severe: <strong>1-2 L wide open</strong>. Reassess BP, HR, JVP, urine, mentation.",
        "After <strong>~2 L</strong> crystalloid think <strong>blood</strong>; <strong>NS only</strong> with blood; T&S if anticipated, T&C if urgent; <strong>O-neg</strong>, <strong>1:1:1</strong>, massive = > 10 units/24 h.",
        "<strong>Assess → act → reassess</strong> perfusion <em>and</em> congestion."
      ],
      practice: [
        obj("18-blood-transfusions", "test", "Lecture: blood transfusions test", "Objective 18 direct recall."),
        obj("19-resuscitation-management", "apply", "Lecture: resuscitation cases", "Objective 19. Objectives 14-16 cover hypovolemia's physiology and signs."),
        tool("cardio2-diseases-launch", "Diseases tool", "Pick Shock, Pressors & Fluids → \"Hypovolemic & Hemorrhagic Shock\" and \"Hypervolemia\".")
      ]
    }
  ];

  window.SHOCK_LEARN = {
    intro: "Shock gets much easier once the physiology clicks. These short lessons start with one equation (blood pressure = cardiac output × resistance), the three dials of stroke volume and the four receptors, then use them to explain the four shock types, how the body compensates, which pressor to pick, and how fluids move. One idea per page, pictures you can watch or drag, and a few easy checks. Do them in order the first time.",
    parts: parts,
    lessons: lessons
  };
}());
