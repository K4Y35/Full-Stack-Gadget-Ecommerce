import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import loading from "../../assets/loading.gif";

const Loading = () => {
  const [count, setCount] = useState(3);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    count === 0 && navigate("/login");

    return () => clearInterval(interval);
  }, [count]);
  return (
    <div className="flex items-center justify-center text-center text-3xl">
      <img src={loading} alt="" />
    </div>
  );
};

export default Loading;
