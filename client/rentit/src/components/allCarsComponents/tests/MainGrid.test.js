import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router, BrowserRouter } from "react-router-dom";
import MainGrid from "../MainGrid";
import user from "@testing-library/user-event";

const MockMainGrid = () => {
  return (
    <BrowserRouter>
      <MainGrid />
    </BrowserRouter>
  );
};

describe("\nUser should be able to see main menu and navigate home and to its user profile and own car listings", () => {
  describe("User should be able to see a main menu and its elements", () => {
    test("Test passes if Rent-IT logo is visible in header", () => {
      render(<MockMainGrid />);
      const readMoreElement = screen.getByText("Rent-IT", { exact: false });
      expect(readMoreElement).toBeInTheDocument();
    });
    test("Test passes if greeting 'Hei' is visible in header", () => {
      render(<MockMainGrid />);
      const readMoreElement = screen.getByText("Hei,", { exact: false });
      expect(readMoreElement).toBeInTheDocument();
    });
    test("Test passes if profile icon is visible in header with select option 'Min profil'", () => {
      render(<MockMainGrid />);
      const readMoreElement = screen.getByText("Min profil", { exact: false });
      expect(readMoreElement).toBeInTheDocument();
    });
    test("Test passes if profile icon is visible in header with select option 'Mine biler'", () => {
      render(<MockMainGrid />);
      const readMoreElement = screen.getByText("Mine biler", { exact: false });
      expect(readMoreElement).toBeInTheDocument();
    });
  });
  describe("User should be able to navigate to pages 'Mine biler' and 'Min profil' from home", () => {
    test("Test passes if button 'Mine biler' sends user to new path '/my-cars' when clicked", async () => {
      const history = createMemoryHistory();

      render(
        <Router history={history}>
          <MainGrid />
        </Router>
      );
      const selecting = screen.getByRole("button", {
        name: /account of current user/i,
      });
      const goToMyCars = screen.getByText(/mine biler/i);
      user.click(selecting), user.click(goToMyCars);

      expect(history.location.pathname).toEqual("/my-cars");
    });
    test("Test passes if button 'Min profil' sends user to new path '/user-profile' when clicked", () => {
      const history = createMemoryHistory();

      render(
        <Router history={history}>
          <MainGrid />
        </Router>
      );
      const selecting = screen.getByRole("button", {
        name: /account of current user/i,
      });
      const goToProfile = screen.getByText(/min profil/i);
      user.click(selecting), user.click(goToProfile);

      expect(history.location.pathname).toEqual("/user-profile");
    });
    test("Test passes if Rent-IT logo sends user to home path '/rentit' when clicked", () => {
      const history = createMemoryHistory();

      render(
        <Router history={history}>
          <MainGrid />
        </Router>
      );
      user.click(screen.getByText(/Rent-IT/i));

      expect(history.location.pathname).toEqual("/rentit");
    });
  });
});
