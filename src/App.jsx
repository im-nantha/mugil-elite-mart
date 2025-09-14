import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/mugil-elite-mart/" element={<Home />} />
            <Route path="/mugil-elite-mart/home-decor" element={<HomeDecor />} />
            <Route path="/mugil-elite-mart/search" element={<Home />} />
            <Route path="/mugil-elite-mart/about" element={<About />} />
            <Route path="/mugil-elite-mart/contact" element={<ContactUs />} />
            <Route path="/mugil-elite-mart/products" element={<Products />} />
            <Route path="/mugil-elite-mart/bulk-orders" element={<BuldOrder />} />
            <Route path="/mugil-elite-mart/cancellation-policy" element={<CancellationReturnPolicy />} />
            <Route path="/mugil-elite-mart/cookie-policy" element={<CookiePolicy />} />
            <Route path="/mugil-elite-mart/disclaimer-policy" element={<DisclaimerLiabilityPolicy />} />
            <Route path="/mugil-elite-mart/grievance-policy" element={<GrievanceRedressalPolicy />} />
            <Route path="/mugil-elite-mart/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/mugil-elite-mart/security-policy" element={<SecurityPolicy />} />
            <Route path="/mugil-elite-mart/terms-and-conditions" element={<TermsConditions />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
