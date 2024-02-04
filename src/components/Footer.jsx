import React from "react";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="mb-3">About Titanic SPA</h5>
            <p>
              Titanic SPA is a luxurious retreat inspired by the grandeur of the
              legendary ship. Unwind and rejuvenate in our state-of-the-art
              facilities.
            </p>
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="mb-3">Connect with Us</h5>
            <ul className="list-unstyled">
              <li>
                <i className="fab fa-facebook-f"></i> Facebook
              </li>
              <li>
                <i className="fab fa-twitter"></i> Twitter
              </li>
              <li>
                <i className="fab fa-instagram"></i> Instagram
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5 className="mb-3">Contact Us</h5>
            <p>Email: info@titanicspa.com</p>
            <p>Phone: +1 (123) 456-7890</p>
          </div>
        </div>
        <hr className="border-light" />
        <div className="row">
          <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
            <p>
              &copy; {new Date().getFullYear()} Titanic SPA. All rights
              reserved.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-right">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
