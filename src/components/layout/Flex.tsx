import React from "react";

type FlexProps = {
  children: React.ReactNode;
  className?: string;
};

export const Flex = ({ children, className = "" }: FlexProps) => {
  return <div className={`inline-flex ${className}`}>{children}</div>;
};
