/*
  Medications: Antiarrhythmics, Class I & III (Cardio Part 2). Source:
  arrhythmia-pharmacology.md slides 22-35, 42-56; chronic-arrhythmia-management.md
  slides 60, 64-74; arrhythmias.md slides 19, 113-114, 122, 135-137, 146;
  syncope.md slides 51, 56, 67. Beta blockers (II) and non-DHP CCBs (IV)
  are in the AV nodal group. Only append questions (ids "<med id>|<index>").
*/
(function () {
  "use strict";
  var H = window.DiseaseContent, M = window.MedContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, Q = H.Q, L = H.L, Med = M.Med, ul = M.ul;

  var classes = Tbl(["Class", "Action", "Drugs"], [
    ["IA", "Na+ block (intermediate) + some K+ block", "Procainamide, quinidine, disopyramide"],
    ["IB", "Na+ block (fast on/off)", "Lidocaine, mexiletine"],
    ["IC", "Na+ block (slow off) + K+ block", "Flecainide, propafenone"],
    ["II", "Beta blockers", "Metoprolol, esmolol, atenolol…"],
    ["III", "K+ channel block", "Amiodarone, sotalol, dronedarone, ibutilide, dofetilide"],
    ["IV", "Ca2+ channel block", "Diltiazem, verapamil"]
  ]);

  window.CARDIO2_MEDS_ANTIARRHYTHMICS = L("meds2-antiarrhythmics", "Antiarrhythmics (Class I & III)", [

    Med("med-procainamide", "Procainamide (Class IA)", "Na+ channel blocker that also blocks K+; the drug for WPW tachycardias", ["Arrhythmia Pharmacology", "Arrhythmias"], {
      uses: ul([
        "<strong>First line for antidromic (wide-complex) AVRT in WPW</strong> and pre-excited rhythms.",
        "<strong>Refractory orthodromic (narrow) AVRT</strong>: blocks conduction in the accessory pathway.",
        "<strong>Stable VT with a pulse</strong> (alternative to amiodarone).",
        "Symptomatic PACs (with other Class IA/III agents)."
      ]),
      moa: "<p><strong>Class IA</strong>: blocks fast Na+ channels with intermediate dissociation (slows phase 0) and also blocks K+ channels (prolongs repolarization).</p>" + classes +
        Tbl(["Route", "Dose"], [["IV", "<strong>20–50 mg/min</strong> (or 100 mg q5 min) up to <strong>10–17 mg/kg</strong>; stop when the arrhythmia is suppressed, hypotension, or <strong>QRS widens &gt; 50%</strong>"], ["Maintenance", "1–4 mg/min"], ["PO", "50 mg/kg/day divided q6h"]]),
      avoid: ul(["<strong>Prolonged QT</strong>, acute MI, severe CHF (avoid in VT with these).", "Monitor BP and serial EKGs."]),
      se: ul([
        "<strong>Cardiac toxicity: QRS, PR and QT prolongation</strong> (torsades risk).",
        "Bradycardia, <strong>hypotension</strong>.",
        "<strong>Drug-induced lupus</strong>-like syndrome.",
        "Blood dyscrasias."
      ]),
      pearls: ul(["Stop the infusion if QRS widens by more than 50% or the patient becomes hypotensive.", "A QT-prolonging drug that can cause syncope and torsades."]) +
        HY("WPW wide-complex tachycardia → procainamide. Lupus-like reaction = procainamide.")
    }, [
      Q("uses", "A stable patient with known WPW has a regular wide-complex tachycardia (antidromic AVRT). First-line drug?", ["Procainamide", "Adenosine", "Diltiazem", "Digoxin"], 0, "Procainamide is first line for antidromic AVRT; AV nodal blockers are avoided in pre-excitation."),
      Q("se", "A patient on long-term procainamide develops arthralgias, rash and a positive ANA. What is this?", ["Drug-induced lupus", "Amiodarone toxicity", "Rheumatic fever", "Digoxin toxicity"], 0, "Procainamide causes a drug-induced lupus erythematosus-like syndrome."),
      Q("moa", "When should a procainamide infusion be stopped?", ["Arrhythmia suppressed, hypotension, or QRS widens more than 50%", "After exactly 300 mg", "When HR drops below 100", "When the patient feels flushed"], 0, "Endpoints: arrhythmia suppression, hypotension, QRS increase > 50%, or max dose (17 mg/kg)."),
      Q("moa", "Which class does procainamide belong to?", ["IA", "IB", "IC", "III"], 0, "Class IA: procainamide, quinidine, disopyramide."),
      Q("avoid", "Stable VT in a patient with a QTc of 540 ms. Which drug should be avoided?", ["Procainamide", "Amiodarone", "Synchronized cardioversion", "Lidocaine"], 0, "Avoid procainamide with prolonged QT, acute MI or severe CHF."),
      Q("se", "Which EKG intervals does procainamide prolong?", ["QRS, PR and QT", "Only the P wave", "None", "It shortens the QT"], 0, "Procainamide cardiac toxicity: QRS, PR and QT prolongation."),
      Q("uses", "Orthodromic AVRT did not break with vagal maneuvers, adenosine, metoprolol or diltiazem. Next drug?", ["Procainamide", "Atropine", "Digoxin", "Dopamine"], 0, "For refractory AVRT, procainamide blocks conduction in the accessory pathway.")
    ]),

    Med("med-lidocaine", "Lidocaine (Class IB)", "Na+ channel blocker that targets fast-firing ventricular tissue", ["Arrhythmia Pharmacology", "Arrhythmias"], {
      uses: ul([
        "<strong>Stable VT with a pulse</strong>.",
        "<strong>ACLS: lidocaine OR amiodarone</strong> for pulseless VT and VF (shock-refractory)."
      ]),
      moa: "<p><strong>Class IB</strong>: Na+ channel blocker with <strong>rapid dissociation</strong>; acts mainly on tissue that depolarizes fast, like <strong>ventricular ectopic foci</strong> (and ischemic tissue).</p>" +
        Tbl(["Dose", ""], [["Initial", "<strong>1–1.5 mg/kg</strong>"], ["Repeat", "0.5–0.75 mg/kg q5–10 min, <strong>max 3 mg/kg</strong>"], ["Infusion", "1–4 mg/min"]]),
      avoid: ul(["<strong>WPW syndrome</strong> (listed contraindication).", "<strong>Severe liver disease</strong>: hepatic clearance, so toxicity risk rises.", "Monitor LFTs, neuro checks, mental status, EKG, BP and lidocaine levels."]),
      se: Tbl(["Lidocaine toxicity", ""], [
        ["CNS (most common)", "<strong>Tremor, tinnitus</strong>, slurred speech, lightheadedness, ataxia, drowsiness or insomnia, agitation, hallucinations; <strong>seizures</strong> at high levels"],
        ["Cardiovascular (rare)", "Sinus slowing, <strong>asystole</strong>, hypotension, shock: usually from overdose or a rapid IV push"]
      ]),
      pearls: ul(["CNS effects are usually mild and dose-related and go away when the infusion is slowed or stopped.", "IB = \"Best\" for ventricles (post-MI ischemic tissue)."]) +
        HY("Lidocaine toxicity is neurologic first: tinnitus, tremor, slurred speech, then seizures.")
    }, [
      Q("uses", "Which two drugs are ACLS options for shock-refractory pulseless VT or VF?", ["Amiodarone or lidocaine", "Adenosine or diltiazem", "Atropine or dopamine", "Digoxin or verapamil"], 0, "ACLS: amiodarone or lidocaine for pulseless VT/VF."),
      Q("se", "A patient on a lidocaine drip develops ringing ears, slurred speech and tremor. What is happening?", ["Lidocaine CNS toxicity", "Stroke from AF", "Amiodarone thyroid storm", "Hypoglycemia from atropine"], 0, "Lidocaine toxicity is mostly neurologic; high levels can cause seizures."),
      Q("avoid", "Which patient factor most raises lidocaine toxicity risk?", ["Severe hepatic dysfunction", "Hypokalemia", "Asthma", "Young age"], 0, "Lidocaine is cleared by the liver; severe hepatic dysfunction increases toxicity."),
      Q("moa", "What is the initial lidocaine dose for VT?", ["1-1.5 mg/kg", "6 mg", "300 mg", "0.01 mg/kg"], 0, "Lidocaine 1-1.5 mg/kg, repeat 0.5-0.75 mg/kg q5-10 min to max 3 mg/kg, infusion 1-4 mg/min."),
      Q("moa", "Which tissue does lidocaine affect most?", ["Rapidly depolarizing ventricular ectopic foci", "The SA node", "The AV node", "Atrial tissue in AF"], 0, "IB drugs act mainly on tissue with high depolarization rates, such as ventricular ectopic foci."),
      Q("se", "What usually causes lidocaine's rare cardiovascular toxicity (asystole, shock)?", ["Overdose or a rapid IV push", "Taking it with food", "Low magnesium", "Missing a dose"], 0, "Cardiovascular toxicity is infrequent and usually from overdosing or rapid IV administration.")
    ]),

    Med("med-class-ic", "Flecainide (Tambocor) & propafenone (Rythmol) (Class IC)", "Slow-off Na+ blockers for AF/SVT only in a structurally normal heart", ["Arrhythmia Pharmacology", "Inpatient & Long-Term Arrhythmia Management", "Arrhythmias", "Syncope"], {
      uses: ul([
        "<strong>Rhythm control in AF and SVT in patients without structural heart disease</strong>.",
        "<strong>\"Pill in the pocket\"</strong>: taken for a few days when AF symptoms start.",
        "Flecainide: prevent sustained VT in a structurally normal heart; prevent AF/flutter when ablation is not an option; PVCs when other drugs fail (off label)."
      ]),
      moa: "<p><strong>Class IC</strong>: Na+ channel blockers with <strong>slow dissociation</strong>, so the effect grows at faster heart rates (<strong>use-dependence</strong>). They also block K+ channels. Highest proarrhythmic risk, especially in diseased myocardium.</p>" +
        Tbl(["Flecainide dose", ""], [["Start", "50–100 mg PO q12h"], ["Titrate", "Up 50 mg BID every 4 days"], ["Max", "400 mg/day"]]),
      avoid: ul([
        "<strong>Structural heart disease</strong>: <strong>CAD, prior MI, LV dysfunction/HF</strong>.",
        "<strong>Boxed warning</strong>: more PVCs, VT, VF and death; not for chronic (permanent) AF.",
        "<strong>Atrial flutter</strong>: can slow the flutter enough for <strong>1:1 AV conduction</strong>; give a nodal blocker (BB, digoxin) first."
      ]),
      se: ul(["<strong>Proarrhythmia</strong>.", "<strong>Prolonged PR</strong>, second-degree heart block.", "Dizziness, <strong>visual disturbances</strong>, dyspnea.", "Can cause syncope (Na+ channel blockers also unmask Brugada)."]),
      pearls: ul([
        "<strong>Milk lowers flecainide absorption</strong>: if milk is removed from the diet, levels rise. Check levels with diet changes.",
        "Monitor EKG, BP, HR and periodic trough levels (especially in renal or hepatic impairment)."
      ]) + HY("IC = \"Can't\" with structural heart disease. Normal heart + AF → flecainide or propafenone.")
    }, [
      Q("avoid", "A 66-year-old with prior MI and EF 35% has paroxysmal AF. Why not flecainide?", ["IC drugs are proarrhythmic and deadly in structural heart disease", "It is too expensive", "It only treats VT", "It causes lupus"], 0, "Class IC agents are avoided with CAD, prior MI and LV dysfunction."),
      Q("uses", "A healthy 38-year-old with a normal echo has infrequent paroxysmal AF and wants something to take only during episodes. Option?", ["Pill-in-the-pocket flecainide or propafenone", "Dofetilide started at home", "Daily amiodarone", "Digoxin"], 0, "IC agents can be used as a pill in the pocket in patients without structural heart disease."),
      Q("avoid", "Why give a beta blocker before flecainide in atrial flutter?", ["Flecainide can allow 1:1 AV conduction of a slowed flutter", "Flecainide causes hypertension", "Beta blockers boost flecainide absorption", "To prevent lupus"], 0, "Boxed warning: 1:1 AV conduction risk in flutter; use preemptive negative chronotropes."),
      Q("pearls", "A patient on flecainide stops drinking milk. What can happen?", ["Flecainide levels rise", "Flecainide stops working", "Her INR rises", "Nothing"], 0, "Milk decreases flecainide absorption; removing it raises levels, so adjust the dose and monitor."),
      Q("moa", "What does use-dependence mean for Class IC drugs?", ["The effect is stronger at faster heart rates", "The effect is stronger at slower heart rates", "They work only after a loading dose", "They work only IV"], 0, "Slow dissociation means more Na+ block at faster rates; reverse use-dependence belongs to Class III drugs."),
      Q("se", "Which EKG change and side effect are expected with flecainide?", ["Prolonged PR and visual disturbances", "Short QT and hyperthyroidism", "Delta waves and gingival hyperplasia", "Peaked T waves and cough"], 0, "Flecainide: proarrhythmia, prolonged PR, 2nd-degree block, dizziness, visual disturbances, dyspnea."),
      Q("avoid", "What does flecainide's boxed warning say about chronic AF?", ["Not recommended: more VT, VF and death were reported", "It is the drug of choice", "It is safe at any dose", "It cures chronic AF"], 0, "Increased PVCs, VT, VF and death were reported; not recommended for chronic AF.")
    ]),

    Med("med-amiodarone", "Amiodarone (Cordarone, Pacerone)", "Class III with Class I, II and IV actions; the safest rhythm drug in a sick heart, the most toxic long term", ["Arrhythmia Pharmacology", "Inpatient & Long-Term Arrhythmia Management", "Arrhythmias", "Syncope"], {
      uses: ul([
        "<strong>Cardiac arrest (pulseless VT/VF)</strong> after defibrillation, CPR and epinephrine: <strong>300 mg IV, then 150 mg</strong>.",
        "<strong>Stable VT with a pulse</strong>: 150 mg IV over 10 min, then 1 mg/min × 6 h, then 0.5 mg/min ≥ 18 h. Unstable VT after cardioversion.",
        "<strong>AF rhythm control</strong>: most effective drug for persistent AF; <strong>drug of choice with CAD or systolic/diastolic HF</strong> (least proarrhythmic).",
        "AF rate control in acutely decompensated HF (but it may convert the rhythm).",
        "Long-term VT when beta blockers are not enough; symptomatic PACs and PVCs."
      ]),
      moa: "<p>Mainly <strong>blocks K+ channels</strong> (prolongs phase 3, refractory period and QT), but also blocks <strong>Na+, β-adrenergic and Ca2+</strong> channels (phases I, II, IV).</p>" +
        Tbl(["Setting", "Dose"], [
          ["ACLS", "<strong>300 mg IV push</strong>, then <strong>150 mg</strong>"],
          ["Stable VT", "<strong>150 mg IV over 10 min</strong> → 1 mg/min × 6 h → 0.5 mg/min ≥ 18 h"],
          ["PO load", "400 mg q8–12h for 1–2 weeks, then 200–400 mg daily"]
        ]) + "<p>Hepatic metabolism; <strong>half-life is enormous</strong>: IV 9–36 days, PO ~58 days (15–142).</p>",
      avoid: ul([
        "<strong>SSS, SA node dysfunction, AV block, bradycardia without a pacemaker</strong>.",
        "<strong>Cardiogenic shock</strong>.",
        "<strong>Iodine hypersensitivity</strong>.",
        "<strong>IV amiodarone in pre-excited AF</strong> (AV nodal effects).",
        "Caution with beta blockers and CCBs (additive brady/block)."
      ]),
      se: Tbl(["Organ", "Toxicity and monitoring"], [
        ["Heart", "Bradycardia, <strong>hypotension (IV)</strong>, AV block, sinus arrest, new VT, QT prolongation"],
        ["Liver (<strong>boxed</strong>)", "Hepatotoxicity: baseline and periodic LFTs; stop or reduce if &gt; 3× normal"],
        ["Lungs (<strong>boxed</strong>)", "<strong>Pulmonary fibrosis</strong>, pneumonitis: baseline CXR + PFTs, CXR every 3–6 months"],
        ["Thyroid", "<strong>Hypo- or hyperthyroidism</strong> (iodine-rich; blocks T4→T3): baseline and periodic TFTs"],
        ["Eyes", "<strong>Corneal microdeposits</strong> (halos); rarely optic neuritis and blindness"],
        ["Skin", "Photosensitivity, <strong>blue-gray skin</strong> in sun-exposed areas"],
        ["Other", "Nausea/vomiting (&gt; 10%), neuropathy, gait ataxia"]
      ]),
      pearls: ul([
        "Many drug interactions: check the med list; <strong>raises warfarin and digoxin levels</strong>.",
        "Food increases absorption; <strong>grapefruit juice raises levels ~50%</strong>: avoid.",
        "Intolerable side effects are common long term."
      ]) + Mn("Check before and during", "PFTs/CXR, LFTs, TFTs, eye exam: lungs, liver, thyroid, eyes, skin.")
    }, [
      Q("uses", "VF persists after the second shock, CPR and epinephrine. What antiarrhythmic dose is given?", ["Amiodarone 300 mg IV push", "Amiodarone 150 mg over 10 minutes", "Lidocaine 3 mg/kg", "Adenosine 12 mg"], 0, "ACLS amiodarone: 300 mg bolus, then 150 mg."),
      Q("uses", "A stable patient has monomorphic VT at 160 with a BP of 128/80. What amiodarone regimen?", ["150 mg IV over 10 min, then 1 mg/min for 6 hours", "300 mg rapid IV push", "6 mg rapid push", "400 mg PO once"], 0, "Sustained VT with a pulse: 150 mg over 10 min, 1 mg/min × 6 h, then 0.5 mg/min for at least 18 h."),
      Q("se", "Which two amiodarone toxicities carry US boxed warnings?", ["Hepatotoxicity and pulmonary toxicity", "Lupus and agranulocytosis", "Constipation and edema", "Gingival hyperplasia and hirsutism"], 0, "Boxed warnings: hepatotoxicity and pulmonary toxicity (fibrosis, pneumonitis)."),
      Q("se", "A patient on amiodarone for 2 years has new dry cough and dyspnea with reticular opacities on CXR. Likely cause?", ["Amiodarone pulmonary fibrosis", "Viral pneumonia", "ACE inhibitor cough", "Digoxin toxicity"], 0, "Pulmonary fibrosis and pneumonitis are dose-related and potentially fatal; CXR every 3-6 months."),
      Q("se", "Why does amiodarone cause hypo- or hyperthyroidism?", ["It is iodine-rich and blocks T4 to T3 conversion", "It destroys the pituitary", "It blocks TSH receptors", "It is a calcium blocker"], 0, "High iodine content and blocked T4 to T3 conversion: check TFTs at baseline and periodically."),
      Q("uses", "A patient with AF, CAD and an EF of 30% needs rhythm control. Drug of choice?", ["Amiodarone", "Flecainide", "Dronedarone", "Propafenone"], 0, "With CAD or HF, amiodarone is the drug of choice because it is less proarrhythmic."),
      Q("avoid", "Which allergy is a contraindication to amiodarone?", ["Iodine", "Penicillin", "Sulfa", "Eggs"], 0, "Amiodarone contraindications include hypersensitivity to iodine, SSS, AV block, brady without a pacer, cardiogenic shock."),
      Q("pearls", "A patient on warfarin starts amiodarone. What should you expect?", ["The INR rises, so the warfarin dose is usually lowered", "The INR falls", "No interaction", "Warfarin must be stopped forever"], 0, "Amiodarone raises warfarin and digoxin levels."),
      Q("pearls", "Which drink should a patient on amiodarone avoid?", ["Grapefruit juice", "Milk", "Green tea", "Orange juice"], 0, "Grapefruit juice increases amiodarone bioavailability by about 50%."),
      Q("se", "A farmer on amiodarone develops blue-gray skin on his face and forearms. Cause?", ["Amiodarone skin discoloration in sun-exposed areas", "Cyanosis from PE", "Argyria", "Addison disease"], 0, "Amiodarone causes photosensitivity and gray-blue discoloration of sun-exposed skin."),
      Q("moa", "What is amiodarone's oral half-life?", ["About 58 days", "Under 10 seconds", "4 hours", "36-48 hours"], 0, "Oral half-life is about 58 days (15-142), so effects and toxicity last for weeks to months.")
    ]),

    Med("med-sotalol", "Sotalol (Betapace)", "Beta blocker (Class II) + K+ blocker (Class III); OK with CAD, not with HF or long QT", ["Arrhythmia Pharmacology", "Inpatient & Long-Term Arrhythmia Management", "Arrhythmias", "Syncope"], {
      uses: ul([
        "<strong>Maintenance of sinus rhythm in AF</strong> (after cardioversion).",
        "<strong>Life-threatening ventricular arrhythmias</strong>; long-term VT when beta blockers are not enough.",
        "Off label: SVT, stable monomorphic VT, symptomatic PVCs/PACs.",
        "<strong>Can be used with CAD</strong>."
      ]),
      moa: "<p>Dual action: <strong>non-selective β blockade (Class II)</strong> + <strong>action-potential prolongation by K+ block (Class III)</strong>. Shows <strong>reverse use-dependence</strong> (more QT prolongation at slow rates).</p>" +
        Tbl(["Dose", "Based on renal function and QTc"], [["PO", "80 mg BID"], ["IV", "60–80 mg over 1–5 hours"]]),
      avoid: ul([
        "<strong>Baseline QTc &gt; 450 ms</strong>; <strong>CrCl &lt; 40 mL/min</strong>.",
        "<strong>Heart failure</strong> (decompensated HF, cardiogenic shock): proarrhythmia rises in HF.",
        "<strong>Asthma/bronchospasm</strong>, SSS, AV block, bradycardia.",
        "Other QT-prolonging drugs."
      ]),
      se: ul(["<strong>QT prolongation → torsades</strong>.", "Bradycardia, palpitations, fatigue, dizziness, dyspnea, weakness.", "<strong>Beta blocker withdrawal</strong> symptoms if stopped abruptly."]),
      pearls: ul(["<strong>Correct and monitor K+ (and Mg2+)</strong>: hypokalemia worsens QT prolongation.", "Renally cleared, so dose by CrCl."]) +
        HY("Sotalol: CAD yes, HF no, QTc > 450 no, CrCl < 40 no, asthma no.")
    }, [
      Q("moa", "Which two antiarrhythmic classes does sotalol combine?", ["Class II and Class III", "Class IA and IV", "Class IB and IC", "Class III and IV"], 0, "Sotalol is a beta blocker with potassium channel (Class III) blocking."),
      Q("avoid", "Which baseline finding rules out sotalol?", ["QTc of 470 ms", "Prior MI", "Hypertension", "Paroxysmal AF"], 0, "Contraindicated with baseline QTc > 450 ms."),
      Q("avoid", "A patient with CrCl 30 mL/min needs AF rhythm control. Why not sotalol?", ["Sotalol is contraindicated with CrCl below 40", "It is hepatically toxic", "It is only IV", "It requires a mechanical valve"], 0, "Sotalol is renally cleared; CrCl < 40 mL/min is a contraindication."),
      Q("pearls", "What must be corrected and watched on sotalol?", ["Potassium (and magnesium)", "Sodium only", "Calcium only", "Glucose"], 0, "Hypokalemia exacerbates QT prolongation; correct K+ and monitor during therapy."),
      Q("uses", "Which AF patient is the better sotalol candidate?", ["CAD with preserved EF and normal QT", "HFrEF with EF 20%", "Asthma on daily inhalers", "CKD with CrCl 25"], 0, "Sotalol can be used with CAD; avoid in HF, long QT, low CrCl and asthma."),
      Q("se", "Why can stopping sotalol suddenly cause problems?", ["It is a beta blocker, so withdrawal symptoms can occur", "It causes seizures when stopped", "It causes thyroid storm", "It causes lupus"], 0, "As a beta blocker, sotalol causes BB withdrawal symptoms if stopped abruptly."),
      Q("moa", "What is reverse use-dependence?", ["More action-potential prolongation at slower heart rates", "More effect at faster rates", "Less effect with each dose", "Effect only with exercise"], 0, "Sotalol, dofetilide and ibutilide prolong the AP more at slow rates, which is when torsades occurs.")
    ]),

    Med("med-dofetilide", "Dofetilide (Tikosyn)", "Pure Class III K+ blocker; must start in the hospital for 3 days", ["Arrhythmia Pharmacology", "Inpatient & Long-Term Arrhythmia Management"], {
      uses: ul([
        "<strong>Conversion of persistent AF/flutter</strong> (~50%) and <strong>maintenance of sinus rhythm</strong>.",
        "<strong>Fairly safe in HFrEF and CAD / prior MI</strong>: no effect on cardiac output, SV or SVR.",
        "Off label: PSVT. Not first line if the patient can take other antiarrhythmics."
      ]),
      moa: "<p>Blocks the outward (rapid) K+ current: <strong>prolongs repolarization and the QT</strong>. Reverse use-dependence.</p>",
      avoid: ul(["<strong>Congenital long QT</strong>; <strong>QTc &gt; 440 ms</strong>.", "<strong>Severe renal insufficiency</strong> (dose by CrCl).", "Many drug interactions."]),
      se: ul(["<strong>Torsades de pointes</strong>, VT, VF.", "Headache, chest pain, dizziness."]),
      pearls: ul([
        "<strong>FDA-mandated inpatient start: 3 days of monitoring</strong> (CrCl, QT, rhythm), and again if <strong>more than 2 doses are missed</strong>.",
        "Even reloading the same dose may not be tolerated because of QT prolongation.",
        "Must be taken at the <strong>same time twice daily</strong>."
      ]) + HY("Dofetilide = 3-day hospital start, QT and CrCl checks, OK in HFrEF.")
    }, [
      Q("pearls", "A patient starting dofetilide asks why she has to be admitted. Answer?", ["FDA requires 3 days of inpatient QT and rhythm monitoring", "It is only available IV", "It causes immediate hypotension", "It requires daily dialysis"], 0, "Dofetilide must be started (and restarted after > 2 missed doses) with 3 days of inpatient monitoring."),
      Q("uses", "A patient with HFrEF and prior MI needs AF rhythm control. Which Class III is fairly safe here besides amiodarone?", ["Dofetilide", "Dronedarone", "Sotalol", "Flecainide"], 0, "Dofetilide has no effect on CO or SVR and is fairly safe in HFrEF and CAD; dronedarone and sotalol are avoided in HF."),
      Q("avoid", "Which finding contraindicates dofetilide?", ["QTc over 440 ms", "Prior MI", "EF of 35%", "Age over 65"], 0, "Contraindications: congenital long QT, QTc > 440 ms, severe renal insufficiency."),
      Q("se", "What is the most dangerous adverse effect of dofetilide?", ["Torsades de pointes", "Pulmonary fibrosis", "Agranulocytosis", "Hepatitis"], 0, "Dofetilide prolongs the QT and can cause TdP, VT and VF."),
      Q("pearls", "A patient on dofetilide missed 3 doses on vacation. What now?", ["Readmit for monitored reloading", "Double the next dose", "Restart at home", "Switch to flecainide at home"], 0, "If more than 2 doses are missed, dofetilide must be restarted in the hospital with 3 days of monitoring."),
      Q("moa", "What two things are monitored during dofetilide loading besides rhythm?", ["CrCl and QT interval", "LFTs and TFTs", "INR and platelets", "Glucose and lipids"], 0, "Parameters: CrCl, QT interval and rhythm.")
    ]),

    Med("med-dronedarone", "Dronedarone (Multaq)", "Amiodarone relative with properties of all four classes; never in HF or permanent AF", ["Arrhythmia Pharmacology", "Inpatient & Long-Term Arrhythmia Management"], {
      uses: ul(["<strong>Paroxysmal AF</strong>, or after conversion of persistent AF, to <strong>maintain sinus rhythm</strong>.", "Can be used with <strong>CAD risk factors</strong>."]),
      moa: "<p>Listed with Class III, but a miscellaneous agent with <strong>properties of all 4 classes</strong> (Na+, β, K+, Ca2+ block).</p>",
      avoid: ul([
        "<strong>Permanent AF</strong>: increased mortality.",
        "<strong>Heart failure</strong>: 2-fold higher risk of death, stroke and HF hospitalization."
      ]),
      se: ul(["QT prolongation and the shared antiarrhythmic drug interactions (QT drugs, macrolides, azoles, antipsychotics)."]),
      pearls: ul(["Used after cardioversion with sotalol and amiodarone as the rhythm-control options.", "Different from amiodarone: it is safer for organs but harmful in HF."]) +
        HY("Dronedarone: NO in heart failure, NO in permanent AF.")
    }, [
      Q("avoid", "Which two conditions contraindicate dronedarone?", ["Heart failure and permanent AF", "Asthma and gout", "CAD and hypertension", "Paroxysmal AF and diabetes"], 0, "Permanent AF (increased mortality) and HF (2-fold risk of death, stroke, HF hospitalization)."),
      Q("uses", "Which patient is the best dronedarone candidate?", ["Paroxysmal AF with CAD risk factors and a normal EF", "Permanent AF accepted for rate control", "HFrEF with EF 25%", "Decompensated HF with AF"], 0, "Dronedarone: paroxysmal AF or after conversion of persistent AF; OK with CAD risk factors."),
      Q("moa", "How is dronedarone's mechanism described?", ["It has properties of all four antiarrhythmic classes", "Pure Na+ channel blocker", "Pure beta-1 blocker", "Adenosine receptor agonist"], 0, "Dronedarone is a miscellaneous agent with properties of all four classes."),
      Q("avoid", "Why should a patient in permanent AF not take dronedarone?", ["Studies showed increased mortality", "It is ineffective but harmless", "It causes lupus", "It raises INR dangerously"], 0, "Permanent AF on dronedarone had increased mortality.")
    ]),

    Med("med-ibutilide", "Ibutilide (Corvert)", "IV Class III for chemical conversion of AF/flutter", ["Arrhythmia Pharmacology"], {
      uses: ul(["<strong>Conversion of AF/flutter</strong> to sinus rhythm.", "<strong>Stable AF/flutter with RVR in WPW</strong> (it does not block the AV node)."]),
      moa: "<p>Prolongs the QT by <strong>enhancing the slow inward Na+ current</strong> and <strong>blocking K+ channels</strong> during repolarization; mildly slows the sinus node.</p>" +
        Tbl(["Weight", "IV dose"], [["&lt; 60 kg", "<strong>0.01 mg/kg over 10 min</strong>"], ["≥ 60 kg", "<strong>1 mg over 10 min</strong>"]]),
      avoid: ul(["Hypersensitivity (the only listed contraindication).", "Other QT-prolonging drugs."]),
      se: ul(["<strong>Proarrhythmia</strong>: monomorphic and <strong>polymorphic VT</strong>, SVT, AV block.", "Headache."]),
      pearls: ul(["Watch the QT and keep the patient on a monitor after the infusion (torsades).", "Reverse use-dependence like sotalol and dofetilide."]) +
        HY("Ibutilide = IV, 1 mg over 10 min, converts AF/flutter; watch for polymorphic VT.")
    }, [
      Q("uses", "Which IV Class III drug is used for pharmacologic conversion of AF/flutter, even with WPW?", ["Ibutilide", "Diltiazem", "Adenosine", "Digoxin"], 0, "Ibutilide converts AF/flutter and can treat stable AF/flutter with RVR in WPW."),
      Q("moa", "What is the ibutilide dose for a 75 kg adult?", ["1 mg IV over 10 minutes", "0.01 mg/kg IV push", "150 mg over 10 minutes", "80 mg PO BID"], 0, "≥ 60 kg: 1 mg over 10 minutes; < 60 kg: 0.01 mg/kg over 10 minutes."),
      Q("se", "What is the main danger after an ibutilide infusion?", ["Polymorphic VT (torsades)", "Pulmonary fibrosis", "Hyperkalemia", "Thrombocytopenia"], 0, "Ibutilide prolongs the QT; proarrhythmic effects include monomorphic and polymorphic VT."),
      Q("moa", "How does ibutilide prolong the QT?", ["Enhances slow inward Na+ current and blocks K+ channels", "Blocks beta-1 receptors", "Opens K+ channels", "Blocks L-type Ca2+ channels"], 0, "Ibutilide enhances the slow inward sodium current and blocks potassium channels during repolarization.")
    ])
  ]);
}());
