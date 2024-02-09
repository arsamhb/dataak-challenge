import { createSlice } from "@reduxjs/toolkit";
import { reactTest } from "./questionBank";
import { adaptQuestionListForQuiz } from "./adapter.quiz";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    value: adaptQuestionListForQuiz(reactTest),
  },
  reducers: {
    selectAnswer: (state, action) => {
      const { indexOfQuestion, userAnswer } = action.payload;
      state.value[indexOfQuestion].userAnswer = userAnswer;
    },
    cleanUserAnswers: (state) => {
      state.value.forEach((question) => {
        question.userAnswer = undefined;
      });
    },
  },
});

export const { selectAnswer, cleanUserAnswers } = quizSlice.actions;

export default quizSlice.reducer;
