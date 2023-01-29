import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../Product/ProductCard";
import { addToCart } from "./../../redux/action/cart";
import "./ProductDetails.css";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { slug } = useParams();
  const [product, setProduct] = useState([]);
  const [category, setCategory] = useState([]);
  const [relatedProduct, setRelatedProduct] = useState([]);

  const loadProductDetails = async () => {
    const { data } = await axios.get(`http://localhost:5000/products/${slug}`);
    setProduct(data);

    setCategory(data.category);
  };

  const loadRelatedProduct = async () => {
    const { data } = await axios.post(
      "http://localhost:5000/related-products",
      { category }
    );

    setRelatedProduct(data);
  };

  useEffect(() => {
    loadProductDetails();
  }, [slug]);

  useEffect(() => {
    const timer = setTimeout(() => {
      loadRelatedProduct();
    }, 1000);
    return () => clearTimeout(timer);
  }, [category]);

  const handleAddCart = (e) => {
    e.preventDefault();

    dispatch(addToCart(product));
  };

  return (
    <div className="ProductDetails">
      <div className="ProductDetails-main">
        <div className="ProductDetails-top">
          <div className="left-image-main-div">
            <div className="details-main-img">
              <img
                src={`http://localhost:5000/product/photo/${product._id}`}
                alt=""
              />
            </div>
            <div className="other-img-alter-div">
              <div className="details-1">
                <img
                  src={`http://localhost:5000/product/photo/${product._id}`}
                  alt=""
                />
              </div>
              <div className="details-2">
                <img
                  src={`http://localhost:5000/product/photo/${product._id}`}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="right-details-main-div">
            <h1>{product.name}</h1>
            <h1>${product.price}</h1>
            <h1>Availbility : {product.quantity ? "In stock" : "Stock out"}</h1>
            <h1>Hurry up! only {product.quantity} product left in stock!</h1>

            <div className="divider mt-5 mb-5"></div>

            <div className="quantity-main">
              <label htmlFor="Quantity" className="font-bold">
                Quantity :
              </label>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  className="text-gray-600 h-10 w-10 leading-10 transition hover:opacity-75"
                >
                  &minus;
                </button>

                <input
                  type="number"
                  id="Quantity"
                  value="1"
                  className="border-gray-200 h-10 w-16 rounded text-center"
                />

                <button
                  type="button"
                  className="text-gray-600 h-10 w-10 leading-10 transition hover:opacity-75"
                >
                  &#43;
                </button>
              </div>
            </div>

            <div className="detail-btn mt-5">
              <button className="btn-primary w-60" onClick={handleAddCart}>
                Add to cart
              </button>
              <button className="btn-primary w-60">Buy it now</button>
              <button className="">
                <FontAwesomeIcon icon={faHeart} className="heart-icon" />
              </button>
            </div>

            <div className="divider mt-5 mb-5"></div>

            <h1>Category : Alex remote</h1>
          </div>
        </div>
        <div className="ProductDetails-bottom">
          <button className="btn-secondary mr-5">Description</button>
          <button className="btn-primary">Review</button>
        </div>
      </div>

      <div className="CustomerReview">
        <h1 className="text-primary mb-2 text-xl font-bold">
          Customer reviews
        </h1>
        <h1 className="mb-2">No reviews yet</h1>
        <button className="bgPrimary review-btn">Write a review</button>
      </div>
      <div className="RelatedProduct">
        <h1 className="text-primary mb-5 text-2xl font-bold">
          Related product {relatedProduct.length}
        </h1>
        <div className="related-card-div">
          {relatedProduct.map((pd) => (
            <ProductCard
              name={pd.name}
              price={pd.price}
              imgID={pd._id}
              slug={pd.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
