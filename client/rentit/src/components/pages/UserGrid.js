import AppBar from "../carview/AppBar";
import { Box } from "@mui/material";
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
          {/*}<img
            src="https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="Mann i dress"
          />*/}
          <ul>
            <li>Ola Nordmann</li>
            <li>o.nordmann@rentit.com</li>
            <li>+47 99999999</li>
            <li>Førerkort klasse B</li>
            <li>05-03-1955</li>
            <li>Sørlia 34, 0693 Oslo</li>
          </ul>
        </Box>
        <Box sx={{ gridArea: "footer", p: "1rem" }}></Box>
      </Box>
    </div>
  );
}

export default UserGrid;
