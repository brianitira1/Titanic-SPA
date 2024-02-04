import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import servicesimage from "../assets/images/servicesimage.jpg";
import massageimage  from "../assets/images/massageimage.jpg";
import wellnessimage from "../assets/images/wellnessimage.jpg";
import beautyimage  from "../assets/images/beautyimage.jpg";
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

        <div className="container mt-5" id="services">
          <div className="row">
            <div className="col-md-4 col-lg-4 col-sx-12 col-sm-12">
              <div className="card bg-transparent">
                <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 1, delay: 1 }}
                 className="card-body">
                <img src={beautyimage} alt="Services" className="img-fluid" />
                  <h5 className="card-title text-white">beauty</h5>
                </motion.div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sx-12 col-sm-12">
              <div className="card bg-transparent">
                <motion.div
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 1, delay: 1 }}
                 className="card-body">
                <img src={massageimage} alt="Services" className="img-fluid" />
                  <h5 className="card-title text-white">Massage</h5>
                </motion.div>
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sx-12 col-sm-12">
              <div className="card bg-transparent">
                <motion.div 
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ duration: 1, delay: 1 }}
                className="card-body">
                <img src={wellnessimage} alt="Services" className="img-fluid" />
                  <h5 className="card-title text-white">Wellness</h5>
                </motion.div>
       
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ServicesPage;
