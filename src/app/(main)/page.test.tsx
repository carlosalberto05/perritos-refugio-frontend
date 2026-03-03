import { describe, it, expect, vi } from "vitest";
import { render, screen, waitFor } from "@/test-utils";
import userEvent from "@testing-library/user-event";
import Home from "./page";



// Mock Next.js Image component
vi.mock("next/image", () => ({
  default: ({ src, alt, className, style }: { src: string; alt: string; className?: string; style?: React.CSSProperties }) => (
    // eslint-disable-next-line @next/next/no-img-element
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

    // Click the third dog's (Bella) adopt button
    await user.click(adoptButtons[2]);

    // Check if the modal appears with Bella's name
    await waitFor(() => {
      expect(
        screen.getByText(/¡Gracias por tu interés en adoptar a Bella!/i)
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

  it("renders the first 3 dog cards", () => {
    render(<Home />);

    // Check that the first 3 dogs are rendered
    expect(screen.getByText("Luna")).toBeInTheDocument();
    expect(screen.getByText("Max")).toBeInTheDocument();
    expect(screen.getByText("Bella")).toBeInTheDocument();
    
    // Check that others are not rendered (due to slice(0,3) in AdoptionSection)
    expect(screen.queryByText("Rocky")).not.toBeInTheDocument();
    expect(screen.queryByText("Coco")).not.toBeInTheDocument();
    expect(screen.queryByText("Charlie")).not.toBeInTheDocument();
  });

  it("renders MetricCards with correct values", () => {
    render(<Home />);

    expect(screen.getAllByText("500+").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Rescatistas").length).toBeGreaterThan(0);
    expect(screen.getAllByText("450+").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Adoptados").length).toBeGreaterThan(0);
    expect(screen.getAllByText("50+").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Voluntarios").length).toBeGreaterThan(0);
    expect(screen.getAllByText("30").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Disponibles").length).toBeGreaterThan(0);
  });
});
