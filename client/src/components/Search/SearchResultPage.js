import React from "react";
import { useSelector } from "react-redux";
import NavBar from "./../navbar/NavBar";
import ProductCard from "./../Product/ProductCard";

const SearchResultPage = () => {
  const searchResultState = useSelector((state) => state.SearchState);
  const searchResult = searchResultState.results;
  return (
    <>
      <NavBar />

      {searchResult?.map((pd) => (
        <ProductCard
          key={pd._key}
          name={pd.name}
          description={pd.description}
          price={pd.price}
          slug={pd.slug}
          imgID={pd._id}
          id={pd._id}
        />
      ))}
    </>
  );
};

export default SearchResultPage;
