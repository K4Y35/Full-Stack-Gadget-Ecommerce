import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./MenuNav.css";

const MenuNav = () => {
  const navigate = useNavigate();

  const handelChange = (e) => {
    navigate("/product");
  };

  return (
    <div className="MenuNav">
      <div className="MenuNav-left">
        <select className="drop-down-browse-catagories mr-20">
          <option>Browse Catagories</option>
          <option>Tablet</option>
          <option>Laptop</option>
          <option>Headphones</option>
          <option>Console</option>
          <option>Other</option>
        </select>

        <select
          className="drop-down-simple-btn mr-8"
          onChange={(e) => handelChange(e.target.value)}
        >
          <option>Home</option>
          <option>Tablet</option>
          <option>Laptop</option>
          <option>Headphones</option>
          <option>Console</option>
          <option>Other</option>
          <option>All categories</option>
        </select>

        <Link to="/" className="drop-down-simple-btn mr-8">
          Blog
        </Link>

        <select className="drop-down-simple-btn mr-8">
          <option>Pages</option>
          <option>Tablet</option>
          <option>Laptop</option>
          <option>Headphones</option>
          <option>Console</option>
          <option>Other</option>
        </select>

        <Link to="/" className="drop-down-simple-btn">
          About us
        </Link>
      </div>
      <div className="MenuNav-Right">
        <Link to="/" className="text-primary font-bold">
          30 Days Free Return
        </Link>
      </div>
    </div>
  );
};

export default MenuNav;
