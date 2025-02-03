import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import AccountStatus from "../components/AccountStatus";
import BoxNumber from "../components/BoxNumber";
import { LuWallet } from "react-icons/lu";
import { IoPieChartOutline } from "react-icons/io5";
import { FaRegFloppyDisk, FaRegCreditCard } from "react-icons/fa6";

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
          <div className="container-fluid content">
            <div className="row">
              <div className="col-md-2">
                <BoxNumber
                  icon={<LuWallet />}
                  headingNumber="132,213"
                  symbol="$"
                  description="Your monthly revenue"
                />
              </div>
              <div className="col-md-2">
                <BoxNumber
                  icon={<IoPieChartOutline />}
                  headingNumber="12"
                  symbol=" "
                  description="Uncategorized transactions"
                />
              </div>
              <div className="col-md-2">
                <BoxNumber
                  icon={<FaRegFloppyDisk />}
                  headingNumber="7"
                  symbol=" "
                  description="Employees working today"
                />
              </div>
              <div className="col-md-2">
                <BoxNumber
                  icon={<FaRegCreditCard />}
                  headingNumber="25,164.3"
                  symbol="$"
                  description="This week's card spending"
                />
              </div>
              <div className="col-md-4">
                <AccountStatus />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
