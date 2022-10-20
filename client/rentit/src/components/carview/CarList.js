import React from "react";
import "../../App.css";
import Car from "./Car";

const CarList = (props) => {
  return (
    <ul className="card">
      {props.cars.map((car) => (
        <Car
          key={car.id}
          brand={car.brand}
          price={car.price}
          model={car.model}
          availability={car.availability}
        />
      ))}
    </ul>
  );
};

export default CarList;
