import { z } from "zod";
import { questionFormatSchema } from "./questions.schemas";
import { testTypeSchema } from "./test.schemas";

const answeredQuestionBaseSchema = z.object({
  id: z.string(),
  format: questionFormatSchema,
});

const radioAnswerSchema = z.object({
  answerInput: z.number(),
});

const inputSliderAnswersSchema = z.object({
  answerInput: z.number(),
  answerSlider1: z.number(),
  answerSlider2: z.number(),
  answerSlider3: z.number(),
  answerSlider4: z.number(),
});

export const answeredRadioQuestionSchema = answeredQuestionBaseSchema.extend({
  format: z.literal("radio"),
  partnerOne: radioAnswerSchema.optional(),
  partnerTwo: radioAnswerSchema.optional(),
});

export const answeredInputSliderQuestionSchema =
  answeredQuestionBaseSchema.extend({
    format: z.literal("inputSlider"),
    partnerOne: inputSliderAnswersSchema.optional(),
    partnerTwo: inputSliderAnswersSchema.optional(),
  });

export const answerSchema = z.union([
  radioAnswerSchema,
  inputSliderAnswersSchema,
]);

export const answeredQuestionSchema = z.discriminatedUnion("format", [
  answeredRadioQuestionSchema,
  answeredInputSliderQuestionSchema,
]);

export const answeredQuestionsRecordSchema = z.record(
  z.string(),
  answeredQuestionSchema,
);

export const unloveTestStateSchema = z.object({
  currentTestType: testTypeSchema,
  answeredQuestions: answeredQuestionsRecordSchema,
});

export const mainProblemsSchema = z.object({
  idMainProblem1: z.string(),
  idMainProblem2: z.string(),
  idMainProblem3: z.string(),
});

export const resultsSchema = mainProblemsSchema.extend({
  score: z.number(),
});

export type RadioAnswer = z.infer<typeof radioAnswerSchema>;
export type InputSliderAnswers = z.infer<typeof inputSliderAnswersSchema>;
export type AnsweredRadioQuestion = z.infer<typeof answeredRadioQuestionSchema>;
export type AnsweredInputSliderQuestion = z.infer<
  typeof answeredInputSliderQuestionSchema
>;
export type Answer = z.infer<typeof answerSchema>;
export type AnsweredQuestion = z.infer<typeof answeredQuestionSchema>;
export type AnsweredQuestionsRecord = z.infer<
  typeof answeredQuestionsRecordSchema
>;
export type UnloveTestState = z.infer<typeof unloveTestStateSchema>;
export type MainProblems = z.infer<typeof mainProblemsSchema>;
export type Results = z.infer<typeof resultsSchema>;
