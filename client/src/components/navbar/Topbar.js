import { faLocationDot, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="Topbar">
      <div className="top-left">
        <small>Need help? Call us (+98) 0234 456 789</small>
      </div>
      <div className="top-right">
        <Link to="/" className="mr-2.5">
          <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
          Our store
        </Link>
        <Link to="/">
          <FontAwesomeIcon icon={faTruckFast} className="mr-2" />
          Track your order
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
