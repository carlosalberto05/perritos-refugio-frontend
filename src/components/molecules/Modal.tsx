import { useEffect, ReactNode, createContext, useContext } from "react";
import { XIcon } from "lucide-react";
import Button from "../atoms/Button";
import { cn } from "@/lib/utils";

/**
 * Context para compartir estado del Modal entre sub-componentes
 */
interface ModalContextType {
  isOpen: boolean;
  onClose: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("Modal sub-components deben usarse dentro de <Modal>");
  }
  return context;
};

/**
 * Props del Modal principal
 */
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  size?: "sm" | "md" | "lg";
}

/**
 * Modal Principal - Organismo composable
 */
const Modal = ({
  isOpen,
  onClose,
  children,
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
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

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-lg",
    lg: "max-w-2xl",
  };

  return (
    <ModalContext.Provider value={{ isOpen, onClose }}>
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
          {showCloseButton && (
            <button
              onClick={onClose}
              className={cn(
                "absolute top-4 right-4 z-10",
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
          {children}
        </div>
      </div>
    </ModalContext.Provider>
  );
};

/**
 * Modal.Header - Sub-componente para el encabezado
 */
interface ModalHeaderProps {
  title: string;
  description?: string;
}

const ModalHeader = ({ title, description }: ModalHeaderProps) => {
  return (
    <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-4 border-b border-gray-200">
      <h2
        id="modal-title"
        className="text-xl sm:text-2xl font-bold text-gray-900 mb-2"
      >
        {title}
      </h2>
      {description && <p className="text-sm text-gray-600">{description}</p>}
    </div>
  );
};

/**
 * Modal.Body - Sub-componente para el contenido principal
 */
interface ModalBodyProps {
  children: ReactNode;
  className?: string;
}

const ModalBody = ({ children, className }: ModalBodyProps) => {
  return (
    <div
      className={cn(
        "px-6 sm:px-8 py-6 text-gray-700 text-sm sm:text-base leading-relaxed",
        className
      )}
    >
      {children}
    </div>
  );
};

/**
 * Modal.Footer - Sub-componente para acciones
 */
interface ModalFooterProps {
  children: ReactNode;
  className?: string;
}

const ModalFooter = ({ children, className }: ModalFooterProps) => {
  return (
    <div
      className={cn(
        "px-6 sm:px-8 pb-6 sm:pb-8 pt-4 border-t border-gray-200",
        "flex flex-col-reverse sm:flex-row gap-3 sm:justify-end",
        className
      )}
    >
      {children}
    </div>
  );
};

/**
 * Modal.Actions - Sub-componente convenience para botones comunes
 */
interface ModalActionsProps {
  primaryText: string;
  onPrimaryClick?: () => void;
  secondaryText?: string;
  onSecondaryClick?: () => void;
}

const ModalActions = ({
  primaryText,
  onPrimaryClick,
  secondaryText,
  onSecondaryClick,
}: ModalActionsProps) => {
  const { onClose } = useModalContext();

  const handlePrimaryClick = () => {
    if (onPrimaryClick) {
      onPrimaryClick();
    } else {
      onClose();
    }
  };

  return (
    <Modal.Footer>
      {secondaryText && (
        <Button
          variant="secondary"
          size="md"
          onClick={onSecondaryClick || onClose}
        >
          {secondaryText}
        </Button>
      )}
      <Button variant="primary" size="md" onClick={handlePrimaryClick}>
        {primaryText}
      </Button>
    </Modal.Footer>
  );
};

// Attach sub-components to Modal
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Actions = ModalActions;

export default Modal;
