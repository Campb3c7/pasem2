/*
  EKG Axis trainer data (objective 11). Engine: ekg-axis.js.
  quadrants: the four answers, by the lead I / aVF method the EKG deck teaches (slides "Calculating the
    Electrical Axis"). Angles are degrees on the hexaxial wheel (0 = lead I, +90 = aVF, down is positive).
  causes: "what does this do to the axis?" questions. Ids (ax-*) are progress keys: never rename.
    Facts that apply the deck's rule ("axis points away from an infarct") to a specific wall say so.
*/
(function () {
  "use strict";

  var quadrants = [
    { id: "normal", name: "Normal axis", range: "0° to +90°", leadI: "+", aVF: "+", draw: [15, 75], thumbs: "Both thumbs up." },
    { id: "lad", name: "Left axis deviation", range: "0° to -90°", leadI: "+", aVF: "−", draw: [-80, -15], thumbs: "Thumbs leaving each other: I up, aVF down." },
    { id: "rad", name: "Right axis deviation", range: "+90° to 180°", leadI: "−", aVF: "+", draw: [105, 165], thumbs: "Thumbs reaching toward each other: I down, aVF up." },
    { id: "extreme", name: "Extreme axis deviation", range: "-90° to 180°", leadI: "−", aVF: "−", draw: [-165, -105], thumbs: "Both thumbs down." }
  ];

  function C(id, prompt, answer, why) { return { id: id, prompt: prompt, answer: answer, why: why }; }
  var causes = [
    C("ax-pregnancy", "A woman in her third trimester of pregnancy", "lad", "The uterus pushes the diaphragm up, so the heart lies more horizontal and the axis swings left."),
    C("ax-obesity", "A patient with significant abdominal obesity", "lad", "Abdominal mass elevates the diaphragm: the heart sits more horizontally, giving left axis deviation."),
    C("ax-diaphragm", "Anything that significantly elevates the diaphragm (for example a large ascites)", "lad", "Elevated diaphragm, horizontal heart, left axis deviation."),
    C("ax-thin", "A tall, thin young adult", "rad", "Thin people have a more vertical heart, so the axis swings right."),
    C("ax-child", "A healthy child", "rad", "Children's hearts sit more vertically and (standard teaching) the right ventricle is relatively bigger, so right axis is normal for them."),
    C("ax-lvh", "Left ventricular hypertrophy", "lad", "Axis goes TOWARD hypertrophy: extra LV muscle makes a bigger leftward vector. The deck notes LVH often shows about -15°."),
    C("ax-rvh", "Right ventricular hypertrophy", "rad", "Axis goes toward hypertrophy: the thick RV pulls the axis right. Right axis deviation is the most common RVH finding."),
    C("ax-lah", "Left anterior hemiblock", "lad", "The anterior fascicle is blocked, so the LV is activated from the posterior fascicle, up and to the left: left axis deviation without a wide QRS."),
    C("ax-lph", "Left posterior hemiblock", "rad", "The posterior fascicle is blocked, so activation spreads from the anterior fascicle down and to the right: right axis deviation."),
    C("ax-pe", "A large pulmonary embolus", "rad", "Acute right heart strain pulls the axis right (the deck lists right axis deviation, S1Q3T3 and RBBB for PE)."),
    C("ax-inferior-mi", "An old inferior wall MI (applying the deck's rule)", "lad", "Axis points AWAY from an infarct: dead inferior tissue loses its downward vector, so the unopposed forces point up and left."),
    C("ax-lateral-mi", "An old lateral wall MI (applying the deck's rule)", "rad", "Axis points away from the infarct: the lateral (leftward) forces are lost, so the axis swings right."),
    C("ax-normal-adult", "A healthy, average-build adult", "normal", "The big left ventricle pulls the axis down and to the left, between 0° and +90°.")
  ];

  window.EKG_AXIS = { quadrants: quadrants, causes: causes };
}());
