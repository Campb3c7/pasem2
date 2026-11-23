/*
  Cardio Part 3 brand <-> generic names, drilled in the Medications tool's
  "Brand ⇄ Generic" tab (brand-drill.js) and shown as a "Brand names" box on
  each medication. Accurate US brand names only; drugs with no common brand
  (heparin, morphine, atropine, dobutamine...) are left out.
  B(id, generic, [brands], class, [medication ids], note?)
  Ids "br-*" are progress keys: never rename, only append.
*/
(function () {
  "use strict";
  function B(id, generic, brands, cls, meds, note) {
    return { id: id, generic: generic, brands: brands, cls: cls, meds: meds, note: note || "" };
  }
  window.CARDIO3_BRANDS = {
    progressKey: "pasem2:brands:cardio-part-3:progress",
    items: [
      // Antianginals
      B("br-ntg", "nitroglycerin SL tablet / spray", ["Nitrostat", "Nitrolingual"], "Nitrates", ["med3-ntg-short"], "Nitrostat = SL tablet, Nitrolingual = spray."),
      B("br-ntg-patch", "nitroglycerin patch / ointment", ["Nitro-Dur", "Nitro-Bid"], "Nitrates", ["med3-nitrate-long"], "Nitro-Dur = patch, Nitro-Bid = ointment; take the patch off 10-12 h a day."),
      B("br-ismn", "isosorbide mononitrate", ["Imdur"], "Nitrates", ["med3-nitrate-long"]),
      B("br-isdn", "isosorbide dinitrate", ["Isordil"], "Nitrates", ["med3-nitrate-long"]),
      B("br-ranolazine", "ranolazine", ["Ranexa"], "Other antianginal", ["med3-ranolazine"]),
      B("br-metoprolol-t", "metoprolol tartrate", ["Lopressor"], "Beta blockers", ["med3-bb-angina", "med3-bb-hf"], "Tartrate (Lopressor) is short-acting; succinate (Toprol-XL) is the HF one."),
      B("br-metoprolol-s", "metoprolol succinate", ["Toprol-XL"], "Beta blockers", ["med3-bb-angina", "med3-bb-hf"], "XL = extended release: the once-daily metoprolol used in HFrEF."),
      B("br-atenolol", "atenolol", ["Tenormin"], "Beta blockers", ["med3-bb-angina"]),
      B("br-carvedilol", "carvedilol", ["Coreg"], "Beta blockers", ["med3-bb-hf", "med3-bb-angina"]),
      B("br-bisoprolol", "bisoprolol", ["Zebeta"], "Beta blockers", ["med3-bb-hf", "med3-bb-angina"]),
      B("br-propranolol", "propranolol", ["Inderal"], "Beta blockers", ["med3-bb-angina"]),
      B("br-amlodipine", "amlodipine", ["Norvasc"], "Calcium channel blockers", ["med3-ccb-dhp"]),
      B("br-nifedipine", "nifedipine", ["Procardia", "Adalat CC"], "Calcium channel blockers", ["med3-ccb-dhp"]),
      B("br-verapamil", "verapamil", ["Calan", "Verelan"], "Calcium channel blockers", ["med3-ccb-nondhp"]),
      B("br-diltiazem", "diltiazem", ["Cardizem"], "Calcium channel blockers", ["med3-ccb-nondhp"]),
      // Antiplatelets
      B("br-clopidogrel", "clopidogrel", ["Plavix"], "Antiplatelets", ["med3-clopidogrel"]),
      B("br-prasugrel", "prasugrel", ["Effient"], "Antiplatelets", ["med3-prasugrel"]),
      B("br-ticagrelor", "ticagrelor", ["Brilinta"], "Antiplatelets", ["med3-ticagrelor"]),
      B("br-asa-dipyridamole", "aspirin + extended-release dipyridamole", ["Aggrenox"], "Antiplatelets", ["med3-adenosine-stress"], "Hold it 48 h before adenosine stress: dipyridamole boosts adenosine."),
      B("br-dipyridamole", "dipyridamole", ["Persantine"], "Stress test agents", ["med3-adenosine-stress"]),
      // Anticoagulants and lytics
      B("br-enoxaparin", "enoxaparin", ["Lovenox"], "Anticoagulants", ["med3-enoxaparin"]),
      B("br-fondaparinux", "fondaparinux", ["Arixtra"], "Anticoagulants", ["med3-enoxaparin", "guide3-antithrombotic"]),
      B("br-bivalirudin", "bivalirudin", ["Angiomax"], "Anticoagulants", ["med3-ufh", "guide3-antithrombotic"]),
      B("br-warfarin", "warfarin", ["Coumadin", "Jantoven"], "Anticoagulants", ["guide3-antithrombotic"]),
      B("br-apixaban", "apixaban", ["Eliquis"], "Anticoagulants", ["guide3-antithrombotic"]),
      B("br-alteplase", "alteplase (tPA)", ["Activase"], "Fibrinolytics", ["med3-fibrinolytics"]),
      B("br-tenecteplase", "tenecteplase", ["TNKase"], "Fibrinolytics", ["med3-fibrinolytics"]),
      // ACS other
      B("br-naloxone", "naloxone", ["Narcan"], "ACS: other drugs", ["med3-opioids"]),
      B("br-lorazepam", "lorazepam", ["Ativan"], "ACS: other drugs", ["med3-benzo-stimulant"]),
      B("br-nitroprusside", "nitroprusside", ["Nitropress", "Nipride"], "ACS: other drugs", ["med3-nitroprusside"]),
      // Heart failure
      B("br-lisinopril", "lisinopril", ["Prinivil", "Zestril"], "ACE inhibitors", ["med3-acei"]),
      B("br-enalapril", "enalapril", ["Vasotec"], "ACE inhibitors", ["med3-acei"]),
      B("br-quinapril", "quinapril", ["Accupril"], "ACE inhibitors", ["med3-acei"]),
      B("br-ramipril", "ramipril", ["Altace"], "ACE inhibitors", ["med3-acei"]),
      B("br-losartan", "losartan", ["Cozaar"], "ARBs", ["med3-arb"]),
      B("br-valsartan", "valsartan", ["Diovan"], "ARBs", ["med3-arb"]),
      B("br-candesartan", "candesartan", ["Atacand"], "ARBs", ["med3-arb"]),
      B("br-irbesartan", "irbesartan", ["Avapro"], "ARBs", ["med3-arb"]),
      B("br-arni", "sacubitril/valsartan", ["Entresto"], "Heart failure drugs", ["med3-arni"]),
      B("br-spironolactone", "spironolactone", ["Aldactone"], "Aldosterone antagonists", ["med3-mra"]),
      B("br-eplerenone", "eplerenone", ["Inspra"], "Aldosterone antagonists", ["med3-mra"]),
      B("br-dapagliflozin", "dapagliflozin", ["Farxiga"], "SGLT2 inhibitors", ["med3-sglt2"]),
      B("br-empagliflozin", "empagliflozin", ["Jardiance"], "SGLT2 inhibitors", ["med3-sglt2"]),
      B("br-bidil", "hydralazine + isosorbide dinitrate", ["BiDil"], "Heart failure drugs", ["med3-hydralazine-isdn"]),
      B("br-ivabradine", "ivabradine", ["Corlanor"], "Heart failure drugs", ["med3-ivabradine"]),
      B("br-digoxin", "digoxin", ["Lanoxin"], "Heart failure drugs", ["med3-digoxin"]),
      // Diuretics
      B("br-furosemide", "furosemide", ["Lasix"], "Diuretics", ["med3-loop"]),
      B("br-bumetanide", "bumetanide", ["Bumex"], "Diuretics", ["med3-loop"]),
      B("br-torsemide", "torsemide", ["Demadex", "Soaanz"], "Diuretics", ["med3-loop"]),
      B("br-hctz", "hydrochlorothiazide (HCTZ)", ["Microzide"], "Diuretics", ["med3-thiazide"], "Mostly prescribed as plain HCTZ."),
      B("br-chlorthalidone", "chlorthalidone", ["Thalitone"], "Diuretics", ["med3-thiazide"]),
      B("br-chlorothiazide", "chlorothiazide", ["Diuril"], "Diuretics", ["med3-thiazide"]),
      B("br-metolazone", "metolazone", ["Zaroxolyn"], "Diuretics", ["med3-thiazide"]),
      B("br-amiloride", "amiloride", ["Midamor"], "Diuretics", ["med3-k-sparing-na"]),
      B("br-triamterene", "triamterene", ["Dyrenium"], "Diuretics", ["med3-k-sparing-na"], "With HCTZ it is Dyazide or Maxzide."),
      // Prevention
      B("br-atorvastatin", "atorvastatin", ["Lipitor"], "Statins and lipid drugs", ["med3-statin"]),
      B("br-rosuvastatin", "rosuvastatin", ["Crestor"], "Statins and lipid drugs", ["med3-statin"]),
      B("br-simvastatin", "simvastatin", ["Zocor"], "Statins and lipid drugs", ["med3-statin"]),
      B("br-pravastatin", "pravastatin", ["Pravachol"], "Statins and lipid drugs", ["med3-statin"]),
      B("br-lovastatin", "lovastatin", ["Mevacor", "Altoprev"], "Statins and lipid drugs", ["med3-statin"]),
      B("br-ezetimibe", "ezetimibe", ["Zetia"], "Statins and lipid drugs", ["med3-statin"]),
      B("br-nicotine-patch", "nicotine patch", ["NicoDerm CQ"], "Quit smoking", ["med3-nrt"]),
      B("br-nicotine-gum", "nicotine gum / lozenge", ["Nicorette"], "Quit smoking", ["med3-nrt"]),
      B("br-nicotine-inhaler", "nicotine inhaler / nasal spray", ["Nicotrol"], "Quit smoking", ["med3-nrt"]),
      B("br-bupropion", "bupropion", ["Zyban", "Wellbutrin"], "Quit smoking", ["med3-bupropion"], "Zyban is the quit-smoking brand; Wellbutrin is the antidepressant brand of the same drug."),
      B("br-varenicline", "varenicline", ["Chantix"], "Quit smoking", ["med3-varenicline"]),
      // Testing and cath lab
      B("br-adenosine", "adenosine", ["Adenoscan", "Adenocard"], "Stress test agents", ["med3-adenosine-stress"], "Adenoscan = the stress-test product; Adenocard = the PSVT push."),
      B("br-regadenoson", "regadenoson", ["Lexiscan"], "Stress test agents", ["med3-regadenoson"]),
      B("br-diphenhydramine", "diphenhydramine", ["Benadryl"], "Cath lab prep", ["med3-cath-prep"]),
      B("br-metformin", "metformin", ["Glucophage"], "Cath lab prep", ["med3-cath-prep"]),
      // Drugs that interact with nitrates (PDE-5 inhibitors)
      B("br-sildenafil", "sildenafil", ["Viagra", "Revatio"], "PDE-5 inhibitors (no nitrates)", ["guide3-hold"], "No nitrates within 24 h of sildenafil or vardenafil."),
      B("br-tadalafil", "tadalafil", ["Cialis", "Adcirca"], "PDE-5 inhibitors (no nitrates)", ["guide3-hold"], "No nitrates within 48 h of tadalafil."),
      B("br-vardenafil", "vardenafil", ["Levitra"], "PDE-5 inhibitors (no nitrates)", ["guide3-hold"])
    ]
  };
}());
