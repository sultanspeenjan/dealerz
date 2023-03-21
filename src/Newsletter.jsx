import React from "react";
import newsletter_arrow from "./Source/newsletter-arrow.png";
import "./Styling/Newsletter.scss";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <p className="newsletter-heading">Join our news letters</p>
      <p className="newsletter-subtext">
        Leverage agile frameworks to provide a robust synopsis for high level
        overviews. Iterative approaches to corporate strategy foster
      </p>
      <div className="newsletter-email-input">
        <input
          type="text"
          className="newsletter-input"
          placeholder="Insert your mail here"
        />
        <div className="newsletter-input-btn">
          <img src={newsletter_arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
