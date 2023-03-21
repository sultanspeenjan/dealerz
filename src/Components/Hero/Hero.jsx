import React from "react";
// Shapes
import ellipse_blue_bottom from "../../Source/hero-icons/Ellipse-blue-bottom.png";
import ellipse_blue_right from "../../Source/hero-icons/Ellipse-blue-right.png";
import ellipse_blue_top_left from "../../Source/hero-icons/ellipse-blue-top-left.png";
import ellipse_cir_left from "../../Source/hero-icons/Ellipse-left.png";
import ellipse_cir_right from "../../Source/hero-icons/Ellipse-right-circle.png";
import ellipse_cir_right_most from "../../Source/hero-icons/Ellipse-right-most.png";
import ellipse_cir_top from "../../Source/hero-icons/Ellipse-top.png";
import "../../Styling/Hero.scss";

const Hero = (props) => {
  return (
    <div className="hero-container">
      <div className="left-container"></div>
      <div className="right-container">
        <img src={ellipse_blue_bottom} alt="" className="ellipse_blue_bottom" />
        <img src={ellipse_blue_right} alt="" className="ellipse_blue_right" />
        <img
          src={ellipse_blue_top_left}
          alt=""
          className="ellipse_blue_top_left"
        />
        <img src={ellipse_cir_top} alt="" className="ellipse_cir_top" />
        <img src={ellipse_cir_left} alt="" className="ellipse_cir_left" />
        <img
          src={ellipse_cir_right}
          alt=""
          className={
            props.heroButton ? "ellipse_cir_right" : "ellipse_cir_right_short"
          }
        />
        <img
          src={ellipse_cir_right_most}
          alt=""
          className="ellipse_cir_right_most"
        />
        <h1>{props.mainText}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        {props.heroButton ? (
          <button className="hero-button">Find out more</button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Hero;
