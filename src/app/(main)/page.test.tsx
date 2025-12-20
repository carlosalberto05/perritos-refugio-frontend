import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "./page";



// Mock Next.js Image component
vi.mock("next/image", () => ({
  default: ({ src, alt, className, style }: any) => (
    <img 
      src={src} 
      alt={alt} 
      className={className} 
      style={style} 
    />
  ),
}));

describe("Home Page", () => {
  it("correctly updates the selectedDog state when a dog card's adopt button is clicked", async () => {
    const user = userEvent.setup();
    render(<Home />);

    // Find Luna's adopt button
    const adoptButtons = screen.getAllByRole("button", {
      name: /quiero adoptarlo/i,
    });

    // Click the first dog's (Luna) adopt button
    await user.click(adoptButtons[0]);

    // Check if the modal appears with Luna's name in the title
    await waitFor(() => {
      expect(
        screen.getByText(/¡Gracias por tu interés en adoptar a Luna!/i)
      ).toBeInTheDocument();
    });
  });

  it("correctly opens the adoption Modal when a dog card's adopt button is clicked", async () => {
    const user = userEvent.setup();
    render(<Home />);

    // Initially, the modal should not be visible
    expect(
      screen.queryByText(/¡Gracias por tu interés en adoptar/i)
    ).not.toBeInTheDocument();

    // Find and click any adopt button
    const adoptButtons = screen.getAllByRole("button", {
      name: /quiero adoptarlo/i,
    });
    await user.click(adoptButtons[0]);

    // Modal should now be visible
    await waitFor(() => {
      expect(
        screen.getByText(/¡Gracias por tu interés en adoptar a Luna!/i)
      ).toBeInTheDocument();
    });

    // Check that modal content is visible
    expect(
      screen.getByText(/Para iniciar el proceso de adopción/i)
    ).toBeInTheDocument();
  });

  it("opens modal with correct dog name when different dog cards are clicked", async () => {
    const user = userEvent.setup();
    render(<Home />);

    // Get all adopt buttons
    const adoptButtons = screen.getAllByRole("button", {
      name: /quiero adoptarlo/i,
    });

    // Click the fourth dog's (Rocky) adopt button
    await user.click(adoptButtons[3]);

    // Check if the modal appears with Rocky's name
    await waitFor(() => {
      expect(
        screen.getByText(/¡Gracias por tu interés en adoptar a Rocky!/i)
      ).toBeInTheDocument();
    });
  });

  it("closes the modal when primary button is clicked", async () => {
    const user = userEvent.setup();
    render(<Home />);

    // Open the modal
    const adoptButtons = screen.getAllByRole("button", {
      name: /quiero adoptarlo/i,
    });
    await user.click(adoptButtons[0]);

    // Wait for modal to be visible
    await waitFor(() => {
      expect(
        screen.getByText(/¡Gracias por tu interés en adoptar a Luna!/i)
      ).toBeInTheDocument();
    });

    // Click the "Entendido" button
    const closeButton = screen.getByRole("button", { name: /entendido/i });
    await user.click(closeButton);

    // Modal should be closed
    await waitFor(() => {
      expect(
        screen.queryByText(/¡Gracias por tu interés en adoptar a Luna!/i)
      ).not.toBeInTheDocument();
    });
  });

  it("renders all dog cards", () => {
    render(<Home />);

    // Check that all 6 dogs are rendered
    expect(screen.getByText("Luna")).toBeInTheDocument();
    expect(screen.getByText("Max")).toBeInTheDocument();
    expect(screen.getByText("Bella")).toBeInTheDocument();
    expect(screen.getByText("Rocky")).toBeInTheDocument();
    expect(screen.getByText("Coco")).toBeInTheDocument();
    expect(screen.getByText("Charlie")).toBeInTheDocument();
  });

  it("renders MetricCards with correct values", () => {
    render(<Home />);

    expect(screen.getByText("500+")).toBeInTheDocument();
    expect(screen.getByText("Rescatados")).toBeInTheDocument();
    expect(screen.getByText("450+")).toBeInTheDocument();
    expect(screen.getByText("Adoptados")).toBeInTheDocument();
    expect(screen.getByText("50+")).toBeInTheDocument();
    expect(screen.getByText("Voluntarios")).toBeInTheDocument();
    expect(screen.getByText("30")).toBeInTheDocument();
    expect(screen.getByText("Disponibles")).toBeInTheDocument();
  });
});
