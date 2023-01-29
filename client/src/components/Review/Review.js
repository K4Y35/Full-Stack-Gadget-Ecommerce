import React from "react";
import howa from "../../assets/howa.png";
import howard from "../../assets/howard.png";
import nguyen from "../../assets/nguyen.png";
import "./Review.css";

const Review = () => {
  return (
    <div className="Review">
      <div className="Review-card-outer mr-5">
        <div className="Review-card-inner-top">
          <div className="Review-card-inner-img-div">
            <img src={nguyen} alt="" />
          </div>
          <h2 className="text-primary ml-5 text-xl font-bold">
            Savannah Nguyen
          </h2>
        </div>
        <div className="card-text-div mt-5">
          <h1>
            Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus
            bibendum ullamcorper. Phasellus tristique aenean at lorem sed
            scelerisque.
          </h1>
        </div>
      </div>

      <div className="Review-card-outer mr-5">
        <div className="Review-card-inner-top">
          <div className="Review-card-inner-img-div">
            <img src={howa} alt="" />
          </div>
          <h2 className="text-primary ml-5 text-xl font-bold">Esther Howard</h2>
        </div>
        <div className="card-text-div mt-5">
          <h1>
            Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus
            bibendum ullamcorper. Phasellus tristique aenean at lorem sed
            scelerisque.
          </h1>
        </div>
      </div>

      <div className="Review-card-outer">
        <div className="Review-card-inner-top">
          <div className="Review-card-inner-img-div">
            <img src={howard} alt="" />
          </div>
          <h2 className="text-primary ml-5 text-xl font-bold">Esther Howard</h2>
        </div>
        <div className="card-text-div mt-5">
          <h1>
            Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus
            bibendum ullamcorper. Phasellus tristique aenean at lorem sed
            scelerisque.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Review;
