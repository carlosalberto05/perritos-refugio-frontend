import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import DonateSection from "./DonateSection";

describe("DonateSection Component", () => {
  test("renders donate section content", () => {
    // Mock onDonateClick
    const mockDonateClick = vi.fn();
    render(<DonateSection onDonateClick={mockDonateClick} />);

    expect(screen.getByText("Apoya Nuestra Misión")).toBeInTheDocument();
    expect(screen.getByText("Donar Ahora")).toBeInTheDocument();
  });

  test("calls onDonateClick when button is clicked", () => {
    const mockDonateClick = vi.fn();
    render(<DonateSection onDonateClick={mockDonateClick} />);

    // Buscar botón Donar Ahora. Puede haber varios textos similares pero el botón es específico
    const button = screen.getByRole("button", { name: /Donar Ahora/i });
    fireEvent.click(button);

    expect(mockDonateClick).toHaveBeenCalled();
  });
});
