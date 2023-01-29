import React from "react";
import Slider from "react-slick";
import "./LatestNews.css";
import LatestNewsCard from "./LatestNewsCard";

const LatestNews = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <div className="LatestNews">
      <div className="LatestNews-header">
        <h3 className="text-primary text-2xl font-bold">Latest news</h3>
        <h6 className="text-primary text-xl">View all</h6>
      </div>
      <div className="LatestNews-card-div">
        <Slider {...settings}>
          <div>
            <LatestNewsCard />
          </div>
          <div>
            <LatestNewsCard />
          </div>
          <div>
            <LatestNewsCard />
          </div>
          <div>
            <LatestNewsCard />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default LatestNews;
