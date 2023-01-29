import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { RemoveAuth } from "../../redux/action/auth";
import { SetSearchResult } from "./../../redux/action/searchResult";
import "./MainNav.css";

const MainNav = () => {
  const searchResultState = useSelector((state) => state.SearchState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState("");
  const [result, setResults] = useState([]);

  const storageAuth = JSON.parse(localStorage.getItem("auth"));

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(
        `http://localhost:5000/products/search/${keyword}`
      );

      dispatch(SetSearchResult({ data }));

      navigate("/search");
    } catch (error) {}
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");

    dispatch(RemoveAuth());
    navigate("/");
  };
  const DropMenu = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  };

  const GotoHomePage = () => {
    navigate("/");
  };
  return (
    <div className="MainNav">
      <div className="MainNav-left">
        <div>
          <img src={logo} alt=".." onClick={GotoHomePage} />
        </div>
        <div className="ml-10">
          <input
            type="text"
            placeholder="Search any things"
            className="search-input p-5"
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button className="btn-primary btnNav" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
      <div className="MainNav-right">
        <Link to="/favourite" className="mr-8">
          <FontAwesomeIcon icon={faHeart} className="mr-2" />
          Sign in
        </Link>
        <Link to="/cart" className="mr-8">
          <FontAwesomeIcon icon={faHeart} className="mr-2" />
          Cart
        </Link>
        {localStorage.getItem("auth") ? (
          <div className="dropdown">
            <div id="drop" className="dropbtn" onClick={DropMenu}>
              {storageAuth.name}
            </div>
            <div id="myDropdown" className="dropdown-content">
              <Link
                to={`/profile/${
                  storageAuth.role === "user" ? "user" : "admin"
                }`}
                className="ml-4 font-bold"
              >
                Profile
              </Link>
              <hr className="solid" />
              <Link className="ml-4 font-bold" onClick={handleLogout}>
                Logout
              </Link>
            </div>
          </div>
        ) : (
          <Link to="/login">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default MainNav;
