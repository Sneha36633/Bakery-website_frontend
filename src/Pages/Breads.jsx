import React from 'react';
import './Pages.css';
import { useCart } from '../Context/CartContext'; // ✅ Global cart
import axios from 'axios';

const Bread = () => {
  const { addToCart } = useCart();

  const breadData = [
    { id: 13, name: 'Sourdough Loaf', price: 120, img: '/Bread.jpg' },
    { id: 14, name: 'Multigrain Bread', price: 150, img: '/Bread47.png' },
    { id: 15, name: 'Butter Buns', price: 180, img: '/Pav2.jpg' },
    { id: 16, name: 'Pav Buns', price: 90, img: '/Pav buns.jpeg' },
  ];

  const handleAddToCart = (bread) => {
    addToCart({
      id: bread.id,
      name: bread.name,
      price: bread.price,
      image: bread.img,
      category: 'Breads'
    });
    alert(`${bread.name} cart mein add ho gaya! 🍞`);
  };

  return (
    <div className="category-page">
      <div className="page-header">
        <h2 className="page-title">Freshly Baked <span>Breads</span></h2>
      </div>

      <div className="cakes-page-grid">
        {breadData.map((bread) => (
          <div key={bread.id} className="menu-card">
            <div className="menu-img-wrapper">
              <img
                src={bread.img}
                alt={bread.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/300?text=Image+Not+Found';
                }}
              />
              <span className="price-tag">₹{bread.price}</span>
            </div>

            <div className="menu-footer">
              <h3>{bread.name}</h3>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(bread)}
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

export default Bread;