import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import NavBar from "./../navbar/NavBar";
import CheckOutProductCard from "./CheckOutProductCard";

const Checkout = () => {
  const cartState = useSelector((state) => state.cartState.cart);
  const [loading, setLoading] = useState(false);
  const storageAuth = JSON.parse(localStorage.getItem("auth"));

  const cartTotal = () => {
    let total = 0;
    cartState.map((item) => {
      total += item.price;
    });

    return total;
  };

  const handlePay = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const phone = e.target[2].value;
    const fullAddress = e.target[3].value;
    const city = e.target[4].value;
    const postCode = e.target[5].value;
    const total = cartTotal();

    const { data } = await axios.post("http://localhost:5000/ssl-request", {
      name,
      email,
      phone,
      fullAddress,
      city,
      postCode,
      total,
    });
    window.location.href = data.link;
  };
  return (
    <>
      <NavBar />
      <section className="bg-gray-light">
        <div className="mx-auto flex grid max-w-screen-2xl grid-cols-1 items-center justify-center  md:grid-cols-2">
          <div className=" py-12 md:py-24">
            <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
              <div>
                <p className="text-gray-900 text-2xl font-medium tracking-tight">
                  {cartTotal()}
                </p>

                <p className="text-gray-600 mt-1 text-sm">
                  For the purchase of
                </p>
              </div>

              <div>
                <div className="flow-root">
                  <ul className="divide-gray-100 -my-4 divide-y">
                    {cartState?.map((pd) => (
                      <CheckOutProductCard
                        name={pd.name}
                        price={pd.price}
                        imgID={pd._id}
                        slug={pd.slug}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="py-12 md:py-24">
            <div className="mx-auto max-w-lg px-4 lg:px-8">
              <form className="grid grid-cols-6 gap-4" onSubmit={handlePay}>
                <div className="col-span-3">
                  <label
                    for="FirstName"
                    className="text-gray-700 block text-xs font-medium"
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    className="border-gray-200 mt-1 w-full rounded-md shadow-sm sm:text-sm"
                    value={storageAuth.name}
                  />
                </div>

                <div className="col-span-6">
                  <label
                    for="Email"
                    className="text-gray-700 block text-xs font-medium"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="Email"
                    className="border-gray-200 mt-1 w-full rounded-md shadow-sm sm:text-sm"
                    value={storageAuth.email}
                  />
                </div>

                <div className="col-span-6">
                  <label
                    for="Phone"
                    className="text-gray-700 block text-xs font-medium"
                  >
                    Phone
                  </label>

                  <input
                    type="tel"
                    id="Phone"
                    className="border-gray-200 mt-1 w-full rounded-md shadow-sm sm:text-sm"
                  />
                </div>

                <div className="col-span-6">
                  <legend className="text-gray-700 block text-sm font-medium">
                    Billing Address
                  </legend>

                  <div className="mt-1 -space-y-px rounded-md bg-white shadow-sm">
                    <div>
                      <label className="sr-only" for="FullAddress">
                        Full address
                      </label>

                      <input
                        type="text"
                        id="FullAddress"
                        placeholder="Full address"
                        className="border-gray-200 relative w-full rounded-b-md focus:z-10 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label for="City" className="sr-only">
                        City
                      </label>

                      <select
                        id="City"
                        className="border-gray-200 relative w-full rounded-t-md focus:z-10 sm:text-sm"
                      >
                        <option>Dhaka</option>
                        <option>Sylhet</option>
                        <option>Rajshahi</option>
                        <option>Comilla</option>
                        <option>Barishal</option>
                        <option>Chittagong</option>
                        <option>Rangpur</option>
                      </select>
                    </div>

                    <div>
                      <label className="sr-only" for="PostalCode">
                        {" "}
                        ZIP/Post Code{" "}
                      </label>

                      <input
                        type="text"
                        id="PostalCode"
                        placeholder="ZIP/Post Code"
                        className="border-gray-200 relative w-full rounded-b-md focus:z-10 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-6">
                  <button
                    className="block w-full rounded-md bg-green p-2.5 text-sm text-white transition hover:shadow-lg"
                    type="submit"
                  >
                    Pay Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
