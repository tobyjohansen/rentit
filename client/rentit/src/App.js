import "./App.css";
import CarList from "./components/carview/CarList";
import AppBar from "./components/navigation/AppBar";
import { Box } from "@mui/material";
//import { blue } from "@mui/material/colors";

//const primary = blue[500];
//const accent = blue[100];

function App() {
  return (
    <div>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 1,
          gridTemplateRows: "auto",
          gridTemplateAreas: `"header header header header"
          "sidebar info info info"
  "sidebar main main main"
  "footer footer footer footer"`,
        }}
      >
        <Box
          sx={{
            gridArea: "header",
            border: "1px solid black",
          }}
        >
          <AppBar />
        </Box>
        <Box sx={{ gridArea: "sidebar", border: "1px solid black" }}></Box>
        <Box sx={{ gridArea: "info", border: "1px solid black" }}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            {" "}
            orem Ipsum passages, and more recently with desktop publishing
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </Box>
        <Box sx={{ gridArea: "main", border: "1px solid black" }}>
          <CarList />
        </Box>
        <Box sx={{ gridArea: "footer", border: "1px solid black" }}>Footer</Box>
      </Box>
    </div>
  );
}

export default App;
