import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "./CardSection.css";
import ProductCard from "./ProductCard";

const CardSection = () => {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const { data } = await axios.get("http://localhost:5000/products");
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const settings = {
    className: "center",
    // centerMode: true,
    dots: true,
    slidesToShow: 4,
    speed: 500,
    rows: 2,
    slidesPerRow: 1,
  };
  return (
    <div className="CardSection">
      <Slider {...settings}>
        {products.map((pd) => (
          <div>
            <ProductCard
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

export default CardSection;
