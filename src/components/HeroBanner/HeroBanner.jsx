import React from "react";
import "./HeroBanner.scss";

const HeroBanner = ({ src, alt = "Hero Banner", link = null }) => {
  return (
    <div className="hero-banner">
      {link ? (<a href={link} target="_blank" title="click here">
        <img src={src} alt={alt} className="hero-banner__img" loading="lazy" />
      </a>) : (
        <div className="w-100">
          <img src={src} alt={alt} className="hero-banner__img" loading="lazy" />
        </div>
      )}
    </div>
  );
};

export default HeroBanner;
