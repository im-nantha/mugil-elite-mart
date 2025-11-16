import React from "react";
import FeaturedCollections from "../components/FeaturedCollections/FeaturedCollections";
import Title from "../components/Title/Title";
import TextBanner from "../components/TextBanner/TextBanner";
import Gallery from "../components/Gallery/Gallery";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../assets/styles/main.scss";


import Plywood from "../data/product-collections/Plywood.json";
import Lock from "../data/product-collections/Locks.json";
import Handles from "../data/product-collections/Handles.json";
import Aluminium from "../data/product-collections/Aluminum-Profile.json";
import Pipes from "../data/product-collections/Pipes.json";
import Hardware from "../data/product-collections/Hardware.json";
import CeilingFans from "../data/product-collections/Ceiling-Fans.json";
import ExhaustFans from "../data/product-collections/Exhaust-Fans.json";
import Paints from "../data/product-collections/Paints.json";
import doors from "../data/product-collections/doors.json";

const Products = () => {
  return (
    <>
      <Header />
      <TextBanner bannerText={"Quality materials that power modern living"} />
      <div className="mugil-container" style={{ "background": "#f4f4f4" }}>
        <Title title={"Plywoods"} subtitle={"Secure your world with trust and innovation."} />
        <FeaturedCollections data={Plywood} />
        <Title title={"Door Handles"} subtitle={"Secure your world with trust and innovation."} />
        <FeaturedCollections data={Lock} isSquare={true} />
        <Title title={"Handles"} subtitle={"Secure your world with trust and innovation."} />
        <FeaturedCollections data={Handles} isSquare={true} />
        <Title title={"Aluminum Profile"} subtitle={"Sleek, durable, and built for modern living."} />
        <FeaturedCollections data={Aluminium} isSquare={true} />
        <Title title={"Hardware"} subtitle={"Smart solutions that hold everything together."} />
        <FeaturedCollections data={Hardware} isSquare={true} />
        <Title title={"Pipes"} subtitle={"Reliable flow, strength, and performance that lasts."} />
        <FeaturedCollections data={Pipes} isSquare={true} />
        <Title title={"Ceiling Fans"} subtitle={"Cool comfort with style that moves with you."} />
        <FeaturedCollections data={CeilingFans} isSquare={true} />
        <Title title={"Exhaust Fans"} subtitle={"Fresh air, clean spaces, and effortless ventilation."} />
        <FeaturedCollections data={ExhaustFans} isSquare={true} />
        <Title title={"Paints"} subtitle={"Fresh air, clean spaces, and effortless ventilation."} />
        <FeaturedCollections data={Paints} isSquare={true} />
        <Title title={"Doors"} subtitle={"Strength and style combined for every design need."} />
        <Gallery images={doors} spacing={true} fourCards={true} />
      </div>
      <Footer />
    </>
  );
}

export default Products;
