import React from 'react';
import "../Dashboard/Dashboard_Styles/sidebar.css";

const RecentOrders = () => {
    const orders = [
        { id: '#00745', status: 'Pending', customer: 'Giordano Bruno', date: '2020-11-02', amount: '$2,742.00', country: 'GB' },
        { id: '#00513', status: 'Hold', customer: 'Hans Weber', date: '2020-09-15', amount: '$204.00', country: 'DE' },
        { id: '#00507', status: 'AR', customer: 'Andrea Rossi', date: '2020-09-05', amount: '$5,039.00', country: 'AR' },
        { id: '#00104', status: 'Canceled', customer: 'Richard Feynman', date: '2020-08-26', amount: '$79.00', country: 'RF' },
        { id: '#00097', status: 'Completed', customer: 'Leonardo Garcia', date: '2020-06-20', amount: '$826.00', country: 'LG' },
        { id: '#00082', status: 'Completed', customer: 'Nikola Tesla', date: '2020-04-20', amount: '$1,052.00', country: 'NT' },
        { id: '#00061', status: 'Pending', customer: 'Marie Curie', date: '2020-02-10', amount: '$441.00', country: 'MC' },
    ];

    return (
        <div className="recent-orders">
            <h2>Recent Orders</h2>
            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Status</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <td>{order.id}</td>
                            <td>{order.status}</td>
                            <td>{order.customer}</td>
                            <td>{order.date}</td>
                            <td>{order.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RecentOrders;