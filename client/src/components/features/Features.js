import React from "react";
import boxtick from "../../assets/box-tick.png";
import crown from "../../assets/crown.png";
import shield from "../../assets/shield-security.png";
import "./Features.css";
const Features = () => {
  return (
    <div className="Features">
      <div className="feature-card-main-div">
        <div className="">
          <img src={boxtick} alt="" />
        </div>
        <div className="ml-5">
          <h3 className="text-primary mb-2 text-2xl font-semibold">
            Free delivery
          </h3>
          <h6 className="text-primary font-semibold">on order above $5000</h6>
        </div>
      </div>

      <div className="feature-card-main-div">
        <div className="">
          <img src={crown} alt="" />
        </div>
        <div className="ml-5">
          <h3 className="text-primary mb-2 text-2xl font-semibold">
            Best quality
          </h3>
          <h6 className="text-primary font-semibold">
            best quality in low price
          </h6>
        </div>
      </div>

      <div className="feature-card-main-div">
        <div className="">
          <img src={shield} alt="" />
        </div>
        <div className="ml-5">
          <h3 className="text-primary mb-2 text-2xl font-semibold">
            1 year warranty
          </h3>
          <h6 className="text-primary font-semibold">Available warranty</h6>
        </div>
      </div>
    </div>
  );
};

export default Features;
