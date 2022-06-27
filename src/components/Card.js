import React, { useEffect, useState } from "react";
import Scoreboard from "./Scoreboard";

const colorArr = [
  "orange",
  "yellow-orange",
  "yellow",
  "yellow-green",
  "green",
  "blue-green",
  "blue",
  "blue-violet",
  "violet",
  "red-violet",
  "red",
  "red-orange",
];

const Card = (props) => {
  const [count, setCount] = useState(0);

  return (
    <>
      {
        <div
          className={"card " + colorArr[props.index]}
          onClick={() => {
            setCount(count + 1);
            console.log(count);
          }}
        ></div>
      }
    </>
  );
};

export default Card;
