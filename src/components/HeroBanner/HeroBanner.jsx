import React from "react";
import "./HeroBanner.scss";

const HeroBanner = ({ src, alt = "Hero Banner" }) => {
  return (
    <div className="hero-banner">
      <img src={src} alt={alt} className="hero-banner__img" loading="lazy" />
    </div>
  );
};

export default HeroBanner;
