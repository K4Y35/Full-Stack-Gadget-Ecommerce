import React from "react";
import camera from "../../assets/camera2.png";
import "./TopFeaturedCarousel.css";

const TopFeaturedCard = () => {
  return (
    <div className="TopFeaturedCarousel">
      <div className="hero-left">
        <div>
          <div className="t-div mb-8 flex items-start">
            <h1 className="text-primary text-5xl font-bold">
              Canon <br /> camera
            </h1>
          </div>
          <div>
            <button className="btn-primary mr-4">Shop now</button>
            <button className="btn-secondary">View more</button>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-img-div">
          <img src={camera} alt="..." className="hero-car-img" />
          <div className="Featured-PriceTag">
            <h1>
              Only <br /> $89
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFeaturedCard;
