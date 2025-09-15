import React from "react";
import "./ImageBanner.scss";
import banner1 from "../../assets/images/banners/banner-1.jpg";
// import webimage from "https://themesflat.co/html/vineta/images/section/about.jpg";
// import mobileimage from "https://themesflat.co/html/vineta/images/section/about.jpg";


const ImageBanner = ({ image }) => {
  return (
    <div className="image-banner">
      <div className="image-banner-wrapper">
        <img className="d-md-block d-none" src={image ? image : banner1} alt="banner" />
        <img className="d-md-none d-block" src={image ? image : banner1} alt="banner" />
      </div>
    </div>
  );
};

export default ImageBanner;
