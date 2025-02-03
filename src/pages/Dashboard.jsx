import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <div className="dashboard-container">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="main-content">
          <Header toggleSidebar={toggleSidebar} />
          <div className="content">Dashboard Content Goes Here</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
