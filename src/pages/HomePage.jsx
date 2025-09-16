import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { useSearchParams } from "react-router-dom";
import Carousel from "../components/Carousel/Carousel";
import Features from "../components/Features/Features";
import IntroBanner from "../components/IntroBanner/IntroBanner";
import ProductTabs from "../components/ProductTabs/ProductTabs";
import StaticBanner from "../components/StaticBanner/StaticBanner";
import ShopByCategories from "../components/ShopByCategories/MugilGallery";
import Testimonials from "../components/Testimonials/Testimonials";
import Gallery from "../components/Gallery/Gallery";
import Faq from "../components/Faq/Faq";
import PartnersCarousel from "../components/PartnersCarousel/PartnersCarousel";

const Home = () => {

  return (
    <Fragment>
      <main>
        <Carousel />
        <Features />
        <IntroBanner />
        <ProductTabs />
        <StaticBanner />
        <ShopByCategories />
        <PartnersCarousel />
        <Testimonials />
        <Gallery />
        <Faq />
      </main>
    </Fragment>
  );
};

export default Home;
