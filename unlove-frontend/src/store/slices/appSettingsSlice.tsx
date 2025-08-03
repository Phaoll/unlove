import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { localStorageGetter } from "@/utils/utils";
import { IS_TEST_GUIDE_DEPLOYED_LOCAL_STORAGE_KEY } from "@/constants/config";
import { appSettingsState } from "@/types/app.types";

const initialState: appSettingsState = {
  isTestGuideDeployed:
    localStorageGetter({
      key: IS_TEST_GUIDE_DEPLOYED_LOCAL_STORAGE_KEY,
      defaultValue: "true",
    }) === "true"
      ? true
      : false,
};

export const appSettingsSlice = createSlice({
  name: "appSettingsStore",
  initialState,
  reducers: {
    setIsTestGuideDeployed: (state, action: PayloadAction<boolean>) => {
      const isTestGuideDeployed = action.payload;
      state.isTestGuideDeployed = isTestGuideDeployed;
      localStorage.setItem(
        IS_TEST_GUIDE_DEPLOYED_LOCAL_STORAGE_KEY,
        isTestGuideDeployed ? "true" : "false",
      );
    },
    resetTestSettings: () => initialState,
  },
});

export const { setIsTestGuideDeployed, resetTestSettings } =
  appSettingsSlice.actions;
export default appSettingsSlice.reducer;

export const selectIsTestGuideDeployed = (state: RootState) =>
  state.appSettingsStore.isTestGuideDeployed;
