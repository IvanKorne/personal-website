import React from "react";

interface SpacerProps {
  height?: number;
  width?: number;
}

export const Spacer: React.FC<SpacerProps> = ({ height, width }) => {
  return (
    <div
      style={{
        height: height ? `${height}px` : undefined,
        width: width ? `${width}px` : undefined,
        display: "inline-block",
      }}
    />
  );
};
