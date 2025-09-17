import React from "react";
import "./Gallery.scss";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

import gallery1 from "../../assets/images/gallery/1.jpg";
import gallery4 from "../../assets/images/gallery/2.jpg";
import gallery3 from "../../assets/images/gallery/3.jpg";
import gallery2 from "../../assets/images/gallery/4.jpg";
import gallery5 from "../../assets/images/gallery/9.jpg";
import gallery6 from "../../assets/images/gallery/6.jpg";
import gallery7 from "../../assets/images/gallery/7.jpg";
import gallery8 from "../../assets/images/gallery/8.jpg";
import gallery9 from "../../assets/images/gallery/5.jpg";
import gallery10 from "../../assets/images/gallery/10.jpg";

const Gallery = () => {
  const [ref, isVisible] = useRevealOnScroll();
  return (
    <div className="gallery">
      <div className="sbc-title">
        <h2 className="text-center py-2">Our Store</h2>
      </div>
      <div className="sbc-container">
        <div className="sbc-cards">
          <div className="sbc-card-img-wrapper">
            <img src={gallery1} alt="images" />
          </div>
        </div>
        <div className="sbc-cards">
          <div className="sbc-card-img-wrapper">
            <img src={gallery2} alt="images" />
          </div>
        </div>
        <div className="sbc-cards">
          <div className="sbc-card-img-wrapper">
            <img src={gallery3} alt="images" />
          </div>
        </div>
        <div className="sbc-cards">
          <div className="sbc-card-img-wrapper">
            <img src={gallery4} alt="images" />
          </div>
        </div>
        <div className="sbc-cards">
          <div className="sbc-card-img-wrapper">
            <img src={gallery5} alt="images" />
          </div>
        </div>
        <div className="sbc-cards">
          <div className="sbc-card-img-wrapper">
            <img src={gallery6} alt="images" />
          </div>
        </div>
        <div className="sbc-cards">
          <div className="sbc-card-img-wrapper">
            <img src={gallery7} alt="images" />
          </div>
        </div>
        <div className="sbc-cards">
          <div className="sbc-card-img-wrapper">
            <img src={gallery8} alt="images" />
          </div>
        </div>
        <div className="sbc-cards">
          <div className="sbc-card-img-wrapper">
            <img src={gallery9} alt="images" />
          </div>
        </div>
        <div className="sbc-cards">
          <div className="sbc-card-img-wrapper">
            <img src={gallery10} alt="images" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
