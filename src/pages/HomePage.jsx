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

const Home = () => {

  return (
    <Fragment>
      <main>
        <Carousel />
        <Features />
        <IntroBanner />
        {/* <ProductTabs /> */}
        <StaticBanner />
        <ShopByCategories />
        <Testimonials />
        <Gallery />
      </main>
    </Fragment>
  );
};

export default Home;
