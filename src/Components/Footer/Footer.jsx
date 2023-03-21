import React from "react";
import { Link } from "react-router-dom";
import "../../Styling/Footer.scss";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left-container">
        <div className="box-container"></div>
        <div className="text-container">
          <div className="text-top">
            <h1>Dealerz.</h1>
            <div className="button-wrap">
              <Link to={""} className="privacy-link">
                Privacy Policy
              </Link>
              <Link to={""} className="terms-link">
                Terms and Condition
              </Link>
            </div>
          </div>
          <p>@2020 TanahAir Studio. All rights reserved.</p>
        </div>
      </div>
      <div className="right-container">
        <div className="socials">
          <Link to={"#/"} className="social-links">
            Yt
          </Link>
          <Link to={"#/"} className="social-links">
            Fb
          </Link>
          <Link to={"#/"} className="social-links">
            Tw
          </Link>
          <Link to={"#/"} className="social-links">
            Ig
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
