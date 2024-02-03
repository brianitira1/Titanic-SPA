import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import servicesimage from "../assets/images/servicesimage.jpg";
import "../styles/ServicesPage.css";

const ServicesPage = () => {
  return (
    <>
      <NavBar />
      <div className="hero-container" id="services-container">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white mt-5 mb-3"
          id="services-text"
        >
          Discover Our Luxurious Services
        </motion.h1>
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={servicesimage}
          alt="Hero Image"
          className="img-fluid hero-image"
        />
        <div className="overlay-services"></div>
      </div>
    </>
  );
};

export default ServicesPage;
