import React from "react";
import "../styles/OrderNowBanner.css";

const OrderNowBanner: React.FC = () => {
  return (
    <div className="order-now-banner-container">
      <div className="order-now-overlay">
        <div className="order-now-text">
          <p id="order-now-textone">Freshness Guranteed</p>
          <p id="order-now-texttwo">Order Fresh Fruits</p>
          <p id="order-now-textthree">
            Indulge in the natural sweetness of our handpicked fruits. Order
            now!
          </p>
        </div>
        <div className="order-now-btns">
          <button id="order-now-btnone">Order Now</button>
          <button id="order-now-btntwo">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default OrderNowBanner;
