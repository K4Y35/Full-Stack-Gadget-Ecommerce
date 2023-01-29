import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { SetAuth } from "./../../redux/action/auth";
import Loading from "./Loading";

const PrivateRoute = () => {
  const auth = useSelector((state) => state.authState);
  const token = JSON.parse(auth)?.token;

  //local state
  const [ok, setOk] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const data = localStorage.getItem("auth");

    if (data) {
      dispatch(SetAuth({ data }));
    }
  }, []);

  useEffect(() => {
    const authCheck = async () => {
      const { data } = await axios.get("http://localhost:5000/auth-check", {
        headers: { Authorization: token },
      });
      if (data.ok) {
        setOk(true);
      } else {
        setOk(false);
      }
    };
    authCheck();
  }, [token]);

  return ok ? <Outlet /> : <Loading />;
};

export default PrivateRoute;
