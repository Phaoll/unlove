export type QuestionType = {
  id: string;
  wording: WordingType;
  category: "family" | "work" | "loyalty" | "future" | "current" | "values";
  type: "input" | "radio" | "slider";
};

type WordingType = {
  EN: string;
  FR?: string;
  [key: string]: string | undefined;
};
