import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "accent";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  variant: ButtonVariant;
  size?: ButtonSize;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  fullWidth?: boolean;
}

const Button = ({
  children,
  onClick,
  variant,
  size = "md",
  type = "button",
  disabled = false,
  fullWidth = false,
  className,
}: ButtonProps) => {
  // Clases base que SIEMPRE se aplican
  const baseClasses =
    "font-semibold transition duration-150 ease-in-out focus:outline-none rounded-lg";

  // Clases según el TAMAÑO
  const sizeClasses = {
    sm: "py-1.5 px-3 text-sm",
    md: "py-2 px-4 text-sm",
    lg: "py-2.5 px-6 text-base",
  };

  // Clases según la VARIANTE (colores)
  const variantClasses = {
    primary:
      "gradient-primary text-white shadow-lg gradient-primary-hover active:shadow-xl",
    secondary:
      "bg-white text-gray-900 shadow-sm border border-surface-light hover:shadow-lg hover:border-surface-light hover:bg-gray-50",
    ghost:
      "bg-transparent text-gray-700 hover:text-primary-500 hover:bg-gray-50 border-none shadow-none",
    accent:
      "gradient-accent text-white shadow-lg gradient-accent-hover active:shadow-xl",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        fullWidth && "w-full",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
