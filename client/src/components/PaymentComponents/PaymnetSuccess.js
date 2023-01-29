import React from "react";
import { Link } from "react-router-dom";

const PaymnetSuccess = () => {
  return (
    <div class="h-screen bg-skyBulue">
      <div class=" p-6  md:mx-auto">
        <svg viewBox="0 0 24 24" class="text-green-600 mx-auto my-6 h-16 w-16 ">
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <div class="text-center">
          <h3 class="text-gray-900 text-center text-base font-semibold md:text-2xl">
            Payment Done!
          </h3>
          <p class="text-gray-600 my-2">
            Thank you for completing your secure online payment.
          </p>
          <p> Have a great day! </p>
          <div class="py-10 text-center">
            <Link
              to="/"
              class="bg-indigo-600 hover:bg-indigo-500 bg-green px-12 py-3 font-semibold text-white"
            >
              GO BACK
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymnetSuccess;
