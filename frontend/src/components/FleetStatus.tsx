import React from "react";
import "../styles/FleetStatus.css";

const fleetData = [
  {
    fleetId: 1,
    fleetName: "Alex",
    activeOrders: 2,
    pastOrders: 15,
    totalSum: 5245,
  },
  {
    fleetId: 2,
    fleetName: "Bard",
    activeOrders: 5,
    pastOrders: 23,
    totalSum: 9788,
  },
];

const FleetStatus: React.FC = () => {
  return (
    <div className="fleet-status">
      <h3>Fleet status</h3>
      <div className="fleet-list">
        <table>
          <thead>
            <tr>
              <th>Fleet ID</th>
              <th>Fleet Name</th>
              <th>Active Orders</th>
              <th>Past Orders</th>
              <th>Total Delivery Amt(till date)</th>
            </tr>
          </thead>
          <tbody>
            {fleetData.map((order) => (
              <tr key={order.fleetId}>
                <td>#{order.fleetId}</td>
                <td>{order.fleetName}</td>
                <td>{order.activeOrders}</td>
                <td>{order.pastOrders}</td>
                <td>{order.totalSum}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FleetStatus;
