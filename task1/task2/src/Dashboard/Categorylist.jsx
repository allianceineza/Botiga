import React from 'react';
import '../Dashboard/Dashboard_Styles/categorylist.css';

const categories = [
  { name: 'Body Lotion', items: 0, visibility: 'Hidden' },
  { name: 'Computer Budget', items: 0, visibility: 'Visible' },
  { name: 'Electronics', items: 0, visibility: 'Visible' },
  { name: 'Fashion', items: 0, visibility: 'Hidden' },
  { name: 'General', items: 0, visibility: 'Hidden' },
  { name: 'Shoes', items: 0, visibility: 'Hidden' },
  { name: 'Sports', items: 0, visibility: 'Visible' },
  { name: 'Watch', items: 0, visibility: 'Visible' },
  { name: 'Woman Clothes', items: 0, visibility: 'Visible' }
];

const Categories = () => {
  return (
    <div className="categories-page">
      <h1>Categories</h1>
      <button className="new-category-button">New category</button>
      <div className="categorylist-table">
      <input 
        type="text" 
        placeholder="Start typing to search for categories" 
        className="search-input" 
      />
      <table className="categories-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Items</th>
            <th>Visibility</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={index}>
              <td>{category.name}</td>
              <td>{category.items}</td>
              <td>
                <span className={`visibility-badge ${category.visibility.toLowerCase()}`}>
                  {category.visibility}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Categories;
