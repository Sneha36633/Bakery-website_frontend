import React from 'react';
import './About.css';

const About = () => {
  const handleScrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="about-section" id="about">
      
      {/* --- Main Header --- */}
      <div className="section-header">
        <h3 className="about-subtitle">Who We Are</h3>
        <h2 className="about-title">About <span>Us</span></h2>
      </div>

      {/* --- Section 1: Image Left, Text Right --- */}
      <div className="about-container">
        <div className="about-image">
          <img src="/Aboutsecimag.png" alt="Our Bakery Story" />
          <div className="experience-badge">
            <h3>10+</h3>
            <p>Years of Craft</p>
          </div>
        </div>
        
        <div className="about-content">
          <h3 className="about-subtitle">Our Story</h3>
          <h2 className="about-title">Baking with <span>Tradition & Love</span></h2>
          <p>
            At Classic Bakery, we don't just bake; we create memories. Our journey 
            began with a simple goal: to revive the lost art of artisanal baking 
            using only the finest organic ingredients.
          </p>
          <button className="about-btn" onClick={handleScrollToMenu}>View Our Menu</button>
        </div>
      </div>

      {/* --- Section 2: Text Left, Image Right (Reverse) --- */}
      <div className="about-container reverse">
        <div className="about-image">
          {/* Make sure About2.png is in your 'public' folder */}
          <img src="/About2.png" alt="Custom Cake Decoration" />
          <div className="experience-badge second-badge">
            <h3>500+</h3>
            <p>Cakes Delivered</p>
          </div>
        </div>
        <div className="about-content">
          <h3 className="about-subtitle">Special Moments</h3>
          <h2 className="about-title">Customized Cakes for <span>Your Day</span></h2>
          <p>
            Every celebration deserves a masterpiece. Our master pastry chefs 
            work with you to design bespoke cakes that taste as incredible 
            as they look.
          </p>
          <ul className="about-features">
            <li>✔ Premium Hand-decorated Designs</li>
            <li>✔ Organic & Fresh Ingredients</li>
            <li>✔ Personalized Flavor Profiles</li>
          </ul>
          <button className="about-btn" onClick={handleScrollToMenu}>View Our Menu</button>
        </div>

        
      </div>
    </section>
  );
};

export default About;