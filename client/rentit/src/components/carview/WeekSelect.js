import React, { useState } from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  OutlinedInput,
  ListItemText,
  Checkbox,
} from "@mui/material";

export default function WeekSelect() {
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const [enteredAvailability, setEnteredAvailability] = useState([]);

  const availabilityChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setEnteredAvailability(
      typeof value === "string" ? value.split(",") : value
    );
  };

  const weeks = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-multiple-checkbox-label">Ledige uker</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={enteredAvailability}
        onChange={availabilityChangeHandler}
        input={<OutlinedInput label="Ledige uker" />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {weeks.map((week) => (
          <MenuItem key={week} value={week}>
            <Checkbox checked={enteredAvailability.indexOf(week) > -1} />
            <ListItemText primary={week} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
