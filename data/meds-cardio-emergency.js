/*
  Medications: IV drugs for hypertensive emergency (Cardio Part 1). Source:
  hypertensive-crisis.md slides 34-49 and the slide 55 algorithm. Labetalol
  and hydralazine live in their own classes. Only append questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent, M = window.MedContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, Q = H.Q, L = H.L, Med = M.Med, ul = M.ul;

  window.CARDIO_MEDS_EMERGENCY = L("meds-emergency", "IV drugs for hypertensive emergency", [

    Med("med-nitroprusside", "Sodium nitroprusside (Nipride)", "IV nitrate; fastest and strongest arterial + venous dilator", ["Hypertensive Crisis"], {
      uses: ul([
        "<strong>Most hypertensive emergencies</strong>.",
        "<strong>Aortic dissection</strong>: vasodilator added to a beta blocker (esmolol) and morphine; goal SBP 100–120 within 20 minutes."
      ]),
      moa: "<p>Direct <strong>venous and arteriolar</strong> vasodilation: lower PVR and venous return. BP drops <strong>precipitously within 2 minutes</strong>; the effect lasts up to 10 minutes after stopping. Mixed in 5% dextrose.</p>",
      avoid: ul([
        "<strong>Raised intracranial pressure</strong>: nitroprusside raises ICP. Avoid in ICH and SAH.",
        "Caution in <strong>azotemia / CKD</strong> and liver disease (cyanide builds up)."
      ]),
      se: ul([
        "Nausea, vomiting, muscle twitching, sweating.",
        "<strong>Cyanide and thiocyanate toxicity</strong>: large amounts of cyanide are produced and clearance is limited, worse with renal or liver disease. <strong>Treat with sodium thiosulfate.</strong>",
        "<strong>Methemoglobinemia</strong>: iron oxidized Fe2+ → Fe3+, can't carry oxygen; cyanosis and hypoxia despite high-flow O2. <strong>Treat with methylene blue.</strong>"
      ]),
      pearls: Tbl(["Toxicity", "Antidote"], [["Cyanide", "Sodium thiosulfate"], ["Methemoglobinemia", "Methylene blue"]]) +
        HY("Nitroprusside: works in 2 minutes, raises ICP, makes cyanide.")
    }, [
      Q("se", "After 2 days on a nitroprusside drip, a patient with CKD develops confusion and metabolic acidosis. Which antidote?", ["Sodium thiosulfate for cyanide toxicity", "Naloxone", "Glucagon", "Protamine"], 0, "Nitroprusside produces cyanide, especially with renal or liver disease; treatment is sodium thiosulfate."),
      Q("se", "A patient on nitroprusside is cyanotic with low saturations despite 100% oxygen. What is the treatment?", ["Methylene blue for methemoglobinemia", "Sodium thiosulfate", "Atropine", "IV calcium"], 0, "Methemoglobinemia (Fe3+) can't bind oxygen; treat with methylene blue."),
      Q("avoid", "Why is nitroprusside avoided in intracerebral hemorrhage?", ["It raises intracranial pressure", "It is too slow", "It causes bradycardia", "It worsens bleeding by blocking platelets"], 0, "Nitroprusside raises ICP; for ICH/SAH, use nicardipine and avoid nitroprusside and hydralazine."),
      Q("moa", "How quickly does nitroprusside lower blood pressure?", ["Within about 2 minutes", "Over 1-2 hours", "Over 24 hours", "Only after 3 days"], 0, "Nitroprusside causes a precipitous drop in BP within 2 minutes; the effect lasts up to 10 minutes."),
      Q("uses", "Acute aortic dissection: which combination is preferred?", ["Beta blocker (esmolol) + nitroprusside + morphine", "Hydralazine + furosemide", "Nifedipine + clonidine", "Lisinopril + amlodipine"], 0, "Dissection: narcotic analgesic, beta blocker (esmolol/labetalol) and vasodilator (nitroprusside), then the OR."),
      Q("moa", "Which vessels does nitroprusside dilate?", ["Both veins and arterioles", "Veins only", "Arterioles only", "Coronary arteries only"], 0, "Nitroprusside directly dilates veins and arterioles, decreasing PVR and venous return."),
      Q("avoid", "In which patients does nitroprusside cyanide toxicity develop most easily?", ["Patients with renal or liver disease", "Young athletes", "Patients on beta blockers", "Patients with hypothyroidism"], 0, "Cyanide clearance is limited, especially with renal or liver disease."),
      Q("pearls", "What fluid is nitroprusside mixed in?", ["5% dextrose", "Lactated Ringer's", "3% saline", "Sterile water only"], 0, "Nitroprusside is diluted in 5% dextrose.")
    ]),

    Med("med-nitroglycerin", "Nitroglycerin (IV drip)", "Venous > arterial dilator that opens coronary arteries", ["Hypertensive Crisis", "Cardiomyopathies"], {
      uses: ul([
        "<strong>Acute coronary syndrome</strong> in hypertensive emergency (with IV beta blocker).",
        "<strong>Acute heart failure</strong>: added after the IV loop diuretic.",
        "Dilated cardiomyopathy (preload and afterload reduction)."
      ]),
      moa: "<p>Dilates <strong>veins more than arteries</strong>: lowers <strong>preload</strong> more than afterload. Also <strong>dilates the coronary arteries</strong> and improves collateral flow to ischemic myocardium.</p><p>Onset 2–5 minutes; effect gone 5–10 minutes after stopping. Titratable.</p>",
      avoid: ul([
        "<strong>PDE-5 inhibitors</strong> (sildenafil, tadalafil for ED or pulmonary HTN): very severe hypotension.",
        "<strong>Hypertrophic cardiomyopathy with LVOT obstruction</strong>: nitrates worsen the obstruction."
      ]),
      se: ul([
        "<strong>Headache</strong>, flushing, hypotension, vomiting.",
        "<strong>Tachyphylaxis</strong> within 24–48 hours: needs a nitrate-free interval.",
        "Methemoglobinemia."
      ]),
      pearls: HY("Nitroglycerin is the drug for the heart: ACS and acute HF. Always ask about sildenafil/tadalafil.")
    }, [
      Q("uses", "Hypertensive emergency with chest pain and ST depression. Which IV drugs are preferred?", ["Nitroglycerin drip or IV beta blocker", "Hydralazine", "Nitroprusside alone", "Nicardipine and hydralazine"], 0, "ACS: nitroglycerin gtt or IV beta blockers (metoprolol, esmolol) are the preferred drugs."),
      Q("avoid", "A man with chest pain took tadalafil last night. Which drug is dangerous?", ["Nitroglycerin", "Aspirin", "Metoprolol", "Morphine"], 0, "Nitrates plus PDE-5 inhibitors (sildenafil, tadalafil) can cause very severe hypotension."),
      Q("moa", "Which statement describes nitroglycerin's effect?", ["Venous more than arterial dilation, lowering preload, and coronary dilation", "Arterial only dilation with reflex bradycardia", "Pure afterload reduction", "Negative inotropy"], 0, "Nitroglycerin mainly dilates veins (preload reduction), less arteries, and dilates the coronaries."),
      Q("se", "After 36 hours on a nitroglycerin drip, its effect is fading. Why?", ["Tachyphylaxis; a nitrate-free interval is needed", "Cyanide toxicity", "Hyperkalemia", "Rebound hypertension"], 0, "Tachyphylaxis to nitrates develops within 24-48 hours."),
      Q("uses", "In hypertensive emergency with acute heart failure, which drug is added after the IV loop diuretic?", ["Nitroglycerin", "Hydralazine", "Labetalol", "Diltiazem"], 0, "Acute HF: loop first to dry the lungs, then the venous vasodilator nitroglycerin."),
      Q("se", "What is the most common side effect of nitroglycerin?", ["Headache", "Constipation", "Hair growth", "Gynecomastia"], 0, "Nitroglycerin causes headache, flushing and hypotension."),
      Q("avoid", "Why should nitrates be avoided in obstructive hypertrophic cardiomyopathy?", ["Lower preload worsens the LVOT obstruction", "They cause bradycardia", "They raise afterload", "They cause hyperkalemia"], 0, "In HCM with LVOT obstruction, vasodilators including nitrates worsen obstruction."),
      Q("pearls", "How fast does IV nitroglycerin work, and how fast does it wear off?", ["Onset 2-5 minutes; effect gone 5-10 minutes after stopping", "Onset 1 hour; lasts 50 hours", "Onset 2 days; lasts a week", "Onset 30 seconds; lasts 24 hours"], 0, "Onset of action 2-5 minutes; the antihypertensive effect disappears in 5-10 minutes.")
    ]),

    Med("med-nicardipine", "Nicardipine (Cardene) IV", "IV dihydropyridine CCB drip; drug of choice for the brain", ["Hypertensive Crisis", "Hypertension Part III"], {
      uses: ul([
        "<strong>Most hypertensive emergencies except acute heart failure</strong>.",
        "<strong>Intracerebral hemorrhage and SAH: drug of choice</strong>.",
        "<strong>Hypertensive encephalopathy</strong>.",
        "<strong>Acute ischemic stroke</strong> (with labetalol)."
      ]),
      moa: "<p>IV <strong>DHP calcium channel blocker</strong>: blocks peripheral calcium channels → vasodilation. Can also lower myocardial contraction strength.</p>",
      avoid: ul([
        "<strong>Aortic stenosis</strong>.",
        "<strong>Severe ventricular dysfunction (HFrEF)</strong> and acute heart failure.",
        "<strong>Hypertrophic cardiomyopathy</strong>.",
        "Caution with coronary ischemia."
      ]),
      se: ul([
        "Reflex <strong>tachycardia</strong>, headache, flushing.",
        "<strong>Local phlebitis</strong>: rotate the IV site every 12 hours; give through a large peripheral vein or central line."
      ]),
      pearls: ul([
        "Peak effect in 1–2 hours; drops sharply over 30 minutes after stopping, but about <strong>50 hours</strong> for all effect to resolve.",
        "Effect is prolonged in kidney disease."
      ]) + Mn("Avoid nicardipine", "“Stiff, Weak or Thick heart”: aortic Stenosis, Weak ventricle (HFrEF), Thick septum (HCM)")
    }, [
      Q("uses", "Hypertensive emergency from an acute intracerebral hemorrhage. Drug of choice?", ["Nicardipine", "Nitroprusside", "Hydralazine", "Nitroglycerin"], 0, "For ICH/SAH, nicardipine is the DOC; labetalol or esmolol are alternatives; avoid nitroprusside and hydralazine."),
      Q("avoid", "Which patient should NOT receive IV nicardipine?", ["Severe aortic stenosis", "Hypertensive encephalopathy", "Acute ischemic stroke", "Subarachnoid hemorrhage"], 0, "Nicardipine is contraindicated in aortic stenosis, severe ventricular dysfunction and HCM."),
      Q("se", "Why is the nicardipine IV site rotated every 12 hours?", ["It irritates the vein (phlebitis)", "It crystallizes in the line", "To prevent cyanide build-up", "To avoid tachyphylaxis"], 0, "Cardene may cause vein irritation, so the site should be rotated every 12 hours."),
      Q("uses", "Which drug is listed for hypertensive encephalopathy on the emergency algorithm?", ["Nicardipine", "Fenoldopam", "Esmolol", "Nitroglycerin"], 0, "Hypertensive encephalopathy → nicardipine."),
      Q("moa", "What class is nicardipine?", ["IV dihydropyridine calcium channel blocker", "Non-dihydropyridine calcium channel blocker", "Nitrate", "Alpha/beta blocker"], 0, "Nicardipine is a DHP CCB given as an IV drip."),
      Q("pearls", "How long does it take for all of nicardipine's antihypertensive effect to resolve?", ["About 50 hours", "About 10 minutes", "About 2 hours", "About 1 week"], 0, "BP effect falls sharply 30 minutes after stopping, but full resolution takes about 50 hours (longer in kidney disease)."),
      Q("avoid", "In which hypertensive emergency is nicardipine NOT recommended?", ["Acute heart failure", "Acute ischemic stroke", "Hypertensive encephalopathy", "Subarachnoid hemorrhage"], 0, "Nicardipine is used for most HTN emergencies except acute heart failure."),
      Q("se", "Which side effects are listed for IV nicardipine?", ["Tachycardia, headache, flushing, phlebitis", "Bradycardia and heart block", "Cyanide toxicity", "Scalp tingling and bronchospasm"], 0, "Nicardipine AEs: tachycardia, headache, flushing, local phlebitis.")
    ]),

    Med("med-esmolol", "Esmolol IV", "Ultra-short-acting IV β1 blocker for dissection and the OR", ["Hypertensive Crisis"], {
      uses: ul([
        "<strong>Aortic dissection</strong>: get <strong>HR &lt; 60 first</strong>, then SBP 100–120 (with nitroprusside and morphine).",
        "<strong>Perioperative</strong> BP and HR control.",
        "ACS in hypertensive emergency (IV beta blocker option); alternative for ICH/SAH."
      ]),
      moa: "<p>IV <strong>cardioselective (β1) beta blocker</strong>, given as a bolus then infusion: lowers HR and contractility, so less shear force on the aortic wall. Very short acting, so it is easy to titrate.</p>",
      avoid: ul([
        "<strong>Decompensated HFrEF</strong>.",
        "Asthma, heart block.",
        "Cocaine or pheochromocytoma without alpha blockade."
      ]),
      se: ul(["Hypotension, nausea.", "Bronchospasm (asthma), first-degree heart block.", "Worsening decompensated HFrEF."]),
      pearls: HY("Dissection: beta blocker FIRST (HR &lt; 60), vasodilator second, so the vasodilator doesn't cause reflex tachycardia.")
    }, [
      Q("uses", "A patient has tearing chest pain radiating to the back with BP 200/110. CT shows an aortic dissection. What is the first target?", ["Heart rate under 60 with an IV beta blocker such as esmolol", "Start hydralazine first", "Lower SBP slowly over 24 hours", "Give a loop diuretic"], 0, "Dissection: immediately HR < 60 with esmolol, then SBP 100-120 within 20 minutes (adding nitroprusside)."),
      Q("uses", "Besides aortic dissection, what is esmolol's listed indication?", ["Perioperative BP control", "Eclampsia", "Hypertensive nephrosclerosis", "Chronic outpatient HTN"], 0, "Esmolol indications: aortic dissection; perioperative."),
      Q("avoid", "Which condition is a contraindication to esmolol?", ["Decompensated HFrEF", "Aortic dissection", "Perioperative hypertension", "Sinus tachycardia"], 0, "Esmolol AEs include worsening decompensated HFrEF, hypotension, asthma and first-degree heart block."),
      Q("moa", "What type of drug is esmolol?", ["IV cardioselective beta blocker", "IV alpha-1 blocker", "IV calcium channel blocker", "IV nitrate"], 0, "Esmolol is a short-acting IV β1-selective beta blocker."),
      Q("pearls", "In aortic dissection, why is the beta blocker started before the vasodilator?", ["To prevent reflex tachycardia, which increases shear stress", "Because vasodilators don't work alone", "To avoid cyanide toxicity", "Because beta blockers raise BP first"], 0, "The vasodilator alone would trigger reflex tachycardia; slowing the HR first protects the aortic wall."),
      Q("se", "Which side effects are listed for esmolol?", ["Hypotension, nausea, bronchospasm, first-degree heart block", "Cyanide toxicity and methemoglobinemia", "Hirsutism and edema", "Cough and angioedema"], 0, "Esmolol AEs: hypotension, nausea, asthma, first-degree heart block, decompensated HFrEF.")
    ])
  ]);
}());
