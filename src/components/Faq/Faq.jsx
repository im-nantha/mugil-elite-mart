import React from "react";
import "./Faq.scss";


const Faq = () => {
  return (
    <section className="mugil-container">
      <div className="sbc-title">
        <h2 className="text-center pt-2 pb-5">FAQ's</h2>
      </div>
      <div className="accordion" id="accordionExample">
        {/* FAQ 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              1. What types of plywood does Mugil Elite Mart offer?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              We provide a wide range of plywood including BWP, Marine, Commercial,
              Fire Retardant, Laminated, Acrylic, PVC, HDMR, and Block Boards
              suitable for furniture, interiors, and construction.
            </div>
          </div>
        </div>

        {/* FAQ 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              2. Does Mugil Elite Mart supply glass for doors and windows?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Yes, we offer tempered, frosted, laminated, acoustic, stained,
              double-glazed, fluted, and custom design glass for residential and
              commercial projects.
            </div>
          </div>
        </div>

        {/* FAQ 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              3. What kinds of doors are available at Mugil Elite Mart?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Our collection includes wooden, flush, PVC, glass panel, laminated,
              sliding, WPC, UV-coated, and steel security doors for every design and
              security need.
            </div>
          </div>
        </div>

        {/* FAQ 4 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFour">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              4. Can I purchase digital and fingerprint locks from Mugil Elite Mart?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Absolutely! We supply digital locks, fingerprint/face recognition locks,
              lever locks, mortise locks, cylindrical locks, and rose mortise locks
              for homes and offices.
            </div>
          </div>
        </div>

        {/* FAQ 5 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingFive">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              5. What bathroom products and accessories are available?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              We provide showers, faucets, basin mixers, towel racks, soap holders,
              mirror cabinets, and other premium bath accessories designed for both
              style and functionality.
            </div>
          </div>
        </div>

        {/* FAQ 6 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSix">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              6. Does Mugil Elite Mart offer modular kitchen solutions?
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Yes, our range includes modular kitchen accessories, tandem boxes,
              kitchen baskets, SS baskets, shutters, and profiles for furniture to
              suit modern kitchens.
            </div>
          </div>
        </div>

        {/* FAQ 7 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingSeven">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              7. What kind of electrical products can I get?
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse collapse"
            aria-labelledby="headingSeven"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              We offer modular switches, smart switches, WiFi-enabled switches,
              dimmer switches, USB panels, LED bulbs, smart bulbs, ceiling/wall/table
              fans, and exhaust fans.
            </div>
          </div>
        </div>

        {/* FAQ 8 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingEight">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
              aria-expanded="false"
              aria-controls="collapseEight"
            >
              8. Are paints and adhesives available at Mugil Elite Mart?
            </button>
          </h2>
          <div
            id="collapseEight"
            className="accordion-collapse collapse"
            aria-labelledby="headingEight"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Yes, we stock emulsion, enamel, texture, distemper, wood coatings,
              waterproof paints, primers, spray paints, and adhesives from Fevicol,
              Arlod, and Asian Paints.
            </div>
          </div>
        </div>

        {/* FAQ 9 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingNine">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
              aria-expanded="false"
              aria-controls="collapseNine"
            >
              9. Does Mugil Elite Mart provide delivery for bulk and retail orders?
            </button>
          </h2>
          <div
            id="collapseNine"
            className="accordion-collapse collapse"
            aria-labelledby="headingNine"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              We offer timely delivery services for both individual and bulk orders,
              ensuring products reach customers safely, on time, and in perfect
              condition.
            </div>
          </div>
        </div>

        {/* FAQ 10 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTen">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTen"
              aria-expanded="false"
              aria-controls="collapseTen"
            >
              10. Why should I choose Mugil Elite Mart for my home or commercial
              project?
            </button>
          </h2>
          <div
            id="collapseTen"
            className="accordion-collapse collapse"
            aria-labelledby="headingTen"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              With 25 years of expertise, a wide product range, trusted brands,
              quality assurance, and customer-centric service, Mugil Elite Mart is
              your one-stop destination for all home improvement solutions.
            </div>
          </div>
        </div>
      </div>

    </section >
  );
};

export default Faq;
