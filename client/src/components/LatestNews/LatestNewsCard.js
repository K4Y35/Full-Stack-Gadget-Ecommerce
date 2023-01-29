import React from "react";
import Blog1 from "../../assets/Blog-1.png";
import "./LatestNewsCard.css";

const LatestNewsCard = () => {
  return (
    <div className="LatestNewsCard">
      <div className="LatestNewsCard-img-div">
        <img src={Blog1} alt="" />
      </div>
      <div className="LatestNewsCard-desc-div">
        <h6 className="btn-secondary mb-2 flex items-center	justify-center">
          22,oct,2021
        </h6>
        <h3 className="text-primary  mb-1 text-xl font-bold">
          Who avoids a <br /> pain that produces?
        </h3>
        <p className="text-primary  mb-1 font-medium">
          Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus
          bibendum ullamcorper. Phasellus tristique aenean at lorem sed
          scelerisque.
        </p>
        <p className="text-primary font-medium">By spacing tech</p>
      </div>
    </div>
  );
};

export default LatestNewsCard;
