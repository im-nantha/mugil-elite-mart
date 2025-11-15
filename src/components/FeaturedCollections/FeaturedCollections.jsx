import React, { useState } from "react";
import DefaultFeaturedCollectionData from "../../data/FeaturedCollection.json";
import "./FeaturedCollections.scss";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";

const FeaturedCollectionCards = ({ productName, productImagePath, isSquare, onImageClick }) => {
  const [ref, isVisible] = useRevealOnScroll();

  return (
    <div
      ref={ref}
      className={`mugil-fc-product mugil-container reveal ${isVisible ? "show" : ""} ${isSquare ? "square" : ""}`}
    >
      <div
        className="fc-img-wrapper-link"
        onClick={() => onImageClick(productImagePath, productName)}
      >
        <div className="fc-img-wrapper">
          <img loading="lazy" src={productImagePath} alt={productName} />
        </div>
        {productName && (
          <div className="fc-text-wrapper">
            <p className="fc-price-title">{productName}</p>
          </div>
        )}
      </div>
    </div>
  );
};

const FeaturedCollections = ({ data = DefaultFeaturedCollectionData, isHomepage = false, isSquare = false, isThreeCol = false }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedName, setSelectedName] = useState("");

  const handleImageClick = (image, name) => {
    setSelectedImage(image);
    setSelectedName(name);
  };

  const handleClosePopup = () => {
    setSelectedImage(null);
    setSelectedName("");
  };

  return (
    <section className="mugil-fc-container pt-4">
      <div className={`mugil-fc-wrapper homepage ${isThreeCol ? 'three-col' : ''}`}>
        {(isHomepage ? data.slice(0, 5) : data).map((item, index) => (
          <FeaturedCollectionCards
            isSquare={isSquare}
            key={index}
            productImagePath={item?.productImagePath}
            productName={item?.productName}
            onImageClick={handleImageClick}
          />
        ))}
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div className="fc-popup-overlay" onClick={handleClosePopup}>
          <div className="fc-popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="fc-popup-close" onClick={handleClosePopup}>
              &times;
            </button>
            <img src={selectedImage} alt={selectedName} className="fc-popup-image" />
          </div>
        </div>
      )}
    </section>
  );
};

export default FeaturedCollections;
