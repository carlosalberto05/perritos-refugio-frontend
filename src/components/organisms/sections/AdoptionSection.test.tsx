import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import AdoptionSection from "./AdoptionSection";

// Mock DogCard
vi.mock("@/components/organisms/cards/DogCard", () => ({
  default: ({ name, onAdoptClick }: { name: string; onAdoptClick: () => void }) => (
    <div data-testid="dog-card">
      <h3>{name}</h3>
      <button onClick={onAdoptClick}>Adoptar a {name}</button>
    </div>
  ),
}));

// Mock Data
vi.mock("@/data/home-data", () => ({
  DOGS: [
    {
      id: "1",
      name: "Firulais",
      age: "2 años",
      size: "Grande",
      breed: "Mestizo",
      image: "/img1.jpg",
      description: "Test dog",
      adoptionStatus: "Disponible",
    },
    {
      id: "2",
      name: "Rex",
      age: "1 año",
      size: "Mediano",
      breed: "Pastor",
      image: "/img2.jpg",
      description: "Test dog 2",
      adoptionStatus: "Disponible",
    },
  ],
}));

describe("AdoptionSection Component", () => {
  const mockAdoptClick = vi.fn();

  test("renders heading and description", () => {
    render(<AdoptionSection onAdoptClick={mockAdoptClick} />);
    expect(screen.getByText(/Perritos en/i)).toBeInTheDocument();
    expect(screen.getByText(/Adopción/i)).toBeInTheDocument();
    expect(screen.getByText(/Todos nuestros perritos/i)).toBeInTheDocument();
  });

  test("renders list of dogs", () => {
    render(<AdoptionSection onAdoptClick={mockAdoptClick} />);
    expect(screen.getByText("Firulais")).toBeInTheDocument();
    expect(screen.getByText("Rex")).toBeInTheDocument();
  });

  test("calls onAdoptClick when a dog card button is clicked", () => {
    render(<AdoptionSection onAdoptClick={mockAdoptClick} />);
    
    // Validar el click en el botón de MockDogCard
    const adoptButton = screen.getByText("Adoptar a Firulais");
    fireEvent.click(adoptButton);

    expect(mockAdoptClick).toHaveBeenCalledWith("Firulais");
  });
});
