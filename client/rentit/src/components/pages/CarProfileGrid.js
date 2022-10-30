import AppBar from "../carview/AppBar";
import { Box } from "@mui/material";
import AddCarForm from "../carview/AddCarForm";
import EditCarForm from "../carview/EditCarForm";
import "../../App.css";

function CarProfileGrid() {
  return (
    <div>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(1fr, 1fr, 1fr, 1fr, 1fr)",
          gap: 1,
          gridTemplateRows: "auto",
          gridTemplateAreas: `"header header header header header"
          "sidebar sidebar main main main"
  "sidebar sidebar main main main"
  "footer footer footer footer footer"`,
        }}
      >
        <Box
          sx={{
            gridArea: "header",
          }}
        >
          <AppBar />
        </Box>
        <Box
          sx={{
            gridArea: "sidebar",
            p: "1rem",
            borderRight: "1px solid lightgrey",
            marginTop: "2rem",
            marginBotton: "2rem",
          }}
        >
          Mine biler:
        </Box>
        <Box sx={{ gridArea: "main" }}>
          <AddCarForm /> <EditCarForm />
        </Box>
        <Box sx={{ gridArea: "footer", p: "1rem" }}></Box>
      </Box>
    </div>
  );
}

export default CarProfileGrid;
