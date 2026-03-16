import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import {
  AnsweredQuestionsRecordType,
  AnsweredQuestionType,
  unloveTestState,
} from "@/types/answers.types";
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
        quickTestQuestion.map((question) => {
          switch (question.format) {
            case "radio":
              state.answeredQuestions[question.id] = {
                id: question.id,
                format: "radio",
                partnerOne: undefined,
                partnerTwo: undefined,
              };
              break;
            case "inputSlider":
              state.answeredQuestions[question.id] = {
                id: question.id,
                format: "inputSlider",
                partnerOne: undefined,
                partnerTwo: undefined,
              };
          }
        });
      }
    },
    setAnswer: (state, action: PayloadAction<AnsweredQuestionType>) => {
      const answer = action.payload;
      state.answeredQuestions[answer.id] = answer;
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
): AnsweredQuestionType => state.unloveTestStore.answeredQuestions[questionId];
