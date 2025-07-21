import React from "react";
import { TechIcon } from "./TechIcon";
import { TOOLS } from "@/lib/consts";
import { Row } from "@/components/layout/Row";
import { cn } from "@/lib/utils";
import { Flex } from "@/components/layout/Flex";

export const ToolkitItems = ({
  className,
  innerClassName,
}: {
  className?: string;
  innerClassName?: string;
}) => {
  return (
    <Row className={cn("mask-fade-x", className)}>
      <Row className={cn("flex-none py-1 pr-6 ", innerClassName)}>
        {[...new Array(2)].fill(0).map((_, id) => (
          <div key={id} className={cn("flex gap-4")}>
            {TOOLS.map((tool) => (
              <Flex
                className="items-center gap-4 px-3 py-2 outline outline-2 outline-white/10 rounded-lg"
                key={tool.title}
              >
                <TechIcon component={tool.icon} />
                <span className="font-semibold">{tool.title}</span>
              </Flex>
            ))}
          </div>
        ))}
      </Row>
    </Row>
  );
};
