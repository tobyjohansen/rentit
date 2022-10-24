import React, { useState } from "react";
import car from "../../assets/car.png";

const Car = (props) => {
  const [rent, setRent] = useState("Lei denne");
  const rentHandler = () => {
    setRent("Du har leid denne bilen");
  };

  const [remove, setRemove] = useState("Slett bil");
  const removeHandler = () => {
    setRemove("Bilen er slettet");
  };

  const [returnCar, setReturnCar] = useState("Lever bil og fullfør billeie");
  const returnCarHandler = () => {
    setReturnCar("Billeia er fullført");
  };

  return (
    <div>
      <li className="cardlist">
        <img src={car} alt=""></img>
        <h2>
          {props.brand} - {props.model}
        </h2>
        <h3>Pris: {props.price} NOK/uke</h3>
        <h4>Ledige uker:</h4>
        <ul className="weeklist">
          {props.availability.map((week) => (
            <li className="week" key={week.toString()}>
              {week}
            </li>
          ))}
        </ul>
        <div>
          <button className="buttons" onClick={rentHandler}>
            {rent}
          </button>
          <button className="buttons" onClick={removeHandler}>
            {remove}
          </button>
          <button className="buttons" onClick={returnCarHandler}>
            {returnCar}
          </button>
        </div>
      </li>
    </div>
  );
};

export default Car;
