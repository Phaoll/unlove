import { z } from "zod";

export const appSettingsStateSchema = z.object({
  isTestGuideDeployed: z.boolean(),
});

export type AppSettingsState = z.infer<typeof appSettingsStateSchema>;
