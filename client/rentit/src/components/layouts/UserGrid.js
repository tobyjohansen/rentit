import AppBar from "./AppBar";
import { Box } from "@mui/material";
import AddCarForm from "../carview/AddCarForm";
import EditCarForm from "../carview/EditCarForm";
import "../../App.css";

function UserGrid() {
  return (
    <div>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(1fr, 1fr, 1fr, 1fr, 1fr)",
          gap: 1,
          gridTemplateRows: "auto",
          gridTemplateAreas: `"header header header header header"
          "sidebar main main main main"
  "sidebar main main main main"
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
          <ul>
            <li>Bil 1</li>
            <li>Bil 2</li>
            <li>Bil 3</li>
          </ul>
        </Box>
        <Box sx={{ gridArea: "main" }}>
          <AddCarForm /> <EditCarForm />
        </Box>
        <Box sx={{ gridArea: "footer", p: "1rem" }}>Footer</Box>
      </Box>
    </div>
  );
}

export default UserGrid;
