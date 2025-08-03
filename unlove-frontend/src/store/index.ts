import { configureStore } from "@reduxjs/toolkit";
import testSettingsSlice from "./slices/testSettingsSlice";
import unloveTestSlice from "./slices/unloveTestSlice";
import appSettingsSlice from "./slices/appSettingsSlice";

export const store = configureStore({
  reducer: {
    testSettingsStore: testSettingsSlice,
    appSettingsStore: appSettingsSlice,
    unloveTestStore: unloveTestSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
