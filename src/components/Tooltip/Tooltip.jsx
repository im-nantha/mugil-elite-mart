import React from "react";
import { Link } from "react-router-dom";
import "./Tooltip.scss";
import shop1 from "../../assets/images/shop-by-category/door.jpg";
import shop2 from "../../assets/images/shop-by-category/kitchen.webp";
import shop3 from "../../assets/images/shop-by-category/solutions.jpg";
import shop4 from "../../assets/images/shop-by-category/electricals.jpg";
import shop5 from "../../assets/images/shop-by-category/plywood.png";


const Tooltip = () => {
  return (
    <div className="mugil-tooltip">
      <div className="mugil-tooltip-wrapper">
        <Link to="/home-decor#glassware" className="tooltip-items">
          <div className="tooltip-img-wrapper">
            <img src={shop1} alt="images" />
          </div>
          <div className="tooltip-text-wrapper">
            <p className="text-center">Glassware</p>
          </div>
        </Link>
        <Link to="/home-decor#mirrors" className="tooltip-items">
          <div className="tooltip-img-wrapper">
            <img src={shop2} alt="images" />
          </div>
          <div className="tooltip-text-wrapper">
            <p className="text-center">Mirrors</p>
          </div>
        </Link>
        <Link to="/home-decor#lights" className="tooltip-items">
          <div className="tooltip-img-wrapper">
            <img src={shop3} alt="images" />
          </div>
          <div className="tooltip-text-wrapper">
            <p className="text-center">Lights</p>
          </div>
        </Link>
        <Link to="/products#plywood" className="tooltip-items">
          <div className="tooltip-img-wrapper">
            <img src={shop4} alt="images" />
          </div>
          <div className="tooltip-text-wrapper">
            <p className="text-center">Plywood</p>
          </div>
        </Link>
        <Link to="/products#hardware" className="tooltip-items">
          <div className="tooltip-img-wrapper">
            <img src={shop5} alt="images" />
          </div>
          <div className="tooltip-text-wrapper">
            <p className="text-center">Hardware</p>
          </div>
        </Link>
      </div>
    </div >
  );
};

export default Tooltip;
