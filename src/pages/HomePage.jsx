import React, { Fragment } from "react";
import bannerImage from "../../src/assets/images/banners/godrij-banner.png";
import securityBannerImage from "../../src/assets/images/banners/security-banner.jpg";
import godrejImages from "../../src/data/homepage/godrej.json";
import Carousel from "../components/Carousel/Carousel";
import DoubleBanner from "../components/DoubleBanner/DoubleBanner";
import FaqTabs from "../components/FaqTabs/FaqTabs";
import Features from "../components/Features/Features";
import Gallery from "../components/Gallery/Gallery";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import IntroBanner from "../components/IntroBanner/IntroBanner";
import PartnersCarousel from "../components/PartnersCarousel/PartnersCarousel";
import ProductTabs from "../components/ProductTabs/ProductTabs";
import ShopByCategories from "../components/ShopByCategories/ShopByCategories";
import StaticBanner from "../components/StaticBanner/StaticBanner";
import Testimonials from "../components/Testimonials/Testimonials";
import "../assets/styles/main.scss";
import StackingCards from "../components/StackingCards/StackingCards";
import Title from "../components/Title/Title";

const homeFaqs = [
  { question: "What types of plywood does Mugil Elite Mart offer?", answer: "We provide a wide range of plywood including BWP, Marine, Commercial, Fire Retardant, Laminated, Acrylic, PVC, HDMR, and Block Boards suitable for furniture, interiors, and construction." },
  { question: "Does Mugil Elite Mart supply glass for doors and windows?", answer: "Yes, we offer tempered, frosted, laminated, acoustic, stained, double-glazed, fluted, and custom design glass for residential and commercial projects." },
  { question: "What kinds of doors are available at Mugil Elite Mart?", answer: "Our collection includes wooden, flush, PVC, glass panel, laminated, sliding, WPC, UV-coated, and steel security doors for every design and security need." },
];

const Home = () => {

  return (
    <Fragment>
      <main>
        <Carousel />
        <Features />
        <IntroBanner />
        <DoubleBanner />
        <Title title={"Plywoods"} subtitle={"Discover our premium range of plywoods, engineered for durability and aesthetic appeal."}
          center={true} />
        <StackingCards />
        <ProductTabs />
        <Title title={"Godrej Locks"} subtitle={"Explore our exclusive collection of Godrej locks, combining security with style."}
          center={true} />
        <Gallery images={godrejImages} spacing={true} />
        <HeroBanner src={bannerImage} link={"https://www.pluspointlocks.com/"} />
        <HeroBanner src={securityBannerImage} />
        <StaticBanner />
        <ShopByCategories />
        <PartnersCarousel />
        <Testimonials />
        <Gallery storeTitle={"Our Store"} />
        <FaqTabs faqs={homeFaqs} showMore={true} />
      </main>
    </Fragment>
  );
};

export default Home;
