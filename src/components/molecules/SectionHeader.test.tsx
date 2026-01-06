import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import SectionHeader from "./SectionHeader";
import "@testing-library/jest-dom";

describe("SectionHeader Component", () => {
  test("renders title and highlighted title correctly", () => {
    render(
      <SectionHeader 
        title="Normal Title" 
        highlightedTitle="Highlighted Part" 
      />
    );

    expect(screen.getByText(/Normal Title/i)).toBeInTheDocument();
    expect(screen.getByText(/Highlighted Part/i)).toBeInTheDocument();
  });

  test("renders badge when provided", () => {
    render(
      <SectionHeader 
        title="Title" 
        highlightedTitle="Highlighted" 
        badge="Test Badge"
      />
    );

    expect(screen.getByText("Test Badge")).toBeInTheDocument();
  });

  test("renders subtitle when provided", () => {
    const subtitleText = "This is a subtitle";
    render(
      <SectionHeader 
        title="Title" 
        highlightedTitle="Highlighted" 
        subtitle={subtitleText}
      />
    );

    expect(screen.getByText(`"${subtitleText}"`)).toBeInTheDocument();
  });

  test("applies correct variant classes for badge and title", () => {
    const { rerender } = render(
      <SectionHeader 
        title="Title" 
        highlightedTitle="Highlighted" 
        badge="Badge"
        badgeVariant="blue"
      />
    );

    const badge = screen.getByText("Badge");
    expect(badge).toHaveClass("bg-blue-50");
    expect(badge).toHaveClass("text-blue-600");

    const highlighted = screen.getByText("Highlighted");
    expect(highlighted).toHaveClass("from-blue-600");

    rerender(
      <SectionHeader 
        title="Title" 
        highlightedTitle="Highlighted" 
        badge="Badge"
        badgeVariant="pink"
      />
    );

    expect(badge).toHaveClass("bg-pink-50");
    expect(badge).toHaveClass("text-pink-600");
    expect(highlighted).toHaveClass("gradient-pink");
  });
});
