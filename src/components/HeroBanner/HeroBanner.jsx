import React from "react";
import "./HeroBanner.scss";

const HeroBanner = ({ src, alt = "Hero Banner" }) => {
  return (
    <div className="hero-banner">
      <div className="sbc-title">
        <h2 className="text-center py-4">In collab with Godrej</h2>
      </div>
      <img src={src} alt={alt} className="hero-banner__img" loading="lazy" />
    </div>
  );
};

export default HeroBanner;
