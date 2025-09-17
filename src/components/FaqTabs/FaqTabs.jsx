import { useState } from "react";
import { Link } from "react-router-dom";
import "./FaqTabs.scss";

const FaqTabs = ({ faqs, showMore }) => {
  const [activeIndex, setActiveIndex] = useState(0);       // desktop tabs
  const [accordionIndex, setAccordionIndex] = useState(0); // default first open in mobile

  const toggleAccordion = (idx) => {
    setAccordionIndex(accordionIndex === idx ? null : idx);
  };

  return (
    <section className="mugil-container">
      <div className="sbc-title">
        <h2 className="text-center pt-2 pb-sm-5 pb-4">Frequently Asked Questions</h2>
      </div>

      {/* Desktop tab layout */}
      <div className="faq-tabs desktop-view">
        <div className="faq-tabs__questions">
          {faqs.map((faq, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`faq-tabs__question ${activeIndex === idx ? "active" : ""}`}
            >
              {faq.question}
            </button>
          ))}
        </div>

        <div className="faq-tabs__answer">
          <div className="faq-tabs__answer__wrapper">
            <h3>{faqs[activeIndex].question}</h3>
            <p>{faqs[activeIndex].answer}</p>
          </div>
        </div>
      </div>

      {/* Mobile accordion layout */}
      <div className="faq-accordion mobile-view">
        {faqs.map((faq, idx) => (
          <div key={idx} className="faq-accordion__item">
            <button
              className={`faq-accordion__question ${accordionIndex === idx ? "active" : ""}`}
              onClick={() => toggleAccordion(idx)}
            >
              {faq.question}
            </button>
            <div
              className={`faq-accordion__answer ${accordionIndex === idx ? "open" : ""}`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {showMore && (
        <div className="faq-tabs__button">
          <Link to="/mugil-elite-mart/faqs">
            <button>Show More</button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default FaqTabs;
