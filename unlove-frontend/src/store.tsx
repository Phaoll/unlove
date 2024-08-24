import { configureStore } from '@reduxjs/toolkit';
import answersReducer from './slices/answer.slice';

const store = configureStore({
  reducer: {
    answers: answersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
