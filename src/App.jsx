import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// Context Import
import { CartProvider } from './Context/CartContext'; // Path check karein: Context ya context?

// Components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Hero/Home';
import Menu from './components/Menu/Menu';
import Speciality from './components/Speciality/Speciality';
import About from './components/About/About';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/Footer';

// Pages
import Cakes from './Pages/Cakes';
import Bread from './Pages/Breads';
import Biscuits from './Pages/Biscuits';
import Pastries from './Pages/Pastries';
import Cupcakes from './Pages/Cupcakes';
import Donuts from './Pages/Donuts';
import Cart from './Pages/Cart'; 
import Login from './Pages/Login';
import Profile from './Pages/Profile';


const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <main className="app-content">
          <Routes>
            {/* Landing Page Route */}
            <Route path="/" element={
              <>
                <Home />
                <Menu />
                <Speciality />
                <About />
                <Contact />
              </>
            } />

            {/* Category Pages */}
          <Route path="/menu/cakes" element={<Cakes />} />
          <Route path="/menu/bread" element={<Bread />} />
          <Route path="/menu/biscuits" element={<Biscuits />} />
          <Route path="/menu/pastries" element={<Pastries />} />
          <Route path="/menu/cupcakes" element={<Cupcakes />} />
          <Route path="/menu/donuts" element={<Donuts />} />
          
          {/* Shopping Cart Route (Sirf ek baar yahan rakhein) */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />


          {/* 404 Error Page */}
          <Route path="*" element={
            <div style={{ padding: '200px', color: 'white', textAlign: 'center', background: '#121212', minHeight: '100vh' }}>
              <h1 style={{ fontSize: '4rem' }}>404</h1>
              <p>Oops! The page you are looking for doesn't exist.</p>
              <a href="/" style={{ color: '#D97706', textDecoration: 'none', border: '1px solid #D97706', padding: '10px 20px', borderRadius: '5px', display: 'inline-block', marginTop: '20px' }}>
                Go Back Home
              </a>
            </div>
          } />
        </Routes>
        </main>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;