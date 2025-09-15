import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/mugil-logo.jpg";
import mainlogo from "../../assets/images/mem-logo.png";
import "./Header.scss";
import Search from "../Search/Search.jsx";
import Tooltip from "../Tooltip/Tooltip.jsx";
import BackToTop from "../BackToTop/BackToTop.jsx";

const SubNavbar = () => {
  return (
    <div className="mugil-header">
      <div className="mugil-mart-header">
        <div className="mugil-mart-browse">
          <div className="categories-title">
            <i className="bi bi-list"></i>
            <p className="browse-category">BROWSE CATEGORIES</p>
          </div>
          <Tooltip />
        </div>
        <nav className="mugil-mart-navbar">
          <ul className="mugil-mart-navbar-content">
            <li>
              <NavLink
                to="/mugil-elite-mart/"
                end
                className={({ isActive }) =>
                  isActive
                    ? "mugil-mart-nav-wrap active"
                    : "mugil-mart-nav-wrap"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mugil-elite-mart/home-decor"
                className={({ isActive }) =>
                  isActive
                    ? "mugil-mart-nav-wrap active"
                    : "mugil-mart-nav-wrap"
                }
              >
                Home Decor
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mugil-elite-mart/products"
                className={({ isActive }) =>
                  isActive
                    ? "mugil-mart-nav-wrap active"
                    : "mugil-mart-nav-wrap"
                }
              >
                Interior Solutions
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mugil-elite-mart/about"
                className={({ isActive }) =>
                  isActive
                    ? "mugil-mart-nav-wrap active"
                    : "mugil-mart-nav-wrap"
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mugil-elite-mart/contact"
                className={({ isActive }) =>
                  isActive
                    ? "mugil-mart-nav-wrap active"
                    : "mugil-mart-nav-wrap"
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/mugil-elite-mart/bulk-orders"
                className={({ isActive }) =>
                  isActive
                    ? "mugil-mart-nav-wrap active"
                    : "mugil-mart-nav-wrap"
                }
              >
                Bulk Orders
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="mugil-mart-list-wrapper">
          <div className="mugil-mart-items">
            <a href="tel:9894487698" class="cart-icon-wrapper search-icon">
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#0f0" d="M13,42h22c3.866,0,7-3.134,7-7V13c0-3.866-3.134-7-7-7H13c-3.866,0-7,3.134-7,7v22	C6,38.866,9.134,42,13,42z"></path><path fill="#fff" d="M35.45,31.041l-4.612-3.051c-0.563-0.341-1.267-0.347-1.836-0.017c0,0,0,0-1.978,1.153	c-0.265,0.154-0.52,0.183-0.726,0.145c-0.262-0.048-0.442-0.191-0.454-0.201c-1.087-0.797-2.357-1.852-3.711-3.205	c-1.353-1.353-2.408-2.623-3.205-3.711c-0.009-0.013-0.153-0.193-0.201-0.454c-0.037-0.206-0.009-0.46,0.145-0.726	c1.153-1.978,1.153-1.978,1.153-1.978c0.331-0.569,0.324-1.274-0.017-1.836l-3.051-4.612c-0.378-0.571-1.151-0.722-1.714-0.332	c0,0-1.445,0.989-1.922,1.325c-0.764,0.538-1.01,1.356-1.011,2.496c-0.002,1.604,1.38,6.629,7.201,12.45l0,0l0,0l0,0l0,0	c5.822,5.822,10.846,7.203,12.45,7.201c1.14-0.001,1.958-0.248,2.496-1.011c0.336-0.477,1.325-1.922,1.325-1.922	C36.172,32.192,36.022,31.419,35.45,31.041z"></path>
              </svg>
            </a>
          </div>
          <a href="tel:9894487698" className="tel-number">
            +919894487698
          </a>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <>
      <BackToTop />
      <header className="mugil-header">
        <div className="header-wrapper py-2">
          <p className="text-center text-white">Welcome to Mugil elite mart</p>
        </div>
        <div className="mugil-mart-header">
          <div className="logo">
            <div className="mugil-mart-main-logo">
              <Link to="/mugil-elite-mart/" className="mugil-mart-logo-wrapper">
                <img
                  className="mugil-mart-img"
                  src={mainlogo}
                  alt="mugil-mart-logo"
                />
              </Link>
            </div>
            <div className="mugil-mart-logo">
              <Link to="/mugil-elite-mart/" className="mugil-mart-logo-wrapper">
                <img
                  className="mugil-mart-img"
                  src={logo}
                  alt="mugil-mart-logo"
                />
              </Link>
            </div>
          </div>
          <nav className="mugil-mart-navbar">
            {/* <Search /> */}
          </nav>
          <div className="mugil-mart-list-wrapper">
            <div className="mugil-mart-items">
              <a
                href="https://youtube.com/@vasiglass2288?si=6ZjOLie23uTgAeAP"
                className="cart-icon-wrapper search-icon"
                target="_blank"
              >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                  <path fill="#FF3D00" d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"></path><path fill="#FFF" d="M20 31L20 17 32 24z"></path>
                </svg>
              </a>
            </div>
            <div className="mugil-mart-items">
              <a
                href="mailto:murugan@mugilelitemart.com"
                className="cart-icon-wrapper search-icon"
              >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                  <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                </svg>
              </a>
            </div>
            <div className="mugil-mart-items">
              <a
                href="https://maps.app.goo.gl/tqaaJE2Sig7zpwLk9"
                target="_blank"
                className="cart-icon-wrapper search-icon"
                rel="noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                  <path fill="#48b564" d="M35.76,26.36h0.01c0,0-3.77,5.53-6.94,9.64c-2.74,3.55-3.54,6.59-3.77,8.06	C24.97,44.6,24.53,45,24,45s-0.97-0.4-1.06-0.94c-0.23-1.47-1.03-4.51-3.77-8.06c-0.42-0.55-0.85-1.12-1.28-1.7L28.24,22l8.33-9.88	C37.49,14.05,38,16.21,38,18.5C38,21.4,37.17,24.09,35.76,26.36z"></path><path fill="#fcc60e" d="M28.24,22L17.89,34.3c-2.82-3.78-5.66-7.94-5.66-7.94h0.01c-0.3-0.48-0.57-0.97-0.8-1.48L19.76,15	c-0.79,0.95-1.26,2.17-1.26,3.5c0,3.04,2.46,5.5,5.5,5.5C25.71,24,27.24,23.22,28.24,22z"></path><path fill="#2c85eb" d="M28.4,4.74l-8.57,10.18L13.27,9.2C15.83,6.02,19.69,4,24,4C25.54,4,27.02,4.26,28.4,4.74z"></path><path fill="#ed5748" d="M19.83,14.92L19.76,15l-8.32,9.88C10.52,22.95,10,20.79,10,18.5c0-3.54,1.23-6.79,3.27-9.3	L19.83,14.92z"></path><path fill="#5695f6" d="M28.24,22c0.79-0.95,1.26-2.17,1.26-3.5c0-3.04-2.46-5.5-5.5-5.5c-1.71,0-3.24,0.78-4.24,2L28.4,4.74	c3.59,1.22,6.53,3.91,8.17,7.38L28.24,22z"></path>
                </svg>
              </a>
            </div>
            <div className="mugil-mart-items">
              <a
                href="https://api.whatsapp.com/send?phone=9894487698&text=Hi%20Murugan"
                target="_blank"
                className="cart-icon-wrapper search-icon"
                rel="noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                  <path fill="#fff" d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6	C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"></path><path fill="#fff" d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"></path><path fill="#cfd8dc" d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3	L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"></path><path fill="#40c351" d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8	l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"></path><path fill="#fff" fillRule="evenodd" d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0	s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3	c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9	c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8	c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>
      <SubNavbar />
    </>
  );
};

export default Header;
