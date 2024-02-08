import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SingleQuestion from "./SingleQuestion";
import { selectAnswer } from "./quizSlice";
import QuizResult from "./QuizResult";

const findFirstUnansweredQuestion = (listOfQuestions) => {
  const foundQuestion = listOfQuestions.find((question) => question.userAnswer === undefined)
  if (foundQuestion)
    return foundQuestion
  else
    return "quizFinished"
}

export function Quiz() {
  const quiz = useSelector((state) => state.quiz.value);
  const dispatch = useDispatch();
  const [currentQuestion, setCurrentQuestion] = useState(undefined)

  useEffect(() => {
    setCurrentQuestion(findFirstUnansweredQuestion(quiz))
  }, [quiz]);

  return (
    <>
      {currentQuestion && currentQuestion !== "quizFinished" ? <SingleQuestion
        question={currentQuestion}
        selectAnswer={(indexOfAnswer) => {
          dispatch(selectAnswer({ indexOfQuestion: currentQuestion.index, userAnswer: indexOfAnswer }))
        }} /> :
        <QuizResult quiz={quiz} />
      }
    </>
  );
}
