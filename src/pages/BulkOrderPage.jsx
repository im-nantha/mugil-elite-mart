import React from "react";
import TextBanner from "../components/TextBanner/TextBanner";

const BuldOrder = () => {
  return (
    <div>
      <main>
        <TextBanner bannerText={"Bulk Orders"} />
        <div className="mugil-container">
          <p className="pb-4">
            “Premium home improvement products available for bulk orders at competitive rates.”
          </p>
          <p className="pb-4">
            “Mugil Elite Mart caters to bulk orders for plywood, glass, doors, locks, and bathroom/kitchen fittings. We provide reliable delivery and unmatched quality for businesses and contractors.”
          </p>
          <p className="pb-4">
            “Partner with Mugil Elite Mart for your bulk order requirements. From plywood, doors, and glass to digital locks, modular kitchen solutions, and bathroom fittings, we ensure high-quality products, competitive pricing, and timely delivery. Ideal for contractors, builders, and retailers seeking trusted home improvement solutions.”
          </p>
        </div>
      </main>
    </div>
  );
}

export default BuldOrder;
