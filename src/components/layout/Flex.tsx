import { ILayoutProps } from "@/lib/types";
import React from "react";

export const Flex = ({ children, className = "" }: ILayoutProps) => {
  return <div className={`inline-flex ${className}`}>{children}</div>;
};
