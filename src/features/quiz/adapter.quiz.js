export const adaptQuestionListForQuiz = (questionList) => {
  return questionList.map((question, index) => ({
    ...question,
    userAnswer: undefined,
    index: index,
  }));
};
