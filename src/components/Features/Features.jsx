import React from "react";
import "./Features.scss";
import useRevealOnScroll from "../../hooks/useRevealOnScroll"


const Features = () => {

  const [ref, isVisible] = useRevealOnScroll();

  return (
    <div ref={ref}
      className={`features mugil-container reveal ${isVisible ? "show" : ""}`}>
      <div className="features-card-wrapper">
        <div className="features-card">
          <div className="custom-card">
            <div className="d-flex align-items-start gap-3">
              <div className="icon-round">
                <i className="bi bi-truck"></i>
              </div>
              <div className="content">
                <h6 className="card-title">Timely Delivery</h6>
                <p className="card-desc">Fast • Reliable • Consistent</p>
              </div>
            </div>
          </div>
        </div>
        <div className="features-card">
          <div className="custom-card">
            <div className=" d-flex align-items-start gap-3">
              <div className="icon-round">
                <i className="bi bi-gift"></i>

              </div>
              <div className="content">
                <h6 className="card-title">Budget Friendly Pricing</h6>
                <p className="card-desc">Affordable • Transparent • Fair</p>
              </div>
            </div>
          </div>
        </div>
        <div className="features-card">
          <div className="custom-card">
            <div className=" d-flex align-items-start gap-3">
              <div className="icon-round">
                <i className="bi bi-arrow-repeat"></i>

              </div>
              <div className="content">
                <h6 className="card-title">Wide Product Range</h6>
                <p className="card-desc">Diverse • Complete • Versatile</p>
              </div>
            </div>
          </div>
        </div>
        <div className="features-card">
          <div className="custom-card">
            <div className=" d-flex align-items-start gap-3">
              <div className="icon-round">
                <i className="bi bi-headset"></i>

              </div>
              <div className="content">
                <h6 className="card-title">Trusted Brand Partners</h6>
                <p className="card-desc">Recognized • Reliable • Proven</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Features;
