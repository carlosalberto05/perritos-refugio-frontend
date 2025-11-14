import { render, screen, fireEvent } from "@testing-library/react";
import { describe, vi, test, expect } from "vitest";
import Button, { ButtonVariant } from "./Button";
import "@testing-library/jest-dom";

describe("Button Component", () => {
  test("should render the button with the correct text", () => {
    render(<Button variant="primary">Adoptar Perrito</Button>);

    const buttonElement = screen.getByRole("button", {
      name: /Adoptar Perrito/i,
    });

    expect(buttonElement).toBeInTheDocument();
  });

  test("should call onClick handler when clicked", () => {
    const handleClick = vi.fn();

    render(
      <Button variant="primary" onClick={handleClick}>
        Click Me
      </Button>
    );

    const buttonElement = screen.getByRole("button", { name: /Click Me/i });

    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("should apply disabled state correctly", () => {
    const handleClick = vi.fn();
    render(
      <Button variant="primary" onClick={handleClick} disabled={true}>
        Disabled
      </Button>
    );

    const buttonElement = screen.getByRole("button", { name: /Disabled/i });

    expect(buttonElement).toBeDisabled();

    expect(buttonElement).toHaveClass("opacity-50");
    expect(buttonElement).toHaveClass("cursor-not-allowed");

    fireEvent.click(buttonElement);

    expect(handleClick).not.toHaveBeenCalled();
  });

  describe("Style variant testing (Tailwind Classes)", () => {
    const variants: ButtonVariant[] = ["primary", "secondary", "ghost"];

    test.each(variants)(
      "The %s variant applies the correct style classes",
      (variant) => {
        render(<Button variant={variant}>Test</Button>);
        const buttonElement = screen.getByText("Test");

        expect(buttonElement).toHaveClass("font-semibold");
        expect(buttonElement).toHaveClass("rounded-lg");

        switch (variant) {
          case "primary":
            expect(buttonElement).toHaveClass(
              "from-[rgba(30,144,255,0.75)] to-[rgba(0,199,255,0.62)]"
            );
            expect(buttonElement).toHaveClass("text-white");
            break;
          case "secondary":
            expect(buttonElement).toHaveClass("bg-white");
            expect(buttonElement).toHaveClass("border");
            expect(buttonElement).toHaveClass("border-primary-500");
            break;
          case "ghost":
            expect(buttonElement).toHaveClass("bg-transparent");
            expect(buttonElement).toHaveClass("text-gray-700");
            break;
        }
      }
    );
  });
});
