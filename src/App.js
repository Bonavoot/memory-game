import React, { useState, useEffect } from "react";
import "./App.css";
import Scoreboard from "./components/Scoreboard";
import uniqid from "uniqid";
import axios from "axios";
import InfoIcon from "./InfoIcon";

let showOrHide = { display: "block" };
let renderOnPlay = false;
let imgArr = [];
let checkWinner = [];

const App = (props) => {
  const [turns, setTurns] = useState(0);
  const [giphy, setGiphy] = useState([]);
  const [fetching, setFetching] = useState("false");
  const [hardMode, setHardMode] = useState(12);
  const [toggleHardMode, setToggleHardMode] = useState("CLASSIC");

  // Giphy API for random trending images
  useEffect(() => {
    const fetchData = async () => {
      const apiRoot = "https://api.giphy.com/v1/gifs/";
      const api_key = process.env.REACT_APP_GIPHY_KEY;
      const result = await axios(`${apiRoot}trending?api_key=${api_key}`);
      imgArr = [];
      for (let i = 0; i < hardMode; i++) {
        imgArr.push({ src: `${result.data.data[i].images.fixed_height.url}` });
      }
    };
    fetchData();
  }, [fetching, hardMode]);

  const handleHardModeClick = (e) => {
    if (toggleHardMode === "CLASSIC") {
      setToggleHardMode("EXTREME");
      setHardMode(24);
    } else if (toggleHardMode === "EXTREME") {
      setToggleHardMode("CLASSIC");
      setHardMode(12);
    }
    checkWinner = [];
    imgArr = [];
    renderOnPlay = false;
    setTurns(0);
    setFetching(!fetching);
    showOrHide = { display: "block" };
  };
  console.log(hardMode);

  const shuffleImgs = (e) => {
    showOrHide = { display: "none" };

    // Random sort with ID
    const shuffledImgs = [...imgArr]
      .sort(() => Math.random() - 0.5)
      .map((url) => ({ ...url, id: uniqid() }));

    // Game Logic
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

  return (
    <div className="parent-container">
      <div className="header">
        <div className="logo">MEMORY GAME</div>
        <div className="header-right">
          <button
            className={toggleHardMode + "-button"}
            onClick={handleHardModeClick}
          >
            {toggleHardMode}
          </button>
          <InfoIcon />
          <Scoreboard turns={turns} />
        </div>
      </div>
      <button className="new-game" onClick={shuffleImgs} style={showOrHide}>
        <span className="material-symbols-outlined">play_circle</span>
      </button>

      <div className={toggleHardMode}>
        {renderOnPlay &&
          giphy.map((img) => (
            <img
              className={`card-${toggleHardMode} ${img.src}`}
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
