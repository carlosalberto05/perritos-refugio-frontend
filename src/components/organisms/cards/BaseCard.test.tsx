import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import BaseCard from "./BaseCard";

describe("BaseCard Component", () => {
  test("renders children correctly", () => {
    render(
      <BaseCard>
        <p>Card Content</p>
      </BaseCard>
    );
    expect(screen.getByText("Card Content")).toBeInTheDocument();
  });

  test("applies additional classes", () => {
    const { container } = render(
      <BaseCard className="custom-class">Content</BaseCard>
    );
    expect(container.firstChild).toHaveClass("custom-class");
    expect(container.firstChild).toHaveClass("glass-card");
  });

  test("spreads additional props", () => {
    render(
      <BaseCard data-testid="base-card" id="test-id">
        Content
      </BaseCard>
    );
    const card = screen.getByTestId("base-card");
    expect(card).toHaveAttribute("id", "test-id");
  });
});
