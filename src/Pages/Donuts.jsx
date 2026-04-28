import React from 'react';
import './Pages.css';
import { useCart } from '../Context/CartContext'; // ✅ Global cart
const Donuts = () => {
  const { addToCart } = useCart();

  const donutData = [
    { id: 17, name: 'Strawberry Bliss', price: 110, img: '/donuts2.jpg', desc: 'Fresh strawberry glaze with floral touch' },
    { id: 18, name: 'Vanilla Elegance', price: 100, img: '/donuts3.jpg', desc: 'Classic vanilla bean with white chocolate' },
    { id: 19, name: 'Dark Choco Lava', price: 130, img: '/donuts1.png', desc: 'Rich Belgian chocolate with gold leaf' },
    { id: 20, name: 'Blueberry Royal', price: 120, img: '/donuts4.jpg', desc: 'Rich blueberry infusion with dark accents' },
  ];

  const handleAddToCart = (donut) => {
    addToCart({
      id: donut.id,
      name: donut.name,
      price: donut.price,
      image: donut.img,
      category: 'Donuts'
    });
    alert(`${donut.name} has been added to your cart! 🍩`);
  };

  return (
    <div className="category-page">
      <div className="page-header">
        <h2 className="page-title">Classic <span>Donuts</span></h2>
      </div>

      <div className="cakes-page-grid">
        {donutData.map((donut) => (
          <div key={donut.id} className="menu-card">
            <div className="menu-img-wrapper">
              <img
                src={donut.img}
                alt={donut.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/300?text=Donut+Image+Missing';
                }}
              />
              <span className="price-tag">₹{donut.price}</span>
            </div>

            <div className="menu-footer">
              <div className="menu-info">
                <h3>{donut.name}</h3>
                <p style={{ color: '#888', fontSize: '0.9rem' }}>{donut.desc}</p>
              </div>
              <button
                className="add-to-cart-btn"
                onClick={() => handleAddToCart(donut)}
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

export default Donuts;