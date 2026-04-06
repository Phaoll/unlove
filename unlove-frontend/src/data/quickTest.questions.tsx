import { QuestionType } from "@/types/questions.types";

const quickTestQuestion: QuestionType[] = [
  {
    id: "1.1",
    format: "inputSlider",
    category: "family",
    advice: {
      FR: "",
      EN: "Your age gap is significant, take time to discuss the repercussion it may have on your life project.",
    },
    coefficient: 1,
    mainWording: {
      FR: "Différence d'âge",
      EN: "Age gap",
    },
    sliderWording: {
      FR: "Quel âge devrait avoir votre partenaire ?",
      EN: "What would the preferred age of your partner?",
    },
    inputWording: {
      FR: "Quel âge avez vous ?",
      EN: "How old are you?",
    },
    min: 13,
    max: 80,
    defaultSlider1: 18,
    defaultSlider2: 20,
    defaultSlider3: 25,
    defaultSlider4: 30,
    allowOverlap: false,
  },
  {
    id: "1.2",
    format: "inputSlider",
    category: "family",
    advice: {
      FR: "",
      EN: "Your age gap is significant, take time to discuss the repercussion it may have on your life project.",
    },
    coefficient: 1,
    mainWording: {
      FR: "Enfants",
      EN: "About kids",
    },
    sliderWording: {
      FR: "Combien d'enfant veut votre partenaire ?",
      EN: "How many kids does your partner want?",
    },
    inputWording: {
      FR: "Combien en voulez vous ?",
      EN: "How many do you want?",
    },
    min: 0,
    max: 10,
    defaultSlider1: 1,
    defaultSlider2: 2,
    defaultSlider3: 3,
    defaultSlider4: 4,
    allowOverlap: true,
  },
  {
    id: "1",
    wording: {
      FR: "J'aurai des enfants avec mon ou ma partenaire.",
      EN: "I want to have children with my partner.",
    },
    category: "family",
    format: "radio",
    advice: {
      FR: "",
      EN: "Your age gap is significant, take time to discuss the repercussion it may have on your life project.",
    },
    coefficient: 1,
  },
  // {
  //   id: "2",
  //   wording: {
  //     FR: "Je me marierait avec mon ou ma partenaire.",
  //     EN: "I will marry my partner.",
  //   },
  //   coefficient: 1,
  //   category: "family",
  //   format: "radio",
  //   advice: {
  //     FR: "",
  //     EN: "Your age gap is significant, take time to discuss the repercussion it may have on your life project.",
  //   },
  //   coefficient: 1,
  // },
  {
    id: "3",
    wording: {
      FR: "Mon ou ma partenaire peut annuler un rendez-vous pour des raisons professionnels.",
      EN: "My partner can cancel a date for professional reasons.",
    },
    category: "work",
    format: "radio",
    advice: {
      FR: "",
      EN: "Your age gap is significant, take time to discuss the repercussion it may have on your life project.",
    },
    coefficient: 1,
  },
  {
    id: "4",
    wording: {
      FR: "Mon ou ma partenaire ne peut embrasser d'autres personnes sur les lèvres.",
      EN: "My partner can't French kiss another than me.",
    },
    category: "loyalty",
    format: "radio",
    advice: {
      FR: "",
      EN: "Your age gap is significant, take time to discuss the repercussion it may have on your life project.",
    },
    coefficient: 1,
  },
  // {
  //   id: "5",
  //   wording: {
  //     FR: "Nous soutiendrons nos enfants s'ils sont LGBT.",
  //     EN: "We will support our children if they are LGBT.",
  //   },
  //   coefficient: 1,
  //   category: "family",
  //   format: "radio",
  //   advice: {
  //     FR: "",
  //     EN: "Your age gap is significant, take time to discuss the repercussion it may have on your life project.",
  //   },
  //   coefficient: 1,
  // },
  // {
  //   id: "6",
  //   wording: {
  //     FR: "Mon ou ma partenaire peut avoir des rapports sexuels avec une autre personne que moi.",
  //     EN: "My partner can have sexual intercourse with another one than me.",
  //   },
  //   coefficient: 1,
  //   category: "loyalty",
  //   format: "radio",
  //   advice: {
  //     FR: "",
  //     EN: "Your age gap is significant, take time to discuss the repercussion it may have on your life project.",
  //   },
  //   coefficient: 1,
  // },
  // {
  //   id: "7",
  //   wording: {
  //     FR: "Mon ou ma partenaire reste en contact avec d'anciens partenaire sexuels.",
  //     EN: "My partner stay in touch with former sexual partners.",
  //   },
  //   coefficient: 1,
  //   category: "loyalty",
  //   format: "radio",
  //   advice: {
  //     FR: "",
  //     EN: "Your age gap is significant, take time to discuss the repercussion it may have on your life project.",
  //   },
  //   coefficient: 1,
  // },
  // {
  //   id: "8",
  //   wording: {
  //     FR: "Je peux librement accéder au téléphone et réseaux de mon ou ma partenaire.",
  //     EN: "I can freely access the social networks and phone of my partner.",
  //   },
  //   coefficient: 1,
  //   category: "loyalty",
  //   format: "radio",
  //   advice: {
  //     FR: "",
  //     EN: "Your age gap is significant, take time to discuss the repercussion it may have on your life project.",
  //   },
  //   coefficient: 1,
  // },
  {
    id: "9",
    wording: {
      FR: "Notre futur se situe dans une ville ou dans un milieu urbain.",
      EN: "Our future is in a city or urban area.",
    },
    category: "future",
    format: "radio",
    advice: {
      FR: "",
      EN: "Your age gap is significant, take time to discuss the repercussion it may have on your life project.",
    },
    coefficient: 1,
  },
  // {
  //   id: "10",
  //   wording: {
  //     FR: "Mon ou ma partenaire pratique des activités sportives extrêmes (MMA, chute libre, etc.).",
  //     EN: "My partner practice extreme sports (MMA, sky diving, etc.).",
  //   },
  //   coefficient: 1,
  //   category: "future",
  //   format: "radio",
  //   advice: {
  //     FR: "",
  //     EN: "Your age gap is significant, take time to discuss the repercussion it may have on your life project.",
  //   },
  //   coefficient: 1,
  // },
  // {
  //   id: "11",
  //   wording: {
  //     FR: "Mon ou ma partenaire peut travailler durant les weekends.",
  //     EN: "My partner can work during weekends.",
  //   },
  //   coefficient: 1,
  //   category: "work",
  //   format: "radio",
  //   advice: {
  //     FR: "",
  //     EN: "Your age gap is significant, take time to discuss the repercussion it may have on your life project.",
  //   },
  //   coefficient: 1,
  // },
  // {
  //   id: "12",
  //   wording: {
  //     FR: "Nous pouvons nous expatrier pour des raisons professionnelles.",
  //     EN: "We can move abroad for professional reasons.",
  //   },
  //   coefficient: 1,
  //   category: "work",
  //   format: "radio",
  //   advice: {
  //     FR: "",
  //     EN: "Your age gap is significant, take time to discuss the repercussion it may have on your life project.",
  //   },
  //   coefficient: 1,
  // },
  // {
  //   id: "13",
  //   wording: {
  //     FR: "Mon ou ma partenaire est fumeur de tabac.",
  //     EN: "My partner smoke tobaco.",
  //   },
  //   coefficient: 1,
  //   category: "current",
  //   format: "radio",
  //   advice: {
  //     FR: "",
  //     EN: "Your age gap is significant, take time to discuss the repercussion it may have on your life project.",
  //   },
  //   coefficient: 1,
  // },
  {
    id: "14",
    wording: {
      FR: "Mon ou ma partenaire consomme occasionnellement des drogues.",
      EN: "My partner do drugs occasionnaly.",
    },
    category: "current",
    format: "radio",
    advice: {
      FR: "",
      EN: "Your age gap is significant, take time to discuss the repercussion it may have on your life project.",
    },
    coefficient: 1,
  },
  // {
  //   id: "15",
  //   wording: {
  //     FR: "Mon ou ma partenaire est et/ou accepte des fétichismes.",
  //     EN: "My partner have and/or accept kinks.",
  //   },
  //   coefficient: 1,
  //   category: "current",
  //   format: "radio",
  //   advice: {
  //     FR: "",
  //     EN: "Your age gap is significant, take time to discuss the repercussion it may have on your life project.",
  //   },
  //   coefficient: 1,
  // },
  // {
  //   id: "16",
  //   wording: {
  //     FR: "Mon ou ma partenaire est engagé et actif politiquement.",
  //     EN: "My partner is a political activist.",
  //   },
  //   coefficient: 1,
  //   category: "current",
  //   format: "radio",
  //   advice: {
  //     FR: "",
  //     EN: "Your age gap is significant, take time to discuss the repercussion it may have on your life project.",
  //   },
  //   coefficient: 1,
  // },
  // {
  //   id: "17",
  //   wording: {
  //     FR: "Mon ou ma partenaire ne pratique pas d'activité physique régulière.",
  //     EN: "My partner doesn't practice any fitness activity.",
  //   },
  //   coefficient: 1,
  //   category: "current",
  //   format: "radio",
  //   advice: {
  //     FR: "",
  //     EN: "Your age gap is significant, take time to discuss the repercussion it may have on your life project.",
  //   },
  //   coefficient: 1,
  // },
  // {
  //   id: "18",
  //   wording: {
  //     FR: "Mon ou ma partenaire est pratiquant d'une religion.",
  //     EN: "My partner is pratice a religion.",
  //   },
  //   coefficient: 1,
  //   category: "current",
  //   format: "radio",
  //   advice: {
  //     FR: "",
  //     EN: "Your age gap is significant, take time to discuss the repercussion it may have on your life project.",
  //   },
  //   coefficient: 1,
  // },
  // {
  //   id: "19",
  //   wording: {
  //     FR: "Mon ou ma partenaire est vegan.",
  //     EN: "My partner is vegan.",
  //   },
  //   coefficient: 1,
  //   category: "current",
  //   format: "radio",
  //   advice: {
  //     FR: "",
  //     EN: "Your age gap is significant, take time to discuss the repercussion it may have on your life project.",
  //   },
  //   coefficient: 1,
  // },
  {
    id: "20",
    wording: {
      FR: "Mon ou ma partenaire peut n'avoir aucune conscience écologique.",
      EN: "My partner can have no real environmental awareness.",
    },
    category: "values",
    format: "radio",
    advice: {
      FR: "",
      EN: "Your age gap is significant, take time to discuss the repercussion it may have on your life project.",
    },
    coefficient: 1,
  },
  // {
  //   id: "21",
  //   wording: {
  //     FR: "Mon ou ma partenaire n'a aucune réelle discipline financière.",
  //     EN: "My partner have no real financial discipline.",
  //   },
  //   coefficient: 1,
  //   category: "values",
  //   format: "radio",
  //   advice: {
  //     FR: "",
  //     EN: "Your age gap is significant, take time to discuss the repercussion it may have on your life project.",
  //   },
  //   coefficient: 1,
  //   coefficient: 1,
  // },
];

export default quickTestQuestion;
