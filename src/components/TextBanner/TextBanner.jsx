import React from "react";
import './TextBanner.scss';

function TextBanner({ bannerText }) {
  return (
    <section className="text-banner-wrapper">
      <div className="text-banner">
        <div className="container">
          <div className="text-center text-banner-width">
            <h1 className="title">{bannerText}</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TextBanner;
