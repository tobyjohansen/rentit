import * as React from "react";
import cars from "./CarData";

export default function CarList() {
  return (
    <div className="cardlist">
      {cars.map((car) => {
        return (
          <div className="cards" key={car.id}>
            <img src={car.img} alt=""></img>
            <h4>{car.modell}</h4>
            <h6>Årsmodell: {car.årsmodell}</h6>
            <br />
            <p>Biltype: {"\n" + car.biltype}</p>
            <p>Girkasse: {"\n" + car.girkasse}</p>
            <p>Drivstoff: {"\n" + car.drivstoff}</p>
            <br />
            <p>Hentested: {car.hentested}</p>
            <p>Ledige uker: {"\n" + car.ledige_uker}</p>
            <button>Lei denne</button>
            <button>Les mer</button>
          </div>
        );
      })}
    </div>
  );
}
