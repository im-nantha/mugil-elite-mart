import React from "react";
import "./ShopByCategories.scss";


const ShopByCategories = () => {
  return (
    <div className="shop-by-categories">
      <div className="sbc-title">
        <h2 className="text-center py-4">Shop by Categories</h2>
      </div>
      <div className="sbc-container">
        <div className="sbc-cards">
          <div className="sbc-card-img-wrapper">
            <img src="https://themesflat.co/html/vineta/images/cls-categories/florist/cate-1.jpg" alt="images" />
          </div>
          <div className="sbc-card-text-wrapper">
            <p className="text-center">Designer Doors</p>
          </div>
        </div>
        <div className="sbc-cards">
          <div className="sbc-card-img-wrapper">
            <img src="https://themesflat.co/html/vineta/images/cls-categories/florist/cate-2.jpg" alt="images" />
          </div>
          <div className="sbc-card-text-wrapper">
            <p className="text-center">Kitchen</p>
          </div>
        </div>
        <div className="sbc-cards">
          <div className="sbc-card-img-wrapper">
            <img src="https://themesflat.co/html/vineta/images/cls-categories/florist/cate-3.jpg" alt="images" />
          </div>
          <div className="sbc-card-text-wrapper">
            <p className="text-center">Modular Solutions</p>
          </div>
        </div>
        <div className="sbc-cards">
          <div className="sbc-card-img-wrapper">
            <img src="https://themesflat.co/html/vineta/images/cls-categories/florist/cate-4.jpg" alt="images" />
          </div>
          <div className="sbc-card-text-wrapper">
            <p className="text-center">Electricals</p>
          </div>
        </div>
        <div className="sbc-cards">
          <div className="sbc-card-img-wrapper">
            <img src="https://themesflat.co/html/vineta/images/cls-categories/florist/cate-5.jpg" alt="images" />
          </div>
          <div className="sbc-card-text-wrapper">
            <p className="text-center">Plywood</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategories;
