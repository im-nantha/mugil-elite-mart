import React from "react";
import "./Testimonials.scss";


const Testimonials = () => {
  return (
    <section className="testimonials mugil-container pt-0">

      <div className="row d-flex justify-content-center">
        <div className="col-md-10 col-xl-8 text-center">
          <h2 className="mb-4">Testimonials</h2>
        </div>
      </div>

      <div className="row text-center">
        <div className="col-md-4 mb-4 mb-md-0">
          <div className="card">
            <div className="card-body py-4 mt-2">
              <div className="d-flex justify-content-center mb-4">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                  className="rounded-circle shadow-1-strong" width="100" height="100" />
              </div>
              <h5 className="font-weight-bold">Raghavan, Coimbatore
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
        </div>
        <div className="col-md-4 mb-4 mb-md-0">
          <div className="card">
            <div className="card-body py-4 mt-2">
              <div className="d-flex justify-content-center mb-4">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp"
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
        </div>
        <div className="col-md-4 mb-0">
          <div className="card">
            <div className="card-body py-4 mt-2">
              <div className="d-flex justify-content-center mb-4">
                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
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
                  <i className="far fa-star fa-sm text-info"></i>
                </li>
              </ul>
              <p className="mb-2">
                <i className="fas fa-quote-left pe-2"></i>Installed digital locks from Mugil Elite Mart in my home. Easy to use, highly secure, and reliable. The service was prompt and professional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Testimonials;
