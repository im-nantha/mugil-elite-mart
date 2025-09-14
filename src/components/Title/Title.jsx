import React from "react";
import "./Title.scss";

const Title = ({ title, subtitle }) => {
  return (
    <div>
      <h2 className="px-4 pt-4 pb-2">{title}</h2>
      {subtitle && <h5 className="px-4 pt-2 pb-4">{subtitle}</h5>}
    </div>
  );
};

export default Title;
