import * as React from "react";
import {
  Box,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Typography,
} from "@mui/material";

export default function BasicTextFields() {
  const [gear, setGear] = React.useState("");

  const handleChange = (event) => {
    setGear(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h3" gutterBottom>
        Legg til bil
      </Typography>
      <TextField id="outlined-basic" label="Bilmerke" variant="outlined" />
      <TextField id="outlined-basic" label="Bilmodell" variant="outlined" />
      <TextField id="outlined-basic" label="Årsmodell" variant="outlined" />
      <TextField id="outlined-basic" label="Hentested" variant="outlined" />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Girkasse</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gear}
          label="Girkasse"
          onChange={handleChange}
        >
          <MenuItem value={"manual"}>Manuell</MenuItem>
          <MenuItem value={"automatic"}>Automat</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
