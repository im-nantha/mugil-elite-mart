import React, { useState } from "react";
import "./IntroBanner.scss";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import img1 from "../../assets/images/intro-banner/glass.jpg";
import img2 from "../../assets/images/intro-banner/plywood.jpg";
import img3 from "../../assets/images/intro-banner/bath.jpg";

const IntroBanner = () => {
  const [ref, isVisible] = useRevealOnScroll();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState("");

  const handleItemClick = (img, title) => {
    setSelectedImage(img);
    setSelectedTitle(title);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
    setSelectedTitle("");
  };

  return (
    <>
      <div
        ref={ref}
        className={`intro-banner mugil-container pt-0 mugil-container reveal ${isVisible ? "show" : ""
          }`}
      >
        <div className="intro-banner-wrapper">
          <div
            className="intro-banner-items"
            onClick={() =>
              handleItemClick(img1, "Glass & Mirror Creations")
            }
          >
            <div className="intro-image">
              <img src={img1} alt="Glass & Mirror Creations" />
            </div>
            <div className="intro-text">
              <h4 className="intro-title">Glass & Mirror Creations</h4>
            </div>
          </div>

          <div
            className="intro-banner-items"
            onClick={() =>
              handleItemClick(img2, "Premium Plywood & Wall Solutions")
            }
          >
            <div className="intro-image">
              <img src={img2} alt="Premium Plywood & Wall Solutions" />
            </div>
            <div className="intro-text">
              <h4 className="intro-title">Premium Plywood & Wall Solutions</h4>
            </div>
          </div>

          <div
            className="intro-banner-items"
            onClick={() =>
              handleItemClick(img3, "Bath Elegance & Accessories")
            }
          >
            <div className="intro-image">
              <img src={img3} alt="Bath Elegance & Accessories" />
            </div>
            <div className="intro-text">
              <h4 className="intro-title">Bath Elegance & Accessories</h4>
            </div>
          </div>
        </div>


      </div>
      {/* Popup Modal */}
      {selectedImage && (
        <div className="fc-popup-overlay" onClick={handleClosePopup}>
          <div
            className="fc-popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="fc-popup-close" onClick={handleClosePopup}>
              &times;
            </button>
            <img
              src={selectedImage}
              alt={selectedTitle}
              className="fc-popup-image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default IntroBanner;
