import React from "react";

export const Ring = ({ size }: { size: number }) => {
  return (
    <div
      className="absolute inset-0 border-2 top-1/2 left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2 border-emerald-300/5 shadow-emerald-300/5 shadow-[0_0_80px_inset]"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    ></div>
  );
};
