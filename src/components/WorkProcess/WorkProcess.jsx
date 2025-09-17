import React from "react";
import "./WorkProcess.scss";

const steps = [
  {
    id: "01",
    title: "Quality Products",
    desc: "Premium plywood, engineered boards, glass, and fixtures. Wide Range: From basic essentials to advanced and designer solutions.",
  },
  {
    id: "02",
    title: "Trusted Partnerships",
    desc: "Collaborations with renowned brands for authentic and reliable materials.",
  },
  {
    id: "03",
    title: "Customer-Centric Service",
    desc: "Personalized guidance, timely delivery, and post-purchase support.",
  },
];

function WorkProcess() {
  return (
    <section className="work-process">
      <p className="work-process__subtitle">( Discover Work Process )</p>
      <h2 className="work-process__title">How we works</h2>

      <div className="work-process__cards">
        {steps.map((step) => (
          <div className="work-process__card" key={step.id}>
            <h3 className="work-process__card-title">{step.title}</h3>
            <p className="work-process__card-desc">{step.desc}</p>
            <span className="work-process__card-number">{step.id}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkProcess;
