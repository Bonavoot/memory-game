import React, { useState } from "react";
import Card from "./Card";
import "./MemoryGame.css";
import Scoreboard from "./Scoreboard";
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

const MemoryGame = (props) => {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...colorArr]
      .sort(() => Math.random() - 0.5)
      // .map gives each card object in array an id
      .map((card) => ({ ...card, id: uniqid() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  console.log(cards, turns);
  return (
    <div className="container">
      <button onClick={shuffleCards}>New Game</button>
      {cards.map((card) => (
        <div className={"card " + card.src} key={card.id}></div>
      ))}
      <Scoreboard />
    </div>
  );
};

export default MemoryGame;
