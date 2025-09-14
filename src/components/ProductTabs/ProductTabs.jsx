import React, { useState } from "react";
import "./ProductTabs.scss";
import FeaturedCollections from "../FeaturedCollections/FeaturedCollections";
import Doors from "../../data/FeaturedCollection.json";
import AsianPaints from "../../data/tabdata/asian-paints.json";
import Lights from "../../data/homepage/Lights.json";
import Glassware from "../../data/product-collections/glassware.json";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("first");

  return (
    <div className="product-tabs mugil-container">
      {/* Tab navigation */}
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "first" ? "active" : ""}`}
            onClick={() => setActiveTab("first")}
          >
            <h2>Lighting</h2>
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "second" ? "active" : ""}`}
            onClick={() => setActiveTab("second")}
          >
            <h2>Paints & Adhesives</h2>
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "third" ? "active" : ""}`}
            onClick={() => setActiveTab("third")}
          >
            <h2>Bath Elegance</h2>
          </button>
        </li>
      </ul>

      {/* Tab content (mounted once, just hidden/shown) */}
      <div className="tab-content">
        <div
          className={`tab-pane ${activeTab === "first" ? "active" : "d-none"}`}
        >
          <FeaturedCollections data={Lights} isHomepage={true} isSquare={true} />
        </div>
        <div
          className={`tab-pane ${activeTab === "second" ? "active" : "d-none"}`}
        >
          <FeaturedCollections data={AsianPaints} isHomepage={true} isSquare={true} />
        </div>
        <div
          className={`tab-pane ${activeTab === "third" ? "active" : "d-none"}`}
        >
          <FeaturedCollections data={Glassware} isHomepage={true} isSquare={true} />
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
