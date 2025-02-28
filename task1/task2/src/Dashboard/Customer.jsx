import React, { useState } from 'react';
import '../Dashboard/Dashboard_Styles/customer.css';

const customer = {
  name: 'Jessica Moore',
  email: 'jessica-moore@example.com',
  phone: '+38 (094) 730-24-25',
  avatar: 'https://via.placeholder.com/80',
  lastOrder: '7 days ago',
  averageOrderValue: 574.00,
  totalSpent: 34980.34,
  totalOrders: 7,
  orders: [
    { id: 80294, date: 'Today at 6:10 pm', status: 'Pending', items: 4, amount: 320.00 },
    { id: 63736, date: 'May 15, 2019', status: 'Completed', items: 7, amount: 2574.31 },
    { id: 63501, date: 'January 7, 2019', status: 'Completed', items: 1, amount: 34.00 },
    { id: 40278, date: 'October 19, 2018', status: 'Completed', items: 2, amount: 704.00 }
  ]
};

const CustomersTable = () => {
  return (
    <div className="customer-details1">
      <div className="header">
        <h1>{customer.name}</h1>
        <div>
          <button className="delete-button">Delete</button>
          <button className="edit-button">Edit</button>
        </div>
      </div>

      <div className="profile-card">
        <img src={customer.avatar} alt={customer.name} className="profile-avatar" />
        <h2>{customer.name}</h2>
        <a href={`mailto:${customer.email}`}>{customer.email}</a>
        <p>{customer.phone}</p>
        <div className="profile-stats">
          <p><strong>Last Order:</strong> {customer.lastOrder} — <a href="#">#{customer.orders[0].id}</a></p>
          <p><strong>Average Order Value:</strong> ${customer.averageOrderValue.toFixed(2)}</p>
        </div>
      </div>

      <div className="orders-section">
        <h3>Orders</h3>
        <p>Total spent ${customer.totalSpent.toLocaleString()} on {customer.totalOrders} orders</p>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Date</th>
              <th>Status</th>
              <th>Items</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {customer.orders.map(order => (
              <tr key={order.id}>
                <td><a href="#">#{order.id}</a></td>
                <td>{order.date}</td>
                <td>{order.status}</td>
                <td>{order.items} items</td>
                <td>${order.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <a href="#">View all {customer.totalOrders} orders</a>
      </div>
    </div>
  );
};

export default CustomersTable;
