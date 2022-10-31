import React, { useState } from "react";
import car from "../../assets/car.png";
import "../../App.css";
import { Box, Button, Typography, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "8%",
  boxShadow: 24,
  p: 4,
};

const Car = (props) => {
  const [open, setOpen] = useState(false);
  const [rent, setRent] = useState("Lei denne");
  const [carReturn, setCarReturn] = useState("Lever bil");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const rentHandler = () => {
    setRent("UTLEID");
  };
  const carReturnHandler = () => {
    setCarReturn("Bilen er levert");
  };

  return (
    <Box>
      <ul>
        <li className="each_card">
          <img src={car} alt="Cartoon scetch of a car"></img>
          <Typography className="brand_model_text" variant="h5">
            {props.brand} {props.model}
          </Typography>
          <Typography variant="h6">Pris: {props.price} NOK/uke</Typography>
          <Typography variant="h6">Hentested: {props.location}</Typography>
          <Button onClick={handleOpen}>Les mer</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography variant="h5" sx={{ m: "1rem" }}>
                {props.brand} {props.model}
              </Typography>
              <Typography variant="h6" sx={{ ml: "1rem", mb: "0.4rem" }}>
                Pris: {props.price} NOK/uke
              </Typography>
              <Typography variant="h6" sx={{ ml: "1rem", mb: "0.4rem" }}>
                Hentested: {props.location}
              </Typography>
              <Typography variant="h6" sx={{ ml: "1rem", mb: "0.4rem" }}>
                Årsmodell: {props.year}
              </Typography>
              <Typography variant="h6" sx={{ ml: "1rem", mb: "0.4rem" }}>
                Type bil: {props.type}
              </Typography>
              <Typography variant="h6" sx={{ ml: "1rem", mb: "0.4rem" }}>
                Drivstoff: {props.fuel}
              </Typography>
              <Typography variant="h6" sx={{ ml: "1rem", mb: "0.4rem" }}>
                Gir: {props.gear}
              </Typography>
              <Typography variant="h6" sx={{ ml: "1rem", mb: "0.4rem" }}>
                Max antall km: {props.km_limit}
              </Typography>
              <Typography variant="h6" sx={{ ml: "1rem", mb: "0.4rem" }}>
                Pris over km-grense: {props.price_per_km_after_limit} NOK/km
              </Typography>
              <Typography variant="h6" sx={{ ml: "1rem", mb: "0.4rem" }}>
                Ledige uker:
              </Typography>
              <ul className="availability_list">
                {props.availability.map((week) => (
                  <li className="list_element_styling" key={week.toString()}>
                    {week}
                  </li>
                ))}
              </ul>
              <Typography variant="h6" sx={{ ml: "1rem", mb: "0.4rem" }}>
                Eventuelt ekstrautstyr inkl:
              </Typography>
              <ul className="equiptment_list">
                {props.extras.map((extra) => (
                  <li className="list_element_styling" key={extra.toString()}>
                    {extra}
                  </li>
                ))}
              </ul>
              <Button onClick={rentHandler}>{rent}</Button>
              <Button onClick={carReturnHandler}>{carReturn}</Button>
            </Box>
          </Modal>
        </li>
      </ul>
    </Box>
  );
};
export default Car;
