import React, { useState } from "react";
import "./Gallery.scss";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import GalleryData from "../../data/homepage/gallery-data.json";

const Gallery = ({ storeTitle, images = GalleryData, spacing = false, fourCards = false }) => {
  const [ref, isVisible] = useRevealOnScroll();

  // Popup state
  const [selectedImage, setSelectedImage] = useState(null);

  // When user clicks an image
  const handleImageClick = (imgPath) => {
    setSelectedImage(imgPath);
  };

  // Close popup
  const handleClosePopup = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div ref={ref} className={`gallery reveal ${isVisible ? "show" : ""}`}>
        {storeTitle && (
          <div className="sbc-title">
            <h2 className="text-center py-2 pb-4">{storeTitle}</h2>
          </div>
        )}

        <div className="sbc-container">
          {images.map((item, index) => (
            <div
              className={`sbc-cards ${spacing ? "padding" : ""} ${fourCards ? 'cards-4' : ''}`}
              key={item.id || index}
            >
              <div
                className="sbc-card-img-wrapper"
                onClick={() => handleImageClick(item.imagePath)}
              >
                <img
                  src={item.imagePath}
                  alt={`gallery-${item.id}`}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== Popup Modal ===== */}
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
              alt="Popup Image"
              className="fc-popup-image"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
