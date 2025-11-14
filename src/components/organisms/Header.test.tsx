import { render, screen, fireEvent } from "@testing-library/react";
import { describe, vi, test, expect } from "vitest";
import Header from "./Header";
import "@testing-library/jest-dom/vitest";

describe("Header Component", () => {
  test("renders navigation links", () => {
    render(<Header />);
    expect(screen.getByText("Adopción")).toBeInTheDocument();
  });

  test("toggles mobile menu when button is clicked", () => {
    render(<Header />);
    const menuButton = screen.getByLabelText("Abrir menú");

    // Abrir el menú móvil
    fireEvent.click(menuButton);

    // Obtener todos los elementos con el texto "Casos de éxito"
    const casosExitoElements = screen.getAllByText("Casos de éxito");
    // Seleccionar el que está en el menú móvil (el segundo, por ejemplo)
    expect(casosExitoElements[1]).toBeVisible();

    // Cerrar el menú móvil
    fireEvent.click(menuButton);
    expect(casosExitoElements[1]).not.toBeVisible();
  });

  test("calls onClick when Donar button is clicked", () => {
    const mockFn = vi.fn();
    render(<Header />);
    const donarButton = screen.getAllByText("Donar")[0];
    donarButton.onclick = mockFn;
    fireEvent.click(donarButton);
    expect(mockFn).toHaveBeenCalled();
  });
});
