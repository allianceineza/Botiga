import React from "react";
import "../Dashboard/Dashboard_Styles/DashboardView.css";
import Table from"../Dashboard/Table";
import RecentReviews from "./RecentReviews";
import Income from "./Income";
import Sales from "./Sales";


const Dashboard = () => {
  const activeUsers = 148;
  const activePages = [
      { page: '/products/brandix-z4', users: 15 },
      { page: '/categories/drivetrain', users: 11 },
      { page: '/categories/monitors', users: 7 },
      { page: '/account/orders', users: 4 },
      { page: '/cart', users: 3 },
      { page: '/checkout', users: 1 },
      { page: '/pages/about-us', users: 1 },
  ];
  
  
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h2>Dashboard</h2>
        <div className="date-export">
          <input type="date" className="date-picker" />
          <button className="export-btn">Export</button>
        </div>
      </div>

      <div className="dashboard-cards">
        <div className="card">
          <h4>Total Sales</h4>
          <h2>$3799.00</h2>
          <span className="increase">▲ 34.7%</span>
          <p>Compared to April 2021</p>
        </div>

        <div className="card">
          <h4>Average Order Value</h4>
          <h2>$272.98</h2>
          <span className="decrease">▼ 12.0%</span>
          <p>Compared to April 2021</p>
        </div>

        <div className="card">
          <h4>Total Orders</h4>
          <h2>578</h2>
          <span className="increase">▲ 27.9%</span>
          <p>Compared to April 2021</p>
        </div>
      </div>

      <div className="dashboard">
            <div className="active-users">
                <h2>Active users</h2>
                <div className="user-count">{activeUsers}</div>
            </div>
            <div className="active-pages">
                <h3>Active pages</h3>
                <ul>
                    {activePages.map((item, index) => (
                        <li key={index}>
                            <span>{item.page}</span> <span>{item.users} Users</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <Income/>
   <Table/>
   <Sales/>
   
   <RecentReviews/>
 </div>

  );
};

export default Dashboard;
