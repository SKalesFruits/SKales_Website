import React, { useState } from "react";
import "../styles/Shipment.css";

interface Order {
  orderId: number;
  userName: string;
  currentStatus: string;
  orderPlacedOnDate: string;
  orderLocation: string;
  price: number;
  items: string[];
}

const initialShipmentData: Order[] = [
  {
    orderId: 1,
    userName: "Ramesh",
    currentStatus: "Placed",
    orderPlacedOnDate: "2024-05-25",
    orderLocation: "Mumbai",
    price: 6245,
    items: ["Mangoes", "Oranges", "Apples"],
  },
  {
    orderId: 2,
    userName: "Suresh",
    currentStatus: "Out For Delivery",
    orderPlacedOnDate: "2024-06-05",
    orderLocation: "Pune",
    price: 4145,
    items: ["Mangoes"],
  },
  {
    orderId: 3,
    userName: "Chandresh",
    currentStatus: "Placed",
    orderPlacedOnDate: "2024-08-21",
    orderLocation: "Mumbai",
    price: 1245,
    items: ["Oranges"],
  },
];

const Shipment: React.FC = () => {
  const [shipmentData, setShipmentData] =
    useState<Order[]>(initialShipmentData);
  const [sortConfig, setSortConfig] = useState<{
    key: keyof Order;
    direction: "ascending" | "descending";
  } | null>(null);

  const onSort = (key: keyof Order) => {
    let direction: "ascending" | "descending" = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
    setShipmentData((prevData) =>
      [...prevData].sort((a, b) => {
        if (a[key] < b[key]) {
          return direction === "ascending" ? -1 : 1;
        }
        if (a[key] > b[key]) {
          return direction === "ascending" ? 1 : -1;
        }
        return 0;
      })
    );
  };

  const handleStatusChange = async (orderId: number, newStatus: string) => {
    // Simulate API call
    await fetch(`/api/orders/${orderId}/status`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: newStatus }),
    });

    setShipmentData((prevData) =>
      prevData.map((order) =>
        order.orderId === orderId
          ? { ...order, currentStatus: newStatus }
          : order
      )
    );
  };

  return (
    <div className="order-status">
      <h3>Order status</h3>
      <div className="orders-list">
        <table>
          <thead>
            <tr>
              <th onClick={() => onSort("orderId")}>Order ID</th>
              <th onClick={() => onSort("userName")}>User Name</th>
              <th onClick={() => onSort("currentStatus")}>Current Status</th>
              <th onClick={() => onSort("orderPlacedOnDate")}>
                Order Placed On
              </th>
              <th onClick={() => onSort("orderLocation")}>Order Location</th>
              <th>Order Items</th>
              <th onClick={() => onSort("price")}>Order Price</th>
            </tr>
          </thead>
          <tbody>
            {shipmentData.map((order) => (
              <tr key={order.orderId}>
                <td>#{order.orderId}</td>
                <td>{order.userName}</td>
                <td>
                  <select
                    value={order.currentStatus}
                    onChange={(e) =>
                      handleStatusChange(order.orderId, e.target.value)
                    }
                  >
                    <option value="Placed">Placed</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Out For Delivery">Out For Delivery</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
                <td>{order.orderPlacedOnDate}</td>
                <td>{order.orderLocation}</td>
                <td>{order.items.join(", ")}</td>
                <td>{order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Shipment;
