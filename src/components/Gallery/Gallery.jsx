import React from "react";
import "./Gallery.scss";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import GalleryData from "../../data/homepage/gallery-data.json";

const Gallery = ({ storeTitle, images = GalleryData }) => {
  const [ref, isVisible] = useRevealOnScroll();
  return (
    <div className="gallery">
      {storeTitle && (
        <div className="sbc-title">
          <h2 className="text-center py-2">{storeTitle}</h2>
        </div>
      )}

      <div className="sbc-container">
        {images.map((item, index) => (
          <div className="sbc-cards" key={item.id || index}>
            <div className="sbc-card-img-wrapper">
              <img src={item.imagePath} alt={`gallery-${item.id}`} loading="lazy" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
