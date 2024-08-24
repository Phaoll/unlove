import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AnswerState {
  person1Answers: number[];
  person2Answers: number[];
}

const initialState: AnswerState = {
  person1Answers: [],
  person2Answers: [],
};

const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    initializeAnswers: (state, action: PayloadAction<number>) => {
      state.person1Answers = Array(action.payload).fill(0);
      state.person2Answers = Array(action.payload).fill(0);
    },
    updateAnswer: (state, action: PayloadAction<{ person: 'person1' | 'person2'; index: number; value: number }>) => {
      const { person, index, value } = action.payload;
      if (person === 'person1') {
        state.person1Answers[index] = value;
      } else {
        state.person2Answers[index] = value;
      }
    },
  },
});

export const { initializeAnswers, updateAnswer } = answersSlice.actions;
export default answersSlice.reducer;