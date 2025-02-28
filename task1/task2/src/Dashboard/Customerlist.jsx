import React, { useState } from 'react';

import '../Dashboard/Dashboard_Styles/customer.css';

const customers = [
  {
    id: 1,
    name: 'Charlotte Jones',
    email: 'jones-charlotte@example.com',
    registered: 'December 31, 2021',
    country: 'Canada',
    group: 'Default',
    spent: 5192.42,
    avatar: 'https://via.placeholder.com/40' // Replace with actual image URL
  },
  {
    id: 2,
    name: 'Helena Garcia',
    email: 'garcia-helena@example.com',
    registered: 'February 23, 2021',
    country: 'China',
    group: 'Default',
    spent: 5702.02,
    avatar: 'https://via.placeholder.com/40'
  },
  {
    id: 3,
    name: 'Isabel Williams',
    email: 'williams-isabel@example.com',
    registered: 'October 2, 2021',
    country: 'China',
    group: 'Default',
    spent: 35762.74,
    avatar: 'https://via.placeholder.com/40'
  }
];

const CustomersTable = () => {
  const [search, setSearch] = useState('');

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(search.toLowerCase()) ||
    customer.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="customers-table">
      <div className="header">
        <h1>Customers</h1>
        <button className="new-customer-button">New customer</button>
      </div>
      <input 
        type="text" 
        placeholder="Start typing to search for customers" 
        value={search} 
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Registered</th>
            <th>Country</th>
            <th>Group</th>
            <th>Spent</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer) => (
            <tr key={customer.id}>
              <td>
                <div className="customer-info">
                  <img src={customer.avatar} alt={customer.name} className="avatar" />
                  <div>
                    <strong>{customer.name}</strong><br />
                    <span>{customer.email}</span>
                  </div>
                </div>
              </td>
              <td>{customer.registered}</td>
              <td>{customer.country}</td>
              <td>{customer.group}</td>
              <td>${customer.spent.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersTable;
