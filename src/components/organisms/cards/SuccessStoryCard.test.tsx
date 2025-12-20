import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import SuccessStoryCard from "./SuccessStoryCard";

describe("SuccessStoryCard Component", () => {
  const defaultProps = {
    dogName: "Firulais",
    ownerName: "Juan Perez",
    story: "Una historia conmovedora...",
    image: "/test-image.jpg",
    date: "20 Diciembre 2024",
  };

  test("renders card information correctly", () => {
    render(<SuccessStoryCard {...defaultProps} />);

    expect(screen.getByText("Firulais")).toBeInTheDocument();
    expect(screen.getByText("Adoptado por Juan Perez")).toBeInTheDocument();
    expect(screen.getByText("Una historia conmovedora...")).toBeInTheDocument();
    expect(screen.getByText("20 Diciembre 2024")).toBeInTheDocument();
  });

  test("renders image with correct alt text", () => {
    render(<SuccessStoryCard {...defaultProps} />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("alt", "Firulais");
    // Next.js Image component handles src differently, but we can check if it exists
    expect(image).toBeInTheDocument();
  });
});
