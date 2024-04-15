import QuizTimer from "./QuizTimer"
import Answers from "./Answers"
import QUESTIONS from "../questions.js"

import { useState } from "react"

export default function Question({ index, onSelect, onSkip }) {



    const [answer, setAnswer] = useState({
        selectedAnswer: "",
        isCorrect: null
    })

    let timer = 10000; 

    if (answer.selectedAnswer ){
        timer = 500
    }

    if (answer.isCorrect !== null){
        timer = 1000
    }

    const onSelectHandler = (answer) => {

        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: answer === QUESTIONS[index].answers[0]
            })

            setTimeout(() => {
                onSelect(answer)
            }, 1000 )
        }, 500)

    }

    let questionState = ""
    if (answer.selectedAnswer && answer.isCorrect !== null){
        questionState = answer.isCorrect ? "correct" : "wrong"
    }else if (answer.selectedAnswer){
        questionState = "answered"
    }

    return (
        <div id="question">
        <QuizTimer
        mode={questionState}
        key={timer}
          timer={timer}
          onTimerEnd={answer.selectedAnswer === "" ? onSkip : null}
        />
        <p> {QUESTIONS[index].text} </p>
        <Answers
          answers={QUESTIONS[index].answers}
          selectedAnswers={answer.selectedAnswer}
          questionState={questionState}
          onSelect={onSelectHandler}
        />
      </div>
    )
}