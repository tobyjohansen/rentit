import React, { useState } from "react";
import car from "../../assets/car.png";
import "../../App.css";
import { Box, Button, Typography } from "@mui/material";

const Car = (props) => {
  const [readMore, setReadMore] = useState("Les mer");
  const readMoreHandler = () => {
    setReadMore("OK");
  };

  return (
    <Box>
      <ul className="each_card">
        <li className="each_card_list">
          <img src={car} alt="Cartoon scetch of a car"></img>
          <Typography className="brand_model_text" variant="h5">
            {props.brand} {props.model}
          </Typography>
          <Typography variant="h6">Pris: {props.price} NOK/uke</Typography>
          <Typography variant="h6">Hentested: {props.location}</Typography>
          <Button
            onClick={readMoreHandler}
            sx={{ bgcolor: "#ffab91", color: "black" }}
          >
            {readMore}
          </Button>
        </li>
      </ul>
    </Box>
  );
};

export default Car;
