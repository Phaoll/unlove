import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";

type testTypeType = "quick" | "complete" | null;

interface testSettingsState {
  testType: testTypeType;
  numberOfPartner: number | null;
}

// const getStoredTheme = (): AppThemeName => {
//   try {
//     const stored = localStorage.getItem("appTheme");
//     return (stored as AppThemeName) || "helloworld_light";
//   } catch {
//     // In case localStorage is not available (SSR, etc.)
//     return "helloworld_light";
//   }
// };

const initialState: testSettingsState = {
  testType: null,
  numberOfPartner: null,
};

export const testSettingsSlice = createSlice({
  name: "testSettingsStore",
  initialState,
  reducers: {
    setTestType: (state, action: PayloadAction<testTypeType>) => {
      state.testType = action.payload;
    },
    setNumberOfPartner: (state, action: PayloadAction<number | null>) => {
      state.numberOfPartner = action.payload;
    },
  },
});

export const { setTestType, setNumberOfPartner } = testSettingsSlice.actions;
export default testSettingsSlice.reducer;

export const selectTestType = (state: RootState) =>
  state.testSettingsStore.testType;
export const selectNumberOfPartner = (state: RootState) =>
  state.testSettingsStore.numberOfPartner;
