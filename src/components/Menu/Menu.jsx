import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  const navigate = useNavigate();

  const menuItems = [
    { id: 1, name: 'Bread', category: 'Bread', img: '/bread-main.png', path: '/menu/bread' },
    { id: 2, name: 'Biscuits', category: 'Biscuit', img: '/Biscuits.png', path: '/menu/biscuits' },
    { id: 3, name: 'Pastry', category: 'Pastry', img: '/Pastry.png', path: '/menu/pastries' },
    { id: 4, name: 'Chocolate Cake', category: 'Cake', img: '/Cake.png', path: '/menu/cakes' },
    { id: 5, name: 'Fluffy Cupcakes', category: 'Cupcake', img: '/cupcakes.png', path: '/menu/cupcakes' },
    { id: 6, name: 'Glazed Donut', category: 'Donut', img: '/Donuts.png', path: '/menu/donuts' },
  ];

  return (
    <section className="menu-section" id="menu">
      <div className="container">
        <h2 className="menu-title">Our <span>Menu</span></h2>
        
        <div className="menu-grid">
          {menuItems.map((item) => (
            <div key={item.id} className="menu-card">
              <div className="menu-img-wrapper">
                <img 
                  src={item.img} 
                  alt={item.name} 
                  // Agar image nahi mili toh console mein error aayega
                  onError={(e) => {
                    console.error(`Image not found: ${item.img}`);
                    e.target.src = 'https://via.placeholder.com/300x200?text=Check+Image+Name';
                  }}
                />
                <span className="category-tag">{item.category}</span>
              </div>
              
              <div className="menu-info">
                <div className="menu-footer">
                  <h3>{item.name}</h3>
                  <button 
                    className="explore-btn" 
                    onClick={() => navigate(item.path)}
                  >
                    Explore More <span className="arrow-icon">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;