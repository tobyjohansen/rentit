import React, { useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import GearSelect from "./GearSelect";
import WeekSelect from "./WeekSelect";
import EquipmentSelect from "./EquipmentSelect";
import TypeSelect from "./TypeSelect";

export default function BasicTextFields() {
  const [save, setSave] = useState("Lagre ny bil");

  const saveHandler = () => {
    setSave("Ny bil lagret");
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
        Legg til bil
      </Typography>
      <TextField id="outlined-basic" label="Bilmerke" variant="outlined" />
      <TextField id="outlined-basic" label="Bilmodell" variant="outlined" />
      <TextField id="outlined-basic" label="Årsmodell" variant="outlined" />
      <TextField id="outlined-basic" label="Hentested" variant="outlined" />
      <TextField id="outlined-basic" label="Pris/uke" variant="outlined" />
      <GearSelect />
      <WeekSelect />
      <EquipmentSelect />
      <TypeSelect />
      <button className="buttons" onClick={saveHandler}>
        {save}
      </button>
    </Box>
  );
}
