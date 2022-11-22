import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import AllCars from "../AllCars";

const MockAllCars = () => {
  return (
    <BrowserRouter>
      <AllCars />
    </BrowserRouter>
  );
};

describe("\nUser should be able to end car hire in the app by returning car", () => {
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

describe("User should be able to send a rental request for chosen car", () => {
  test("Test will pass if modal renders available week numbers to choose from", () => {
    render(<MockAllCars />);
    const openModal = screen.getByText("Les mer", { exact: false });
    userEvent.click(openModal);
    const sendRequest = screen.getByText("Ledige ukenummer", { exact: false });
    expect(sendRequest).toBeInTheDocument();
  });
  test("Test will pass if modal renders 'Send forespørsel' if button is NOT clicked", () => {
    render(<MockAllCars />);
    const openModal = screen.getByText("Les mer", { exact: false });
    userEvent.click(openModal);
    const sendRequest = screen.getByText("Send forespørsel", { exact: false });
    expect(sendRequest).toBeInTheDocument();
  });
  test("Test will pass if modal renders 'Forespørsel sendt' when button is clicked", () => {
    render(<MockAllCars />);
    const openModal = screen.getByText("Les mer", { exact: false });
    userEvent.click(openModal);
    const sendRequest = screen.getByText("Send forespørsel", { exact: false });
    userEvent.click(sendRequest);
    const requestMessage = screen.getByText("Forespørsel sendt", {
      exact: false,
    });
    expect(requestMessage).toBeInTheDocument();
  });
});

describe("\nUser should be able to see available weeks in modal", () => {
  test("Test should pass if week list length is not 0", async () => {
    render(<MockAllCars />);
    const openModal = screen.getByText("Les mer", { exact: false });
    userEvent.click(openModal);
    const weeksAvailable = await screen.findAllByRole("list");
    expect(weeksAvailable).not.toHaveLength(0);
  });
});
