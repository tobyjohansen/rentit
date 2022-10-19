import React from 'react';

import Car from './car';
//import classes from './MoviesList.module.css';

const CarList = (props) => {
  return (
    <ul>
      {props.cars.map((car) => (
        <Car
          key={car.id}
          brand={car.brand}
          price={car.price}
          model={car.model}
        />
      ))}
    </ul>
  );
};

export default CarList;