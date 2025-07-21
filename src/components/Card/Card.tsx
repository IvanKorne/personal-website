import grainImage from "@/assets/images/grain.jpg";
import { cn } from "@/lib/utils";
import React, { PropsWithChildren, ComponentPropsWithoutRef } from "react";

export const Card = ({
  children,
  className,
  ...other
}: ComponentPropsWithoutRef<"div">) => {
  return (
    <div
      className={cn(
        "bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:outline-2 after:outline after:rounded-3xl after:outline-white/20 after:-outline-offset-2 after:content-[''] after:absolute after:inset-0 ",
        className
      )}
      {...other}
    >
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      {children}
    </div>
  );
};
