import React from "react";
import {
  Typography,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  Button,
  OutlinedInput,
} from "@mui/material";
import { useState } from "react";

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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "8%",
  boxShadow: 24,
  p: 4,
};

export default function ModalContent(props) {
  const [weeklyRental, setWeeklyRental] = useState([]);
  const [save, setSave] = useState("Send forespørsel");

  const saveHandler = () => {
    setSave("Forespørsel sendt");
  };
  const weeklyRentHandler = (e) => {
    const {
      target: { value },
    } = e;
    setWeeklyRental(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box sx={style}>
      <Typography variant="h5" sx={{ m: "1rem" }}>
        {props.brand} {props.model}
      </Typography>
      <Typography variant="h6" sx={{ ml: "1rem", mb: "0.4rem" }}>
        Pris: {props.price} NOK/uke
      </Typography>
      <Typography variant="h6" sx={{ ml: "1rem", mb: "0.4rem" }}>
        Hentested: {props.location}
      </Typography>
      <Typography variant="h6" sx={{ ml: "1rem", mb: "0.4rem" }}>
        Årsmodell: {props.year}
      </Typography>
      <Typography variant="h6" sx={{ ml: "1rem", mb: "0.4rem" }}>
        Type bil: {props.type}
      </Typography>
      <Typography variant="h6" sx={{ ml: "1rem", mb: "0.4rem" }}>
        Drivstoff: {props.fuel}
      </Typography>
      <Typography variant="h6" sx={{ ml: "1rem", mb: "0.4rem" }}>
        Gir: {props.gear}
      </Typography>
      <Typography variant="h6" sx={{ ml: "1rem", mb: "0.4rem" }}>
        Max antall km: {props.km_limit}
      </Typography>
      <Typography variant="h6" sx={{ ml: "1rem", mb: "0.4rem" }}>
        Pris over km-grense: {props.price_per_km_after_limit} NOK/km
      </Typography>
      <Typography variant="h6" sx={{ ml: "1rem", mb: "0.4rem" }}>
        Ledige ukenummer:
      </Typography>
      <ul className="availability_list">
        {props.availability?.map((week) => (
          <li className="list_element_styling" key={week.toString()}>
            {week}
          </li>
        ))}
      </ul>
      <Typography variant="h6" sx={{ ml: "1rem", mb: "0.4rem" }}>
        Eventuelt ekstrautstyr inkl:
      </Typography>
      <ul className="equiptment_list">
        {props.extras?.map((extra) => (
          <li className="list_element_styling" key={extra.toString()}>
            {extra}
          </li>
        ))}
      </ul>
      <Box>
        <FormControl sx={{ m: 1, width: "20ch" }}>
          <InputLabel id="demo-multiple-checkbox-label">
            Velg ukenummer
          </InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={weeklyRental}
            onChange={weeklyRentHandler}
            input={<OutlinedInput label="Velg ukenummer" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {props.availability?.map((week) => (
              <MenuItem key={week.toString()} value={week}>
                <Checkbox checked={weeklyRental.indexOf(week) > -1} />
                <ListItemText primary={week} />
              </MenuItem>
            ))}
          </Select>
          <Button className="buttons" onClick={saveHandler}>
            {save}
          </Button>
        </FormControl>
      </Box>
    </Box>
  );
}
