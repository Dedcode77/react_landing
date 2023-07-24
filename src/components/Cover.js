// Cover.jsx
import React from 'react';
import '../assets/css/Cover.css';
import logo from '../assets/images/logo.png';
import pattern from '../assets/images/pattern.png';
import intersection from '../assets/images/intersection9.png';
import section from '../assets/images/section.png';
import designcircles from '../assets/images/design-circles.png';
import card1 from '../assets/images/card1.png';
import card2 from '../assets/images/card2.png';
import card3 from '../assets/images/card3.png';
import card4 from '../assets/images/card4.png';
import card5 from '../assets/images/card5.png';
import card6 from '../assets/images/card6.png';

function Cover() {
  // The main component for the cover section of the website
  return (
    <div className="cover-container">
      {/* Container for background images */}
      <div className="image-container">
        <img src={pattern} alt="Pattern" className="pattern" />
        <img src={designcircles} alt="DesignCircles" className="designcircles" />
      </div>

      {/* Company logo */}
      <img src={logo} alt="Logo" className="logo" />

      {/* Main headline */}
      <h1>Complete Health<br />Care Solution for<br />Everyone</h1>

      {/* Sub headline */}
      <p>Lorem ipsum dolor sit amet, consectetur<br />adipiscing elit, sed do eiusmod tempor incididunt<br />ut labore et dolore magna aliqua.</p>

      {/* Call-to-action button */}
      <button className="book-button">BOOK Now</button>

      {/* Additional background image */}
      <img src={intersection} alt="Intersection" className="intersection" />
      

      {/* Card images */}
      <div className="card-section">
      <img src={section} alt="Section" className="section" />
      <img src={card1} alt="Card1" className="card1" />
      <img src={card2} alt="Card2" className="card2" />
      <img src={card3} alt="Card3" className="card3" />
      <img src={card4} alt="Card4" className="card4" />
      <img src={card5} alt="Card5" className="card5" />
      <img src={card6} alt="Card6" className="card6" />
    </div>
    </div>
  );
}

export default Cover;