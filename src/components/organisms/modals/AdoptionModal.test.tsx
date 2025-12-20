import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { AdoptionModal } from "./AdoptionModal";

describe("AdoptionModal Component", () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
    dogName: "Firulais",
  };

  test("renders correct modal title with dog name", () => {
    render(<AdoptionModal {...defaultProps} />);
    expect(
      screen.getByText("¡Gracias por tu interés en adoptar a Firulais!")
    ).toBeInTheDocument();
  });

  test("renders contact info", () => {
    render(<AdoptionModal {...defaultProps} />);
    expect(
      screen.getByText(/Para iniciar el proceso de adopción/i)
    ).toBeInTheDocument();
  });

  test("renders adoption process steps", () => {
    render(<AdoptionModal {...defaultProps} />);
    expect(screen.getByText("Entrevista inicial")).toBeInTheDocument();
    expect(
      screen.getByText("Visita al refugio para conocer a Firulais")
    ).toBeInTheDocument();
  });

  test("calls onClose when 'Entendido' button is clicked", () => {
    const handleClose = vi.fn();
    render(<AdoptionModal {...defaultProps} onClose={handleClose} />);

    fireEvent.click(screen.getByText("Entendido"));
    expect(handleClose).toHaveBeenCalled();
  });
});
