import React from "react";
import TextBanner from "../components/TextBanner/TextBanner";
import IframeMap from "../components/IframeMap/IframeMap";
import ContactForm from "../components/ContactForm/ContactForm";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../assets/styles/main.scss";

function ContactUs() {
  return (
    <>
      <Header />
      <TextBanner bannerText={"Contact Us"} />
      <div className="mugil-container">
        <ContactForm />
      </div>
      <IframeMap />
      <Footer />
    </>
  );
}


export default ContactUs;
