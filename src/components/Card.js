import React from "react";
import "./style.css";

const Card = ({ card, handleChoice, isFlipped, disabled, choiceOne }) => {
  const handleClick = () => {
    if (!disabled && choiceOne?.id !== card.id) {
      console.log(card);
      handleChoice(card);
    }
  };
  return (
    <div className="card" onClick={handleClick}>
      <div className={isFlipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card-front" />
        <img className="back" src="/img/cover.png" alt="card-back" />
      </div>
    </div>
  );
};
export default Card;
