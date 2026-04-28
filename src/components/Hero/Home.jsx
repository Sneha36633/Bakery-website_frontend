import React from 'react'
import './Home.css'

const Home = () => {
  const handleScrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='home container' id='home'>
      <div className="home-text">
        <h1>Handcrafted <span className="highlight">Delight</span> for Every Occasion</h1>
        <p>Discover the timeless art of artisanal baking. From our naturally leavened, crusty 
          sourdoughs to bespoke hand-decorated cakes and golden, flaky pastries, every creation 
          is a labor of love. We combine traditional techniques with the finest ingredients to
           bring you flavors that feel like home.</p>
        <button className='btn' onClick={handleScrollToMenu}>See Our Menu</button>
      </div>
    </div>
  )
}

export default Home