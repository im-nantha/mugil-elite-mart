import React from "react";
import "./PartnersCarousel.scss";
import PartnersData1 from "../../data/homepage/partners.json";
import PartnersData2 from "../../data/homepage/second-partners.json";

const PartnersCarousel = () => {
  const { logos1 } = PartnersData1;
  const { logos2 } = PartnersData2;

  return (
    <div className="mugil-container partners-carousel">
      <h2 className="section-title">Our Partners</h2>

      {/* Row 1 - left to right */}
      <div className="logos-row">
        <div className="logos-track">
          {[...logos1, ...logos1].map((logo, idx) => (
            <div key={idx} className="logo-card">
              <img src={logo} alt={`Partner ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - right to left */}
      <div className="logos-row">
        <div className="logos-track">
          {[...logos2, ...logos2].map((logo, idx) => (
            <div key={idx} className="logo-card">
              <img src={logo} alt={`Partner ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersCarousel;
