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
          description: ["Map unique payment codes", "directly to customer orders."],
        },
        {
          icon: "https://img.icons8.com/ios-filled/50/ffffff/contract.png",
          title: "Auto Agreements",
          description: ["Automate payment confirmations", "for seamless onboarding."],
        },
      ],
    },
    {
      column: 2, // center column
      items: [
        {
          icon: "https://img.icons8.com/ios-filled/50/ffffff/link.png",
          title: "Entry Linking",
          description: ["Connect every payment", "to specific CRM entries."],
        },
        {
          icon: "https://img.icons8.com/ios-filled/50/ffffff/search.png",
          title: "Instant Lookup",
          description: ["Quickly trace payments", "to user accounts in real-time."],
        },
        {
          icon: "https://img.icons8.com/ios-filled/50/ffffff/database.png",
          title: "Ledger Sync",
          description: ["Update ledgers instantly", "with mapped transactions."],
        },
      ],
    },
    {
      column: 3,
      items: [
        {
          icon: "https://img.icons8.com/ios-filled/50/ffffff/calendar.png",
          title: "Scheduled Mapping",
          description: ["Automate mapping for", "recurring transactions."],
        },
        {
          icon: "https://img.icons8.com/ios-filled/50/ffffff/wallet.png",
          title: "Wallet Entries",
          description: ["Map digital wallets", "to specific purchase entries."],
        },
      ],
    },
  ];

  return (
    <div>
      <section className="payment-mapping-section">
        <div className="section-header">
          <h2>Payment-to-Entry Mapping</h2>
          <p>
            Seamlessly connect every transaction to its purpose — automate
            tracking, reduce errors, and streamline operations.
          </p>
        </div>
        <div className="mapping-cards"></div>
      </section>

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
