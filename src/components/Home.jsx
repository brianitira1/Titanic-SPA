import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutSection from "../sections/AboutSection";
import { Link } from "react-scroll;

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <AboutSection />
      <Footer />

      <div className="scroll-links">
        <Link
          to="hero-section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Scroll to Hero
        </Link>
        <Link
          to="about-section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Scroll to About
        </Link>
      </div>
    </>
  );
};

export default Home;
