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
  boxShadow: 24,
  p: 4,
};

const CarPart = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
          <Button onClick={handleOpen}>Les mer</Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography className="brand_model_text" variant="h5">
                {props.brand} {props.model}
              </Typography>
              <Typography variant="h6">Pris: {props.price} NOK/uke</Typography>
              <Typography variant="h6">Hentested: {props.location}</Typography>
              <Typography variant="h6">Årsmodell: {props.year}</Typography>
              <Typography variant="h6">Type bil: {props.type}</Typography>
              <Typography variant="h6">Drivstoff: {props.fuel}</Typography>
              <Typography variant="h6">Gir: {props.gear}</Typography>
              <Typography variant="h6">
                Max antall km: {props.km_limit}
              </Typography>
              <Typography variant="h6">
                Pris per km over: {props.price_per_km_after_limit}
              </Typography>
              <Typography variant="h6">Ledige uker:</Typography>
              <ul className="mapweek">
                {props.availability.map((week) => (
                  <li className="liststyles" key={week.toString()}>
                    {week}
                  </li>
                ))}
              </ul>
              <Typography variant="h6">Eventuelt ekstrautstyr inkl:</Typography>
              <ul className="mapextras">
                {props.extras.map((extra) => (
                  <li className="liststyles" key={extra.toString()}>
                    {extra}
                  </li>
                ))}
              </ul>
            </Box>
          </Modal>
        </li>
      </ul>
    </Box>
  );
};

export default CarPart;
