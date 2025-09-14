import React from "react";
import TextBanner from "../components/TextBanner/TextBanner";
import ImageBanner from "../components/ImageBanner/ImageBanner";

function About() {
  return (
    <div>
      <main>
        <TextBanner bannerText={"About Us"} />
        <ImageBanner />
        <div className="mugil-container">
          <h3 className="pb-3">About Mugil Elite Mart</h3>
          <p className="pb-4">
            Mugil Elite Mart was founded with a single vision: to provide comprehensive, high-quality home improvement solutions for every space. From plywood and glassware to bathroom fittings, kitchen accessories, and interior décor, we cater to both individual homeowners and professional contractors. With 25 years of trusted experience, we have been delivering top-notch home solutions across Tamil Nadu.
          </p>

          <h3 className="pb-3">What We Offer</h3>
          <p>
            <strong>Quality Products:</strong> Premium plywood, engineered boards, glass, and fixtures.</p><p> <strong>Wide Range:</strong> From basic essentials to advanced and designer solutions.</p><p> <strong>Trusted Partnerships:</strong> Collaborations with renowned brands for authentic and reliable materials.</p><p className="pb-4"> <strong>Customer-Centric Service:</strong>Personalized guidance, timely delivery, and post-purchase support.
          </p>

          <h3 className="pb-3">Why Choose Us</h3>
          <p className="pb-4">
            Mugil Elite Mart stands apart for its unwavering focus on quality, diversity, and customer satisfaction. Whether you are looking for retail purchases or bulk orders, we ensure consistent excellence at every step.
          </p>

          <h3 className="pb-3">Our Mission</h3>
          <p className="pb-4">
            To be the go-to destination for all home improvement and interior solutions, delivering products and services that combine innovation, reliability, and aesthetic appeal.
          </p>

          <h3 className="pb-3">Our Vision</h3>
          <p className="pb-4">
            To transform spaces across Tamil Nadu and beyond by providing trusted, high-quality products and exceptional service, making every project a success story.
          </p>

          <h3 className="pb-3">1. Legacy of Excellence</h3>
          <p className="pb-4"><b>“25 Years of Expertise and Trust.”</b> For over two decades, Mugil Elite Mart has been a pillar in the home improvement industry, delivering high-quality products and exceptional service. Our legacy is built on consistency, reliability, and a deep understanding of customer needs, making us a trusted choice across Tamil Nadu.
          </p>

          <h3 className="pb-3">2. Quality You Can Rely On</h3>
          <p className="pb-4"><b>“Premium Products, Guaranteed Performance.”</b> We ensure that every product, from plywood and glass to bathroom fittings and kitchen accessories, meets strict quality standards. By partnering with renowned brands and certified suppliers, we deliver durable, reliable, and aesthetically superior solutions for homes and commercial projects alike.
          </p>

          <h3 className="pb-3">3. Customer-Centric Approach</h3>
          <p className="pb-4"><b>“Your Satisfaction is Our Priority.”</b> At Mugil Elite Mart, we put the customer at the heart of everything we do. From personalized guidance to timely delivery and post-purchase support, our team is dedicated to making every interaction smooth, transparent, and satisfying, ensuring a hassle-free experience.
          </p>

          <h3 className="pb-3">4. Wide Product Spectrum</h3>
          <p className="pb-4"><b>“Everything You Need, Under One Roof.”</b> Our extensive range covers basic essentials to advanced premium solutions, including plywood, doors, glass, locks, bathroom and kitchen fittings, modular profiles, and décor items. Whether for retail or bulk orders, we provide a comprehensive selection to meet diverse needs with quality and reliability.
          </p>
        </div>

      </main >
    </div >
  );
}

export default About;
