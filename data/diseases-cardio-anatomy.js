/*
  Cardio Part 1 Diseases tool: Cardiovascular Anatomy lecture (Palmer).
  Same shape as data/diseases-cardio-valvular.js; uses window.DiseaseContent helpers.

  Sources: source-material/cardio-part-1/text/cardio-anatomy.md (slides + notes)
  and the "Cardiology Anatomy Objectives" block of objectives.txt.

  This is an anatomy lecture, not a disease lecture. It names only a few
  clinical conditions, each used to explain a structure: septal defects
  (fossa ovalis / membranous septum), pericardial effusion (oblique sinus),
  and diseased "stiff or leaky" valves heard as murmurs (valve support and
  auscultation points). Each entry teaches the anatomy link and the bedside
  point; the deck teaches no workup or treatment, so none is given here.

  Question ids are "<disease id>|<index>" and progress is saved against them:
  only APPEND questions to a disease; never insert, delete, or reorder.
*/
(function () {
  "use strict";

  var H = window.DiseaseContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, S = H.S, Q = H.Q, D = H.D, L = H.L;

  var auscultationTable = Tbl(["Valve", "Surface projection (where the valve sits)", "Auscultation point (where you listen)", "Heart sound"], [
    ["<strong>Aortic</strong>", "Behind the left half of the sternum opposite the <strong>3rd ICS</strong>", "<strong>Right 2nd ICS</strong> at the sternal border", "Closure at start of diastole → <strong>S2</strong> (“dub”)"],
    ["<strong>Pulmonic</strong>", "Behind the medial end of the <strong>left 3rd costal cartilage</strong>", "<strong>Left 2nd ICS</strong> at the sternal border", "Shuts just after the aortic valve → part of <strong>S2</strong>"],
    ["<strong>Tricuspid</strong>", "Behind the right half of the sternum at the <strong>4th–5th ICS</strong>", "<strong>Lower left</strong> sternal body / left lower costal margin", "Closure → <strong>S1</strong> (“lub”)"],
    ["<strong>Mitral</strong>", "Behind the left half of the sternum at the <strong>4th costal cartilage</strong>", "<strong>Apex: left 5th ICS, midclavicular line</strong>", "Closes slightly before tricuspid → <strong>S1</strong>"]
  ]) + HY("Blood carries sound in the direction of its flow, so each valve is heard downstream of where it actually sits — not over its surface projection.");

  window.CARDIO_DISEASES_ANATOMY = L("cardio-anatomy", "Cardiovascular Anatomy", [

    // ------------------------------------------------------------------
    D("anat-septal-defects", "Septal Defects (ASD and VSD)", "Holes in the wall between the right and left heart. The lecture places an ASD at the fossa ovalis (foramen ovale that failed to close) and a VSD in the upper membranous part of the interventricular septum, right where the AV bundle runs.", [
      S("overview", "What the Lecture Says", "<p>The anatomy deck names two septal defects, each tied to a landmark:</p>" + Tbl(["Defect", "Septum", "Anatomic site", "Why it happens there"], [
        ["<strong>Atrial septal defect (ASD)</strong>", "Interatrial septum", "<strong>Fossa ovalis</strong> in the right atrium", "The fossa ovalis is the remnant of the embryonic <strong>foramen ovale</strong>; an ASD is left if it <strong>fails to close</strong>"],
        ["<strong>Ventricular septal defect (VSD)</strong>", "Interventricular septum (IVS)", "<strong>Upper membranous</strong> part of the IVS", "The IVS is mostly muscle, but its upper portion is thin and membranous — the site of a potential VSD"]
      ]) + HY("ASD → fossa ovalis (unclosed foramen ovale). VSD → membranous (upper) interventricular septum.")),
      S("anatomy", "Anatomy Link", "<p><strong>Chambers on each side of the defect</strong></p><ul><li><strong>Right atrium</strong> receives the SVC, IVC, and the coronary sinus; it opens into the right ventricle.</li><li><strong>Left atrium</strong> receives the <strong>4 pulmonary veins</strong> (2 superior, 2 inferior) and has a slightly thicker wall than the RA.</li><li><strong>Left ventricle</strong> walls are <strong>2–3 times thicker</strong> than the right ventricle’s.</li></ul><p><strong>The septum carries the conduction system</strong></p><ul><li>The <strong>AV bundle (bundle of His)</strong> is the only electrical connection between atria and ventricles. It passes through the fibrous skeleton and <strong>along the membranous part of the IVS</strong>.</li><li>At the junction of the membranous and muscular IVS it divides into the <strong>right and left bundle branches</strong>, which run down each side of the muscular septum to the Purkinje fibers.</li><li>The <strong>moderator band</strong> (septomarginal trabecula) runs from the IVS to the anterior papillary muscle of the RV and carries part of the right bundle.</li></ul><p><strong>Septal blood supply</strong></p>" + Tbl(["Part of IVS", "Artery"], [
        ["Anterior 2/3 (including the AV bundle)", "<strong>Left anterior descending (LAD)</strong> from the LCA"],
        ["Posterior 1/3", "Interventricular septal branches of the <strong>posterior interventricular (PIV)</strong> artery from the RCA"]
      ])),
      S("key", "Key Point", HY("The membranous septum is both the classic VSD site and the path of the AV bundle — a defect or repair there sits right next to the heart’s only atrioventricular conduction connection.") + Mn("Oval hole up top, thin wall below", "Fossa OVALis → ASD (foramen ovale stayed open). Upper, thin MEMBRANOUS septum → VSD."))
    ], [
      Q("overview", "Where in the heart does the anatomy lecture place an atrial septal defect?", ["At the fossa ovalis", "At the membranous interventricular septum", "At the coronary sinus opening", "At the conus arteriosus"], 0, "The fossa ovalis in the right atrium is the remnant of the foramen ovale and is the site of an ASD if it fails to close."),
      Q("overview", "The fossa ovalis is the remnant of which embryonic structure?", ["Foramen ovale", "Ductus arteriosus", "Septomarginal trabecula", "Coronary sulcus"], 0, "The fossa ovalis is what remains of the fetal foramen ovale; failure to close leaves an ASD."),
      Q("overview", "Which part of the interventricular septum is the usual site of a ventricular septal defect?", ["The upper membranous portion", "The lower muscular portion near the apex", "The moderator band", "The posterior third supplied by the RCA"], 0, "The IVS is mostly muscle, but its upper membranous portion is the site of a potential VSD."),
      Q("anatomy", "During repair of a membranous VSD, which conduction structure runs along that part of the septum and is at risk?", ["The AV bundle (bundle of His)", "The SA node", "The internodal pathways", "The left marginal artery"], 0, "The AV bundle passes through the fibrous skeleton and along the membranous IVS before dividing into the bundle branches."),
      Q("anatomy", "Where does the AV bundle divide into right and left bundle branches?", ["At the junction of the membranous and muscular interventricular septum", "Inside the AV node", "At the apex of the left ventricle", "At the opening of the coronary sinus"], 0, "The AV bundle divides at the junction of the membranous and muscular parts of the IVS; the branches then run down each side of the muscular septum."),
      Q("anatomy", "An ASD at the fossa ovalis connects which two chambers?", ["Right atrium and left atrium", "Right ventricle and left ventricle", "Right atrium and right ventricle", "Left atrium and left ventricle"], 0, "The fossa ovalis is in the interatrial septum, so an ASD there connects the two atria."),
      Q("anatomy", "Which artery supplies the anterior two-thirds of the interventricular septum, including the AV bundle?", ["Left anterior descending artery", "Posterior interventricular artery", "Right marginal artery", "Circumflex artery"], 0, "The LAD supplies the anterior 2/3 of the IVS (including the AV bundle); septal branches of the PIV supply the posterior 1/3."),
      Q("anatomy", "Which right ventricular structure connects the interventricular septum to the anterior papillary muscle and carries part of the right bundle?", ["Moderator band (septomarginal trabecula)", "Conus arteriosus", "Chordae tendineae", "Crista terminalis"], 0, "The moderator band prevents RV overdistension and contains part of the right AV bundle.")
    ]),

    // ------------------------------------------------------------------
    D("anat-pericardial-effusion", "Pericardial Effusion", "Excess fluid in the pericardial cavity, the potential space between the parietal and visceral serous layers. The lecture’s anatomy point: effusion fluid builds up in the oblique pericardial sinus, a posterior recess where it can be seen on imaging.", [
      S("overview", "What the Lecture Says", "<p>The pericardial cavity normally holds only <strong>~30–50 mL</strong> of pericardial fluid, made by the serous layer so the heart can contract smoothly. In <strong>pericardial effusion</strong>, fluid builds up in the <strong>oblique pericardial sinus</strong> — a posterior, pocket-like recess — and <strong>can be seen on imaging</strong>.</p>" + HY("Effusion fluid collects in the posterior OBLIQUE sinus. The TRANSVERSE sinus is the surgeon’s passage for clamping the aorta and pulmonary trunk.")),
      S("anatomy", "Anatomy Link: Pericardium", Tbl(["Layer", "Details"], [
        ["<strong>Fibrous pericardium</strong>", "Tough outer sac; blends with the roots of the great vessels and the <strong>central tendon of the diaphragm</strong> for stability"],
        ["<strong>Serous — parietal layer</strong>", "Lines the inside of the fibrous pericardium"],
        ["<strong>Serous — visceral layer</strong>", "Covers the heart = the <strong>epicardium</strong>"],
        ["<strong>Pericardial cavity</strong>", "<strong>Potential space</strong> between parietal and visceral layers; holds ~30–50 mL of lubricating fluid"]
      ]) + Tbl(["Sinus", "Where", "Clinical relevance"], [
        ["<strong>Transverse pericardial sinus</strong>", "Passage separating the ascending aorta and pulmonary trunk from the SVC, IVC, and pulmonary veins", "Lets a surgeon isolate and <strong>clamp the ascending aorta and pulmonary trunk</strong> during cardiac surgery"],
        ["<strong>Oblique pericardial sinus</strong>", "Posterior, pocket-like recess", "<strong>Fluid builds up here in pericardial effusion</strong>; seen on imaging"]
      ]) + "<p><strong>Location:</strong> the pericardium, heart, and roots of the great vessels sit in the <strong>middle mediastinum</strong> (the largest division of the inferior mediastinum), posterior to the sternum, costal cartilages, and anterior ends of ribs 3–5; about 2/3 of the heart lies left of the midsternal line.</p>"),
      S("key", "Key Point", Mn("Oblique = Overflow", "Excess pericardial fluid pools in the Oblique sinus behind the heart; the Transverse sinus is for the surgeon’s clamp.") + "<p>Normal fluid volume is small (30–50 mL), so the cavity is only a <strong>potential</strong> space until fluid accumulates.</p>")
    ], [
      Q("overview", "Echo shows a pericardial effusion pooling in a recess behind the heart. Which pericardial sinus is this?", ["Oblique pericardial sinus", "Transverse pericardial sinus", "Coronary sinus", "Aortic sinus"], 0, "The oblique sinus is the posterior pocket-like recess where effusion fluid builds up and can be seen on imaging."),
      Q("overview", "About how much pericardial fluid does the pericardial cavity normally contain?", ["30–50 mL", "5–10 mL", "150–200 mL", "300–500 mL"], 0, "The serous layer produces about 30–50 mL of pericardial fluid to let the heart contract smoothly."),
      Q("anatomy", "Which layer produces pericardial fluid?", ["Serous pericardium", "Fibrous pericardium", "Myocardium", "Endocardium"], 0, "The serous layer (parietal and visceral portions) produces the pericardial fluid; the fibrous layer provides stability."),
      Q("anatomy", "Between which two layers does pericardial effusion fluid accumulate?", ["Parietal and visceral serous pericardium", "Fibrous pericardium and parietal serous pericardium", "Epicardium and myocardium", "Myocardium and endocardium"], 0, "The pericardial cavity is the potential space between the parietal layer (lining the fibrous pericardium) and the visceral layer (the epicardium)."),
      Q("anatomy", "The visceral layer of serous pericardium is the same as which layer of the heart wall?", ["Epicardium", "Endocardium", "Myocardium", "Fibrous pericardium"], 0, "The visceral serous pericardium covers the heart and forms the epicardium."),
      Q("anatomy", "During cardiac surgery, which pericardial sinus lets the surgeon isolate and clamp the ascending aorta and pulmonary trunk?", ["Transverse pericardial sinus", "Oblique pericardial sinus", "Coronary sinus", "Costodiaphragmatic recess"], 0, "The transverse sinus separates the ascending aorta and pulmonary trunk from the SVC, IVC, and pulmonary veins, allowing a clamp to be passed."),
      Q("anatomy", "The fibrous pericardium blends with which structures for stability?", ["Roots of the great vessels and the central tendon of the diaphragm", "The sternum and xiphoid process", "The esophagus and trachea", "The thymus and internal thoracic vessels"], 0, "The fibrous layer blends with the roots of the great vessels and the central tendon of the diaphragm."),
      Q("anatomy", "In which division of the mediastinum do the pericardium and heart lie?", ["Middle inferior mediastinum", "Superior mediastinum", "Anterior inferior mediastinum", "Posterior inferior mediastinum"], 0, "The middle (largest) division of the inferior mediastinum contains the pericardium, pericardial fluid, heart, and roots of the great vessels.")
    ]),

    // ------------------------------------------------------------------
    D("anat-valve-disease-murmurs", "Diseased Valves and Murmurs (Anatomy)", "Valves that become stiff or leaky close poorly, and the turbulent flow is heard as a murmur. The anatomy lecture explains what normally keeps valves competent and why each valve is heard downstream of where it sits.", [
      S("overview", "What the Lecture Says", "<ul><li><strong>Diseased valves become stiff or leaky.</strong></li><li>Diseased or worn-out cusps <strong>don’t close efficiently</strong>, and <strong>murmurs</strong> are detected from the <strong>turbulent flow</strong> of moving blood.</li><li>Healthy aortic and pulmonary cusps catch backward-flowing blood and <strong>seal together</strong> to prevent backflow.</li><li>AV valves are kept from being pushed up into the atrium (<strong>prolapse</strong>) by <strong>chordae tendineae and papillary muscles</strong>.</li></ul>"),
      S("anatomy", "Anatomy Link: Valve Support", Tbl(["Structure", "Role"], [
        ["<strong>AV valves</strong> (tricuspid, mitral)", "Attached to papillary muscles by <strong>chordae tendineae</strong>, which keep the leaflets from <strong>prolapsing</strong> into the atrium; LV papillary muscles are larger than the RV’s"],
        ["<strong>Semilunar valves</strong> (aortic, pulmonic)", "Cusps catch backflow and seal together"],
        ["<strong>Fibrous skeleton</strong>", "Four connective-tissue rings that <strong>keep valve orifices patent</strong> and prevent overdistension, anchor the leaflets/cusps and myocardium, and <strong>electrically insulate</strong> atria from ventricles"]
      ]) + "<p>The tricuspid and mitral closures make <strong>S1</strong>; the aortic and pulmonic closures make <strong>S2</strong>. The mitral valve closes slightly before the tricuspid, and the pulmonic slightly after the aortic.</p>"),
      S("bedside", "Where to Listen", auscultationTable + "<p>The <strong>apex</strong> (left 5th ICS, slightly medial to the MCL, ~9 cm from midline) is formed by the LV; mitral closure sounds are maximal here.</p>"),
      S("key", "Key Point", HY("Stiff or leaky valve → turbulent flow → murmur. Listen where the blood carries the sound, not over the valve itself.") + Mn("All Physicians Take Money", "Aortic right 2nd ICS, Pulmonic left 2nd ICS, Tricuspid left lower sternal border (4th–5th), Mitral left 5th ICS MCL (apex)."))
    ], [
      Q("overview", "According to the anatomy lecture, how are murmurs from diseased valves produced?", ["Turbulent blood flow past cusps that don’t close efficiently", "Vibration of the fibrous pericardium", "Contraction of the papillary muscles", "Closure of healthy semilunar cusps"], 0, "Diseased or worn-out cusps close poorly, and the turbulent flow of moving blood is heard as a murmur."),
      Q("anatomy", "Which structures keep the AV valve leaflets from being pushed up into the atrium (prolapse)?", ["Chordae tendineae and papillary muscles", "The moderator band and conus arteriosus", "Pectinate muscles", "The coronary sulcus"], 0, "AV valves are anchored to the myocardium by chordae tendineae and papillary muscles, which prevent prolapse into the atria."),
      Q("anatomy", "Which function of the fibrous skeleton helps keep the valve orifices from being overly distended?", ["It forms four rings that keep AV and semilunar orifices patent", "It produces pericardial fluid", "It conducts impulses from the atria to the ventricles", "It forms the moderator band"], 0, "The fibrous skeleton’s four rings keep the orifices patent, prevent overdistension, anchor the valves and myocardium, and insulate atria from ventricles electrically."),
      Q("bedside", "A patient has a harsh systolic murmur from a diseased aortic valve. Where is it best heard?", ["Right 2nd ICS at the sternal border", "Left 2nd ICS at the sternal border", "Left 5th ICS at the midclavicular line", "Lower left sternal border"], 0, "The aortic valve sits opposite the 3rd ICS but is auscultated at the right 2nd ICS sternal border, in the direction of blood flow."),
      Q("bedside", "Where is the mitral valve best auscultated?", ["Left 5th ICS at the midclavicular line (apex)", "Behind the left half of the sternum at the 4th costal cartilage", "Right 2nd ICS at the sternal border", "Left 2nd ICS at the sternal border"], 0, "The mitral valve sits at the 4th costal cartilage but is heard at the apex, left 5th ICS MCL. The 4th costal cartilage is its surface projection."),
      Q("bedside", "Why is each heart valve auscultated at a point different from its surface projection?", ["Blood carries the sound in the direction of its flow", "The sternum blocks all sound over the valves", "The valves move to new positions during systole", "Sound travels backward toward the atria"], 0, "Auscultation areas follow the direction of blood flow, not the exact valve position."),
      Q("bedside", "Where is the pulmonic valve best heard?", ["Left 2nd ICS at the sternal border", "Right 2nd ICS at the sternal border", "Left 3rd costal cartilage behind the sternum", "Lower left sternal border"], 0, "The pulmonic valve projects behind the left 3rd costal cartilage but is heard at the left 2nd ICS sternal border."),
      Q("bedside", "Where is the tricuspid valve best heard?", ["Lower left sternal border", "Right 2nd ICS at the sternal border", "Left 5th ICS at the midclavicular line", "Left 2nd ICS at the sternal border"], 0, "The tricuspid valve projects behind the sternum at the 4th–5th ICS and is heard at the lower left sternal body / left lower costal margin."),
      Q("bedside", "Closure of which valves produces the first heart sound (S1)?", ["Mitral and tricuspid", "Aortic and pulmonic", "Mitral and aortic", "Tricuspid and pulmonic"], 0, "S1 (“lub”) is AV valve closure: mitral slightly before tricuspid. S2 (“dub”) is aortic then pulmonic closure."),
      Q("bedside", "Which heart chamber forms the apex, where mitral closure sounds are loudest?", ["Left ventricle", "Right ventricle", "Left atrium", "Right atrium"], 0, "The apex is the blunt rounded end formed by the LV, at the left 5th ICS slightly medial to the MCL.")
    ])
  ]);
}());
