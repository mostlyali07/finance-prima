import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const RevenueWidget = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [5000, 8000, 11000, 9000, 10000, 12000],
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.4,
        pointRadius: 5,
      },
      {
        label: "Expenses",
        data: [7500, 7000, 5000, 12000, 9500, 14000],
        borderColor: "#1c1c1c",
        backgroundColor: "#1c1c1c",
        tension: 0.4,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Revenue vs Expenses",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Months",
        },
      },
      y: {
        title: {
          display: true,
          text: "Amount (in $)",
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="revenue-widget">
      <div className="d-flex align-items-center justify-content-between">
        <h4 className="m-0 p-0">Revenue</h4>
        <p className="m-0 p-0">Last 7 days VS prior week</p>
      </div>
      <div className="w-100">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default RevenueWidget;
