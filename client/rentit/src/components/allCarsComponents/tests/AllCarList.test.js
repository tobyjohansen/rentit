import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AllCarList from "../AllCarList";

const MockAllCarList = () => {
  return (
    <BrowserRouter>
      <AllCarList />
    </BrowserRouter>
  );
};

describe("\nUser should be able to see a list of available cars to rent", () => {
  test("Test should pass if car list length is not 0", async () => {
    render(<MockAllCarList />);

    const carElements = await screen.findAllByRole("list");
    expect(carElements).not.toHaveLength(0);
  });
});
