import * as React from "react";
import { cn } from "@/lib/utils";

export interface BaseCardProps extends React.ComponentProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

const BaseCard = ({ children, className, ...props }: BaseCardProps) => {
  return (
    <div className={cn("glass-card flex flex-col", className)} {...props}>
      {children}
    </div>
  );
};

export default BaseCard;
