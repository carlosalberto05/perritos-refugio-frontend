import { useEffect, ReactNode } from "react";
import Button from "../atoms/Button";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  primaryButtonText?: string;
  onPrimaryAction?: () => void;
  secondaryButtonText?: string;
  onSecondaryAction?: () => void;
  size?: "sm" | "md" | "lg";
}

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  primaryButtonText,
  onPrimaryAction,
  secondaryButtonText,
  onSecondaryAction,
  size = "md",
}: ModalProps) => {
  useEffect(() => {
    if (!isOpen || !closeOnEscape) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeOnEscape, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = () => {
    if (closeOnOverlayClick) {
      onClose();
    }
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handlePrimaryClick = () => {
    if (onPrimaryAction) {
      onPrimaryAction();
    } else {
      onClose();
    }
  };

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 transition-opacity"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className={`bg-white rounded-2xl shadow-2xl w-full ${sizeClasses[size]} transform transition-all`}
        onClick={handleModalClick}
      >
        <div className="relative p-6 sm:p-8">
          {showCloseButton && (
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Cerrar modal"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}

          <h2
            id="modal-title"
            className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 pr-8"
          >
            {title}
          </h2>

          <div className="text-gray-700 text-sm sm:text-base leading-relaxed">
            {children}
          </div>

          {(primaryButtonText || secondaryButtonText) && (
            <div className="mt-6 flex flex-col-reverse sm:flex-row gap-3 sm:justify-end">
              {secondaryButtonText && (
                <Button
                  variant="secondary"
                  size="md"
                  onClick={onSecondaryAction || onClose}
                >
                  {secondaryButtonText}
                </Button>
              )}
              {primaryButtonText && (
                <Button
                  variant="primary"
                  size="md"
                  onClick={handlePrimaryClick}
                  fullWidth={!secondaryButtonText}
                >
                  {primaryButtonText}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
