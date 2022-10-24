import React, { useState } from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

export default function GearSelect() {
  const [gear, setGear] = useState("");

  const handleGearChange = (event) => {
    setGear(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Girkasse</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={gear}
        label="Girkasse"
        onChange={handleGearChange}
      >
        <MenuItem value={"manual"}>Manuell</MenuItem>
        <MenuItem value={"automatic"}>Automat</MenuItem>
      </Select>
    </FormControl>
  );
}
