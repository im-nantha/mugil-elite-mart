import React from "react";
import "./ImageBanner.scss";
// import webimage from "https://themesflat.co/html/vineta/images/section/about.jpg";
// import mobileimage from "https://themesflat.co/html/vineta/images/section/about.jpg";


const ImageBanner = () => {
  return (
    <div className="image-banner">
      <div className="image-banner-wrapper">
        <img className="d-md-block d-none" src="https://themesflat.co/html/vineta/images/section/about.jpg" alt="banner" />
        <img className="d-md-none d-block" src="https://themesflat.co/html/vineta/images/section/about.jpg" alt="banner" />
      </div>
    </div>
  );
};

export default ImageBanner;
