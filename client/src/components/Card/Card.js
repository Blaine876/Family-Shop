import React from "react";

import "./Card.css";

const Card = ({ cardDate, cardTitle, cardItems, cardQuanties, itemId }) => {
  return (
    <div className="card-container">
      <h2>List for: {cardDate}</h2>
      <div className="card-box">
        <div className="items-box">
          <h3>Items</h3>
          <ul>{cardItems}</ul>
        </div>

        <div className="quantity-box">
          <h3>Quantity</h3>
          <h4>{cardQuanties}</h4>
        </div>
      </div>
    </div>
  );
};

export default Card;
