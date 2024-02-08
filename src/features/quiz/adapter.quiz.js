export const questionsBankList2quizTest = (questionList) => {
  return (adaptedQuestions = questionList.map((singleQuestion) => {
    return {
      question: singleQuestion.question,
      answers: singleQuestion.answers,
      indexOfCorrectAnswer: singleQuestion.indexOfCorrectAnswer,
      userAnswer: undefined,
    };
  }));
};
