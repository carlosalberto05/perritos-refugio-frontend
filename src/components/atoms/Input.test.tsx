import { render, screen, fireEvent } from "@testing-library/react";
import { describe, vi, test, expect } from "vitest";
import Input from "./Input";
import "@testing-library/jest-dom";

describe("Input Component", () => {
  // 1. PRUEBA BÁSICA: ¿Se renderiza?
  test("render the input with the place holder", () => {
    render(<Input placeholder="Escribe aquí" />);

    const inputElement = screen.getByPlaceholderText("Escribe aquí");
    expect(inputElement).toBeInTheDocument();
  });

  // 2. PRUEBA DE LABEL: ¿Muestra el título?
  test("renders the label correctly", () => {
    const labelText = "Correo Electrónico";
    render(<Input label={labelText} />);

    expect(screen.getByText(labelText)).toBeInTheDocument();
  });

  // 3. PRUEBA DE INTERACCIÓN: ¿Puedo escribir?
  test("allows the user to type text", () => {
    // Necesitamos una función espía para ver si el onChange se dispara (opcional, pero recomendado)
    const handleChange = vi.fn();

    render(<Input placeholder="Nombre" onChange={handleChange} />);

    const inputElement = screen.getByPlaceholderText("Nombre");

    // Simulamos que el usuario escribe "Hola Mundo"
    fireEvent.change(inputElement, { target: { value: "Hola Mundo" } });

    // Verificamos dos cosas:
    // A. Que el input ahora tenga el valor (value) correcto
    expect(inputElement).toHaveValue("Hola Mundo");
    // B. Que la función onChange se haya llamado
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  // 4. PRUEBA DE ERROR: ¿Se ve rojo y muestra el mensaje?
  test("displays error message and applies error styles", () => {
    const errorMessage = "Campo obligatorio";
    render(<Input error={errorMessage} />);

    // Verificar que el mensaje de error aparece
    expect(screen.getByText(errorMessage)).toBeInTheDocument();

    // Verificar que el input tiene la clase de borde rojo
    // Nota: Como tu componente aplica clases condicionales, buscamos el input y vemos si tiene la clase
    // Sin embargo, para hacerlo simple, buscamos por rol "textbox" (el input por defecto)
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveClass("border-red-500");
  });

  // 5. PRUEBA DE ESTADO DESHABILITADO
  test("is disabled when disabled prop is true", () => {
    render(<Input disabled placeholder="Bloqueado" />);

    const inputElement = screen.getByPlaceholderText("Bloqueado");

    expect(inputElement).toBeDisabled();
  });

  // 6. PRUEBA DE ICONOS
  test("renders start and end icons", () => {
    render(
      <Input
        startIcon={<span data-testid="icon-start">🔍</span>}
        endIcon={<span data-testid="icon-end">❌</span>}
      />
    );

    expect(screen.getByTestId("icon-start")).toBeInTheDocument();
    expect(screen.getByTestId("icon-end")).toBeInTheDocument();
  });
});
