/*
  Cardio Part 1 Concepts: Cardiovascular Anatomy (Palmer).
  Only the genuine mechanisms in the anatomy deck; pure recall stays in
  data/cardio-anatomy.js. Sources: source-material/cardio-part-1/text/
  cardio-anatomy.md (slides 18-56), with links to the Physiology and H&P decks.
  Items marked "Clarification (standard physiology):" are explanatory glue the
  slides imply but do not state.

  Question ids are "<concept id>|<index>": only APPEND questions to a concept;
  never insert, delete, or reorder. `correct` is zero-based (always 0 here;
  the engine shuffles answer order).
*/
(function () {
  "use strict";

  var H = window.DiseaseContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, S = H.S, Q = H.Q, D = H.D, L = H.L;
  var CL = "<p><em>Clarification (standard physiology):</em> ";

  window.CARDIO_CONCEPTS_ANATOMY = L("cardio-anatomy", "Cardiovascular Anatomy", [

    // ------------------------------------------------------------------
    D("anat-sound-follows-flow", "Why valves are heard downstream of where they sit",
      "Blood carries a valve's sound in the direction it flows, so each auscultation point sits downstream of the valve's true position.",
      [
        S("idea", "The idea",
          "<p>All four valves are crowded together behind the sternum at about the 3rd&ndash;5th rib level. If you put your stethoscope right over them, you would be listening through bone to four valves at once.</p>" +
          "<p>The slides give the fix: <strong>blood carries the sound in the direction of its flow</strong>. So you listen where the blood goes <em>after</em> it passes the valve, not where the valve sits. The lecture marks the true position with an <strong>O</strong> (surface projection) and the listening spot with an <strong>X</strong> (auscultation point).</p>" +
          "<p>Think of shouting into a hose: the sound comes out where the water comes out.</p>" +
          Tbl(["Valve", "Sits (O)", "Blood flows", "Heard (X)"], [
            ["<strong>Aortic</strong>", "Behind the sternum opposite the 3rd ICS", "Up the ascending aorta, to the right", "<strong>Right 2nd ICS</strong>, sternal border"],
            ["<strong>Pulmonic</strong>", "Left of the sternum opposite the 3rd intercostal junction", "Up the pulmonary trunk", "<strong>Left 2nd ICS</strong>, sternal border"],
            ["<strong>Tricuspid</strong>", "Behind the sternum opposite the 4th&ndash;5th intercostal junction", "Down into the right ventricle", "<strong>Lower left sternal border</strong>"],
            ["<strong>Mitral</strong>", "Left of the 4th intercostal junction", "Down into the left ventricle, toward the apex", "<strong>Apex</strong>: left 5th ICS, midclavicular line"]
          ])),
        S("chain", "Cause → effect",
          "<ol class=\"concept-chain\">" +
          "<li>A valve closes, or blood rushes through it.</li>" +
          "<li>The vibration is carried along by the moving blood.</li>" +
          "<li>The blood, and the sound, travel into the next chamber or vessel downstream.</li>" +
          "<li>You hear it best on the chest wall over that downstream structure: the auscultation point (X), not the valve itself (O).</li>" +
          "</ol>" +
          Tbl(["Valve type", "Downstream direction", "So the X is…"], [
            ["Semilunar (aortic, pulmonic)", "<strong>Up</strong> into the great vessels", "<strong>Higher</strong> than the valve: 2nd ICS instead of 3rd"],
            ["AV (tricuspid, mitral)", "<strong>Down</strong> into the ventricles", "<strong>Lower</strong> than the valve: lower sternal border or apex"]
          ]) +
          Mn("Semilunar up, AV down", "The semilunar valves pump blood up into the great vessels, so they are heard higher. The AV valves fill the ventricles below them, so they are heard lower.") +
          HY("Listen downstream: the auscultation areas follow the direction of blood flow, not the exact position of the valve.")),
        S("bedside", "Why it matters clinically",
          "<p>This is why the H&amp;P lecture's auscultation fields are where they are: right 2nd ICS (aortic), left 2nd ICS (pulmonic), lower left sternal border (tricuspid), and apex (mitral).</p>" +
          "<ul><li>The apex is formed by the <strong>left ventricle</strong> at the left 5th ICS just medial to the MCL. Mitral closure sounds are maximal there, so <strong>S1 is best heard at the apex</strong>.</li>" +
          "<li>S2 is semilunar closure, so it is best heard up at the base (left 2nd ICS in the H&amp;P lecture).</li>" +
          "<li>Diseased or worn cusps let blood flow turbulently, and the murmur is detected by that turbulent flow. The moving blood carries that sound downstream too.</li></ul>"),
        S("traps", "Common traps",
          "<ul><li><strong>Listening over the valve itself.</strong> The surface projection (O) is behind the sternum, where the valves overlap. The listening point (X) is downstream.</li>" +
          "<li><strong>\"The aortic area is on the left because the heart is on the left.\"</strong> The aortic valve is heard at the <strong>right</strong> 2nd ICS, because the ascending aorta carries blood up and to the right.</li>" +
          "<li><strong>Mixing up the two 2nd ICS spots.</strong> Right 2nd = aortic; left 2nd = pulmonic. Same level, opposite sides.</li>" +
          "<li><strong>\"Mitral is heard at the left 4th ICS.\"</strong> That is where it sits. It is heard at the apex, one space lower and out at the MCL.</li></ul>")
      ],
      [
        Q("chain", "The aortic valve lies behind the sternum opposite the 3rd ICS. Why is it auscultated at the right 2nd ICS?",
          ["Blood carries the sound in the direction of flow, up the ascending aorta", "The valve actually sits at the right 2nd ICS", "Sound travels backward against flow toward the left ventricle", "The sternum blocks all sound below the 2nd ICS"], 0,
          "Sound follows the flow: aortic blood travels up and to the right in the ascending aorta, so the X sits above and right of the O."),
        Q("idea", "The mitral valve's surface projection is left of the 4th intercostal junction. Where is it best heard, and why?",
          ["At the apex (left 5th ICS, MCL), because blood flows down into the left ventricle toward the apex", "At the left 2nd ICS, because blood flows up into the pulmonary trunk", "Directly over the left 4th intercostal junction, because that is where the valve sits", "At the right 2nd ICS, because mitral blood leaves through the aorta"], 0,
          "Blood leaving the left atrium flows down into the LV, which forms the apex, so the mitral sound is carried there."),
        Q("chain", "Compared with where they actually sit, the semilunar valves are heard ___ and the AV valves are heard ___.",
          ["Higher (toward the great vessels); lower (toward the ventricles)", "Lower; higher", "Higher; higher", "Exactly over the valve; exactly over the valve"], 0,
          "Semilunar flow goes up into the aorta and pulmonary trunk; AV flow goes down into the ventricles. The sound goes with it."),
        Q("chain", "The tricuspid valve sits behind the sternum near the 4th–5th intercostal junction. Where is it auscultated?",
          ["Lower left sternal border, as blood flows into the right ventricle", "Right 2nd ICS, as blood flows into the aorta", "The apex, as blood flows into the left ventricle", "Behind the right sternum at the 4th–5th junction, exactly over the valve"], 0,
          "Tricuspid flow enters the RV, which forms most of the anterior surface, so the sound is picked up at the lower left sternal border."),
        Q("bedside", "A student places the stethoscope over the sternum at the 3rd ICS to evaluate the aortic valve. What is the best correction?",
          ["Move to the right 2nd ICS, downstream along the ascending aorta", "Move to the apex, where the aortic valve is loudest", "Stay there; that is the aortic auscultation point", "Move to the left 4th ICS, below the valve"], 0,
          "The 3rd ICS behind the sternum is the aortic valve's surface projection (O). Its auscultation point (X) is downstream at the right 2nd ICS."),
        Q("bedside", "Where is S1 (mitral and tricuspid closure) best heard, and why?",
          ["At the apex, because mitral closure sound is carried into the LV toward the apex", "At the right 2nd ICS, because S1 is carried up the aorta", "At the left 2nd ICS, because S1 is carried up the pulmonary trunk", "At the suprasternal notch, because sound rises"], 0,
          "AV valve sound travels down into the ventricles; the LV forms the apex, where mitral closure is maximal."),
        Q("traps", "Why is the aortic auscultation area on the RIGHT side of the sternum even though most of the heart is on the left?",
          ["The ascending aorta carries blood, and the sound, up and to the right from the valve", "The aortic valve lies to the right of the sternum", "The pulmonic valve drowns out the left side", "Sound reflects off the arch of the aorta to the right"], 0,
          "The valve sits behind the sternum, but its outflow (the ascending aorta) heads up and right, so that is where the sound arrives."),
        Q("bedside", "Turbulent flow through a diseased pulmonic valve produces a murmur. Where would you expect to hear it best?",
          ["Left 2nd ICS at the sternal border, downstream in the pulmonary trunk", "Right 2nd ICS, downstream in the aorta", "The apex, downstream in the left ventricle", "Lower left sternal border, upstream in the right atrium"], 0,
          "Murmurs come from turbulent flow and are carried with the blood; pulmonic outflow goes up the pulmonary trunk to the left 2nd ICS.")
      ]),

    // ------------------------------------------------------------------
    D("anat-fibrous-skeleton", "The fibrous skeleton: one electrical door between atria and ventricles",
      "The fibrous skeleton insulates the atria from the ventricles, so every impulse must pass through the AV node and bundle of His.",
      [
        S("idea", "The idea",
          "<p>Between the atria and the ventricles is a sheet of thick connective tissue: <strong>four rings</strong> that hold the four valves. This is the <strong>fibrous skeleton</strong>.</p>" +
          "<p>It has two jobs. <strong>Mechanical:</strong> it keeps the valve openings patent and stops them from being overstretched by the volume of blood pumping through, and it anchors the valve leaflets and the heart muscle. <strong>Electrical:</strong> it is an <strong>insulator</strong>. Atrial muscle and ventricular muscle are separated by it, so they conduct independently.</p>" +
          "<p>That means the SA node's signal cannot simply spread from atrial muscle into ventricular muscle. There is exactly one door: the <strong>AV bundle (bundle of His)</strong>, which passes through the fibrous skeleton. Think of a wall with a single doorway &mdash; everyone has to line up and go through the AV node and His bundle.</p>"),
        S("chain", "Cause → effect",
          "<ol class=\"concept-chain\">" +
          "<li>The SA node (junction of SVC and right atrium) fires.</li>" +
          "<li>The signal spreads through the walls of the right atrium to the AV node (posteroinferior interatrial septum, near the coronary sinus opening).</li>" +
          "<li>The fibrous skeleton blocks any other route into the ventricles.</li>" +
          "<li>The signal goes through the AV bundle (His), the only connection, which passes through the skeleton along the membranous septum.</li>" +
          "<li>It splits into right and left bundle branches on each side of the muscular septum.</li>" +
          "<li>Purkinje fibers carry it into each ventricular wall and the septum, and the ventricles contract.</li>" +
          "</ol>" +
          "<p>The Physiology lecture adds the payoff: depolarization is <strong>very slow</strong> through the AV junctional fibers, which <strong>delays depolarization of the ventricles</strong>. Because there is only one door, that slow door sets the timing.</p>" +
          Tbl(["If…", "Then…"], [
            ["The skeleton insulates normally", "Atria and ventricles conduct independently; the only path is AV node → His → bundle branches → Purkinje"],
            ["The AV node or bundle is damaged", "There is no back door, so the atrial signal cannot reach the ventricles. Per Physiology, lower tissue can fire on its own but slowly (AV node 40&ndash;60/min; Purkinje 15&ndash;40/min)"]
          ]) +
          HY("The fibrous skeleton is the insulator; the AV bundle is the only electrical connection between atria and ventricles.")),
        S("bedside", "Why it matters clinically",
          "<ul><li><strong>Blood supply to the door:</strong> the AV nodal artery comes from the RCA in about 80% of people, and the LCA supplies the anterior 2/3 of the septum including the AV bundle. A coronary problem can therefore become an electrical problem (see the coronary territories concept).</li>" +
          "<li><strong>Septal defects:</strong> the AV bundle runs along the <strong>membranous</strong> part of the septum &mdash; the same upper, membranous area that is the site of a potential VSD.</li>" +
          "<li><strong>Moderator band:</strong> it carries part of the right AV bundle across the right ventricle to the anterior papillary muscle.</li>" +
          "<li><strong>H&amp;P link:</strong> the history asks \"Is the electrical system of the heart functioning normally?\" Palpitations and syncope from arrhythmias (especially ventricular tachycardia and bradyarrhythmias) belong to this question.</li></ul>"),
        S("traps", "Common traps",
          "<ul><li><strong>\"The impulse spreads straight from atrial muscle into ventricular muscle.\"</strong> It cannot; the fibrous skeleton separates them.</li>" +
          "<li><strong>\"The fibrous skeleton is only for holding the valves.\"</strong> It also anchors the myocardium and is the electrical insulator.</li>" +
          "<li><strong>\"The AV node sits in the ventricle.\"</strong> It sits in the posteroinferior interatrial septum near the coronary sinus opening; the bundle of His is what crosses into the ventricles.</li>" +
          "<li><strong>Purkinje fibers vs bundle branches.</strong> The branches run down the septum; the Purkinje fibers are the subendocardial endings that spread into the ventricular walls.</li></ul>")
      ],
      [
        Q("idea", "Why must the atrial impulse pass through the AV node and bundle of His to reach the ventricles?",
          ["The fibrous skeleton electrically insulates the atria from the ventricles, and the AV bundle is the only connection", "The ventricles are too far from the SA node for the signal to spread", "The pericardium blocks conduction across the coronary sulcus", "The coronary sinus separates atrial muscle from ventricular muscle"], 0,
          "The fibrous skeleton separates atrial and ventricular conduction; the AV bundle passing through it is the single doorway."),
        Q("idea", "Which structure is the ONLY electrical connection between the atria and the ventricles?",
          ["The AV bundle (bundle of His)", "The Purkinje fibers", "The moderator band", "The coronary sulcus"], 0,
          "Everything else is insulated by the fibrous skeleton; only the AV bundle crosses it."),
        Q("chain", "Which sequence follows the impulse correctly?",
          ["SA node → right atrial wall → AV node → AV bundle → bundle branches → Purkinje fibers", "SA node → AV bundle → AV node → Purkinje fibers → bundle branches", "AV node → SA node → bundle branches → AV bundle → Purkinje fibers", "SA node → ventricular muscle directly → AV node → Purkinje fibers"], 0,
          "SA node fires, the signal crosses the RA wall to the AV node, then His, the right and left branches, and finally Purkinje fibers."),
        Q("bedside", "The AV nodal artery (from the RCA in about 80% of people) is occluded. Which part of the conduction pathway is most at risk?",
          ["The AV node, the gate between atria and ventricles", "The SA node in every patient", "Only the left bundle branch", "The Purkinje fibers at the LV apex"], 0,
          "The AV nodal artery supplies the AV node; losing it threatens the single doorway into the ventricles."),
        Q("idea", "Besides insulating, what does the fibrous skeleton do when a large volume of blood pumps through the valves?",
          ["Keeps the valve orifices patent and prevents them from being overly distended", "Contracts to push blood through the valves", "Produces pericardial fluid to lubricate the valves", "Generates the impulse that opens the valves"], 0,
          "Its rings hold the AV and semilunar orifices open and stop them from overstretching, and they anchor leaflets and muscle."),
        Q("bedside", "A defect in the membranous (upper) part of the interventricular septum lies next to which conduction structure?",
          ["The AV bundle, which runs along the membranous septum", "The SA node", "The Purkinje fibers of the LV free wall", "The AV node in the interatrial septum"], 0,
          "The AV bundle passes through the fibrous skeleton and along the membranous IVS before dividing at the muscular junction."),
        Q("traps", "A student says atrial and ventricular muscle contract together because the impulse spreads straight across the muscle. What is wrong?",
          ["The fibrous skeleton separates them, so the signal must route through the AV node and bundle of His", "Nothing; atrial and ventricular muscle are continuous", "The ventricles fire first and then trigger the atria", "The impulse crosses through the pulmonary veins"], 0,
          "Because of the insulating skeleton, atria and ventricles conduct independently and are linked only through the AV bundle."),
        Q("chain", "Per the Physiology lecture, conduction is very slow through the AV junctional fibers. What does that do to the ventricles?",
          ["It delays ventricular depolarization", "It makes the ventricles depolarize before the atria", "It speeds ventricular depolarization", "It has no effect because the ventricles have their own route"], 0,
          "With only one route, the slow AV junction holds back the ventricles' depolarization."),
        Q("chain", "If the AV node stops conducting, why can't the SA node's signal simply take another path to the ventricles?",
          ["The fibrous skeleton insulates everywhere else, so there is no alternative route", "The SA node only connects to the left atrium", "The bundle branches conduct only upward", "The moderator band blocks the signal"], 0,
          "The insulation that forces conduction through the AV node also means there is no back door if it fails; per Physiology, lower tissue must then fire on its own at a slower rate.")
      ]),

    // ------------------------------------------------------------------
    D("anat-pericardial-space", "The pericardium: two layers and a potential space",
      "The serous pericardium folds into two layers with a thin film of fluid between them, so the heart can beat without friction inside a tough, anchored outer sac.",
      [
        S("idea", "The idea",
          "<p>Picture pushing your fist into a soft, partly filled balloon: one layer of balloon touches your fist, the other faces outward, and there is a slippery film between them. The heart sits in the pericardium the same way.</p>" +
          Tbl(["Layer", "What it is", "Job"], [
            ["<strong>Fibrous pericardium</strong>", "Tough outer sac", "Blends with the roots of the great vessels and the central tendon of the diaphragm for <strong>stability</strong>"],
            ["<strong>Parietal serous</strong>", "Lines the inside of the fibrous sac", "Outer wall of the pericardial cavity"],
            ["<strong>Visceral serous = epicardium</strong>", "Covers the heart itself", "Inner wall of the pericardial cavity; the heart's outer tissue layer"]
          ]) +
          "<p>Between parietal and visceral is the <strong>pericardial cavity</strong>, a <strong>potential space</strong>: normally there is no real gap, just about <strong>30&ndash;50 mL</strong> of fluid made by the serous layer.</p>"),
        S("chain", "Cause → effect",
          "<ol class=\"concept-chain\">" +
          "<li>The serous layer produces pericardial fluid (about 30&ndash;50 mL).</li>" +
          "<li>The fluid forms a thin film in the potential space between the parietal and visceral layers.</li>" +
          "<li>Each beat, the visceral layer (on the heart) slides against the parietal layer with almost no friction.</li>" +
          "<li>The heart contracts smoothly while the fibrous layer keeps it anchored in place.</li>" +
          "</ol>" +
          Tbl(["If the fluid…", "Then…"], [
            ["Stays at about 30&ndash;50 mL", "Normal: a lubricating film, no visible space"],
            ["Builds up (pericardial effusion)", "The potential space becomes a real one; fluid collects in the <strong>oblique pericardial sinus</strong>, the posterior pocket-like recess, and can be seen on imaging"]
          ]) +
          CL + "the fibrous layer is tough and does not stretch quickly, so fluid that builds up fast inside the sac presses on the heart instead of expanding the sac.</p>" +
          HY("The pericardial cavity is a potential space between parietal and visceral serous layers; its fluid lets the heart contract smoothly.")),
        S("bedside", "Why it matters clinically",
          "<ul><li><strong>Effusion on imaging:</strong> extra fluid collects posteriorly in the oblique sinus, which is where it is seen.</li>" +
          "<li><strong>Surgery:</strong> the transverse pericardial sinus separates the arterial outflow (ascending aorta, pulmonary trunk) from the venous inflow (SVC, IVC, pulmonary veins). That is why a surgeon can pass through it to isolate and clamp the aorta and pulmonary trunk.</li>" +
          "<li><strong>H&amp;P link:</strong> the pericardial friction rub is listed with the high-pitched sounds best heard with the diaphragm.</li></ul>" +
          CL + "a friction rub is the sound of inflamed pericardial layers rubbing together when the smooth, lubricated sliding is lost.</p>"),
        S("traps", "Common traps",
          "<ul><li><strong>Epicardium vs parietal layer.</strong> The epicardium is the <em>visceral</em> layer, stuck to the heart. The parietal layer lines the fibrous sac.</li>" +
          "<li><strong>\"The pericardial cavity is between the fibrous and parietal layers.\"</strong> It is between parietal and visceral; the fibrous and parietal layers are fused.</li>" +
          "<li><strong>\"Any pericardial fluid is abnormal.\"</strong> 30&ndash;50 mL is normal and necessary.</li>" +
          "<li><strong>Transverse vs oblique sinus.</strong> Transverse = surgical passage behind the aorta and pulmonary trunk. Oblique = posterior recess where effusion collects.</li></ul>")
      ],
      [
        Q("idea", "What is the pericardial cavity?",
          ["A potential space between the parietal and visceral serous layers, holding a thin film of fluid", "The space between the fibrous pericardium and the parietal layer", "The space between the epicardium and the myocardium", "An open air-filled space between the pericardium and the sternum"], 0,
          "The cavity lies between the two serous layers; normally it is only a potential space with 30–50 mL of fluid."),
        Q("chain", "Why does the heart need pericardial fluid?",
          ["It lets the heart contract smoothly, sliding against the parietal layer without friction", "It supplies oxygen to the epicardium", "It conducts the electrical impulse across the heart", "It fills the ventricles during diastole"], 0,
          "The serous layer's fluid lubricates the moving heart within the pericardial cavity."),
        Q("chain", "A patient develops a pericardial effusion. Where does the excess fluid collect so that it can be seen on imaging?",
          ["The oblique pericardial sinus, the posterior recess", "The transverse pericardial sinus, behind the aorta", "Between the fibrous pericardium and the diaphragm", "Inside the myocardium"], 0,
          "Per the slides, fluid builds up in the oblique sinus during effusion and can be seen on imaging."),
        Q("idea", "The epicardium is the same structure as which layer?",
          ["The visceral layer of the serous pericardium", "The parietal layer of the serous pericardium", "The fibrous pericardium", "The endocardium"], 0,
          "The visceral serous pericardium covers the heart and forms its outermost tissue layer, the epicardium."),
        Q("idea", "What keeps the pericardial sac stable in the chest?",
          ["The fibrous layer blending with the roots of the great vessels and the central tendon of the diaphragm", "The visceral layer adhering to the sternum", "Pericardial fluid pressure", "The papillary muscles"], 0,
          "The fibrous pericardium is anchored to the great vessel roots and the diaphragm's central tendon."),
        Q("bedside", "Why can a surgeon pass a clamp through the transverse pericardial sinus to isolate the ascending aorta and pulmonary trunk?",
          ["The sinus is a passage separating the arterial outflow vessels from the SVC, IVC, and pulmonary veins", "The sinus is filled with fluid that numbs the vessels", "The sinus lies inside the left ventricle", "The sinus is where effusion fluid collects"], 0,
          "The transverse sinus runs between the outflow vessels (aorta, pulmonary trunk) and the inflow veins, giving access to clamp the outflow vessels."),
        Q("bedside", "An echocardiogram shows about 40 mL of fluid in the pericardial cavity with no other findings. How should you interpret it?",
          ["Normal lubricating pericardial fluid", "A large effusion", "Fluid trapped in the myocardium", "Blood in the transverse sinus"], 0,
          "The serous layer normally makes about 30–50 mL of fluid."),
        Q("traps", "The pericardial friction rub is listed with which sounds, and which stethoscope head is used?",
          ["High-pitched sounds; the diaphragm", "Low-pitched sounds; the bell", "Low-pitched sounds; the diaphragm", "High-pitched sounds; the bell"], 0,
          "The H&P lecture lists pericardial friction rubs with S1, S2, and the regurgitant murmurs as high-pitched diaphragm sounds.")
      ]),

    // ------------------------------------------------------------------
    D("anat-coronary-territories", "Coronary territories: follow the artery to predict the damage",
      "Each coronary artery supplies a fixed territory, so knowing the territory tells you which walls, nodes, and septum an occlusion will threaten.",
      [
        S("idea", "The idea",
          "<p>The coronary arteries are the first branches off the aorta. Each one feeds a <strong>territory</strong>. If an artery is blocked, the territory downstream of the block loses its supply. So instead of memorizing \"what an MI looks like\", you ask: <strong>what does that artery feed?</strong></p>" +
          "<p>Big picture: the <strong>RCA</strong> feeds the <strong>right side, the back, and (usually) the nodes</strong>. The <strong>LCA</strong> feeds the <strong>left side, the front, and most of the septum</strong>. There is much variation between people, which the slides give as percentages.</p>" +
          Tbl(["Artery", "Territory"], [
            ["<strong>RCA</strong> (right aortic sinus)", "Right atrium, most of the right ventricle"],
            ["&nbsp;&nbsp;Right marginal", "Right border toward the apex (does <strong>not</strong> reach it)"],
            ["&nbsp;&nbsp;SA nodal", "SA node in <strong>60%</strong>"],
            ["&nbsp;&nbsp;AV nodal", "AV node in <strong>80%</strong>"],
            ["&nbsp;&nbsp;Posterior interventricular (PIV) + septal branch", "Posterior parts of both ventricles; <strong>posterior 1/3 of the septum</strong>"],
            ["<strong>LCA</strong> (left aortic sinus)", "Left atrium, most of the LV, part of the RV, anterior 2/3 of septum incl. AV bundle, SA node in <strong>40%</strong>"],
            ["&nbsp;&nbsp;LAD (anterior IV)", "Anterior parts of both ventricles, <strong>anterior 2/3 of septum</strong>, the <strong>apex</strong>"],
            ["&nbsp;&nbsp;Circumflex", "Left atrium, <strong>mitral valve</strong>, most of the <strong>posterior LV</strong>"]
          ])),
        S("chain", "Cause → effect",
          "<ol class=\"concept-chain\">" +
          "<li>A coronary artery leaves its aortic sinus and runs in the coronary sulcus.</li>" +
          "<li>Its branches fan out to their own territory of epicardium and myocardium.</li>" +
          "<li>A block in the artery cuts off flow to every branch beyond the block.</li>" +
          "<li>The territory those branches feed loses its blood supply &mdash; chamber walls, septum, valves, or nodes.</li>" +
          "<li>What you see depends on the territory: a wall that pumps poorly, or a node that conducts poorly.</li>" +
          "</ol>" +
          Tbl(["If this is blocked…", "…this territory is at risk"], [
            ["RCA", "RA, most of RV, posterior 1/3 of septum, SA node (60%), <strong>AV node (80%)</strong>"],
            ["LAD", "Anterior walls of both ventricles, anterior 2/3 of septum (with the AV bundle), <strong>apex</strong>"],
            ["Circumflex", "LA, mitral valve, most of the posterior LV"]
          ]) +
          Mn("RCA = Right and Rhythm", "The RCA feeds the right heart and, in most people, both nodes (SA 60%, AV 80%).") +
          HY("An occlusion damages exactly the territory the blocked artery supplies; the RCA usually carries the nodes, the LAD carries the anterior septum and apex.")),
        S("bedside", "Why it matters clinically",
          "<ul><li><strong>H&amp;P framing:</strong> the first history question is \"Is the blood supply to the heart adequate?\" &mdash; angina is a supply complaint. The territory explains why one blocked artery can also become an <em>electrical</em> problem (RCA → AV node) or a <em>valve</em> problem (circumflex → mitral valve).</li>" +
          "<li><strong>Venous return parallels the arteries:</strong> the great cardiac vein drains the LCA territory, the middle cardiac vein drains the RCA territory, and the small cardiac vein drains the right marginal area. All empty into the <strong>coronary sinus</strong> → right atrium.</li></ul>" +
          CL + "tissue whose blood supply is cut off becomes ischemic; that is why the territory predicts which function is lost.</p>"),
        S("traps", "Common traps",
          "<ul><li><strong>\"The SA node is always supplied by the RCA.\"</strong> Only in about 60%; in about 40% it comes from the LCA.</li>" +
          "<li><strong>\"The right marginal artery supplies the apex.\"</strong> It runs toward the apex but does not reach it; the apex is LAD territory.</li>" +
          "<li><strong>Septum split.</strong> Anterior 2/3 = LCA (LAD); posterior 1/3 = RCA (PIV septal branch).</li>" +
          "<li><strong>\"The coronary sinus is an artery.\"</strong> It is the main <em>venous</em> return, emptying into the right atrium.</li></ul>")
      ],
      [
        Q("chain", "A proximal RCA occlusion threatens which pair of conduction structures in most people?",
          ["The SA node and the AV node", "The AV bundle and the left bundle branch", "Only the Purkinje fibers", "Neither node; the RCA supplies only the right ventricle"], 0,
          "The RCA gives the SA nodal artery in about 60% and the AV nodal artery in about 80% of people."),
        Q("chain", "An LAD occlusion would put which region at risk?",
          ["Anterior walls of both ventricles, the anterior 2/3 of the septum, and the apex", "The right atrium and most of the right ventricle", "The left atrium, mitral valve, and posterior LV", "The right border of the heart only"], 0,
          "The LAD supplies the anterior ventricles, anterior 2/3 of the IVS, and the apex."),
        Q("chain", "A circumflex occlusion would most directly threaten which structures?",
          ["The left atrium, the mitral valve, and most of the posterior LV", "The SA node in every patient", "The anterior 2/3 of the septum and apex", "The right atrium and right marginal border"], 0,
          "The circumflex follows the sulcus around the left border to the back, supplying LA, mitral valve, and posterior LV."),
        Q("traps", "Why can't you assume that an RCA occlusion will affect the SA node?",
          ["The SA nodal branch comes from the RCA in only about 60% of people; in about 40% it comes from the LCA", "The SA node has no arterial supply", "The SA node is always supplied by the circumflex", "The SA node is supplied by the coronary sinus"], 0,
          "Coronary distribution varies; the SA node is RCA-supplied in about 60% and LCA-supplied in about 40%."),
        Q("chain", "Ischemia of the posterior 1/3 of the interventricular septum points to which artery?",
          ["The RCA, through the posterior interventricular artery's septal branch", "The LAD", "The left marginal artery", "The right marginal artery"], 0,
          "The PIV (from the RCA) sends septal branches to the posterior 1/3 of the septum."),
        Q("traps", "An infarct is limited to the cardiac apex. Which artery is the most likely culprit?",
          ["LAD", "Right marginal", "Circumflex", "SA nodal"], 0,
          "The LAD supplies the apex; the right marginal runs toward the apex but does not reach it."),
        Q("bedside", "Blood from the territory supplied by the LCA returns to the heart mainly through which route?",
          ["Great cardiac vein → coronary sinus → right atrium", "Middle cardiac vein → coronary sinus → left atrium", "Small cardiac vein → pulmonary veins → left atrium", "Directly into the left ventricle through the coronary sulcus"], 0,
          "The great cardiac vein (starting as the IV vein near the apex) drains the LCA area into the coronary sinus, which empties into the RA."),
        Q("chain", "A blocked RCA would mainly weaken the walls of which chambers?",
          ["The right atrium and most of the right ventricle", "The left atrium and most of the left ventricle", "Only the anterior left ventricle", "Only the apex"], 0,
          "The RCA supplies the right atrium and most of the right ventricle."),
        Q("chain", "Why does a left main (LCA) occlusion threaten more of the left ventricle than an RCA occlusion does?",
          ["The LCA supplies most of the LV and the anterior 2/3 of the septum", "The RCA does not reach the heart at all", "The LCA supplies only the right atrium", "The LV has no arterial supply of its own"], 0,
          "Most of the LV, the LA, and most of the septum are LCA territory; the RCA mainly feeds the right heart and posterior strip.")
      ]),

    // ------------------------------------------------------------------
    D("anat-one-way-valves", "Keeping valves one-way: chordae, papillary muscles, and cusps",
      "AV valves are tethered by chordae and papillary muscles so ventricular pressure cannot flip them into the atria, while semilunar cusps fill with backflowing blood and seal.",
      [
        S("idea", "The idea",
          "<p>The heart has four <strong>one-way valves</strong>, and the two kinds stay one-way in different ways.</p>" +
          "<p><strong>AV valves (tricuspid, mitral)</strong> sit between atria and ventricles. When the ventricle squeezes, the pressure pushes their leaflets back toward the atrium. Like a parachute held by its cords, the leaflets are tied by <strong>chordae tendineae</strong> to <strong>papillary muscles</strong> in the ventricle wall, so they shut instead of flipping up into the atrium (prolapse).</p>" +
          "<p><strong>Semilunar valves (aortic, pulmonic)</strong> have no chordae. Their cusps are pockets: when blood starts to fall back toward the heart, it <strong>fills the cusps and they seal together</strong>, preventing backflow &mdash; when the tissue is healthy.</p>"),
        S("chain", "Cause → effect",
          "<ol class=\"concept-chain\">" +
          "<li>Systole: the ventricle contracts and its pressure rises above the atrium.</li>" +
          "<li>The AV leaflets are pushed shut (the start of systole; S1).</li>" +
          "<li>Chordae tendineae and papillary muscles hold the leaflets so they cannot be pushed up into the atrium.</li>" +
          "<li>Blood can leave only through the open semilunar valve.</li>" +
          "<li>When great-vessel pressure becomes higher than ventricular pressure, blood falls back, fills the semilunar cusps, and they seal (S2).</li>" +
          "</ol>" +
          Tbl(["", "AV valves (tricuspid, mitral)", "Semilunar valves (aortic, pulmonic)"], [
            ["Open in", "Diastole (ventricle fills)", "Systole (ventricle ejects)"],
            ["Close at", "Start of systole → <strong>S1</strong>", "Start of diastole → <strong>S2</strong>"],
            ["Kept from inverting by", "<strong>Chordae tendineae + papillary muscles</strong>", "<strong>Cusps catching backflow and sealing</strong>"]
          ]) +
          "<p>The Physiology lecture adds timing: isovolumetric contraction begins with AV closure (1st heart sound); the semilunar valves close when pressure in the great vessels exceeds the ventricles (2nd heart sound); in diastole the AV valves open when ventricular pressure falls below atrial pressure.</p>" +
          HY("Chordae and papillary muscles stop AV prolapse; semilunar cusps seal by catching backflow. Valves that don't close cleanly create turbulent flow and a murmur.")),
        S("bedside", "Why it matters clinically",
          "<ul><li><strong>Murmurs:</strong> diseased or worn-out cusps don't close efficiently, and the turbulent flow of the moving blood is what you detect as a murmur. The notes add that diseased valves become stiff or leaky.</li>" +
          "<li><strong>Heart sounds:</strong> S1 = AV closure; S2 = semilunar closure (see the H&amp;P S1/S2 concept).</li>" +
          "<li><strong>Moderator band:</strong> in the right ventricle it connects the septum to the anterior papillary muscle, prevents overdistension of the ventricle, and carries part of the right AV bundle.</li>" +
          "<li><strong>Left vs right:</strong> the LV wall is 2&ndash;3 times thicker than the RV and its papillary muscles are larger.</li></ul>" +
          CL + "the LV pumps against the higher systemic pressure, so it builds thicker walls and stronger papillary muscles to hold the mitral valve shut.</p>"),
        S("traps", "Common traps",
          "<ul><li><strong>\"Papillary muscles pull the AV valves open.\"</strong> They tether the leaflets to prevent prolapse. The AV valves open when ventricular pressure falls below atrial pressure.</li>" +
          "<li><strong>\"Semilunar valves have chordae too.\"</strong> They do not; their cusps seal by catching backflowing blood.</li>" +
          "<li><strong>\"S1 is the aortic valve closing.\"</strong> S1 = mitral + tricuspid; S2 = aortic + pulmonic.</li></ul>")
      ],
      [
        Q("chain", "During systole, what keeps the mitral leaflets from being pushed up into the left atrium?",
          ["Chordae tendineae anchored to papillary muscles", "The cusps filling with backflowing blood", "The fibrous pericardium", "Contraction of the left atrium"], 0,
          "Ventricular pressure pushes the AV leaflets toward the atrium; the chordae and papillary muscles hold them so they shut instead of prolapsing."),
        Q("chain", "What closes the aortic valve at the start of diastole?",
          ["Blood falling back from the aorta fills the cusps and seals them", "Papillary muscles pull the cusps shut", "Chordae tendineae tighten", "The left atrium contracts"], 0,
          "When aortic pressure exceeds ventricular pressure, backflow fills the semilunar cusps and they seal together."),
        Q("chain", "If the chordae tendineae of the mitral valve failed, where would the leaflet move during systole?",
          ["Back into the left atrium (prolapse), letting blood leak backward", "Forward into the aorta", "Down toward the apex, opening wider", "Nowhere; chordae play no role in systole"], 0,
          "Without the tether, ventricular pressure pushes the leaflet up into the atrium."),
        Q("idea", "Closure of which valves at the start of systole produces the first heart sound?",
          ["Mitral and tricuspid", "Aortic and pulmonic", "Aortic and mitral", "Pulmonic and tricuspid"], 0,
          "S1 marks AV valve closure as the ventricles begin to contract."),
        Q("bedside", "Worn aortic cusps no longer seal completely. What do you predict?",
          ["Blood leaks back into the LV with turbulent flow, heard as a murmur", "The aortic valve becomes silent and flow is normal", "The mitral valve prolapses into the atrium", "The papillary muscles shut the aortic valve instead"], 0,
          "Diseased cusps don't close efficiently; the turbulent backflow is detected as a murmur."),
        Q("idea", "What does the moderator band do in the right ventricle?",
          ["Prevents overdistension of the ventricle and carries part of the right AV bundle", "Closes the pulmonic valve", "Anchors the mitral valve", "Separates the atria from the ventricles electrically"], 0,
          "The septomarginal trabecula links the septum to the anterior papillary muscle, limits distension, and carries right bundle fibers."),
        Q("bedside", "Why are the left ventricle's walls and papillary muscles larger than the right's?",
          ["The LV pumps against higher systemic pressure, so it needs more muscle to eject and to hold the mitral valve shut", "The LV receives less blood", "The LV has no chordae", "The LV contracts only in diastole"], 0,
          "Clarification (standard physiology): higher systemic pressure demands thicker walls and stronger papillary muscles."),
        Q("traps", "A student says papillary muscles contract to pull the AV valves open during diastole. What is the correction?",
          ["They tether the leaflets to prevent prolapse; the AV valves open when ventricular pressure falls below atrial pressure", "Correct; papillary muscles open the valves", "They open the semilunar valves instead", "They only work in the right ventricle"], 0,
          "Physiology: in diastole the AV valves open once intraventricular pressure falls below atrial pressure; papillary muscles hold the leaflets during systole.")
      ])
  ]);
}());
