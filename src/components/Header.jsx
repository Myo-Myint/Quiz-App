import QuizAppLogo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header>
      <img src={QuizAppLogo} alt="" />
      <h1>Fun Quiz App</h1>
    </header>
  );
}
