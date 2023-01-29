import React from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/404/PageNotFound";
import CategoryCRUD from "./components/Admin/CategoryCRUD";
import ProductCRUD from "./components/Admin/ProductCRUD";
import Products from "./components/Admin/Products";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import PaymnetSuccess from "./components/PaymentComponents/PaymnetSuccess";
import Register from "./components/Register/Register";
import PrivateRoute from "./components/routes/PrivateRoute";
import SearchResultPage from "./components/Search/SearchResultPage";
import AdminPanel from "./pages/AdminPanel";
import Cart from "./pages/Cart";
import Details from "./pages/Details";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import "./theme.css";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/search" element={<SearchResultPage />} />
        <Route path="/details/:slug" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/ssl-payment-success" element={<PaymnetSuccess />} />

        <Route path="/profile" element={<PrivateRoute />}>
          <Route path="user" element={<Profile />} />
          <Route path="admin" element={<AdminPanel />} />
          <Route path="admin/category" element={<CategoryCRUD />} />
          <Route path="admin/product" element={<ProductCRUD />} />
          <Route path="admin/products" element={<Products />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
