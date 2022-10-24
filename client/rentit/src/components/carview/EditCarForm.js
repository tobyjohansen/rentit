import React, { useState } from "react";
import {
  Box,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Typography,
  OutlinedInput,
  ListItemText,
  Checkbox,
} from "@mui/material";

export default function BasicTextFields() {
  const [buttonTitle, setButtonTitle] = useState("Oppdater bildata");

  const clickHandler = () => {
    setButtonTitle("Bildata oppdatert!");
  };

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
  const [gear, setGear] = useState("");

  const handleGearChange = (event) => {
    setGear(event.target.value);
  };

  const [type, setType] = useState("");

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const [availability, setAvailability] = useState([]);

  const handleAvailabilityChange = (event) => {
    const {
      target: { value },
    } = event;
    setAvailability(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const weeks = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];

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
      <TextField id="outlined-basic" label="Referanse" variant="outlined" />
      <TextField id="outlined-basic" label="Bilmerke" variant="outlined" />
      <TextField id="outlined-basic" label="Bilmodell" variant="outlined" />
      <TextField id="outlined-basic" label="Årsmodell" variant="outlined" />
      <TextField id="outlined-basic" label="Hentested" variant="outlined" />
      <TextField id="outlined-basic" label="Pris/uke" variant="outlined" />
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
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Ledige uker</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={availability}
          onChange={handleAvailabilityChange}
          input={<OutlinedInput label="Ledige uker" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {weeks.map((week) => (
            <MenuItem key={week} value={week}>
              <Checkbox checked={availability.indexOf(week) > -1} />
              <ListItemText primary={week} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
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
      <Box>
        <button className="buttons" onClick={clickHandler}>
          {buttonTitle}
        </button>
      </Box>
    </Box>
  );
}
