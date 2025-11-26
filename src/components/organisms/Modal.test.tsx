import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "./Modal";

describe("Modal Component", () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
    title: "Test Modal",
    children: <p>Modal content</p>,
  };

  it("renders when isOpen is true", () => {
    render(<Modal {...defaultProps} />);

    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Modal content")).toBeInTheDocument();
  });

  it("does not render when isOpen is false", () => {
    render(<Modal {...defaultProps} isOpen={false} />);

    expect(screen.queryByText("Test Modal")).not.toBeInTheDocument();
  });

  it("renders close button by default", () => {
    render(<Modal {...defaultProps} />);

    const closeButton = screen.getByLabelText("Cerrar modal");
    expect(closeButton).toBeInTheDocument();
  });

  it("hides close button when showCloseButton is false", () => {
    render(<Modal {...defaultProps} showCloseButton={false} />);

    expect(screen.queryByLabelText("Cerrar modal")).not.toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();

    render(<Modal {...defaultProps} onClose={handleClose} />);

    const closeButton = screen.getByLabelText("Cerrar modal");
    await user.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when Escape key is pressed", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();

    render(<Modal {...defaultProps} onClose={handleClose} />);

    await user.keyboard("{Escape}");

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("does not call onClose on Escape when closeOnEscape is false", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();

    render(<Modal {...defaultProps} onClose={handleClose} closeOnEscape={false} />);

    await user.keyboard("{Escape}");

    expect(handleClose).not.toHaveBeenCalled();
  });

  it("calls onClose when overlay is clicked", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();

    const { container } = render(<Modal {...defaultProps} onClose={handleClose} />);

    const overlay = container.querySelector('[role="dialog"]');
    if (overlay) {
      await user.click(overlay);
      expect(handleClose).toHaveBeenCalledTimes(1);
    }
  });

  it("does not call onClose when modal content is clicked", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();

    render(<Modal {...defaultProps} onClose={handleClose} />);

    await user.click(screen.getByText("Test Modal"));

    expect(handleClose).not.toHaveBeenCalled();
  });

  it("does not call onClose on overlay click when closeOnOverlayClick is false", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();

    const { container } = render(
      <Modal {...defaultProps} onClose={handleClose} closeOnOverlayClick={false} />
    );

    const overlay = container.querySelector('[role="dialog"]');
    if (overlay) {
      await user.click(overlay);
      expect(handleClose).not.toHaveBeenCalled();
    }
  });

  it("renders primary button when primaryButtonText is provided", () => {
    render(<Modal {...defaultProps} primaryButtonText="Confirm" />);

    expect(screen.getByText("Confirm")).toBeInTheDocument();
  });

  it("calls onPrimaryAction when primary button is clicked", async () => {
    const handlePrimaryAction = vi.fn();
    const user = userEvent.setup();

    render(
      <Modal
        {...defaultProps}
        primaryButtonText="Confirm"
        onPrimaryAction={handlePrimaryAction}
      />
    );

    await user.click(screen.getByText("Confirm"));

    expect(handlePrimaryAction).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when primary button is clicked without onPrimaryAction", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();

    render(
      <Modal {...defaultProps} onClose={handleClose} primaryButtonText="OK" />
    );

    await user.click(screen.getByText("OK"));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("renders secondary button when secondaryButtonText is provided", () => {
    render(<Modal {...defaultProps} secondaryButtonText="Cancel" />);

    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });

  it("calls onSecondaryAction when secondary button is clicked", async () => {
    const handleSecondaryAction = vi.fn();
    const user = userEvent.setup();

    render(
      <Modal
        {...defaultProps}
        secondaryButtonText="Cancel"
        onSecondaryAction={handleSecondaryAction}
      />
    );

    await user.click(screen.getByText("Cancel"));

    expect(handleSecondaryAction).toHaveBeenCalledTimes(1);
  });

  it("renders both primary and secondary buttons", () => {
    render(
      <Modal
        {...defaultProps}
        primaryButtonText="Confirm"
        secondaryButtonText="Cancel"
      />
    );

    expect(screen.getByText("Confirm")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });

  it("applies correct size classes", () => {
    const { container, rerender } = render(<Modal {...defaultProps} size="sm" />);
    expect(container.querySelector(".max-w-md")).toBeInTheDocument();

    rerender(<Modal {...defaultProps} size="md" />);
    expect(container.querySelector(".max-w-lg")).toBeInTheDocument();

    rerender(<Modal {...defaultProps} size="lg" />);
    expect(container.querySelector(".max-w-2xl")).toBeInTheDocument();
  });

  it("has proper accessibility attributes", () => {
    render(<Modal {...defaultProps} />);

    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(dialog).toHaveAttribute("aria-labelledby", "modal-title");
  });
});
