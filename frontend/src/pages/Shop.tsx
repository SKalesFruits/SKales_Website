import React from "react";
import { useSelector } from "react-redux";
import FilterShop from "../components/FilterShop";
import ProductsShop from "../components/ProductsShop";
import { ReactComponent as DockIcon } from "../resources/dock-left.svg";
import { RootState } from "../redux/store";
import "../styles/Shop.css";
import { useDispatch } from "react-redux";
import { setFilterPanelActive } from "../slices/shop.slice";

const Shop: React.FC = () => {
  const filterPanelActive = useSelector(
    (state: RootState) => state.shop.filterPanelActive
  );
  const dispatch = useDispatch();
  return (
    <div className="shop-main-container">
      <div className="shop-container">
        {filterPanelActive ? (
          <FilterShop />
        ) : (
          <div className="filter-panel-docked">
            <div className="filter-top">
              <DockIcon
                className="dock-icon"
                onClick={() => dispatch(setFilterPanelActive(true))}
              />
            </div>
            <div className="filter-bottom"></div>
          </div>
        )}
        <ProductsShop />
      </div>
    </div>
  );
};

export default Shop;
