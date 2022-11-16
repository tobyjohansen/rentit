import { getByLabelText, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import AllCars from "../components/allCarsComponents/AllCars";
import AddCarForm from "../components/myCarComponents/AddCarForm";
import user from "@testing-library/user-event";

const MockAddCarForm = () => {
  return (
    <BrowserRouter>
      <AddCarForm />
    </BrowserRouter>
  );
};

describe("AddCarForm should show car data form for user to fill out", () => {
  test("renders a textbox labeled 'Bilmerke'", () => {
    render(<MockAddCarForm />);
    const carBrand = screen.getByLabelText(/bilmerke/i);
    expect(carBrand).toBeInTheDocument();
  });
  test("renders a textbox labeled 'Bilmodell'", () => {
    render(<MockAddCarForm />);
    const carModel = screen.getByLabelText(/Bilmodell/i);
    expect(carModel).toBeInTheDocument();
  });
  test("renders a textbox labeled 'Pris/uke'", () => {
    render(<MockAddCarForm />);
    const carPrice = screen.getByLabelText(/Pris\/uke/i);
    expect(carPrice).toBeInTheDocument();
  });
  test("renders a textbox labeled 'Årsmodell'", () => {
    render(<MockAddCarForm />);
    const carYear = screen.getByLabelText(/Årsmodell/i);
    expect(carYear).toBeInTheDocument();
  });
  test("renders a textbox labeled 'Pris/km over grense'", () => {
    render(<MockAddCarForm />);
    const carPriceAfterLimit = screen.getByLabelText(/Pris\/km over grense/i);
    expect(carPriceAfterLimit).toBeInTheDocument();
  });
  test("renders a textbox labeled 'Drivstoff'", () => {
    render(<MockAddCarForm />);
    const carFuel = screen.getByLabelText(/Drivstoff/i);
    expect(carFuel).toBeInTheDocument();
  });
  test("renders a textbox labeled 'Girkasse'", () => {
    render(<MockAddCarForm />);
    const carGear = screen.getByLabelText(/Girkasse/i);
    expect(carGear).toBeInTheDocument();
  });
  test("renders a textbox labeled 'Hentested'", () => {
    render(<MockAddCarForm />);
    const carLocation = screen.getByLabelText(/Hentested/i);
    expect(carLocation).toBeInTheDocument();
  });
  test("renders a textbox labeled 'Registreringsnr'", () => {
    render(<MockAddCarForm />);
    const carRegNo = screen.getByLabelText(/Registreringsnr./i);
    expect(carRegNo).toBeInTheDocument();
  });
  test("renders a textbox labeled 'Km-grense'", () => {
    render(<MockAddCarForm />);
    const carLimit = screen.getByLabelText(/Km-grense/i);
    expect(carLimit).toBeInTheDocument();
  });
  test("renders a selectbox labeled 'Biltype'", () => {
    render(<MockAddCarForm />);
    const carType = screen.getByLabelText(/Biltype/i);
    expect(carType).toBeInTheDocument();
  });
});

describe("User should be able to register a new car to rent out", () => {
  test("User should be able to add and submit a car brand to AddCarForm", () => {
    render(<MockAddCarForm />);
    const carBrand = screen.getByRole("textbox", { name: /Bilmerke/i });
    user.type(carBrand, "Testmerke");
  });
  test("User should be able to add and submit a car model to AddCarForm", () => {
    render(<MockAddCarForm />);
    const carModel = screen.getByRole("textbox", { name: /Bilmodell/i });
    user.type(carModel, "Testmodell");
  });
  test("User should be able to add and submit a car year to AddCarForm", () => {
    render(<MockAddCarForm />);
    const carYear = screen.getByRole("textbox", { name: /Årsmodell/i });
    user.type(carYear, "TestÅrsmodell");
  });
  test("User should be able to add and submit a car pickup location to AddCarForm", () => {
    render(<MockAddCarForm />);
    const carLocation = screen.getByRole("textbox", { name: /Hentested/i });
    user.type(carLocation, "TestHentested");
  });
  test("User should be able to add and submit wanted price per week to AddCarForm", () => {
    render(<MockAddCarForm />);
    const carPrice = screen.getByLabelText(/pris\/uke/i);
    user.type(carPrice, "3500 ");
  });
  test("User should be able to add and submit max driving limit in km to AddCarForm", () => {
    render(<MockAddCarForm />);
    const carLimit = screen.getByRole("textbox", { name: /Km-grense/i });
    user.type(carLimit, "TestKmGrense");
  });
  test("User should be able to add and submit car registration number to AddCarForm", () => {
    render(<MockAddCarForm />);
    const carRegNo = screen.getByRole("textbox", { name: /Registreringsnr./i });
    user.type(carRegNo, "TestRegNr");
  });
  test("User should be able to add and submit a car fuel type to AddCarForm", () => {
    render(<MockAddCarForm />);
    const carFuel = screen.getByRole("button", { name: /Drivstoff/i });
    user.click(carFuel);
  });
  test("User should be able to add a car gear type to AddCarForm", () => {
    render(<MockAddCarForm />);
    const carGear = screen.getByRole("button", { name: /Girkasse/i });
    user.click(carGear);
  });
  test("User should be able to add a car type to AddCarForm", () => {
    render(<MockAddCarForm />);
    const carType = screen.getByRole("button", { name: /Biltype/i });
    user.click(carType);
  });
  test("User should be able to add and submit a price per km if you exceed set driving limit to AddCarForm", () => {
    render(<MockAddCarForm />);
    const carPriceAfterLimit = screen.getByRole("textbox", {
      name: /pris\/km over grense/i,
    });
    user.type(carPriceAfterLimit, "10");
  });
  /*test("All added items to add car form should be submitted to backend when you click 'Lagre' button", () => {
    render(<MockAddCarForm />);

  });*/
});

describe("User should be able to end car hire in the app by returning car", () => {
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
