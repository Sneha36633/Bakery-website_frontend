import React from 'react';
import './Speciality.css';

const Speciality = () => {
  const specialities = [
    {
      id: 1,
      icon: "🌾",
      title: "Sourced from Nature",
      desc: "We use hand-picked organic grains to ensure you experience the purest and most authentic flavors in every bite."
    },
    {
      id: 2,
      icon: "☀️",
      title: "Dawn-to-Oven",
      desc: "Our master bakers begin their craft at 4 AM daily to bring you the first warmth and aroma of fresh-baked goodness."
    },
    {
      id: 3,
      icon: "👨‍🍳",
      title: "Heritage Flavour",
      desc: "Time-honored secret recipes passed down through generations, crafted to evoke cherished childhood memories."
    }
  ];

  return (
    <section className="speciality-section" id="speciality">
      {/* Background Overlay for Depth */}
      <div className="spec-bg-overlay"></div>
      
      <div className="container">
        <div className="spec-header">
          <h1 className="spec-subtitle">Our Excellence</h1>
          <h2 className="spec-title">Why We Are <span>Special</span></h2>
        </div>

        <div className="spec-grid">
          {specialities.map((item) => (
            <div key={item.id} className="spec-card">
              <div className="spec-icon-box">
                <span className="spec-icon">{item.icon}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <div className="spec-card-border"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speciality;