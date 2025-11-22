import React from 'react';
import './StackingCards.scss';

const products = [
  {
    productName: "BWP Grade Plywood",
    productPath: "/mugil-elite-mart/assets/images/stacking-cards/1.jpg",
    productText: "Built to brave water, weather, and time—strength that never swells."
  },
  {
    productName: "Marine Plywood",
    productPath: "/mugil-elite-mart/assets/images/stacking-cards/2.jpg",
    productText: "Engineered for the waves—unmatched performance in the harshest moisture zones."
  },
  {
    productName: "Commercial Plywood",
    productPath: "/mugil-elite-mart/assets/images/stacking-cards/3.jpg",
    productText: "The everyday hero that blends durability, affordability, and flawless finish."
  },
  {
    productName: "Flexible Plywood",
    productPath: "/mugil-elite-mart/assets/images/stacking-cards/4.jpg",
    productText: "Curves like imagination—perfect for smooth, bend-friendly interior artistry."
  },
  {
    productName: "Laminated Plywood",
    productPath: "/mugil-elite-mart/assets/images/stacking-cards/5.jpg",
    productText: "Style meets strength—pre-finished panels that elevate any modern space."
  },
  {
    productName: "Fire Retardant Plywood",
    productPath: "/mugil-elite-mart/assets/images/stacking-cards/6.jpg",
    productText: "Designed to resist flames—your silent shield against fire risks."
  },
  {
    productName: "Veneered Plywood",
    productPath: "/mugil-elite-mart/assets/images/stacking-cards/7.jpg",
    productText: "Nature’s premium face—luxury wood grains on a stable, long-lasting core."
  }
];


export default function StackingCards() {
  const numCards = products.length;

  return (
    <div className="mugil-container stacking-cards__container">
      <div className="stacking-cards" style={{ "--num-cards": numCards }}>

        {products.map((item, idx) => {
          const index1 = idx + 1;

          return (
            <div
              key={idx}
              className="stacking-cards__card"
              style={{ "--index": index1 }}
            >
              <div className="stacking-cards__content">

                <img
                  className="stacking-cards__image"
                  src={item.productPath}
                  alt={item.productName}
                />

                <div className="stacking-cards__body">
                  <h2>{item.productName}</h2>
                  <p>{item.productText}</p>
                </div>

              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}
