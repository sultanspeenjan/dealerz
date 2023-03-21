import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
// Images
import star_icon from "../../Source/product-star.png";
import orange_heart_icon from "../../Source/heart-orange.png";
import shopping_cart_white from "../../Source/shopping-cart-white.png";
import Slider from "react-slick";

import "../../Styling/Product.scss";

const Product = () => {
  let quantity = 3;
  let total = 10;
  let price = 99;

  let settings = {
    dots: true,
    slidesToShow: 3.5,
    arrows: false,
    infinite: false,
  };
  let products = [
    {
      name: "Urbano Jacket",
      stars: 5,
      brand: "watchmenow",
      price: 99,
    },
    {
      name: "Urbano Jacket",
      stars: 5,
      brand: "watchmenow",
      price: 99,
    },
    {
      name: "Urbano Jacket",
      stars: 5,
      brand: "watchmenow",
      price: 99,
    },
    {
      name: "Urbano Jacket",
      stars: 4,
      brand: "watchmenow",
      price: 99,
    },
    {
      name: "Urbano Jacket",
      stars: 5,
      brand: "watchmenow",
      price: 99,
    },
    {
      name: "Urbano Jacket",
      stars: 3,
      brand: "watchmenow",
      price: 99,
    },
  ];
  let url = useParams();
  let productId = url.id;

  const Stars = ({ count }) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<img src={star_icon} alt="" />);
    }
    return stars;
  };

  return (
    <div className="product-container">
      <Navbar />
      <div className="product-top-container">
        <div className="background-white-box"></div>
        <div className="breadcrumb-container">
          <Link to={""} className="product-category-link">
            Gallery
          </Link>{" "}
          >
          <Link to={""} className="product-category-link">
            Fruits
          </Link>{" "}
          >
          <Link to={""} className="product-category-link">
            Japan Oranges
          </Link>
        </div>
        <div className="product-main-section">
          <div className="left-container">
            <div className="product-main-image">
              <div className="main-box"></div>
            </div>
            <div className="product-side-images">
              <div className="side-box"></div>
              <div className="side-box"></div>
              <div className="side-box"></div>
            </div>
          </div>
          <div className="right-container">
            <div className="main-product-heading">
              {products[productId].name}
            </div>
            <div className="product-review-stars">
              <Stars count={products[productId].stars} />
            </div>
            <div className="product-price">$ {products[productId].price}</div>
            <div className="product-details">
              <h3>Details Product</h3>
              <div className="product-details-text">
                <p>
                  Develop a website by finding a product identity that has value
                  and branding to become a characteristic of a company. We will
                  also facilitate the business marketing of these products with
                  our SEO experts so that they become a ready-to-use website and
                  help sell a product from the company.
                </p>
                <p>
                  Develop a website by finding a product identity that has value
                  and branding to become a characteristic of a company. We will
                  also facilitate the business marketing of these products with
                  our SEO experts so that they become a ready-to-use website and
                  help sell a product from the company.
                </p>
              </div>
              <div className="product-quantity">
                <p className="product-label">Quantity</p>
                <div className="product-quantity-btns">
                  <button className="decreaseQuantity">-</button>
                  <div className="quantity">{quantity}</div>
                  <button className="increaseQuantity">+</button>
                </div>
                <button className="add-note-btn">Add note</button>
              </div>
              <div className="product-total">
                <p className="product-label">Sub Total</p>
                <p className="total">${total}</p>
              </div>
              <div className="product-cart-buttons">
                <button className="wishlist">
                  <p>Wishlist</p>
                  <img src={orange_heart_icon} alt="" />
                </button>
                <button className="addToCart">
                  <p>Add to Cart</p>
                  <img src={shopping_cart_white} alt="" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="product-description">
          <h1>Description</h1>
          <div className="decription-main">
            <div className="left-container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                <span>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo.
                </span>
              </p>
              <div className="reviews-container">
                <div className="review-heading">Reviews (2)</div>
                <div className="review-item">
                  <div className="review-profile-image">
                    <img src="" alt="" />
                  </div>
                  <div className="review-profile-user">
                    <div className="review-profile-top">
                      <div className="user-review">Alex Iwabi</div>
                      <div className="review-stars">
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                      </div>
                    </div>
                    <div className="review-date">2 March 2021 at 06.30 pm</div>
                    <div className="review-images">
                      <div className="image-box"></div>
                      <div className="image-box"></div>
                      <div className="image-box"></div>
                      <div className="image-box"></div>
                    </div>
                    <div className="review-content">
                      <p>
                        Thank you for the article that was made, it really
                        provides insight and knowledge that I didn't know
                        before.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="review-item">
                  <div className="review-profile-image">
                    <img src="" alt="" />
                  </div>
                  <div className="review-profile-user">
                    <div className="review-profile-top">
                      <div className="user-review">Alex Iwabi</div>
                      <div className="review-stars">
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                      </div>
                    </div>
                    <div className="review-date">2 March 2021 at 06.30 pm</div>
                    <div className="review-images">
                      <div className="image-box"></div>
                      <div className="image-box"></div>
                      <div className="image-box"></div>
                      <div className="image-box"></div>
                    </div>
                    <div className="review-content">
                      <p>
                        Thank you for the article that was made, it really
                        provides insight and knowledge that I didn't know
                        before.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-container">
              <div className="right-box"></div>
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
      <Footer />
    </div>
  );
};

export default Product;
