import React from "react";
import Locks from "../data/tabdata/locks.json";
import FeaturedCollections from "../components/FeaturedCollections/FeaturedCollections";
import Title from "../components/Title/Title";
import TextBanner from "../components/TextBanner/TextBanner";

import GlasswareData from "../../src/data/product-collections/glassware.json";
import Lights from "../../src/data/product-collections/lights.json";
import Mirrors from "../../src/data/product-collections/mirrors.json";
import Faucets from "../../src/data/product-collections/Faucets.json";
import Showers from "../../src/data/product-collections/Showers.json";
import Chimneys from "../../src/data/product-collections/Chimneys.json";
import Sinks from "../../src/data/product-collections/Sinks.json";

const HomeDecor = () => {
  return (
    <>
      <TextBanner bannerText={"Transform your living space into a masterpiece with timeless elegance"} />
      <div className="mugil-container" style={{ "background": "#f4f4f4" }}>
        <Title title={"Glassware"} subtitle={"Stylish & durable for every home."} />
        <FeaturedCollections data={GlasswareData} />
        <Title title={"Lights"} subtitle={"Brighten your world with modern designs."} />
        <FeaturedCollections data={Lights} isSquare={true} />
        <Title title={"Mirrors"} subtitle={"Reflect beauty with elegance."} />
        <FeaturedCollections data={Mirrors} isSquare={true} />
        <Title title={"Faucets"} subtitle={"Flowing perfection for kitchens & baths."} />
        <FeaturedCollections data={Faucets} isSquare={true} />
        <Title title={"Showers"} subtitle={"Experience refreshing luxury."} />
        <FeaturedCollections data={Showers} />
        <Title title={"Chimneys"} subtitle={"Sleek performance with style."} />
        <FeaturedCollections data={Chimneys} isSquare={true} />
        <Title title={"Sinks"} subtitle={"Crafted for utility & class."} />
        <FeaturedCollections data={Sinks} isSquare={true} />
      </div>
    </>
  );
}

export default HomeDecor;
