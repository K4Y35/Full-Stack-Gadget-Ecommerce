import React from "react";
import banner from "../../assets/banner.png";
import "./SaleBanner.css";
const SaleBanner = () => {
  return (
    <div className="SaleBanner">
      <img src={banner} alt="" />
      <div className="sale-desc">
        <button className="btn-primary mb-5">New laptop</button>
        <h1 className="sale-color mb-5 text-3xl font-bold">
          Sale up to 50% off
        </h1>
        <h5 className="sale-product-desc mb-5">12 inch hd display</h5>
        <button className="btn-primary">Shop now</button>
      </div>
    </div>
  );
};

export default SaleBanner;
