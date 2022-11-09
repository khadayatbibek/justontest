import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Sidebar from "./Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

test("Check SideBar renders properly", () => {
  render(
    <BrowserRouter>
      <Sidebar />
    </BrowserRouter>
  );
  const textElement = screen.getByText("DASHBOARD");
  expect(textElement).toBeInTheDocument();
});
