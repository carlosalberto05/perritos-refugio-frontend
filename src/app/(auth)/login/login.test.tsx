import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import LoginPage from "./page";
import "@testing-library/jest-dom";

// Mock del store de Zustand
vi.mock("@/store/useAuthStore", () => ({
  useAuthStore: () => ({
    isLoading: false,
    setLoading: vi.fn(),
  }),
}));

describe("LoginPage", () => {
  test("renders login form correctly", () => {
    render(<LoginPage />);

    // Verificar branding
    expect(screen.getByText("Huellitas")).toBeInTheDocument();
    expect(screen.getByText("Inicia sesión para continuar")).toBeInTheDocument();

    // Verificar campos
    expect(screen.getByLabelText(/^Correo electrónico$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Contraseña$/i)).toBeInTheDocument();

    // Verificar botón
    expect(screen.getByRole("button", { name: "Iniciar Sesión" })).toBeInTheDocument();
  });

  test("allows typing in email and password fields", () => {
    render(<LoginPage />);

    const emailInput = screen.getByLabelText(/^Correo electrónico$/i) as HTMLInputElement;
    const passwordInput = screen.getByLabelText(/^Contraseña$/i) as HTMLInputElement;

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });

    expect(emailInput.value).toBe("test@example.com");
    expect(passwordInput.value).toBe("password123");
  });

  test("shows test credentials", () => {
    render(<LoginPage />);
    
    expect(screen.getByText(/Credenciales de prueba:/i)).toBeInTheDocument();
    expect(screen.getByText(/admin@huellitas.com/i)).toBeInTheDocument();
  });

  test("contains link to register page", () => {
    render(<LoginPage />);
    
    const registerLink = screen.getByRole("link", { name: /Crear Cuenta Nueva/i });
    expect(registerLink).toBeInTheDocument();
    expect(registerLink).toHaveAttribute("href", "/register");
  });
});
