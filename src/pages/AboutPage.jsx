import React from "react";
import ImageBanner from "../components/ImageBanner/ImageBanner";
import WorkProcess from "../components/WorkProcess/WorkProcess";
import MissionVision from "../components/MissionVision/MissionVision";

function About() {
  return (
    <div>
      <main>
        <ImageBanner />
        <WorkProcess />
        <MissionVision />
      </main >
    </div >
  );
}

export default About;
