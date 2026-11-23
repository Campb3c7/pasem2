/* Hallmarks: CAD Part V (Pharmacology, Stager): drug red flags you must recognize. Source: source-material/cardio-part-3/text/cad-part-5.md. Only APPEND hallmarks. */
(function () {
  "use strict";
  var C = window.Hallmarks.C;
  window.Hallmarks.lecture("cad-part-5", "CAD Part V: Pharmacology (drug red flags)", [

    C("hm-pde5-nitrate", "Nitrate + PDE-5 inhibitor hypotension", "Severe hypotension when nitrates meet sildenafil-type drugs.",
      "Took sildenafil/vardenafil in the last 24 h (tadalafil 48 h) + nitro = crashing BP. Ask before giving nitro.", [
        ["cause", "Nitrate given within 24 hours of a PDE-5 inhibitor (48 hours for tadalafil)", "Both drugs raise cGMP and dilate vessels."],
        ["danger", "Severe hypotension and possible cardiogenic shock", "The combined vasodilation drops preload and pressure."],
        ["who", "Men on ED drugs or patients on PDE-5 inhibitors for pulmonary hypertension", "These are the two uses the slide names."]
      ]),

    C("hm-nitrate-tolerance", "Nitrate tolerance and headache", "Common nitrate problems.",
      "Long-acting nitrate stops working = tolerance; give a nitrate-free interval. Throbbing headache = vasodilation.", [
        ["cause", "Continuous exposure to long-acting nitrates", "Without a break the vessels stop responding."],
        ["tx", "Daily nitrate-free interval", "A break restores sensitivity."],
        ["sx", "Headache and flushing", "Nitrates dilate cerebral and skin vessels."]
      ]),

    C("hm-nitrate-avoid", "Who should NOT get nitrates", "Preload-dependent patients who crash with nitro.",
      "RV infarct, severe AS, HCM with obstruction, hypotension = no nitro.", [
        ["who", "Suspected RV infarction", "The RV depends on preload, and nitro removes it."],
        ["who", "Severe aortic stenosis", "A fixed outflow needs preload to keep cardiac output."],
        ["who", "Hypertrophic cardiomyopathy with LV outflow obstruction", "Lower preload makes the obstruction worse."]
      ]),

    C("hm-clopidogrel-ttp", "Clopidogrel: TTP", "A rare but serious clopidogrel reaction.",
      "On clopidogrel + fever, weakness, low platelets, kidney trouble, neuro changes = TTP: urgent.", [
        ["sx", "Fever, weakness, thrombocytopenia, renal dysfunction or neurologic changes", "That is the TTP picture the slide lists."],
        ["danger", "Rare but needs urgent recognition and treatment", "TTP can be fatal if missed."],
        ["buzz", "Thienopyridine (with prasugrel)", "Clopidogrel and prasugrel are thienopyridines; ticagrelor is not."]
      ]),

    C("hm-prasugrel-avoid", "Prasugrel: who can't take it", "Prasugrel's bleeding cautions.",
      "Prior stroke or TIA = never prasugrel; age ≥75 = generally avoid; under 60 kg = 5 mg.", [
        ["avoid", "History of stroke or TIA", "Prasugrel is contraindicated after stroke or TIA because of bleeding risk."],
        ["who", "Generally avoided at age 75 or older", "Bleeding risk outweighs benefit in older patients."],
        ["tx", "Consider 5 mg daily if under 60 kg", "Low body weight raises drug exposure and bleeding."]
      ]),

    C("hm-ticagrelor-se", "Ticagrelor side effects", "The P2Y12 inhibitor that causes dyspnea.",
      "New mild dyspnea after starting ticagrelor (HF and ischemia ruled out) + high uric acid = ticagrelor.", [
        ["sx", "Mild to moderate dyspnea that often resolves", "Dyspnea is a known ticagrelor effect."],
        ["labs", "Hyperuricemia, so caution with gout", "Ticagrelor can raise serum uric acid."],
        ["avoid", "Aspirin above 100 mg a day", "High-dose aspirin may reduce ticagrelor's effect."]
      ]),

    C("hm-bb-ccb-combo", "Beta blocker + non-DHP CCB", "A dangerous antianginal combination.",
      "Metoprolol + verapamil or diltiazem = excess bradycardia, AV block, worse LV function.", [
        ["danger", "Excessive bradycardia and AV block", "Both drugs slow the SA and AV nodes."],
        ["danger", "Worsening LV dysfunction", "Both drugs lower contractility."],
        ["tx", "If combining, pair a beta blocker with a DHP CCB (amlodipine) instead", "DHPs dilate vessels without slowing the nodes."]
      ]),

    C("hm-ranolazine-se", "Ranolazine cautions", "The late sodium current blocker.",
      "Ranolazine = QT prolongation, no effect on HR or BP, avoid in cirrhosis and with strong CYP3A inhibitors.", [
        ["ekg", "QT prolongation", "Ranolazine can lengthen the QTc."],
        ["avoid", "Liver cirrhosis and strong CYP3A inhibitors (ketoconazole, clarithromycin)", "It is heavily metabolized by the liver."],
        ["buzz", "No effect on heart rate or blood pressure", "That makes it useful when BP or HR is already low."]
      ]),

    C("hm-morphine-acs", "Morphine in ACS", "Why morphine is avoided unless pain is severe.",
      "Morphine may delay oral P2Y12 inhibitors; use only for severe refractory pain; naloxone on hand.", [
        ["danger", "May delay the effect of oral P2Y12 inhibitors", "Opioids slow gut absorption of the antiplatelet."],
        ["tx", "Only for severe pain despite maximal anti-ischemic therapy", "Nitro and beta blockers come first."],
        ["tx", "Reversal: naloxone 0.4 mg IV", "Keep naloxone on hand when giving opioids."]
      ])
  ], {
    nitro: ["hm-pde5-nitrate", "hm-nitrate-tolerance", "hm-nitrate-avoid", "hm-morphine-acs"],
    plt: ["hm-clopidogrel-ttp", "hm-prasugrel-avoid", "hm-ticagrelor-se"],
    angina: ["hm-bb-ccb-combo", "hm-ranolazine-se"]
  });
}());
