import React, { useEffect, useState } from "react";
import Scoreboard from "./Scoreboard";
import uniqid from "uniqid";
const Card = (props) => {
  // const [index, setIndex] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);

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

  return (
    <>
      {[...Array(12)].map((elem) => (
        <div className={"card "} key={uniqid()}></div>
      ))}
    </>
  );
};

export default Card;
