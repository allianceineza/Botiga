import { useState } from "react";
import { FaTachometerAlt, FaBox, FaUser, FaShoppingCart, FaHeart, FaEnvelope, FaComment, FaFolder, FaCalendar, FaChartBar, FaCog, FaFileInvoice, FaDollarSign, FaInfoCircle, FaCheckSquare, FaQuestionCircle, FaBomb, FaBars, FaChevronDown, FaChevronRight, FaLock } from "react-icons/fa";
import "../Dashboard/Dashboard_Styles/sidebar.css";

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="sidebar">
      <ul className="sidebar-ul">
        <li className="menu-item">
          <FaTachometerAlt className="icon" /> Dashboard
        </li>
        <li>
          <button className="menu-button" onClick={() => toggleSection("catalog")}>            
            <span className="menu-label"><FaBox className="icon" /> Catalog</span>
            {openSections["catalog"] ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          {openSections["catalog"] && (
            <ul className="submenu">
           < a href='/Dashboard/productList'> <li className="submenu-item">Product list</li></a>
              <li className="submenu-item">Product</li>
              <a href='/Dashboard/categoryList'> <li className="submenu-item">Category List</li></a>
              <li className="submenu-item">Category</li>
            </ul>
          )}
        </li>
        <li>
          <button className="menu-button" onClick={() => toggleSection("customers")}>            
            <span className="menu-label"><FaUser className="icon" /> Customers</span>
            {openSections["customers"] ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          {openSections["customers"]&&(
          <ul className="submenu">
           <a href="/Dashboard/customerList"> <li className="submenu-item">customer list</li></a>
           <a href="/Dashboard/customer"> <li className="submenu-item">customer </li></a>
          </ul>
          )}
         </li>
        
        <li>
          <button className="menu-button" onClick={() => toggleSection("orders")}>            
            <span className="menu-label"><FaShoppingCart className="icon" /> Orders</span>
            {openSections["orders"] ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          {openSections["orders"]&&( 
            <ul className="submenu">
            <li className="submenu-item">orders list</li>
            <li className="submenu-item">order details </li>
          </ul>
        )}

        </li>
        <li>
          <button className="menu-button" onClick={() => toggleSection("marketing")}>            
            <span className="menu-label"><FaHeart className="icon" /> Marketing</span>
            {openSections["marketing"] ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          {openSections["marketing"]&&(
           <ul className="submenu">
           <li className="submenu-item">coupons </li>
           <li className="submenu-item">coupon List </li>
         </ul>
          )}

        </li>
        <li>
          <button className="menu-button" onClick={() => toggleSection("inbox")}>            
            <span className="menu-label"><FaEnvelope className="icon" /> Inbox</span>
            {openSections["inbox"] ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          {openSections["inbox"]&&(
          <ul className="submenu">
          <li className="submenu-item">list </li>
          <li className="submenu-item">conversation </li>
        </ul>

          )}

        </li>
        <li className="menu-item">
          <FaComment className="icon" /> Chat <span className="notification">8</span>
        </li>
        <li className="menu-item">
          <FaFolder className="icon" /> File Manager
        </li>
        <li className="menu-item">
          <FaCalendar className="icon" /> Calendar
        </li>
        <li className="menu-item">
          <FaChartBar className="icon" /> Analytics
        </li>
        <li>
          <button className="menu-button" onClick={() => toggleSection("settings")}>            
            <span className="menu-label"><FaCog className="icon" /> Settings</span>
            {openSections["settings"] ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          {openSections["settings"] && (
            <ul className="submenu">
              <li className="submenu-item">Table of Content</li>
              <li className="submenu-item">Form</li>
            </ul>
          )}
        </li>
        <li className="menu-header">PAGES</li>
        <li>
          <button className="menu-button" onClick={() => toggleSection("authentication")}>            
            <span className="menu-label"><FaLock className="icon" /> Authentication</span>
            {openSections["authentication"] ? <FaChevronDown /> : <FaChevronRight />}
          </button>
          {openSections["inbox"]&&(
          <ul className="submenu">
          <li className="submenu-item">sign in </li>
          <li className="submenu-item">sign up </li>
          <li className="submenu-item">forgot password </li>
          <li className="submenu-item">reset password </li>
        </ul>

          )}

        </li>
        <li className="menu-item">
          <FaFileInvoice className="icon" /> Invoice
        </li>
        <li className="menu-item">
          <FaDollarSign className="icon" /> Pricing Table
        </li>
        <li className="menu-item">
          <FaInfoCircle className="icon" /> FAQ
        </li>
        <li className="menu-item">
          <FaCheckSquare className="icon" /> Terms And Conditions
        </li>
        <li className="menu-item">
          <FaQuestionCircle className="icon" /> Help Center
        </li>
        <li className="menu-item">
          <FaBomb className="icon" /> Not Found
        </li>
        <li>
          <button className="menu-button" onClick={() => toggleSection("menuLevel0")}>            
            <span className="menu-label"><FaBars className="icon" /> Menu Level 0</span>
            {openSections["menuLevel0"] ? <FaChevronDown /> : <FaChevronRight />}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;