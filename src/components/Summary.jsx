import QuizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions.js";

export default function Summary({ userAnswers }) {


    const skippedAnswers = userAnswers.filter((answer) => answer === null).length;
    const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]).length;

    const skippedAnswerPerc = Math.round((skippedAnswers / userAnswers.length) * 100);
    const correctAnswerPerc = Math.round((correctAnswers / userAnswers.length) * 100);
    const wrongAnswerPerc = 100 - (skippedAnswerPerc + correctAnswerPerc)


    const clickHandler = () => {
        window.location.reload();
    }
    const cssstyle = {
        margin: 'auto',
        display: 'block',
        padding: '10px 20px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }

  return (
    <div id="summary">
      <img src={QuizCompleteImg} alt="" />
      <h2>Quiz Complete!</h2>

      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswerPerc}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswerPerc}%</span>
          <span className="text">Correct Answers</span>
        </p>
        <p>
          <span className="number">{wrongAnswerPerc}%</span>
          <span className="text">Wrong Answers</span>
        </p>
      </div>

      <button style={cssstyle} onClick={clickHandler}>
        Restart
      </button>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={index}>
              <h3> {index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer === null ? "skipped" : answer}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
