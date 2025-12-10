import { cn } from "@/lib/utils";

export type BadgeVariant = "success" | "warning" | "info" | "default";
export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

/**
 * Badge Component (Molécula)
 * 
 * Pequeño componente de etiqueta para mostrar estados, categorías o información destacada.
 * Se usa comúnmente para estados de adopción, categorías, contadores, etc.
 * 
 * @example
 * <Badge variant="success">En adopción</Badge>
 * <Badge variant="warning">Reservado</Badge>
 * <Badge variant="info">Adoptado</Badge>
 */
const Badge = ({
  children,
  variant = "default",
  size = "md",
  className,
}: BadgeProps) => {
  const baseClasses =
    "inline-flex items-center justify-center font-semibold rounded-full";

  const sizeClasses = {
    sm: "px-2 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    lg: "px-4 py-1.5 text-base",
  };

  const variantClasses = {
    success: "bg-green-100 text-green-800 border border-green-200",
    warning: "bg-yellow-100 text-yellow-800 border border-yellow-200",
    info: "bg-blue-100 text-blue-800 border border-blue-200",
    default: "bg-gray-100 text-gray-800 border border-gray-200",
  };

  return (
    <span
      className={cn(
        baseClasses,
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
