import React from "react";
import TextBanner from "../components/TextBanner/TextBanner";
import IframeMap from "../components/IframeMap/IframeMap";
import ContactForm from "../components/ContactForm/ContactForm";
import ImageBanner from "../components/ImageBanner/ImageBanner";
import banner from "../../src/assets/images/banners/shop-banner.jpg";

function ContactUs() {
  return (
    <div>
      <TextBanner bannerText={"Contact Us"} />
      <ImageBanner image={banner} />
      <div className="mugil-container">
        <ContactForm />
      </div>
      <IframeMap />
    </div>
  );
}


export default ContactUs;
