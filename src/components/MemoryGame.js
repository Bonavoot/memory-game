import React from "react";
import Card from "./Card";
import "./MemoryGame.css";
import Scoreboard from "./Scoreboard";

const MemoryGame = (props) => {
  return (
    <div>
      <div className="container">
        {[...Array(12)].map((elementInArray, index) => (
          <div className="card" key={index}>
            <Card />
          </div>
        ))}
      </div>
      <Scoreboard />
    </div>
  );
};

export default MemoryGame;
