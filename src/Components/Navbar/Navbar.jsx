import React from "react";
import { Link } from "react-router-dom";
import search_icon from "../../Source/icons/search-icon.png";
import profile_icon from "../../Source/icons/profile-icon.png";
import notifications_icon from "../../Source/icons/notifications-icon.png";
import heart_icon from "../../Source/icons/Heart-icon.png";
import shopping_icon from "../../Source/icons/shopping-cart-icon.png";

import call_center_icon from "../../Source/icons/call-center-icon.png";
import shipping_icon from "../../Source/icons/shipping-icon.png";
import "../../Styling/Navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="top-home-section">
        <div className="home-logo">
          <Link to={"/"} className="home-button">
            Dealerz.
          </Link>
        </div>
        <div className="call-shipping-container">
          <div className="call-center-cont">
            <img src={call_center_icon} alt="Call center icon" />
            <p>Call Center</p>
          </div>
          <div className="shipping-cont">
            <img src={shipping_icon} alt="Shipping and returns icon" />
            <p>Shipping & Returns</p>
          </div>
        </div>
      </div>
      <div className="navbar-container">
        <div className="links-container">
          <Link to={"/shop"} className="navbar-link">
            Shop
          </Link>
          <Link to={""} className="navbar-link">
            Promo
          </Link>
          <Link to={""} className="navbar-link">
            About
          </Link>
          <Link to={""} className="navbar-link">
            Blog
          </Link>
        </div>
        <div className="search-container">
          <div className="search-input-container">
            <input
              type="text"
              className="navbar-search-input"
              placeholder="Search what you need"
            />
            <img src={search_icon} alt="" />
          </div>
        </div>
        <div className="navbar-icons">
          <Link to={""} className="icon-link">
            <img src={heart_icon} alt="" />
          </Link>
          <Link to={"/cart"} className="icon-link">
            <p className="cart-items">3</p>
            <img src={shopping_icon} alt="" />
          </Link>
          <Link to={""} className="icon-link">
            <img src={profile_icon} alt="" />
          </Link>
          <Link to={""} className="icon-link">
            <img src={notifications_icon} alt="" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
