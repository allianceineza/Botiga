import React from 'react';
import "../Dashboard/Dashboard_Styles/productlist.css";
import image2 from'../assets/image/pic2.webp'
import image3 from'../assets/image/pic3.webp'
import image4 from'../assets/image/pic4.webp'
import image5 from'../assets/image/pic5.webp'
import image7 from'../assets/image/pic7.webp'
import image8 from'../assets/image/pic8.webp'
import image9 from'../assets/image/pic9.webp'
import image10 from'../assets/image/pic10.webp'


const products = [
  {
    id: '1',
    name: "women clothes",
    category: 'Popular',
    stock: 'Out of Stock',
    price: '$56.99',
    image: image7,
  },
  {
    id: '2',
    name: 'all in one bottle',
    category: 'new arrival product',
    stock: '2 In Stock',
    price: '$22.0-$55.0',
    image: image8,
  },
  {
    id: '3',
    name: 'Head set gamer region',
    category: 'new arrival product',
    stock: 'In Stock',
    price: '$64.00',
    image: image9, 
  },
  {
    id: '4',
    name: 'amazon alexa',
    category: 'new arrival product',
    stock: 'In Stock',
    price: '$64.00',
    image: image10, 
  },
  {
    id: '5',
    name: 'body lotion',
    category: 'popular',
    stock: 'In Stock',
    price: '$64.00',
    image: image2, 
  },
  {
    id: '6',
    name: 'sports',
    category: 'popular',
    stock: 'In Stock',
    price: '$64.00',
    image: image3, 
  },
  {
    id: '7',
    name: 'computer budget',
    category: 'popular',
    stock: 'In Stock',
    price: '$64.00',
    image: image4, 
  },
  {
    id: '8',
    name: 'electronics',
    category: 'popular',
    stock: 'In Stock',
    price: '$64.00',
    image: image5, 
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard-productlist1">
      <header className="dashboard-headerproductlist">
        <h1>Dashboard / Products</h1>
        <div className="header-actions">
          <button className="import-btn">Import</button>
          <button className="new-product-btn">New Product</button>
        </div>
      </header>
      <div className="search-container">
        <input type="text" placeholder="Start typing to search for products" />
      </div>
      <table className="product-table">
        <thead>
          <tr>
            <th>Select</th>
            <th>Product</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <div className="product-info">
                  <img src={product.image} alt={product.name} className="product-image" />
                  {product.name}
                </div>
              </td>
              <td>{product.category}</td>
              <td>{product.stock}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;