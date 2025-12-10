/**
 * Utility function to merge CSS classes
 * Handles conditional classes and filters out falsy values
 * 
 * @example
 * cn("px-4 py-2", "bg-blue-500", isActive && "bg-blue-700")
 * cn("base-class", undefined, false, "another-class")
 */
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(" ");
}
