import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import HeroSection from "./HeroSection";

// Mock del componente MetricCard para simplificar
vi.mock("../cards/MetricCard", () => ({
  default: ({ label, value }: { label: string; value: string }) => (
    <div data-testid="metric-card">
      {label}: {value}
    </div>
  ),
}));

// Mock Image de Next.js
vi.mock("@/components/atoms/Image", () => ({
  default: (props: any) => <img {...props} />,
}));

describe("HeroSection Component", () => {
  beforeEach(() => {
    // Mock scrollIntoView
    Element.prototype.scrollIntoView = vi.fn();
  });

  test("renders main heading and description", () => {
    render(<HeroSection onDonateClick={() => {}} />);
    expect(
      screen.getByText(/Dale una segunda oportunidad a un amigo fiel/i)
    ).toBeInTheDocument();
  });

  test("calls onDonateClick when support button is clicked", () => {
    const mockDonateClick = vi.fn();
    render(<HeroSection onDonateClick={mockDonateClick} />);
    
    // Buscar el botón por texto aproximado "Apoya nuestra causa"
    const donateButton = screen.getByText(/Apoya nuestra causa/i);
    fireEvent.click(donateButton);
    
    expect(mockDonateClick).toHaveBeenCalled();
  });

  // Verificamos que intente hacer scroll (aunque sea mock)
  test("attempts to scroll to adoption section when 'Ver perritos' is clicked", () => {
    const scrollMock = vi.fn();
    // Setup getElementById mock
    vi.spyOn(document, 'getElementById').mockReturnValue({
      scrollIntoView: scrollMock,
    } as unknown as HTMLElement);

    render(<HeroSection onDonateClick={() => {}} />);
    
    const adoptionButton = screen.getByText(/Ver perritos en adopción/i);
    fireEvent.click(adoptionButton);
    
    expect(scrollMock).toHaveBeenCalled();
  });
});
