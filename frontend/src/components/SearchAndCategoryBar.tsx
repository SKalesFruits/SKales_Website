import React from "react";
import { products } from "../config/productsRegisteredConfig";
import "../styles/SearchAndCategoryBar.css";
import Dropdown from "./Dropdown";
import SearchBar from "./SearchBar";

const SearchAndCategoryBar: React.FC = () => {
  const handleSelect = (option: string) => {
    console.log("Selected option:", option);
  };
  return (
    <div className="search-and-category-bar-container">
      <Dropdown
        options={["Option 1", "Option 2", "Option 3"]}
        onSelect={handleSelect}
      />
      <SearchBar products={products} />
      <div className="top-selling-products">
        <div className="vertical-line"></div>
        <p>Trending Products:</p>
        <div className="product-one">
          <p>Mangoes</p>
        </div>
        <div className="product-two">
          <p>Apples</p>
        </div>
      </div>
    </div>
  );
};

export default SearchAndCategoryBar;
