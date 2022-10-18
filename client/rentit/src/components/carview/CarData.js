import React, { useEffect, useState } from "react";

function CarData() {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/api/v1/cars")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCarData(data);
      });
  }, []);

  const carJson = carData.data;

  return (
    <div>
      <h4>Cars</h4>
      <h1>{carData.status}</h1>
    </div>
  );
}

export default CarData;
