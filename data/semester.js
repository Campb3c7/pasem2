/*
  This is the only file you need to edit when adding Semester 2 material.

  Course -> lecture -> objectives -> cards / test / apply
  - cards: { title, body, highYield }
  - questions: { prompt, choices, correct, explanation, card }
  - correct is zero-based: 0 means the first choice.
  - card is optional and zero-based. It links a question to its Learn card
    for Recall mode; when omitted, Recall chooses the best keyword match.

  Objective shape:
  {
    id: "01-objective-name",
    title: "1. Objective wording",
    description: "Optional short summary",
    cards: [],
    test: [],
    apply: []
  }
*/
window.SEMESTER = {
  title: "PA Semester 2",
  courses: [
    {
      id: "infectious-disease",
      title: "Infectious Disease",
      short: "ID",
      icon: "🦠",
      color: "gold",
      description: "Semester 2 infectious disease lectures and study material.",
      lectures: [
        {
          id: "vaccines",
          title: "Vaccines",
          description: "Vaccine lecture materials, recall questions, and clinical application cases.",
          objectives: window.VACCINE_OBJECTIVES || []
        },
        {
          id: "viral-diseases",
          title: "Viral Diseases",
          description: "Viral pathophysiology, clinical recognition, diagnostics, treatment, prevention, and complications.",
          objectives: window.VIRAL_DISEASE_OBJECTIVES || []
        },
        {
          id: "syphilis",
          title: "Syphilis",
          description: "Transmission, staging, clinical findings, diagnostics, treatment, follow-up, exposures, and reporting.",
          objectives: window.SYPHILIS_OBJECTIVES || []
        },
        {
          id: "tick-borne-illnesses",
          title: "Tick-borne Illnesses",
          description: "Rocky Mountain spotted fever and Lyme disease epidemiology, presentation, diagnosis, treatment, and prevention.",
          objectives: window.TICK_BORNE_OBJECTIVES || []
        },
        {
          id: "introduction-infectious-disease",
          title: "Introduction to Infectious Disease",
          description: "Foundations of infection, immunity, clinical reasoning, diagnostics, treatment, microbiology, and prevention.",
          objectives: window.INTRO_ID_OBJECTIVES || []
        },
        {
          id: "infectious-disease-pharmacology",
          title: "Infectious Disease Pharmacology",
          description: "Antibiotic selection and coverage, monitoring, adverse effects and interactions, antivirals, and systemic antifungals.",
          objectives: window.ID_PHARM_OBJECTIVES || []
        },
        {
          id: "sepsis",
          title: "Pathophysiology of Sepsis",
          description: "Inflammation, shock, systemic organ injury, diagnostic workup, resuscitation, and febrile neutropenia.",
          objectives: window.SEPSIS_OBJECTIVES || []
        },
        {
          id: "global-infections",
          title: "Global Infections",
          description: "Global-health terminology, infection recognition, diagnostics, treatment, prevention, travel medicine, and public health.",
          objectives: window.GLOBAL_INFECTION_OBJECTIVES || []
        },
        {
          id: "fungal-diseases",
          title: "Fungal Diseases, Toxoplasmosis & MAC",
          description: "Toxoplasmosis across patient populations, endemic and invasive fungal disease, aspergillosis syndromes, and MAC.",
          objectives: window.FUNGAL_DISEASE_OBJECTIVES || []
        }
      ]
    }
  ]
};
