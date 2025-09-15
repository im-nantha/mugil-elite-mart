import React from "react";
import Locks from "../data/tabdata/locks.json";
import FeaturedCollections from "../components/FeaturedCollections/FeaturedCollections";
import Title from "../components/Title/Title";
import TextBanner from "../components/TextBanner/TextBanner";

import Plywood from "../../src/data/product-collections/Plywood.json";
import Lock from "../../src/data/product-collections/Locks.json";
import Aluminium from "../../src/data/product-collections/Aluminum-Profile.json";
import Pipes from "../../src/data/product-collections/Pipes.json";
import Hardware from "../../src/data/product-collections/Hardware.json";
import CeilingFans from "../../src/data/product-collections/Ceiling-Fans.json";
import ExhaustFans from "../../src/data/product-collections/Exhaust-Fans.json";

const Products = () => {
  return (
    <>
      <TextBanner bannerText={"Quality materials that power modern living"} />
      <div className="mugil-container" style={{ "background": "#f4f4f4" }}>
        <Title title={"Plywood"} subtitle={"Strength and style combined for every design need."} />
        <FeaturedCollections data={Plywood} />
        <Title title={"Locks"} subtitle={"Secure your world with trust and innovation."} />
        <FeaturedCollections data={Lock} isSquare={true} />
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
      </div>
    </>
  );
}

export default Products;
