import { configureStore } from "@reduxjs/toolkit";
import testSettingsSlice from "./slices/testSettingsSlice";

export const store = configureStore({
  reducer: {
    testSettingsStore: testSettingsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
