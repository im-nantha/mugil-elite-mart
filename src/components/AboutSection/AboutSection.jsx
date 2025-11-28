import React from "react";
import imageSrc from "../../assets/images/about-us/aboutus-left-banner.jpg";

const AboutSection = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={imageSrc}
            alt="Vasi Glass & Plywood"
            className="img-fluid rounded"
          />
        </div>

        {/* Content Section */}
        <div className="col-md-6">
          <div className="pl-md-4">
            <p className="mb-3">
              For over 25 years, <strong>Mr. Murugan</strong> and{" "}
              <strong>Ms. Ilanthendral</strong> have been shaping homes and
              workspaces with timeless quality and trust.
            </p>
            <p className="mb-3">
              From premium plywood to elegant glass designs, their craftsmanship
              has set a benchmark in interior perfection.
            </p>
            <p className="mb-3">
              Every product reflects passion, precision, and purpose — built to
              last and loved by customers.
            </p>
            <p className="mb-3">
              Their legacy stands not just in products, but in every satisfied
              smile they’ve created.
            </p>
            <p className="font-weight-bold mb-0">
              Vasi Glass & Plywoods -  Mugil Elite Mart, where experience meets excellence in every layer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
