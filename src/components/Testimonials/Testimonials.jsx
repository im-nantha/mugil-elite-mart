import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./Testimonials.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import logo1 from "../../assets/images/testimonials/1.png";
import logo2 from "../../assets/images/testimonials/2.png";
import logo3 from "../../assets/images/testimonials/3.png";
import logo4 from "../../assets/images/testimonials/4.png";
import logo5 from "../../assets/images/testimonials/5.png";
import logo6 from "../../assets/images/testimonials/6.png";


const Testimonials = () => {
  return (
    <section className="testimonials mugil-container pt-0">

      <div className="row d-flex justify-content-center">
        <div className="col-md-10 col-xl-8 text-center">
          <h2 className="mb-4">Testimonials</h2>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        speed={300}
      >
        <SwiperSlide>
          <div className="card">
            <div className="card-body py-4 mt-2">
              <div className="d-flex justify-content-center mb-4">
                <img src={logo5}
                  className="rounded-circle shadow-1-strong" width="100" height="100" />
              </div>
              <h5 className="font-weight-bold">Raghavan, sankarapuram
              </h5>
              <h6 className="font-weight-bold my-3">Plywood</h6>
              <ul className="list-unstyled d-flex justify-content-center">
                <li>
                  <i className="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i className="fas fa-star-half-alt fa-sm text-info"></i>
                </li>
              </ul>
              <p className="mb-2">
                <i className="fas fa-quote-left pe-2"></i>The quality of plywood from Mugil Elite Mart is exceptional. Durable, smooth, and perfectly suited for my furniture project. Highly recommended!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="card-body py-4 mt-2">
              <div className="d-flex justify-content-center mb-4">
                <img src={logo4}
                  className="rounded-circle shadow-1-strong" width="100" height="100" />
              </div>
              <h5 className="font-weight-bold">Priya, Chennai</h5>
              <h6 className="font-weight-bold my-3">Glassware</h6>
              <ul className="list-unstyled d-flex justify-content-center">
                <li>
                  <i className="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-info"></i>
                </li>
              </ul>
              <p className="mb-2">
                <i className="fas fa-quote-left pe-2"></i>I purchased decorative glass panels for my living room, and the finish is flawless. The team guided me perfectly on designs. Very satisfied!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="card-body py-4 mt-2">
              <div className="d-flex justify-content-center mb-4">
                <img src={logo6}
                  className="rounded-circle shadow-1-strong" width="100" height="100" />
              </div>
              <h5 className="font-weight-bold">Saravanan, Chinnasalem
              </h5>
              <h6 className="font-weight-bold my-3">switches,Lights
              </h6>
              <ul className="list-unstyled d-flex justify-content-center">
                <li>
                  <i className="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i className="far fa-star fa-sm text-info"></i>
                </li>
              </ul>
              <p className="mb-2">
                <i className="fas fa-quote-left pe-2"></i>The switches and lights from Vasi Glass & Plywood are top quality. Excellent build, smooth installation, and long-lasting performance. Very satisfied with the service and product range.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="card-body py-4 mt-2">
              <div className="d-flex justify-content-center mb-4">
                <img src={logo3}
                  className="rounded-circle shadow-1-strong" width="100" height="100" />
              </div>
              <h5 className="font-weight-bold">Nithya, Veeracholapuram
              </h5>
              <h6 className="font-weight-bold my-3">Modular Kitchens
              </h6>
              <ul className="list-unstyled d-flex justify-content-center">
                <li>
                  <i className="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i className="fas fa-star-half-alt fa-sm text-info"></i>
                </li>
              </ul>
              <p className="mb-2">
                <i className="fas fa-quote-left pe-2"></i>I purchased modular kitchen accessories from Vasi Glass & Plywood for my home renovation. The materials are sturdy, modern in design, and perfect for my space. Highly recommend for professional quality products!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="card-body py-4 mt-2">
              <div className="d-flex justify-content-center mb-4">
                <img src={logo1}
                  className="rounded-circle shadow-1-strong" width="100" height="100" />
              </div>
              <h5 className="font-weight-bold">Arunachalam, Kallakurichi
              </h5>
              <h6 className="font-weight-bold my-3">Sensor LED
              </h6>
              <ul className="list-unstyled d-flex justify-content-center">
                <li>
                  <i className="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i className="fas fa-star-half-alt fa-sm text-info"></i>
                </li>
              </ul>
              <p className="mb-2">
                <i className="fas fa-quote-left pe-2"></i>Sensor LED lights from Vasi Glass & Plywood are amazing! Energy-efficient, stylish, and very responsive. Great solution for my home lighting needs. Truly worth buying.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card">
            <div className="card-body py-4 mt-2">
              <div className="d-flex justify-content-center mb-4">
                <img src={logo2}
                  className="rounded-circle shadow-1-strong" width="100" height="100" />
              </div>
              <h5 className="font-weight-bold">Karthik, Madurai
              </h5>
              <h6 className="font-weight-bold my-3">Digital Locks</h6>
              <ul className="list-unstyled d-flex justify-content-center">
                <li>
                  <i className="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i className="fas fa-star fa-sm text-info"></i>
                </li>
                <li>
                  <i className="fas fa-star-half-alt fa-sm text-info"></i>
                </li>
              </ul>
              <p className="mb-2">
                <i className="fas fa-quote-left pe-2"></i>Installed digital locks from Mugil Elite Mart in my home. Easy to use, highly secure, and reliable. The service was prompt and professional.
              </p>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </section >
  );
};

export default Testimonials;
