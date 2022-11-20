import { render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AddCarForm from "./AddCarForm";

const MockAddCarForm = () => {
  return (
    <BrowserRouter>
      <AddCarForm />
    </BrowserRouter>
  );
};

describe("User should see a car data form to fill out with car values", () => {
  test("AddCarForm renders a textbox labeled 'Bilmerke'", () => {
    render(<MockAddCarForm />);
    const carBrand = screen.getByLabelText(/bilmerke/i);
    expect(carBrand).toBeInTheDocument();
  });
  test("AddCarForm renders a textbox labeled 'Bilmodell'", () => {
    render(<MockAddCarForm />);
    const carModel = screen.getByLabelText(/Bilmodell/i);
    expect(carModel).toBeInTheDocument();
  });
  test("AddCarForm renders a textbox labeled 'Pris/uke'", () => {
    render(<MockAddCarForm />);
    const carPrice = screen.getByLabelText(/Pris\/uke/i);
    expect(carPrice).toBeInTheDocument();
  });
  test("AddCarForm renders a textbox labeled 'Årsmodell'", () => {
    render(<MockAddCarForm />);
    const carYear = screen.getByLabelText(/Årsmodell/i);
    expect(carYear).toBeInTheDocument();
  });
  test("AddCarForm renders a textbox labeled 'Pris/km over grense'", () => {
    render(<MockAddCarForm />);
    const carPriceAfterLimit = screen.getByLabelText(/Pris\/km over grense/i);
    expect(carPriceAfterLimit).toBeInTheDocument();
  });
  test("AddCarForm renders a selectbox labeled 'Drivstoff'", () => {
    render(<MockAddCarForm />);
    const carFuel = screen.getByLabelText(/Drivstoff/i);
    expect(carFuel).toBeInTheDocument();
  });
  test("AddCarForm renders a selectbox labeled 'Girkasse'", () => {
    render(<MockAddCarForm />);
    const carGear = screen.getByLabelText(/Girkasse/i);
    expect(carGear).toBeInTheDocument();
  });
  test("AddCarForm renders a textbox labeled 'Hentested'", () => {
    render(<MockAddCarForm />);
    const carLocation = screen.getByLabelText(/Hentested/i);
    expect(carLocation).toBeInTheDocument();
  });
  test("AddCarForm renders a textbox labeled 'Registreringsnr'", () => {
    render(<MockAddCarForm />);
    const carRegNo = screen.getByLabelText(/Registreringsnr./i);
    expect(carRegNo).toBeInTheDocument();
  });
  test("AddCarForm renders a textbox labeled 'Km-grense'", () => {
    render(<MockAddCarForm />);
    const carLimit = screen.getByLabelText(/Km-grense/i);
    expect(carLimit).toBeInTheDocument();
  });
  test("AddCarForm renders a selectbox labeled 'Biltype'", () => {
    render(<MockAddCarForm />);
    const carType = screen.getByLabelText(/Biltype/i);
    expect(carType).toBeInTheDocument();
  });
});
