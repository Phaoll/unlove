export type QuestionCategoryType =
  | "family"
  | "work"
  | "loyalty"
  | "future"
  | "current"
  | "values";

export type QuestionFormatType = "radio" | "inputSlider" | "slider";

type WordingType = {
  EN: string;
  FR?: string;
  [key: string]: string | undefined;
};

export type BaseQuestion = {
  id: string;
  category: QuestionCategoryType;
  format: QuestionFormatType;
  advice: WordingType;
  coefficient: number;
};

export type InputSliderQuestion = BaseQuestion & {
  format: "inputSlider";
  mainWording: WordingType;
  sliderWording: WordingType;
  inputWording: WordingType;
  min: number;
  max: number;
  defaultSlider1: number;
  defaultSlider2: number;
  defaultSlider3: number;
  defaultSlider4: number;
  allowOverlap?: boolean;
};

export type RadioQuestion = BaseQuestion & {
  format: "radio";
  wording: WordingType;
};

export type SliderQuestion = BaseQuestion & {
  format: "slider";
  min: number;
  max: number;
  step?: number;
};

// Union of all variants
export type QuestionType = InputSliderQuestion | RadioQuestion | SliderQuestion;
