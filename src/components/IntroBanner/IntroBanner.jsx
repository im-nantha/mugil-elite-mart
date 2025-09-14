import React from "react";
import "./IntroBanner.scss";
import img1 from "../../assets/images/intro-banner/glass.jpg";
import img2 from "../../assets/images/intro-banner/plywood.jpg";
import img3 from "../../assets/images/intro-banner/bath.jpg";


const IntroBanner = () => {
  return (
    <div className="intro-banner mugil-container pt-0">
      <div className="intro-banner-wrapper">
        <div className="intro-banner-items">
          <div className="intro-image">
            <img src={img1} />
          </div>
          <div className="intro-text">
            <h4 className="intro-title">
              Glass & Mirror Creations
            </h4>
            {/* <a href="#" className="intro-redirect">Explore</a> */}
          </div>
        </div>
        <div className="intro-banner-items">
          <div className="intro-image">
            <img src={img2} />
          </div>
          <div className="intro-text">
            <h4 className="intro-title">
              Premium Plywood & Wall Solutions
            </h4>
            {/* <a href="#" className="intro-redirect">Explore</a> */}
          </div>
        </div>
        <div className="intro-banner-items">
          <div className="intro-image">
            <img src={img3} />
          </div>
          <div className="intro-text">
            <h4 className="intro-title">
              Bath Elegance & Accessories
            </h4>
            {/* <a href="#" className="intro-redirect">Explore</a> */}
          </div>
        </div>
      </div>
    </div >
  );
};

export default IntroBanner;
