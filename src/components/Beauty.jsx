import React from "react";
import NavBar from "../components/NavBar";
import "../styles/BeautyPage.css";

import ClientAppointmentPage from "../utils/ClientAppointmentPage";

const Beauty = () => {
  return (
    <>
      <NavBar />
      <div className="container" id="beauty-container">
        <h1>Beauty</h1>
        <ClientAppointmentPage />
      </div>
    </>
  );
};

export default Beauty;
