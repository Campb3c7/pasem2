/* Marriott, EKG Interpretation (EKG I-IV). Official "EKG Objectives" in the supplied order.
   Objective 8 (all named rhythms) is split into sections 8a-8e: sinus, atrial, junctional, ventricular, AV blocks.
   Practice slides (rhythm strips and 12-leads) are pictures; their teaching content is carried by the
   criteria slides. Picture slides read from the rendered deck: slide 9 (EKG paper: small box 0.04 s and
   1 mm, large box 0.20 s and 5 mm, 10 mm = 1 mV), slides 43-47 (lead groups and the SAL mnemonic),
   slide 232 (fascicles of the left bundle branch), slides 250-251 (ischemia to infarction progression,
   reciprocal changes). */
(function () {
  "use strict";

  function q(prompt, answer, wrong, explanation) {
    return { prompt: prompt, choices: [answer].concat(wrong), correct: 0, explanation: explanation };
  }
  function C(title, html, coverage, test, apply) {
    return { title: title, html: html, coverage: coverage, test: test, apply: apply };
  }
  function S(id, title, description, units) {
    var r = { id: id, title: title, description: description, cards: [], test: [], apply: [] };
    units.forEach(function (u, i) {
      r.cards.push({ title: u.title, html: u.html, coverage: u.coverage });
      ["test", "apply"].forEach(function (m) {
        u[m].forEach(function (x) { x.card = i; r[m].push(x); });
      });
    });
    return r;
  }
  function hy(x) { return '<div class="box-hy"><span class="lbl">High yield</span>' + x + "</div>"; }
  function mn(x) { return '<div class="box-mnemonic"><span class="lbl">Mnemonic</span>' + x + "</div>"; }
  function tbl(head, rows) {
    return '<table class="learn-table"><tr>' + head.map(function (h) { return "<th>" + h + "</th>"; }).join("") + "</tr>" +
      rows.map(function (r) { return "<tr>" + r.map(function (d) { return "<td>" + d + "</td>"; }).join("") + "</tr>"; }).join("") + "</table>";
  }
  /* Rhythm criteria table in the lecture's fixed order. */
  function crit(rows) {
    return tbl(["Feature", "Finding"], rows);
  }

  window.EKG_INTERPRETATION_OBJECTIVES = [

    /* ---------- 1 ---------- */
    S("01-myocardial-cell-properties", "1. Key properties of myocardial cells", "Objective 1. Slide 4.", [
      C("Four properties of myocardial cells",
        tbl(["Property", "Meaning"], [
          ["<strong>Automaticity</strong>", "Cells <strong>produce their own</strong> electrical impulse"],
          ["<strong>Excitability</strong>", "Cells <strong>respond</strong> to an impulse"],
          ["<strong>Conductivity</strong>", "Cells <strong>transmit</strong> impulses to neighbors"],
          ["<strong>Contractility</strong>", "Myocytes <strong>contract</strong> when stimulated"]]) +
        mn("“<strong>ACE C</strong>”: <strong>A</strong>utomaticity (make it), <strong>E</strong>xcitability (receive it), <strong>C</strong>onductivity (pass it on), <strong>C</strong>ontractility (squeeze).") +
        "<p>Enhanced <strong>automaticity</strong> is one of the mechanisms behind ectopic beats and tachycardias later in the lecture.</p>",
        ["automaticity", "excitability", "conductivity", "contractility"],
        [q("Which myocardial cell property is the ability to generate an impulse without outside stimulation?", "Automaticity", ["Excitability", "Conductivity", "Contractility"], "Automaticity = cells produce their own impulse."),
          q("Excitability is the ability of myocardial cells to:", "Respond to an impulse", ["Generate an impulse", "Transmit an impulse", "Shorten when stimulated"], "Excitability = respond to impulses."),
          q("The ability of cells to pass an impulse to neighboring cells is:", "Conductivity", ["Automaticity", "Contractility", "Excitability"], "Conductivity = transmit impulses."),
          q("Contractility refers to:", "The ability of myocytes to contract when stimulated", ["The ability to create an impulse", "The ability to transmit an impulse", "The ability to respond to an impulse"], "Contractility is the mechanical response.")],
        [q("An irritable ventricular focus begins firing on its own, producing early wide beats. Which cell property is abnormally enhanced?", "Automaticity", ["Contractility", "Conductivity", "Excitability"], "Enhanced automaticity produces ectopic beats."),
          q("A drug slows impulse spread through the His-Purkinje system without changing how often the SA node fires. Which property is mainly affected?", "Conductivity", ["Automaticity", "Contractility", "Excitability"], "Transmission of impulses = conductivity.")])
    ]),

    /* ---------- 2 ---------- */
    S("02-conduction-pathway", "2. Conduction pathway and depolarization/repolarization on the EKG", "Objective 2. Slides 5–8.", [
      C("The conduction pathway",
        "<p><strong>SA node → AV node → bundle of His → right and left bundle branches → Purkinje fibers</strong>.</p>" +
        "<ul><li>The <strong>SA node</strong> starts the impulse; it spreads through the atria and down the internodal pathways to the AV node.</li>" +
        "<li>The impulse <strong>slows at the AV node</strong> so the atria finish emptying before the ventricles contract.</li>" +
        "<li>It then <strong>shoots</strong> down the His bundle, bundle branches, and Purkinje fibers.</li></ul>" +
        mn("“<strong>S</strong>ome <strong>A</strong>nimals <strong>H</strong>ave <strong>B</strong>ig <strong>P</strong>aws”: SA, AV, His, Bundle branches, Purkinje."),
        ["pathway-order", "av-delay"],
        [q("What is the correct order of the conduction pathway?", "SA node, AV node, bundle of His, bundle branches, Purkinje fibers", ["AV node, SA node, Purkinje fibers, bundle of His, bundle branches", "SA node, bundle of His, AV node, Purkinje fibers, bundle branches", "Purkinje fibers, bundle branches, His, AV node, SA node"], "SA → AV → His → bundle branches → Purkinje."),
          q("Why does conduction slow through the AV node?", "So the atria eject their blood before the ventricles contract", ["To speed up ventricular depolarization", "To repolarize the atria", "To start the impulse"], "The AV delay allows ventricular filling.")],
        [q("A patient's AV node conducts abnormally fast, so atrial and ventricular contraction nearly overlap. What normal function is lost?", "Completion of atrial emptying before ventricular contraction", ["SA node impulse generation", "Ventricular repolarization", "Purkinje fiber contractility"], "AV delay normally lets the atria finish filling the ventricles.")]),
      C("Matching the EKG to the electrical events",
        tbl(["EKG portion", "Electrical event"], [
          ["<strong>P wave</strong>", "<strong>Atrial depolarization</strong> (then atrial contraction, the atrial kick)"],
          ["<strong>PR segment</strong>", "Impulse <strong>slowing through the AV node</strong>"],
          ["<strong>QRS complex</strong>", "<strong>Ventricular depolarization</strong> → ventricular contraction"],
          ["<strong>ST segment and T wave</strong>", "<strong>Ventricular repolarization</strong>"]]) +
        "<p>The <strong>atrial kick</strong> pushes the last <strong>15–30%</strong> of blood into the ventricles. Atrial repolarization is hidden within the QRS.</p>" +
        hy("P = atria depolarize. QRS = ventricles depolarize. ST + T = ventricles repolarize."),
        ["ekg-events", "atrial-kick"],
        [q("Which part of the EKG represents ventricular repolarization?", "The ST segment and T wave", ["The P wave", "The PR segment", "The QRS complex"], "Ventricular repolarization = ST segment and T wave."),
          q("The PR segment reflects:", "Slowing of the impulse through the AV node", ["Atrial depolarization", "Ventricular depolarization", "Ventricular repolarization"], "The AV-node delay produces the PR segment."),
          q("The atrial kick contributes about what portion of ventricular filling?", "15–30%", ["1–2%", "50–60%", "90%"], "Atrial contraction pushes the remaining 15–30%."),
          q("The P wave represents:", "Atrial depolarization", ["Ventricular depolarization", "Atrial repolarization", "AV-node conduction"], "The SA impulse depolarizes the atria, making the P wave.")],
        [q("A patient in atrial fibrillation has no organized atrial contraction and becomes short of breath with exertion. Which normal contribution to cardiac output has she lost?", "The atrial kick, about 15–30% of ventricular filling", ["Ventricular repolarization", "AV-node delay", "Purkinje conduction"], "Losing the atrial kick reduces cardiac output.")])
    ]),

    /* ---------- 3 ---------- */
    S("03-normal-waveforms", "3. Normal appearance, amplitude, and duration of each EKG component", "Objective 3. Slides 9–25.", [
      C("Reading EKG paper",
        tbl(["Box", "Horizontal (time)", "Vertical (amplitude)"], [
          ["<strong>Small box</strong>", "<strong>0.04 s</strong>", "<strong>1 mm</strong> (0.1 mV)"],
          ["<strong>Large box</strong> (5 small)", "<strong>0.20 s</strong>", "<strong>5 mm</strong> (0.5 mV)"]]) +
        "<p>Standard paper speed is <strong>25 mm/s</strong>; the calibration mark is <strong>10 mm = 1 mV</strong>. Five large boxes = 1 second.</p>",
        ["ekg-paper"],
        [q("How much time does one small box represent at standard paper speed?", "0.04 seconds", ["0.20 seconds", "0.10 seconds", "1 second"], "Small box = 0.04 s; large box = 0.20 s."),
          q("How much time does one large box represent?", "0.20 seconds", ["0.04 seconds", "0.40 seconds", "1 second"], "Five small boxes × 0.04 s = 0.20 s."),
          q("Vertically, one small box represents:", "1 mm (0.1 mV)", ["5 mm", "1 mV", "0.04 mV"], "10 mm = 1 mV with standard calibration.")],
        [q("A PR interval spans 4 small boxes. What is its duration, and is it normal?", "0.16 s, normal", ["0.16 s, prolonged", "0.80 s, prolonged", "0.04 s, short"], "4 × 0.04 = 0.16 s; normal PR is 0.12–0.20 s.")]),
      C("P wave and PR interval",
        tbl(["Component", "Normal"], [
          ["<strong>P wave</strong>", "Upright and round; amplitude <strong>0.5–2.5 mm</strong>; duration <strong>0.06–0.11 s</strong> (~1–3 small boxes)"],
          ["<strong>PR segment</strong>", "<strong>Isoelectric</strong> line = AV-node depolarization"],
          ["<strong>PR interval</strong>", "Start of P to start of QRS: <strong>0.12–0.20 s</strong> (3–5 small boxes)"],
          ["<strong>PP interval</strong>", "Start of one P to the next; checks regularity and rate"]]) +
        "<p>P waves may be <strong>biphasic</strong> in some conditions: the <strong>first half = RA</strong>, the <strong>second half = LA</strong> depolarization.</p>",
        ["p-wave", "pr-interval"],
        [q("What is the normal PR interval?", "0.12–0.20 seconds", ["0.06–0.11 seconds", "0.36–0.44 seconds", "0.20–0.30 seconds"], "PR interval: 3–5 small boxes."),
          q("What is the normal P wave amplitude?", "0.5–2.5 mm", ["5–30 mm", "Less than 0.5 mm", "10–15 mm"], "P wave: 0.5–2.5 mm tall."),
          q("In a biphasic P wave, the first half represents:", "Right atrial depolarization", ["Left atrial depolarization", "AV-node conduction", "Ventricular depolarization"], "First half RA, latter half LA."),
          q("The PR interval is measured from:", "The start of the P wave to the start of the QRS", ["The end of the P wave to the end of the QRS", "The start of the QRS to the end of the T", "The peak of P to the peak of R"], "PR interval = start of P to start of QRS.")],
        [q("A strip shows upright round P waves 2 mm tall and 0.08 s wide, each followed by a QRS after 0.28 s. Which value is abnormal?", "The PR interval", ["The P wave amplitude", "The P wave duration", "Nothing is abnormal"], "PR 0.28 s exceeds 0.20 s.")]),
      C("QRS complex and QT interval",
        "<ul><li><strong>Q wave:</strong> first <strong>downward</strong> deflection after the P (not always present).</li>" +
        "<li><strong>R wave:</strong> first <strong>upward</strong> deflection after the P.</li>" +
        "<li><strong>S wave:</strong> first negative deflection after the R that goes below baseline.</li></ul>" +
        tbl(["Component", "Normal"], [
          ["<strong>QRS amplitude</strong>", "<strong>5–30 mm</strong> total height; larger suggests ventricular hypertrophy"],
          ["<strong>QRS duration</strong>", "<strong>0.06–0.12 s</strong> (1.5–3 small boxes)"],
          ["<strong>QT interval</strong>", "Onset of QRS to end of T: <strong>0.36–0.44 s</strong> (9–11 small boxes)"]]),
        ["qrs-normal", "qt-normal"],
        [q("What is the normal QRS duration in this lecture?", "0.06–0.12 seconds", ["0.12–0.20 seconds", "0.36–0.44 seconds", "0.20–0.40 seconds"], "QRS: 1.5–3 small boxes."),
          q("The R wave is defined as:", "The first upward deflection after the P wave", ["The first downward deflection after the P", "The negative deflection after the T", "The wave after the T"], "R = first positive deflection."),
          q("What is the normal QT interval?", "0.36–0.44 seconds", ["0.12–0.20 seconds", "0.06–0.12 seconds", "0.50–0.60 seconds"], "QT: onset of QRS to end of T, 9–11 small boxes."),
          q("Normal total QRS height is:", "5–30 mm", ["0.5–2.5 mm", "Greater than 35 mm", "Less than 2 mm"], "Larger complexes suggest hypertrophy.")],
        [q("A QRS measures 4 small boxes wide. What is its duration and what does it suggest?", "0.16 s; abnormally wide", ["0.16 s; normal", "0.08 s; normal", "0.40 s; normal"], "4 × 0.04 = 0.16 s, wider than 0.12 s."),
          q("A young athlete's QRS complexes reach 40 mm in height. What does this amplitude suggest?", "Ventricular hypertrophy", ["Hypokalemia", "Pericardial effusion", "Normal finding for everyone"], "QRS > 30 mm suggests hypertrophy.")]),
      C("J point, ST segment, and T wave",
        tbl(["Component", "Normal"], [
          ["<strong>J point</strong>", "Junction between the end of the QRS and the start of the ST segment"],
          ["<strong>ST segment</strong>", "<strong>Isoelectric</strong> line as the ventricles prepare to repolarize; curves gradually up into the T"],
          ["<strong>T wave</strong>", "Ventricular repolarization; <strong>same direction as the QRS</strong>; slightly <strong>asymmetric</strong> (peak nearer the end); amplitude <strong>under 5 mm (limb) / 10 mm (precordial)</strong>; duration 0.10–0.25 s"]]) +
        hy("Normal T waves are <strong>upright and slightly asymmetric</strong>. Symmetric, inverted T waves point to ischemia (Objective 14)."),
        ["j-point", "st-segment", "t-wave"],
        [q("What is the J point?", "The junction between the end of the QRS and the start of the ST segment", ["The peak of the T wave", "The start of the P wave", "The lowest point of the S wave"], "J point marks the end of the QRS."),
          q("A normal T wave is oriented:", "In the same direction as the preceding QRS", ["Opposite to the QRS in every lead", "Always inverted", "Always biphasic"], "T usually follows QRS direction."),
          q("What is the normal T wave amplitude in the limb leads?", "Under 5 mm", ["Under 1 mm", "Over 15 mm", "Exactly 20 mm"], "Under 5 mm limb, under 10 mm precordial."),
          q("The normal ST segment is:", "Isoelectric", ["Elevated 2 mm", "Depressed 1 mm", "Downsloping"], "ST is normally on the baseline.")],
        [q("A precordial lead shows T waves 14 mm tall and symmetric. Is this normal?", "No; precordial T waves should be under 10 mm", ["Yes; precordial T waves may be any height", "Yes; T waves are always symmetric", "No; T waves should be inverted"], "Tall T waves exceed the precordial limit.")])
    ]),

    /* ---------- 4 ---------- */
    S("04-u-and-delta-waves", "4. When U waves and delta waves appear", "Objective 4. Slides 24, 78–79, 279.", [
      C("U waves",
        "<p>A <strong>second positive deflection after the T wave</strong> (between T and the next P).</p>" +
        "<ul><li>Best seen in <strong>V2–V4</strong>.</li><li>Seen in <strong>bradycardia</strong> or <strong>hypokalemia</strong>.</li></ul>" +
        hy("U wave → think <strong>low potassium</strong> (or slow rate)."),
        ["u-wave"],
        [q("Where does a U wave appear?", "After the T wave, before the next P", ["Before the P wave in every beat", "Inside the QRS", "Between P and QRS"], "U wave is a positive deflection after the T."),
          q("Which electrolyte disturbance produces U waves?", "Hypokalemia", ["Hyperkalemia", "Hypercalcemia", "Hypernatremia"], "Hypokalemia and bradycardia can produce U waves."),
          q("In which leads are U waves especially noted?", "V2–V4", ["aVR only", "I and aVL", "III and aVF"], "U waves are best seen in V2–V4.")],
        [q("A patient on high-dose furosemide has muscle weakness. Her EKG shows a small positive wave after each T in V2–V4. What lab should be checked?", "Potassium", ["Calcium", "Troponin", "TSH"], "U waves suggest hypokalemia.")]),
      C("Delta waves",
        "<p>A <strong>delta wave</strong> is a <strong>slurring or notching at the start of the QRS</strong> caused by <strong>ventricular pre-excitation</strong>: part of the ventricle depolarizes early through an accessory pathway.</p>" +
        "<p>It is one of the <strong>supraventricular</strong> causes of a <strong>wide QRS</strong>.</p>",
        ["delta-wave"],
        [q("What produces a delta wave?", "Ventricular pre-excitation", ["Hypokalemia", "Atrial enlargement", "Ventricular repolarization delay"], "Early depolarization of part of the ventricle slurs the QRS upstroke."),
          q("Where on the EKG is the delta wave?", "The slurred start of the QRS complex", ["After the T wave", "Inside the P wave", "At the end of the ST segment"], "Delta wave = slurred initial QRS.")],
        [q("A 19-year-old with episodic palpitations has a short PR interval and a slurred upstroke at the beginning of a widened QRS. What is this finding?", "A delta wave from ventricular pre-excitation", ["A U wave from hypokalemia", "A pathologic Q wave", "A pacemaker spike"], "Slurred QRS onset = delta wave.")])
    ]),

    /* ---------- 5 ---------- */
    S("05-q-waves", "5. Physiologic vs pathologic Q waves", "Objective 5. Slides 19, 223, 235, 247–249.", [
      C("Physiologic vs pathologic Q waves",
        tbl(["", "Physiologic", "Pathologic"], [
          ["Cause", "Normal <strong>left-to-right septal</strong> depolarization (septal fascicle)", "<strong>Irreversible myocardial damage</strong> (infarction)"],
          ["Leads", "Small Q in <strong>I, aVL, V5, V6</strong>; isolated Q in V1 may be physiologic", "Present in <strong>two or more contiguous leads</strong>"],
          ["Duration", "<strong>&lt; 0.04 s</strong>", "<strong>&gt; 0.04 s</strong>"],
          ["Depth", "<strong>&lt; 25%</strong> of the R wave in that lead", "<strong>≥ 1/3</strong> of the R wave in that lead"]]) +
        "<p>Pathologic Q waves form <strong>hours to days</strong> after MI; as the Q develops, the <strong>R wave disappears</strong> because depolarization moves away from the electrically silent scar. <strong>aVR is not used</strong>, since it normally has a large Q.</p>" +
        hy("Q wave that is <strong>wide (&gt; 0.04 s)</strong> and <strong>deep (≥ 1/3 of R)</strong> in <strong>2+ contiguous leads</strong> = old or evolving infarct."),
        ["q-physiologic", "q-pathologic", "q-timing"],
        [q("A physiologic Q wave is less than what fraction of the R wave height?", "25%", ["50%", "75%", "100%"], "Physiologic Q < 25% of R; pathologic ≥ 1/3."),
          q("Which duration makes a Q wave pathologic?", "Greater than 0.04 seconds", ["Greater than 0.01 seconds", "Less than 0.04 seconds", "Greater than 0.20 seconds"], "Pathologic Q > 0.04 s."),
          q("What causes physiologic Q waves in the lateral leads?", "Left-to-right depolarization of the septum", ["An old myocardial infarction", "Hyperkalemia", "Atrial enlargement"], "The septal fascicle depolarizes the septum left to right."),
          q("Which lead is NOT used to assess pathologic Q waves?", "aVR", ["II", "V3", "aVF"], "aVR normally has a large Q."),
          q("When do pathologic Q waves typically develop after MI?", "Within several hours to days", ["Within seconds", "Only after years", "Only before the MI"], "Q waves develop hours to days after infarction.")],
        [q("A 70-year-old has deep Q waves 0.06 s wide, about half the height of the R wave, in II, III, and aVF. What do they indicate?", "Irreversible damage from an inferior MI", ["Normal septal depolarization", "Hypokalemia", "Atrial enlargement"], "Wide, deep Q waves in contiguous inferior leads are pathologic."),
          q("A healthy 25-year-old has tiny narrow Q waves in I, aVL, V5, and V6, each under 25% of the R. Interpretation?", "Physiologic septal Q waves", ["Old lateral MI", "Acute pericarditis", "Left bundle branch block"], "Small narrow lateral Q waves are normal.")])
    ]),

    /* ---------- 6 ---------- */
    S("06-lead-views", "6. Limb vs precordial lead views on the 12-lead EKG", "Objective 6. Slides 29–51.", [
      C("How leads see the heart",
        "<ul><li><strong>12 leads</strong> come from <strong>10 electrodes</strong>.</li>" +
        "<li>Current flows from negative (reference) to positive (exploring) electrode. Depolarization moving <strong>toward</strong> a positive electrode = <strong>upright</strong> deflection; <strong>away</strong> = negative.</li>" +
        "<li><strong>aVR</strong> is normally <strong>negative</strong> because of its placement (some facilities use −aVR).</li></ul>" +
        tbl(["", "Limb leads", "Precordial leads"], [
          ["Leads", "I, II, III, aVR, aVL, aVF", "V1–V6"],
          ["Plane", "<strong>Frontal</strong> (superior–inferior)", "<strong>Horizontal</strong> (anterior–posterior)"],
          ["Electrodes", "Right arm, left arm, left leg. I, II, III = difference between two electrodes; aVR, aVL, aVF = one electrode vs average of the others", "Each electrode vs <strong>Wilson's central terminal</strong> (average of the limb electrodes, center of the chest)"]]),
        ["lead-basics", "limb-vs-precordial"],
        [q("How many electrodes produce a standard 12-lead EKG?", "10", ["12", "6", "15"], "12 leads are derived from 10 electrodes."),
          q("The limb leads view the heart in which plane?", "Frontal", ["Horizontal", "Sagittal", "Oblique"], "Limb leads: frontal (superior–inferior)."),
          q("The precordial leads view the heart in which plane?", "Horizontal", ["Frontal", "Coronal", "Vertical"], "Precordial leads: horizontal (anterior–posterior)."),
          q("A depolarization wave moving toward a positive electrode produces:", "An upright deflection", ["A downward deflection", "A flat line", "A pacer spike"], "Toward = positive; away = negative."),
          q("Why is aVR normally negative?", "Because of its placement, current flows away from it", ["Because it is broken in most machines", "Because it records the atria only", "Because of hyperkalemia"], "aVR looks at the heart from the right shoulder.")],
        [q("On a routine EKG of a healthy adult, the QRS in aVR is tall and upright while lead I is negative. What should you suspect first?", "Limb-lead misplacement, since aVR is normally negative", ["Normal variant expected in everyone", "Acute anterior MI", "Hypokalemia"], "aVR is typically negative; an upright aVR suggests a placement problem or unusual axis.")]),
      C("Precordial electrode placement",
        tbl(["Lead", "Placement"], [
          ["<strong>V1</strong>", "4th intercostal space, <strong>right</strong> of the sternum"],
          ["<strong>V2</strong>", "4th intercostal space, <strong>left</strong> of the sternum"],
          ["<strong>V3</strong>", "Diagonally between V2 and V4"],
          ["<strong>V4</strong>", "5th intercostal space, <strong>midclavicular</strong> line"],
          ["<strong>V5</strong>", "5th intercostal space, <strong>anterior axillary</strong> line"],
          ["<strong>V6</strong>", "5th intercostal space, <strong>midaxillary</strong> line"]]),
        ["precordial-placement"],
        [q("Where is V1 placed?", "4th intercostal space, right of the sternum", ["4th intercostal space, left of the sternum", "5th intercostal space, midclavicular line", "5th intercostal space, midaxillary line"], "V1: 4th ICS, right sternal border."),
          q("Where is V4 placed?", "5th intercostal space, midclavicular line", ["4th intercostal space, left of the sternum", "5th intercostal space, anterior axillary line", "Between V2 and V6"], "V4: 5th ICS, MCL."),
          q("Where is V6 placed?", "5th intercostal space, midaxillary line", ["5th intercostal space, anterior axillary line", "4th intercostal space, right of the sternum", "2nd intercostal space, midclavicular line"], "V6: 5th ICS, midaxillary.")],
        [q("A student places V1 and V2 in the 2nd intercostal space. What is the correct placement?", "4th intercostal space on either side of the sternum", ["5th intercostal space midclavicular", "6th intercostal space midaxillary", "3rd intercostal space at the clavicle"], "V1 and V2 belong in the 4th ICS.")]),
      C("What each lead sees",
        tbl(["Region", "Leads"], [
          ["<strong>Inferior</strong>", "<strong>II, III, aVF</strong>"],
          ["<strong>Lateral</strong>", "<strong>I, aVL, V5, V6</strong>"],
          ["<strong>Septal</strong>", "<strong>V1, V2</strong>"],
          ["<strong>Anterior</strong>", "<strong>V3, V4</strong> (V2 and V4 are transitional)"],
          ["<strong>Posterior</strong>", "<strong>V7–V9</strong>"],
          ["Base of heart, atria, great vessels", "<strong>aVR</strong>"]]) +
        mn("“<strong>SAL</strong> (salt) is bad for the heart”: across the precordium V1–V6 = <strong>S</strong>eptal (V1–V2), <strong>A</strong>nterior (V3–V4), <strong>L</strong>ateral (V5–V6). The <strong>inferior triangle</strong> on the printout: II, III, aVF in the lower-left corner."),
        ["lead-territories", "sal-mnemonic"],
        [q("Which leads view the inferior wall?", "II, III, aVF", ["I, aVL, V5, V6", "V1, V2", "V3, V4"], "Inferior: II, III, aVF."),
          q("Which leads view the lateral wall?", "I, aVL, V5, V6", ["II, III, aVF", "V1, V2", "aVR only"], "Lateral: I, aVL, V5, V6."),
          q("V1 and V2 primarily view the:", "Interventricular septum", ["Inferior wall", "Lateral wall", "Posterior wall"], "Septal leads: V1, V2."),
          q("aVR views the:", "Base of the heart, atria, and great vessels", ["Inferior wall", "Apex", "Lateral wall"], "aVR looks at the base and great vessels."),
          q("Which leads view the posterior wall?", "V7–V9", ["V1–V2", "II, III, aVF", "I, aVL"], "Posterior leads V7–V9 are placed on the back.")],
        [q("ST changes appear in V3 and V4 only. Which region of the heart is affected?", "Anterior wall", ["Inferior wall", "Lateral wall", "Posterior wall"], "V3–V4 = anterior."),
          q("ST changes appear in I, aVL, V5, and V6. Which region is affected?", "Lateral wall", ["Septum", "Inferior wall", "Right ventricle"], "Lateral leads: I, aVL, V5, V6.")]),
      C("Right-sided and 15-lead EKGs",
        tbl(["EKG", "How", "Why"], [
          ["<strong>Right-sided</strong>", "Precordial leads <strong>reversed</strong> onto the right chest", "Evaluate <strong>inferior wall MI</strong> (right ventricular involvement)"],
          ["<strong>15-lead</strong>", "Adds <strong>V7, V8, V9</strong> on the <strong>back</strong>", "Better evaluate <strong>posterior MI</strong>"]]),
        ["right-sided", "fifteen-lead"],
        [q("Which leads does a 15-lead EKG add?", "V7, V8, V9", ["V4R, V5R, V6R", "aVR, aVL, aVF", "Lead II rhythm strip"], "V7–V9 are placed on the back."),
          q("Why is a right-sided EKG obtained?", "To evaluate an inferior wall MI", ["To evaluate a posterior MI", "To measure the QTc", "To diagnose atrial flutter"], "Right-sided leads assess inferior MI and RV involvement."),
          q("A 15-lead EKG is used to better evaluate which infarct?", "Posterior MI", ["Septal MI", "Anterior MI", "High lateral MI"], "V7–V9 view the posterior wall.")],
        [q("A patient has ST elevation in II, III, and aVF. The team wants to know whether the right ventricle is involved. What additional EKG?", "Right-sided EKG", ["15-lead with V7–V9", "Repeat standard 12-lead only", "Rhythm strip in lead II"], "Right-sided leads evaluate RV involvement in inferior MI."),
          q("A patient has ST depression with tall R waves in V1–V3 and chest pain. Which additional EKG helps confirm the suspected infarct?", "15-lead EKG with V7–V9", ["Right-sided EKG", "Lead aVR only", "Holter monitor"], "This pattern suggests posterior MI; V7–V9 show the elevation directly.")])
    ]),

    /* ---------- 7 ---------- */
    S("07-stepwise-approach", "7. Interpreting rhythm strips and 12-leads with a stepwise approach", "Objective 7. Slides 52–82.", [
      C("The 8-step approach and a normal EKG",
        "<ol><li>Regularity</li><li>Rate</li><li>Axis</li><li>P waves (one per QRS? normal shape? all the same?)</li><li>QRS complexes</li><li>PR intervals</li><li>ST segments</li><li>Final analysis</li></ol>" +
        tbl(["Feature", "Normal"], [
          ["Regularity", "Regular"], ["Rate", "60–100 bpm"], ["Axis", "No deviation"],
          ["P waves", "Upright, round, <strong>one before each QRS</strong>"], ["QRS", "Narrow, 0.06–0.12 s"],
          ["PR", "0.12–0.20 s"], ["T waves", "Upright, slightly asymmetric"]]) +
        mn("“<strong>R</strong>eally <strong>R</strong>ead <strong>A</strong>ll <strong>P</strong>arts <strong>Q</strong>uickly, <strong>P</strong>lease <strong>S</strong>top <strong>F</strong>alling”: Regularity, Rate, Axis, P, QRS, PR, ST, Final."),
        ["eight-steps", "normal-characteristics"],
        [q("What are the first two steps in the lecture's EKG approach?", "Determine regularity, then rate", ["Determine axis, then ST segments", "Assess QRS, then P waves", "Assess ST segments, then rate"], "Regularity, rate, axis, P, QRS, PR, ST, final analysis."),
          q("Which is a characteristic of a normal EKG?", "One upright round P wave before each QRS", ["Rate 40–60 bpm", "QRS 0.14 s", "PR 0.24 s"], "Normal: P before each QRS, rate 60–100, narrow QRS, PR 0.12–0.20."),
          q("Which step comes immediately after determining the axis?", "Assess the P waves", ["Assess the ST segments", "Determine the rate", "Make a final analysis"], "Axis → P waves → QRS → PR → ST → final.")],
        [q("A strip is regular at 80 bpm with upright P waves before each narrow QRS, PR 0.16 s, normal axis, and isoelectric ST segments. What is the final analysis?", "Normal sinus rhythm with a normal EKG", ["Sinus tachycardia", "First-degree AV block", "Atrial flutter"], "Every feature is in the normal range.")]),
      C("Regularity",
        "<ul><li>Use <strong>calipers</strong> or a <strong>piece of paper/notecard</strong> to mark intervals.</li>" +
        "<li><strong>PP intervals</strong> = atrial regularity; <strong>RR intervals</strong> = ventricular regularity.</li>" +
        "<li>Three categories: <strong>regular</strong>, <strong>regularly irregular</strong> (a repeating pattern), <strong>irregularly irregular</strong> (no pattern).</li></ul>",
        ["regularity"],
        [q("Ventricular regularity is assessed by measuring which intervals?", "RR intervals", ["PP intervals", "PR intervals", "QT intervals"], "RR = ventricular; PP = atrial."),
          q("Which three categories describe regularity?", "Regular, regularly irregular, irregularly irregular", ["Fast, slow, normal", "Narrow, wide, bizarre", "Upright, inverted, biphasic"], "Regularity has three categories."),
          q("Which simple tools are used to check regularity?", "Calipers or a marked piece of paper", ["A reflex hammer", "A stethoscope", "A ruler in centimeters only"], "Calipers or notecards mark the intervals.")],
        [q("RR intervals vary with no repeating pattern at all and no clear P waves are seen. How is the regularity described?", "Irregularly irregular", ["Regular", "Regularly irregular", "Cannot be assessed"], "No pattern = irregularly irregular (classic for AF).")]),
      C("Rate",
        tbl(["Method", "How", "Use for"], [
          ["<strong>300, 150, 100</strong>", "Count bold lines between two QRS complexes: 300, 150, 100, 75, 60, 50, 43, 38, 33", "<strong>Regular rhythms only</strong>"],
          ["<strong>1500 method</strong>", "<strong>1500 ÷ number of small boxes</strong> between complexes, averaged over several beats", "<strong>Irregular rhythms</strong> (and precise rates)"]]) +
        mn("Big-box countdown: <strong>300 – 150 – 100 – 75 – 60 – 50</strong>."),
        ["rate-300", "rate-1500"],
        [q("With the 300 method, an R–R distance of 3 large boxes equals what rate?", "100 bpm", ["150 bpm", "75 bpm", "60 bpm"], "300, 150, 100: three boxes = 100."),
          q("The 300-150-100 method is accurate only for:", "Regular rhythms", ["Irregular rhythms", "Ventricular fibrillation", "Asystole"], "Use the small-box method for irregular rhythms."),
          q("With the 1500 method, 20 small boxes between QRS complexes equals:", "75 bpm", ["60 bpm", "100 bpm", "150 bpm"], "1500 ÷ 20 = 75."),
          q("Five large boxes between R waves equals what rate?", "60 bpm", ["50 bpm", "75 bpm", "100 bpm"], "300, 150, 100, 75, 60.")],
        [q("A regular rhythm has R waves 2 large boxes apart. What is the rate?", "150 bpm", ["75 bpm", "100 bpm", "300 bpm"], "Two large boxes = 150."),
          q("An irregular rhythm averages 15 small boxes between QRS complexes. Estimated rate?", "100 bpm", ["150 bpm", "75 bpm", "60 bpm"], "1500 ÷ 15 = 100.")]),
      C("Abnormal P waves",
        "<ul><li>From the SA node but <strong>enlarged or biphasic</strong> → one or both <strong>atria enlarged</strong>.</li>" +
        "<li>From atrial tissue <strong>other than the SA node</strong> → may be <strong>inverted</strong>.</li>" +
        "<li><strong>Buried</strong> in the preceding T or following QRS → very <strong>fast rate</strong> or an <strong>AV block</strong>.</li>" +
        "<li><strong>Changing shape</strong> beat to beat → <strong>more than one atrial focus</strong> pacing.</li></ul>" +
        "<p>Structural atrial abnormalities suggested by the EKG should be confirmed with <strong>history, exam, and echocardiography</strong>.</p>",
        ["abnormal-p"],
        [q("An inverted P wave suggests the impulse began:", "In atrial tissue other than the SA node", ["In the SA node", "In the ventricle", "In the Purkinje fibers"], "Ectopic atrial or junctional origin inverts the P."),
          q("P waves that change shape from beat to beat suggest:", "More than one atrial focus is pacing the heart", ["Ventricular hypertrophy", "Hyperkalemia", "A pacemaker"], "Multiple atrial foci produce varying P morphology."),
          q("Why might P waves be hidden in the preceding T wave?", "A very fast heart rate or an AV block", ["Hypokalemia", "Left bundle branch block", "Low QRS voltage"], "Fast rates and AV blocks can bury P waves.")],
        [q("An EKG shows tall, biphasic P waves. What should be done to confirm the suspected abnormality?", "Correlate with history and exam and obtain an echocardiogram", ["Nothing; the EKG is diagnostic", "Order a chest CT angiogram", "Start an antiarrhythmic"], "EKG suggests atrial enlargement; echo confirms it.")]),
      C("Abnormal and wide QRS complexes",
        "<p>Tall QRS: <strong>hypertrophy</strong>, an abnormal pacemaker, or aberrant conduction. <strong>Wide QRS</strong> (&gt; 0.12 s) causes:</p>" +
        tbl(["Supraventricular origin", "Ventricular origin"], [
          ["<strong>Bundle branch block</strong> (interventricular conduction defect)", "<strong>Idioventricular rhythm</strong> (20–40 bpm)"],
          ["<strong>Ventricular pre-excitation</strong> (delta wave)", "<strong>Ventricular tachycardia</strong> (100–250 bpm, no P waves)"],
          ["<strong>Pacemaker</strong>: narrow pacer spike then wide QRS", "<strong>3rd-degree AV block</strong> with a ventricular escape"],
          ["", "<strong>PVCs</strong> (intermittent, not a rhythm alone)"]]),
        ["wide-qrs-causes"],
        [q("Which is a supraventricular cause of a wide QRS?", "Bundle branch block", ["Idioventricular rhythm", "Ventricular tachycardia", "PVCs"], "BBB, pre-excitation, and pacing are supraventricular causes."),
          q("A narrow spike followed by a wide QRS indicates:", "A ventricular pacemaker", ["Atrial flutter", "Hypokalemia", "Sinus arrhythmia"], "Pacer spike then wide QRS = paced beat."),
          q("Which wide-complex rhythm runs at 20–40 bpm?", "Idioventricular rhythm", ["Ventricular tachycardia", "Junctional rhythm", "Sinus bradycardia"], "Idioventricular: 20–40 bpm.")],
        [q("A rhythm has wide QRS complexes at 180 bpm with no visible P waves in a patient with prior MI. Which origin is most likely?", "Ventricular tachycardia", ["Sinus tachycardia with normal conduction", "Junctional rhythm", "Wandering atrial pacemaker"], "Wide, fast, no P waves = VT until proven otherwise.")])
    ]),

    /* ---------- 8a ---------- */
    S("08a-sinus-rhythms", "8a. Sinus rhythms: NSR, bradycardia, tachycardia, arrhythmia, arrest/pause", "Objective 8, sinus rhythms. Slides 83–94.", [
      C("Normal sinus rhythm, sinus bradycardia, sinus tachycardia",
        "<p>All three share sinus features: <strong>upright round P before each QRS</strong>, <strong>narrow QRS</strong> (0.06–0.12 s), <strong>PR 0.12–0.20 s</strong>, regular. Only the <strong>rate</strong> differs.</p>" +
        tbl(["Rhythm", "Rate", "Other"], [
          ["<strong>Normal sinus rhythm</strong>", "<strong>60–100</strong> bpm", "T waves upright, slightly asymmetric"],
          ["<strong>Sinus bradycardia</strong>", "<strong>&lt; 60</strong> bpm", "Otherwise normal"],
          ["<strong>Sinus tachycardia</strong>", "<strong>100–160</strong> bpm", "P waves clearly visible; QT normal or shortened"]]),
        ["nsr", "sinus-brady", "sinus-tach"],
        [q("What is the rate of normal sinus rhythm?", "60–100 bpm", ["40–60 bpm", "100–160 bpm", "20–40 bpm"], "NSR: 60–100 bpm."),
          q("Sinus bradycardia is a sinus rhythm with a rate below:", "60 bpm", ["40 bpm", "50 bpm", "100 bpm"], "Sinus brady < 60 bpm."),
          q("Sinus tachycardia in this lecture ranges from:", "100–160 bpm", ["160–250 bpm", "60–100 bpm", "250–350 bpm"], "Sinus tach: 100–160 bpm."),
          q("What may happen to the QT interval in sinus tachycardia?", "It may be normal or shortened", ["It is always prolonged", "It disappears", "It doubles"], "QT shortens with faster rates.")],
        [q("A febrile, dehydrated patient has a regular rhythm at 125 bpm with an upright P before each narrow QRS and PR 0.16 s. What is the rhythm?", "Sinus tachycardia", ["Atrial flutter", "Junctional tachycardia", "Normal sinus rhythm"], "Sinus features at 100–160 bpm."),
          q("A fit 22-year-old runner has a regular rhythm at 48 bpm, upright P waves before each narrow QRS, PR 0.18 s. What is the rhythm?", "Sinus bradycardia", ["Junctional rhythm", "Idioventricular rhythm", "Third-degree AV block"], "Sinus features below 60 bpm.")]),
      C("Sinus arrhythmia and sinus arrest/pause",
        tbl(["", "Sinus dysrhythmia / arrhythmia", "Sinus arrest / pause"], [
          ["Regularity", "<strong>Irregular</strong> with a consistent pattern", "Irregular <strong>around the pause</strong>"],
          ["Key criterion", "<strong>PP interval varies by ≥ 0.12 s</strong> (3 small boxes)", "A <strong>pause</strong> where the SA node fails to fire, then sinus beats resume"],
          ["Rate", "60–100 bpm", "60–100 bpm"],
          ["P waves", "Normal morphology (still from the SA node)", "Normal when present"]]),
        ["sinus-arrhythmia", "sinus-arrest"],
        [q("Sinus arrhythmia is a true rhythm when the PP interval varies by at least:", "0.12 seconds", ["0.04 seconds", "0.20 seconds", "0.40 seconds"], "Variation of at least 3 small boxes."),
          q("In sinus arrhythmia, P-wave morphology is:", "Normal, because impulses still arise in the SA node", ["Sawtooth", "At least three different shapes", "Absent"], "SA origin keeps P waves normal."),
          q("Sinus arrest/pause is irregular because:", "The SA node fails to fire for a period, then sinus beats resume", ["Multiple atrial foci fire", "Every other beat is blocked at the His bundle", "The ventricles fire independently"], "Irregularity occurs around the pause.")],
        [q("A healthy teenager's sinus rate speeds and slows in a repeating pattern; PP intervals vary by 0.16 s and every P wave looks the same. What is this?", "Sinus arrhythmia", ["Wandering atrial pacemaker", "Atrial fibrillation", "Second-degree AV block"], "Patterned PP variation ≥ 0.12 s with identical P waves."),
          q("A strip shows normal sinus beats at 75 bpm, then a sudden gap with no P wave or QRS, then sinus beats resume. What is this?", "Sinus arrest/pause", ["Atrial flutter", "Third-degree AV block", "Ventricular fibrillation"], "The SA node fails to fire, causing a pause.")])
    ]),

    /* ---------- 8b ---------- */
    S("08b-atrial-rhythms", "8b. Atrial rhythms: atrial tachycardia, WAP, MAT, flutter, fibrillation", "Objective 8, atrial rhythms. Slides 95–120.", [
      C("Atrial dysrhythmias: why they matter",
        "<ul><li>Shorten ventricular filling time and <strong>diminish the atrial kick</strong> → lower cardiac output and tissue perfusion.</li>" +
        "<li>Three mechanisms: <strong>enhanced automaticity</strong>, <strong>triggered activity</strong>, and <strong>reentry</strong>.</li></ul>" +
        "<p><strong>SVT</strong> is the catch-all when the rate is so fast that P waves are buried and you cannot tell atrial from junctional origin: includes <strong>pSVT, non-paroxysmal atrial tachycardia, MAT, and junctional tachycardia</strong>.</p>",
        ["atrial-mechanisms", "svt-umbrella"],
        [q("Which three mechanisms cause atrial dysrhythmias?", "Enhanced automaticity, triggered activity, and reentry", ["Hypertrophy, dilation, and fibrosis", "Ischemia, injury, and infarction", "Hyperkalemia, hypokalemia, and hypocalcemia"], "These are the three proposed mechanisms."),
          q("When is the term SVT used?", "When a very fast narrow rhythm hides P waves so atrial vs junctional origin is unclear", ["For any wide-complex rhythm", "Only for sinus tachycardia", "For ventricular fibrillation"], "SVT is the catch-all for fast supraventricular rhythms."),
          q("How do atrial dysrhythmias lower cardiac output?", "They shorten filling time and diminish the atrial kick", ["They widen the QRS", "They prolong the QT", "They block the bundle branches"], "Less filling and lost atrial kick reduce output.")],
        [q("A narrow-complex tachycardia at 200 bpm hides all P waves, so you cannot tell if it is atrial or junctional. What is the best descriptive term?", "Supraventricular tachycardia (SVT)", ["Ventricular tachycardia", "Sinus tachycardia", "Idioventricular rhythm"], "SVT is used when origin above the ventricles is clear but the site is not.")]),
      C("Atrial tachycardia",
        "<p>An <strong>ectopic atrial focus</strong> overrides the SA node at <strong>&gt; 100 bpm</strong>, often <strong>&gt; 160</strong>. Decreased filling time can significantly compromise output in patients with heart disease.</p>" +
        crit([["Regularity", "Regular"], ["Rate", "Usually <strong>160–250</strong> bpm"], ["P waves", "Upright or inverted; frequently <strong>buried in the preceding T</strong>"], ["QRS", "Narrow"], ["PR", "Short (focus high/mid RA) to normal (low RA/upper junction)"], ["QT", "Usually normal, may shorten"]]),
        ["atrial-tach"],
        [q("What is the usual rate of atrial tachycardia?", "160–250 bpm", ["100–160 bpm", "250–350 bpm", "60–100 bpm"], "Atrial tachycardia usually runs 160–250 bpm."),
          q("In atrial tachycardia, P waves are frequently:", "Buried in the preceding T wave", ["Sawtooth", "Absent with a chaotic baseline", "Three different shapes"], "Fast rates bury the P in the T.")],
        [q("A patient with known heart failure has a regular narrow rhythm at 190 bpm; P waves are partly hidden in the T waves. She is hypotensive. What is the rhythm and why is she unstable?", "Atrial tachycardia; short filling time compromises cardiac output", ["Sinus bradycardia; low rate", "Ventricular fibrillation; no output", "First-degree AV block; delayed conduction"], "Fast atrial rates reduce filling in diseased hearts.")]),
      C("Wandering atrial pacemaker vs multifocal atrial tachycardia",
        tbl(["", "Wandering atrial pacemaker", "Multifocal atrial tachycardia (MAT)"], [
          ["Definition", "Pacemaker <strong>shifts</strong> between SA node, atria, and/or AV junction", "<strong>Pathologic</strong> tachycardia from <strong>≥ 3 ectopic foci</strong>"],
          ["Diagnosis", "<strong>≥ 3 different P-wave shapes</strong> in the same lead, one P before each QRS", "<strong>≥ 3 different P-wave shapes</strong> in the same lead, one P before each QRS"],
          ["Rate", "<strong>60–100</strong>", "<strong>100–160</strong>"],
          ["Regularity", "Irregular", "Irregular"],
          ["Causes", "Physiologic, organic heart disease, drug toxicity (esp. <strong>digitalis</strong>)", "<strong>COPD exacerbation</strong>, CHF, acute mitral regurgitation"],
          ["Pitfall", "", "Often <strong>misdiagnosed as atrial fibrillation</strong>"]]) +
        hy("Same picture (3+ P shapes), different speed: <strong>&lt; 100 = WAP</strong>, <strong>&gt; 100 = MAT</strong>. MAT + COPD exacerbation is the classic pairing."),
        ["wap", "mat"],
        [q("How many different P-wave morphologies in one lead are needed to diagnose WAP or MAT?", "At least 3", ["At least 2", "Exactly 1", "At least 5"], "Three or more P shapes in the same lead."),
          q("What separates MAT from wandering atrial pacemaker?", "Rate: MAT is 100–160 bpm, WAP is 60–100 bpm", ["MAT has no P waves", "WAP has a wide QRS", "MAT is always regular"], "Both have 3+ P shapes; the rate differs."),
          q("Which condition classically precipitates MAT?", "COPD exacerbation", ["Hyperkalemia", "Digoxin-free healthy heart", "Hypocalcemia"], "COPD exacerbation, CHF, acute MR."),
          q("MAT is often misdiagnosed as:", "Atrial fibrillation", ["Sinus bradycardia", "Third-degree block", "Atrial pacing"], "Both are irregular, but MAT has distinct P waves.")],
        [q("A 70-year-old in a COPD exacerbation has an irregular rhythm at 130 bpm. Lead II shows a P wave before every QRS, with at least three different P shapes. What is the rhythm?", "Multifocal atrial tachycardia", ["Atrial fibrillation", "Wandering atrial pacemaker", "Sinus tachycardia"], "3+ P shapes at > 100 bpm in COPD = MAT."),
          q("A patient on digoxin has an irregular rhythm at 78 bpm with three distinct P-wave shapes, each followed by a narrow QRS. What is the rhythm?", "Wandering atrial pacemaker", ["Multifocal atrial tachycardia", "Atrial flutter", "Atrial fibrillation"], "3+ P shapes at 60–100 bpm; digitalis is a listed cause.")]),
      C("Atrial flutter",
        "<p>Atrial rate <strong>250–350</strong> bpm from <strong>reentry</strong> or increased automaticity. <strong>Sawtooth flutter waves</strong>.</p>" +
        crit([["Regularity", "Usually regular (can vary if the conduction ratio varies)"], ["Rate", "Atrial <strong>250–350</strong>; ventricular any (usually 50–150)"], ["P waves", "<strong>Sawtooth</strong>, all the same shape, seemingly unrelated to the QRS"], ["QRS", "Narrow"], ["PR", "Unmeasurable"], ["T waves", "Often indistinguishable from flutter waves"]]) +
        "<p><strong>Conduction ratio</strong> 2:1, 3:1, 4:1, etc. Causes: <strong>acute atrial enlargement</strong> and elevated atrial pressure (in healthy hearts), <strong>severe MR, hyperthyroidism, pericardial disease, COPD, hypoxia, post-op</strong>. Fast or slow ventricular rates can compromise the patient.</p>",
        ["flutter"],
        [q("What is the atrial rate in atrial flutter?", "250–350 bpm", ["160–250 bpm", "Over 350 bpm", "100–160 bpm"], "Flutter atrial rate: 250–350."),
          q("Which waveform pattern defines atrial flutter?", "Sawtooth flutter waves", ["Chaotic wavy baseline", "Three different P shapes", "Inverted P after each QRS"], "Sawtooth P waves are the hallmark."),
          q("In atrial flutter with 4:1 conduction and an atrial rate of 300, the ventricular rate is:", "75 bpm", ["300 bpm", "150 bpm", "100 bpm"], "300 ÷ 4 = 75."),
          q("What is the main mechanism of atrial flutter?", "Reentry (or increased automaticity)", ["AV-node block", "Ventricular escape", "Pre-excitation"], "Reentry or increased automaticity.")],
        [q("A post-op patient has a regular narrow rhythm at exactly 150 bpm. Lead II shows a sawtooth baseline with two flutter waves per QRS. What is the rhythm?", "Atrial flutter with 2:1 conduction", ["Sinus tachycardia", "Atrial fibrillation", "Multifocal atrial tachycardia"], "Atrial rate 300 with 2:1 conduction gives 150."),
          q("A patient with hyperthyroidism has a regular rhythm at 75 bpm with sawtooth waves and four flutter waves per QRS. What is the rhythm?", "Atrial flutter with 4:1 conduction", ["Normal sinus rhythm", "Atrial fibrillation with slow response", "Junctional rhythm"], "Sawtooth waves at 300 with 4:1 = 75.")]),
      C("Atrial fibrillation",
        "<p><strong>Chaotic, asynchronous firing</strong> of many atrial sites (multiple micro-reentry circuits). The atria <strong>quiver</strong>; AV-node conduction is irregular and sporadic.</p>" +
        crit([["Regularity", "<strong>Irregular</strong> (irregularly irregular)"], ["Rate", "Atrial <strong>&gt; 350</strong>; ventricular any"], ["P waves", "<strong>Wavy, chaotic baseline</strong>; no discernible P waves"], ["QRS", "Narrow"], ["PR", "Unmeasurable"], ["T waves", "Often indistinguishable"]]) +
        "<ul><li>Loss of <strong>atrial kick</strong>; risk of <strong>atrial clot</strong>.</li>" +
        "<li>Causes: excess <strong>caffeine, alcohol, tobacco</strong>; <strong>after cardiac or other surgery</strong>; <strong>mitral stenosis</strong>, CHF, CAD, <strong>hyperthyroidism</strong>.</li>" +
        "<li>Ventricular rate <strong>&gt; 100</strong> = <strong>rapid ventricular response (RVR)</strong>.</li></ul>" +
        hy("<strong>Irregularly irregular + no P waves + wavy baseline</strong> = AF. Its danger: <strong>clot</strong> (stroke) and lost atrial kick."),
        ["afib", "afib-rvr"],
        [q("What is the defining EKG feature of atrial fibrillation?", "A chaotic fibrillatory baseline with no discernible P waves", ["Sawtooth flutter waves", "Three different P shapes", "Progressive PR lengthening"], "Chaotic baseline, no P waves, irregular rhythm."),
          q("What does “RVR” mean in atrial fibrillation?", "Ventricular rate over 100 bpm", ["Ventricular rate under 60 bpm", "Atrial rate over 350 bpm", "Regular ventricular rhythm"], "AF with RVR: ventricular rate > 100."),
          q("Why does atrial fibrillation raise stroke risk?", "Stasis in quivering atria allows clot formation", ["It prolongs the QT", "It causes hyperkalemia", "It blocks the bundle branches"], "Loss of organized contraction allows atrial thrombus."),
          q("What is the atrial rate in atrial fibrillation?", "Greater than 350 bpm", ["250–350 bpm", "160–250 bpm", "60–100 bpm"], "AF atrial rate > 350.")],
        [q("Two days after CABG, a patient has palpitations. The rhythm is irregularly irregular at 135 bpm with a wavy baseline and no P waves. What is the rhythm?", "Atrial fibrillation with rapid ventricular response", ["Atrial flutter with 2:1 block", "Multifocal atrial tachycardia", "Sinus tachycardia"], "Post-op AF with a ventricular rate > 100."),
          q("A college student after a weekend of heavy drinking has an irregularly irregular pulse. EKG shows no P waves and a fibrillatory baseline. What is the likely trigger?", "Excess alcohol intake", ["Hypocalcemia", "Digoxin toxicity only", "Inferior MI"], "Alcohol, caffeine, and tobacco can trigger AF.")])
    ]),

    /* ---------- 8c ---------- */
    S("08c-junctional-rhythms", "8c. Junctional rhythms", "Objective 8, junctional rhythms. Slides 121–132.", [
      C("Junctional rhythms: origin and P waves",
        "<ul><li>Arise around the <strong>AV node and bundle of His</strong> when the <strong>SA node is suppressed</strong> or conduction is blocked.</li>" +
        "<li>Common causes: <strong>hypoxia, ischemia, MI, drug toxicity</strong>.</li>" +
        "<li>Atria depolarize <strong>retrograde</strong> → P waves <strong>inverted</strong>, <strong>absent</strong> (buried in the QRS), or <strong>after the QRS</strong>.</li>" +
        "<li><strong>Narrow QRS</strong> (ventricles still use the normal pathway). <strong>Loss of atrial kick</strong>.</li></ul>",
        ["junctional-origin", "junctional-p"],
        [q("Why are P waves inverted in junctional rhythms?", "The atria depolarize retrograde from the AV junction", ["The ventricles fire first", "The SA node fires backwards", "The atria are enlarged"], "Retrograde atrial depolarization inverts the P."),
          q("Junctional rhythms usually have what QRS width?", "Narrow", ["Wide and bizarre", "Absent", "Sine-wave"], "The ventricles depolarize via the normal pathway."),
          q("Where may the P wave appear in a junctional rhythm?", "Before, during, or after the QRS", ["Only well before the QRS with a normal PR", "Only as sawtooth waves", "Never on the strip at all, in every case"], "P may precede, hide in, or follow the QRS.")],
        [q("A patient with an inferior MI has a regular narrow-complex rhythm at 50 bpm. P waves are inverted and appear just after each QRS. What is the origin?", "AV junction", ["SA node", "Ventricle", "Multiple atrial foci"], "Inverted P after a narrow QRS = junctional.")]),
      C("Junctional rhythms by rate",
        tbl(["Rhythm", "Rate (bpm)"], [
          ["<strong>Junctional bradycardia</strong>", "<strong>&lt; 40</strong>"],
          ["<strong>Junctional (escape) rhythm</strong>", "<strong>40–60</strong> (the junction's intrinsic rate)"],
          ["<strong>Accelerated junctional rhythm</strong>", "<strong>60–100</strong>"],
          ["<strong>Junctional tachycardia</strong>", "<strong>100–160</strong>"]]) +
        "<p>All: regular, narrow QRS, P before/during/after QRS (typically inverted), PR 0.12–0.20 s or unmeasurable, T upright.</p>" +
        mn("Junction's home rate is <strong>40–60</strong>. Below it = <strong>brady</strong>; above it up to 100 = <strong>accelerated</strong>; over 100 = <strong>tachy</strong>."),
        ["junctional-rates"],
        [q("What is the rate of a junctional escape rhythm?", "40–60 bpm", ["Less than 40 bpm", "60–100 bpm", "100–160 bpm"], "The junction's intrinsic rate is 40–60."),
          q("An accelerated junctional rhythm runs at:", "60–100 bpm", ["40–60 bpm", "100–160 bpm", "Less than 40 bpm"], "Accelerated junctional: 60–100."),
          q("Junctional tachycardia runs at:", "100–160 bpm", ["160–250 bpm", "60–100 bpm", "250–350 bpm"], "Junctional tachycardia: 100–160."),
          q("Junctional bradycardia is a junctional rhythm under:", "40 bpm", ["60 bpm", "20 bpm", "100 bpm"], "Junctional brady: < 40.")],
        [q("A patient on digoxin has a regular narrow rhythm at 85 bpm with inverted P waves just before each QRS and a short PR. What is the rhythm?", "Accelerated junctional rhythm", ["Junctional escape rhythm", "Junctional tachycardia", "Normal sinus rhythm"], "Junctional features at 60–100 bpm."),
          q("After sinus arrest, a regular narrow rhythm emerges at 45 bpm with no visible P waves. What is it?", "Junctional escape rhythm", ["Idioventricular rhythm", "Junctional tachycardia", "Atrial flutter"], "Narrow escape rhythm at 40–60 = junctional.")])
    ]),

    /* ---------- 8d ---------- */
    S("08d-ventricular-rhythms", "8d. Ventricular rhythms: idioventricular, accelerated IVR, VT, VF, asystole", "Objective 8, ventricular rhythms. Slides 141–162.", [
      C("Ventricular dysrhythmias: general features",
        "<ul><li>Most are <strong>potentially life-threatening</strong> because cardiac output is compromised.</li>" +
        "<li>Occur when the atria and AV junction fail to fire, or from <strong>increased automaticity</strong> (most often in <strong>ischemia</strong>).</li>" +
        "<li>EKG: <strong>wide and bizarre QRS</strong>, <strong>no visible P waves</strong>.</li></ul>",
        ["ventricular-general"],
        [q("What QRS appearance is typical of rhythms arising in the ventricle?", "Wide and bizarre, without visible P waves", ["Narrow with inverted P waves", "Narrow with sawtooth waves", "Normal with a long PR"], "Ventricular origin bypasses the normal pathway."),
          q("The most common setting of increased ventricular automaticity is:", "Myocardial ischemia", ["Hyperthyroidism", "Pregnancy", "Caffeine in healthy hearts"], "Ischemia is most commonly responsible.")],
        [q("A rhythm strip shows wide, bizarre complexes with no P waves. Where does the rhythm originate?", "The ventricles", ["The SA node", "The AV junction", "Multiple atrial foci"], "Wide bizarre QRS without P = ventricular origin.")]),
      C("Idioventricular and accelerated idioventricular rhythm",
        tbl(["", "Idioventricular rhythm", "Accelerated idioventricular rhythm (AIVR)"], [
          ["Rate", "<strong>20–40</strong> bpm", "<strong>40–100</strong> bpm"],
          ["EKG", "Regular; no P; wide QRS same shape; T inverted or upright", "Regular; no P; wide QRS same shape"],
          ["Setting", "SA block; <strong>digoxin toxicity</strong>, ischemia/MI, <strong>pacemaker failure</strong>, electrolytes", "<strong>After MI</strong> or after <strong>thrombolytics</strong> (reperfusion)"],
          ["Significance", "<strong>Agonal</strong> rhythm; low to no cardiac output", "May look asymptomatic, but still considered <strong>very unstable</strong>"]]),
        ["idioventricular", "aivr"],
        [q("What is the rate of an idioventricular rhythm?", "20–40 bpm", ["40–60 bpm", "40–100 bpm", "100–250 bpm"], "Idioventricular: 20–40."),
          q("Accelerated idioventricular rhythm is classically seen:", "After MI or thrombolytic therapy", ["In healthy athletes at rest", "In COPD exacerbations", "With hypercalcemia"], "AIVR is a reperfusion rhythm."),
          q("Accelerated idioventricular rhythm runs at:", "40–100 bpm", ["20–40 bpm", "100–250 bpm", "Over 300 bpm"], "AIVR: 40–100."),
          q("Idioventricular rhythm is described as:", "An agonal rhythm with low to no cardiac output", ["A benign normal variant", "A sinus rhythm", "An atrial rhythm"], "It is agonal and life-threatening.")],
        [q("Shortly after thrombolytics for STEMI, a patient's monitor shows regular wide complexes at 70 bpm with no P waves. He feels fine. What is the rhythm and how should it be regarded?", "Accelerated idioventricular rhythm; still considered very unstable", ["Normal sinus rhythm; no concern", "Ventricular fibrillation; defibrillate", "Junctional rhythm; benign"], "AIVR after reperfusion; patients may look well but are unstable."),
          q("A dying patient's monitor shows regular wide complexes at 30 bpm with no P waves and no palpable pulse. What is the rhythm?", "Idioventricular rhythm (agonal)", ["Sinus bradycardia", "Junctional escape", "Atrial flutter"], "Wide complexes at 20–40 with no P waves.")]),
      C("Ventricular tachycardia",
        crit([["Regularity", "Regular"], ["Rate", "<strong>100–250</strong> bpm"], ["P waves", "None"], ["QRS", "<strong>Wide (&gt; 0.12 s)</strong>, monomorphic or polymorphic"], ["PR", "Unmeasurable"], ["T waves", "Indistinguishable"]]) +
        "<ul><li>Occurs in <strong>bursts</strong> or <strong>sustained</strong>; <strong>with or without a pulse</strong>.</li>" +
        "<li><strong>Always significant</strong>: regard as unstable or potentially unstable.</li>" +
        "<li><strong>Monomorphic</strong> (all QRS the same) or <strong>polymorphic</strong>; <strong>torsades de pointes</strong> is polymorphic VT that twists around the baseline.</li>" +
        "<li>Causes: ischemia or CAD with <strong>electrolyte imbalance</strong>, hypoxia, CHF, stimulants, drug toxicity.</li></ul>",
        ["vtach", "torsades"],
        [q("What is the rate range of ventricular tachycardia?", "100–250 bpm", ["40–100 bpm", "20–40 bpm", "250–350 bpm"], "VT: 100–250."),
          q("How should VT always be regarded?", "As unstable or potentially unstable", ["As benign", "As a sinus variant", "As an atrial rhythm"], "VT is always significant."),
          q("Torsades de pointes is a form of:", "Polymorphic ventricular tachycardia", ["Atrial flutter", "Monomorphic VT", "Junctional tachycardia"], "Torsades is polymorphic VT."),
          q("Which finding is part of VT?", "Wide QRS with no P waves", ["Sawtooth baseline", "Inverted P before each narrow QRS", "Progressive PR lengthening"], "VT: wide QRS > 0.12 s, no P waves.")],
        [q("A man with prior MI and hypokalemia has palpitations. The monitor shows a regular wide-complex rhythm at 190 bpm, every QRS identical, no P waves. What is the rhythm?", "Monomorphic ventricular tachycardia", ["Sinus tachycardia", "Atrial flutter", "Accelerated junctional rhythm"], "Wide, regular, fast, uniform, no P = monomorphic VT."),
          q("A patient with a long QT suddenly has a wide-complex tachycardia whose QRS amplitude waxes and wanes, twisting around the baseline. What is it?", "Torsades de pointes (polymorphic VT)", ["Atrial fibrillation", "Monomorphic VT", "Ventricular paced rhythm"], "Twisting polymorphic VT = torsades.")]),
      C("Ventricular fibrillation and asystole",
        tbl(["", "Ventricular fibrillation", "Asystole"], [
          ["What", "<strong>Chaotic firing</strong> of many ventricular sites; the heart <strong>quivers</strong>", "<strong>Ventricular standstill</strong>"],
          ["EKG", "Wavy, indistinguishable complexes; rate 0; no P, no PR", "Flat line"],
          ["Key facts", "<strong>Most common cause of pre-hospital cardiac arrest in adults</strong>; no effective circulation within <strong>10 seconds</strong>", "<strong>Almost always terminal</strong>"],
          ["Treatment", "<strong>Prompt defibrillation</strong>", "(ACLS; not shockable)"]]),
        ["vfib", "asystole"],
        [q("What is the most common cause of pre-hospital cardiac arrest in adults?", "Ventricular fibrillation", ["Asystole", "Atrial fibrillation", "Third-degree AV block"], "VF is the most common pre-hospital arrest rhythm."),
          q("What is the treatment for ventricular fibrillation?", "Prompt defibrillation", ["Observation", "Rate control with a beta blocker", "Vagal maneuvers"], "VF is treated by prompt defibrillation."),
          q("Within about how long of VF onset is there no effective circulation?", "10 seconds", ["10 minutes", "1 hour", "1 day"], "Circulation stops within ~10 seconds."),
          q("Asystole is:", "Ventricular standstill, almost always terminal", ["A benign pause", "A fast atrial rhythm", "Normal in athletes"], "Asystole carries a grim prognosis.")],
        [q("A man collapses at a gym. The AED shows chaotic, wavy, irregular activity with no identifiable QRS complexes. What is the rhythm and the immediate treatment?", "Ventricular fibrillation; defibrillate promptly", ["Asystole; defibrillate", "Atrial fibrillation; give a beta blocker", "Sinus arrest; observe"], "VF requires immediate defibrillation."),
          q("During a code, the monitor shows a flat line in two leads with no electrical activity. What rhythm is this?", "Asystole", ["Ventricular fibrillation", "Idioventricular rhythm", "Atrial flutter"], "Ventricular standstill = asystole.")])
    ]),

    /* ---------- 8e ---------- */
    S("08e-av-blocks", "8e. AV blocks: 1st degree, 2nd degree types I and II, 3rd degree", "Objective 8, AV blocks. Slides 163–174.", [
      C("Heart blocks: overview and first degree",
        "<p>AV blocks range from <strong>partial delay</strong> to <strong>complete interruption</strong> between atria and ventricles. Causes: <strong>ischemia, MI, degenerative conduction disease, congenital anomalies, medications</strong> (esp. <strong>digitalis</strong>).</p>" +
        "<p><strong>1st-degree AV block:</strong> not a true block. <strong>Every P is conducted</strong>, but slowly: <strong>PR &gt; 0.20 s</strong> (constant).</p>" +
        "<ul><li>Healthy or diseased hearts; usually <strong>no clinical significance</strong>, often asymptomatic.</li>" +
        "<li>May <strong>progress</strong> to higher block, especially with an <strong>inferior wall MI</strong>.</li></ul>",
        ["block-causes", "first-degree"],
        [q("What defines first-degree AV block?", "A constant PR interval longer than 0.20 seconds with every P conducted", ["Progressive PR lengthening then a dropped QRS", "Dropped QRS with a constant PR", "P waves unrelated to QRS complexes"], "First-degree: prolonged PR, all P waves conducted."),
          q("Which medication is especially associated with heart blocks?", "Digitalis", ["Amoxicillin", "Acetaminophen", "Levothyroxine"], "Digitalis is a classic cause."),
          q("In which setting may first-degree block progress to a higher block?", "Inferior wall MI", ["Hypothyroidism", "Healthy athletes", "Seasonal allergies"], "Watch for progression in inferior MI.")],
        [q("A 65-year-old asymptomatic man's EKG shows sinus rhythm at 72 with every P followed by a QRS and a constant PR of 0.26 s. What is the rhythm?", "Sinus rhythm with first-degree AV block", ["Second-degree type I block", "Third-degree block", "Normal sinus rhythm"], "Constant PR > 0.20 s with all P waves conducted.")]),
      C("Second-degree type I (Wenckebach)",
        "<p>An intermittent block <strong>at the AV node</strong>: the <strong>PR lengthens progressively</strong> until a <strong>QRS is dropped</strong>, then the PR resets; the cycle repeats.</p>" +
        "<ul><li>Often in <strong>acute inferior MI</strong> or acute <strong>myocarditis</strong>; also drug toxicity, head injury, electrolytes.</li>" +
        "<li>May progress, especially early in MI; symptomatic if drops are frequent.</li>" +
        "<li>In healthy hearts may be <strong>transient</strong> and resolve once the cause is corrected.</li></ul>" +
        mn("“<strong>Longer, longer, longer, drop</strong> — now you've got a Wenckebach.”"),
        ["wenckebach"],
        [q("What is the hallmark of second-degree type I (Wenckebach) block?", "Progressive PR lengthening until a QRS is dropped", ["Constant PR with randomly dropped QRS", "PR always > 0.20 s with no drops", "P waves marching through unrelated QRS complexes"], "Progressive PR lengthening, then a drop, then reset."),
          q("At what level is the block in Wenckebach?", "The AV node", ["The bundle branches", "The Purkinje fibers", "The SA node"], "Type I is an AV-node block."),
          q("Wenckebach often occurs with which MI?", "Acute inferior wall MI", ["Anterior wall MI", "Posterior MI only", "Septal MI only"], "Often seen in acute inferior MI or myocarditis.")],
        [q("A patient with an acute inferior MI has a strip where PR intervals measure 0.20, 0.26, 0.32 s, then a P wave is not followed by a QRS, and the cycle repeats. What is the rhythm?", "Second-degree AV block type I (Wenckebach)", ["Second-degree AV block type II", "Third-degree AV block", "First-degree AV block"], "Progressive PR lengthening to a dropped beat.")]),
      C("Second-degree type II",
        "<p>An intermittent block <strong>at the bundle of His or bundle branches</strong>: <strong>non-conducted P waves</strong> with a <strong>constant PR</strong> in conducted beats; <strong>no progressive PR lengthening</strong> before the dropped QRS.</p>" +
        "<ul><li>QRS normal or <strong>wide</strong>; rhythm regular or irregular.</li>" +
        "<li><strong>More serious than type I</strong>: more often progresses to <strong>complete heart block or asystole</strong>.</li>" +
        "<li>Associated with <strong>left CAD, anterior wall MI</strong>, or conduction-system degeneration.</li>" +
        "<li><strong>Life-threatening when symptomatic</strong>; can be hard to distinguish from 3rd-degree block.</li></ul>",
        ["mobitz-2"],
        [q("What distinguishes second-degree type II from type I?", "The PR is constant before the dropped QRS", ["The PR lengthens before the dropped QRS", "No QRS is ever dropped", "The atria and ventricles beat independently"], "Type II: constant PR, sudden drop."),
          q("Where is the block in second-degree type II?", "At the bundle of His or bundle branches", ["At the SA node", "At the AV node only", "In the atria"], "Type II is infranodal."),
          q("Type II block is associated with which MI?", "Anterior wall MI", ["Inferior wall MI", "Right ventricular MI", "No MI association"], "Left CAD and anterior MI."),
          q("Why is type II more dangerous than type I?", "It more often progresses to complete heart block or asystole", ["It always resolves on its own", "It never causes symptoms", "It is caused by caffeine"], "Type II is the more serious block.")],
        [q("A patient with an anterior MI becomes lightheaded. The strip shows a constant PR of 0.18 s in conducted beats, with an occasional P wave suddenly not followed by a QRS. What is the rhythm?", "Second-degree AV block type II", ["Second-degree AV block type I", "First-degree AV block", "Sinus arrhythmia"], "Constant PR with sudden drops = type II.")]),
      C("Third-degree (complete) heart block",
        "<p>A <strong>complete block at or below the AV node</strong>. P waves and QRS complexes each occur rhythmically but <strong>with no relationship</strong> to each other (AV dissociation).</p>" +
        "<ul><li>Characteristic: <strong>more P waves than QRS complexes</strong>, P waves <strong>march through</strong>.</li>" +
        "<li>Tolerated only while the <strong>junctional or ventricular escape</strong> rhythm gives adequate output.</li>" +
        "<li><strong>Wide QRS</strong> (ventricular escape) is <strong>more emergent</strong>; all forms are potentially life-threatening.</li></ul>" +
        tbl(["Block", "PR", "Dropped QRS?"], [
          ["1st degree", "Constant, &gt; 0.20 s", "No"],
          ["2nd type I", "<strong>Progressively longer</strong>", "Yes, then PR resets"],
          ["2nd type II", "<strong>Constant</strong>", "Yes, suddenly"],
          ["3rd degree", "<strong>No relationship</strong> (varies randomly)", "P waves and QRS independent"]]),
        ["third-degree", "block-comparison"],
        [q("What is the characteristic finding of third-degree heart block?", "P waves march through with no relationship to the QRS complexes", ["Progressive PR lengthening", "Constant prolonged PR", "Sawtooth P waves"], "Complete AV dissociation."),
          q("In third-degree block, which escape QRS is more emergent?", "Wide QRS", ["Narrow QRS", "Both equally benign", "Neither is ever emergent"], "Wide QRS (ventricular escape) is more emergent."),
          q("In complete heart block, there are typically:", "More P waves than QRS complexes", ["More QRS complexes than P waves", "Equal and linked P and QRS", "No P waves"], "Atrial rate exceeds the escape rate.")],
        [q("An 80-year-old has syncope. The strip shows P waves at 80 bpm and wide QRS complexes at 35 bpm, with PR intervals varying randomly. What is the rhythm?", "Third-degree (complete) heart block with a ventricular escape", ["Second-degree type I", "First-degree AV block", "Sinus bradycardia"], "P and QRS independent; wide slow escape."),
          q("Which block shows PR intervals of 0.16, 0.16, 0.16 s, then a P wave with no QRS?", "Second-degree type II", ["Second-degree type I", "Third-degree", "First-degree"], "Constant PR before a sudden drop = type II.")])
    ]),

    /* ---------- 9 ---------- */
    S("09-premature-beats", "9. Recognizing PACs, PJCs, and PVCs", "Objective 9. Slides 97–101, 124–127, 143–147.", [
      C("Premature beats compared",
        "<p>All three are <strong>early ectopic beats, not rhythms</strong>. The underlying rhythm is regular <strong>except for the premature beats</strong>.</p>" +
        tbl(["", "PAC", "PJC", "PVC"], [
          ["Origin", "Atria outside the SA node", "AV junction", "Ventricular myocardium or conduction system"],
          ["P wave", "Present, early (may look different)", "<strong>Inverted</strong>; before, during, or after the QRS", "<strong>None / unrelated</strong>"],
          ["QRS", "<strong>Narrow</strong>", "<strong>Narrow</strong>", "<strong>Wide and bizarre (&gt; 0.12 s)</strong>"],
          ["PR", "0.12–0.20 s", "0.12–0.20 s or unmeasurable", "Unmeasurable"]]) +
        hy("Early <strong>narrow</strong> beat with an upright P = <strong>PAC</strong>. Early narrow beat with an inverted/hidden P = <strong>PJC</strong>. Early <strong>wide bizarre</strong> beat, no P = <strong>PVC</strong>."),
        ["pac-pjc-pvc-compare"],
        [q("Which premature beat has a wide and bizarre QRS?", "PVC", ["PAC", "PJC", "Sinus beat"], "PVCs originate in the ventricle."),
          q("An early narrow beat with an inverted P wave just after the QRS is a:", "PJC", ["PAC", "PVC", "Pacemaker beat"], "Retrograde P with narrow QRS = junctional."),
          q("Are PACs, PJCs, and PVCs rhythms?", "No; they are single early ectopic beats", ["Yes, all three are rhythms", "Only PVCs are rhythms", "Only PACs are rhythms"], "Each is a premature beat, not a rhythm.")],
        [q("A sinus rhythm at 80 has an occasional early beat with an upright P wave and a narrow QRS identical to the others. What is the early beat?", "Premature atrial contraction", ["Premature ventricular contraction", "Premature junctional contraction", "Sinus arrest"], "Early P with a narrow QRS = PAC."),
          q("A sinus rhythm has an occasional early beat that is wide and bizarre with no P wave before it. What is the early beat?", "Premature ventricular contraction", ["Premature atrial contraction", "Premature junctional contraction", "Delta wave"], "Wide bizarre early beat without P = PVC.")]),
      C("PACs: causes and significance",
        "<ul><li>Early beats from outside the SA node; mechanism: <strong>enhanced automaticity or reentry</strong>.</li>" +
        "<li>Healthy hearts: <strong>pregnancy, caffeine, alcohol</strong>. Other causes: <strong>digoxin toxicity, electrolyte imbalance, hypoxia, high catecholamines</strong>.</li>" +
        "<li>Healthy heart: <strong>insignificant</strong>, though palpitations or “skipped beats” may occur.</li>" +
        "<li>Heart disease: frequent PACs may lead to <strong>worse atrial dysrhythmias</strong>; may signal <strong>electrolyte imbalance in AMI or CHF</strong>.</li></ul>",
        ["pac-causes"],
        [q("Which is a cause of PACs in a healthy heart?", "Caffeine", ["Inferior MI", "Hyperkalemia with sine waves", "Complete heart block"], "Pregnancy, caffeine, alcohol."),
          q("What is the significance of PACs in a healthy heart?", "Usually insignificant, though they may cause palpitations", ["Always life-threatening", "Diagnostic of MI", "Require immediate defibrillation"], "Benign in healthy hearts."),
          q("In patients with heart disease, frequent PACs may:", "Predispose to worsening atrial dysrhythmias", ["Protect against AF", "Cause asystole directly", "Prove hypercalcemia"], "Frequent PACs can lead to worse atrial rhythms.")],
        [q("A 28-year-old who drinks five espressos a day notices “skipped beats.” EKG shows sinus rhythm with occasional early narrow beats preceded by P waves. What is the likely cause?", "PACs from caffeine", ["PVCs from ischemia", "Wenckebach block", "Atrial flutter"], "Caffeine is a classic PAC trigger in healthy hearts.")]),
      C("PJCs: causes and significance",
        "<ul><li>A single early impulse from the <strong>AV junction</strong>, before the next sinus beat; mechanism: enhanced automaticity or reentry.</li>" +
        "<li><strong>&gt; 4–6 per minute</strong> warrant further evaluation.</li>" +
        "<li>Causes: <strong>digoxin toxicity</strong>, excess <strong>caffeine</strong>, <strong>inferior MI</strong>, rheumatic heart disease, AV-junction swelling after surgery.</li></ul>",
        ["pjc"],
        [q("How many PJCs per minute warrant further evaluation?", "More than 4–6", ["More than 1", "More than 30", "Any number is benign"], "> 4–6 PJCs/min warrant workup."),
          q("Which MI is a listed cause of PJCs?", "Inferior MI", ["Anterior MI", "Lateral MI", "Posterior MI only"], "Inferior MI, digoxin, caffeine, RHD, post-op swelling.")],
        [q("A patient on digoxin has 8 early narrow beats per minute, each with an inverted P wave immediately after the QRS. What is the beat, and what should be done?", "PJCs; evaluate further, including for digoxin toxicity", ["PACs; ignore", "PVCs; defibrillate", "Normal sinus beats; no action"], "Frequent PJCs (> 4–6/min) warrant evaluation; digoxin toxicity is a cause.")]),
      C("PVCs: warning signs and patterns",
        "<ul><li>From an <strong>irritable ventricular focus</strong>; enhanced automaticity or reentry; physiologic or pathologic.</li>" +
        "<li>Can trigger worse dysrhythmias or lower output (short filling, lost atrial kick).</li></ul>" +
        "<p>In <strong>myocardial ischemia</strong>, PVCs are a strong <strong>warning of life-threatening dysrhythmia</strong> if they are:</p>" +
        tbl(["Warning feature", "Meaning"], [
          ["<strong>Frequent</strong>", "Many per minute"],
          ["<strong>Multifocal</strong>", "Different shapes = more than one irritable focus (vs <strong>unifocal</strong>: all alike)"],
          ["<strong>Early (R on T)</strong>", "PVC lands on the preceding T wave"],
          ["<strong>Grouped</strong>", "<strong>Bigeminy</strong> (every other beat), <strong>trigeminy</strong> (every third), <strong>couplets</strong>, runs of VT (a triplet = a burst of VT)"]]),
        ["pvc-warning", "pvc-patterns"],
        [q("Which PVC pattern is a warning sign in myocardial ischemia?", "R-on-T PVCs", ["A single unifocal PVC per hour", "PVCs only during sleep in a healthy heart", "No PVC is ever a warning"], "Frequent, multifocal, early (R on T), or grouped PVCs are warnings."),
          q("What is ventricular bigeminy?", "A PVC every other beat", ["A PVC every third beat", "Two PVCs in a row", "Three PVCs in a row"], "Bigeminy alternates normal beat and PVC."),
          q("Three PVCs in a row are considered:", "A burst (run) of VT", ["Bigeminy", "A couplet", "A PAC"], "A triplet is a burst of V tach."),
          q("PVCs of different shapes in the same lead are called:", "Multifocal", ["Unifocal", "Junctional", "Atrial"], "Different shapes = different foci.")],
        [q("A patient with acute MI has PVCs of three different shapes, one landing on the preceding T wave, plus a couplet. How should this be interpreted?", "A strong warning of impending life-threatening dysrhythmia", ["Benign; no concern", "Typical of a healthy heart", "Diagnostic of atrial flutter"], "Multifocal, R-on-T, and grouped PVCs in ischemia are warning signs."),
          q("A monitor shows a normal beat, then a PVC, then a normal beat, then a PVC, repeating. What is this pattern?", "Ventricular bigeminy", ["Ventricular trigeminy", "A couplet", "Ventricular tachycardia"], "Every other beat is a PVC.")])
    ]),

    /* ---------- 10 ---------- */
    S("10-qtc", "10. Prolonged QTc and the arrhythmias it causes", "Objective 10. Slides 81–82, 158, 281.", [
      C("QTc and its dangers",
        "<ul><li><strong>QT</strong> = ventricular depolarization + repolarization (0.36–0.44 s). It varies with rate, so it is <strong>corrected</strong> (QTc).</li>" +
        "<li>Normal <strong>QTc &lt; 470 ms (men)</strong>, <strong>&lt; 480 ms (women)</strong>; the correction formula can mislead at extreme heart rates.</li>" +
        "<li><strong>Prolonged QT</strong> predisposes to <strong>life-threatening dysrhythmia</strong>, especially with <strong>MI or ischemia</strong>: the key one is <strong>torsades de pointes</strong> (polymorphic VT).</li>" +
        "<li>Prolonged QT may be a <strong>dose-limiting effect of antiarrhythmics</strong>. <strong>Hypocalcemia</strong> and <strong>hypokalemia</strong> prolong QT.</li>" +
        "<li><strong>Short QT</strong> (QTc &lt; 350 ms): <strong>hypercalcemia</strong> or <strong>digoxin toxicity</strong>.</li></ul>" +
        hy("Long QT → <strong>torsades de pointes</strong>. Watch antiarrhythmic doses, potassium, and calcium."),
        ["qtc-normal", "long-qt-risk", "short-qt"],
        [q("What is the upper limit of a normal QTc in men in this lecture?", "470 ms", ["440 ms", "500 ms", "350 ms"], "QTc < 470 ms men, < 480 ms women."),
          q("Which arrhythmia is the classic danger of a prolonged QT?", "Torsades de pointes", ["Atrial flutter", "Wenckebach", "Sinus arrhythmia"], "Prolonged QT predisposes to polymorphic VT (torsades)."),
          q("Which conditions shorten the QT interval?", "Hypercalcemia and digoxin toxicity", ["Hypocalcemia and hypokalemia", "Hypothermia and MI", "Pregnancy and caffeine"], "Short QT: hypercalcemia, digoxin."),
          q("Why is the QT corrected for heart rate?", "The QT shortens with faster rates and lengthens with slower rates", ["The QT never changes", "To measure the PR", "To calculate the axis"], "QTc corrects for rate.")],
        [q("A woman on an antiarrhythmic has a QTc of 530 ms and a potassium of 2.9. She has a brief syncopal episode. Which rhythm is she at risk for?", "Torsades de pointes", ["Atrial flutter", "Sinus bradycardia", "Junctional escape"], "Long QT plus hypokalemia predisposes to torsades."),
          q("A patient with a QTc of 330 ms has confusion and constipation. Which lab abnormality best explains the short QT?", "Hypercalcemia", ["Hypocalcemia", "Hypokalemia", "Hypomagnesemia"], "Hypercalcemia shortens the QT.")])
    ]),

    /* ---------- 11 ---------- */
    S("11-electrical-axis", "11. Determining the electrical axis and causes of axis deviation", "Objective 11. Slides 187–203.", [
      C("What the axis is, and normal QRS direction",
        "<p>The <strong>electrical axis</strong> is the overall direction and magnitude of all the heart's depolarization vectors. The <strong>LV</strong> is larger, so its vectors dominate and pull the axis <strong>down and to the left</strong>.</p>" +
        tbl(["QRS is normally…", "Leads"], [
          ["<strong>Positive</strong>", "I, II, III, aVL, aVF, V4–V6"],
          ["<strong>Negative</strong>", "<strong>aVR</strong>, V1–V3"],
          ["May be <strong>biphasic</strong>", "III, aVL, V2–V4"]]),
        ["axis-definition", "normal-qrs-direction"],
        [q("Why does the normal axis point down and to the left?", "The larger left ventricle's vectors dominate", ["The right ventricle is larger", "The atria are larger than the ventricles", "The SA node is on the left"], "LV vectors are larger and longer-lasting."),
          q("In which lead is the QRS normally negative?", "aVR", ["II", "V5", "I"], "aVR and V1–V3 are normally negative."),
          q("Normally, the QRS is positive in:", "I, II, III, aVL, aVF, and V4–V6", ["aVR and V1–V3", "Only V1", "Only aVR"], "These leads face the depolarization wave.")],
        [q("A normal adult's EKG shows a negative QRS in aVR and V1. Is this abnormal?", "No; aVR and V1–V3 are normally negative", ["Yes; it means MI", "Yes; it means right axis deviation", "Yes; it means hyperkalemia"], "Normal QRS direction in these leads is negative.")]),
      C("Finding the axis with leads I and aVF",
        "<p>Look only at <strong>lead I</strong> (left/right, 0°) and <strong>aVF</strong> (up/down, +90°). <strong>Thumbs up = positive QRS</strong>.</p>" +
        tbl(["Lead I", "aVF", "Axis"], [
          ["<strong>+</strong>", "<strong>+</strong>", "<strong>Normal</strong> (0° to +90°)"],
          ["<strong>−</strong>", "<strong>+</strong>", "<strong>Right axis deviation</strong>"],
          ["<strong>+</strong>", "<strong>−</strong>", "<strong>Left axis deviation</strong>"],
          ["<strong>−</strong>", "<strong>−</strong>", "<strong>Extreme axis deviation</strong>"]]) +
        mn("Two thumbs (left hand = lead I, right hand = aVF). <strong>Both up = normal.</strong> Thumbs <strong>reaching toward each other</strong> (I down, aVF up) = <strong>Right</strong>. Thumbs <strong>leaving</strong> each other (I up, aVF down) = <strong>Left</strong>. Both down = extreme."),
        ["axis-method", "axis-quadrants"],
        [q("Which two leads are used to determine the axis in this lecture?", "Lead I and aVF", ["V1 and V6", "II and III", "aVR and aVL"], "Lead I = left/right; aVF = up/down."),
          q("Lead I negative and aVF positive indicates:", "Right axis deviation", ["Left axis deviation", "Normal axis", "Extreme axis deviation"], "I −, aVF + = RAD."),
          q("Lead I positive and aVF negative indicates:", "Left axis deviation", ["Right axis deviation", "Normal axis", "Extreme axis deviation"], "I +, aVF − = LAD."),
          q("What is the normal axis range?", "0 to +90 degrees", ["−90 to −180 degrees", "+90 to +180 degrees", "−30 to −90 degrees only"], "Normal axis is down and to the left, 0° to +90°.")],
        [q("An EKG shows a positive QRS in lead I and a positive QRS in aVF. What is the axis?", "Normal", ["Left axis deviation", "Right axis deviation", "Extreme axis deviation"], "Both positive = normal."),
          q("An EKG shows negative QRS complexes in both lead I and aVF. What is the axis?", "Extreme axis deviation", ["Normal", "Left axis deviation", "Right axis deviation"], "Both negative = extreme.")]),
      C("Conditions that alter the axis",
        tbl(["Cause", "Effect on axis"], [
          ["<strong>Pregnancy, abdominal obesity</strong>, anything that raises the diaphragm", "<strong>Left</strong> axis deviation (heart more horizontal)"],
          ["<strong>Thin individuals, children</strong>", "<strong>Right</strong> axis deviation (heart more vertical)"],
          ["<strong>Hypertrophy</strong>", "Axis shifts <strong>toward</strong> the enlarged region (more muscle, more electrical force)"],
          ["<strong>Infarction</strong>", "Axis points <strong>away</strong> from the infarct (dead tissue loses its vector)"],
          ["<strong>Left anterior hemiblock</strong> / <strong>left posterior hemiblock</strong>", "<strong>Left</strong> / <strong>right</strong> axis deviation (Objective 12)"]]) +
        hy("Axis goes <strong>toward hypertrophy</strong> and <strong>away from infarction</strong>."),
        ["axis-body-habitus", "axis-hypertrophy-infarct"],
        [q("Which condition tends to cause left axis deviation by elevating the diaphragm?", "Pregnancy", ["Being very thin", "Childhood", "Right ventricular hypertrophy"], "A raised diaphragm makes the heart more horizontal."),
          q("Thin individuals and children may show:", "Right axis deviation", ["Left axis deviation", "Extreme axis deviation always", "No measurable axis"], "A more vertical heart shifts the axis right."),
          q("After an infarction, the axis points:", "Away from the infarct", ["Toward the infarct", "Always to +90°", "Always to 0°"], "Necrotic tissue loses its vector."),
          q("Ventricular hypertrophy shifts the axis:", "Toward the hypertrophied region", ["Away from the hypertrophied region", "Not at all", "Always to extreme deviation"], "More muscle = greater electrical force.")],
        [q("A 30-year-old at 36 weeks' gestation has a new left axis deviation and an otherwise normal EKG. What is the most likely explanation?", "The gravid uterus elevates the diaphragm, making the heart more horizontal", ["Acute inferior MI", "Right ventricular hypertrophy", "Hyperkalemia"], "Pregnancy can produce LAD."),
          q("A patient with long-standing pulmonary hypertension and RVH has lead I negative and aVF positive. What explains the axis?", "Right axis deviation toward the hypertrophied right ventricle", ["Left axis deviation from LVH", "Normal axis", "Infarction of the right ventricle"], "Hypertrophy pulls the axis toward itself.")])
    ]),

    /* ---------- 12 ---------- */
    S("12-hypertrophy-blocks", "12. Hypertrophy, enlargement, strain, bundle branch blocks, and hemiblocks", "Objective 12. Slides 204–231.", [
      C("Hypertrophy vs enlargement",
        tbl(["", "Hypertrophy", "Enlargement (dilation)"], [
          ["Wall", "<strong>Thicker</strong> myocardium", "<strong>Thinner</strong>, stretched myocardium"],
          ["Chamber", "May get smaller", "Gets larger"],
          ["Usually", "<strong>Ventricles</strong>", "<strong>Atria</strong>"]]) +
        "<p>EKG indicators of either: <strong>increased duration</strong> of a waveform, <strong>increased amplitude</strong>, and <strong>axis deviation</strong>.</p>",
        ["hypertrophy-vs-enlargement"],
        [q("Which describes hypertrophy?", "A thicker myocardium that may make the chamber smaller", ["A thinner stretched wall with a bigger chamber", "Loss of myocardium after MI", "Fluid around the heart"], "Hypertrophy = thick wall."),
          q("Dilation is most often associated with which chambers?", "The atria", ["The ventricles", "The great vessels", "The coronary arteries"], "Dilation: atria; hypertrophy: ventricles."),
          q("Which three EKG changes suggest hypertrophy or enlargement?", "Increased waveform duration, increased amplitude, and axis deviation", ["ST elevation, Q waves, and T inversion", "Short PR, delta wave, and wide QRS", "U waves, flat T, and ST depression"], "Duration, amplitude, and axis.")],
        [q("An echo shows a thick LV wall with a small cavity in a hypertensive patient. Which term fits?", "Ventricular hypertrophy", ["Ventricular dilation", "Atrial enlargement", "Pericardial effusion"], "Thick wall, smaller chamber = hypertrophy.")]),
      C("Right and left atrial enlargement",
        "<p>Normal P: <strong>&lt; 0.10 s</strong> wide and <strong>&lt; 2.5 mm</strong> tall. Look at <strong>lead II</strong> (parallel to atrial current) and <strong>V1</strong> (directly over the atria; separates RA and LA parts). A <strong>biphasic P in V1</strong> suggests enlargement of one or both atria.</p>" +
        tbl(["", "Right atrial enlargement", "Left atrial enlargement"], [
          ["Criterion", "P wave <strong>taller than 2.5 mm</strong>, or biphasic P with the <strong>initial component taller</strong> than the terminal", "Biphasic P in V1 whose <strong>terminal portion drops ≥ 1 mm below baseline</strong>; terminal portion <strong>&gt; 0.04 s</strong> wide"],
          ["P width", "Normal (RA part hidden by LA part)", "Increased"]]) +
        mn("<strong>R</strong>AE = <strong>R</strong>aised (tall P). <strong>L</strong>AE = <strong>L</strong>ong and <strong>L</strong>ow terminal P in V1."),
        ["rae", "lae"],
        [q("Which finding indicates right atrial enlargement?", "A P wave taller than 2.5 mm", ["A terminal P wave at least 1 mm below baseline in V1", "A QRS over 0.12 s", "A delta wave"], "RAE: tall P (> 2.5 mm) or a dominant initial component."),
          q("Which finding in V1 indicates left atrial enlargement?", "A terminal P component at least 1 mm below baseline", ["A tall initial P component", "An RSR' complex", "ST depression"], "LAE: deep, wide terminal negative P in V1."),
          q("Why is P-wave width usually normal in right atrial enlargement?", "The prolonged RA portion is hidden by the later LA portion", ["The RA does not depolarize", "RAE always shortens the PR", "The SA node is in the LA"], "RA depolarization finishes before LA depolarization ends."),
          q("Which lead lies directly over the atria and best separates RA and LA components of the P wave?", "V1", ["aVR", "V6", "I"], "V1 overlies the atria.")],
        [q("A patient with severe mitral stenosis has a biphasic P in V1 with a wide terminal negative portion 2 mm deep. What does this suggest?", "Left atrial enlargement", ["Right atrial enlargement", "Right bundle branch block", "Hyperkalemia"], "Deep wide terminal P in V1 = LAE."),
          q("A patient with COPD and pulmonary hypertension has P waves 3.5 mm tall in lead II with normal width. What does this suggest?", "Right atrial enlargement", ["Left atrial enlargement", "Left ventricular hypertrophy", "Atrial fibrillation"], "Tall P > 2.5 mm = RAE.")]),
      C("Right ventricular hypertrophy",
        "<ul><li>Most common finding: <strong>right axis deviation</strong> (the RV pulls the axis toward itself).</li>" +
        "<li><strong>Large R waves in V1</strong> (R bigger than S) that <strong>decrease from V1 to V6</strong>: the opposite of normal R-wave progression (normally smallest in V1, largest in V6).</li>" +
        "<li><strong>RV strain</strong> appears in <strong>V1</strong>.</li></ul>",
        ["rvh"],
        [q("What is the most common EKG characteristic of RVH?", "Right axis deviation", ["Left axis deviation", "Short PR", "Delta wave"], "The hypertrophied RV pulls the axis right."),
          q("In RVH, R waves in V1:", "Are larger than the S waves and decrease toward V6", ["Are absent", "Are smaller than in V6, as normal", "Show sawtooth waves"], "Reverse R-wave progression."),
          q("Normally, R waves across the precordium are:", "Smallest in V1 and largest in V6", ["Largest in V1 and smallest in V6", "Equal in every lead", "Absent in V4–V6"], "RVH reverses this pattern.")],
        [q("A patient with long-standing pulmonary hypertension has right axis deviation and a tall R wave in V1 larger than the S wave, with R waves shrinking toward V6. What is the diagnosis?", "Right ventricular hypertrophy", ["Left ventricular hypertrophy", "Left bundle branch block", "Posterior MI only"], "RAD plus dominant R in V1 = RVH.")]),
      C("Left ventricular hypertrophy",
        "<ul><li><strong>Tall R waves in V5–V6</strong> (over the LV) and <strong>deep S waves in V1</strong> (over the RV).</li>" +
        "<li>Left axis deviation (often around <strong>−15°</strong>).</li>" +
        "<li>T wave often <strong>asymmetric and inverted</strong>: long gradual downslope, rapid upstroke (strain).</li></ul>" +
        tbl(["LVH voltage criteria (more present = more likely LVH)"], [
          ["<strong>R in V5 or V6 + S in V1 or V2 &gt; 35 mm</strong>"],
          ["R in V5 &gt; 26 mm"], ["R in V6 &gt; R in V5"], ["aVL &gt; 13 mm"], ["aVF &gt; 21 mm"], ["Lead I &gt; 14 mm"], ["R in I + S in III &gt; 25 mm"]]) +
        hy("Classic: <strong>S(V1) + R(V5 or V6) &gt; 35 mm</strong>."),
        ["lvh"],
        [q("Which is a voltage criterion for LVH?", "R in V5 or V6 plus S in V1 or V2 greater than 35 mm", ["P wave greater than 2.5 mm", "QRS less than 5 mm", "R in V1 greater than S in V1"], "Sum > 35 mm is the classic criterion."),
          q("In LVH, R waves are tallest in:", "V5 and V6", ["V1 and V2", "aVR", "III only"], "V5–V6 overlie the LV."),
          q("What T-wave change accompanies LVH strain?", "Asymmetric inversion with a gradual downslope and rapid upstroke", ["Tall peaked symmetric T waves", "U waves", "No change"], "This asymmetric inversion is the strain pattern."),
          q("An aVL R wave above what height supports LVH?", "13 mm", ["5 mm", "35 mm", "2.5 mm"], "aVL > 13 mm is one criterion.")],
        [q("A 60-year-old with long-standing uncontrolled hypertension has an S wave of 18 mm in V1 and an R wave of 24 mm in V5, with asymmetric T-wave inversion in V5–V6. What is the diagnosis?", "Left ventricular hypertrophy with strain", ["Right ventricular hypertrophy", "Right bundle branch block", "Acute pericarditis"], "18 + 24 = 42 mm > 35 mm, plus lateral strain.")]),
      C("Ventricular strain",
        "<p>When the heart is working hard (especially with hypertrophy), a <strong>strain pattern</strong> appears: <strong>ST depression with a slight early hump</strong>.</p>" +
        tbl(["Strain", "Leads"], [["<strong>Right</strong> ventricular strain", "<strong>V1</strong>"], ["<strong>Left</strong> ventricular strain", "<strong>V5 and V6</strong>"]]),
        ["strain"],
        [q("What does a ventricular strain pattern look like?", "ST depression with a slight early hump", ["ST elevation with Q waves", "Sawtooth waves", "Delta waves"], "Strain = depressed ST with an early hump."),
          q("Left ventricular strain is seen in which leads?", "V5 and V6", ["V1", "aVR", "III only"], "LV strain: V5–V6; RV strain: V1.")],
        [q("A patient with severe aortic stenosis and LVH has ST depression with an early hump in V5 and V6. What does this represent?", "Left ventricular strain", ["Right ventricular strain", "Acute lateral STEMI", "Hypokalemia only"], "Strain in V5–V6 = LV strain.")]),
      C("Bundle branch blocks",
        "<p>One bundle branch fails to conduct, delaying depolarization of that ventricle until the impulse spreads from the other side.</p>" +
        "<p><strong>QRS ≥ 0.12 s</strong> with <strong>two peaks (R and R′)</strong>. A non-widened version = <strong>incomplete BBB</strong> or fascicular block.</p>" +
        tbl(["", "Right BBB", "Left BBB"], [
          ["Best leads", "<strong>V1 and V2</strong>", "<strong>V5 and V6</strong>"],
          ["Look", "“<strong>Rabbit ears</strong>” or an “<strong>M</strong>” (RSR′)", "Wide QRS with <strong>tall R waves</strong>, flattened or mildly notched tops; rabbit ears less likely"],
          ["Causes", "Anterior MI, CAD, <strong>PE</strong>, drug toxicity", ""]]) +
        mn("Turn signal: <strong>R</strong>BBB in the <strong>R</strong>ight-sided leads (V1–V2); <strong>L</strong>BBB in the <strong>L</strong>eft-sided leads (V5–V6).") +
        "<p>The left bundle splits into <strong>septal</strong>, <strong>anterior</strong>, and <strong>posterior</strong> fascicles. The septal fascicle depolarizes the septum left to right (physiologic Q waves).</p>",
        ["bbb-general", "rbbb", "lbbb"],
        [q("What QRS width defines a complete bundle branch block?", "0.12 seconds or more", ["0.06 seconds", "0.10 seconds", "0.04 seconds"], "Complete BBB: QRS ≥ 0.12 s with R and R′."),
          q("Which leads best identify a right bundle branch block?", "V1 and V2", ["V5 and V6", "II, III, aVF", "aVR"], "RBBB: rabbit ears in V1–V2."),
          q("Which leads best identify a left bundle branch block?", "V5 and V6", ["V1 and V2", "aVR", "III and aVF"], "LBBB: wide notched R in V5–V6."),
          q("Which is a listed cause of RBBB?", "Pulmonary embolism", ["Hypercalcemia", "Caffeine", "Hypothermia"], "Anterior MI, CAD, PE, drug toxicity."),
          q("A bundle branch pattern with a QRS under 0.12 s is called:", "Incomplete bundle branch block", ["Complete bundle branch block", "Third-degree block", "Ventricular tachycardia"], "Non-widened = incomplete or fascicular block.")],
        [q("A patient with sudden dyspnea after a long flight has a new QRS of 0.14 s with an M-shaped RSR′ in V1 and V2. What conduction abnormality is present?", "Right bundle branch block", ["Left bundle branch block", "Left anterior hemiblock", "First-degree AV block"], "Rabbit ears in V1–V2 = RBBB; PE is a cause."),
          q("A 75-year-old's EKG shows a QRS of 0.16 s with broad, tall, notched R waves in V5 and V6 and no rabbit ears in V1. What is the abnormality?", "Left bundle branch block", ["Right bundle branch block", "Right ventricular hypertrophy", "Wenckebach"], "Wide notched R in V5–V6 = LBBB.")]),
      C("Hemiblocks (fascicular blocks)",
        "<p>Fascicular blocks <strong>do not widen the QRS</strong>; <strong>axis deviation</strong> is the key finding.</p>" +
        tbl(["Hemiblock", "Fascicle", "Axis"], [
          ["<strong>Left anterior hemiblock</strong>", "Anterior (superior) LV; longest, thinnest, most fragile blood supply; most clinically relevant", "<strong>Left</strong> axis deviation"],
          ["<strong>Left posterior hemiblock</strong>", "Posterior (inferior) LV", "<strong>Right</strong> axis deviation"]]) +
        hy("Any partial ventricular block carries a <strong>high risk of progressing to complete heart block</strong>.") +
        mn("<strong>A</strong>nterior → <strong>A</strong>way to the left (LAD). <strong>P</strong>osterior → <strong>P</strong>ushes right (RAD)."),
        ["hemiblocks"],
        [q("What is the key EKG finding of a hemiblock?", "Axis deviation without QRS widening", ["A QRS over 0.16 s", "A delta wave", "ST elevation"], "Fascicular blocks shift the axis but keep the QRS narrow."),
          q("Left anterior hemiblock causes:", "Left axis deviation", ["Right axis deviation", "Normal axis", "No change at all"], "LAHB → LAD."),
          q("Left posterior hemiblock causes:", "Right axis deviation", ["Left axis deviation", "Extreme axis deviation always", "A wide QRS"], "LPHB → RAD."),
          q("Which fascicle is the longest and thinnest with the most fragile blood supply?", "The left anterior fascicle", ["The left posterior fascicle", "The septal fascicle", "The right bundle"], "Making it the most clinically relevant.")],
        [q("A patient has a narrow QRS (0.09 s), lead I positive, aVF negative, no LVH, and no inferior MI. What conduction problem best explains the axis?", "Left anterior hemiblock", ["Left posterior hemiblock", "Right bundle branch block", "Third-degree block"], "Narrow QRS with LAD suggests LAHB."),
          q("A patient with a new left anterior hemiblock and RBBB asks if this matters. What is the concern?", "Partial ventricular blocks carry a high risk of progressing to complete heart block", ["None; hemiblocks are always benign", "It guarantees atrial fibrillation", "It causes hypokalemia"], "Any partial ventricular block raises the risk of complete heart block.")])
    ]),

    /* ---------- 13 ---------- */
    S("13-pericardial-pe-pacemakers", "13. Pericarditis, pericardial effusion, pulmonary embolus, and pacemakers", "Objective 13. Slides 263–275.", [
      C("Pericarditis",
        "<p>Inflammation of the pericardium: <strong>sharp substernal chest pain worse lying supine or with breathing</strong>.</p>" +
        "<ul><li>T waves <strong>upright and elevated</strong>; ST segments <strong>flat or concave (“saggy”)</strong>.</li></ul>" +
        tbl(["", "Pericarditis", "MI"], [
          ["Distribution", "<strong>Diffuse</strong> changes", "Regional (a coronary territory) with reciprocal changes"],
          ["T-wave inversion", "<strong>After</strong> the ST segment normalizes", "<strong>Before</strong> the ST normalizes"],
          ["Q waves", "<strong>Do not develop</strong>", "May develop"]]),
        ["pericarditis"],
        [q("What ST-segment shape is typical of pericarditis?", "Flat or concave (“saggy”)", ["Convex tombstone with Q waves", "Downsloping with a U wave", "Sawtooth"], "Pericarditis: concave saggy ST."),
          q("How do T-wave inversions in pericarditis differ in timing from MI?", "They occur after the ST segment normalizes", ["They occur before the ST normalizes", "They never occur", "They occur only in aVR"], "In MI, T inversion comes before ST normalization."),
          q("Which finding argues for pericarditis over MI?", "Diffuse ST changes without Q waves", ["Regional ST elevation with reciprocal depression", "New pathologic Q waves", "ST elevation only in II, III, aVF"], "Diffuse changes, no Q waves = pericarditis.")],
        [q("A 30-year-old with a recent viral illness has sharp chest pain worse lying flat and better sitting up. The EKG shows diffuse concave ST elevation in most leads without Q waves. What is the diagnosis?", "Acute pericarditis", ["Inferior STEMI", "Pulmonary embolism", "Hyperkalemia"], "Positional pain plus diffuse saggy ST elevation.")]),
      C("Pericardial effusion",
        "<ul><li>An abnormal amount (or character) of pericardial fluid.</li>" +
        "<li>Fluid <strong>dampens electrical output</strong> → <strong>low QRS voltage</strong>; may also show pericarditis changes.</li>" +
        "<li><strong>Electrical alternans:</strong> the electrical axis (QRS height) <strong>varies beat to beat</strong> as the heart <strong>swings freely</strong> in the fluid-filled sac.</li></ul>",
        ["effusion-low-voltage", "electrical-alternans"],
        [q("What is electrical alternans?", "Beat-to-beat variation in the electrical axis as the heart swings in pericardial fluid", ["Alternating PACs and PVCs", "Alternating 2:1 and 4:1 flutter", "Alternating P-wave shapes from the SA node"], "Electrical alternans signals a large effusion."),
          q("Why does pericardial effusion cause low QRS voltage?", "Fluid dampens the electrical signal", ["The ventricles hypertrophy", "Potassium rises", "The SA node slows"], "Fluid insulates the heart from the electrodes.")],
        [q("A patient with lung cancer has dyspnea and muffled heart sounds. The EKG shows low-voltage QRS complexes whose height alternates every other beat. What is the likely cause?", "Large pericardial effusion", ["Left ventricular hypertrophy", "Hyperkalemia", "Atrial flutter"], "Low voltage plus electrical alternans.")]),
      C("Pulmonary embolus on the EKG",
        "<p>Acute blockage of a pulmonary artery strains the RA and RV (<strong>acute cor pulmonale</strong>), usually from a pelvic or leg <strong>DVT</strong>; often with dyspnea and pleuritic chest pain.</p>" +
        tbl(["EKG finding", "Detail"], [
          ["Tall, peaked P waves", "In II, III, aVF; sharply peaked biphasic P in V1–V2"],
          ["<strong>S1Q3T3</strong> (classic, <strong>not common</strong>)", "Large <strong>S in lead I</strong>, deep <strong>Q in III</strong>, inverted <strong>T in III</strong>"],
          ["<strong>Right axis deviation</strong>", ""],
          ["<strong>Right bundle branch block</strong>", ""]]) +
        mn("<strong>S1Q3T3</strong>: “<strong>S</strong>-wave in <strong>1</strong>, <strong>Q</strong> and <strong>T</strong> in <strong>3</strong>.”"),
        ["pe-ekg", "s1q3t3"],
        [q("What is the classic EKG pattern of pulmonary embolism?", "S1Q3T3", ["Delta wave", "Electrical alternans", "Sine wave"], "Large S in I, Q in III, inverted T in III."),
          q("How common is S1Q3T3 in PE?", "Classic but not common", ["Present in every PE", "Never seen in PE", "Only in chronic PE"], "S1Q3T3 is classic but uncommon."),
          q("Which conduction abnormality may appear with an acute PE?", "Right bundle branch block", ["Left bundle branch block", "Wenckebach", "Left anterior hemiblock"], "Acute right heart strain can cause RBBB."),
          q("Which axis change may appear with an acute PE?", "Right axis deviation", ["Left axis deviation", "Extreme left axis always", "No change ever"], "RV strain shifts the axis right.")],
        [q("Two weeks after hip surgery, a patient has sudden dyspnea and pleuritic pain. EKG: sinus tachycardia, a large S wave in lead I, a Q wave and inverted T in lead III, and new RBBB. What is the likely diagnosis?", "Pulmonary embolism", ["Acute pericarditis", "Inferior STEMI", "Hypocalcemia"], "S1Q3T3 plus RBBB after surgery suggests PE.")]),
      C("Pacemakers on the EKG",
        "<p>Used in <strong>3rd-degree AV block</strong>, <strong>symptomatic 2nd-degree block</strong>, <strong>symptomatic bradycardia</strong>, and to <strong>overdrive</strong> symptomatic tachycardia.</p>" +
        tbl(["Pacing", "EKG"], [
          ["<strong>Ventricular</strong>", "Upright <strong>pacer spike</strong> followed by a <strong>wide, bizarre QRS</strong>"],
          ["<strong>Atrial</strong>", "Upright <strong>pacer spike</strong> followed by a <strong>normal P wave</strong> and normal QRS"]]),
        ["pacemaker-indications", "paced-rhythms"],
        [q("What does a ventricular paced beat look like?", "A pacer spike followed by a wide, bizarre QRS", ["A pacer spike followed by a normal P and narrow QRS", "A sawtooth baseline", "A delta wave"], "Ventricular pacing bypasses the normal pathway."),
          q("What does an atrial paced beat look like?", "A pacer spike followed by a normal P wave and QRS", ["A pacer spike then a wide QRS with no P", "No spike at all", "An inverted P after the QRS"], "Atrial pacing produces a P wave after the spike."),
          q("Which is an indication for a pacemaker listed in this lecture?", "Third-degree AV block", ["Sinus arrhythmia", "Single PACs", "First-degree AV block alone"], "3rd-degree, symptomatic 2nd-degree, symptomatic brady, overdrive pacing.")],
        [q("An elderly patient's EKG shows a sharp vertical spike before every wide, bizarre QRS complex, with no visible P waves. What does this show?", "A ventricular paced rhythm", ["Ventricular tachycardia", "Atrial flutter", "Left bundle branch block alone"], "Spike then wide QRS = ventricular pacing."),
          q("A patient's strip shows a sharp spike before every P wave, followed by a normal PR and narrow QRS. What does this show?", "An atrial paced rhythm", ["A ventricular paced rhythm", "Junctional rhythm", "Wandering atrial pacemaker"], "Spike then P wave = atrial pacing.")])
    ]),

    /* ---------- 14 ---------- */
    S("14-myocardial-damage-localization", "14. Myocardial damage on the EKG and localizing the damaged area", "Objective 14. Slides 232–262.", [
      C("Coronary circulation",
        tbl(["Artery", "Supplies"], [
          ["<strong>Right coronary (RCA)</strong>", "RA, RV, <strong>inferior and posterior LV</strong>, posterior 1/3 of septum; <strong>SA node (50–60%)</strong>, <strong>AV node (80–95%)</strong>, posterior-inferior fascicle"],
          ["<strong>Left anterior descending (LAD)</strong>", "<strong>Anterior LV</strong>, part of lateral LV, <strong>anterior 2/3 of septum</strong>; most of the <strong>right bundle</strong> and the left anterior and posterior fascicles"],
          ["<strong>Circumflex</strong>", "LA, <strong>anterolateral, posterolateral, posterior LV</strong>; SA node (40–50%), AV node (10–15%)"]]) +
        hy("RCA supplies the <strong>AV node</strong> in most people: that is why <strong>inferior MI</strong> causes <strong>AV-nodal blocks</strong> (1st degree, Wenckebach). LAD supplies the <strong>bundle branches</strong>: <strong>anterior MI</strong> causes <strong>type II block</strong> and BBB."),
        ["rca", "lad", "circumflex"],
        [q("Which artery supplies the AV node in most people?", "Right coronary artery", ["Left anterior descending", "Circumflex", "Left main only"], "RCA supplies the AV node in 80–95%."),
          q("The LAD supplies:", "The anterior LV and anterior two-thirds of the septum", ["The inferior LV and posterior septum", "The right atrium only", "The SA node in most people"], "LAD: anterior LV, anterior septum, much of the conduction branches."),
          q("The inferior wall of the LV is usually supplied by the:", "Right coronary artery", ["LAD", "Circumflex only", "Left main"], "RCA supplies the inferior and posterior LV."),
          q("Most of the right bundle branch is supplied by the:", "LAD", ["RCA", "Circumflex", "Posterior descending only"], "LAD supplies most of the right bundle.")],
        [q("A patient with an inferior STEMI develops Wenckebach. Which artery's occlusion best explains both?", "Right coronary artery, which supplies the inferior wall and AV node", ["LAD", "Circumflex", "Left main"], "RCA: inferior wall + AV node."),
          q("A patient with an anterior STEMI develops a new RBBB and second-degree type II block. Which artery is occluded?", "LAD", ["RCA", "Circumflex", "Posterior descending"], "LAD supplies the anterior wall and bundle branches.")]),
      C("Ischemia, injury, infarction",
        tbl(["Stage", "What happens", "EKG"], [
          ["<strong>Ischemia</strong>", "O2/nutrient deprivation (more need or less supply)", "<strong>T-wave</strong> changes: peaking or <strong>symmetric inversion</strong>; <strong>ST depression</strong>"],
          ["<strong>Injury</strong>", "Ischemia progresses to cell injury", "<strong>ST elevation</strong>"],
          ["<strong>Infarction</strong>", "Cell death → fibrous scar", "<strong>Pathologic Q waves</strong>"]]) +
        "<p>Also: a <strong>new BBB</strong> compared with an old EKG may indicate damage.</p>" +
        mn("“<strong>T</strong>hen <strong>S</strong>T, then <strong>Q</strong>”: Ischemia (T) → Injury (ST) → Infarction (Q)."),
        ["damage-stages", "new-bbb"],
        [q("Which EKG change represents myocardial infarction (cell death)?", "Pathologic Q waves", ["Peaked T waves", "U waves", "Short PR"], "Q waves indicate irreversible damage."),
          q("ST elevation corresponds to which stage of myocardial damage?", "Injury", ["Ischemia only", "Healed infarction", "Normal"], "Ischemia → injury (ST) → infarction (Q)."),
          q("Compared with an old EKG, which new finding may indicate myocardial damage?", "A new bundle branch block", ["A normal PR", "Sinus arrhythmia", "A physiologic Q in V6"], "A new BBB can signal infarction.")],
        [q("Over several days after a large MI, a patient's EKG evolves from ST elevation to deep wide Q waves in the same leads. What do the Q waves represent?", "Infarction with irreversible myocardial death", ["Resolved ischemia", "Normal septal depolarization", "Pericarditis"], "Q waves = infarcted tissue.")]),
      C("T-wave inversion and ST depression",
        "<ul><li><strong>Symmetric inverted T waves</strong> = ischemia through the <strong>full thickness</strong> of the myocardium; they <strong>revert</strong> if ischemia resolves, but may stay inverted <strong>months to years</strong> after an MI.</li>" +
        "<li>T inversion has other causes: <strong>pericarditis, hypertrophy, BBB, shock, electrolytes, subarachnoid hemorrhage</strong>. It indicates ischemia only if it fits the clinical picture and is <strong>not diagnostic of infarction</strong>.</li>" +
        "<li><strong>ST depression &gt; 1 mm</strong> below baseline, <strong>0.04 s after the J point</strong>, in <strong>2+ leads facing the same area</strong> = characteristic of <strong>ischemia</strong>.</li>" +
        "<li><strong>Subendocardial infarction</strong> shows a <strong>flat</strong> ST depression.</li></ul>",
        ["t-inversion", "st-depression"],
        [q("Symmetric inverted T waves characteristically indicate:", "Ischemia through the full thickness of the myocardium", ["Normal repolarization", "Hyperkalemia", "Atrial enlargement"], "Symmetric T inversion = transmural ischemia."),
          q("What degree of ST depression is characteristic of ischemia?", "More than 1 mm at 0.04 s after the J point in 2+ related leads", ["Any depression in aVR only", "0.25 mm in one lead", "More than 5 mm in V1 only"], "> 1 mm in two or more leads facing the same area."),
          q("Is T-wave inversion alone diagnostic of infarction?", "No; it has many causes and must fit the clinical picture", ["Yes, always", "Only in aVR", "Only in children"], "Pericarditis, LVH, BBB, shock, electrolytes, SAH also invert T waves."),
          q("A subendocardial infarction shows what ST change?", "Flat ST depression", ["Tombstone ST elevation", "Saggy concave ST elevation", "No ST change"], "Subendocardial infarction: flat ST depression.")],
        [q("A patient with exertional chest pressure has 2 mm flat ST depression in V4–V6 during pain that resolves at rest. What does this indicate?", "Myocardial ischemia", ["Acute pericarditis", "Hyperkalemia", "Normal variant"], "> 1 mm ST depression in related leads = ischemia."),
          q("A patient with a sudden severe headache and subarachnoid hemorrhage has deep inverted T waves. Does this prove a myocardial infarction?", "No; T inversion has non-cardiac causes such as subarachnoid hemorrhage", ["Yes; T inversion always means MI", "Yes; it proves an inferior STEMI", "No; T waves cannot invert in SAH"], "SAH is a listed cause of T-wave inversion.")]),
      C("Localizing the infarct and reciprocal changes",
        tbl(["Infarct", "Leads with changes", "Reciprocal changes"], [
          ["<strong>Septal / anteroseptal</strong>", "<strong>V1–V3</strong>", "Perhaps V6 and posterior leads"],
          ["<strong>Anterior</strong>", "<strong>V2–V4</strong>; poor R-wave progression", "Posterior leads (V7–V9)"],
          ["<strong>Lateral</strong>", "<strong>I, aVL, V5, V6</strong>", "<strong>Inferior</strong> (II, III, aVF)"],
          ["<strong>Inferior</strong>", "<strong>II, III, aVF</strong>", "<strong>Lateral</strong> (I, aVL, V5, V6)"],
          ["<strong>Posterior</strong>", "<strong>Reciprocal changes in V1–V3</strong>: ST depression, large R waves, upright T waves; ST elevation in <strong>V7–V9</strong> on a 15-lead", "—"]]) +
        "<p><strong>Reciprocal changes</strong> are mirror-image changes (e.g., ST depression) in leads facing the opposite wall.</p>" +
        hy("Posterior MI hides on a 12-lead: look for <strong>ST depression with tall R waves in V1–V3</strong>, then confirm with <strong>V7–V9</strong>."),
        ["localize-septal-anterior", "localize-lateral-inferior", "localize-posterior", "reciprocal"],
        [q("Which leads show an inferior STEMI?", "II, III, aVF", ["I, aVL, V5, V6", "V1–V3", "V7–V9 only"], "Inferior: II, III, aVF."),
          q("Reciprocal changes for an inferior STEMI appear in:", "The lateral leads (I, aVL, V5, V6)", ["V1–V3 only", "aVR only", "V7–V9"], "Inferior and lateral are reciprocal to each other."),
          q("How does a posterior MI appear on a standard 12-lead?", "ST depression, large R waves, and upright T waves in V1–V3", ["ST elevation in II, III, aVF", "Delta waves in V5–V6", "Low voltage with electrical alternans"], "Posterior MI shows reciprocal changes in V1–V3."),
          q("Which finding accompanies an anterior STEMI?", "Poor R-wave progression in the precordial leads", ["Sawtooth waves", "S1Q3T3", "U waves in V2–V4"], "Anterior MI: changes in V2–V4 with poor R progression."),
          q("A septal (anteroseptal) STEMI shows changes in which leads?", "V1–V3", ["V5–V6", "II, III, aVF", "I and aVL only"], "Septoanterior: V1–V3.")],
        [q("A 58-year-old has crushing chest pain with ST elevation in I, aVL, V5, and V6 and ST depression in II, III, and aVF. Where is the infarct?", "Lateral wall", ["Inferior wall", "Septum", "Posterior wall"], "Lateral STE with inferior reciprocal depression."),
          q("A patient with chest pain has 3 mm ST depression with tall R waves and upright T waves in V1–V3. What should be done next?", "Obtain a 15-lead EKG to look for ST elevation in V7–V9 (posterior MI)", ["Diagnose anterior ischemia only and discharge", "Obtain a right-sided EKG for RV MI only", "Treat for pericarditis"], "This is the reciprocal picture of a posterior MI."),
          q("A patient has ST elevation in II, III, and aVF with reciprocal ST depression in I and aVL. Which wall is infarcting?", "Inferior wall", ["Lateral wall", "Anterior wall", "Septum"], "Inferior leads elevated, lateral reciprocal.")])
    ]),

    /* ---------- 15 ---------- */
    S("15-diagnostic-ste", "15. Diagnostic ST elevation on a 12-lead", "Objective 15. Slides 236, 244–246.", [
      C("Measuring and diagnosing ST elevation",
        "<ul><li>Compare the <strong>ST segment</strong> with the <strong>PR segment</strong> (baseline) at a point <strong>0.04 s after the J point</strong>.</li>" +
        "<li>ST elevation is the <strong>earliest reliable sign</strong> that an acute MI has occurred, but <strong>not all MIs are STEMIs</strong>.</li></ul>" +
        tbl(["Leads", "Significant ST elevation"], [
          ["<strong>Limb leads</strong>", "<strong>&gt; 1 mm</strong> at J + 0.04 s"],
          ["<strong>Precordial leads</strong>", "<strong>&gt; 2 mm</strong> at J + 0.04 s"],
          ["Both", "In <strong>two or more leads facing the same anatomic area</strong> (contiguous)"]]) +
        hy("STEMI = ST up <strong>&gt; 1 mm limb</strong> or <strong>&gt; 2 mm precordial</strong>, measured <strong>0.04 s after the J point</strong>, in <strong>2+ contiguous leads</strong>."),
        ["ste-measurement", "ste-criteria"],
        [q("Where is the ST segment measured to judge elevation?", "0.04 seconds after the J point, compared with the PR segment", ["At the peak of the T wave", "At the start of the P wave", "At the R-wave peak"], "Use J + 0.04 s versus the PR baseline."),
          q("How much ST elevation in the limb leads is significant?", "More than 1 mm", ["More than 0.25 mm", "More than 5 mm", "Any amount in one lead"], "Limb leads: > 1 mm in 2+ contiguous leads."),
          q("How much ST elevation in the precordial leads is significant?", "More than 2 mm", ["More than 1 mm", "More than 0.5 mm", "More than 10 mm"], "Precordial leads: > 2 mm."),
          q("ST elevation must be seen in how many leads facing the same area?", "Two or more", ["One", "All twelve", "Only aVR"], "Contiguous leads facing the same area.")],
        [q("A patient with chest pain has 1.5 mm ST elevation in leads II, III, and aVF measured 0.04 s after the J point. Does this meet diagnostic criteria?", "Yes; > 1 mm in two or more contiguous limb leads", ["No; limb leads need > 2 mm", "No; only one lead counts", "No; ST is measured at the T peak"], "Inferior limb leads need > 1 mm."),
          q("A patient has 1.5 mm ST elevation in V2 and V3 only. Does this meet the lecture's STEMI criteria?", "No; precordial leads need more than 2 mm", ["Yes; any elevation > 1 mm counts", "Yes; one precordial lead is enough", "No; V2 and V3 are not contiguous"], "Precordial threshold is > 2 mm.")]),
      C("ST elevation that is not a STEMI",
        "<p>ST elevation may also occur with <strong>ventricular hypertrophy</strong>, abnormal <strong>conduction</strong> (BBB), <strong>PE</strong>, <strong>pneumothorax</strong>, <strong>hyperkalemia</strong>, <strong>intracranial hemorrhage</strong>, or <strong>pericarditis</strong>, but with a <strong>different morphology</strong>.</p>" +
        "<p>Pericarditis: <strong>diffuse</strong>, concave “saggy” ST elevation, no reciprocal territory pattern, no Q waves (Objective 13).</p>",
        ["ste-mimics"],
        [q("Which is a non-MI cause of ST elevation listed in lecture?", "Pericarditis", ["Sinus arrhythmia", "First-degree AV block", "Wandering atrial pacemaker"], "Also hypertrophy, BBB, PE, pneumothorax, hyperkalemia, ICH."),
          q("How does non-MI ST elevation usually differ from STEMI?", "It has a different morphology", ["It is always larger", "It only appears in aVR", "It is always in one lead"], "Mimics differ in shape and distribution.")],
        [q("A young man has diffuse concave ST elevation in nearly every lead with no reciprocal depression and pleuritic, positional chest pain. What is the most likely cause?", "Pericarditis rather than STEMI", ["Inferior STEMI", "Posterior MI", "Hypokalemia"], "Diffuse saggy ST elevation is a pericarditis pattern.")])
    ]),

    /* ---------- 16 ---------- */
    S("16-electrolytes", "16. EKG changes from potassium and calcium disorders", "Objective 16. Slides 276–283.", [
      C("Hyperkalemia",
        "<p>Progressive changes as potassium rises:</p>" +
        "<ol><li><strong>Tall, peaked T waves</strong> in all leads</li><li><strong>Flattening of the P waves</strong></li><li><strong>Prolonged PR</strong> (1st-degree AV block)</li><li><strong>Progressive QRS widening</strong> → <strong>sine-wave pattern</strong></li></ol>" +
        hy("<strong>Peaked T → flat P → long PR → wide QRS → sine wave.</strong> A sine wave is pre-arrest."),
        ["hyperkalemia"],
        [q("What is the earliest EKG sign of hyperkalemia?", "Tall, peaked T waves", ["U waves", "Prolonged QT", "ST depression"], "Peaked T waves come first."),
          q("Severe hyperkalemia progresses to which pattern?", "A sine-wave pattern", ["Sawtooth flutter waves", "Electrical alternans", "S1Q3T3"], "Progressive QRS widening merges into a sine wave."),
          q("What happens to P waves as potassium rises?", "They flatten", ["They become sawtooth", "They become taller", "They become inverted after the QRS"], "P waves flatten in hyperkalemia.")],
        [q("A dialysis patient who missed two sessions has weakness. The EKG shows tall peaked T waves, flat P waves, and a widening QRS. What is the diagnosis?", "Hyperkalemia", ["Hypokalemia", "Hypercalcemia", "Acute pericarditis"], "Classic hyperkalemia progression."),
          q("A patient with potassium 8.4 has a wide, undulating rhythm with no distinct P, QRS, or T. What is this pattern?", "Sine-wave pattern of severe hyperkalemia", ["Ventricular fibrillation from hypocalcemia", "Atrial flutter", "Torsades from hypercalcemia"], "Sine wave = severe hyperkalemia.")]),
      C("Hypokalemia",
        "<ul><li><strong>ST depression</strong></li><li><strong>Flattened T waves</strong></li><li><strong>U waves</strong> (positive deflection between T and P)</li><li><strong>Prolonged QT</strong></li></ul>" +
        mn("Low K: everything <strong>sinks</strong> (ST down, T flat) and a <strong>U</strong> pops up after it."),
        ["hypokalemia"],
        [q("Which EKG finding is characteristic of hypokalemia?", "U waves", ["Peaked T waves", "Sine waves", "Short QT"], "Hypokalemia: ST depression, flat T, U waves, long QT."),
          q("What happens to the T wave in hypokalemia?", "It flattens", ["It peaks", "It becomes sawtooth", "It disappears into a sine wave"], "Flattened T waves."),
          q("What happens to the QT interval in hypokalemia?", "It prolongs", ["It shortens", "It is unchanged", "It becomes unmeasurable from peaking"], "Hypokalemia prolongs the QT.")],
        [q("A patient with severe vomiting has ST depression, flat T waves, and a prominent wave after each T. Which electrolyte is most likely abnormal?", "Low potassium", ["High potassium", "High calcium", "High sodium"], "Hypokalemia pattern with U waves.")]),
      C("Hypercalcemia and hypocalcemia",
        "<p>Calcium mainly affects the <strong>QT interval</strong>.</p>" +
        tbl(["", "Hypercalcemia", "Hypocalcemia"], [
          ["QT", "<strong>Shortened</strong>", "<strong>Prolonged</strong>"],
          ["Risks", "Predisposes to arrhythmias", "<strong>Decreased contractility</strong>; predisposes to <strong>torsades de pointes</strong>"]]) +
        mn("<strong>High Ca = short QT; low Ca = long QT</strong> (“low and long”)."),
        ["hypercalcemia", "hypocalcemia"],
        [q("What does hypercalcemia do to the QT interval?", "Shortens it", ["Prolongs it", "Has no effect", "Makes it unmeasurable"], "High calcium = short QT."),
          q("What does hypocalcemia do to the QT interval?", "Prolongs it", ["Shortens it", "Has no effect", "Creates U waves only"], "Low calcium = long QT."),
          q("Hypocalcemia predisposes to which arrhythmia?", "Torsades de pointes", ["Atrial flutter", "Wandering atrial pacemaker", "Sinus arrhythmia"], "Long QT from hypocalcemia → torsades.")],
        [q("After a total thyroidectomy, a patient has perioral tingling and carpopedal spasm. The EKG shows a long QT. Which electrolyte disorder fits, and what arrhythmia is she at risk for?", "Hypocalcemia; torsades de pointes", ["Hypercalcemia; atrial flutter", "Hyperkalemia; sine wave", "Hypokalemia; sinus arrhythmia"], "Post-thyroidectomy hypocalcemia prolongs QT."),
          q("A patient with metastatic cancer and confusion has a short QT on EKG. What is the likely cause?", "Hypercalcemia", ["Hypocalcemia", "Hypokalemia", "Hypomagnesemia"], "Hypercalcemia shortens the QT.")])
    ])
  ];
})();
