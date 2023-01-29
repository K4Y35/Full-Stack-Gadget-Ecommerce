import React from "react";
import { Link } from "react-router-dom";

const AdminMenu = () => {
  return (
    <div className="AdminSidebar">
      <Link to="/profile/admin/category">Create Category</Link>
      <Link to="/profile/admin/product">Create product</Link>
      <Link to="/profile/admin/products">products</Link>
    </div>
  );
};

export default AdminMenu;
