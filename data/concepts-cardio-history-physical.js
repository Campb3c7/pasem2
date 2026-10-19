/*
  Cardio Part 1 Concepts: Cardiovascular H&P (Marriott).
  Exam findings and history questions explained by their mechanism. Pure recall
  stays in data/cardio-history-physical.js. Sources: source-material/
  cardio-part-1/text/cardio-history-physical.md, linked to cardio-physiology.md
  (cardiac cycle slides 28-33, Frank-Starling 37, flow slide 8, venous 49) and
  cardio-anatomy.md (apex, valve projections, hand anastomoses). The ABI
  interpretation bands come from slide 86 (picture table, as transcribed in
  data/cardio-history-physical.js). Items marked "Clarification (standard
  physiology):" are explanatory glue the slides imply but do not state.

  Question ids are "<concept id>|<index>": only APPEND questions to a concept;
  never insert, delete, or reorder. `correct` is zero-based (always 0 here;
  the engine shuffles answer order).
*/
(function () {
  "use strict";

  var H = window.DiseaseContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, S = H.S, Q = H.Q, D = H.D, L = H.L;
  var CL = "<p><em>Clarification (standard physiology):</em> ";

  window.CARDIO_CONCEPTS_HP = L("cardio-history-physical", "Cardiovascular H&P", [

    // ------------------------------------------------------------------
    D("hp-supply-electrical-pump", "Supply, electrical, or pump: sorting the symptom history",
      "Every cardiovascular symptom answers one of three questions — is the blood supply adequate, is the electrical system working, is the pump moving blood — and the question tells you what to ask next.",
      [
        S("idea", "The idea",
          "<p>The lecture opens the cardiovascular history with three questions:</p>" +
          "<ol><li><strong>Supply:</strong> Is the blood supply to the heart adequate?</li>" +
          "<li><strong>Electrical:</strong> Is the electrical system of the heart functioning normally?</li>" +
          "<li><strong>Pump:</strong> Is the heart adequately moving blood through circulation and supplying the organs?</li></ol>" +
          "<p>Instead of memorizing a list of symptoms, sort each one into a question. The question then tells you what follow-up matters.</p>" +
          Tbl(["Symptom", "Main question", "Why"], [
            ["Exertional chest pain / pressure (angina)", "<strong>Supply</strong>", "Demand rises with exertion; a limited supply can't keep up"],
            ["Palpitations (skipping, racing, fluttering)", "<strong>Electrical</strong>", "An abnormal rhythm or rate is felt as an awareness of the heartbeat"],
            ["Syncope from arrhythmia (VT, bradyarrhythmia)", "<strong>Electrical</strong>", "A rhythm too fast or too slow drops forward flow to the brain"],
            ["Dyspnea, orthopnea, PND, edema", "<strong>Pump</strong>", "Blood isn't moved forward well, so fluid backs up"],
            ["Leg pain with walking; cold, pale, hairless shins", "<strong>Supply</strong> (to the legs)", "Same supply-demand logic in peripheral arteries (PAD)"],
            ["Abdominal pain worse with eating", "<strong>Supply</strong> (to the gut)", "Viscera need more oxygen after meals"]
          ])),
        S("chain", "Cause → effect",
          "<p>The supply question is a <strong>supply-demand mismatch</strong> &mdash; the lecture states it for abdominal pain, and the same chain explains angina and claudication.</p>" +
          "<ol class=\"concept-chain\">" +
          "<li>A tissue's work goes up: the heart with exertion, the legs with walking, the gut after a meal.</li>" +
          "<li>Its oxygen demand rises.</li>" +
          "<li>A narrowed artery can't raise its supply to match.</li>" +
          "<li>Demand outruns supply, and the tissue hurts (angina, claudication, abdominal pain).</li>" +
          "<li>Rest lowers demand, and the pain eases.</li>" +
          "</ol>" +
          Tbl(["If demand…", "Then with a narrowed artery…"], [
            ["↑ (exertion, walking, eating)", "Supply falls short → pain appears"],
            ["↓ (rest)", "Supply is enough again → pain eases"]
          ]) +
          HY("Sort every symptom into supply, electrical, or pump; supply symptoms come and go with demand.")),
        S("bedside", "Why it matters clinically",
          "<ul><li><strong>Exertion questions measure the supply limit:</strong> \"Does the pain get worse or better with exertion?\", \"Chest pain walking up stairs?\", and for PAD \"How far can you walk before the pain comes on?\"</li>" +
          "<li><strong>Abdominal, back, flank pain:</strong> acute symptoms raise concern for arterial thrombosis; pain worse with eating = supply-demand mismatch; sudden tearing pain = concern for abdominal aortic dissection.</li>" +
          "<li><strong>Palpitation clues still need an EKG:</strong> transient skips = possible premature contractions; sudden-onset/offset rapid regular beating = possible PSVT; gradual, regular, under 120 bpm = possible sinus tachycardia.</li>" +
          "<li><strong>Anatomy link:</strong> which coronary territory is underperfused decides whether a supply problem also becomes an electrical one (RCA → AV node in 80%).</li></ul>"),
        S("traps", "Common traps",
          "<ul><li><strong>\"No chest pain, so not cardiac.\"</strong> Women, especially over 65, more often report atypical symptoms of ACS: upper back, neck, or jaw pain, SOB, PND, nausea, vomiting, fatigue.</li>" +
          "<li><strong>\"Syncope means arrhythmia.\"</strong> The most common cause is neurocardiogenic (vasovagal most common); arrhythmias are one category.</li>" +
          "<li><strong>\"The palpitation story makes the diagnosis.\"</strong> History gives clues; the EKG confirms.</li></ul>")
      ],
      [
        Q("idea", "A patient describes a fluttering heartbeat. Which history question does this symptom mainly address?",
          ["Is the electrical system of the heart functioning normally?", "Is the blood supply to the heart adequate?", "Is the heart moving blood forward and supplying the organs?", "Is the lymphatic drainage adequate?"], 0,
          "Palpitations are an awareness of the heartbeat from an abnormal rhythm or rate: the electrical question."),
        Q("chain", "Chest pressure comes on climbing stairs and goes away with rest. Which mechanism best explains this pattern?",
          ["Exertion raises the heart's oxygen demand beyond what a limited supply can deliver", "An electrical misfire that is triggered only by rest", "Fluid backing up into the lungs when lying flat", "Inflamed pericardial layers rubbing together"], 0,
          "Supply-demand mismatch: demand rises with exertion, the narrowed supply can't follow, and rest restores the balance."),
        Q("chain", "Why would abdominal pain that worsens after eating raise a vascular concern?",
          ["After meals the gut needs more oxygen, exposing a supply-demand mismatch", "Eating slows the heart's electrical system", "Food in the stomach compresses the inferior vena cava", "Eating lowers blood viscosity"], 0,
          "The slides tie pain worse with eating to the viscera needing greater oxygen supply."),
        Q("bedside", "A smoker gets calf cramping after two blocks that eases when he stops. Why ask exactly how far he can walk?",
          ["It measures the point where leg demand outruns arterial supply, tracking the severity of PAD", "It tests his electrical conduction", "It estimates how much edema fluid he has retained", "It screens for lymphedema"], 0,
          "Claudication distance quantifies the supply limit: walking raises demand until the narrowed arteries fall short."),
        Q("idea", "Orthopnea, PND, and ankle edema mainly answer which history question?",
          ["Is the heart adequately moving blood through circulation and supplying the organs?", "Is the electrical system functioning normally?", "Is the blood supply to the heart adequate?", "Is the patient having premature contractions?"], 0,
          "These are pump symptoms: blood isn't moved forward well and fluid backs up."),
        Q("traps", "A 72-year-old woman reports exertional jaw pain, nausea, and fatigue but no chest pain. What is the best interpretation?",
          ["Possible ACS with atypical symptoms, which are more common in women over 65", "Not cardiac, because there is no chest pain", "An electrical problem, because there is no chest pain", "Lymphedema of the neck"], 0,
          "Women, especially over 65, more often present with atypical ACS symptoms; careful history matters."),
        Q("traps", "A patient describes rapid, regular beating that starts and stops suddenly. What should you do with this clue?",
          ["Note that it suggests PSVT, but confirm with an EKG", "Diagnose PSVT from the history alone", "Conclude it is sinus tachycardia", "Ignore it because palpitations are never cardiac"], 0,
          "Sudden onset and offset of rapid regular beating suggests PSVT; the slides say these clues need an EKG to confirm."),
        Q("bedside", "Cold feet, pallor, and hair loss over the anterior tibia point to which problem?",
          ["Decreased arterial perfusion (a supply problem)", "Venous insufficiency (a return problem)", "An arrhythmia (an electrical problem)", "Lymphedema"], 0,
          "The slides list coldness, numbness, pallor, discoloration, and anterior tibial hair loss under decreased arterial perfusion."),
        Q("bedside", "Sudden, tearing abdominal or back pain should raise concern for what?",
          ["Abdominal aortic dissection", "Stable exertional angina", "Premature contractions", "Orthopnea"], 0,
          "The lecture links sudden tearing pain to concern for abdominal aortic dissection.")
      ]),

    // ------------------------------------------------------------------
    D("hp-fluid-backs-up", "When the pump falls behind, fluid backs up",
      "A heart that can't move blood forward lets pressure and fluid build up behind it, which shows up as breathlessness that changes with position, edema, and weight gain before visible swelling.",
      [
        S("idea", "The idea",
          "<p>The pump question asks whether the heart moves blood forward. When it can't keep up, blood and fluid <strong>back up</strong> behind it, the way traffic backs up behind a slow car.</p>" +
          "<p>The Physiology lecture gives the right-sided version: pressure in the right atrium (central venous pressure) depends on the <strong>right ventricle's ability to pump blood forward</strong> to the lungs. Pump less, and pressure behind it rises.</p>" +
          "<p><strong>Edema</strong> is the visible result: excess fluid in the <strong>extravascular interstitial space</strong> &mdash; outside the vessels, between cells.</p>"),
        S("chain", "Cause → effect",
          "<ol class=\"concept-chain\">" +
          "<li>The ventricle can't pump blood forward as fast as it arrives.</li>" +
          "<li>Pressure rises in the veins and chambers behind it.</li>" +
          "<li>Fluid moves out of the vessels into the interstitial space (edema), or backs up into the lungs (dyspnea).</li>" +
          "<li>Weight rises first: several liters can build up before the swelling is obvious.</li>" +
          "</ol>" +
          CL + "lying flat lets fluid that pooled in the legs during the day flow back toward the chest, adding to what a struggling heart must handle, so the lungs congest; sitting up lets gravity pull it back down. That is why orthopnea improves upright, and why PND wakes the patient after 1&ndash;2 hours lying down.</p>" +
          Tbl(["Position / time", "What gravity does (clarification)", "Symptom"], [
            ["Lying flat", "Fluid returns toward the chest", "Orthopnea; PND after 1&ndash;2 hours"],
            ["Sitting up / standing", "Fluid pulled toward the legs", "Breathing eases; leg swelling grows through the day"]
          ]) +
          HY("Edema may not be obvious until several liters accumulate, so daily morning weights catch fluid before the eye does.")),
        S("bedside", "Why it matters clinically",
          "<ul><li><strong>\"How many pillows do you sleep on?\"</strong> measures orthopnea. <strong>\"Do you wake up at night short of breath?\"</strong> asks about PND, which sends the patient to sit up, stand, or go to a window for air.</li>" +
          "<li><strong>Daily morning weights</strong> (home weights in heart failure, per the chronic-care OCHMEDPRA \"Home readings\") detect retained fluid early.</li>" +
          "<li><strong>Edema history:</strong> location (unilateral vs bilateral), timing (\"worse in the morning or evening?\"), setting, associated symptoms. Leg swelling with pain also raises DVT and venous insufficiency.</li>" +
          "<li><strong>Exam:</strong> pitting edema graded 1+ to 4+; JVP shows the right atrial pressure that sits behind the pump (see the JVP concept).</li></ul>" +
          CL + "one swollen leg points to a local problem in that leg's veins (such as DVT), while both legs swelling points to a systemic cause such as the pump.</p>"),
        S("traps", "Common traps",
          "<ul><li><strong>\"No visible swelling, so no fluid.\"</strong> Several liters can accumulate first; weigh the patient.</li>" +
          "<li><strong>Orthopnea vs PND.</strong> Orthopnea: short of breath when supine, better sitting up. PND: sudden episodes that wake the patient 1&ndash;2 hours after going to bed.</li>" +
          "<li><strong>\"Edema is fluid inside the veins.\"</strong> It is fluid outside the vessels, in the interstitial space.</li>" +
          "<li><strong>\"Edema is always cardiac.\"</strong> Causes are frequently cardiac or pulmonary but can also be nutritional or positional.</li></ul>")
      ],
      [
        Q("bedside", "Why ask a patient who retains fluid to record daily morning weights?",
          ["Edema may not be obvious until several liters have accumulated, but weight rises first", "Weight measures the heart's electrical rate", "Morning weight shows the ankle-brachial index", "Weight loss is the main sign of fluid overload"], 0,
          "Fluid builds up invisibly at first; a rising daily weight reveals it before the swelling is obvious."),
        Q("chain", "Why does orthopnea improve when the patient sits up?",
          ["Gravity pulls fluid toward the lower body, so less returns to the congested heart and lungs", "Sitting up speeds the heart's electrical conduction", "Sitting up raises the pressure in the right atrium", "Sitting up compresses the lungs and pushes fluid out"], 0,
          "Clarification (standard physiology): lying flat returns pooled fluid to the chest; upright, gravity keeps it down and breathing eases."),
        Q("idea", "Asking \"How many pillows do you sleep on at night?\" is screening for what?",
          ["Orthopnea", "Palpitations", "Claudication", "Syncope"], 0,
          "Patients with orthopnea prop themselves up to breathe; the pillow count tracks it."),
        Q("idea", "A patient wakes suddenly short of breath about 1–2 hours after going to bed and goes to the window for air. What is this?",
          ["Paroxysmal nocturnal dyspnea", "Orthopnea only", "Exertional angina", "Vasovagal syncope"], 0,
          "PND is sudden dyspnea that awakens the patient 1–2 hours after going to bed, prompting them to sit, stand, or seek air."),
        Q("chain", "If the right ventricle cannot pump blood forward to the lungs, what happens to right atrial (central venous) pressure?",
          ["It rises", "It falls", "It stays at 0 mmHg", "It becomes equal to aortic pressure"], 0,
          "Physiology: RA pressure is regulated by the RV's ability to pump blood forward; when pumping fails, pressure backs up and rises."),
        Q("idea", "Edema is excess fluid in which compartment?",
          ["The extravascular interstitial space", "The lumen of the veins", "The pericardial cavity", "The lymph nodes"], 0,
          "Edema is accumulation of excess fluid in the extravascular interstitial space."),
        Q("bedside", "One calf is swollen and painful; the other leg is normal and the patient has no dyspnea. Which way does the location point?",
          ["Toward a local venous problem in that leg, such as DVT", "Toward a failing pump, which swells only one leg", "Toward a normal finding", "Toward an electrical problem"], 0,
          "Clarification (standard physiology): a one-sided swelling suggests a local cause; the slides tie leg edema with pain to DVT and venous insufficiency."),
        Q("chain", "Why is leg swelling typically worse in the evening than in the morning?",
          ["Hours upright let gravity pull fluid into the legs; lying down overnight redistributes it", "The heart pumps harder at night", "Edema fluid is made only in the evening", "Morning weights remove the fluid"], 0,
          "Clarification (standard physiology): gravity pools fluid in dependent legs during the day; that is why the history asks whether swelling is worse morning or evening.")
      ]),

    // ------------------------------------------------------------------
    D("hp-s1-s2-closure", "S1 and S2: the sounds of valves closing",
      "S1 is the AV valves shutting as the ventricles start to contract, and S2 is the semilunar valves shutting as ejection ends, so systole lies between them and the carotid pulse falls in that gap.",
      [
        S("idea", "The idea",
          "<p>Normal heart sounds are valves <strong>closing</strong>.</p>" +
          "<ul><li><strong>S1 (\"lub\")</strong> = mitral + tricuspid closing at the <strong>start of systole</strong>.</li>" +
          "<li><strong>S2 (\"dub\")</strong> = aortic (A2) + pulmonic (P2) closing at the <strong>end of ejection / start of diastole</strong>.</li></ul>" +
          "<p>So the stretch from S1 to S2 is <strong>systole</strong>, when the ventricles push blood out. That push is what you feel as the carotid pulse &mdash; so the pulse lands between the two sounds.</p>"),
        S("chain", "Cause → effect",
          "<ol class=\"concept-chain\">" +
          "<li>The ventricles begin to contract and their pressure rises above the atria.</li>" +
          "<li>The AV valves close → <strong>S1</strong> (start of isovolumetric contraction).</li>" +
          "<li>Ventricular pressure exceeds the aorta and pulmonary trunk; the semilunar valves open and ejection begins.</li>" +
          "<li>Ejected blood produces the <strong>carotid upstroke</strong>.</li>" +
          "<li>Pressure in the great vessels becomes higher than in the ventricles; the semilunar valves close → <strong>S2</strong>.</li>" +
          "</ol>" +
          Tbl(["", "S1", "S2"], [
            ["Valves closing", "Mitral + tricuspid", "Aortic (A2) + pulmonic (P2)"],
            ["Marks", "Start of systole", "End of systole / start of diastole"],
            ["Timing to carotid", "<strong>Just before</strong> the upstroke", "<strong>After</strong> the upstroke"],
            ["Best heard", "Apex / PMI (left 5th ICS, MCL), diaphragm", "Left 2nd ICS near the sternum, diaphragm"]
          ]) +
          HY("S1 = AV closure, just before the carotid upstroke; S2 = semilunar closure, just after it. Systole lies between them.")),
        S("bedside", "Why it matters clinically",
          "<ul><li><strong>Fast heart rate?</strong> Palpate the carotid while listening: the sound just before the upstroke is S1.</li>" +
          "<li><strong>Where to listen</strong> follows the anatomy concept \"sound follows flow\": AV closure is carried down to the apex, semilunar closure up to the base.</li>" +
          "<li><strong>Documentation:</strong> \"Crisp S1 and S2 with no murmurs, rubs, or gallops.\"</li></ul>" +
          CL + "because systole lies between S1 and S2, a murmur heard between them is a systolic murmur, and one after S2 is diastolic.</p>"),
        S("traps", "Common traps",
          "<ul><li><strong>\"S1 is the aortic valve.\"</strong> S1 is mitral + tricuspid; aortic is part of S2.</li>" +
          "<li><strong>\"Heart sounds are valves opening.\"</strong> S1 and S2 are generated by closure.</li>" +
          "<li><strong>\"The carotid pulse comes after S2.\"</strong> It falls between S1 and S2, during ejection.</li>" +
          "<li><strong>\"S2 is best at the apex.\"</strong> S1 is best at the apex; S2 at the left 2nd ICS.</li></ul>")
      ],
      [
        Q("idea", "What generates the S1 heart sound?",
          ["Closure of the mitral and tricuspid valves", "Closure of the aortic and pulmonic valves", "Opening of the aortic and pulmonic valves", "Atrial contraction into a stiff ventricle"], 0,
          "S1 is AV valve closure at the start of systole."),
        Q("chain", "While palpating the carotid, you hear S1 just before the upstroke. Why does S1 come first?",
          ["The AV valves close as the ventricles start contracting, before ejection pushes blood into the carotid", "The semilunar valves close before ejection", "The carotid pulse is produced by atrial contraction", "S1 is produced by blood hitting the carotid wall"], 0,
          "AV closure begins isovolumetric contraction; only after the semilunar valves open does ejection produce the upstroke."),
        Q("chain", "Why does S2 follow the carotid upstroke?",
          ["The semilunar valves close at the end of ejection, when great-vessel pressure exceeds ventricular pressure", "The AV valves close after the carotid pulse", "S2 is the sound of the semilunar valves opening", "The carotid upstroke closes the aortic valve directly"], 0,
          "Ejection (the upstroke) continues until aortic and pulmonary pressures exceed the ventricles, then the semilunar valves close: S2."),
        Q("idea", "Between S1 and S2, what are the ventricles doing?",
          ["Contracting and ejecting blood (systole)", "Relaxing and filling (diastole)", "Receiving the atrial contraction", "Resting with all valves open"], 0,
          "S1 opens systole and S2 closes it."),
        Q("bedside", "Where and with which head is S1 best heard?",
          ["Left 5th ICS at the MCL (PMI), with the diaphragm", "Left 2nd ICS near the sternum, with the bell", "Right 2nd ICS, with the bell", "Suprasternal notch, with the diaphragm"], 0,
          "S1 is high-pitched AV closure carried down toward the apex."),
        Q("bedside", "Where and with which head is S2 best heard?",
          ["Left 2nd ICS close to the sternal border, with the diaphragm", "The apex, with the bell", "The lower left sternal border, with the bell", "The right 5th ICS, with the diaphragm"], 0,
          "S2 is semilunar closure, carried up toward the base; the slides place it at the left 2nd ICS."),
        Q("bedside", "At a heart rate of 130 you cannot tell S1 from S2. What is the quickest way to sort them out?",
          ["Palpate the carotid pulse: the sound just before the upstroke is S1", "Switch to the bell and listen at the right 2nd ICS", "Have the patient hold a deep inspiration", "Count the respiratory rate"], 0,
          "S1 falls just before the carotid upstroke; S2 follows it."),
        Q("traps", "A student says S2 is the sound of the aortic and pulmonic valves opening. What is the correction?",
          ["S2 is their closing; S1 and S2 are both produced by valve closure", "Correct; S2 is semilunar opening", "S2 is the AV valves opening", "S2 is atrial contraction"], 0,
          "The slides define S1 and S2 by closure: AV valves for S1, aortic and pulmonic for S2.")
      ]),

    // ------------------------------------------------------------------
    D("hp-s2-split", "Physiologic splitting of S2 with inspiration",
      "Inspiration lowers right atrial pressure and draws more blood into the right heart, so the right ventricle ejects longer and P2 closes after A2.",
      [
        S("idea", "The idea",
          "<p>S2 has two parts: <strong>A2</strong> (aortic closure) and <strong>P2</strong> (pulmonic closure). The anatomy lecture notes the pulmonic valve normally shuts just slightly after the aortic.</p>" +
          "<p>On <strong>expiration</strong> they land together and S2 sounds <strong>single</strong>. On <strong>inspiration</strong> they pull apart into \"da-dum\" &mdash; the <strong>physiological split</strong>.</p>" +
          "<p>Why breathing matters: the Physiology lecture says right atrial pressure is <strong>decreased with inspiration</strong>, and when atrial pressure drops, filling increases. The right heart gets an extra helping of blood with every breath in, and it takes a little longer to push it out.</p>"),
        S("chain", "Cause → effect",
          "<ol class=\"concept-chain\">" +
          "<li>The patient breathes in; pressure inside the chest falls.</li>" +
          "<li>Right atrial pressure falls with it.</li>" +
          "<li>More venous blood flows into the right heart.</li>" +
          "<li>The right ventricle has more volume to eject, so ejection takes longer.</li>" +
          "<li>The pulmonic valve closes later → P2 moves away from A2 → S2 splits.</li>" +
          "<li>On expiration the extra filling disappears and S2 is single again.</li>" +
          "</ol>" +
          CL + "the longer right-ventricular ejection that delays P2 is the standard explanation; the slides give the inspiration fall in RA pressure and the split itself.</p>" +
          Tbl(["", "Inspiration", "Expiration"], [
            ["Intrathoracic pressure", "↓", "↑ (back to baseline)"],
            ["Right atrial pressure", "↓", "↑"],
            ["Right-heart filling", "↑", "↓"],
            ["P2 timing", "Later", "With A2"],
            ["S2", "<strong>Split</strong>", "<strong>Single</strong>"]
          ]) +
          HY("Breathe in → more blood to the right heart → P2 late → physiologic split.")),
        S("bedside", "Why it matters clinically",
          "<ul><li><strong>Where to listen:</strong> S2 is best heard with the diaphragm at the left 2nd ICS near the sternal border &mdash; the pulmonic area, where the softer P2 is picked up.</li>" +
          "<li><strong>Same lever as the JVP:</strong> inspiration lowers RA pressure; coughing or forced exhalation raises it (Physiology). The neck veins and the S2 split are reading the same right-atrial pressure.</li></ul>"),
        S("traps", "Common traps",
          "<ul><li><strong>\"A2 moves later.\"</strong> The aortic valve closes first; P2 is the one that is delayed.</li>" +
          "<li><strong>\"The split is in expiration.\"</strong> Physiologic splitting is inspiratory; S2 is usually single in expiration.</li>" +
          "<li><strong>\"Inspiration raises right atrial pressure.\"</strong> It lowers it, which is why filling increases.</li>" +
          "<li><strong>Listening at the apex.</strong> The split is heard at the left 2nd ICS (pulmonic area).</li></ul>")
      ],
      [
        Q("idea", "When does the physiological split of S2 occur?",
          ["During inspiration", "During expiration", "Only during breath-holding in expiration", "Only with the patient lying on the left side"], 0,
          "S2 is single in expiration and splits with inspiration."),
        Q("idea", "In the physiological split, which component of S2 closes later?",
          ["P2 (pulmonic)", "A2 (aortic)", "The mitral valve", "The tricuspid valve"], 0,
          "Inspiration delays right-ventricular emptying, so P2 follows A2."),
        Q("chain", "During inspiration, what happens to intrathoracic pressure and right atrial pressure?",
          ["Both fall", "Both rise", "Intrathoracic pressure falls; right atrial pressure rises", "Intrathoracic pressure rises; right atrial pressure falls"], 0,
          "Physiology: RA pressure is decreased with inspiration as chest pressure drops."),
        Q("chain", "Why does P2 move later during inspiration?",
          ["More blood returns to the right heart, so the right ventricle takes longer to empty", "Less blood returns to the right heart, so the RV empties faster", "The aortic valve closes earlier because the LV fills more", "The pulmonic valve stiffens during inspiration"], 0,
          "Lower RA pressure → more right-heart filling → longer RV ejection → later pulmonic closure."),
        Q("chain", "The patient exhales completely. What do you predict S2 will sound like?",
          ["Single", "Widely split", "Replaced by an S3", "Absent"], 0,
          "With expiration the extra right-heart filling is gone and A2 and P2 fall together."),
        Q("bedside", "Where and with which head do you best hear the physiological split?",
          ["Left 2nd ICS near the sternum, with the diaphragm", "Apex, with the bell", "Right 2nd ICS, with the bell", "Lower left sternal border, with the bell"], 0,
          "S2 and its pulmonic component are best heard with the diaphragm in the pulmonic area."),
        Q("chain", "Coughing or forced exhalation raises right atrial pressure. What would that do to right-heart filling and the S2 split?",
          ["Filling falls and the split narrows toward a single S2", "Filling rises and the split widens", "Filling is unchanged and the split widens", "The split reverses so A2 follows P2"], 0,
          "Physiology: RA pressure rises with coughing or forced exhalation, which reduces filling; less extra RV volume means P2 is not delayed (clarification)."),
        Q("traps", "A student says the aortic valve closes later during inspiration. What is wrong?",
          ["It is P2 that is delayed; the aortic valve normally closes first", "Nothing; A2 is delayed by inspiration", "Neither valve changes; the split is caused by the mitral valve", "Both valves close later by the same amount"], 0,
          "The extra inspiratory filling goes to the right heart, delaying pulmonic closure; the pulmonic valve normally shuts just after the aortic.")
      ]),

    // ------------------------------------------------------------------
    D("hp-s3-s4", "S3 vs S4: two filling sounds",
      "S3 is blood rushing in during early rapid filling and S4 is the atrium forcing blood into a stiff ventricle at the end of diastole, so timing tells you which problem you are hearing.",
      [
        S("idea", "The idea",
          "<p>S1 and S2 are valves closing. <strong>S3 and S4 are blood filling the ventricle</strong>. Both are low-pitched, both are in diastole, both are best heard at the apex with the bell. What separates them is <strong>when</strong> in diastole they happen &mdash; and that tells you why.</p>" +
          "<p>Diastole has two big filling moments (Physiology lecture):</p>" +
          "<ul><li><strong>Rapid filling</strong> right after the AV valves open &mdash; early diastole &mdash; when blood pours in. <strong>S3</strong> lives here.</li>" +
          "<li><strong>Atrial contraction</strong> in the last third of diastole, the final push. <strong>S4</strong> lives here, right before S1.</li></ul>"),
        S("chain", "Cause → effect",
          "<p><strong>S3 (ventricular gallop):</strong></p>" +
          "<ol class=\"concept-chain\">" +
          "<li>S2 closes the semilunar valves; the ventricle relaxes and the AV valves open.</li>" +
          "<li>Blood rushes into the ventricle in the rapid filling phase.</li>" +
          "<li>In a hyperdynamic or over-distended ventricle, that early filling is fast and stops abruptly, causing vibrations.</li>" +
          "<li>You hear S3 shortly after S2.</li>" +
          "</ol>" +
          "<p><strong>S4 (atrial gallop):</strong></p>" +
          "<ol class=\"concept-chain\">" +
          "<li>Late in diastole the atrium contracts.</li>" +
          "<li>It forces blood into a stiff or hypertrophic ventricle that resists stretching.</li>" +
          "<li>The rush of blood against the stiff wall is turbulent and makes a sound.</li>" +
          "<li>You hear S4 immediately before S1 &mdash; often you can also feel it at the apex.</li>" +
          "</ol>" +
          Tbl(["", "S3", "S4"], [
            ["Timing", "Early diastole, after S2", "End of diastole, before S1"],
            ["Filling phase", "Rapid (passive) filling", "Atrial contraction"],
            ["Ventricle", "Hyperdynamic / over-distended", "<strong>Stiff or hypertrophic</strong>"],
            ["Settings on slides", "Hyperdynamic states", "LVH (hypertension, aortic stenosis, HCM), acute ischemia, hyperkinetic states"],
            ["↑ venous return", "<strong>Louder</strong>", "&mdash;"],
            ["↓ venous return", "<strong>Softer</strong>", "&mdash;"]
          ]) +
          Mn("Ken-TUC-ky vs TEN-nes-see", "Kentucky = S1-S2-S3 (extra sound after S2). Tennessee = S4-S1-S2 (extra sound before S1).") +
          HY("S3 = early rapid filling, louder with more venous return. S4 = atrial kick into a stiff, hypertrophic ventricle.")),
        S("bedside", "Why it matters clinically",
          "<ul><li><strong>Hypertensive patient, sound before S1:</strong> think S4 from LVH &mdash; the thick wall resists the atrial push.</li>" +
          "<li><strong>Technique:</strong> bell at the apex, patient in <strong>left lateral decubitus</strong> for S3 (brings the LV close to the chest wall). S4 is frequently palpable at the apex.</li>" +
          "<li><strong>Physiology link:</strong> a stiff ventricle is a low-<strong>compliance</strong> ventricle &mdash; it takes more pressure to add the same volume. That is the S4 setting.</li>" +
          "<li><strong>Documentation:</strong> \"no murmurs, rubs, or gallops\" &mdash; S3 and S4 are the gallops.</li></ul>"),
        S("traps", "Common traps",
          "<ul><li><strong>Using the diaphragm.</strong> S3 and S4 are low-pitched: bell.</li>" +
          "<li><strong>Swapping the timing.</strong> S3 is after S2; S4 is before S1.</li>" +
          "<li><strong>\"S3 and S4 are valve sounds.\"</strong> They are filling sounds; no valve is closing.</li>" +
          "<li><strong>\"S4 = big floppy ventricle.\"</strong> S4 is the stiff/hypertrophic ventricle; the venous-return-sensitive early filling sound is S3.</li></ul>")
      ],
      [
        Q("idea", "When does S3 occur in the cardiac cycle?",
          ["Early diastole, shortly after S2, during rapid filling", "Late diastole, immediately before S1", "Mid-systole, between S1 and S2", "At the same moment as S1"], 0,
          "S3 is the ventricular gallop of the rapid early filling phase."),
        Q("idea", "When does S4 occur, and what produces it?",
          ["End of diastole just before S1, when the atrium forces blood into a stiff ventricle", "Early diastole just after S2, from rapid passive filling", "Mid-systole, from the aortic valve opening", "During S2, from pulmonic closure"], 0,
          "S4 is the atrial gallop: atrial contraction pushing blood into a stiff or hypertrophic ventricle."),
        Q("bedside", "A patient with long-standing hypertension has a low-pitched sound immediately before S1. What is it and why?",
          ["S4, because the atrium is pushing blood into a stiff, hypertrophied left ventricle", "S3, because rapid early filling stops abruptly", "A split S2, because inspiration delays P2", "A friction rub, because the pericardium is inflamed"], 0,
          "Hypertension causes LVH; the thick, stiff ventricle resists the atrial push, producing S4 before S1."),
        Q("chain", "A maneuver increases venous return. What happens to an S3?",
          ["It gets louder", "It gets softer", "It turns into an S4", "It disappears"], 0,
          "More venous return means faster, larger early filling, so S3 is accentuated."),
        Q("chain", "A maneuver decreases venous return. What happens to an S3?",
          ["It gets softer", "It gets louder", "It moves to just before S1", "It becomes high-pitched"], 0,
          "Less blood rushing in during rapid filling softens S3."),
        Q("bedside", "How do you best bring out an S3?",
          ["Bell at the apex with the patient in left lateral decubitus", "Diaphragm at the right 2nd ICS with the patient leaning forward", "Diaphragm at the left 2nd ICS during inspiration", "Bell over the carotid while the patient holds their breath"], 0,
          "S3 is low-pitched and apical; left lateral decubitus brings the LV close to the chest wall."),
        Q("chain", "Aortic stenosis has caused left ventricular hypertrophy. Which extra heart sound do you predict?",
          ["S4", "S3", "Physiologic split of S2", "Pericardial friction rub"], 0,
          "LVH from aortic stenosis makes a stiff ventricle that resists the late atrial push: S4."),
        Q("idea", "Which extra heart sound is frequently palpable at the cardiac apex?",
          ["S4", "S3", "S1", "S2"], 0,
          "The slides note S4 is frequently also palpable at the apex."),
        Q("traps", "What do S3 and S4 have in common mechanically?",
          ["Both are produced by blood filling the ventricle during diastole", "Both are produced by valves closing", "Both occur during systole", "Both are high-pitched and need the diaphragm"], 0,
          "Unlike S1 and S2, the gallops are filling sounds, both low-pitched and diastolic."),
        Q("bedside", "Physiology defines compliance as how easily a structure stretches with added volume. A low-compliance (stiff) ventricle receiving the atrial push is the setting for which sound?",
          ["S4", "S3 from hyperdynamic flow", "S1", "A thrill"], 0,
          "A stiff ventricle resists the late atrial push, which is the S4 mechanism.")
      ]),

    // ------------------------------------------------------------------
    D("hp-bell-diaphragm", "Bell vs diaphragm: match the head to the pitch",
      "The diaphragm is for high-pitched sounds and the bell for low-pitched ones, so you choose the head by the pitch of the sound you are hunting, not by how loud it is.",
      [
        S("idea", "The idea",
          "<p>Heart sounds differ in <strong>pitch</strong> (frequency). The stethoscope has two heads, each tuned to a different range:</p>" +
          Tbl(["Head", "Best for", "Examples on the slides"], [
            ["<strong>Diaphragm</strong>", "<strong>High-pitched</strong>", "S1, S2, aortic regurgitation murmur, mitral regurgitation murmur, pericardial friction rub"],
            ["<strong>Bell</strong>", "<strong>Low-pitched</strong>", "S3, S4, mitral stenosis murmur, bruits"]
          ]) +
          "<p>Picture two radios, one that only plays treble and one that only plays bass. You pick the radio by the type of music, not the volume.</p>"),
        S("chain", "Cause → effect",
          "<ol class=\"concept-chain\">" +
          "<li>Decide what you are hunting and whether it is high- or low-pitched.</li>" +
          "<li>Pick the matching head: high → diaphragm, low → bell.</li>" +
          "<li>Place it where that sound is carried (follow the flow).</li>" +
          "<li>The right head passes that range and you hear it; the wrong head makes it faint or inaudible.</li>" +
          "</ol>" +
          CL + "the bell is rested lightly on the skin to pick up low frequencies; the diaphragm is pressed firmly and filters out low frequencies, letting high ones through. Pressing the bell hard stretches the skin into a diaphragm and loses the low sounds.</p>" +
          HY("Diaphragm = high pitch (S1, S2, AR, MR, rubs). Bell = low pitch (S3, S4, MS, bruits).")),
        S("bedside", "Why it matters clinically",
          "<ul><li><strong>Where each head goes:</strong> the diaphragm covers all areas (right 2nd, left 2nd, left 3rd, 4th, 5th ICS, apex). The bell is used over the left 4th and 5th ICS and the apex &mdash; where the low-pitched filling sounds and the mitral stenosis murmur are carried.</li>" +
          "<li><strong>Murmur maneuvers pair with the head:</strong> mitral stenosis → bell at the apex; aortic regurgitation → diaphragm at the left sternal border.</li>" +
          "<li><strong>Bruits</strong> over the temporal, carotid, aortic, renal, iliac, and femoral arteries are listened for with the bell.</li></ul>"),
        S("traps", "Common traps",
          "<ul><li><strong>\"Use the diaphragm for soft sounds.\"</strong> The choice is about pitch, not loudness.</li>" +
          "<li><strong>\"All murmurs go with the diaphragm.\"</strong> Mitral stenosis is low-pitched: bell.</li>" +
          "<li><strong>\"Gallops are high-pitched.\"</strong> S3 and S4 are low-pitched: bell.</li></ul>")
      ],
      [
        Q("idea", "Which head do you use for S3 and S4, and why?",
          ["The bell, because they are low-pitched", "The diaphragm, because they are high-pitched", "The diaphragm, because they are loud", "The bell, because they are high-pitched"], 0,
          "S3 and S4 are low-pitched filling sounds; the bell detects low pitches."),
        Q("idea", "Which head detects the murmur of aortic regurgitation best?",
          ["The diaphragm, because it is high-pitched", "The bell, because it is low-pitched", "The bell, because it is diastolic", "Either head equally"], 0,
          "The slides list the AR and MR murmurs with the high-pitched diaphragm sounds."),
        Q("idea", "Which head detects the murmur of mitral stenosis best?",
          ["The bell, because it is low-pitched", "The diaphragm, because it is high-pitched", "The diaphragm, because it is at the apex", "Neither; it is only palpable"], 0,
          "Mitral stenosis is grouped with S3 and S4 as a low-pitched bell sound."),
        Q("bedside", "You are listening for a pericardial friction rub. Which head?",
          ["Diaphragm", "Bell", "Bell pressed lightly over the carotid", "No stethoscope; rubs are palpated"], 0,
          "Pericardial friction rubs are high-pitched diaphragm sounds."),
        Q("bedside", "Which head is used when auscultating the carotid for a bruit?",
          ["Bell", "Diaphragm", "Either, pressed firmly", "Neither; bruits are palpated"], 0,
          "The slides use the bell for bruits."),
        Q("bedside", "On the precordium, the bell is used mainly over which areas, and why there?",
          ["Left 4th ICS, left 5th ICS, and the apex, where low-pitched filling sounds and mitral stenosis are carried", "Right and left 2nd ICS, where S2 is loudest", "The suprasternal notch, where bruits are loudest", "The right lower sternal border only"], 0,
          "Low-pitched sounds (S3, S4, MS) come from ventricular filling and the mitral area, carried to the lower left chest and apex."),
        Q("traps", "A student switches to the diaphragm because a sound is soft. What principle is she missing?",
          ["The head is chosen by pitch, not loudness", "The diaphragm is only for murmurs", "The bell amplifies all sounds", "Soft sounds need no stethoscope"], 0,
          "Diaphragm = high-pitched; bell = low-pitched. Volume does not decide."),
        Q("traps", "You press the bell firmly against the chest while listening for an S3, and it disappears. What happened?",
          ["Firm pressure stretched the skin into a diaphragm and filtered out the low-pitched sound", "S3 only occurs with light pressure on the chest", "Firm pressure stopped ventricular filling", "The bell picks up only high-pitched sounds"], 0,
          "Clarification (standard physiology): the bell must rest lightly; pressed hard it behaves like a diaphragm and loses low frequencies.")
      ]),

    // ------------------------------------------------------------------
    D("hp-murmur-maneuvers", "Bringing a murmur closer: the MS and AR maneuvers",
      "Each augmenting maneuver moves the part of the heart making the murmur closer to the stethoscope and pairs it with the head that matches the murmur's pitch.",
      [
        S("idea", "The idea",
          "<p>A soft murmur gets louder if you move its source closer to the stethoscope and listen with the right head. The two maneuvers on the slides do exactly that.</p>" +
          Tbl(["", "Mitral stenosis", "Aortic regurgitation"], [
            ["Position", "Roll partly onto the <strong>left side</strong> (left lateral decubitus)", "<strong>Sit up, lean forward, exhale completely</strong>, pause in expiration"],
            ["What it does", "Brings the <strong>left ventricle close to the chest wall</strong>", "Brings the heart's base and outflow closer (clarification below)"],
            ["Pitch", "Low", "High"],
            ["Head", "<strong>Bell</strong>", "<strong>Diaphragm</strong>"],
            ["Where", "On the <strong>apical impulse</strong>", "<strong>Left sternal border, 3rd/4th interspaces</strong>, and the apex"]
          ])),
        S("chain", "Cause → effect",
          "<ol class=\"concept-chain\">" +
          "<li>Identify the murmur you suspect and its pitch.</li>" +
          "<li>Position the patient so that part of the heart moves toward the chest wall.</li>" +
          "<li>Less tissue and air between source and stethoscope → the murmur is louder.</li>" +
          "<li>Use the matching head (low → bell, high → diaphragm) at the spot where flow carries the sound.</li>" +
          "</ol>" +
          CL + "leaning forward lets the heart fall toward the front of the chest, and a full exhalation empties the lungs so less air-filled lung sits between the heart and the stethoscope.</p>" +
          Mn("MS = Mitral, left Side, bell", "Mitral Stenosis: roll to the left Side, bell on the apex. AR: lean forward, breathe out, diaphragm on the left sternal border.") +
          HY("MS: left lateral decubitus + bell at the apex. AR: sit up, lean forward, full exhale + diaphragm at the left sternal border.")),
        S("bedside", "Why it matters clinically",
          "<ul><li><strong>Same logic for S3:</strong> S3 is also low-pitched and apical, and it is also best heard with the bell in left lateral decubitus.</li>" +
          "<li><strong>AR on palpation:</strong> a forceful PMI that terminates quickly suggests aortic regurgitation (or a hypermetabolic state) &mdash; a cue to do the AR maneuver.</li>" +
          "<li><strong>Murmurs are turbulence:</strong> a diseased valve makes turbulent flow, and the maneuver just helps you hear it.</li></ul>"),
        S("traps", "Common traps",
          "<ul><li><strong>Swapping the heads.</strong> MS = bell (low). AR = diaphragm (high).</li>" +
          "<li><strong>Holding the breath in inspiration for AR.</strong> The slides say exhale completely and pause in expiration.</li>" +
          "<li><strong>Left lateral decubitus for everything.</strong> It is the move for the apical, low-pitched sounds (MS, S3).</li>" +
          "<li><strong>Listening for MS at the base.</strong> MS is at the apical impulse.</li></ul>")
      ],
      [
        Q("idea", "How do you augment a suspected mitral stenosis murmur?",
          ["Roll the patient partly onto the left side and place the bell on the apical impulse", "Have the patient sit up, lean forward, and exhale; use the diaphragm at the left sternal border", "Have the patient inhale and hold; use the diaphragm at the left 2nd ICS", "Lay the patient flat; use the bell at the right 2nd ICS"], 0,
          "Left lateral decubitus brings the LV close to the chest wall; MS is low-pitched, so use the bell at the apex."),
        Q("chain", "Why does the left lateral decubitus position help you hear mitral stenosis?",
          ["It brings the left ventricle close to the chest wall", "It increases the heart rate", "It moves the aortic valve to the apex", "It stops the murmur's turbulence"], 0,
          "The slides state the position brings the left ventricle close to the chest wall."),
        Q("idea", "How do you augment a suspected aortic regurgitation murmur?",
          ["Sit up, lean forward, exhale completely and pause; diaphragm along the left sternal border (3rd/4th) and apex", "Left lateral decubitus with the bell at the apex", "Supine with the bell at the left 2nd ICS during inspiration", "Standing with the bell over the carotid"], 0,
          "AR is high-pitched; the lean-forward full-exhale position with the diaphragm brings it out."),
        Q("chain", "Why is the bell used for mitral stenosis but the diaphragm for aortic regurgitation?",
          ["MS is low-pitched and AR is high-pitched", "MS is louder than AR", "AR is low-pitched and MS is high-pitched", "The bell only works at the apex"], 0,
          "Head follows pitch: MS low → bell; AR high → diaphragm."),
        Q("chain", "Why ask the patient to exhale completely during the AR maneuver?",
          ["Emptying the lungs leaves less air-filled lung between the heart and the stethoscope", "Exhaling increases the regurgitant volume", "Exhaling splits S2 so AR can be heard", "Exhaling moves the aortic valve to the apex"], 0,
          "Clarification (standard physiology): deflated lungs and a forward-leaning heart put the source closer to the chest wall."),
        Q("bedside", "S3 is also best heard in left lateral decubitus. Why does the same position work?",
          ["S3 is a low-pitched apical LV sound, and the position brings the LV close to the chest wall", "S3 comes from the aortic valve", "S3 is high-pitched and needs the diaphragm", "The position increases atrial contraction"], 0,
          "MS and S3 share the apical, low-pitched profile, so both use the bell with the LV moved forward."),
        Q("bedside", "With the patient supine you hear nothing at the left sternal border, but you suspect a soft AR murmur. Which change most likely brings it out?",
          ["Sit the patient up, lean forward, and listen in full expiration with the diaphragm", "Roll the patient onto the left side and use the bell at the apex", "Have the patient take a deep breath in and hold it", "Switch to the bell over the right carotid"], 0,
          "The AR maneuver moves the source forward and uses the diaphragm for a high-pitched murmur."),
        Q("traps", "A student listens for mitral stenosis with the diaphragm at the right 2nd ICS. What two things should change?",
          ["Use the bell and move to the apical impulse with the patient in left lateral decubitus", "Use the bell but stay at the right 2nd ICS", "Keep the diaphragm and move to the left sternal border with the patient leaning forward", "Nothing; that is the mitral stenosis technique"], 0,
          "MS is low-pitched (bell) and mitral sound is carried to the apex.")
      ]),

    // ------------------------------------------------------------------
    D("hp-pmi", "The PMI: the left ventricle tapping the chest wall",
      "The PMI is the left ventricular apex striking the chest wall, so a bigger ventricle makes it diffuse and displaced while a hyperkinetic one makes it forceful and brief.",
      [
        S("idea", "The idea",
          "<p>The anatomy lecture says the <strong>apex is formed by the left ventricle</strong> and lies in the left 5th ICS just medial to the MCL. When the LV contracts, the apex taps the chest wall: that tap is the <strong>point of maximal impulse (PMI)</strong>.</p>" +
          "<p>Because the PMI <em>is</em> the left ventricle, its size, spot, and force tell you about the LV.</p>" +
          Tbl(["Normal PMI", ""], [
            ["Location", "5th (or 4th) ICS; measured in cm from the MCL"],
            ["Diameter", "One interspace, under 2.5 cm"],
            ["Amplitude / duration", "Brisk, non-sustained (\"tapping\")"]
          ])),
        S("chain", "Cause → effect",
          "<ol class=\"concept-chain\">" +
          "<li>The left ventricle contracts.</li>" +
          "<li>Its apex moves forward and taps the chest wall.</li>" +
          "<li>The size of the ventricle sets how wide the tap is and where it lands.</li>" +
          "<li>The force of contraction sets how strong and how brief the tap feels.</li>" +
          "</ol>" +
          Tbl(["If the LV…", "PMI feels…", "Slide examples"], [
            ["Is normal", "<strong>Tapping</strong>, under 2.5 cm, one interspace", "Normal"],
            ["Is <strong>dilated</strong> (bigger)", "<strong>Diffuse and/or displaced</strong>", "Heart failure, cardiomyopathy"],
            ["Contracts <strong>harder</strong> (hyperkinetic)", "<strong>Forceful, terminates quickly</strong>", "Hypermetabolic states, aortic regurgitation"]
          ]) +
          "<p><strong>Physiology link (Frank&ndash;Starling):</strong> a ventricle filled more during diastole contracts more forcefully.</p>" +
          CL + "in aortic regurgitation, blood leaking back from the aorta adds to the LV's diastolic volume, so by Frank&ndash;Starling the LV contracts more forcefully. A dilated ventricle typically pushes the PMI laterally (to the left of the MCL) and spreads it across more than one interspace.</p>" +
          HY("PMI = LV apex. Diffuse/displaced = dilated LV. Forceful and brief = hyperkinetic LV (hypermetabolic, AR).")),
        S("bedside", "Why it matters clinically",
          "<ul><li><strong>Documentation:</strong> \"PMI is tapping and located at 5th interspace at MCL.\"</li>" +
          "<li><strong>Heave vs thrill:</strong> lifts and heaves come from <strong>forceful contractions</strong>, enlarged ventricles, or ventricular aneurysms (finger pads). Thrills come from <strong>turbulent flow</strong> (ball/heel of the hand). One is the muscle; the other is the blood.</li>" +
          "<li><strong>Same spot as S1 and mitral sounds:</strong> the PMI is where S1 is best heard and where you put the bell for MS and S3.</li></ul>"),
        S("traps", "Common traps",
          "<ul><li><strong>Dilated vs hyperkinetic.</strong> A bigger ventricle makes the PMI diffuse/displaced; a harder-working one makes it forceful and brief.</li>" +
          "<li><strong>\"The PMI is the right ventricle.\"</strong> The apex is formed by the left ventricle.</li>" +
          "<li><strong>Heave vs thrill.</strong> Heave = contraction/enlargement; thrill = turbulent flow.</li>" +
          "<li><strong>\"A big PMI is a strong heart.\"</strong> More than 2.5 cm or more than one interspace suggests dilation.</li></ul>")
      ],
      [
        Q("idea", "What produces the PMI?",
          ["The left ventricular apex tapping the chest wall as it contracts", "The right atrium contracting against the sternum", "Turbulent flow through the aortic valve", "The pulmonic valve closing"], 0,
          "The apex is formed by the LV; its contraction against the chest wall is the PMI."),
        Q("chain", "A patient has dilated cardiomyopathy. What do you predict about the PMI?",
          ["Diffuse and/or displaced", "Tapping and normal-sized", "Forceful and quickly terminating", "Absent on the left, present on the right"], 0,
          "A dilated ventricle produces a larger, displaced impulse."),
        Q("bedside", "The PMI measures 3.5 cm and spans two interspaces. How do you interpret it?",
          ["It suggests an enlarged (dilated) ventricle; normal is one interspace and under 2.5 cm", "Normal", "It suggests a hypermetabolic state", "It suggests a pericardial effusion"], 0,
          "A PMI larger than one interspace or 2.5 cm is diffuse, pointing to ventricular dilation."),
        Q("chain", "A patient in a hypermetabolic state is examined. What do you predict about the PMI?",
          ["Forceful and terminates quickly", "Diffuse and displaced", "Absent", "Tapping and smaller than usual"], 0,
          "Hyperkinesis gives a forceful, brief impulse."),
        Q("chain", "Why does aortic regurgitation produce a forceful, quickly terminating PMI?",
          ["Backflow adds to the LV's diastolic volume, and by Frank–Starling the LV contracts more forcefully", "The LV shrinks and contracts weakly", "The aortic valve taps the chest wall", "The right ventricle takes over the apex"], 0,
          "Clarification (standard physiology): extra filling from the leaking valve strengthens contraction via Frank–Starling."),
        Q("chain", "Per the Frank–Starling mechanism, a ventricle filled to a greater degree during diastole contracts…",
          ["More forcefully", "Less forcefully", "With no change in force", "Only if the heart rate drops"], 0,
          "Physiology: increased end-diastolic volume → increased force of contraction."),
        Q("traps", "Which palpable finding is produced by turbulent blood flow rather than by the ventricle's own motion?",
          ["A thrill, felt with the ball/heel of the hand", "A heave, felt with the finger pads", "A tapping PMI", "A displaced PMI"], 0,
          "Thrills = turbulent flow; heaves and the PMI = ventricular contraction or enlargement."),
        Q("idea", "Why is the normal PMI found at the left 5th (or 4th) ICS near the midclavicular line?",
          ["That is where the left ventricle forms the cardiac apex", "That is where the aortic valve sits", "That is where the right ventricle meets the sternum", "That is the location of the SA node"], 0,
          "Anatomy: the apex, formed by the LV, lies in the left 5th ICS just medial to the MCL.")
      ]),

    // ------------------------------------------------------------------
    D("hp-jvp", "JVP: a column of blood that reads right atrial pressure",
      "With no valve between the great veins and the right atrium, the top of the internal jugular column rises and falls with right atrial pressure, which is what the JVP measures.",
      [
        S("idea", "The idea",
          "<p>The Physiology lecture points out that there are <strong>no valves between the great veins and the atria</strong>. So the right internal jugular vein is an open column of blood sitting on top of the right atrium, like a straw standing in a cup. The higher the pressure in the cup, the higher the liquid rises in the straw.</p>" +
          "<p>That is why the JVP <strong>reflects right atrial pressure</strong>, which equals <strong>central venous pressure</strong> and <strong>right ventricular end-diastolic pressure</strong>. The <strong>right</strong> IJ is used because it has the <strong>most direct channel</strong> into the right atrium.</p>"),
        S("chain", "Cause → effect",
          "<ol class=\"concept-chain\">" +
          "<li>Right atrial pressure rises (for example, the right ventricle can't pump forward).</li>" +
          "<li>The blood column in the internal jugular rises with it.</li>" +
          "<li>The top of the oscillation (meniscus) appears higher in the neck.</li>" +
          "<li>You measure its vertical height above the sternal angle and add 5 cm (sternal angle to the center of the RA).</li>" +
          "<li>A higher number means a higher right atrial pressure. Normal is 6&ndash;8 cm.</li>" +
          "</ol>" +
          Tbl(["If…", "Right atrial pressure", "JVP"], [
            ["The RV pumps strongly (Physiology: atrial pressure drops)", "↓", "↓"],
            ["The RV can't pump blood forward", "↑", "↑"],
            ["Inspiration", "↓", "Column falls"],
            ["Coughing / forced exhalation", "↑", "Column rises"]
          ]) +
          CL + "the JVP is a vertical height above the right atrium, so raising or lowering the head of the bed changes where the meniscus appears in the neck but not the pressure. That is why the slides say to raise or lower the bed until the meniscus is in the lower half of the neck.</p>" +
          HY("JVP = vertical height above the sternal angle + 5 cm = right atrial pressure (normal 6–8 cm).")),
        S("bedside", "Why it matters clinically",
          "<ul><li><strong>Pump question at the bedside:</strong> a high JVP shows pressure backing up behind the right heart (see \"When the pump falls behind\").</li>" +
          "<li><strong>Same lever as the S2 split:</strong> inspiration lowers RA pressure, which both drops the JVP column and increases right-heart filling.</li>" +
          "<li><strong>Technique:</strong> head of bed about 30&deg;, head turned slightly away, SCM relaxed, tangential light. Distinguish the IJ from the carotid pulse.</li>" +
          "<li><strong>Documentation:</strong> \"JVP measured at 6 cm with head of bed elevated to 30 degrees.\"</li></ul>"),
        S("traps", "Common traps",
          "<ul><li><strong>Forgetting the 5 cm.</strong> The ruler reading is height above the sternal angle; the JVP is measured from the RA, so add 5 cm.</li>" +
          "<li><strong>Using the left side or the carotid.</strong> The right IJ is the most direct channel; the carotid is an arterial pulse.</li>" +
          "<li><strong>\"JVP shows left-sided pressure.\"</strong> It reflects right atrial pressure (= CVP = RVEDP).</li>" +
          "<li><strong>\"Inspiration raises the JVP.\"</strong> Inspiration lowers right atrial pressure.</li></ul>")
      ],
      [
        Q("idea", "What does the jugular venous pressure reflect?",
          ["Right atrial pressure (= central venous pressure = RV end-diastolic pressure)", "Left atrial pressure", "Aortic systolic pressure", "Pulmonary artery systolic pressure"], 0,
          "The JVP reflects RA pressure, which equals CVP and RVEDP."),
        Q("idea", "Why is the JVP estimated from the RIGHT internal jugular vein?",
          ["It has the most direct channel into the right atrium", "It is the only jugular vein with valves", "The left internal jugular drains into the left atrium", "The right side is closer to the carotid"], 0,
          "The right IJ runs most directly into the right atrium."),
        Q("chain", "Why can a vein in the neck show the pressure inside the right atrium?",
          ["There are no valves between the great veins and the atria, so the venous column is continuous with the RA", "The jugular vein is part of the right atrium", "Arterial pressure is transmitted backward into the vein", "The tricuspid valve opens into the jugular vein"], 0,
          "Physiology: no valves separate the great veins from the atria, so RA pressure is transmitted up the column."),
        Q("bedside", "The top of the right IJ pulsation is 3 cm above the sternal angle. What is the JVP and how do you interpret it?",
          ["8 cm, normal", "3 cm, low", "13 cm, elevated", "8 cm, elevated"], 0,
          "3 cm + 5 cm (sternal angle to RA) = 8 cm, within the normal 6–8 cm."),
        Q("bedside", "The top of the right IJ pulsation is 7 cm above the sternal angle. What is the JVP?",
          ["12 cm, elevated", "7 cm, normal", "2 cm, low", "12 cm, normal"], 0,
          "7 + 5 = 12 cm, above the normal 6–8 cm."),
        Q("chain", "The right ventricle cannot pump blood forward to the lungs. What happens to the JVP?",
          ["It rises", "It falls", "It does not change", "It becomes pulsatile like the carotid"], 0,
          "RA pressure depends on the RV pumping forward; when it can't, RA pressure and the jugular column rise."),
        Q("chain", "During inspiration, what happens to right atrial pressure?",
          ["It decreases", "It increases", "It stays constant", "It equals left atrial pressure"], 0,
          "Physiology: RA pressure is decreased with inspiration and increased with coughing or forced exhalation."),
        Q("chain", "A patient coughs forcefully while you watch the neck. What do you predict right atrial pressure does?",
          ["It increases", "It decreases", "It does not change", "It drops to zero"], 0,
          "Physiology: coughing or forced exhalation raises intrathoracic and RA pressure."),
        Q("traps", "Why do you add 5 cm to the height measured above the sternal angle?",
          ["The sternal angle is about 5 cm above the center of the right atrium, and the JVP is measured from the RA", "To convert centimeters to mmHg", "To correct for the left atrium", "Because the carotid sits 5 cm higher"], 0,
          "The JVP is the column height above the RA; the sternal angle is about 5 cm above it."),
        Q("traps", "You raise the head of the bed and the meniscus drops lower in the neck. Has the right atrial pressure changed?",
          ["No; the pressure is a vertical height above the RA, so only where it appears in the neck changes", "Yes; raising the bed always raises the pressure", "Yes; raising the bed always drops the pressure to zero", "It cannot be measured once the bed is moved"], 0,
          "Clarification (standard physiology): bed angle changes where the meniscus sits, not the vertical height; that is why you adjust the bed to bring it into view.")
      ]),

    // ------------------------------------------------------------------
    D("hp-turbulence", "Turbulence you can hear and feel: murmurs, bruits, thrills",
      "Smooth laminar flow is silent; anything that disrupts it — a diseased valve or an atherosclerotic plaque — makes turbulent flow you can hear as a murmur or bruit and sometimes feel as a thrill.",
      [
        S("idea", "The idea",
          "<p>A calm river is quiet; rapids are loud. Blood is the same.</p>" +
          "<ul><li><strong>Laminar flow</strong> is smooth, streamlined, and needs less pressure to move forward.</li>" +
          "<li><strong>Turbulent flow</strong> moves in all directions and needs greater pressure to move forward.</li></ul>" +
          "<p>The Physiology lecture names what causes turbulence: <strong>atherosclerotic plaque</strong> disrupting the smooth lining, <strong>higher viscosity</strong>, and a <strong>diseased heart valve</strong>. The turbulence is what you perceive as sound.</p>" +
          Tbl(["Where the turbulence is", "What you detect", "How"], [
            ["A diseased heart valve", "<strong>Murmur</strong>", "Stethoscope over the precordium"],
            ["A narrowed artery (plaque)", "<strong>Bruit</strong>", "<strong>Bell</strong> over temporal, carotid, aortic, renal, iliac, femoral arteries"],
            ["Strong enough to vibrate the chest wall", "<strong>Thrill</strong>", "<strong>Ball/heel of the hand</strong>: left sternal border (4th/5th), apex"]
          ])),
        S("chain", "Cause → effect",
          "<ol class=\"concept-chain\">" +
          "<li>A smooth lining keeps flow laminar and silent.</li>" +
          "<li>Plaque, a stiff or leaky valve, or higher viscosity disrupts the flow.</li>" +
          "<li>Flow becomes turbulent, moving in all directions.</li>" +
          "<li>The turbulence vibrates: heard as a murmur (valve) or bruit (artery).</li>" +
          "<li>If strong enough, the vibration is felt on the chest wall as a thrill.</li>" +
          "</ol>" +
          Tbl(["If…", "Flow", "Finding"], [
            ["Lining smooth, valve healthy", "Laminar", "Silent"],
            ["Plaque narrows an artery", "Turbulent", "Bruit; more pressure needed to push blood forward"],
            ["Valve cusps diseased or worn", "Turbulent", "Murmur (± thrill)"],
            ["Viscosity ↑", "More turbulent", "Louder flow sounds"]
          ]) +
          HY("Murmur, bruit, and thrill are the same mechanism: turbulent flow. Heard in the heart = murmur; in an artery = bruit; felt = thrill.")),
        S("bedside", "Why it matters clinically",
          "<ul><li><strong>Bruit exam:</strong> bell over the temporal, carotid (patient holds breath so breath sounds don't mask it), aortic, renal, iliac, and femoral arteries.</li>" +
          "<li><strong>Anatomy link:</strong> diseased or worn-out cusps don't close efficiently, and murmurs are detected by the turbulent flow.</li>" +
          "<li><strong>Documentation:</strong> \"Carotid upstrokes are brisk without bruits.\"</li></ul>"),
        S("traps", "Common traps",
          "<ul><li><strong>Heave vs thrill.</strong> A heave is forceful contraction or an enlarged ventricle; a thrill is turbulent flow.</li>" +
          "<li><strong>Thrills with the fingertips.</strong> Use the ball/heel of the hand; finger pads are for heaves and pulses.</li>" +
          "<li><strong>\"Murmurs and bruits are different phenomena.\"</strong> Same mechanism in a different place.</li>" +
          "<li><strong>\"Turbulent flow is easier to push.\"</strong> It requires greater pressure to move forward.</li></ul>")
      ],
      [
        Q("chain", "Atherosclerotic plaque narrows a carotid artery. What do you predict on auscultation?",
          ["A bruit, because plaque disrupts the lining and makes flow turbulent", "Silence, because narrowing makes flow laminar", "An S4, because the carotid is stiff", "A friction rub, because the vessel wall is inflamed"], 0,
          "Plaque disrupts the smooth lining, creating turbulent flow heard as a bruit."),
        Q("idea", "What is a thrill?",
          ["The palpable vibration of turbulent blood flow, felt with the ball/heel of the hand", "A sustained lift from an enlarged ventricle, felt with the finger pads", "A low-pitched sound before S1", "The normal tapping PMI"], 0,
          "Thrills are produced by underlying turbulent flow."),
        Q("chain", "Why does a diseased heart valve produce a murmur?",
          ["Blood flows turbulently through it, and the turbulence is what you hear", "The valve stops closing so no sound is made", "The valve's electrical activity is audible", "The valve slows the heart rate"], 0,
          "Physiology: heart murmurs result from turbulent flow through a diseased valve."),
        Q("chain", "Compared with laminar flow, turbulent flow needs ___ pressure to move blood forward.",
          ["Greater", "Less", "The same", "Zero"], 0,
          "Turbulent flow moves in all directions and requires greater pressure to move forward."),
        Q("chain", "Blood viscosity increases. What happens to turbulence?",
          ["It increases", "It decreases", "It disappears", "It is unaffected"], 0,
          "Physiology: higher viscosity (more friction between molecules) creates more turbulence."),
        Q("bedside", "Why ask the patient to hold their breath while you listen over the carotid?",
          ["So breath sounds don't mask a soft bruit", "To raise carotid pressure and create a bruit", "To split S2", "To slow the heart"], 0,
          "Breath-holding removes breath sounds so the turbulence of a bruit can be heard."),
        Q("traps", "Which finding is produced by forceful contraction or an enlarged ventricle rather than by turbulence?",
          ["A heave", "A thrill", "A bruit", "A murmur"], 0,
          "Heaves come from the muscle (forceful contraction, enlargement, aneurysm); thrills, bruits, and murmurs come from turbulent flow."),
        Q("traps", "A murmur and a carotid bruit share which mechanism?",
          ["Turbulent blood flow", "Valve closure", "Ventricular filling against a stiff wall", "Pericardial friction"], 0,
          "Both are turbulence: in the heart it is a murmur, in an artery a bruit.")
      ]),

    // ------------------------------------------------------------------
    D("hp-abi", "ABI: comparing ankle to arm to find a blockage",
      "A significant leg stenosis lowers the pressure that reaches the ankle, so the ankle-to-arm ratio falls with PAD — unless calcified vessels resist the cuff and read falsely high.",
      [
        S("idea", "The idea",
          "<p>Systolic pressure should arrive at the ankle about as strong as it is in the arm. A narrowing in a leg artery eats some of that pressure, so less reaches the ankle.</p>" +
          "<p>The <strong>ankle-brachial index</strong> puts a number on that: <strong>ankle systolic ÷ arm systolic</strong>, measured with Doppler. It detects <strong>stenosis of 50% or more</strong> in the major leg vessels.</p>" +
          Tbl(["Side", "Formula"], [
            ["Right ABI", "Highest right ankle pressure ÷ highest pressure in <strong>either</strong> arm"],
            ["Left ABI", "Highest left ankle pressure ÷ highest pressure in <strong>either</strong> arm"]
          ])),
        S("chain", "Cause → effect",
          "<ol class=\"concept-chain\">" +
          "<li>A leg artery narrows by 50% or more.</li>" +
          "<li>Turbulent, obstructed flow loses pressure across the narrowing.</li>" +
          "<li>Ankle systolic pressure falls while arm pressure is unchanged.</li>" +
          "<li>The ratio falls: the lower the ABI, the more severe the PAD.</li>" +
          "</ol>" +
          Tbl(["ABI (slide 86)", "Meaning"], [
            ["&gt;1.30", "<strong>Noncompressible, calcified vessel</strong>"],
            ["0.91&ndash;1.30", "Normal"],
            ["0.41&ndash;0.90", "Mild-to-moderate PAD"],
            ["0&ndash;0.40", "Severe PAD"]
          ]) +
          CL + "a calcified artery is too stiff for the cuff to squeeze shut, so it takes extra cuff pressure to stop flow and the ankle pressure reads falsely high. An ABI above 1.30 therefore isn't \"extra healthy\" &mdash; it can't be trusted. The <strong>highest</strong> arm pressure is used because it is the best estimate of true systolic pressure; a lower arm reading may itself reflect narrowing in that arm.</p>" +
          HY("Stenosis ↓ ankle pressure → ↓ ABI. Calcified, noncompressible vessels ↑ the reading → ABI above 1.30 is unreliable, not normal.")),
        S("bedside", "Why it matters clinically",
          "<ul><li><strong>History first:</strong> leg pain or cramping with exertion (and how far they can walk), coldness, pallor, hair loss over the anterior tibia, slow-healing ulcers &mdash; the supply-demand pattern in the legs.</li>" +
          "<li><strong>Arterial insufficiency (elevation) test, same logic:</strong> raise both legs to 60&deg; until the feet blanch, then dangle them. Color returns by arterial inflow; normal is under 10 seconds. A narrowed artery refills the foot slowly.</li>" +
          "<li><strong>Quick and noninvasive</strong> for subclinical or suspected PAD.</li></ul>"),
        S("traps", "Common traps",
          "<ul><li><strong>\"Higher is always better.\"</strong> Above 1.30 means noncompressible, calcified vessels.</li>" +
          "<li><strong>Using the same-side arm.</strong> The denominator is the highest pressure from <strong>either</strong> arm.</li>" +
          "<li><strong>Flipping the ratio.</strong> Ankle on top, arm on the bottom.</li>" +
          "<li><strong>\"A normal ABI rules out any narrowing.\"</strong> The test detects stenosis of 50% or more.</li></ul>")
      ],
      [
        Q("chain", "Why does a significant leg artery stenosis lower the ABI?",
          ["Pressure is lost across the narrowing, so ankle systolic falls relative to the arm", "The stenosis raises arm pressure only", "The stenosis makes the cuff read falsely high", "The stenosis speeds the heart rate"], 0,
          "Less pressure reaches the ankle beyond the narrowing, so ankle ÷ arm falls."),
        Q("bedside", "Arm pressures are R 150 and L 140. Right ankle pressures are DP 120 and PT 105. What is the right ABI and its meaning?",
          ["0.80, mild-to-moderate PAD", "0.86, normal", "1.25, normal", "0.70, severe PAD"], 0,
          "Highest right ankle (120) ÷ highest arm (150) = 0.80, in the 0.41–0.90 band."),
        Q("chain", "A patient's ABI is 1.45. What is the best explanation?",
          ["Calcified, noncompressible vessels resist the cuff, so the reading is falsely high and unreliable", "Excellent arterial flow with no PAD", "Severe PAD", "A normal result that needs no comment"], 0,
          "ABI above 1.30 = noncompressible, calcified vessel (clarification: the cuff can't squeeze the stiff artery)."),
        Q("chain", "Why is the HIGHEST arm pressure used as the denominator?",
          ["It best estimates true systolic pressure; a lower arm reading may reflect narrowing in that arm", "It makes every ABI look normal", "It is always the right arm", "It corrects for calcified ankle vessels"], 0,
          "Clarification (standard physiology): the higher arm is the better estimate of central systolic pressure."),
        Q("traps", "A patient with mild calf symptoms has a normal ABI. What limitation should you keep in mind?",
          ["The ABI detects stenosis of 50% or more, so a smaller narrowing can be missed", "The ABI only measures venous disease", "A normal ABI means calcified vessels", "The ABI only works in the arms"], 0,
          "The slides say the ABI detects stenosis of 50% or more."),
        Q("chain", "A patient has rest pain and a nonhealing toe ulcer. Where do you predict the ABI will fall?",
          ["0–0.40 (severe PAD)", "0.91–1.30 (normal)", "Above 1.30", "Exactly 1.00"], 0,
          "The more pressure is lost before the ankle, the lower the ratio; severe disease is 0–0.40."),
        Q("bedside", "In the arterial insufficiency test, why does color return slowly to the foot of a patient with PAD?",
          ["Narrowed arteries slow the inflow that refills the blanched foot", "The veins are blocked so blood can't leave", "Lymph fills the foot first", "The heart rate slows when the legs dangle"], 0,
          "Color return after dangling depends on arterial inflow; normal is under 10 seconds."),
        Q("traps", "A student says an ABI of 1.35 shows better circulation than an ABI of 1.10. What is the correction?",
          ["Above 1.30 suggests noncompressible, calcified vessels, so 1.35 is not better; 1.10 is normal", "Correct; higher is always better", "Both indicate severe PAD", "Both indicate mild PAD"], 0,
          "The normal band is 0.91–1.30; above that the vessel is noncompressible and the number is unreliable.")
      ]),

    // ------------------------------------------------------------------
    D("hp-allen-test", "Allen test: proving the backup supply before an ABG",
      "The radial and ulnar arteries join in the hand, so the Allen test blocks both and releases one at a time to prove each can refill the hand on its own before the radial artery is punctured.",
      [
        S("idea", "The idea",
          "<p>The hand gets blood from two arteries, the <strong>radial</strong> and the <strong>ulnar</strong>, and the anatomy lecture notes they <strong>anastomose</strong> in the hand. So if one is blocked, the other can still fill the whole hand.</p>" +
          "<p>An arterial blood gas (ABG) is drawn from the radial artery. Before you risk injuring it, the <strong>Allen test</strong> proves both arteries are patent &mdash; especially that the ulnar can supply the hand on its own.</p>"),
        S("chain", "Cause → effect",
          "<ol class=\"concept-chain\">" +
          "<li>The patient makes a tight fist, squeezing blood out of the hand.</li>" +
          "<li>You compress both the radial and ulnar arteries firmly; no blood can enter.</li>" +
          "<li>The patient opens the hand into a relaxed, slightly flexed position; it stays pale.</li>" +
          "<li>You release one artery. If it is patent, blood flows in and through the anastomosis, and color returns in 3&ndash;5 seconds.</li>" +
          "<li>You repeat, releasing the other artery this time.</li>" +
          "</ol>" +
          Tbl(["Release…", "Color returns in 3–5 s", "Hand stays pale"], [
            ["Radial (ulnar still held)", "Radial is patent", "Radial is not supplying the hand"],
            ["Ulnar (radial still held)", "Ulnar is patent: backup supply confirmed", "Ulnar is not supplying the hand: no backup if the radial is injured"]
          ]) +
          HY("Block both, release one: the released artery alone must refill the hand in 3–5 seconds.")),
        S("bedside", "Why it matters clinically",
          "<ul><li><strong>Before an ABG:</strong> the test ensures patency so the hand isn't left without supply.</li>" +
          "<li><strong>Documentation:</strong> \"Allen test demonstrates patency of radial and ulnar arteries bilaterally.\"</li>" +
          "<li><strong>Same logic as other perfusion tests:</strong> blanch the tissue, then time how fast arterial inflow restores color (capillary refill, the leg elevation test).</li></ul>"),
        S("traps", "Common traps",
          "<ul><li><strong>Releasing both at once.</strong> Then you can't tell which artery refilled the hand.</li>" +
          "<li><strong>\"Releasing the radial tests the ulnar.\"</strong> The released artery is the one being tested.</li>" +
          "<li><strong>\"The Allen test checks for DVT.\"</strong> It checks arterial patency (radial and ulnar).</li></ul>")
      ],
      [
        Q("idea", "What is the purpose of the Allen test before an ABG?",
          ["To confirm the radial and ulnar arteries are patent so the hand has backup supply", "To check for a DVT in the arm", "To measure arm blood pressure", "To assess lymphatic drainage of the hand"], 0,
          "The Allen test compares radial and ulnar patency before an ABG."),
        Q("chain", "Why can one patent artery refill the whole hand during the Allen test?",
          ["The radial and ulnar arteries anastomose in the hand", "Each artery supplies exactly half the hand with no connection", "The veins carry arterial blood backward", "The hand is supplied by the brachial vein"], 0,
          "Anatomy: hand supply is formed by anastomosis of the radial and ulnar arteries."),
        Q("bedside", "You compress both arteries, then release the ulnar. Color returns in 4 seconds. What does this show?",
          ["The ulnar artery is patent and can supply the hand by itself", "The radial artery is occluded", "The test is invalid", "The hand has no collateral flow"], 0,
          "Color return within 3–5 seconds after releasing an artery shows that artery is patent."),
        Q("bedside", "You compress both arteries, then release the RADIAL. The hand stays pale. What does this suggest?",
          ["The radial artery is not supplying the hand", "The ulnar artery is not supplying the hand", "Normal result", "A DVT in the forearm"], 0,
          "Only the released artery can refill the hand; no color means that artery isn't delivering flow."),
        Q("chain", "Why does the patient make a tight fist before you compress the arteries?",
          ["To squeeze blood out so the hand blanches and the return of color is visible", "To raise the arterial pressure", "To close the anastomosis", "To make the pulse easier to feel"], 0,
          "Clarification (standard physiology): the fist empties the hand so refill by the released artery can be seen."),
        Q("idea", "Within what time should color return after releasing an artery in the Allen test?",
          ["3–5 seconds", "30 seconds", "Over 60 seconds", "Under 0.5 seconds only"], 0,
          "The slides give 3–5 seconds for blood return."),
        Q("traps", "A student releases both arteries at the same time and sees color return. What is the problem?",
          ["You can't tell which artery refilled the hand", "Nothing; this is the correct technique", "Releasing both proves the ulnar is patent", "Releasing both proves the radial is occluded"], 0,
          "The test works by releasing one artery at a time so each is tested alone.")
      ])
  ]);
}());
