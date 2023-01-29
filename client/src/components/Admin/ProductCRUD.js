import { Select } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainNav from "./../navbar/MainNav";
import MenuNav from "./../navbar/MenuNav";
import AdminMenu from "./AdminMenu";
import "./Dashboard.css";

const ProductCRUD = () => {
  const navigate = useNavigate();
  const { Option } = Select;
  const onChange = (value) => {
    setCategory(value);
  };
  const onSearch = (value) => {
    console.log("search:", value);
  };
  const auth = useSelector((state) => state.authState);
  const token = JSON.parse(auth)?.token;

  const [categories, setCategories] = useState([]);
  const [photo, setPhoto] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [shipping, setShipping] = useState("");
  const [quantity, setQuantity] = useState("");

  useEffect(() => {
    loadCategories();
  }, []);

  const handleSubmit = async (e) => {
    console.log("clicked");
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("photo", photo);
      productData.append("name", name);
      productData.append("description", description);
      productData.append("category", category);
      productData.append("price", price);
      productData.append("quantity", quantity);

      const { data } = await axios.post(
        "http://localhost:5000/product",
        productData,
        {
          headers: { Authorization: token },
        }
      );
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success(`${data.name} is created`);
        // navigate("/admin/products");
      }
    } catch (error) {
      console.log(error);
      toast.error("Product creation failed");
    }
  };

  const loadCategories = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/categories");

      setCategories(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(categories);
  return (
    <>
      <MainNav />
      <MenuNav />
      <div className="dashboard">
        <AdminMenu />
        <div className="dashboard-content">
          <h1>Manage Product</h1>
          {photo ? (
            <div className="w-10 text-center">
              <img src={URL.createObjectURL(photo)} alt="productphoto" />
            </div>
          ) : (
            "No photo available"
          )}
          <div className=" p-5">
            {photo ? photo.name : "Upload Photo"}
            <label className="btn-primary mb-3 p-2">
              <input
                type="file"
                name="photo"
                accept="image/*"
                onChange={(e) => setPhoto(e.target.files[0])}
                hidden
              />
            </label>
          </div>

          <input
            type="text"
            className="mb-2 p-2"
            placeholder="Write a name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            type="text"
            className="mb-2 p-5"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="number"
            className="mb-2 p-2"
            placeholder="enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Select
            showSearch
            bordered={false}
            size="large"
            className="mb-3"
            placeholder="Choose category"
            onChange={(value) => setCategory(value)}
          >
            {categories.map((c) => (
              <Option key={c._id} value={c._id}>
                {c.name}
              </Option>
            ))}
          </Select>

          <Select
            showSearch
            bordered={false}
            size="large"
            className="mb-3"
            placeholder="Choose shipping"
            onChange={(value) => setShipping(value)}
          >
            <Option value="0">No</Option>
            <Option value="1">YES</Option>
          </Select>

          <input
            type="number"
            min="1"
            className="mb-2 p-2"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          <button className="btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCRUD;
