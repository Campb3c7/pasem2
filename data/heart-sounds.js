/* Heart Sounds listening practice (Cardio Part 1).
   Audio lives in audio/heart-sounds/. Every recording is labeled with what you hear:
   timing, shape, extra sound, pitch, quality, and the diagnosis.
   A null attribute means the source does not let us say for sure, so that field is not quizzed.
   Ids are stable: rename nothing once progress is saved. Run node scripts/validate-heart-sounds.cjs after editing. */
(function () {
  "use strict";

  // Answer lists for the "Describe it" drop-downs and the attribute questions.
  var OPTIONS = {
    timing: ["No murmur", "Early systolic", "Mid-systolic", "Late systolic", "Holosystolic", "Early diastolic", "Mid-diastolic", "Systolic and diastolic (to-and-fro)", "Continuous through S2"],
    shape: ["No murmur", "Crescendo", "Decrescendo", "Crescendo-decrescendo (diamond)", "Plateau", "Rumble", "Diamond, then decrescendo", "Machinery (continuous)"],
    extra: ["None", "S3", "S4", "Ejection click", "Midsystolic click", "Opening snap", "Physiologic split S2", "Wide split S2", "Fixed split S2", "Single or absent S2", "Split S1"],
    pitch: ["No murmur", "High", "Medium", "Low"],
    quality: ["No murmur", "Blowing", "Harsh", "Rumbling", "Musical or vibratory", "Machinery", "Harsh, then blowing", "Scratchy"]
  };

  var FIELDS = [
    { id: "timing", label: "Timing", question: "When in the cardiac cycle is the murmur?" },
    { id: "shape", label: "Shape", question: "What shape is the murmur?" },
    { id: "extra", label: "Extra sound", question: "Which extra sound or S2 finding do you hear?" },
    { id: "pitch", label: "Pitch", question: "What is the pitch of the murmur?" },
    { id: "quality", label: "Quality", question: "How would you describe the murmur's quality?" }
  ];

  // Diagnoses. lecture: true = on the Heart Sounds lecture's list.
  function D(id, name, lecture, where, listen, clue, why) {
    return { id: id, name: name, lecture: lecture, where: where, listen: listen, clue: clue, why: why };
  }
  var DIAGNOSES = [
    D("normal", "Normal S1 and S2", true, "All areas", "Start here so every abnormal sound has a reference.", "Lub dub. S1 starts systole, S2 starts diastole. The pause after S2 (diastole) is longer than the one after S1.", "S1 = AV valves (mitral, tricuspid) closing. S2 = semilunar valves (aortic, pulmonic) closing."),
    D("physiologic-split", "Physiologic split S2", true, "Pulmonic area (left 2nd ICS)", "Splits on inspiration only. Single again on expiration or breath-hold.", "S2 turns into a quick \"t-dub\" when the patient breathes in.", "Inspiration pulls more blood into the right heart, so the pulmonic valve closes a little after the aortic valve."),
    D("split-s1", "Split S1 (normal variant)", false, "Tricuspid area or apex", "Hear it in every beat, not just inspiration.", "S1 has two close pieces (mitral, then tricuspid). S2 is single.", "Normal variant, not on the lecture list. Do not call it an S4: an S4 is duller, lower, and sits further before S1."),
    D("single-s2", "Single S2 (normal in older adults)", false, "Pulmonic area", "Stays single in both inspiration and expiration.", "One crisp S2 that never splits.", "Not on the lecture list. P2 gets soft with age, so the split is not heard."),
    D("wide-split", "Wide split S2", false, "Pulmonic area", "Split on expiration and wider on inspiration.", "S2 is split in every beat and opens further on inspiration.", "Something delays pulmonic closure: right bundle branch block or pulmonic stenosis. The deck lists wide split as pathologic and pairs it with PS."),
    D("s3", "S3 gallop", true, "Apex, bell, left side down", "Bell, quiet room, hold breath.", "Lub-dub-ta, \"Ken-tuc-ky\". A dull, low thud just after S2 in early diastole.", "Fast early filling makes the ventricular walls vibrate. Volume overload (CHF, dilated CM). Can be normal in athletes, pregnancy, and young people."),
    D("s4", "S4 gallop", true, "Apex, bell", "Bell, quiet room, hold breath.", "Ta-lub-dub, \"Ten-nes-see\". A dull, low thud just before S1 in late diastole.", "The atria contract against a stiff ventricle. Pressure overload (HTN, HCM, AS). Always pathologic."),
    D("as", "Aortic stenosis", true, "Right 2nd ICS, radiates to the carotids", "Louder with squatting, softer with Valsalva.", "Harsh, high-pitched crescendo-decrescendo (diamond) in systole. Ejection click early on. Severe: soft or absent S2, or paradoxical split.", "A stiff aortic valve makes ejection turbulent. Flow rises then falls, so the murmur does too."),
    D("bicuspid", "Bicuspid aortic valve (ejection click)", true, "Aortic area and apex", "Listen for the click right after S1.", "High-pitched click right after S1, often followed by a diamond murmur.", "The stenotic semilunar valve snaps open and stops short. Classic for a bicuspid aortic valve."),
    D("ps", "Pulmonic stenosis", true, "Left 2nd ICS, may radiate to the left neck or shoulder", "Ejection click may be there. Wide split S2 may be there.", "Harsh, high-pitched crescendo-decrescendo in systole at the left upper sternal border.", "A stiff pulmonic valve. The RV takes longer to empty, so P2 comes late (wide split)."),
    D("mr", "Mitral regurgitation", true, "Apex, radiates to the left axilla", "S3 in severe cases.", "Blowing, high-pitched, holosystolic: it fills S1 to S2 evenly.", "A leaky mitral valve lets the LV push blood back into the left atrium for all of systole."),
    D("mvp", "Mitral valve prolapse", true, "Apex", "Standing or Valsalva: click earlier, murmur longer. Squatting: click later, murmur shorter.", "Midsystolic click, with or without a late systolic murmur.", "The leaflet snaps back into the atrium and is stopped short by the chordae tendineae. All MVP can lead to MR, but not all MR is MVP."),
    D("tr", "Tricuspid regurgitation", true, "Left lower sternal border", "Louder on inspiration (Carvallo's sign).", "Blowing, high-pitched, holosystolic, like MR but lower on the sternum.", "A leaky tricuspid valve. Inspiration sends more blood to the right heart, so the murmur gets louder."),
    D("ar", "Aortic regurgitation", true, "Left 2nd to 4th ICS, may radiate to the apex", "Sit up, lean forward, exhale and hold.", "Blowing, high-pitched decrescendo starting right at S2.", "A leaky aortic valve lets blood fall back into the LV as soon as diastole starts, loudest at first."),
    D("pr", "Pulmonic regurgitation", true, "Left upper sternal border", "Louder on inspiration.", "Same as AR (blowing early diastolic decrescendo) but louder on inspiration.", "A leaky pulmonic valve. Right-sided, so inspiration makes it louder."),
    D("ms", "Mitral stenosis", true, "Apex with the bell, no radiation", "Left lateral decubitus.", "High opening snap after S2, then a low diastolic rumble.", "Blood forces the stiff mitral valve open (snap), then squeezes through the narrow opening (rumble)."),
    D("as-ar", "Aortic stenosis and regurgitation", false, "Aortic area", "Listen for two separate murmurs.", "Harsh diamond in systole, then a blowing decrescendo after S2 (to-and-fro).", "Both lesions on one valve. Not its own item on the lecture list, but each half is."),
    D("s3-mr", "S3 with mitral regurgitation (dilated cardiomyopathy)", false, "Apex, left side down", "Bell, left lateral decubitus.", "Holosystolic murmur plus a low thud after S2.", "A big, failing ventricle: volume overload (S3) and a stretched mitral ring (MR)."),
    D("s4-mr", "S4 with mitral regurgitation (ischemic cardiomyopathy)", false, "Apex, left side down", "Bell, left lateral decubitus.", "A low thud before S1, then a systolic murmur.", "A stiff, ischemic ventricle (S4) and papillary muscle dysfunction (MR)."),
    D("pda", "Patent ductus arteriosus", true, "Pulmonic area (left upper sternal border)", "Congenital, newborns.", "Harsh, continuous \"machinery\" murmur. Builds through systole, peaks at S2, fades in diastole.", "Aortic pressure stays above pulmonary pressure all cycle, so flow through the ductus never stops."),
    D("vsd", "Ventricular septal defect", true, "Left sternal border, 3rd to 5th ICS", "Congenital.", "Harsh or blowing holosystolic murmur, often loud.", "Blood shunts from the LV straight into the RV through the hole for all of systole."),
    D("asd", "Atrial septal defect (fixed split S2)", false, "Pulmonic area (left upper sternal border)", "The split does not change with breathing.", "Fixed split S2 plus a soft systolic ejection murmur.", "Not on the Heart Sounds list, but the classic cause of a fixed split. Extra flow through the right heart delays P2 in every beat."),
    D("innocent", "Innocent murmur (Still's or flow murmur)", true, "Left sternal border or apex, supine", "Disappears with standing.", "Soft, musical or vibratory systolic murmur in a healthy child.", "Normal flow, no structural disease. Diastolic murmurs are never innocent."),
    D("venous-hum", "Venous hum", true, "Right supraclavicular, sitting up", "Disappears lying down, with jugular compression, or with the head turned.", "Soft, continuous hum.", "Flow in the jugular veins, not the heart. Innocent."),
    D("rub", "Pericardial friction rub", true, "Left sternal border, leaning forward", "Louder on expiration.", "Scratchy, high-pitched, with 1 to 3 parts per beat.", "Inflamed pericardial layers rubbing together.")
  ];

  // Groups for "Listen and learn".
  var GROUPS = [
    { id: "normal", title: "Normal and split S2", description: "Baseline S1/S2 and the physiologic split." },
    { id: "extra", title: "Extra sounds", description: "S3, S4, clicks, and the opening snap." },
    { id: "systolic", title: "Systolic murmurs", description: "Holosystolic, early systolic decrescendo, diamond mid-systolic, and late systolic crescendo." },
    { id: "diastolic", title: "Diastolic murmurs", description: "The mid-diastolic rumble of mitral stenosis." },
    { id: "congenital", title: "Congenital and other", description: "PDA, VSD, ASD, pulmonic stenosis, AS + AR, and an innocent murmur, recorded in children." }
  ];

  // R(id, group, source, file, title, dx, spot, attrs, diagram, note, extra)
  // attrs: [timing, shape, extra, pitch, quality]; null = not quizzed.
  // diagram: { s1, s2, x: [extra sounds], m: [murmurs] } drawn by heart-sounds.js.
  function R(id, group, source, file, title, dx, spot, attrs, diagram, note, more) {
    var recording = {
      id: id, group: group, source: source, file: file, title: title, dx: dx, spot: spot,
      timing: attrs[0], shape: attrs[1], extra: attrs[2], pitch: attrs[3], quality: attrs[4],
      diagram: diagram, note: note || ""
    };
    Object.keys(more || {}).forEach(function (key) { recording[key] = more[key]; });
    return recording;
  }
  var NONE = ["No murmur", "No murmur", "None", "No murmur", "No murmur"];
  function only(extra) { return ["No murmur", "No murmur", extra, "No murmur", "No murmur"]; }
  var C = "congenital/", K = "class/";
  var SYS = function (from, to, shape) { return { phase: "sys", from: from, to: to, shape: shape }; };
  var DIA = function (from, to, shape) { return { phase: "dia", from: from, to: to, shape: shape }; };

  var RECORDINGS = [
    // ---- Class recordings (Heart Sounds lecture, Canvas). Each has a sound-only file and a narrated one.
    R("class-baseline", "normal", "class", K + "11-baseline-only.mp3", "Baseline: normal S1 and S2", "normal", "Class recording", NONE, {}, "Your class's baseline track. Use it as the reference for every other track.", { narrated: K + "01-baseline-with-lecture.mp3" , track: 11, narratedTrack: 1 }),
    R("class-split-s2", "normal", "class", K + "16-split-s2-only.mp3", "Split S2", "physiologic-split", "Class recording", only("Physiologic split S2"), { s2: "split" }, "S2 comes in two quick pieces (A2 then P2).", { narrated: K + "06-split-s2-with-lecture.mp3" , track: 16, narratedTrack: 6 }),
    R("class-s3", "extra", "class", K + "15-s3-only.mp3", "S3", "s3", "Class recording", only("S3"), { x: ["S3"] }, "Third sound just after S2: Ken-tuc-ky.", { narrated: K + "05-s3-with-lecture.mp3" , track: 15, narratedTrack: 5 }),
    R("class-s4", "extra", "class", K + "18-s4-only.mp3", "S4", "s4", "Class recording", only("S4"), { x: ["S4"] }, "Extra sound just before S1: Ten-nes-see. The track starts with normal beats, then the S4 comes in.", { narrated: K + "08-s4-with-lecture.mp3" , track: 18, narratedTrack: 8 }),
    R("class-os", "extra", "class", K + "14-os-only.mp3", "Opening snap", "ms", "Class recording", only("Opening snap"), { x: ["OS"] }, "A sharp snap shortly after S2. It is the mitral stenosis signature. On this track the rumble is faint or absent, so focus on the snap.", { narrated: K + "04-os-with-lecture.mp3" , track: 14, narratedTrack: 4 }),
    R("class-holosystolic", "systolic", "class", K + "12-holosystolic-only.mp3", "Holosystolic murmur", "mr", "Class recording", ["Holosystolic", "Plateau", "None", null, null], { m: [SYS(0, 1, "plateau")] }, "Even murmur filling S1 to S2. The shape fits MR, TR, or VSD; location decides which.", { narrated: K + "02-holosystolic-with-lecture.mp3", accept: ["tr", "vsd"] , track: 12, narratedTrack: 2 }),
    R("class-systolic-decrescendo", "systolic", "class", K + "13-systolic-decrescendo-only.mp3", "Early systolic decrescendo murmur", "mr", "Class recording", ["Early systolic", "Decrescendo", "None", null, null], { m: [SYS(0, 0.6, "decresc")] }, "Starts loud right at S1 and fades before S2. Classic for acute MR (or a small VSD). The track starts with normal beats, then the murmur comes in.", { narrated: K + "03-systolic-decrescendo-with-lecture.mp3", accept: ["vsd"] , track: 13, narratedTrack: 3 }),
    R("class-diamond", "systolic", "class", K + "17-diamond-mid-systolic-only.mp3", "Diamond mid-systolic murmur", "as", "Class recording", ["Mid-systolic", "Crescendo-decrescendo (diamond)", "None", null, null], { m: [SYS(0.12, 0.88, "diamond")] }, "Gap after S1, murmur swells and fades, gap before S2. The ejection (stenosis) shape: AS or PS, or an innocent flow murmur if soft.", { narrated: K + "07-diamond-mid-systolic-with-lecture.mp3", accept: ["ps", "innocent"] , track: 17, narratedTrack: 7 }),
    R("class-systolic-crescendo", "systolic", "class", K + "19-systolic-crescendo-only.mp3", "Late systolic crescendo murmur", "mvp", "Class recording", ["Late systolic", "Crescendo", "None", null, null], { m: [SYS(0.45, 1, "cresc")] }, "Quiet start of systole, then a murmur that builds right up to S2. The late MR of mitral valve prolapse. The track starts with normal beats.", { narrated: K + "09-systolic-crescendo-with-lecture.mp3", accept: ["mr"] , track: 19, narratedTrack: 9 }),
    R("class-mid-diastolic", "diastolic", "class", K + "20-mid-diastolic-only.mp3", "Mid-diastolic murmur", "ms", "Class recording", ["Mid-diastolic", "Rumble", "None", "Low", "Rumbling"], { m: [DIA(0.25, 0.8, "rumble")] }, "A low rumble in the middle of diastole, after S2 and away from it. Mitral stenosis.", { narrated: K + "10-mid-diastolic-with-lecture.mp3" , track: 20, narratedTrack: 10 }),

    // ---- Congenital Heart Disease Sounds (teachingheartauscultation.com, free MP3s). Real children, short clips.
    R("chd-normal", "normal", "congenital", C + "5-normal-sounds.mp3", "Normal heart sounds (20-year-old)", "normal", "Left upper sternal edge, diaphragm", ["No murmur", "No murmur", null, "No murmur", "No murmur"], {}, "A healthy young adult. A real chest, so there is more background noise than the class tracks."),
    R("chd-bicuspid", "extra", "congenital", C + "6-bicuspid-aortic-valve.mp3", "Bicuspid aortic valve (ejection click)", "bicuspid", "Apex", [null, null, "Ejection click", null, null], { x: ["EC"] }, "A 10-year-old before hockey. Listen for the click right after S1. Ignore the skin crackles."),
    R("chd-innocent-s3", "congenital", "congenital", C + "8-innocent-murmur-and-s3.mp3", "Innocent murmur and S3 (healthy 7-year-old)", "innocent", "Apex, bell", [null, null, "S3", null, "Musical or vibratory"], { x: ["S3"], m: [SYS(0.05, 0.6, "diamond")] }, "A musical systolic murmur plus an S3. Both are normal in a healthy child."),
    R("chd-pda", "congenital", "congenital", C + "3-pda.mp3", "Patent ductus arteriosus", "pda", "Left upper sternal edge", ["Continuous through S2", "Machinery (continuous)", null, null, "Machinery"], { m: [{ phase: "cont", shape: "machinery" }] }, "The murmur never stops. It peaks around S2 and fades in diastole. A 4-year-old with bounding pulses."),
    R("chd-vsd", "congenital", "congenital", C + "9-vsd.mp3", "Ventricular septal defect", "vsd", "Left sternal edge, 4th interspace", ["Holosystolic", "Plateau", null, "High", "Harsh"], { m: [SYS(0, 1, "plateau")] }, "Holosystolic like MR, but heard at the left lower sternal border in a child.", { accept: ["mr"] }),
    R("chd-asd-1", "congenital", "congenital", C + "1-asd.mp3", "Atrial septal defect (4-year-old girl)", "asd", "Left upper sternal edge", ["Mid-systolic", "Crescendo-decrescendo (diamond)", "Fixed split S2", null, null], { s2: "fixed", m: [SYS(0.15, 0.8, "diamond")] }, "Soft ejection murmur and a split S2 that does not change with breathing."),
    R("chd-asd-2", "congenital", "congenital", C + "7-asd.mp3", "Atrial septal defect (4-year-old boy)", "asd", "Left upper sternal edge", ["Mid-systolic", "Crescendo-decrescendo (diamond)", "Fixed split S2", null, null], { s2: "fixed", m: [SYS(0.15, 0.8, "diamond")] }, "A second ASD to practice the fixed split."),
    R("chd-pulmonic-stenosis", "congenital", "congenital", C + "2-pulmonary-stenosis.mp3", "Pulmonary stenosis (9-year-old)", "ps", "Left upper sternal border", ["Mid-systolic", "Crescendo-decrescendo (diamond)", null, "High", "Harsh"], { m: [SYS(0.1, 0.9, "diamond")] }, "Harsh ejection murmur at the left upper sternal border."),
    R("chd-as-ar", "congenital", "congenital", C + "4-aortic-stenosis-and-regurgitation.mp3", "Aortic stenosis and regurgitation (10-year-old with fever)", "as-ar", "Aortic area", ["Systolic and diastolic (to-and-fro)", "Diamond, then decrescendo", null, null, "Harsh, then blowing"], { m: [SYS(0.1, 0.9, "diamond"), DIA(0, 0.55, "decresc")] }, "Ten days of fever and bounding pulses: think endocarditis damaging the aortic valve.")
  ];

  // Look-alike sets for "Side by side".
  var LOOKALIKES = [
    { id: "holo", title: "Holosystolic: MR vs VSD (vs TR)", clue: "Same shape. Location decides: MR at the apex to the axilla, VSD at the left lower sternal border and harsh, TR at the left lower sternal border and louder on inspiration.", recordings: ["class-holosystolic", "chd-vsd"] },
    { id: "systolic-shapes", title: "Systolic shapes: holo vs early decrescendo vs diamond vs late crescendo", clue: "Where does the murmur start and stop? Holo fills S1 to S2. Early decrescendo starts at S1 and fades. Diamond has a gap at both ends and swells in the middle. Late crescendo starts after a gap and builds into S2.", recordings: ["class-holosystolic", "class-systolic-decrescendo", "class-diamond", "class-systolic-crescendo"] },
    { id: "ejection", title: "Diamond murmurs: AS vs PS vs innocent vs ASD", clue: "AS: right upper sternal border, harsh, to the carotids. PS: left upper, harsh, maybe a click and wide split. Innocent: soft and musical in a child. ASD: soft, with a fixed split S2.", recordings: ["class-diamond", "chd-pulmonic-stenosis", "chd-innocent-s3", "chd-asd-1"] },
    { id: "after-s2", title: "Something right after S2: split S2 vs opening snap vs S3", clue: "Split S2: very close, only on inspiration. Opening snap: high and crisp, a bit later. S3: later still, dull and low, bell only.", recordings: ["class-split-s2", "class-os", "class-s3"] },
    { id: "gallops", title: "S3 vs S4", clue: "S3 right after S2 (Ken-tuc-ky). S4 right before S1 (Ten-nes-see). Both low: use the bell.", recordings: ["class-s3", "class-s4"] },
    { id: "mitral-stenosis", title: "Mitral stenosis: opening snap vs mid-diastolic rumble", clue: "Both are MS. The snap is a sharp sound just after S2. The rumble is a low murmur that follows in mid-diastole.", recordings: ["class-os", "class-mid-diastolic"] },
    { id: "splits", title: "Split S2: physiologic vs fixed", clue: "Physiologic: only on inspiration. Fixed (ASD): split in every beat and never changes with breathing.", recordings: ["class-split-s2", "chd-asd-1"] },
    { id: "both-phases", title: "Both phases: PDA vs AS + AR", clue: "PDA runs straight through S2 like machinery. AS + AR is two separate murmurs with a break at S2 (to-and-fro).", recordings: ["chd-pda", "chd-as-ar"] }
  ];


  window.HEART_SOUNDS = {
    audioBase: "audio/heart-sounds/",
    options: OPTIONS,
    fields: FIELDS,
    diagnoses: DIAGNOSES,
    groups: GROUPS,
    recordings: RECORDINGS,
    lookalikes: LOOKALIKES,
    sources: {
      class: "Class recordings from the Heart Sounds lecture (Canvas). Each comes as sound only and with the lecture talking over it.",
      congenital: "Congenital Heart Disease Sounds, teachingheartauscultation.com (free MP3s). Live recordings from children."
    }
  };
}());
