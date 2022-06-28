import React, { useState } from "react";
import "./App.css";
import Scoreboard from "./components/Scoreboard";
import uniqid from "uniqid";

const colorArr = [
  { src: "orange" },
  { src: "yellow-orange" },
  { src: "yellow" },
  { src: "yellow-green" },
  { src: "green" },
  { src: "blue-green" },
  { src: "blue" },
  { src: "blue-violet" },
  { src: "violet" },
  { src: "red-violet" },
  { src: "red" },
  { src: "red-orange" },
];

let checkWinner = [];
let showOrHide = { display: "block" };

const App = (props) => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = (e) => {
    showOrHide = { display: "none" };
    console.log(e.target.className);
    const shuffledCards = [...colorArr]
      .sort(() => Math.random() - 0.5)
      // .map gives each card object in array an id
      .map((card) => ({ ...card, id: uniqid() }));

    if (checkWinner.includes(e.target.className)) {
      checkWinner = [];
      setTurns(0);
      setCards([]);
      showOrHide = { display: "block" };
    } else if (turns === 12) {
      setTurns(0);
      setCards([]);
      showOrHide = { display: "block" };
    } else if (e.target.className !== "new-game") {
      checkWinner.push(e.target.className);
      setCards(shuffledCards);
      setTurns(turns + 1);
    } else {
      setCards(shuffledCards);
    }
  };

  console.log(cards, turns);
  return (
    <>
      <div className="header">
        <div className="logo">MEMORY GAME</div>
        <Scoreboard turns={turns} />
      </div>
      <button className="new-game" onClick={shuffleCards} style={showOrHide}>
        <span class="material-symbols-outlined">play_circle</span>
      </button>
      <div className="container">
        {cards.map((card) => (
          <div
            className={"card " + card.src}
            key={card.id}
            onClick={shuffleCards}
          ></div>
        ))}
      </div>
    </>
  );
};

export default App;
