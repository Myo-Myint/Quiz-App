import { useRef } from "react";

export default function Answers( {answers, selectedAnswers, questionState, onSelect}) {

  const shuffledAnswers = useRef();


  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers]
    
    shuffledAnswers.current.sort(
      () => Math.random() - 0.5
    );
  }

    return (
        <ul id="answers">
        {shuffledAnswers.current.map((answer) => {
          const isSelected = selectedAnswers === answer;
          let cssclass = "";
          if (questionState === "answered" && isSelected) {
            cssclass = "selected";
          }

          if (
            (questionState === "correct" || questionState === "wrong") &&
            isSelected
          ) {
            cssclass = questionState;
          }

          return (
            <li key={answer} className="answer">
              <button
                onClick={() => onSelect(answer)}
                className={cssclass}
                disabled={questionState !== ""}
              >
                {answer}

              </button>
            </li>
          );
        })}
      </ul>
    )
}