import React from "react";
import heroImage from "../assets/images/heroimage.jpg";

import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <img src={heroImage} alt="Hero Image" className="img-fluid hero-image" />
      <div className="hero-content">{/* Your hero content goes here */}</div>
    </div>
  );
};

export default Hero;
