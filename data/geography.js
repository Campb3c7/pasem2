(function () {
  "use strict";

  window.DISEASE_GEOGRAPHY = [
    {
      id: "lyme",
      disease: "Lyme disease",
      region: "Northeastern and mid-Atlantic US; upper Midwest and Great Lakes",
      group: "United States",
      scope: "Strong regional clue",
      points: [[292, 128], [257, 132]],
      travelClue: "Wooded or high-grass exposure in the Northeast, mid-Atlantic, upper Midwest, or Great Lakes with an Ixodes tick risk",
      anchor: "Northeast + Great Lakes + black-legged tick"
    },
    {
      id: "rmsf",
      disease: "Rocky Mountain spotted fever",
      region: "Southeastern and south-central United States",
      group: "United States",
      scope: "Strong regional clue",
      points: [[260, 174], [232, 174]],
      travelClue: "Spring or summer tick exposure in the southeastern or south-central US, often around dogs, woods, or high grass",
      anchor: "Ignore the name: the highest prevalence is in the Southeast and south-central states"
    },
    {
      id: "ehrlichiosis",
      disease: "Ehrlichiosis",
      region: "South-central, mid-Atlantic, and southeastern United States",
      group: "United States",
      scope: "Strong regional clue",
      points: [[229, 164], [272, 163]],
      travelClue: "Lone star tick exposure in Arkansas, Missouri, Oklahoma, the mid-Atlantic, or the Southeast, especially May through July",
      anchor: "Ehrlichia follows the lone star tick through the southern and mid-Atlantic states"
    },
    {
      id: "anaplasmosis",
      disease: "Anaplasmosis",
      region: "Upper Midwest and northeastern United States",
      group: "United States",
      scope: "Strong regional clue",
      points: [[253, 126], [294, 121]],
      travelClue: "Black-legged tick exposure in Minnesota, Wisconsin, New England, or New York, especially May through July",
      anchor: "Anaplasma shares the Lyme map: upper Midwest plus Northeast"
    },
    {
      id: "babesiosis",
      disease: "Babesiosis",
      region: "Northeastern and upper Midwestern United States",
      group: "United States",
      scope: "Strong regional clue",
      points: [[301, 128], [252, 128]],
      travelClue: "Black-legged tick exposure in the Northeast or upper Midwest, with most cases during June through August",
      anchor: "Babesia shares Ixodes territory with Lyme and anaplasmosis"
    },
    {
      id: "histoplasmosis",
      disease: "Histoplasmosis",
      region: "Ohio and Mississippi River valleys",
      group: "United States",
      scope: "Classic endemic mycosis",
      points: [[259, 151], [244, 162]],
      travelClue: "Cave, chicken-coop, roost, or demolition exposure along the Ohio or Mississippi River valleys with aerosolized bird or bat droppings",
      anchor: "Histo follows the Ohio and Mississippi rivers"
    },
    {
      id: "coccidioidomycosis",
      disease: "Coccidioidomycosis",
      region: "Southwestern US; parts of Mexico and Central and South America",
      group: "United States and Latin America",
      scope: "Classic endemic mycosis",
      points: [[194, 158], [225, 205], [286, 290]],
      travelClue: "Dusty soil exposure in Arizona, California's San Joaquin Valley, southern Nevada, southwestern Utah, southern New Mexico, western Texas, or farther south in the Americas",
      anchor: "Valley fever belongs to the dusty desert Southwest"
    },
    {
      id: "cryptococcus-gattii",
      disease: "Cryptococcus gattii infection",
      region: "Pacific Northwest United States",
      group: "United States",
      scope: "Species-level clue",
      points: [[160, 116]],
      travelClue: "Pacific Northwest exposure around eucalyptus trees followed by pulmonary or central nervous system disease",
      anchor: "C. gattii: Pacific Northwest + eucalyptus"
    },
    {
      id: "chikungunya",
      disease: "Chikungunya fever",
      region: "Africa, Asia, the Americas, and Indian and Pacific islands",
      group: "Broad tropical distribution",
      scope: "Overlapping Aedes geography",
      points: [[490, 250], [705, 225], [310, 255], [855, 260]],
      travelClue: "Aedes exposure in a warm region of Africa, Asia, the Americas, or an Indian or Pacific island, followed by disabling symmetric joint pain",
      anchor: "The map overlaps Zika and dengue; severe persistent polyarthralgia identifies chikungunya"
    },
    {
      id: "zika",
      disease: "Zika virus infection",
      region: "Africa, Southeast Asia, the Americas, and Pacific islands",
      group: "Broad tropical distribution",
      scope: "Overlapping Aedes geography",
      points: [[500, 255], [735, 245], [308, 262], [860, 270]],
      travelClue: "Residence in or travel to a mosquito-transmission area, especially Central or South America, the Caribbean, Southeast Asia, Africa, or Pacific islands",
      anchor: "Geography overlaps dengue and chikungunya; mild fever, pruritic rash, conjunctivitis, and pregnancy risk point to Zika"
    },
    {
      id: "dengue",
      disease: "Dengue fever",
      region: "Tropical and subtropical climates worldwide",
      group: "Broad tropical distribution",
      scope: "Tropical belt",
      points: [[305, 255], [500, 258], [720, 245], [865, 268]],
      travelClue: "Aedes exposure in a tropical or subtropical destination followed by high fever, retro-orbital pain, severe myalgias, or thrombocytopenia",
      anchor: "Worldwide tropical belt; deterioration as fever falls is the dangerous dengue clue"
    },
    {
      id: "ebola",
      disease: "Ebola virus disease",
      region: "Africa",
      group: "Africa",
      scope: "Strong continental clue",
      points: [[500, 250]],
      travelClue: "Travel or direct body-fluid exposure linked to an affected African region followed by abrupt systemic and gastrointestinal illness with possible bleeding",
      anchor: "The lecture notes that initial human disease has occurred in Africa"
    },
    {
      id: "yellow-fever",
      disease: "Yellow fever",
      region: "Tropical Africa and South America",
      group: "Africa and South America",
      scope: "Two-continent tropical clue",
      points: [[495, 257], [302, 295]],
      travelClue: "Unvaccinated traveler with mosquito exposure in tropical Africa or South America who develops fever followed by jaundice or bleeding",
      anchor: "Yellow fever spans the tropical yellow belt of Africa and South America"
    },
    {
      id: "mers",
      disease: "MERS",
      region: "Arabian Peninsula and neighboring countries",
      group: "Middle East",
      scope: "Very strong regional clue",
      points: [[612, 202]],
      travelClue: "Travel from the Arabian Peninsula or nearby countries within 14 days, often with camel or healthcare exposure, followed by severe lower-respiratory disease",
      anchor: "MERS cases link back to the Arabian Peninsula"
    },
    {
      id: "mpox",
      disease: "Mpox",
      region: "Historically endemic in central and western Africa; outbreaks occur elsewhere",
      group: "Africa",
      scope: "Useful but not exclusive",
      points: [[482, 242], [518, 246]],
      travelClue: "Central or western African exposure can support the diagnosis, but modern outbreaks mean geography alone cannot exclude or confirm mpox",
      anchor: "Central and West Africa are the endemic anchor, not a diagnostic requirement"
    },
    {
      id: "cholera",
      disease: "Cholera",
      region: "Parts of Asia, the Middle East, Africa, South and Central America, and the US Gulf Coast",
      group: "Water and sanitation risk regions",
      scope: "Broad environmental clue",
      points: [[704, 222], [610, 205], [500, 255], [293, 262], [245, 184]],
      travelClue: "Travel where water treatment and sanitation are inadequate, followed by profuse rice-water diarrhea and rapid dehydration",
      anchor: "Map the water risk first: contaminated water, seafood, or food"
    },
    {
      id: "yaws",
      disease: "Yaws",
      region: "Warm, humid tropical forest areas of Africa, Asia, Latin America, and the Pacific",
      group: "Broad tropical distribution",
      scope: "Tropical forest clue",
      points: [[500, 262], [720, 244], [305, 280], [862, 275]],
      travelClue: "A child in a poor, warm, humid tropical forest community develops a papillomatous lesion after direct nonsexual contact",
      anchor: "Yaws follows humid tropical forests and childhood skin contact"
    },
    {
      id: "tryp-rhodesiense",
      disease: "T. b. rhodesiense African trypanosomiasis",
      region: "East Africa",
      group: "Africa",
      scope: "Subtype-defining clue",
      points: [[553, 260]],
      travelClue: "East African safari or tsetse-fly exposure followed by a rapidly progressive illness",
      anchor: "Rhodesiense runs rapidly in the east"
    },
    {
      id: "tryp-gambiense",
      disease: "T. b. gambiense African trypanosomiasis",
      region: "West Africa",
      group: "Africa",
      scope: "Subtype-defining clue",
      points: [[468, 248]],
      travelClue: "West African tsetse-fly exposure followed by a slowly progressive illness and late sleep-wake disturbance",
      anchor: "Gambiense goes gradually in the west"
    },
    {
      id: "chagas",
      disease: "Chagas disease",
      region: "Latin America",
      group: "Latin America",
      scope: "Strong regional clue",
      points: [[292, 278], [305, 330]],
      travelClue: "Significant time in Latin America with triatomine or kissing-bug exposure, Romaña sign, or later cardiomyopathy and megacolon",
      anchor: "American trypanosomiasis belongs to Latin America"
    },
    {
      id: "cysticercosis",
      disease: "Cysticercosis",
      region: "Latin America, Asia, and Africa",
      group: "Broad tropical distribution",
      scope: "Three-region clue",
      points: [[300, 282], [500, 260], [710, 235]],
      travelClue: "Travel or residence in an endemic area of Latin America, Asia, or Africa followed by adult-onset seizures or enhancing brain lesions",
      anchor: "Cysticercosis clusters across Latin America, Asia, and Africa"
    },
    {
      id: "onchocerciasis",
      disease: "Onchocerciasis",
      region: "Tropical river areas in sub-Saharan Africa, the Americas, and less commonly the Middle East",
      group: "Africa and tropical river regions",
      scope: "Exposure-specific regional clue",
      points: [[487, 260], [300, 270], [606, 210]],
      travelClue: "Repeated blackfly bites near tropical streams or rivers, especially in sub-Saharan Africa, followed by pruritic skin disease, nodules, or vision loss",
      anchor: "River blindness: blackflies + tropical running water"
    },
    {
      id: "malaria",
      disease: "Malaria",
      region: "Malaria-endemic travel regions; US cases occur mainly in travelers",
      group: "Broad tropical distribution",
      scope: "Travel-endemic clue",
      points: [[305, 270], [500, 268], [710, 250]],
      travelClue: "Travel to a malaria-endemic area with dusk-to-dawn Anopheles exposure followed by cyclic fever, chills, and sweating",
      anchor: "Travel history + dusk-to-dawn mosquito exposure"
    },
    {
      id: "ascaris",
      disease: "Ascaris lumbricoides infection",
      region: "Asia, Africa, and South America",
      group: "Broad tropical distribution",
      scope: "Sanitation-linked clue",
      points: [[710, 235], [500, 260], [302, 305]],
      travelClue: "Food or water exposure in a poor-sanitation area of Asia, Africa, or South America, especially during a rainy season",
      anchor: "Large roundworm: poor sanitation across Asia, Africa, and South America"
    },
    {
      id: "hookworm",
      disease: "Hookworm infection",
      region: "Tropical and subtropical regions with warm, moist, shaded soil",
      group: "Broad tropical distribution",
      scope: "Climate and soil clue",
      points: [[303, 280], [500, 270], [720, 250]],
      travelClue: "Bare-skin contact with warm, moist, shaded soil contaminated by human feces in a tropical or subtropical region",
      anchor: "Warm + wet + shade + bare feet"
    },
    {
      id: "shigellosis",
      disease: "Shigellosis",
      region: "Developing countries, with major pediatric burden in Asia and Africa",
      group: "Asia and Africa",
      scope: "Population-level clue",
      points: [[500, 255], [710, 232]],
      travelClue: "Fecal-oral exposure in a developing-country setting, particularly a child in Asia or Africa with inflammatory diarrhea",
      anchor: "Developing-country dysentery, especially pediatric disease in Asia and Africa"
    }
  ];
}());
