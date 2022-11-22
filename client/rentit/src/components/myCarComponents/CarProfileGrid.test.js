import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CarProfileGrid from "./CarProfileGrid";

const MockMyCarProfile = () => {
  return (
    <BrowserRouter>
      <CarProfileGrid />
    </BrowserRouter>
  );
};

describe("\nUser should be able to list a new car", () => {
  test("Test passes if CarProfile renders «Registrer ny bil»", () => {
    render(<MockMyCarProfile />);

    const RegisterElement = screen.getByText(/Registrer ny bil/i);
    expect(RegisterElement).toBeInTheDocument();
  });
});
