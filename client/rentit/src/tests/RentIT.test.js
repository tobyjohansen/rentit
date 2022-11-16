import { render, screen } from "@testing-library/react";
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

describe("User should be able to register a new car to rent out", () => {
  test("User should be able to add a car brand", () => {
    render(<MockAddCarForm />);
    const carBrand = screen.getByRole("textbox", { name: /Bilmerke/i });
    user.type(carBrand, "Testmerke");
  });
  test("User should be able to add a car model", () => {
    render(<MockAddCarForm />);
    const carModel = screen.getByRole("textbox", { name: /Bilmodell/i });
    user.type(carModel, "Testmodell");
  });
  test("User should be able to add a car year", () => {
    render(<MockAddCarForm />);
    const carYear = screen.getByRole("textbox", { name: /Årsmodell/i });
    user.type(carYear, "TestÅrsmodell");
  });
  test("User should be able to add car pickup location", () => {
    render(<MockAddCarForm />);
    const carLocation = screen.getByRole("textbox", { name: /Hentested/i });
    user.type(carLocation, "TestHentested");
  });
  test("User should be able to add wanted price per week", () => {
    render(<MockAddCarForm />);
    const carPrice = screen.getByLabelText(/pris\/uke/i);
    user.type(carPrice, "3500 ");
  });
  test("User should be able to add a max driving limit in km", () => {
    render(<MockAddCarForm />);
    const carLimit = screen.getByRole("textbox", { name: /Km-grense/i });
    user.type(carLimit, "TestKmGrense");
  });
  test("User should be able to add car registration number", () => {
    render(<MockAddCarForm />);
    const carRegNo = screen.getByRole("textbox", { name: /Registreringsnr./i });
    user.type(carRegNo, "TestRegNr");
  });
  /*
  test("User should be able to add car fuel type", () => {
    render(<MockAddCarForm />);
    const carFuel = screen.getByRole("checkbox", { name: /Drivstoff/i });
    user.click(carFuel);
  });
  test("User should be able to add car gear type", () => {
    render(<MockAddCarForm />);
    const carGear = screen.getByRole("checkbox", { name: /Girtype/i });
    user.click(carGear);
  });
  test("User should be able to add car type", () => {
    render(<MockAddCarForm />);
    const carType = screen.getByRole("checkbox", { name: /Biltype/i });
    user.click(carType);
  });*/
  test("User should be able to add a price per km if you exceed set driving limit", () => {
    render(<MockAddCarForm />);
    const carPriceAfterLimit = screen.getByRole("textbox", {
      name: /pris\/km over grense/i,
    });
    user.type(carPriceAfterLimit, "10");
  });
  /*
  test("User should be able to add extra equipment included in the rent, if any", () => {
    render(<MockAddCarForm />);
    const carEquipment = screen.getByRole("checkbox", {
      name: /Ekstrautstyr/i,
    });
    user.click(carEquipment);
  });
  test("User should be able to choose what week numbers car is available for rent", () => {
    render(<MockAddCarForm />);
    const availableWeeks = screen.getByRole("checkbox", {
      name: /Ledige uker/i,
    });
    user.click(availableWeeks);
  });
  test("All added items to add car form should be submitted to backend when you click 'Lagre' button", () => {
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
