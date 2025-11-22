import React from 'react';
import './StackingCards.scss';

const products = [
  {
    productName: "BWP Grade Plywood",
    productPath: "/mugil-elite-mart/assets/images/stacking-cards/1.jpg"
  },
  {
    productName: "Marine Plywood",
    productPath: "/mugil-elite-mart/assets/images/stacking-cards/2.jpg"
  },
  {
    productName: "Commercial Plywood",
    productPath: "/mugil-elite-mart/assets/images/stacking-cards/3.jpg"
  },
  {
    productName: "Flexible Plywood",
    productPath: "/mugil-elite-mart/assets/images/stacking-cards/4.jpg"
  },
  {
    productName: "Laminated Plywood",
    productPath: "/mugil-elite-mart/assets/images/stacking-cards/5.jpg"
  },
  {
    productName: "Fire Retardant Plywood",
    productPath: "/mugil-elite-mart/assets/images/stacking-cards/6.jpg"
  },
  {
    productName: "Veneered Plywood",
    productPath: "/mugil-elite-mart/assets/images/stacking-cards/7.jpg"
  },
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
                </div>

              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}
