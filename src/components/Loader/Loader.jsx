import React from "react";
import "./Loader.scss";
import loaderimage from "../../assets/images/loader.gif";

const Loader = () => {
  return (
    <div className="page-loader">
      <img src={loaderimage} alt="Loading..." className="loader-img" />
    </div>
  );
};

export default Loader;