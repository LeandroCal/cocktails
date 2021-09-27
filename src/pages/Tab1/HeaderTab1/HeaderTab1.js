import React from "react";
import { ReactComponent as Star } from "../../../assets/images/star.svg";

import "./HeaderTab1.scss";

const HeaderTab1 = () => {
  return (
    <div className="headerTab1-title">
      <div className="headerTab1-title__text">
        Hotel <span>Mieres del Camín Apartamentos</span>
      </div>
      <div className="headerTab1-title__icon">
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
    </div>
  );
};

export default HeaderTab1;
