import React from "react";
import ImgOne from "../resources/special-img-one.jpg";
import ImgTwo from "../resources/special-img-two.jpg";
import ImgThree from "../resources/special-img-three.jpg";
import "../styles/specialities.css";

const Specialities: React.FC = () => {
  return (
    <div className="speacialities-container">
      <h2 className="speacialities-title">Explore Our Selection</h2>
      <p className="speacialities-subtitle">
        “ Quality fruits from trusted farms ”
      </p>
      <div className="selection-container">
        <div className="selection-card-one">
          <div className="card-one-text">
            <p id="selection-card-text-one-t">Freshness Guaranteed</p>
            <p id="selection-card-text-one-a">Seasonal Fruits Just For You</p>
            <p id="selection-card-text-one-f">Handpicked and fresh</p>
            <p id="selection-card-text-one-s">Shop Now</p>
          </div>
          <img src={ImgOne} alt="freshness-img" id="selection-imgone"></img>
        </div>
        <div className="selection-card-two">
          <div className="card-two-text">
            <p id="selection-card-text-two-t">Health & Wellness</p>
            <p id="selection-card-text-two-a">Organic and Nutrient-Rich</p>
            <p id="selection-card-text-two-f">Boost your health</p>
            <p id="selection-card-text-two-s">Shop Now</p>
          </div>
          <img src={ImgTwo} alt="wellness-img" id="selection-imgtwo"></img>
        </div>
        <div className="selection-card-three">
          <div className="card-three-text">
            <p id="selection-card-text-three-t">Exclusive Offers</p>
            <p id="selection-card-text-three-a">Special Deals on Bulk Orders</p>
            <p id="selection-card-text-three-f">Save more today</p>
            <p id="selection-card-text-three-s">Shop Now</p>
          </div>
          <img src={ImgThree} alt="offers-img" id="selection-imgthree"></img>
        </div>
      </div>
    </div>
  );
};

export default Specialities;
