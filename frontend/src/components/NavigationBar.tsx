import React from "react";
import "../styles/NavigationBar.css";
import Menu from "../resources/hamburger-menu.svg";
import Cart from "../resources/cart-icon.svg";
import UserProfile from "../resources/user-icon.svg";
import { useDispatch } from "react-redux";
import { setMenuActive } from "../slices/home.slice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const NavigationBar: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartLength = useSelector((state: RootState) => state.cart.cartItems);
  return (
    <div className="navigation-bar-container">
      <div className="sliding-text-container">
        <div className="sliding-text">
          MEGA SALE ALERT: Unbelievable Discounts Up to 70% Off! Shop Your
          Favorite Fruits Before They run out – Limited Time Only!
        </div>
      </div>
      <div className="menu-items">
        <div className="hamburger-menu">
          <img
            src={Menu}
            alt="menu"
            id="hamburger-menu-icon"
            onClick={() => dispatch(setMenuActive(true))}
          ></img>
        </div>
        <div className="logo-container">
          <p id="logo-text" onClick={() => navigate("/")}>
            S.Kale's
          </p>
        </div>
        <div className="links-container">
          <p onClick={() => navigate("/admin")}>Admin</p>
          <p>About</p>
          <p onClick={() => navigate("/shop")}>Shop</p>
          <div className="cart-and-count">
            <img
              src={Cart}
              alt="shop-cart"
              id="shopping-cart-icon"
              onClick={() => navigate("/mycart")}
            ></img>
            {cartLength.length === 0 ? (
              <></>
            ) : (
              <div className="cart-item-count">{cartLength.length}</div>
            )}
          </div>
          <img
            src={UserProfile}
            alt="user-icon"
            id="user-icon"
            onClick={() => navigate("/auth")}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
