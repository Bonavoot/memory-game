import React from "react";
import Card from "./Card";
import "./MemoryGame.css";
import Scoreboard from "./Scoreboard";

const MemoryGame = (props) => {
  return (
    <div className="container">
      <Card />
      <Scoreboard />
    </div>
  );
};

export default MemoryGame;
