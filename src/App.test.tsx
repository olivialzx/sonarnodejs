import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "./App";

describe("App component", () => {
  it("renders the dashboard heading", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { name: /dashboard/i });
    expect(heading).toBeInTheDocument();
  });
});
