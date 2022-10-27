import React, { useState } from "react";
import car from "../../assets/car.png";
import "../../App.css";

const Car = (props) => {
  const [readMore, setReadMore] = useState("Les mer");
  const readMoreHandler = () => {
    setReadMore("OK");
  };

  return (
    <div>
      <ul className="each_card_list">
        <li>
          <img src={car} alt="Cartoon scetch of a car"></img>
          <h3 className="brand_model_text">
            {props.brand} {props.model}
          </h3>
          <h4>Pris: {props.price} NOK/uke</h4>
          <h5>Hentested: {props.location}</h5>
          <button onClick={readMoreHandler}>{readMore}</button>
        </li>
      </ul>
    </div>
  );
};

export default Car;
