import React from "react";
import profile from "../../assets/camera.png";
import "./ProfileComponent.css";

const ProfileComponent = () => {
  const storageAuth = JSON.parse(localStorage.getItem("auth"));
  return (
    <div className="ProfileComponent">
      <div className="userinfo">
        <div className="profileImgDiv">
          <img src={profile} alt="" />
        </div>
        <div className="user-details-div">
          <h1>Name: {storageAuth.name}</h1>
          <h1> Email Address : {storageAuth.email}</h1>
          <h1>Billing Address : 123 street sylhet,bangladesh</h1>
        </div>
      </div>
      <div className="recentOrder">
        <h1>No orders yet</h1>
      </div>
    </div>
  );
};

export default ProfileComponent;
