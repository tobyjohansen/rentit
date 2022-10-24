import React, { useState } from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

export default function TypeSelect() {
  const [type, setType] = useState("");

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Biltype</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={type}
        label="Biltype"
        onChange={handleTypeChange}
      >
        <MenuItem value={"regular"}>Personbil</MenuItem>
        <MenuItem value={"large"}>Stasjonsvogn</MenuItem>
        <MenuItem value={"van"}>Varebil</MenuItem>
      </Select>
    </FormControl>
  );
}
