import CarList from "./carview/CarList";
import AppBar from "../components/navigation/AppBar";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddCarForm from "../components/carview/AddCarForm";
import EditCarForm from "../components/carview/EditCarForm";
import "../App.css";

function Grid() {
  //Fetch all cars from the api
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/api/v1/cars")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedMovies = data.cars.map((carData) => {
          return {
            id: carData.id,
            price: carData.price,
            model: carData.model,
            brand: carData.brand,
            year: carData.year,
            location: carData.location,
            availability: carData.availability,
            type: carData.type,
            fuel: carData.fuel,
            gear: carData.gear,
            km_limit: carData.km_limit,
            extras: carData.extras,
            price_per_km_after_limit: carData.price_per_km_after_limit,
            owner: carData.owner,
          };
        });
        setCars(transformedMovies);
      });
  }, []);

  // Ends here !!!

  return (
    <div>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(2fr, 1fr, 1fr, 1fr, 1fr)",
          gap: 1,
          gridTemplateRows: "auto",
          gridTemplateAreas: `"header header header header header"
          "sidebar info info info info"
  "sidebar main main main main"
  "footer footer footer footer footer"`,
        }}
      >
        <Box
          sx={{
            gridArea: "header",
          }}
        >
          <AppBar />
        </Box>
        <Box
          sx={{
            gridArea: "sidebar",
            p: "1rem",
            borderRight: "1px solid lightgrey",
            marginTop: "2rem",
            marginBotton: "2rem",
          }}
        >
          <AddCarForm /> <EditCarForm />
        </Box>
        <Box
          sx={{
            gridArea: "info",
            fontSize: "1.2em",
            textAlign: "center",
          }}
        >
          <p>Velkommen til RENTIT!</p>
          <p>Finn en bil i lista under, da vel!</p>
        </Box>
        <Box sx={{ gridArea: "main" }}>
          <CarList cars={cars} />
        </Box>
        <Box sx={{ gridArea: "footer", p: "1rem" }}>Footer</Box>
      </Box>
    </div>
  );
}

export default Grid;
