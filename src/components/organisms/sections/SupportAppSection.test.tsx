import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import SupportAppSection from "./SupportAppSection";
import "@testing-library/jest-dom";

describe("SupportAppSection Component", () => {
  test("renders the section with correct content", () => {
    render(<SupportAppSection />);
    
    expect(screen.getByText(/¿Te gusta nuestra plataforma\?/i)).toBeInTheDocument();
    expect(screen.getByText(/Ayúdanos a mantener esta plataforma funcionando/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Apóyanos/i })).toBeInTheDocument();
  });

  test("points to buy me a coffee link when clicked", () => {
    // Mock window.open
    const windowOpenMock = vi.spyOn(window, "open").mockImplementation(() => null);
    
    render(<SupportAppSection />);
    
    const supportButton = screen.getByRole("button", { name: /Apóyanos/i });
    fireEvent.click(supportButton);
    
    expect(windowOpenMock).toHaveBeenCalledWith("https://buymeacoffee.com", "_blank");
    
    windowOpenMock.mockRestore();
  });
});
