import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import FormField from "./FormField";
import "@testing-library/jest-dom";

describe("FormField Component", () => {
  test("renders input with label", () => {
    render(
      <FormField
        id="email"
        label="Correo Electrónico"
        type="email"
      />
    );

    expect(screen.getByLabelText("Correo Electrónico")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("shows required asterisk when required prop is true", () => {
    render(
      <FormField
        id="name"
        label="Nombre"
        required
      />
    );

    const label = screen.getByText("Nombre");
    expect(label).toHaveClass("after:content-['*']");
  });

  test("displays error message when error prop is provided", () => {
    render(
      <FormField
        id="email"
        label="Email"
        error="El correo no es válido"
      />
    );

    const errorMessage = screen.getByRole("alert");
    expect(errorMessage).toHaveTextContent("El correo no es válido");
    expect(errorMessage).toHaveClass("text-red-600");
  });

  test("displays helper text when provided and no error", () => {
    render(
      <FormField
        id="password"
        label="Contraseña"
        helperText="Mínimo 8 caracteres"
      />
    );

    expect(screen.getByText("Mínimo 8 caracteres")).toBeInTheDocument();
    expect(screen.getByText("Mínimo 8 caracteres")).toHaveClass("text-gray-500");
  });

  test("hides helper text when error is present", () => {
    render(
      <FormField
        id="password"
        label="Contraseña"
        helperText="Mínimo 8 caracteres"
        error="La contraseña es muy corta"
      />
    );

    expect(screen.queryByText("Mínimo 8 caracteres")).not.toBeInTheDocument();
    expect(screen.getByText("La contraseña es muy corta")).toBeInTheDocument();
  });

  test("applies error styling to input when error is present", () => {
    render(
      <FormField
        id="email"
        error="Error de validación"
      />
    );

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  test("links input to error message with aria-describedby", () => {
    render(
      <FormField
        id="test-input"
        error="Error message"
      />
    );

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("aria-describedby", "test-input-error");
  });

  test("renders without label when label prop is not provided", () => {
    render(
      <FormField
        id="search"
        placeholder="Buscar..."
      />
    );

    expect(screen.queryByRole("label")).not.toBeInTheDocument();
    expect(screen.getByPlaceholderText("Buscar...")).toBeInTheDocument();
  });
});
