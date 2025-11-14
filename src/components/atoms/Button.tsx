export type ButtonVariant = "primary" | "secondary" | "ghost";
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
  className = "",
}: ButtonProps) => {
  // Clases base que SIEMPRE se aplican
  const baseClasses =
    "font-semibold transition duration-150 ease-in-out " +
    "focus:outline-none rounded-lg cursor-pointer";

  // Clases según el TAMAÑO
  let sizeClasses = "";
  switch (size) {
    case "sm":
      sizeClasses = "py-1.5 px-3 text-sm";
      break;
    case "md":
      sizeClasses = "py-2 px-4 text-sm";
      break;
    case "lg":
      sizeClasses = "py-2.5 px-6 text-base";
      break;
  }

  // Clases según la VARIANTE (colores)
  let variantClasses = "";
  switch (variant) {
    case "primary":
      variantClasses =
        "bg-gradient-to-r from-[rgba(30,144,255,0.75)] to-[rgba(0,199,255,0.62)] text-white shadow-lg " +
        "hover:from-[rgba(30,144,255,0.98)] hover:to-[rgba(0,199,255,0.7)] active:shadow-xl";
      break;

    case "secondary":
      variantClasses =
        "bg-white text-gray-900 shadow-sm border border-primary-500 " +
        "hover:shadow-lg hover:border-primary-600 hover:bg-gray-50";
      break;
    case "ghost":
      variantClasses =
        "bg-transparent text-gray-700 hover:text-primary-500 " +
        "hover:bg-gray-50 border-none shadow-none";
      break;
  }

  // Clase para ancho completo
  const widthClass = fullWidth ? "w-full" : "";

  // Clase para disabled
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "";

  // COMBINAR TODAS LAS CLASES
  const finalClasses = [
    baseClasses,
    sizeClasses,
    variantClasses,
    widthClass,
    disabledClass,
    className, // Las clases extras que el usuario pase
  ]
    .filter(Boolean) // Elimina strings vacíos
    .join(" "); // Une todo con espacios

  return (
    <button
      type={type}
      onClick={onClick}
      className={finalClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
