import { cn } from "@/lib/utils";
import Input from "../atoms/Input";

export interface FormFieldProps
  extends React.ComponentProps<typeof Input> {
  label?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
}

/**
 * FormField Component (Molécula)
 * 
 * Combina un Label, Input y mensajes de error/ayuda en un solo componente.
 * Sigue el patrón de Atomic Design combinando átomos en una molécula funcional.
 * 
 * @example
 * <FormField 
 *   label="Correo electrónico" 
 *   type="email" 
 *   error="El correo no es válido"
 *   required
 * />
 */
const FormField = ({
  label,
  error,
  helperText,
  required,
  className,
  ...inputProps
}: FormFieldProps) => {
  return (
    <div className="space-y-1.5">
      {label && (
        <label
          htmlFor={inputProps.id}
          className={cn(
            "block text-sm font-medium text-gray-700",
            required && "after:content-['*'] after:ml-0.5 after:text-red-500"
          )}
        >
          {label}
        </label>
      )}

      <Input
        {...inputProps}
        className={cn(
          error && "border-red-500 focus:border-red-500 focus:ring-red-500",
          className
        )}
        aria-invalid={!!error}
        aria-describedby={
          error
            ? `${inputProps.id}-error`
            : helperText
            ? `${inputProps.id}-helper`
            : undefined
        }
      />

      {error && (
        <p
          id={`${inputProps.id}-error`}
          className="text-sm text-red-600 mt-1"
          role="alert"
        >
          {error}
        </p>
      )}

      {!error && helperText && (
        <p id={`${inputProps.id}-helper`} className="text-sm text-gray-500 mt-1">
          {helperText}
        </p>
      )}
    </div>
  );
};

export default FormField;
