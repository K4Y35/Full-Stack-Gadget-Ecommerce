import React from "react";
import "./CustomerReview.css";

const CustomerReview = () => {
  return (
    <div className="CustomerReview">
      <h1 className="text-primary mb-2 text-xl font-bold">Customer reviews</h1>
      <h1 className="mb-2">No reviews yet</h1>
      <button className="bgPrimary review-btn">Write a review</button>
    </div>
  );
};

export default CustomerReview;
