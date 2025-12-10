import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DogCard from "./DogCard";

describe("Card Component", () => {
  const defaultProps = {
    name: "Luna",
    breed: "Mestizo",
    age: "2 años",
    size: "Mediano",
    description:
      "Luna es una perrita muy cariñosa y juguetona, perfecta para familias con niños.",
    imageUrl: "/images/dogs/luna.jpg",
  };

  it("renders card with all information", () => {
    render(<DogCard {...defaultProps} />);

    expect(screen.getByText("Luna")).toBeInTheDocument();
    expect(screen.getByText("Mestizo")).toBeInTheDocument();
    expect(screen.getByText("2 años")).toBeInTheDocument();
    expect(screen.getByText("Mediano")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Luna es una perrita muy cariñosa y juguetona, perfecta para familias con niños."
      )
    ).toBeInTheDocument();
  });

  it("renders with default adoption status", () => {
    render(<DogCard {...defaultProps} />);

    expect(screen.getByText("En adopción")).toBeInTheDocument();
  });

  it("renders with custom adoption status", () => {
    render(<DogCard {...defaultProps} adoptionStatus="Adoptado" />);

    expect(screen.getByText("Adoptado")).toBeInTheDocument();
  });

  it("renders with Reservado status", () => {
    render(<DogCard {...defaultProps} adoptionStatus="Reservado" />);

    expect(screen.getByText("Reservado")).toBeInTheDocument();
  });

  it("renders image with correct attributes", () => {
    render(<DogCard {...defaultProps} imageAlt="Luna la perrita" />);

    const image = screen.getByAltText("Luna la perrita");
    expect(image).toBeInTheDocument();
  });

  it("uses name as default imageAlt", () => {
    render(<DogCard {...defaultProps} />);

    const image = screen.getByAltText("Luna");
    expect(image).toBeInTheDocument();
  });

  it("calls onAdoptClick when button is clicked", async () => {
    const handleAdoptClick = vi.fn();
    const user = userEvent.setup();

    render(<DogCard {...defaultProps} onAdoptClick={handleAdoptClick} />);

    const button = screen.getByRole("button", { name: /quiero adoptarlo/i });
    await user.click(button);

    expect(handleAdoptClick).toHaveBeenCalledTimes(1);
  });

  it("triggers the onAdoptClick function when the adopt button is pressed", async () => {
    const mockAdoptClick = vi.fn();
    const user = userEvent.setup();

    render(<DogCard {...defaultProps} onAdoptClick={mockAdoptClick} />);

    const adoptButton = screen.getByRole("button", {
      name: /quiero adoptarlo/i,
    });
    await user.click(adoptButton);

    expect(mockAdoptClick).toHaveBeenCalled();
    expect(mockAdoptClick).toHaveBeenCalledTimes(1);
  });

  it("renders adoption button with heart icon", () => {
    render(<DogCard {...defaultProps} />);

    const button = screen.getByRole("button", { name: /quiero adoptarlo/i });
    expect(button).toBeInTheDocument();

    // Verificar que el botón contiene un SVG (icono de corazón)
    const svg = button.querySelector("svg");
    expect(svg).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <DogCard {...defaultProps} className="custom-card-class" />
    );

    const card = container.querySelector(".custom-card-class");
    expect(card).toBeInTheDocument();
  });

  it("renders age and size icons", () => {
    const { container } = render(<DogCard {...defaultProps} />);

    // Verificar que hay SVGs para los iconos (calendario y tamaño)
    const svgs = container.querySelectorAll("svg");
    expect(svgs.length).toBeGreaterThan(0);
  });

  it("displays full width button", () => {
    render(<DogCard {...defaultProps} />);

    const button = screen.getByRole("button", { name: /quiero adoptarlo/i });
    expect(button.className).toContain("w-full");
  });
});
