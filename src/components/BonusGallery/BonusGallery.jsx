import React from "react";
import "./BonusGallery.scss";


export default function BonusGallery() {

  const cards = [
    {
      id: 1,
      image: "/mugil-elite-mart/assets/images/bonus-gallery/bonus-1.png",
      logo: "/mugil-elite-mart/assets/images/bonus-gallery/bonus-1-logo.png",
      link: "https://www.bonus.in/home"
    },
    {
      id: 2,
      image: "/mugil-elite-mart/assets/images/bonus-gallery/bonus-2.jpg",
      logo: "/mugil-elite-mart/assets/images/bonus-gallery/bonus-2-logo.png",
      link: "https://www.europalocks.com/"
    },
    {
      id: 3,
      image: "/mugil-elite-mart/assets/images/bonus-gallery/bonus-3.png",
      logo: "/mugil-elite-mart/assets/images/bonus-gallery/bonus-3-logo.png",
      link: "https://www.pluspointlocks.com/"
    },
    {
      id: 4,
      image: "/mugil-elite-mart/assets/images/bonus-gallery/bonus-4.png",
      logo: "/mugil-elite-mart/assets/images/bonus-gallery/bonus-4-logo.png",
      link: "https://godrejlocks.com/"
    },
  ];


  return (
    <div className="mugil-container mt-0">
      <div className="four-card-gallery">

        {cards.map((card) => {
          const Wrapper = card.link ? "a" : "div";   // ← FIXED (inside map!)

          return (
            <Wrapper
              key={card.id}
              className="gallery-card"
              {...(card.link && {
                href: card.link,
                target: "_blank",
                rel: "noopener noreferrer",
              })}
            >
              <img src={card.image} alt="images" />
              <div className="card-logo">
                <img src={card.logo} alt="logo" />
              </div>
            </Wrapper>
          );
        })}

      </div>
    </div>
  );
}