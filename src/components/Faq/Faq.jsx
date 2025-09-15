import React from "react";
import "./Faq.scss";


const Faq = () => {
  return (
    <section className="mugil-container">
      <div className="sbc-title">
        <h2 className="text-center pt-2 pb-5">FAQ's</h2>
      </div>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              1. What types of plywood does Mugil Elite Mart offer?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              We provide a wide range of plywood including BWP, Marine, Commercial, Fire Retardant, Laminated, Acrylic, PVC, HDMR, and Block Boards suitable for furniture, interiors, and construction.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              2. Does Mugil Elite Mart supply glass for doors and windows?
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Yes, we offer tempered, frosted, laminated, acoustic, stained, double-glazed, fluted, and custom design glass for residential and commercial projects.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              3. What kinds of doors are available at Mugil Elite Mart?
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Our collection includes wooden, flush, PVC, glass panel, laminated, sliding, WPC, UV-coated, and steel security doors for every design and security need.
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Faq;
