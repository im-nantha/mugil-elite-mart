import React from "react";
import DefaultFeaturedCollectionData from "../../data/FeaturedCollection.json";
import "./FeaturedCollections.scss";
import useRevealOnScroll from "../../hooks/useRevealOnScroll"

const FeaturedCollectionCards = ({ productName, productImagePath, isSquare }) => {
  const [ref, isVisible] = useRevealOnScroll();
  return (
    <div ref={ref}
      className={`mugil-fc-product mugil-container reveal ${isVisible ? "show" : ""} ${isSquare ? 'square' : ''}`}>
      <div className="fc-img-wrapper-link">
        <div className="fc-img-wrapper">
          <img loading="lazy" src={productImagePath} alt={productName} />
        </div>
        {/* <div className="fc-text-wrapper">
          <p className="fc-price-title">{productName}</p>
          {productRate && (<p className="fc-price">{productRate}</p>)}
        </div> */}
      </div>
    </div>
  );
};

const FeaturedCollections = ({ data = DefaultFeaturedCollectionData, isHomepage = false, isSquare = false }) => {
  return (
    <section className="mugil-fc-container pt-4">
      <div className="mugil-fc-wrapper homepage">
        {isHomepage === true ? (
          data.slice(0, 5).map((item, index) => (
            <FeaturedCollectionCards
              isSquare={isSquare}
              key={index}
              productImagePath={item?.productImagePath}
            />
          ))
        ) : (
          data.map((item, index) => (
            <FeaturedCollectionCards
              isSquare={isSquare}
              key={index}
              productImagePath={item?.productImagePath}
            />
          ))
        )}
      </div>

    </section>
  );
};

export default FeaturedCollections;