import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { ContactSection } from "./ContactSection";

describe("ContactSection Component", () => {
  test("renders heading and description", () => {
    render(<ContactSection />);
    expect(screen.getByText("Contáctanos")).toBeInTheDocument();
    expect(screen.getByText(/¿Tienes preguntas/i)).toBeInTheDocument();
  });

  test("renders contact info items", () => {
    render(<ContactSection />);
    // Check titles
    expect(screen.getByText("Teléfono")).toBeInTheDocument();
    expect(screen.getByText("Email")).toBeInTheDocument();
    expect(screen.getByText("Ubicación")).toBeInTheDocument();
  });
});
