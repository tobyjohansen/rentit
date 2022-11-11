import React from "react";
import { Box, Typography } from "@mui/material";

export default function DefaultSearch() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        mt: "2rem",
      }}
    >
      <Typography variant="h6">Du har søkt:</Typography>
      <Typography variant="h6">1 uke 1-7 mars 2023</Typography>
      <Typography variant="h6">Alle hentesteder</Typography>
      <Typography variant="h6">Sortert etter pris lav-høy</Typography>
      <Typography variant="h7" sx={{ mt: "2rem" }}>
        Resultat:
      </Typography>
    </Box>
  );
}
