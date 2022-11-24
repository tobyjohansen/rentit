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

  const reference = props.reference;

  //const [remove, setRemove] = useState("Slett bil");
  const removeHandler = (props) => {
    const url = "http://localhost:3300/api/v1/listings/" + reference;
    fetch(url, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });
    //End of fetch

    //setRemove("Bilen er slettet");
  };

  return (
    <Box>
      <ul>
        <li className="each_card">
          <img src={car} alt="Cartoon scetch of a car"></img>
          <Typography variant="h6">
            Registreringsnr: {props.reg_number}
          </Typography>
          <Typography variant="h5">
            {props.brand} {props.model}
          </Typography>
          <Typography variant="h6">Pris: {props.price} NOK/uke</Typography>
          <Box>
            <Button onClick={handleOpen}>Endre</Button>
            <Button onClick={(props) => removeHandler(props)}>Slett</Button>
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
