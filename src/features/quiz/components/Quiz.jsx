import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SingleQuestion from "./SingleQuestion";
import { selectAnswer } from "../quizSlice";
import QuizResult from "./QuizResult";
import { findFirstUnansweredQuestion } from "../../../utils/quiz.functions"
import { cleanUserAnswers } from "../quizSlice";

export function Quiz() {
  const quiz = useSelector((state) => state.quiz.value);
  const dispatch = useDispatch();
  const [currentQuestion, setCurrentQuestion] = useState(undefined);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  useEffect(() => {
    const nextQuestion = findFirstUnansweredQuestion(quiz);
    if (nextQuestion === "quizFinished") setIsQuizFinished(true);
    else setCurrentQuestion(nextQuestion);
  }, [quiz]);

  const handleSelectAnswer = (indexOfAnswer) => {
    dispatch(selectAnswer({ indexOfQuestion: currentQuestion.index, userAnswer: indexOfAnswer }));
  };

  const handleResetQuiz = () => {
    setIsQuizFinished(false);
    dispatch(cleanUserAnswers())
  }

  return (
    <>
      {!isQuizFinished && currentQuestion && (
        <SingleQuestion
          question={currentQuestion}
          selectAnswer={handleSelectAnswer}
        />
      )}
      {isQuizFinished && <QuizResult quiz={quiz} handleResetQuiz={handleResetQuiz} />}
    </>
  );
}
