import React from "react";

import NavBar from "../components/NavBar";
import heroImage from "../assets/images/heroimage.jpg";

import "../styles/ServicesPage.css";

const ServicesPage = () => {
  return (


    <>

      <NavBar />


      <div className="hero-container " id="services-container">
        <h1>Services Page</h1>
        <img src={heroImage} alt="Hero Image" className="img-fluid hero-image " />
      <div className="overlay-services"></div> 
        
      </div>

    </>
  );
};

export default ServicesPage;
