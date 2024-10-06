import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { sampleProducts } from "../config/sampleProducts";
import { Products } from "../types/shop.types";
import "../styles/ProductDetails.css";

const ProductDetails: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [productDetailsForRender, setProductDetailsForRender] =
    useState<Products>({
      description: "",
      id: -1,
      image: "",
      name: "",
      orderCount: -1,
      price: -1,
      reviewCount: -1,
      type: "",
    });
  useEffect(() => {
    const productId = searchParams.get("id");
    if (productId) {
      const getProduct = sampleProducts.find(
        (item) => item.id === parseInt(productId)
      );
      if (getProduct) setProductDetailsForRender(getProduct);

      console.log(getProduct);
    }
  }, []);

  const onAddToCart = () => {
    window.alert("HEYHEYHEY");
  };

  const renderProductPage = () => {
    return (
      <>
        <div className="product-image-details">
          <img
            src={productDetailsForRender.image}
            alt={productDetailsForRender.name}
          />
        </div>
        <div className="product-info-details">
          <h1 className="product-name-details">
            {productDetailsForRender.name}
          </h1>
          <p className="product-description-details">
            {productDetailsForRender.description}
          </p>
          <div className="product-purchase-details">
            <p className="product-price-details">
              ${productDetailsForRender.price.toFixed(2)}
            </p>
            <button className="add-to-cart-btn-details" onClick={onAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </>
    );
  };

  return <div className="product-details">{renderProductPage()}</div>;
};

export default ProductDetails;
