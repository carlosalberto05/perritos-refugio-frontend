import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Modal from "../molecules/Modal";

describe("Modal Component", () => {
  const defaultProps = {
    isOpen: true,
    onClose: vi.fn(),
  };

  it("renders when isOpen is true", () => {
    render(
      <Modal {...defaultProps}>
        <Modal.Header title="Test Modal" />
        <Modal.Body>Modal content</Modal.Body>
      </Modal>
    );

    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Modal content")).toBeInTheDocument();
  });

  it("does not render when isOpen is false", () => {
    render(
      <Modal {...defaultProps} isOpen={false}>
        <Modal.Header title="Test Modal" />
      </Modal>
    );

    expect(screen.queryByText("Test Modal")).not.toBeInTheDocument();
  });

  it("renders close button by default", () => {
    render(
      <Modal {...defaultProps}>
        <Modal.Body>Content</Modal.Body>
      </Modal>
    );

    const closeButton = screen.getByLabelText("Cerrar modal");
    expect(closeButton).toBeInTheDocument();
  });

  it("hides close button when showCloseButton is false", () => {
    render(
      <Modal {...defaultProps} showCloseButton={false}>
        <Modal.Body>Content</Modal.Body>
      </Modal>
    );

    expect(screen.queryByLabelText("Cerrar modal")).not.toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();

    render(
      <Modal {...defaultProps} onClose={handleClose}>
        <Modal.Body>Content</Modal.Body>
      </Modal>
    );

    const closeButton = screen.getByLabelText("Cerrar modal");
    await user.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when Escape key is pressed", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();

    render(
      <Modal {...defaultProps} onClose={handleClose}>
        <Modal.Body>Content</Modal.Body>
      </Modal>
    );

    await user.keyboard("{Escape}");

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when overlay is clicked", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();

    const { container } = render(
      <Modal {...defaultProps} onClose={handleClose}>
        <Modal.Body>Content</Modal.Body>
      </Modal>
    );

    const overlay = container.querySelector('[role="dialog"]');
    if (overlay) {
      await user.click(overlay);
      expect(handleClose).toHaveBeenCalledTimes(1);
    }
  });

  // Test de integración con Modal.Actions
  it("renders primary button via Modal.Actions", () => {
    render(
      <Modal {...defaultProps}>
        <Modal.Actions primaryText="Confirm" />
      </Modal>
    );

    expect(screen.getByText("Confirm")).toBeInTheDocument();
  });

  it("calls onPrimaryClick via Modal.Actions", async () => {
    const handlePrimaryAction = vi.fn();
    const user = userEvent.setup();

    render(
      <Modal {...defaultProps}>
        <Modal.Actions
          primaryText="Confirm"
          onPrimaryClick={handlePrimaryAction}
        />
      </Modal>
    );

    await user.click(screen.getByText("Confirm"));

    expect(handlePrimaryAction).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when primary button is clicked without onPrimaryClick via Modal.Actions", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();

    render(
      <Modal {...defaultProps} onClose={handleClose}>
        <Modal.Actions primaryText="OK" />
      </Modal>
    );

    await user.click(screen.getByText("OK"));

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("renders secondary button via Modal.Actions", () => {
    render(
      <Modal {...defaultProps}>
        <Modal.Actions primaryText="OK" secondaryText="Cancel" />
      </Modal>
    );

    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });

  it("applies correct size classes", () => {
    const { container, rerender } = render(
      <Modal {...defaultProps} size="sm">
        <Modal.Body>Content</Modal.Body>
      </Modal>
    );
    expect(container.querySelector(".max-w-md")).toBeInTheDocument();

    rerender(
      <Modal {...defaultProps} size="md">
        <Modal.Body>Content</Modal.Body>
      </Modal>
    );
    expect(container.querySelector(".max-w-lg")).toBeInTheDocument();
  });
});
