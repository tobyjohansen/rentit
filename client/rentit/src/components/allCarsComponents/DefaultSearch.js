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
      <Typography variant="h7" sx={{ mb: "1rem" }}>
        Du har søkt:
      </Typography>
      <Typography variant="h7">1 uke 1-7 mars 2023</Typography>
      <Typography variant="h7">Alle hentesteder</Typography>
      <Typography variant="h7">Sortert etter pris lav-høy</Typography>
      <Typography variant="h7" sx={{ mt: "1rem" }}>
        Resultat:
      </Typography>
    </Box>
  );
}
