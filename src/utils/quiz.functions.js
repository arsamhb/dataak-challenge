export const findFirstUnansweredQuestion = (listOfQuestions) => {
  const foundQuestion = listOfQuestions.find(
    (question) => question.userAnswer === undefined
  );
  if (foundQuestion) return foundQuestion;
  else return "quizFinished";
};
