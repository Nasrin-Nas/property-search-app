import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders search button", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /search/i });
  expect(button).toBeInTheDocument();
});

test("renders main heading", () => {
  render(<App />);
  const heading = screen.getByRole("heading", {
    name: /search your next home/i,
  });
  expect(heading).toBeInTheDocument();
});

test("renders navbar links", () => {
  render(<App />);

  const homeLink = screen.getByRole("link", { name: /^home$/i });
  const favLink = screen.getByRole("link", { name: /favourites/i });

  expect(homeLink).toBeInTheDocument();
  expect(favLink).toBeInTheDocument();
});


test("renders footer text", () => {
  render(<App />);
  expect(
    screen.getByText(/propertysearch app/i)
  ).toBeInTheDocument();
});
