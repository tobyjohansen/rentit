import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import AllCars from "../components/allCarsComponents/AllCars";

describe("User should be able to return car", () => {
  test("AllCars component renders 'Lever bil' when 'Lever bil' button is not clicked", () => {
    render(
      <BrowserRouter>
        <AllCars />
      </BrowserRouter>
    );
    const returnElement = screen.getByText("Lever bil", { exact: false });
    expect(returnElement).toBeInTheDocument();
  });
  test("AllCars component renders 'Bilen er levert' when 'Lever bil' button is clicked", () => {
    render(
      <BrowserRouter>
        <AllCars />
      </BrowserRouter>
    );
    const returnButton = screen.getByText("Lever bil", { exact: false });
    userEvent.click(returnButton);

    const returnText = screen.getByText("Bilen er levert", {
      exact: false,
    });
    expect(returnText).toBeInTheDocument();
  });
  test("AllCars component does NOT render 'Lever bil' when 'Lever bil' button is clicked", () => {
    render(
      <BrowserRouter>
        <AllCars />
      </BrowserRouter>
    );
    const returnButton = screen.getByText("Lever bil", { exact: false });
    userEvent.click(returnButton);

    const returnText = screen.getByText("Bilen er levert", {
      exact: false,
    });
    expect(returnText).not.toBeInTheDocument;
  });
});

describe("Other tests: Component AllCars", () => {
  test("renders 'les mer' on each car component button if NOT clicked", () => {
    render(
      <BrowserRouter>
        <AllCars />
      </BrowserRouter>
    );
    const readMoreElement = screen.getByText("les mer", { exact: false });
    expect(readMoreElement).toBeInTheDocument();
  });
});
