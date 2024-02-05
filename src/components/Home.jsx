import React, { useRef } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutSection from "../sections/AboutSection";

const Home = () => {
  const footerRef = useRef(null);

  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <NavBar scrollToFooter={scrollToFooter} />
      <div>
        <div>
          <div>
            <Hero />
          </div>
          <div>
            <AboutSection />
          </div>
          <div ref={footerRef}>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
