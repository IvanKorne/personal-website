import React from "react";

type RowProps = {
  children: React.ReactNode;
  className?: string;
};

export const Row = ({ children, className = "" }: RowProps) => {
  return <div className={`flex flex-row ${className}`}>{children}</div>;
};
