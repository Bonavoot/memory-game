import React from "react";
let bestScore = 0;

const Scoreboard = (props) => {
  const getBestScore = () => {
    if (props.turns >= bestScore) {
      bestScore = props.turns;
    }
    return bestScore;
  };

  return (
    <div className="scoreboard">
      <div className="score">Score: {props.turns}</div>
      <div className="score best">Best: {getBestScore(props.turn)}</div>
    </div>
  );
};

export default Scoreboard;
