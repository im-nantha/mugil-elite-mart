import React from "react";
import "./Tooltip.scss";
import shop1 from "../../assets/images/browse-category/1.jpg";
import shop2 from "../../assets/images/browse-category/2.jpg";
import shop3 from "../../assets/images/browse-category/3.jpg";
import shop4 from "../../assets/images/browse-category/4.jpg";
import shop5 from "../../assets/images/browse-category/5.jpg";


const Tooltip = () => {
  return (
    <div className="mugil-tooltip">
      <div className="mugil-tooltip-wrapper">
        <a href="/mugil-elite-mart/home-decor#glassware" className="tooltip-items">
          <div className="tooltip-img-wrapper">
            <img src={shop1} alt="images" />
          </div>
          <div className="tooltip-text-wrapper">
            <p className="text-center">Glassware</p>
          </div>
        </a>
        <a href="/mugil-elite-mart/home-decor#mirrors" className="tooltip-items">
          <div className="tooltip-img-wrapper">
            <img src={shop2} alt="images" />
          </div>
          <div className="tooltip-text-wrapper">
            <p className="text-center">Mirrors</p>
          </div>
        </a>
        <a href="/mugil-elite-mart/home-decor#lights" className="tooltip-items">
          <div className="tooltip-img-wrapper">
            <img src={shop3} alt="images" />
          </div>
          <div className="tooltip-text-wrapper">
            <p className="text-center">Lights</p>
          </div>
        </a>
        <a href="/mugil-elite-mart/products#door-handles" className="tooltip-items">
          <div className="tooltip-img-wrapper">
            <img src={shop4} alt="images" />
          </div>
          <div className="tooltip-text-wrapper">
            <p className="text-center">Door Handles</p>
          </div>
        </a>
        <a href="/mugil-elite-mart/products#hardware" className="tooltip-items">
          <div className="tooltip-img-wrapper">
            <img src={shop5} alt="images" />
          </div>
          <div className="tooltip-text-wrapper">
            <p className="text-center">Hardware</p>
          </div>
        </a>
      </div>
    </div >
  );
};

export default Tooltip;
