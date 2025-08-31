import React from "react";
import SneakPeek from "../components/SneakPeek/SneakPeek";
import AllProducts from "../data/AllProductData.json";

function HomeDecor() {
  return (
    <div>
      <main>
        <SneakPeek
          SneakPeakTitle="All Products"
          SneakPeekCardsData={AllProducts} />
      </main>
    </div>
  );
}

export default HomeDecor;
