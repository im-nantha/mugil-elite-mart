import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../assets/styles/main.scss";

function ErrorPage() {
  return (
    <>
      <Header />
      <section className="flat-spacing">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="wg-404">
                <div className="image">
                  <img
                    src="./images/banner/404.png"
                    data-src="./images/banner/404.png"
                    alt="404"
                    className=" ls-is-cached lazyloaded"
                  />
                </div>
                <h1 className="title display-xl-2">Whoops!</h1>
                <p className="text-md sub text-main">
                  We couldn’t find the page you were looking for.
                </p>
                <div className="bot">
                  <a href="index.html" className="tf-btn btn-md animate-btn font-4">
                    Return to Homepage
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ErrorPage;
