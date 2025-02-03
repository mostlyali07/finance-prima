import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import {
  FaHome,
  FaFolder,
  FaChartLine,
  FaUsers,
  FaCog,
  FaShapes,
} from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  const location = useLocation();

  const menuItems = [
    { path: "/", label: "Dashboard", icon: <FaHome /> },
    { path: "/reserve-categories", label: "Categories", icon: <FaFolder /> },
    { path: "/projection-charts", label: "Projections", icon: <FaChartLine /> },
    {
      path: "/allocation-management",
      label: "Allocations",
      icon: <FaShapes />,
    },
    { path: "/users", label: "Users", icon: <FaUsers /> },
    { path: "/settings", label: "Settings", icon: <FaCog /> },
  ];

  return (
    <div className={`main-sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div className="sidebar">
        <div className="w-100 d-flex align-items-center justify-content-between">
          <h2>
            Finance Prima<span style={{ color: "#d0e1e9" }}>.</span>
          </h2>
          <RxCross1 className="menu-toggle" onClick={toggleSidebar} />
        </div>

        <div className="side-menus">
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={location.pathname === item.path ? "active" : ""}
                >
                  <span className="icon">{item.icon}</span>
                  <span className="label">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <button>
          <IoLogOutOutline style={{ marginRight: "10px" }} />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
