import React from "react";
import CartComponent from "./../components/CartComponent/CartComponent";
import Footer from "./../components/Footer/Footer";
import NavBar from "./../components/navbar/NavBar";

const Cart = () => {
  return (
    <>
      <NavBar />
      <CartComponent />
      <Footer />
    </>
  );
};

export default Cart;
