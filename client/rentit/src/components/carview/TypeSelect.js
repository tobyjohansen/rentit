import React, { useState } from "react";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";

export default function TypeSelect() {
  const [enteredType, setEnteredType] = useState("");

  const typeChangeHandler = (e) => {
    setEnteredType(e.target.value);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Biltype</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={enteredType}
        label="Biltype"
        onChange={typeChangeHandler}
      >
        <MenuItem value={"regular"}>Personbil</MenuItem>
        <MenuItem value={"large"}>Stasjonsvogn</MenuItem>
        <MenuItem value={"van"}>Varebil</MenuItem>
      </Select>
    </FormControl>
  );
}
