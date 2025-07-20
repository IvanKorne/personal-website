import { ILayoutProps } from "@/lib/types";
import React from "react";

export const Row = ({ children, className = "" }: ILayoutProps) => {
  return <div className={`flex flex-row ${className}`}>{children}</div>;
};
