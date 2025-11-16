import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import banner1 from "../../assets/images/banners/banner-1.jpg";
import banner2 from "../../assets/images/banners/banner-3.jpg";
import banner3 from "../../assets/images/banners/banner-4.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.scss";

function Carousel() {
  return (
    <section className="mugil_banner">
      <div className="mugil_banner__wrapper">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          speed={1000}
          loop
        >
          <SwiperSlide>
            <img className="mugil-banner-img" src={banner1} alt="Slide 1" />
            <div className="mugil-carousel-text-wrapper">
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="mugil-banner-img" src={banner3} alt="Slide 2" />
            <div className="mugil-carousel-text-wrapper">
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className="mugil-banner-img" src={banner2} alt="Slide 3" />
            <div className="mugil-carousel-text-wrapper">
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

export default Carousel;
