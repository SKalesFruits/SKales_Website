import React, { useState } from "react";
import "../styles/ClientActivity.css";

// Sample data for Order Activity and Client Engagement
const orderActivityData = [
  {
    orderId: "#1001",
    clientName: "Leslie Alexander",
    date: "2024-08-31",
    status: "Delivered",
    total: "$150.00",
  },
  {
    orderId: "#1002",
    clientName: "Michael Scott",
    date: "2024-08-30",
    status: "Processing",
    total: "$200.00",
  },
  // Add more orders...
];

const clientEngagementData = [
  {
    clientId: "#001",
    clientName: "Leslie Alexander",
    visits: 5,
    feedbackScore: 4.8,
    lastOrder: "2024-08-28",
  },
  {
    clientId: "#002",
    clientName: "Michael Scott",
    visits: 3,
    feedbackScore: 4.6,
    lastOrder: "2024-08-25",
  },
  // Add more client engagement data...
];

const ClientActivity: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Recent clients");

  const renderContent = () => {
    switch (activeTab) {
      case "Order activity":
        return (
          <div className="client-list">
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Client Name</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {orderActivityData.map((order) => (
                  <tr key={order.orderId}>
                    <td>{order.orderId}</td>
                    <td>{order.clientName}</td>
                    <td>{order.date}</td>
                    <td>{order.status}</td>
                    <td>{order.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "Client engagement":
        return (
          <div className="client-list">
            <table>
              <thead>
                <tr>
                  <th>Client ID</th>
                  <th>Client Name</th>
                  <th>Visits</th>
                  <th>Feedback Score</th>
                  <th>Last Order</th>
                </tr>
              </thead>
              <tbody>
                {clientEngagementData.map((client) => (
                  <tr key={client.clientId}>
                    <td>{client.clientId}</td>
                    <td>{client.clientName}</td>
                    <td>{client.visits}</td>
                    <td>{client.feedbackScore}</td>
                    <td>{client.lastOrder}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "Recent clients":
      default:
        return (
          <div className="client-list">
            <table>
              <thead>
                <tr>
                  <th>Client ID</th>
                  <th>Client Name</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                {/* Add your client rows here */}
                <tr>
                  <td>#001</td>
                  <td>Leslie Alexander</td>
                  <td>leslie@acme.com</td>
                  <td>(201) 555-0124</td>
                </tr>
                {/* Additional rows... */}
              </tbody>
            </table>
          </div>
        );
    }
  };

  return (
    <div className="client-activity">
      <div className="client-header">
        <div className="client-info">
          <p>New clients (this week)</p>
          <h2>5</h2>
        </div>
        <div className="client-info">
          <p>New clients (this month)</p>
          <h2>12</h2>
        </div>
        <div className="client-info">
          <p>New clients (this year)</p>
          <h2>17</h2>
        </div>
      </div>
      <div className="client-tabs">
        <button
          className={`tab ${activeTab === "Recent clients" ? "active" : ""}`}
          onClick={() => setActiveTab("Recent clients")}
        >
          Recent clients
        </button>
        <button
          className={`tab ${activeTab === "Order activity" ? "active" : ""}`}
          onClick={() => setActiveTab("Order activity")}
        >
          Order activity
        </button>
        <button
          className={`tab ${activeTab === "Client engagement" ? "active" : ""}`}
          onClick={() => setActiveTab("Client engagement")}
        >
          Client engagement
        </button>
      </div>
      {renderContent()}
    </div>
  );
};

export default ClientActivity;
