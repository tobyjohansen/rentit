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

describe("\nUser should be able to add a car to rent out\n", () => {
  describe("User should be able to fill out a car brand to the add car form", () => {
    test("Test passes if AddCarForm renders a textbox labeled 'Bilmerke'", () => {
      render(<MockAddCarForm />);
      const carBrand = screen.getByLabelText(/bilmerke/i);
      expect(carBrand).toBeInTheDocument();
    });
  });
  describe("User must fill out a car model to the add car form", () => {
    test("Test passes if AddCarForm renders a textbox labeled 'Bilmodell'", () => {
      render(<MockAddCarForm />);
      const carModel = screen.getByLabelText(/Bilmodell/i);
      expect(carModel).toBeInTheDocument();
    });
    test("Test passes if text field ‘Bilmodell’ renders with a *, as it is a required field", () => {
      render(<MockAddCarForm />);
      const requiredField = screen.getByLabelText("Bilmodell*", {
        exact: true,
      });
      expect(requiredField).toBeInTheDocument();
    });
  });
  describe("User should be able to choose a car type in the add car form", () => {
    test("AddCarForm renders a selectbox labeled 'Biltype'", () => {
      render(<MockAddCarForm />);
      const carType = screen.getByLabelText(/Biltype/i);
      expect(carType).toBeInTheDocument();
    });
  });
  describe("User must add a year registered to the add car form", () => {
    test("AddCarForm renders a textbox labeled 'Årsmodell'", () => {
      render(<MockAddCarForm />);
      const carYear = screen.getByLabelText(/Årsmodell/i);
      expect(carYear).toBeInTheDocument();
    });
    test("Test passes if text field ‘Årsmodell’ renders with a *, as it is a required field", () => {
      render(<MockAddCarForm />);
      const requiredField = screen.getByLabelText("Årsmodell*", {
        exact: true,
      });
      expect(requiredField).toBeInTheDocument();
    });
  });
  describe("User must choose available week(s) for his car", () => {
    test("AddCarForm renders a listbox labeled 'Ledige uker'", () => {
      render(<MockAddCarForm />);
      const availableWeeks = screen.getByLabelText(/Ledige uker/i);
      expect(availableWeeks).toBeInTheDocument();
    });
    test("Test passes if text field 'Ledige uker' renders with a *, as it is a required choice", () => {
      render(<MockAddCarForm />);
      const requiredField = screen.getByLabelText("Ledige uker*", {
        exact: true,
      });
      expect(requiredField).toBeInTheDocument();
    });
  });
  describe("User must fill out a pickup location for their car", () => {
    test("AddCarForm renders a textbox labeled 'Hentested'", () => {
      render(<MockAddCarForm />);
      const carLocation = screen.getByLabelText(/Hentested/i);
      expect(carLocation).toBeInTheDocument();
    });
    test("Test passes if text field 'Hentested' renders with a *, as it is a required field", () => {
      render(<MockAddCarForm />);
      const requiredField = screen.getByLabelText("Hentested*", {
        exact: true,
      });
      expect(requiredField).toBeInTheDocument();
    });
  });
  describe("User should be able to choose extra equipment if relevant", () => {
    test("AddCarForm renders a listbox labeled 'Ekstrautstyr'", () => {
      render(<MockAddCarForm />);
      const extraEquip = screen.getByRole("button", {
        name: /ekstrautstyr ​/i,
      });
      expect(extraEquip).toBeInTheDocument();
    });
  });
  describe("User should be able to add a price per week to the add car form", () => {
    test("AddCarForm renders a textbox labeled 'Pris/uke'", () => {
      render(<MockAddCarForm />);
      const carPrice = screen.getByLabelText(/Pris\/uke/i);
      expect(carPrice).toBeInTheDocument();
    });
  });
  describe("User should be able to fill out a max km limit for their car", () => {
    test("AddCarForm renders a textbox labeled 'Km-grense'", () => {
      render(<MockAddCarForm />);
      const carLimit = screen.getByLabelText(/Km-grense/i);
      expect(carLimit).toBeInTheDocument();
    });
  });
  describe("User should be able to fill out a price per km after passed driving limit", () => {
    test("AddCarForm renders a textbox labeled 'Pris/km over grense'", () => {
      render(<MockAddCarForm />);
      const carPriceAfterLimit = screen.getByLabelText(/Pris\/km over grense/i);
      expect(carPriceAfterLimit).toBeInTheDocument();
    });
  });
  describe("User should be able to choose a gas type", () => {
    test("AddCarForm renders a selectbox labeled 'Drivstoff'", () => {
      render(<MockAddCarForm />);
      const carFuel = screen.getByLabelText(/Drivstoff/i);
      expect(carFuel).toBeInTheDocument();
    });
  });
  describe("User should be able to choose a gear type", () => {
    test("AddCarForm renders a selectbox labeled 'Girkasse'", () => {
      render(<MockAddCarForm />);
      const carGear = screen.getByLabelText(/Girkasse/i);
      expect(carGear).toBeInTheDocument();
    });
  });
  describe("User should be able to fill out a car registration number", () => {
    test("AddCarForm renders a textbox labeled 'Registreringsnr'", () => {
      render(<MockAddCarForm />);
      const carRegNo = screen.getByLabelText(/Registreringsnr./i);
      expect(carRegNo).toBeInTheDocument();
    });
  });
});
