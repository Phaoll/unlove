import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import questions from '../const/questions';

// State
interface AnswerState {
  person1Answers: Map<string, number>;
  person2Answers: Map<string, number>;
}

// Initial state
const initializeAnswers = () => {
  return new Map(questions.map((question) => [question.id, 0]));
};

const initialState: AnswerState = {
  person1Answers: initializeAnswers(),
  person2Answers: initializeAnswers(),
};

enum Respondent {
  Person1 = 1,
  Person2 = 2,
}

export interface SetAnswerPayload {
  respondent: Respondent;
  id: string;
  answer: number;
}

const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    setAnswer: (state, action: PayloadAction<SetAnswerPayload>) => {
      const { respondent, id, answer } = action.payload;
      if (respondent === Respondent.Person1) {
        state.person1Answers.set(id, answer);
      } else if (respondent === Respondent.Person2) {
        state.person2Answers.set(id, answer);
      } else {
        throw new Error(`Invalid respondent value: ${respondent}`);
      }
    },
  },
});

// Selectors
export const selectPerson1Answer = (
  state: { answers: AnswerState },
  questionId: string
): number => {
  return state.answers.person1Answers.get(questionId) || 0;
};

export const selectPerson2Answer = (
  state: { answers: AnswerState },
  questionId: string
): number => {
  return state.answers.person2Answers.get(questionId) || 0;
};

export const { setAnswer } = answersSlice.actions;
export default answersSlice.reducer;
