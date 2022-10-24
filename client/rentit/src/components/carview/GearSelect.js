import React, { useState } from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

export default function GearSelect() {
  const [enteredGear, setEnteredGear] = useState("");

  const gearChangeHandler = (e) => {
    setEnteredGear(e.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Girkasse</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={enteredGear}
        label="Girkasse"
        onChange={gearChangeHandler}
      >
        <MenuItem value={"manual"}>Manuell</MenuItem>
        <MenuItem value={"automatic"}>Automat</MenuItem>
      </Select>
    </FormControl>
  );
}
