import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/images/heroimage.jpg";
import { useClerk } from "@clerk/clerk-react";

const Hero = () => {
  const clerk = useClerk();

  const handleBookNowClick = () => {
    clerk.openSignIn();
  };

  return (
    <div className="hero-container">
      <img src={heroImage} alt="Hero Image" className="img-fluid hero-image" />
      <div className="overlay"></div> {/* Dark overlay */}
      <motion.div
        className="hero-content"
        style={{
          textAlign: "center",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Experience Luxury Reborn
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          Indulge in the Ultimate Spa Experience
        </motion.p>
        <motion.button
          className="btn btn-primary btn-lg"
          onClick={handleBookNowClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          Book Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
