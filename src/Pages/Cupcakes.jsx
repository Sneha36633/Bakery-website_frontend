import React from 'react';
import './Pages.css';
import { useCart } from '../Context/CartContext'; // ✅ Global cart
const Cupcakes = () => {
  const { addToCart } = useCart(); // ✅ Global addToCart

  const cupcakeData = [
    { id: 5, name: 'Velvet Vanilla Bean', price: 80, img: '/velvetcupcake1.jpg' },
    { id: 6, name: 'Dark Choco Ganache', price: 95, img: '/chococupcake2.jpg' },
    { id: 7, name: 'Gourmet Strawberry', price: 85, img: '/stawberrycupcake3.jpg' },
    { id: 8, name: 'Blueberry Swirl', price: 90, img: '/blueberrycupcake4.jpg' },
  ];

  const handleAddToCart = (cupcake) => {
    addToCart({
      id: cupcake.id,
      name: cupcake.name,
      price: cupcake.price,
      image: cupcake.img,
      category: 'Cupcakes'
    });
    alert(`${cupcake.name} has been added to your cart! 🧁`);
  };

  return (
    <div className="category-page">
      <div className="page-header">
        <h2 className="page-title">Sweet <span>Cupcakes</span></h2>
      </div>

      <div className="cakes-page-grid">
        {cupcakeData.map((cupcake) => (
          <div key={cupcake.id} className="menu-card">
            <div className="menu-img-wrapper">
              <img
                src={cupcake.img}
                alt={cupcake.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/300?text=Image+Not+Found';
                }}
              />
              <span className="price-tag">₹{cupcake.price}</span>
            </div>

            <div className="menu-footer">
              <div className="menu-info">
                <h3>{cupcake.name}</h3>
                <p style={{ color: '#888', fontSize: '0.9rem' }}>Creamy & Fluffy</p>
              </div>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(cupcake)}
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

export default Cupcakes;