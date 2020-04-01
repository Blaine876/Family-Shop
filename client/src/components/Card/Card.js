import React from "react";

import "./Card.css";

const Card = ({ cardDate, cardTitle, cardItems, cardQuanties }) => {
  return (
    <div className="card-container">
      <h2>List for: {cardDate}</h2>
      <h3>Items</h3>
      <h4>{cardItems}</h4>
      <h3>Quantity</h3>
      <h4>{cardQuanties}</h4>
    </div>
  );
};

export default Card;
