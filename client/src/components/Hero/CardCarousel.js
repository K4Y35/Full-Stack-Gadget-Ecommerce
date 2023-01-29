import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./CardCarousel.css";
import HorizontalCard from "./HorizontalCard";

const CardCarousel = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const { data } = await axios.get("http://localhost:5000/products");
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
        }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };
  const settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="CardCarousel">
      <Slider {...settings}>
        {products.map((pd) => (
          <div>
            <HorizontalCard
              name={pd.name}
              description={pd.description}
              price={pd.price}
              imgID={pd._id}
              slug={pd.slug}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardCarousel;
