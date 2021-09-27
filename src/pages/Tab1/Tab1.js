import React from "react";
import HeaderTab1 from "./HeaderTab1";
import ListItems from "./ListItems";

import { itemsMock } from "../../utils/mocks";

import "./Tab1.scss";

const Tab1 = () => {
  return (
    <div className="tab1">
      <HeaderTab1 />
      <ListItems items={itemsMock} />
    </div>
  );
};

export default Tab1;
