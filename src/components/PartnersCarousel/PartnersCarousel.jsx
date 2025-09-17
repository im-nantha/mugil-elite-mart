import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "./PartnersCarousel.scss";
import PartnersData1 from "../../data/homepage/partners.json";
import PartnersData2 from "../../data/homepage/second-partners.json";

const PartnersCarousel = () => {
  // If JSON is array, use directly; if it's object with logos1/logos2, fallback safely
  const logos1 = Array.isArray(PartnersData1) ? PartnersData1 : PartnersData1.logos1 || [];
  const logos2 = Array.isArray(PartnersData2) ? PartnersData2 : PartnersData2.logos2 || [];

  return (
    <div className="mugil-container partners-carousel">
      <h2 className="section-title">Our Partners</h2>

      {/* Top Row */}
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={20}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={4000}
        className="logos-swiper"
      >
        {logos1.map((logo, idx) => (
          <SwiperSlide key={idx} className="logo-card">
            <img src={logo} alt={`Partner ${idx + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Row */}
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={20}
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        speed={4000}
        className="logos-swiper"
      >
        {logos2.slice(9, 18).map((logo, idx) => (
          <SwiperSlide key={idx + 9} className="logo-card">
            <img src={logo} alt={`Partner ${idx + 10}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnersCarousel;
