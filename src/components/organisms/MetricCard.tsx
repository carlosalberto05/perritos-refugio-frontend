import { ElementType } from "react";

export interface MetricCardProps {
  IconComponent: ElementType;
  value: string | number;
  label: string;
  iconColorClass?: string;
  className?: string;
}

const MetricCard = ({
  IconComponent,
  value,
  label,
  iconColorClass = "text-white",
  className = "",
}: MetricCardProps) => {
  const iconClasses = `w-8 h-8 ${iconColorClass}`;
  return (
    <div
      className={`
        bg-white/10 backdrop-blur-md 
        border border-white/20 rounded-2xl p-6 shadow-xl 
        ${className}
      `}
    >
      <div className="flex flex-col items-center gap-2">
        <IconComponent className={iconClasses} />
        <p className="text-3xl text-white font-bold">{value}</p>
        <p className="text-sm text-white/80">{label}</p>
      </div>
    </div>
  );
};

export default MetricCard;
