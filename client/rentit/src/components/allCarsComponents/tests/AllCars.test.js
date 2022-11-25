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

describe("\nUser should be able to end car rental period", () => {
  test("'Test will pass  if 'Lever bil' button is visible when button is NOT clicked", () => {
    render(<MockAllCars />);
    const returnElement = screen.getByText("Lever bil", { exact: false });
    expect(returnElement).toBeInTheDocument();
  });
  test("'Test will pass if 'Lever bil' button changes text to 'Bilen er levert' when button is clicked", () => {
    render(<MockAllCars />);
    const returnButton = screen.getByText("Lever bil", { exact: false });
    userEvent.click(returnButton);

    const returnText = screen.getByText("Bilen er levert", {
      exact: false,
    });
    expect(returnText).toBeInTheDocument();
  });
});

describe("\nUser should be able to see the car data of available cars", () => {
  test("Test will pass if 'les mer' button is visible on each car component if NOT clicked", () => {
    render(<MockAllCars />);
    const readMoreElement = screen.getByText("les mer", { exact: false });
    expect(readMoreElement).toBeInTheDocument();
  });
  test("Test will pass if the text 'pris' is visible on each car component", () => {
    render(<MockAllCars />);
    const readMoreElement = screen.getByText("pris", { exact: false });
    expect(readMoreElement).toBeInTheDocument();
  });
  test("Test will pass if the text 'hentested' is visible on each car component", () => {
    render(<MockAllCars />);
    const readMoreElement = screen.getByText("hentested", { exact: false });
    expect(readMoreElement).toBeInTheDocument();
  });
});

describe("User should be able to send a rental request for chosen car", () => {
  test("Test will pass if clicking 'Les mer' button opens a modal with extended car data where 'Ledige ukenummer' is visible", () => {
    render(<MockAllCars />);
    const openModal = screen.getByText("Les mer", { exact: false });
    userEvent.click(openModal);
    const sendRequest = screen.getByText("Ledige ukenummer", { exact: false });
    expect(sendRequest).toBeInTheDocument();
  });
  test("Test will pass if opened modal renders 'Send forespørsel' text on button if it is NOT clicked", () => {
    render(<MockAllCars />);
    const openModal = screen.getByText("Les mer", { exact: false });
    userEvent.click(openModal);
    const sendRequest = screen.getByText("Send forespørsel", { exact: false });
    expect(sendRequest).toBeInTheDocument();
  });
  test("Test will pass if opened modal renders 'Forespørsel sendt' text on button if it has been clicked", () => {
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

describe("\nUser should be able to see available weeks when opening modal with 'les mer' button", () => {
  test("Test passes if week list length is not 0", async () => {
    render(<MockAllCars />);
    const openModal = screen.getByText("Les mer", { exact: false });
    userEvent.click(openModal);
    const weeksAvailable = await screen.findAllByRole("list");
    expect(weeksAvailable).not.toHaveLength(0);
  });
});
