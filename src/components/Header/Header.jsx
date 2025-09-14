import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/mugil-logo.jpg";
import "./Header.scss";
import Search from "../Search/Search.jsx";

const SubNavbar = () => {
  return (
    <div className="mugil-header">
      <div className="mugil-mart-header">
        <div className="mugil-mart-browse">
          <div className="categories-title">
            <i className="bi bi-list"></i>
            <p className="browse-category">BROWSE CATEGORIES</p>
          </div>
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
          <i className="bi bi-telephone-x"></i>
          <a href="tel:7010726530" className="tel-number">
            +917010726530
          </a>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <>
      <header className="mugil-header">
        <div className="header-wrapper py-2">
          <p className="text-center text-white">Welcome to Mugil elite mart</p>
        </div>
        <div className="mugil-mart-header">
          <div className="mugil-mart-logo">
            <Link to="/mugil-elite-mart/" className="mugil-mart-logo-wrapper">
              <img
                className="mugil-mart-img"
                src={logo}
                alt="mugil-mart-logo"
              />
            </Link>
          </div>
          <nav className="mugil-mart-navbar">
            <Search />
          </nav>
          <div className="mugil-mart-list-wrapper">
            <div className="mugil-mart-items">
              <a
                href="https://youtube.com/@vasiglass2288?si=6ZjOLie23uTgAeAP"
                className="cart-icon-wrapper search-icon"
                target="_blank"
              ><i className="bi bi-youtube text-black"></i>
              </a>
            </div>
            <div className="mugil-mart-items">
              <a
                href="mailto:murugan@mugilelitemart.com"
                className="cart-icon-wrapper search-icon"
              >
                <i className="bi bi-envelope text-black"></i>
              </a>
            </div>
            <div className="mugil-mart-items">
              <a
                href="https://maps.app.goo.gl/tqaaJE2Sig7zpwLk9"
                target="_blank"
                className="cart-icon-wrapper search-icon"
                rel="noreferrer"
              >
                <i className="bi bi-geo-alt-fill text-black"></i>
              </a>
            </div>
            <div className="mugil-mart-items">
              <a
                href="https://api.whatsapp.com/send?phone=9894487698&text=Hi%20Murugan"
                target="_blank"
                className="cart-icon-wrapper search-icon"
                rel="noreferrer"
              >
                <i className="bi bi-whatsapp text-black"></i>
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
