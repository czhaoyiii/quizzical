import { decode } from "html-entities";
import { nanoid } from "nanoid";
import correct from "../assets/correct.svg";
import wrong from "../assets/wrong.svg";

export default function Question(props) {
  const answerElements = props.incorrectAnswers.map((incorrectAnswer) => {
    const incorrectButtonClass = `answerButton ${
      props.showAns && props.selected === incorrectAnswer && "wrongAnswer"
    } ${
      props.selected === incorrectAnswer ? "buttonSelected" : "buttonUnselect"
    }`;
    return (
      <button
        key={nanoid()}
        className={incorrectButtonClass}
        onClick={() => props.handleClick(incorrectAnswer, props.id)}
      >
        {decode(incorrectAnswer)}
      </button>
    );
  });

  const correctButtonClass = `answerButton ${
    props.selected === props.correctAnswer ? "buttonSelected" : "buttonUnselect"
  } ${props.showAns && "correctAnswer"}`;
  answerElements.push(
    <button
      key={nanoid()}
      className={correctButtonClass}
      onClick={() => props.handleClick(props.correctAnswer, props.id)}
    >
      {decode(props.correctAnswer)}
    </button>
  );

  answerElements.sort((a, b) =>
    a.props.children.localeCompare(b.props.children)
  );

  return (
    <div className="questionContainer">
      <div>
        <h3 className="question">{decode(props.question)}</h3>
        {answerElements}
      </div>
      {props.showAns &&
        (props.selected === props.correctAnswer ? (
          <img src={correct} alt="" className="icons" />
        ) : (
          <img src={wrong} alt="" className="icons" />
        ))}
    </div>
  );
}
