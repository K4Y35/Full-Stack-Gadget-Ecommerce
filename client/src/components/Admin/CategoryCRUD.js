import { Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import MainNav from "./../navbar/MainNav";
import MenuNav from "./../navbar/MenuNav";
import AdminMenu from "./AdminMenu";
import "./Dashboard.css";

const CategoryCRUD = () => {
  const auth = useSelector((state) => state.authState);
  const token = JSON.parse(auth)?.token;
  const [name, setName] = useState("");
  const [updatingName, setUpdatingName] = useState("");
  const [category, setCategory] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    loadCategory();
  }, []);

  const loadCategory = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/category");

      setCategory(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      console.log(updatingName);
      const { data } = await axios.put(
        `http://localhost:5000/category/${selected._id}`,
        { name: updatingName },
        {
          headers: { Authorization: token },
        }
      );

      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success(`${data.name} is updated`);
        setSelected(null);
        setUpdatingName("");
        loadCategory();
        handleCancel();
      }
    } catch (error) {
      console.log(error);
      toast.error("Category may alredy exist tryagain");
    }
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      console.log(updatingName);
      const { data } = await axios.delete(
        `http://localhost:5000/category/${selected._id}`,
        {
          headers: { Authorization: token },
        }
      );

      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success(`${data.name} is Deleted`);
        setSelected(null);
        loadCategory();
        handleCancel();
      }
    } catch (error) {
      console.log(error);
      toast.error("Category may alredy exist tryagain");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:5000/category",
        { name },
        {
          headers: { Authorization: token },
        }
      );

      if (data?.error) {
        toast.error(data.error);
      } else {
        loadCategory();
        setName("");
        toast.success(`"${data.name}" is created`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <MainNav />
      <MenuNav />
      <div className="dashboard">
        <AdminMenu />
        <div className="dashboard-content h-screen w-screen p-3">
          <h1 className="flex text-center">Manage Category</h1>
          <div className="p-3">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control p-3"
                placeholder="Write Category name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="display-category">
            {category?.map((c) => (
              <h1
                key={c._id}
                onClick={() => {
                  showModal();
                  setSelected(c);
                  setUpdatingName(c.name);
                }}
              >
                {c.name}
              </h1>
            ))}
          </div>
          <div>
            <Modal
              title="Basic Modal"
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              footer={null}
            >
              <div className="p-3">
                <form onSubmit={handleUpdate}>
                  <input
                    type="text"
                    className="form-control p-3"
                    placeholder="Write Category name"
                    value={updatingName}
                    onChange={(e) => {
                      setUpdatingName(e.target.value);
                    }}
                  />
                  <button type="submit">Update</button>
                  <button onClick={handleDelete}>Delete</button>
                </form>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryCRUD;
