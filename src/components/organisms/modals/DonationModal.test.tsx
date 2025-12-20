import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import { DonationModal } from "./DonationModal";
import userEvent from "@testing-library/user-event";

describe("DonationModal Component", () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
    amount: "",
    setAmount: vi.fn(),
  };

  test("renders title and description", () => {
    render(<DonationModal {...defaultProps} />);
    expect(screen.getByText("Realizar una Donación")).toBeInTheDocument();
    expect(screen.getByText(/Tu apoyo nos ayuda/i)).toBeInTheDocument();
  });

  test("renders preset buttons", () => {
    render(<DonationModal {...defaultProps} />);
    expect(screen.getByText("$500")).toBeInTheDocument();
    expect(screen.getByText("$1000")).toBeInTheDocument();
    expect(screen.getByText("$2000")).toBeInTheDocument();
  });

  test("calls setAmount when preset button is clicked", async () => {
    const handleSetAmount = vi.fn();
    const user = userEvent.setup();
    render(<DonationModal {...defaultProps} setAmount={handleSetAmount} />);

    await user.click(screen.getByText("$500"));
    expect(handleSetAmount).toHaveBeenCalledWith("500");
  });

  test("renders custom input and handles typing", async () => {
    const handleSetAmount = vi.fn();
    const user = userEvent.setup();
    render(<DonationModal {...defaultProps} setAmount={handleSetAmount} />);

    const input = screen.getByPlaceholderText("Ingresa la cantidad");
    await user.type(input, "150");
    // Since input is controlled by parent, we check if setAmount is called for each char
    expect(handleSetAmount).toHaveBeenCalled();
  });

  test("disables donate button if no amount", () => {
    render(<DonationModal {...defaultProps} amount="" />);
    const donateBtn = screen.getByRole("button", { name: /Donar \$0 MXN/i });
    expect(donateBtn).toBeDisabled();
  });

  test("enables donate button if amount is present", () => {
    render(<DonationModal {...defaultProps} amount="100" />);
    const donateBtn = screen.getByRole("button", { name: /Donar \$100 MXN/i });
    expect(donateBtn).not.toBeDisabled();
  });
});
