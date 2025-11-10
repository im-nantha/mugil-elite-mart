import React from "react";
import "./IntroBanner.scss";
import useRevealOnScroll from "../../hooks/useRevealOnScroll";
import img1 from "../../assets/images/intro-banner/glass.jpg";
import img2 from "../../assets/images/intro-banner/plywood.jpg";
import img3 from "../../assets/images/intro-banner/bath.jpg";

const bannerItems = [
  { img: img1, title: "Glass & Mirror Creations", redirect: "" },
  {
    img: img2,
    title: "Premium Plywood & Laminates",
    redirect: "https://www.greenlam.co.in/architects-designers/laminates/hpl?product_category=530"
  },
  {
    img: img3,
    title: "Bath Elegance & Accessories",
    redirect: "https://bathsense.asianpaints.com/content/dam/ap-bathsense-revamp/catalogue-assets/pdf/AP_Bathsense%20Canvas_Spreads_30%20Nov_23.pdf"
  },
];

const IntroBanner = () => {
  const [ref, isVisible] = useRevealOnScroll();

  const Wrapper = ({ redirect, children, title }) =>
    redirect ? (
      <a
        href={redirect}
        target="_blank"
        rel="noopener noreferrer"
        className="intro-banner-items"
        title={title}
      >
        {children}
      </a>
    ) : (
      <div className="intro-banner-items" title={title}>{children}</div>
    );

  return (
    <div
      ref={ref}
      className={`intro-banner mugil-container pt-0 reveal ${isVisible ? "show" : ""
        }`}
    >
      <div className="intro-banner-wrapper">
        {bannerItems.map(({ img, title, redirect }, index) => (
          <Wrapper key={index} redirect={redirect} title={title}>
            <div className="intro-image">
              <img src={img} alt={title} loading="lazy" />
            </div>
            <div className="intro-text">
              <h4 className="intro-title">{title}</h4>
            </div>
          </Wrapper>
        ))}
      </div>
    </div>
  );
};

export default IntroBanner;
