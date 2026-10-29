/* Heart Murmurs practice for Cardio Part 1.
   Sources: Valvular Disease (Wireman), Cardiovascular H&P, Cardiomyopathies (HCM, S3/S4).
   Items marked flag: "heart-sounds" come from the Heart Sounds objectives, whose deck is not uploaded yet;
   they use standard teaching and should be checked against that deck when it arrives.
   Question ids are "<section id>|<index>": only append questions to a section, never insert or reorder. */
(function () {
  "use strict";

  var AORTIC = "Right 2nd ICS, right upper sternal border (aortic area)";
  var PULM = "Left 2nd ICS, left upper sternal border (pulmonic area)";
  var ERB = "Left 3rd ICS (Erb's point)";
  var TRI = "Left lower sternal border, 4th–5th ICS (tricuspid area)";
  var MIT = "Apex, 5th ICS at the midclavicular line (mitral area)";

  var AS = "Aortic stenosis", AR = "Aortic regurgitation", MS = "Mitral stenosis", MR = "Mitral regurgitation";
  var MVP = "Mitral valve prolapse", PS = "Pulmonic stenosis", PR = "Pulmonic regurgitation";
  var TS = "Tricuspid stenosis", TR = "Tricuspid regurgitation", HCM = "Hypertrophic cardiomyopathy (LVOT obstruction)";

  // q: prompt, a: correct answer, w: three wrong answers, x: explanation shown after the right answer,
  // map: { spot, radiate } shows the chest map (spot names hidden until answered).
  function Q(q, a, w, x, map, flag) {
    var item = { q: q, a: a, w: w, x: x };
    if (map) item.map = map;
    if (flag) item.flag = flag;
    return item;
  }
  var HS = "heart-sounds";

  window.HEART_MURMURS = {
    spots: [
      { id: "aortic", name: "Aortic area", where: "Right 2nd ICS, right sternal border", x: 117, y: 122 },
      { id: "pulmonic", name: "Pulmonic area", where: "Left 2nd ICS, left sternal border", x: 183, y: 122 },
      { id: "erb", name: "Erb's point", where: "Left 3rd ICS, left sternal border", x: 183, y: 154 },
      { id: "tricuspid", name: "Tricuspid area", where: "Left lower sternal border, 4th–5th ICS", x: 180, y: 206 },
      { id: "mitral", name: "Mitral area (apex)", where: "5th ICS, midclavicular line", x: 232, y: 216 }
    ],

    // Quick-reference chart (opens from the home screen; the drills are the main event).
    chart: [
      { name: AS, timing: "Systolic · crescendo-decrescendo", sound: "Harsh, high-pitched; ejection click early", where: "RUSB (R 2nd ICS)", radiates: "Carotids", louder: "Squatting (softer with Valsalva)", extras: "S4, paradoxical split S2 when severe, pulsus parvus et tardus, sustained displaced apical pulse" },
      { name: PS, timing: "Systolic · crescendo-decrescendo", sound: "Harsh, high-pitched; ejection click may be present", where: "LUSB (L 2nd ICS)", radiates: "Left neck / left shoulder", louder: "Inspiration (right-sided)", extras: "Wide split S2; RVH" },
      { name: MR, timing: "Systolic · holosystolic", sound: "Blowing, high-pitched (diaphragm)", where: "Apex", radiates: "Left axilla", louder: "—", extras: "S3 when severe; AFib from LA dilation" },
      { name: TR, timing: "Systolic · holosystolic", sound: "Blowing, high-pitched", where: "LLSB", radiates: "—", louder: "Inspiration (Carvallo's sign)", extras: "S3 when severe; JVD, hepatomegaly, ascites, edema" },
      { name: MVP, timing: "Mid-systolic click ± late systolic murmur", sound: "Click, then murmur", where: "Apex", radiates: "—", louder: "Standing/Valsalva: click earlier · Squatting: click later", extras: "Can lead to MR; anxiety, palpitations" },
      { name: HCM, timing: "Systolic · crescendo-decrescendo", sound: "Harsh", where: "Apex and LLSB", radiates: "—", louder: "Valsalva or standing from a squat", extras: "S4 (\"Tennessee\"); lift/heave" },
      { name: AR, timing: "Diastolic · early decrescendo", sound: "Blowing, high-pitched (diaphragm)", where: "Left 2nd–4th ICS (Erb's)", radiates: "May radiate toward the apex", louder: "Sit up, lean forward, exhale and hold", extras: "S3, wide pulse pressure, water-hammer pulse, de Musset's sign" },
      { name: PR, timing: "Diastolic · early decrescendo", sound: "Harsh, high-pitched (like AR)", where: "Pulmonic area / left sternal border", radiates: "—", louder: "Inspiration", extras: "Pulmonary HTN is the top adult cause" },
      { name: MS, timing: "Diastolic · rumble", sound: "Low-pitched rumble after an opening snap (bell)", where: "Apex", radiates: "None", louder: "Left lateral decubitus, bell on the apex", extras: "AFib, hemoptysis, LA enlargement" },
      { name: TS, timing: "Diastolic · rumble", sound: "Like MS", where: "LLSB", radiates: "None", louder: "Inspiration", extras: "Almost always rheumatic, with other valve disease" }
    ],

    sections: [
      {
        id: "spot-it",
        title: "Spot it",
        description: "The map shows where you're listening and you get the sound. Name the lesion.",
        questions: [
          Q("Harsh, high-pitched crescendo-decrescendo SYSTOLIC murmur at the highlighted spot, radiating to the carotids.", AS, [PS, HCM, MR], "Right 2nd ICS (aortic area) + crescendo-decrescendo + carotid radiation = aortic stenosis.", { spot: "aortic", radiate: "carotids" }),
          Q("Harsh crescendo-decrescendo SYSTOLIC murmur at the highlighted spot with a systolic ejection click; it radiates toward the left neck and shoulder.", PS, [AS, MVP, TR], "Left 2nd ICS (pulmonic area) + ejection murmur radiating to the left neck/shoulder = pulmonic stenosis.", { spot: "pulmonic", radiate: "left-neck" }),
          Q("Blowing, high-pitched HOLOSYSTOLIC murmur at the highlighted spot that radiates to the left axilla.", MR, [TR, MVP, AS], "Apex + holosystolic + axillary radiation = mitral regurgitation.", { spot: "mitral", radiate: "axilla" }),
          Q("Blowing, high-pitched HOLOSYSTOLIC murmur at the highlighted spot that gets louder when the patient breathes in.", TR, [MR, PR, AS], "LLSB + holosystolic + louder with inspiration (Carvallo's sign) = tricuspid regurgitation.", { spot: "tricuspid" }),
          Q("Low-pitched DIASTOLIC rumble after an opening snap at the highlighted spot, heard with the bell, with no radiation.", MS, [TS, AR, MR], "Apex + diastolic rumble + opening snap = mitral stenosis.", { spot: "mitral" }),
          Q("DIASTOLIC rumble that sounds just like mitral stenosis, but it is loudest at the highlighted spot and louder with inspiration.", TS, [MS, TR, PR], "Same rumble as MS but at the LLSB and louder with inspiration = tricuspid stenosis (right-sided).", { spot: "tricuspid" }),
          Q("Blowing, high-pitched early DIASTOLIC decrescendo murmur at the highlighted spot, best with the patient leaning forward and holding their breath out.", AR, [PR, MS, MR], "Erb's point / left 2nd–4th ICS + early diastolic decrescendo + lean forward = aortic regurgitation.", { spot: "erb", radiate: "apex" }),
          Q("Mid-systolic click followed by a late systolic murmur at the highlighted spot. The click moves earlier when the patient stands up.", MVP, [MR, AS, MS], "Apex + mid-systolic click that moves earlier with standing = mitral valve prolapse.", { spot: "mitral" }),
          Q("Harsh crescendo-decrescendo SYSTOLIC murmur at the highlighted spot (and the apex) that gets LOUDER with Valsalva.", HCM, [AS, PS, TR], "Systolic ejection murmur at the LLSB/apex that gets louder with Valsalva = HCM with LVOT obstruction. AS gets softer with Valsalva.", { spot: "tricuspid" }),
          Q("Early DIASTOLIC decrescendo murmur, similar to aortic regurgitation, heard over the highlighted spot and louder with inspiration. The patient has pulmonary hypertension.", PR, [AR, PS, TS], "AR-like murmur that gets louder with inspiration in a patient with pulmonary HTN = pulmonic regurgitation.", { spot: "pulmonic" }),
          Q("A SYSTOLIC murmur heard best at the highlighted spot radiates up into both carotids. Which lesion?", AS, [MR, PS, TR], "Carotid radiation belongs to aortic stenosis.", { spot: "aortic", radiate: "carotids" }),
          Q("You hear a murmur that radiates to the axilla from the highlighted spot. It starts with S1 and lasts through to S2.", MR, [MVP, AS, MS], "Holosystolic from S1 to S2 + axilla = mitral regurgitation.", { spot: "mitral", radiate: "axilla" }),
          Q("At the highlighted spot you hear a SYSTOLIC murmur that gets louder with every inspiration. The patient has JVD and hepatomegaly.", TR, [MR, AS, PS], "Right-sided holosystolic murmur with right heart failure signs = tricuspid regurgitation.", { spot: "tricuspid" }),
          Q("At the highlighted spot you hear a DIASTOLIC murmur only after rolling the patient onto the left side and using the bell.", MS, [AR, TS, MR], "Left lateral decubitus + bell on the apex is the augmentation maneuver for mitral stenosis.", { spot: "mitral" }),
          Q("An early DIASTOLIC blowing murmur at the highlighted spot may radiate toward the apex. Pulse pressure is wide.", AR, [MS, PR, MR], "Wide pulse pressure + early diastolic blowing murmur = aortic regurgitation.", { spot: "erb", radiate: "apex" }),
          Q("A harsh SYSTOLIC ejection murmur at the highlighted spot comes with a WIDE split S2.", PS, [AS, MR, TR], "Wide split S2 goes with pulmonic stenosis (P2 is delayed). Severe AS gives a paradoxical split.", { spot: "pulmonic", radiate: "left-neck" }),
          Q("A harsh SYSTOLIC ejection murmur at the highlighted spot comes with a PARADOXICAL split S2 and a delayed, weak carotid upstroke.", AS, [PS, HCM, MR], "Paradoxical split S2 + pulsus parvus et tardus = severe aortic stenosis.", { spot: "aortic", radiate: "carotids" }),
          Q("A click at the highlighted spot moves LATER in systole when the patient squats.", MVP, [AS, PS, MS], "Squatting raises LV volume, so the prolapse (and its click) happens later = MVP.", { spot: "mitral" }),
          Q("A harsh SYSTOLIC murmur at the highlighted spot gets louder when the patient stands up from a squat.", HCM, [AS, MR, TR], "Standing from a squat drops preload, which worsens LVOT obstruction = HCM.", { spot: "tricuspid" }),
          Q("A harsh SYSTOLIC murmur at the highlighted spot gets louder when the patient squats and softer with Valsalva.", AS, [HCM, MVP, PS], "AS is loudest with squatting and softer with Valsalva, the opposite of HCM.", { spot: "aortic", radiate: "carotids" }),
          Q("A blowing HOLOSYSTOLIC murmur at the highlighted spot comes with an S3 in a patient with a dilated, failing LV.", MR, [AS, MS, AR], "Secondary (functional) MR from LV dilation; severe MR brings an S3.", { spot: "mitral", radiate: "axilla" }),
          Q("A low-pitched DIASTOLIC rumble with NO radiation is loudest at the highlighted spot during inspiration. The patient has rheumatic mitral and aortic disease too.", TS, [MS, PR, AR], "Tricuspid stenosis is rare and almost always part of rheumatic multivalve disease.", { spot: "tricuspid" })
        ]
      },
      {
        id: "place-it",
        title: "Place it",
        description: "You get the lesion. Pick where on the chest it is best heard.",
        questions: [
          Q("Where is aortic stenosis heard best?", AORTIC, [PULM, MIT, TRI], "AS: right 2nd ICS (RUSB), radiating to the carotids.", { spot: "aortic", radiate: "carotids" }),
          Q("Where is pulmonic stenosis heard best?", PULM, [AORTIC, ERB, TRI], "PS: left 2nd ICS (LUSB), may radiate to the left neck or shoulder.", { spot: "pulmonic", radiate: "left-neck" }),
          Q("Where is mitral regurgitation heard best?", MIT, [TRI, AORTIC, ERB], "MR: apex, radiating to the left axilla.", { spot: "mitral", radiate: "axilla" }),
          Q("Where is tricuspid regurgitation heard best?", TRI, [MIT, PULM, AORTIC], "TR: left lower sternal border.", { spot: "tricuspid" }),
          Q("Where is mitral stenosis heard best?", MIT, [TRI, ERB, PULM], "MS: apex, with the bell, patient in left lateral decubitus.", { spot: "mitral" }),
          Q("Where is aortic regurgitation heard best?", ERB, [MIT, AORTIC, TRI], "AR: left 2nd–4th ICS along the left sternal border (Erb's point), may radiate toward the apex.", { spot: "erb", radiate: "apex" }),
          Q("Where is mitral valve prolapse heard best?", MIT, [AORTIC, PULM, ERB], "MVP click and murmur: apex.", { spot: "mitral" }),
          Q("Where is tricuspid stenosis heard best?", TRI, [MIT, AORTIC, PULM], "TS: LLSB (unlike MS, which is at the apex).", { spot: "tricuspid" }),
          Q("Where is the LVOT-obstruction murmur of HCM heard best?", "Apex and left lower sternal border", ["Right 2nd ICS, radiating to the carotids", "Left 2nd ICS, radiating to the left shoulder", "Left 3rd ICS, only when leaning forward"], "HCM: harsh crescendo-decrescendo systolic murmur at the apex and LLSB.", { spot: "tricuspid" }),
          Q("The aortic valve sits behind the sternum at the 3rd ICS. Where do you put the stethoscope to hear it?", AORTIC, [ERB, PULM, MIT], "Valves are auscultated downstream of where they sit: aortic sounds travel up and right to the right 2nd ICS.", { spot: "aortic" }),
          Q("The mitral valve sits left of the sternum at the 4th intercostal junction. Where do you listen for it?", MIT, [TRI, ERB, PULM], "Mitral sounds travel to the apex: 5th ICS, midclavicular line.", { spot: "mitral" }),
          Q("The tricuspid valve sits behind the right side of the sternum at the 4th–5th ICS. Where do you listen for it?", TRI, [MIT, AORTIC, ERB], "Tricuspid area: left side of the sternum, left 5th ICS (LLSB).", { spot: "tricuspid" }),
          Q("The pulmonic valve sits left of the sternum opposite the 3rd intercostal junction. Where do you listen for it?", PULM, [ERB, AORTIC, TRI], "Pulmonic area: left 2nd ICS at the sternal border.", { spot: "pulmonic" }),
          Q("Where are S3 and S4 heard best?", "Apex, with the bell", ["Right 2nd ICS, with the diaphragm", "Left 2nd ICS, with the diaphragm", "Erb's point, with the patient leaning forward"], "S3 and S4 are low-pitched: bell at the apex (S3 best in left lateral decubitus).", { spot: "mitral" }),
          Q("Where is S2 (and its physiologic split) heard best?", PULM, [MIT, TRI, AORTIC], "S2: diaphragm over the left 2nd ICS close to the sternal border.", { spot: "pulmonic" }),
          Q("Where is S1 heard best?", MIT, [PULM, AORTIC, ERB], "S1 (mitral + tricuspid closure): diaphragm at the apex / PMI, left 5th ICS MCL.", { spot: "mitral" })
        ]
      },
      {
        id: "timing-shape",
        title: "Timing & shape",
        description: "Systolic or diastolic, holosystolic or crescendo-decrescendo, early or late.",
        questions: [
          Q("Aortic stenosis: systolic or diastolic?", "Systolic", ["Diastolic", "Continuous", "Systolic and diastolic (to-and-fro)"], "AS is a systolic ejection murmur."),
          Q("Aortic regurgitation: systolic or diastolic?", "Diastolic", ["Systolic", "Continuous", "Mid-systolic click only"], "AR leaks back into the LV during diastole."),
          Q("Mitral stenosis: systolic or diastolic?", "Diastolic", ["Systolic", "Continuous", "Late systolic"], "MS obstructs LV filling, which happens in diastole."),
          Q("Mitral regurgitation: systolic or diastolic?", "Systolic", ["Diastolic", "Continuous", "Early diastolic"], "MR leaks into the LA while the LV contracts (systole)."),
          Q("Pulmonic regurgitation: systolic or diastolic?", "Diastolic", ["Systolic", "Continuous", "Mid-systolic"], "PR leaks back into the RV during diastole, like AR."),
          Q("Tricuspid regurgitation: systolic or diastolic?", "Systolic", ["Diastolic", "Continuous", "Late diastolic"], "TR leaks into the RA while the RV contracts."),
          Q("Tricuspid stenosis: systolic or diastolic?", "Diastolic", ["Systolic", "Continuous", "Mid-systolic click"], "TS blocks RA → RV filling in diastole."),
          Q("Pulmonic stenosis: systolic or diastolic?", "Systolic", ["Diastolic", "Continuous", "Early diastolic"], "PS obstructs RV ejection in systole."),
          Q("What is the SHAPE of the aortic stenosis murmur?", "Crescendo-decrescendo", ["Holosystolic (plateau)", "Decrescendo", "Late systolic only"], "Ejection murmurs (AS, PS, HCM) build then fade: crescendo-decrescendo (diamond)."),
          Q("What is the SHAPE of the mitral regurgitation murmur?", "Holosystolic", ["Crescendo-decrescendo", "Early diastolic decrescendo", "Mid-diastolic rumble"], "MR runs all the way from S1 to S2."),
          Q("What is the SHAPE of the aortic regurgitation murmur?", "Early diastolic decrescendo", ["Holosystolic", "Crescendo-decrescendo", "Mid-diastolic rumble after a snap"], "AR starts right after S2 at its loudest and fades."),
          Q("What is the SHAPE of the pulmonic stenosis murmur?", "Crescendo-decrescendo", ["Holosystolic", "Early diastolic decrescendo", "Late systolic after a click"], "PS is an ejection murmur like AS."),
          Q("What is the SHAPE of the tricuspid regurgitation murmur?", "Holosystolic", ["Crescendo-decrescendo", "Decrescendo", "Mid-systolic click"], "TR, like MR, is holosystolic."),
          Q("What is the SHAPE of the pulmonic regurgitation murmur?", "Early diastolic decrescendo", ["Holosystolic", "Mid-diastolic rumble", "Crescendo-decrescendo"], "PR is AR's right-sided twin: early diastolic decrescendo."),
          Q("Where in the cycle is the MVP click?", "Mid-systole", ["Early diastole, right after S2", "Late diastole, right before S1", "Early systole, right after S1"], "MVP: mid-systolic click ± late systolic murmur. The early-systolic ejection click belongs to AS/PS."),
          Q("When does the MVP murmur occur, if there is one?", "Late systole, after the click", ["Holosystolic from S1", "Early diastole", "Throughout systole and diastole"], "The leaflet only prolapses partway through systole, so the leak is late systolic."),
          Q("Which TWO murmurs are holosystolic?", "Mitral and tricuspid regurgitation", ["Aortic and pulmonic stenosis", "Aortic and pulmonic regurgitation", "Mitral and tricuspid stenosis"], "The AV-valve leaks (MR, TR) run from S1 to S2."),
          Q("Which TWO murmurs are early diastolic decrescendo?", "Aortic and pulmonic regurgitation", ["Mitral and tricuspid stenosis", "Mitral and tricuspid regurgitation", "Aortic and pulmonic stenosis"], "Semilunar-valve leaks (AR, PR) are early diastolic decrescendo."),
          Q("Which TWO murmurs are diastolic rumbles?", "Mitral and tricuspid stenosis", ["Aortic and pulmonic regurgitation", "Mitral and tricuspid regurgitation", "Aortic stenosis and HCM"], "AV-valve stenosis (MS, TS) = diastolic rumble."),
          Q("Which murmurs are crescendo-decrescendo systolic ejection murmurs?", "Aortic stenosis, pulmonic stenosis, and HCM", ["Mitral and tricuspid regurgitation", "Aortic and pulmonic regurgitation", "Mitral stenosis and MVP"], "Outflow obstruction (valve or LVOT) gives the diamond-shaped ejection murmur."),
          Q("Rule of thumb: stenosis of a semilunar valve (aortic/pulmonic) is heard in…", "Systole", ["Diastole", "Both systole and diastole", "Only with inspiration"], "Semilunar valves open in systole, so their stenosis is systolic and their regurgitation is diastolic."),
          Q("Rule of thumb: stenosis of an AV valve (mitral/tricuspid) is heard in…", "Diastole", ["Systole", "Both systole and diastole", "Only after exercise"], "AV valves open in diastole, so their stenosis is diastolic and their regurgitation is systolic."),
          Q("A diastolic murmur is heard. Which is it NOT?", MR, [AR, MS, PR], "MR is systolic. AR, MS, PR, and TS are diastolic."),
          Q("A systolic murmur is heard. Which is it NOT?", AR, [AS, MR, TR], "AR is diastolic. AS, PS, MR, TR, MVP, and HCM are systolic.")
        ]
      },
      {
        id: "quality-pitch",
        title: "Quality, pitch & stethoscope",
        description: "Harsh vs blowing vs rumble, high vs low pitch, bell vs diaphragm.",
        questions: [
          Q("Classic quality of the aortic stenosis murmur?", "Harsh, high-pitched", ["Blowing, high-pitched", "Low-pitched rumble", "Machinery-like"], "Slides: AS is harsh, high-pitched, crescendo-decrescendo."),
          Q("Classic quality of the mitral regurgitation murmur?", "Blowing, high-pitched", ["Harsh, crescendo-decrescendo", "Low-pitched rumble", "Scratchy, grating"], "MR: blowing, high-pitched, holosystolic."),
          Q("Classic quality of the mitral stenosis murmur?", "Low-pitched rumble", ["Blowing, high-pitched", "Harsh, high-pitched", "Scratchy, grating"], "MS: low-pitched diastolic rumble after an opening snap."),
          Q("Classic quality of the aortic regurgitation murmur?", "Blowing, high-pitched", ["Low-pitched rumble", "Harsh, crescendo-decrescendo", "Machinery-like"], "AR: blowing, high-pitched, early diastolic decrescendo."),
          Q("Classic quality of the tricuspid regurgitation murmur?", "Blowing, high-pitched", ["Low-pitched rumble", "Harsh, crescendo-decrescendo", "Musical, vibratory"], "TR sounds like MR: blowing, high-pitched, holosystolic."),
          Q("Classic quality of the pulmonic stenosis murmur?", "Harsh, high-pitched", ["Low-pitched rumble", "Blowing, high-pitched", "Scratchy, grating"], "PS sounds like AS: harsh, crescendo-decrescendo."),
          Q("According to the Valvular lecture, how is the pulmonic regurgitation murmur described?", "Harsh, high-pitched, early diastolic decrescendo", ["Low-pitched mid-diastolic rumble", "Blowing holosystolic", "Harsh crescendo-decrescendo systolic"], "The slide calls PR 'similar to AR' and 'harsh, high-pitched, early diastolic decrescendo'."),
          Q("Which stethoscope head picks up high-pitched sounds?", "Diaphragm", ["Bell", "Either one equally", "Neither: palpate instead"], "Diaphragm: high-pitched sounds (S1, S2, AR, MR, friction rub)."),
          Q("Which stethoscope head picks up low-pitched sounds?", "Bell", ["Diaphragm", "Either one equally", "Neither: palpate instead"], "Bell: low-pitched sounds (S3, S4, mitral stenosis)."),
          Q("Which murmur do you listen for with the BELL?", MS, [AR, MR, AS], "The MS rumble is low-pitched: bell at the apex."),
          Q("Which murmurs does the H&P lecture list as best with the DIAPHRAGM?", "Aortic and mitral regurgitation", ["Mitral stenosis", "Tricuspid stenosis", "S3 and S4"], "Diaphragm: S1, S2, AR and MR murmurs, pericardial friction rubs."),
          Q("Which sounds does the H&P lecture list as best with the BELL?", "S3, S4, and the murmur of mitral stenosis", ["S1, S2, and the murmur of aortic regurgitation", "Pericardial friction rubs", "The murmur of mitral regurgitation"], "Bell: S3, S4, mitral stenosis."),
          Q("A pericardial friction rub is best heard with the…", "Diaphragm", ["Bell", "Bell pressed firmly at the apex", "Doppler only"], "The H&P lecture lists the friction rub with the high-pitched (diaphragm) sounds."),
          Q("What physically produces a murmur?", "Turbulent blood flow", ["Valve leaflets snapping shut", "Rapid ventricular filling into a normal ventricle", "Atrial contraction into a stiff ventricle"], "Physiology: murmurs are the sound of turbulent flow. Valve closure = S1/S2; filling = S3; stiff ventricle = S4."),
          Q("A thrill is felt with the ball/heel of the hand. What is it?", "A palpable vibration from turbulent flow", ["A visible lift from an enlarged ventricle", "A forceful but brief PMI", "A palpable S4"], "Thrills = palpable turbulent flow (palpated at the LSB 4th/5th ICS and apex)."),
          Q("Where does the H&P lecture have you palpate for thrills?", "Left sternal border (4th/5th ICS) and the apex", ["Over the carotids and femorals", "Right 2nd ICS only", "Suprasternal notch"], "Thrills: LSB 4th/5th interspace and apex, with the ball/heel of the hand.")
        ]
      },
      {
        id: "radiation",
        title: "Radiation",
        description: "Where the murmur travels: carotids, axilla, neck and shoulder, apex, or nowhere.",
        questions: [
          Q("Aortic stenosis radiates to the…", "Carotids", ["Left axilla", "Left neck and shoulder", "Nowhere"], "AS: RUSB → carotids.", { spot: "aortic", radiate: "carotids" }),
          Q("Mitral regurgitation radiates to the…", "Left axilla", ["Carotids", "Back between the scapulae", "Nowhere"], "MR: apex → left axilla.", { spot: "mitral", radiate: "axilla" }),
          Q("Pulmonic stenosis may radiate to the…", "Left neck or left shoulder", ["Carotids bilaterally", "Left axilla", "Apex"], "PS: LUSB → left neck/shoulder.", { spot: "pulmonic", radiate: "left-neck" }),
          Q("Aortic regurgitation may radiate to the…", "Apex", ["Carotids", "Left axilla", "Left shoulder"], "AR: left 2nd–4th ICS, may radiate toward the apex.", { spot: "erb", radiate: "apex" }),
          Q("Mitral stenosis radiates to the…", "It does not radiate", ["Left axilla", "Carotids", "Left shoulder"], "MS: apex, no radiation.", { spot: "mitral" }),
          Q("Tricuspid stenosis radiates to the…", "It does not radiate", ["Left axilla", "Carotids", "Apex"], "TS: LLSB, no radiation.", { spot: "tricuspid" }),
          Q("A murmur radiates to the carotids. Which lesion?", AS, [MR, PS, AR], "Carotids = aortic stenosis.", { spot: "aortic", radiate: "carotids" }),
          Q("A murmur radiates to the left axilla. Which lesion?", MR, [AS, TR, MS], "Axilla = mitral regurgitation.", { spot: "mitral", radiate: "axilla" }),
          Q("A systolic murmur radiates to the left neck and shoulder. Which lesion?", PS, [AS, MR, TR], "Left neck/shoulder = pulmonic stenosis.", { spot: "pulmonic", radiate: "left-neck" }),
          Q("A diastolic murmur radiates from the left sternal border toward the apex. Which lesion?", AR, [MS, TS, PR], "AR may radiate to the apex.", { spot: "erb", radiate: "apex" }),
          Q("Which pair of murmurs has NO radiation?", "Mitral stenosis and tricuspid stenosis", ["Aortic stenosis and pulmonic stenosis", "Mitral and aortic regurgitation", "Aortic stenosis and mitral regurgitation"], "The diastolic rumbles (MS, TS) stay put."),
          Q("A systolic murmur at the RUSB does NOT radiate to the carotids, and it gets louder with Valsalva. Better fit?", HCM, [AS, PS, MR], "Valsalva makes AS softer and HCM louder. AS is the one that radiates to the carotids.")
        ]
      },
      {
        id: "maneuvers",
        title: "Maneuvers",
        description: "Inspiration, squatting, Valsalva and standing, left lateral decubitus, leaning forward.",
        questions: [
          Q("Inspiration makes which murmurs louder?", "Right-sided murmurs (tricuspid and pulmonic)", ["Left-sided murmurs (mitral and aortic)", "Only HCM", "No murmur changes with breathing"], "Inspiration pulls more venous return into the right heart, so right-sided murmurs get louder."),
          Q("What is Carvallo's sign?", "The TR murmur gets louder with inspiration", ["The AR murmur gets louder leaning forward", "The MVP click moves earlier with standing", "The AS murmur gets softer with Valsalva"], "Carvallo's sign = TR louder on inspiration."),
          Q("Which maneuver brings out mitral stenosis?", "Left lateral decubitus with the bell on the apex", ["Sitting up, leaning forward, exhaling", "Valsalva", "Standing from a squat"], "Rolling to the left brings the LV close to the chest wall."),
          Q("Which maneuver brings out aortic regurgitation?", "Sit up, lean forward, exhale fully, and hold", ["Left lateral decubitus with the bell", "Deep inspiration", "Valsalva"], "Lean forward + full exhale, diaphragm along the LSB 3rd/4th ICS and apex."),
          Q("Aortic stenosis gets LOUDER with…", "Squatting", ["Valsalva", "Standing up", "Left lateral decubitus"], "AS: loudest with squatting, softer with Valsalva."),
          Q("Aortic stenosis gets SOFTER with…", "Valsalva", ["Squatting", "Leaning forward", "Inspiration"], "Valsalva drops preload, so less blood crosses the valve."),
          Q("The HCM (LVOT obstruction) murmur gets LOUDER with…", "Valsalva or standing from a squat", ["Squatting", "Leg raise", "Left lateral decubitus"], "Less preload = smaller LV cavity = worse outflow obstruction = louder HCM murmur."),
          Q("What happens to the MVP click when the patient STANDS or does Valsalva?", "It moves earlier in systole", ["It moves later in systole", "It disappears", "It becomes diastolic"], "Smaller LV volume lets the floppy leaflet prolapse sooner."),
          Q("What happens to the MVP click when the patient SQUATS?", "It moves later in systole", ["It moves earlier in systole", "It gets louder and holosystolic", "It becomes an opening snap"], "Squatting fills the LV, so prolapse happens later."),
          Q("Which TWO systolic murmurs respond OPPOSITELY to Valsalva?", "Aortic stenosis (softer) and HCM (louder)", ["MR (softer) and TR (louder)", "AS (louder) and PS (softer)", "MVP and MR (both softer)"], "Classic exam pair: Valsalva softens AS but makes HCM louder."),
          Q("A tricuspid stenosis rumble gets louder with…", "Inspiration", ["Expiration", "Valsalva", "Standing"], "Right-sided: louder with inspiration."),
          Q("Pulmonic regurgitation gets louder with…", "Inspiration", ["Expiration", "Valsalva", "Leaning forward and exhaling only"], "The PR slide: gets louder with inspiration."),
          Q("You suspect a murmur is right-sided. Which simple maneuver checks?", "Listen during inspiration: right-sided murmurs get louder", ["Have the patient squat", "Have the patient lean forward and exhale", "Compress the femoral artery"], "Inspiration ↑ right-heart venous return."),
          Q("What happens to an S3 with maneuvers that increase venous return?", "It gets louder", ["It gets softer", "It moves into systole", "It disappears"], "H&P: increasing venous return accentuates S3; decreasing it softens S3."),
          Q("Which position is best for hearing an S3?", "Left lateral decubitus, bell at the apex", ["Sitting up and leaning forward", "Standing", "Supine with the diaphragm at the RUSB"], "S3: apex, bell, left lateral decubitus."),
          Q("A patient squats and a systolic murmur gets SOFTER. Which is most likely?", HCM, [AS, MR, PS], "Squatting raises preload and opens up the LVOT, softening HCM. AS gets louder with squatting."),
          Q("A patient goes from squatting to standing and a click moves closer to S1. Which lesion?", MVP, [AS, MS, PS], "Standing ↓ LV volume → earlier MVP click."),
          Q("Which maneuver would you use for a pericardial friction rub?", "Sit up and lean forward (diaphragm)", ["Left lateral decubitus with the bell", "Squatting", "Valsalva"], "Like AR, a rub is high-pitched and comes out with the patient sitting up and leaning forward.", null, HS),
          Q("Why does leaning forward help you hear AR?", "It brings the aortic root and LV outflow closer to the chest wall", ["It increases venous return to the right heart", "It slows the heart rate", "It narrows the aortic valve"], "Leaning forward + full exhale puts the heart against the anterior chest wall."),
          Q("Why does left lateral decubitus help you hear MS?", "It brings the left ventricle close to the chest wall", ["It increases right-sided venous return", "It increases afterload", "It moves the mitral valve to the RUSB"], "H&P: rolling left brings the LV (and apex) to the chest wall."),
          Q("Expiration generally makes which murmurs louder?", "Left-sided murmurs", ["Right-sided murmurs", "Only innocent murmurs", "Only continuous murmurs"], "The flip side of inspiration: left-sided murmurs are favored in expiration (e.g. AR with the breath held out)."),
          Q("Which pair is a 'louder with Valsalva' murmur?", "HCM and the MVP murmur (earlier, longer)", ["AS and PS", "MS and TS", "AR and PR"], "Valsalva makes HCM louder and makes the MVP murmur start earlier. Nearly everything else gets softer.")
        ]
      },
      {
        id: "extras",
        title: "Clicks, snaps, gallops & splits",
        description: "The extra sounds and exam findings that travel with each murmur.",
        questions: [
          Q("An opening snap after S2 goes with…", MS, [AS, MVP, AR], "MS: opening snap, then the low-pitched rumble."),
          Q("A systolic EJECTION click (early systole) goes with…", "Aortic or pulmonic stenosis", ["Mitral valve prolapse", "Mitral stenosis", "Tricuspid regurgitation"], "Ejection clicks are early-systolic in AS (early disease) and PS. MVP gives a MID-systolic click."),
          Q("A MID-systolic click goes with…", MVP, [AS, PS, MS], "MVP: mid-systolic click ± late systolic murmur."),
          Q("In which stage of aortic stenosis is the ejection click present?", "Early stenosis", ["Only severe, calcified stenosis", "Only after valve replacement", "Only with a bicuspid valve in the elderly"], "Slide: systolic ejection click present in early stenosis (it fades as the valve calcifies)."),
          Q("Severe aortic stenosis can split S2 in which way?", "Paradoxically", ["Widely", "Fixed", "It never splits"], "A delayed A2 in severe AS = paradoxical split S2."),
          Q("Pulmonic stenosis splits S2 in which way?", "Widely", ["Paradoxically", "Not at all", "Only in expiration"], "A delayed P2 in PS = wide split S2."),
          Q("What is the physiologic split of S2?", "A2 and P2 separate during inspiration", ["A2 and P2 separate during expiration only", "S1 separates during inspiration", "S2 is split the same in both phases"], "Normal: single S2 in expiration, A2–P2 split with inspiration."),
          Q("Which sound accompanies aortic stenosis (LVH)?", "S4", ["S3", "Opening snap", "Mid-systolic click"], "Stiff, hypertrophied ventricle → S4 (Tennessee)."),
          Q("Which sound accompanies aortic regurgitation?", "S3", ["S4", "Opening snap", "Ejection click"], "Volume-overloaded, dilated LV → S3."),
          Q("Which sound shows up in SEVERE mitral regurgitation?", "S3", ["S4", "Opening snap", "Mid-systolic click"], "Slide: MR is associated with S3 in severe cases."),
          Q("Which sound shows up in SEVERE tricuspid regurgitation?", "S3", ["S4", "Opening snap", "Ejection click"], "Slide: TR can also lead to an S3 in severe cases."),
          Q("Which sound goes with HCM?", "S4", ["S3", "Opening snap", "Continuous murmur"], "HCM: stiff, thick ventricle → S4."),
          Q("S3 is nicknamed the…", "Kentucky gallop (ventricular diastolic gallop)", ["Tennessee gallop (atrial diastolic gallop)", "Opening snap", "Water hammer"], "S3 = KEN-TUC-ky; S4 = TEN-nes-see."),
          Q("S4 is nicknamed the…", "Tennessee gallop (atrial diastolic gallop)", ["Kentucky gallop (ventricular diastolic gallop)", "Mid-systolic click", "Pistol shot"], "S4 comes right before S1: TEN-nes-SEE."),
          Q("When does S3 occur?", "Early diastole, just after S2", ["Late diastole, just before S1", "Mid-systole", "Throughout systole"], "S3: rapid filling phase, right after S2."),
          Q("When does S4 occur?", "Late diastole, just before S1", ["Early diastole, just after S2", "Mid-systole", "Right after the carotid upstroke"], "S4: atrial kick into a stiff ventricle, just before S1."),
          Q("What produces S4?", "Blood forced into a stiff or hypertrophied ventricle", ["Rapid early filling of a dilated ventricle", "Closure of the aortic and pulmonic valves", "Turbulent flow through a stenotic valve"], "S4 = stiff ventricle (HTN, AS, HCM, ischemia). It can be palpable at the apex."),
          Q("What produces S3?", "Blood entering the ventricle during rapid early filling", ["Atrial contraction into a stiff ventricle", "Closure of the mitral and tricuspid valves", "A floppy mitral leaflet"], "S3 = rapid filling (hyperdynamic states, volume overload, dilated ventricle)."),
          Q("Pulsus parvus et tardus goes with…", AS, [AR, MR, HCM], "Delayed, diminished carotid upstroke = AS."),
          Q("Water-hammer pulse goes with…", AR, [AS, MS, TR], "Bounding pulse that rises fast and collapses = AR."),
          Q("Head bobbing with each heartbeat (de Musset's sign) goes with…", AR, [AS, MR, TR], "De Musset's sign = aortic regurgitation."),
          Q("Wide pulse pressure goes with…", AR, [AS, MS, PS], "Diastolic runoff back into the LV drops diastolic pressure."),
          Q("A laterally displaced, sustained apical pulse plus S4 goes with…", AS, [MS, MVP, TS], "LVH from AS: sustained apical impulse and S4."),
          Q("Hemoptysis, AFib, and a diastolic rumble go with…", MS, [AR, MR, TS], "MS: LA pressure → pulmonary congestion, LA dilation → AFib, bronchial vein rupture → hemoptysis."),
          Q("JVD, hepatomegaly, ascites, and a holosystolic murmur that's louder on inspiration go with…", TR, [MR, AS, MS], "TR with right-sided heart failure."),
          Q("What is S1?", "Closure of the mitral and tricuspid valves", ["Closure of the aortic and pulmonic valves", "Opening of the mitral valve", "Rapid ventricular filling"], "S1 = AV valves closing; it falls just before the carotid upstroke."),
          Q("What is S2?", "Closure of the aortic (A2) and pulmonic (P2) valves", ["Closure of the mitral and tricuspid valves", "Atrial contraction", "Opening of the aortic valve"], "S2 follows the carotid upstroke."),
          Q("How do you tell S1 from S2 at the bedside?", "Palpate the carotid: S1 is just before the upstroke, S2 follows it", ["S1 is always louder at the base", "S2 is heard only with the bell", "Have the patient squat"], "H&P: time the sounds against the carotid pulse.")
        ]
      },
      {
        id: "look-alikes",
        title: "Look-alikes",
        description: "Pairs that get mixed up on exams. One detail tells them apart.",
        questions: [
          Q("AS vs HCM: both are harsh crescendo-decrescendo systolic murmurs. This one gets LOUDER with Valsalva.", HCM, [AS, PS, MR], "Valsalva: HCM louder, AS softer."),
          Q("AS vs HCM: this one radiates to the carotids and gets LOUDER with squatting.", AS, [HCM, MVP, MR], "AS: RUSB → carotids, louder with squatting."),
          Q("AS vs PS: both are harsh ejection murmurs. This one is at the LEFT 2nd ICS with a wide split S2.", PS, [AS, AR, HCM], "PS: LUSB, wide split S2. AS: RUSB, paradoxical split when severe."),
          Q("AS vs PS: this one is at the RIGHT 2nd ICS and radiates to the carotids.", AS, [PS, MR, TR], "AS: RUSB → carotids."),
          Q("MR vs TR: both blowing and holosystolic. This one radiates to the axilla and does NOT change with breathing.", MR, [TR, MVP, PR], "MR: apex → axilla. TR: LLSB, louder on inspiration."),
          Q("MR vs TR: this one is at the LLSB and gets louder with inspiration.", TR, [MR, MS, AS], "TR: Carvallo's sign."),
          Q("MS vs TS: both low-pitched diastolic rumbles. This one is at the APEX with an opening snap.", MS, [TS, AR, PR], "MS: apex, bell, LLD. TS: LLSB, louder with inspiration."),
          Q("MS vs TS: this one is at the LLSB and louder with inspiration.", TS, [MS, TR, MR], "TS: right-sided, so inspiration makes it louder."),
          Q("AR vs PR: both early diastolic decrescendo. This one gets louder with inspiration.", PR, [AR, MS, TS], "PR is right-sided, so louder on inspiration."),
          Q("AR vs PR: this one comes with a water-hammer pulse and wide pulse pressure.", AR, [PR, MS, AS], "Peripheral signs of runoff belong to AR."),
          Q("MVP vs MR: this one starts with a MID-systolic click and the murmur is LATE systolic.", MVP, [MR, AS, TR], "MVP: click ± late systolic murmur. MR: holosystolic from S1."),
          Q("MVP vs MR: this one is holosystolic from S1 and radiates to the axilla.", MR, [MVP, TR, AS], "Holosystolic + axilla = MR. All MVP can lead to MR, but not all MR is MVP."),
          Q("AR vs MS: both diastolic. This one is high-pitched and blowing, right after S2.", AR, [MS, TS, MR], "AR: blowing, early diastolic decrescendo (diaphragm). MS: low-pitched rumble (bell)."),
          Q("AR vs MS: this one is low-pitched, starts after an opening snap, and needs the bell.", MS, [AR, PR, MR], "MS rumble: bell at the apex, left lateral decubitus."),
          Q("Ejection click vs MVP click: which is EARLY systolic and belongs to AS/PS?", "The ejection click", ["The MVP click", "The opening snap", "S4"], "Ejection click = early systole (AS/PS). MVP click = mid-systole. Opening snap = early diastole (MS)."),
          Q("Opening snap vs S3: both come shortly after S2. Which is a HIGH-pitched snap that goes with MS?", "Opening snap", ["S3", "S4", "Ejection click"], "Opening snap: sharp, after S2, MS. S3: low-pitched, heard with the bell."),
          Q("S3 vs S4: which comes right BEFORE S1?", "S4", ["S3", "Opening snap", "Ejection click"], "S4 = late diastole (atrial kick). S3 = early diastole."),
          Q("Paradoxical vs wide split S2: which goes with severe AS?", "Paradoxical split", ["Wide split", "Fixed split", "No split ever"], "Delayed A2 in AS → paradoxical. Delayed P2 in PS → wide."),
          Q("Aortic sclerosis vs aortic stenosis: which has thickened leaflets WITHOUT significant obstruction?", "Aortic sclerosis", ["Aortic stenosis", "Bicuspid aortic valve", "Rheumatic AS"], "Sclerosis = thickened leaflets, no significant stenosis. Stenosis = measurable outflow obstruction."),
          Q("Which pair are 'twins' where the right-sided one gets louder with inspiration?", "MR and TR", ["AS and MR", "AR and MS", "MVP and MS"], "MR/TR, AR/PR, MS/TS, and AS/PS are left/right twins. The right-sided twin gets louder with inspiration."),
          Q("HCM vs MR: both can be heard at the apex. Which one is HARSH and crescendo-decrescendo?", HCM, [MR, MS, TR], "HCM's LVOT murmur is harsh and diamond-shaped. MR is blowing and holosystolic (and HCM patients can have MR too)."),
          Q("Acute vs chronic AR: which one presents with pulmonary edema, hypotension, and shock?", "Acute AR", ["Chronic AR", "Aortic sclerosis", "Mild AR"], "Acute AR (endocarditis, dissection, prosthetic failure, trauma): no time to compensate. Needs surgery now.")
        ]
      },
      {
        id: "name-that-murmur",
        title: "Name that murmur",
        description: "Exam-style vignettes with the full picture. Pick the lesion.",
        questions: [
          Q("A 66-year-old with HTN has exertional dyspnea, angina, and near-syncope in the heat. Harsh crescendo-decrescendo systolic murmur at the RUSB radiating to the carotids, S4, delayed carotid upstroke.", AS, [HCM, MR, PS], "Classic degenerative AS: SAD symptoms (syncope, angina, dyspnea).", { spot: "aortic", radiate: "carotids" }),
          Q("A 45-year-old with wide pulse pressure, a bounding pulse that collapses, and head bobbing. Blowing early diastolic decrescendo murmur at the left 3rd ICS, louder leaning forward.", AR, [PR, MS, AS], "Water-hammer pulse + de Musset's sign + early diastolic decrescendo = AR.", { spot: "erb", radiate: "apex" }),
          Q("A 42-year-old woman with a childhood history of rheumatic fever has dyspnea, palpitations (AFib), and hemoptysis. Low-pitched diastolic rumble at the apex after an opening snap.", MS, [MR, TS, AR], "Rheumatic fever is the most common cause of MS; women > men.", { spot: "mitral" }),
          Q("A thin 28-year-old with palpitations and anxiety has a mid-systolic click and a short late systolic murmur at the apex. The click moves earlier when she stands.", MVP, [MR, MS, AS], "MVP: most common valve abnormality; associated with anxiety symptoms.", { spot: "mitral" }),
          Q("A patient with dilated cardiomyopathy has a blowing holosystolic murmur at the apex radiating to the left axilla, with an S3.", MR, [TR, AS, MVP], "Secondary (functional) MR from LV dilation.", { spot: "mitral", radiate: "axilla" }),
          Q("A patient with COPD and pulmonary hypertension has JVD, hepatomegaly, and a blowing holosystolic murmur at the LLSB that gets louder with inspiration.", TR, [MR, PR, TS], "Most TR is secondary to RV dilation from pulmonary HTN.", { spot: "tricuspid" }),
          Q("A child with a congenital heart defect has a harsh crescendo-decrescendo systolic murmur at the LUSB with an ejection click, radiating to the left shoulder, and a widely split S2.", PS, [AS, TR, AR], "PS is usually congenital (isolated or with Tetralogy of Fallot).", { spot: "pulmonic", radiate: "left-neck" }),
          Q("An adult who had Tetralogy of Fallot repair as a child has an early diastolic decrescendo murmur at the left upper sternal border that's louder on inspiration.", PR, [AR, PS, MS], "Post-repair of congenital heart disease (e.g. TOF) is a cause of PR; inspiration = right-sided.", { spot: "pulmonic" }),
          Q("A young athlete who collapsed during exercise has a harsh systolic murmur at the apex and LLSB that gets louder when he stands from a squat. S4 present.", HCM, [AS, MVP, MR], "HCM: LVOT obstruction worsens with less preload.", { spot: "tricuspid" }),
          Q("A patient with rheumatic mitral and aortic disease also has a diastolic rumble at the LLSB, louder with inspiration, with peripheral edema and ascites.", TS, [MS, TR, PR], "TS: rare, almost always rheumatic and alongside left-sided valve disease.", { spot: "tricuspid" }),
          Q("A 30-year-old with a bicuspid aortic valve has a harsh systolic ejection murmur at the RUSB radiating to the carotids with an ejection click.", AS, [PS, HCM, MVP], "Congenital (bicuspid) AS shows up earlier, often 4th–5th decade; the click is an early-disease finding.", { spot: "aortic", radiate: "carotids" }),
          Q("A patient with Marfan syndrome and a dilated aortic root has a blowing early diastolic murmur along the left sternal border.", AR, [AS, MR, PR], "Aortic root dilation (HTN, Marfan, dissection) causes AR.", { spot: "erb" }),
          Q("A patient with Marfan syndrome has a mid-systolic click at the apex that moves later when she squats.", MVP, [AS, AR, MS], "Secondary MVP from connective tissue disease (Marfan, Ehlers-Danlos).", { spot: "mitral" }),
          Q("A patient with acute MI develops sudden pulmonary edema and shock with a new holosystolic murmur at the apex radiating to the axilla.", "Acute mitral regurgitation (papillary muscle/chordae)", ["Acute aortic regurgitation", "Aortic stenosis", "Mitral stenosis"], "Acute MR from papillary muscle or chordae ischemia/rupture: LA can't accommodate the volume. Surgery now.", { spot: "mitral", radiate: "axilla" }),
          Q("An IV drug user with fever develops sudden dyspnea, hypotension, and a new early diastolic decrescendo murmur at the left sternal border.", "Acute aortic regurgitation", ["Acute mitral stenosis", "Pulmonic stenosis", "Chronic aortic stenosis"], "Endocarditis is a cause of acute AR, which is life-threatening.", { spot: "erb" }),
          Q("A patient with carcinoid syndrome has a blowing holosystolic murmur at the LLSB that's louder with inspiration.", TR, [MR, AS, MS], "Carcinoid is a primary cause of TR (and PR).", { spot: "tricuspid" }),
          Q("A patient who took fen-phen years ago has a blowing early diastolic murmur at Erb's point.", AR, [MS, AS, PS], "Old diet drugs (fenfluramine + phentermine) are a valve-leaflet cause of AR.", { spot: "erb" }),
          Q("An elderly patient has a harsh systolic murmur at the RUSB that gets softer with Valsalva. Pulses are weak and late.", AS, [HCM, MR, MVP], "Softer with Valsalva + pulsus parvus et tardus = AS.", { spot: "aortic", radiate: "carotids" }),
          Q("A pregnant woman becomes newly dyspneic with exertion. She had rheumatic fever as a child. You hear an opening snap and a rumble at the apex in left lateral decubitus.", MS, [MR, AR, TS], "MS symptoms show up when the heart is stressed: exercise, anemia, pregnancy.", { spot: "mitral" }),
          Q("A patient with chronic MS and severe pulmonary HTN develops a NEW holosystolic murmur at the LLSB that's louder with inspiration.", TR, [MR, AS, PS], "MS → pulmonary HTN → RV dilation → secondary TR.", { spot: "tricuspid" }),
          Q("A young patient with no symptoms has a harsh crescendo-decrescendo systolic murmur at the LUSB, a wide split S2, and RVH with right axis deviation on EKG.", PS, [AS, TR, MR], "PS: RV pressure overload → RVH and right axis deviation.", { spot: "pulmonic", radiate: "left-neck" }),
          Q("A patient with HCM is given a diuretic and the systolic murmur at the LLSB gets louder. Why?", "Lower preload shrinks the LV cavity and worsens LVOT obstruction", ["The diuretic causes mitral stenosis", "Lower preload always makes every murmur louder", "The diuretic increases afterload"], "Anything that drops preload (Valsalva, standing, dehydration, diuretics) worsens HCM obstruction.", { spot: "tricuspid" }),
          Q("A 70-year-old with a mechanical aortic valve on warfarin has a new early diastolic murmur, fever, and positive blood cultures 6 months after surgery.", "Prosthetic valve endocarditis causing aortic regurgitation", ["Aortic stenosis from calcification", "Mitral valve prolapse", "Rheumatic mitral stenosis"], "Early PVE (<12 months) is typically S. aureus; prosthetic failure can cause acute AR.", { spot: "erb" }),
          Q("A patient with a holosystolic apical murmur radiating to the axilla also has a mid-systolic click that came first years ago.", "MVP that progressed to MR", ["Aortic stenosis", "Mitral stenosis", "Tricuspid regurgitation"], "MVP can lead to MR. All MVP can lead to MR, but not all MR is MVP.", { spot: "mitral", radiate: "axilla" })
        ]
      },
      {
        id: "other-sounds",
        title: "Other heart sounds",
        description: "PDA, VSD, Still's murmur, friction rubs, splits, and grading from the Heart Sounds objectives.",
        note: "The Heart Sounds deck isn't uploaded yet, so this set uses standard teaching for those objectives. Check it against the lecture when it arrives.",
        questions: [
          Q("Continuous 'machinery' murmur heard below the left clavicle.", "Patent ductus arteriosus", ["Ventricular septal defect", "Still's murmur", "Pericardial friction rub"], "PDA: aortic pressure stays above pulmonary artery pressure all cycle, so flow (and the murmur) is continuous through systole and diastole.", { spot: "pulmonic" }, HS),
          Q("Why is the PDA murmur continuous instead of only systolic?", "Aortic pressure exceeds pulmonary artery pressure in both systole and diastole", ["The ductus closes only in diastole", "The mitral valve leaks in both phases", "The pericardium rubs throughout the cycle"], "A pressure gradient that never reverses = flow (and sound) that never stops.", null, HS),
          Q("Harsh holosystolic murmur at the left lower sternal border, often with a thrill, in an infant.", "Ventricular septal defect", ["Patent ductus arteriosus", "Still's murmur", "Mitral valve prolapse"], "VSD: LV → RV shunt through all of systole, so holosystolic at the LLSB.", { spot: "tricuspid" }, HS),
          Q("Why is the VSD murmur holosystolic?", "LV pressure exceeds RV pressure throughout systole, shunting left to right", ["The ductus stays open", "The tricuspid valve stays open in diastole", "Blood is forced into a stiff ventricle"], "The LV–RV gradient lasts from S1 to S2.", null, HS),
          Q("Soft, vibratory, musical ('twanging string') early systolic murmur at the LLSB in a healthy 5-year-old that gets softer when they stand.", "Still's murmur (innocent)", ["Ventricular septal defect", "Patent ductus arteriosus", "Hypertrophic cardiomyopathy"], "Still's murmur: benign childhood murmur, musical, louder supine, softer sitting or standing.", { spot: "tricuspid" }, HS),
          Q("Scratchy, grating sound with up to three components, loudest sitting up and leaning forward, in a patient with pleuritic chest pain after a viral illness.", "Pericardial friction rub", ["Aortic regurgitation", "Still's murmur", "S4 gallop"], "Pericarditis: inflamed pericardial layers rubbing together.", { spot: "erb" }, HS),
          Q("What produces a pericardial friction rub?", "Inflamed pericardial layers rubbing against each other", ["Turbulent flow across the aortic valve", "Blood shunting through a septal defect", "Rapid ventricular filling"], "The sound is friction, not flow, so it doesn't follow a valve area.", null, HS),
          Q("Which murmur grade is the first to have a palpable thrill?", "Grade 4", ["Grade 2", "Grade 3", "Grade 6"], "Grades 1–3 have no thrill; grade 4 and up have a thrill.", null, HS),
          Q("A murmur you can hear with the stethoscope lifted just off the chest is grade…", "6", ["4", "5", "3"], "Grade 5 needs the stethoscope barely touching the chest; grade 6 is heard with it off the chest.", null, HS),
          Q("Which statement about diastolic murmurs is true?", "They are always considered pathologic", ["They are usually innocent in children", "They are always louder with Valsalva", "They are graded only 1–3"], "Innocent murmurs are systolic. A diastolic murmur needs a workup (echo).", null, HS),
          Q("An S2 that is split the SAME in inspiration and expiration (fixed split) suggests…", "Atrial septal defect", ["Severe aortic stenosis", "Mitral stenosis", "Normal physiology"], "Fixed split S2 = ASD. Wide split = PS. Paradoxical = severe AS.", null, HS),
          Q("Besides severe AS, what else commonly causes a paradoxical split S2?", "Left bundle branch block", ["Right bundle branch block", "Atrial septal defect", "Pulmonic stenosis"], "Anything that delays LV emptying (AS, LBBB) delays A2 past P2.", null, HS),
          Q("How do you classify a murmur? Pick the full set of features.", "Timing, shape, location, radiation, pitch, quality, and intensity (grade)", ["Rate, rhythm, and axis", "Only systolic vs diastolic", "Only loudness"], "Heart Sounds objective: classify murmurs by timing, shape, pitch, location, and quality (plus radiation and grade).", null, HS),
          Q("Which feature points to an INNOCENT murmur?", "Soft, systolic, changes with position, no symptoms", ["Diastolic timing", "A palpable thrill", "Holosystolic with axillary radiation"], "Innocent murmurs (e.g. Still's) are soft systolic flow murmurs in a well patient.", null, HS),
          Q("A 'to-and-fro' sound with a systolic and a diastolic component that is NOT tied to a valve area and changes with position is most likely…", "Pericardial friction rub", ["Patent ductus arteriosus", "Mitral regurgitation", "Aortic stenosis"], "Rubs are scratchy, positional, and multi-component. PDA is smooth and continuous ('machinery').", null, HS),
          Q("Which of these murmurs is NOT holosystolic?", "Still's murmur", ["Ventricular septal defect", "Mitral regurgitation", "Tricuspid regurgitation"], "Still's murmur is early-to-midsystolic. VSD, MR, and TR are holosystolic.", null, HS)
        ]
      }
    ]
  };
}());
