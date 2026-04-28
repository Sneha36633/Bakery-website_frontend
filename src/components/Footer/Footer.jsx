import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1: Brand Description */}
        <div className="footer-col">
          <h2 className="footer-logo">CLASSIC <span>BAKERY</span></h2>
          <p className="footer-desc">
            Baking memories since 2010. We provide the finest organic breads and 
            customized cakes for your special moments.
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#menu">Our Menu</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Details with Icons */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <div className="contact-info">
            <p><span className="f-icon">📍</span> Bareilly, Uttar Pradesh, India</p>
            <p><span className="f-icon">📧</span> hello@classicbakery.com</p>
            <p><span className="f-icon">📞</span> +91 8006757633</p>
          </div>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom">
        <p>&copy; 2026 Classic Bakery | Designed by Sneha Gade</p>
      </div>
    </footer>
  );
};

export default Footer;