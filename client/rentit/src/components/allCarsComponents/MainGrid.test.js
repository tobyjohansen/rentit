import { fireEvent, render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import MainGrid from "./MainGrid";
import user from "@testing-library/user-event";
import ModalContent from "./ModalContent";

describe("User should be able to navigate to 'Mine biler' and 'Min profil' from main page", () => {
  it("Button 'Mine biler' navigates user to /my-cars path when clicked", async () => {
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
  it("Button 'Min profil' navigates user to /user-profile path when clicked", () => {
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
  it("Rent-IT logo navigates user home to /rentit path when clicked", () => {
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
