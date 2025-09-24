import React, { useEffect, useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import "./assets/styles/main.scss";
import About from "./pages/AboutPage";
import ContactUs from "./pages/ContactUsPage";
import Products from "./pages/productsPage";
import BuldOrder from "./pages/BulkOrderPage";
import HomeDecor from "./pages/HomeDecor";
import CancellationReturnPolicy from "./pages/CancellationReturnPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import DisclaimerLiabilityPolicy from "./pages/DisclaimerLiabilityPolicy";
import GrievanceRedressalPolicy from "./pages/GrievanceRedressalPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import SecurityPolicy from "./pages/SecurityPolicy";
import TermsConditions from "./pages/TermsConditions";
import FaqPage from "./pages/FaqPage";
import ScrollToHashElement from "./hooks/ScrollToHashElement";
import Loader from "./components/Loader/Loader";
import AutoScrollToTop from "./components/AutoScrollToTop/AutoScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import LoginPage from "./pages/LoginPage";
const basename = import.meta.env.PROD ? "/mugil-elite-mart" : "/mugil-elite-mart";

function AppContent() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   // Show loader on route change
  //   setLoading(true);
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000); // minimum 2.5 seconds
  //   return () => clearTimeout(timer);
  // }, [location]);

  return (
    <>
      {/* {loading && <Loader />} */}
      <Header />
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-decor" element={<HomeDecor />} />
        <Route path="/search" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/bulk-orders" element={<BuldOrder />} />
        <Route path="/cancellation-policy" element={<CancellationReturnPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/disclaimer-policy" element={<DisclaimerLiabilityPolicy />} />
        <Route path="/grievance-policy" element={<GrievanceRedressalPolicy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/security-policy" element={<SecurityPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/faqs" element={<FaqPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router basename={basename}>
        <AutoScrollToTop />
        <AppContent />
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;