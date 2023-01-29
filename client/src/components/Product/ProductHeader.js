import React from "react";
import "./ProductHeader.css";

const ProductHeader = () => {
  return (
    <div className="ProductHeader">
      <div className="ProductHeader-left">
        <h1 className="text-primary text-3xl font-bold">Popular products</h1>
      </div>
      <div className="ProductHeader-right">
        <button className="btn-secondary mr-4">Cameras</button>
        <button className="btn-secondary mr-4">Laptops</button>
        <button className="btn-secondary mr-4">Tablets</button>
        <button className="btn-secondary">Mouse</button>
      </div>
    </div>
  );
};

export default ProductHeader;
