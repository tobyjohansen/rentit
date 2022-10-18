import * as React from "react";
import CarData from "./CarData";
//import cars from "./CarData";

export default function CarList() {
  return (
    <div className="cardlist">
      {/*{cars.map((car) => {
        return (
          <div className="cards" key={car.id}>
            <img src={car.img} alt=""></img>*/
      /*<h4>
              {car.brand}
              {car.model}
            </h4>
            <h6>Årsmodell: {car.year}</h6>
            <br />
            <p>Biltype: {"\n" + car.type}</p>
            <p>Girkasse: {"\n" + car.gear}</p>
            <p>Drivstoff: {"\n" + car.fuel}</p>
            <br />
            <p>Hentested: {car.location}</p>
            <p>Ledige uker: {"\n" + car.availability}</p>/*}
            <button>Lei denne</button>
            <button>Les mer</button>
          </div>*/}
      <CarData />
    </div>
  );
}
