import React, { useState } from "react";
import "../styles/DeliveryManagement.css";

interface DeliveryPerson {
  id: string;
  name: string;
}

interface Order {
  orderId: number;
  userName: string;
  currentStatus: string;
  orderPlacedOnDate: string;
  orderLocation: string;
  price: number;
  items: string[];
  deliveryPerson?: string; // Optional field to store the delivery person's name
}

const deliveryPersons: DeliveryPerson[] = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
  { id: "3", name: "Mike Johnson" },
  // Add more delivery persons as needed
];

const initialOrderData: Order[] = [
  // Sample data
  {
    orderId: 1,
    userName: "Ramesh",
    currentStatus: "Shipped",
    orderPlacedOnDate: "2024-05-25",
    orderLocation: "Mumbai",
    price: 6245,
    items: ["Mangoes", "Oranges", "Apples"],
  },
  {
    orderId: 2,
    userName: "Suresh",
    currentStatus: "Shipped",
    orderPlacedOnDate: "2024-06-05",
    orderLocation: "Pune",
    price: 4145,
    items: ["Mangoes"],
  },
  // Add more sample orders as needed
];

const DeliveryManagement: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>(initialOrderData);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [selectedDeliveryPersonId, setSelectedDeliveryPersonId] =
    useState<string>("");

  const handleAssignDelivery = async (orderId: number) => {
    const deliveryPerson =
      deliveryPersons.find((dp) => dp.id === selectedDeliveryPersonId)?.name ||
      "";

    // Update the order on the server
    try {
      await fetch(`/api/orders/${orderId}/assign`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          deliveryPerson,
          currentStatus: "Out For Delivery",
        }),
      });

      // Update the order locally
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.orderId === orderId
            ? { ...order, deliveryPerson, currentStatus: "Out For Delivery" }
            : order
        )
      );
      setSelectedOrder(null);
      setSelectedDeliveryPersonId("");
    } catch (error) {
      console.error("Failed to assign delivery", error);
    }
  };

  return (
    <div className="delivery-management">
      <h3>Delivery Management</h3>
      <div className="del-list">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>User Name</th>
              <th>Status</th>
              <th>Order Date</th>
              <th>Location</th>
              <th>Items</th>
              <th>Price</th>
              <th>Assign Delivery</th>
            </tr>
          </thead>
          <tbody>
            {orders
              .filter((order) => order.currentStatus === "Shipped")
              .map((order) => (
                <tr key={order.orderId} onClick={() => setSelectedOrder(order)}>
                  <td>#{order.orderId}</td>
                  <td>{order.userName}</td>
                  <td>{order.currentStatus}</td>
                  <td>{order.orderPlacedOnDate}</td>
                  <td>{order.orderLocation}</td>
                  <td>{order.items.join(", ")}</td>
                  <td>{order.price}</td>
                  <td>
                    <button onClick={() => setSelectedOrder(order)}>
                      Assign
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {selectedOrder && (
        <div className="assign-delivery">
          <h4>Assign Delivery to Order #{selectedOrder.orderId}</h4>
          <div>
            <label htmlFor="deliveryPerson">Delivery Person:</label>
            <select
              id="deliveryPerson"
              value={selectedDeliveryPersonId}
              onChange={(e) => setSelectedDeliveryPersonId(e.target.value)}
            >
              <option value="">Select Delivery Person</option>
              {deliveryPersons.map((dp) => (
                <option key={dp.id} value={dp.id}>
                  {dp.name}
                </option>
              ))}
            </select>
          </div>
          <button onClick={() => handleAssignDelivery(selectedOrder.orderId)}>
            Assign Delivery
          </button>
        </div>
      )}
    </div>
  );
};

export default DeliveryManagement;
