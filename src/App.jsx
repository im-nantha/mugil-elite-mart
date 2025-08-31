import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import SubNavbar from "./components/SubNavbar/SubNavbar";
import Home from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./assets/styles/main.scss";
import About from "./pages/AboutPage";
import ContactUs from "./pages/ContactUsPage";
import Products from "./pages/productsPage";
import BuldOrder from "./pages/BulkOrderPage";
import HomeDecor from "./pages/HomeDecor";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <SubNavbar />
          <Routes>
            <Route path="/mugil-commerce/" element={<Home />} />
            <Route path="/mugil-commerce/home-decor" element={<HomeDecor />} />
            <Route path="/mugil-commerce/search" element={<Home />} />
            <Route path="/mugil-commerce/about" element={<About />} />
            <Route path="/mugil-commerce/contact" element={<ContactUs />} />
            <Route path="/mugil-commerce/products" element={<Products />} />
            <Route path="/mugil-commerce/bulk-orders" element={<BuldOrder />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
