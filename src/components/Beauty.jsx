import React from "react";
import NavBar from "../components/NavBar";
import "../styles/BeautyPage.css";

import heroImage from "../assets/images/heroimage.jpg";

import ClientAppointmentPage from "../utils/ClientAppointmentPage";

const Beauty = () => {
  return (
    <>
      <NavBar />
      <div className=" hero-container " id="beauty-container">
        <img
          src={heroImage}
          alt="Hero Image"
          className="img-fluid hero-image"
        />
        <div className="overlay-form"></div>
        <ClientAppointmentPage />
      </div>
    </>
  );
};

export default Beauty;
