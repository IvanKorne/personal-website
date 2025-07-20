import { ILayoutProps } from "@/lib/types";
import React from "react";

export const Column = ({ children, className = "" }: ILayoutProps) => {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
};
