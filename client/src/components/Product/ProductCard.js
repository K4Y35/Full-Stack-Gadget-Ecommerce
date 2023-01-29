import { faCartPlus, faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "./../../redux/action/cart";
import "./ProductCard.css";

const ProductCard = ({ name, description, price, imgID, slug }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();

    navigate(`/details/${slug}`);
    window.scrollTo(0, 100);
  };
  const handleAddToCart = async (e) => {
    e.preventDefault();
    const { data } = await axios.get(`http://localhost:5000/products/${slug}`);
    dispatch(addToCart(data));
  };

  return (
    <div className="ProductCard">
      <div className="ProductCard-img" onClick={handleClick}>
        <img src={`http://localhost:5000/product/photo/${imgID}`} alt={name} />
      </div>
      <div className="ProductCard-desc">
        <h4 className="ProductCard-title text-primary text-3xl font-semibold">
          {name}
        </h4>
        <h4 className="ProductCard-price text-2xl font-semibold">
          {price?.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </h4>
        <h4 className="ProductCard-rating text-2xl font-semibold">*****</h4>
      </div>
      <div className="ProductCard-desc-on-hover">
        <button className="addToCart-desc-btn" onClick={handleAddToCart}>
          Add to cart
          <FontAwesomeIcon icon={faCartPlus} className="cart-icon" />
        </button>
        <button>
          <FontAwesomeIcon icon={faHeart} className="heart-icon" />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
