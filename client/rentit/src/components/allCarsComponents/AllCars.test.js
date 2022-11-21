import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import AllCars from "./AllCars";

const MockAllCars = () => {
  return (
    <BrowserRouter>
      <AllCars />
    </BrowserRouter>
  );
};

describe("User should be able to end car hire in the app by returning car", () => {
  test("AllCars component renders 'Lever bil' when 'Lever bil' button is not clicked", () => {
    render(<MockAllCars />);
    const returnElement = screen.getByText("Lever bil", { exact: false });
    expect(returnElement).toBeInTheDocument();
  });
  test("AllCars component renders 'Bilen er levert' when 'Lever bil' button is clicked", () => {
    render(<MockAllCars />);
    const returnButton = screen.getByText("Lever bil", { exact: false });
    userEvent.click(returnButton);

    const returnText = screen.getByText("Bilen er levert", {
      exact: false,
    });
    expect(returnText).toBeInTheDocument();
  });
  test("AllCars component does NOT render 'Lever bil' when 'Lever bil' button is clicked", () => {
    render(<MockAllCars />);
    const returnButton = screen.getByText("Lever bil", { exact: false });
    userEvent.click(returnButton);

    const returnText = screen.getByText("Bilen er levert", {
      exact: false,
    });
    expect(returnText).not.toBeInTheDocument;
  });
});

describe("User should be able to see the car data of available cars", () => {
  test("AllCars renders 'les mer' on each car component button if NOT clicked", () => {
    render(<MockAllCars />);
    const readMoreElement = screen.getByText("les mer", { exact: false });
    expect(readMoreElement).toBeInTheDocument();
  });
  test("AllCars renders car price", () => {
    render(<MockAllCars />);
    const readMoreElement = screen.getByText("pris", { exact: false });
    expect(readMoreElement).toBeInTheDocument();
  });
  test("AllCars renders pickup location", () => {
    render(<MockAllCars />);
    const readMoreElement = screen.getByText("hentested", { exact: false });
    expect(readMoreElement).toBeInTheDocument();
  });
});
