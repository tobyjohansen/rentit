import React from "react";
import "../../App.css";
import AllCars from "./AllCars";

const AllCarList = (props) => {
  return (
    <ul className="cardlist">
      {props.cars
        .sort((a, b) => (a.price > b.price ? 1 : -1))
        .map((car) => (
          <AllCars
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
            reg_number={car.reg_number}
          />
        ))}
    </ul>
  );
};

export default AllCarList;
