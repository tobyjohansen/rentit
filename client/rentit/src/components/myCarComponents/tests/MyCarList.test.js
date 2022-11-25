import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MyCarList from "../MyCarList";

const MockMyCarList = () => {
  return (
    <BrowserRouter>
      <MyCarList />
    </BrowserRouter>
  );
};

describe("\nUser should be able to see a list of added own cars", () => {
  test("Test passes if car list length is not 0", async () => {
    render(<MockMyCarList />);

    const carElements = await screen.findAllByRole("list");
    expect(carElements).not.toHaveLength(0);
  });
});
