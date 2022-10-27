import React from "react";
import "../../App.css";
import CarPart from "./CarPart";

const CarList = (props) => {
  return (
    <ul className="card">
      {props.cars.map((car) => (
        <CarPart
          key={car.id}
          price={car.price}
          model={car.model}
          brand={car.brand}
          year={car.year}
          location={car.location}
          availability={car.availability}
          type={car.type}
          fuel={car.fuel}
          gear={car.gear}
          km_limit={car.km_limit}
          extras={car.extras}
          price_per_km_after_limit={car.price_per_km_after_limit}
          owner={car.owner}
        />
      ))}
    </ul>
  );
};

export default CarList;
