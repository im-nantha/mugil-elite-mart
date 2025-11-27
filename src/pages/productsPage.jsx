import React from "react";
import FeaturedCollections from "../components/FeaturedCollections/FeaturedCollections";
import Title from "../components/Title/Title";
import TextBanner from "../components/TextBanner/TextBanner";
import Gallery from "../components/Gallery/Gallery";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../assets/styles/main.scss";

import Lock from "../data/product-collections/Locks.json";
import Handles from "../data/product-collections/Handles.json";
import Aluminium from "../data/product-collections/Aluminum-Profile.json";
import Pipes from "../data/product-collections/Pipes.json";
import Hardware from "../data/product-collections/Hardware.json";
import CeilingFans from "../data/product-collections/Ceiling-Fans.json";
import ExhaustFans from "../data/product-collections/Exhaust-Fans.json";
import Paints from "../data/product-collections/Paints.json";
import doors from "../data/product-collections/doors.json";
import queenlockset from "../data/product-collections/queenlockset.json";
import pullhandles from "../data/product-collections/pullhandles.json";
import doorpulllock from "../data/product-collections/doorpulllock.json";
import doorhinges from "../data/product-collections/doorhinges.json";

const Products = () => {
  return (
    <>
      <Header />
      <TextBanner bannerText={"Quality materials that power modern living"} />
      <div className="mugil-container" style={{ background: "#f4f4f4" }}>
        <Title title="Door Handles" subtitle="Crafted to Be Touched—Smooth, Sturdy, and Stylish in Every Grip." />
        <FeaturedCollections data={Lock} isSquare={true} />
        <Title title="Queen Lock Set" subtitle="Royal Security with a Majestic Finish—Locks That Rule with Elegance." />
        <FeaturedCollections data={queenlockset} isSquare={true} isAutoLayout={true} />
        <Title title="Pull Handles" subtitle="Effortless Pull, Timeless Appeal—Built for Smooth Motion and Bold Design." />
        <FeaturedCollections data={pullhandles} isSquare={true} />
        <Title title="Door Pull Lock Set" subtitle="A Seamless Fusion of Pull and Protection—Designed for Modern Doors." />
        <FeaturedCollections data={doorpulllock} isSquare={true} />
        <Title title="Door Closer" subtitle="Silent, Smooth, and Strong—Hinges Engineered for Lifetime Performance." />
        <FeaturedCollections data={doorhinges} isSquare={true} isAutoLayout={true} />
        <Title title="Handles" subtitle="Secure Your World with Trust and Innovation." />
        <FeaturedCollections data={Handles} isSquare={true} />
        <Title title="Aluminum Profile" subtitle="Sleek, Durable, and Built for Modern Living." />
        <FeaturedCollections data={Aluminium} isSquare={true} />
        <Title title="Hardware" subtitle="Smart Solutions That Hold Everything Together." />
        <FeaturedCollections data={Hardware} isSquare={true} />
        <Title title="Pipes" subtitle="Reliable Flow, Strength, and Performance That Lasts." />
        <FeaturedCollections data={Pipes} isSquare={true} />
        <Title title="Ceiling Fans" subtitle="Cool Comfort with Style That Moves with You." />
        <FeaturedCollections data={CeilingFans} isSquare={true} />
        <Title title="Exhaust Fans" subtitle="Fresh Air, Clean Spaces, and Effortless Ventilation." />
        <FeaturedCollections data={ExhaustFans} isSquare={true} />
        <Title title="Paints" subtitle="Fresh Air, Clean Spaces, and Effortless Ventilation." />
        <FeaturedCollections data={Paints} isSquare={true} />
        <Title title="Doors" subtitle="Strength and Style Combined for Every Design Need." />
        <Gallery images={doors} spacing={true} fourCards={true} />
      </div>

      <Footer />
    </>
  );
}

export default Products;
