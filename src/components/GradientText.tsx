import React from "react";
import { cn } from "@/lib/utils";
import { IGradientText } from "@/lib/types";

export const GradientText = ({
  children,
  className,
  as: Component = "span",
}: IGradientText) => {
  return (
    <Component
      className={cn(
        "bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent font-bold",
        className
      )}
    >
      {children}
    </Component>
  );
};
