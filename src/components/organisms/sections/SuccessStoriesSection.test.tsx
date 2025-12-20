import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import SuccessStoriesSection from "./SuccessStoriesSection";

// Mock del componente SuccessStoryCard para no testearlo recursivamente y depender de sus props complejas
vi.mock("../cards/SuccessStoryCard", () => ({
  default: ({ dogName }: { dogName: string }) => (
    <div data-testid="story-card">{dogName}</div>
  ),
}));

// Mock simple de los datos si fuera necesario, pero importaremos el componente tal cual
// Si el componente usa datos reales de @/data/home-data, verificaremos que renderice "algo".

describe("SuccessStoriesSection Component", () => {
  test("renders section title", () => {
    render(<SuccessStoriesSection />);
    expect(screen.getByText("Historias de Éxito")).toBeInTheDocument();
  });

  test("renders story cards", () => {
    render(<SuccessStoriesSection />);
    // Debería renderizar al menos una tarjeta de historia si hay datos
    const cards = screen.getAllByTestId("story-card");
    expect(cards.length).toBeGreaterThan(0);
  });
});
