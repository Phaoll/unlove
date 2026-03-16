import { QuestionFormatType } from "./questions.types";
import { TestTypeType } from "./test.types";

export type AnsweredQuestionsRecordType = Record<string, AnsweredQuestionType>;

type AnsweredQuestionBase = {
  id: string;
  format: QuestionFormatType;
};

type RadioAnswerType = {
  answerInput: number;
};

type InputSliderAnswersType = {
  answerInput: number;
  answerSlider1: number;
  answerSlider2: number;
  answerSlider3: number;
  answerSlider4: number;
};

export type AnsweredRadioQuestionType = AnsweredQuestionBase & {
  format: "radio";
  partnerOne?: RadioAnswerType;
  partnerTwo?: RadioAnswerType;
};

export type AnsweredInputSliderQuestionType = AnsweredQuestionBase & {
  format: "inputSlider";
  partnerOne?: InputSliderAnswersType;
  partnerTwo?: InputSliderAnswersType;
};

export type AnswerType = RadioAnswerType | InputSliderAnswersType;

export type AnsweredQuestionType =
  | AnsweredRadioQuestionType
  | AnsweredInputSliderQuestionType;

export type unloveTestState = {
  currentTestType: TestTypeType;
  answeredQuestions: AnsweredQuestionsRecordType;
};
