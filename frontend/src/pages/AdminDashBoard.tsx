import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import DashboardHome from "../components/DashboardHome";
import DeliveryManagement from "../components/DeliveryManagement";
import ReportAnalytics from "../components/ReportAnalytics";
import Shipment from "../components/Shipment";
import Sidebar from "../components/Sidebar";
import StockManagement from "../components/StockManagement";
import "../styles/Admin.css";

const AdminDashBoard: React.FC = () => {
  useEffect(() => {
    // Check admin access
  }, []);

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Navigate to="dashboard-home" replace />} />
          <Route path="dashboard-home" element={<DashboardHome />} />
          <Route path="shipments" element={<Shipment />} />
          <Route path="delivery-mng" element={<DeliveryManagement />} />
          <Route path="analytics" element={<ReportAnalytics />} />
          <Route path="stock-mng" element={<StockManagement />} />
          <Route path="*" element={<Navigate to="dashboard-home" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashBoard;
