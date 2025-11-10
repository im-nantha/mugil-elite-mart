import React from "react";
import "./HeroBanner.scss";

const HeroBanner = ({ src, alt = "Hero Banner" }) => {
  return (
    <div className="hero-banner">
      <a href="https://www.pluspointlocks.com/" target="_blank" title="click here">
        <img src={src} alt={alt} className="hero-banner__img" loading="lazy" />
      </a>
    </div>
  );
};

export default HeroBanner;
