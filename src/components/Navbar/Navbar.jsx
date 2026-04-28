import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo1.png'
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useCart } from '../../Context/CartContext'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const { cart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  // Sabhi items ki total quantity nikaalne ke liye
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const storedUser = localStorage.getItem('user');
  const user = storedUser ? JSON.parse(storedUser) : null;

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenu ? 'hidden' : 'auto';
  }, [mobileMenu]);

  useEffect(() => {
    if (location.pathname === '/' && location.state?.scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(location.state.scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const closeMenu = () => setMobileMenu(false);

  const scrollToSection = (id) => {
    closeMenu();
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const goHome = () => {
    closeMenu();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLoginClick = () => {
    if (user) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
    closeMenu();
  };

  const isHomePage = location.pathname === '/';
  const navClass = isHomePage ? (sticky ? 'dark-nav' : 'transparent-nav') : 'dark-nav';

  return (
    <>
      <div
        className={`nav-overlay ${mobileMenu ? 'active' : ''}`}
        onClick={closeMenu}
      />

      <nav className={navClass}>
        <div className='logo-section'>
          <Link
            to="/"
            style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', color: 'inherit', gap: '12px' }}
            onClick={closeMenu}
          >
            <img src={logo} alt="Classic Bakery Logo" className='logo' />
            <h2>CLASSIC <span className="highlight">BAKERY</span></h2>
          </Link>
        </div>

        <ul className={mobileMenu ? 'show-mobile-menu' : 'hide-mobile-menu'}>
          <li><button className="nav-link-button" onClick={goHome}>Home</button></li>
          <li><a onClick={() => scrollToSection('menu')} style={{ cursor: 'pointer' }}>Menu</a></li>
          <li><a onClick={() => scrollToSection('speciality')} style={{ cursor: 'pointer' }}>Speciality</a></li>
          <li><a onClick={() => scrollToSection('about')} style={{ cursor: 'pointer' }}>About Us</a></li>
          <li><a onClick={() => scrollToSection('contact')} style={{ cursor: 'pointer' }}>Contact</a></li>

          {/* Mobile Cart with Badge */}
          <li className="mobile-only">
            <Link to="/cart" onClick={closeMenu} className="mobile-cart-link">
              <FaShoppingCart /> Cart 
              {cartItemCount > 0 && <span className='cart-badge-mobile'>{cartItemCount}</span>}
            </Link>
          </li>

          <li className="mobile-only" style={{ borderBottom: 'none', paddingTop: '20px' }}>
            <button className='btn' style={{ width: '80%', marginLeft: '10px' }} onClick={handleLoginClick}>
              {user ? 'Profile' : 'Login'}
            </button>
          </li>
        </ul>

        <div className='nav-right'>
          {/* Desktop Cart with Red Badge */}
          <Link to="/cart" className='cart-icon-wrapper desktop-only'>
            <FaShoppingCart />
            {cartItemCount > 0 && <span className='cart-count-badge'>{cartItemCount}</span>}
          </Link>

          <div className='menu-icon' onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <FaTimes /> : <FaBars />}
          </div>

          <button className='btn desktop-only' onClick={handleLoginClick}>
            {user ? 'Profile' : 'Login'}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;