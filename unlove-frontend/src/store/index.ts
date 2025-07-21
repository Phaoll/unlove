import { configureStore } from "@reduxjs/toolkit";
import testSettingsSlice from "./slices/testSettingsSlice";
import unloveTestSlice from "./slices/unloveTestSlice";

export const store = configureStore({
  reducer: {
    testSettingsStore: testSettingsSlice,
    unloveTestStore: unloveTestSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
