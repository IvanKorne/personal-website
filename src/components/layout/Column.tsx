import React from "react";

type ColumnProps = {
  children: React.ReactNode;
  className?: string;
};

export const Column = ({ children, className = "" }: ColumnProps) => {
  return <div className={`flex flex-col ${className}`}>{children}</div>;
};
