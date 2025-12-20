import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Badge from "./Badge";
import "@testing-library/jest-dom";

describe("Badge Component", () => {
  test("renders with default variant", () => {
    render(<Badge>Default Badge</Badge>);
    const badge = screen.getByText("Default Badge");
    
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("bg-gray-100");
    expect(badge).toHaveClass("text-gray-800");
  });

  test("renders with success variant", () => {
    render(<Badge variant="success">En adopción</Badge>);
    const badge = screen.getByText("En adopción");
    
    expect(badge).toHaveClass("bg-green-100");
    expect(badge).toHaveClass("text-green-800");
  });

  test("renders with warning variant", () => {
    render(<Badge variant="warning">Reservado</Badge>);
    const badge = screen.getByText("Reservado");
    
    expect(badge).toHaveClass("bg-yellow-100");
    expect(badge).toHaveClass("text-yellow-800");
  });

  test("renders with info variant", () => {
    render(<Badge variant="info">Adoptado</Badge>);
    const badge = screen.getByText("Adoptado");
    
    expect(badge).toHaveClass("bg-blue-100");
    expect(badge).toHaveClass("text-blue-800");
  });

  test("applies different sizes correctly", () => {
    const { rerender } = render(<Badge size="sm">Small</Badge>);
    expect(screen.getByText("Small")).toHaveClass("px-2");
    expect(screen.getByText("Small")).toHaveClass("text-xs");

    rerender(<Badge size="md">Medium</Badge>);
    expect(screen.getByText("Medium")).toHaveClass("px-3");
    expect(screen.getByText("Medium")).toHaveClass("text-sm");

    rerender(<Badge size="lg">Large</Badge>);
    expect(screen.getByText("Large")).toHaveClass("px-4");
    expect(screen.getByText("Large")).toHaveClass("text-base");
  });

  test("accepts custom className", () => {
    render(<Badge className="custom-class">Custom</Badge>);
    const badge = screen.getByText("Custom");
    
    expect(badge).toHaveClass("custom-class");
  });

  test("applies base classes correctly", () => {
    render(<Badge>Test</Badge>);
    const badge = screen.getByText("Test");
    
    expect(badge).toHaveClass("inline-flex");
    expect(badge).toHaveClass("items-center");
    expect(badge).toHaveClass("rounded-full");
    expect(badge).toHaveClass("font-semibold");
  });
});
