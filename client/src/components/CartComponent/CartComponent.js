import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./CartComponent.css";
import CartDetailsCard from "./CartDetailsCard";

const CartComponent = () => {
  const cartState = useSelector((state) => state.cartState.cart);

  const cartTotal = () => {
    let total = 0;
    cartState.map((item) => {
      total += item.price;
    });

    return total.toLocaleString("en-US", {
      style: "currency",
      currency: "USd",
    });
  };

  return (
    <div>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-gray-900 text-xl font-bold sm:text-3xl">
                Your Cart
              </h1>
            </header>

            <div className="mt-8">
              <ul className="space-y-4">
                {cartState?.map((pd) => (
                  <CartDetailsCard
                    id={pd._id}
                    name={pd.name}
                    price={pd.price}
                    imgId={pd._id}
                    description={pd.description}
                  />
                ))}
              </ul>

              <div className="border-gray-100 mt-8 flex justify-end border-t pt-8">
                <div className="w-screen max-w-lg space-y-4">
                  <dl className="text-gray-700 space-y-0.5 text-sm">
                    <div className="flex justify-between">
                      <dt>Subtotal</dt>
                      <dd>{cartTotal()}</dd>
                    </div>

                    <div className="flex justify-between">
                      <dt>VAT</dt>
                      <dd>£25</dd>
                    </div>

                    <div className="flex justify-between">
                      <dt>Discount</dt>
                      <dd>-£20</dd>
                    </div>

                    <div className="flex justify-between !text-base font-medium">
                      <dt>Total</dt>
                      <dd>£200</dd>
                    </div>
                  </dl>

                  <div className="flex justify-end">
                    <span className="bg-indigo-100 text-indigo-700 inline-flex items-center justify-center rounded-full px-2.5 py-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="-ml-1 mr-1.5 h-4 w-4"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                        />
                      </svg>

                      <p className="whitespace-nowrap text-xs">
                        2 Discounts Applied
                      </p>
                    </span>
                  </div>

                  <div className="flex justify-end">
                    <Link
                      to="/"
                      className="btn-primary mr-5 flex w-40 items-center justify-center"
                    >
                      Continue shopping
                    </Link>
                    <Link
                      to="/checkout"
                      className="btn-primary flex items-center justify-center"
                    >
                      Checkout
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartComponent;
