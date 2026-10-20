/* Wireman, Valvular Disease. Official "Valvular Disease Objectives" in the supplied order.
   The four per-lesion objectives (pathophysiology/etiology, presentation incl. murmur, workup, management/surgery timing)
   are split into one section per lesion (3a-3k). Picture-only slide content used: valve pathology photos (13),
   concentric vs eccentric LVH diagram (30: sarcomeres in parallel vs in series), annuloplasty ring (72), TAVR valve (105-106).
   Clarification: slide 43 reads "commissural fission"; slide 40 and the "fish-mouth" description mean commissural FUSION. */
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

  window.VALVULAR_DISEASE_OBJECTIVES = [

    /* ---------- 1 ---------- */
    S("01-echo-first-line", "1. Why echocardiography is the primary imaging for valve disease", "Objective 1. Slide 4.", [
      C("Echo: first-line imaging for valve disease",
        "<p><strong>Echocardiography</strong> is the <strong>first-line</strong> imaging test for suspected valve disease because it is <strong>non-invasive and widely available</strong> and shows, in one study:</p>" +
        tbl(["Echo provides", "What it tells you"], [
          ["Valve anatomy", "Structure: thickening, calcification, leaflet number, prolapse"],
          ["Valve function", "Movement: opening and closing"],
          ["Doppler flow", "Blood flow direction and <strong>pressure gradients</strong> across the valve (stenosis severity, regurgitant jets)"],
          ["Ventricular response", "Chamber size, wall thickness, <strong>ejection fraction (EF)</strong>"]]) +
        hy("For every lesion in this lecture, the echo <strong>makes the diagnosis and grades severity</strong>; EKG and CXR are only supporting tools."),
        ["echo-first-line", "echo-noninvasive-available", "echo-anatomy", "echo-function", "echo-doppler-gradients", "echo-ventricle-response"],
        [q("What is the first-line imaging test for suspected valvular heart disease?", "Echocardiography", ["Chest x-ray", "Cardiac CT", "Cardiac catheterization"], "Echo is non-invasive, widely available, and shows anatomy, function, flow, and ventricular response."),
          q("Which echo technique measures blood flow and pressure gradients across a valve?", "Doppler", ["M-mode wall tracing only", "Contrast bubble study", "Strain imaging"], "Doppler quantifies flow and gradients, the basis of stenosis and regurgitation grading."),
          q("Besides valve anatomy and function, which ventricular information does echo provide?", "Chamber size, wall thickness, and ejection fraction", ["Coronary artery anatomy", "Myocardial biopsy results", "Electrical conduction intervals"], "Echo shows ventricular response: size, wall thickness, EF.")],
        [q("A new systolic murmur is heard in a 70-year-old. The attending asks which single test will show the valve structure, the gradient, and the LV wall thickness and EF. Best answer?", "Transthoracic echocardiogram", ["12-lead EKG", "Chest x-ray", "Exercise treadmill test"], "Echo answers all four questions at once; EKG and CXR give only indirect clues.")])
    ]),

    /* ---------- 2 ---------- */
    S("02-tte-vs-tee", "2. Transthoracic vs transesophageal echo", "Objective 2. Slides 5–8.", [
      C("Transthoracic echo (TTE)",
        "<ul><li>Ultrasound probe placed on the <strong>chest wall</strong>.</li><li><strong>Standard FIRST test</strong> for valve disease: noninvasive, quick, real-time view.</li>" +
        "<li><strong>Limitations:</strong> image quality depends on <strong>body habitus, lung interference, comorbidities, and technician skill</strong>.</li>" +
        "<li><strong>Interpreted by a cardiologist</strong>, who issues the official report.</li></ul>",
        ["tte-indication", "tte-strengths", "tte-limitations"],
        [q("Which echo is the standard first test for valve disease?", "Transthoracic echo (TTE)", ["Transesophageal echo (TEE)", "Intracardiac echo", "Stress echo"], "TTE is noninvasive and quick, so it comes first."),
          q("Which factor limits TTE image quality?", "Body habitus and lung interference", ["Esophageal disease", "Need for deep sedation", "Inability to see the left ventricle at all"], "TTE images degrade with obesity, lung interference, comorbidities, and operator skill.")],
        [q("A patient with severe COPD and obesity has a TTE read as “non-diagnostic, poor acoustic windows.” What best explains this?", "TTE quality depends on body habitus and lung interference", ["The valve disease is too mild to see", "TTE cannot image any valve", "The cardiologist did not perform the study"], "Habitus and hyperinflated lungs block the chest-wall window.")]),
      C("Transesophageal echo (TEE)",
        "<ul><li>Probe passed into the <strong>esophagus</strong>: more invasive, different workflow; the <strong>cardiologist performs and interprets</strong> it.</li>" +
        "<li><strong>Strengths:</strong> superior resolution of <strong>posterior structures, valve leaflets, prosthetic valves, vegetations</strong>; better detection of <strong>thrombi, endocarditis</strong>, and subtle stenosis/regurgitation.</li>" +
        "<li><strong>Limitations:</strong> requires <strong>sedation</strong>, <strong>contraindicated in esophageal disease</strong>, more resources.</li></ul>" +
        tbl(["", "TTE", "TEE"], [
          ["Probe", "Chest wall", "Esophagus"],
          ["Role", "First test", "Problem-solving follow-up"],
          ["Best for", "Initial diagnosis and severity", "Vegetations, thrombi, prosthetic valves, posterior structures"],
          ["Drawbacks", "Habitus, lungs, operator", "Sedation; no esophageal disease; resources"]]) +
        hy("Need to see a <strong>vegetation, LA thrombus, or prosthetic valve</strong> clearly? Think <strong>TEE</strong>."),
        ["tee-indication", "tee-strengths", "tee-limitations", "tte-tee-comparison"],
        [q("Which is a contraindication to transesophageal echo?", "Esophageal disease", ["Obesity", "Atrial fibrillation", "Prosthetic valve"], "The probe passes through the esophagus, so esophageal disease contraindicates TEE."),
          q("TEE is superior to TTE for which of the following?", "Detecting vegetations and evaluating prosthetic valves", ["Being the quickest bedside screening test", "Avoiding any need for sedation", "Imaging without a cardiologist present"], "TEE gives superior resolution of posterior structures, leaflets, prosthetic valves, vegetations, and thrombi."),
          q("Who performs and interprets a TEE?", "The cardiologist", ["A sonographer alone", "The radiologist", "The anesthesiologist"], "For TEE the cardiologist both performs and interprets the study.")],
        [q("A patient with a mechanical mitral valve has fever and positive blood cultures; the TTE shows no clear vegetation. Best next imaging?", "Transesophageal echo", ["Repeat transthoracic echo next year", "Chest x-ray", "Cardiac CT calcium score"], "TEE better detects vegetations and evaluates prosthetic valves."),
          q("A patient with known esophageal stricture needs valve imaging. Which test should be avoided?", "Transesophageal echo", ["Transthoracic echo", "12-lead EKG", "Chest x-ray"], "Esophageal disease contraindicates TEE.")])
    ]),

    /* ---------- 3a AS ---------- */
    S("03a-aortic-stenosis", "3a. Aortic stenosis", "Objectives 3–6 applied to aortic stenosis. Slides 10–27.", [
      C("AS: pathophysiology",
        "<p>Narrowed aortic valve (thickened or immobile leaflets) <strong>obstructs LV → aorta flow</strong>. The LV must generate higher pressure → <strong>pressure overload → concentric LVH</strong> → eventually LV dysfunction.</p>" +
        "<ul><li>Degenerative AS resembles atherosclerosis: endothelial damage → inflammation → <strong>calcium deposition</strong> → rigid leaflets that fuse at the commissures (thickening → inflammation/calcium → stenosis).</li>" +
        "<li>LVH maintains stroke volume but makes the LV <strong>stiff</strong> (diastolic dysfunction) and <strong>oxygen-hungry</strong>; cardiac output becomes <strong>fixed</strong> and cannot rise with exertion.</li>" +
        "<li><strong>Compensated:</strong> EF usually normal (≥ 50%) even with severe obstruction, so patients may be asymptomatic for years.</li>" +
        "<li><strong>Decompensated:</strong> diastolic then <strong>systolic dysfunction (EF &lt; 50%)</strong>; prognosis worsens dramatically once EF falls.</li></ul>" +
        "<p><strong>Aortic sclerosis</strong> = thickened leaflets without significant stenosis; <strong>aortic stenosis</strong> = measurable obstruction and reduced valve area.</p>",
        ["as-pathophysiology", "as-concentric-lvh", "as-fixed-output", "as-compensated-vs-decompensated", "as-sclerosis-vs-stenosis"],
        [q("Aortic stenosis places what type of load on the left ventricle?", "Pressure overload causing concentric hypertrophy", ["Volume overload causing eccentric hypertrophy", "Volume overload of the left atrium only", "Pressure overload of the right ventricle"], "Obstruction to outflow forces the LV to generate higher pressure → concentric LVH."),
          q("What distinguishes aortic sclerosis from aortic stenosis?", "Sclerosis is leaflet thickening without significant outflow obstruction", ["Sclerosis is always rheumatic", "Sclerosis has a smaller valve area than stenosis", "Sclerosis causes a diastolic murmur"], "Sclerosis = thickened leaflets without significant stenosis; stenosis = measurable obstruction and reduced area."),
          q("In compensated aortic stenosis, the ejection fraction is usually:", "Normal (≥ 50%)", ["Below 30%", "Below 50%", "Unmeasurable on echo"], "LVH maintains stroke volume, so EF stays normal until late disease.")],
        [q("A 74-year-old with severe AS is asymptomatic and has an EF of 60%. A student says the normal EF means the disease is mild. Best correction?", "LVH preserves EF in compensated AS despite severe obstruction", ["Normal EF rules out severe AS", "EF is not measured in valve disease", "AS only lowers EF in the first year"], "EF is usually normal in compensated AS; it falls only with decompensation."),
          q("Why does a patient with severe AS become breathless and lightheaded with exertion?", "Cardiac output is fixed across the stenotic valve and cannot rise with exertion", ["The aortic valve leaks blood back into the LV", "The right ventricle fails first", "The LV cavity dilates and EF rises"], "LVH and outflow obstruction leave a fixed output that cannot meet exertional demand.")]),
      C("AS: etiologies",
        tbl(["Cause", "Key points"], [
          ["<strong>Degenerative (calcific)</strong>", "Mostly age 65+; risk factors smoking, HTN, DM, high LDL, elevated CRP; <strong>leading cause of valve surgery in the US</strong>"],
          ["<strong>Congenital</strong>", "Usually <strong>bicuspid</strong> (sometimes unicuspid) valve; younger patients; AS develops earlier, usually in the <strong>4th–5th decade</strong>"],
          ["<strong>Rheumatic heart disease</strong>", "<strong>Most common cause worldwide</strong>, rare in industrialized countries; commissural fusion, less calcification than degenerative"],
          ["Other", "Radiation, connective tissue disease, hyperlipoproteinemia syndromes"]]) +
        "<p>Men &gt; women.</p>",
        ["as-etiology-degenerative", "as-etiology-bicuspid", "as-etiology-rheumatic", "as-etiology-other"],
        [q("What is the most common cause of aortic stenosis worldwide?", "Rheumatic heart disease", ["Degenerative calcification", "Bicuspid aortic valve", "Radiation"], "RHD is the most common cause worldwide but rare in industrialized countries."),
          q("Which aortic stenosis etiology is the leading cause of valve surgery in the US?", "Degenerative calcific disease", ["Rheumatic heart disease", "Infective endocarditis", "Connective tissue disease"], "Age-related calcific AS leads valve surgery in the US."),
          q("A congenitally bicuspid aortic valve usually becomes stenotic at what age?", "4th–5th decade", ["First year of life", "8th–9th decade only", "Adolescence in all cases"], "Abnormal valves see more turbulent flow and stenose earlier, in the 4th–5th decade.")],
        [q("A 44-year-old man with no rheumatic history has a calcified, stenotic aortic valve with two cusps on echo. Most likely etiology?", "Congenital bicuspid aortic valve", ["Degenerative calcification of a trileaflet valve", "Rheumatic heart disease", "Radiation injury"], "Bicuspid valves stenose earlier (4th–5th decade)."),
          q("A 78-year-old smoker with HTN, diabetes, and high LDL has a heavily calcified trileaflet aortic valve. Most likely cause of AS?", "Degenerative calcific disease", ["Bicuspid valve", "Rheumatic heart disease", "Hyperlipoproteinemia syndrome"], "Age 65+ plus atherosclerotic risk factors = degenerative AS.")]),
      C("AS: symptoms and murmur",
        "<p>Most are asymptomatic until disease is advanced. Classic triad:</p>" +
        mn("<strong>SAD</strong> = <strong>S</strong>yncope, <strong>A</strong>ngina (exertional), <strong>D</strong>yspnea (exertional, decreased exercise tolerance). Survival without replacement: <strong>Angina ~5 yr, Heart failure ~3 yr, Syncope ~2 yr</strong> (5-3-2).") +
        tbl(["Feature", "Aortic stenosis"], [
          ["Timing", "<strong>Systolic</strong>, crescendo-decrescendo"],
          ["Quality", "Harsh, high-pitched"],
          ["Location", "<strong>Right 2nd ICS (RUSB)</strong>"],
          ["Radiation", "<strong>Carotids</strong>"],
          ["Maneuvers", "Louder with <strong>squatting</strong>, softer with <strong>Valsalva</strong>"],
          ["Extras", "Systolic ejection click early; <strong>paradoxical split S2</strong> when severe"]]) +
        "<p><strong>Other exam findings:</strong> <strong>S4 gallop</strong>, laterally displaced and sustained apical impulse, <strong>pulsus parvus et tardus</strong> (delayed, diminished carotid upstroke).</p>",
        ["as-symptoms", "as-murmur", "as-exam-findings", "as-prognosis"],
        [q("Where is the aortic stenosis murmur best heard and where does it radiate?", "Right 2nd intercostal space, radiating to the carotids", ["Apex, radiating to the left axilla", "Left lower sternal border, no radiation", "Left 2nd intercostal space, radiating to the left shoulder"], "AS: RUSB → carotids."),
          q("Which carotid pulse finding is classic for aortic stenosis?", "Pulsus parvus et tardus", ["Water hammer pulse", "Pulsus paradoxus", "Bisferiens pulse with head bobbing"], "Delayed, diminished upstroke = parvus et tardus."),
          q("Which maneuver makes the aortic stenosis murmur softer?", "Valsalva", ["Squatting", "Passive leg raise", "Sustained handgrip with squatting"], "AS is louder with squatting and softer with Valsalva."),
          q("Which extra heart sound is associated with aortic stenosis?", "S4 gallop", ["Opening snap", "Mid-systolic click", "Pericardial knock"], "The stiff hypertrophied LV produces an S4."),
          q("In untreated symptomatic aortic stenosis, which presenting symptom carries the shortest average survival?", "Syncope (~2 years)", ["Angina (~5 years)", "Heart failure (~3 years)", "Palpitations (~10 years)"], "Angina ~5, HF ~3, syncope ~2 years.")],
        [q("A 70-year-old has exertional chest pressure and fainted while mowing. Exam: harsh crescendo-decrescendo systolic murmur at the RUSB radiating to both carotids and a delayed, weak carotid upstroke. Most likely diagnosis?", "Aortic stenosis", ["Mitral regurgitation", "Mitral valve prolapse", "Pulmonic stenosis"], "RUSB murmur to carotids + parvus et tardus + SAD symptoms = AS."),
          q("A systolic murmur at the RUSB gets louder when the patient squats and softer during Valsalva. Which lesion fits?", "Aortic stenosis", ["Mitral valve prolapse", "Tricuspid regurgitation", "Aortic regurgitation"], "AS murmur increases with squatting and decreases with Valsalva.")]),
      C("AS: diagnostic workup",
        "<p><strong>TTE makes the diagnosis and grades severity.</strong></p>" +
        tbl(["", "Valve area", "Mean gradient"], [
          ["Normal", "3–4 cm²", "&lt; 5 mmHg"],
          ["Moderate AS", "1–1.5 cm²", "20–39 mmHg"],
          ["<strong>Severe AS</strong>", "<strong>&lt; 1.0 cm²</strong>", "<strong>&gt; 40 mmHg</strong>"]]) +
        "<ul><li><strong>EKG:</strong> may show LVH.</li><li><strong>CXR:</strong> may show post-stenotic aortic dilation, LV enlargement.</li></ul>",
        ["as-workup-tte", "as-severity-values", "as-ekg-cxr"],
        [q("Which aortic valve gradient indicates severe aortic stenosis?", "> 40 mmHg", ["< 5 mmHg", "10–19 mmHg", "20–39 mmHg"], "Severe AS: gradient > 40 mmHg (moderate 20–39)."),
          q("What chest x-ray finding may be seen in aortic stenosis?", "Post-stenotic aortic dilation", ["Kerley B lines from LA enlargement only", "Pulmonary artery dilation from RV outflow obstruction", "Bilateral hilar adenopathy"], "CXR may show post-stenotic aortic dilation and LV enlargement."),
          q("Which EKG finding may accompany aortic stenosis?", "Left ventricular hypertrophy", ["Right axis deviation", "Delta waves", "Low voltage with electrical alternans"], "Pressure overload → LVH on EKG.")],
        [q("A TTE in a dyspneic 76-year-old shows an aortic valve area of 0.8 cm² and a mean gradient of 48 mmHg. How is the AS graded?", "Severe", ["Normal", "Mild", "Moderate"], "Area < 1.0 cm² and gradient > 40 mmHg = severe."),
          q("A 68-year-old has a RUSB systolic murmur. The EKG shows LVH. What test confirms aortic stenosis and grades it?", "Transthoracic echocardiogram", ["Chest x-ray", "Repeat EKG", "BNP level"], "TTE makes the diagnosis and determines severity.")]),
      C("AS: management and timing of valve replacement",
        tbl(["Situation", "Management"], [
          ["Asymptomatic mild/moderate", "Serial echo + cardiology follow-up; careful BP control (<strong>avoid aggressive vasodilation</strong> that could drop perfusion); anticoagulate if AF develops; optimize lipids/diabetes; smoking cessation"],
          ["<strong>Symptomatic or severe</strong>", "<strong>Valve replacement</strong>: surgical AVR (<strong>SAVR</strong>) or transcatheter AVR (<strong>TAVR</strong>), especially in high-risk patients"]]) +
        hy("Once symptoms develop, prognosis is poor without replacement (average survival 2–5 years). Replacement prolongs life; EF improves by ~6 months and LVH regresses by ~18 months."),
        ["as-management-medical", "as-surgery-timing", "as-savr-tavr"],
        [q("What is the indicated treatment for symptomatic severe aortic stenosis?", "Aortic valve replacement (SAVR or TAVR)", ["Balloon mitral valvotomy", "Beta-blocker alone", "Serial echo only"], "Symptomatic/severe AS requires valve replacement."),
          q("In asymptomatic aortic stenosis, what blood-pressure caution does the lecture give?", "Avoid aggressive vasodilation that could drop perfusion", ["Keep systolic BP above 180 mmHg", "Use high-dose nitrates first-line", "Stop all antihypertensives"], "The fixed output cannot compensate for a large drop in afterload.")],
        [q("An 88-year-old frail patient with multiple comorbidities has symptomatic severe AS and is high surgical risk. Best option?", "Transcatheter aortic valve replacement (TAVR)", ["Open surgical commissurotomy", "Percutaneous balloon mitral valvotomy", "Observation with serial echo only"], "TAVR is preferred in high-risk patients with severe AS."),
          q("A 66-year-old with moderate AS is asymptomatic. Best plan?", "Serial echo and cardiology follow-up with risk-factor control", ["Immediate valve replacement", "Start warfarin with INR 2.5–3.5", "Balloon valvuloplasty now"], "Asymptomatic mild/moderate AS is monitored with secondary prevention.")])
    ]),

    /* ---------- 3b AR ---------- */
    S("03b-aortic-regurgitation", "3b. Aortic regurgitation (chronic)", "Objectives 3–6 applied to chronic aortic regurgitation. Slides 28–37, 39.", [
      C("AR: pathophysiology and etiologies",
        "<p>Incompetent aortic valve leaks blood <strong>from the aorta back into the LV during diastole</strong> → <strong>LV volume overload</strong> (filling from LA + backflow).</p>" +
        "<ul><li>LV stretches/dilates to maintain forward output → <strong>eccentric hypertrophy</strong>.</li><li>Eventually the overstretched myocardium loses contractile strength → <strong>systolic failure with reduced EF</strong>; blood backs up into the LA, raising LA pressure.</li></ul>" +
        tbl(["Category", "Causes"], [
          ["Valve leaflet disease", "Rheumatic heart disease; bicuspid aortic valve; infective endocarditis; older diet drugs (“fen-phen”: fenfluramine + phentermine)"],
          ["Aortic root dilation", "HTN, Marfan syndrome, aortic dissection"]]),
        ["ar-pathophysiology", "ar-eccentric-lvh", "ar-etiology-leaflet", "ar-etiology-root"],
        [q("Chronic aortic regurgitation produces which type of LV hypertrophy?", "Eccentric (dilated) hypertrophy from volume overload", ["Concentric hypertrophy from pressure overload", "Asymmetric septal hypertrophy", "No hypertrophy"], "Diastolic backflow volume-overloads the LV → eccentric hypertrophy."),
          q("Which is an aortic root (not leaflet) cause of aortic regurgitation?", "Marfan syndrome", ["Rheumatic heart disease", "Infective endocarditis", "Fen-phen exposure"], "Root dilation: HTN, Marfan syndrome, aortic dissection."),
          q("Which older diet medication combination is linked to aortic regurgitation?", "Fenfluramine + phentermine", ["Orlistat + metformin", "Phentermine + topiramate", "Bupropion + naltrexone"], "“Fen-phen” caused valve leaflet disease.")],
        [q("A tall 30-year-old with long fingers and lens dislocation has a diastolic decrescendo murmur and a dilated aortic root. Mechanism of his AR?", "Aortic root dilation from Marfan syndrome", ["Rheumatic leaflet fusion", "Calcific degeneration", "Papillary muscle rupture"], "Marfan syndrome causes AR through root dilation."),
          q("Years of chronic AR finally reduce a patient’s EF to 40%. What happened to the LV?", "It dilated and overstretched until contractile strength was lost", ["It developed concentric hypertrophy with a small cavity", "It was spared while only the RA dilated", "Its wall thinned from pressure overload of the RV"], "Eccentric dilation eventually leads to systolic failure with reduced EF.")]),
      C("AR: symptoms, murmur, and exam",
        "<p>Often asymptomatic for years due to compensation; when present: <strong>angina, palpitations, dyspnea/fatigue</strong>.</p>" +
        tbl(["Feature", "Aortic regurgitation"], [
          ["Timing", "<strong>Early diastolic decrescendo</strong>"],
          ["Quality", "Blowing, high-pitched"],
          ["Location", "<strong>Left 2nd–4th ICS</strong>; may radiate to apex"],
          ["Augment", "Patient <strong>leaning forward, exhale and hold</strong>"]]) +
        "<p><strong>Other findings:</strong> <strong>S3 gallop</strong>, <strong>wide pulse pressure</strong>, <strong>water hammer pulse</strong> (bounding, rapidly rising then collapsing), head bobbing with each pulse (<strong>de Musset’s sign</strong>). (Other eponymous signs such as Quincke’s and Duroziez’s were listed “don’t memorize.”)</p>" +
        mn("Systolic: <strong>MR. ASS</strong> (MR, AS). Diastolic: <strong>MS. ARD</strong> (MS, AR)."),
        ["ar-symptoms", "ar-murmur", "ar-exam-findings"],
        [q("How is the aortic regurgitation murmur classically described?", "Blowing, high-pitched, early diastolic decrescendo", ["Harsh, crescendo-decrescendo systolic", "Low-pitched diastolic rumble with opening snap", "Holosystolic, radiating to the axilla"], "AR = early diastolic decrescendo, blowing, high-pitched."),
          q("Which position best brings out an aortic regurgitation murmur?", "Sitting, leaning forward, exhale and hold", ["Left lateral decubitus", "Squatting", "Standing with Valsalva"], "Leaning forward on held expiration augments AR."),
          q("Head bobbing with each heartbeat in aortic regurgitation is called:", "de Musset’s sign", ["Carvallo’s sign", "Kussmaul’s sign", "Wood phenomenon"], "de Musset’s sign = head bobbing with pulse."),
          q("What pulse pressure is typical of chronic aortic regurgitation?", "Wide pulse pressure", ["Narrow pulse pressure", "Pulsus alternans", "Equal systolic and diastolic pressure"], "Large stroke volume plus diastolic runoff widens pulse pressure.")],
        [q("A 52-year-old has palpitations and a bounding pulse that rises quickly then collapses. BP 160/50. A soft high-pitched diastolic decrescendo murmur is heard at the left sternal border when he leans forward. Diagnosis?", "Chronic aortic regurgitation", ["Aortic stenosis", "Mitral stenosis", "Pulmonic stenosis"], "Water hammer pulse, wide pulse pressure, and early diastolic decrescendo murmur = AR."),
          q("A diastolic murmur is heard at the left 3rd ICS. Which additional sound would you expect in significant AR?", "S3 gallop", ["Opening snap", "Systolic ejection click", "Mid-systolic click"], "AR is associated with an S3 from volume overload.")]),
      C("AR: diagnostic workup",
        "<ul><li><strong>TTE:</strong> makes the diagnosis and determines severity; identifies the <strong>regurgitant jet</strong>, measures <strong>LV size and EF</strong>.</li><li><strong>EKG:</strong> LVH.</li><li><strong>CXR:</strong> cardiomegaly, sometimes aortic root dilation.</li></ul>",
        ["ar-workup-tte", "ar-ekg-cxr"],
        [q("Which chest x-ray findings can be seen in chronic aortic regurgitation?", "Cardiomegaly, sometimes aortic root dilation", ["Post-stenotic pulmonary artery dilation", "Isolated left atrial enlargement with normal heart size", "Normal heart size always"], "CXR in AR: cardiomegaly ± aortic root dilation."),
          q("In aortic regurgitation, the echo identifies the regurgitant jet and measures what else?", "LV size and EF", ["Coronary calcium score", "RA pressure only", "Pulmonary valve gradient"], "Echo tracks LV size and EF, which drive surgical timing.")],
        [q("A new early diastolic murmur is heard in a 60-year-old. Which test confirms AR, shows the jet, and measures LV size and EF?", "Transthoracic echocardiogram", ["Chest x-ray", "EKG", "Exercise treadmill test"], "TTE makes the diagnosis and grades severity.")]),
      C("AR: management and timing of valve replacement",
        tbl(["Situation", "Management"], [
          ["Asymptomatic, preserved LV function (early)", "Serial echo + cardiology follow-up; heart failure medications"],
          ["<strong>Replace the valve (scheduled AVR)</strong>", "<strong>All symptomatic patients</strong>; suggested with progressing disease and low cardiac risk; moderate AR when undergoing other cardiac surgery; when repairing an ascending aortic aneurysm/dissection"]]) +
        hy("Prognosis: chronic AR can be stable 10+ years. Once symptoms appear, survival averages 2–4 years without replacement; once EF &lt; 50%, mortality rises ~25%/year."),
        ["ar-management-medical", "ar-surgery-timing", "ar-prognosis"],
        [q("Which patients with chronic aortic regurgitation should have aortic valve replacement?", "All symptomatic patients", ["Only those over 80", "Only asymptomatic patients with normal EF", "None; AR is managed medically only"], "All symptomatic AR patients need AVR."),
          q("Once LV dysfunction (EF < 50%) develops in chronic AR, mortality increases about:", "25% per year", ["1% per year", "5% per decade", "50% per month"], "Mortality rises about 25% per year once EF falls below 50%.")],
        [q("A 58-year-old with moderate AR is scheduled for CABG. What does the lecture suggest regarding the aortic valve?", "Replace the aortic valve during the same cardiac surgery", ["Leave it; moderate AR is never treated", "Balloon valvuloplasty afterward", "Start warfarin instead"], "AVR is suggested for moderate AR when undergoing other cardiac surgery."),
          q("An asymptomatic 45-year-old with mild chronic AR and EF 62% asks about surgery. Best plan?", "Serial echo with cardiology follow-up and heart-failure medications as needed", ["Emergent valve replacement today", "TAVR this week", "Monthly benzathine penicillin"], "Asymptomatic AR with preserved LV function is monitored.")])
    ]),

    /* ---------- 3c Acute AR ---------- */
    S("03c-acute-aortic-regurgitation", "3c. Acute aortic regurgitation", "Objectives 3–6 applied to acute aortic regurgitation. Slides 38–39.", [
      C("Acute AR: pathophysiology and causes",
        "<p>Severe AR develops <strong>abruptly</strong>; the LV has <strong>had no time to compensate</strong> (no dilation), so it cannot handle the sudden volume load → <strong>LV pressure skyrockets</strong>.</p>" +
        "<p><strong>Causes:</strong> <strong>infective endocarditis, aortic dissection, prosthetic valve failure, traumatic cusp rupture</strong>.</p>",
        ["acute-ar-pathophysiology", "acute-ar-etiology"],
        [q("Why is acute aortic regurgitation life threatening while chronic AR is tolerated for years?", "The LV has not had time to dilate, so LV pressure rises abruptly", ["The LV is already concentrically hypertrophied", "The murmur is louder", "Acute AR affects only the right heart"], "Without compensation, the sudden volume load spikes LV pressure."),
          q("Which is a typical cause of acute aortic regurgitation?", "Aortic dissection", ["Bicuspid valve calcification over decades", "Fen-phen use years ago", "Chronic hypertension"], "Acute AR: endocarditis, dissection, prosthetic valve failure, traumatic cusp rupture.")],
        [q("After a high-speed steering-wheel injury, a patient suddenly develops severe dyspnea and hypotension with a new diastolic murmur. Most likely mechanism of acute AR?", "Traumatic aortic cusp rupture", ["Rheumatic commissural fusion", "Myxomatous mitral degeneration", "Chronic root dilation from hypertension"], "Traumatic cusp rupture is a listed cause of acute AR.")]),
      C("Acute AR: presentation, workup, management",
        "<ul><li><strong>Presentation:</strong> critically ill: <strong>pulmonary edema, hypotension, shock</strong>.</li><li><strong>Workup:</strong> <strong>bedside echo</strong>.</li><li><strong>Management:</strong> <strong>surgical valve replacement NOW</strong>.</li><li>Prognosis: ~<strong>30% in-hospital mortality</strong> if unrecognized/untreated.</li></ul>" +
        hy("Acute AR = emergency: bedside echo → emergent surgical valve replacement. No time for serial echos or medical optimization."),
        ["acute-ar-presentation", "acute-ar-workup", "acute-ar-management"],
        [q("What is the management of acute severe aortic regurgitation?", "Emergent surgical valve replacement", ["Serial echo every 6 months", "Beta-blocker and outpatient follow-up", "Percutaneous balloon valvotomy"], "Acute AR needs surgical valve replacement now."),
          q("Untreated acute aortic regurgitation carries what in-hospital mortality?", "About 30%", ["About 1%", "About 5%", "About 90%"], "Unrecognized/untreated acute AR: 30% in-hospital mortality."),
          q("Which presentation is expected in acute severe aortic regurgitation?", "Pulmonary edema, hypotension, and shock", ["Years of asymptomatic wide pulse pressure", "Isolated mid-systolic click", "Peripheral edema without dyspnea"], "Sudden volume overload → pulmonary edema, hypotension, shock.")],
        [q("A patient with Staph aureus endocarditis of the aortic valve suddenly develops pulmonary edema and BP 78/40. What are the next steps?", "Bedside echo and emergent surgical valve replacement", ["Outpatient TTE in 2 weeks", "Start HF medications and recheck in 3 months", "Balloon valvuloplasty"], "Acute AR: bedside echo and surgical replacement now.")])
    ]),

    /* ---------- 3d MS ---------- */
    S("03d-mitral-stenosis", "3d. Mitral stenosis", "Objectives 3–6 applied to mitral stenosis. Slides 47–58.", [
      C("MS: pathophysiology and etiologies",
        "<ul><li>Narrowed mitral valve → LA cannot empty → <strong>↑ LA pressure</strong> → <strong>LA dilation</strong> (stretches the conduction system → <strong>atrial arrhythmias</strong>) and <strong>pulmonary venous congestion</strong>.</li>" +
        "<li>Pulmonary arteries vasoconstrict and hypertrophy → remodeling → <strong>pulmonary HTN</strong> → rising RV pressures → <strong>RV failure</strong>.</li>" +
        "<li>Mild–moderate: symptoms only with stress (exercise, <strong>anemia, pregnancy</strong>); severe: symptoms at rest.</li>" +
        "<li>A poorly emptying LA with chronic wall tension clots readily.</li></ul>" +
        tbl(["Etiology", "Details"], [
          ["<strong>Rheumatic fever (most common)</strong>", "Stenosis takes years; 50–70% report prior rheumatic fever; <strong>90% of RHD patients have mitral involvement</strong>"],
          ["Valve degeneration", "Aging"]]) +
        "<p>Female predominance (~70%).</p>",
        ["ms-pathophysiology", "ms-pulmonary-htn-rv-failure", "ms-etiology-rheumatic", "ms-etiology-degeneration"],
        [q("What is the most common cause of mitral stenosis?", "Rheumatic heart disease", ["Myxomatous degeneration", "Bicuspid aortic valve", "Carcinoid syndrome"], "Rheumatic fever is the most common cause; 90% of RHD involves the mitral valve."),
          q("In mitral stenosis, which chamber dilates first from increased pressure?", "Left atrium", ["Left ventricle", "Right atrium", "Aortic root"], "The LA cannot empty, so LA pressure and size increase."),
          q("Mitral stenosis ultimately causes right ventricular failure through which pathway?", "LA pressure → pulmonary venous congestion → pulmonary HTN → RV pressure overload", ["Aortic backflow → LV dilation → RV ischemia", "Systemic HTN → LV hypertrophy → RV dilation", "Tricuspid stenosis → RA dilation"], "Back-pressure from the LA remodels the pulmonary arteries and overloads the RV.")],
        [q("A 28-year-old woman originally from a region with limited antibiotic access develops dyspnea in her second trimester of pregnancy. Echo shows a narrowed mitral valve. Why did symptoms appear now?", "Pregnancy stresses the heart, unmasking previously compensated mitral stenosis", ["Pregnancy causes acute mitral valve prolapse", "Pregnancy lowers LA pressure", "Pregnancy causes bicuspid valve calcification"], "Mild–moderate MS becomes symptomatic with stress such as pregnancy, anemia, or exercise.")]),
      C("MS: symptoms, murmur, and complications",
        "<p>Usually symptomatic in the <strong>30s–40s</strong>:</p><ul><li><strong>Dyspnea</strong> (exertional, orthopnea, PND) = most frequent</li><li>Fatigue (low LV preload, low output)</li><li><strong>Palpitations</strong> (AF from LA dilation)</li><li><strong>Hemoptysis</strong> (high pulmonary pressures rupture bronchial veins)</li></ul>" +
        tbl(["Feature", "Mitral stenosis"], [
          ["Timing", "<strong>Diastolic</strong> rumble"],
          ["Quality", "Low-pitched, with an <strong>opening snap after S2</strong>"],
          ["Location", "<strong>Apex</strong>, with the <strong>bell</strong>"],
          ["Radiation", "None"],
          ["Augment", "<strong>Left lateral decubitus</strong>"]]) +
        "<p><strong>Complications:</strong> <strong>atrial fibrillation</strong> (LA dilation), <strong>thromboembolism</strong> (stagnant LA flow, especially with AF), right-sided heart failure (chronic pulmonary HTN).</p>",
        ["ms-symptoms", "ms-murmur", "ms-complications"],
        [q("How is the mitral stenosis murmur classically described?", "Low-pitched diastolic rumble with an opening snap after S2", ["High-pitched early diastolic decrescendo", "Holosystolic blowing murmur to the axilla", "Mid-systolic click with late systolic murmur"], "MS = diastolic rumble + opening snap, heard at the apex with the bell."),
          q("What is the most frequent symptom of mitral stenosis?", "Dyspnea", ["Syncope", "Hemoptysis", "Angina"], "Dyspnea (exertional, orthopnea, PND) is most frequent."),
          q("Which position augments the mitral stenosis murmur?", "Left lateral decubitus", ["Leaning forward, exhale and hold", "Squatting", "Standing"], "Roll the patient to the left side and use the bell at the apex."),
          q("Why do patients with mitral stenosis develop hemoptysis?", "Elevated pulmonary pressures rupture bronchial veins", ["Pulmonary embolism from the right heart", "Endobronchial tumor", "Aortic dissection"], "High pulmonary venous pressure ruptures bronchial veins.")],
        [q("A 40-year-old woman with a remote history of rheumatic fever has dyspnea and palpitations. In left lateral decubitus, a low-pitched apical diastolic rumble follows an opening snap. Diagnosis?", "Mitral stenosis", ["Aortic regurgitation", "Mitral regurgitation", "Tricuspid regurgitation"], "Opening snap + apical diastolic rumble = MS."),
          q("A patient with known mitral stenosis develops an irregularly irregular rhythm and then sudden right arm weakness. What complication explains this?", "Thromboembolism from a left atrial clot in atrial fibrillation", ["Rupture of a bronchial vein", "Acute right heart failure", "Aortic dissection"], "Stagnant flow in the enlarged LA, especially with AF, forms clots that embolize.")]),
      C("MS: diagnostic workup",
        "<ul><li><strong>Echo</strong> makes the diagnosis by seeing stenosis; also evaluates the elevated gradient, LA pressure, and estimates pulmonary pressure.</li></ul>" +
        tbl(["Mitral valve area", "Meaning"], [["4–6 cm²", "Normal"], ["2–2.5 cm²", "Symptoms begin"], ["<strong>&lt; 1.5 cm²</strong>", "<strong>Severe stenosis</strong>"]]) +
        "<ul><li><strong>EKG:</strong> possible LA enlargement, atrial fibrillation.</li><li><strong>CXR:</strong> possible LA enlargement, pulmonary vascular congestion.</li></ul>",
        ["ms-workup-echo", "ms-valve-areas", "ms-ekg-cxr"],
        [q("Below what mitral valve area is mitral stenosis severe?", "1.5 cm²", ["4 cm²", "2.5 cm²", "0.5 cm²"], "Severe MS: area < 1.5 cm² (normal 4–6; symptoms begin at 2–2.5)."),
          q("Which EKG findings are expected with mitral stenosis?", "Left atrial enlargement and atrial fibrillation", ["Right axis deviation from RV outflow obstruction only", "Delta waves", "ST elevation in V1–V4"], "LA enlargement and AF are the EKG clues.")],
        [q("A patient with an apical diastolic rumble has a CXR showing a prominent left atrium and pulmonary vascular congestion. Which test confirms the diagnosis and estimates pulmonary pressure?", "Echocardiogram", ["Pulmonary function tests", "CT angiogram of the chest", "Holter monitor"], "Echo diagnoses MS and estimates gradient, LA pressure, and pulmonary pressure.")]),
      C("MS: management and surgical options",
        tbl(["Approach", "Details"], [
          ["Medical", "<strong>Loop diuretics</strong> for pulmonary congestion; <strong>rate control + anticoagulation</strong> for AF; serial echo and cardiology follow-up"],
          ["<strong>Percutaneous balloon mitral valvotomy</strong> (valvuloplasty)", "<strong>Preferred</strong> definitive therapy for moderate–severe MS <strong>if valve anatomy is favorable</strong>; balloon inflated across the valve separates fused cusps"],
          ["Open mitral commissurotomy", "If balloon not possible: debridement and separation of fused cusps"],
          ["Open mitral valve replacement", "If balloon not possible: mechanical or tissue valve"]]),
        ["ms-management-medical", "ms-balloon-valvotomy", "ms-open-commissurotomy-replacement", "ms-surgery-timing"],
        [q("What is the preferred definitive treatment for moderate–severe mitral stenosis with favorable valve anatomy?", "Percutaneous balloon mitral valvotomy", ["TAVR", "Mitral ring annuloplasty", "Beta-blocker alone"], "Balloon valvotomy separates fused cusps and is preferred when anatomy is favorable."),
          q("Which drug class relieves pulmonary congestion symptoms in mitral stenosis?", "Loop diuretics", ["Vasodilators such as nitroprusside", "Positive inotropes", "Thrombolytics"], "Loop diuretics decrease pulmonary congestion."),
          q("What does an open mitral commissurotomy involve?", "Debridement and separation of fused cusps", ["Inflating a balloon across the valve", "Placing an annuloplasty ring", "Implanting a collapsed valve through a catheter"], "Open commissurotomy surgically separates fused cusps.")],
        [q("A 38-year-old with severe rheumatic MS has a pliable valve without heavy calcification. Best definitive procedure?", "Percutaneous balloon mitral valvotomy", ["Open mitral valve replacement first-line", "Surgical aortic valve replacement", "Observation only"], "Favorable anatomy → balloon valvotomy."),
          q("A patient with severe MS has a heavily calcified, rigid valve unsuitable for balloon valvotomy. What are the options?", "Open commissurotomy or open mitral valve replacement", ["TAVR", "Lifelong loop diuretic only", "Annuloplasty ring alone"], "If balloon is not feasible, open commissurotomy or replacement.")])
    ]),

    /* ---------- 3e MVP ---------- */
    S("03e-mitral-valve-prolapse", "3e. Mitral valve prolapse", "Objectives 3–6 applied to mitral valve prolapse. Slides 59–64.", [
      C("MVP: pathophysiology and etiologies",
        "<ul><li>Leaflets deteriorate into <strong>large, floppy leaflets that prolapse into the LA</strong> during systole; excess tissue folds and “hoods”; one or both leaflets.</li><li>May be found incidentally on echo; <strong>can lead to mitral regurgitation</strong>.</li></ul>" +
        tbl(["Type", "Cause"], [["Primary", "<strong>Myxomatous degeneration</strong> (redundant, floppy leaflets)"], ["Secondary", "<strong>Connective tissue disorders</strong> (Marfan syndrome, Ehlers-Danlos syndrome)"]]),
        ["mvp-pathophysiology", "mvp-etiology"],
        [q("What is the primary cause of mitral valve prolapse?", "Myxomatous degeneration of the leaflets", ["Rheumatic commissural fusion", "Papillary muscle infarction", "Calcific degeneration"], "Primary MVP = myxomatous (redundant, floppy) leaflets."),
          q("Which conditions cause secondary mitral valve prolapse?", "Connective tissue disorders such as Marfan and Ehlers-Danlos syndromes", ["Pulmonary hypertension and COPD", "Carcinoid syndrome", "Radiation and hyperlipoproteinemia"], "Secondary MVP comes from connective tissue disorders.")],
        [q("A hypermobile 22-year-old with Ehlers-Danlos syndrome has redundant mitral leaflets bowing into the LA in systole. What is this?", "Secondary mitral valve prolapse", ["Rheumatic mitral stenosis", "Acute mitral regurgitation from chordal rupture", "Tricuspid regurgitation"], "Connective tissue disease causes secondary MVP.")]),
      C("MVP: presentation and murmur",
        "<ul><li><strong>Most are asymptomatic</strong>; may be associated with <strong>anxiety symptoms</strong>; may develop exercise intolerance, fatigue, <strong>palpitations</strong>, dizziness, chest pain.</li></ul>" +
        tbl(["Feature", "Mitral valve prolapse"], [
          ["Sound", "<strong>Mid-systolic click</strong> ± late systolic murmur"],
          ["Location", "Apex"],
          ["Maneuvers", "<strong>Standing/Valsalva → click earlier</strong>; <strong>squatting → later</strong>"]]) +
        hy("All MVP can lead to MR, but not all MR is MVP."),
        ["mvp-symptoms", "mvp-murmur", "mvp-maneuvers"],
        [q("What is the hallmark auscultatory finding of mitral valve prolapse?", "Mid-systolic click", ["Opening snap", "Early diastolic decrescendo murmur", "Pericardial friction rub"], "MVP = mid-systolic click ± late systolic murmur."),
          q("How does standing or Valsalva change the click of mitral valve prolapse?", "It moves the click earlier in systole", ["It moves the click later in systole", "It abolishes the click permanently", "It converts it to a diastolic sound"], "Less LV volume → earlier prolapse → earlier click; squatting moves it later.")],
        [q("A 24-year-old woman gets palpitations after several espressos. At the apex there is a mid-systolic click that moves earlier when she stands. Diagnosis?", "Mitral valve prolapse", ["Mitral stenosis", "Aortic stenosis", "Pulmonic stenosis"], "Mid-systolic click moving earlier with standing = MVP."),
          q("An apical mid-systolic click is heard. The patient squats. What happens to the click?", "It occurs later in systole", ["It occurs earlier in systole", "It becomes an opening snap", "It moves to diastole"], "Squatting increases LV volume, delaying prolapse.")]),
      C("MVP: diagnostics and management",
        "<ul><li><strong>Echo:</strong> leaflet displacement <strong>into the LA during systole</strong>; also shows MR if present.</li></ul>" +
        tbl(["Situation", "Management"], [
          ["Asymptomatic, no MR", "<strong>Reassurance</strong> and periodic echo"],
          ["Symptomatic with palpitations", "<strong>Beta-blocker</strong> (e.g., propranolol) and <strong>avoid stimulants</strong>"],
          ["With MR", "Follow <strong>MR guidelines</strong> (surgery timing per MR)"]]),
        ["mvp-workup-echo", "mvp-management", "mvp-surgery-timing"],
        [q("What echo finding confirms mitral valve prolapse?", "Leaflet displacement into the left atrium during systole", ["Fish-mouth commissural fusion", "Diastolic flow reversal into the RV", "Post-stenotic aortic dilation"], "Echo shows leaflets bowing into the LA in systole."),
          q("What is the treatment for symptomatic MVP with palpitations?", "Beta-blocker (e.g., propranolol) and avoiding stimulants", ["Monthly benzathine penicillin", "Warfarin with INR 2.5–3.5", "Immediate valve replacement"], "Palpitations: beta-blocker and stimulant avoidance.")],
        [q("An asymptomatic 30-year-old has MVP on echo with no mitral regurgitation. Best management?", "Reassurance and periodic echo", ["Mitral valve replacement", "Daily beta-blocker", "Lifelong anticoagulation"], "Asymptomatic MVP without MR needs only reassurance and periodic echo."),
          q("A patient with MVP now has severe mitral regurgitation on echo. How is surgery timing decided?", "Follow mitral regurgitation guidelines", ["MVP never needs surgery", "Replace only after EF < 20%", "Use AS valve-area criteria"], "MVP with MR is managed by MR guidelines.")])
    ]),

    /* ---------- 3f MR ---------- */
    S("03f-mitral-regurgitation", "3f. Mitral regurgitation (chronic)", "Objectives 3–6 applied to chronic mitral regurgitation. Slides 65–72.", [
      C("MR: pathophysiology and etiologies",
        "<ul><li>Mitral valve doesn’t seal → blood flows <strong>back into the LA during systole</strong>.</li><li>Chronic: LA slightly hypertrophies, but <strong>LA dilation</strong> is the main coping mechanism; stretches the atrial conduction system (AF risk).</li>" +
        "<li><strong>LV dilates (eccentric)</strong> to accept a larger preload; forward stroke volume eventually falls.</li><li>Worsening MR → pulmonary congestion → <strong>pulmonary HTN and right-sided HF</strong>.</li></ul>" +
        tbl(["Type", "Causes"], [["Primary", "<strong>MVP</strong>, RHD, infective endocarditis"], ["Secondary (functional)", "LV dilation (e.g., <strong>dilated cardiomyopathy</strong>), annular dilation"]]),
        ["mr-pathophysiology", "mr-eccentric-lv", "mr-etiology-primary", "mr-etiology-secondary"],
        [q("In chronic mitral regurgitation, what is the left atrium’s predominant coping mechanism?", "Dilation", ["Concentric hypertrophy", "Fibrotic shrinkage", "Thrombosis"], "LA dilation accommodates the regurgitant volume."),
          q("Which is a secondary (functional) cause of mitral regurgitation?", "LV dilation from dilated cardiomyopathy", ["Mitral valve prolapse", "Rheumatic heart disease", "Infective endocarditis"], "Functional MR comes from LV or annular dilation with a structurally normal valve.")],
        [q("A 65-year-old with dilated cardiomyopathy (EF 25%) has new MR, but the leaflets look structurally normal. Classification?", "Secondary (functional) mitral regurgitation", ["Primary MR from MVP", "Rheumatic MR", "Acute MR from papillary rupture"], "LV dilation pulls the leaflets apart: functional MR.")]),
      C("MR: symptoms and murmur",
        "<p>Asymptomatic when mild; eventually <strong>fatigue, dyspnea, palpitations</strong>, and other heart failure signs.</p>" +
        tbl(["Feature", "Mitral regurgitation"], [
          ["Timing", "<strong>Holosystolic</strong>"],
          ["Quality", "Blowing, high-pitched"],
          ["Location / radiation", "<strong>Apex → left axilla</strong>"],
          ["Extra", "<strong>S3</strong> in severe cases"]]),
        ["mr-symptoms", "mr-murmur"],
        [q("Where does the mitral regurgitation murmur radiate?", "Left axilla", ["Carotids", "Left shoulder and neck", "It does not radiate"], "MR: apex → left axilla."),
          q("How is the chronic mitral regurgitation murmur described?", "Blowing, high-pitched, holosystolic", ["Harsh crescendo-decrescendo systolic", "Low-pitched diastolic rumble", "Early diastolic decrescendo"], "MR is a blowing holosystolic murmur.")],
        [q("A 70-year-old with progressive fatigue and palpitations has a blowing holosystolic apical murmur radiating to the left axilla and an S3. Diagnosis?", "Chronic mitral regurgitation", ["Tricuspid regurgitation", "Aortic stenosis", "Mitral stenosis"], "Apical holosystolic murmur to the axilla = MR.")]),
      C("MR: diagnostic workup",
        "<ul><li><strong>Echo</strong> makes the diagnosis and grades severity: <strong>regurgitant jet LV → LA</strong>; <strong>LA and LV dilation</strong> in chronic MR.</li><li><strong>EKG:</strong> possible LA enlargement, AF.</li><li><strong>CXR:</strong> possible LA enlargement, pulmonary congestion.</li></ul>",
        ["mr-workup-echo", "mr-ekg-cxr"],
        [q("Which echo findings are expected in chronic mitral regurgitation?", "LV → LA regurgitant jet with LA and LV dilation", ["Thickened aortic cusps with gradient > 40 mmHg", "Diastolic flow reversal into the RV", "Leaflet displacement into the RA"], "Chronic MR shows the jet into the LA and dilation of both left chambers.")],
        [q("A patient with an apical holosystolic murmur has AF on EKG and LA enlargement on CXR. Which study confirms MR and grades it?", "Echocardiogram", ["Cardiac MRI stress perfusion", "Ventilation-perfusion scan", "Coronary CT calcium score"], "Echo makes the diagnosis and informs severity.")]),
      C("MR: management and surgery timing",
        "<ul><li>Serial echo and cardiology follow-up; meds for <strong>HTN, pulmonary congestion, AF</strong> (anticoagulate to prevent stroke; control rate/rhythm).</li></ul>" +
        tbl(["Definitive", "Details"], [
          ["Timing", "<strong>Surgery recommended before significant symptoms or hemodynamic changes develop</strong>"],
          ["<strong>Surgical repair (preferred)</strong>", "Leaflet excision, debridement, shortening of chordae, or <strong>ring annuloplasty</strong>"],
          ["Replacement", "If the valve is too damaged, <strong>papillary muscle dysfunction</strong>, or MR is <strong>secondary to IE</strong>"]]),
        ["mr-management-medical", "mr-surgery-timing", "mr-repair-preferred", "mr-replacement-indications"],
        [q("What is the preferred surgical approach for chronic mitral regurgitation?", "Mitral valve repair", ["Mitral valve replacement in all cases", "Balloon valvotomy", "TAVR"], "Repair (e.g., annuloplasty) is preferred; replacement is reserved for specific situations."),
          q("When is surgery recommended in chronic mitral regurgitation?", "Before significant symptoms or hemodynamic changes develop", ["Only after EF falls below 20%", "Only after a stroke", "Never; MR is medical only"], "Operate before significant symptoms or hemodynamic changes."),
          q("Which situation favors mitral valve replacement over repair in MR?", "MR secondary to infective endocarditis", ["Isolated annular dilation", "Mild MVP", "Minimal leaflet damage"], "Replace if the valve is too damaged, papillary dysfunction, or MR from IE.")],
        [q("A 55-year-old with severe degenerative MR has a single prolapsing segment and dilated annulus; she is still asymptomatic with normal EF. Best surgical plan?", "Mitral repair, such as ring annuloplasty, before symptoms develop", ["Wait until EF drops below 30%", "Mechanical mitral replacement only", "Balloon valvotomy"], "Repair is preferred and surgery is timed before symptoms/hemodynamic change."),
          q("A patient with chronic MR and new atrial fibrillation is seen in clinic. Which medical measure prevents stroke?", "Anticoagulation", ["Loop diuretic alone", "Beta-blocker alone", "Aspirin plus penicillin"], "As the LA stretches, AF risk rises; anticoagulate to prevent stroke.")])
    ]),

    /* ---------- 3g Acute MR ---------- */
    S("03g-acute-mitral-regurgitation", "3g. Acute mitral regurgitation", "Objectives 3–6 applied to acute mitral regurgitation. Slide 73.", [
      C("Acute MR: pathophysiology and causes",
        "<p>Severe MR develops abruptly into a <strong>normal-sized LA that cannot accommodate</strong> the extra volume → <strong>LA pressure spikes</strong> → pulmonary edema; <strong>LV forward output plummets</strong>.</p>" +
        "<p><strong>Causes:</strong> <strong>ischemia/infarct of the chordae or papillary muscles</strong>; <strong>chordal rupture from infective endocarditis</strong>.</p>",
        ["acute-mr-pathophysiology", "acute-mr-etiology"],
        [q("Why does acute severe mitral regurgitation cause pulmonary edema so quickly?", "The normal-sized LA cannot accommodate the volume, so LA pressure spikes", ["The LA is already massively dilated", "The aortic valve leaks into the LV", "The RV fails first"], "No time for LA dilation → abrupt LA pressure spike."),
          q("Which is a typical cause of acute mitral regurgitation?", "Papillary muscle ischemia or infarction", ["Myxomatous degeneration over decades", "Dilated cardiomyopathy", "Annular calcification with aging"], "Acute MR: papillary/chordal ischemia or infarct, or chordal rupture from IE.")],
        [q("Five days after an inferior MI, a patient suddenly develops severe dyspnea and hypotension with a new apical systolic murmur. Most likely mechanism?", "Papillary muscle rupture causing acute MR", ["Rheumatic mitral stenosis", "Chronic functional MR", "Mitral valve prolapse from Marfan syndrome"], "Infarct of the papillary muscle → acute MR.")]),
      C("Acute MR: presentation, workup, management",
        "<ul><li><strong>Presentation:</strong> critically ill in the ED: <strong>pulmonary edema, hypotension, shock</strong>.</li><li><strong>Workup:</strong> <strong>bedside echo</strong>.</li><li><strong>Management:</strong> <strong>surgical valve replacement NOW</strong>.</li></ul>" +
        hy("Acute MR and acute AR share the same play: life threatening, bedside echo, emergent surgery."),
        ["acute-mr-presentation", "acute-mr-workup", "acute-mr-management"],
        [q("What is the management of acute severe mitral regurgitation?", "Bedside echo and emergent surgical valve replacement", ["Serial echo and beta-blocker", "Percutaneous balloon valvotomy", "Reassurance and periodic echo"], "Acute MR is life threatening and needs surgery now."),
          q("Which presentation is expected in acute severe mitral regurgitation?", "Pulmonary edema, hypotension, and shock", ["Years of asymptomatic mid-systolic click", "Isolated peripheral edema and ascites", "Wide pulse pressure with head bobbing"], "Sudden LA pressure spike and falling forward output.")],
        [q("A patient with mitral valve endocarditis suddenly becomes hypotensive with pink frothy sputum. Bedside echo shows a flail leaflet from ruptured chordae. Next step?", "Emergent surgical valve replacement", ["Start penicillin and recheck echo in 6 months", "Outpatient cardiology referral", "Balloon valvotomy"], "Chordal rupture from IE → acute MR → surgery now.")])
    ]),

    /* ---------- 3h PS ---------- */
    S("03h-pulmonic-stenosis", "3h. Pulmonic stenosis", "Objectives 3–6 applied to pulmonic stenosis. Slides 76–79.", [
      C("PS: pathophysiology, etiology, symptoms",
        "<ul><li>Narrowed pulmonic valve impedes <strong>RV → pulmonary artery</strong> flow → <strong>RV pressure overload → RV hypertrophy</strong> → right-sided HF in severe cases.</li>" +
        "<li><strong>Etiology:</strong> usually <strong>congenital</strong> (isolated or with other defects such as <strong>Tetralogy of Fallot</strong>).</li>" +
        "<li><strong>Symptoms:</strong> asymptomatic if mild; moderate–severe: dyspnea, fatigue, chest pain, syncope.</li></ul>",
        ["ps-pathophysiology", "ps-etiology", "ps-symptoms"],
        [q("What is the usual etiology of pulmonic stenosis?", "Congenital", ["Rheumatic heart disease", "Pulmonary hypertension", "Carcinoid syndrome"], "PS is usually congenital, isolated or with defects such as Tetralogy of Fallot."),
          q("Pulmonic stenosis causes which right ventricular change?", "RV pressure overload with RV hypertrophy", ["RV volume overload with RV dilation", "LV eccentric hypertrophy", "RA dilation only"], "Outflow obstruction = pressure overload → RVH.")],
        [q("A child with Tetralogy of Fallot has right ventricular hypertrophy on echo. Which valve lesion contributes to the RV pressure overload?", "Pulmonic stenosis", ["Pulmonic regurgitation", "Tricuspid regurgitation", "Aortic regurgitation"], "PS is commonly congenital and associated with Tetralogy of Fallot.")]),
      C("PS: murmur and exam",
        tbl(["Feature", "Pulmonic stenosis"], [
          ["Timing", "<strong>Systolic</strong>, crescendo-decrescendo"],
          ["Quality", "Harsh, high-pitched"],
          ["Location", "<strong>Left 2nd ICS (LUSB)</strong>"],
          ["Radiation", "Left neck or left shoulder"],
          ["Extras", "Systolic ejection click may be present; <strong>wide split S2</strong> may be present"]]) +
        hy("AS vs PS: same harsh crescendo-decrescendo sound. AS = RUSB → carotids, paradoxical split S2. PS = LUSB → left neck/shoulder, wide split S2."),
        ["ps-murmur", "ps-exam-findings"],
        [q("Where is the pulmonic stenosis murmur best heard?", "Left 2nd intercostal space (LUSB)", ["Right 2nd intercostal space", "Apex", "Left lower sternal border"], "PS: LUSB, may radiate to the left neck or shoulder."),
          q("Which S2 finding may accompany pulmonic stenosis?", "Wide split S2", ["Paradoxical split S2", "Single S2 with opening snap", "Absent S2 with S4"], "Delayed pulmonic closure widens the S2 split.")],
        [q("A 19-year-old has a harsh crescendo-decrescendo systolic murmur at the left 2nd ICS radiating to the left shoulder, an ejection click, and a widely split S2. Diagnosis?", "Pulmonic stenosis", ["Aortic stenosis", "Mitral valve prolapse", "Tricuspid regurgitation"], "LUSB location, left shoulder radiation, and wide split S2 point to PS.")]),
      C("PS: workup and management",
        "<ul><li><strong>Echo: test of choice</strong>: stenotic pulmonic valve, elevated gradient.</li><li><strong>EKG:</strong> RV hypertrophy, <strong>right axis deviation</strong>.</li><li><strong>CXR:</strong> <strong>post-stenotic dilation of the pulmonary artery</strong>, cardiomegaly (RV enlargement).</li>" +
        "<li><strong>Management:</strong> serial echo + cardiology follow-up (possibly congenital heart disease clinic); <strong>pulmonic valve replacement in severe cases</strong> or when surgical correction of congenital heart disease is indicated.</li></ul>",
        ["ps-workup", "ps-management", "ps-surgery-timing"],
        [q("Which EKG findings suggest pulmonic stenosis?", "RV hypertrophy and right axis deviation", ["LVH with left axis deviation", "LA enlargement with AF", "Low voltage and electrical alternans"], "RV pressure overload → RVH and right axis deviation."),
          q("What chest x-ray finding is characteristic of pulmonic stenosis?", "Post-stenotic dilation of the pulmonary artery", ["Post-stenotic aortic dilation", "Kerley B lines", "Widened mediastinum from dissection"], "Jet through the stenotic valve dilates the pulmonary artery.")],
        [q("A young adult with mild pulmonic stenosis is asymptomatic. When would pulmonic valve replacement be indicated?", "When stenosis becomes severe or congenital heart surgery is indicated", ["Immediately at diagnosis", "Only after a stroke", "Never"], "Mild PS is monitored; replacement for severe PS or with congenital heart surgery.")])
    ]),

    /* ---------- 3i PR ---------- */
    S("03i-pulmonic-regurgitation", "3i. Pulmonic regurgitation", "Objectives 3–6 applied to pulmonic regurgitation. Slides 80–83.", [
      C("PR: pathophysiology, etiology, symptoms",
        "<ul><li>Pulmonic valve doesn’t seal → blood leaks from the <strong>pulmonary artery back into the RV</strong> → <strong>RV volume overload → RV dilation</strong> → right-sided HF when severe.</li></ul>" +
        tbl(["Etiology", "Note"], [["<strong>Pulmonary HTN</strong>", "<strong>Most common in adults</strong>"], ["Post-surgical repair of congenital defects", "e.g., <strong>repaired Tetralogy of Fallot</strong>"], ["Others", "Endocarditis, carcinoid syndrome, congenital heart disease"]]) +
        "<p><strong>Symptoms:</strong> asymptomatic if mild; moderate–severe: dyspnea, fatigue, <strong>peripheral edema, JVD, hepatomegaly, ascites</strong>.</p>",
        ["pr-pathophysiology", "pr-etiology", "pr-symptoms"],
        [q("What is the most common cause of pulmonic regurgitation in adults?", "Pulmonary hypertension", ["Rheumatic heart disease", "Bicuspid valve", "Fen-phen"], "Pulmonary HTN is the most common adult cause."),
          q("Pulmonic regurgitation causes which RV change?", "Volume overload with RV dilation", ["Pressure overload with concentric RVH", "LV concentric hypertrophy", "No chamber change"], "Regurgitant volume dilates the RV.")],
        [q("An adult who had Tetralogy of Fallot repaired in childhood now has JVD, hepatomegaly, and a dilated RV. Which valve lesion is the likely culprit?", "Pulmonic regurgitation", ["Pulmonic stenosis", "Mitral stenosis", "Aortic stenosis"], "Post-surgical TOF repair is a classic cause of PR.")]),
      C("PR: murmur",
        tbl(["Feature", "Pulmonic regurgitation"], [
          ["Timing", "<strong>Early diastolic decrescendo</strong> (similar to AR)"],
          ["Quality", "Harsh, high-pitched (per lecture)"],
          ["Respiration", "<strong>Louder with inspiration</strong>"]]) +
        hy("Right-sided murmurs (PR, TR, TS) get louder with <strong>inspiration</strong> because inspiration increases venous return to the right heart."),
        ["pr-murmur"],
        [q("Which feature distinguishes a pulmonic regurgitation murmur from aortic regurgitation?", "It gets louder with inspiration", ["It is holosystolic", "It is preceded by an opening snap", "It radiates to the carotids"], "PR is a right-sided early diastolic murmur that increases with inspiration.")],
        [q("A patient with severe pulmonary hypertension has an early diastolic decrescendo murmur at the left sternal border that increases with inspiration. Most likely lesion?", "Pulmonic regurgitation", ["Aortic stenosis", "Mitral regurgitation", "Mitral valve prolapse"], "Early diastolic decrescendo louder with inspiration + pulmonary HTN = PR.")]),
      C("PR: workup and management",
        "<ul><li><strong>Echo: test of choice</strong>: <strong>diastolic flow reversal into the RV</strong>, RV dilation.</li><li><strong>EKG:</strong> RV hypertrophy. <strong>CXR:</strong> cardiomegaly in severe cases (RV dilation).</li>" +
        "<li><strong>Management:</strong> <strong>treat underlying cause</strong> (e.g., pulmonary HTN); serial echo + cardiology follow-up; <strong>pulmonic valve replacement for severe cases</strong>.</li></ul>",
        ["pr-workup", "pr-management", "pr-surgery-timing"],
        [q("What echo finding defines pulmonic regurgitation?", "Diastolic flow reversal into the RV", ["Systolic jet into the LA", "Fish-mouth mitral orifice", "Elevated aortic gradient"], "PR shows diastolic backflow from the PA into the RV."),
          q("What is the first step in managing pulmonic regurgitation due to pulmonary hypertension?", "Treat the underlying pulmonary hypertension", ["Immediate pulmonic valve replacement", "Balloon valvotomy", "Lifelong warfarin"], "Treat underlying causes; replace the valve for severe cases.")],
        [q("A patient with moderate PR from pulmonary HTN asks if he needs surgery. Best answer?", "Treat the pulmonary HTN and monitor with serial echo; replace only if severe", ["Emergent replacement today", "TAVR of the pulmonic valve now", "No follow-up needed"], "Management: treat the cause, serial echo, replacement when severe.")])
    ]),

    /* ---------- 3j TS ---------- */
    S("03j-tricuspid-stenosis", "3j. Tricuspid stenosis", "Objectives 3–6 applied to tricuspid stenosis. Slides 85–87.", [
      C("TS: pathophysiology and etiology",
        "<ul><li>Fixed tricuspid valve narrows <strong>RA → RV</strong> flow in diastole → <strong>reduced RV filling</strong> and <strong>↑ RA pressure</strong> → lower cardiac output and <strong>systemic venous congestion</strong>.</li>" +
        "<li><strong>Etiology:</strong> <strong>exceedingly rare</strong>; almost always part of <strong>mixed valve disease from rheumatic heart disease</strong>.</li></ul>",
        ["ts-pathophysiology", "ts-etiology"],
        [q("What is the usual cause of tricuspid stenosis?", "Rheumatic heart disease with mixed valve involvement", ["Pulmonary hypertension", "Myxomatous degeneration", "Congenital bicuspid valve"], "TS is exceedingly rare and almost always rheumatic, with other valves involved.")],
        [q("A patient with rheumatic mitral and aortic disease has a raised RA pressure and reduced RV filling on echo. Which additional lesion explains this?", "Tricuspid stenosis", ["Pulmonic stenosis", "Mitral valve prolapse", "Acute aortic regurgitation"], "TS raises RA pressure and limits RV filling; it accompanies rheumatic mixed valve disease.")]),
      C("TS: clinical findings",
        "<ul><li>Asymptomatic if mild; eventually <strong>right-sided HF signs</strong>: peripheral edema, ascites, hepatomegaly.</li>" +
        "<li><strong>Diastolic murmur</strong> similar to MS but <strong>loudest at the LLSB</strong> and <strong>with inspiration</strong>; <strong>no radiation</strong>.</li>" +
        "<li>Usually overshadowed by concomitant mitral/aortic disease.</li></ul>",
        ["ts-symptoms", "ts-murmur"],
        [q("How does the tricuspid stenosis murmur differ from mitral stenosis?", "It is loudest at the left lower sternal border and increases with inspiration", ["It is systolic and radiates to the axilla", "It is heard best at the RUSB", "It decreases with inspiration"], "TS: MS-like diastolic murmur at the LLSB, louder with inspiration, no radiation.")],
        [q("A patient with rheumatic heart disease has ascites and edema and a diastolic rumble at the left lower sternal border that intensifies with inspiration. Which lesion?", "Tricuspid stenosis", ["Mitral stenosis alone", "Aortic regurgitation", "Pulmonic stenosis"], "LLSB diastolic rumble louder with inspiration = TS.")]),
      C("TS: workup and management",
        "<ul><li><strong>Echo: test of choice</strong>: thickened tricuspid leaflets, increased diastolic gradient. Other tools less helpful.</li>" +
        "<li><strong>Management:</strong> serial echo + cardiology follow-up; <strong>tricuspid valve replacement when severe or when performing other valve replacements</strong>.</li></ul>",
        ["ts-workup", "ts-management", "ts-surgery-timing"],
        [q("Which echo findings indicate tricuspid stenosis?", "Thickened tricuspid leaflets and increased diastolic gradient", ["Regurgitant jet into the RA with RV dilation", "Diastolic flow reversal into the RV", "Leaflet prolapse into the LA"], "TS: thickened leaflets with an elevated diastolic gradient."),
          q("When is tricuspid valve replacement indicated for tricuspid stenosis?", "When severe or when other valves are being replaced", ["At first detection of any gradient", "Only in children", "Never; TS is medical only"], "Replace when severe or during other valve surgery.")],
        [q("A patient with rheumatic disease is scheduled for mitral valve replacement and has moderate-to-severe tricuspid stenosis. What does the lecture recommend?", "Replace the tricuspid valve during the same operation", ["Ignore the tricuspid valve", "Balloon the tricuspid valve next year", "Start monthly penicillin instead"], "TS is replaced when severe or when other valves are being replaced.")])
    ]),

    /* ---------- 3k TR ---------- */
    S("03k-tricuspid-regurgitation", "3k. Tricuspid regurgitation", "Objectives 3–6 applied to tricuspid regurgitation. Slides 88–92.", [
      C("TR: pathophysiology and etiologies",
        "<ul><li>Rare, but more common than TS. Leaky tricuspid valve: during systole the RV pushes blood into the PA <strong>and back into the RA</strong>; RV diastolic filling = normal preload + regurgitant volume.</li>" +
        "<li>Over time <strong>RA and RV stretch</strong> → <strong>right-sided HF</strong>.</li></ul>" +
        tbl(["Type", "Causes"], [["Primary", "Endocarditis, carcinoid syndrome, congenital abnormalities"], ["<strong>Secondary/functional (most common)</strong>", "<strong>RV dilation from pulmonary HTN or RV failure</strong>: pulmonary disease (PE, COPD), left-sided HF, MS, MR"]]),
        ["tr-pathophysiology", "tr-etiology-primary", "tr-etiology-secondary"],
        [q("What is the most common cause of tricuspid regurgitation?", "Secondary/functional: RV dilation from pulmonary HTN or RV failure", ["Rheumatic heart disease", "Carcinoid syndrome", "Congenital abnormalities"], "Most TR is functional; anything causing pulmonary HTN or RV failure can cause TR."),
          q("Which is a primary cause of tricuspid regurgitation?", "Carcinoid syndrome", ["COPD", "Left-sided heart failure", "Mitral stenosis"], "Primary TR: endocarditis, carcinoid syndrome, congenital abnormalities.")],
        [q("A 68-year-old with severe COPD and pulmonary hypertension develops a dilated RV and new TR. Classification?", "Secondary (functional) TR", ["Primary TR from carcinoid", "Rheumatic TR", "Tricuspid stenosis"], "Pulmonary disease → pulmonary HTN → RV dilation → functional TR.")]),
      C("TR: clinical findings and murmur",
        "<ul><li>Asymptomatic if mild; with right-sided HF: <strong>JVD, hepatomegaly, ascites, peripheral edema</strong>.</li></ul>" +
        tbl(["Feature", "Tricuspid regurgitation"], [
          ["Timing", "<strong>Holosystolic</strong>, blowing, high-pitched"],
          ["Location", "<strong>LLSB</strong>"],
          ["Respiration", "<strong>Carvallo’s sign</strong>: louder with <strong>inspiration</strong>"],
          ["Extra", "S3 in severe cases"]]) +
        hy("MR vs TR: both blowing holosystolic. MR = apex → axilla. TR = LLSB, louder with inspiration (Carvallo)."),
        ["tr-symptoms", "tr-murmur", "tr-carvallo"],
        [q("Carvallo’s sign describes which finding?", "A tricuspid regurgitation murmur that becomes louder with inspiration", ["Head bobbing with each pulse", "Delayed, weak carotid upstroke", "A click that moves earlier with standing"], "Carvallo’s sign: TR murmur increases during inspiration."),
          q("Where is the tricuspid regurgitation murmur best heard?", "Left lower sternal border", ["Apex", "Right 2nd intercostal space", "Left 2nd intercostal space"], "TR: LLSB.")],
        [q("A patient with pulmonary hypertension has JVD, hepatomegaly, ascites, and a blowing holosystolic murmur at the LLSB that increases with inspiration. Diagnosis?", "Tricuspid regurgitation", ["Mitral regurgitation", "Aortic stenosis", "Mitral stenosis"], "LLSB holosystolic murmur with Carvallo’s sign and right HF = TR.")]),
      C("TR: workup and management",
        "<ul><li><strong>Echo:</strong> <strong>regurgitant jet into the RA</strong>; RA and RV dilation.</li><li><strong>EKG:</strong> more prone to atrial fibrillation. <strong>CXR:</strong> may see cardiomegaly (RA/RV enlargement).</li>" +
        "<li><strong>Management:</strong> serial echo + cardiology follow-up; <strong>treat concomitant disease</strong> (pulmonary HTN, HF); <strong>tricuspid valve replacement when severe</strong>.</li></ul>",
        ["tr-workup", "tr-management", "tr-surgery-timing"],
        [q("Which echo findings are expected in tricuspid regurgitation?", "Regurgitant jet into the RA with RA and RV dilation", ["Diastolic flow reversal into the RV", "Thickened leaflets with a diastolic gradient", "Jet from LV into LA"], "TR: jet into the RA with right-chamber dilation.")],
        [q("A patient with moderate functional TR due to left-sided heart failure is stable. Best management?", "Treat the heart failure and follow with serial echo", ["Immediate tricuspid replacement", "Balloon tricuspid valvotomy", "Reassurance only, no follow-up"], "Treat concomitant disease; replace the valve only when severe.")])
    ]),

    /* ---------- 7 Wood ---------- */
    S("07-wood-phenomenon", "7. Wood phenomenon", "Objective 7. Slide 20.", [
      C("Wood phenomenon",
        "<p><strong>Wood phenomenon:</strong> patients <strong>down-regulate their activities</strong> to conform to their disease and so make themselves <strong>asymptomatic</strong>.</p>" +
        "<ul><li>There is no definitive valve size or gradient at which symptoms start.</li><li><strong>Do not mistake absence of symptoms for mild disease</strong>: ask what the patient has stopped doing.</li></ul>" +
        hy("“I feel fine” + “I don’t walk to the mailbox anymore” = possible Wood phenomenon hiding severe valve disease."),
        ["wood-definition", "wood-clinical-significance"],
        [q("What is Wood phenomenon?", "Patients unconsciously limit their activity to match their disease, so they appear asymptomatic", ["A murmur that gets louder with inspiration", "Head bobbing with each pulse", "Rheumatic fever recurring after strep throat"], "Activity down-regulation hides symptoms."),
          q("What clinical error does Wood phenomenon warn against?", "Mistaking absence of symptoms for mild disease", ["Over-treating mild murmurs", "Using TEE before TTE", "Using DOACs with bioprosthetic valves"], "Asymptomatic does not mean mild.")],
        [q("A 72-year-old with severe AS on echo says he has “no symptoms,” but admits he stopped golfing and now drives to the mailbox. What explains his report?", "Wood phenomenon", ["Pulsus parvus et tardus", "Carvallo’s sign", "de Musset’s sign"], "He down-regulated activity to stay symptom-free.")])
    ]),

    /* ---------- 8 valve areas ---------- */
    S("08-severe-valve-areas", "8. Valve areas defining severe AS and severe MS", "Objective 8. Slides 23, 55.", [
      C("Severe AS vs severe MS valve areas",
        tbl(["", "Normal area", "Severe threshold"], [
          ["<strong>Aortic valve</strong>", "3–4 cm²", "<strong>&lt; 1.0 cm²</strong> (also gradient &gt; 40 mmHg)"],
          ["<strong>Mitral valve</strong>", "4–6 cm²", "<strong>&lt; 1.5 cm²</strong> (symptoms begin at 2–2.5 cm²)"]]) +
        mn("“<strong>A</strong>ortic is <strong>1</strong>, <strong>M</strong>itral is <strong>1.5</strong>”: the mitral valve is bigger, so its severe cutoff is bigger."),
        ["severe-as-area", "severe-ms-area", "normal-valve-areas"],
        [q("Which aortic valve area defines severe aortic stenosis?", "< 1.0 cm²", ["< 1.5 cm²", "< 2.5 cm²", "< 4.0 cm²"], "Severe AS: area < 1.0 cm²."),
          q("Which mitral valve area defines severe mitral stenosis?", "< 1.5 cm²", ["< 1.0 cm²", "< 3.0 cm²", "< 4.0 cm²"], "Severe MS: area < 1.5 cm²."),
          q("What is the normal mitral valve area?", "4–6 cm²", ["3–4 cm²", "1–1.5 cm²", "0.5–1 cm²"], "Normal mitral area 4–6 cm²; normal aortic area 3–4 cm².")],
        [q("An echo reports a mitral valve area of 1.2 cm². How is the stenosis graded?", "Severe mitral stenosis", ["Normal", "Mild mitral stenosis", "Severity cannot be judged from area"], "Mitral area < 1.5 cm² is severe."),
          q("An echo reports an aortic valve area of 1.3 cm² with a 30 mmHg gradient. How is the AS graded?", "Moderate", ["Severe", "Normal", "Critical requiring emergent surgery"], "Moderate AS: 1–1.5 cm² and 20–39 mmHg; severe needs < 1.0 cm².")])
    ]),

    /* ---------- 9 hypertrophy ---------- */
    S("09-eccentric-concentric-hypertrophy", "9. Eccentric vs concentric hypertrophy", "Objective 9. Slides 16, 29–30, 66.", [
      C("Concentric vs eccentric hypertrophy",
        tbl(["", "Concentric", "Eccentric"], [
          ["Trigger", "<strong>Pressure overload</strong>", "<strong>Volume overload</strong>"],
          ["Sarcomeres", "Added <strong>in parallel</strong>", "Added <strong>in series</strong>"],
          ["Shape", "<strong>Thick wall, small cavity</strong>", "<strong>Dilated cavity</strong>, ↑ mass"],
          ["Valve lesion", "<strong>Stenosis</strong> (e.g., AS)", "<strong>Regurgitation</strong> (e.g., AR, MR)"],
          ["HF pattern (slide 30)", "HF with <strong>preserved</strong> EF (stiff ventricle)", "HF with <strong>reduced</strong> EF (weakened muscle)"]]) +
        mn("<strong>S</strong>tenosis → <strong>S</strong>queezed (thick, small). <strong>R</strong>egurgitation → <strong>R</strong>oomy (dilated)."),
        ["concentric-definition", "eccentric-definition", "concentric-stenosis", "eccentric-regurgitation", "sarcomere-pattern"],
        [q("Concentric hypertrophy results from which type of load?", "Pressure overload", ["Volume overload", "Low preload", "Bradycardia"], "Pressure overload (stenosis) → concentric hypertrophy."),
          q("In eccentric hypertrophy, sarcomeres are added:", "In series, dilating the chamber", ["In parallel, thickening the wall", "Only in the atria", "Not at all"], "Series addition lengthens fibers and enlarges the cavity."),
          q("Which valve lesion causes eccentric hypertrophy of the LV?", "Aortic regurgitation", ["Aortic stenosis", "Pulmonic stenosis", "Tricuspid stenosis"], "Regurgitation = volume overload = eccentric.")],
        [q("Echo shows a thick-walled LV with a small cavity and normal EF. Which valve lesion most likely caused this?", "Aortic stenosis", ["Aortic regurgitation", "Chronic mitral regurgitation", "Pulmonic regurgitation"], "Thick wall, small cavity = concentric = pressure overload from stenosis."),
          q("Echo shows a dilated LV with increased mass and an EF of 40% in a patient with a long-standing diastolic murmur. Which pattern is this?", "Eccentric hypertrophy from volume overload", ["Concentric hypertrophy from pressure overload", "Normal LV geometry", "Isolated RV hypertrophy"], "Chronic AR volume-loads the LV → eccentric hypertrophy and eventually reduced EF.")])
    ]),

    /* ---------- 10 RHD ---------- */
    S("10-rheumatic-heart-disease", "10. Rheumatic heart disease", "Objective 10 (five parts). Slides 12, 15, 40–44, 51.", [
      C("Strep throat → ARF → RHD",
        "<ol><li><strong>Strep throat</strong> (group A Streptococcus).</li><li>~<strong>2–4 weeks</strong> later: <strong>acute rheumatic fever</strong>. Antibodies against strep proteins <strong>cross-react with self antigens</strong> in the heart, joints, and vessels → inflammation. All 3 heart layers may be involved (<strong>pancarditis</strong>); valve leaflets inflame with small <strong>sterile vegetations</strong>.</li>" +
        "<li><strong>Years–decades</strong> later: <strong>rheumatic heart disease</strong>. Repeated inflammation heals with <strong>fibrosis</strong> → fusion and contracture of leaflets, <strong>shortened chordae</strong>; stenosis ± regurgitation.</li></ol>" +
        "<p>A child/teen with ARF may not have clinically significant RHD until adulthood.</p>",
        ["rhd-pathophysiology", "rhd-molecular-mimicry", "rhd-timeline", "rhd-pancarditis"],
        [q("What mechanism links strep throat to acute rheumatic fever?", "Antibodies against strep proteins cross-react with self antigens in the heart, joints, and vessels", ["Direct bacterial infection of the valve", "Toxin-mediated platelet aggregation", "Viral myocarditis after the strep infection"], "Autoimmune cross-reactivity (molecular mimicry) drives ARF."),
          q("How long after strep throat does acute rheumatic fever typically develop?", "2–4 weeks", ["2–4 hours", "2–4 days", "2–4 years"], "ARF appears 2–4 weeks after strep throat; RHD follows over years–decades."),
          q("During acute rheumatic fever, involvement of all three layers of the heart is called:", "Pancarditis", ["Pericarditis only", "Endocarditis only", "Cardiomyopathy"], "ARF can cause pancarditis."),
          q("What chronic change turns acute rheumatic valvulitis into rheumatic heart disease?", "Repeated inflammation healing with fibrosis, fusing leaflets and shortening chordae", ["Calcification identical to degenerative AS", "Myxomatous floppy leaflets", "Annular dilation from pulmonary HTN"], "Fibrotic scarring deforms leaflets over years.")],
        [q("A 35-year-old with mitral stenosis recalls a childhood illness with joint pain and fever weeks after a sore throat. Which sequence explains her valve disease?", "Strep throat → acute rheumatic fever → years later rheumatic heart disease", ["Viral URI → myocarditis → dilated cardiomyopathy", "Strep throat → immediate bacterial endocarditis", "Bicuspid valve → calcification"], "ARF in childhood scarred the valve over years.")]),
      C("Preventing RHD along the trajectory",
        tbl(["Stage", "Intervention"], [
          ["<strong>Strep throat</strong>", "<strong>Penicillin</strong>: timely antibiotics essentially eliminate the risk of ARF"],
          ["<strong>Acute rheumatic fever</strong>", "Anti-inflammatories acutely; then <strong>monthly IM benzathine penicillin</strong> to prevent strep recurrences"],
          ["Result", "Greatly reduces the odds of permanent valve scarring/RHD"]]) +
        hy("The main goal of treating strep throat with penicillin is to <strong>prevent acute rheumatic fever</strong>."),
        ["rhd-prevention-penicillin", "rhd-secondary-prophylaxis", "rhd-arf-treatment"],
        [q("What is the main goal of treating strep throat with penicillin?", "Preventing acute rheumatic fever", ["Preventing aortic stenosis from calcification", "Shortening symptoms by one day only", "Preventing prosthetic valve endocarditis"], "Timely antibiotics essentially eliminate ARF risk."),
          q("After an episode of acute rheumatic fever, what prevents recurrences?", "Monthly IM benzathine penicillin", ["Amoxicillin 2 g PO before dental work only", "Lifelong warfarin", "Daily low-dose aspirin"], "Monthly IM benzathine penicillin prevents recurrent strep and further valve scarring.")],
        [q("A 12-year-old just recovered from acute rheumatic fever with carditis. Which long-term measure most reduces the chance of rheumatic heart disease?", "Monthly IM benzathine penicillin injections", ["Annual echo only", "Mitral balloon valvotomy now", "Beta-blocker therapy"], "Secondary prophylaxis prevents recurrences and permanent scarring."),
          q("A 9-year-old has a positive rapid strep test. Why is penicillin prescribed even though strep pharyngitis is often self-limited?", "To prevent acute rheumatic fever and later rheumatic heart disease", ["To prevent bicuspid aortic valve", "To prevent mitral valve prolapse", "To prevent pulmonary hypertension"], "Treating strep throat prevents ARF.")]),
      C("Valves affected and global burden",
        "<ul><li><strong>Mitral &gt; Aortic &gt; Tricuspid &gt; Pulmonic</strong>; combinations are common.</li><li>90% of RHD patients have mitral involvement.</li>" +
        "<li><strong>Major cause of morbidity and mortality worldwide</strong> where <strong>access to legitimate antibiotics is limited</strong> and <strong>crowding is common</strong>; rare in industrialized countries.</li></ul>" +
        hy("Order of involvement: <strong>Mitral → Aortic → Tricuspid → Pulmonic</strong>."),
        ["rhd-valves", "rhd-global-burden"],
        [q("Which valve is most commonly affected by rheumatic heart disease?", "Mitral", ["Aortic", "Tricuspid", "Pulmonic"], "Mitral > aortic > tricuspid > pulmonic."),
          q("Which valve is second most commonly affected in rheumatic heart disease?", "Aortic", ["Tricuspid", "Pulmonic", "Mitral"], "Aortic follows mitral."),
          q("Why is rheumatic heart disease a major cause of morbidity and mortality worldwide?", "Limited access to legitimate antibiotics and crowded living conditions", ["High rates of bicuspid valves", "Widespread fen-phen use", "Older populations with calcific disease"], "Untreated strep and crowding drive RHD globally.")],
        [q("A clinician working in a crowded region with poor antibiotic access sees many young adults with valve disease. Which valve will most often be affected?", "Mitral valve", ["Pulmonic valve", "Tricuspid valve only", "Aortic valve only"], "RHD most often affects the mitral valve.")]),
      C("Echo findings: acute vs chronic",
        tbl(["", "Acute rheumatic fever", "Chronic rheumatic disease"], [
          ["Echo", "<strong>Valvular regurgitation</strong>; <strong>pericardial effusion</strong>; <strong>LV enlargement</strong> if myocarditis is severe", "<strong>Thickened, calcified leaflets</strong>; <strong>commissural fusion (“fish-mouth”)</strong>; <strong>short chordae</strong>"],
          ["Lesion", "Regurgitation", "<strong>Stenosis ± regurgitation</strong>"]]) +
        "<p><em>Clarification:</em> slide 43 prints “commissural fission”; the fish-mouth orifice and slide 40 describe <strong>fusion</strong>.</p>",
        ["rhd-echo-acute", "rhd-echo-chronic"],
        [q("Which echo findings are typical of acute rheumatic fever?", "Valvular regurgitation and pericardial effusion", ["Calcified fish-mouth mitral valve", "Post-stenotic aortic dilation", "Prolapsing myxomatous leaflets"], "Acute: regurgitation, pericardial effusion, LV enlargement if severe myocarditis."),
          q("Which echo finding is classic for chronic rheumatic valve disease?", "Commissural fusion producing a fish-mouth orifice", ["Leaflet displacement into the LA in systole", "Diastolic flow reversal into the RV", "Normal leaflets with annular dilation"], "Chronic RHD: thickened, calcified leaflets, commissural fusion, short chordae.")],
        [q("A 10-year-old with fever and migratory arthritis 3 weeks after pharyngitis gets an echo. Which findings are most expected?", "Mitral regurgitation and a pericardial effusion", ["Calcified fish-mouth mitral stenosis", "Bicuspid aortic valve", "Mid-systolic click with prolapse"], "Acute ARF: regurgitation and effusion; stenosis takes years."),
          q("A 45-year-old with remote rheumatic fever has an echo showing thickened, calcified mitral leaflets with short chordae and a fish-mouth orifice. What lesion results?", "Mitral stenosis, with or without regurgitation", ["Isolated mitral valve prolapse", "Acute mitral regurgitation from papillary rupture", "Aortic sclerosis"], "Chronic rheumatic changes cause stenosis ± regurgitation.")])
    ]),

    /* ---------- 11 most common ---------- */
    S("11-most-common-valvular-abnormality", "11. Most common valvular abnormality", "Objective 11. Slide 60.", [
      C("Mitral valve prolapse is the most common valvular abnormality",
        "<p><strong>Mitral valve prolapse</strong> is the <strong>most common valvular abnormality</strong>; it is often <strong>incidentally detected on echo</strong> and can lead to mitral regurgitation.</p>" +
        hy("Don’t confuse: most common <strong>abnormality</strong> = MVP; leading cause of valve <strong>surgery in the US</strong> = degenerative AS; most common cause of AS <strong>worldwide</strong> = RHD."),
        ["most-common-mvp"],
        [q("What is the most common valvular abnormality?", "Mitral valve prolapse", ["Aortic stenosis", "Mitral stenosis", "Tricuspid regurgitation"], "MVP is the most common valvular abnormality.")],
        [q("An echo ordered for palpitations in an otherwise healthy young adult incidentally shows a valvular abnormality. Statistically, which is most likely?", "Mitral valve prolapse", ["Tricuspid stenosis", "Pulmonic regurgitation", "Acute aortic regurgitation"], "MVP is most common and often found incidentally.")])
    ]),

    /* ---------- 12 strategies ---------- */
    S("12-surgical-strategies", "12. Two main strategies for surgical treatment", "Objective 12. Slides 95–97.", [
      C("Repair vs replacement",
        "<p>Medications help symptoms; <strong>only surgery definitively fixes the valve</strong>. Two strategies:</p>" +
        tbl(["", "Valve repair", "Valve replacement"], [
          ["What", "<strong>Preserve the native valve</strong>", "Remove native valve and implant a <strong>prosthetic</strong>"],
          ["When", "<strong>Preferred when feasible</strong>, especially the <strong>mitral valve</strong>; most used for <strong>MR</strong>", "When repair is technically undesirable: <strong>severe calcification</strong> (especially rheumatic fused/rigid leaflets), extensive leaflet destruction/distortion, <strong>traumatic rupture</strong>, or lesion expected to persist despite repair"],
          ["Benefits", "Preserves native tissue; <strong>no lifelong anticoagulation</strong>; <strong>lower infection risk</strong>", "Works when the valve cannot be reconstructed"]]),
        ["strategy-repair", "strategy-replacement", "repair-benefits", "replacement-indications"],
        [q("What are the two main strategies for surgical treatment of valvular disease?", "Valve repair and valve replacement", ["Medication and observation", "Balloon and stent", "TTE and TEE"], "Repair preserves the native valve; replacement implants a prosthesis."),
          q("Which is a benefit of valve repair over replacement?", "No need for lifelong anticoagulation", ["Higher infection risk", "Requires removing native tissue", "Only option for calcified rheumatic valves"], "Repair preserves tissue, avoids lifelong anticoagulation, and lowers infection risk."),
          q("Valve repair is most utilized for which lesion?", "Mitral regurgitation", ["Aortic stenosis", "Tricuspid stenosis", "Pulmonic stenosis"], "Repair is preferred especially for the mitral valve and MR.")],
        [q("A patient has severe rheumatic mitral disease with heavily calcified, fused, rigid leaflets. Which strategy is most appropriate?", "Valve replacement", ["Valve repair with annuloplasty", "Medication only as definitive therapy", "Observation with serial echo"], "Severe calcification and rigid leaflets make repair undesirable."),
          q("A 50-year-old with degenerative MR from a single prolapsing segment asks which surgery avoids lifelong anticoagulation. Best answer?", "Mitral valve repair", ["Mechanical mitral replacement", "Mechanical aortic replacement", "No surgery avoids anticoagulation"], "Repair preserves native tissue without lifelong anticoagulation.")])
    ]),

    /* ---------- 13 mech vs bio ---------- */
    S("13-mechanical-vs-bioprosthetic", "13. Mechanical vs bioprosthetic valves", "Objective 13. Slides 98, 105–106.", [
      C("Mechanical vs bioprosthetic valves",
        tbl(["", "Mechanical", "Bioprosthetic (tissue)"], [
          ["Durability", "<strong>20–30 years</strong>", "<strong>10–20 years</strong>"],
          ["Material", "<strong>Synthetic</strong>", "<strong>Bovine or porcine pericardium</strong>"],
          ["Anticoagulation", "<strong>Lifelong warfarin</strong>", "No long-term anticoagulation needed"],
          ["Preferred population", "<strong>Younger (&lt; 60)</strong>", "<strong>Older (&gt; 60)</strong> or when anticoagulation is contraindicated"]]) +
        "<p>Transcatheter valves (slides 105–106) are tissue valves, e.g., bovine pericardial leaflets on a collapsible metal frame.</p>",
        ["mechanical-durability", "mechanical-material", "mechanical-population", "bioprosthetic-durability", "bioprosthetic-material", "bioprosthetic-population"],
        [q("How long do mechanical heart valves typically last?", "20–30 years", ["2–5 years", "10–20 years", "5–8 years"], "Mechanical valves are durable: 20–30 years."),
          q("What are bioprosthetic valves made from?", "Bovine or porcine pericardium", ["Pyrolytic carbon and titanium only", "The patient’s own pericardium only", "Synthetic polymer leaflets"], "Tissue valves use bovine or porcine pericardium."),
          q("Which population is generally preferred for a mechanical valve?", "Younger patients (< 60 years)", ["Older patients (> 60 years)", "Patients who cannot take anticoagulation", "Patients with a short life expectancy"], "Younger patients benefit from the durability."),
          q("How long do bioprosthetic valves typically last?", "10–20 years", ["20–30 years", "1–2 years", "40–50 years"], "Tissue valves are less durable: 10–20 years.")],
        [q("A 45-year-old needs aortic valve replacement, has no bleeding risk, and wants to avoid a second operation. Which valve fits best?", "Mechanical valve", ["Bioprosthetic valve", "No valve; repair is mandatory", "Porcine valve because it lasts longest"], "Younger patients without contraindications usually get mechanical valves for durability."),
          q("A 74-year-old with frequent falls and a history of GI bleeding needs a valve replacement. Which valve is preferred?", "Bioprosthetic valve", ["Mechanical valve", "Synthetic valve requiring lifelong warfarin", "Any valve; anticoagulation does not differ"], "Older age and anticoagulation contraindication favor a tissue valve.")])
    ]),

    /* ---------- 14 anticoagulation ---------- */
    S("14-anticoagulation", "14. Anticoagulation: mechanical vs bioprosthetic valves", "Objective 14. Slides 99–100.", [
      C("Anticoagulation after valve replacement",
        "<p>Thromboembolic risk is <strong>highest in the first three months</strong> after any valve replacement.</p>" +
        tbl(["", "Mechanical", "Bioprosthetic"], [
          ["Thrombogenicity", "<strong>More thrombogenic</strong>", "Less prone to thrombosis"],
          ["Regimen", "<strong>Lifelong warfarin</strong>; <strong>INR target generally 2.5–3.5</strong> (depends on valve location and other risk factors)", "Post-op <strong>3–6 months</strong> of low-dose aspirin <strong>or</strong> warfarin; long-term <strong>low-dose daily aspirin</strong>"],
          ["DOACs", "<strong>Contraindicated</strong> (e.g., apixaban)", "—"]]) +
        hy("Mechanical valve = warfarin forever, INR 2.5–3.5, <strong>never a DOAC</strong>."),
        ["anticoag-mechanical-warfarin", "anticoag-inr-target", "anticoag-doac-contraindicated", "anticoag-bioprosthetic", "anticoag-early-risk"],
        [q("What is the generally targeted INR for a mechanical heart valve?", "2.5–3.5", ["1.0–1.5", "1.5–2.0", "4.0–5.0"], "Mechanical valves: INR generally 2.5–3.5, depending on location and risk factors."),
          q("Which anticoagulant class is contraindicated with a mechanical heart valve?", "Direct oral anticoagulants (e.g., apixaban)", ["Vitamin K antagonists (warfarin)", "Low-dose aspirin", "Heparin bridging"], "DOACs are contraindicated with mechanical valves."),
          q("What long-term antithrombotic do bioprosthetic valve patients usually take?", "Low-dose daily aspirin", ["Lifelong warfarin with INR 2.5–3.5", "Apixaban", "No antithrombotic ever"], "After 3–6 months of aspirin or warfarin, long-term low-dose aspirin."),
          q("When is the thromboembolic risk highest after valve replacement?", "Within the first three months", ["After 10 years", "Only after the valve fails", "Only in the first 24 hours"], "Risk is highest within the first three months.")],
        [q("A patient with a new mechanical mitral valve asks to switch from warfarin to apixaban for convenience. Best response?", "Apixaban is contraindicated with mechanical valves; stay on warfarin", ["Switch to apixaban; it is equivalent", "Stop anticoagulation after 3 months", "Switch to aspirin alone"], "DOACs are contraindicated with mechanical valves."),
          q("A 72-year-old just received a bioprosthetic aortic valve. What antithrombotic plan fits the lecture?", "Aspirin or warfarin for 3–6 months, then long-term low-dose aspirin", ["Lifelong warfarin with INR 2.5–3.5", "Lifelong apixaban", "No antithrombotic at any time"], "Bioprosthetic: short-term aspirin or warfarin, then long-term aspirin.")])
    ]),

    /* ---------- 15 infection susceptibility ---------- */
    S("15-infection-susceptibility", "15. Susceptibility of replaced valves to infection", "Objective 15. Slide 101.", [
      C("Why prosthetic valves are prone to infection",
        "<ul><li><strong>Foreign material</strong> makes the patient more susceptible to infection.</li><li><strong>Native valves</strong> have an <strong>endothelial layer that repels colonization</strong>.</li><li>Bacteria tend to colonize damaged/abnormal areas.</li>" +
        "<li>Bacteria <strong>adhere to prosthetic material and form biofilm</strong>, which protects them from immune defenses and antibiotics.</li></ul>",
        ["infection-foreign-material", "infection-endothelium", "infection-biofilm"],
        [q("What protects native valves from bacterial colonization?", "An endothelial layer that repels colonization", ["A biofilm layer", "Calcium deposits", "Chordae tendineae"], "Native tissue has endothelium that generally repels bacteria."),
          q("Why are prosthetic valve infections hard to eradicate?", "Bacteria form biofilm on prosthetic material that shields them from immunity and antibiotics", ["Prosthetic valves have their own immune cells", "Antibiotics cannot enter the heart", "Prosthetic valves are too small to infect"], "Biofilm protects bacteria from host defenses and antibiotics.")],
        [q("A patient asks why her new prosthetic valve raises infection risk when her old diseased valve did not need special precautions. Best explanation?", "Prosthetic material lacks protective endothelium and lets bacteria form biofilm", ["The new valve is made of living tissue", "Warfarin causes infections", "Prosthetic valves trap white blood cells"], "Foreign material without endothelium invites adherence and biofilm.")])
    ]),

    /* ---------- 16 PVE ---------- */
    S("16-prosthetic-valve-endocarditis", "16. Early vs late prosthetic valve endocarditis", "Objective 16. Slide 102.", [
      C("Early vs late PVE",
        tbl(["", "Early PVE", "Late PVE"], [
          ["Timing", "<strong>Within 12 months</strong> of the procedure", "<strong>After 12 months</strong>"],
          ["Source", "Likely <strong>hospital-acquired</strong>", "<strong>Hematogenous spread</strong>"],
          ["Typical organism", "<strong>Staphylococcus aureus</strong>", "<strong>Streptococci</strong>"]]) +
        "<p><strong>Patient education:</strong> antibiotics are given <strong>peri-operatively only</strong>, not long-term. Follow-up care matters; teach the patient about the <strong>increased risk of PVE</strong> and to <strong>report worrisome signs/symptoms promptly</strong>.</p>",
        ["pve-early", "pve-late", "pve-organisms", "pve-patient-education"],
        [q("What organism typically causes early prosthetic valve endocarditis?", "Staphylococcus aureus", ["Streptococci", "Enterococcus only", "Candida"], "Early PVE (< 12 months) is likely hospital-acquired, typically S. aureus."),
          q("What organism group commonly causes late prosthetic valve endocarditis?", "Streptococci", ["Staphylococcus aureus from the OR", "Gram-negative rods only", "Fungi"], "Late PVE (> 12 months) is hematogenous, commonly streptococci."),
          q("What time cutoff separates early from late prosthetic valve endocarditis?", "12 months after the procedure", ["2 weeks", "3 months", "5 years"], "Early < 12 months; late > 12 months."),
          q("Are antibiotics continued long-term after valve replacement surgery?", "No; they are given peri-operatively only", ["Yes, lifelong daily", "Yes, for 12 months", "Yes, monthly IM injections"], "Peri-operative only; patient education and follow-up are emphasized instead.")],
        [q("Four months after aortic valve replacement, a patient has fever and new regurgitation. Which organism is most likely?", "Staphylococcus aureus", ["Streptococci", "Group A strep with rheumatic fever", "Pneumocystis"], "Within 12 months = early PVE, typically hospital-acquired S. aureus."),
          q("Five years after mitral valve replacement, a patient develops fever after a dental infection. Most likely organism class?", "Streptococci", ["Staphylococcus aureus from the operating room", "Clostridium", "Mycobacteria"], "After 12 months, PVE is hematogenous, commonly streptococcal."),
          q("At discharge after valve replacement, what key education point does the lecture emphasize?", "Report fever or worrisome symptoms promptly because PVE risk is increased", ["Take antibiotics daily for life", "No follow-up is needed once the incision heals", "Avoid all dental care permanently"], "Strong education about PVE risk and prompt reporting of symptoms.")])
    ]),

    /* ---------- 17 prophylaxis ---------- */
    S("17-pve-prophylaxis", "17. Antibiotic prophylaxis for prosthetic valve endocarditis", "Objective 17. Slide 103.", [
      C("When to give prophylaxis",
        "<p>Patients with <strong>prosthetic material</strong> (mechanical <strong>or</strong> bioprosthetic valve) need prophylactic antibiotics before:</p>" +
        "<ul><li><strong>Dental cleanings and procedures</strong></li><li><strong>Respiratory tract procedures</strong></li><li><strong>Invasive skin procedures</strong></li></ul>",
        ["prophylaxis-indications", "prophylaxis-both-valve-types"],
        [q("Which procedure requires endocarditis prophylaxis in a patient with a prosthetic valve?", "Dental cleaning", ["Routine venipuncture", "Chest x-ray", "Transthoracic echo"], "Dental cleanings/procedures, respiratory tract procedures, invasive skin procedures."),
          q("Do patients with bioprosthetic valves need endocarditis prophylaxis before qualifying procedures?", "Yes, any prosthetic valve material qualifies", ["No, only mechanical valves", "Only if they take warfarin", "Only in the first month after surgery"], "Both mechanical and bioprosthetic valves require prophylaxis.")],
        [q("A patient with a bioprosthetic aortic valve is scheduled for an invasive skin procedure. Is prophylaxis indicated?", "Yes, invasive skin procedures qualify", ["No, skin procedures never qualify", "Only if the valve is mechanical", "Only if fever is already present"], "Invasive skin procedures are on the lecture’s list.")]),
      C("Standard regimen: dose, route, timing",
        "<div class=\"box-hy\"><span class=\"lbl\">High yield</span><strong>Amoxicillin 2 g PO, 30–60 minutes before the procedure.</strong></div>" +
        tbl(["Drug", "Dose", "Route", "Timing"], [["Amoxicillin", "<strong>2 g</strong>", "<strong>PO</strong>", "<strong>30–60 min before</strong>"]]),
        ["prophylaxis-drug", "prophylaxis-dose", "prophylaxis-route", "prophylaxis-timing"],
        [q("What is the standard endocarditis prophylaxis regimen for a patient with a prosthetic valve?", "Amoxicillin 2 g PO 30–60 minutes before the procedure", ["Amoxicillin 500 mg PO after the procedure", "Benzathine penicillin IM monthly", "Vancomycin 1 g IV daily for a week"], "Standard regimen: amoxicillin 2 g PO 30–60 min before."),
          q("What is the dose of amoxicillin for prosthetic valve endocarditis prophylaxis?", "2 g", ["250 mg", "500 mg", "875 mg"], "Amoxicillin 2 g."),
          q("When should prophylactic amoxicillin be taken relative to the procedure?", "30–60 minutes before", ["24 hours after", "Immediately after", "One week before"], "Take it 30–60 minutes before the procedure.")],
        [q("A patient with a mechanical mitral valve has a dental cleaning tomorrow at 10:00. Which prescription is correct?", "Amoxicillin 2 g PO taken 30–60 minutes before the cleaning", ["Amoxicillin 2 g PO the evening after", "Monthly benzathine penicillin", "No antibiotic; dental cleaning does not qualify"], "Dental cleaning qualifies; amoxicillin 2 g PO 30–60 min before.")])
    ]),

    /* ---------- 18 approaches ---------- */
    S("18-surgical-approaches", "18. Open, minimally invasive, and transcatheter approaches", "Objective 18. Slides 104–106.", [
      C("Comparing surgical approaches",
        tbl(["", "Open heart surgery", "Minimally invasive", "Transcatheter"], [
          ["Technique", "Full <strong>sternotomy</strong>, cardiopulmonary bypass, valve excised, prosthesis placed", "Smaller thoracic incisions/ports, robotic-assisted; bypass, valve excised, prosthesis placed", "Catheter threaded from distant vasculature; <strong>collapsed valve expanded inside the diseased valve</strong>"],
          ["Advantages", "<strong>Gold standard</strong>; handles complex disease; best data", "Less trauma and blood loss; quicker recovery", "<strong>Least invasive</strong>; rapid recovery; <strong>avoids bypass</strong>"],
          ["Disadvantages", "Most invasive; longest recovery; <strong>highest peri-op risk</strong>", "Cannot handle exceedingly complex pathology; technically demanding", "Newer, less data; <strong>higher risk of valve leak/failure</strong>; anatomy dependent"],
          ["Best for", "<strong>Younger, lower-risk</strong> patients and <strong>complex</strong> valve disease", "Patients with <strong>suitable anatomy</strong> who can undergo surgery", "<strong>Older or high surgical risk</strong>; currently severe AS (TAVR), some severe MR"]]),
        ["approach-open", "approach-minimally-invasive", "approach-transcatheter", "approach-advantages", "approach-disadvantages", "approach-preferred"],
        [q("Which valve surgery approach is considered the gold standard with the best data?", "Open heart surgery", ["Minimally invasive surgery", "Transcatheter replacement", "Balloon valvuloplasty"], "Open surgery is the gold standard for complex disease with the best data."),
          q("Which approach avoids cardiopulmonary bypass?", "Transcatheter valve replacement", ["Open heart surgery", "Minimally invasive surgery", "Open commissurotomy"], "Transcatheter valves are expanded inside the diseased valve without bypass."),
          q("What is a disadvantage of transcatheter valve replacement?", "Higher risk of valve leak or failure and less long-term data", ["Requires full sternotomy", "Longest recovery of all approaches", "Highest peri-operative risk"], "Transcatheter: newer, less data, higher leak/failure risk, anatomy dependent."),
          q("What is a limitation of minimally invasive valve surgery?", "It cannot handle exceedingly complex pathology and is technically demanding", ["It requires the longest recovery", "It avoids bypass entirely", "It is only used in children"], "Smaller incisions limit what pathology can be addressed.")],
        [q("A 52-year-old low-risk patient has complex multivalve disease requiring repair of several structures. Which approach is best?", "Open heart surgery", ["Transcatheter replacement", "Minimally invasive robotic surgery", "Medical therapy only"], "Younger, lower-risk patients with complex disease: open surgery."),
          q("An 86-year-old with severe symptomatic AS is deemed high surgical risk. Which approach is preferred?", "Transcatheter (TAVR)", ["Open sternotomy with bypass", "Minimally invasive mitral repair", "No intervention"], "Transcatheter is preferred for older or high-risk patients and is used for severe AS."),
          q("A 58-year-old with isolated MR and suitable anatomy wants the quickest recovery but is a good surgical candidate. Which approach fits best?", "Minimally invasive surgery", ["Full sternotomy because it is always preferred", "TAVR", "Balloon valvotomy"], "Suitable anatomy + surgical candidate → minimally invasive for less trauma and quicker recovery.")])
    ])
  ];
})();
