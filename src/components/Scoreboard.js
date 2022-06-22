import React, { useEffect, useState } from "react";

const Scoreboard = ({ isClicked }) => {
  const [currentScore, setCurrentScore] = useState(0);
  console.log(isClicked);

  useEffect(
    () => {
      if (isClicked === 2) {
        setCurrentScore(0);
      } else {
        setCurrentScore(() => {
          return currentScore + 1;
        });
      }
    },
    [isClicked],
    [currentScore]
  );

  const getBestScore = (currentScore) => {
    let bestScore = 0;
    if (currentScore >= bestScore) {
      bestScore = currentScore;
    }
    return bestScore;
  };

  return (
    <div>
      <div className="score">Score: {currentScore}</div>
      <div className="score best">Best: {getBestScore(currentScore)}</div>
    </div>
  );
};

export default Scoreboard;
