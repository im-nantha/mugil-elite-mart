// // import React from "react";
// // import { Link, NavLink } from "react-router-dom";
// // import "./HeaderMobileView.scss";

// // const HeaderMobileView = () => {
// //   return (
// //     <div className="mugil-mobile-header">
// //       <div className="mobile-header-wrapper">
// //         <div className="mobile-header-items">
// //           <ul className="mugil-mart-navbar-content">
// //             <li>
// //               <NavLink
// //                 to="/mugil-elite-mart/"
// //                 end
// //                 className={({ isActive }) =>
// //                   isActive
// //                     ? "mugil-mart-nav-wrap active"
// //                     : "mugil-mart-nav-wrap"
// //                 }
// //               >
// //                 Home
// //               </NavLink>
// //             </li>
// //             <li>
// //               <NavLink
// //                 to="/mugil-elite-mart/home-decor"
// //                 className={({ isActive }) =>
// //                   isActive
// //                     ? "mugil-mart-nav-wrap active"
// //                     : "mugil-mart-nav-wrap"
// //                 }
// //               >
// //                 Home Decor
// //               </NavLink>
// //             </li>
// //             <li>
// //               <NavLink
// //                 to="/mugil-elite-mart/products"
// //                 className={({ isActive }) =>
// //                   isActive
// //                     ? "mugil-mart-nav-wrap active"
// //                     : "mugil-mart-nav-wrap"
// //                 }
// //               >
// //                 Interior Solutions
// //               </NavLink>
// //             </li>
// //             <li>
// //               <NavLink
// //                 to="/mugil-elite-mart/about"
// //                 className={({ isActive }) =>
// //                   isActive
// //                     ? "mugil-mart-nav-wrap active"
// //                     : "mugil-mart-nav-wrap"
// //                 }
// //               >
// //                 About Us
// //               </NavLink>
// //             </li>
// //             <li>
// //               <NavLink
// //                 to="/mugil-elite-mart/contact"
// //                 className={({ isActive }) =>
// //                   isActive
// //                     ? "mugil-mart-nav-wrap active"
// //                     : "mugil-mart-nav-wrap"
// //                 }
// //               >
// //                 Contact Us
// //               </NavLink>
// //             </li>
// //             <li>
// //               <NavLink
// //                 to="/mugil-elite-mart/bulk-orders"
// //                 className={({ isActive }) =>
// //                   isActive
// //                     ? "mugil-mart-nav-wrap active"
// //                     : "mugil-mart-nav-wrap"
// //                 }
// //               >
// //                 Bulk Orders
// //               </NavLink>
// //             </li>
// //           </ul>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default HeaderMobileView;

// import { useState, useEffect } from "react";
// import "./Navbar.scss"; // your CSS/SCSS

// export default function Navbar() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   // lock / unlock scroll on body
//   useEffect(() => {
//     document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
//     return () => {
//       document.body.style.overflow = "auto"; // cleanup
//     };
//   }, [isMenuOpen]);

//   const toggleMenu = () => {
//     setIsMenuOpen(prev => !prev);
//   };

//   const handleMenuItemClick = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav className="organic-navbar">
//       <div className="hamburger" onClick={toggleMenu}>
//         {/* toggle icons */}
//         {isMenuOpen ? (
//           <span className="closeIcon">✖</span>
//         ) : (
//           <span className="menuIcon">☰</span>
//         )}
//       </div>

//       <div className={`organic-navbar-content ${isMenuOpen ? "showMenu" : ""}`}>
//         <ul className="organic-nav-wrap">
//           <li onClick={handleMenuItemClick}>Home</li>
//           <li onClick={handleMenuItemClick}>Products</li>
//           <li onClick={handleMenuItemClick}>About</li>
//           <li onClick={handleMenuItemClick}>Contact</li>
//         </ul>
//       </div>
//     </nav>
//   );
// }