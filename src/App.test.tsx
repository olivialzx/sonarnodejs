// src/App.test.tsx

/**
 * @vitest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
// src/App.test.tsx

import { expect } from "vitest";
import App from "./App";

describe("App component", () => {
  it("renders the dashboard heading", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { name: /dashboard/i });
    expect(heading).toBeInTheDocument();
  });
});
