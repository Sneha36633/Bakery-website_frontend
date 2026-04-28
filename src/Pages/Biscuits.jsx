import React from 'react';
import './Pages.css';
import { useCart } from '../Context/CartContext'; // ✅ Global cart
import axios from 'axios';

const Biscuits = () => {
  const { addToCart } = useCart();

  const biscuitData = [
    { id: 9, name: 'Premium Butter Shortbread Biscuits', price: 150, img: '/biscuits1.jpg' },
    { id: 10, name: 'Gourmet Choco-Drizzled Cookies', price: 180, img: '/biscuits2.jpg' },
    { id: 11, name: 'Double Chocolate Sea Salt Cookies', price: 200, img: '/biscuits3.jpg' },
    { id: 12, name: 'Golden Honey Crunch Biscuits', price: 250, img: '/biscuits4.jpg' },
  ];

  const handleAddToCart = (biscuit) => {
    addToCart({
      id: biscuit.id,
      name: biscuit.name,
      price: biscuit.price,
      image: biscuit.img,
      category: 'Biscuits'
    });
    alert(`${biscuit.name} has been added to your cart! 🍪`);
  };

  return (
    <div className="category-page">
      <div className="page-header">
        <h2 className="page-title">Handcrafted <span>Biscuits</span></h2>
      </div>

      <div className="cakes-page-grid">
        {biscuitData.map((biscuit) => (
          <div key={biscuit.id} className="menu-card">
            <div className="menu-img-wrapper">
              <img
                src={biscuit.img}
                alt={biscuit.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/300?text=Image+Not+Found';
                }}
              />
              <span className="price-tag">₹{biscuit.price}</span>
            </div>

            <div className="menu-footer">
              <h3>{biscuit.name}</h3>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(biscuit)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Biscuits;