/*
  Medications: Anticoagulants, inotropes & antibiotics (Cardio Part 1).
  Source: cardiomyopathies.md slides 16, 39-40, 60-61, 77; valvular-disease.md
  slides 41-42, 57, 99-103; cardiac-devices.md slide on PPM placement;
  lipids-dyslipidemia.md slides 80-81. Only append questions.
*/
(function () {
  "use strict";
  var H = window.DiseaseContent, M = window.MedContent;
  var Tbl = H.Tbl, HY = H.HY, Mn = H.Mn, Q = H.Q, L = H.L, Med = M.Med, ul = M.ul;

  window.CARDIO_MEDS_OTHER = L("meds-other", "Anticoagulants, inotropes & antibiotics", [

    Med("med-anticoagulants", "Oral anticoagulants: warfarin & DOACs", "Warfarin (Coumadin); DOACs such as apixaban", ["Cardiomyopathies", "Valvular Disease", "Cardiac Devices"], {
      uses: Tbl(["Situation", "Anticoagulant"], [
        ["<strong>Mechanical valve</strong>", "<strong>Lifelong warfarin</strong> (INR target generally 2.5–3.5, depends on valve location and risk)"],
        ["Bioprosthetic valve, first 3–6 months", "Warfarin <strong>or</strong> low-dose aspirin, then aspirin long term"],
        ["AFib in cardiomyopathy (HCM, DCM), mitral stenosis, valve disease", "Warfarin or a DOAC"],
        ["Myocarditis with embolic event (PE) or mural thrombus on echo", "Anticoagulation"],
        ["Cardiomyopathies in general", "Reduce thromboembolism risk"]
      ]),
      moa: "<p>Warfarin blocks vitamin K-dependent clotting factor production; DOACs such as apixaban directly block a clotting factor. Both lower the risk of clots and emboli (stroke).</p>",
      avoid: ul([
        "<strong>DOACs are contraindicated with mechanical heart valves</strong>: use warfarin.",
        "Hold anticoagulants and antiplatelets before permanent pacemaker placement.",
        "<strong>Fenofibrate</strong> interacts with warfarin."
      ]),
      se: ul(["Bleeding is the main risk of every anticoagulant."]),
      pearls: ul([
        "Clot risk after valve replacement is highest in the <strong>first 3 months</strong>.",
        "Mechanical valves are more thrombogenic (lifelong warfarin); bioprosthetic valves are less prone to clotting (no lifelong anticoagulation) and are often chosen for patients over 60 or when anticoagulation is contraindicated."
      ]) + HY("Mechanical valve = warfarin forever. Never a DOAC.")
    }, [
      Q("avoid", "A 45-year-old with a new mechanical mitral valve asks for apixaban instead of warfarin. Answer?", ["No: DOACs are contraindicated with mechanical valves", "Yes: DOACs are preferred for valves", "Yes, after 3 months", "Only if INR is hard to control"], 0, "Mechanical valves need lifelong warfarin; DOACs like apixaban are contraindicated."),
      Q("uses", "What is the generally targeted INR for a mechanical valve?", ["2.5-3.5", "1.0-1.5", "4.0-5.0", "No INR target is needed"], 0, "INR target is generally 2.5-3.5, depending on valve location and other risk factors."),
      Q("uses", "A 72-year-old has a bioprosthetic aortic valve placed. What is the usual long-term antithrombotic plan?", ["Low-dose daily aspirin (after 3-6 months of aspirin or warfarin)", "Lifelong warfarin", "Lifelong apixaban", "No antithrombotic ever"], 0, "Bioprosthetic: 3-6 months of low-dose aspirin or warfarin after surgery, then a low-dose daily aspirin long term."),
      Q("uses", "A patient with hypertrophic cardiomyopathy develops atrial fibrillation. Which therapy prevents stroke?", ["Oral anticoagulation with warfarin or a DOAC", "Aspirin alone", "Digoxin", "Nitroglycerin"], 0, "HCM with AFib: increased thromboembolism risk, so oral anticoagulation with warfarin or a DOAC."),
      Q("pearls", "When is the risk of a thromboembolic event highest after valve replacement?", ["The first 3 months", "After 10 years", "Only during surgery", "Years 2-5"], 0, "Thromboembolic risk is highest within the first three months after valve replacement."),
      Q("uses", "A myocarditis patient has a mural thrombus on echo. What is needed?", ["Anticoagulation", "Only NSAIDs", "Amoxicillin", "Digoxin"], 0, "Anticoagulation is needed if there is an embolic event or mural thrombi on echo."),
      Q("avoid", "Which lipid drug interacts with warfarin?", ["Fenofibrate", "Ezetimibe", "Evolocumab", "Icosapent ethyl"], 0, "Fenofibrate (Fibricor) can interact with Coumadin."),
      Q("pearls", "A patient is scheduled for a permanent pacemaker tomorrow. What happens to their anticoagulant?", ["It is held before the procedure", "The dose is doubled", "It is switched to a DOAC", "Nothing changes"], 0, "Keep the patient NPO and hold anticoagulant and antiplatelet meds before PPM placement.")
    ]),

    Med("med-aspirin", "Low-dose aspirin", "Aspirin 81 mg", ["Valvular Disease", "Lipids & Dyslipidemia"], {
      uses: ul([
        "<strong>Bioprosthetic valves</strong>: low-dose aspirin (or warfarin) for 3–6 months after surgery, then <strong>low-dose aspirin long term</strong>.",
        "Taken with niacin to <strong>reduce niacin flushing</strong>."
      ]),
      moa: "<p>Irreversibly blocks platelet COX, so platelets make less thromboxane and stick together less (antiplatelet effect).</p>",
      avoid: ul(["Not enough for a mechanical valve: those need warfarin."]),
      se: ul(["Bleeding, GI upset."]),
      pearls: HY("Bioprosthetic valve long term → aspirin. Niacin flushing → aspirin first.")
    }, [
      Q("uses", "What is the usual long-term therapy after a bioprosthetic valve?", ["Low-dose daily aspirin", "Lifelong warfarin", "Lifelong DOAC", "Clopidogrel plus warfarin"], 0, "Long-term, bioprosthetic valve patients usually take a low-dose daily aspirin."),
      Q("uses", "Which drug reduces niacin-induced flushing?", ["Aspirin 81 mg", "Diphenhydramine", "Metoprolol", "Prednisone"], 0, "Flushing from niacin may be reduced with ASA 81 co-administration."),
      Q("avoid", "Is aspirin alone enough for a new mechanical aortic valve?", ["No: mechanical valves need lifelong warfarin", "Yes: it is the standard", "Yes, after the first year", "Only in patients over 60"], 0, "Mechanical valves are more thrombogenic and need lifelong warfarin."),
      Q("uses", "During the first 3-6 months after a bioprosthetic valve, which options are used?", ["Low-dose aspirin or warfarin", "Apixaban only", "No antithrombotic", "Heparin drip for 6 months"], 0, "Post-op bioprosthetic: 3-6 months of either low-dose aspirin or warfarin.")
    ]),

    Med("med-inotropes", "Digoxin & positive inotropes", "Digoxin, dopamine, dobutamine", ["Cardiomyopathies"], {
      uses: ul([
        "<strong>Digoxin</strong>: positive inotrope used in <strong>dilated cardiomyopathy</strong> (part of managing dysrhythmias).",
        "<strong>Positive inotropes</strong> (dopamine, dobutamine): severe myocarditis with hemodynamic compromise, with vasopressors and support devices."
      ]),
      moa: "<p>Positive inotropes <strong>increase the force of contraction</strong>. That helps a weak, dilated ventricle squeeze.</p>",
      avoid: ul(["<strong>Hypertrophic cardiomyopathy with LVOT obstruction</strong>: a stronger squeeze narrows the outflow tract more and worsens obstruction and symptoms."]),
      se: ul(["Arrhythmias (all inotropes)."]),
      pearls: HY("Weak dilated heart (DCM) → inotrope can help. Thick obstructed heart (HCM) → inotropes make it worse.")
    }, [
      Q("uses", "Which positive inotrope is mentioned for dilated cardiomyopathy?", ["Digoxin", "Verapamil", "Metoprolol", "Amlodipine"], 0, "Digoxin is a positive inotrope used for dilated cardiomyopathy."),
      Q("avoid", "Why are dobutamine and digoxin avoided in obstructive HCM?", ["Stronger contraction worsens the LVOT obstruction", "They cause bradycardia", "They lower preload too much", "They are nephrotoxic"], 0, "Positive inotropes worsen LVOT obstruction and symptoms in HCM."),
      Q("uses", "In severe myocarditis with shock, which drugs may be needed besides vasopressors?", ["Positive inotropes", "Beta blockers at high dose", "Non-DHP CCBs", "Alpha-1 blockers"], 0, "Severe myocarditis: arrhythmia suppression, hemodynamic support, vasopressors, positive inotropes, IABP."),
      Q("moa", "What does a positive inotrope do?", ["Increases the force of contraction", "Slows the heart rate", "Dilates veins", "Blocks aldosterone"], 0, "Inotropes change the force of contraction; positive inotropes increase it."),
      Q("avoid", "Which list is ALL to be avoided in HCM with significant LVOT obstruction?", ["Digoxin, nifedipine, lisinopril, nitroglycerin, furosemide", "Metoprolol, verapamil, diltiazem", "Warfarin, apixaban", "Amoxicillin, penicillin"], 0, "Avoid positive inotropes, vasodilators (DHP CCB, ACEI/ARB, nitrates) and diuretics in obstructive HCM.")
    ]),

    Med("med-penicillin-rf", "Penicillin for strep & rheumatic fever", "Penicillin for strep throat; monthly IM benzathine penicillin after acute rheumatic fever", ["Valvular Disease"], {
      uses: ul([
        "<strong>Strep throat</strong>: treating it with penicillin on time essentially eliminates the risk of acute rheumatic fever (ARF).",
        "<strong>After ARF</strong>: <strong>monthly IM benzathine penicillin</strong> to prevent recurrences, which greatly reduces permanent valve scarring (rheumatic heart disease)."
      ]),
      moa: "<p>Kills group A strep, removing the trigger for the immune cross-reaction that damages the valves.</p>",
      avoid: ul(["Penicillin allergy (choose another antibiotic)."]),
      se: ul(["Allergic reactions; injection site pain with IM benzathine."]),
      pearls: ul([
        "Timeline: strep throat → ARF in 2–4 weeks → rheumatic heart disease years to decades later (mitral stenosis is the classic result).",
        "Acute ARF itself is treated with anti-inflammatories."
      ]) + HY("Strep throat → penicillin. ARF history → monthly IM benzathine penicillin.")
    }, [
      Q("uses", "What is the main goal of treating strep throat with penicillin?", ["Prevent acute rheumatic fever", "Prevent infective endocarditis", "Shorten fever by a week", "Prevent glomerulonephritis only"], 0, "The main goal of treating strep throat with penicillin is to prevent acute rheumatic fever."),
      Q("uses", "A 14-year-old recovered from acute rheumatic fever. What prevents recurrence?", ["Monthly IM benzathine penicillin", "Daily aspirin", "Amoxicillin only before dental work", "Lifelong warfarin"], 0, "After ARF, monthly IM benzathine PCN prevents recurrences and greatly reduces the odds of RHD."),
      Q("pearls", "How is acute rheumatic fever itself treated acutely?", ["Anti-inflammatories", "Valve replacement", "Warfarin", "Beta blockers"], 0, "ARF is treated acutely with anti-inflammatories, plus long-term strep prevention."),
      Q("pearls", "How long after strep throat does acute rheumatic fever usually appear?", ["2-4 weeks", "1-2 days", "Years to decades", "6 months"], 0, "Strep throat → ARF in 2-4 weeks → RHD years to decades later."),
      Q("uses", "Why does preventing ARF recurrences matter?", ["It reduces permanent valve scarring (rheumatic heart disease)", "It prevents hypertension", "It prevents cardiomyopathy", "It prevents atrial septal defects"], 0, "Recurrence prevention greatly reduces the odds of permanent valve scarring and RHD.")
    ]),

    Med("med-amoxicillin-pve", "Amoxicillin for endocarditis prophylaxis", "Amoxicillin 2 g PO 30–60 min before certain procedures", ["Valvular Disease"], {
      uses: ul([
        "Patients with <strong>prosthetic valves</strong> (mechanical or bioprosthetic) before: <strong>dental cleanings and procedures</strong>, respiratory tract procedures, invasive skin procedures.",
        "Prevents prosthetic valve endocarditis (PVE)."
      ]),
      moa: "<p>Kills bacteria that enter the blood during the procedure before they can stick to prosthetic material, where they form a <strong>biofilm</strong> that protects them from the immune system and antibiotics.</p>",
      avoid: ul(["Penicillin allergy (choose another antibiotic)."]),
      se: ul(["Allergic reactions, GI upset."]),
      pearls: Tbl(["Prosthetic valve endocarditis", "Usual organism"], [
        ["Early (within 12 months)", "<strong>Staph aureus</strong>, likely hospital-acquired. Peri-op antibiotics are given but not continued long term."],
        ["Late (after 12 months)", "<strong>Streptococci</strong>, from hematogenous spread"]
      ]) + HY("Prosthetic valve + dental work = amoxicillin 2 g PO 30–60 minutes before.")
    }, [
      Q("uses", "A patient with a bioprosthetic aortic valve is having a dental cleaning. What is the standard prophylaxis?", ["Amoxicillin 2 g PO 30-60 minutes before", "No prophylaxis for bioprosthetic valves", "IV vancomycin for 2 weeks", "Penicillin monthly"], 0, "Prosthetic material (mechanical or bioprosthetic) needs prophylaxis: amoxicillin 2 g PO 30-60 minutes before the procedure."),
      Q("uses", "Which procedures need endocarditis prophylaxis in a prosthetic valve patient?", ["Dental, respiratory tract and invasive skin procedures", "Only open-heart surgery", "Blood draws", "Chest x-rays"], 0, "Dental cleanings/procedures, respiratory tract procedures and invasive skin procedures."),
      Q("pearls", "Prosthetic valve endocarditis 4 months after surgery is most often caused by?", ["Staphylococcus aureus", "Streptococci", "Enterococcus from the gut", "Candida"], 0, "Early PVE (within 12 months) is likely hospital-acquired, typically S. aureus."),
      Q("pearls", "Prosthetic valve endocarditis 3 years after surgery is most often caused by?", ["Streptococci", "Staph aureus", "Pseudomonas", "E. coli"], 0, "Late PVE (after 12 months) is usually hematogenous, commonly streptococci."),
      Q("moa", "Why are prosthetic valves so prone to infection?", ["Bacteria adhere to prosthetic material and form biofilm", "They have a stronger endothelial layer", "They raise blood glucose", "They need immunosuppression"], 0, "Bacteria adhere to prosthetic material and form biofilm, protecting them from immune defenses and antibiotics.")
    ])
  ]);
}());
