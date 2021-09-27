import React from "react";

import "./Item.scss";

const Item = ({ data, radioSelected }) => {
  const { id, title, options } = data;

  return (
    <label
      htmlFor={id}
      className={`item p-10 ${Number(radioSelected) === id ? "selected" : ""}`}
    >
      <div className="item-title">{title}</div>
      {options && (
        <div className="item-options mb-50">
          <ul>
            {options.map((opt, idx) => (
              <li key={idx}>{opt}</li>
            ))}
          </ul>
        </div>
      )}
      <div
        className={`item-radio p-10 ${
          Number(radioSelected) === id ? "selected" : ""
        }`}
      >
        <input
          id={id}
          name="item"
          type="radio"
          value={id}
          defaultChecked={Number(radioSelected) === id}
        />{" "}
        <span>Elegir régimen</span>
      </div>
    </label>
  );
};

export default Item;
