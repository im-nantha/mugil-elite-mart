import React from "react";
import "./MissionVision.scss";

const MissionVision = () => {
  // Data object for cards
  const cardData = [
    {
      column: 1,
      items: [
        {
          icon: "https://img.icons8.com/ios-filled/50/ffffff/barcode.png",
          title: "Our Mission",
          description: ["To be the go-to destination for all home improvement and interior solutions, delivering products and services that combine innovation, reliability, and aesthetic appeal."],
        },
        {
          icon: "https://img.icons8.com/ios-filled/50/ffffff/contract.png",
          title: "Our Vision",
          description: ["To transform spaces across Tamil Nadu and beyond by providing trusted, high-quality products and exceptional service, making every project a success story. Our Goal"],
        },
      ],
    },
    {
      column: 2, // center column
      items: [
        {
          icon: "https://img.icons8.com/ios-filled/50/ffffff/link.png",
          title: "Legacy of Excellence",
          description: ["25 Years of Expertise and Trust.” For over two decades, Mugil Elite Mart has been a pillar in the home improvement industry, delivering high-quality products and exceptional service. Our legacy is built on consistency, reliability, and a deep understanding of customer needs, making us a trusted choice across Tamil Nadu."],
        },
        {
          icon: "https://img.icons8.com/ios-filled/50/ffffff/search.png",
          title: "Quality You Can Rely On",
          description: ["Premium Products, Guaranteed Performance.” We ensure that every product, from plywood and glass to bathroom fittings and kitchen accessories, meets strict quality standards. By partnering with renowned brands and certified suppliers, we deliver durable, reliable, and aesthetically superior solutions for homes and commercial projects alike."],
        },
        {
          icon: "https://img.icons8.com/ios-filled/50/ffffff/database.png",
          title: "Customer-Centric Approach",
          description: ["Your Satisfaction is Our Priority.” At Mugil Elite Mart, we put the customer at the heart of everything we do. From personalized guidance to timely delivery and post-purchase support, our team is dedicated to making every interaction smooth, transparent, and satisfying, ensuring a hassle-free experience."],
        },
      ],
    },
    {
      column: 3,
      items: [
        {
          icon: "https://img.icons8.com/ios-filled/50/ffffff/calendar.png",
          title: "Wide Product Spectrum",
          description: ["Everything You Need, Under One Roof.” Our extensive range covers basic essentials to advanced premium solutions, including plywood, doors, glass, locks, bathroom and kitchen fittings, modular profiles, and décor items. Whether for retail or bulk orders, we provide a comprehensive selection to meet diverse needs with quality and reliability."],
        },
        {
          icon: "https://img.icons8.com/ios-filled/50/ffffff/wallet.png",
          title: "Premium Quality Services",
          description: ["Providing premium good quality services and products with 25 years of excellance."],
        },
      ],
    },
  ];

  return (
    <div>

      <section className="split-columns">
        {cardData.map((col, index) => (
          <div
            key={index}
            className={`column ${col.column === 2 ? "center-column" : ""}`}
          >
            {col.items.map((card, i) => (
              <div className="card" key={i}>
                <div className="icon">
                  <img src={card.icon} alt={`${card.title} Icon`} />
                </div>
                <h3>{card.title}</h3>
                <p>
                  {card.description.map((line, j) => (
                    <span key={j}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        ))}
      </section>
    </div>
  );
};

export default MissionVision;
