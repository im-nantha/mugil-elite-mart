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
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
