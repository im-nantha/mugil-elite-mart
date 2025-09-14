import React from "react";
import "./StaticBanner.scss";
import staticbanner from "../../assets/images/shop-banner.jpg";


const StaticBanner = () => {
  return (
    <div className="static-banner">
      <div className="static-wrapper">
        <div className="static-image-wrapper">
          <img src={staticbanner} alt="image" className="static-img" />
        </div>
      </div>
      <div className="static-wrapper">
        <div className="static-content-wrapper">
          <div className="static-content">
            <h2>Building Dreams, Delivering Quality</h2>
            <p>We provide top-quality materials and home solutions that turn your visions into reality.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaticBanner;
