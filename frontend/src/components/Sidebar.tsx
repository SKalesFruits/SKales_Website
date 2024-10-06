import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Sidebar.css";

const Sidebar: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("Dashboard");
  return (
    <div className="sidebar">
      <div className="sidebar-logo">Admin Controls</div>
      <ul>
        <Link to="/admin/dashboard-home" id="link">
          <li
            className={
              selectedTab === "Dashboard" ? "menu-item-selected" : "menu-item"
            }
            onClick={() => setSelectedTab("Dashboard")}
          >
            Dashboard
          </li>
        </Link>
        <Link to="/admin/delivery-mng" id="link">
          <li
            className={
              selectedTab === "DeliverMng" ? "menu-item-selected" : "menu-item"
            }
            onClick={() => setSelectedTab("DeliverMng")}
          >
            Delivery Management
          </li>
        </Link>
        <Link to="/admin/shipments" id="link">
          <li
            className={
              selectedTab === "Orders" ? "menu-item-selected" : "menu-item"
            }
            onClick={() => setSelectedTab("Orders")}
          >
            Orders
          </li>{" "}
        </Link>
        <Link to="/admin/analytics" id="link">
          <li
            className={
              selectedTab === "Analytics" ? "menu-item-selected" : "menu-item"
            }
            onClick={() => setSelectedTab("Analytics")}
          >
            Analytics
          </li>
        </Link>
        <Link to="/admin/stock-mng" id="link">
          <li
            className={
              selectedTab === "StockMng" ? "menu-item-selected" : "menu-item"
            }
            onClick={() => setSelectedTab("StockMng")}
          >
            Stock Management
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
