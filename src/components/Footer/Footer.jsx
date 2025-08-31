import React from "react";
import "./Footer.scss";


const Footer = () => {
  return (
    <footer className="mugil-container w-100">
      <div className="footer-head">
        <div className="d-flex justify-content-between align-items-center flex-column flex-md-row">
          <h2>Mugil Elite Mart</h2>
          <div className="footer-icons">
            <a href="#" className="footer-icons-wrap">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="footer-icons-wrap">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="footer-icons-wrap">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#" className="footer-icons-wrap">
              <i className="bi bi-twitter-x"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-body">
        <div className="footer-body-wrapper">
          <div className="footer-body-link-container">
            <h5 className="card-title pb-4">Business Contact</h5>
            <ul className="footer-menu-list">
              <li>
                <a href="privacy-policy.html">123 Yarran st, Punchbowl, NSW 2196, Australia</a>
              </li>
              <li>
                <a href="term-and-condition.html">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="return-and-refund.html">Returns &amp; Refunds</a>
              </li>
              <li>
                <a href="faq.html">FAQ’s</a>
              </li>
              <li>
                <a href="shipping.html">Shipping</a>
              </li>
            </ul>
          </div>
          <div className="footer-body-link-container">
            <h5 className="card-title pb-4">Subscribe Newsletter</h5>
            <p className="card-text">We invite you to register to read the latest news, offers and events about our company. We promise not spam your inbox.</p>
          </div>
          <div className="footer-body-link-container">
            <div className="footer-body-sub">
              <div className="footer-body-link-subcontainer">
                <h5 className="card-title pb-4">About Us</h5>
                <ul className="footer-menu-list">
                  <li>
                    <a href="about-us.html">About Us</a>
                  </li>
                  <li>
                    <a href="contact-us.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="store-location.html">Our Store</a>
                  </li>
                  <li>
                    <a href="about-us.html">Our Story</a>
                  </li>
                </ul>
              </div>
              <div className="footer-body-link-subcontainer">
                <h5 className="card-title pb-4">Resource</h5>
                <ul className="footer-menu-list">
                  <li>
                    <a href="privacy-policy.html">Privacy Policies</a>
                  </li>
                  <li>
                    <a href="term-and-condition.html">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="return-and-refund.html">Returns &amp; Refunds</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ’s</a>
                  </li>
                  <li>
                    <a href="shipping.html">Shipping</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2025 by Mugil Elite mart. All Rights Reserved.</p>
      </div>
    </footer >
  );
};

export default Footer;
