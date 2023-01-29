import React from "react";
import "./HorizontalCard.css";

const HorizontalCard = ({ name, imgID, slug }) => {
  return (
    <div className="HorizontalCard">
      <div className="HorizontalCard-left">
        <img src={`http://localhost:5000/product/photo/${imgID}`} alt="..." />
      </div>
      <div className="HorizontalCard-right">
        <h1>{name}</h1>
        <h3>(6 items)</h3>
      </div>
    </div>
  );
};

export default HorizontalCard;
