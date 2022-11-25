import AppBar from "../appBarComponents/AppBar";
import { Box } from "@mui/material";
import "../../App.css";
import UserCard from "./UserCard";

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
          "main main main main main"
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
        <Box sx={{ gridArea: "main" }}>
          <UserCard />
        </Box>
      </Box>
    </div>
  );
}

export default UserGrid;
