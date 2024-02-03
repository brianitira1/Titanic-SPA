import React from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <NavBar />
      <div>
        <div>
          <div>
            <Hero />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
