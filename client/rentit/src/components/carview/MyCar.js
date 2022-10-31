import React, { useState } from "react";
import car from "../../assets/car.png";
import "../../App.css";
import { Box, Button, Typography, Modal } from "@mui/material";
import EditCarForm from "./EditCarForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "8%",
  boxShadow: 24,
  p: 5,
};

const MyCar = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box>
      <ul>
        <li className="each_card">
          <img src={car} alt="Cartoon scetch of a car"></img>
          <Typography variant="h6">Referanse: {props.reference}</Typography>
          <Typography variant="h5">
            {props.brand} {props.model}
          </Typography>
          <Typography variant="h6">Pris: {props.price} NOK/uke</Typography>
          <Box>
            <Button onClick={handleOpen}>Endre</Button>
            <Button>Slett</Button>
          </Box>
        </li>
      </ul>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <EditCarForm />
        </Box>
      </Modal>
    </Box>
  );
};

export default MyCar;
