import React from "react";
import DefaultFeaturedCollectionData from "../../data/FeaturedCollection.json";
import "./FeaturedCollections.scss";

const FeaturedCollectionCards = ({ productName, productImagePath, productRate }) => {
  return (
    <div className="mugil-fc-product">
      <div className="fc-img-wrapper-link">
        <div className="fc-img-wrapper">
          <img src={productImagePath} alt={productName} />
        </div>
        <div className="fc-text-wrapper">
          <p className="fc-price-title">{productName}</p>
          {productRate && (<p className="fc-price">{productRate}</p>)}
        </div>
      </div>
    </div>
  );
};

const FeaturedCollections = ({ data = DefaultFeaturedCollectionData }) => {
  return (
    <section className="mugil-fc-container">
      <div className="mugil-fc-wrapper">
        {data.slice(0, 5).map((item, index) => (
          <FeaturedCollectionCards
            key={index}
            productName={item?.productName}
            productImagePath={item?.productImagePath}
            productRate={item?.productRate}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCollections;