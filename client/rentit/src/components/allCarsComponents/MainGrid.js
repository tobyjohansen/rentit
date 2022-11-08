import AllCarList from "./AllCarList";
import AppBar from "./../appBarComponents/AppBar";
import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import "../../App.css";

function Grid() {
  //Fetch all cars from the api
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/api/v1/cars")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedCars = data.cars.map((carData) => {
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
        setCars(transformedCars);
      });
  }, []);

  // Ends here !!!

  return (
    <div>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: 1,
          gridTemplateRows: "auto",
          gridTemplateAreas: `"header header header header header"
  "main main main main main"
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
        <Box sx={{ gridArea: "main" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              mt: "2rem",
            }}
          >
            <Typography variant="h6">Du har søkt:</Typography>
            <Typography variant="h6">1 uke 1-7 mars 2023</Typography>
            <Typography variant="h6">Oslo og Viken</Typography>
            <Typography variant="h7" sx={{ mt: "2rem" }}>
              Resultat:
            </Typography>
          </Box>
          <AllCarList cars={cars} />
        </Box>
        <Box sx={{ gridArea: "footer" }}></Box>
      </Box>
    </div>
  );
}

export default Grid;
