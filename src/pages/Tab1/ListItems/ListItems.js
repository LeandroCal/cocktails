import React, { useState, useContext } from "react";
import Item from "./Item";
import DataContext from "../../../context/DataContext";

import "./ListItems.scss";

const ListItems = ({ items }) => {
  const { data, action } = useContext(DataContext);
  const { currentRadio } = data;
  const [radioSelected, setRadioSelected] = useState(currentRadio || null);

  const saveSelected = (value) => {
    setRadioSelected(value);
    action({ currentRadio: value });
  };

  return (
    <div
      className="itemsTab1 grid"
      onChange={(evt) => saveSelected(evt.target.value)}
    >
      {items.map((item) => (
        <Item data={item} key={item.id} radioSelected={radioSelected} />
      ))}
    </div>
  );
};

export default ListItems;
