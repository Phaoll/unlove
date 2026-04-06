import { z } from "zod";

export const questionCategorySchema = z.enum([
  "family",
  "work",
  "loyalty",
  "future",
  "current",
  "values",
]);

export const questionFormatSchema = z.enum(["radio", "inputSlider", "slider"]);

export const wordingSchema = z
  .object({
    EN: z.string(),
    FR: z.string().optional(),
  })
  .catchall(z.string().optional());

export const baseQuestionSchema = z.object({
  id: z.string(),
  category: questionCategorySchema,
  format: questionFormatSchema,
  advice: wordingSchema,
  coefficient: z.number(),
});

export const inputSliderQuestionSchema = baseQuestionSchema.extend({
  format: z.literal("inputSlider"),
  mainWording: wordingSchema,
  sliderWording: wordingSchema,
  inputWording: wordingSchema,
  min: z.number(),
  max: z.number(),
  defaultSlider1: z.number(),
  defaultSlider2: z.number(),
  defaultSlider3: z.number(),
  defaultSlider4: z.number(),
  allowOverlap: z.boolean().optional(),
});

export const radioQuestionSchema = baseQuestionSchema.extend({
  format: z.literal("radio"),
  wording: wordingSchema,
});

export const sliderQuestionSchema = baseQuestionSchema.extend({
  format: z.literal("slider"),
  min: z.number(),
  max: z.number(),
  step: z.number().optional(),
});

export const questionSchema = z.discriminatedUnion("format", [
  inputSliderQuestionSchema,
  radioQuestionSchema,
  sliderQuestionSchema,
]);

export type QuestionCategory = z.infer<typeof questionCategorySchema>;
export type QuestionFormat = z.infer<typeof questionFormatSchema>;
export type Wording = z.infer<typeof wordingSchema>;
export type BaseQuestion = z.infer<typeof baseQuestionSchema>;
export type InputSliderQuestion = z.infer<typeof inputSliderQuestionSchema>;
export type RadioQuestion = z.infer<typeof radioQuestionSchema>;
export type SliderQuestion = z.infer<typeof sliderQuestionSchema>;
export type Question = z.infer<typeof questionSchema>;
