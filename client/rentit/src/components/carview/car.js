import React from 'react';

const Car = (props) => {
  return (
    <li>
      <h2>{props.brand}</h2>
      <h3>{props.price}</h3>
      <p>{props.model}</p>
    </li>
  );
};

export default Car;
