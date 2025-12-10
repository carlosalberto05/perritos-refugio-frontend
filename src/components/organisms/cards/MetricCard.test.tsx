import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import MetricCard from "./MetricCard";
import { Heart } from "lucide-react";

describe("MetricCard Component", () => {
  it("renders its value and label props correctly", () => {
    render(
      <MetricCard
        IconComponent={Heart}
        value="500+"
        label="Rescatados"
      />
    );

    expect(screen.getByText("500+")).toBeInTheDocument();
    expect(screen.getByText("Rescatados")).toBeInTheDocument();
  });

  it("renders the provided IconComponent", () => {
    const { container } = render(
      <MetricCard
        IconComponent={Heart}
        value="450+"
        label="Adoptados"
        iconColorClass="text-pink-300"
      />
    );

    // Verify that the icon (SVG) is rendered
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass("w-8", "h-8", "text-pink-300");
  });

  it("renders with default iconColorClass", () => {
    const { container } = render(
      <MetricCard
        IconComponent={Heart}
        value="100"
        label="Test"
      />
    );

    const svg = container.querySelector("svg");
    expect(svg).toHaveClass("text-white");
  });

  it("renders with custom className", () => {
    const { container } = render(
      <MetricCard
        IconComponent={Heart}
        value="200"
        label="Custom"
        className="custom-class"
      />
    );

    const card = container.querySelector(".custom-class");
    expect(card).toBeInTheDocument();
  });

  it("renders numeric values correctly", () => {
    render(
      <MetricCard
        IconComponent={Heart}
        value={30}
        label="Disponibles"
      />
    );

    expect(screen.getByText("30")).toBeInTheDocument();
  });
});
