import React from "react";
import { joinPairing } from "../../../../utils/functions";

import "./Cocktail.scss";

const Cocktail = ({ data }) => {
  const { image_url, name, description, food_pairing, abv } = data;

  const stateAbv = (abv) => {
    let clsState = "nothing";

    if (abv <= 5) clsState = "chill";
    else if (abv > 5 && abv <= 10) clsState = "careful";
    else clsState = "hospital";

    return (
      <div className={`cocktail-abv-state cocktail-abv-state__${clsState}`}>
        {abv || "-"}
      </div>
    );
  };

  return (
    <div className="cocktail">
      <div className="cocktail-img">
        <img src={image_url} alt={name} />
      </div>
      <div className="cocktail-info">
        <div>
          <div className="cocktail-info__name">{name}</div>
          <div className="cocktail-info__description">{description}</div>
        </div>
        {food_pairing?.length > 0 && (
          <div className="cocktail-info__pairing">
            Ideal para combinar con: {joinPairing(food_pairing)}
          </div>
        )}
      </div>
      <div className="cocktail-abv">{stateAbv(abv)}</div>
    </div>
  );
};

export default Cocktail;
