import React from 'react';
import { motion } from 'framer-motion';
import heroImage from '../assets/images/heroimage.jpg';
import { useClerk } from '@clerk/clerk-react';

const Hero = () => {
  const clerk = useClerk();

  const handleBookNowClick = () => {
    clerk.openSignIn();
  };

  return (
    <div className="hero-container">
      <img
        src={heroImage}
        alt="Hero Image"
        className="img-fluid hero-image"
      />
      <div className="overlay"></div> {/* Dark overlay */}
      <motion.div
        className="hero-content"
        style={{ textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        initial={{ opacity: 0 }} // Initial animation state
        animate={{ opacity: 1 }} // Animation when component mounts
        transition={{ duration: 1 }} // Animation duration
      >
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0 }} // Initial animation state
          animate={{ opacity: 1 }} // Animation when component mounts
          transition={{ duration: 1, delay: 0.5 }} // Animation duration with delay
        >
          Experience Luxury Reborn
        </motion.h1>
        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }} // Initial animation state
          animate={{ opacity: 1 }} // Animation when component mounts
          transition={{ duration: 1, delay: 1 }} // Animation duration with delay
        >
          Indulge in the Ultimate Spa Experience
        </motion.p>
        <motion.button
          className="btn btn-primary btn-lg"
          onClick={handleBookNowClick}
          initial={{ opacity: 0 }} // Initial animation state
          animate={{ opacity: 1 }} // Animation when component mounts
          transition={{ duration: 1, delay: 1.5 }} // Animation duration with delay
        >
          Book Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Hero;
