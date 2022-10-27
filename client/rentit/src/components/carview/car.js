import React, { useState } from "react";
import car from "../../assets/car.png";

const Car = (props) => {
  const [rent, setRent] = useState("Lei denne");
  const rentHandler = () => {
    setRent("Du har leid denne bilen");
  };

  const [remove, setRemove] = useState("Slett bil");
  const removeHandler = (props) => {
    //Fetch DELETE method for deleting a new car
    //This code does not work.
    //all it needs is for props.id to work and give id.
    const url = "http://localhost:3300/api/v1/cars/" + props.id;
    fetch(url, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    //End of fetch

    setRemove("Bilen er slettet");
  };

  const [returnCar, setReturnCar] = useState("Lever bil");
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
        <h3>Hentested: {props.location}</h3>
        <h4>Ledige uker:</h4>
        <ul className="mapweek">
          {props.availability.map((week) => (
            <li className="liststyles" key={week.toString()}>
              {week}
            </li>
          ))}
        </ul>
        <h4>Eventuelt ekstrautstyr inkl:</h4>
        <ul className="mapextras">
          {props.extras.map((extra) => (
            <li className="liststyles" key={extra.toString()}>
              {extra}
            </li>
          ))}
        </ul>
        <div>
          <button className="buttons" onClick={rentHandler}>
            {rent}
          </button>
          {/*}<button className="buttons" onClick={removeHandler}>
            {remove}
          </button>*/}
          <button className="buttons" onClick={returnCarHandler}>
            {returnCar}
          </button>
        </div>
      </li>
    </div>
  );
};

export default Car;
