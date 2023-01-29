import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { SetAuth } from "./../../redux/action/auth";
import MainNav from "./MainNav";
import MenuNav from "./MenuNav";
import Topbar from "./Topbar";

const NavBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const data = localStorage.getItem("auth");

    if (data) {
      dispatch(SetAuth({ data }));
    }
  }, []);
  return (
    <>
      <Topbar />
      <MainNav />
      <MenuNav />
    </>
  );
};

export default NavBar;
