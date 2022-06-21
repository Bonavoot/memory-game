import React, { useEffect, useState } from "react";

const Card = (props) => {
  const [isClicked, setIsClicked] = useState({ clicked: false });

  const toggleClick = () => {};
  return (
    <div
      className="card"
      onClick={() => {
        setIsClicked({ clicked: true });
      }}
    >
      0
    </div>
  );
};

export default Card;
