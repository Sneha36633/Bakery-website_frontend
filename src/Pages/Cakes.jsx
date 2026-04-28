import React from 'react';
import './Pages.css';
import { useCart } from '../Context/CartContext'; // ✅ Global cart
import axios from 'axios';

const Cakes = () => {
  const { addToCart } = useCart(); // ✅ Global addToCart

  const cakeData = [
    { id: 1, name: 'Premium Red Velvet', price: 799, img: '/Vanilla Cake.png' },
    { id: 3, name: 'Dark Chocolate Truffle', price: 899, img: '/Chocolatecake2.png' },
    { id: 4, name: 'Salted Caramel Drip', price: 749, img: '/PineappleCake.jpg' },
    { id: 2, name: 'Gourmet Strawberry', price: 649, img: '/Strawberrycake.png' },
  ];

  const handleAddToCart = (cake) => {
    addToCart({
      id: cake.id,
      name: cake.name,
      price: cake.price,
      image: cake.img,
      category: 'Cakes'
    });
    alert(`${cake.name} cart mein add ho gaya! 🎂`);
  };

  return (
    <div className="category-page">
      <div className="page-header">
        <h2 className="page-title">Our Premium <span>Cakes</span></h2>
      </div>

      <div className="cakes-page-grid">
        {cakeData.map((cake) => (
          <div key={cake.id} className="menu-card">
            <div className="menu-img-wrapper">
              <img src={cake.img} alt={cake.name} />
              <span className="price-tag">₹{cake.price}</span>
            </div>

            <div className="menu-footer">
              <h3>{cake.name}</h3>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(cake)}
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

export default Cakes;