import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { useSearchParams } from "react-router-dom";
import Carousel from "../components/Carousel/Carousel";
import Features from "../components/Features/Features";
import IntroBanner from "../components/IntroBanner/IntroBanner";
import ProductTabs from "../components/ProductTabs/ProductTabs";
import StaticBanner from "../components/StaticBanner/StaticBanner";
import ShopByCategories from "../components/ShopByCategories/ShopByCategories";
import Testimonials from "../components/Testimonials/Testimonials";
import Gallery from "../components/Gallery/Gallery";
import PartnersCarousel from "../components/PartnersCarousel/PartnersCarousel";
import FaqTabs from "../components/FaqTabs/FaqTabs";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import bannerImage from "../../src/assets/images/banners/godrij-banner.png";
import DoubleBanner from "../components/DoubleBanner/DoubleBanner";

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
        <ProductTabs />
        <HeroBanner src={bannerImage} />
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
