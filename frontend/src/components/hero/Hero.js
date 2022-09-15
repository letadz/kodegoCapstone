import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="hero-bg">
        <div className="hero-content container">
          <h1 className="hero-title">Top service is our motive.</h1>
          <h5 className="hero-description">Because you deserve the best.</h5>
          <a href="/" className="bookBtn">
            Book Schedule
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
