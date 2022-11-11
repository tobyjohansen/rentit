import React, { useState } from "react";
import car from "../../assets/car.png";
import "../../App.css";
import { Box, Button, Typography, Modal } from "@mui/material";
import ModalContent from "./ModalContent";

const AllCars = (props) => {
  const [open, setOpen] = useState(false);
  const [carReturn, setCarReturn] = useState("Lever bil");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
            <Button onClick={handleOpen}>Les mer</Button>
            <Button onClick={carReturnHandler}>{carReturn}</Button>
          </Box>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <ModalContent
              key={props.id}
              price={props.price}
              model={props.model}
              brand={props.brand}
              year={props.year}
              location={props.location}
              availability={props.availability}
              type={props.type}
              fuel={props.fuel}
              gear={props.gear}
              km_limit={props.km_limit}
              extras={props.extras}
              price_per_km_after_limit={props.price_per_km_after_limit}
              reg_number={props.reg_number}
            />
          </Modal>
        </li>
      </ul>
    </Box>
  );
};

export default AllCars;
