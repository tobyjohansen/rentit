import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import GearSelect from "./GearSelect";
import WeekSelect from "./WeekSelect";
import EquipmentSelect from "./EquipmentSelect";
import TypeSelect from "./TypeSelect";

export default function EditCarForm() {
  const [buttonTitle, setButtonTitle] = useState("Oppdater bildata");

  const clickHandler = () => {
    setButtonTitle("Bildata oppdatert!");
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 2, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h4" gutterBottom>
        Endre bil
      </Typography>
      <TextField
        id="outlined-basic"
        label="Bookingreferanse"
        variant="outlined"
      />
      <TextField id="outlined-basic" label="Bilmerke" variant="outlined" />
      <TextField id="outlined-basic" label="Bilmodell" variant="outlined" />
      <TextField id="outlined-basic" label="Årsmodell" variant="outlined" />
      <TextField id="outlined-basic" label="Hentested" variant="outlined" />
      <TextField id="outlined-basic" label="Pris/uke" variant="outlined" />
      <GearSelect />
      <WeekSelect />
      <EquipmentSelect />
      <TypeSelect />
      <button type="submit" className="buttons" onClick={clickHandler}>
        {buttonTitle}
      </button>
    </Box>
  );
}
