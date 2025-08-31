import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.scss"

function Carousel() {
  return (
    <section className="mugil_banner">
      <div className="mugil_banner__wrapper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          speed={1000}
          loop
        >
          <SwiperSlide>
            <img className="mugil-banner-img" src="https://themesflat.co/html/vineta/images/slider/florist/slider-1.jpg" alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img className="mugil-banner-img" src="https://themesflat.co/html/vineta/images/slider/florist/slider-2.jpg" alt="Slide 2" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Carousel;
