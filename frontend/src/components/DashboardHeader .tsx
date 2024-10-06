import React from "react";
import "../styles/DashboardHeader.css";

const DashboardHeader: React.FC = () => {
  return (
    <div className="dashboard-header">
      <h1>Dashboard</h1>
      <div className="stats">
        <div className="stat-item">
          <div className="stat-icon">📦</div>
          <div className="stat-details">
            <p>Total shipments</p>
            <h2>500</h2>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">🚚</div>
          <div className="stat-details">
            <p>Pending orders</p>
            <h2>15</h2>
          </div>
        </div>
        <div className="stat-item">
          <div className="stat-icon">💰</div>
          <div className="stat-details">
            <p>Revenue</p>
            <h2>$50,000</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
