import React from "react";
import { Link, NavLink } from "react-router-dom";
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
                <a href="privacy-policy.html">54, Near Tolgate, near, Chennai Salem Highway, oop.
                  admk office, Kallakurichi, Tamil Nadu 606202</a>
              </li>
            </ul>
          </div>
          <div className="footer-body-link-container">
            <h5 className="card-title pb-4">Your Trusted Home Solutions Partner</h5>
            <p className="card-text">Mugil Elite Mart provides a wide range of plywood, glass, bathroom fittings, kitchen accessories, and home décor products.
              We combine quality, variety, and affordability to cater to both retail and wholesale customers.</p>
          </div>
          <div className="footer-body-link-container">
            <div className="footer-body-sub">
              <div className="footer-body-link-subcontainer">
                <h5 className="card-title pb-4">Sitemap</h5>
                <ul className="footer-menu-list">
                  <li>
                    <a href="/mugil-elite-mart/">Home</a>
                  </li>
                  <li>
                    <a href="/mugil-elite-mart/home-decor">Home Decor</a>
                  </li>
                  <li>
                    <a href="/mugil-elite-mart/products">Interior Decorations</a>
                  </li>
                  <li>
                    <a href="/mugil-elite-mart/about">About Us</a>
                  </li>
                  <li>
                    <a href="/mugil-elite-mart/contact">Contact Us</a>
                  </li>
                  <li>
                    <a href="/mugil-elite-mart/bulk-orders">Bulk Order</a>
                  </li>
                </ul>
              </div>
              <div className="footer-body-link-subcontainer">
                <h5 className="card-title pb-4">Resource</h5>
                <ul className="footer-menu-list">
                  <li>
                    <a href="/mugil-elite-mart/privacy-policy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/mugil-elite-mart/terms-and-conditions">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="/mugil-elite-mart/security-policy">Security Policy</a>
                  </li>
                  <li>
                    <a href="/mugil-elite-mart/cancellation-policy">Cancellation & Returns Policy</a>
                  </li>
                  <li>
                    <a href="/mugil-elite-mart/grievance-policy">Grievance Redressal Policy</a>
                  </li>
                  <li>
                    <a href="/mugil-elite-mart/disclaimer-policy">Disclaimer & Liability Policy</a>
                  </li>
                  <li>
                    <a href="/mugil-elite-mart/cookie-policy">Cookie Policy</a>
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
