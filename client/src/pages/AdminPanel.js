import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Dashboard from "./../components/Admin/Dashboard";
import MainNav from "./../components/navbar/MainNav";
import MenuNav from "./../components/navbar/MenuNav";
import { SetAuth } from "./../redux/action/auth";

const AdminPanel = () => {
  const auth = useSelector((state) => state.authState);
  const dispatch = useDispatch();

  useEffect(() => {
    const data = localStorage.getItem("auth");

    console.log(data);
    console.log("data");
    if (data) {
      dispatch(SetAuth({ data }));
    }
  }, []);

  return (
    <>
      <MainNav />
      <MenuNav />
      <Dashboard />
    </>
  );
};

export default AdminPanel;
