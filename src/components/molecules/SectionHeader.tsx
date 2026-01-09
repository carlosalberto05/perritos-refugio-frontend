import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: "blue" | "pink";
  title: string;
  highlightedTitle: string;
  subtitle?: string;
  className?: string;
}

const SectionHeader = ({
  badge,
  badgeVariant = "blue",
  title,
  highlightedTitle,
  subtitle,
  className,
}: SectionHeaderProps) => {
  return (
    <div className={cn("text-center mb-16 space-y-4", className)}>
      {badge && (
        <div
          className={cn(
            "inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-2",
            badgeVariant === "blue"
              ? "bg-blue-50 text-blue-600"
              : "bg-pink-50 text-pink-600"
          )}
        >
          <span className="relative flex h-2 w-2">
            <span
              className={cn(
                "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                badgeVariant === "blue" ? "bg-blue-400" : "bg-pink-400"
              )}
            ></span>
            <span
              className={cn(
                "relative inline-flex rounded-full h-2 w-2",
                badgeVariant === "blue" ? "bg-blue-600" : "bg-pink-600"
              )}
            ></span>
          </span>
          {badge}
        </div>
      )}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
        {title} <br className="hidden sm:block" />
        <span
          className={cn(
            "text-transparent bg-clip-text",
            badgeVariant === "blue"
              ? "bg-gradient-to-r from-blue-600 to-cyan-500"
              : "gradient-pink"
          )}
        >
          {highlightedTitle}
        </span>
      </h2>
      {subtitle && (
        <p className="max-w-2xl mx-auto text-lg text-gray-600 font-medium italic">
          "{subtitle}"
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
