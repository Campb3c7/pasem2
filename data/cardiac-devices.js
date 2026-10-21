/* Gulczinski, Cardiac Devices. Official "Cardiac Device Objectives" in the supplied order.
   Objective 3 (procedure, battery life, precautions, testing) is split into sections 3a-3d.
   Picture-only slides (4, 5, 6, 17, 21-24, 26, 30, 38, 40, 47, 51-53) are photos, a device CXR, and diagrams;
   their teaching content is carried by the slide text, so nothing was transcribed from images.
   Clarification (objective 7 workup): the slides name persistent bacteremia and a lead vegetation on TEE;
   "draw blood cultures" is stated explicitly here as the way persistent bacteremia is shown. */
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

  window.CARDIAC_DEVICES_OBJECTIVES = [

    /* ---------- 1 ---------- */
    S("01-icd-vs-pacemaker-indications", "1. Indications for ICD vs pacemaker placement", "Objective 1. Slides 2–8, 13, 19, 27–36.", [
      C("Pacemaker indications",
        "<p>Pacemakers treat <strong>too slow</strong> a rhythm: generally placed for disease of the <strong>AV node or His-Purkinje system</strong>, sometimes the sinus node.</p>" +
        "<ul><li><strong>Symptomatic bradycardia from sinus node dysfunction</strong> (sick sinus syndrome), usually HR <strong>&lt; 40 bpm</strong></li>" +
        "<li><strong>Symptomatic AV block</strong>: usually <strong>complete heart block</strong> or <strong>second-degree type II</strong></li>" +
        "<li><strong>Asystole &gt; 3 seconds</strong> (or <strong>≥ 5 seconds</strong> in atrial fibrillation)</li>" +
        "<li>To facilitate <strong>AV node ablation</strong></li>" +
        "<li><strong>Cardiac resynchronization therapy</strong> with biventricular pacing</li></ul>" +
        "<p><strong>Presentation:</strong> exertional dyspnea, loss of exercise tolerance, syncope and near syncope; the patient or others may notice a low heart rate.</p>",
        ["ppm-indications", "ppm-presentation"],
        [q("Which AV block is a typical indication for a permanent pacemaker when symptomatic?", "Second-degree AV block type II", ["First-degree AV block", "Second-degree AV block type I (Wenckebach)", "Sinus arrhythmia"], "Symptomatic complete heart block or second-degree type II are the classic AV-block indications."),
          q("A pause of asystole longer than how many seconds is a pacemaker indication in a patient in sinus rhythm?", "3 seconds", ["1 second", "10 seconds", "30 seconds"], "Asystole > 3 seconds (or ≥ 5 seconds in atrial fibrillation) is an indication."),
          q("In a patient with atrial fibrillation, what pause length is a pacemaker indication?", "At least 5 seconds", ["At least 1 second", "At least 2 seconds", "At least 15 seconds"], "The asystole threshold rises to ≥ 5 seconds in AF."),
          q("Sick sinus syndrome warrants a pacemaker when symptomatic, usually at heart rates below:", "40 bpm", ["60 bpm", "50 bpm", "70 bpm"], "Symptomatic sinus node dysfunction, usually HR < 40 bpm.")],
        [q("A 79-year-old has exertional dyspnea, near syncope, and an EKG showing complete heart block. She takes no AV-nodal drugs and labs are normal. What is the indicated device?", "Permanent pacemaker", ["Implantable cardioverter-defibrillator alone", "Subcutaneous ICD", "No device; observe"], "Symptomatic complete heart block without a reversible cause is a pacemaker indication."),
          q("A patient with refractory AF is scheduled for AV node ablation. Which device will be needed?", "Permanent pacemaker", ["Implantable cardioverter-defibrillator only", "Temporary transcutaneous pacing only", "Implantable loop recorder"], "Pacing is required to facilitate AV node ablation, which removes native AV conduction.")]),
      C("Correct reversible causes first",
        "<p>Many bradyarrhythmias do <strong>not</strong> need a permanent pacemaker. Before placing a device, <strong>all reversible causes must be corrected</strong>:</p>" +
        tbl(["Reversible cause", "Action"], [
          ["<strong>AV-nodal blocking medications</strong>", "Hold the offending drug"],
          ["Severe <strong>electrolyte</strong>, toxic or metabolic abnormality", "Correct the disturbance"],
          ["<strong>Myocardial ischemia or infarction</strong>", "Treat the ischemia"],
          ["<strong>Infection</strong>: Lyme disease, infective endocarditis", "Treat the infection"],
          ["<strong>Chest trauma</strong>", "Treat the underlying injury"]]) +
        "<p>Meanwhile monitor closely; keep a crash cart nearby or apply pacer pads as the situation requires.</p>" +
        hy("Bradycardia + AV-nodal blocker, hyperkalemia, acute MI, or Lyme → <strong>fix the cause and monitor</strong>, not an immediate permanent pacemaker."),
        ["reversible-causes"],
        [q("Which bradycardia setting does NOT by itself warrant a permanent pacemaker?", "Heart block while taking AV-nodal blocking medications", ["Symptomatic complete heart block with no reversible cause", "Symptomatic sick sinus syndrome with HR in the 30s", "Planned AV node ablation"], "Drug-induced block is handled by holding the drug and monitoring."),
          q("Which infection is named as a reversible cause of heart block to treat before considering a pacemaker?", "Lyme disease", ["Influenza", "Streptococcal pharyngitis", "Herpes zoster"], "Lyme disease and infective endocarditis are listed infectious causes.")],
        [q("A 60-year-old on metoprolol and diltiazem presents with HR 38 and second-degree block; potassium is normal. What is the best first step?", "Hold the AV-nodal blocking drugs and monitor closely", ["Schedule a permanent pacemaker today", "Place an ICD", "Start a third AV-nodal agent"], "Offending drugs should be held before deciding on a device."),
          q("A hiker from a tick-endemic area has fever, rash, and new high-grade AV block. Best approach to the block?", "Treat the infection and monitor, with temporary pacing if unstable", ["Immediate permanent pacemaker", "Immediate ICD", "Discharge with outpatient follow-up"], "Lyme carditis is a reversible cause; temporary pacing bridges instability.")]),
      C("Temporary pacing: transcutaneous and transvenous",
        "<p>Temporary pacing is used only for a <strong>short time</strong> when there is <strong>life-threatening lack of intrinsic pacing</strong>.</p>" +
        tbl(["", "Transcutaneous", "Transvenous"], [
          ["Route", "Pads on the chest", "Temporary pacing wire through a vein"],
          ["Comfort", "<strong>Painful</strong>; often needs sedation", "Not painful; <strong>strict bedrest</strong>"],
          ["Duration", "Minimal time until a transvenous wire is placed", "<strong>&lt; 24 hours</strong>, bridge to the OR for a permanent pacemaker"]]) +
        "<p><strong>Major indications:</strong> bradyarrhythmia causing <strong>hemodynamic instability</strong>; <strong>TAVR</strong>; prophylaxis after <strong>cardiac valve surgery</strong>; <strong>Lyme or Chagas disease</strong> causing interval changes.</p>",
        ["temporary-pacing"],
        [q("Which temporary pacing method is painful and often requires sedation?", "Transcutaneous pacing", ["Transvenous pacing", "Dual-chamber permanent pacing", "Biventricular pacing"], "Pads deliver current through the chest wall, which is painful."),
          q("A transvenous temporary pacing wire is typically left in place for how long?", "Less than 24 hours, as a bridge to a permanent pacemaker", ["About 6 months", "Lifelong", "Exactly 40 days"], "Transvenous wires bridge the patient to the OR for a PPM."),
          q("Which procedure is a listed indication for temporary pacing?", "Transcatheter aortic valve replacement (TAVR)", ["Colonoscopy", "Cataract surgery", "Coronary CT angiography"], "TAVR and the post-op period after valve surgery are listed indications.")],
        [q("A hypotensive patient with complete heart block and HR 30 does not respond to initial measures. Pacer pads are on. What is the next pacing step while arranging definitive care?", "Transcutaneous pacing, then a transvenous wire as a bridge", ["Permanent pacemaker at the bedside", "ICD placement", "Magnet over the chest"], "Transcutaneous pacing is used briefly until a transvenous pacer can be placed.")]),
      C("ICD: what it does",
        "<p>The ICD treats <strong>too fast</strong> a rhythm: it prevents <strong>sudden cardiac death from ventricular tachyarrhythmias</strong>.</p>" +
        "<ul><li>Delivers an <strong>80-joule shock</strong> for monomorphic VT, polymorphic VT, and VF.</li>" +
        "<li>Re-evaluates the rhythm after the shock; if VT/VF persists it <strong>reverses polarity</strong> and shocks again.</li>" +
        "<li>May try <strong>overdrive pacing</strong> of the arrhythmia instead of shocking.</li>" +
        "<li>Delivers a programmed <strong>maximum number of shocks</strong> per episode, then stops; the cardiology office is alerted.</li>" +
        "<li>Discrimination algorithms minimize shocks for AF, sinus tach, and other SVTs. Transvenous ICDs can also pace a bradyarrhythmia and record events.</li></ul>",
        ["icd-function"],
        [q("What energy shock does an ICD deliver for ventricular tachyarrhythmia?", "80 joules", ["2 joules", "360 joules", "1,000 joules"], "ICDs deliver an 80-J internal shock."),
          q("If VT or VF persists after the first ICD shock, what does the device do?", "Reverses polarity between electrodes and shocks again", ["Shuts off permanently", "Switches to asynchronous atrial pacing only", "Waits 24 hours before re-evaluating"], "Subsequent shocks use reversed polarity."),
          q("Besides shocking, which ICD therapy may terminate VT?", "Overdrive pacing", ["Magnet mode", "Rate-response sensor", "Generator change"], "The ICD may overdrive pace the arrhythmia rather than shock.")],
        [q("A patient with an ICD has a run of monomorphic VT at night. His device log shows rapid pacing ended the rhythm without a shock. What happened?", "The ICD overdrive-paced the VT", ["The ICD malfunctioned", "A magnet suspended the device", "The ICD only records and cannot treat"], "ICDs can overdrive pace before resorting to a shock.")]),
      C("ICD secondary prophylaxis",
        "<p><strong>Secondary prophylaxis</strong> = the patient has <strong>already survived</strong> the event.</p>" +
        hy("ICDs are <strong>first-line therapy for survivors of VT or VF arrest</strong> that was <strong>not caused by a completely reversible factor</strong>.") +
        "<ul><li>Trials in survivors of life-threatening ventricular arrhythmias show ICD is <strong>superior to antiarrhythmic drugs</strong> (data less robust for women and the elderly).</li>" +
        "<li>Controversial: VT arrest from MI that is then stented, or VF from a QT-prolonging drug that is then stopped, may have a completely reversible cause.</li></ul>",
        ["icd-secondary-prophylaxis"],
        [q("What is the secondary-prevention indication for an ICD?", "Survivor of VT or VF arrest not due to a completely reversible cause", ["LVEF 50% with palpitations", "Any patient with sinus bradycardia", "First-degree AV block"], "Secondary prophylaxis: survivors of VT/VF arrest without a completely reversible cause."),
          q("For survivors of life-threatening ventricular arrhythmia, ICD therapy compared with antiarrhythmic drugs is:", "Superior", ["Inferior", "Equivalent in every trial", "Never studied"], "Multiple trials showed ICD superiority over antiarrhythmics.")],
        [q("A 58-year-old is resuscitated from VF arrest. Workup finds no acute MI, electrolyte problem, or culprit drug. Best long-term therapy?", "ICD placement for secondary prophylaxis", ["Permanent pacemaker", "Amiodarone alone without a device", "Observation"], "VF survivor without a reversible cause → ICD."),
          q("A patient had VF arrest caused by a QT-prolonging medication, which was stopped; QT normalized. Why is ICD placement debated here?", "The cause may be completely reversible", ["ICDs cannot treat VF", "QT prolongation contraindicates ICDs", "She needs a pacemaker instead"], "Secondary prophylaxis requires that the event was not due to a completely reversible factor.")]),
      C("ICD primary prophylaxis",
        "<p><strong>Primary prophylaxis</strong> = high risk, <strong>no</strong> prior arrest. Class I indications:</p>" +
        tbl(["Indication", "Condition"], [
          ["<strong>LVEF ≤ 30%</strong>", "If due to MI, at least <strong>40 days post-MI</strong>"],
          ["<strong>LVEF ≤ 35%</strong> with <strong>NYHA class II–III</strong>", "If due to prior MI, at least 40 days post-MI"],
          ["LVEF ≤ 40% from prior MI", "With <strong>inducible VT/VF on EP study</strong>"],
          ["Structural heart disease", "With <strong>sustained VT</strong>"],
          ["Syncope of undetermined origin", "With inducible VT/VF on EP study"]]) +
        hy("Remember the number: an ICD is indicated for an <strong>EF of 30% or less</strong> (wait 40 days after an MI).") +
        "<p>Class IIa examples (notes): HCM with major risk factors, ARVD/C, long QT or CPVT with syncope/VT on beta blockers, Brugada with syncope/VT, cardiac sarcoid/giant cell myocarditis/Chagas, awaiting transplant.</p>",
        ["icd-primary-ef30", "icd-primary-other"],
        [q("At what LVEF is an ICD indicated for primary prevention regardless of NYHA class?", "≤ 30%", ["≤ 50%", "≤ 45%", "≤ 55%"], "LVEF ≤ 30% (≥ 40 days post-MI if ischemic) is a class I indication."),
          q("After an MI, how long should you wait before placing a primary-prevention ICD for low EF?", "At least 40 days", ["24 hours", "7 days", "1 year"], "Primary-prevention ICD for post-MI low EF requires at least 40 days post-MI."),
          q("LVEF ≤ 35% qualifies for a primary-prevention ICD when accompanied by:", "NYHA class II or III symptoms", ["NYHA class I with no symptoms", "A normal EP study", "First-degree AV block"], "LVEF ≤ 35% with NYHA II–III is class I.")],
        [q("Three months after an anterior MI, a patient on optimal therapy has an echo EF of 25% and no history of arrhythmia. Which device is indicated?", "ICD for primary prevention", ["Permanent pacemaker", "No device; repeat echo in 5 years", "Temporary transvenous pacer"], "EF ≤ 30% more than 40 days after MI → primary-prevention ICD."),
          q("Ten days after an MI, a patient's EF is 28%. The family asks for an ICD now. Best response?", "Reassess after at least 40 days post-MI before primary-prevention ICD", ["Place the ICD today", "A pacemaker is indicated instead", "ICDs are never used after MI"], "The ischemic low-EF indication requires waiting at least 40 days.")]),
      C("Pacemaker vs ICD side by side",
        tbl(["", "Pacemaker (PPM)", "ICD"], [
          ["Problem treated", "<strong>Bradyarrhythmia</strong> / conduction disease", "<strong>Ventricular tachyarrhythmia</strong> (VT/VF) and sudden death"],
          ["Key indications", "Symptomatic SSS, CHB, 2nd-degree type II, long pauses, AV node ablation, CRT", "Secondary: VT/VF arrest survivor; primary: <strong>EF ≤ 30%</strong> (or ≤ 35% + NYHA II–III)"],
          ["Therapy", "Pacing impulses", "80-J shocks, overdrive pacing; can pace bradycardia"],
          ["Leads", "Pacing leads (1, 2, or 3)", "Shocking lead to the ventricle (transvenous or subcutaneous)"]]) +
        hy("A patient who needs both should get <strong>one combined device</strong> (ICD or CRT device with pacing) so everything runs off <strong>one pulse generator</strong>."),
        ["ppm-vs-icd-comparison"],
        [q("Which device primarily prevents sudden cardiac death from ventricular arrhythmias?", "Implantable cardioverter-defibrillator", ["Single-chamber pacemaker", "Transcutaneous pacer", "Holter monitor"], "ICDs treat VT/VF; pacemakers treat bradycardia."),
          q("If a patient needs both pacing and an ICD, what is recommended?", "One combined device running off a single pulse generator", ["Two separate generators in two pockets", "Pacemaker now, ICD never", "Subcutaneous ICD plus transcutaneous pacing"], "Devices should be combined so all run off one generator.")],
        [q("Patient A: symptomatic complete heart block, EF 60%. Patient B: ischemic cardiomyopathy, EF 25%, 6 months post-MI. Which pairing is correct?", "A: pacemaker; B: ICD", ["A: ICD; B: pacemaker", "Both: pacemaker", "Both: no device"], "Bradyarrhythmia → PPM; EF ≤ 30% → ICD.")])
    ]),

    /* ---------- 2 ---------- */
    S("02-pacemaker-code", "2. Letters of the pacemaker code", "Objective 2. Slides 14–17.", [
      C("Letters 1 and 2: chamber paced, chamber sensed",
        "<p>Electrophysiologists use a <strong>5-letter code</strong> for the pacing mode; usually only the <strong>first 3</strong> letters are documented.</p>" +
        tbl(["Position", "Meaning", "Options"], [
          ["<strong>1st</strong>", "Chamber <strong>paced</strong>", "A = atria, V = ventricle, D = dual (both)"],
          ["<strong>2nd</strong>", "Chamber <strong>sensed</strong>", "A, V, D, or <strong>O = none</strong>"]]),
        ["code-letter-1", "code-letter-2"],
        [q("The first letter of a pacemaker code represents:", "The chamber paced", ["The chamber sensed", "The response to sensing", "Rate modulation"], "Position 1 = chamber paced."),
          q("The second letter of a pacemaker code represents:", "The chamber sensed", ["The chamber paced", "Multisite pacing", "Battery status"], "Position 2 = chamber sensed."),
          q("In the second position, the letter O means:", "No chamber is sensed", ["Overdrive pacing", "Only the atrium is sensed", "Oversensing"], "O = none.")],
        [q("A device report reads “VOO.” Which chamber does it pace and what does it sense?", "Paces the ventricle and senses nothing", ["Paces the atrium and senses the ventricle", "Paces both chambers and senses both", "Senses the ventricle and never paces"], "V = ventricle paced; O = no sensing; O = no response (continuous).")]),
      C("Letter 3: response to sensed activity",
        tbl(["3rd letter", "Response"], [
          ["<strong>I</strong> = inhibited", "Device is <strong>inhibited</strong> if it senses the patient’s own beat"],
          ["<strong>T</strong> = triggered", "Device is <strong>triggered</strong> by the native atrial beat (additive depolarization)"],
          ["<strong>D</strong> = dual", "Triggered after a sensed atrial event, inhibited after a sensed ventricular event"],
          ["<strong>O</strong> = none", "Usually means the device is <strong>pacing continuously</strong> (asynchronous)"]]) +
        mn("<strong>P-S-R</strong>: <strong>P</strong>aced, <strong>S</strong>ensed, <strong>R</strong>esponse = letters 1, 2, 3 in order."),
        ["code-letter-3"],
        [q("The third letter of a pacemaker code represents:", "The response to sensed native activity", ["The chamber paced", "The chamber sensed", "Multisite pacing"], "Position 3 = response mode."),
          q("A third letter of I means the pacemaker:", "Is inhibited when it senses a native beat", ["Is triggered by every native beat", "Paces continuously", "Has rate response"], "I = inhibited."),
          q("A third letter of O usually means the device:", "Paces continuously regardless of native activity", ["Is inhibited by atrial beats", "Is turned off", "Only senses"], "O response = none; the device paces continuously."),
          q("A third letter of D means the pacemaker is:", "Triggered after a sensed atrial event and inhibited after a sensed ventricular event", ["Inhibited by every sensed beat", "Pacing continuously", "Dual-chamber paced only"], "D response combines triggering and inhibition.")],
        [q("A pacemaker in VVI mode senses an intrinsic ventricular beat. What does it do?", "Withholds its ventricular impulse (inhibited)", ["Fires immediately on top of the beat", "Shocks the patient", "Paces the atrium instead"], "VVI: pace V, sense V, inhibited by sensed native beats.")]),
      C("Letters 4 and 5: rate modulation and multisite pacing",
        tbl(["Position", "Meaning", "Options"], [
          ["<strong>4th</strong>", "<strong>Rate modulation</strong>: automatic response to chronotropic incompetence", "<strong>R</strong> = rate-response (“physiologic”) pacing; O = none"],
          ["<strong>5th</strong>", "<strong>Multisite pacing</strong> (CRT devices): sites stimulated", "A, V, D, O"]]),
        ["code-letter-4", "code-letter-5"],
        [q("The fourth letter R in a pacemaker code means:", "Rate-response (physiologic) pacing", ["Right ventricle paced", "Reversed polarity", "Reprogrammed"], "Position 4 = rate modulation; R = rate response."),
          q("Rate modulation addresses which problem?", "Chronotropic incompetence", ["Lead fracture", "Pocket infection", "Oversensing from cautery"], "Rate response raises the paced rate when the heart cannot increase its own rate."),
          q("The fifth letter of a pacemaker code refers to:", "Multisite pacing, as in CRT", ["Battery life", "Chamber sensed", "Shock energy"], "Position 5 = multisite pacing sites.")],
        [q("An active 70-year-old with chronotropic incompetence gets winded climbing stairs because his paced rate never rises. Which code letter would address this?", "R in the fourth position", ["O in the second position", "I in the third position", "A in the first position"], "The 4th-position R adds rate-responsive pacing.")]),
      C("Decoding a code in a scenario",
        "<p>Read left to right: <strong>paced → sensed → response → rate → multisite</strong>.</p>" +
        tbl(["Code", "Paced", "Sensed", "Response"], [
          ["<strong>ADI</strong> (slide example)", "Right atrium", "Atria and ventricle", "Atrial impulse inhibited when a native depolarization is sensed"],
          ["VVI", "Ventricle", "Ventricle", "Inhibited"],
          ["DDD", "Both", "Both", "Dual"],
          ["VOO / DOO", "V / both", "None", "None: continuous asynchronous pacing"]]) +
        hy("Slide question: in ADI, if the atria fail to depolarize on their own, the device is <strong>not inhibited</strong> and <strong>paces the right atrium</strong>."),
        ["code-scenario"],
        [q("What does a DDD pacemaker pace and sense?", "Paces both chambers and senses both chambers", ["Paces the atrium only and senses nothing", "Paces the ventricle only and senses the atrium", "Senses both but never paces"], "D = dual in positions 1 and 2."),
          q("In an ADI pacemaker, which chamber is paced?", "The right atrium", ["The right ventricle", "The left ventricle", "No chamber"], "First letter A = atrium paced.")],
        [q("A patient with an ADI pacemaker has a pause in which the atria fail to depolarize on their own. What will the device do?", "Pace the right atrium", ["Remain inhibited and do nothing", "Deliver an 80-J shock", "Pace only the left ventricle"], "Without a sensed native event, inhibition does not occur, so the device paces the atrium."),
          q("A note lists a patient’s device as “VVIR.” Which statement is correct?", "Paces and senses the ventricle, inhibited by native beats, with rate response", ["Paces the atrium, senses the ventricle, triggered mode", "Paces continuously with no sensing", "An ICD set to shock VF only"], "V-V-I-R: paced V, sensed V, inhibited, rate-responsive.")])
    ]),

    /* ---------- 3a ---------- */
    S("03a-device-placement", "3a. Device parts and placement procedure", "Objective 3: procedure. Slides 8–12, 20–24, 29–30.", [
      C("Device parts: pulse generator and leads",
        "<ul><li><strong>Pulse generator</strong> = battery and “brain”; sits in a <strong>subcutaneous pocket</strong> in the chest wall and creates the impulse.</li>" +
        "<li><strong>Leads</strong> carry the impulse to the heart (or sense only). Most are <strong>transvenous</strong> via the <strong>subclavian vein</strong> to the right heart.</li>" +
        "<li><strong>Epicardial leads</strong> are surgically attached to the heart when there is an anatomic reason to avoid veins, e.g. <strong>venous stenosis</strong>.</li></ul>" +
        tbl(["Permanent pacemaker", "Leads"], [
          ["Single chamber", "1 lead: right ventricle"],
          ["Dual chamber", "2 leads: right atrium + right ventricle"],
          ["<strong>Biventricular (CRT)</strong>", "3 leads: RA + RV + LV; resynchronization for <strong>HFrEF</strong>"]]) +
        "<p>Generator modes: <strong>asynchronous</strong> (fixed rate, ignores native activity; small risk of a lethal arrhythmia if the impulse hits the <strong>T wave’s vulnerable period</strong>) vs <strong>synchronous/demand</strong> (paces only if no intrinsic depolarization is sensed).</p>",
        ["device-parts", "permanent-types"],
        [q("Where does the pulse generator of a permanent pacemaker sit?", "In a subcutaneous pocket in the chest wall", ["Inside the right ventricle", "In the abdominal cavity", "Inside the subclavian vein"], "The generator lives in a chest-wall pocket."),
          q("How many leads does a biventricular (CRT) pacemaker have?", "Three: RA, RV, and LV", ["One: RV", "Two: RA and RV", "Four: one per chamber"], "Biventricular devices pace RA, RV, and LV."),
          q("When are epicardial leads used instead of transvenous leads?", "When anatomy such as venous stenosis prevents transvenous placement", ["In every first-time implant", "Only for temporary pacing", "Only in subcutaneous ICDs"], "Epicardial leads are reserved for anatomic reasons to avoid veins."),
          q("What is the risk of asynchronous (fixed-rate) pacing?", "An impulse landing on the T wave’s vulnerable period can trigger a lethal arrhythmia", ["Failure to pace during asystole", "Rapid battery charging", "Lead erosion through the skin"], "Asynchronous pacing ignores native beats and can fire on the T wave.")],
        [q("A patient with HFrEF and a wide, dyssynchronous ventricular contraction is referred for a device that paces both ventricles to improve cardiac output. Which device?", "Biventricular pacemaker (cardiac resynchronization therapy)", ["Single-chamber RV pacemaker", "Transcutaneous pacer", "Implantable loop recorder"], "CRT uses RA, RV, and LV leads to resynchronize contraction.")]),
      C("Lead complications",
        "<p>Transvenous leads carry relatively small risks:</p>" +
        "<ul><li><strong>Trauma</strong> to cardiac structures at insertion: <strong>tamponade, perforation</strong></li>" +
        "<li><strong>Infection</strong>: bacteremia can seed a small clot on the leads</li>" +
        "<li><strong>Venous thrombosis</strong> → subclavian vein occlusion</li>" +
        "<li><strong>Tricuspid valve injury</strong> → tricuspid regurgitation</li></ul>",
        ["lead-complications"],
        [q("Which valve lesion can result from a transvenous pacemaker lead?", "Tricuspid regurgitation", ["Aortic stenosis", "Mitral stenosis", "Pulmonic stenosis"], "The lead crosses the tricuspid valve and can injure it."),
          q("Which venous complication is associated with transvenous leads?", "Subclavian vein thrombosis and occlusion", ["Portal vein thrombosis", "Varicose veins of the legs", "Renal vein thrombosis"], "Lead-associated thrombosis can occlude the subclavian vein.")],
        [q("A few years after pacemaker placement, a patient has new arm swelling on the device side. Which lead complication is most likely?", "Subclavian venous thrombosis", ["Tricuspid stenosis", "Lead fracture causing shocks", "Pocket erosion from weight loss"], "Venous thrombosis and subclavian occlusion are a listed lead risk."),
          q("Shortly after a lead is placed, a patient becomes hypotensive with JVD and muffled heart sounds. Which insertion complication is suspected?", "Cardiac perforation with tamponade", ["Pocket infection", "Battery depletion", "Oversensing"], "Trauma at insertion can cause perforation and tamponade.")]),
      C("Permanent pacemaker placement procedure",
        "<ol><li>A <strong>cardiac electrophysiologist</strong> is consulted.</li>" +
        "<li>Can be same-day surgery: keep <strong>NPO after midnight</strong> if admitted; <strong>hold anticoagulant and antiplatelet</strong> medications.</li>" +
        "<li>Done in the <strong>cath lab under conscious sedation</strong>; prep, drape, <strong>local anesthetic</strong> to the chest wall.</li>" +
        "<li>Chest veins accessed directly or by the <strong>Seldinger technique</strong> (guidewire-based vascular access, 1953).</li>" +
        "<li>Leads run to the right heart via the <strong>cephalic, axillary, or subclavian</strong> veins under <strong>fluoroscopy</strong>.</li>" +
        "<li>A <strong>subcutaneous pocket</strong> is created between the skin and the <strong>pectoralis</strong> muscle for the generator.</li>" +
        "<li>Most patients go home <strong>that day or the next</strong>.</li></ol>",
        ["ppm-procedure"],
        [q("Who places a permanent pacemaker and where?", "An electrophysiologist in the cath lab under conscious sedation", ["A general surgeon under general anesthesia in the OR", "An emergency physician at the bedside", "A radiologist in the MRI suite"], "PPMs are typically placed by EP in the cath lab under conscious sedation."),
          q("Which vascular access technique is used to reach the chest veins for leads?", "Seldinger technique", ["Cutdown of the femoral artery", "Intraosseous access", "Lumbar puncture"], "Veins are accessed directly or with Seldinger’s guidewire technique."),
          q("Between which layers is the generator pocket created?", "Between the skin and the pectoralis muscle", ["Within the pericardial sac", "Beneath the diaphragm", "Inside the pleural space"], "The pocket is subcutaneous, above the pectoralis."),
          q("Which imaging guides lead placement?", "Fluoroscopy", ["MRI", "Transcranial Doppler", "Nuclear stress imaging"], "Leads are run under fluoroscopic guidance.")],
        [q("An inpatient on apixaban and aspirin is scheduled for pacemaker placement tomorrow. Which pre-procedure orders are appropriate?", "NPO after midnight and hold anticoagulant and antiplatelet medications", ["Continue all blood thinners and feed normally", "Start heparin infusion before the procedure", "Schedule general anesthesia and a thoracotomy"], "Keep NPO for possible same-day placement and hold AC/antiplatelets.")]),
      C("ICD placement: transvenous and subcutaneous",
        "<ul><li>ICDs have a <strong>pulse generator</strong> and a <strong>shocking lead</strong> to the ventricle.</li>" +
        "<li>Most are <strong>transvenous (TV-ICD)</strong>; technique is <strong>very similar to a pacemaker</strong>.</li>" +
        "<li><strong>Subcutaneous ICD (S-ICD)</strong>, FDA approved 2012: shocking lead <strong>tunneled to the sternum</strong>; <strong>limited pacing</strong> capability.</li>" +
        "<li>Early ICDs (1980s) were bulky, placed in the <strong>abdomen</strong> with a <strong>thoracotomy</strong> for epicardial leads.</li></ul>",
        ["icd-procedure"],
        [q("Where is the shocking lead of a subcutaneous ICD placed?", "Tunneled to the sternum", ["Through the subclavian vein into the RV", "Into the coronary sinus", "Sutured to the left atrium"], "S-ICD leads are tunneled subcutaneously to the sternum."),
          q("What is a limitation of a subcutaneous ICD compared with a transvenous ICD?", "Limited pacing capability", ["It cannot shock VF", "It requires a thoracotomy", "It must be placed in the abdomen"], "S-ICDs have limited pacing.")],
        [q("A patient needs an ICD and also has symptomatic bradycardia requiring ongoing pacing. Which ICD type is the poorer choice?", "Subcutaneous ICD", ["Transvenous ICD with pacing", "CRT-defibrillator", "Dual-chamber transvenous ICD"], "The S-ICD has limited pacing, so it suits patients who do not need pacing.")])
    ]),

    /* ---------- 3b ---------- */
    S("03b-battery-life-replacement", "3b. Battery life and device replacement", "Objective 3: battery life. Slides 10, 28, 50–51.", [
      C("Battery life",
        tbl(["Device", "Battery life"], [
          ["Pacemaker", "Typically <strong>~10 years</strong>"],
          ["Modern ICD", "Average <strong>~8 years</strong> (early ICDs: about 2 years)"],
          ["Either (summary)", "<strong>About 7–10 years</strong>, depending on how much the device is used"]]) +
        hy("Heavy use (frequent pacing or shocks) drains the battery faster."),
        ["battery-life"],
        [q("What is the typical battery life of a permanent pacemaker?", "About 10 years", ["About 6 months", "About 2 years", "About 30 years"], "PPM batteries typically last about 10 years."),
          q("What is the average battery life of a modern ICD?", "About 8 years", ["About 1 year", "About 20 years", "Indefinite"], "Modern ICDs average about 8 years; early ones lasted about 2."),
          q("What determines where within 7–10 years a device battery runs out?", "How much the device is used", ["The patient’s height", "Whether the patient flies", "Which arm the patient uses"], "Battery life depends on device usage.")],
        [q("A 30-year-old asks whether her new ICD will ever need surgery again. Best answer?", "The generator will likely need replacing in roughly 8 years, sooner with heavy use", ["Never; ICD batteries last for life", "Every 6 months", "Only if she has an MRI"], "ICD batteries average ~8 years, varying with usage.")]),
      C("Generator change and lead problems",
        "<ul><li>As the battery dwindles, a pacemaker <strong>begins slowing or changing its pacing mode</strong>.</li>" +
        "<li>Then a <strong>generator change</strong> is scheduled: <strong>replaces the pocket device but leaves the wires alone</strong>.</li>" +
        "<li>Leads may <strong>break/fracture</strong> → device malfunction → the <strong>lead must be replaced</strong>.</li></ul>",
        ["generator-change", "lead-fracture"],
        [q("How does a pacemaker behave as its battery dwindles?", "It begins slowing or changing its pacing mode", ["It speeds up to 150 bpm", "It delivers shocks", "It becomes MRI-safe"], "Slowing or mode change signals battery depletion."),
          q("What does a generator change replace?", "The pocket device only; the leads are left in place", ["Both leads and generator", "The leads only", "The tricuspid valve"], "Generator change swaps the pulse generator but leaves the wires."),
          q("What is required when a pacemaker lead fractures?", "Replacement of the lead", ["A magnet over the device", "A generator change only", "Antibiotics alone"], "A fractured lead must be replaced.")],
        [q("Nine years after implant, a patient’s pacemaker rate is slowing at a routine check. What is the expected plan?", "Schedule a generator change that leaves the leads in place", ["Explant all leads and the generator", "Place an S-ICD", "No action; slowing is normal aging"], "Battery depletion → generator change.")])
    ]),

    /* ---------- 3c ---------- */
    S("03c-device-precautions", "3c. Precautions for patients with devices", "Objective 3: precautions. Slides 36–39, 47, 55–56.", [
      C("Identification and MRI",
        "<ul><li>Patients should carry a <strong>wallet card</strong> identifying their device.</li>" +
        "<li><strong>Radio-opaque codes</strong> on the pulse generator show on <strong>CXR</strong> and help identify make and model.</li>" +
        "<li>Patients with PPMs and ICDs generally <strong>cannot have MRIs</strong>; some devices are MRI-safe, so <strong>check with cardiology</strong>.</li></ul>",
        ["wallet-card-cxr", "mri-precaution"],
        [q("How can a device’s make and model be identified on imaging?", "Radio-opaque codes on the pulse generator seen on CXR", ["Echo Doppler signature", "Lead color on CT", "Serum troponin pattern"], "Radio-opaque generator codes appear on chest x-ray."),
          q("What should every patient with a pacemaker or ICD carry?", "A wallet card identifying the device", ["A personal magnet", "A portable defibrillator", "A copy of their echo"], "A wallet card identifies the device.")],
        [q("A patient with an ICD needs imaging for back pain, and the ordering clinician requests an MRI. What is the correct step?", "Check with cardiology whether the specific device is MRI-safe", ["Proceed; all ICDs are MRI-safe", "Remove the ICD first", "Place a magnet and proceed without checking"], "Most devices exclude MRI; some are safe, so confirm with cardiology.")]),
      C("ACLS and CPR with a device",
        "<ul><li>ACLS and external defibrillation are <strong>safe with a pacemaker</strong>: place pads/paddles <strong>10 cm away from the pulse generator</strong>.</li>" +
        "<li>With an <strong>ICD</strong>, the device should act to defibrillate. Rescuers can safely do <strong>CPR</strong>; current may cause mild discomfort, but no serious rescuer injury has been reported.</li>" +
        "<li>If external defibrillation is needed, again keep pads <strong>10 cm</strong> from the generator.</li></ul>",
        ["acls-pad-distance", "cpr-icd"],
        [q("How far from the pulse generator should external defibrillation pads be placed?", "10 cm", ["1 cm", "50 cm", "Directly over it"], "Keep pads/paddles 10 cm away from the generator."),
          q("Is CPR safe for rescuers when the patient has an ICD that may fire?", "Yes; at most mild discomfort, no serious rescuer injury reported", ["No; CPR is contraindicated", "Only with lead-lined gloves", "Only after the ICD is explanted"], "CPR is safe; some current may cause mild discomfort.")],
        [q("A patient with a left-chest pacemaker goes into VF. Where should the defibrillator pads go?", "In standard positions but at least 10 cm from the generator", ["Directly over the generator", "No defibrillation; pacemakers prevent it", "On the back only, over the spine"], "Defibrillation is safe; keep pads 10 cm away.")]),
      C("Central lines and devices",
        "<ul><li><strong>Guidewires</strong> used for central lines can <strong>short out or dislodge</strong> transvenous ICD/pacemaker wires and cause irreversible damage.</li>" +
        "<li>Dislodgement risk is <strong>highest in the first 3 months</strong> after insertion.</li></ul>",
        ["central-line-precaution"],
        [q("When is the risk of dislodging a pacemaker lead with a central-line guidewire highest?", "Within the first 3 months after insertion", ["After 10 years", "Only during battery change", "Only with epicardial leads"], "Leads are least secure early, especially the first 3 months.")],
        [q("Six weeks after a dual-chamber pacemaker, a patient needs a central line. What is the main device concern?", "The guidewire could dislodge or short out the new leads", ["The line will drain the battery", "The magnet in the line will trigger shocks", "Central lines are always safe with devices"], "Guidewires can damage leads, especially within 3 months of insertion.")]),
      C("When an ICD fires; inappropriate shocks; driving",
        "<ul><li>Patients are told to go to the <strong>ER if their ICD fires</strong>; they are generally <strong>admitted</strong> to correct reversible causes and see cardiology; order a <strong>device interrogation</strong>.</li>" +
        "<li><strong>Inappropriate shocks</strong> are not triggered by true VT/VF; typically an <strong>atrial arrhythmia accelerates the ventricular rate</strong> past the shock limit (one trial: 11.5% of patients; 31.2% of all shocks inappropriate).</li>" +
        "<li>ICD shocks <strong>hurt</strong>.</li>" +
        "<li>Most cardiologists recommend being <strong>shock-free for 6 months before driving</strong>.</li></ul>",
        ["icd-shock-er", "inappropriate-shocks", "driving-restriction"],
        [q("What is the most typical cause of an inappropriate ICD shock?", "An atrial arrhythmia accelerating the ventricular rate past the shock limit", ["True ventricular fibrillation", "A magnet held over the device", "Normal sinus rhythm at 70 bpm"], "Atrial arrhythmias with fast ventricular rates cause most inappropriate shocks."),
          q("How long should a patient with an ICD generally be shock-free before driving?", "Six months", ["One week", "Two years", "No restriction"], "Most cardiologists recommend 6 shock-free months."),
          q("What should a patient do when their ICD delivers a shock?", "Go to the ER", ["Ignore it if they feel fine", "Place a magnet over it at home", "Wait for the next 6-month check"], "Patients go to the ER; usually admitted and the device interrogated.")],
        [q("A patient with an ICD and known AF with rapid ventricular response is shocked while awake and alert, with no syncope. Which explanation is most likely?", "Inappropriate shock from AF with a fast ventricular rate", ["Appropriate shock for VF", "Lead infection", "Normal battery check"], "Rapid atrial arrhythmias commonly trigger inappropriate shocks."),
          q("Two months after an appropriate ICD shock, a patient asks if he can resume driving. Best counsel?", "Most cardiologists recommend being shock-free for 6 months first", ["He may drive immediately", "He can never drive again", "Driving is fine if he carries a magnet"], "Standard counsel: 6 shock-free months before driving.")])
    ]),

    /* ---------- 3d ---------- */
    S("03d-device-testing-follow-up", "3d. Testing: interrogation and follow-up", "Objective 3: testing. Slides 18, 25, 36, 46.", [
      C("Device interrogation",
        "<ul><li><strong>Interrogation</strong> is done by the <strong>manufacturer’s representative</strong> in the hospital or by the <strong>cardiologist in the office</strong>.</li>" +
        "<li>Determines the <strong>rhythm during events</strong>, e.g. a <strong>syncopal episode</strong>.</li>" +
        "<li>Not an event monitor, but can show <strong>time spent in atrial fibrillation</strong>.</li>" +
        "<li>Order an interrogation after an <strong>ICD shock</strong>, and a closer one after surgery if the device paced or shocked.</li>" +
        "<li>Devices can be <strong>reprogrammed in the office</strong> while implanted.</li></ul>",
        ["interrogation"],
        [q("Who typically performs a pacemaker interrogation?", "The manufacturer’s representative in the hospital or the cardiologist in the office", ["The radiologist on CXR", "The pharmacist", "The patient at home with a magnet"], "Interrogations are done by the rep or the cardiologist."),
          q("Which information can a pacemaker interrogation provide?", "The rhythm during an event and time spent in atrial fibrillation", ["Coronary artery stenosis severity", "Ejection fraction", "Serum potassium"], "Interrogation shows event rhythms and AF burden.")],
        [q("A patient with a pacemaker presents after a syncopal episode. Which test quickly shows his rhythm at the time of the event?", "Device interrogation", ["Brain MRI", "Exercise treadmill test", "Coronary CT angiography"], "Interrogation records the rhythm during events such as syncope.")]),
      C("Follow-up schedule after implant",
        tbl(["When", "Visit"], [
          ["<strong>1–2 weeks</strong>", "Chest <strong>wound check</strong>"],
          ["<strong>1 month</strong>", "Interrogation"],
          ["<strong>3 months</strong>", "Interrogation"],
          ["<strong>Every 6 months</strong>", "Interrogation thereafter"]]) +
        mn("<strong>Wound at 1–2 weeks, then 1 – 3 – every 6</strong> months for interrogation."),
        ["follow-up-schedule"],
        [q("When is the first post-implant visit and what is checked?", "At 1–2 weeks, a chest wound check", ["At 6 months, a battery change", "At 1 day, an MRI", "At 1 year, a lead replacement"], "The first visit is a wound check at 1–2 weeks."),
          q("After the 1- and 3-month interrogations, how often is a pacemaker interrogated?", "Every 6 months", ["Every week", "Every 5 years", "Only when symptomatic"], "Then interrogation every 6 months.")],
        [q("A patient had a pacemaker placed 4 weeks ago; the wound was checked at week 2. What is due now?", "Pacemaker interrogation at 1 month", ["Generator change", "Wound check only, no interrogation until 1 year", "Lead extraction"], "Schedule: wound 1–2 weeks, interrogation at 1 month, 3 months, then every 6 months.")])
    ]),

    /* ---------- 4 ---------- */
    S("04-perioperative-management", "4. Perioperative management of a cardiac device", "Objective 4. Slides 40–46.", [
      C("Electrocautery EMI and pacemaker oversensing",
        "<ul><li><strong>Electrocautery</strong> creates <strong>electromagnetic interference (EMI)</strong> the pacemaker reads as cardiac electrical activity.</li>" +
        "<li><strong>Oversensing</strong>: the pacemaker thinks the heart is beating and <strong>does not fire</strong>.</li>" +
        "<li>Result in a <strong>pacemaker-dependent</strong> patient: profound <strong>bradycardia/asystole</strong> during surgery.</li>" +
        "<li>Other devices such as <strong>nerve stimulators</strong> can also produce enough EMI.</li></ul>",
        ["emi-oversensing-ppm"],
        [q("What is pacemaker “oversensing” during surgery?", "EMI is read as native cardiac activity, so the pacemaker withholds pacing", ["The pacemaker paces too fast", "The leads physically dislodge", "The battery overheats"], "Oversensing inhibits pacing because the device thinks the heart is beating."),
          q("Which surgical device is the most significant source of EMI for pacemakers?", "Electrocautery", ["Pulse oximeter", "Blood pressure cuff", "Suction canister"], "Electrocautery is the main problem; nerve stimulators can also interfere.")],
        [q("During a cholecystectomy with electrocautery, a pacemaker-dependent patient suddenly becomes asystolic on the monitor. What is the most likely mechanism?", "Oversensing of cautery EMI inhibiting the pacemaker", ["Inappropriate ICD shock", "Lead perforation", "Rate-response overpacing"], "EMI is oversensed, the PPM withholds pacing, and the dependent patient becomes asystolic.")]),
      C("ICD hazard during surgery",
        "<ul><li>Cautery EMI can be <strong>oversensed by an ICD</strong> as VF → <strong>inappropriate shock</strong> during surgery.</li>" +
        "<li>Unwanted patient movement from a shock endangers the patient and staff.</li>" +
        "<li>So the <strong>ICD should be disabled before surgery</strong>, and the patient has <strong>defibrillator pads in place</strong>.</li></ul>",
        ["icd-surgery-hazard"],
        [q("What is the main intraoperative danger of electrocautery in a patient with an ICD?", "Oversensed EMI triggers an inappropriate shock", ["The ICD stops pacing permanently", "The ICD battery explodes", "The leads conduct cautery current to the brain"], "EMI can be interpreted as VF, causing an inappropriate shock."),
          q("What must be done with an ICD before surgery with electrocautery?", "Disable it and apply external defibrillator pads", ["Leave it fully active", "Explant it", "Turn up its shock energy"], "Disable the ICD and place pads for backup defibrillation.")],
        [q("A patient with an ICD is scheduled for a laparotomy. Why is the ICD disabled preoperatively?", "To prevent an inappropriate shock from oversensed cautery EMI that could move the patient during surgery", ["To save battery life", "Because anesthesia drugs block ICD function", "Because ICDs make cautery ineffective"], "An intraoperative shock creates a hazard to the patient and surgical staff.")]),
      C("Pre-op planning",
        "<ul><li>When surgery is planned, especially <strong>above the umbilicus</strong>, in a patient with a PPM or ICD, <strong>cardiology should assist in pre-op planning</strong>.</li>" +
        "<li>Plan the device approach: magnet or reprogramming (pacemaker → asynchronous pacing; ICD → therapies suspended).</li>" +
        "<li>Apply <strong>pacer/defib pads before prepping and draping</strong>, so an external defibrillator/pacer can shock or pace through them if needed.</li></ul>",
        ["preop-cardiology", "pads-before-draping"],
        [q("Surgery in which location raises the most concern and warrants cardiology pre-op planning in a device patient?", "Above the umbilicus", ["On the toes", "Below the knee", "On the distal forearm only"], "Procedures above the umbilicus are closest to the device and leads."),
          q("When should pacer/defib pads be applied for a device patient in the OR?", "Before prepping and draping", ["Only after a problem occurs", "After the skin is closed", "Pads are not used"], "Pads go on before prepping so they are ready in an emergency.")],
        [q("A patient with an ICD is scheduled for an elective upper-abdominal surgery next week. What is the most important pre-op step related to the device?", "Involve cardiology in pre-op planning for the device", ["No action needed", "Cancel surgery permanently", "Ask the patient to bring a magnet from home"], "Cardiology should help plan device management for surgery above the umbilicus.")]),
      C("Post-op device care",
        "<ul><li>Post-op the device is <strong>reprogrammed by cardiology</strong> or the <strong>magnet is removed</strong>.</li>" +
        "<li>Monitor carefully on <strong>telemetry in the PACU or ICU</strong>.</li>" +
        "<li>A <strong>closer interrogation</strong> is needed if surgery was <strong>emergent</strong> or the device <strong>delivered shocks or pacing</strong> during surgery.</li></ul>",
        ["postop-care"],
        [q("What is done with a device immediately after surgery?", "Reprogram it or remove the magnet, then monitor on telemetry", ["Leave it disabled until the next annual visit", "Explant it routinely", "Replace the generator"], "Restore normal function and monitor on telemetry."),
          q("Which situation calls for a closer post-op device interrogation?", "Emergent surgery or the device delivered shocks or pacing intraoperatively", ["Any surgery below the knee", "Uneventful elective surgery with the device untouched", "The patient asked for one"], "Emergent cases or intraoperative device activity need closer interrogation.")],
        [q("After emergent abdominal surgery, the anesthesia record shows the ICD-pacemaker delivered pacing during the case. What is needed post-op?", "Restore device settings, telemetry in PACU/ICU, and a closer interrogation by cardiology", ["Discharge home without monitoring", "Leave the magnet on for a week", "No interrogation needed"], "Emergent surgery plus device activity → closer interrogation.")])
    ]),

    /* ---------- 5 ---------- */
    S("05-magnet-response", "5. Magnet over a pacemaker vs an ICD", "Objective 5. Slides 10, 44–45.", [
      C("Magnet over a pacemaker",
        "<ul><li>For most PPMs, a magnet starts <strong>asynchronous pacing at a fixed rate with a fixed AV delay</strong>.</li>" +
        "<li>The PPM simply <strong>paces for the whole procedure</strong>, ignoring EMI, so oversensing cannot inhibit it.</li>" +
        "<li>Caution: at <strong>end of battery life</strong>, the magnet rate may be <strong>inadequate</strong>.</li>" +
        "<li>Asynchronous pacing carries a small risk of firing on the T wave’s vulnerable period.</li></ul>",
        ["magnet-ppm"],
        [q("What does placing a magnet over most pacemakers do?", "Starts asynchronous pacing at a fixed rate with a fixed AV delay", ["Turns the pacemaker off", "Triggers a shock", "Switches to rate-responsive pacing"], "Magnet → asynchronous fixed-rate pacing."),
          q("When might magnet-mode pacing rate be inadequate?", "When the pacemaker is near the end of its battery life", ["When the patient is under general anesthesia", "When the lead is epicardial", "When the patient is in sinus rhythm"], "A depleted battery may produce an inadequate rate.")],
        [q("A pacemaker-dependent patient needs surgery with electrocautery. Which magnet effect protects her?", "Fixed-rate asynchronous pacing that ignores cautery EMI", ["Suspension of all pacing", "Delivery of an 80-J shock", "Inhibition by sensed atrial beats"], "Asynchronous pacing cannot be inhibited by oversensed EMI.")]),
      C("Magnet over an ICD; side-by-side",
        "<ul><li>A magnet <strong>suspends ICD function</strong> (tachyarrhythmia detection and shocks) during surgery.</li>" +
        "<li>Because the ICD cannot shock, <strong>pacer/defib pads</strong> go on the chest before prepping, so an external device can shock or pace.</li></ul>" +
        tbl(["", "Magnet on pacemaker", "Magnet on ICD"], [
          ["Effect", "<strong>Asynchronous</strong> fixed-rate pacing", "<strong>Suspends</strong> shock therapy"],
          ["Purpose in OR", "Prevent oversensing-induced asystole", "Prevent inappropriate shocks"],
          ["Backup", "Watch rate if battery near end", "External pads for defibrillation/pacing"],
          ["After surgery", "Remove magnet / reprogram; telemetry", "Remove magnet / reprogram; telemetry"]]) +
        hy("Magnet: <strong>pacemaker paces</strong> (asynchronously); <strong>ICD stops shocking</strong>."),
        ["magnet-icd", "magnet-comparison"],
        [q("What does a magnet placed over an ICD do?", "Suspends the ICD’s shock function", ["Triggers immediate defibrillation", "Starts asynchronous atrial pacing only", "Drains the battery"], "A magnet suspends ICD therapy during surgery."),
          q("While a magnet suspends an ICD, how is a VF episode treated intraoperatively?", "External defibrillation through pads placed before draping", ["The ICD still shocks automatically", "Intravenous magnesium only", "Remove the leads"], "External pads provide backup defibrillation.")],
        [q("During surgery, a magnet is on a patient’s ICD and he develops VF. What should the team do?", "Defibrillate through the pre-placed external pads", ["Wait for the ICD to shock", "Add a second magnet", "Start transcutaneous pacing only"], "With the ICD suspended, use the external pads."),
          q("A student says a magnet “turns both devices off.” Which correction is right?", "A magnet makes a pacemaker pace asynchronously and suspends ICD shocks", ["A magnet turns both devices off completely", "A magnet makes both devices shock", "A magnet affects only ICDs"], "Pacemaker → asynchronous pacing; ICD → therapy suspended.")])
    ]),

    /* ---------- 6 ---------- */
    S("06-emi-distances", "6. Devices to avoid and safe distances", "Objective 6. Slides 37–38, 48–49.", [
      C("Personal electronics: 6 inches",
        hy("Keep <strong>cell phones, mobile devices, magnets, headphones, and wireless chargers</strong> at least <strong>6 inches (about 15 cm)</strong> from the device site when they are on."),
        ["distance-6-inches"],
        [q("How far should cell phones and headphones be kept from a pacemaker or ICD?", "About 6 inches (15 cm)", ["About 1 inch (2.5 cm)", "About 2 feet (0.6 m)", "About 10 feet (3 m)"], "Personal electronics: 6 inches."),
          q("Which item belongs on the “keep 6 inches away” list?", "Wireless chargers", ["Microwave ovens", "Toasters", "Televisions"], "Phones, mobile devices, magnets, headphones, and wireless chargers.")],
        [q("A patient with a new left-chest pacemaker likes to keep his phone in his left shirt pocket and wear headphones around his neck. Best counsel?", "Keep the phone and headphones at least 6 inches from the device", ["No restrictions apply to phones", "Keep them at least 10 feet away at all times", "Phones are fine but headphones must be avoided completely"], "These items should stay at least 6 inches (15 cm) away.")]),
      C("Security systems",
        "<ul><li>ICDs may <strong>set off airport security alarms</strong>.</li>" +
        "<li><strong>Hand-held metal detectors</strong>: keep <strong>less than 30 seconds</strong> over the device site, or request a <strong>manual search</strong>.</li>" +
        "<li>Show the device <strong>wallet card</strong>.</li></ul>",
        ["security-systems"],
        [q("How long may a hand-held metal detector wand be held over an ICD site?", "Less than 30 seconds", ["Up to 10 minutes", "Any length of time", "It must never pass within a mile"], "Limit the wand to < 30 seconds or request a manual search.")],
        [q("A patient with an ICD is flying next week and asks about airport screening. Best counsel?", "The ICD may set off alarms; limit a hand-held wand to under 30 seconds over the site or ask for a manual search", ["Avoid airports entirely", "Remove the ICD before flying", "Ask the agents to hold the wand over the device for several minutes"], "Brief wand exposure or a manual search is advised.")]),
      C("Power generators: 2 feet",
        "<p>Stand at least <strong>2 feet (0.6 m)</strong> from <strong>welding equipment, high-voltage transformers, or motor-generator systems</strong>.</p>" +
        tbl(["Exposure", "Distance"], [
          ["Phones, mobile devices, magnets, headphones, wireless chargers", "<strong>6 in (15 cm)</strong>"],
          ["Welding, high-voltage transformers, motor-generators", "<strong>2 ft (0.6 m)</strong>"],
          ["Hand-held security wand", "<strong>&lt; 30 seconds</strong> over site"],
          ["External defibrillation pads", "<strong>10 cm</strong> from generator"]]) +
        mn("<strong>Small device, small distance (6 in); big power, bigger distance (2 ft).</strong>"),
        ["distance-2-feet"],
        [q("How far should a patient with a device stand from welding equipment?", "At least 2 feet (0.6 m)", ["At least 6 inches", "At least 1 inch", "No distance needed"], "Power generators and welding: 2 feet."),
          q("Which item requires the 2-foot (0.6 m) distance?", "High-voltage transformer", ["Cell phone", "Electric shaver", "AM/FM radio"], "Welding, high-voltage transformers, and motor-generator systems: 2 feet.")],
        [q("A welder gets a pacemaker and wants to return to work. What counsel fits the lecture?", "Stand at least 2 feet from welding equipment and motor-generators", ["Welding is fine at any distance", "Keep welding equipment 6 inches away", "He must never work again"], "Power generators and welding require ≥ 2 feet.")]),
      C("Low-risk household devices",
        "<p>Pose <strong>little or no risk</strong>: <strong>microwave ovens</strong>, televisions and remote controls, AM/FM radios, toasters, electric blankets, electric shavers, electric drills, computers, scanners, printers, GPS devices.</p>" +
        "<p>Separate issue: <strong>MRI</strong> is generally not allowed unless the device is MRI-safe (check with cardiology).</p>",
        ["low-risk-devices"],
        [q("Which household device poses little or no risk to a pacemaker?", "Microwave oven", ["Wireless charger held over the device", "Welding equipment", "Motor-generator system"], "Microwaves, TVs, radios, toasters, and similar items are low risk."),
          q("Which item is considered low risk for a patient with an ICD?", "Electric blanket", ["High-voltage transformer at 1 foot", "Magnet held over the chest", "Headphones resting on the device site"], "Electric blankets are on the low-risk list.")],
        [q("A patient with a new ICD worries about using the microwave, TV remote, and computer at home. Best counsel?", "These pose little or no risk and can be used normally", ["Stay 2 feet from all of them", "Avoid all of them permanently", "Use them only with the ICD disabled"], "These household devices are low risk.")])
    ]),

    /* ---------- 7 ---------- */
    S("07-device-infection", "7. Device infection: risks, workup, management", "Objective 7. Slides 12, 52–54.", [
      C("How devices become infected",
        tbl(["Mechanism", "Detail"], [
          ["<strong>Pocket infection at insertion</strong>", "Incision becomes infected at implant"],
          ["<strong>Pocket erosion</strong>", "Generator erodes through skin, e.g. from <strong>weight loss</strong>"],
          ["<strong>Hematogenous seeding</strong>", "Bacteremia seeds the <strong>leads</strong> (a small clot on the lead) → <strong>persistent bacteremia</strong>"]]),
        ["infection-mechanisms"],
        [q("Which mechanism of device infection classically causes persistent bacteremia?", "Bacteremia seeding the leads", ["Battery depletion", "Lead fracture", "MRI exposure"], "Hematogenous seeding of the leads causes persistent bacteremia."),
          q("Which patient change can cause pocket erosion?", "Weight loss", ["Weight gain", "Increased exercise", "Starting a statin"], "Weight loss thins tissue over the generator, which can erode.")],
        [q("A thin elderly patient who lost 20 lb has a pacemaker generator visible through broken skin. What complication is this?", "Pocket erosion, an infected device", ["Normal healing", "Lead fracture", "Battery depletion"], "Pocket erosion from weight loss is a device-infection mechanism.")]),
      C("Infection risk factors",
        "<ul><li>A <strong>generator change</strong> is <strong>more likely</strong> to cause infection than a <strong>de novo</strong> implant.</li>" +
        "<li>A <strong>pocket hematoma</strong> raises infection risk from <strong>0.98% to 22.7%</strong>.</li></ul>" +
        hy("Generator change and pocket hematoma = biggest infection risks. (One reason to hold anticoagulants and antiplatelets before implant.)"),
        ["infection-risk-factors"],
        [q("Which procedure carries a higher risk of device infection?", "Generator change", ["De novo implant", "Device interrogation", "Placing a magnet"], "Generator changes are more likely to cause infection than new implants."),
          q("A pocket hematoma raises device-infection risk from about 1% to about:", "23%", ["2%", "5%", "50%"], "Risk rises from 0.98% to 22.7% with a hematoma.")],
        [q("Two patients get devices this week: one a first-time implant, one a generator change who develops a pocket hematoma. Who has the higher infection risk?", "The generator-change patient with a hematoma", ["The first-time implant patient", "They have equal risk", "Neither has any infection risk"], "Both generator change and hematoma raise infection risk.")]),
      C("Workup of suspected device infection",
        "<ul><li>Look for <strong>pocket signs</strong>: infected incision, erosion.</li>" +
        "<li>Lead infection presents as <strong>persistent bacteremia</strong>: draw <strong>blood cultures</strong> (clarification: the slides describe persistent bacteremia; repeat cultures are how it is shown).</li>" +
        "<li><strong>TEE</strong> may show a <strong>vegetation on the lead</strong>.</li></ul>",
        ["infection-workup"],
        [q("Which imaging test may show a vegetation on a pacemaker lead?", "Transesophageal echocardiogram", ["Chest x-ray", "Abdominal ultrasound", "Coronary angiography"], "A lead vegetation may be seen on TEE."),
          q("Lead infection from hematogenous seeding classically presents with:", "Persistent bacteremia", ["Isolated hyperkalemia", "A single negative blood culture", "Asymptomatic battery depletion"], "Seeded leads cause persistent bacteremia.")],
        [q("A patient with an ICD has fevers and repeatedly positive blood cultures despite antibiotics; the pocket looks normal. What is the next best test?", "Transesophageal echo to look for a lead vegetation", ["Chest MRI", "Exercise stress test", "No workup; continue oral antibiotics"], "Persistent bacteremia with a device → TEE for lead vegetation.")]),
      C("Management of device infection",
        hy("Any infected pacemaker or ICD: <strong>explant the device AND the leads</strong>, give a <strong>period of antibiotic therapy</strong>, then implant a <strong>new device</strong>.") +
        "<p>Antibiotics alone, or replacing only the generator, are not enough.</p>",
        ["infection-management"],
        [q("What is the management of an infected pacemaker or ICD?", "Explant the device and leads, then antibiotics before reimplantation", ["Antibiotics alone and keep the device", "Generator change only", "Place a magnet over the device"], "The device and leads must be explanted; antibiotics precede a new device."),
          q("When can a new device be implanted after an infected device is removed?", "After a period of antibiotic therapy", ["Immediately in the same pocket", "Never", "Before the infected device is removed"], "Patients need antibiotic therapy before a new implant.")],
        [q("A patient has a lead vegetation on TEE and persistent bacteremia. The team proposes IV antibiotics and leaving the system in. Best response?", "Remove the entire device and leads, treat with antibiotics, then reimplant later", ["Agree; leave the system in", "Replace only the generator", "Remove the leads but keep the generator"], "Infected devices require complete explant of generator and leads.")])
    ])
  ];
})();
