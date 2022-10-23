import CarList from "./carview/CarList";
import AppBar from "../components/navigation/AppBar";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddCarForm from "../components/carview/AddCarForm";
import EditCarForm from "../components/carview/EditCarForm";

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
          gridTemplateColumns: "repeat(5, 1fr)",
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
            border: "1px solid black",
          }}
        >
          <AppBar />
        </Box>
        <Box sx={{ gridArea: "sidebar", border: "1px solid black", p: "1rem" }}>
          <AddCarForm /> <EditCarForm />
        </Box>
        <Box sx={{ gridArea: "info", border: "1px solid black", p: "1rem" }}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            {" "}
            orem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </Box>
        <Box sx={{ gridArea: "main", border: "1px solid black" }}>
          <CarList cars={cars} />
        </Box>
        <Box sx={{ gridArea: "footer", border: "1px solid black", p: "1rem" }}>
          Footer
        </Box>
      </Box>
    </div>
  );
}

export default Grid;
