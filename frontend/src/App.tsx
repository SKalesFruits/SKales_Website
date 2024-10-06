import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import NavigationBar from "./components/NavigationBar";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { useDispatch } from "react-redux";
import { setMenuActive } from "./slices/home.slice";
import Close from "./resources/close.svg";
import ProductDetails from "./components/ProductDetails";
import Cart from "./pages/Cart";
import AdminDashBoard from "./pages/AdminDashBoard";
import AuthPage from "./pages/AuthPage";

function App() {
  const menuActive = useSelector((state: RootState) => state.home.menuActive);
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    if (menuActive) {
      setIsActive(true);
    } else {
      setTimeout(() => {
        setIsActive(false);
      }, 500);
    }
  }, [menuActive]);
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/products" element={<ProductDetails />}></Route>
        <Route path="/mycart" element={<Cart />}></Route>
        <Route path="/admin/*" element={<AdminDashBoard />} />
        <Route path="/auth" element={<AuthPage />} />
        {/* Fallback route */}
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Routes>
      <div className={`menu-modal-content ${menuActive ? "active" : ""}`}>
        {isActive && (
          <div className="menu-content">
            <div className="close-menu-container">
              <button
                id="close-icon-btn"
                onClick={() => dispatch(setMenuActive(false))}
              >
                <img src={Close} alt="close-icon" id="close-icon"></img>
              </button>
            </div>
            <div className="menu-container-hamb">
              <div className="menu-items-hamb">
                <p>HOME</p>
                <p>SHOP</p>
                <p>ABOUT US</p>
                <p>TRACK YOUR ORDER</p>
                <p>MY ORDERS</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
