import React from 'react';
import './StackingCards.scss';


const images = [
  '/mugil-elite-mart/src/assets/images/stacking-cards/1.png',
  '/mugil-elite-mart/src/assets/images/stacking-cards/2.png',
  '/mugil-elite-mart/src/assets/images/stacking-cards/3.png',
  '/mugil-elite-mart/src/assets/images/stacking-cards/4.png',
];

export default function StackingCards() {
  const numCards = images.length;

  return (
    <div className="mugil-container stacking-cards__container">
      <div className="stacking-cards" style={{ "--num-cards": numCards }}>
        {images.map((img, idx) => {
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
                  src={img}
                  alt={`Card ${index1}`}
                />

                <div className="stacking-cards__body">
                  <h2>Card {index1}</h2>
                  <p>
                    This is some sample content for card {index1}. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
