import React, { useState } from "react";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import search_icon from "../../Source/icons/search-icon.png";
import "../../Styling/Shop.scss";
import arrow_icon from "../../Source/Arrow-icon.png";
import filter_icon from "../../Source/filter-icon.png";
import orange_heart from "../../Source/heart-orange.png";
import star_icon from "../../Source/product-star.png";
import Newsletter from "../../Newsletter";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  let props = {
    heroButton: false,
    mainText: "Home Shopping, Your Choice!",
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

  const navigate = useNavigate("");

  const Stars = ({ count }) => {
    const stars = [];

    for (let i = 0; i < count; i++) {
      stars.push(<img src={star_icon} alt="" />);
    }

    return stars;
  };
  return (
    <div className="shop-container">
      <Navbar />
      <Hero {...props} />
      <div className="shop-main-container">
        <div className="shop-filter-container">
          <div className="shop-filter-search">
            <input
              type="text"
              className="filter-search"
              placeholder="Search products"
            />
            <img src={search_icon} alt="" />
          </div>
          <div className="shop-filter-price">
            <div className="price-filter-top">
              <p className="price-filter-heading">Price</p>
              <img src={filter_icon} alt="" />
            </div>
            {/* price range thing */}
            <div className="price-filter">
              <input type="range" className="input-range" />
            </div>
            <div className="price-filer-range">
              <p className="range-title">Range</p>
              <p className="range-numbers">$5-20</p>
            </div>
          </div>
          <div className="product-categories-container">
            <p className="product-filter-heading">Product Categories</p>
            <div className="product-category">
              <p className="category-title">Coat and Jackets</p>
              <img src={arrow_icon} alt="" />
            </div>
            <div className="product-category">
              <p className="category-title">Dressses</p>
              <img src={arrow_icon} alt="" />
            </div>
            <div className="product-category">
              <p className="category-title">Playsuit</p>
              <img src={arrow_icon} alt="" />
            </div>
            <div className="product-category">
              <p className="category-title">Short</p>
              <img src={arrow_icon} alt="" />
            </div>
            <div className="product-category">
              <p className="category-title">Top</p>
              <img src={arrow_icon} alt="" />
            </div>
            <div className="product-category">
              <p className="category-title">Bottoms</p>
              <img src={arrow_icon} alt="" />
            </div>
          </div>
          <div className="featured-product-container">
            <p className="featured-heading">Featured Product</p>
            <div className="featured-item">
              <div className="featured-box"></div>
              <div className="featured-inner">
                <p className="featured-title">Tropical Playsuit</p>
                <p className="featured-price">$100</p>
              </div>
            </div>
            <div className="featured-item">
              <div className="featured-box"></div>
              <div className="featured-inner">
                <p className="featured-title">Tropical Playsuit</p>
                <p className="featured-price">$100</p>
              </div>
            </div>
            <div className="featured-item">
              <div className="featured-box"></div>
              <div className="featured-inner">
                <p className="featured-title">Tropical Playsuit</p>
                <p className="featured-price">$100</p>
              </div>
            </div>
            <div className="featured-item">
              <div className="featured-box"></div>
              <div className="featured-inner">
                <p className="featured-title">Tropical Playsuit</p>
                <p className="featured-price">$100</p>
              </div>
            </div>
            <div className="featured-item">
              <div className="featured-box"></div>
              <div className="featured-inner">
                <p className="featured-title">Tropical Playsuit</p>
                <p className="featured-price">$100</p>
              </div>
            </div>
            <div className="featured-item">
              <div className="featured-box"></div>
              <div className="featured-inner">
                <p className="featured-title">Tropical Playsuit</p>
                <p className="featured-price">$100</p>
              </div>
            </div>
          </div>
        </div>
        <div className="shop-product-cards-container">
          {products.map((product, key) => {
            return (
              <div
                className="shop-product-card"
                onClick={() => {
                  navigate("/product/" + key);
                }}
              >
                <div className="product-card-top">
                  <div className="image-div"></div>
                  <div className="heart-icon" onClick={() => {}}>
                    <img src={orange_heart} alt="" />
                  </div>
                </div>
                <div className="product-card-bottom">
                  <div className="product-heading">{product.name}</div>
                  <div className="product-rating">
                    <Stars count={product.stars} />
                  </div>
                  <div className="product-brand">watchmenow</div>
                  <div className="product-price">$99</div>
                </div>
              </div>
            );
          })}
          <div className="see-more">
            <button className="see-more-btn">See More</button>
          </div>
        </div>
      </div>
      <div className="newsletter-wrap">
        <Newsletter />
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
