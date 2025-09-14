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
            <a href="https://youtube.com/@vasiglass2288?si=6ZjOLie23uTgAeAP" target="_blank" className="footer-icons-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
              </svg>
            </a>
            <a href="https://api.whatsapp.com/send?phone=9894487698&text=Hi%20Murugan"
              target="_blank" className="footer-icons-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
              </svg>
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
