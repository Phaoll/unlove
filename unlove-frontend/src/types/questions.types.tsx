export type QuestionTypeCategory =
  | "family"
  | "work"
  | "loyalty"
  | "future"
  | "current"
  | "values";

export type QuestionType = {
  id: string;
  wording: WordingType;
  category: QuestionTypeCategory;
  type: "input" | "radio" | "slider";
};

type WordingType = {
  EN: string;
  FR?: string;
  [key: string]: string | undefined;
};
