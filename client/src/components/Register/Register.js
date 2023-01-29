import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logoBlue.png";
import Footer from "./../Footer/Footer";
import NavBar from "./../navbar/NavBar";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const { data } = await axios.post("http://localhost:5000/register", {
        name,
        email,
        password,
      });

      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success("Registrations successful");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />

      <div className="mt-15 mx-auto flex min-h-screen w-full flex-col">
        <div className="max-w-10xl relative mx-auto flex min-h-screen w-full items-center justify-center overflow-hidden p-4 lg:p-8">
          {/* Sign In Section */}
          <div className="relative w-full py-6 md:w-8/12 lg:w-6/12 lg:py-0 xl:w-4/12">
            {/* Header */}
            <div className="mb-8 text-center">
              <h1 className="mb-1 inline-flex items-center space-x-3 text-4xl font-bold">
                <img src={logo} alt="" />
              </h1>
            </div>
            {/* END Header */}

            {/* Sign In Form */}
            <div className="signinForm flex flex-col overflow-hidden rounded shadow-sm">
              <div className="w-full grow p-5 lg:p-6">
                <p className="text-center text-4xl font-bold">Sign Up</p>
                <div className="sm:p-5 lg:px-10 lg:py-8">
                  <form className="space-y-6" onSubmit={handleSignUp}>
                    <div className="space-y-1">
                      <label htmlFor="name" name="name" className="font-medium">
                        Name
                      </label>
                      <input
                        className="inputColor block w-full rounded border px-5 py-3 leading-6"
                        type="name"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="space-y-1">
                      <label
                        htmlFor="email"
                        name="email"
                        className="font-medium"
                      >
                        Email
                      </label>
                      <input
                        className="inputColor block w-full rounded border px-5 py-3 leading-6"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="space-y-1">
                      <label
                        htmlFor="password"
                        name="email"
                        className="font-medium"
                      >
                        Password
                      </label>
                      <input
                        className="inputColor block w-full rounded border px-5 py-3 leading-6"
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div>
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center space-x-2 rounded border px-4 py-3 font-semibold leading-6"
                      >
                        Sign Up
                      </button>
                      <div className="mt-4 space-y-2 sm:flex sm:items-center sm:justify-between sm:space-x-2 sm:space-y-0"></div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="w-full py-4 px-5 text-center text-sm lg:px-6">
                Already have an account ?
                <Link className="ml-4 font-medium" to="/login">
                  Login
                </Link>
              </div>
            </div>
            {/* END Sign In Form */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Register;
