import React from "react";
import Locks from "../data/tabdata/locks.json";
import FeaturedCollections from "../components/FeaturedCollections/FeaturedCollections";
import Title from "../components/Title/Title";
import TextBanner from "../components/TextBanner/TextBanner";

function HomeDecor() {
  return (
    <>
      <TextBanner breadcrumb={true} bannerText={"Transform your living space into a masterpiece with timeless elegance"} />
      <div className="mugil-container" style={{ "background": "#f4f4f4" }}>
        <Title title={"Glassware"} subtitle={"Stylish & durable for every home."} />
        <FeaturedCollections data={Locks} />
        <Title title={"Lights"} subtitle={"Brighten your world with modern designs."} />
        <FeaturedCollections data={Locks} />
        <Title title={"Mirrors"} subtitle={"Reflect beauty with elegance."} />
        <FeaturedCollections data={Locks} />
        <Title title={"Faucets"} subtitle={"Flowing perfection for kitchens & baths."} />
        <FeaturedCollections data={Locks} />
        <Title title={"Showers"} subtitle={"Experience refreshing luxury."} />
        <FeaturedCollections data={Locks} />
        <Title title={"Chimneys"} subtitle={"Sleek performance with style."} />
        <FeaturedCollections data={Locks} />
        <Title title={"Sinks"} subtitle={"Crafted for utility & class."} />
        <FeaturedCollections data={Locks} />
      </div>
    </>
  );
}

export default HomeDecor;
