import { useEffect, useState } from "react";
import GetQuestion from "./GetQuestion.jsx";
import Question from "./Question.jsx";
import { nanoid } from "nanoid";

export default function QuestionList(props) {
  const [questionArray, setQuestionArray] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);
  const [checkBtn, setCheckBtn] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const allQuestionsAnswered = questionArray.every(
    (question) => question.selected !== ""
  );

  useEffect(() => {
    GetQuestion(props.gameOptions).then((questions) => {
      if (questions.length === 0) {
        props.setGameStart(false);
        props.setQuestionFound(false);
        return;
      } else {
        setQuestionArray(
          questions.map((question) => ({
            ...question,
            id: nanoid(),
            selected: "",
          }))
        );
        props.setQuestionFound(true);
      }
    });
  }, []);

  useEffect(() => {
    if (questionArray.length !== 0 && allQuestionsAnswered) {
      setCheckBtn(true);
    }
  }, [questionArray]);

  function handleClick(answer, id) {
    setQuestionArray((prevQuestionArray) =>
      prevQuestionArray.map((question) =>
        question.id === id ? { ...question, selected: answer } : question
      )
    );
  }

  function resetGame() {
    props.setGameStart(false);
  }

  function checkAnswer() {
    setShowAnswer((showState) => !showState);
    questionArray.map((question) => {
      if (question.correct_answer === question.selected) {
        setCorrectCount((prevCount) => prevCount + 1);
      }
    });
  }

  const questionElements = questionArray.map((question) => (
    <Question
      key={question.id}
      question={question.question}
      incorrectAnswers={question.incorrect_answers}
      correctAnswer={question.correct_answer}
      id={question.id}
      selected={question.selected}
      handleClick={handleClick}
      showAns={showAnswer}
    />
  ));

  return (
    <div className="gameContainer">
      <h1 className="title">Quizzical</h1>
      <div className="questionListContainer">{questionElements}</div>
      <div className="buttonContainer">
        {showAnswer ? (
          <div className="replayContainer">
            <h3>You scored {correctCount}/5 correct answers</h3>
            <button className="mainBtn" onClick={resetGame}>
              Play again
            </button>
          </div>
        ) : (
          <button
            className={`${checkBtn ? "" : "btnDisable"} mainBtn`}
            onClick={checkAnswer}
            disabled={!checkBtn}
          >
            Check Answer
          </button>
        )}
      </div>
    </div>
  );
}
