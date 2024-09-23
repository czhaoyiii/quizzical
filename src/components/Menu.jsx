import { useState } from "react";

export default function Menu(props) {
  function startGame() {
    props.setGameStart((prevState) => !prevState);
  }

  function chooseOptions(e) {
    const { name, value } = e.target;
    props.setGameOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  }

  return (
    <div className="menu">
      <h1 className="title">Quizzical</h1>
      <h2 className="description">
        Answer the questions and test your knowledge
      </h2>
      {!props.questionFound && (
        <h2 className="noQuestion">
          Oops! We couldn't find any questions with these options!
        </h2>
      )}
      <div className="menuOptionsContainer">
        <div className="menuOptions">
          <label htmlFor="category">Category:</label>
          <select
            onChange={chooseOptions}
            name="category"
            value={props.gameOptions.category}
          >
            <option value="">Any Category</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            <option value="13">Entertainment: Musicals &amp; Theatres</option>
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science & Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Entertainment: Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">Entertainment: Japanese Anime & Manga</option>
            <option value="32">Entertainment: Cartoon & Animations</option>
          </select>
        </div>
        <div className="menuOptions">
          <label htmlFor="difficulty">Difficulty:</label>
          <select
            onChange={chooseOptions}
            name="difficulty"
            value={props.gameOptions.difficulty}
          >
            <option value="">Any Difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div className="menuOptions">
          <label htmlFor="type">Type of questions:</label>
          <select
            onChange={chooseOptions}
            name="type"
            value={props.gameOptions.type}
          >
            <option value="">Any Type</option>
            <option value="multiple">Multiple Choice</option>
            <option value="boolean">True / False</option>
          </select>
        </div>
      </div>
      <button
        onClick={startGame}
        className="mainBtn"
        style={{ marginTop: "1rem" }}
      >
        Start Quiz
      </button>
    </div>
  );
}
