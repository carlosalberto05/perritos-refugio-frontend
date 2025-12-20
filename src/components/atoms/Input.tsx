import { forwardRef, InputHTMLAttributes, ReactNode } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      fullWidth = false,
      className = "",
      startIcon,
      endIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    // Contenedor principal
    const containerClasses = fullWidth ? "w-full" : "w-auto";

    // Clases del input
    const inputClasses = [
      // Base
      "block w-full rounded-lg border bg-white text-gray-900 placeholder-gray-400",
      "py-2.5 text-sm", // Altura similar al botón
      "transition duration-150 ease-in-out",
      "focus:outline-none focus:ring-2 focus:ring-opacity-50",

      // Estados (Error vs Normal)
      error
        ? "border-red-500 focus:border-red-500 focus:ring-red-200"
        : "border-gray-300 focus:border-blue-400 focus:ring-blue-100", // Azul suave inspirado en el botón

      // Padding para iconos
      startIcon ? "pl-10" : "px-3",
      endIcon ? "pr-10" : "px-3",

      // Disabled
      disabled ? "opacity-60 cursor-not-allowed bg-gray-50" : "",

      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className={`flex flex-col gap-1.5 ${containerClasses}`}>
        {label && (
          <label className="text-sm font-medium text-gray-700 ml-1">
            {label}
          </label>
        )}

        <div className="relative">
          {startIcon && (
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
              {startIcon}
            </div>
          )}

          <input
            ref={ref}
            disabled={disabled}
            className={inputClasses}
            {...props}
          />

          {endIcon && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
              {endIcon}
            </div>
          )}
        </div>

        {error && <span className="text-xs text-red-500 ml-1">{error}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
