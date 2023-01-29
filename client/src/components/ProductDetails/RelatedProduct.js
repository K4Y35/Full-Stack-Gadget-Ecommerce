import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ProductDetails.css";

const RelatedProduct = ({ categoryID }) => {
  const [relatedProduct, setRelatedProduct] = useState([]);

  console.log(categoryID._id);
  const loadRelatedProduct = async () => {
    const { relatedData } = await axios.post(
      "http://localhost:5000/related-products",
      { categoryID }
    );

    console.log(relatedData);

    setRelatedProduct(relatedData);
  };

  useEffect(() => {
    loadRelatedProduct();
  }, []);

  return (
    <div className="RelatedProduct">
      <h1 className="text-primary mb-5 text-2xl font-bold">Related product</h1>
      <div className="related-card-div">
        {/* {relatedProduct.map((pd) => (
        <ProductCard
          name={pd.name}
          price={pd.price}
          imgID={pd._id}
          slug={pd.slug}
        />
      ))} */}
      </div>
    </div>
  );
};

export default RelatedProduct;
