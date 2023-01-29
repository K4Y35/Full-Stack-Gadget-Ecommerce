import React from "react";

const CheckOutProductCard = ({ name, description, price, imgID, slug }) => {
  return (
    <li className="flex items-center py-4">
      <img
        src={`http://localhost:5000/product/photo/${imgID}`}
        alt=""
        className="h-16 w-16 rounded object-cover"
      />

      <div className="ml-4">
        <h3 className="text-gray-900 text-sm">{name}</h3>

        <dl className="text-gray-600 mt-0.5 space-y-px text-[10px]">
          <div>
            <dt className="inline">Price : $</dt>
            <dd className="inline">{price}</dd>
          </div>

          {/* <div>
            <dt className="inline">Color:</dt>
            <dd className="inline">White</dd>
          </div> */}
        </dl>
      </div>
    </li>
  );
};

export default CheckOutProductCard;
