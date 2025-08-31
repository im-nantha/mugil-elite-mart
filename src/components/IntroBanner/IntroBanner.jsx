import React from "react";
import "./IntroBanner.scss";


const IntroBanner = () => {
  return (
    <div className="intro-banner mugil-container pt-0">
      <div className="intro-banner-wrapper">
        <div className="intro-banner-items">
          <div className="intro-image">
            <img src="https://themesflat.co/html/vineta/images/cls-categories/grid-cls/florist1.jpg" />
          </div>
          <div className="intro-text">
            <h4 className="intro-title">
              Glass & Mirror Creations
            </h4>
            <a href="#" className="intro-redirect">Explore</a>
          </div>
        </div>
        <div className="intro-banner-items">
          <div className="intro-image">
            <img src="https://themesflat.co/html/vineta/images/cls-categories/grid-cls/florist2.jpg" />
          </div>
          <div className="intro-text">
            <h4 className="intro-title">
              Premium Plywood & Wall Solutions
            </h4>
            <a href="#" className="intro-redirect">Explore</a>
          </div>
        </div>
        <div className="intro-banner-items">
          <div className="intro-image">
            <img src="https://themesflat.co/html/vineta/images/cls-categories/grid-cls/florist3.jpg" />
          </div>
          <div className="intro-text">
            <h4 className="intro-title">
              Bath Elegance & Accessories
            </h4>
            <a href="#" className="intro-redirect">Explore</a>
          </div>
        </div>
      </div>
    </div >
  );
};

export default IntroBanner;
