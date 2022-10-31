import AppBar from "../carview/AppBar";
import { Box, Typography } from "@mui/material";
import AddCarForm from "../carview/AddCarForm";
import "../../App.css";
import { useState, useEffect } from "react";
import MyCarList from "../carview/MyCarList";

function CarProfileGrid() {
  //Fetch all cars from the api
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3300/api/v1/cars")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const transformedCars = data.cars
          .filter((carData) => carData.owner === 12)
          .map((carData) => {
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
          gridTemplateColumns: "repeat(1fr, 1fr, 1fr, 1fr, 1fr)",
          gap: 1,
          gridTemplateRows: "auto",
          gridTemplateAreas: `"header header header header header"
          "sidebar sidebar main main main"
  "sidebar sidebar main main main"
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
            mt: "5rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5">Mine biler</Typography>
          <MyCarList cars={cars} />
        </Box>
        <Box sx={{ gridArea: "main", p: "4rem" }}>
          <Box>
            <AddCarForm />
          </Box>
        </Box>
        <Box sx={{ gridArea: "footer", p: "1rem" }}></Box>
      </Box>
    </div>
  );
}

export default CarProfileGrid;
