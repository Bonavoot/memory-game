import React, { useEffect, useState } from "react";
import Scoreboard from "./Scoreboard";

const Card = (props) => {
  const [isClicked, setIsClicked] = useState(0);

  return (
    <div>
      <div
        className="card"
        onClick={() => {
          setIsClicked(isClicked + 1);
          console.log(isClicked);
        }}
      >
        IMAGE
      </div>
    </div>
  );
};

export default Card;
