import React, { useState } from "react";
import "../styles/FilterShop.css";
import { ReactComponent as Apple } from "../resources/apple.svg";
import { ReactComponent as Lime } from "../resources/lime.svg";
import { ReactComponent as Peach } from "../resources/peach.svg";
import { ReactComponent as Banana } from "../resources/banana.svg";
import { ReactComponent as StrawBerry } from "../resources/strawberry.svg";
import { ReactComponent as Grapes } from "../resources/grapes.svg";
import { ReactComponent as Search } from "../resources/search.svg";
import { ReactComponent as DockIcon } from "../resources/dock-left.svg";
import { useDispatch } from "react-redux";
import {
  setCurrentFruitTypeFilter,
  setPopularityFilter,
  setPriceHightToLowFilter,
  setPriceLowToHighFilter,
  setReviewsFilter,
  setFilterPanelActive,
} from "../slices/shop.slice";
import { AppDispatch } from "../redux/store";

const categories = [
  { name: "Pome", icon: <Apple /> },
  { name: "Citrus", icon: <Lime /> },
  { name: "Stone", icon: <Peach /> },
  { name: "Tropical", icon: <Banana /> },
  { name: "Berries", icon: <StrawBerry /> },
  { name: "Others", icon: <Grapes /> },
];

const FilterShop: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSortMethod, setSelectedSortMethod] = useState<string | null>(
    null
  );
  const [currentFilter, setCurrentFilter] = useState<string[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="filter-shop-container">
      <div className="dock-and-reset-btns">
        <DockIcon
          className="dock-icon"
          onClick={() => dispatch(setFilterPanelActive(false))}
        />
        <button
          id="reset-icon"
          onClick={() => {
            dispatch(setCurrentFruitTypeFilter(""));
            dispatch(setPopularityFilter(false));
            dispatch(setPriceHightToLowFilter(false));
            dispatch(setPriceLowToHighFilter(false));
            dispatch(setReviewsFilter(false));
            setSelectedCategory("");
            setSelectedSortMethod("");
          }}
        >
          Reset
        </button>
      </div>
      <div className="search-bar-shop">
        <Search className="search-icon" />
        <input type="text" placeholder="Search for fruits..." />
      </div>

      <div className="categories-section">
        <p className="section-title">Categories</p>
        <div className="categories">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-button ${
                selectedCategory === category.name ? "selected" : ""
              }`}
              onClick={() => {
                dispatch(setCurrentFruitTypeFilter(category.name));
                setSelectedCategory(category.name);
                const getPrevValues = [...currentFilter, category.name];
                setCurrentFilter(getPrevValues);
              }}
            >
              {category.icon}
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
      <div className="sort-by-section">
        <p className="section-title">Sort By</p>
        <div className="sort-by">
          <button
            className={`category-button ${
              selectedSortMethod === "popularity" ? "selected" : ""
            }`}
            onClick={() => {
              dispatch(setPopularityFilter(true));
              setSelectedSortMethod("popularity");
              const getPrevValues = [...currentFilter, "Popularity"];
              setCurrentFilter(getPrevValues);
            }}
          >
            Popularity
          </button>
          <button
            className={`category-button ${
              selectedSortMethod === "pricehightolow" ? "selected" : ""
            }`}
            onClick={() => {
              dispatch(setPriceHightToLowFilter(true));
              setSelectedSortMethod("pricehightolow");
              const getPrevValues = [...currentFilter, "Price High To Low"];
              setCurrentFilter(getPrevValues);
            }}
          >
            Price: High to Low
          </button>
          <button
            className={`category-button ${
              selectedSortMethod === "pricelowtohigh" ? "selected" : ""
            }`}
            onClick={() => {
              dispatch(setPriceLowToHighFilter(true));
              setSelectedSortMethod("pricelowtohigh");
              const getPrevValues = [...currentFilter, "Price Low To High"];
              setCurrentFilter(getPrevValues);
            }}
          >
            Price: Low to High
          </button>
          <button
            className={`category-button ${
              selectedSortMethod === "customerReviews" ? "selected" : ""
            }`}
            onClick={() => {
              dispatch(setReviewsFilter(true));
              setSelectedSortMethod("customerReviews");
              const getPrevValues = [...currentFilter, "Customer Reviews"];
              setCurrentFilter(getPrevValues);
            }}
          >
            Customer Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterShop;
