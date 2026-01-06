import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import RescuersSection from "./RescuersSection";
import "@testing-library/jest-dom";

// Mock the SHELTERS data
vi.mock("@/data/home-data", () => ({
  SHELTERS: [
    {
      id: "1",
      name: "Shelter 1",
      logo: "logo1.jpg",
      image: "image1.jpg",
      rescuedCount: 10,
      location: "Location 1",
    },
    {
      id: "2",
      name: "Shelter 2",
      logo: "logo2.jpg",
      image: "image2.jpg",
      rescuedCount: 20,
      location: "Location 2",
    },
    {
      id: "3",
      name: "Shelter 3",
      logo: "logo3.jpg",
      image: "image3.jpg",
      rescuedCount: 30,
      location: "Location 3",
    },
    {
      id: "4",
      name: "Shelter 4",
      logo: "logo4.jpg",
      image: "image4.jpg",
      rescuedCount: 40,
      location: "Location 4",
    },
  ],
}));

describe("RescuersSection Component", () => {
  test("renders SectionHeader with correct props", () => {
    render(<RescuersSection />);
    expect(screen.getByText(/Conoce a los rescatistas/i)).toBeInTheDocument();
  });

  test("renders only first 3 shelters", () => {
    render(<RescuersSection />);
    expect(screen.getByText("Shelter 1")).toBeInTheDocument();
    expect(screen.getByText("Shelter 2")).toBeInTheDocument();
    expect(screen.getByText("Shelter 3")).toBeInTheDocument();
    expect(screen.queryByText("Shelter 4")).not.toBeInTheDocument();
  });

  test("renders link to see more rescuers", () => {
    render(<RescuersSection />);
    const link = screen.getByRole("link", { name: /Ver más/i });
    expect(link).toHaveAttribute("href", "/refugios");
  });
});
