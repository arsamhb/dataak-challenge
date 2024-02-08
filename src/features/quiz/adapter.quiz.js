export const questionsBankList2quizTest = (questionList) => {
  const adaptedQuestions = questionList.map((singleQuestion, index) => {
    return {
      question: singleQuestion.question,
      answers: singleQuestion.answers,
      indexOfCorrectAnswer: singleQuestion.indexOfCorrectAnswer,
      userAnswer: undefined,
      id: index,
    };
  });
  return adaptedQuestions;
};
