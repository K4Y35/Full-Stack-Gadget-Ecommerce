import React from "react";
import { useSelector } from "react-redux";
import AdminMenu from "./AdminMenu";
import "./Dashboard.css";

const Dashboard = () => {
  const auth = useSelector((state) => state.authState);
  return (
    <div className="dashboard">
      <AdminMenu />
      <div className="dashboard-content">
        <h1>{JSON.parse(auth)?.name}</h1>
        <h1>{JSON.parse(auth)?.email}</h1>
      </div>
    </div>
  );
};

export default Dashboard;
