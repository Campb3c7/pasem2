/*
  Medications: IV fluids & blood products (Cardio Part 2). Source:
  shock-pressors-fluids.md slides 34-35, 85-86, 99-111; vascular-disease-part-1.md
  slide 93 (ruptured AAA). "How it works" = tonicity and where the fluid goes.
  Only append questions (ids "<med id>|<index>").
*/
(function () {
  "use strict";
  var H = window.DiseaseContent, M = window.MedContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, Q = H.Q, L = H.L, Med = M.Med, ul = M.ul;

  var tonicity = Tbl(["Tonicity", "Fluids"], [
    ["Isotonic", "<strong>0.9% NS, Lactated Ringer's</strong>"],
    ["Hypotonic", "<strong>0.45% NS (½NS), D5W</strong>"],
    ["Hypertonic", "<strong>D5NS, 3% NS</strong>"]
  ]);

  window.CARDIO2_MEDS_FLUIDS = L("meds2-fluids", "IV fluids & blood products", [

    Med("med-normal-saline", "0.9% normal saline (0.9NS)", "Isotonic crystalloid; the most-used IV fluid and the only one given with blood", ["Shock, Pressors & Fluid Management", "Vascular Disease Part 1"], {
      uses: ul([
        "<strong>Hypovolemia, dehydration, blood loss, DKA, hyponatremia</strong>.",
        "First fluid for volume resuscitation; ruptured AAA (with blood) on the way to surgery.",
        "<strong>The only IV fluid that can run with blood products</strong>."
      ]),
      moa: "<p><strong>Isotonic</strong>: matches serum osmolarity. As a crystalloid, only about <strong>20–30% stays in the vessels</strong>; the rest moves to the interstitium within 30 min (hence the <strong>3:1 rule</strong>: 3 mL of crystalloid for every 1 mL of blood lost).</p>" + tonicity,
      avoid: ul([
        "<strong>Heart failure</strong> from excessive volume.",
        "<strong>Cardiogenic shock with LV failure or pulmonary congestion</strong>: hold boluses; only cautious 250 mL boluses if no rales, JVD or edema on CXR, reassessing after each."
      ]),
      se: ul(["<strong>Hyperchloremic metabolic acidosis</strong> with prolonged use.", "Volume overload: edema, pulmonary edema, JVD."]),
      pearls: Tbl(["Order", "Typical amounts"], [
        ["Mild/moderate hypovolemia", "<strong>1 L bolus</strong>, then <strong>100 mL/hr</strong> until parameters improve"],
        ["Hypovolemic shock", "<strong>1–2 L wide open</strong>; watch BP, HR, JVP, urine and mentation"],
        ["Common boluses", "250, 500, 1000, 2000 mL"],
        ["Common drips", "75, 100, 125, 250 mL/hr"]
      ]) + HY("NS: isotonic, runs with blood, causes hyperchloremic acidosis.")
    }, [
      Q("uses", "Which IV fluid is the only one that can be given with blood products?", ["0.9% normal saline", "Lactated Ringer's", "D5W", "0.45% saline"], 0, "0.9NS is the only IV fluid that can be administered with blood products."),
      Q("se", "After several liters of normal saline, a patient's chloride rises and bicarbonate falls. Why?", ["Hyperchloremic metabolic acidosis from NS", "Lactic acidosis from LR", "DKA", "Respiratory alkalosis"], 0, "Prolonged 0.9NS causes hyperchloremic metabolic acidosis."),
      Q("moa", "What is the 3:1 rule?", ["Give 3 times the blood lost as isotonic crystalloid because only about 30% stays intravascular", "Give 3 L of D5W per liter of blood", "Give 1 unit of plasma per 3 units of PRBCs", "Bolus every 3 hours"], 0, "Crystalloid shifts into the interstitium; at best about 30% remains in the vessels."),
      Q("pearls", "Mild dehydration from gastroenteritis in a stable adult. Typical order?", ["1 L NS bolus, then 100 mL/hr", "3% saline 500 mL", "D5W 2 L wide open", "Albumin 25 g"], 0, "Mild or moderate hypovolemia: about 1 L isotonic saline then 100 mL/hr until parameters improve."),
      Q("avoid", "A cardiogenic shock patient has rales and JVD. What is the fluid plan?", ["Hold boluses; keep a saline lock", "2 L NS wide open", "LR 1 L bolus", "D5W at 250 mL/hr"], 0, "Hold IV fluid boluses in cardiogenic shock from LV dysfunction or pulmonary congestion."),
      Q("pearls", "How much NS is given for hypovolemic shock?", ["At least 1-2 L boluses wide open, then reassess", "250 mL and stop", "100 mL/hr only", "None until labs return"], 0, "Severe volume depletion: 1-2 L isotonic saline boluses wide open, monitoring BP, HR, JVP, urine and mental status.")
    ]),

    Med("med-lactated-ringers", "Lactated Ringer's (LR)", "Isotonic crystalloid closest to plasma; the surgical and burn fluid", ["Shock, Pressors & Fluid Management"], {
      uses: ul(["<strong>Acute blood loss</strong> (operating room, trauma).", "<strong>Third spacing</strong>: burns, ascites, pleural effusions.", "Commonly used with surgical patients."]),
      moa: "<p>Isotonic, with an electrolyte makeup similar to plasma. The <strong>lactate is a buffer</strong> (metabolized to bicarbonate) that helps prevent metabolic acidosis.</p>",
      avoid: ul(["<strong>Renal disease</strong> (contains potassium).", "<strong>Liver disease</strong> (cannot metabolize the lactate).", "<strong>pH &gt; 7.5</strong> (alkalosis)."]),
      se: ul(["Volume overload, like any crystalloid.", "Not given in the same line as blood (only NS is) (standard teaching)."]),
      pearls: ul(["Reasons for the precautions (K+ content, liver clears lactate) are standard teaching; the deck lists the precautions."]) +
        HY("LR = surgery, trauma, burns. Avoid in liver disease, renal disease, alkalosis.")
    }, [
      Q("uses", "A burn patient with large third-space losses needs resuscitation. Which fluid is the classic choice?", ["Lactated Ringer's", "D5W", "3% saline", "0.45% saline"], 0, "LR: acute blood loss in OR/trauma and third spacing (burns, ascites, effusions)."),
      Q("moa", "What does the lactate in LR do?", ["Acts as a buffer to prevent metabolic acidosis", "Raises glucose", "Lowers potassium", "Causes alkalosis on purpose"], 0, "Lactate acts as a buffer to prevent metabolic acidosis."),
      Q("avoid", "Which patient should not get LR?", ["Cirrhosis with liver failure", "Healthy trauma patient", "Burn patient", "Post-op hernia repair"], 0, "LR precautions: renal disease, liver disease, pH > 7.5."),
      Q("avoid", "A patient's ABG shows pH 7.56. Which fluid precaution applies?", ["Avoid LR when pH is above 7.5", "Avoid NS in alkalosis", "Give LR to fix alkalosis", "Give 3% saline"], 0, "LR is avoided when pH > 7.5.")
    ]),

    Med("med-hypotonic-fluids", "0.45% saline (½NS) & D5W", "Hypotonic fluids: free water, not volume", ["Shock, Pressors & Fluid Management"], {
      uses: Tbl(["Fluid", "Use"], [
        ["<strong>0.45% NS</strong>", "<strong>Hypernatremia</strong>, hypertonic extracellular dehydration"],
        ["<strong>D5W</strong>", "<strong>Free-water replacement</strong>, maintenance only (100 mL/hr), <strong>hypoglycemia</strong> (e.g. oral hypoglycemic overdose), malnourished"]
      ]),
      moa: "<p>Hypotonic: water moves out of the vessels and <strong>into cells</strong>. D5W's dextrose is metabolized, leaving free water, so it is <strong>never used for volume resuscitation</strong>.</p>",
      avoid: ul(["Not for shock or volume resuscitation.", "Patients at risk of cerebral edema (excess free water)."]),
      se: ul(["0.45% NS overuse: <strong>acute hyponatremia → cerebral edema</strong>.", "D5W overuse: <strong>hyperglycemia</strong>."]),
      pearls: ul(["D5NS is hypertonic in the bag but behaves like NS once the dextrose is used."]) +
        HY("Hypotonic = free water. Hypernatremia → ½NS. Hypoglycemia → D5W. Never for shock.")
    }, [
      Q("uses", "Which fluid treats hypernatremia?", ["0.45% normal saline", "3% saline", "Lactated Ringer's", "Albumin"], 0, "0.45NS: hypertonic extracellular dehydration and hypernatremia."),
      Q("avoid", "Why is D5W not used for a hypotensive bleeding patient?", ["It is free water that leaves the vessels, not a volume expander", "It causes hyperkalemia", "It is hypertonic", "It clots blood"], 0, "D5W is for free-water replacement and maintenance, not volume resuscitation."),
      Q("se", "What is the danger of too much 0.45% saline?", ["Acute hyponatremia with cerebral edema", "Hypernatremia", "Hyperchloremic acidosis", "Hyperkalemia"], 0, "Excess hypotonic saline can cause acute hyponatremia and cerebral edema."),
      Q("uses", "An alert patient took too much glipizide and has glucose of 45. Which IV fluid fits?", ["D5W", "0.45% saline", "3% saline", "LR"], 0, "D5W uses include hypoglycemia from oral hypoglycemic overdose."),
      Q("moa", "Which two fluids are hypotonic?", ["0.45% NS and D5W", "0.9% NS and LR", "D5NS and 3% NS", "Albumin and plasma"], 0, "Hypotonic: 0.45NS and D5W. Isotonic: NS, LR. Hypertonic: D5NS, 3% NS.")
    ]),

    Med("med-hypertonic-saline", "3% saline (3%NS)", "Hypertonic saline for symptomatic hyponatremia and high ICP", ["Shock, Pressors & Fluid Management"], {
      uses: ul(["<strong>Severe symptomatic hyponatremia</strong> (seizures, encephalopathy).", "<strong>Intracranial hemorrhage</strong>: lowers intracranial pressure."]),
      moa: "<p>Hypertonic: pulls water <strong>out of cells</strong> (including brain cells) into the vessels.</p>",
      avoid: ul(["Correcting sodium too fast."]),
      se: ul(["<strong>Osmotic demyelination syndrome</strong> (formerly central pontine myelinolysis) with rapid sodium correction: destroys myelin in the brainstem and can be fatal."]),
      pearls: ul(["D5NS is the other hypertonic fluid on the list."]) +
        HY("3% saline: seizing hyponatremia or high ICP. Too fast → osmotic demyelination.")
    }, [
      Q("uses", "A patient with Na+ of 112 is seizing. Which fluid?", ["3% saline", "D5W", "0.45% saline", "LR"], 0, "3% NS: severe symptomatic hyponatremia (seizures, encephalopathy)."),
      Q("se", "What is the feared complication of correcting sodium too fast with 3% saline?", ["Osmotic demyelination syndrome", "Cerebral edema", "Hyperchloremic acidosis", "Hyperglycemia"], 0, "Rapid sodium correction can cause osmotic demyelination (central pontine myelinolysis)."),
      Q("uses", "Besides hyponatremia, what is 3% saline used for?", ["Lowering intracranial pressure in intracranial hemorrhage", "Hypernatremia", "Maintenance fluid", "Hypoglycemia"], 0, "3% NS lowers ICP in intracranial hemorrhage."),
      Q("moa", "Which way does water move when 3% saline is given?", ["Out of cells into the vessels", "Into cells from the vessels", "It does not move", "Into the gut"], 0, "Hypertonic fluid draws water out of cells.")
    ]),

    Med("med-colloids", "Colloids (albumin, plasma, hetastarch)", "Stay in the vessels, but no better outcomes than crystalloid", ["Shock, Pressors & Fluid Management"], {
      uses: ul(["Plasma volume expansion. Human: FFP, <strong>albumin</strong>, whole blood. Semisynthetic: dextrans, gelatins, <strong>hetastarch</strong>."]),
      moa: "<p>Large molecules raise oncotic pressure, so colloids are <strong>mainly retained in the intravascular space</strong>.</p>",
      avoid: ul(["In <strong>hemorrhage and sepsis</strong>, leaky vessels let even proteins escape to the interstitium, so the advantage is lost."]),
      se: ul(["Cost: colloids are expensive."]),
      pearls: ul(["<strong>No evidence of better outcomes</strong> with colloid vs crystalloid; isotonic crystalloid is the preferred first fluid."]) +
        HY("Crystalloid first. Colloids cost more and do not improve outcomes.")
    }, [
      Q("pearls", "What does the evidence show for colloid vs crystalloid resuscitation?", ["No improvement in outcomes with colloid", "Colloid halves mortality", "Crystalloid is harmful", "Colloid prevents ARDS"], 0, "There is no evidence of improved outcomes with colloid; crystalloids are preferred first."),
      Q("avoid", "Why do colloids lose their advantage in sepsis and hemorrhage?", ["Leaky vessels let the proteins escape into the interstitium", "They are metabolized to sugar", "They cause hyponatremia", "They clot in the line"], 0, "Vessels become so permeable that proteins cross freely into the interstitial space."),
      Q("moa", "Where do colloids mostly stay after infusion?", ["Inside the blood vessels", "In the cells", "In the interstitium", "In the gut"], 0, "Colloids are primarily retained intravascularly, expanding plasma volume."),
      Q("uses", "Which of these is a semisynthetic colloid?", ["Hetastarch", "Albumin", "Fresh frozen plasma", "Lactated Ringer's"], 0, "Semisynthetic colloids: dextrans, gelatins, hetastarch.")
    ]),

    Med("med-blood-products", "Blood products & massive transfusion", "PRBCs most common; 1:1:1 for massive transfusion; O negative in emergencies", ["Shock, Pressors & Fluid Management", "Vascular Disease Part 1"], {
      uses: ul([
        "Hemorrhage: consider blood after about <strong>2 L of rapid crystalloid</strong> to avoid hemodilution.",
        "Gross blood loss with instability: <strong>immediate transfusion</strong>; <strong>emergency-release O-negative</strong>.",
        "<strong>Massive transfusion protocol (MTP)</strong>: start at <strong>1:1:1 PRBCs : FFP : platelets</strong>. Massive transfusion = &gt; 10 units in 24 hours.",
        "Ruptured AAA: blood + isotonic saline on the way to emergency surgery."
      ]),
      moa: "<p><strong>PRBCs</strong> (the most common product) restore oxygen-carrying capacity; FFP and platelets replace clotting factors and platelets lost or diluted.</p>",
      avoid: ul(["Before transfusion if possible: discuss risks and get <strong>consent</strong>; <strong>type and screen</strong> when blood may be needed, <strong>type and cross</strong> when it is urgently needed.", "Only <strong>0.9% NS</strong> may run with blood."]),
      se: ul(["Acute febrile hemolytic reaction.", "<strong>TRALI</strong> (transfusion-related acute lung injury).", "Anaphylaxis."]),
      pearls: ul(["<strong>Permissive hypotension</strong> in hemorrhagic trauma: accept a lower BP until bleeding is controlled.", "No hard and fast transfusion threshold in the deck."]) +
        HY("MTP = 1:1:1. Emergency blood = O negative. Only NS with blood.")
    }, [
      Q("uses", "What ratio starts a massive transfusion protocol?", ["1:1:1 PRBCs : FFP : platelets", "3:1 crystalloid to blood", "2:1 FFP to PRBCs", "1 unit PRBCs per liter of saline"], 0, "1:1:1 PRBCs:FFP:platelets is the starting point for MTP."),
      Q("uses", "A trauma patient is crashing from hemorrhage and there is no time to type. What blood is given?", ["Emergency-release O-negative", "AB-positive", "Type-specific only after crossmatch", "Albumin instead"], 0, "Emergency release blood is O negative."),
      Q("avoid", "Which order fits when you expect to need blood soon but not immediately?", ["Type and screen", "Type and cross", "Emergency release", "Direct Coombs"], 0, "Type and screen when anticipating need; type and cross when the need is urgent."),
      Q("se", "Shortly after a transfusion, a patient develops hypoxia and bilateral infiltrates. Which complication?", ["TRALI", "Hyperchloremic acidosis", "Osmotic demyelination", "Digoxin toxicity"], 0, "Transfusion complications: acute febrile hemolytic reaction, TRALI and anaphylaxis."),
      Q("uses", "After how much rapid crystalloid should blood be considered in hemorrhage?", ["About 2 L", "500 mL", "6 L", "Only after 10 L"], 0, "After 2 L of rapid crystalloid, consider blood to avoid hemodilution."),
      Q("uses", "What defines a massive transfusion?", ["More than 10 units in 24 hours", "More than 2 units", "Any O-negative unit", "More than 4 units in a week"], 0, "Massive transfusion: > 10 units in 24 hours.")
    ])
  ]);
}());
