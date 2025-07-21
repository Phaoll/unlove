import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import {
  AnsweredQuestionsRecordType,
  AnsweredQuestionType,
  AnswersType,
  unloveTestState,
} from "@/types/unloveTest.types";
import { TestTypeType } from "@/types/test.types";
import quickTestQuestion from "@/data/quickTest.questions";

const unloveTestInitialState: unloveTestState = {
  currentTestType: null,
  answeredQuestions: {},
};

export const unloveTestSlice = createSlice({
  name: "unloveTestStore",
  initialState: unloveTestInitialState,
  reducers: {
    initializeTest: (state, action: PayloadAction<TestTypeType>) => {
      const testType = action.payload;
      state.currentTestType = testType;
      if (testType === "quick") {
        quickTestQuestion.map(
          (question) =>
            (state.answeredQuestions[question.id] = {
              partnerOne: undefined,
              partnerTwo: undefined,
            }),
        );
      }
    },
    setAnswer: (state, action: PayloadAction<AnsweredQuestionType>) => {
      const answer = action.payload;
      state.answeredQuestions[answer.id][answer.partnerNumber] = answer.answer;
    },
    resetTest: (state) => {
      state.currentTestType = null;
      state.answeredQuestions = {};
    },
  },
});

export const { initializeTest, setAnswer, resetTest } = unloveTestSlice.actions;
export default unloveTestSlice.reducer;

// Typed selectors
export const selectTestType = (state: RootState): string | null =>
  state.unloveTestStore.currentTestType;
export const selectAnsweredQuestionsRecord = (
  state: RootState,
): AnsweredQuestionsRecordType => state.unloveTestStore.answeredQuestions;
export const selectAnsweredQuestion = (
  state: RootState,
  questionId: string,
): AnswersType => state.unloveTestStore.answeredQuestions[questionId];
