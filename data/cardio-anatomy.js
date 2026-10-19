/* Palmer, Cardiovascular System Anatomy. Eleven supplied objectives in order (Cardiology Anatomy Objectives).
   Picture-only slides (surface lines, arch/thoracic aorta branches, abdominal wall chain, abdominal arteries,
   lower-limb arteries and veins, arm arteries and superficial veins) were read from the rendered deck.
   Labeled clarifications: xiphisternal joint name (slide 8 calls the junction the infrasternal/subcostal angle);
   tricuspid auscultation at the left lower sternal border (slides 36 and 47 word it differently). */
(function () {
"use strict";
function q(p, a, w, e) { return { prompt: p, choices: [a].concat(w), correct: 0, explanation: e }; }
function u(title, html, coverage, test, apply) { return { title: title, html: html, coverage: coverage, test: test, apply: apply }; }
function s(id, title, description, units) {
  var r = { id: id, title: title, description: description, cards: [], test: [], apply: [] };
  units.forEach(function (x, i) {
    r.cards.push({ title: x.title, html: x.html, coverage: x.coverage });
    ["test", "apply"].forEach(function (m) { x[m].forEach(function (z) { z.card = i; r[m].push(z); }); });
  });
  return r;
}
function hy(t) { return "<div class='box-hy'><span class='lbl'>High yield</span>" + t + "</div>"; }
function mn(t) { return "<div class='box-mnemonic'><span class='lbl'>Mnemonic</span>" + t + "</div>"; }
function clar(t) { return "<p><em>Clarification (standard anatomy reference):</em> " + t + "</p>"; }
function tbl(head, rows) {
  return "<table class='learn-table'><tr>" + head.map(function (h) { return "<th>" + h + "</th>"; }).join("") + "</tr>" +
    rows.map(function (r) { return "<tr>" + r.map(function (c) { return "<td>" + c + "</td>"; }).join("") + "</tr>"; }).join("") + "</table>";
}

window.CARDIO_ANATOMY_OBJECTIVES = [

/* ---------------- 1 ---------------- */
s("01-thoracic-cage", "1. The thoracic cage and the parts of the sternum", "Objective 1. Slides 2–4.", [
  u("What forms the thoracic cage",
    "<p>The thoracic cage is formed by <strong>three components</strong>: the <strong>ribs and costal cartilages</strong>, the <strong>sternum</strong>, and the <strong>thoracic vertebrae</strong>. The thoracic cavity is the space enclosed between them.</p><ul><li><strong>Thoracic vertebrae</strong> articulate with the <strong>heads and tubercles</strong> of the ribs.</li><li><strong>Costal arteries, veins, and nerves</strong> run along the <strong>inferior internal aspect of each rib</strong>.</li></ul>" +
    hy("Neurovascular bundle = <strong>under</strong> each rib. A needle passed just above a rib avoids it."),
    ["cage-components", "vertebral-articulation", "costal-neurovascular"],
    [q("Which three components form the thoracic cage?", "Ribs with costal cartilages, sternum, and thoracic vertebrae", ["Ribs, clavicles, and scapulae", "Sternum, clavicles, and cervical vertebrae", "Ribs, diaphragm, and lumbar vertebrae"], "The cage = ribs and costal cartilages + sternum + thoracic vertebrae."),
     q("Which parts of a rib articulate with the thoracic vertebrae?", "The head and the tubercle", ["The costal cartilage and the shaft", "The angle and the neck only", "The sternal end and the costal groove"], "Thoracic vertebrae articulate with the heads and tubercles of the ribs."),
     q("Where do the costal (intercostal) vessels and nerve lie relative to each rib?", "Along the inferior internal aspect of the rib", ["Along the superior external border of the rib", "Midway between two ribs in the intercostal space", "On the anterior surface of the costal cartilage"], "The neurovascular bundle runs along the inferior internal aspect of each rib.")],
    [q("Before a needle is placed into an intercostal space for a chest procedure, the instructor says to 'walk over the top of the rib below.' Which anatomic fact explains this?", "Costal vessels and nerve run along the inferior internal aspect of each rib", ["Costal vessels run along the superior border of each rib", "The intercostal space contains no vessels", "The costal cartilage protects the vessels anteriorly"], "Because the vessels and nerve hug the underside of each rib, staying just above the lower rib avoids them.")]),
  u("Ribs: true, false, and floating",
    tbl(["Type", "Ribs", "Key point"], [["True", "1–7", "7 pairs"], ["False", "8–10", "3 pairs"], ["Floating", "11–12", "2 pairs"]]) +
    "<p>There are <strong>12 pairs</strong> of ribs. Costal cartilages prolong the ribs and give the thoracic wall its elasticity and flexible attachments.</p>" +
    mn("<strong>7-3-2</strong>: seven true, three false, two floating = 12 pairs."),
    ["ribs-true", "ribs-false", "ribs-floating"],
    [q("Which ribs are the true ribs?", "Ribs 1–7", ["Ribs 1–10", "Ribs 8–10", "Ribs 1–5"], "True ribs are 1–7."),
     q("Which ribs are classified as false ribs?", "Ribs 8–10", ["Ribs 6–9", "Ribs 11–12", "Ribs 1–7"], "False ribs are 8–10."),
     q("Which ribs are the floating ribs?", "Ribs 11 and 12", ["Ribs 9 and 10", "Ribs 1 and 2", "Ribs 8 through 12"], "Floating ribs are 11 and 12; there are 12 pairs in total.")],
    [q("While palpating a patient's lower back laterally, a student feels a short rib ending freely in the flank musculature without reaching the costal margin. Which rib is it most likely?", "Rib 12", ["Rib 7", "Rib 9", "Rib 2"], "Ribs 11 and 12 are floating ribs; 7 is a true rib and 9 is a false rib.")]),
  u("The sternum: overview and three parts",
    "<p>The sternum is a <strong>flat, elongated bone</strong> forming the <strong>middle of the anterior thoracic cage</strong>. It <strong>protects the mediastinal viscera and most of the heart</strong>.</p><p>Three parts, superior to inferior: <strong>manubrium → body → xiphoid process</strong>.</p>" +
    mn("<strong>M-B-X</strong> top to bottom: Manubrium, Body, Xiphoid."),
    ["sternum-description", "sternum-parts"],
    [q("What are the three parts of the sternum from superior to inferior?", "Manubrium, body, xiphoid process", ["Body, manubrium, xiphoid process", "Manubrium, xiphoid process, body", "Jugular notch, sternal angle, body"], "Manubrium on top, body in the middle, xiphoid at the bottom."),
     q("Which structures does the sternum chiefly protect?", "The mediastinal viscera and most of the heart", ["The lungs' apices", "The liver and spleen", "The thoracic duct and spinal cord"], "The sternum protects the mediastinal viscera and most of the heart.")],
    [q("A patient sustained blunt trauma to the anterior midline chest from a steering wheel. Which bone forming the middle of the anterior thoracic cage, protecting most of the heart, absorbed the blow?", "Sternum", ["Clavicle", "First rib", "Scapula"], "The sternum is the flat bone in the middle of the anterior thoracic cage that protects the mediastinal viscera and most of the heart.")])
]),

/* ---------------- 2 ---------------- */
s("02-sternum-landmarks", "2. Landmarks of the manubrium, body, and xiphoid process", "Objective 2. Slides 5–8 and 17.", [
  u("Manubrium and jugular notch",
    "<ul><li><strong>Widest and thickest</strong> part of the sternum.</li><li>Its concave superior center is the <strong>jugular (suprasternal) notch</strong> — easily palpated.</li><li>Articulates with the <strong>clavicles</strong> superolaterally and the <strong>1st rib</strong> laterally.</li></ul>",
    ["manubrium-features", "jugular-notch", "manubrium-articulations"],
    [q("Which part of the sternum is the widest and thickest?", "Manubrium", ["Body", "Xiphoid process", "Sternal angle"], "The manubrium is the widest and thickest part."),
     q("What is the easily palpated concave center of the superior manubrium called?", "Jugular (suprasternal) notch", ["Sternal angle", "Xiphisternal joint", "Costal notch"], "The jugular, or suprasternal, notch."),
     q("Which bones articulate with the manubrium?", "Both clavicles and the 1st ribs", ["The 2nd and 3rd ribs only", "The 7th ribs", "The clavicles and the scapulae"], "Clavicles superolaterally; 1st ribs laterally.")],
    [q("While examining the neck, a clinician places a finger in the palpable midline dip directly above the sternum, between the clavicular heads. Which landmark is this?", "Jugular (suprasternal) notch", ["Sternal angle", "Xiphoid process", "Infrasternal angle"], "The concave superior center of the manubrium is the jugular (suprasternal) notch.")]),
  u("Sternal angle (manubriosternal joint)",
    "<p>The junction of the manubrium and body is the <strong>sternal angle</strong> (manubriosternal joint).</p><ul><li>The <strong>2nd rib</strong> articulates immediately lateral to it — the starting point for counting ribs and intercostal spaces.</li><li>It lies at the level of the <strong>T4–T5 intervertebral disc</strong> (transverse thoracic plane), the boundary between the superior and inferior mediastinum.</li></ul>" +
    hy("Sternal angle → 2nd rib → count down to find the 5th ICS for the apex and auscultation points."),
    ["sternal-angle", "sternal-angle-rib2", "sternal-angle-t4-t5"],
    [q("What is the junction between the manubrium and the body of the sternum called?", "Sternal angle (manubriosternal joint)", ["Jugular notch", "Xiphisternal joint", "Costal margin"], "The manubriosternal joint forms the sternal angle."),
     q("Which rib articulates immediately lateral to the sternal angle?", "2nd rib", ["1st rib", "3rd rib", "7th rib"], "The 2nd rib is palpable just lateral to the sternal angle."),
     q("The sternal angle lies at which vertebral level?", "T4–T5 intervertebral disc", ["T2", "T9", "T10"], "The transverse thoracic plane passes through the sternal angle and the T4–T5 disc.")],
    [q("To locate the left 5th intercostal space, a student first finds the palpable ridge on the upper sternum and the rib beside it. Which rib does the student find at that ridge to begin counting?", "2nd rib", ["1st rib", "4th rib", "5th rib"], "The sternal angle marks the 2nd rib; the 2nd ICS lies just below it, so counting begins there.")]),
  u("Body of the sternum",
    "<ul><li><strong>Longer, narrower, and thinner</strong> than the manubrium.</li><li>Lies at about <strong>T5–T9</strong>.</li><li><strong>Costal cartilages</strong> attach along it; they prolong the ribs and add elasticity and flexible attachment to the thoracic wall.</li></ul>",
    ["body-features", "body-t5-t9", "costal-cartilages"],
    [q("At approximately which vertebral levels does the body of the sternum lie?", "T5–T9", ["T1–T4", "T10–T12", "C7–T2"], "The body lies at T5–T9."),
     q("How does the sternal body compare with the manubrium?", "Longer, narrower, and thinner", ["Shorter, wider, and thicker", "Same width but longer", "Shorter and thinner"], "The body is longer, narrower and thinner."),
     q("What do costal cartilages contribute to the thoracic wall?", "Elasticity and flexible attachment for the rib ends", ["Rigid fixation of the ribs to the vertebrae", "Attachment for the diaphragm's central tendon", "A channel for the costal vessels"], "Costal cartilages prolong the ribs and add elasticity.")],
    [q("During CPR training, an instructor notes that the chest wall can be compressed because the ribs join the middle segment of the sternum by flexible tissue. Which structures provide that flexibility?", "Costal cartilages", ["Intercostal muscles alone", "The xiphoid process", "The manubriosternal joint"], "Costal cartilages prolong the ribs and contribute elasticity to the thoracic wall.")]),
  u("Xiphoid process",
    "<ul><li>The junction of body and xiphoid marks the <strong>inferior limit of the heart</strong> and the <strong>superior limit of the liver and diaphragm</strong>.</li><li>The <strong>7th ribs</strong> articulate at this junction.</li><li>The <strong>inferior tip of the xiphoid lies at T10</strong>.</li></ul>" +
    clar("the slide calls this junction the infrasternal/subcostal angle; the joint itself is the <strong>xiphisternal joint</strong> (labeled on slide 17), which sits where the costal margins meet to form the infrasternal angle."),
    ["xiphoid-junction", "xiphoid-heart-liver", "xiphoid-rib7", "xiphoid-t10"],
    [q("The body–xiphoid junction marks the inferior limit of which organ?", "Heart", ["Lung", "Stomach", "Thymus"], "It marks the inferior limit of the heart and the superior limit of the liver and diaphragm."),
     q("Which ribs articulate at the junction of the sternal body and xiphoid?", "7th ribs", ["2nd ribs", "5th ribs", "10th ribs"], "The 7th ribs articulate here."),
     q("The inferior tip of the xiphoid process is at which vertebral level?", "T10", ["T4", "T7", "L1"], "The xiphoid tip lies at T10.")],
    [q("A clinician palpates the junction of the sternal body and xiphoid in the epigastrium. Which pair of structures has its superior limit at this level?", "Liver and diaphragm", ["Heart and great vessels", "Thymus and trachea", "Spleen and kidneys"], "The junction marks the inferior limit of the heart and the superior limit of the liver and diaphragm.")])
]),

/* ---------------- 3 ---------------- */
s("03-thorax-surface-lines", "3. Surface landmarks and lines of the thorax", "Objective 3. Slides 5, 9, 17, 20, 24.", [
  u("Anterior lines",
    "<ul><li><strong>Anterior median (midsternal) line</strong> — vertical through the middle of the sternum. About <strong>2/3 of the heart lies left</strong> of it and 1/3 right.</li><li><strong>Midclavicular lines (MCL)</strong> — vertical through the midpoint of each clavicle. The <strong>apex</strong> is in the left 5th ICS just medial to the MCL.</li></ul><p>Palpable anterior landmarks used with these lines: <strong>jugular notch</strong> and <strong>sternal angle</strong>.</p>",
    ["anterior-median-line", "midclavicular-line", "anterior-landmarks"],
    [q("Which vertical surface line passes through the middle of the sternum?", "Anterior median (midsternal) line", ["Midclavicular line", "Anterior axillary line", "Scapular line"], "The anterior median line is the midsternal line."),
     q("Which vertical line passes through the midpoint of the clavicle?", "Midclavicular line", ["Anterior axillary line", "Anterior median line", "Midaxillary line"], "Midclavicular = midpoint of the clavicle."),
     q("About how much of the heart lies to the left of the midsternal line?", "Two-thirds", ["One-third", "One-half", "Nearly all"], "2/3 left and 1/3 right of the midsternal line.")],
    [q("A clinician documents the point of maximal impulse in the left 5th intercostal space just medial to a vertical line dropped from the midpoint of the clavicle. Which line is referenced?", "Midclavicular line", ["Anterior axillary line", "Midaxillary line", "Anterior median line"], "The apex is described relative to the midclavicular line.")]),
  u("Lateral (axillary) lines",
    tbl(["Line", "Where"], [["Anterior axillary", "Anterior axillary fold"], ["Midaxillary", "Center of the axilla (axillary fossa)"], ["Posterior axillary", "Posterior axillary fold"]]) +
    mn("<strong>A-M-P</strong> front to back: Anterior, Mid, Posterior axillary."),
    ["anterior-axillary-line", "midaxillary-line", "posterior-axillary-line"],
    [q("Which surface line descends vertically from the center of the axillary fossa?", "Midaxillary line", ["Anterior axillary line", "Posterior axillary line", "Scapular line"], "The midaxillary line runs from the apex of the axilla."),
     q("Which line runs along the front fold of the axilla?", "Anterior axillary line", ["Midclavicular line", "Midaxillary line", "Posterior axillary line"], "The anterior axillary line follows the anterior axillary fold."),
     q("Which lateral line lies most posterior?", "Posterior axillary line", ["Midaxillary line", "Anterior axillary line", "Midclavicular line"], "Order front to back: anterior, mid, posterior axillary.")],
    [q("With the patient's arm raised, a clinician describes a finding on the lateral chest wall directly beneath the deepest point of the armpit. Which line is used?", "Midaxillary line", ["Anterior axillary line", "Posterior axillary line", "Midclavicular line"], "The midaxillary line descends from the center of the axillary fossa.")]),
  u("Posterior lines and landmarks",
    "<ul><li><strong>Posterior median (vertebral) line</strong> — over the spinous processes.</li><li><strong>Scapular lines</strong> — through the inferior angles of the scapulae.</li><li><strong>Spinous process of C7</strong> — prominent palpable landmark at the base of the neck.</li></ul>",
    ["posterior-median-line", "scapular-line", "c7-spinous"],
    [q("Which posterior surface line runs over the vertebral spinous processes?", "Posterior median line", ["Scapular line", "Posterior axillary line", "Midaxillary line"], "The posterior median (vertebral) line."),
     q("Which posterior line passes through the inferior angle of the scapula?", "Scapular line", ["Posterior median line", "Posterior axillary line", "Midclavicular line"], "The scapular line."),
     q("Which palpable posterior landmark is shown at the base of the neck on the surface-line figure?", "Spinous process of C7", ["Sternal angle", "Jugular notch", "Spinous process of T10"], "C7's spinous process is the prominent posterior landmark.")],
    [q("With the patient seated, arms at the sides, a clinician describes crackles heard posteriorly on a vertical line through the lower tip of the shoulder blade. Which line is it?", "Scapular line", ["Posterior median line", "Posterior axillary line", "Midaxillary line"], "The scapular line passes through the inferior angle of the scapula.")])
]),

/* ---------------- 4 ---------------- */
s("04-mediastinum", "4. Components of the superior and inferior mediastinum", "Objective 4. Slides 10–16.", [
  u("Thoracic cavity and mediastinal divisions",
    "<p>The thoracic cavity has <strong>three spaces</strong>: the central <strong>mediastinum</strong> (heart and associated structures) and the <strong>left and right pulmonary cavities</strong>.</p><p>The mediastinum is divided by the <strong>transverse thoracic plane</strong> — from the <strong>sternal angle</strong> to the <strong>T4–T5 disc</strong> — into <strong>superior</strong> and <strong>inferior</strong> mediastinum. The inferior is subdivided into <strong>anterior, middle, and posterior</strong>.</p>",
    ["thoracic-spaces", "transverse-thoracic-plane", "mediastinal-divisions"],
    [q("What divides the superior from the inferior mediastinum?", "The transverse thoracic plane from the sternal angle to the T4–T5 disc", ["The diaphragm", "A plane through the xiphoid and T10", "The superior thoracic aperture"], "The transverse thoracic plane passes through the sternal angle and T4–T5 disc."),
     q("Into which three sections is the inferior mediastinum divided?", "Anterior, middle, and posterior", ["Superior, middle, and inferior", "Right, central, and left", "Visceral, parietal, and fibrous"], "Inferior mediastinum = anterior, middle, posterior."),
     q("What are the three spaces of the thoracic cavity?", "Mediastinum and the left and right pulmonary cavities", ["Pericardial, pleural, and peritoneal cavities", "Superior, middle, and inferior mediastinum", "Anterior, middle, and posterior thorax"], "The mediastinum sits between the two pulmonary cavities.")],
    [q("A CT report describes a mass located above a horizontal plane through the sternal angle, in the central compartment between the lungs. Which compartment is involved?", "Superior mediastinum", ["Middle mediastinum", "Posterior mediastinum", "Right pulmonary cavity"], "Above the transverse thoracic plane is the superior mediastinum.")]),
  u("Superior mediastinum",
    "<p>Extends from the <strong>superior thoracic aperture</strong> down to the <strong>sternal angle / T4–T5</strong>.</p><p>Contents: <strong>great vessels, trachea, esophagus, and thymus</strong>.</p>",
    ["superior-boundaries", "superior-contents"],
    [q("Which set of structures is located in the superior mediastinum?", "Great vessels, trachea, esophagus, and thymus", ["Heart within the pericardium", "Descending aorta, azygos veins, and thoracic duct only", "Fat, lymph nodes, and internal thoracic branches only"], "Superior mediastinum: great vessels, trachea, esophagus, thymus."),
     q("What is the superior boundary of the superior mediastinum?", "The superior thoracic aperture", ["The sternal angle", "The jugular notch only", "The diaphragm"], "It runs from the superior thoracic aperture to the sternal angle.")],
    [q("Chest CT shows a thymic mass behind the manubrium, above the level of the sternal angle. In which compartment does it lie?", "Superior mediastinum", ["Middle mediastinum", "Posterior mediastinum", "Pericardial cavity"], "The thymus is a superior mediastinal structure (only its inferior part may extend into the anterior compartment in children).")]),
  u("Anterior inferior mediastinum",
    "<p>Contains <strong>lymph nodes and vessels, fat and loose connective tissue, branches of the internal thoracic vessels</strong>, and in <strong>children the inferior part of the thymus</strong>.</p>",
    ["anterior-contents"],
    [q("Which compartment contains fat, loose connective tissue, lymph nodes, internal thoracic branches, and in children the inferior thymus?", "Anterior inferior mediastinum", ["Middle mediastinum", "Posterior mediastinum", "Superior mediastinum"], "That list is the anterior division.")],
    [q("A child's imaging shows normal thymic tissue extending below the sternal angle, just behind the sternal body and in front of the pericardium. Which compartment is this?", "Anterior inferior mediastinum", ["Posterior mediastinum", "Middle mediastinum", "Left pulmonary cavity"], "In children the inferior thymus lies in the anterior division.")]),
  u("Middle inferior mediastinum",
    "<p>The <strong>largest</strong> section. Contains the <strong>pericardium, pericardial fluid, heart, and roots of the great vessels</strong> (aorta, SVC, IVC).</p>",
    ["middle-contents", "middle-largest"],
    [q("Which mediastinal compartment contains the heart within its pericardium?", "Middle mediastinum", ["Anterior mediastinum", "Posterior mediastinum", "Superior mediastinum"], "The middle (largest) section holds the heart and pericardium."),
     q("Which is the largest section of the inferior mediastinum?", "Middle", ["Anterior", "Posterior", "Superior"], "The middle section is the largest.")],
    [q("A patient has a pericardial effusion on echocardiogram. In which mediastinal compartment is the fluid collecting?", "Middle mediastinum", ["Anterior mediastinum", "Posterior mediastinum", "Superior mediastinum"], "The pericardium and its fluid are in the middle mediastinum.")]),
  u("Posterior inferior mediastinum",
    "<p>Contains the <strong>thoracic (descending) aorta, thoracic duct and lymphatic trunks, lymph nodes, azygos and hemiazygos veins, esophagus and esophageal nerve plexus</strong>.</p>" +
    hy("Behind the heart: <strong>aorta, esophagus, azygos, thoracic duct</strong>."),
    ["posterior-contents"],
    [q("Which compartment contains the descending aorta, thoracic duct, azygos and hemiazygos veins, and esophagus?", "Posterior mediastinum", ["Middle mediastinum", "Anterior mediastinum", "Superior mediastinum only"], "Those are posterior mediastinal contents.")],
    [q("A patient with a descending thoracic aortic aneurysm has dysphagia because the aneurysm compresses an adjacent tube in the same compartment. Which compartment is this?", "Posterior mediastinum", ["Anterior mediastinum", "Middle mediastinum", "Right pulmonary cavity"], "The descending aorta and esophagus both lie in the posterior mediastinum.")])
]),

/* ---------------- 5 ---------------- */
s("05-pericardium", "5. Layers of the pericardium", "Objective 5. Slides 18–23.", [
  u("Fibrous pericardium",
    "<p>The tough outer layer. It <strong>blends with the roots of the great vessels and the central tendon of the diaphragm</strong>, anchoring the heart for stability.</p>",
    ["fibrous-layer", "fibrous-attachments"],
    [q("Which pericardial layer blends with the roots of the great vessels and the central tendon of the diaphragm?", "Fibrous pericardium", ["Visceral serous pericardium", "Parietal serous pericardium", "Endocardium"], "The fibrous layer anchors to the great vessels and diaphragm."),
     q("The fibrous pericardium fuses inferiorly with which structure?", "Central tendon of the diaphragm", ["Xiphoid process", "Esophagus", "Thymus"], "It blends with the central tendon of the diaphragm.")],
    [q("A surgeon notes the heart's sac is firmly fused below to the diaphragm, limiting how far the heart can shift. Which layer provides this anchoring?", "Fibrous pericardium", ["Visceral pericardium (epicardium)", "Myocardium", "Parietal pleura"], "The fibrous pericardium blends with the diaphragm's central tendon for stability.")]),
  u("Serous pericardium: parietal and visceral",
    "<p>The serous layer has <strong>two portions</strong>:</p><ul><li><strong>Parietal</strong> — lines the inside of the fibrous pericardium.</li><li><strong>Visceral</strong> — covers the heart surface = the <strong>epicardium</strong>.</li></ul><p>Between them is the <strong>pericardial cavity</strong>, a <strong>potential space</strong> holding about <strong>30–50 mL</strong> of pericardial fluid made by the serous layer so the heart contracts smoothly.</p>" +
    hy("Outside → in: fibrous → parietal serous → (pericardial cavity, 30–50 mL) → visceral serous = epicardium."),
    ["serous-layer", "parietal-layer", "visceral-epicardium", "pericardial-fluid"],
    [q("Which portion of the serous pericardium lines the fibrous pericardium?", "Parietal layer", ["Visceral layer", "Epicardium", "Endocardium"], "Parietal serous pericardium lines the fibrous layer."),
     q("The visceral layer of serous pericardium is also called what?", "Epicardium", ["Endocardium", "Myocardium", "Fibrous pericardium"], "Visceral serous pericardium = epicardium."),
     q("About how much pericardial fluid is normally present?", "30–50 mL", ["1–2 mL", "150–200 mL", "500 mL"], "The serous layer produces roughly 30–50 mL."),
     q("Which layer produces pericardial fluid?", "Serous pericardium", ["Fibrous pericardium", "Myocardium", "Endocardium"], "The serous layer produces the fluid.")],
    [q("A needle advanced during pericardiocentesis enters the fluid-filled potential space surrounding the heart. Which two layers bound this space?", "Parietal and visceral serous pericardium", ["Fibrous pericardium and parietal pleura", "Epicardium and myocardium", "Myocardium and endocardium"], "The pericardial cavity lies between the parietal and visceral layers of serous pericardium.")]),
  u("Pericardial sinuses",
    tbl(["Sinus", "What it is", "Clinical point"], [["Transverse", "Passage separating the ascending aorta and pulmonary trunk from the SVC, IVC, and pulmonary veins", "Lets a surgeon isolate and clamp the ascending aorta and pulmonary trunk"], ["Oblique", "Posterior pocket-like recess", "Fluid collects here in pericardial effusion and can be seen on imaging"]]),
    ["transverse-sinus", "oblique-sinus"],
    [q("Which pericardial sinus separates the ascending aorta and pulmonary trunk from the SVC, IVC, and pulmonary veins?", "Transverse pericardial sinus", ["Oblique pericardial sinus", "Coronary sinus", "Aortic sinus"], "That passage is the transverse sinus."),
     q("Which pericardial sinus is a posterior pocket-like recess?", "Oblique pericardial sinus", ["Transverse pericardial sinus", "Coronary sinus", "Costodiaphragmatic recess"], "The oblique sinus is the posterior recess.")],
    [q("During cardiac surgery, the surgeon passes a finger behind the ascending aorta and pulmonary trunk to place a clamp. Which space is used?", "Transverse pericardial sinus", ["Oblique pericardial sinus", "Coronary sinus", "Posterior mediastinum"], "The transverse sinus allows isolation and clamping of the aorta and pulmonary trunk."),
     q("Imaging of a patient with a pericardial effusion shows fluid pooling in a recess behind the heart. Which recess is this?", "Oblique pericardial sinus", ["Transverse pericardial sinus", "Coronary sulcus", "Fossa ovalis"], "Effusion fluid builds up in the posterior oblique sinus.")])
]),

/* ---------------- 6 ---------------- */
s("06-heart-external-surface", "6. External surface landmarks of the heart", "Objective 6. Slides 20, 24–28.", [
  u("Position in the chest",
    "<p>The heart and great-vessel roots in the pericardial sac lie <strong>posterior to the sternum, costal cartilages, and anterior ends of ribs 3–5</strong>. About <strong>2/3 lies left</strong> of the midsternal line and <strong>1/3 right</strong>.</p>",
    ["heart-position"],
    [q("The heart lies posterior to the anterior ends of which ribs?", "3rd–5th", ["1st–2nd", "6th–8th", "8th–10th"], "Behind the sternum, costal cartilages, and anterior ends of ribs 3–5.")],
    [q("A stab wound enters just left of the sternum at the level of the anterior 4th rib. Which structure lies directly deep to this point?", "The heart within its pericardial sac", ["The liver", "The thymus in the superior mediastinum", "The spleen"], "The heart lies behind the sternum and anterior ends of ribs 3–5, mostly left of midline.")]),
  u("Apex",
    "<ul><li>The <strong>blunt, rounded end</strong> formed by the <strong>left ventricle</strong>.</li><li>Lies in the <strong>left 5th ICS slightly medial to the MCL, about 9 cm from midline</strong>.</li><li><strong>Mitral valve closure sounds are maximal here.</strong></li></ul>",
    ["apex"],
    [q("Which chamber forms the apex of the heart?", "Left ventricle", ["Right ventricle", "Left atrium", "Right atrium"], "The apex is formed by the LV."),
     q("Where does the cardiac apex lie on the chest wall?", "Left 5th ICS slightly medial to the midclavicular line", ["Left 2nd ICS at the sternal border", "Right 5th ICS at the midclavicular line", "Left 7th ICS at the anterior axillary line"], "Left 5th ICS just medial to the MCL, ~9 cm from midline.")],
    [q("On exam, a clinician places the stethoscope at the left 5th intercostal space just medial to the midclavicular line. Which valve's closure is heard best here?", "Mitral", ["Aortic", "Pulmonic", "Tricuspid"], "Mitral closure is maximal at the apex.")]),
  u("Base and borders",
    tbl(["Surface/border", "Formed by"], [["Base (posterior)", "Mostly left atrium, some right atrium"], ["Right border", "SVC, right atrium, IVC"], ["Left border", "Left ventricle, aortic arch, pulmonary trunk, left auricle"], ["Inferior border", "Right ventricle (slightly left ventricle)"], ["Superior border", "Right and left atria and auricles; ascending aorta, pulmonary trunk, and SVC on the right"]]) +
    hy("Base = LA (posterior). Inferior border = RV. Apex = LV."),
    ["base", "right-border", "left-border", "inferior-border", "superior-border"],
    [q("Which chamber mostly forms the base (posterior aspect) of the heart?", "Left atrium", ["Left ventricle", "Right ventricle", "Right atrium"], "The base is mostly LA with some RA."),
     q("Which structures form the right border of the heart?", "SVC, right atrium, and IVC", ["Right ventricle and pulmonary trunk", "Left ventricle and aortic arch", "Right ventricle and IVC"], "Right border: SVC, RA, IVC."),
     q("Which chamber forms most of the inferior border?", "Right ventricle", ["Left ventricle", "Left atrium", "Right atrium"], "Inferior border: RV, slightly LV."),
     q("Which structures form the left border?", "Left ventricle, aortic arch, pulmonary trunk, and left auricle", ["Right atrium, SVC, and IVC", "Right ventricle and left atrium", "Left atrium and pulmonary veins only"], "Left border: LV, aortic arch, pulmonary trunk, left auricle."),
     q("Which structures form the superior border?", "Both atria and auricles, with the ascending aorta, pulmonary trunk, and SVC", ["Right ventricle and left ventricle", "IVC and coronary sinus", "Apex and interventricular septum"], "Superior border: atria and auricles anteriorly; ascending aorta, pulmonary trunk, SVC; boundary of the transverse sinus.")],
    [q("A frontal chest radiograph shows enlargement of the right heart border. Which chamber is most likely enlarged?", "Right atrium", ["Left ventricle", "Left atrium", "Right ventricle"], "The right border is formed by the SVC, RA, and IVC.")]),
  u("Sulci",
    "<ul><li><strong>Coronary sulcus</strong> — groove that separates the <strong>atria from the ventricles</strong>.</li><li><strong>Anterior and posterior interventricular sulci</strong> — grooves on the front and back that separate the <strong>right from the left ventricle</strong>.</li></ul>",
    ["coronary-sulcus", "interventricular-sulci"],
    [q("Which external groove separates the atria from the ventricles?", "Coronary sulcus", ["Anterior interventricular sulcus", "Posterior interventricular sulcus", "Oblique sinus"], "The coronary sulcus encircles the heart at the AV junction."),
     q("What do the anterior and posterior interventricular sulci mark?", "The boundary between the right and left ventricles", ["The boundary between atria and ventricles", "The site of the SA node", "The attachment of the fibrous pericardium"], "Interventricular sulci delineate RV from LV.")],
    [q("During bypass surgery, the surgeon follows the groove running down the front of the heart toward the apex between the two ventricles. Which landmark is this?", "Anterior interventricular sulcus", ["Coronary sulcus", "Posterior interventricular sulcus", "Transverse sinus"], "The anterior interventricular sulcus separates the RV from the LV anteriorly.")])
]),

/* ---------------- 7 ---------------- */
s("07-heart-structure", "7. Heart structure: chambers, fibrous skeleton, valves, conduction, coronary vessels", "Objective 7. Slides 29–43, 49–57.", [
  u("Three layers of the heart wall",
    tbl(["Layer", "Description"], [["Epicardium", "Thin external layer = visceral pericardium"], ["Myocardium", "Thickest layer; cardiac muscle; thickest in the left ventricle"], ["Endocardium", "Thin inner epithelial layer covering all chambers and valves"]]),
    ["wall-layers"],
    [q("Which layer of the heart wall is the thickest?", "Myocardium", ["Epicardium", "Endocardium", "Fibrous pericardium"], "The myocardium is the muscular, thickest layer."),
     q("Which layer lines the chambers and covers the valves?", "Endocardium", ["Epicardium", "Myocardium", "Parietal pericardium"], "Endocardium is the thin inner epithelial layer.")],
    [q("Infective endocarditis involves the valve leaflets. Which heart-wall layer covers the valves?", "Endocardium", ["Epicardium", "Myocardium", "Visceral pericardium"], "The endocardium covers the chambers and valves.")]),
  u("Right atrium",
    "<ul><li>Receives blood from the body via the <strong>SVC and IVC</strong> and from the heart via the <strong>coronary sinus</strong>.</li><li><strong>Right auricle</strong> — ear-shaped projection, extra room when needed.</li><li>Opens into the right ventricle.</li><li><strong>Fossa ovalis</strong> — remnant of the fetal foramen ovale; site of an <strong>ASD</strong> if it fails to close.</li></ul>",
    ["right-atrium", "fossa-ovalis"],
    [q("Which three vessels empty into the right atrium?", "SVC, IVC, and coronary sinus", ["Four pulmonary veins", "Pulmonary trunk and aorta", "SVC, IVC, and pulmonary veins"], "RA receives SVC, IVC, and coronary sinus."),
     q("The fossa ovalis is the remnant of which fetal structure?", "Foramen ovale", ["Ductus arteriosus", "Ductus venosus", "Umbilical vein"], "Fossa ovalis = remnant of the foramen ovale.")],
    [q("An echocardiogram shows a defect in the interatrial septum at the site of a fetal opening that failed to close. Which landmark is involved?", "Fossa ovalis", ["Membranous interventricular septum", "Moderator band", "Coronary sinus opening"], "Failure of the foramen ovale to close leaves an ASD at the fossa ovalis.")]),
  u("Right ventricle",
    "<ul><li>Forms the major part of the <strong>anterior surface</strong> and almost the entire <strong>inferior border</strong>.</li><li>Receives blood from the RA during <strong>diastole</strong> through the <strong>tricuspid valve</strong>, anchored by chordae tendineae to papillary muscles.</li><li><strong>Conus arteriosus</strong> — upper outflow portion leading to the pulmonary trunk.</li><li><strong>Moderator band (septomarginal trabecula)</strong> — connects the IV septum to the anterior papillary muscle; prevents overdistension and carries part of the <strong>right bundle branch</strong>.</li><li>IV septum is mostly muscular; the <strong>upper membranous part is the site of a potential VSD</strong>.</li><li>Blood leaves in <strong>systole</strong> through the <strong>pulmonic valve</strong>.</li></ul>",
    ["right-ventricle", "conus-arteriosus", "moderator-band", "membranous-septum-vsd"],
    [q("What is the upper outflow portion of the right ventricle leading to the pulmonary trunk called?", "Conus arteriosus", ["Moderator band", "Coronary sulcus", "Fossa ovalis"], "The conus arteriosus (infundibulum)."),
     q("Which structure connects the interventricular septum to the anterior papillary muscle and carries part of the right bundle branch?", "Moderator band (septomarginal trabecula)", ["Chordae tendineae", "Crista terminalis", "Conus arteriosus"], "The moderator band."),
     q("Which part of the interventricular septum is the usual site of a VSD?", "The upper membranous portion", ["The lower muscular portion near the apex", "The fossa ovalis", "The coronary sulcus"], "The membranous upper septum is the potential VSD site.")],
    [q("A newborn has a holosystolic murmur, and echo shows a defect high in the interventricular septum where the wall is thin and not muscular. Which part is involved?", "Membranous interventricular septum", ["Muscular septum near the apex", "Interatrial septum at the fossa ovalis", "Moderator band"], "The membranous upper septum is the classic VSD site.")]),
  u("Left atrium",
    "<ul><li>Receives oxygenated blood from <strong>4 pulmonary veins</strong> (2 superior, 2 inferior).</li><li>Wall slightly thicker than the RA.</li><li>Larger smooth-walled part plus a smaller muscular <strong>auricle with pectinate muscle</strong>.</li><li>Opens into the left ventricle.</li></ul>",
    ["left-atrium"],
    [q("How many pulmonary veins drain into the left atrium?", "Four", ["Two", "One", "Six"], "Two superior and two inferior pulmonary veins.")],
    [q("A catheter is advanced through a pulmonary vein during an ablation procedure. Which chamber will it enter next?", "Left atrium", ["Right atrium", "Left ventricle", "Right ventricle"], "The 4 pulmonary veins drain into the left atrium.")]),
  u("Left ventricle",
    "<ul><li>Forms the <strong>apex</strong>, nearly all the left (pulmonary) surface and border, and most of the diaphragmatic surface.</li><li>Walls <strong>2–3 times thicker than the RV</strong>; papillary muscles larger than the RV's.</li><li><strong>Mitral (bicuspid) valve</strong> attaches to papillary muscles via chordae tendineae.</li><li>Opens superiorly into the <strong>aorta through the aortic valve</strong>.</li></ul>",
    ["left-ventricle"],
    [q("How much thicker are left ventricular walls than right ventricular walls?", "2–3 times", ["About the same", "5–6 times", "Half as thick"], "LV walls are 2–3x thicker than the RV."),
     q("The left ventricle empties through which valve?", "Aortic valve", ["Pulmonic valve", "Mitral valve", "Tricuspid valve"], "LV opens superiorly into the aorta through the aortic valve.")],
    [q("A patient with long-standing hypertension has thickening of the chamber that forms the apex and pumps into the aorta. Which chamber is it?", "Left ventricle", ["Right ventricle", "Left atrium", "Right atrium"], "The LV forms the apex and ejects through the aortic valve.")]),
  u("Path of blood flow through the heart",
    "<p>Body → <strong>SVC/IVC → RA → tricuspid → RV → pulmonic valve → pulmonary trunk</strong> → lungs → <strong>pulmonary veins → LA → mitral → LV → aortic valve → aorta</strong> → body.</p>" +
    mn("Valves in flow order: <strong>T-P-M-A</strong> — 'Try Pulling My Aorta.'"),
    ["blood-flow"],
    [q("After passing the tricuspid valve, blood enters which chamber?", "Right ventricle", ["Right atrium", "Left atrium", "Left ventricle"], "RA → tricuspid → RV."),
     q("What is the correct order of the four valves along the path of blood flow?", "Tricuspid, pulmonic, mitral, aortic", ["Mitral, aortic, tricuspid, pulmonic", "Tricuspid, mitral, pulmonic, aortic", "Pulmonic, tricuspid, aortic, mitral"], "T-P-M-A.")],
    [q("A small air bubble enters a peripheral IV in the arm. Assuming no shunt, which valve will it pass first in the heart?", "Tricuspid valve", ["Pulmonic valve", "Mitral valve", "Aortic valve"], "Venous blood returns via the SVC to the RA, then crosses the tricuspid valve.")]),
  u("Fibrous skeleton",
    "<p>Thick connective tissue forming <strong>4 rings</strong> to which the valves attach. Functions:</p><ul><li><strong>Separates atria from ventricles.</strong></li><li><strong>Keeps the AV and semilunar orifices patent</strong> and prevents overdistension.</li><li>Provides <strong>attachment for valve leaflets/cusps</strong> and for <strong>myocardium</strong>.</li><li>Acts as an <strong>electrical insulator</strong> so atria and ventricles conduct independently.</li></ul>" +
    hy("Because the skeleton insulates, the <strong>AV bundle is the only electrical connection</strong> between atria and ventricles."),
    ["fibrous-skeleton", "fibrous-insulator"],
    [q("What electrical role does the fibrous skeleton of the heart play?", "It insulates atria from ventricles so they conduct independently", ["It generates the pacemaker impulse", "It speeds conduction from atria to ventricles", "It carries impulses to the Purkinje fibers"], "The fibrous skeleton is an electrical insulator."),
     q("How many fibrous rings form the heart's fibrous skeleton for valve attachment?", "Four", ["Two", "Three", "Six"], "Four connecting rings, one for each valve.")],
    [q("A student asks why atrial impulses cannot spread directly through the muscle into the ventricles. What is the anatomic answer?", "The fibrous skeleton insulates the atria from the ventricles, leaving the AV bundle as the only path", ["The coronary sulcus is filled with fat that blocks conduction", "The pericardium separates the chambers", "The moderator band absorbs atrial impulses"], "The fibrous skeleton insulates; only the AV bundle crosses it.")]),
  u("The four valves",
    tbl(["Valve", "Type", "Opens/closes", "Sound"], [["Tricuspid", "AV (RA → RV)", "Opens in diastole, closes in systole", "S1 ('lub')"], ["Mitral (bicuspid)", "AV (LA → LV)", "Closes slightly before tricuspid", "S1 ('lub')"], ["Pulmonic", "Semilunar (RV → pulmonary trunk)", "Opens in systole; closes just after aortic", "S2 ('dub')"], ["Aortic", "Semilunar (LV → aorta)", "Closes at the start of diastole", "S2 ('dub')"]]) +
    hy("<strong>S1 = AV valves close</strong> (mitral then tricuspid). <strong>S2 = semilunar valves close</strong> (aortic then pulmonic)."),
    ["valves-av", "valves-semilunar", "valve-s1", "valve-s2"],
    [q("Closure of which valves produces S1?", "Mitral and tricuspid", ["Aortic and pulmonic", "Mitral and aortic", "Tricuspid and pulmonic"], "S1 ('lub') = AV valve closure."),
     q("Closure of which valves produces S2?", "Aortic and pulmonic", ["Mitral and tricuspid", "Tricuspid and aortic", "Mitral and pulmonic"], "S2 ('dub') = semilunar valve closure."),
     q("Which two valves are the semilunar valves?", "Aortic and pulmonic", ["Mitral and tricuspid", "Mitral and aortic", "Tricuspid and pulmonic"], "Semilunar = aortic and pulmonic; AV = tricuspid and mitral."),
     q("Which valve normally closes slightly after the aortic valve?", "Pulmonic", ["Mitral", "Tricuspid", "None; they close together"], "The pulmonic valve shuts just slightly after the aortic valve.")],
    [q("While auscultating, a student hears the first heart sound and is asked which valves just closed. What is the correct answer?", "The mitral and tricuspid valves", ["The aortic and pulmonic valves", "The aortic and mitral valves", "Only the pulmonic valve"], "S1 is AV-valve closure; mitral closes slightly before tricuspid.")]),
  u("Chordae tendineae and papillary muscles",
    "<p>The <strong>AV valves</strong> attach to the myocardium via <strong>chordae tendineae and papillary muscles</strong>, which keep the leaflets from being pushed up into the atrium (<strong>prolapse</strong>).</p><p>The <strong>aortic and pulmonary valves</strong> catch backward-flowing blood and seal together to prevent backflow. Diseased or worn cusps close poorly, causing turbulent flow heard as <strong>murmurs</strong>.</p>",
    ["chordae-papillary", "semilunar-function"],
    [q("Which structures prevent the AV valve leaflets from prolapsing into the atria?", "Chordae tendineae and papillary muscles", ["Moderator band and conus arteriosus", "Fibrous pericardium", "Pectinate muscles"], "Chordae and papillary muscles anchor the AV leaflets."),
     q("What prevents backflow from the aorta into the left ventricle?", "The aortic valve cusps sealing together", ["Chordae tendineae on the aortic valve", "The mitral valve", "The papillary muscles"], "Semilunar cusps catch backward flow and seal.")],
    [q("After an inferior MI, a patient develops acute mitral regurgitation as a mitral leaflet flails back into the left atrium. Rupture of which structure best explains this?", "A papillary muscle or its chordae tendineae", ["The moderator band", "The fibrous skeleton's aortic ring", "The coronary sinus"], "Papillary muscles and chordae keep AV leaflets from prolapsing into the atrium.")]),
  u("SA node and AV node",
    tbl(["Node", "Location", "Role"], [["SA node", "Anterolaterally, just deep to the epicardium at the junction of the SVC and right atrium", "Pacemaker; initiates and regulates impulses; sympathetic stimulates, parasympathetic inhibits"], ["AV node", "Posteroinferior interatrial septum near the opening of the coronary sinus", "Smaller; receives the SA signal through the RA wall and sends it to the AV bundle"]]),
    ["sa-node", "av-node"],
    [q("Where is the SA node located?", "At the junction of the SVC and right atrium, just deep to the epicardium", ["In the posteroinferior interatrial septum near the coronary sinus", "In the membranous interventricular septum", "At the apex of the left ventricle"], "SA node: SVC–RA junction."),
     q("Where is the AV node located?", "Posteroinferior interatrial septum near the coronary sinus opening", ["At the SVC–right atrial junction", "In the moderator band", "Along the muscular interventricular septum"], "AV node: posteroinferior interatrial septum near the coronary sinus."),
     q("Which autonomic division stimulates the SA node?", "Sympathetic", ["Parasympathetic", "Somatic", "Enteric"], "Sympathetic stimulates; parasympathetic inhibits.")],
    [q("A patient's heart rate drops after strong vagal stimulation. Which structure's activity was inhibited?", "SA node", ["Purkinje fibers", "Moderator band", "Fibrous skeleton"], "Parasympathetic (vagal) input inhibits the SA node pacemaker.")]),
  u("AV bundle, bundle branches, Purkinje fibers",
    "<ul><li><strong>AV bundle (bundle of His)</strong> — the <strong>only electrical connection between atria and ventricles</strong>; passes through the fibrous skeleton and along the membranous IV septum.</li><li>At the membranous–muscular junction it divides into <strong>right and left bundle branches</strong>, running on each side of the muscular septum to their respective ventricles.</li><li>These become the <strong>subendocardial branches (Purkinje fibers)</strong>, which stimulate ventricular muscle and the septum.</li></ul>" +
    mn("Conduction order: <strong>SA → AV → His → branches → Purkinje</strong>."),
    ["av-bundle", "bundle-branches", "purkinje"],
    [q("What is the only electrical connection between the atria and ventricles?", "AV bundle (bundle of His)", ["SA node", "Moderator band", "Purkinje fibers"], "The AV bundle passes through the fibrous skeleton."),
     q("Where does the AV bundle divide into right and left bundle branches?", "At the junction of the membranous and muscular IV septum", ["At the SVC–RA junction", "At the apex", "In the coronary sulcus"], "It divides at the membranous–muscular junction."),
     q("What are the subendocardial branches of the conduction system called?", "Purkinje fibers", ["Pectinate muscles", "Chordae tendineae", "Trabeculae carneae"], "Subendocardial branches = Purkinje fibers.")],
    [q("A surgeon repairing a membranous VSD must avoid injuring a conduction structure running along that part of the septum. Which one?", "AV bundle (bundle of His)", ["SA node", "Right marginal artery", "Coronary sinus"], "The AV bundle runs along the membranous IV septum.")]),
  u("Right coronary artery and branches",
    "<p>Coronary arteries are the <strong>first branches of the aorta</strong>. The <strong>RCA</strong> arises from the <strong>right aortic sinus</strong> and runs in the coronary sulcus. It supplies the <strong>right atrium and most of the right ventricle</strong>.</p>" +
    tbl(["RCA branch", "Supplies"], [["Right marginal", "Right border toward (not reaching) the apex"], ["SA nodal", "SA node in ~60%"], ["AV nodal", "AV node in ~80%"], ["Posterior interventricular (PIV)", "Posterior parts of both ventricles"], ["Interventricular septal (from PIV)", "Posterior 1/3 of the septum and part of the LV"]]),
    ["rca", "rca-branches"],
    [q("From where does the right coronary artery arise?", "Right aortic sinus", ["Left aortic sinus", "Pulmonary trunk", "Brachiocephalic trunk"], "The RCA arises from the right aortic sinus."),
     q("In about what percentage of people does the RCA supply the AV node?", "80%", ["40%", "60%", "100%"], "AV nodal branch from the RCA in ~80%."),
     q("In about what percentage of people does the RCA supply the SA node?", "60%", ["40%", "80%", "20%"], "SA nodal from RCA ~60%; from LCA ~40%."),
     q("Which RCA branch supplies the posterior parts of both ventricles?", "Posterior interventricular (posterior descending) artery", ["Right marginal artery", "Circumflex artery", "Left anterior descending artery"], "The PIV supplies the posterior adjacent ventricles.")],
    [q("A patient with an inferior-wall MI develops heart block. Occlusion of which artery most often explains both findings?", "Right coronary artery", ["Left anterior descending artery", "Circumflex artery", "Left marginal artery"], "The RCA supplies the posterior/inferior ventricles via the PIV and the AV node in ~80%.")]),
  u("Left coronary artery and branches",
    "<p>The <strong>LCA</strong> arises from the <strong>left aortic sinus</strong>, passes between the left auricle and the pulmonary trunk, and continues in the coronary sulcus.</p>" +
    tbl(["LCA branch", "Supplies"], [["Left anterior descending (anterior IV)", "Anterior parts of both ventricles, anterior 2/3 of the septum, the apex; often anastomoses with the PIV"], ["Lateral (diagonal) branch", "Anterior surface of the heart"], ["Circumflex", "Follows the sulcus around the left border: left atrium, mitral valve, most of the posterior LV"], ["Left marginal", "Left ventricle"]]) +
    "<p><strong>LCA territory overall:</strong> left atrium, most of the LV, part of the RV, most (anterior 2/3) of the septum including the AV bundle, and the SA node in ~40%.</p>",
    ["lca", "lca-branches", "lca-territory"],
    [q("Which LCA branch supplies the anterior 2/3 of the interventricular septum and the apex?", "Left anterior descending (anterior interventricular) artery", ["Circumflex artery", "Left marginal artery", "Posterior interventricular artery"], "The LAD supplies the anterior septum and apex."),
     q("Which LCA branch follows the coronary sulcus around the left border to the posterior heart?", "Circumflex artery", ["Left anterior descending artery", "Right marginal artery", "Lateral diagonal branch"], "The circumflex runs in the sulcus around the left border."),
     q("From where does the left coronary artery arise?", "Left aortic sinus", ["Right aortic sinus", "Arch of the aorta", "Pulmonary trunk"], "The LCA arises from the left aortic sinus."),
     q("Which coronary artery supplies the SA node in about 40% of people?", "Left coronary artery", ["Right coronary artery", "Posterior interventricular artery", "Right marginal artery"], "The SA node is supplied by the LCA in ~40%.")],
    [q("ECG changes in the anterior leads show a large anterior-wall and apical infarction. Which artery is most likely occluded?", "Left anterior descending artery", ["Right coronary artery", "Right marginal artery", "Posterior interventricular artery"], "The LAD supplies the anterior ventricles, anterior septum, and apex."),
     q("Echocardiography after an MI shows a hypokinetic posterior left ventricle and new mitral dysfunction, with a normal right ventricle. Which artery best fits?", "Circumflex artery", ["Right marginal artery", "Left anterior descending artery", "Conus branch of the RCA"], "The circumflex supplies the LA, mitral valve, and most of the posterior LV.")]),
  u("Coronary veins",
    tbl(["Vein", "Drains"], [["Coronary sinus", "Main return to the right atrium; all cardiac veins empty into it except the smallest cardiac veins (directly into the atria)"], ["Great cardiac vein (begins as the anterior IV vein near the apex)", "Area supplied by the LCA; main contributor to the sinus"], ["Middle cardiac vein (posterior IV)", "Area supplied by the RCA"], ["Small cardiac vein", "Area of the right marginal artery"], ["Posterior vein of the LV", "Left ventricle → coronary sinus"], ["Anterior cardiac veins", "Directly into the RA or join the small cardiac vein"]]) +
    hy("Veins travel with arteries: <strong>great cardiac ↔ LAD/LCA</strong>, <strong>middle cardiac ↔ PIV/RCA</strong>, <strong>small cardiac ↔ right marginal</strong>."),
    ["coronary-sinus", "great-cardiac-vein", "middle-cardiac-vein", "small-cardiac-vein", "lv-posterior-vein", "anterior-smallest-veins"],
    [q("What is the main venous return of the heart into the right atrium?", "Coronary sinus", ["Great cardiac vein directly", "Superior vena cava", "Anterior cardiac veins"], "The coronary sinus collects most cardiac veins."),
     q("Which cardiac vein drains the territory of the LCA and is the main contributor to the coronary sinus?", "Great cardiac vein", ["Middle cardiac vein", "Small cardiac vein", "Smallest cardiac veins"], "The great cardiac vein begins as the anterior IV vein near the apex."),
     q("Which cardiac vein runs in the posterior interventricular groove draining the RCA territory?", "Middle cardiac vein", ["Great cardiac vein", "Small cardiac vein", "Posterior vein of the LV"], "Middle cardiac = posterior IV vein."),
     q("Which cardiac vein accompanies the right marginal artery?", "Small cardiac vein", ["Middle cardiac vein", "Great cardiac vein", "Posterior vein of the LV"], "The small cardiac vein travels from the right marginal territory."),
     q("Which cardiac veins empty directly into the atria rather than the coronary sinus?", "Smallest cardiac veins", ["Great cardiac vein", "Middle cardiac vein", "Posterior vein of the LV"], "The smallest cardiac veins empty directly into the atria; some anterior cardiac veins enter the RA directly.")],
    [q("An electrophysiologist threads a catheter from the right atrium into the large venous channel in the posterior coronary sulcus that collects most cardiac venous blood. Which structure is entered?", "Coronary sinus", ["Great cardiac vein origin at the apex", "Inferior vena cava", "Oblique pericardial sinus"], "The coronary sinus is the main venous return into the RA.")])
]),

/* ---------------- 8 ---------------- */
s("08-valve-projection-auscultation", "8. Valve surface projection vs. auscultation point", "Objective 8. Slides 36–37, 44–48.", [
  u("Why the two points differ",
    "<p><strong>Blood carries sound in the direction of its flow.</strong> So each auscultation area lies <strong>downstream along blood flow</strong>, not over the valve's actual position (surface projection).</p><p>On the slide figures: <strong>O = surface projection</strong> of the valve; <strong>X = auscultation point</strong>. The diagram also labels <strong>Erb's point</strong> (left 3rd ICS at the sternal border).</p>" +
    hy("Valve location ≠ listening post. Listen where the blood (and sound) goes."),
    ["projection-principle"],
    [q("Why are auscultation areas not located directly over the valves?", "Blood carries the sound in the direction of its flow", ["The sternum blocks sound over the valves", "Valves lie posterior to the lungs", "The pericardium muffles sound over the valve"], "Sound travels with blood flow, so listening posts are downstream."),
     q("On the slide figures, what does the 'O' mark?", "The surface projection of the valve location", ["The auscultation point", "Erb's point", "The cardiac apex"], "O = surface projection; X = auscultation point.")],
    [q("A student places the stethoscope directly over where the aortic valve sits behind the sternum and hears the aortic component poorly. What principle explains moving to a different spot?", "Sound is best heard downstream in the direction of blood flow, not over the valve itself", ["The valve is best heard on the back", "The aortic valve is silent", "Sound travels against the direction of blood flow"], "Auscultation points follow blood flow away from the valve.")]),
  u("Aortic valve",
    tbl(["", "Location"], [["Surface projection (O)", "Behind the left half of the sternum opposite the 3rd ICS"], ["Auscultation point (X)", "Right 2nd ICS at the right sternal border"]]),
    ["aortic-projection", "aortic-auscultation"],
    [q("Where is the aortic valve best auscultated?", "Right 2nd ICS at the sternal border", ["Left 2nd ICS at the sternal border", "Left lower sternal border", "Left 5th ICS MCL"], "Aortic area: right 2nd ICS."),
     q("What is the surface projection of the aortic valve?", "Behind the sternum opposite the 3rd ICS", ["Right 2nd ICS lateral to the sternum", "Left 5th ICS MCL", "Behind the sternum opposite the 4th–5th ICS"], "It sits behind the sternum opposite the 3rd ICS.")],
    [q("A patient with suspected aortic stenosis has a harsh systolic murmur. Where should the examiner listen for the loudest aortic-area sound?", "Right 2nd intercostal space at the sternal border", ["Left 3rd intercostal space at the sternal border", "Left 5th intercostal space at the midclavicular line", "Left lower sternal border"], "The aortic auscultation point is the right 2nd ICS.")]),
  u("Pulmonic valve",
    tbl(["", "Location"], [["Surface projection (O)", "Left of the sternum opposite the left 3rd intercostal junction (behind the medial end of the left 3rd costal cartilage)"], ["Auscultation point (X)", "Left 2nd ICS at the left sternal border"]]),
    ["pulmonic-projection", "pulmonic-auscultation"],
    [q("Where is the pulmonic valve best auscultated?", "Left 2nd ICS at the sternal border", ["Right 2nd ICS at the sternal border", "Left 5th ICS MCL", "Left lower sternal border"], "Pulmonic area: left 2nd ICS."),
     q("Where is the pulmonic valve's surface projection?", "Behind the medial end of the left 3rd costal cartilage", ["Right 2nd ICS", "Behind the sternum at the 4th–5th ICS", "Left 4th intercostal junction"], "The pulmonic valve projects at the left 3rd costal cartilage.")],
    [q("To assess the pulmonic component of S2, where should the stethoscope be placed?", "Left 2nd intercostal space at the sternal border", ["Right 2nd intercostal space at the sternal border", "Left 5th intercostal space at the midclavicular line", "Left lower sternal border"], "The pulmonic auscultation point is the left 2nd ICS.")]),
  u("Tricuspid valve",
    tbl(["", "Location"], [["Surface projection (O)", "Behind the right half of the sternum opposite the 4th–5th ICS"], ["Auscultation point (X)", "Lower left part of the sternal body — left lower sternal border"]]) +
    clar("slide 36 says 'left lower costal margin' and slide 47 says 'lower left quadrant of the body of the sternum'; the standard tricuspid area is the <strong>left lower sternal border</strong> (about the 4th–5th ICS)."),
    ["tricuspid-projection", "tricuspid-auscultation"],
    [q("Where is the tricuspid valve best auscultated?", "Left lower sternal border", ["Right 2nd ICS", "Left 2nd ICS", "Left 5th ICS MCL"], "Tricuspid area: lower left sternal body / left lower sternal border."),
     q("What is the surface projection of the tricuspid valve?", "Behind the right half of the sternum opposite the 4th–5th ICS", ["Behind the left 3rd costal cartilage", "Left 5th ICS MCL", "Right 2nd ICS lateral to the sternum"], "Tricuspid projects behind the sternum at the 4th–5th ICS.")],
    [q("A patient with suspected tricuspid regurgitation is being examined. Where is the best place to listen for the murmur?", "Left lower sternal border", ["Right 2nd intercostal space", "Left 2nd intercostal space", "Left midaxillary line"], "The tricuspid auscultation area is the left lower sternal border.")]),
  u("Mitral valve",
    tbl(["", "Location"], [["Surface projection (O)", "Behind the left half of the sternum at the 4th costal cartilage (left of the 4th intercostal junction)"], ["Auscultation point (X)", "Apex: left 5th ICS at the midclavicular line"]]) +
    mn("Upper right → upper left → lower left → apex: <strong>All People Try Medicine</strong> — Aortic R2, Pulmonic L2, Tricuspid LLSB, Mitral apex."),
    ["mitral-projection", "mitral-auscultation"],
    [q("Where is the mitral valve best auscultated?", "Left 5th ICS at the midclavicular line (apex)", ["Left lower sternal border", "Left 2nd ICS", "Right 2nd ICS"], "Mitral area: the apex."),
     q("What is the surface projection of the mitral valve?", "Left of the sternum at the 4th costal cartilage/intercostal junction", ["Left 5th ICS MCL", "Right 2nd ICS", "Behind the left 3rd costal cartilage"], "The mitral valve projects at the left 4th level; it is heard at the apex.")],
    [q("A patient has a suspected mitral regurgitation murmur. The examiner places the bell where the valve actually sits behind the left sternum at the 4th costal cartilage, then moves to hear it best. Where should the stethoscope go?", "Left 5th ICS at the midclavicular line", ["Right 2nd ICS at the sternal border", "Left 2nd ICS at the sternal border", "Left 3rd ICS at the sternal border (Erb's point)"], "Mitral sounds are best heard at the apex, downstream from the valve.")])
]),

/* ---------------- 9 ---------------- */
s("09-thoracic-vessels", "9. Major arteries and veins of the thorax", "Objective 9. Slides 58–61, 67–72.", [
  u("Three layers of every vessel",
    tbl(["Layer", "Tissue"], [["Tunica intima", "Inner endothelium"], ["Tunica media", "Middle smooth muscle"], ["Tunica adventitia", "Outer connective tissue"]]) +
    mn("<strong>I-M-A</strong> inside → out: Intima, Media, Adventitia."),
    ["vessel-layers"],
    [q("Which vessel wall layer is composed of smooth muscle?", "Tunica media", ["Tunica intima", "Tunica adventitia", "Endocardium"], "The media is the smooth-muscle middle layer."),
     q("Which is the innermost layer of an artery or vein?", "Tunica intima", ["Tunica media", "Tunica adventitia", "Epicardium"], "The intima is the inner endothelial layer.")],
    [q("Contrast imaging shows a dissection in which blood has torn through the inner endothelial lining of the aorta and entered its muscular middle layer. Which two layers are involved?", "Tunica intima and tunica media", ["Tunica adventitia and tunica media", "Endocardium and myocardium", "Visceral and parietal pericardium"], "Intima = inner endothelium; media = middle smooth muscle.")]),
  u("Ascending aorta and arch",
    "<ul><li><strong>Aortic root (ascending aorta)</strong> — the <strong>coronary arteries</strong> are its first branches.</li><li><strong>Arch of the aorta</strong> begins posterior to the <strong>2nd right sternocostal joint at the level of the sternal angle</strong>.</li></ul>" +
    tbl(["Arch branch (order)", "Key relations"], [["1. Brachiocephalic trunk", "First and largest; posterior to the manubrium, anterior to the trachea, posterior to the left brachiocephalic vein; divides into right subclavian and right common carotid"], ["2. Left common carotid", "Posterior to the manubrium, slightly left of the brachiocephalic trunk; enters the neck behind the left SC joint"], ["3. Left subclavian", "From the posterior arch; ascends lateral to the trachea and passes behind the SC joint into the neck"]]) +
    mn("<strong>ABC'S</strong>: the Aortic arch gives Brachiocephalic, (left) Common carotid, (left) Subclavian — in that order."),
    ["coronary-first-branches", "aortic-arch", "brachiocephalic-trunk", "left-common-carotid", "left-subclavian"],
    [q("What is the first and largest branch of the aortic arch?", "Brachiocephalic trunk", ["Left common carotid artery", "Left subclavian artery", "Right coronary artery"], "The brachiocephalic trunk is first and largest."),
     q("The brachiocephalic trunk divides into which two arteries?", "Right subclavian and right common carotid", ["Left subclavian and left common carotid", "Right vertebral and right internal thoracic", "Right and left common carotids"], "Brachiocephalic → right subclavian + right common carotid."),
     q("What is the third branch of the aortic arch?", "Left subclavian artery", ["Left common carotid artery", "Brachiocephalic trunk", "Right subclavian artery"], "Order: brachiocephalic, left common carotid, left subclavian."),
     q("What are the first branches off the aorta?", "Coronary arteries", ["Brachiocephalic trunk", "Bronchial arteries", "Posterior intercostal arteries"], "The coronary arteries arise from the aortic root."),
     q("The arch of the aorta begins at what level?", "Posterior to the 2nd right sternocostal joint at the sternal angle", ["At the jugular notch", "At the xiphoid process", "At the T10 level"], "It begins at the sternal angle level.")],
    [q("A patient has unequal arm blood pressures; imaging shows narrowing of the arch's third branch, which ascends lateral to the trachea. Which arm will have the lower pressure?", "Left arm, from the left subclavian artery", ["Right arm, from the brachiocephalic trunk", "Both arms equally, from the left common carotid", "Right arm, from the right common carotid"], "The third arch branch is the left subclavian, which supplies the left upper limb.")]),
  u("Thoracic (descending) aorta",
    tbl(["Direction", "Branches"], [["Anterior", "Esophageal and pericardial"], ["Lateral", "Bronchial"], ["Posterolateral", "Posterior intercostal and subcostal"]]) +
    "<p>Also gives phrenic (superior phrenic) and other visceral branches. It lies in the posterior mediastinum.</p>",
    ["thoracic-aorta-branches"],
    [q("Which branches arise laterally from the thoracic aorta?", "Bronchial arteries", ["Posterior intercostal arteries", "Esophageal arteries", "Coronary arteries"], "Bronchial branches arise laterally."),
     q("Which branches arise posterolaterally from the thoracic aorta?", "Posterior intercostal and subcostal arteries", ["Bronchial arteries", "Esophageal and pericardial arteries", "Internal thoracic arteries"], "Posterior intercostals and subcostals arise posterolaterally.")],
    [q("A patient has hemoptysis from a lung lesion; interventional radiology plans to embolize the systemic arteries feeding the bronchi, which come off the thoracic aorta. Which arteries are targeted?", "Bronchial arteries", ["Pulmonary arteries", "Internal thoracic arteries", "Subcostal arteries"], "Bronchial arteries arise laterally from the thoracic aorta.")]),
  u("Superior vena cava",
    "<ul><li>Formed by the <strong>right and left brachiocephalic veins</strong>; each forms from the <strong>subclavian vein</strong> (upper extremity) + <strong>jugular vein</strong> (head and neck).</li><li>Returns blood from <strong>all structures superior to the diaphragm except the lungs and heart</strong>.</li><li>Ends at the <strong>3rd costal cartilage</strong>, entering the right atrium.</li><li>Lies on the <strong>right of the superior mediastinum</strong>, anterolateral to the trachea and posterolateral to the ascending aorta.</li></ul>",
    ["svc-formation", "svc-drainage", "svc-location"],
    [q("Which two veins join to form each brachiocephalic vein?", "Subclavian and jugular veins", ["Axillary and cephalic veins", "Azygos and hemiazygos veins", "Internal thoracic and intercostal veins"], "Subclavian (limb) + jugular (head/neck) = brachiocephalic."),
     q("The SVC returns blood from everything above the diaphragm except which organs?", "Lungs and heart", ["Brain and face", "Upper limbs", "Thoracic wall"], "All structures superior to the diaphragm except lungs and heart."),
     q("At what level does the SVC enter the right atrium?", "3rd costal cartilage", ["1st costal cartilage", "Sternal angle", "6th costal cartilage"], "It ends at the 3rd costal cartilage.")],
    [q("A patient with a right upper mediastinal tumor develops facial swelling and distended neck and arm veins. Compression of which vessel best explains this?", "Superior vena cava", ["Inferior vena cava", "Azygos vein alone", "Pulmonary veins"], "The SVC drains the head, neck, and upper limbs and lies on the right of the superior mediastinum.")]),
  u("Azygos system",
    "<ul><li>Veins on <strong>each side of the vertebrae</strong>: <strong>azygos, hemiazygos, and accessory hemiazygos</strong>.</li><li>Drains the <strong>back, thoracoabdominal walls, and mediastinal viscera</strong>.</li><li>Continuous with the <strong>ascending lumbar veins</strong> from the IVC region; large variation between people.</li></ul>",
    ["azygos-system"],
    [q("Which three veins make up the azygos system?", "Azygos, hemiazygos, and accessory hemiazygos", ["Brachiocephalic, subclavian, and jugular", "Great, middle, and small cardiac", "Internal thoracic, intercostal, and subcostal"], "Azygos, hemiazygos, accessory hemiazygos."),
     q("What regions does the azygos system drain?", "Back, thoracoabdominal walls, and mediastinal viscera", ["Head and neck only", "Lungs and heart", "Lower extremities"], "Back, thoracoabdominal walls, mediastinal viscera.")],
    [q("A patient has an obstructed IVC, yet venous blood from the lower body still reaches the heart through paravertebral veins connected to the ascending lumbar veins. Which system provides this path?", "Azygos system", ["Coronary sinus", "Portal venous system", "Pulmonary venous system"], "Ascending lumbar veins are continuous with the azygos and hemiazygos veins.")])
]),

/* ---------------- 10 ---------------- */
s("10-abdominal-vessels", "10. Major arteries and veins of the abdomen", "Objective 10. Slides 62–66, 70.", [
  u("Celiac trunk",
    "<p>The first visceral branch of the abdominal aorta (to the foregut). Three branches:</p><ul><li><strong>Left gastric</strong></li><li><strong>Splenic</strong></li><li><strong>Common hepatic</strong> → <strong>right and left proper hepatic</strong></li></ul>" +
    mn("Celiac = <strong>'Left Hand Side'</strong>: Left gastric, Hepatic, Splenic."),
    ["celiac-trunk"],
    [q("What are the three branches of the celiac trunk?", "Left gastric, splenic, and common hepatic", ["Superior mesenteric, renal, and gonadal", "Right gastric, gastroduodenal, and splenic", "Left gastric, inferior mesenteric, and splenic"], "Celiac: left gastric, splenic, common hepatic."),
     q("The common hepatic artery ultimately divides into which arteries?", "Right and left proper hepatic arteries", ["Splenic and left gastric arteries", "Superior and inferior mesenteric arteries", "Right and left renal arteries"], "Common hepatic → right and left proper hepatics.")],
    [q("A bleeding posterior gastric ulcer erodes into a large artery running along the stomach toward the spleen. Which celiac branch is it?", "Splenic artery", ["Left gastric artery", "Superior mesenteric artery", "Inferior mesenteric artery"], "The splenic artery is a celiac branch running to the spleen.")]),
  u("Other branches of the abdominal aorta",
    tbl(["Branch (top to bottom)", "Supplies"], [["Superior mesenteric", "Midgut"], ["Suprarenals and renals", "Adrenals and kidneys"], ["Testicular (ovarian), right and left", "Gonads"], ["Inferior mesenteric", "Hindgut"], ["Common iliacs", "Terminal bifurcation to the pelvis and lower limbs"]]),
    ["sma", "renal-suprarenal", "gonadal-arteries", "ima", "common-iliac-arteries"],
    [q("Which unpaired aortic branch supplies the midgut?", "Superior mesenteric artery", ["Celiac trunk", "Inferior mesenteric artery", "Renal artery"], "SMA = midgut."),
     q("Which unpaired aortic branch supplies the hindgut?", "Inferior mesenteric artery", ["Superior mesenteric artery", "Celiac trunk", "Common iliac artery"], "IMA = hindgut."),
     q("What are the terminal branches of the abdominal aorta?", "Common iliac arteries", ["External iliac arteries", "Femoral arteries", "Renal arteries"], "The aorta ends by dividing into the common iliacs."),
     q("Which paired aortic branches supply the kidneys and adrenals?", "Renal and suprarenal arteries", ["Testicular arteries", "Lumbar arteries", "Inferior phrenic arteries only"], "Renals and suprarenals."),
     q("Which paired aortic branches supply the gonads?", "Testicular (ovarian) arteries", ["Renal arteries", "Internal iliac arteries", "Inferior epigastric arteries"], "Right and left testicular/ovarian arteries.")],
    [q("An elderly patient with atrial fibrillation has severe periumbilical pain out of proportion to the exam; an embolus has lodged in the aortic branch supplying the midgut. Which artery is it?", "Superior mesenteric artery", ["Celiac trunk", "Inferior mesenteric artery", "Left gastric artery"], "The SMA supplies the midgut."),
     q("A patient has refractory hypertension; imaging shows stenosis of the paired aortic branches entering the kidneys. Which arteries are involved?", "Renal arteries", ["Suprarenal arteries", "Testicular arteries", "Common iliac arteries"], "Renal arteries are paired aortic branches to the kidneys.")]),
  u("Arteries of the abdominal wall",
    tbl(["Artery", "Source", "Key point"], [["Superior epigastric", "Internal thoracic", "Enters the rectus sheath posteriorly; supplies part of rectus abdominis; anastomoses with the inferior epigastric"], ["Musculophrenic", "Internal thoracic", "Descends along the costal margin; supplies superficial and deep abdominal wall"], ["Posterior intercostals (10th, 11th)", "Aorta", "Continue beyond the ribs between the internal oblique and transversus abdominis"], ["Inferior epigastric, deep and superficial circumflex iliac", "External iliac region (below the aorta)", "Lower abdominal wall"]]) +
    "<p>Anastomotic chain: <strong>subclavian → internal thoracic → superior epigastric ↔ inferior epigastric → external iliac</strong>.</p>",
    ["superior-epigastric", "musculophrenic", "lower-posterior-intercostals", "inferior-epigastric-circumflex-iliac", "epigastric-anastomosis"],
    [q("The superior epigastric artery is a branch of which artery?", "Internal thoracic artery", ["Inferior epigastric artery", "External iliac artery", "Abdominal aorta"], "Superior epigastric and musculophrenic both come from the internal thoracic."),
     q("Which artery descends along the costal margin to supply the abdominal wall?", "Musculophrenic artery", ["Superior epigastric artery", "Inferior epigastric artery", "Subcostal artery"], "The musculophrenic runs along the costal margin."),
     q("The superior epigastric artery anastomoses with which artery in the rectus sheath?", "Inferior epigastric artery", ["Musculophrenic artery", "Superficial circumflex iliac artery", "Splenic artery"], "Superior and inferior epigastrics anastomose."),
     q("The 10th and 11th posterior intercostal arteries continue into the abdominal wall between which muscles?", "Internal oblique and transversus abdominis", ["External oblique and internal oblique", "Rectus abdominis and transversus abdominis", "Psoas and quadratus lumborum"], "They run between the internal oblique and transversus abdominis."),
     q("The inferior epigastric and circumflex iliac arteries arise from which region?", "External iliac (below the aorta)", ["Internal thoracic", "Celiac trunk", "Superior mesenteric"], "They arise below the aorta from the external iliac region.")],
    [q("A patient with a long-standing aortic obstruction has enlarged, pulsatile vessels in the rectus sheath carrying blood from the subclavian system down to the legs. Which chain forms this collateral?", "Internal thoracic → superior epigastric → inferior epigastric → external iliac", ["Celiac → splenic → left gastric → common iliac", "Brachiocephalic → common carotid → vertebral → external iliac", "Azygos → hemiazygos → ascending lumbar → femoral"], "The subclavian–internal thoracic–epigastric–external iliac chain links upper and lower circulation."),
     q("During laparoscopic port placement lateral to the rectus muscle in the lower abdomen, a surgeon avoids an artery that runs up into the posterior rectus sheath from the external iliac. Which artery?", "Inferior epigastric artery", ["Superior epigastric artery", "Musculophrenic artery", "Inferior mesenteric artery"], "The inferior epigastric arises from the external iliac region and enters the rectus sheath.")]),
  u("Inferior vena cava and its tributaries",
    "<ul><li>Formed by the <strong>right and left common iliac veins</strong> (from each lower extremity).</li><li><strong>Ascending lumbar veins</strong> are contiguous with the <strong>azygos and hemiazygos</strong> veins.</li><li>Receives the <strong>renal veins</strong>, with suprarenal and testicular (ovarian) veins accompanying their arteries (slide 66 figure), plus multiple visceral veins (covered in the GI module).</li></ul>" +
    clar("the right testicular (ovarian) and right suprarenal veins enter the IVC directly; the left ones usually drain into the <strong>left renal vein</strong>.") + "",
    ["ivc-common-iliacs", "ascending-lumbar", "renal-gonadal-veins"],
    [q("Which veins join to form the inferior vena cava?", "Right and left common iliac veins", ["Right and left femoral veins", "Right and left renal veins", "Azygos and hemiazygos veins"], "The common iliac veins form the IVC."),
     q("The ascending lumbar veins are continuous with which venous system?", "Azygos and hemiazygos veins", ["Portal vein", "Coronary sinus", "Great saphenous vein"], "Ascending lumbar veins connect the IVC region to the azygos system."),
     q("Which large paired veins from the kidneys drain into the IVC?", "Renal veins", ["Suprarenal arteries", "Common iliac veins", "Lumbar arteries"], "The renal veins drain the kidneys into the IVC.")],
    [q("A patient develops a thrombus that begins in the left lower extremity and extends proximally to the IVC. Through which vein must it pass to reach the IVC?", "Left common iliac vein", ["Left renal vein", "Hemiazygos vein", "Inferior mesenteric vein"], "Each lower extremity drains through its common iliac vein into the IVC.")])
]),

/* ---------------- 11 ---------------- */
s("11-extremity-vessels", "11. Major arteries and veins (superficial and deep) of the extremities", "Objective 11. Slides 73–82.", [
  u("Lower-limb arteries by region",
    tbl(["Region", "Supplied by"], [["Gluteal", "Branches of the internal iliac"], ["Anterior thigh", "Branches of the femoral"], ["Medial thigh", "Branches of the femoral"], ["Posterior thigh", "Branches of the internal iliac"], ["Anterior leg", "Anterior tibial"], ["Lateral leg", "Posterior tibial and fibular"], ["Posterior leg", "Posterior tibial"], ["Foot", "Dorsalis pedis; medial and lateral plantar"]]),
    ["le-gluteal", "le-thigh", "le-leg", "le-foot"],
    [q("Which artery supplies the anterior compartment of the leg?", "Anterior tibial artery", ["Posterior tibial artery", "Fibular artery", "Popliteal artery only"], "Anterior leg = anterior tibial."),
     q("Branches of which artery supply the gluteal region?", "Internal iliac artery", ["Femoral artery", "External iliac artery", "Deep artery of the thigh"], "Gluteal = internal iliac branches."),
     q("Which arteries supply the foot?", "Dorsalis pedis and the medial and lateral plantar arteries", ["Anterior tibial and fibular only", "Popliteal and genicular arteries", "Femoral and obturator arteries"], "Foot = dorsalis pedis + medial/lateral plantar."),
     q("Which arteries supply the lateral leg?", "Posterior tibial and fibular arteries", ["Anterior tibial artery alone", "Dorsalis pedis artery", "Femoral artery"], "Lateral leg = posterior tibial and fibular."),
     q("Branches of which artery supply the anterior and medial thigh?", "Femoral artery", ["Internal iliac artery", "Popliteal artery", "Anterior tibial artery"], "Anterior and medial thigh = femoral branches.")],
    [q("Checking distal perfusion after a leg injury, a clinician palpates a pulse on the dorsum of the foot. Which artery is being palpated?", "Dorsalis pedis artery", ["Posterior tibial artery", "Fibular artery", "Lateral plantar artery"], "The dorsalis pedis supplies the dorsum of the foot.")]),
  u("Main lower-limb arterial path",
    "<p>From the slide figures: <strong>external iliac → femoral</strong> (gives the <strong>deep artery of the thigh</strong> with medial and lateral circumflex femoral branches) → passes the <strong>adductor hiatus</strong> → <strong>popliteal</strong> (behind the knee) → <strong>anterior tibial</strong> (→ dorsalis pedis) and <strong>posterior tibial</strong> (→ medial and lateral plantar), with the <strong>fibular</strong> from the posterior tibial.</p>",
    ["le-arterial-path", "popliteal-artery", "deep-artery-thigh"],
    [q("The femoral artery becomes the popliteal artery after passing through which opening?", "Adductor hiatus", ["Inguinal ligament", "Obturator foramen", "Greater sciatic foramen"], "Femoral → popliteal at the adductor hiatus."),
     q("Which artery runs behind the knee?", "Popliteal artery", ["Femoral artery", "Anterior tibial artery", "Fibular artery"], "The popliteal artery lies in the popliteal fossa."),
     q("The anterior tibial artery continues onto the foot as which artery?", "Dorsalis pedis artery", ["Medial plantar artery", "Lateral plantar artery", "Fibular artery"], "Anterior tibial → dorsalis pedis.")],
    [q("A posterior knee dislocation causes a cool, pulseless foot. Which artery, lying just behind the knee, was most likely injured?", "Popliteal artery", ["Deep artery of the thigh", "Dorsalis pedis artery", "Superficial circumflex iliac artery"], "The popliteal artery lies behind the knee and is vulnerable in knee dislocation.")]),
  u("Lower-limb superficial veins",
    tbl(["Vein", "Begins", "Ends"], [["Great saphenous", "Continuation of the medial marginal vein of the foot (dorsal venous arch); passes anterior to the medial malleolus", "Femoral vein, just distal to the inguinal ligament"], ["Small saphenous", "Continuation of the lateral marginal vein", "Vein in the popliteal fossa (popliteal vein)"]]) +
    "<p>Superficial veins lie in the <strong>subcutaneous tissue</strong>; <strong>perforating veins</strong> connect them to the deep veins.</p>",
    ["great-saphenous", "small-saphenous", "superficial-vs-deep-le"],
    [q("The great saphenous vein drains into which deep vein?", "Femoral vein", ["Popliteal vein", "External iliac vein", "Posterior tibial vein"], "The GSV ends in the femoral vein distal to the inguinal ligament."),
     q("The small saphenous vein is a continuation of which vein?", "Lateral marginal vein of the foot", ["Medial marginal vein of the foot", "Plantar venous network", "Anterior tibial vein"], "Small saphenous = lateral marginal vein continuation."),
     q("Which two veins are the superficial veins of the lower limb?", "Great and small saphenous veins", ["Femoral and popliteal veins", "Anterior and posterior tibial veins", "Plantar and dorsal veins"], "The saphenous veins are superficial.")],
    [q("A surgeon harvests a long subcutaneous vein that runs anterior to the medial malleolus and up the medial leg and thigh for a bypass graft. Which vein is it?", "Great saphenous vein", ["Small saphenous vein", "Femoral vein", "Posterior tibial vein"], "The great saphenous vein is the long medial superficial vein.")]),
  u("Lower-limb deep veins",
    tbl(["Region", "Deep veins"], [["Foot", "Plantar veins, dorsal veins"], ["Leg", "Anterior tibial, posterior tibial, fibular veins"], ["Knee", "Popliteal vein"], ["Thigh", "Femoral vein and its tributaries"]]) +
    hy("Deep veins <strong>run with the major arteries</strong> deep to the fascia — the territory of DVT."),
    ["deep-veins-le"],
    [q("Which deep vein lies at the knee?", "Popliteal vein", ["Great saphenous vein", "Small saphenous vein", "Femoral vein"], "The popliteal vein is the deep vein of the knee."),
     q("Which of these is a deep vein of the leg?", "Fibular vein", ["Great saphenous vein", "Small saphenous vein", "Dorsal venous arch"], "Deep leg veins: anterior tibial, posterior tibial, fibular."),
     q("How do deep veins of the limbs relate to the arteries?", "They run with the major arteries", ["They run only in the subcutaneous tissue", "They run with the cutaneous nerves only", "They have no relation to arteries"], "Deep veins accompany the major arteries.")],
    [q("A patient has unilateral calf swelling after a long flight; ultrasound shows thrombus in a vein accompanying an artery within the posterior calf. Which vein is a deep vein that fits?", "Posterior tibial vein", ["Small saphenous vein", "Great saphenous vein", "Lateral marginal vein"], "The posterior tibial vein is a deep leg vein that runs with its artery.")]),
  u("Upper-limb arterial path",
    "<p><strong>Subclavian → axillary</strong> at the <strong>lateral border of the 1st rib</strong> → <strong>brachial</strong> at the <strong>inferior border of teres major</strong> → <strong>radial and ulnar</strong> in the forearm → hand supplied by their anastomoses, the <strong>superficial and deep palmar arches</strong>.</p>" +
    hy("Name changes: <strong>1st rib</strong> (subclavian → axillary), <strong>teres major</strong> (axillary → brachial)."),
    ["ue-arterial-path", "palmar-arches"],
    [q("At what landmark does the subclavian artery become the axillary artery?", "Lateral border of the 1st rib", ["Inferior border of teres major", "Clavicle midpoint", "Cubital fossa"], "Subclavian → axillary at the lateral border of rib 1."),
     q("At what landmark does the axillary artery become the brachial artery?", "Inferior border of teres major", ["Lateral border of the 1st rib", "Surgical neck of the humerus", "Cubital fossa"], "Axillary → brachial at the inferior border of teres major."),
     q("Which two arteries supply the forearm and anastomose to supply the hand?", "Radial and ulnar arteries", ["Brachial and deep brachial arteries", "Axillary and subclavian arteries", "Anterior and posterior circumflex humeral arteries"], "Forearm: radial and ulnar; hand: their anastomoses (palmar arches).")],
    [q("A clinician checks the pulse on the lateral wrist before an arterial blood gas. Which forearm artery is palpated?", "Radial artery", ["Ulnar artery", "Brachial artery", "Anterior interosseous artery"], "The radial artery runs on the lateral (thumb) side of the wrist.")]),
  u("Upper-limb arterial branches",
    tbl(["Parent", "Branches"], [["Subclavian", "Internal thoracic, thyrocervical, suprascapular (may arise from thyrocervical)"], ["Axillary", "Superior thoracic, thoraco-acromial, lateral thoracic, circumflex humeral"], ["Brachial", "Deep brachial, superior ulnar collateral, inferior ulnar collateral"]]),
    ["subclavian-branches", "axillary-branches", "brachial-branches"],
    [q("Which is a branch of the subclavian artery?", "Internal thoracic artery", ["Lateral thoracic artery", "Deep brachial artery", "Circumflex humeral artery"], "Subclavian: internal thoracic, thyrocervical, suprascapular."),
     q("Which is a branch of the axillary artery?", "Thoraco-acromial artery", ["Thyrocervical trunk", "Inferior ulnar collateral artery", "Internal thoracic artery"], "Axillary: superior thoracic, thoraco-acromial, lateral thoracic, circumflex humeral."),
     q("Which is a branch of the brachial artery?", "Deep brachial artery", ["Lateral thoracic artery", "Suprascapular artery", "Superior thoracic artery"], "Brachial: deep brachial, superior and inferior ulnar collateral.")],
    [q("A surgical neck fracture of the humerus threatens arteries that wrap around the bone near the shoulder. These arteries are branches of which parent artery?", "Axillary artery", ["Subclavian artery", "Brachial artery", "Radial artery"], "The circumflex humeral arteries are axillary branches.")]),
  u("Upper-limb superficial veins",
    "<ul><li>Main superficial veins: <strong>cephalic</strong> (lateral; runs in the <strong>deltopectoral groove</strong>) and <strong>basilic</strong> (medial).</li><li>The <strong>median cubital vein</strong> links them across the front of the elbow (slide figure).</li><li>Hand superficial veins: <strong>dorsal digital, palmar digital, dorsal venous network</strong>.</li><li><strong>Perforating veins</strong> connect superficial and deep veins.</li></ul>",
    ["cephalic-vein", "basilic-vein", "median-cubital", "hand-superficial-veins", "perforating-veins"],
    [q("Which superficial upper-limb vein runs in the deltopectoral groove?", "Cephalic vein", ["Basilic vein", "Brachial vein", "Axillary vein"], "The cephalic vein lies in the deltopectoral groove."),
     q("What are the two main superficial veins of the upper limb?", "Cephalic and basilic veins", ["Brachial and axillary veins", "Radial and ulnar veins", "Subclavian and jugular veins"], "Cephalic and basilic are the main superficial veins."),
     q("Which vessels connect the superficial and deep veins of the limbs?", "Perforating veins", ["Median cubital veins only", "Palmar arches", "Venae comitantes"], "Perforating veins communicate between superficial and deep systems."),
     q("Which superficial vein crosses the front of the elbow connecting the cephalic and basilic veins?", "Median cubital vein", ["Brachial vein", "Median antebrachial vein", "Ulnar vein"], "The median cubital vein links cephalic and basilic.")],
    [q("A phlebotomist draws blood from the prominent superficial vein crossing the anterior elbow between the lateral and medial superficial veins. Which vein is used?", "Median cubital vein", ["Brachial vein", "Radial vein", "Axillary vein"], "The median cubital vein joins the cephalic and basilic veins at the cubital fossa.")]),
  u("Upper-limb deep veins",
    tbl(["Region", "Deep veins"], [["Arm and axilla", "Brachial veins, axillary vein, subclavian vein"], ["Forearm", "Anterior and posterior interosseous veins, ulnar veins, radial veins"], ["Hand", "Superficial and deep venous palmar arches, dorsal and palmar metacarpal veins"]]),
    ["deep-veins-ue-arm", "deep-veins-ue-forearm", "deep-veins-ue-hand"],
    [q("Which of these is a deep vein of the arm?", "Brachial vein", ["Cephalic vein", "Basilic vein", "Median cubital vein"], "Arm deep veins: brachial, axillary, subclavian."),
     q("Which of these is a deep vein of the forearm?", "Anterior interosseous vein", ["Cephalic vein", "Basilic vein", "Dorsal venous network"], "Forearm deep veins: interosseous, ulnar, radial."),
     q("Which are deep veins of the hand per the lecture?", "Venous palmar arches and metacarpal veins", ["Dorsal digital veins", "Dorsal venous network", "Palmar digital veins"], "Deep hand veins: superficial and deep venous palmar arches, dorsal and palmar metacarpal veins.")],
    [q("A patient with a long-standing PICC line develops arm swelling; ultrasound shows thrombus in the deep vein that continues into the subclavian vein. Which vein is it?", "Axillary vein", ["Cephalic vein", "Basilic vein", "Median cubital vein"], "The axillary vein is a deep arm vein continuing as the subclavian.")])
])

];
})();
