import { useEffect, ReactNode } from "react";
import { XIcon } from "lucide-react";
import Button from "../atoms/Button";
import { cn } from "@/lib/utils";

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
  // Handle ESC key to close modal
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

  // Prevent body scroll when modal is open
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
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center p-4",
        "bg-black/50 backdrop-blur-sm",
        "transition-opacity duration-200",
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className={cn(
          "glass-card w-full transform transition-all duration-200",
          "shadow-2xl",
          sizeClasses[size],
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        )}
        onClick={handleModalClick}
      >
        <div className="relative p-6 sm:p-8">
          {showCloseButton && (
            <button
              onClick={onClose}
              className={cn(
                "absolute top-4 right-4",
                "text-gray-400 hover:text-gray-600",
                "transition-colors duration-200",
                "focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                "rounded-sm p-1"
              )}
              aria-label="Cerrar modal"
            >
              <XIcon className="w-5 h-5" />
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
