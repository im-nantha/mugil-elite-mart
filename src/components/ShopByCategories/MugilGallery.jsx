import React from "react";
import "./MugilGallery.scss"; // renamed SCSS file
import shop1 from "../../assets/images/shop-by-category/door.jpg";
import shop2 from "../../assets/images/shop-by-category/kitchen.jpg";
import shop3 from "../../assets/images/shop-by-category/solutions.jpg";
import shop4 from "../../assets/images/shop-by-category/electricals.jpg";

const MugilGallery = () => {
  return (
    <section className="mugil-gallery">
      <div className="sbc-title">
        <h2 className="text-center py-2 pt-5">Shop by Categories</h2>
      </div>

      <div className="mugil-gallery-wrapper">
        {/* First Big Box */}
        <div href="#" className="mg-boxes mg-first">
          <div className="mg-static">
            <img
              className="mg-img"
              src={shop1}
              alt="Gallery 1"
            />
          </div>
          <div className="mg-dynamic">
            <img
              className="mg-img"
              src={shop2}
              alt="Gallery Hover 1"
            />
          </div>
        </div>

        {/* Middle Two Small Boxes */}
        <div className="mg-second">
          <div href="#" className="mg-boxes">
            <div className="mg-static">
              <img
                className="mg-img"
                src={shop2}
                alt="Gallery 2"
              />
            </div>
            <div className="mg-dynamic">
              <img
                className="mg-img"
                src={shop3}
                alt="Gallery Hover 2"
              />
            </div>
          </div>
          <div href="#" className="mg-boxes">
            <div className="mg-static">
              <img
                className="mg-img"
                src={shop3}
                alt="Gallery 3"
              />
            </div>
            <div className="mg-dynamic">
              <img
                className="mg-img"
                src={shop4}
                alt="Gallery Hover 3"
              />
            </div>
          </div>
        </div>

        {/* Last Big Box */}
        <div href="#" className="mg-boxes mg-last">
          <div className="mg-static">
            <img
              className="mg-img"
              src={shop4}
              alt="Gallery 4"
            />
          </div>
          <div className="mg-dynamic">
            <img
              className="mg-img"
              src={shop1}
              alt="Gallery Hover 4"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MugilGallery;
