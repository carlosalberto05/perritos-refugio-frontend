import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import SearchBar from "./SearchBar";
import "@testing-library/jest-dom";

describe("SearchBar Component", () => {
  test("renders with default placeholder", () => {
    render(<SearchBar />);
    
    expect(screen.getByPlaceholderText("Buscar...")).toBeInTheDocument();
  });

  test("renders with custom placeholder", () => {
    render(<SearchBar placeholder="Buscar perritos..." />);
    
    expect(screen.getByPlaceholderText("Buscar perritos...")).toBeInTheDocument();
  });

  test("displays search icon", () => {
    const { container } = render(<SearchBar />);
    
    // Lucide icons render as SVG
    const icon = container.querySelector('svg');
    expect(icon).toBeInTheDocument();
  });

  test("calls onChange handler when input value changes", () => {
    const handleChange = vi.fn();
    render(<SearchBar onChange={handleChange} />);
    
    const input = screen.getByPlaceholderText("Buscar...");
    fireEvent.change(input, { target: { value: "test query" } });
    
    expect(handleChange).toHaveBeenCalledWith("test query");
  });

  test("calls onSearch handler when form is submitted", () => {
    const handleSearch = vi.fn();
    render(<SearchBar value="test" onSearch={handleSearch} />);
    
    const button = screen.getByRole("button", { name: /buscar/i });
    fireEvent.click(button);
    
    expect(handleSearch).toHaveBeenCalledWith("test");
  });

  test("prevents default form submission", () => {
    const handleSearch = vi.fn();
    const { container } = render(<SearchBar value="test" onSearch={handleSearch} />);
    
    const form = container.querySelector("form");
    const submitEvent = new Event("submit", { bubbles: true, cancelable: true });
    const preventDefaultSpy = vi.spyOn(submitEvent, "preventDefault");
    
    form?.dispatchEvent(submitEvent);
    
    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  test("disables button when value is empty", () => {
    render(<SearchBar value="" />);
    
    const button = screen.getByRole("button", { name: /buscar/i });
    expect(button).toBeDisabled();
  });

  test("enables button when value is provided", () => {
    render(<SearchBar value="test" />);
    
    const button = screen.getByRole("button", { name: /buscar/i });
    expect(button).not.toBeDisabled();
  });

  test("disables both input and button when disabled prop is true", () => {
    render(<SearchBar disabled />);
    
    const input = screen.getByPlaceholderText("Buscar...");
    const button = screen.getByRole("button", { name: /buscar/i });
    
    expect(input).toBeDisabled();
    expect(button).toBeDisabled();
  });

  test("applies custom className", () => {
    const { container } = render(<SearchBar className="custom-search" />);
    
    const form = container.querySelector("form");
    expect(form).toHaveClass("custom-search");
  });

  test("input has correct styling with icon", () => {
    render(<SearchBar />);
    
    const input = screen.getByPlaceholderText("Buscar...");
    expect(input).toHaveClass("pl-10"); // Padding for icon
  });
});
