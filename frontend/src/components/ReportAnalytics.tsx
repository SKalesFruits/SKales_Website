import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfYear,
  endOfYear,
  format,
} from "date-fns";
import "../styles/ReportAnalytics.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface Order {
  orderId: number;
  orderDate: string;
  amount: number;
}

const initialOrders: Order[] = [
  { orderId: 1, orderDate: "2024-01-01", amount: 100 },
  { orderId: 2, orderDate: "2024-04-05", amount: 200 },
  { orderId: 3, orderDate: "2024-05-10", amount: 300 },
  { orderId: 4, orderDate: "2024-08-15", amount: 400 },
  { orderId: 5, orderDate: "2024-09-01", amount: 500 },
  // Add more sample orders as needed
];

const ReportAnalytics: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>(initialOrders);
  const [filter, setFilter] = useState<string>("month");
  const [chartData, setChartData] = useState<any>(null);

  useEffect(() => {
    const filteredOrders = filterOrders(filter);
    setChartData({
      labels: filteredOrders.labels,
      datasets: [
        {
          label: "Order Amount",
          data: filteredOrders.data,
          fill: false,
          borderColor: "rgba(75,192,192,1)",
          tension: 0.1,
        },
      ],
    });
  }, [filter]);

  const filterOrders = (filter: string) => {
    const now = new Date();
    let startDate: Date;
    let endDate: Date;

    switch (filter) {
      case "month":
        startDate = startOfMonth(now);
        endDate = endOfMonth(now);
        break;
      case "week":
        startDate = startOfWeek(now);
        endDate = endOfWeek(now);
        break;
      case "year":
        startDate = startOfYear(now);
        endDate = endOfYear(now);
        break;
      default:
        startDate = startOfMonth(now);
        endDate = endOfMonth(now);
    }

    const groupedData: { [key: string]: number } = {};
    for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
      groupedData[format(d, "yyyy-MM-dd")] = 0;
    }

    orders.forEach((order) => {
      const orderDate = format(new Date(order.orderDate), "yyyy-MM-dd");
      if (groupedData[orderDate] !== undefined) {
        groupedData[orderDate] += order.amount;
      }
    });

    return {
      labels: Object.keys(groupedData),
      data: Object.values(groupedData),
    };
  };

  return (
    <div className="report-analytics">
      <h3>Order Report and Analytics</h3>
      <div className="filter-section">
        <label htmlFor="filter">Filter by:</label>
        <select
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="month">Month</option>
          <option value="week">Week</option>
          <option value="year">Year</option>
        </select>
      </div>
      <div className="chart-container">
        {chartData && <Line data={chartData} />}
      </div>
    </div>
  );
};

export default ReportAnalytics;
