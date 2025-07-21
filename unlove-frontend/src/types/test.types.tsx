export type TestTypeType = "quick" | "complete" | null;

export type testSettingsState = {
  testType: TestTypeType;
  numberOfPartner: number | null;
};
