import { ILayoutProps } from "@/lib/types";
import React from "react";

export const Grid = ({ children, className = "" }: ILayoutProps) => {
  return <div className={`grid ${className}`}>{children}</div>;
};
