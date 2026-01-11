import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import ShelterCard from "./ShelterCard";
import "@testing-library/jest-dom";

describe("ShelterCard Component", () => {
  const mockProps = {
    id: "refugio-1",
    name: "Refugio Test",
    logo: "https://example.com/logo.jpg",
    image: "https://example.com/image.jpg",
    rescuedCount: 10,
    location: "Test Location",
    urgentNeeds: "Comida para cachorros"
  };

  test("renders shelter information correctly", () => {
    render(<ShelterCard {...mockProps} />);

    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
    expect(screen.getByText(mockProps.location)).toBeInTheDocument();
    expect(screen.getByText(`${mockProps.rescuedCount} perritos rescatados`)).toBeInTheDocument();
    expect(screen.getByText(mockProps.urgentNeeds)).toBeInTheDocument();
  });

  test("links to calculations profile page", () => {
    render(<ShelterCard {...mockProps} />);
    
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/refugios/${mockProps.id}`);
  });

  test("does not render urgent needs if not provided", () => {
    const propsWithoutNeeds = { ...mockProps, urgentNeeds: undefined };
    render(<ShelterCard {...propsWithoutNeeds} />);
    
    expect(screen.queryByText(/Necesidad urgente/i)).not.toBeInTheDocument();
  });
});
