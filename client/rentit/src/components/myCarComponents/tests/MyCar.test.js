import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MyCar from "../MyCar";
import userEvent from "@testing-library/user-event";

const MockMyCar = () => {
  return (
    <BrowserRouter>
      <MyCar />
    </BrowserRouter>
  );
};

describe("\nUser should be able to edit car data on an already registered car", () => {
  test("Test passes if 'Endre' button is visible in user's car profile", () => {
    render(<MockMyCar />);

    const RegisterElement = screen.getByText(/Endre/i);
    expect(RegisterElement).toBeInTheDocument();
  });
  test("Test passes if clicking 'Endre' button opens a modal with edit car form where 'Endre bil' is visible", () => {
    render(<MockMyCar />);
    const openModal = screen.getByText("Endre", { exact: false });
    userEvent.click(openModal);
    const sendRequest = screen.getByText("Endre bil", {
      exact: true,
    });
    expect(sendRequest).toBeInTheDocument();
  });
  test("Test passes if button 'Oppdater bildata' is visible when opening modal by clicking 'Endre'", () => {
    render(<MockMyCar />);
    const openModal = screen.getByText("Endre", { exact: false });
    userEvent.click(openModal);
    const sendRequest = screen.getByText("Oppdater bildata", { exact: false });
    expect(sendRequest).toBeInTheDocument();
  });
});

describe("\nUser should be able to delete an already registered car", () => {
  test("Test passes if 'Slett' button is visible in user's car profile", () => {
    render(<MockMyCar />);

    const RegisterElement = screen.getByText(/Slett/i);
    expect(RegisterElement).toBeInTheDocument();
  });
});
