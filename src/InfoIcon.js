import React, { useState } from "react";

const InfoIcon = () => {
  const [showInfo, setShowInfo] = useState(false);

  const handleClickInfo = (e) => {
    e.preventDefault();
    if (showInfo === false) {
      setShowInfo(true);
    } else {
      setShowInfo(false);
    }
  };

  return (
    <div>
      <button className="info-toggle-button" onClick={handleClickInfo}>
        <svg
          className="info-icon"
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
        >
          <path d="M22.65 34h3V22h-3ZM24 18.3q.7 0 1.175-.45.475-.45.475-1.15t-.475-1.2Q24.7 15 24 15q-.7 0-1.175.5-.475.5-.475 1.2t.475 1.15q.475.45 1.175.45ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z" />
        </svg>
      </button>
      {showInfo && (
        <div className="info">
          <h2>How to Play</h2>
          <ul>
            <li>Click each image once</li>
            <li>Pressing the same image twice resets the score</li>
            <li>Win by scoring 12 points</li>
          </ul>
          <p>Good luck!</p>
        </div>
      )}
    </div>
  );
};

export default InfoIcon;