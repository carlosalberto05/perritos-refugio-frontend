import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import RegisterPage from "./page";
import "@testing-library/jest-dom";

// Mock del store de Zustand
vi.mock("@/store/useAuthStore", () => ({
  useAuthStore: () => ({
    selectedRegistrationRole: "adoptante",
    setRegistrationRole: vi.fn(),
    isLoading: false,
    setLoading: vi.fn(),
  }),
}));

describe("RegisterPage", () => {
  test("renders register form correctly", () => {
    render(<RegisterPage />);

    // Verificar branding
    expect(screen.getByText("Huellitas")).toBeInTheDocument();
    expect(screen.getByText("Crea tu cuenta para ayudar")).toBeInTheDocument();

    // Verificar campos básicos
    expect(screen.getByLabelText(/^Nombre completo$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Correo electrónico$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Contraseña$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^Repetir contraseña$/i)).toBeInTheDocument();

    // Verificar selector de roles
    expect(screen.getByRole("button", { name: /Adoptante/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Rescatista/i })).toBeInTheDocument();
  });

  test("contains link to login page", () => {
    render(<RegisterPage />);
    
    const loginLink = screen.getByRole("link", { name: /Iniciar Sesión/i });
    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveAttribute("href", "/login");
  });


});
