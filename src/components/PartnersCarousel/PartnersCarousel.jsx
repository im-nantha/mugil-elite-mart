import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "./PartnersCarousel.scss";
import PartnersData from "../../data/homepage/partners.json";

const logosData = PartnersData;

const PartnersCarousel = () => {
  const { logos } = logosData;

  return (
    <div className="mugil-container partners-carousel">
      <h2 className="section-title">Our Partners</h2>

      {/* Top Row */}
      <Swiper
        modules={[Autoplay, FreeMode]}
        spaceBetween={20}
        loop={true}
        freeMode={true}
        freeModeMomentum={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={4000}
        className="logos-swiper"
      >
        {logos.map((logo, idx) => (
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
        freeModeMomentum={false}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        speed={4000}
        className="logos-swiper"
      >
        {logos.slice(9, 18).map((logo, idx) => (
          <SwiperSlide key={idx + 9} className="logo-card">
            <img src={logo} alt={`Partner ${idx + 10}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnersCarousel;
