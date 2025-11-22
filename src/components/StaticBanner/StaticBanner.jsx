import React from "react";
import "./StaticBanner.scss";
import staticbanner from "../../assets/images/mugil-shop.jpeg";
import useRevealOnScroll from "../../hooks/useRevealOnScroll"


const StaticBanner = () => {
  const [ref, isVisible] = useRevealOnScroll();
  return (
    <div ref={ref}
      className="static-banner mugil-container">
      <div className="static-wrapper">
        <div ref={ref}
          className={`static-image-wrapper reveal ${isVisible ? "show" : ""}`}>
          <img src={staticbanner} alt="image" className="static-img" />
        </div>
      </div>
      <div className="static-wrapper">
        <div ref={ref}
          className={`static-content-wrapper reveal ${isVisible ? "show" : ""}`}>
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
