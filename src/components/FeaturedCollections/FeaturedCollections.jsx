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
        {/* <div className="fc-text-wrapper">
          <p className="fc-price-title">{productName}</p>
          {productRate && (<p className="fc-price">{productRate}</p>)}
        </div> */}
      </div>
    </div>
  );
};

const FeaturedCollections = ({ data = DefaultFeaturedCollectionData, isHomepage = false }) => {
  return (
    <section className="mugil-fc-container pt-4">
      <div className="mugil-fc-wrapper">
        {isHomepage === true ? (
          data.slice(0, 4).map((item, index) => (
            <FeaturedCollectionCards
              key={index}
              productImagePath={item?.productImagePath}
            />
          ))
        ) : (
          data.map((item, index) => (
            <FeaturedCollectionCards
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