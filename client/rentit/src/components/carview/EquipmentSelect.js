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

export default function EquipmentSelect() {
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

  const [equipment, setEquipment] = useState([]);

  const handleEquipmentChange = (event) => {
    const {
      target: { value },
    } = event;
    setEquipment(typeof value === "string" ? value.split(",") : value);
  };

  const extras = [
    "Barnesete",
    "Hengerfeste",
    "Piggdekk",
    "Jekkestropper",
    "Hengerfeste",
  ];

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-multiple-checkbox-label">Ekstrautstyr</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={equipment}
        onChange={handleEquipmentChange}
        input={<OutlinedInput label="Ekstrautstyr" />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        {extras.map((extra) => (
          <MenuItem key={extra} value={extra}>
            <Checkbox checked={equipment.indexOf(extra) > -1} />
            <ListItemText primary={extra} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
