import { useState } from "react";
import topShape from "./assets/shape-1.png";
import bottomShape from "./assets/shape-2.png";
import Footer from "./components/Footer.jsx";
import Menu from "./components/Menu.jsx";
import QuestionList from "./components/QuestionList.jsx";

export default function App() {
  const [gameStart, setGameStart] = useState(false);
  const [questionFound, setQuestionFound] = useState(true);

  const [gameOptions, setGameOptions] = useState({
    category: "",
    difficulty: "",
    type: "",
  });

  const game = gameStart ? (
    <QuestionList
      setQuestionFound={setQuestionFound}
      setGameStart={setGameStart}
      gameOptions={gameOptions}
    />
  ) : (
    <Menu
      questionFound={questionFound}
      setGameStart={setGameStart}
      gameOptions={gameOptions}
      setGameOptions={setGameOptions}
    />
  );

  return (
    <main>
      <img src={topShape} alt="" className="bgTop" />
      <div className="app">{game}</div>
      <Footer />
      <img src={bottomShape} alt="" className="bgBottom" />
    </main>
  );
}
