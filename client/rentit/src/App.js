import "./App.css";
import MainGrid from "./components/pages/MainGrid";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { Route } from "react-router-dom";
import CarProfileGrid from "./components/pages/CarProfileGrid";
import UserGrid from "./components/pages/UserGrid";

const theme = createTheme({
  palette: {
    primary: {
      light: "#83c3f7",
      main: "#64b5f6",
      dark: "#467eac",
    },
    secondary: {
      light: "#f381a7",
      main: "#f06292",
      dark: "#a84466",
    },
  },
  typography: {
    fontFamily: ["Roboto", '"Helvetica Neue"', "Arial"].join(","),
    h5: {
      fontSize: 20,
    },
    h6: {
      fontSize: 14,
    },
    button: {
      fontSize: 14,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Route path="/main">
          <MainGrid />
        </Route>
        <Route path="/rent-out">
          <CarProfileGrid />
        </Route>
        <Route path="/user">
          <UserGrid />
        </Route>
      </div>
    </ThemeProvider>
  );
}

export default App;
