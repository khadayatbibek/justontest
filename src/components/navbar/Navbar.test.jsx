import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Navbar from "./Navbar";

test("Navbar renders properly", () => {
  render(<Navbar />);
  const textElement = screen.getByText(/EN/i);
  expect(textElement).toBeInTheDocument();
});
