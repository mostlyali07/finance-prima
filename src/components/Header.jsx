import React from "react";
import Avatar from "../assets/images/Avatar.png";
import { FaCalendarAlt, FaEnvelope, FaBell, FaBars } from "react-icons/fa";

const Header = ({ toggleSidebar }) => {
  return (
    <header className="main-header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-6 p-0">
            <h2 className="m-0">Good Morning!</h2>
          </div>
          <div className="col-md-6">
            <div className="top-bar">
              <FaCalendarAlt />
              <FaEnvelope />
              <FaBell />
              <div className="dropdown">
                <button
                  className="dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src={Avatar} alt="Avatar" />
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Settings
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Edit Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
              <button className="menu-toggle" onClick={toggleSidebar}>
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
