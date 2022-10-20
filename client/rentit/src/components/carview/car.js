import React from "react";

const Car = (props) => {
  return (
    <div>
      <li className="cardlist">
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
          <button className="buttons">Lei bil</button>
          <button className="buttons">Slett bil</button>
          <button className="buttons">Lever bil</button>
        </div>
      </li>
    </div>
  );
};

export default Car;
