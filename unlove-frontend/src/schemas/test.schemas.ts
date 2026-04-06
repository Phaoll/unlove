import { z } from "zod";

export const testTypeSchema = z.enum(["quick", "complete"]).nullable();

export const testSettingsStateSchema = z.object({
  testType: testTypeSchema,
  numberOfPartner: z.number().nullable(),
});

export type TestType = z.infer<typeof testTypeSchema>;
export type TestSettingsState = z.infer<typeof testSettingsStateSchema>;
