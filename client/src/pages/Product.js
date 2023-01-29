import { Checkbox } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./../components/Footer/Footer";
import NavBar from "./../components/navbar/NavBar";
import ProductCard from "./../components/Product/ProductCard";
import SaleBanner from "./../components/SaleBanner/SaleBanner";
import "./Product.css";

const Product = () => {
  const [checked, setChecked] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  //Default Product loading
  const loadProducts = async () => {
    const { data } = await axios.get("http://localhost:5000/products");
    setProducts(data);
  };

  useEffect(() => {
    if (!checked.length) loadProducts();
  }, [checked]);

  useEffect(() => {
    if (checked.length) loadFilteredProducts();
  }, [checked]);
  //loading categoris checkboxes

  const loadCatgories = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/categories");
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadCatgories();
  }, []);

  const handleCheck = (value, id) => {
    console.log(value, id);

    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }

    setChecked(all);
  };

  //loading filtered products

  const loadFilteredProducts = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/filtered-products",
        {
          checked,
        }
      );

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />
      <div className="Main-Product-page-div">
        <div className="product-filter-div">
          <h1>Filter by category</h1>
          {categories.map((c) => (
            <Checkbox
              key={c._id}
              onChange={(e) => handleCheck(e.target.checked, c._id)}
            >
              {c.name}
            </Checkbox>
          ))}
        </div>
        <div className="show-product-div">
          {products.map((pd) => (
            <ProductCard
              key={pd._key}
              name={pd.name}
              description={pd.description}
              price={pd.price}
              slug={pd.slug}
              imgID={pd._id}
              id={pd._id}
            />
          ))}
        </div>
      </div>
      <SaleBanner />
      <Footer />
    </>
  );
};

export default Product;
