import React from "react";
import "./ShopByCategories.scss";
import shop1 from "../../assets/images/shop-by-category/door.jpg";
import shop2 from "../../assets/images/shop-by-category/kitchen.jpg";
import shop3 from "../../assets/images/shop-by-category/solutions.jpg";
import shop4 from "../../assets/images/shop-by-category/electricals.jpg";
import shop5 from "../../assets/images/shop-by-category/plywood.png";

const ShopByCategories = () => {
  return (
    <div className="shop-by-categories mugil-container">
      <div className="sbc-title">
        <h2 className="text-center py-2">Shop by Categories</h2>
      </div>
      <div className="sbc-container">
        <div className="sbc-cards">
          <a className="sbc-card-img-wrapper" href="#">
            <img src={shop1} alt="images" />
          </a>
          <div className="sbc-card-text-wrapper">
            <p className="text-center">Designer Doors</p>
          </div>
        </div>
        <div className="sbc-cards">
          <a className="sbc-card-img-wrapper" href="#">
            <img src={shop2} alt="images" />
          </a>
          <div className="sbc-card-text-wrapper">
            <p className="text-center">Kitchen</p>
          </div>
        </div>
        <div className="sbc-cards">
          <a className="sbc-card-img-wrapper" href="#">
            <img src={shop3} alt="images" />
          </a>
          <div className="sbc-card-text-wrapper">
            <p className="text-center">Modular Solutions</p>
          </div>
        </div>
        <div className="sbc-cards">
          <a className="sbc-card-img-wrapper" href="#">
            <img src={shop4} alt="images" />
          </a>
          <div className="sbc-card-text-wrapper">
            <p className="text-center">Electricals</p>
          </div>
        </div>
        <div className="sbc-cards">
          <a className="sbc-card-img-wrapper" href="#">
            <img src={shop5} alt="images" />
          </a>
          <div className="sbc-card-text-wrapper">
            <p className="text-center">Plywood</p>
          </div>
        </div>
      </div >
    </div >
  );
};

export default ShopByCategories;
