import React from "react";
import "./Title.scss";

const Title = ({ title, subtitle }) => {
  return (
    <div id={title.toLowerCase().replace(/\s+/g, "-")}>
      <h2 className="px-2 pt-3 pb-1 px-md-4 pt-md-4 pb-md-2">{title}</h2>
      {subtitle && <h5 className="px-2 pt-2 pb-1 px-md-4 pt-md-4 pb-md-2">{subtitle}</h5>}
    </div>
  );
};

export default Title;
