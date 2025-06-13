import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import App from "./App";

describe("App", () => {
  it("renders hero text", () => {
    render(<App />);
    const heroText = screen.getByText(/trainer guides/i); // Adjust to match your actual text
    expect(heroText).toBeInTheDocument();
  });
});
