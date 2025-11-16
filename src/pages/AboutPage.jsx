import React from "react";
import ImageBanner from "../components/ImageBanner/ImageBanner";
import WorkProcess from "../components/WorkProcess/WorkProcess";
import MissionVision from "../components/MissionVision/MissionVision";
import AboutSection from "../components/AboutSection/AboutSection";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../assets/styles/main.scss";

function About() {
  return (
    <>
      <Header />
      <div>
        <main>
          <ImageBanner />
          <AboutSection />
          <WorkProcess />
          <MissionVision />
        </main >
      </div >
      <Footer />
    </>

  );
}

export default About;
