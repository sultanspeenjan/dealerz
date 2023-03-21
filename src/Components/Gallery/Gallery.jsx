import React from "react";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";
import premium_card_button from "../../Source/premium-card-button.png";
import "../../Styling/Gallery.scss";
import Newsletter from "../../Newsletter";
import Slider from "react-slick";

const Gallery = () => {
  let props = {
    heroButton: false,
    mainText: "Our Gallery, Your Dreams!",
  };
  let testimonialSettings = {
    dots: false,
    slidesToShow: 1,
    arrows: true,
    infinite: false,
  };
  return (
    <div className="gallery-container">
      <Navbar />
      <Hero {...props} />
      <div className="premium-section-container">
        <h3>Our Gallery</h3>
        <div className="premium-button-container">
          <div className="premium-button-inner">
            <button className="premium-button selected">All-Products</button>
            <button className="premium-button">Coats & Jackets</button>
            <button className="premium-button">Dressed</button>
            <button className="premium-button">Playsuit</button>
            <button className="premium-button">Short</button>
            <button className="premium-button">Skirt</button>
            <button className="premium-button">T-Shirt </button>
          </div>
        </div>
        <div className="premium-cards-container">
          <Link to={""} className="premium-card-link">
            <div className="premium-item-card">
              <div className="premium-category">Category Dress</div>
              <div className="premium-card-title">Tropical Suit</div>
              <div className="premium-card-btn">
                <img src={premium_card_button} alt="" />
              </div>
            </div>
          </Link>
          <Link to={""} className="premium-card-link">
            <div className="premium-item-card">
              {" "}
              <div className="premium-category">Category Dress</div>
              <div className="premium-card-title">Tropical Suit</div>
              <div className="premium-card-btn">
                <img src={premium_card_button} alt="" />
              </div>
            </div>
          </Link>
          <Link to={""} className="premium-card-link">
            <div className="premium-item-card">
              {" "}
              <div className="premium-category">Category Dress</div>
              <div className="premium-card-title">Tropical Suit</div>
              <div className="premium-card-btn">
                <img src={premium_card_button} alt="" />
              </div>
            </div>
          </Link>
          <Link to={""} className="premium-card-link">
            <div className="premium-item-card">
              {" "}
              <div className="premium-category">Category Dress</div>
              <div className="premium-card-title">Tropical Suit</div>
              <div className="premium-card-btn">
                <img src={premium_card_button} alt="" />
              </div>
            </div>
          </Link>
          <Link to={""} className="premium-card-link">
            <div className="premium-item-card">
              <div className="premium-category">Category Dress</div>
              <div className="premium-card-title">Tropical Suit</div>
              <div className="premium-card-btn">
                <img src={premium_card_button} alt="" />
              </div>
            </div>
          </Link>
          <Link to={""} className="premium-card-link">
            <div className="premium-item-card">
              <div className="premium-category">Category Dress</div>
              <div className="premium-card-title">Tropical Suit</div>
              <div className="premium-card-btn">
                <img src={premium_card_button} alt="" />
              </div>
            </div>
          </Link>
        </div>
        <div className="find-more-btn">
          <button className="premium-find-more">Find out More</button>
        </div>
      </div>
      {/* testimonial section  */}
      <div className="testimonial-container">
        <div className="testimonial-inner">
          <Slider {...testimonialSettings}>
            <div className="testimonial-card">
              <div className="left-container">
                <div className="image-box"></div>
              </div>
              <div className="right-container">
                <h3>Good Seller!</h3>
                <p className="content">
                  I am very happy with the services provided, it is very
                  helpful, starting from the insight that the company gave from
                  the start that I did not understand what it was so I got
                  knowledge and made my website look better
                </p>
                <div className="testimonial-user-details">
                  <p className="name">Anna Saraspova</p>
                  <p className="statement">Your Beloved Buyer</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="left-container">
                <div className="image-box"></div>
              </div>
              <div className="right-container">
                <h3>Amazing Seller!</h3>
                <p className="content">
                  I am very happy with the services provided, it is very
                  helpful, starting from the insight that the company gave from
                  the start that I did not understand what it was so I got
                  knowledge and made my website look better
                </p>
                <div className="testimonial-user-details">
                  <p className="name">Anna Saraspova</p>
                  <p className="statement">Your Beloved Buyer</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      <div className="newsletter-wrap">
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
