import React, { useState } from "react";

const Scoreboard = (props) => {
  const [currentScore, setCurrentScore] = useState(0);

  const getBestScore = (currentScore) => {
    let bestScore = 0;
    if (currentScore >= bestScore) {
      bestScore = currentScore;
    }
    return bestScore;
  };

  return (
    <div>
      <div className="score">Score: {}</div>
      <div className="score best">Best: {getBestScore(currentScore)}</div>
    </div>
  );
};

export default Scoreboard;
