import React from "react";
import "./DoubleBanner.scss";
import first from "../../assets/images/banners/left-kanban.png";
import second from "../../assets/images/banners/right-kanban.png";

const DoubleBanner = () => {
  return (
    <div className="hero-banner">
      <div className="sbc-title">
        <h2 className="text-center">In collab with Kanban B</h2>
      </div>

      <div className="kanban-banner w-100 d-flex">
        <div className="left">
          <img src={first} alt="banner" className="hero-banner__img" loading="lazy" />

        </div>
        <div className="right">
          <img src={second} alt="banner" className="hero-banner__img" loading="lazy" />

        </div>
      </div>
    </div>
  );
};

export default DoubleBanner;
