import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <div className="content">Dashboard Content Goes Here</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
