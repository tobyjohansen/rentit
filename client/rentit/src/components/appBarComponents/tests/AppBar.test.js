import AppBar from "../AppBar";
import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const MockAppBar = () => {
  return (
    <BrowserRouter>
      <AppBar />
    </BrowserRouter>
  );
};

describe("\nUser should be able to see main menu and navigate home and to its profile", () => {
  test("AppBar renders Rent-IT logo", () => {
    render(<MockAppBar />);
    const readMoreElement = screen.getByText("Rent-IT", { exact: false });
    expect(readMoreElement).toBeInTheDocument();
  });
  test("AppBar renders greeting", () => {
    render(<MockAppBar />);
    const readMoreElement = screen.getByText("Hei,", { exact: false });
    expect(readMoreElement).toBeInTheDocument();
  });
  test("AppBar renders dropdown menu with 'Min profil'", () => {
    render(<MockAppBar />);
    const readMoreElement = screen.getByText("Min profil", { exact: false });
    expect(readMoreElement).toBeInTheDocument();
  });
  test("AppBar renders dropdown menu with 'Mine biler'", () => {
    render(<MockAppBar />);
    const readMoreElement = screen.getByText("Mine biler", { exact: false });
    expect(readMoreElement).toBeInTheDocument();
  });
  test("AppBar renders dropdown menu with 'Mine biler'", () => {
    render(<MockAppBar />);
    const readMoreElement = screen.getByText("Mine biler", { exact: false });
    expect(readMoreElement).toBeInTheDocument();
  });
});
