import React, { useEffect, useState } from "react";

function CarData() {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    fetch("127.0.0.1:3300/api/v1/cars")
      .then((res) => res.json())
      .then((data) => {
        setCarData(data);
      });
  }, []);

  return (
    <div>
      <h4>Cars</h4>
      <ul>
        {carData.map((data) => {
          return <li>{carData.id}</li>;
        })}
      </ul>
    </div>
  );
}

export default CarData;
