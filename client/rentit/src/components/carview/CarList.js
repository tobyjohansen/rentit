import React from 'react';

import Car from './Car';
//import classes from './MoviesList.module.css';

const CarList = (props) => {
  return (
    <ul>
      {props.cars.map((car) => (
        <Car
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