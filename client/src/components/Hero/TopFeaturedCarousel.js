import React from "react";
import Slider from "react-slick";
import TopFeaturedCard from "./TopFeaturedCard";
import "./TopFeaturedCarousel.css";

const TopFeaturedCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div className="TopFeatured-Main-div">
      <Slider {...settings}>
        <div>
          <TopFeaturedCard />
        </div>
        <div>
          <TopFeaturedCard />
        </div>
        <div>
          <TopFeaturedCard />
        </div>
      </Slider>
    </div>
  );
};

export default TopFeaturedCarousel;
