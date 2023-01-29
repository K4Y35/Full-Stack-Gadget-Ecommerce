import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/action/cart";
import "./CartComponent.css";

const CartDetailsCard = ({ imgId, name, price, description, id }) => {
  const cartState = useSelector((state) => state.cartState.cart);

  const disptach = useDispatch();
  const handleRemove = (id) => {
    disptach(removeFromCart(id));
  };
  return (
    <div className="cart-card-main-daiv">
      <div className="cart-card-top">
        <div className="img-with-details">
          <div>
            <img
              src={`http://localhost:5000/product/photo/${imgId}`}
              alt=""
              className="h-40 w-40 rounded object-cover"
            />
          </div>

          <div className="ml-4">
            <h3 className="text-gray-900 text-sm">{name}</h3>

            <div>
              <h3>{description}</h3>
            </div>
          </div>
        </div>

        <h1 className="">${price}</h1>

        <div className="flex items-center justify-center">
          <label for="Quantity" class="sr-only">
            Quantity
          </label>

          <div class="flex items-center gap-1">
            <button
              type="button"
              class="text-gray-600 h-10 w-10 leading-10 transition hover:opacity-75"
            >
              &minus;
            </button>

            <input
              type="number"
              id="Quantity"
              value="1"
              class="border-gray-200 h-10 w-16 rounded text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none"
            />

            <button
              type="button"
              class="text-gray-600 h-10 w-10 leading-10 transition hover:opacity-75"
            >
              &#43;
            </button>
          </div>

          <button
            className="text-gray-600 hover:text-red-600 transition"
            onClick={() => handleRemove(id)}
          >
            <span className="sr-only">Remove item</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default CartDetailsCard;
