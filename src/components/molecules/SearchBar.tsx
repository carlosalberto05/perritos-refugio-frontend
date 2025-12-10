import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

export interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  className?: string;
  disabled?: boolean;
}

/**
 * SearchBar Component (Molécula)
 * 
 * Combina un Input de búsqueda con un botón de acción.
 * Incluye icono de búsqueda y manejo de eventos optimizado.
 * 
 * @example
 * <SearchBar 
 *   placeholder="Buscar perritos..." 
 *   onSearch={(value) => console.log("Searching:", value)}
 * />
 */
const SearchBar = ({
  placeholder = "Buscar...",
  value,
  onChange,
  onSearch,
  className,
  disabled = false,
}: SearchBarProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && value) {
      onSearch(value);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex items-center gap-2", className)}
    >
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <Input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="pl-10"
          disabled={disabled}
        />
      </div>
      <Button
        type="submit"
        variant="primary"
        size="md"
        disabled={disabled || !value}
      >
        Buscar
      </Button>
    </form>
  );
};

export default SearchBar;
