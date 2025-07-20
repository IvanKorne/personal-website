import { ICardHeader } from "@/lib/types";
import React from "react";
import { Column } from "../layout/Column";
import StarIcon from "@/assets/icons/star.svg";

import { Flex } from "../layout/Flex";

export const CardHeader = ({ title, description, className }: ICardHeader) => {
  return (
    <Column className={`p-6 ${className}`}>
      <Flex className="items-center gap-2">
        <StarIcon className="size-9 text-emerald-300" />
        <h3 className="font-serif text-3xl">{title}</h3>
      </Flex>
      <p className="mt-2 text-base text-white/60">{description}</p>
    </Column>
  );
};
