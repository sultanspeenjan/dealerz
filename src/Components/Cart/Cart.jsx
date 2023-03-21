import React from "react";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import Slider from "react-slick";
import "../../Styling/Cart.scss";
import delete_icon from "../../Source/delete-icon.png";
import heart_icon from "../../Source/heart-orange.png";
import Newsletter from "../../Newsletter";

const Cart = () => {
  let cartProps = {
    heroButton: false,
    mainText: "Our Gallery, Your Dreams!",
  };

  let settings = {
    dots: true,
    slidesToShow: 3.5,
    arrows: false,
    infinite: false,
  };

  return (
    <div className="cart-container">
      <Navbar />
      <Hero {...cartProps} />
      <div className="cart-main-container">
        <div className="cart-process-top">
          <p className="current">1. Shopping Cart</p>
          <p>2. Checkout</p>
          <p>3. Order Succesed</p>
        </div>
        <div className="cart-heading">My Cart</div>
        <div className="cart-bottom">
          <div className="left-container">
            <div className="cart-item">
              <div className="cart-product-image">
                <div className="image-box"></div>
              </div>
              <div className="product-details">
                <div className="product-title">Tropical Playsuit</div>
                <div className="product-size-details">
                  <div className="product-size-label">
                    <p className="label">Size</p>
                    <p className="colon">:</p>
                  </div>
                  <div className="product-size-value">M</div>
                </div>
                <div className="product-quantity-details">
                  <div className="product-quantity-label">
                    <p className="label">Quantity</p>
                    <p className="colon">:</p>
                  </div>
                  <div className="product-quantity-buttons">
                    <div className="quantity-btn-minus">-</div>
                    <div className="quantity-btn-value">5</div>
                    <div className="quantity-btn-plus">+</div>
                  </div>
                </div>
                <div className="product-bottom-details">
                  <div className="product-price">$99</div>
                  <div className="product-delete">
                    <img src={delete_icon} alt="" />
                  </div>
                  <div className="product-wishlist">
                    <p>Wishlist</p>
                    <img src={heart_icon} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-item">
              <div className="cart-product-image">
                <div className="image-box"></div>
              </div>
              <div className="product-details">
                <div className="product-title">Tropical Playsuit</div>
                <div className="product-size-details">
                  <div className="product-size-label">
                    <p className="label">Size</p>
                    <p className="colon">:</p>
                  </div>
                  <div className="product-size-value">M</div>
                </div>
                <div className="product-quantity-details">
                  <div className="product-quantity-label">
                    <p className="label">Quantity</p>
                    <p className="colon">:</p>
                  </div>
                  <div className="product-quantity-buttons">
                    <div className="quantity-btn-minus">-</div>
                    <div className="quantity-btn-value">5</div>
                    <div className="quantity-btn-plus">+</div>
                  </div>
                </div>
                <div className="product-bottom-details">
                  <div className="product-price">$99</div>
                  <div className="product-delete">
                    <img src={delete_icon} alt="" />
                  </div>
                  <div className="product-wishlist">
                    <p>Wishlist</p>
                    <img src={heart_icon} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-item">
              <div className="cart-product-image">
                <div className="image-box"></div>
              </div>
              <div className="product-details">
                <div className="product-title">Tropical Playsuit</div>
                <div className="product-size-details">
                  <div className="product-size-label">
                    <p className="label">Size</p>
                    <p className="colon">:</p>
                  </div>
                  <div className="product-size-value">M</div>
                </div>
                <div className="product-quantity-details">
                  <div className="product-quantity-label">
                    <p className="label">Quantity</p>
                    <p className="colon">:</p>
                  </div>
                  <div className="product-quantity-buttons">
                    <div className="quantity-btn-minus">-</div>
                    <div className="quantity-btn-value">5</div>
                    <div className="quantity-btn-plus">+</div>
                  </div>
                </div>
                <div className="product-bottom-details">
                  <div className="product-price">$99</div>
                  <div className="product-delete">
                    <img src={delete_icon} alt="" />
                  </div>
                  <div className="product-wishlist">
                    <p>Wishlist</p>
                    <img src={heart_icon} alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div className="cart-item">
              <div className="cart-product-image">
                <div className="image-box"></div>
              </div>
              <div className="product-details">
                <div className="product-title">Tropical Playsuit</div>
                <div className="product-size-details">
                  <div className="product-size-label">
                    <p className="label">Size</p>
                    <p className="colon">:</p>
                  </div>
                  <div className="product-size-value">M</div>
                </div>
                <div className="product-quantity-details">
                  <div className="product-quantity-label">
                    <p className="label">Quantity</p>
                    <p className="colon">:</p>
                  </div>
                  <div className="product-quantity-buttons">
                    <div className="quantity-btn-minus">-</div>
                    <div className="quantity-btn-value">5</div>
                    <div className="quantity-btn-plus">+</div>
                  </div>
                </div>
                <div className="product-bottom-details">
                  <div className="product-price">$99</div>
                  <div className="product-delete">
                    <img src={delete_icon} alt="" />
                  </div>
                  <div className="product-wishlist">
                    <p>Wishlist</p>
                    <img src={heart_icon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right-container">
            <div className="coupon-container">
              <div className="heading">Have a Coupoun?</div>
              <div className="coupon-input">
                <input type="text" placeholder="Input your email here" />
              </div>
              <button className="coupon-btn">Apply</button>
            </div>
            <div className="cart-total">
              <div className="cart-total-heading">Cart Totals</div>
              <div className="cart-details">
                <div className="cart-detail">
                  <div className="cart-detail-label">Subtotal</div>
                  <div className="cart-detail-values-container">
                    <div className="cart-detail-value">
                      <p className="inner-label">$150</p>
                    </div>
                  </div>
                </div>
                <div className="cart-detail">
                  <div className="cart-detail-label">Shipping</div>
                  <div className="cart-detail-values-container">
                    <div className="cart-detail-value">
                      <p className="inner-label">Free Shipping</p>
                    </div>
                    <div className="cart-detail-value">
                      <p className="inner-label">Shipping to Sydney</p>
                      <button className="change-state-btn">Change</button>
                    </div>
                  </div>
                </div>
                <div className="cart-detail">
                  <div className="cart-detail-label">Total</div>
                  <div className="cart-detail-values-container">
                    <div className="cart-detail-value">
                      <p className="inner-label">$350</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="checkout-button">Checkout</div>
            </div>
          </div>
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
      <div className="newsletter-wrap">
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
