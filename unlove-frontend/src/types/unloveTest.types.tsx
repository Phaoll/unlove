import { TestTypeType } from "./test.types";

export type AnswersType = {
  partnerOne?: number;
  partnerTwo?: number;
};

export type AnsweredQuestionsRecordType = Record<string, AnswersType>;

export type AnsweredQuestionType = {
  id: string;
  partnerNumber: "partnerOne" | "partnerTwo";
  answer: number;
};

export type unloveTestState = {
  currentTestType: TestTypeType;
  answeredQuestions: AnsweredQuestionsRecordType;
};
