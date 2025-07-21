import { IOrbitObject } from "@/lib/types";
import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

export const Orbit = ({
  children,
  size,
  rotation,
  orbitDuration,
  spinDuration,
  shouldOrbit,
  shouldSpin,
}: PropsWithChildren<IOrbitObject>) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className={cn(shouldSpin && "animate-spin")}
        style={{ animationDuration: `${spinDuration}s` }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            transform: `rotate(${rotation}deg)`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div
            className={cn(shouldOrbit && "animate-spin")}
            style={{ animationDuration: `${orbitDuration}s` }}
          >
            <div
              className="inline-flex"
              style={{
                transform: `rotate(${rotation * -1}deg)`,
              }}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
