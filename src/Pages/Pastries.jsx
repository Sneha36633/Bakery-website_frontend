import React from 'react';
import './Pages.css';
import { useCart } from '../Context/CartContext'; // ✅ Global cart
const Pastries = () => {
  const { addToCart } = useCart();

  const pastryData = [
    { id: 21, name: 'Madagascar Vanilla', price: 120, img: '/Vanilla.jpg' },
    { id: 22, name: 'Belgian Chocolate', price: 150, img: '/Chocolatep.jpg' },
    { id: 23, name: 'Gourmet Strawberry', price: 140, img: '/Stawberry.jpg' },
    { id: 24, name: 'Classic Pineapple', price: 110, img: '/Pineapple.jpg' },
  ];

  const handleAddToCart = (pastry) => {
    addToCart({
      id: pastry.id,
      name: pastry.name,
      price: pastry.price,
      image: pastry.img,
      category: 'Pastries'
    });
    alert(`${pastry.name} has been added to your cart! 🥐`);
  };

  return (
    <div className="category-page">
      <div className="page-header">
        <h2 className="page-title">Flaky & Sweet <span>Pastries</span></h2>
      </div>

      <div className="cakes-page-grid">
        {pastryData.map((pastry) => (
          <div key={pastry.id} className="menu-card">
            <div className="menu-img-wrapper">
              <img
                src={pastry.img}
                alt={pastry.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/300?text=Image+Not+Found';
                }}
              />
              <span className="price-tag">₹{pastry.price}</span>
            </div>

            <div className="menu-footer">
              <div>
                <h3>{pastry.name}</h3>
                <p style={{ color: '#888', fontSize: '0.9rem' }}>Freshly Layered</p>
              </div>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(pastry)}
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

export default Pastries;