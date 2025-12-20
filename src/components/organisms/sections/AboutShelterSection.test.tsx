import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import AboutShelterSection from "./AboutShelterSection";

// Mock BaseCard
vi.mock("../cards/BaseCard", () => ({
  default: ({ children }: any) => <div data-testid="base-card">{children}</div>,
}));

// Mock Image
vi.mock("@/components/atoms/Image", () => ({
  default: (props: any) => <img {...props} />,
}));

describe("AboutShelterSection Component", () => {
  test("renders heading and description", () => {
    render(<AboutShelterSection />);
    expect(screen.getByText("Sobre Nuestro Refugio")).toBeInTheDocument();
    expect(screen.getByText(/Patitas Felices nació/i)).toBeInTheDocument();
  });

  test("renders statistics", () => {
    render(<AboutShelterSection />);
    expect(screen.getByText("Perritos rescatados")).toBeInTheDocument();
    expect(screen.getByText("Adopciones exitosas")).toBeInTheDocument();
    expect(screen.getByText("Voluntarios activos")).toBeInTheDocument();
    expect(screen.getByText("Perritos actuales")).toBeInTheDocument();
  });

  test("renders stats numbers", () => {
    render(<AboutShelterSection />);
    expect(screen.getByText("500+")).toBeInTheDocument();
    expect(screen.getByText("450+")).toBeInTheDocument();
    expect(screen.getByText("50+")).toBeInTheDocument();
    expect(screen.getByText("30")).toBeInTheDocument();
  });
});
