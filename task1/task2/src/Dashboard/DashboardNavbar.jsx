import React from "react";

import "../Dashboard/Dashboard_Styles/sidebar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      {/* Top Bar */}
      <div className="top-bar">
        <span className="market-logo">BOTIGA market</span>
        <button className="buy-now">Buy now</button>
      </div>
      {/* Main Navbar */}
      <div className="main-navbar">
        <div className="left-section">
          <span className="logo">BOTIGA</span>
          <span className="admin-badge">ADMIN</span>
          <button className="menu-btn">☰</button>
        </div>
        
        <div className="search-bar">
          <input type="text" placeholder="Search for the truth" />
        </div>
        
        <div className="right-section">
          <span className="language-flag">english</span>
          <div className="notification">
            <span className="bell">🔔</span>
            <span className="badge">3</span>
          </div>
          <div className="user-profile">
            <img src="profile" alt="User" />
            <div className="user-info">
              <span className="user-name">botiga</span>
              <span className="user-email">botiga@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
