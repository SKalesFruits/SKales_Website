import React, { useState, useEffect } from "react";
import "../styles/ProductsShop.css";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { sampleProducts } from "../config/sampleProducts";
import { setCartItems } from "../slices/cart.slice";
import { useDispatch } from "react-redux";
import QuickViewModal from "./QuickViewModal";

const ProductsShop: React.FC = () => {
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const currentFruitTypeFilter = useSelector(
    (state: RootState) => state.shop.currentFruitTypeFilter
  );

  const popularityFilterActive = useSelector(
    (state: RootState) => state.shop.popularityFilterActive
  );

  const priceHighToLowFilterActive = useSelector(
    (state: RootState) => state.shop.priceHighToLowFilterActive
  );

  const priceLowToHighFilterActive = useSelector(
    (state: RootState) => state.shop.priceLowToHighFilterActive
  );

  const reviewsFilterActive = useSelector(
    (state: RootState) => state.shop.reviewsFilterActive
  );

  const filterPanelActive = useSelector(
    (state: RootState) => state.shop.filterPanelActive
  );

  const [quantities, setQuantities] = useState<number[]>(
    new Array(sampleProducts.length).fill(1)
  );

  useEffect(() => {
    let newFilteredProducts = sampleProducts;

    if (currentFruitTypeFilter !== "") {
      newFilteredProducts = newFilteredProducts.filter(
        (item) =>
          item.type?.toLowerCase() === currentFruitTypeFilter.toLowerCase()
      );
    }

    if (popularityFilterActive) {
      newFilteredProducts = [...newFilteredProducts].sort(
        (a, b) => b.orderCount - a.orderCount
      );
    }

    if (priceHighToLowFilterActive) {
      newFilteredProducts = [...newFilteredProducts].sort(
        (a, b) => b.price - a.price
      );
    }

    if (priceLowToHighFilterActive) {
      newFilteredProducts = [...newFilteredProducts].sort(
        (a, b) => a.price - b.price
      );
    }

    if (reviewsFilterActive) {
      newFilteredProducts = [...newFilteredProducts].sort(
        (a, b) => b.reviewCount - a.reviewCount
      );
    }

    setFilteredProducts(newFilteredProducts);
  }, [
    currentFruitTypeFilter,
    popularityFilterActive,
    priceHighToLowFilterActive,
    priceLowToHighFilterActive,
    reviewsFilterActive,
  ]);

  const handleQuantityChange = (index: number, amount: number) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] = Math.max(1, newQuantities[index] + amount);
      return newQuantities;
    });
  };

  const dispatch = useDispatch();

  return (
    <div
      className={
        filterPanelActive ? "products-container" : "products-container-max"
      }
    >
      {filteredProducts.map((product, index) => (
        <div className="product-card" key={product.id}>
          <div className="product-image-container">
            <img
              src={`${product.image}`}
              alt={product.name}
              className="product-image"
            />
            <button
              className="quick-view-btn"
              onClick={() => setSelectedProduct(product)}
            >
              Quick View
            </button>
          </div>
          <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">₹{product.price}</p>
            <div className="quantity-handler">
              <button
                onClick={() => handleQuantityChange(index, -1)}
                className="quantity-button"
              >
                -
              </button>
              <span className="quantity">{quantities[index]}</span>
              <button
                onClick={() => handleQuantityChange(index, 1)}
                className="quantity-button"
              >
                +
              </button>
              <button
                className="add-to-cart"
                onClick={() => {
                  dispatch(
                    setCartItems({
                      product_id: product.id,
                      product_img: product.image,
                      product_name: product.name,
                      product_price: product.price,
                      product_qty: quantities[index],
                      user_id: sessionStorage.getItem("user-id")
                        ? parseInt(
                            sessionStorage.getItem("user-id") as string,
                            10
                          )
                        : -1,
                    })
                  );
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
      {selectedProduct && (
        <QuickViewModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductsShop;
