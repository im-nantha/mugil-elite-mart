import React from "react";
import "./ImageBanner.scss";
import image from "../../assets/images/about-us/vasi-logo-circle.png";

function ImageBanner() {
  return (
    <section className="mugil-about-banner mugil-container">
      <div className="mugil-about-banner__circle">
        <div className="mugil-about-banner__circle-text">
          <img src={image} className="rotate-360" />
        </div>
      </div>

      <div className="mugil-about-banner__content">
        <h1 className="mugil-about-banner__title">
          High-Quality Materials for Homes and Businesses.
        </h1>

      </div>
      <div className="mugil-about-banner__stats__wrapper">

        <div className="mugil-about-banner__stats">
          <div className="mugil-about-banner__stat">
            <h2>25 years of trusted experience</h2>
            <p>we have been delivering top-notch home solutions across Tamil Nadu.</p>
          </div>
        </div>
        <hr />
        <p className="mugil-about-banner__desc">
          Mugil Elite Mart was founded with a single vision: to provide comprehensive, high-quality home improvement solutions for every space.
        </p>
      </div>
    </section>
  );
}

export default ImageBanner;
