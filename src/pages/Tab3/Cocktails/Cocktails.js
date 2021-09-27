import React from "react";
import Skeleton from "react-loading-skeleton";
import HeaderTitle from "../../../components/HeaderTitle";
import Cocktail from "./Cocktail";

import "./Cocktails.scss";

const Cocktails = ({ items }) => {
  return (
    <div className="cocktails">
      <HeaderTitle text="Cervezas" />
      {items?.length > 0 && items !== "null" ? (
        items.map((item) => <Cocktail data={item} key={item.id} />)
      ) : (
        <Skeleton count={10} />
      )}
    </div>
  );
};

export default Cocktails;
