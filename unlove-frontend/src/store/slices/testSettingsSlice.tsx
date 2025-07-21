import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { testSettingsState, TestTypeType } from "@/types/test.types";

const initialState: testSettingsState = {
  testType: null,
  numberOfPartner: null,
};

export const testSettingsSlice = createSlice({
  name: "testSettingsStore",
  initialState,
  reducers: {
    setTestType: (state, action: PayloadAction<TestTypeType>) => {
      state.testType = action.payload;
    },
    setNumberOfPartner: (state, action: PayloadAction<number | null>) => {
      state.numberOfPartner = action.payload;
    },
    resetTestSettings: () => initialState,
  },
});

export const { setTestType, setNumberOfPartner, resetTestSettings } =
  testSettingsSlice.actions;
export default testSettingsSlice.reducer;

export const selectTestType = (state: RootState) =>
  state.testSettingsStore.testType;
export const selectNumberOfPartner = (state: RootState) =>
  state.testSettingsStore.numberOfPartner;
