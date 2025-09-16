import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.scss";
import footerlogo from "../../assets/images/mem-logo.png";


const Footer = () => {
  return (
    <footer className="mugil-container w-100">
      <div className="footer-head">
        <div className="d-flex justify-content-between align-items-center flex-column flex-md-row">
          <div className="d-flex align-items-center gap-2">
            <NavLink className="mugil-footer-logo-wrapper" to="/mugil-elite-mart/" >
              <img className="mugil-mart-img" alt="mugil-mart-logo" src={footerlogo} />
            </NavLink>
            <h2>Mugil Elite Mart</h2>
          </div>
        </div>
      </div>
      <div className="footer-body">
        <div className="footer-body-wrapper">
          <div className="footer-body-link-container">
            <h5 className="card-title pb-4">Business Contact</h5>
            <ul className="footer-menu-list">
              <li>54, Near Tolgate, near, Chennai Salem Highway, oop.
                admk office, Kallakurichi, Tamil Nadu 606202
              </li>
            </ul>
            <div className="footer-icons py-4">
              <a to="https://youtube.com/@vasiglass2288?si=6ZjOLie23uTgAeAP" target="_blank" className="footer-icons-wrap">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                  <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                </svg>
              </a>
              <a
                to="mailto:murugan@mugilelitemart.com"
                className="footer-icons-wrap"
              >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                  <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                </svg>
              </a>

              <a
                to="https://api.whatsapp.com/send?phone=9894487698&text=Hi%20Murugan"
                className="footer-icons-wrap"
                rel="noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                  <path fill="#fff" d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6	C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"></path><path fill="#fff" d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"></path><path fill="#cfd8dc" d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3	L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"></path><path fill="#40c351" d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8	l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"></path><path fill="#fff" fillRule="evenodd" d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0	s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3	c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9	c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8	c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
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
                    <NavLink to="/mugil-elite-mart/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mugil-elite-mart/home-decor">Home Decor</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mugil-elite-mart/products">Interior Decorations</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mugil-elite-mart/about">About Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mugil-elite-mart/contact">Contact Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mugil-elite-mart/bulk-orders">Bulk Orders</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mugil-elite-mart/faqs">Faq's</NavLink>
                  </li>
                </ul>
              </div>
              <div className="footer-body-link-subcontainer">
                <h5 className="card-title pb-4">Resource</h5>
                <ul className="footer-menu-list">
                  <li>
                    <NavLink to="/mugil-elite-mart/privacy-policy">Privacy Policy</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mugil-elite-mart/terms-and-conditions">Terms & Conditions</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mugil-elite-mart/security-policy">Security Policy</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mugil-elite-mart/cancellation-policy">Cancellation & Returns Policy</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mugil-elite-mart/grievance-policy">Grievance Redressal Policy</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mugil-elite-mart/disclaimer-policy">Disclaimer & Liability Policy</NavLink>
                  </li>
                  <li>
                    <NavLink to="/mugil-elite-mart/cookie-policy">Cookie Policy</NavLink>
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
