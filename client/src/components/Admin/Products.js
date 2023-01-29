import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdminMenu from "./AdminMenu";
import "./Dashboard.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const auth = useSelector((state) => state.authState);
  const token = JSON.parse(auth)?.token;

  const loadProducts = async () => {
    const { data } = await axios.get("http://localhost:5000/products");
    setProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);
  return (
    <div className="dashboard">
      <AdminMenu />
      <div className="dashboard-content">
        <h1>Product information</h1>
        {products.map((pd) => (
          <Link to={`/profile/admin/product/update/${pd.slug}`}>
            <div className="flex border">
              <div className="w-40">
                <img
                  src={`http://localhost:5000/product/photo/${pd._id}`}
                  alt={pd.name}
                />
              </div>
              <div className="w-60">
                <h1>{pd.name}</h1>
                <h1>{pd.description}</h1>
                <h1>{pd.createdAt}</h1>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
