import { createSlice } from "@reduxjs/toolkit";
import { reactTest } from "./questionBank";
import { questionsBankList2quizTest } from "./adapter.quiz";

export const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    value: questionsBankList2quizTest(reactTest),
  },
  reducers: {
    selectAnswer: (state, action) => {
      const { indexOfQuestion, userAnswer } = action.payload;
      state.value[indexOfQuestion].userAnswer = userAnswer;
    },
  },
});

export const { selectAnswer } = quizSlice.actions;

export default quizSlice.reducer;
