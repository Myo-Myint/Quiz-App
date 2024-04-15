import { useCallback, useState } from "react";

import Questions from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const questionIndex =
     userAnswers.length ;
  const isQuizComplete = questionIndex === Questions.length;

  const selectAnswerHandler = useCallback(
    (answer) => {

      setUserAnswers((prevAnswers) => {
        return [...prevAnswers, answer];
      });

      
    },
    []
  );

  const skipQuestionHandler = useCallback(
    () => selectAnswerHandler(null),
    [selectAnswerHandler]
  );

  if (isQuizComplete) {
    return (
        <Summary userAnswers={userAnswers} />
    );
  }

  return (
    <div id="quiz">
        <Question 
            key={questionIndex}
            index = {questionIndex}
            onSelect = {selectAnswerHandler}
            onSkip = {skipQuestionHandler}
        />
    </div>
  );
}
