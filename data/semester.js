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
        }
      ]
    }
  ]
};
