import React from "react";
import "../../Styling/Home.scss";
import Navbar from "../Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import premium_card_button from "../../Source/premium-card-button.png";
// Logos
import logo_1 from "../../Source/brands/logo1.png";
import logo_2 from "../../Source/brands/logo2.png";
import logo_3 from "../../Source/brands/logo3.png";
import logo_4 from "../../Source/brands/logo4.png";
import logo_5 from "../../Source/brands/logo5.png";
import logo_6 from "../../Source/brands/logo6.png";
import Newsletter from "../../Newsletter";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Slider from "react-slick";

const Home = () => {
  let props = {
    heroButton: true,
    mainText: "Your Premium Sound, Unplugged!",
  };
  let settings = {
    dots: true,
    slidesToShow: 3.5,
    arrows: false,
    infinite: false,
  };
  let testimonialSettings = {
    dots: false,
    slidesToShow: 1,
    arrows: true,
    infinite: false,
  };

  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Navbar />
      <Hero {...props} />
      {/* Premium Collection  */}
      <div className="premium-section-container">
        <h3>Our Premium Collection</h3>
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
        <div
          className="find-more-btn"
          onClick={() => {
            navigate("/Gallery");
          }}
        >
          <button className="premium-find-more">Find out More</button>
        </div>
      </div>
      {/* Top Items  */}
      <div className="top-items-container">
        <p className="top-items-title">Top Items</p>
        <p className="top-items-sub-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
          <span>
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam.
          </span>
        </p>
        <div className="top-items-cards-container">
          <Slider {...settings}>
            <div className="top-items-card">
              <div className="card-top-section">
                <div className="sale-tag">Sale</div>
                <div className="image-box"></div>
              </div>
              <div className="card-bottom-section">
                <div className="product-heading">Tracksuit Hyped</div>
                <div className="product-category">Apple Cherry</div>
                <div className="product-price">
                  <div className="price-now">$384</div>
                  <div className="price-before">$454</div>
                </div>
              </div>
            </div>
            <div className="top-items-card">
              <div className="card-top-section">
                <div className="sale-tag">Sale</div>
                <div className="image-box"></div>
              </div>
              <div className="card-bottom-section">
                <div className="product-heading">Tracksuit Hyped</div>
                <div className="product-category">Apple Cherry</div>
                <div className="product-price">
                  <div className="price-now">$384</div>
                  <div className="price-before">$454</div>
                </div>
              </div>
            </div>
            <div className="top-items-card">
              <div className="card-top-section">
                <div className="sale-tag">Sale</div>
                <div className="image-box"></div>
              </div>
              <div className="card-bottom-section">
                <div className="product-heading">Tracksuit Hyped</div>
                <div className="product-category">Apple Cherry</div>
                <div className="product-price">
                  <div className="price-now">$384</div>
                  <div className="price-before">$454</div>
                </div>
              </div>
            </div>
            <div className="top-items-card">
              <div className="card-top-section">
                <div className="sale-tag">Sale</div>
                <div className="image-box"></div>
              </div>
              <div className="card-bottom-section">
                <div className="product-heading">Tracksuit Hyped</div>
                <div className="product-category">Apple Cherry</div>
                <div className="product-price">
                  <div className="price-now">$384</div>
                  <div className="price-before">$454</div>
                </div>
              </div>
            </div>
            <div className="top-items-card">
              <div className="card-top-section">
                <div className="sale-tag">Sale</div>
                <div className="image-box"></div>
              </div>
              <div className="card-bottom-section">
                <div className="product-heading">Tracksuit Hyped</div>
                <div className="product-category">Apple Cherry</div>
                <div className="product-price">
                  <div className="price-now">$384</div>
                  <div className="price-before">$454</div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
      {/* Story */}
      <div className="story-container">
        <div className="left-container">
          <div className="image-box"></div>
        </div>
        <div className="right-container">
          <p className="story-heading">
            <span className="story-text">Story about</span>
            <span className="our-text">Our Brand</span>
          </p>
          <div className="story-text">
            <p>
              Develop a website by finding a product identity that has value and
              branding to become a characteristic of a company. We will also
              facilitate the business marketing of these products with our SEO
              experts so that they become a ready-to-use website and help sell a
              product from the company Develop a website by finding a product
              identity that has value and branding to become a characteristic of
              a company. We will also facilitate the business marketing of these
              products with our SEO experts so that they become a ready-to-use
              website and help sell a product from the company
            </p>
          </div>
          <div className="read-full">
            <Link className="read-full-btn">Read full story</Link>
          </div>
        </div>
      </div>
      <div className="achievements-container">
        <h3>Our Achievement</h3>
        <div className="logos-container">
          <img src={logo_1} alt="" />
          <img src={logo_2} alt="" />
          <img src={logo_3} alt="" />
          <img src={logo_4} alt="" />
          <img src={logo_5} alt="" />
          <img src={logo_6} alt="" />
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
      {/* Articles section  */}
      <div className="articles-container">
        <div className="articles-top">
          <h1>Get Better Insights from Our Articles</h1>
          <div className="see-more-container">
            <Link className="see-more-btn">See more</Link>
          </div>
        </div>
        <div className="articles-cards-container">
          <div className="article-card">
            <div className="article-image"></div>
            <div className="article-heading">Best Summer Outfit Style</div>
            <div className="article-date-category-container">
              <div className="article-date">14 Feb</div>
              <span class="dot"></span>
              <div className="article-category">Livina Style</div>
            </div>
            <div className="article-summary">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s.
            </div>
            <button className="article-explore-btn">Explore more</button>
          </div>
          <div className="article-card">
            <div className="article-image"></div>
            <div className="article-heading">Best Summer Outfit Style</div>
            <div className="article-date-category-container">
              <div className="article-date">14 Feb</div>
              <span class="dot"></span>
              <div className="article-category">Livina Style</div>
            </div>
            <div className="article-summary">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s.
            </div>
            <button className="article-explore-btn">Explore more</button>
          </div>
          <div className="article-card">
            <div className="article-image"></div>
            <div className="article-heading">Best Summer Outfit Style</div>
            <div className="article-date-category-container">
              <div className="article-date">14 Feb</div>
              <span class="dot"></span>
              <div className="article-category">Livina Style</div>
            </div>
            <div className="article-summary">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s.
            </div>
            <button className="article-explore-btn">Explore more</button>
          </div>
          <div className="article-card">
            <div className="article-image"></div>
            <div className="article-heading">Best Summer Outfit Style</div>
            <div className="article-date-category-container">
              <div className="article-date">14 Feb</div>
              <span class="dot"></span>
              <div className="article-category">Livina Style</div>
            </div>
            <div className="article-summary">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s.
            </div>
            <button className="article-explore-btn">Explore more</button>
          </div>
        </div>
      </div>
      {/* Newsletter  */}
      <div className="newsletter-wrap">
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
};
export default Home;
