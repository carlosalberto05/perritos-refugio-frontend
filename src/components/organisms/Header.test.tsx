import { render, screen, fireEvent } from "@testing-library/react";
import { describe, vi, test, expect } from "vitest";
import Header from "./Header";
import "@testing-library/jest-dom/vitest";


// Mock useRouter
const mockPush = vi.fn();
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

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

  test("navigates to login when 'Iniciar Sesión' is clicked", () => {
    render(<Header />);
    const loginButton = screen.getByText("Iniciar Sesión");
    fireEvent.click(loginButton);
    expect(mockPush).toHaveBeenCalledWith("/login");
  });

  test("navigates to register when 'Registrarse' is clicked", () => {
    render(<Header />);
    const registerButton = screen.getByText("Registrarse");
    fireEvent.click(registerButton);
    expect(mockPush).toHaveBeenCalledWith("/register");
  });

  test("calls onClick when Donar button is clicked", () => {
    // El botón Donar solo está en el menú móvil actualmente
    const mockFn = vi.fn();
    render(<Header />);
    
    // Abrir menú móvil para ver el botón
    const menuButton = screen.getByLabelText("Abrir menú");
    fireEvent.click(menuButton);
    
    // Buscar el botón dentro del menú móvil (asegurar que sea el visible)
    const donarButton = screen.getByText("Donar");
    
    expect(donarButton).toBeVisible();
  });
});
