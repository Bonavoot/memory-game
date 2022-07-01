import React, { useState, useEffect } from "react";
import "./App.css";
import Scoreboard from "./components/Scoreboard";
import uniqid from "uniqid";
import axios from "axios";

let showOrHide = { display: "block" };
let renderOnPlay = false;
let imgArr = [];
let checkWinner = [];

const App = (props) => {
  const [turns, setTurns] = useState(0);
  const [giphy, setGiphy] = useState([]);
  const [fetching, setFetching] = useState("false");

  useEffect(() => {
    const fetchData = async () => {
      const apiRoot = "https://api.giphy.com/v1/gifs/";
      const api_key = process.env.REACT_APP_GIPHY_KEY;
      const result = await axios(`${apiRoot}trending?api_key=${api_key}`);
      imgArr = [];
      for (let i = 0; i < 12; i++) {
        imgArr.push({ src: `${result.data.data[i].images.fixed_height.url}` });
      }
    };
    fetchData();
  }, [fetching]);

  const shuffleImgs = (e) => {
    showOrHide = { display: "none" };

    const shuffledImgs = [...imgArr]
      .sort(() => Math.random() - 0.5)
      // .map gives each card object in array an id
      .map((url) => ({ ...url, id: uniqid() }));
    console.log(e.target.className);

    if (checkWinner.includes(e.target.className)) {
      checkWinner = [];
      imgArr = [];
      renderOnPlay = false;
      setTurns(0);
      setFetching(!fetching);
      showOrHide = { display: "block" };
    } else if (e.target.className !== "material-symbols-outlined") {
      checkWinner.push(e.target.className);
      setGiphy(shuffledImgs);
      setTurns(turns + 1);
    } else if (e.target.className) {
      setGiphy(shuffledImgs);
      renderOnPlay = true;
    }
  };

  // const shuffleCards = (e) => {
  //   showOrHide = { display: "none" };

  //   const shuffledCards = [...colorArr]
  //     .sort(() => Math.random() - 0.5)
  //     // .map gives each card object in array an id
  //     .map((card) => ({ ...card, id: uniqid() }));
  // };

  return (
    <div className="parent-container">
      <div className="header">
        <div className="logo">MEMORY GAME</div>
        <Scoreboard turns={turns} />
      </div>
      <button className="new-game" onClick={shuffleImgs} style={showOrHide}>
        <span className="material-symbols-outlined">play_circle</span>
      </button>
      <div className="info">
        <h2>How to Play</h2>
        <ul>
          <li>Click each image once</li>
          <li>Pressing the same image twice resets the score</li>
          <li>Win by scoring 12 points</li>
        </ul>
        <p>Good luck!</p>
      </div>
      <div className="container">
        {renderOnPlay &&
          giphy.map((img) => (
            <img
              className={`card ${img.src}`}
              src={img.src}
              alt="randomGiphyImg"
              key={uniqid()}
              onClick={shuffleImgs}
            ></img>
          ))}
      </div>
    </div>
  );
};

export default App;
