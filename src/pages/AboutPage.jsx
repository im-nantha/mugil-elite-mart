import React from "react";
import ImageBanner from "../components/ImageBanner/ImageBanner";
import WorkProcess from "../components/WorkProcess/WorkProcess";
import MissionVision from "../components/MissionVision/MissionVision";
import AboutSection from "../components/AboutSection/AboutSection";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import "../assets/styles/main.scss";
import ImageGrid from "../components/ImageGrid/ImageGrid";
import Title from "../components/Title/Title";

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
          <Title title={"Our Awards"} center={true} />
          <ImageGrid />
        </main >
      </div >
      <Footer />
    </>

  );
}

export default About;
