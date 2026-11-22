/*
  Medications: Other ACS drugs (Cardio Part 3). Source: cad-part-5.md slides
  46, 48, 55-58, 84; cad-part-4.md slides 19, 59, 65-66, 70-71; cardiac-surgery.md
  slides 55-57 (ICU calls, speaker notes). Only append questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent, M = window.MedContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, Q = H.Q, L = H.L, Med = M.Med, ul = M.ul;

  window.CARDIO3_MEDS_ACS_OTHER = L("meds3-acs-other", "Other ACS & ICU drugs", [

    Med("med3-oxygen", "Oxygen", "Only if SpO2 is below 90% in ACS; no benefit without hypoxia", ["CAD Part IV: ACS", "CAD Part V: Pharmacology", "Heart Failure"], {
      uses: ul(["ACS: give if <strong>SpO<sub>2</sub> &lt;90%</strong> to raise myocardial O<sub>2</sub> supply.", "Decompensated HF: give if hypoxic (lecture goal SpO<sub>2</sub> &gt;95%), with NIV (CPAP/BiPAP) as needed."]),
      moa: "<p>Raises arterial O<sub>2</sub> content, one of the determinants of myocardial O<sub>2</sub> supply.</p>",
      avoid: ul(["<strong>Routine O<sub>2</sub> in a non-hypoxic ACS patient</strong>: no clinical benefit, and hyperoxemia may cause coronary vasospasm."]),
      se: ul(["Hyperoxemia → coronary vasoconstriction/spasm (CAD IV)."]),
      pearls: ul(["Part of the old MONA, now used selectively: oxygen and nitro treat symptoms, they do not change outcomes."]) + HY("ACS: O2 only if sat < 90%.")
    }, [
      Q("avoid", "Suspected NSTEMI, SpO2 97% on room air. Should you start 4 L oxygen?", ["No: oxygen helps only if SpO2 is below 90%", "Yes, everyone with chest pain gets oxygen", "Yes, 15 L non-rebreather", "Only if troponin is high"], 0, "Without hypoxia oxygen adds nothing and too much may constrict the coronaries."),
      Q("se", "Why can unnecessary oxygen be harmful in ACS?", ["Hyperoxemia may cause coronary vasospasm", "It lowers hemoglobin", "It blocks aspirin", "It causes bradycardia"], 0, "High O2 levels constrict coronary vessels, which can lower supply."),
      Q("uses", "Acute pulmonary edema with SpO2 84%. First supportive steps?", ["Oxygen, sit upright, and NIV such as BiPAP if needed", "Lay flat and give fluids", "Withhold oxygen until ABG", "Start digoxin"], 0, "Hypoxic HF needs oxygen and positive pressure, which also lowers preload."),
      Q("moa", "Oxygen helps an ischemic heart only when the patient is hypoxic because...", ["It raises arterial O2 content, which is already normal in non-hypoxic patients", "It slows the heart", "It dilates coronaries", "It lowers preload"], 0, "Saturation cannot go much above normal, so extra O2 does not add supply.")
    ]),

    Med("med3-opioids", "Opioids (morphine, fentanyl) and naloxone", "Only for severe pain despite maximal anti-ischemic therapy; delays oral P2Y12 inhibitors", ["CAD Part IV: ACS", "CAD Part V: Pharmacology"], {
      uses: ul(["<strong>Severe pain that persists despite maximally tolerated anti-ischemic therapy</strong> (nitro, beta blocker).", "<strong>Morphine 2–4 mg IV</strong>, repeat every 5–15 min (up to 10 mg). <strong>Fentanyl 25–50 mcg IV</strong> (up to 100 mcg).",
        "<strong>Naloxone 0.4 mg IV push</strong> reverses them: have it on hand."]),
      moa: "<p>Opioid receptor agonists: relieve pain and anxiety (less catecholamine drive, standard teaching). They do not treat ischemia.</p>",
      avoid: ul(["Not routine or first-line; do not use just to mask ongoing ischemia.", "Hypotension, respiratory depression."]),
      se: ul(["Hypotension, <strong>respiratory depression</strong>, nausea, sedation.", "<strong>Slows gastric emptying → delays oral P2Y12 inhibitors</strong>.", "Pruritus from histamine release, which is not always an allergy."]),
      pearls: ul(["Monitor pain relief, BP, RR, and CNS/respiratory depression.", "Never delay angiography or reperfusion to get pain controlled."]) + HY("Opioids in ACS: rescue only. They delay P2Y12 absorption.")
    }, [
      Q("se", "Why does the lecture discourage routine morphine in ACS?", ["It slows gastric emptying and delays oral P2Y12 inhibitors", "It causes coronary spasm", "It raises blood pressure", "It is an antiplatelet"], 0, "If ticagrelor or clopidogrel is absorbed late, platelets stay active longer."),
      Q("uses", "STEMI patient on SL and IV nitro and a beta blocker still has 9/10 pain. Which analgesic dose fits?", ["Morphine 2-4 mg IV, may repeat", "Ibuprofen 800 mg", "Ketorolac 30 mg IV", "Oxycodone 30 mg PO"], 0, "Opioids are for pain resistant to maximal anti-ischemic therapy; NSAIDs are avoided."),
      Q("se", "After morphine, a patient has RR 6 and pinpoint pupils. What do you give?", ["Naloxone 0.4 mg IV push", "Flumazenil", "Atropine", "More nitroglycerin"], 0, "Naloxone reverses opioid respiratory depression."),
      Q("se", "A patient's arms itch after fentanyl. Is he allergic?", ["Not necessarily: opioid histamine release causes pruritus", "Yes, stop all opioids forever", "Yes, give epinephrine", "It means an overdose"], 0, "Itching is a common histamine effect, not proof of true allergy."),
      Q("avoid", "Why not just give morphine early to make the STEMI patient comfortable?", ["It can mask ongoing ischemia and must not delay reperfusion", "It dissolves the clot", "It lowers troponin", "It is required before PCI"], 0, "Pain is a sign of ongoing ischemia; the fix is opening the artery.")
    ]),

    Med("med3-benzo-stimulant", "Benzodiazepines (cocaine/meth chest pain)", "First drug for stimulant-associated ischemia: calm the sympathetic surge", ["CAD Part I: Foundations", "CAD Part IV: ACS", "CAD Part V: Pharmacology"], {
      uses: ul(["<strong>Cocaine or methamphetamine chest pain</strong>: benzodiazepines to reduce sympathetic stimulation.", "Plus <strong>nitrates</strong> for coronary vasospasm; <strong>CCBs</strong> may be used when appropriate."]),
      moa: "<p>GABA-A enhancement → sedation and less central sympathetic outflow → lower HR, BP and myocardial O<sub>2</sub> demand (standard teaching).</p>",
      avoid: ul(["<strong>Beta blockers</strong> (especially nonselective) in stimulant ischemia: unopposed α worsens vasospasm."]),
      se: ul(["Sedation, respiratory depression (standard teaching)."]),
      pearls: ul(["Ask every chest pain patient about recent cocaine or meth: stimulants raise demand (tachycardia, HTN) and cut supply (spasm, thrombosis)."]) + HY("Cocaine chest pain: benzo + nitro (+/- CCB). No beta blocker.")
    }, [
      Q("uses", "A 28-year-old agitated man with chest pain, HR 128, BP 178/100 used cocaine an hour ago. Best first drug?", ["Lorazepam (a benzodiazepine)", "Propranolol", "Alteplase", "Furosemide"], 0, "Benzodiazepines blunt the sympathetic surge driving tachycardia, hypertension and demand."),
      Q("avoid", "In cocaine-associated chest pain, why avoid propranolol?", ["Unopposed alpha stimulation can worsen coronary spasm and BP", "It interacts with aspirin", "It causes hyperkalemia", "It raises troponin"], 0, "Blocking β2 vasodilation leaves cocaine's α vasoconstriction unchecked."),
      Q("uses", "After a benzodiazepine, the cocaine patient still has chest pain from vasospasm. Add?", ["Nitroglycerin", "Metoprolol", "Digoxin", "Ivabradine"], 0, "Nitrates relax the spasming coronary artery."),
      Q("moa", "Cocaine causes ischemia through which pair of effects?", ["More demand from tachycardia and HTN, and less supply from spasm or thrombosis", "Less demand and more supply", "Anemia and hypoxia", "Aortic stenosis"], 0, "It pushes both sides of the supply-demand balance the wrong way.")
    ]),

    Med("med3-atropine", "Atropine (bradycardia after MI)", "For symptomatic sinus brady or AV block, classic with inferior MI", ["CAD Part IV: ACS"], {
      uses: ul(["<strong>Symptomatic bradycardia</strong> or AV block after MI, especially <strong>inferior MI</strong> (RCA supplies the SA and AV nodes in most people, standard teaching).",
        "Refractory or unstable: temporary pacing; permanent pacemaker only for persistent conduction disease after a waiting period."]),
      moa: "<p>Muscarinic blocker → removes vagal tone at the SA and AV node → faster rate and conduction (standard teaching).</p>",
      avoid: ul(["Infranodal block (Mobitz II, wide-complex 3rd degree) responds poorly: pace instead (standard teaching)."]),
      se: ul(["Tachycardia (raises O<sub>2</sub> demand), dry mouth, urinary retention, confusion (standard teaching)."]),
      pearls: ul(["A new bundle branch block alone does not automatically need a pacemaker, but it may mean a big infarct."]) + HY("Inferior MI + symptomatic brady → atropine, then pacing.")
    }, [
      Q("uses", "Inferior STEMI, HR 38 sinus bradycardia, BP 82/50, dizzy. First drug?", ["Atropine", "Metoprolol", "Diltiazem", "Adenosine"], 0, "Inferior MI often raises vagal tone at the SA node, which atropine blocks."),
      Q("uses", "Atropine does not improve symptomatic bradycardia after MI. Next step?", ["Temporary pacing", "Permanent pacemaker immediately", "Beta blocker", "Observe for 2 weeks"], 0, "Refractory unstable brady needs pacing; permanent pacing waits to see if conduction recovers."),
      Q("pearls", "After an anterior MI a new isolated right bundle branch block appears; the patient is stable. Pacemaker now?", ["Not automatically, but it may signal extensive injury", "Yes, permanent pacemaker today", "Give atropine", "Give adenosine"], 0, "Isolated new BBB is not itself a pacing indication."),
      Q("se", "Why is atropine used only when the bradycardia is symptomatic in MI?", ["Faster rates raise myocardial oxygen demand", "It causes bleeding", "It dissolves stents", "It lowers BP"], 0, "Speeding up an ischemic heart costs oxygen, so it is given only when slow rate hurts perfusion.")
    ]),

    Med("med3-nitroprusside", "Nitroprusside (post-CABG hypertension)", "IV arterial and venous dilator the Cardiac Surgery lecture uses for high BP in the ICU after CABG", ["Cardiac Surgery"], {
      uses: ul(["8 h post-CABG, <strong>BP 180/110</strong>, falling urine output: after checking pain, history of HTN, filling pressures, output and SVR, <strong>give nitroprusside</strong> (speaker notes).",
        "Excess afterload (high SVR) strains the fresh grafts and suture lines (standard teaching)."]),
      moa: "<p>Releases nitric oxide → dilates arteries and veins → fast, titratable drop in afterload and preload; works in seconds and wears off in minutes (standard teaching).</p>",
      avoid: ul(["Hypotension or hypovolemia.", "Prolonged high doses or renal/hepatic failure: cyanide/thiocyanate toxicity (standard teaching)."]),
      se: ul(["Hypotension; <strong>cyanide toxicity</strong> with long infusions (standard teaching)."]),
      pearls: ul(["Compare the three ICU calls: BP 75 with HR 130 and low UO → hypovolemia/bleeding (check CVP, chest tube output, Hgb); BP 180/110 → nitroprusside; BP 75 with HR 90 → no speaker notes; think pump failure, vasodilatory shock or tamponade (our read: echo, CVP, cardiac output, SVR)."]) + HY("Post-CABG hypertension → nitroprusside.")
    }, [
      Q("uses", "Eight hours after CABG: BP 180/110, HR 90, urine output dropping. He is awake and pain is controlled. Treatment in the lecture?", ["Nitroprusside", "IV fluids bolus", "Dobutamine", "Protamine"], 0, "Fast titratable vasodilation lowers afterload that strains the heart and grafts."),
      Q("uses", "Eight hours after CABG: BP 75/palp, HR 130, urine output falling. Most likely problem?", ["Hypovolemia, possibly from bleeding", "Hypertensive crisis", "Nitroprusside toxicity", "Hyperkalemia"], 0, "Low BP with a fast HR is the heart compensating for low volume, so check chest tube output, CVP and Hgb."),
      Q("se", "What toxicity limits long nitroprusside infusions?", ["Cyanide", "Lithium", "Digoxin", "Methemoglobin from aspirin"], 0, "Nitroprusside releases cyanide as it breaks down, which builds up over time."),
      Q("moa", "Why is nitroprusside a good ICU choice for BP spikes?", ["It works in seconds and wears off in minutes, so it is titratable", "It lasts 24 hours", "It is oral", "It raises contractility"], 0, "Short onset and offset let you dial BP precisely.")
    ])
  ]);
}());
