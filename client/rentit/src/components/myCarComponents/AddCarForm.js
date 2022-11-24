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
  const [enteredRegNumber, setEnteredRegNumber] = useState("");

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
  const regNumberHandler = (e) => {
    setEnteredRegNumber(e.target.value);
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
      reg_number: enteredRegNumber,
      owner: 12, //Temp. set 12 default for user Ola Nordmann
    };

    //Fetch Post method for creating a new car
    fetch("http://localhost:3300/api/v1/listings/", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(carData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    //End of fetch

    console.log(carData);
    console.log(carData.brand);
    setEnteredBrand("");
    setEnteredGear("");
    setEnteredLocation("");
    setEnteredModel("");
    setEnteredPrice("");
    setEnteredYear("");
    setEnteredAvailability([]);
    setEnteredType("");
    setEnteredEquipment([]);
    setSave("Lagre");
    setEnteredKmLimit("");
    setEnteredFuel("");
    setEnteredPricePerKmOver("");
    setEnteredRegNumber("");
  };

  const weeks = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
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
        label="Bilmodell*"
        variant="outlined"
        value={enteredModel}
      />
      <TextField
        onChange={yearChangeHandler}
        id="outlined-basic"
        label="Årsmodell*"
        variant="outlined"
        value={enteredYear}
      />
      <TextField
        onChange={locationChangeHandler}
        id="outlined-basic"
        label="Hentested*"
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
      <TextField
        onChange={regNumberHandler}
        id="outlined-basic"
        label="Registreringsnr."
        variant="outlined"
        value={enteredRegNumber}
      />
      <FormControl fullWidth>
        <InputLabel id="fuel-select">Drivstoff</InputLabel>
        <Select
          labelId="fuel-select"
          id="fuel-select"
          value={enteredFuel}
          label="Drivstoff"
          onChange={fuelChangeHandler}
        >
          <MenuItem value={"Bensin"}>Bensin</MenuItem>
          <MenuItem value={"Diesel"}>Diesel</MenuItem>
          <MenuItem value={"Elektrisitet"}>Elektrisitet</MenuItem>
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
          <MenuItem value={"Personbil"}>Personbil</MenuItem>
          <MenuItem value={"Stasjonsvogn"}>Stasjonsvogn</MenuItem>
          <MenuItem value={"SUV"}>SUV</MenuItem>
          <MenuItem value={"Varebil"}>Varebil</MenuItem>
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
        <InputLabel id="equipment">Ekstrautstyr</InputLabel>
        <Select
          labelId="equipment"
          id="equipment-checkbox"
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
        <InputLabel id="weeks">Ledige uker*</InputLabel>
        <Select
          labelId="weeks"
          id="weeks-checkbox"
          multiple
          value={enteredAvailability}
          onChange={availabilityChangeHandler}
          input={<OutlinedInput label="Ledige ukenummer" />}
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
