/* Perry, Intro to Radiology Part I. Official "Introduction to Radiology Objectives" in the supplied order.
   Part I teaches contrast, ionizing radiation, radiography, fluoroscopy, and CT. The MRI, ultrasound, and
   nuclear medicine objectives (15-21) belong to Part II and are not built here; objective 22 (patient
   counseling) is built for the Part I modalities only.
   Picture slides read from the rendered deck: slide 4 (relative cost and availability table), slide 29
   (approximate effective doses), slide 39 (PA vs AP heart shadow 13 cm vs 16 cm), slide 60 (fetal dose
   table), slide 66 (HRCT). The rest are example images whose teaching content is in the slide text. */
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

  window.RADIOLOGY_PART1_OBJECTIVES = [

    /* ---------- 1 ---------- */
    S("01-modalities-cost-risk", "1. Imaging modalities, relative cost, and at-risk populations", "Objective 1. Slides 2–8, 25–30.", [
      C("Choosing an imaging study",
        "<p>Imaging shows the patient's <strong>anatomy</strong> (and changes to it) and <strong>physiology</strong>, either directly with real-time images or indirectly through tissue changes. Most modalities “see” the body by how they detect <strong>water</strong>.</p>" +
        "<p>The goal is to pick the <strong>best modality for the possible diagnoses</strong>. That depends on:</p>" +
        "<ul><li><strong>Which body area</strong> is being studied</li><li>Your <strong>diagnostic suspicion</strong> (the differential)</li></ul>" +
        "<p>Every study has a <strong>cost</strong> and a possible <strong>risk</strong>. Good communication between the referring clinician and radiology matters at every step. PAs in radiology usually work on the <strong>interventional</strong> side: chest tubes and PleurX catheters, diagnostic paracentesis and thoracentesis, and lumbar punctures.</p>",
        ["choosing-study", "pa-role"],
        [q("Which two factors decide the best imaging modality for a patient?", "The body area studied and the differential diagnosis", ["The patient's insurance and the time of day", "The ordering clinician's specialty and the scanner brand", "Patient preference and the cheapest test"], "Choose the modality by the area being studied and what you suspect."),
          q("PAs working in radiology most often work on which side of the specialty?", "Interventional procedures", ["Official image reading only", "Equipment maintenance", "Billing and coding"], "Examples include chest tubes, PleurX catheters, paracentesis, thoracentesis, and lumbar punctures.")],
        [q("A PA wants to image a patient with suspected appendicitis and asks, “Which study is best?” What should guide the choice?", "The area of the body and the differential diagnosis, weighed against cost and risk", ["Always order the most advanced scan available", "Always order a plain film first for every complaint", "Whatever study was ordered last time"], "Every modality has cost and risk; match it to the area and the suspected diagnoses.")]),
      C("Relative cost and availability",
        tbl(["Modality", "Relative cost", "Availability"], [
          ["<strong>Radiography (x-ray)</strong>", "+ (cheapest)", "++++ (most available)"],
          ["<strong>Ultrasound</strong>", "++", "+++"],
          ["<strong>CT</strong>", "+++", "+++"],
          ["<strong>MRI</strong>", "++++", "+"],
          ["<strong>Nuclear medicine</strong>", "++++", "+"]]) +
        hy("Cheapest and most available: <strong>x-ray</strong>. Most expensive and least available: <strong>MRI and nuclear medicine</strong>. CT sits in between (+++ cost)."),
        ["relative-cost"],
        [q("Which imaging modality is the least expensive and most widely available?", "Plain radiography", ["MRI", "Nuclear medicine", "CT"], "Radiography: + cost, ++++ availability."),
          q("Which two modalities are the most expensive and least available?", "MRI and nuclear medicine", ["X-ray and ultrasound", "CT and x-ray", "Ultrasound and CT"], "Both rate ++++ cost and + availability."),
          q("Rank by relative cost from lowest to highest:", "X-ray, ultrasound, CT, MRI", ["MRI, CT, ultrasound, x-ray", "Ultrasound, x-ray, MRI, CT", "CT, x-ray, MRI, ultrasound"], "X-ray (+) < ultrasound (++) < CT (+++) < MRI (++++).")],
        [q("A rural clinic needs a quick, low-cost first look at a suspected wrist fracture. Which modality best fits cost and availability?", "Plain radiograph", ["MRI", "Nuclear medicine bone scan", "CT"], "X-ray is the cheapest and most available, and is first line for bones.")]),
      C("Populations at risk from ionizing radiation",
        "<p>Ionizing radiation produces enough energy to knock out orbiting electrons, forming <strong>ions (free radicals)</strong>. These unstable molecules change cellular metabolism and can bind <strong>DNA</strong>, causing <strong>mutation or cell death</strong>.</p>" +
        tbl(["Population", "Why at risk"], [
          ["<strong>Children</strong>", "Young, <strong>rapidly dividing cells</strong> are more prone to mutation; all cell lines affected → malignancy risk. Use pediatric-optimized protocols."],
          ["<strong>Pregnancy / females of reproductive age (6–60 y)</strong>", "Gonadal cells are sensitive at high doses (much higher than most diagnostic studies). <strong>In-utero radiation</strong> can lead to <strong>childhood malignancy</strong>."],
          ["Patients with <strong>repeated CTs</strong>", "Cumulative dose adds up; consider prior imaging."]]) +
        "<p><strong>Pregnancy:</strong> prefer non-ionizing alternatives when appropriate, but <strong>do not delay medically necessary imaging</strong>.</p>" +
        "<p><strong>Mammography:</strong> for most women the benefit outweighs the small radiation risk; the risk appears greater in women <strong>under 40</strong>.</p>",
        ["at-risk-populations", "free-radicals"],
        [q("How does ionizing radiation damage cells?", "It forms free radicals that can bind DNA, causing mutation or cell death", ["It heats tissue until proteins denature", "It magnetizes iron in red cells", "It blocks sodium channels"], "Displaced electrons form ions (free radicals) that alter metabolism and DNA."),
          q("Why are children more sensitive to ionizing radiation?", "Their rapidly dividing cells are more prone to mutation", ["Their bones are denser", "They metabolize contrast faster", "They have more body fat"], "Rapid cell division raises mutation and malignancy risk."),
          q("What is the main concern with in-utero radiation exposure?", "Childhood malignancy", ["Adult-onset hypertension", "Maternal hypothyroidism", "Fetal hyperglycemia"], "Carcinogenesis from in-utero radiation can lead to childhood malignancy."),
          q("The radiation risk of screening mammography appears greater in which group?", "Women under age 40", ["Women over age 70", "Postmenopausal women on HRT", "Men with gynecomastia"], "For most women benefit outweighs risk, but risk is greater under 40.")],
        [q("A 26-year-old pregnant woman has signs of a serious condition and the best answer needs CT. Non-ionizing options will not answer the question. What is the right approach?", "Do a risk–benefit assessment and do not delay medically necessary imaging", ["Never image during pregnancy", "Wait until after delivery", "Order CT without discussing risk"], "Prefer non-ionizing alternatives when appropriate, but do not delay necessary imaging."),
          q("A 6-year-old needs imaging for suspected appendicitis. Why should the team favor non-ionizing imaging or pediatric CT protocols?", "Children's rapidly dividing cells are more vulnerable to radiation-induced mutation", ["Children cannot receive contrast", "CT is less accurate in children", "Children excrete contrast too slowly"], "Children are more sensitive to ionizing radiation.")]),
      C("How much radiation? Approximate effective doses",
        tbl(["Exam", "Approx. effective dose", "Equivalent background"], [
          ["Natural background (1 year)", "3 mSv", "1 year"],
          ["<strong>Chest x-ray</strong>", "<strong>0.1 mSv</strong>", "about 10 days"],
          ["Screening mammography", "0.28 mSv", "about 34 days"],
          ["CT head", "1.6 mSv", "about 7 months"],
          ["CT chest", "6.1 mSv", "about 2 years"],
          ["CT abdomen/pelvis", "7.7 mSv", "about 2.6 years"],
          ["<strong>Coronary CTA</strong>", "<strong>8.7 mSv</strong>", "about 3 years"]]) +
        hy("Use ionizing imaging when the <strong>benefit outweighs the risk</strong>; apply <strong>ALARA</strong> (as low as reasonably achievable); consider prior and cumulative exposure; if ultrasound or MRI can answer the question, consider them. CT is often fastest and best but delivers <strong>much more radiation than plain film</strong>."),
        ["effective-dose", "alara"],
        [q("A chest x-ray delivers roughly how much background-equivalent radiation?", "About 10 days", ["About 2 years", "About 1 hour", "About 7 months"], "CXR ≈ 0.1 mSv, about 10 days of background."),
          q("Of these, which delivers the highest effective dose?", "Coronary CTA", ["CT head", "Chest x-ray", "Screening mammography"], "Coronary CTA ≈ 8.7 mSv, about 3 years of background."),
          q("What does ALARA stand for?", "As low as reasonably achievable", ["Always limit all radiation always", "Average level of acceptable radiation absorbed", "Assess level and repeat as needed"], "ALARA guides keeping dose as low as reasonably achievable.")],
        [q("A young adult has had four abdominal CTs this year for recurrent pain. The new question could be answered by ultrasound. What principle guides the next study?", "Consider cumulative dose and choose a non-ionizing study if it answers the question", ["CT is always best for abdominal pain", "Radiation is cumulative only in children", "A fifth CT adds no meaningful dose"], "Consider prior imaging and cumulative exposure; use ultrasound or MRI when they can answer the question.")])
    ]),

    /* ---------- 2 ---------- */
    S("02-ionizing-modalities", "2. Modalities that use ionizing radiation", "Objective 2. Slides 25–26.", [
      C("Ionizing vs non-ionizing modalities",
        tbl(["Ionizing radiation", "No ionizing radiation"], [
          ["<strong>Radiography</strong> (x-ray), the oldest modality", "<strong>Ultrasound</strong>"],
          ["<strong>Fluoroscopy</strong>: sequential real-time x-rays for a dynamic study of function", "<strong>MRI</strong>"],
          ["<strong>CT</strong>: moving x-ray tube and detector make cross-sectional images", ""],
          ["<strong>Mammography</strong>: low-dose breast imaging, essential for early cancer detection", ""],
          ["<strong>DEXA</strong> (dual-energy x-ray absorptiometry): low-dose bone mineral density; screens for osteoporosis and guides treatment", ""],
          ["<strong>Nuclear medicine</strong> (radioactive tracers; covered in Part II)", ""]]) +
        mn("“<strong>X-ray family</strong>” = anything built on x-rays: plain film, fluoro, CT, mammo, DEXA. Ultrasound (sound) and MRI (magnets) are the two that are radiation-free."),
        ["ionizing-list", "non-ionizing"],
        [q("Which modality does NOT use ionizing radiation?", "Ultrasound", ["Fluoroscopy", "CT", "Mammography"], "Ultrasound uses sound waves; MRI uses magnets."),
          q("Which modality uses low-dose radiation to measure bone mineral density?", "DEXA", ["Fluoroscopy", "Mammography", "Ultrasound"], "DEXA screens for osteoporosis and guides therapy."),
          q("Which ionizing modality is real-time and best for evaluating function?", "Fluoroscopy", ["DEXA", "Mammography", "Plain radiography"], "Fluoroscopy is sequential x-rays seen in real time."),
          q("Which is the oldest imaging modality?", "Radiography", ["CT", "MRI", "Ultrasound"], "Radiography (x-ray) is the oldest modality.")],
        [q("A 30-year-old pregnant woman needs imaging of a palpable breast lump and asks which tests avoid radiation. Which study involves no ionizing radiation?", "Ultrasound", ["Mammography", "CT chest", "Fluoroscopy"], "Ultrasound and MRI are the non-ionizing options."),
          q("A 66-year-old woman is due for osteoporosis screening. Which test is used, and does it involve radiation?", "DEXA, which uses low-dose ionizing radiation", ["MRI, which uses no radiation", "Ultrasound, which uses no radiation", "CT angiography, high dose"], "DEXA is a low-dose x-ray technique for bone density.")])
    ]),

    /* ---------- 3 ---------- */
    S("03-artifact-contrast-penetration", "3. Artifact, image contrast, and penetration", "Objective 3. Slides 7–10, 35–37.", [
      C("Planar vs cross-sectional images",
        "<ul><li><strong>Planar</strong> images are <strong>shadows</strong> of 3D objects compressed into 2D; important data can be hidden. A <strong>CXR</strong> is planar.</li>" +
        "<li><strong>Cross-sectional</strong> imaging shows the body in 2D <strong>slices</strong>, which can be rebuilt into other planes or 3D. <strong>CT, ultrasound, and MRI</strong> are cross-sectional.</li></ul>" +
        "<p>When looking at an axial CT, the perspective is from the <strong>patient's feet</strong>.</p>",
        ["planar-cross-sectional"],
        [q("A chest x-ray is an example of which type of image?", "Planar", ["Cross-sectional", "Three-dimensional volumetric", "Dynamic real-time"], "A CXR compresses 3D anatomy into a 2D shadow."),
          q("Which group lists only cross-sectional modalities?", "CT, ultrasound, MRI", ["CXR, mammography, DEXA", "CT, CXR, fluoroscopy", "Mammography, MRI, CXR"], "CT, ultrasound, and MRI image the body in slices.")],
        [q("A small lung nodule is hidden behind the heart on a CXR but obvious on CT. What property of the CXR explains the miss?", "It is a planar image that superimposes structures", ["It uses no radiation", "It is cross-sectional", "It was done with contrast"], "Planar images compress 3D information, so structures can obscure one another.")]),
      C("Artifact and image contrast",
        "<ul><li><strong>Artifact:</strong> an imaging finding that <strong>does not correspond to the patient's reality</strong>. It may <strong>mimic a clinical feature</strong>, <strong>degrade image quality</strong>, or <strong>obscure anatomy</strong> (example: motion blur).</li>" +
        "<li><strong>Image contrast:</strong> the <strong>difference in brightness</strong> between an area of interest and its surroundings. The <strong>larger</strong> the difference, the <strong>easier</strong> it is to tell structures apart.</li>" +
        "<li><strong>Attenuation:</strong> reduction in x-ray beam intensity as it passes through matter (absorption or scatter). Air-filled lungs attenuate little; <strong>bone attenuates a lot</strong>.</li></ul>",
        ["artifact", "image-contrast", "attenuation"],
        [q("What is an imaging artifact?", "A finding that does not correspond to the patient's reality and may mimic disease or obscure anatomy", ["Any abnormal finding confirmed by biopsy", "The contrast agent seen in a vessel", "The brightness of bone on x-ray"], "Artifacts are not real anatomy; they can mimic pathology, degrade quality, or hide structures."),
          q("Image contrast is defined as:", "The difference in brightness between an area of interest and its surroundings", ["The amount of iodine injected", "The resolution of the detector", "The speed of the CT gantry"], "Greater brightness difference makes structures easier to separate."),
          q("Attenuation refers to:", "Reduction in x-ray beam intensity by absorption or scatter", ["Increase in beam energy through tissue", "Motion of the patient during the scan", "The angle of the x-ray tube"], "Bone attenuates heavily; air very little.")],
        [q("A confused patient moves during a head CT, and the images show blurring that hides the ventricles. What is this?", "Motion artifact", ["Image contrast", "Over-penetration", "Contrast extravasation"], "Motion creates artifact that degrades quality and obscures anatomy.")]),
      C("Densities on x-ray: the five shades",
        tbl(["Tissue", "Density vs water", "Attenuation", "Appearance", "Examples"], [
          ["Air", "Least dense", "Minimal", "<strong>Black</strong>", "Lungs, bowel gas"],
          ["Fat", "Less than water", "Low", "<strong>Dark gray</strong>", "Subcutaneous tissue, mesentery"],
          ["Water / soft tissue", "Reference (CT 0 HU)", "Moderate", "<strong>Light gray</strong>", "Muscle, organs, blood"],
          ["Bone", "Very dense", "High", "<strong>White</strong>", "Ribs, skull, spine"],
          ["Metal / contrast", "Extremely dense", "Maximum", "<strong>Bright white</strong>", "Prosthetics, calcifications, iodinated contrast"]]) +
        hy("More x-rays pass through → <strong>darker</strong>. Fewer pass through → <strong>lighter</strong>.") +
        mn("Least to most dense: <strong>A</strong>ir, <strong>F</strong>at, <strong>W</strong>ater, <strong>B</strong>one, <strong>M</strong>etal (“<strong>A</strong> <strong>F</strong>ew <strong>W</strong>hite <strong>B</strong>right <strong>M</strong>etals”): black → bright white."),
        ["five-densities"],
        [q("How does fat appear on a plain radiograph?", "Dark gray", ["Black", "Light gray", "Bright white"], "Fat is less dense than water, so dark gray."),
          q("On x-ray, the more x-rays that pass through a tissue, the image is:", "Darker", ["Lighter", "Unchanged", "Bright white"], "More transmitted x-rays darken the detector."),
          q("Which appears bright white on x-ray?", "Metal or contrast", ["Bowel gas", "Mesentery", "Muscle"], "Metal and contrast cause maximum attenuation."),
          q("Which list orders densities from darkest to brightest on x-ray?", "Air, fat, water, bone, metal", ["Fat, air, bone, water, metal", "Water, air, fat, metal, bone", "Bone, metal, water, fat, air"], "Air black → fat dark gray → water light gray → bone white → metal bright white.")],
        [q("A child swallowed a coin. On the radiograph it is the brightest object on the film, brighter than the vertebrae. Why?", "Metal causes maximum attenuation and appears bright white", ["Metal lets the most x-rays through", "The coin is an artifact", "Metal is less dense than bone"], "Metal attenuates more than bone, so it is brighter."),
          q("On an abdominal film, a dark black loop is seen in the bowel. What does this most likely represent?", "Bowel gas", ["Barium", "Bone", "Fluid-filled bowel"], "Air appears black.")]),
      C("Penetration of a radiograph",
        "<p><strong>Penetration</strong> describes how well the x-rays <strong>passed through the patient and reached the detector</strong>.</p>" +
        tbl(["", "Under-penetrated", "Over-penetrated"], [
          ["X-rays reaching detector", "Too few", "Too many"],
          ["Film looks", "Too <strong>white/washed out</strong>; structures hard to see through", "Too <strong>dark/black</strong>; lung markings lost"]]),
        ["penetration"],
        [q("What does the penetration of a radiograph describe?", "How well the x-rays passed through the patient and were detected", ["The amount of contrast in a vessel", "How deep the needle went in a procedure", "The angle of the x-ray beam"], "Penetration reflects beam passage to the detector."),
          q("An over-penetrated chest x-ray looks:", "Too dark", ["Too white", "Blurred from motion", "Normal"], "Too many x-rays reach the detector, darkening the film.")],
        [q("A portable CXR appears washed out and white, and you cannot see the vertebrae through the heart. What is the technical problem?", "Under-penetration", ["Over-penetration", "Motion artifact", "Contrast reaction"], "Too few x-rays reached the detector, so the film is too white.")])
    ]),

    /* ---------- 4 ---------- */
    S("04-contrast-indications", "4. Indications for contrast", "Objective 4. Slides 11–19, 24, 62–64.", [
      C("What contrast agents do",
        "<p>Contrast agents (most often <strong>iodine</strong> and <strong>barium</strong>) are mostly <strong>positive</strong> agents: they <strong>attenuate</strong> the x-ray beam and <strong>increase image contrast</strong>. They can be given through any cavity, natural or iatrogenic, to separate tissues that would otherwise absorb x-rays similarly.</p>" +
        "<ul><li><strong>Barium sulfate:</strong> cheap; opacifies the <strong>GI tract</strong> for fluoroscopy and CT (e.g., barium swallow). Well tolerated, but causes <strong>peritonitis</strong> if it spills into the abdomen through a perforation.</li>" +
        "<li><strong>Iodinated agents (2nd/3rd generation):</strong> given <strong>IV</strong> during CT, often <strong>timed</strong> to catch pathology. They move quickly into extracellular fluid and are <strong>excreted by the kidneys</strong>.</li>" +
        "<li><strong>Dynamic contrast-enhanced imaging:</strong> precise timing of injection and image acquisition; a lesion may match its surroundings on non-contrast and delayed images but enhance intensely in the <strong>arterial phase</strong>.</li></ul>",
        ["contrast-agents", "dynamic-enhancement"],
        [q("How do positive contrast agents improve an image?", "They attenuate the x-ray beam and increase image contrast", ["They reduce radiation dose", "They make tissues less dense", "They slow the heart rate"], "Iodine and barium absorb x-rays, separating tissues of similar density."),
          q("How are IV iodinated contrast agents mainly excreted?", "By the kidneys", ["By the liver into bile", "Through the lungs", "Through the skin"], "Iodinated agents enter extracellular fluid and are renally cleared."),
          q("Barium spilling into the abdominal cavity through a perforation causes:", "Peritonitis", ["Pancreatitis", "Nephropathy only", "No harm"], "Barium is well tolerated in the gut but causes peritonitis if spilled.")],
        [q("A liver lesion is invisible on non-contrast and delayed images but enhances brightly right after the contrast bolus. What technique revealed it?", "Dynamic contrast-enhanced imaging with an arterial phase", ["Plain radiography", "A barium swallow", "Window-width narrowing alone"], "Timed acquisition exploits differences in enhancement over time.")]),
      C("Contrast routes",
        tbl(["Route", "Examples"], [
          ["<strong>IV</strong>", "CT with contrast: enhances inflammation, defines organs and tumors"],
          ["<strong>Arterial</strong>", "<strong>Angiogram</strong>: contrast injected directly into an artery (fluoroscopy) or IV for <strong>CTA</strong>"],
          ["<strong>GI (PO or rectal)</strong>", "Oral contrast outlines the GI tract mouth to rectum; <strong>double contrast</strong> in the rectum = air plus barium to distend the colon"],
          ["<strong>GU</strong>", "<strong>Hysterosalpingogram</strong> (uterine cavity, fallopian tubes via cervical catheter); <strong>cystogram</strong> (bladder via Foley, retrograde)"],
          ["<strong>Intrathecal</strong>", "<strong>Myelogram</strong>: iodine into the subarachnoid space for spine and nerve roots"],
          ["<strong>Kidney</strong>", "<strong>Nephrostogram</strong> (via nephrostomy tube, antegrade); <strong>IVP</strong> (IV contrast, delayed films light up the renal pelvis)"]]),
        ["contrast-routes"],
        [q("Which study injects contrast into the subarachnoid space?", "Myelogram", ["Cystogram", "Hysterosalpingogram", "Nephrostogram"], "Myelography images the spine and nerve roots via intrathecal contrast."),
          q("A hysterosalpingogram visualizes:", "The uterine cavity and fallopian tubes", ["The bladder", "The renal pelvis", "The esophagus"], "Contrast is given through the cervical canal."),
          q("What is double-contrast imaging of the colon?", "Distending the colon with air and then barium", ["Giving IV and oral contrast at the same time", "Two doses of iodine", "Barium followed by gadolinium"], "Air plus barium outlines the mucosa."),
          q("In which study is contrast instilled retrograde into the bladder through a Foley catheter?", "Cystogram", ["Intravenous pyelogram", "Myelogram", "Angiogram"], "A cystogram fills the bladder retrograde.")],
        [q("A patient with infertility needs evaluation of tubal patency. Which contrast study is used?", "Hysterosalpingogram", ["Cystogram", "Myelogram", "Barium swallow"], "HSG visualizes the uterine cavity and fallopian tubes."),
          q("A patient with a nephrostomy tube needs the kidney, ureter, and bladder drainage checked under fluoroscopy. Which study?", "Nephrostogram", ["Myelogram", "Hysterosalpingogram", "Cystogram"], "Contrast is injected directly through the nephrostomy tube, antegrade.")]),
      C("When to use contrast",
        tbl(["Contrast preferred", "Contrast helpful", "Contrast generally not needed"], [
          ["<strong>Tumor</strong> (malignancy, metastasis)", "<strong>Infection</strong> (most), abscess", "<strong>Stroke</strong>"],
          ["<strong>Intravascular pathology</strong>: clot, stenosis, distal ischemia, perforation, dissection", "", "<strong>Bones or calcification</strong> (incl. kidney stones)"],
          ["<strong>Inflammation</strong>: colitis, encephalitis; “fat stranding” in appendicitis, diverticulitis", "", "<strong>Lung parenchyma or pleura</strong> (except malignancy); lung infection is seen without contrast"],
          ["", "", "General abdominal evaluation"]]) +
        hy("Tumor, vessel, inflammation → <strong>contrast</strong>. Stroke, bone, stone, lung → <strong>no contrast</strong>. Vessels specifically → order a <strong>CTA</strong>, not a CT with IV contrast. When in doubt, <strong>call radiology</strong>."),
        ["contrast-yes", "contrast-no"],
        [q("Which suspected condition generally does NOT need contrast?", "Kidney stone", ["Abscess", "Metastatic tumor", "Colitis"], "Bones, calcifications, and stones are seen without contrast."),
          q("Fat stranding from appendicitis or diverticulitis is best shown by CT:", "With IV contrast", ["Without any contrast", "With barium only", "With gadolinium"], "Contrast enhances inflammatory processes."),
          q("To evaluate the aorta and its branches, which study should be ordered?", "CT angiogram (CTA)", ["CT without contrast", "Plain abdominal film", "CT with IV contrast routine timing"], "Vascular evaluation: order a CTA."),
          q("Initial CT for suspected stroke is usually done:", "Without contrast", ["With oral contrast", "With barium", "With intrathecal contrast"], "Stroke is listed among studies that generally do not need contrast.")],
        [q("A 62-year-old with weight loss and a new liver mass needs CT to look for metastatic disease; eGFR is normal and there is no allergy. Which CT?", "CT with IV contrast", ["CT without contrast", "Plain film", "CT with barium enema only"], "Contrast separates normal from abnormal tissue and finds metastases."),
          q("A 45-year-old has classic flank pain radiating to the groin and hematuria. Which CT best fits?", "CT without contrast", ["CT with IV contrast", "CT angiogram", "Myelogram"], "Stones and calcifications need no contrast."),
          q("A patient has fever and a suspected deep neck abscess. Contrast decision?", "Use IV contrast; it helps define infection and abscess", ["Avoid contrast in all infections", "Use barium", "Contrast never changes infection imaging"], "Contrast is helpful in most infections and abscesses.")])
    ]),

    /* ---------- 5 ---------- */
    S("05-contrast-contraindications", "5. Contraindications and precautions for iodinated and gadolinium contrast", "Objective 5. Slides 20–21, 62.", [
      C("Renal impairment and pregnancy",
        "<ul><li><strong>Renal impairment:</strong> IV <strong>iodine and gadolinium</strong> are both <strong>cleared by the kidneys</strong>. Check <strong>eGFR</strong> before ordering and weigh benefit vs risk; <strong>reduced eGFR or AKI</strong> must be considered.</li>" +
        "<li><strong>Pregnancy:</strong> CT is generally avoided but may be used after a <strong>risk–benefit assessment</strong>. <strong>Low-osmolality iodinated contrast</strong> is considered appropriate when diagnostically needed.</li></ul>" +
        hy("Before any IV iodine or gadolinium: <strong>check the eGFR</strong>."),
        ["renal-precaution", "pregnancy-contrast"],
        [q("Before ordering IV iodinated or gadolinium contrast, which lab should be checked?", "eGFR", ["Hemoglobin A1c", "TSH", "Lipase"], "Both agents are cleared by the kidneys."),
          q("Both iodinated contrast and gadolinium are cleared mainly by:", "The kidneys", ["The liver", "The lungs", "The spleen"], "Renal clearance is why kidney function matters."),
          q("When contrast is diagnostically needed in pregnancy, which iodinated agent type is considered appropriate?", "Low-osmolality iodinated contrast", ["High-osmolality ionic contrast", "Barium IV", "No contrast is ever allowed"], "Low-osmolality iodinated contrast is acceptable when needed.")],
        [q("A 70-year-old with AKI (creatinine doubled this week) has an ED order for CT abdomen with IV contrast for vague pain. What should the PA do first?", "Weigh benefit vs risk given the AKI, and consider a non-contrast study", ["Give double the contrast dose", "Proceed without considering kidney function", "Switch to IV gadolinium, which is safe in AKI"], "Reduced eGFR or AKI must be taken into account for both iodine and gadolinium.")]),
      C("GI perforation: water-soluble, not barium",
        "<p>When looking for <strong>esophageal or bowel perforation</strong>, <strong>obstruction</strong>, or when <strong>surgery is planned</strong>, use a <strong>water-soluble agent such as Gastrografin</strong>.</p>" +
        hy("<strong>Barium causes severe peritonitis</strong> if it leaks; suspected perforation → <strong>Gastrografin</strong>."),
        ["perforation-gastrografin"],
        [q("Which contrast should be used when bowel perforation is suspected?", "A water-soluble agent such as Gastrografin", ["Barium sulfate", "Gadolinium", "No oral contrast is ever possible"], "Barium causes severe peritonitis if it leaks."),
          q("Why is barium avoided when surgery is planned?", "Leaked barium causes severe peritonitis", ["Barium is radioactive", "Barium is nephrotoxic", "Barium is too expensive"], "Water-soluble contrast is safer if spillage is possible.")],
        [q("After forceful vomiting, a 50-year-old has chest pain and subcutaneous emphysema. An esophagram is ordered for possible esophageal rupture. Which contrast agent?", "Water-soluble contrast (Gastrografin)", ["Barium sulfate", "IV gadolinium", "Air only"], "Suspected perforation: avoid barium.")]),
      C("Allergy and premedication",
        "<ul><li>Allergic-like reactions to modern iodinated contrast are <strong>uncommon</strong>: about <strong>0.6% overall</strong>, <strong>0.04% severe</strong>.</li>" +
        "<li>If the study <strong>must</strong> be done with contrast, an <strong>institutional premedication protocol</strong> may be used when indicated.</li>" +
        "<li>Only about <strong>one third</strong> of severe reactors have a prior reaction history, and premedication has <strong>poor evidence</strong> for anything beyond <strong>mild</strong> reactions.</li>" +
        "<li>A <strong>prior severe allergic-like reaction</strong> to iodinated contrast is a reason to obtain the CT <strong>without contrast</strong>.</li></ul>",
        ["allergy-premed", "prior-severe-reaction"],
        [q("About how common are allergic-like reactions to modern iodinated contrast overall?", "About 0.6%", ["About 10%", "About 25%", "About 0.0001%"], "Reactions are uncommon: ~0.6% overall, ~0.04% severe."),
          q("Premedication before iodinated contrast has good evidence for preventing which reactions?", "Only mild reactions", ["All severe reactions", "Contrast extravasation", "Anaphylaxis reliably"], "Evidence is poor for anything other than mild reactions."),
          q("What fraction of patients with severe contrast reactions have a prior reaction history?", "About one third", ["Nearly all", "About 90%", "None"], "Most severe reactors have no prior history.")],
        [q("A patient had laryngeal edema and hypotension with iodinated contrast two years ago. She now needs a CT for suspected kidney stones. Best approach?", "CT without contrast", ["CT with contrast after diphenhydramine only", "CT with double-dose contrast", "Cancel all imaging"], "Prior severe reaction is a contraindication, and stones do not need contrast."),
          q("A patient with a prior mild hives reaction needs a CT where contrast is essential to find a tumor. What may be used?", "An institutional premedication protocol before contrast", ["No contrast under any circumstances", "Barium IV", "A larger dose to overcome the allergy"], "Premedication may be used when the contrast study must be done.")])
    ]),

    /* ---------- 6 ---------- */
    S("06-contrast-reactions-extravasation", "6. Iodinated contrast reactions and extravasation", "Objective 6. Slides 12, 21–23.", [
      C("Grading iodinated contrast reactions",
        tbl(["Severity", "Findings", "Management"], [
          ["<strong>Mild</strong>", "Warmth, flushing, N/V, mild urticaria, scratchy throat", "Observe <strong>~30 minutes</strong> ± diphenhydramine (Benadryl)"],
          ["<strong>Moderate</strong>", "Severe urticaria, <strong>bronchospasm</strong>, <strong>transient</strong> hypotension and tachycardia", "<strong>Close monitoring</strong> until symptoms resolve completely"],
          ["<strong>Severe</strong>", "Diffuse erythema, altered mental status, seizures, severe bronchospasm, <strong>laryngeal edema</strong>, <strong>severe hypotension</strong>, cardiac arrest", "Emergency treatment (anaphylaxis)"]]) +
        hy("Mild = skin and gut symptoms → observe 30 min. Moderate = bronchospasm or transient hypotension → monitor until resolved. Severe = airway, brain, or circulation failing."),
        ["reaction-mild", "reaction-moderate", "reaction-severe"],
        [q("Which finding classifies an iodinated contrast reaction as mild?", "Flushing and mild urticaria", ["Laryngeal edema", "Seizure", "Severe hypotension"], "Mild: warmth, flushing, N/V, mild urticaria, scratchy throat."),
          q("What is the management of a mild contrast reaction?", "Observe about 30 minutes, with or without diphenhydramine", ["Immediate intubation", "Discharge without observation", "Emergency surgery"], "Mild reactions are observed ~30 minutes ± Benadryl."),
          q("Bronchospasm with transient hypotension after contrast is graded as:", "Moderate", ["Mild", "Severe", "Not a contrast reaction"], "Moderate: severe urticaria, bronchospasm, transient hypotension and tachycardia."),
          q("Which finding indicates a severe contrast reaction?", "Laryngeal edema", ["Warmth", "Nausea", "Scratchy throat"], "Severe reactions include laryngeal edema, seizures, severe hypotension, arrest.")],
        [q("Two minutes after IV contrast, a patient reports warmth, nausea, and a few hives. Vitals are normal and lungs are clear. What is appropriate?", "Observe about 30 minutes, with diphenhydramine if needed", ["Epinephrine and intubation", "Admit to ICU", "Nothing; send home immediately"], "This is a mild reaction."),
          q("After contrast, a patient wheezes with BP 88/50 that improves over minutes. How should he be managed?", "Close monitoring until symptoms resolve completely", ["Discharge after 5 minutes", "Observe 30 minutes then discharge regardless", "Repeat the contrast injection"], "Bronchospasm with transient hypotension is a moderate reaction."),
          q("Shortly after contrast, a patient becomes confused, has stridor, diffuse erythema, and BP 60/30. How is this graded?", "Severe reaction", ["Mild reaction", "Moderate reaction", "Extravasation"], "Altered mental status, laryngeal edema, and severe hypotension are severe.")]),
      C("Contrast extravasation and leaks into body cavities",
        "<p><strong>Extravasation</strong> of IV contrast into the <strong>subcutaneous tissue</strong> is potentially severe.</p>" +
        "<ul><li><strong>Closely monitor skin and soft tissue</strong>; typically <strong>elevate the limb</strong> and apply <strong>hot or cold compresses</strong>.</li>" +
        "<li>Observation ranges from <strong>several hours to overnight</strong>.</li>" +
        "<li>Watch for <strong>compartment syndrome</strong> and consider <strong>surgical consultation</strong>.</li></ul>" +
        "<p><strong>Into the peritoneum or mediastinum:</strong> <strong>barium</strong> leaking through a perforation causes <strong>severe peritonitis</strong> (or mediastinal contamination from an esophageal tear), which is why water-soluble agents are used when perforation is possible.</p>",
        ["extravasation-subq", "extravasation-cavity"],
        [q("What is the initial care for IV contrast extravasation into the arm?", "Elevate the limb, apply hot or cold compresses, and monitor skin and soft tissue", ["Massage the contrast into the muscle", "Apply a tourniquet", "Ignore unless it hurts"], "Elevation, compresses, and close monitoring."),
          q("Which serious complication should be watched for after contrast extravasation?", "Compartment syndrome", ["Pneumothorax", "Hyperkalemia", "Stroke"], "Watch for compartment syndrome and consider surgical consult."),
          q("What happens if barium leaks into the peritoneal cavity?", "Severe peritonitis", ["It is harmlessly absorbed", "Acute kidney injury only", "Hypoglycemia"], "Barium in the abdomen causes peritonitis.")],
        [q("During a contrast CT, the IV infiltrates and the forearm becomes swollen and tense; the patient now has pain with passive finger extension. What is the concern and next step?", "Compartment syndrome; get a surgical consultation", ["Mild reaction; give diphenhydramine", "Normal finding; discharge", "Repeat the injection in the same IV"], "Pain with passive stretch after extravasation suggests compartment syndrome."),
          q("A patient with suspected colonic perforation had a barium enema at an outside facility and now has diffuse abdominal rigidity. What complication is most likely?", "Barium peritonitis", ["Mild contrast reaction", "Contrast nephropathy only", "Motion artifact"], "Barium spilled through a perforation causes severe peritonitis.")])
    ]),

    /* ---------- 7 ---------- */
    S("07-radiography-uses", "7. How x-rays make a radiograph, and when to use plain films", "Objective 7. Slides 32–35, 40–42.", [
      C("Science of radiography",
        "<ul><li>X-rays are part of the <strong>electromagnetic spectrum</strong> (like light and radio waves) at a much <strong>higher frequency</strong>.</li>" +
        "<li>Body tissues <strong>absorb</strong>, <strong>reflect (scatter)</strong>, or <strong>let x-rays pass</strong> unchanged depending on their density.</li>" +
        "<li>A <strong>digital detector (or film)</strong> on the other side counts the x-rays that passed through and produces a <strong>2D grayscale image</strong>: the radiograph.</li>" +
        "<li>“X-ray,” “plain film,” “radiograph,” and “conventional radiograph” all mean the same thing.</li></ul>",
        ["xray-science"],
        [q("What three things can body tissues do to an x-ray beam?", "Absorb it, scatter it, or let it pass through", ["Magnetize, align, and release it", "Reflect it back as sound echoes", "Convert it to visible light"], "Tissue density determines absorption, scatter, or transmission."),
          q("What produces the radiographic image?", "A detector behind the patient measuring how many x-rays passed through", ["A transducer receiving sound echoes", "Radio waves from aligned protons", "A gamma camera detecting tracer"], "The detector quantifies transmitted x-rays into a 2D grayscale image.")],
        [q("A student asks why bones show up white on a hand x-ray. What is the best explanation?", "Dense bone absorbs more x-rays, so fewer reach the detector", ["Bone emits its own radiation", "Bone reflects sound waves", "Bone contains contrast"], "Fewer transmitted x-rays → lighter image.")]),
      C("When plain radiography is the right first study",
        tbl(["Best uses", "Why"], [
          ["<strong>Bones</strong>: fractures, bone lesions/tumors, degenerative change (arthritis)", "First-line in outpatient and emergency settings"],
          ["<strong>Gas/air-defined structures when acuity is low</strong>: lungs, GI tract", "A good “first look”"],
          ["Some organs and <strong>calcifications</strong> (e.g., kidney stones)", "Dense calcium shows up"],
          ["<strong>Dense foreign bodies</strong> (metal)", "Bright white"]]) +
        "<p><strong>Advantages:</strong> <strong>less radiation than CT</strong>, <strong>less costly</strong> (insurers often require a plain film before advanced imaging), and <strong>portable</strong>: can be done at the bedside in any condition.</p>" +
        hy("Plain film first for <strong>bones</strong> and for a <strong>low-acuity first look</strong>; it is cheap, low-dose, and portable."),
        ["xray-best-uses", "xray-advantages"],
        [q("Which is a first-line use of plain radiography?", "Initial evaluation of a suspected fracture", ["Characterizing a liver mass", "Evaluating a brain tumor", "Looking for active arterial bleeding"], "Bones are the classic first-line use."),
          q("Why do insurers often require a plain film before advanced outpatient imaging?", "It is less costly", ["It uses more radiation", "It is the most detailed study", "It requires contrast"], "Plain films are cheaper and often required first."),
          q("Which foreign body is easily seen on plain x-ray?", "A swallowed metal object", ["A wooden splinter", "A plastic toy", "A swallowed grape"], "Dense metal is bright white."),
          q("Which practical advantage makes radiography useful in an unstable ICU patient?", "It is portable and can be done at the bedside", ["It needs no radiation", "It produces 3D images", "It requires the patient to be moved to the scanner"], "Portable radiographs can be done in any condition.")],
        [q("A 35-year-old fell onto an outstretched hand and has snuffbox tenderness. What is the initial imaging?", "Wrist radiographs", ["MRI wrist", "CT wrist", "Nuclear bone scan"], "Plain films are first-line for suspected fractures."),
          q("A 58-year-old with mild cough and low-acuity symptoms needs a first look at the lungs in clinic. Best initial study?", "Chest x-ray", ["CT angiogram", "MRI chest", "PET scan"], "Radiography is a low-cost, low-dose first look when acuity is low.")])
    ]),

    /* ---------- 8 ---------- */
    S("08-radiography-vs-fluoroscopy", "8. Radiography vs fluoroscopy", "Objective 8. Slides 25, 32.", [
      C("Radiography vs fluoroscopy",
        tbl(["", "Radiography", "Fluoroscopy"], [
          ["Image", "Single <strong>static</strong> 2D image", "<strong>Sequential x-rays in real time</strong>: a dynamic, moving study"],
          ["Best for", "Anatomy: bones, lungs, foreign bodies", "<strong>Function</strong> and guiding procedures"],
          ["Main settings", "Outpatient, ED, bedside", "<strong>GI imaging</strong> (barium swallow), <strong>interventional radiology</strong>, <strong>musculoskeletal</strong> radiology; angiograms, nephrostograms, cystograms"],
          ["Radiation", "Low", "Ionizing; dose rises with screening time"]]) +
        hy("Fluoroscopy = “x-ray movie.” Use it when you need to <strong>watch function</strong> (swallowing) or <strong>guide a procedure</strong>."),
        ["fluoro-definition", "fluoro-uses"],
        [q("What distinguishes fluoroscopy from radiography?", "Fluoroscopy shows real-time sequential x-ray images", ["Fluoroscopy uses no radiation", "Fluoroscopy uses magnets", "Fluoroscopy produces cross-sectional slices"], "Fluoroscopy is real-time radiography."),
          q("Fluoroscopy is used predominantly in which areas?", "GI imaging, interventional radiology, and musculoskeletal radiology", ["Brain MRI, breast ultrasound, DEXA", "Mammography only", "Nuclear cardiology"], "These are the main fluoroscopy applications."),
          q("Which study is a classic fluoroscopic exam of function?", "Barium swallow", ["DEXA scan", "Screening mammogram", "Non-contrast head CT"], "A barium swallow watches swallowing in real time.")],
        [q("A 72-year-old has dysphagia and coughs with meals. The team wants to watch the bolus move through the pharynx and esophagus. Which study?", "Fluoroscopic barium swallow", ["Single-view chest x-ray", "Non-contrast CT neck", "DEXA scan"], "Fluoroscopy evaluates function in real time."),
          q("An interventional radiologist is guiding a catheter into an artery to inject contrast. Which imaging is used to watch the catheter in real time?", "Fluoroscopy", ["Plain static radiograph", "DEXA", "Mammography"], "Fluoroscopy guides interventional procedures.")])
    ]),

    /* ---------- 9 ---------- */
    S("09-projections-pa-ap", "9. Projections, and PA vs AP chest radiographs", "Objective 9. Slides 38–39.", [
      C("Why multiple projections",
        "<p>The <strong>projection</strong> is the path the beam takes through the body. Because radiographs are flat 2D images, <strong>multiple projections</strong> are taken to see the area from several angles. Orders read “2 view,” “3 view,” etc.: <strong>AP, PA, lateral, or oblique</strong>.</p>" +
        "<p>Projections are named <strong>from where the beam enters to where it exits</strong>: PA = enters the back, exits the front (chest against the detector).</p>",
        ["projection-definition"],
        [q("What does “projection” mean in radiography?", "The path the x-ray beam takes through the body", ["The brightness of the image", "The amount of contrast given", "The size of the detector"], "Projection = beam path."),
          q("Why are multiple projections taken?", "A flat 2D image needs several angles to see the area of interest", ["To increase radiation dose", "To add contrast", "To make a 3D CT"], "Multiple views compensate for superimposition.")],
        [q("A clinician orders “ankle x-ray, 3 view.” What does that mean?", "Three different projections of the ankle, such as AP, lateral, and oblique", ["Three repeated images in the same projection", "An x-ray read by three radiologists", "Three contrast phases"], "“3 view” refers to different projections.")]),
      C("PA vs AP chest x-ray",
        tbl(["", "PA (posteroanterior)", "AP (anteroposterior)"], [
          ["Position", "<strong>Chest against the detector</strong>, beam enters the back; patient standing", "<strong>Back against the detector</strong>; often supine or sitting, <strong>portable/bedside</strong>"],
          ["Heart size", "Accurate (heart close to film; ~13 cm shadow in the example)", "<strong>Magnified</strong> (heart far from film; ~16 cm shadow), can falsely suggest cardiomegaly"],
          ["Image quality", "<strong>Better</strong>", "<strong>Poorer</strong>"],
          ["When used", "Standard ambulatory CXR", "Patient too ill to stand or move: ICU, trauma"]]) +
        hy("<strong>AP magnifies the heart</strong> and is lower quality; do not call cardiomegaly on an AP film alone. PA is the standard.") +
        "<p class=\"hl\">Clarification: the slide shows the heart-shadow comparison as a diagram; standing PA positioning and portable AP use are standard radiology practice added here to explain it.</p>",
        ["pa-ap-comparison", "ap-magnification"],
        [q("In a PA chest radiograph, which surface is against the detector?", "The anterior chest", ["The back", "The left side", "The right side"], "PA: beam enters posterior, exits anterior, chest against the detector."),
          q("Why does the heart look larger on an AP chest film?", "The heart is farther from the detector, so it is magnified", ["The patient takes a deeper breath", "AP uses contrast", "AP uses less radiation"], "Distance from the detector magnifies the heart shadow."),
          q("Which chest projection gives better image quality?", "PA", ["AP", "They are always identical", "Oblique"], "The slide notes poorer image quality on AP."),
          q("What is the main benefit of the AP projection?", "It can be done portably for patients who cannot stand", ["It shows the heart at true size", "It gives the best image quality", "It needs no radiation"], "AP is used at the bedside for sick patients.")],
        [q("An intubated ICU patient's portable chest film shows an enlarged cardiac silhouette. There is no prior PA film. How should this be interpreted?", "Cautiously; AP films magnify the heart, so cardiomegaly cannot be called reliably", ["Definite cardiomegaly", "Definite pericardial effusion", "The film is over-penetrated"], "AP projection magnifies the heart shadow."),
          q("A healthy outpatient who can stand needs a chest x-ray. Which projection should be obtained?", "PA (with lateral)", ["AP portable", "Oblique only", "Decubitus only"], "PA is the standard, higher-quality projection.")])
    ]),

    /* ---------- 10 ---------- */
    S("10-ct-how-performed", "10. How a CT scan is performed and how images are produced", "Objective 10. Slides 44–46.", [
      C("The CT scanner",
        "<ul><li>The <strong>donut-shaped gantry</strong> holds the <strong>x-ray tube</strong> and <strong>detectors</strong>.</li>" +
        "<li>The <strong>table moves the patient through the gantry</strong> while the tube <strong>rotates rapidly</strong> around the patient.</li>" +
        "<li>A <strong>narrow x-ray beam</strong> passes through a section of the patient; detectors on the other side measure transmitted x-rays.</li>" +
        "<li><strong>Computer processing</strong> builds <strong>cross-sectional slices</strong>; more intense processing produces <strong>3D</strong> images.</li></ul>",
        ["gantry", "image-reconstruction"],
        [q("What does the CT gantry contain?", "The x-ray tube and detectors", ["A superconducting magnet", "An ultrasound transducer", "A gamma camera"], "The donut-shaped gantry houses the tube and detectors."),
          q("How are CT images produced?", "A rotating narrow x-ray beam is measured by detectors and a computer reconstructs cross-sectional slices", ["Radio waves are emitted by aligned protons", "Sound waves reflect off tissue interfaces", "A radioactive tracer emits gamma rays"], "Computer processing creates slices and can create 3D images.")],
        [q("A patient asks, “What happens in the CT machine?” What is an accurate explanation?", "The table slides you through a ring while an x-ray tube spins around you and a computer builds slice images", ["A strong magnet lines up your protons for 45 minutes", "A probe with gel is moved over your skin", "You drink a tracer and a camera watches it for hours"], "CT: moving table, rotating x-ray tube, computer reconstruction.")]),
      C("Hounsfield units",
        "<p>Unlike plain films, CT density is <strong>quantified</strong> on the <strong>Hounsfield unit (HU)</strong> scale, compared with water.</p>" +
        tbl(["Material", "HU", "Shade"], [
          ["<strong>Air</strong>", "about <strong>−1000</strong>", "Black"],
          ["Fat", "Negative (below water)", "Dark gray"],
          ["<strong>Water</strong>", "<strong>0</strong>", "Gray (reference)"],
          ["Bone", "High positive", "White"],
          ["<strong>Metal</strong>", "<strong>&gt; +1000</strong>", "Bright white"]]),
        ["hounsfield"],
        [q("What is the Hounsfield unit value of water?", "0 HU", ["−1000 HU", "+1000 HU", "+100 HU"], "Water is the reference at 0 HU."),
          q("Air on CT measures about:", "−1000 HU", ["0 HU", "+500 HU", "+1000 HU"], "Air is about −1000 HU (black)."),
          q("What makes CT density different from plain-film density?", "CT density is quantifiable in Hounsfield units", ["CT cannot show density", "CT density is measured in decibels", "CT only shows bone"], "CT assigns each voxel an HU value.")],
        [q("A radiologist measures a fluid-filled renal lesion at about 0 HU. What does that value suggest the lesion contains?", "Water-density fluid", ["Air", "Metal", "Fat"], "0 HU = water.")])
    ]),

    /* ---------- 11 ---------- */
    S("11-ct-best-uses", "11. Situations and structures best evaluated by CT", "Objective 11. Slides 57–61.", [
      C("What CT does best",
        tbl(["Area", "Why CT"], [
          ["<strong>Viscera</strong>: small/large bowel, liver, pancreas, spleen, lungs, brain", "Seen in many planes; organs enhance well with contrast"],
          ["<strong>Vascular structures and active bleeding</strong>", "Shows <strong>contrast extravasation</strong>; needs <strong>IV contrast</strong>"],
          ["<strong>Fine bony detail</strong>", "Occult fractures after non-diagnostic films; <strong>skull and spine after trauma</strong>"]]) +
        hy("Bones: <strong>plain film first</strong> (less radiation, cheaper). Go to CT for an <strong>occult fracture</strong> when films are non-diagnostic, and go straight to CT for <strong>skull and spine trauma</strong>."),
        ["ct-viscera", "ct-vascular-bleeding", "ct-bone"],
        [q("Which bony evaluation goes straight to CT rather than plain film?", "Skull and spine after trauma", ["Simple ankle sprain", "Routine hand arthritis", "Suspected toe fracture"], "CT is chosen for skull and spine trauma because of the detail needed."),
          q("CT for active bleeding requires:", "IV contrast", ["Oral barium only", "No contrast", "Gadolinium"], "Vascular evaluation requires IV contrast to show extravasation."),
          q("Why is CT a common choice for the abdominal viscera?", "Organs are seen in many cross-sectional planes and enhance well with contrast", ["It uses no radiation", "It is cheaper than x-ray", "It is portable"], "Multiplanar views plus contrast enhancement give optimal definition.")],
        [q("An elderly woman fell, has hip pain, cannot bear weight, and her hip radiographs are negative. What is the next study?", "CT to look for an occult fracture", ["Repeat the same radiograph tomorrow", "Discharge without imaging", "Barium enema"], "If films are not diagnostic and fracture is suspected, CT is warranted."),
          q("A trauma patient is hypotensive with a suspected splenic injury. Which study shows active bleeding?", "CT with IV contrast showing contrast extravasation", ["Non-contrast CT", "Plain abdominal x-ray", "DEXA"], "IV contrast shows extravasation from bleeding vessels.")]),
      C("CT considerations before ordering",
        "<ul><li><strong>Radiation:</strong> CT uses <strong>much more</strong> than a plain film. Has the patient had <strong>multiple CTs</strong>? Can <strong>another test</strong> make the diagnosis?</li>" +
        "<li><strong>Pregnancy:</strong> can another modality image her? Do a <strong>risk–benefit assessment</strong> to avoid undue fetal radiation. (Fetal dose: plain chest ≤ 0.01 mGy; CT abdomen 8 mGy; CT pelvis 25 mGy.)</li>" +
        "<li><strong>Can the patient hold still?</strong> Motion causes <strong>artifact</strong> and non-diagnostic images; repeats mean more radiation. A concern in <strong>small children, encephalopathy, and dementia</strong>. Less of a problem for CT (fast) than for <strong>MRI</strong> (long and claustrophobic).</li></ul>",
        ["ct-radiation-cumulative", "ct-pregnancy", "ct-motion"],
        [q("Why is motion a bigger problem for MRI than for CT?", "MRI acquires images over a longer time in a more claustrophobic space", ["CT uses magnets", "MRI uses more radiation", "CT cannot image moving patients at all"], "CT is fast; MRI is long."),
          q("Which CT exam gives the fetus the highest dose?", "CT pelvis", ["CT head", "Plain chest x-ray", "CT chest"], "Fetal dose: CT pelvis ~25 mGy vs head ~0.005 mGy."),
          q("What is the consequence of a patient moving during CT?", "Motion artifact that may require a repeat scan and more radiation", ["Better image contrast", "Lower radiation dose", "Automatic MRI conversion"], "Motion blurs images; repeats add radiation.")],
        [q("An agitated patient with dementia needs a head CT after a fall. What should the team anticipate?", "Motion artifact; the patient may need help holding still to avoid a repeat scan", ["No concerns because CT is radiation-free", "MRI would be easier because it is faster", "Contrast is mandatory"], "Patients who cannot hold still risk non-diagnostic images and repeat exposure."),
          q("A 24-year-old has had five CTs for recurrent flank pain this year and presents again with similar pain. What should be considered first?", "Cumulative radiation and whether another test can answer the question", ["A sixth CT is always required", "No imaging is ever indicated", "MRI with contrast is the default"], "Consider repeated CT exposure and alternatives.")])
    ]),

    /* ---------- 12 ---------- */
    S("12-window-width-level", "12. Window width and window level", "Objective 12. Slides 51–55.", [
      C("Why set a window",
        "<p>The eye cannot separate all the gray shades from <strong>−1000 to +1000 HU</strong>. The reader picks a <strong>limited range of HU</strong> to show what they want to see.</p>" +
        "<ul><li><strong>Window width (WW):</strong> the <strong>range of HU</strong> displayed as gray shades. Values <strong>below</strong> the range show <strong>black</strong>; values <strong>above</strong> show <strong>white</strong>.</li>" +
        "<li><strong>Window level (WL):</strong> the <strong>center</strong> of that range. Example: −100 to +500 HU → width 600, <strong>level 200 HU</strong>.</li></ul>",
        ["window-width-definition", "window-level-definition"],
        [q("With a window of −100 to +500 HU, what is the window level?", "200 HU", ["600 HU", "400 HU", "−100 HU"], "The level is the midpoint of the range."),
          q("Tissues with HU below the window's lower limit appear:", "Black", ["White", "Mid gray", "Invisible"], "Below the window → black; above → white."),
          q("What is the window width?", "The range of HU represented by shades of gray", ["The thickness of each slice", "The diameter of the gantry", "The amount of contrast given"], "Width = how many HU values map to gray.")],
        [q("A radiologist sets a window from −200 to +200 HU. Cortical bone at +1000 HU will appear:", "White", ["Black", "Mid gray", "Not displayed"], "Above the upper limit → white.")]),
      C("Changing the width changes contrast",
        tbl(["Change", "Effect"], [
          ["<strong>Increase</strong> window width", "<strong>Decreases</strong> image contrast (bigger density change needed to change shade)"],
          ["<strong>Decrease</strong> window width", "<strong>Increases</strong> image contrast"]]) +
        "<p>Example: widening from 400 to 1,000 makes the muscle and fat in the chest wall much harder to tell apart.</p>" +
        "<p>Readers view the same scan several times with different windows. Chest CT: <strong>bone windows</strong> (ribs, sternum, spine), <strong>lung windows</strong> (parenchyma), <strong>chest/mediastinal windows</strong> (vessels, airways).</p>" +
        hy("<strong>Wide window = low contrast</strong> (good for very different densities like lung or bone). <strong>Narrow window = high contrast</strong> (good for similar soft tissues)."),
        ["width-contrast-effect", "multiple-windows"],
        [q("What happens to image contrast when the window width is increased?", "It decreases", ["It increases", "It stays the same", "The image becomes all black"], "A wider window spreads more HU across the same grays."),
          q("To better separate soft tissues of similar density, the reader should:", "Narrow the window width", ["Widen the window width", "Raise the kVp only", "Remove contrast"], "Narrower width = higher contrast."),
          q("Which windows are reviewed on a chest CT?", "Bone, lung, and chest (mediastinal) windows", ["Only lung windows", "Only bone windows", "Brain and liver windows"], "Each window targets different structures.")],
        [q("On a chest CT viewed with window width 1,000, you cannot tell chest-wall fat from muscle. What change will help?", "Narrow the window width", ["Widen the window further", "Switch to a plain film", "Add oral contrast"], "Decreasing width increases contrast between similar tissues."),
          q("A reader wants to evaluate rib fractures on a chest CT. Which display should she use?", "Bone windows", ["Lung windows", "Mediastinal soft-tissue windows only", "Any window shows bone equally"], "Bone windows evaluate ribs, sternum, and spine.")])
    ]),

    /* ---------- 13 ---------- */
    S("13-ct-study-types", "13. CT with IV contrast, HRCT, CT angiography, and 3D reconstruction", "Objective 13. Slides 56, 63–66.", [
      C("CT with IV contrast vs CT angiogram",
        tbl(["", "CT with IV contrast", "CT angiogram (CTA)"], [
          ["Timing", "Scan timed to best enhance <strong>organs, soft tissue, and vessels</strong> (arterial vs venous phase)", "Timed to the <strong>contrast bolus in the vessels</strong>"],
          ["Purpose", "Inflammation, infection, abscess, tumor and metastasis", "Specifically the <strong>vasculature</strong>: aorta and branches, stenosis, dissection, clot"]]) +
        "<p>Different <strong>enhancement phases</strong> in the <strong>liver, pancreas, and kidney</strong> help diagnosis; radiology may suggest a specific <strong>protocol</strong> for those organs.</p>",
        ["ct-iv-contrast", "cta"],
        [q("What distinguishes a CTA from a routine CT with IV contrast?", "CTA is timed and processed specifically to look at the vasculature", ["CTA uses no contrast", "CTA uses barium", "CTA uses magnets"], "CTA targets vessels; routine contrast CT targets organs and soft tissues."),
          q("Which organs have distinct enhancement phases that may call for a special CT protocol?", "Liver, pancreas, and kidney", ["Bones, skin, and muscle", "Lungs, pleura, and trachea", "Brain, eye, and ear"], "Radiology may suggest a protocol for these organs.")],
        [q("A hypertensive man has tearing chest pain radiating to the back. The PA suspects aortic dissection. Which CT should be ordered?", "CT angiogram of the chest", ["Non-contrast CT chest", "High-resolution CT", "Routine CT with oral contrast only"], "Vascular pathology: order CTA."),
          q("A patient with suspected pancreatic cancer needs CT. Radiology suggests a multiphase protocol. Why?", "Different enhancement phases help detect and characterize the lesion", ["It reduces radiation to zero", "It avoids the need for contrast", "It replaces biopsy entirely"], "Enhancement phases in the pancreas, liver, and kidney aid diagnosis.")]),
      C("High-resolution CT (HRCT)",
        "<p>A <strong>thin-section chest CT</strong> for <strong>lung parenchymal detail</strong>.</p>" +
        "<ul><li><strong>Thin slices</strong> (≤ 1.5 mm, often ~1 mm), <strong>high-spatial-frequency</strong> reconstruction algorithm, <strong>usually noncontrast</strong>, viewed on <strong>lung windows</strong>.</li>" +
        "<li>Protocol: supine inspiratory images of the whole chest; <strong>expiratory</strong> images detect <strong>air trapping</strong>; <strong>prone</strong> images separate dependent atelectasis from true disease.</li>" +
        "<li><strong>Best uses:</strong> <strong>interstitial lung disease/pulmonary fibrosis</strong>, bronchiectasis, emphysema and diffuse parenchymal disease, small-airway disease.</li>" +
        "<li><strong>Limits:</strong> noisier; less soft-tissue detail; not for mediastinal or vascular evaluation.</li></ul>" +
        hy("HRCT ≠ CTA. HRCT is for <strong>lung parenchyma</strong>; CTA is for <strong>vessels</strong>."),
        ["hrct-technique", "hrct-uses"],
        [q("What technique defines a high-resolution CT?", "Thin sections with a high-spatial-frequency reconstruction, usually noncontrast", ["Thick slices with IV contrast timed to arteries", "Barium with fluoroscopy", "Radioactive tracer imaging"], "HRCT uses ≤1.5 mm slices and a sharp reconstruction algorithm."),
          q("Why are expiratory images obtained in HRCT?", "To detect air trapping", ["To see the aorta", "To reduce radiation", "To give contrast time to circulate"], "Expiratory images show air trapping from small-airway disease."),
          q("Why are prone images obtained in HRCT?", "To distinguish dependent atelectasis from true disease", ["To view the spine", "To image the kidneys", "To avoid contrast reactions"], "Prone positioning clears dependent atelectasis."),
          q("HRCT is best for evaluating:", "Interstitial lung disease", ["Pulmonary embolism", "Aortic dissection", "Kidney stones"], "HRCT targets lung parenchyma, not vessels.")],
        [q("A 64-year-old with progressive dyspnea and bibasilar velcro crackles is suspected of pulmonary fibrosis. Which CT?", "High-resolution CT of the chest", ["CT angiogram of the chest", "CT abdomen with oral contrast", "Non-contrast head CT"], "HRCT is optimized for interstitial lung disease."),
          q("A clinician orders HRCT to rule out pulmonary embolism. What is wrong with this order?", "HRCT is for lung parenchyma; a CTA is needed for vessels", ["Nothing; HRCT is best for PE", "HRCT needs barium", "PE cannot be imaged by CT"], "HRCT is not designed for vascular imaging.")]),
      C("3D reconstructions",
        "<p>CT data can be computer-processed into <strong>3D reconstructions</strong>:</p>" +
        "<ul><li><strong>Surface rendering</strong> (e.g., the spine)</li>" +
        "<li><strong>Volumetric rendering</strong> (e.g., thoracic spine with hardware)</li>" +
        "<li><strong>Vascular reconstructions</strong> (e.g., the distal aorta)</li></ul>" +
        "<p>The technique is the same scan with <strong>more intense computer processing</strong>, not a different exposure.</p>",
        ["3d-reconstruction"],
        [q("How is a 3D CT reconstruction produced?", "More intense computer processing of the CT data", ["A separate MRI sequence", "Ultrasound with Doppler", "A second contrast agent"], "3D images come from processing the acquired CT data."),
          q("Which is an example of a 3D CT reconstruction shown in lecture?", "Volumetric rendering of the thoracic spine with hardware", ["A barium swallow", "A screening mammogram", "A PA chest film"], "Surface, volumetric, and vascular renderings were shown.")],
        [q("A surgeon planning a complex spinal fusion revision wants to see the existing hardware in three dimensions. What can be produced from the CT?", "A 3D volumetric reconstruction", ["A fluoroscopic swallow", "An HRCT expiratory series", "A DEXA scan"], "3D reconstructions show complex anatomy and hardware.")])
    ]),

    /* ---------- 14 ---------- */
    S("14-imaging-planes", "14. Axial, coronal, and sagittal views", "Objective 14. Slides 47–50.", [
      C("The three planes",
        tbl(["Plane", "Divides the body", "You view it as if…"], [
          ["<strong>Axial</strong> (transverse)", "Top from bottom", "Standing at the <strong>patient's feet looking up</strong>; most common, scroll up and down"],
          ["<strong>Coronal</strong>", "Front from back", "Standing <strong>in front of the patient</strong>, slices from front to back"],
          ["<strong>Sagittal</strong>", "Left from right", "Standing at the <strong>patient's left shoulder</strong>, slices passing to the right"]]) +
        hy("Axial images: patient's <strong>right is on the viewer's left</strong>, because you are looking up from the feet.") +
        mn("<strong>Sagittal</strong> = <strong>S</strong>ide view (like an arrow, a “sagitta,” shot front to back through you). <strong>Coronal</strong> = like a <strong>crown</strong> band running ear to ear. <strong>Axial</strong> = slices like a loaf of bread."),
        ["axial", "coronal", "sagittal"],
        [q("An axial CT image is displayed as if the viewer is:", "Standing at the patient's feet looking up", ["Standing at the patient's head looking down", "Standing at the left shoulder", "Standing behind the patient"], "Axial: viewed from the feet."),
          q("Which plane is viewed as if standing in front of the patient?", "Coronal", ["Axial", "Sagittal", "Oblique"], "Coronal slices pass front to back."),
          q("Which plane divides the body into left and right portions?", "Sagittal", ["Coronal", "Axial", "Transverse"], "Sagittal slices pass from the left shoulder to the right."),
          q("Which plane is most commonly used to scroll through a CT?", "Axial", ["Sagittal", "Coronal", "Oblique"], "Clinicians scroll up and down through axial images.")],
        [q("On an axial abdominal CT, the liver appears on the left side of the screen. Is this normal?", "Yes; axial images are viewed from the feet, so the patient's right is on the viewer's left", ["No; this indicates situs inversus", "No; the scan was flipped in error", "Yes, because it is a sagittal image"], "Viewing from the feet places the patient's right on the screen's left."),
          q("A CT image shows the whole spine from the skull base to the pelvis in one long slice, as if viewed from the patient's side. Which plane?", "Sagittal", ["Axial", "Coronal", "Transverse"], "A side-view slice through the midline is sagittal."),
          q("An image shows both kidneys, the liver, and the spleen side by side as if looking at the patient's front. Which plane?", "Coronal", ["Axial", "Sagittal", "Oblique"], "Coronal images are viewed from the front.")])
    ]),

    /* ---------- 22 (Part I modalities) ---------- */
    S("22-counseling-xray-ct", "22. Counseling patients about x-ray and CT", "Objective 22, for the Part I modalities. Slides 20–23, 28–30, 42, 44, 60–62.", [
      C("Talking a patient through an x-ray",
        "<ul><li><strong>What it is:</strong> a quick picture using a small amount of radiation; no needles in most cases.</li>" +
        "<li><strong>Why several pictures:</strong> 2- or 3-view orders take the picture from different angles.</li>" +
        "<li><strong>Radiation:</strong> very low (chest x-ray ≈ 10 days of natural background).</li>" +
        "<li><strong>Pregnancy:</strong> ask; tell the tech if there is any chance of pregnancy.</li>" +
        "<li><strong>Portable:</strong> can be done at the bedside if the patient cannot move.</li></ul>",
        ["counsel-xray"],
        [q("When counseling a patient before a chest x-ray, how can you describe the radiation dose?", "Very low, about 10 days of natural background radiation", ["About 3 years of background radiation", "Zero radiation", "Equal to a CT chest"], "CXR ≈ 0.1 mSv ≈ 10 days of background."),
          q("Which question should be asked of a woman of reproductive age before any x-ray?", "Could you be pregnant?", ["Are you claustrophobic?", "Do you have a pacemaker?", "Are you allergic to latex gloves?"], "Pregnancy changes the risk–benefit discussion for ionizing imaging.")],
        [q("A worried mother asks whether her child's two-view chest x-ray is dangerous. What is the best answer?", "The dose is very small, about 10 days of natural background, and the benefit outweighs the risk", ["It is equivalent to years of background radiation", "X-rays use no radiation", "Children cannot have x-rays"], "Low dose; explain benefit vs risk in plain language.")]),
      C("Talking a patient through a CT",
        "<ul><li><strong>The experience:</strong> lie on a table that slides through a <strong>ring</strong> (not an enclosed tube); the scan is <strong>fast</strong>. <strong>Holding still</strong> matters: movement blurs the images and may mean a repeat with more radiation.</li>" +
        "<li><strong>Radiation:</strong> more than an x-ray (CT chest ≈ 2 years of background); ask about <strong>prior CTs</strong> and <strong>pregnancy</strong>.</li>" +
        "<li><strong>If IV contrast:</strong> check <strong>kidney function</strong> and <strong>prior contrast reactions</strong>. Warmth or flushing can occur. Report <strong>hives, trouble breathing, or throat tightness</strong> right away. Report <strong>pain or swelling at the IV site</strong> (extravasation).</li>" +
        "<li><strong>If oral contrast:</strong> drink it before the scan to outline the bowel.</li></ul>",
        ["counsel-ct", "counsel-contrast"],
        [q("Which instruction most improves CT image quality?", "Hold still during the scan", ["Breathe rapidly", "Eat a large meal first", "Wear metal jewelry"], "Motion causes artifact and may require repeat exposure."),
          q("Before IV contrast for CT, which two histories must be asked?", "Kidney disease and prior contrast reactions", ["Seasonal allergies and diet", "Exercise habits and sleep", "Eye color and height"], "Renal function and prior reactions drive contrast decisions."),
          q("Which symptom during a contrast CT should the patient report right away?", "Throat tightness or trouble breathing", ["A brief warm sensation", "Hearing the table move", "Feeling the table slide"], "Airway symptoms can signal a moderate or severe reaction.")],
        [q("A claustrophobic patient is anxious about her CT. What reassurance is accurate?", "CT is a quick scan through an open ring, not a long enclosed tube", ["CT takes about an hour in a closed tube", "She will be sedated for every CT", "CT is louder and longer than MRI"], "CT is fast and less confining than MRI."),
          q("Midway through a contrast CT, a patient says his IV arm feels painful and swollen. What should the team do?", "Stop the injection, elevate the arm, apply compresses, and monitor for compartment syndrome", ["Continue the injection", "Massage the arm", "Ignore it; this is expected"], "This is extravasation.")])
    ])
  ];
})();
