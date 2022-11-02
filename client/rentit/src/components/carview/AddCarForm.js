import React, { useState } from "react";
import "../../App.css";
import {
  Box,
  TextField,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  OutlinedInput,
  ListItemText,
  Checkbox,
  Button,
} from "@mui/material";

export default function AddCarForm() {
  const [save, setSave] = useState("Lagre ny bil");
  const [enteredBrand, setEnteredBrand] = useState("");
  const [enteredModel, setEnteredModel] = useState("");
  const [enteredYear, setEnteredYear] = useState("");
  const [enteredLocation, setEnteredLocation] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredAvailability, setEnteredAvailability] = useState([]);
  const [enteredEquipment, setEnteredEquipment] = useState([]);
  const [enteredGear, setEnteredGear] = useState("");
  const [enteredType, setEnteredType] = useState("");
  const [enteredKmLimit, setEnteredKmLimit] = useState("");
  const [enteredFuel, setEnteredFuel] = useState("");
  const [enteredPricePerKmOver, setEnteredPricePerKmOver] = useState("");

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

  const saveHandler = () => {
    setSave("Lagret");
  };
  const carBrandChangeHandler = (e) => {
    setEnteredBrand(e.target.value);
  };
  const carModelChangeHandler = (e) => {
    setEnteredModel(e.target.value);
  };
  const yearChangeHandler = (e) => {
    setEnteredYear(e.target.value);
  };
  const locationChangeHandler = (e) => {
    setEnteredLocation(e.target.value);
  };
  const priceChangeHandler = (e) => {
    setEnteredPrice(e.target.value);
  };
  const availabilityChangeHandler = (e) => {
    const {
      target: { value },
    } = e;
    setEnteredAvailability(
      typeof value === "string" ? value.split(",") : value
    );
  };
  const equipmentChangeHandler = (e) => {
    const {
      target: { value },
    } = e;
    setEnteredEquipment(typeof value === "string" ? value.split(",") : value);
  };
  const gearChangeHandler = (e) => {
    setEnteredGear(e.target.value);
  };
  const typeChangeHandler = (e) => {
    setEnteredType(e.target.value);
  };
  const kmChangeHandler = (e) => {
    setEnteredKmLimit(e.target.value);
  };
  const fuelChangeHandler = (e) => {
    setEnteredFuel(e.target.value);
  };
  const pricePerKmChangeHandler = (e) => {
    setEnteredPricePerKmOver(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const carData = {
      brand: enteredBrand,
      model: enteredModel,
      year: enteredYear,
      location: enteredLocation,
      price: enteredPrice,
      availability: enteredAvailability,
      extras: enteredEquipment,
      gear: enteredGear,
      type: enteredType,
      km_limit: enteredKmLimit,
      fuel: enteredFuel,
      price_per_km_after_limit: enteredPricePerKmOver,
    };

    //Fetch Post method for creating a new car
    fetch("http://localhost:3300/api/v1/cars/", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(carData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    //End of fetch

    console.log(carData);
    setEnteredBrand("");
    setEnteredGear("");
    setEnteredLocation("");
    setEnteredModel("");
    setEnteredPrice("");
    setEnteredYear("");
    setEnteredAvailability([]);
    setEnteredType("");
    setEnteredGear("");
    setEnteredEquipment([]);
    setSave("Lagre");
    setEnteredKmLimit("");
    setEnteredFuel("");
    setEnteredPricePerKmOver("");
  };

  const weeks = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24,
  ];

  const extras = ["Barnesete", "Hengerfeste", "Piggdekk", "Jekkestropper"];

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": {
          m: 2,
          width: "30ch",
        },
      }}
      noValidate
      autoComplete="off"
      onSubmit={submitHandler}
    >
      <Typography variant="h5" gutterBottom>
        Registrer ny bil:
      </Typography>
      <TextField
        onChange={carBrandChangeHandler}
        id="outlined-basic"
        label="Bilmerke"
        variant="outlined"
        value={enteredBrand}
      />
      <TextField
        onChange={carModelChangeHandler}
        id="outlined-basic"
        label="Bilmodell"
        variant="outlined"
        value={enteredModel}
      />
      <TextField
        onChange={yearChangeHandler}
        id="outlined-basic"
        label="Årsmodell"
        variant="outlined"
        value={enteredYear}
      />
      <TextField
        onChange={locationChangeHandler}
        id="outlined-basic"
        label="Hentested"
        variant="outlined"
        value={enteredLocation}
      />
      <TextField
        onChange={priceChangeHandler}
        id="outlined-basic"
        label="Pris/uke"
        variant="outlined"
        value={enteredPrice}
      />
      <TextField
        onChange={kmChangeHandler}
        id="outlined-basic"
        label="Km-grense"
        variant="outlined"
        value={enteredKmLimit}
      />
      {/* 
      <GearSelect />
      <WeekSelect />
      
      <EquipmentSelect />
      <TypeSelect />*/}
      <FormControl fullWidth>
        <InputLabel id="fuel-select">Drivstoff</InputLabel>
        <Select
          labelId="fuel-select"
          id="fuel-select"
          value={enteredFuel}
          label="Drivstoff"
          onChange={fuelChangeHandler}
        >
          <MenuItem value={"Gas"}>Bensin</MenuItem>
          <MenuItem value={"Diesel"}>Diesel</MenuItem>
          <MenuItem value={"Electricity"}>Elektrisitet</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="gear-select">Girkasse</InputLabel>
        <Select
          labelId="gear-select"
          id="gear-select"
          value={enteredGear}
          label="Girkasse"
          onChange={gearChangeHandler}
        >
          <MenuItem value={"Manuell"}>Manuell</MenuItem>
          <MenuItem value={"Automat"}>Automat</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="type-select">Biltype</InputLabel>
        <Select
          labelId="type-select"
          id="type-select"
          value={enteredType}
          label="Biltype"
          onChange={typeChangeHandler}
        >
          <MenuItem value={"Regular"}>Personbil</MenuItem>
          <MenuItem value={"Large"}>Stasjonsvogn</MenuItem>
          <MenuItem value={"Xlarge"}>SUV</MenuItem>
          <MenuItem value={"Van"}>Varebil</MenuItem>
        </Select>
      </FormControl>
      <TextField
        onChange={pricePerKmChangeHandler}
        id="outlined-basic"
        label="Pris/km over grense"
        variant="outlined"
        value={enteredPricePerKmOver}
      />
      <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-checkbox-label">Ekstrautstyr</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={enteredEquipment}
          onChange={equipmentChangeHandler}
          input={<OutlinedInput label="Ekstrautstyr" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {extras.map((extra) => (
            <MenuItem key={extra} value={extra}>
              <Checkbox checked={enteredEquipment.indexOf(extra) > -1} />
              <ListItemText primary={extra} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
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
      <Button
        type="submit"
        variant="outlined"
        className="buttons"
        onClick={saveHandler}
      >
        {save}
      </Button>
    </Box>
  );
}
