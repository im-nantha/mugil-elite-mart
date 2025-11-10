import React from "react";
import ImageBanner from "../components/ImageBanner/ImageBanner";
import WorkProcess from "../components/WorkProcess/WorkProcess";
import MissionVision from "../components/MissionVision/MissionVision";
import AboutSection from "../components/AboutSection/AboutSection";

function About() {
  return (
    <div>
      <main>
        <ImageBanner />
        <AboutSection />
        <WorkProcess />
        <MissionVision />
      </main >
    </div >
  );
}

export default About;
