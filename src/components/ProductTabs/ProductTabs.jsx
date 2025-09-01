import React, { useState } from "react";
import "./ProductTabs.scss";
import FeaturedCollections from "../FeaturedCollections/FeaturedCollections";
import Doors from "../../data/FeaturedCollection.json";
import AsianPaints from "../../data/tabdata/asian-paints.json";
import Locks from "../../data/tabdata/locks.json";

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
          <FeaturedCollections data={Locks} />
        </div>
        <div
          className={`tab-pane ${activeTab === "second" ? "active" : "d-none"}`}
        >
          <FeaturedCollections data={AsianPaints} />
        </div>
        <div
          className={`tab-pane ${activeTab === "third" ? "active" : "d-none"}`}
        >
          <FeaturedCollections data={Doors} />
        </div>
      </div>
    </div>
  );
};

export default ProductTabs;
