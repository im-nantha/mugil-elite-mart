import React from "react";
import TextBanner from "../components/TextBanner/TextBanner";
import ContactForm from "../components/ContactForm/ContactForm";
import BulkOrderForm from "../components/BulkOrderForm/BulkOrderForm";

const BuldOrder = () => {
  return (
    <div>
      <main>
        <TextBanner bannerText={"Bulk Orders"} />
        {/* <div className="mugil-container">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 p-3 bg-light">
                <h3 className="pb-4">
                  Premium home improvement products available for bulk orders at competitive rates.
                </h3>
              </div>
              <div className="col-12 col-md-6 p-3 bg-secondary text-white">
                <p className="pb-4">
                  Mugil Elite Mart caters to bulk orders for plywood, glass, doors, locks, and bathroom/kitchen fittings. We provide reliable delivery and unmatched quality for businesses and contractors.
                </p>
                <p className="pb-4">
                  Partner with Mugil Elite Mart for your bulk order requirements. From plywood, doors, and glass to digital locks, modular kitchen solutions, and bathroom fittings, we ensure high-quality products, competitive pricing, and timely delivery. Ideal for contractors, builders, and retailers seeking trusted home improvement solutions.
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="mugil-container">
          <BulkOrderForm />
        </div>
      </main>
    </div>
  );
}

export default BuldOrder;
